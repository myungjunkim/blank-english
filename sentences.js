// 영어회화 빈칸 채우기 — 문장 데이터
//
// 이 파일에만 문장을 추가하면 됩니다. index.html은 수정하지 않습니다.
// 카테고리 선택 화면은 이 배열에서 카테고리를 자동으로 도출합니다.
//
// 필드 설명
//   id       고유 식별자. "<category>-<번호>" 형식
//   category 카테고리 값. index.html의 CATEGORY_NAMES에 정의된 키
//   ko       자연스러운 한국어 뜻
//   en       영어 문장. 빈칸은 밑줄 3개(___)로 표시하며 문장당 반드시 1개
//   accept   정답으로 인정할 문자열 배열. 판정 시 소문자·앞뒤공백 무시
//   hint     문제를 푸는 동안 보여줄 한 줄 힌트. 정답의 번역어를 그대로 주지 말고
//            의미 범주·쓰임새·형태의 방향만 제시합니다. 없으면 생략 가능
//   note     정답 공개 후 보여줄 한 줄 설명. 없으면 빈 문자열

const SENTENCES = [
  {
    id: "travel-out-01",
    category: "travel-out",
    ko: "역으로 가는 길 좀 알려주시겠어요?",
    en: "Excuse me, could you ___ me the way to the station?",
    accept: ["tell", "show"],
    hint: "정보를 상대에게 넘겨주는 동작",
    note: "tell이 가장 자연스럽습니다. show me the way도 쓰지만 직접 데려다주는 느낌이 강합니다."
  },
  {
    id: "travel-out-02",
    category: "travel-out",
    ko: "저기요, 이 자리 누가 앉았나요?",
    en: "Excuse me, is this seat ___?",
    accept: ["taken"],
    hint: "앉아 있는지가 아니라, 주인이 정해졌는지를 묻습니다",
    note: "빈자리를 물을 때 영어는 taken(누가 차지했는지)으로 묻습니다. empty는 어색합니다."
  },
  {
    id: "travel-out-03",
    category: "travel-out",
    ko: "계산서 좀 주시겠어요?",
    en: "Could we get the ___, please?",
    accept: ["check", "bill"],
    hint: "미국과 영국이 서로 다른 단어를 씁니다",
    note: "미국에서는 check, 영국·호주에서는 bill을 주로 씁니다."
  },
  {
    id: "travel-out-04",
    category: "travel-out",
    ko: "이거 입어봐도 되나요?",
    en: "Can I ___ this on?",
    accept: ["try"],
    hint: "on과 짝을 이루는 동사. 사기 전에 시험해 보는 것",
    note: "try on이 한 덩어리입니다. wear는 이미 입고 있는 상태를 뜻해서 쓸 수 없습니다."
  },
  {
    id: "travel-out-05",
    category: "travel-out",
    ko: "공항까지 얼마나 걸려요?",
    en: "How long does it ___ to get to the airport?",
    accept: ["take"],
    hint: "시간이 얼마나 드는지 말할 때 쓰는 동사",
    note: "소요 시간에는 take를 씁니다. spend는 사람이 주어일 때만 쓸 수 있습니다."
  },
  {
    id: "travel-out-06",
    category: "travel-out",
    ko: "메뉴판 좀 볼 수 있을까요?",
    en: "Could we see the ___, please?",
    accept: ["menu"],
    hint: "우리말에서도 외래어로 그대로 씁니다",
    note: "menu는 '메뉴판'이라는 종이를 뜻합니다. 요리 자체는 dish라고 합니다."
  },
  {
    id: "travel-out-07",
    category: "travel-out",
    ko: "저분이 드시는 걸로 같이 주세요.",
    en: "I'll ___ what he's having.",
    accept: ["have", "get"],
    hint: "음식을 먹는다는 뜻으로도 쓰는 기본 동사",
    note: "주문할 때 I'll have ~가 가장 흔한 표현입니다. I want은 무례하게 들립니다."
  },
  {
    id: "travel-out-08",
    category: "travel-out",
    ko: "포장해 주세요.",
    en: "Can I get this to ___?",
    accept: ["go"],
    hint: "매장에서 먹지 않고 밖으로 나간다는 방향",
    note: "미국에서는 to go, 영국·호주에서는 takeaway를 씁니다."
  },
  {
    id: "travel-out-09",
    category: "travel-out",
    ko: "카드로 계산할게요.",
    en: "I'll ___ by card.",
    accept: ["pay"],
    hint: "돈을 낸다는 뜻의 가장 기본적인 동사",
    note: "수단 앞에는 by를 씁니다. pay with a card도 가능합니다."
  },
  {
    id: "travel-out-10",
    category: "travel-out",
    ko: "따로 계산할 수 있을까요?",
    en: "Can we pay ___?",
    accept: ["separately"],
    hint: "'분리된'이라는 형용사에서 나온 부사",
    note: "각자내기는 separately 또는 split the bill이라고 합니다."
  },
  {
    id: "travel-out-11",
    category: "travel-out",
    ko: "일곱 시로 예약했는데요.",
    en: "We have a table ___ for seven.",
    accept: ["booked", "reserved"],
    hint: "호텔·항공권 예약에도 똑같이 쓰는 단어",
    note: "식당 예약은 book a table 또는 reserve a table입니다."
  },
  {
    id: "travel-out-12",
    category: "travel-out",
    ko: "좀 더 저렴한 건 없나요?",
    en: "Do you have anything ___?",
    accept: ["cheaper"],
    hint: "값이 싼 쪽을 뜻하는 형용사의 비교급",
    note: "-thing으로 끝나는 대명사는 형용사가 뒤에 옵니다."
  },
  {
    id: "travel-out-13",
    category: "travel-out",
    ko: "그냥 구경 중이에요.",
    en: "I'm just ___, thanks.",
    accept: ["looking", "browsing"],
    hint: "살 생각 없이 눈으로만 하는 동작",
    note: "점원이 다가왔을 때 쓰는 정해진 표현입니다."
  },
  {
    id: "travel-out-14",
    category: "travel-out",
    ko: "이거 얼마예요?",
    en: "How ___ is this?",
    accept: ["much"],
    hint: "가격을 '얼마나 많이'로 바꿔 묻습니다",
    note: "가격은 셀 수 없는 개념이라 much를 씁니다."
  },
  {
    id: "travel-out-15",
    category: "travel-out",
    ko: "이거 다른 사이즈 있나요?",
    en: "Do you have this in a different ___?",
    accept: ["size"],
    hint: "우리말에서도 외래어로 그대로 씁니다",
    note: "in a different size처럼 in을 붙여 '~로 된'을 표현합니다."
  },
  {
    id: "travel-out-16",
    category: "travel-out",
    ko: "환불 받을 수 있나요?",
    en: "Can I get a ___?",
    accept: ["refund"],
    hint: "동사와 명사가 같은 형태인 단어",
    note: "교환은 exchange, 환불은 refund입니다."
  },
  {
    id: "travel-out-17",
    category: "travel-out",
    ko: "몇 번 버스가 시청에 가나요?",
    en: "Which bus ___ to city hall?",
    accept: ["goes"],
    hint: "주어가 버스 한 대라서 동사에 -s가 붙습니다",
    note: "노선이 '간다'는 뜻이라 버스를 주어로 goes를 씁니다."
  },
  {
    id: "travel-out-18",
    category: "travel-out",
    ko: "여기서 얼마나 먼가요?",
    en: "How ___ is it from here?",
    accept: ["far"],
    hint: "near의 반대말",
    note: "거리는 far, 시간은 long으로 묻습니다."
  },
  {
    id: "travel-out-19",
    category: "travel-out",
    ko: "다음 정류장에서 내리세요.",
    en: "You should get ___ at the next stop.",
    accept: ["off"],
    hint: "get과 짝을 이루며, on의 반대",
    note: "버스·지하철은 get on/off, 승용차는 get in/out입니다."
  },

  {
    id: "daily-greeting-01",
    category: "daily-greeting",
    ko: "그동안 어떻게 지냈어?",
    en: "How ___ you been?",
    accept: ["have"],
    hint: "been과 짝을 이뤄 완료 시제를 만드는 조동사",
    note: "과거부터 지금까지의 안부라서 현재완료를 씁니다."
  },
  {
    id: "daily-greeting-02",
    category: "daily-greeting",
    ko: "오랜만이야.",
    en: "Long time no ___.",
    accept: ["see"],
    hint: "'못 봤다'를 눈으로 하는 동작 그대로 씁니다",
    note: "문법에 어긋나지만 굳어진 관용 표현입니다."
  },
  {
    id: "daily-greeting-03",
    category: "daily-greeting",
    ko: "잘 지내?",
    en: "How's it ___?",
    accept: ["going"],
    hint: "일이 어떻게 흘러가는 중인지를 묻습니다",
    note: "How's it going?은 가벼운 인사로, 진짜 대답을 요구하지 않습니다."
  },
  {
    id: "daily-greeting-04",
    category: "daily-greeting",
    ko: "만나서 반갑습니다.",
    en: "Nice to ___ you.",
    accept: ["meet"],
    hint: "처음 마주하는 것. 이미 아는 사이에는 쓰지 않습니다",
    note: "처음 만날 때는 meet, 이미 아는 사이면 see를 씁니다."
  },
  {
    id: "daily-greeting-05",
    category: "daily-greeting",
    ko: "성함을 여쭤봐도 될까요?",
    en: "May I ___ your name?",
    accept: ["have", "ask"],
    hint: "상대에게서 정보를 받아오는 아주 기본적인 동사",
    note: "May I have your name?이 가장 공손합니다."
  },
  {
    id: "daily-greeting-06",
    category: "daily-greeting",
    ko: "무슨 일 하세요?",
    en: "What do you ___ for a living?",
    accept: ["do"],
    hint: "직업을 '무엇을 하느냐'로 바꿔 묻습니다",
    note: "직업을 묻는 정중한 표현입니다. What's your job?은 다소 직설적입니다."
  },
  {
    id: "daily-greeting-07",
    category: "daily-greeting",
    ko: "주말 어떻게 보냈어요?",
    en: "How was your ___?",
    accept: ["weekend"],
    hint: "월요일부터 금요일이 아닌 나머지",
    note: "월요일 아침 스몰토크의 단골 표현입니다."
  },
  {
    id: "daily-greeting-08",
    category: "daily-greeting",
    ko: "오늘 날씨 좋네요, 그렇죠?",
    en: "___ weather today, isn't it?",
    accept: ["nice", "lovely", "beautiful", "great"],
    hint: "날씨를 칭찬하는 형용사면 여러 개가 다 됩니다",
    note: "날씨 이야기는 영어권에서 가장 무난한 스몰토크 소재입니다."
  },
  {
    id: "daily-greeting-09",
    category: "daily-greeting",
    ko: "또 봐요.",
    en: "See you ___.",
    accept: ["around", "later", "soon"],
    hint: "언제 볼지 정하지 않고 던지는 말",
    note: "약속 없이 헤어질 때는 See you around가 자연스럽습니다."
  },
  {
    id: "daily-greeting-10",
    category: "daily-greeting",
    ko: "몸조심하세요.",
    en: "___ care.",
    accept: ["take"],
    hint: "care와 짝을 이루는 동사",
    note: "헤어질 때 쓰는 인사로, Take care of yourself의 줄임입니다."
  },
  {
    id: "daily-greeting-11",
    category: "daily-greeting",
    ko: "가족들은 잘 지내세요?",
    en: "How's your family ___?",
    accept: ["doing"],
    hint: "안부를 '어떻게 하고 있는지'로 바꿔 묻습니다",
    note: "How is ~ doing?은 안부를 묻는 기본 틀입니다."
  },
  {
    id: "daily-greeting-12",
    category: "daily-greeting",
    ko: "말씀 많이 들었습니다.",
    en: "I've ___ a lot about you.",
    accept: ["heard"],
    hint: "귀로 하는 동작의 과거분사",
    note: "소개받는 자리에서 쓰는 인사말입니다."
  },
  {
    id: "daily-greeting-13",
    category: "daily-greeting",
    ko: "저 기억하세요?",
    en: "Do you ___ me?",
    accept: ["remember"],
    hint: "잊다(forget)의 반대말",
    note: "remember는 기억을 떠올리는 것, remind는 떠올리게 해주는 것입니다."
  },
  {
    id: "daily-greeting-14",
    category: "daily-greeting",
    ko: "여기서 다 만나네요, 웬일이야?",
    en: "What ___ you doing here?",
    accept: ["are"],
    hint: "현재진행형을 만드는 be동사. 주어가 you입니다",
    note: "우연히 마주쳤을 때 반가움을 담아 씁니다. 어조에 따라 따지는 말도 됩니다."
  },
  {
    id: "daily-greeting-15",
    category: "daily-greeting",
    ko: "요즘 뭐 하고 지내?",
    en: "What have you been ___ to?",
    accept: ["up"],
    hint: "to와 붙어 근황을 묻는 관용 표현의 일부",
    note: "be up to는 '~하며 지내다'라는 뜻의 구어 표현입니다."
  },
  {
    id: "daily-greeting-16",
    category: "daily-greeting",
    ko: "제 동료를 소개해 드릴게요.",
    en: "Let me ___ you to my colleague.",
    accept: ["introduce"],
    hint: "'안으로 이끌다'라는 어원을 가진 동사",
    note: "introduce A to B 구조입니다."
  },
  {
    id: "daily-greeting-17",
    category: "daily-greeting",
    ko: "부모님께 안부 전해주세요.",
    en: "Say ___ to your parents for me.",
    accept: ["hi", "hello"],
    hint: "안부를 인사말 그대로 '말해' 달라는 표현",
    note: "for me를 붙여야 '나 대신'이라는 뜻이 살아납니다."
  },
  {
    id: "daily-greeting-18",
    category: "daily-greeting",
    ko: "연락하고 지내자.",
    en: "Let's keep in ___.",
    accept: ["touch"],
    hint: "연락을 '닿아 있는 상태'로 표현합니다",
    note: "keep in touch는 관계를 이어가자는 뜻의 관용구입니다."
  },

  {
    id: "daily-request-01",
    category: "daily-request",
    ko: "부탁 하나만 해도 될까요?",
    en: "Can I ___ you a favor?",
    accept: ["ask"],
    hint: "favor와 짝을 이루는 동사. 부탁은 '물어보는' 것",
    note: "부탁하는 쪽은 ask a favor, 들어주는 쪽은 do a favor입니다."
  },
  {
    id: "daily-request-02",
    category: "daily-request",
    ko: "문 좀 열어주시겠어요?",
    en: "Would you ___ opening the door?",
    accept: ["mind"],
    hint: "'꺼려하다'를 뜻하는 동사. 답할 때 No가 승낙입니다",
    note: "mind 뒤에는 동명사가 옵니다. 승낙할 때 'Not at all'로 답하는 점에 주의하세요."
  },
  {
    id: "daily-request-03",
    category: "daily-request",
    ko: "잠깐 시간 괜찮으세요?",
    en: "Do you have a ___?",
    accept: ["minute", "moment", "second"],
    hint: "아주 짧은 시간 단위를 뜻하는 명사",
    note: "말을 걸기 전 양해를 구하는 표현입니다."
  },
  {
    id: "daily-request-04",
    category: "daily-request",
    ko: "여기 앉아도 될까요?",
    en: "___ I sit here?",
    accept: ["may", "can", "could"],
    hint: "허락을 구하는 조동사면 여러 개가 됩니다",
    note: "may가 가장 격식 있고, can이 가장 편한 말투입니다."
  },
  {
    id: "daily-request-05",
    category: "daily-request",
    ko: "펜 좀 빌릴 수 있을까요?",
    en: "Could I ___ your pen?",
    accept: ["borrow"],
    hint: "돌려줄 것을 전제로 가져가는 동사. lend와 방향이 반대입니다",
    note: "빌리는 쪽은 borrow, 빌려주는 쪽은 lend입니다."
  },
  {
    id: "daily-request-06",
    category: "daily-request",
    ko: "이것 좀 도와주실 수 있어요?",
    en: "Could you give me a ___ with this?",
    accept: ["hand"],
    hint: "도움을 신체 부위 하나로 표현합니다",
    note: "give a hand는 일손을 보탠다는 뜻입니다."
  },
  {
    id: "daily-request-07",
    category: "daily-request",
    ko: "조금만 천천히 말씀해 주시겠어요?",
    en: "Could you speak more ___, please?",
    accept: ["slowly"],
    hint: "속도를 뜻하는 형용사에 -ly가 붙은 부사",
    note: "speak는 동사라서 형용사 slow가 아닌 부사 slowly로 꾸밉니다."
  },
  {
    id: "daily-request-08",
    category: "daily-request",
    ko: "다시 한 번 말씀해 주시겠어요?",
    en: "Could you say that ___?",
    accept: ["again"],
    hint: "'한 번 더'를 뜻하는 부사",
    note: "그냥 What?이라고 되묻는 것보다 훨씬 공손합니다."
  },
  {
    id: "daily-request-09",
    category: "daily-request",
    ko: "저희 사진 좀 찍어주시겠어요?",
    en: "Would you mind ___ a picture of us?",
    accept: ["taking"],
    hint: "사진을 찍는 동사. mind 뒤라서 -ing 형태입니다",
    note: "mind 뒤이므로 동명사 taking을 씁니다."
  },
  {
    id: "daily-request-10",
    category: "daily-request",
    ko: "잠시만 기다려 주세요.",
    en: "Could you ___ a moment, please?",
    accept: ["wait", "hold"],
    hint: "전화에서 '끊지 말고 기다리라'고 할 때도 씁니다",
    note: "전화 통화에서는 hold가 더 자연스럽습니다."
  },
  {
    id: "daily-request-11",
    category: "daily-request",
    ko: "창문 좀 닫아도 괜찮을까요?",
    en: "Do you mind ___ I close the window?",
    accept: ["if"],
    hint: "'~해도 될까요'를 조건절로 바꿔주는 접속사",
    note: "mind if 뒤에는 절이, mind 뒤에는 동명사가 옵니다."
  },
  {
    id: "daily-request-12",
    category: "daily-request",
    ko: "소리 좀 줄여줄래요?",
    en: "Could you ___ the volume down?",
    accept: ["turn"],
    hint: "볼륨·전등에 두루 쓰는 동사. down/up과 짝을 이룹니다",
    note: "turn up은 올리기, turn down은 낮추기입니다."
  },
  {
    id: "daily-request-13",
    category: "daily-request",
    ko: "제 가방 좀 봐주시겠어요?",
    en: "Could you ___ an eye on my bag?",
    accept: ["keep"],
    hint: "'눈을 계속 그 위에 두고 있으라'는 표현",
    note: "keep an eye on은 '지켜봐 주다'라는 관용구입니다."
  },
  {
    id: "daily-request-14",
    category: "daily-request",
    ko: "부담 없이 거절하셔도 돼요.",
    en: "Feel ___ to say no.",
    accept: ["free"],
    hint: "'자유롭게 느끼라'는 뜻의 관용 표현",
    note: "feel free to는 '편하게 ~하세요'라는 뜻입니다."
  },
  {
    id: "daily-request-15",
    category: "daily-request",
    ko: "너무 번거롭지 않다면요.",
    en: "If it's not too much ___.",
    accept: ["trouble"],
    hint: "번거로움·수고를 뜻하는 명사",
    note: "부탁 뒤에 붙여 상대의 부담을 덜어주는 표현입니다."
  },
  {
    id: "daily-request-16",
    category: "daily-request",
    ko: "이거 저 대신 해주실 수 있을까요?",
    en: "Could you do this ___ me?",
    accept: ["for"],
    hint: "'~를 대신해서'를 뜻하는 전치사",
    note: "'~를 위해/대신'은 for입니다. to me는 뜻이 달라집니다."
  },
  {
    id: "daily-request-17",
    category: "daily-request",
    ko: "허락을 받아야 해요.",
    en: "I need to ask for ___.",
    accept: ["permission"],
    hint: "허가를 뜻하는 추상명사",
    note: "permission은 셀 수 없는 명사라 관사를 붙이지 않습니다."
  },
  {
    id: "daily-request-18",
    category: "daily-request",
    ko: "메시지 남겨도 될까요?",
    en: "Can I ___ a message?",
    accept: ["leave"],
    hint: "'남기고 가다'를 뜻하는 동사",
    note: "남기는 쪽은 leave, 받아 적는 쪽은 take a message입니다."
  },

  {
    id: "daily-opinion-01",
    category: "daily-opinion",
    ko: "제 생각에는 너무 비싼 것 같아요.",
    en: "In my ___, it's too expensive.",
    accept: ["opinion", "view"],
    hint: "생각·견해를 뜻하는 명사",
    note: "in my opinion에는 관사 my가 이미 있어 the를 붙이지 않습니다."
  },
  {
    id: "daily-opinion-02",
    category: "daily-opinion",
    ko: "전적으로 동의해요.",
    en: "I couldn't ___ more.",
    accept: ["agree"],
    hint: "부정문이지만 뜻은 최상급 긍정입니다",
    note: "'더 이상 동의할 수 없다' = 최고로 동의한다는 뜻입니다."
  },
  {
    id: "daily-opinion-03",
    category: "daily-opinion",
    ko: "그건 잘 모르겠어요.",
    en: "I'm not ___ about that.",
    accept: ["sure"],
    hint: "확신이 있는지를 뜻하는 형용사",
    note: "단정을 피하며 부드럽게 유보하는 표현입니다."
  },
  {
    id: "daily-opinion-04",
    category: "daily-opinion",
    ko: "그 얘기 들으니 정말 기쁘네요.",
    en: "I'm so ___ to hear that.",
    accept: ["glad", "happy"],
    hint: "기쁨을 뜻하는 기본 형용사",
    note: "소식에 대한 반응에는 glad가 가장 자연스럽습니다."
  },
  {
    id: "daily-opinion-05",
    category: "daily-opinion",
    ko: "결과가 좀 실망스러워요.",
    en: "I'm a little ___ with the result.",
    accept: ["disappointed"],
    hint: "기대에 못 미쳤을 때 쓰는 형용사. 사람이 주어라 -ed형입니다",
    note: "사람이 느끼는 감정은 -ed형입니다. disappointing은 대상이 실망스러울 때 씁니다."
  },
  {
    id: "daily-opinion-06",
    category: "daily-opinion",
    ko: "정말 짜증나네요.",
    en: "It's really ___.",
    accept: ["annoying", "frustrating"],
    hint: "짜증을 '일으키는' 쪽이라 -ing 형태입니다",
    note: "주어가 사물이므로 -ing형을 씁니다."
  },
  {
    id: "daily-opinion-07",
    category: "daily-opinion",
    ko: "면접 때문에 긴장돼요.",
    en: "I'm ___ about the interview.",
    accept: ["nervous"],
    hint: "시험·면접 앞에서 느끼는 감정을 뜻하는 형용사",
    note: "nervous about ~ 형태로 씁니다."
  },
  {
    id: "daily-opinion-08",
    category: "daily-opinion",
    ko: "여행이 정말 기대돼요.",
    en: "I'm looking ___ to the trip.",
    accept: ["forward"],
    hint: "'앞쪽'을 뜻하는 말. look과 to 사이에 들어갑니다",
    note: "look forward to의 to는 전치사라서 뒤에 명사나 동명사가 옵니다."
  },
  {
    id: "daily-opinion-09",
    category: "daily-opinion",
    ko: "저는 상관없어요.",
    en: "It doesn't ___ to me.",
    accept: ["matter"],
    hint: "'중요하다'를 뜻하는 동사로도 씁니다",
    note: "matter는 '중요하다'는 뜻의 동사로도 쓰입니다."
  },
  {
    id: "daily-opinion-10",
    category: "daily-opinion",
    ko: "그건 말이 되네요.",
    en: "That ___ sense.",
    accept: ["makes"],
    hint: "'말이 된다'를 '만든다'로 표현합니다. 3인칭 단수형",
    note: "make sense는 '이해가 된다, 타당하다'는 뜻입니다."
  },
  {
    id: "daily-opinion-11",
    category: "daily-opinion",
    ko: "믿기지가 않네요.",
    en: "That's ___ to believe.",
    accept: ["hard"],
    hint: "difficult와 바꿔 쓸 수 있는 짧은 형용사",
    note: "hard to believe는 놀라움을 표현하는 굳어진 표현입니다."
  },
  {
    id: "daily-opinion-12",
    category: "daily-opinion",
    ko: "죄송하지만 저는 생각이 달라요.",
    en: "I'm ___ I disagree.",
    accept: ["afraid"],
    hint: "'두렵다'는 형용사지만 여기서는 유감을 나타냅니다",
    note: "I'm afraid는 반대 의견을 부드럽게 꺼낼 때 씁니다."
  },
  {
    id: "daily-opinion-13",
    category: "daily-opinion",
    ko: "그 일 때문에 마음이 안 좋아요.",
    en: "I feel ___ about what happened.",
    accept: ["bad", "terrible", "awful"],
    hint: "기분이 나쁘다는 뜻의 형용사면 여러 개가 됩니다",
    note: "feel bad about ~은 미안함이나 안타까움을 나타냅니다."
  },
  {
    id: "daily-opinion-14",
    category: "daily-opinion",
    ko: "이제 이건 지긋지긋해요.",
    en: "I'm ___ up with this.",
    accept: ["fed"],
    hint: "질리도록 먹였다는 비유에서 나온 표현",
    note: "be fed up with는 '질렸다'는 뜻입니다."
  },
  {
    id: "daily-opinion-15",
    category: "daily-opinion",
    ko: "부럽다.",
    en: "I'm ___ of you.",
    accept: ["jealous", "envious"],
    hint: "질투·부러움을 뜻하는 형용사",
    note: "일상 대화에서는 jealous가 압도적으로 많이 쓰입니다."
  },
  {
    id: "daily-opinion-16",
    category: "daily-opinion",
    ko: "정말 다행이다!",
    en: "What a ___!",
    accept: ["relief"],
    hint: "긴장이 풀렸을 때의 감정을 뜻하는 명사",
    note: "걱정이 사라졌을 때 쓰는 감탄 표현입니다."
  },
  {
    id: "daily-opinion-17",
    category: "daily-opinion",
    ko: "무슨 말인지 알겠어요.",
    en: "I see your ___.",
    accept: ["point"],
    hint: "말하려는 요점을 뜻하는 명사",
    note: "완전한 동의는 아니지만 상대 논지를 이해했다는 뜻입니다."
  },
  {
    id: "daily-opinion-18",
    category: "daily-opinion",
    ko: "솔직히 말하면 저는 별로예요.",
    en: "To be ___ with you, I don't like it.",
    accept: ["honest"],
    hint: "'정직한'을 뜻하는 형용사",
    note: "to be honest with you는 솔직한 의견을 꺼내기 전 완충 표현입니다."
  },

  {
    id: "travel-airport-01",
    category: "travel-airport",
    ko: "창가 자리로 주세요.",
    en: "I'd like a ___ seat, please.",
    accept: ["window"],
    hint: "비행기에서 밖을 볼 수 있는 자리",
    note: "복도 자리는 aisle seat이며 s 발음이 나지 않습니다."
  },
  {
    id: "travel-airport-02",
    category: "travel-airport",
    ko: "부치실 짐 있으신가요?",
    en: "Do you have any bags to ___?",
    accept: ["check"],
    hint: "체크인의 그 동사. 짐을 부치는 것도 같은 말로 씁니다",
    note: "짐을 부치는 것은 check, 기내 반입 짐은 carry-on입니다."
  },
  {
    id: "travel-airport-03",
    category: "travel-airport",
    ko: "방문 목적이 무엇입니까?",
    en: "What's the ___ of your visit?",
    accept: ["purpose"],
    hint: "'목적'을 뜻하는 명사",
    note: "입국심사의 첫 질문입니다."
  },
  {
    id: "travel-airport-04",
    category: "travel-airport",
    ko: "얼마나 머무르실 예정입니까?",
    en: "How long will you be ___?",
    accept: ["staying"],
    hint: "머무는 동작. will be 뒤라서 -ing 형태입니다",
    note: "예정된 미래라서 will be -ing를 씁니다."
  },
  {
    id: "travel-airport-05",
    category: "travel-airport",
    ko: "관광차 왔습니다.",
    en: "I'm here on ___.",
    accept: ["vacation", "holiday", "business"],
    hint: "on 뒤에 오는 명사. 관광이든 출장이든 다 됩니다",
    note: "미국은 vacation, 영국은 holiday를 씁니다. 출장이면 business입니다."
  },
  {
    id: "travel-airport-06",
    category: "travel-airport",
    ko: "탑승권 좀 보여주시겠어요?",
    en: "May I see your ___ pass?",
    accept: ["boarding"],
    hint: "탑승을 뜻하는 말. pass 앞에 붙습니다",
    note: "boarding pass는 한 덩어리로 외웁니다."
  },
  {
    id: "travel-airport-07",
    category: "travel-airport",
    ko: "이 비행기는 몇 번 게이트에서 출발하나요?",
    en: "Which ___ does the flight leave from?",
    accept: ["gate"],
    hint: "탑승구를 뜻하는 짧은 명사",
    note: "탑승구는 gate입니다."
  },
  {
    id: "travel-airport-08",
    category: "travel-airport",
    ko: "연결 항공편을 놓쳤어요.",
    en: "I ___ my connecting flight.",
    accept: ["missed"],
    hint: "놓쳤다는 뜻의 과거형",
    note: "교통편을 놓치는 것은 miss입니다. lose는 물건을 잃어버릴 때 씁니다."
  },
  {
    id: "travel-airport-09",
    category: "travel-airport",
    ko: "제 짐이 안 나왔어요.",
    en: "My luggage didn't ___ up.",
    accept: ["show"],
    hint: "up과 짝을 이뤄 '나타나다'가 됩니다",
    note: "show up은 '나타나다'입니다. luggage는 셀 수 없는 명사입니다."
  },
  {
    id: "travel-airport-10",
    category: "travel-airport",
    ko: "환승만 하는 겁니다.",
    en: "I'm just in ___.",
    accept: ["transit"],
    hint: "환승·경유를 뜻하는 명사",
    note: "in transit은 최종 목적지로 가는 중이라는 뜻입니다."
  },
  {
    id: "travel-airport-11",
    category: "travel-airport",
    ko: "신고할 물품이 있으신가요?",
    en: "Do you have anything to ___?",
    accept: ["declare"],
    hint: "세관에서 신고한다는 뜻의 동사",
    note: "세관에서 반드시 나오는 질문입니다."
  },
  {
    id: "travel-airport-12",
    category: "travel-airport",
    ko: "안전벨트를 매주십시오.",
    en: "Please ___ your seat belt.",
    accept: ["fasten"],
    hint: "벨트를 '조여 매다'라는 동사",
    note: "기내 방송의 정형 표현입니다. t는 발음하지 않습니다."
  },
  {
    id: "travel-airport-13",
    category: "travel-airport",
    ko: "담요 한 장 주시겠어요?",
    en: "Could I ___ a blanket, please?",
    accept: ["have", "get"],
    hint: "달라고 요청할 때 쓰는 아주 기본적인 동사",
    note: "승무원에게 요청할 때 쓰는 공손한 표현입니다."
  },
  {
    id: "travel-airport-14",
    category: "travel-airport",
    ko: "비행기가 지연되었습니다.",
    en: "The flight has been ___.",
    accept: ["delayed"],
    hint: "지연을 뜻하는 동사의 과거분사",
    note: "결항은 cancelled입니다."
  },
  {
    id: "travel-airport-15",
    category: "travel-airport",
    ko: "온라인으로 체크인했어요.",
    en: "I've already ___ in online.",
    accept: ["checked"],
    hint: "체크인의 그 동사. 완료 시제라 과거분사입니다",
    note: "check in은 두 단어, 명사 check-in은 하이픈을 씁니다."
  },
  {
    id: "travel-airport-16",
    category: "travel-airport",
    ko: "여기가 제 자리인 것 같은데요.",
    en: "I think this is my ___.",
    accept: ["seat"],
    hint: "앉는 자리를 뜻하는 짧은 명사",
    note: "I think를 앞에 붙이면 훨씬 부드럽게 들립니다."
  },

  {
    id: "travel-hotel-01",
    category: "travel-hotel",
    ko: "김으로 예약했습니다.",
    en: "I have a ___ under Kim.",
    accept: ["reservation", "booking"],
    hint: "예약을 뜻하는 명사. 두 단어가 다 쓰입니다",
    note: "미국은 reservation, 영국은 booking을 더 자주 씁니다."
  },
  {
    id: "travel-hotel-02",
    category: "travel-hotel",
    ko: "체크인 하려고 합니다.",
    en: "I'd like to ___ in, please.",
    accept: ["check"],
    hint: "체크인의 그 동사입니다",
    note: "I'd like to는 I want to보다 공손합니다."
  },
  {
    id: "travel-hotel-03",
    category: "travel-hotel",
    ko: "체크아웃은 몇 시인가요?",
    en: "What time is ___?",
    accept: ["checkout", "check-out"],
    hint: "붙여 쓰거나 하이픈을 넣거나 둘 다 됩니다",
    note: "명사로 쓸 때는 한 단어 또는 하이픈 형태입니다."
  },
  {
    id: "travel-hotel-04",
    category: "travel-hotel",
    ko: "3시까지 짐을 맡아주실 수 있나요?",
    en: "Could you ___ my luggage until three?",
    accept: ["keep", "hold", "store"],
    hint: "물건을 잠시 보관해 달라는 동사",
    note: "'~까지 계속'은 until, '~까지 완료'는 by입니다."
  },
  {
    id: "travel-hotel-05",
    category: "travel-hotel",
    ko: "와이파이 비밀번호가 뭔가요?",
    en: "What's the Wi-Fi ___?",
    accept: ["password"],
    hint: "우리말에서도 외래어로 그대로 씁니다",
    note: "비밀번호는 password입니다. secret number라고 하지 않습니다."
  },
  {
    id: "travel-hotel-06",
    category: "travel-hotel",
    ko: "에어컨이 작동하지 않아요.",
    en: "The air conditioner isn't ___.",
    accept: ["working"],
    hint: "기계가 작동한다를 사람이 일하는 동사로 표현합니다",
    note: "기기가 고장 났을 때는 not working을 씁니다."
  },
  {
    id: "travel-hotel-07",
    category: "travel-hotel",
    ko: "뜨거운 물이 안 나와요.",
    en: "There's no ___ water.",
    accept: ["hot"],
    hint: "온도를 뜻하는 짧은 형용사",
    note: "There's no ~ 구조로 없는 것을 알립니다."
  },
  {
    id: "travel-hotel-08",
    category: "travel-hotel",
    ko: "방을 바꿀 수 있을까요?",
    en: "Could I ___ rooms?",
    accept: ["change", "switch"],
    hint: "방을 다른 것으로 바꾼다는 동사",
    note: "방을 옮기는 것이므로 복수형 rooms를 씁니다."
  },
  {
    id: "travel-hotel-09",
    category: "travel-hotel",
    ko: "옆방이 너무 시끄러워요.",
    en: "The room next ___ is too noisy.",
    accept: ["door"],
    hint: "옆방을 next ___로 씁니다. 방이 아니라 그 앞에 있는 것",
    note: "next door는 '바로 옆'을 뜻하는 관용 표현입니다."
  },
  {
    id: "travel-hotel-10",
    category: "travel-hotel",
    ko: "조식이 포함되어 있나요?",
    en: "Is breakfast ___?",
    accept: ["included"],
    hint: "포함을 뜻하는 동사의 과거분사",
    note: "요금에 포함되었는지 물을 때 씁니다."
  },
  {
    id: "travel-hotel-11",
    category: "travel-hotel",
    ko: "하루 더 묵고 싶은데요.",
    en: "I'd like to ___ one more night.",
    accept: ["stay"],
    hint: "머문다는 뜻의 짧은 동사",
    note: "숙박 기간은 night 단위로 셉니다."
  },
  {
    id: "travel-hotel-12",
    category: "travel-hotel",
    ko: "수건 좀 더 주시겠어요?",
    en: "Could I get some ___ towels?",
    accept: ["extra", "more"],
    hint: "'추가로'를 뜻하는 말",
    note: "extra는 '추가로 더'라는 뜻으로 호텔에서 자주 씁니다."
  },
  {
    id: "travel-hotel-13",
    category: "travel-hotel",
    ko: "택시 좀 불러주시겠어요?",
    en: "Could you ___ me a taxi?",
    accept: ["call", "get"],
    hint: "택시를 불러 달라는 요청에 쓰는 기본 동사",
    note: "call me a taxi가 가장 일반적입니다."
  },
  {
    id: "travel-hotel-14",
    category: "travel-hotel",
    ko: "방 청소 좀 해주시겠어요?",
    en: "Could you have my room ___ up?",
    accept: ["made", "cleaned"],
    hint: "'침대를 정돈하다'와 '청소하다' 둘 다 됩니다",
    note: "make up a room은 호텔에서 객실을 정돈한다는 뜻입니다."
  },
  {
    id: "travel-hotel-15",
    category: "travel-hotel",
    ko: "체크아웃을 늦출 수 있을까요?",
    en: "Is a ___ checkout possible?",
    accept: ["late"],
    hint: "늦은 시간을 뜻하는 짧은 형용사",
    note: "late checkout은 호텔에서 그대로 쓰는 용어입니다."
  },
  {
    id: "travel-hotel-16",
    category: "travel-hotel",
    ko: "열쇠를 방에 두고 나왔어요.",
    en: "I ___ myself out of my room.",
    accept: ["locked"],
    hint: "문을 잠갔다는 동사의 과거형. 자기 자신을 밖에 두고 잠근 겁니다",
    note: "lock oneself out은 열쇠를 안에 두고 문이 잠긴 상황을 뜻합니다."
  }
];
