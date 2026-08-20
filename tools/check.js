#!/usr/bin/env node
//
// 문장·발음 데이터 검사기
//
//   node tools/check.js
//   node tools/check.js --cmu tools/cmudict.dict   (선택: CMU 발음사전과 대조)
//
// 문장을 더하거나 발음을 손본 뒤에는 이걸 돌리고 커밋합니다.
// 오류가 하나라도 있으면 종료 코드 1로 끝나므로 자동화에도 걸 수 있습니다.
//
// 결과는 두 갈래로 나옵니다.
//   오류  반드시 고쳐야 하는 것. 앱이 잘못 동작합니다.
//   확인  사람이 판단할 것. 일부러 그렇게 둔 경우도 있어 0건이 목표는 아닙니다.
//
// 채점과 발음 변환은 index.html에 있는 함수를 그대로 떼어 와서 돌립니다.
// 검사기가 따로 구현하면 진짜 앱과 어긋나기 때문입니다.

"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const read = (name) => fs.readFileSync(path.join(ROOT, name), "utf8");

const errors = [];
const notes = [];
const fail = (msg) => errors.push(msg);
const note = (msg) => notes.push(msg);

/* ── index.html에서 앱의 함수를 떼어 옵니다 ───────────────── */

// from이 나오는 곳부터, anchor 뒤 처음 만나는 줄머리 '}'까지를 잘라냅니다.
function slice(src, from, anchor) {
  const start = src.indexOf(from);
  if (start < 0) throw new Error("index.html에서 '" + from + "'을 못 찾았습니다");
  const at = anchor ? src.indexOf(anchor, start) : start;
  if (at < 0) throw new Error("index.html에서 '" + anchor + "'을 못 찾았습니다");
  const end = src.indexOf("\n}", at);
  if (end < 0) throw new Error("'" + from + "'의 끝을 못 찾았습니다");
  return src.slice(start, end + 2);
}

// 상수는 블록이 아니라 한 줄이므로 따로 뽑습니다.
function constant(src, name) {
  const m = src.match(new RegExp("const\\s+" + name + "\\s*=\\s*([^;]+);"));
  if (!m) throw new Error("index.html에서 " + name + "을 못 찾았습니다");
  return m[1].trim();
}

const html = read("index.html");
const SENTENCES = eval(read("sentences.js") + ";SENTENCES");
const WORDS = eval(read("words.js").replace(/^\/\/.*$/gm, "") + ";WORDS");

const isCorrect = new Function(slice(html, "function isCorrect") + ";return isCorrect;")();

const ipaToHangul = new Function(
  slice(html, "const ONSET =", "return { text, start, end };") + ";return ipaToHangul;")();

const readPron = new Function(slice(html, "function readPron") + ";return readPron;")();

const blankWidth = new Function(
  "const BLANK_MIN_CH = " + constant(html, "BLANK_MIN_CH") + ";" +
  "const BLANK_SLACK_CH = " + constant(html, "BLANK_SLACK_CH") + ";" +
  "const BLANK_MAX_CH = " + constant(html, "BLANK_MAX_CH") + ";" +
  slice(html, "function blankWidth") + ";return blankWidth;")();

const CATEGORY_NAMES = new Function(
  html.slice(html.indexOf("const CATEGORY_NAMES"),
             html.indexOf("};", html.indexOf("const CATEGORY_NAMES")) + 2) +
  ";return CATEGORY_NAMES;")();

const BLANK = "___";

// 화면에 실제로 뜨는 한글 발음. pron이 있으면 그것이 우선입니다.
const hangul = (word, entry) =>
  entry.pron ? readPron(entry.pron) : ipaToHangul(entry.ipa, word);

const wordsOf = (s) =>
  (s.en.replace(BLANK, " ") + " " + s.accept.join(" "))
    .toLowerCase().match(/[a-z]+(?:['-][a-z]+)*/g) || [];

const push = (map, key, value) => {
  if (!map.has(key)) map.set(key, []);
  map.get(key).push(value);
};

/* ── ① 문장 데이터 ────────────────────────────────────── */

const seenId = new Set();
for (const s of SENTENCES) {
  const at = "[" + s.id + "] ";
  if (seenId.has(s.id)) fail(at + "id가 겹칩니다");
  seenId.add(s.id);

  for (const key of ["id", "category", "ko", "en", "accept", "hint", "note"]) {
    const v = s[key];
    if (!v || (Array.isArray(v) && v.length === 0)) fail(at + key + "가 비었습니다");
  }
  if (!CATEGORY_NAMES[s.category]) {
    fail(at + "index.html의 CATEGORY_NAMES에 없는 카테고리입니다: " + s.category);
  }

  const blanks = (s.en.match(/___/g) || []).length;
  if (blanks !== 1) fail(at + "빈칸이 " + blanks + "개입니다. 문장당 하나여야 합니다");

  const width = parseInt(blankWidth(s), 10);
  for (const answer of s.accept) {
    const filled = s.en.replace(BLANK, answer);
    if (/\s{2,}/.test(filled)) fail(at + "정답을 넣으면 공백이 겹칩니다: " + filled);
    if (/\s[.,?!]/.test(filled)) fail(at + "정답을 넣으면 구두점 앞에 공백이 생깁니다: " + filled);

    // 힌트가 정답을 그대로 알려주면 문제가 성립하지 않습니다
    const escaped = answer.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    if (new RegExp("\\b" + escaped + "\\b", "i").test(s.hint)) {
      fail(at + "힌트에 정답이 그대로 들어 있습니다: " + answer);
    }
    // 빈칸 폭보다 긴 정답은 입력칸에 다 안 들어갑니다
    if (answer.trim().length > width) {
      fail(at + "정답이 빈칸 폭(" + width + "칸)보다 깁니다: " + answer);
    }
  }
}

// 카테고리 안에서 정답이 겹치면 두 번째 문항부터는 문제가 되지 않습니다
const byAccept = new Map();
const byEn = new Map();
const byKo = new Map();
for (const s of SENTENCES) {
  push(byAccept, s.category + "|" + s.accept.map((a) => a.toLowerCase()).sort().join(","), s.id);
  push(byEn, s.category + "|" + s.en.toLowerCase().replace(/\s+/g, " ").trim(), s.id);
  push(byKo, s.ko.replace(/\s/g, ""), s.id);
}
for (const ids of byAccept.values()) {
  if (ids.length > 1) fail("한 카테고리 안에서 정답이 겹칩니다: " + ids.join(", "));
}
for (const ids of byEn.values()) {
  if (ids.length > 1) fail("한 카테고리 안에서 영어 문장이 겹칩니다: " + ids.join(", "));
}
for (const ids of byKo.values()) {
  if (ids.length > 1) fail("한국어가 완전히 같습니다: " + ids.join(", "));
}

// 한국어가 거의 같으면 학습자가 헷갈립니다.
// 어미만 같은 것(~주시겠어요?)까지 잡으면 쓸모가 없으므로,
// 글자를 몇 개만 고치면 같아지는 쌍만 걸러냅니다.
function editDistance(a, b, limit) {
  if (Math.abs(a.length - b.length) > limit) return limit + 1;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    let best = i;
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1,
                        prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      if (cur[j] < best) best = cur[j];
    }
    if (best > limit) return limit + 1;
    prev = cur;
  }
  return prev[b.length];
}

const NEAR = 2;   // 글자 두 개 이내로 달라지면 헷갈릴 수 있다고 봅니다
const kos = SENTENCES.map((s) => ({
  id: s.id, ko: s.ko, key: s.ko.replace(/[\s?.!,]/g, ""), acc: s.accept
}));
for (let i = 0; i < kos.length; i++) {
  for (let j = i + 1; j < kos.length; j++) {
    const a = kos[i];
    const b = kos[j];
    if (a.key.length < 5) continue;
    if (Math.abs(a.key.length - b.key.length) > NEAR) continue;
    if (a.acc.some((x) => b.acc.includes(x))) continue;   // 정답이 겹치면 아래에서 이미 잡힙니다
    if (editDistance(a.key, b.key, NEAR) > NEAR) continue;
    note("한국어가 거의 같습니다(정답은 다름): " + a.id + " / " + b.id +
         "  「" + a.ko + "」 vs 「" + b.ko + "」");
  }
}

/* ── ② 채점 ─────────────────────────────────────────── */

let graded = 0;
for (const s of SENTENCES) {
  for (const answer of s.accept) {
    // 정답 그대로와, 사용자가 흔히 치는 변형까지 모두 통과해야 합니다
    const variants = [answer, answer.toUpperCase(), "  " + answer + " ",
                      answer.replace(/'/g, "’")];
    for (const typed of variants) {
      graded += 1;
      if (!isCorrect(typed, s.accept)) {
        fail("[" + s.id + "] 정답인데 오답 처리됩니다: 「" + typed + "」");
      }
    }
  }
}

/* ── ③ 발음 데이터 ───────────────────────────────────── */

const used = new Set();
SENTENCES.forEach((s) => wordsOf(s).forEach((w) => used.add(w)));

for (const w of used) {
  const e = WORDS[w];
  if (!e || !e.ipa) fail("문장에 쓰이는데 words.js에 발음이 없습니다: " + w);
}

// 2음절 이상인지 세기 위한 모음 목록. 긴 것부터 맞춰야 이중모음이 하나로 셉니다.
const NUCLEI = ["eɪ", "aɪ", "aʊ", "ɔɪ", "oʊ", "əʊ", "ɪə", "eə", "ʊə", "ɛə",
  "iː", "ɑː", "ɜː", "ɔː", "uː", "ʉː",
  "ɪ", "ɛ", "æ", "ɑ", "ɒ", "ʌ", "ə", "ɜ", "ɔ", "ʊ", "ɝ", "ɚ", "ɐ",
  "i", "e", "a", "o", "u"];

function syllables(ipa) {
  const t = ipa.replace(/[ˈˌ.()\[\]\/ -]/g, "").replace(/[̀-ͯ]/g, "");
  let n = 0;
  let i = 0;
  while (i < t.length) {
    const hit = NUCLEI.find((v) => t.startsWith(v, i));
    if (hit) { n += 1; i += hit.length; } else { i += 1; }
  }
  return n;
}

for (const [w, e] of Object.entries(WORDS)) {
  if (!e.ipa) { fail("words.js 항목에 ipa가 없습니다: " + w); continue; }

  const shown = hangul(w, e);
  if (!shown.text.replace(/\s/g, "").length) {
    fail("한글 발음이 빈 채로 나옵니다: " + w + " (" + e.ipa + ")");
  }
  if (shown.start >= 0 && (shown.start >= shown.end || shown.end > shown.text.length)) {
    fail("강세 표시 범위가 글자 수를 벗어납니다: " + w);
  }
  if (e.pron) {
    const open = (e.pron.match(/\[/g) || []).length;
    const close = (e.pron.match(/\]/g) || []).length;
    if (open !== close) fail("pron의 대괄호 짝이 안 맞습니다: " + w + " " + e.pron);
    if (open > 1) fail("pron에 대괄호가 두 번 넘게 있습니다: " + w + " " + e.pron);
  }
  if (syllables(e.ipa) >= 2 && !/[ˈˌ]/.test(e.ipa)) {
    note("2음절 이상인데 강세 기호가 없습니다: " + w + " (" + e.ipa + ")");
  }

  // 철자와 발음이 어긋나 보이는 것.
  // within이 wɪˈθɪn(무성)으로 들어와 '위씬'이 되던 일이 있었습니다.
  const spelled = w.toLowerCase();
  if (/[θð]/.test(e.ipa) && !/th/.test(spelled)) {
    note("철자에 th가 없는데 th 소리가 있습니다: " + w + " (" + e.ipa + ")");
  }
  if (/th/.test(spelled) && !/[θðt]/.test(e.ipa)) {
    note("철자에 th가 있는데 th 소리가 없습니다: " + w + " (" + e.ipa + ")");
  }
}

const unused = Object.keys(WORDS).filter((w) => !used.has(w));
if (unused.length) {
  note("문장에 쓰이지 않는 낱말 " + unused.length + "개: " + unused.slice(0, 20).join(" "));
}

/* ── ④ 파일 위생 ─────────────────────────────────────── */

// 줄바꿈은 '섞였는지'만 봅니다.
// 윈도우에서 git이 체크아웃할 때 파일 전체를 CRLF로 바꿔 놓는데, 그건
// 정상이라 문제 삼을 것이 없습니다. 정작 위험한 것은 한 파일 안에 두 가지가
// 섞이는 경우입니다. 다른 줄바꿈을 쓰는 내용을 이어 붙일 때 이렇게 됩니다.
for (const name of ["index.html", "sentences.js", "words.js", "sw.js", "manifest.json"]) {
  const raw = fs.readFileSync(path.join(ROOT, name), "latin1");
  const crlf = (raw.match(/\r\n/g) || []).length;
  const lfOnly = (raw.match(/(^|[^\r])\n/g) || []).length;
  if (crlf > 0 && lfOnly > 0) {
    fail(name + "에 줄바꿈이 섞였습니다 (LF " + lfOnly + "줄, CRLF " + crlf + "줄). 한 가지로 맞춰주세요");
  }
}

// 파일을 고쳤으면 캐시 이름을 올려야 이미 설치한 기기가 새 파일을 받습니다
const sw = read("sw.js");
const cache = (sw.match(/CACHE_NAME\s*=\s*"([^"]+)"/) || [])[1];
if (!cache) fail("sw.js에서 CACHE_NAME을 찾지 못했습니다");
for (const asset of ["./index.html", "./sentences.js", "./words.js"]) {
  if (!sw.includes("\"" + asset + "\"")) fail("sw.js의 캐시 목록에 " + asset + "이 없습니다");
}

/* ── ⑤ CMU 발음사전 대조 (선택) ───────────────────────── */

const cmuAt = process.argv.indexOf("--cmu");
if (cmuAt > 0 && process.argv[cmuAt + 1]) {
  const dict = Object.create(null);
  fs.readFileSync(process.argv[cmuAt + 1], "utf8").split("\n").forEach((line) => {
    const m = line.match(/^([^ (]+)(\(\d\))? (.+)$/);
    if (!m) return;
    if (!dict[m[1]]) dict[m[1]] = [];
    dict[m[1]].push(m[3].split(" "));
  });

  // r은 영국식에서 빠지므로 양쪽 모두 지우고 견줍니다
  const ARPA = { P: "p", B: "b", T: "t", D: "d", K: "k", G: "ɡ", F: "f", V: "v",
    TH: "θ", DH: "ð", S: "s", Z: "z", SH: "ʃ", ZH: "ʒ", M: "m", N: "n", NG: "ŋ",
    L: "l", HH: "h", W: "w", Y: "j", CH: "C", JH: "J" };
  const mine = (ipa) => (ipa.replace(/[ˈˌ.()\[\]\/ -]/g, "").replace(/[̀-ͯ]/g, "")
    .replace(/t͡ʃ|tʃ/g, "C").replace(/d͡ʒ|dʒ/g, "J").replace(/[ɹrɾ]/g, "")
    .match(/[pbtdkɡgfvθðszʃʒmnŋlhwjCJ]/g) || []).join("");
  const cmu = (row) => row.map((x) => x.replace(/\d/g, ""))
    .map((x) => ARPA[x]).filter((x) => x !== undefined).join("");

  let checked = 0;
  let diff = 0;
  for (const [w, e] of Object.entries(WORDS)) {
    const rows = dict[w.toLowerCase()];
    if (!rows) continue;
    checked += 1;
    if (rows.some((r) => cmu(r) === mine(e.ipa))) continue;
    diff += 1;
    note("CMU와 자음이 다릅니다: " + w + "  우리 " + e.ipa + " → " + mine(e.ipa) +
         " / CMU " + cmu(rows[0]));
  }
  console.log("CMU 대조: " + checked + "단어 중 " + diff + "건이 다릅니다");
  console.log("  (영국식·미국식 차이가 섞여 있으니 하나씩 봐야 합니다)");
} else {
  console.log("CMU 대조는 건너뛰었습니다. 돌리려면:");
  console.log("  curl -sLo tools/cmudict.dict \\");
  console.log("    https://raw.githubusercontent.com/cmusphinx/cmudict/master/cmudict.dict");
  console.log("  node tools/check.js --cmu tools/cmudict.dict");
}

/* ── 결과 ───────────────────────────────────────────── */

const byCategory = {};
SENTENCES.forEach((s) => { byCategory[s.category] = (byCategory[s.category] || 0) + 1; });

console.log("");
console.log("문장   " + SENTENCES.length + "개 " + JSON.stringify(byCategory));
console.log("정답   " + SENTENCES.reduce((n, s) => n + s.accept.length, 0) + "개 후보 / " +
            graded + "건 채점(대소문자·앞뒤공백·굽은따옴표 변형 포함)");
console.log("낱말   " + Object.keys(WORDS).length + "개 (뜻 " +
            Object.values(WORDS).filter((e) => e.ko).length + "개, 한글발음 직접지정 " +
            Object.values(WORDS).filter((e) => e.pron).length + "개)");
console.log("캐시   " + cache);

if (notes.length) {
  console.log("\n확인할 것 " + notes.length + "건 — 일부러 그렇게 둔 것도 있습니다");
  notes.forEach((m) => console.log("  " + m));
}

if (errors.length) {
  console.log("\n오류 " + errors.length + "건 — 고쳐야 합니다");
  errors.forEach((m) => console.log("  " + m));
  process.exit(1);
}

console.log("\n오류 없음");
