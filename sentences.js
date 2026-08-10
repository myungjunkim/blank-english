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
    id: "travel-out-20",
    category: "travel-out",
    ko: "두 명 자리 있나요?",
    en: "Do you have a ___ for two?",
    accept: ["table"],
    hint: "식당에서 앉는 자리를 뜻하는 명사",
    note: "인원은 for two처럼 for를 붙여 말합니다."
  },
  {
    id: "travel-out-21",
    category: "travel-out",
    ko: "얼마나 기다려야 하나요?",
    en: "How long is the ___?",
    accept: ["wait"],
    hint: "기다리는 시간 자체를 명사로 씁니다",
    note: "동사와 명사의 형태가 같습니다."
  },
  {
    id: "travel-out-22",
    category: "travel-out",
    ko: "창가 자리로 앉을 수 있을까요?",
    en: "Could we sit by the ___?",
    accept: ["window"],
    hint: "밖이 내다보이는 곳",
    note: "by the window는 '창가에'라는 뜻입니다."
  },
  {
    id: "travel-out-23",
    category: "travel-out",
    ko: "여기 추천 메뉴가 뭔가요?",
    en: "What do you ___?",
    accept: ["recommend", "suggest"],
    hint: "좋은 것을 골라 알려준다는 뜻의 동사",
    note: "What's good here?도 같은 뜻의 편한 표현입니다."
  },
  {
    id: "travel-out-24",
    category: "travel-out",
    ko: "이건 무슨 요리인가요?",
    en: "What's in this ___?",
    accept: ["dish"],
    hint: "요리 한 접시를 뜻하는 명사",
    note: "menu는 메뉴판이라는 종이를 뜻하므로 요리 자체에는 쓸 수 없습니다."
  },
  {
    id: "travel-out-25",
    category: "travel-out",
    ko: "저는 채식주의자예요.",
    en: "I'm a ___.",
    accept: ["vegetarian"],
    hint: "고기를 먹지 않는 사람을 뜻하는 명사",
    note: "유제품과 달걀까지 피한다면 vegan이라고 해야 합니다."
  },
  {
    id: "travel-out-26",
    category: "travel-out",
    ko: "땅콩 알레르기가 있어요.",
    en: "I'm ___ to peanuts.",
    accept: ["allergic"],
    hint: "특정 음식에 몸이 반응한다는 뜻의 형용사",
    note: "allergy는 명사, allergic은 형용사입니다. I have an allergy to도 됩니다."
  },
  {
    id: "travel-out-27",
    category: "travel-out",
    ko: "덜 맵게 해주실 수 있나요?",
    en: "Could you make it less ___?",
    accept: ["spicy", "hot"],
    hint: "혀가 얼얼한 맛을 뜻하는 형용사",
    note: "hot은 온도와 매운맛 양쪽에 쓰여 혼동되기 쉽습니다."
  },
  {
    id: "travel-out-28",
    category: "travel-out",
    ko: "이건 제가 시킨 게 아닌데요.",
    en: "This isn't what I ___.",
    accept: ["ordered"],
    hint: "주문했다는 뜻의 동사, 과거형",
    note: "정중하게 말하려면 앞에 Excuse me를 붙입니다."
  },
  {
    id: "travel-out-29",
    category: "travel-out",
    ko: "이것 좀 데워주시겠어요?",
    en: "Could you ___ this up?",
    accept: ["heat", "warm"],
    hint: "따뜻하게 만든다는 뜻의 동사",
    note: "heat up과 warm up 모두 씁니다."
  },
  {
    id: "travel-out-30",
    category: "travel-out",
    ko: "남은 거 싸주시겠어요?",
    en: "Could I get a ___ box?",
    accept: ["to-go", "togo", "doggy"],
    hint: "남은 음식을 담아 가는 상자를 뜻하는 말",
    note: "doggy bag이라는 표현도 있지만 요즘은 to-go box를 더 많이 씁니다."
  },
  {
    id: "travel-out-31",
    category: "travel-out",
    ko: "팁은 포함되어 있나요?",
    en: "Is the ___ included?",
    accept: ["tip", "gratuity"],
    hint: "봉사료를 뜻하는 명사",
    note: "영수증에 gratuity로 적혀 있으면 이미 포함된 것입니다."
  },
  {
    id: "travel-out-32",
    category: "travel-out",
    ko: "잔돈은 됐습니다.",
    en: "Keep the ___.",
    accept: ["change"],
    hint: "거스름돈을 뜻하는 명사",
    note: "바꾼다는 동사와 형태가 같지만 여기서는 명사입니다."
  },
  {
    id: "travel-out-33",
    category: "travel-out",
    ko: "이거 세일 중인가요?",
    en: "Is this on ___?",
    accept: ["sale"],
    hint: "할인 판매를 뜻하는 명사",
    note: "on sale은 할인 중, for sale은 판매 중이라는 다른 뜻입니다."
  },
  {
    id: "travel-out-34",
    category: "travel-out",
    ko: "좀 깎아주실 수 있나요?",
    en: "Could you give me a ___?",
    accept: ["discount"],
    hint: "값을 깎아주는 것을 뜻하는 명사",
    note: "정찰제 매장에서는 통하지 않고, 시장에서 주로 씁니다."
  },
  {
    id: "travel-out-35",
    category: "travel-out",
    ko: "이거 너무 꽉 껴요.",
    en: "This is too ___.",
    accept: ["tight", "small"],
    hint: "여유가 없다는 뜻의 형용사",
    note: "헐렁하면 too loose 또는 too big입니다."
  },
  {
    id: "travel-out-36",
    category: "travel-out",
    ko: "탈의실이 어디인가요?",
    en: "Where's the ___ room?",
    accept: ["fitting", "changing"],
    hint: "옷을 입어보는 곳을 뜻하는 말",
    note: "미국은 fitting room, 영국은 changing room을 주로 씁니다."
  },
  {
    id: "travel-out-37",
    category: "travel-out",
    ko: "이거 반품할 수 있나요?",
    en: "Can I ___ this?",
    accept: ["return"],
    hint: "샀던 것을 되돌려준다는 뜻의 동사",
    note: "영수증이 있어야 하는 경우가 대부분입니다."
  },
  {
    id: "travel-out-38",
    category: "travel-out",
    ko: "그냥 둘러볼게요, 감사합니다.",
    en: "I'm just ___ around.",
    accept: ["looking"],
    hint: "눈으로 훑어본다는 뜻의 동사 -ing형",
    note: "look around는 매장 안을 돌아본다는 뜻입니다."
  },
  {
    id: "travel-out-39",
    category: "travel-out",
    ko: "카드 되나요?",
    en: "Do you ___ cards?",
    accept: ["take", "accept"],
    hint: "결제 수단을 받아준다는 뜻의 동사",
    note: "현금만 받는 곳은 cash only라고 붙여둡니다."
  },
  {
    id: "travel-out-40",
    category: "travel-out",
    ko: "봉투 하나 주시겠어요?",
    en: "Could I get a ___?",
    accept: ["bag"],
    hint: "물건을 담아 가는 것",
    note: "유료인 곳이 많아 Do you need a bag?이라고 먼저 묻습니다."
  },
  {
    id: "travel-out-41",
    category: "travel-out",
    ko: "여기서 걸어갈 수 있나요?",
    en: "Is it within ___ distance?",
    accept: ["walking"],
    hint: "걷는다는 동사의 -ing형",
    note: "Can I walk there?도 같은 뜻의 짧은 표현입니다."
  },
  {
    id: "travel-out-42",
    category: "travel-out",
    ko: "지도에서 여기가 어디인가요?",
    en: "Where am I on the ___?",
    accept: ["map"],
    hint: "길이 그려진 종이나 화면",
    note: "종이 지도를 보여주며 물을 때 씁니다."
  },
  {
    id: "travel-out-43",
    category: "travel-out",
    ko: "길을 잃었어요.",
    en: "I think I'm ___.",
    accept: ["lost"],
    hint: "제 위치를 모르게 되었다는 뜻의 형용사",
    note: "lose의 과거분사지만 형용사처럼 씁니다."
  },
  {
    id: "travel-out-44",
    category: "travel-out",
    ko: "저 모퉁이에서 왼쪽으로 도세요.",
    en: "___ left at the corner.",
    accept: ["turn"],
    hint: "방향을 바꾼다는 뜻의 동사",
    note: "길 안내에서 가장 많이 쓰이는 동사입니다."
  },
  {
    id: "travel-out-45",
    category: "travel-out",
    ko: "쭉 직진하세요.",
    en: "Go ___ ahead.",
    accept: ["straight"],
    hint: "굽지 않고 곧다는 뜻의 말",
    note: "straight ahead가 한 덩어리로 쓰입니다."
  },
  {
    id: "travel-out-46",
    category: "travel-out",
    ko: "지하철역이 어디인가요?",
    en: "Where's the nearest ___ station?",
    accept: ["subway", "metro", "underground"],
    hint: "땅속을 달리는 열차를 부르는 말. 나라마다 다릅니다",
    note: "미국은 subway, 영국은 underground나 tube, 유럽은 metro를 씁니다."
  },
  {
    id: "travel-out-47",
    category: "travel-out",
    ko: "표는 어디서 사나요?",
    en: "Where can I buy a ___?",
    accept: ["ticket"],
    hint: "탈 자격을 증명하는 종이나 카드",
    note: "자동판매기는 ticket machine이라고 합니다."
  },
  {
    id: "travel-out-48",
    category: "travel-out",
    ko: "여기서 갈아타야 하나요?",
    en: "Do I need to ___ here?",
    accept: ["transfer"],
    hint: "다른 노선으로 옮겨 탄다는 뜻의 동사",
    note: "환승역은 transfer station입니다."
  },
  {
    id: "travel-out-49",
    category: "travel-out",
    ko: "이 주소로 가주세요.",
    en: "Take me to this ___, please.",
    accept: ["address"],
    hint: "장소를 글로 적은 것",
    note: "택시에서는 주소를 화면으로 보여주는 편이 확실합니다."
  },
  {
    id: "travel-out-50",
    category: "travel-out",
    ko: "여기서 세워주세요.",
    en: "You can ___ me off here.",
    accept: ["drop", "let"],
    hint: "차에서 내려준다는 뜻의 동사",
    note: "drop off는 사람이나 물건을 내려놓는다는 뜻입니다."
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
    id: "daily-greeting-19",
    category: "daily-greeting",
    ko: "처음 뵙겠습니다.",
    en: "___ do you do?",
    accept: ["how"],
    hint: "안부를 묻는 의문사입니다",
    note: "격식을 갖춘 첫인사입니다. 질문이 아니라 인사라서, 대답도 같은 말로 받습니다."
  },
  {
    id: "daily-greeting-20",
    category: "daily-greeting",
    ko: "그럭저럭이에요.",
    en: "Not too ___.",
    accept: ["bad"],
    hint: "'좋다'의 반대말을 부정해서 표현합니다",
    note: "Not too bad는 실제로는 '꽤 괜찮다'에 가깝습니다. 영어권에서 흔한 겸손한 대답입니다."
  },
  {
    id: "daily-greeting-21",
    category: "daily-greeting",
    ko: "만나서 반가웠습니다.",
    en: "It was a ___ meeting you.",
    accept: ["pleasure"],
    hint: "기쁨·즐거움을 뜻하는 명사",
    note: "격식 있는 자리에서 헤어질 때 씁니다. 편한 사이에서는 It was nice meeting you를 씁니다."
  },
  {
    id: "daily-greeting-22",
    category: "daily-greeting",
    ko: "그냥 준이라고 불러주세요.",
    en: "Just ___ me Jun.",
    accept: ["call"],
    hint: "이름을 부르는 동작",
    note: "이름이 길거나 발음이 어려울 때 먼저 이렇게 말해두면 대화가 편해집니다."
  },
  {
    id: "daily-greeting-23",
    category: "daily-greeting",
    ko: "제 친구 민수예요.",
    en: "___ is my friend Minsu.",
    accept: ["this"],
    hint: "사람을 소개할 때 he나 she가 아니라 이 말로 시작합니다",
    note: "옆에 있는 사람을 소개할 때는 This is를 씁니다. He is라고 하면 무례하게 들립니다."
  },
  {
    id: "daily-greeting-24",
    category: "daily-greeting",
    ko: "어디에서 오셨어요?",
    en: "Where are you ___?",
    accept: ["from"],
    hint: "출발점을 나타내는 전치사",
    note: "출신지를 묻습니다. 지금 어디서 오는 길인지 묻고 싶다면 Where are you coming from?이라고 해야 합니다."
  },
  {
    id: "daily-greeting-25",
    category: "daily-greeting",
    ko: "여기 오래 사셨어요?",
    en: "Have you ___ here long?",
    accept: ["lived"],
    hint: "거주를 뜻하는 동사의 과거분사",
    note: "완료 시제라 과거분사를 씁니다. 과거부터 지금까지 이어지는 기간을 묻습니다."
  },
  {
    id: "daily-greeting-26",
    category: "daily-greeting",
    ko: "요즘 좀 바빴어요.",
    en: "I've been ___ lately.",
    accept: ["busy"],
    hint: "시간이 없는 상태를 뜻하는 형용사",
    note: "lately는 '최근에'라는 뜻으로 완료 시제와 잘 어울립니다."
  },
  {
    id: "daily-greeting-27",
    category: "daily-greeting",
    ko: "그럭저럭 버티고 있어요.",
    en: "I'm ___ in there.",
    accept: ["hanging"],
    hint: "매달려 있다는 비유에서 나온 표현입니다",
    note: "힘든 시기를 지나는 중일 때 쓰는 대답입니다. 상대에게 격려로 Hang in there라고도 합니다."
  },
  {
    id: "daily-greeting-28",
    category: "daily-greeting",
    ko: "늘 그렇죠 뭐.",
    en: "Same as ___.",
    accept: ["usual"],
    hint: "'평소'를 뜻하는 명사",
    note: "How's work? 같은 질문에 무난하게 쓰는 대답입니다."
  },
  {
    id: "daily-greeting-29",
    category: "daily-greeting",
    ko: "새 직장 구했어요.",
    en: "I ___ a new job.",
    accept: ["got", "found"],
    hint: "얻었다는 뜻의 동사면 둘 다 됩니다",
    note: "got이 더 구어적입니다. found는 찾는 과정에 무게가 실립니다."
  },
  {
    id: "daily-greeting-30",
    category: "daily-greeting",
    ko: "정말 잘됐네요!",
    en: "___ for you!",
    accept: ["good"],
    hint: "축하할 때 쓰는 짧은 형용사",
    note: "상대의 좋은 소식에 대한 짧은 축하입니다. 말투에 따라 비꼬는 느낌이 날 수 있어 밝게 말해야 합니다."
  },
  {
    id: "daily-greeting-31",
    category: "daily-greeting",
    ko: "그 얘기 들으니 안타깝네요.",
    en: "I'm ___ to hear that.",
    accept: ["sorry"],
    hint: "유감을 나타내는 형용사",
    note: "사과가 아니라 공감의 표현입니다. 나쁜 소식을 들었을 때 거의 자동으로 나오는 말입니다."
  },
  {
    id: "daily-greeting-32",
    category: "daily-greeting",
    ko: "오늘 정말 덥네요.",
    en: "It's ___ hot today.",
    accept: ["really", "so", "very"],
    hint: "정도를 강조하는 부사면 여러 개가 됩니다",
    note: "날씨는 처음 만난 사이에서도 부담 없이 꺼낼 수 있는 대표적인 화제입니다."
  },
  {
    id: "daily-greeting-33",
    category: "daily-greeting",
    ko: "비가 올 것 같아요.",
    en: "It ___ like rain.",
    accept: ["looks"],
    hint: "겉모습으로 짐작할 때 쓰는 동사. 3인칭 단수형",
    note: "It looks like 뒤에는 명사가 옵니다. 문장을 넣고 싶으면 It looks like it's going to rain이 됩니다."
  },
  {
    id: "daily-greeting-34",
    category: "daily-greeting",
    ko: "차가 너무 막혔어요.",
    en: "The ___ was terrible.",
    accept: ["traffic"],
    hint: "도로 위 차량 흐름을 뜻하는 명사",
    note: "traffic은 셀 수 없는 명사라 a traffic이나 traffics로 쓰지 않습니다."
  },
  {
    id: "daily-greeting-35",
    category: "daily-greeting",
    ko: "주말에 무슨 계획 있어요?",
    en: "Any ___ for the weekend?",
    accept: ["plans"],
    hint: "예정을 뜻하는 명사. 보통 복수형으로 씁니다",
    note: "Do you have any plans에서 앞부분을 생략한 편한 말투입니다."
  },
  {
    id: "daily-greeting-36",
    category: "daily-greeting",
    ko: "별거 안 해요.",
    en: "___ much.",
    accept: ["not"],
    hint: "부정어 하나로 짧게 답합니다",
    note: "Not much는 What's up이나 Any plans 같은 질문에 두루 쓰는 대답입니다."
  },
  {
    id: "daily-greeting-37",
    category: "daily-greeting",
    ko: "시간 참 빠르네요.",
    en: "Time ___ so fast.",
    accept: ["flies", "goes"],
    hint: "시간이 지나가는 것을 나타내는 동사. 3인칭 단수형",
    note: "Time flies가 굳어진 표현입니다. goes by so fast처럼 by를 붙이기도 합니다."
  },
  {
    id: "daily-greeting-38",
    category: "daily-greeting",
    ko: "정말 오랜만이에요.",
    en: "It's been ___.",
    accept: ["ages", "forever"],
    hint: "아주 긴 시간을 과장해서 표현합니다",
    note: "ages는 복수형으로만 씁니다. It's been a while은 조금 더 짧은 기간에 씁니다."
  },
  {
    id: "daily-greeting-39",
    category: "daily-greeting",
    ko: "하나도 안 변하셨네요.",
    en: "You haven't ___ at all.",
    accept: ["changed"],
    hint: "달라졌다는 뜻의 동사, 과거분사",
    note: "오랜만에 만난 사람에게 건네는 칭찬입니다."
  },
  {
    id: "daily-greeting-40",
    category: "daily-greeting",
    ko: "여기는 무슨 일로 오셨어요?",
    en: "What ___ you here?",
    accept: ["brings"],
    hint: "데려온다는 뜻의 동사. 3인칭 단수형",
    note: "이유를 캐묻는 느낌 없이 방문 목적을 자연스럽게 묻는 표현입니다."
  },
  {
    id: "daily-greeting-41",
    category: "daily-greeting",
    ko: "이만 실례하겠습니다.",
    en: "I should be ___ off now.",
    accept: ["heading"],
    hint: "어떤 방향으로 향한다는 동사의 -ing형",
    note: "자리를 뜰 때 부드럽게 알리는 말입니다. I should get going도 같은 뜻입니다."
  },
  {
    id: "daily-greeting-42",
    category: "daily-greeting",
    ko: "좋은 하루 보내세요.",
    en: "Have a good ___.",
    accept: ["one", "day"],
    hint: "하루를 뜻하는 명사, 또는 그것을 대신 받는 대명사",
    note: "Have a good one은 시간대를 가리지 않아서 가게나 길에서 두루 씁니다."
  },
  {
    id: "daily-greeting-43",
    category: "daily-greeting",
    ko: "조심히 들어가세요.",
    en: "Get home ___.",
    accept: ["safe", "safely"],
    hint: "안전을 뜻하는 형용사, 또는 그 부사형",
    note: "문법적으로는 safely가 맞지만 일상에서는 safe를 훨씬 많이 씁니다."
  },
  {
    id: "daily-greeting-44",
    category: "daily-greeting",
    ko: "운전 조심하세요.",
    en: "___ safe.",
    accept: ["drive"],
    hint: "차를 모는 동작",
    note: "차를 타고 가는 사람에게 건네는 짧은 인사입니다."
  },
  {
    id: "daily-greeting-45",
    category: "daily-greeting",
    ko: "너무 무리하지 마세요.",
    en: "Take it ___.",
    accept: ["easy"],
    hint: "어렵지 않다는 뜻의 형용사",
    note: "헤어질 때 인사로도 쓰고, 흥분한 사람을 진정시킬 때도 씁니다."
  },
  {
    id: "daily-greeting-46",
    category: "daily-greeting",
    ko: "조만간 밥 한번 먹어요.",
    en: "Let's grab a ___ sometime.",
    accept: ["bite"],
    hint: "입으로 한 번 무는 동작을 뜻하는 명사",
    note: "grab a bite는 간단히 먹자는 뜻입니다. 정식 식사를 뜻하는 meal보다 가볍습니다."
  },
  {
    id: "daily-greeting-47",
    category: "daily-greeting",
    ko: "가족분들께 안부 전해주세요.",
    en: "___ my regards to your family.",
    accept: ["give", "send"],
    hint: "전달을 뜻하는 동사면 둘 다 됩니다",
    note: "regards는 격식 있는 안부입니다. 편한 사이라면 Say hi를 씁니다."
  },
  {
    id: "daily-greeting-48",
    category: "daily-greeting",
    ko: "시간 내주셔서 감사합니다.",
    en: "Thanks for your ___.",
    accept: ["time"],
    hint: "사람이 내어주는 자원. 아주 기본적인 명사",
    note: "회의나 면담을 마칠 때 쓰는 정중한 마무리입니다."
  },
  {
    id: "daily-greeting-49",
    category: "daily-greeting",
    ko: "오늘 정말 즐거웠어요.",
    en: "I really ___ myself today.",
    accept: ["enjoyed"],
    hint: "즐긴다는 뜻의 동사, 과거형",
    note: "이 동사는 목적어가 꼭 있어야 해서 myself를 붙입니다. I enjoyed만 쓰면 어색합니다."
  },
  {
    id: "daily-greeting-50",
    category: "daily-greeting",
    ko: "또 뵙기를 바랍니다.",
    en: "___ to see you again.",
    accept: ["hope"],
    hint: "바람을 나타내는 동사",
    note: "I hope에서 주어를 생략한 편한 말투입니다."
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
    id: "daily-request-19",
    category: "daily-request",
    ko: "잠깐 얘기 좀 할 수 있을까요?",
    en: "Can I have a ___ with you?",
    accept: ["word"],
    hint: "짧은 대화를 뜻할 때 이 명사를 단수로 씁니다",
    note: "have a word는 잠깐 따로 이야기하자는 뜻입니다. 복수로 words를 쓰면 말다툼을 뜻하게 됩니다."
  },
  {
    id: "daily-request-20",
    category: "daily-request",
    ko: "부탁 하나만 들어주세요.",
    en: "Do me a ___, please.",
    accept: ["favor", "favour"],
    hint: "호의를 뜻하는 명사. 영국식과 미국식 철자가 다릅니다",
    note: "미국은 favor, 영국·호주는 favour로 씁니다."
  },
  {
    id: "daily-request-21",
    category: "daily-request",
    ko: "저 좀 도와주실 수 있어요?",
    en: "Can you ___ me out?",
    accept: ["help"],
    hint: "out과 짝을 이뤄 곤란한 상황에서 손을 빌려준다는 뜻이 됩니다",
    note: "help out은 그냥 help보다 어려운 처지를 거들어준다는 느낌이 강합니다."
  },
  {
    id: "daily-request-22",
    category: "daily-request",
    ko: "이것 좀 들어주시겠어요?",
    en: "Could you ___ this for me?",
    accept: ["hold", "carry"],
    hint: "손에 쥐거나 나르는 동작을 뜻하는 동사",
    note: "그 자리에서 잠깐 들고 있는 것은 hold, 옮기는 것은 carry입니다."
  },
  {
    id: "daily-request-23",
    category: "daily-request",
    ko: "자리 좀 바꿔주실 수 있을까요?",
    en: "Would you mind ___ seats?",
    accept: ["switching", "swapping", "changing"],
    hint: "서로 맞바꾼다는 뜻의 동사 -ing형",
    note: "mind 뒤에는 동사에 -ing를 붙입니다. to부정사를 쓰면 틀립니다."
  },
  {
    id: "daily-request-24",
    category: "daily-request",
    ko: "망설이지 말고 물어보세요.",
    en: "Don't ___ to ask.",
    accept: ["hesitate"],
    hint: "머뭇거린다는 뜻의 동사",
    note: "이메일 끝맺음에도 자주 쓰이는 정중한 표현입니다."
  },
  {
    id: "daily-request-25",
    category: "daily-request",
    ko: "제가 대신 해드릴까요?",
    en: "Would you like me to ___ it for you?",
    accept: ["do"],
    hint: "가장 기본적인 동작 동사",
    note: "Would you like me to ~는 도움을 제안하는 정중한 방식입니다."
  },
  {
    id: "daily-request-26",
    category: "daily-request",
    ko: "지금은 좀 곤란해요.",
    en: "Now's not a good ___.",
    accept: ["time"],
    hint: "시점을 뜻하는 기본 명사",
    note: "거절할 때 상대를 덜 무안하게 만드는 완곡한 표현입니다."
  },
  {
    id: "daily-request-27",
    category: "daily-request",
    ko: "언제든 편하실 때요.",
    en: "___ works for me.",
    accept: ["whenever", "anytime"],
    hint: "'언제든'을 한 단어로 나타냅니다",
    note: "work for me는 '나에게 괜찮다'는 뜻으로 일정 조율에 자주 씁니다."
  },
  {
    id: "daily-request-28",
    category: "daily-request",
    ko: "서두르지 않으셔도 돼요.",
    en: "There's no ___.",
    accept: ["rush", "hurry"],
    hint: "서두름을 뜻하는 명사면 둘 다 됩니다",
    note: "부탁을 한 뒤 덧붙이면 상대의 부담을 크게 덜어줍니다."
  },
  {
    id: "daily-request-29",
    category: "daily-request",
    ko: "혹시 시간 되시면요.",
    en: "If you ___ the time.",
    accept: ["have"],
    hint: "소유를 뜻하는 가장 기본적인 동사",
    note: "have the time은 '짬이 나다'입니다. 시각을 물을 때도 같은 표현을 씁니다."
  },
  {
    id: "daily-request-30",
    category: "daily-request",
    ko: "이거 한번 봐주시겠어요?",
    en: "Could you take a ___ at this?",
    accept: ["look"],
    hint: "눈으로 하는 동작을 명사로 씁니다",
    note: "take a look은 가볍게 훑어봐 달라는 뜻입니다."
  },
  {
    id: "daily-request-31",
    category: "daily-request",
    ko: "폐가 되지 않았으면 좋겠어요.",
    en: "I hope I'm not ___ you.",
    accept: ["bothering", "troubling", "disturbing"],
    hint: "방해한다는 뜻의 동사 -ing형",
    note: "일하는 사람에게 말을 걸 때 먼저 붙이면 좋습니다."
  },
  {
    id: "daily-request-32",
    category: "daily-request",
    ko: "잠깐 자리를 비워도 될까요?",
    en: "May I be ___?",
    accept: ["excused"],
    hint: "양해를 구한다는 뜻의 동사, 과거분사",
    note: "식사 자리나 회의에서 먼저 일어날 때 쓰는 격식 있는 표현입니다."
  },
  {
    id: "daily-request-33",
    category: "daily-request",
    ko: "이 자리 좀 맡아주시겠어요?",
    en: "Could you ___ my seat?",
    accept: ["save", "hold"],
    hint: "자리를 남겨둔다는 뜻의 동사",
    note: "save a seat이 가장 흔합니다. 예약을 뜻하는 reserve는 가게에 쓰는 말입니다."
  },
  {
    id: "daily-request-34",
    category: "daily-request",
    ko: "문 좀 닫아주시겠어요?",
    en: "Would you ___ the door, please?",
    accept: ["close", "shut"],
    hint: "'열다'의 반대말이면 둘 다 됩니다",
    note: "shut은 조금 더 세게 들려서, 정중한 부탁에는 close가 무난합니다."
  },
  {
    id: "daily-request-35",
    category: "daily-request",
    ko: "이 상자 옮기는 것 좀 도와주실래요?",
    en: "Could you help me ___ this box?",
    accept: ["move", "carry", "lift"],
    hint: "물건을 옮기거나 들어 올리는 동작",
    note: "help me 뒤에는 to 없이 동사원형을 바로 씁니다."
  },
  {
    id: "daily-request-36",
    category: "daily-request",
    ko: "펜 좀 써도 될까요?",
    en: "Mind if I ___ your pen?",
    accept: ["use", "borrow"],
    hint: "사용을 뜻하는 동사면 둘 다 됩니다",
    note: "Do you mind if I에서 앞부분을 생략한 편한 말투입니다."
  },
  {
    id: "daily-request-37",
    category: "daily-request",
    ko: "하나만 여쭤봐도 될까요?",
    en: "Can I ask you ___?",
    accept: ["something"],
    hint: "무언가를 두루 가리키는 대명사",
    note: "구체적으로 무엇인지 밝히기 전에 운을 떼는 표현입니다."
  },
  {
    id: "daily-request-38",
    category: "daily-request",
    ko: "조금만 크게 말씀해 주시겠어요?",
    en: "Could you speak ___, please?",
    accept: ["louder", "up"],
    hint: "소리를 키우라는 뜻. 비교급 또는 짧은 부사",
    note: "speak up이 더 자연스럽습니다. louder는 다소 직접적입니다."
  },
  {
    id: "daily-request-39",
    category: "daily-request",
    ko: "철자 좀 알려주시겠어요?",
    en: "Could you ___ that for me?",
    accept: ["spell"],
    hint: "글자를 하나하나 말하는 동작",
    note: "이름이나 지명을 받아적을 때 쓰는 표현입니다."
  },
  {
    id: "daily-request-40",
    category: "daily-request",
    ko: "그거 좀 적어주실 수 있나요?",
    en: "Could you write it ___?",
    accept: ["down"],
    hint: "방향을 나타내는 짧은 말. write와 짝을 이룹니다",
    note: "write down은 종이에 옮겨 적는다는 뜻의 한 덩어리입니다."
  },
  {
    id: "daily-request-41",
    category: "daily-request",
    ko: "이거 어떻게 쓰는지 알려주실 수 있나요?",
    en: "Could you ___ me how to use this?",
    accept: ["show", "teach", "tell"],
    hint: "방법을 알려주는 동작을 뜻하는 동사",
    note: "직접 해 보이며 알려주는 것은 show가 가장 어울립니다."
  },
  {
    id: "daily-request-42",
    category: "daily-request",
    ko: "그렇게 해주시면 정말 감사하겠습니다.",
    en: "I'd really ___ it.",
    accept: ["appreciate"],
    hint: "감사를 뜻하는 격식 있는 동사",
    note: "부탁 뒤에 붙이는 정중한 마무리입니다. 목적어 it을 빠뜨리면 어색합니다."
  },
  {
    id: "daily-request-43",
    category: "daily-request",
    ko: "부담 갖지 마세요.",
    en: "No ___.",
    accept: ["pressure"],
    hint: "누르는 힘, 압박을 뜻하는 명사",
    note: "부탁을 하면서 덧붙이면 상대가 거절하기 편해집니다."
  },
  {
    id: "daily-request-44",
    category: "daily-request",
    ko: "거절하셔도 괜찮아요.",
    en: "It's ___ to say no.",
    accept: ["okay", "ok", "fine", "alright"],
    hint: "괜찮다는 뜻의 형용사면 여러 개가 됩니다",
    note: "상대가 마음 편히 거절할 수 있게 해주는 표현입니다."
  },
  {
    id: "daily-request-45",
    category: "daily-request",
    ko: "죄송한데 하나만 더요.",
    en: "Sorry, just one more ___.",
    accept: ["thing"],
    hint: "어떤 것을 두루 가리키는 명사",
    note: "One more thing은 대화를 마무리하려다 덧붙일 때 씁니다."
  },
  {
    id: "daily-request-46",
    category: "daily-request",
    ko: "언제까지 필요하세요?",
    en: "When do you ___ it by?",
    accept: ["need"],
    hint: "필요를 뜻하는 동사",
    note: "by는 기한을 나타냅니다. until은 그때까지 계속되는 상태에 씁니다."
  },
  {
    id: "daily-request-47",
    category: "daily-request",
    ko: "제가 한번 해볼게요.",
    en: "Let me give it a ___.",
    accept: ["try", "shot", "go"],
    hint: "시도를 뜻하는 명사면 여러 개가 됩니다",
    note: "give it a shot이 조금 더 구어적입니다."
  },
  {
    id: "daily-request-48",
    category: "daily-request",
    ko: "그러고 싶은데 지금 일이 너무 밀렸어요.",
    en: "I'd love to, but I'm ___.",
    accept: ["swamped", "busy"],
    hint: "일이 밀려 있는 상태를 뜻하는 형용사",
    note: "swamped는 '늪에 빠졌다'는 비유로, busy보다 훨씬 절박하게 들립니다."
  },
  {
    id: "daily-request-49",
    category: "daily-request",
    ko: "신세 졌네요.",
    en: "I ___ you one.",
    accept: ["owe"],
    hint: "빚을 지고 있다는 뜻의 동사",
    note: "도움을 받은 뒤 가볍게 하는 말입니다. one은 갚아야 할 신세 하나를 가리킵니다."
  },
  {
    id: "daily-request-50",
    category: "daily-request",
    ko: "도움이 필요하면 알려주세요.",
    en: "Let me ___ if you need help.",
    accept: ["know"],
    hint: "알게 한다는 뜻의 동사",
    note: "Let me know는 연락 달라는 뜻으로 두루 씁니다."
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
    id: "daily-opinion-19",
    category: "daily-opinion",
    ko: "제가 보기엔 좀 이상해요.",
    en: "It ___ strange to me.",
    accept: ["seems", "looks", "sounds"],
    hint: "그렇게 느껴진다는 뜻의 동사. 3인칭 단수형",
    note: "직접 본 것은 looks, 들은 것은 sounds, 전반적 판단은 seems를 씁니다."
  },
  {
    id: "daily-opinion-20",
    category: "daily-opinion",
    ko: "무슨 말인지 알 것 같아요.",
    en: "I ___ what you mean.",
    accept: ["see", "know", "get"],
    hint: "이해했다는 뜻으로도 쓰는 기본 동사",
    note: "I see가 가장 흔합니다. understand는 조금 더 격식 있게 들립니다."
  },
  {
    id: "daily-opinion-21",
    category: "daily-opinion",
    ko: "저도 그렇게 생각해요.",
    en: "That's what I ___.",
    accept: ["think", "thought"],
    hint: "머릿속으로 하는 동작을 뜻하는 동사",
    note: "That's what I thought는 '내 짐작이 맞았다'는 뉘앙스를 담습니다."
  },
  {
    id: "daily-opinion-22",
    category: "daily-opinion",
    ko: "글쎄요, 잘 모르겠어요.",
    en: "I'm not ___ about it.",
    accept: ["certain", "positive"],
    hint: "확신을 뜻하는 형용사면 둘 다 됩니다",
    note: "sure보다 격식 있게 들립니다. positive는 '확신한다'는 뜻으로도 씁니다."
  },
  {
    id: "daily-opinion-23",
    category: "daily-opinion",
    ko: "생각할 시간이 좀 필요해요.",
    en: "I need some time to ___ about it.",
    accept: ["think"],
    hint: "머릿속으로 헤아리는 동작",
    note: "think about은 곰곰이 생각한다는 뜻입니다. think of는 떠올린다는 뜻에 가깝습니다."
  },
  {
    id: "daily-opinion-24",
    category: "daily-opinion",
    ko: "그럴 줄 알았어요.",
    en: "I ___ it.",
    accept: ["knew"],
    hint: "알고 있었다는 뜻의 동사, 과거형",
    note: "예상대로 일이 흘러갔을 때 쓰는 짧은 반응입니다."
  },
  {
    id: "daily-opinion-25",
    category: "daily-opinion",
    ko: "진심이에요?",
    en: "Are you ___?",
    accept: ["serious", "kidding", "joking"],
    hint: "농담인지 진담인지 묻는 형용사 또는 동사 -ing형",
    note: "Are you kidding?은 놀랐을 때, Are you serious?는 믿기 어려울 때 씁니다."
  },
  {
    id: "daily-opinion-26",
    category: "daily-opinion",
    ko: "너무 심한 것 같아요.",
    en: "That's going too ___.",
    accept: ["far"],
    hint: "거리를 나타내는 짧은 말이 정도를 뜻하기도 합니다",
    note: "go too far는 선을 넘었다는 뜻입니다."
  },
  {
    id: "daily-opinion-27",
    category: "daily-opinion",
    ko: "저는 별로 신경 안 써요.",
    en: "I don't really ___.",
    accept: ["care", "mind"],
    hint: "마음을 쓴다는 뜻의 동사면 둘 다 됩니다",
    note: "care는 관심 자체가 없는 것, mind는 꺼리지 않는다는 쪽에 가깝습니다."
  },
  {
    id: "daily-opinion-28",
    category: "daily-opinion",
    ko: "그건 좀 과한 것 같아요.",
    en: "That seems like ___.",
    accept: ["overkill"],
    hint: "필요 이상으로 지나치다는 뜻의 한 단어",
    note: "kill이 들어가지만 폭력과는 무관하고, 과잉을 뜻하는 일상어입니다."
  },
  {
    id: "daily-opinion-29",
    category: "daily-opinion",
    ko: "저는 반대예요.",
    en: "I'm ___ it.",
    accept: ["against"],
    hint: "for의 반대편에 서는 전치사",
    note: "찬성은 I'm for it, 반대는 I'm against it입니다."
  },
  {
    id: "daily-opinion-30",
    category: "daily-opinion",
    ko: "그 말도 일리가 있네요.",
    en: "___ enough.",
    accept: ["fair"],
    hint: "공평하다는 뜻의 짧은 형용사",
    note: "완전히 동의하지는 않지만 상대 말에 수긍할 때 쓰는 짧은 반응입니다."
  },
  {
    id: "daily-opinion-31",
    category: "daily-opinion",
    ko: "저는 좀 다르게 봐요.",
    en: "I see it ___.",
    accept: ["differently"],
    hint: "'다른'이라는 형용사에서 나온 부사",
    note: "정면으로 반박하지 않으면서 다른 의견을 내는 부드러운 방식입니다."
  },
  {
    id: "daily-opinion-32",
    category: "daily-opinion",
    ko: "너무 신나요.",
    en: "I'm so ___ about it.",
    accept: ["excited"],
    hint: "설렘을 뜻하는 형용사. 사람이 주어라 -ed형입니다",
    note: "exciting은 대상을 설명할 때 씁니다. 사람에게 쓰면 뜻이 달라집니다."
  },
  {
    id: "daily-opinion-33",
    category: "daily-opinion",
    ko: "너무 지루했어요.",
    en: "It was so ___.",
    accept: ["boring", "dull"],
    hint: "재미가 없다는 뜻의 형용사",
    note: "I was bored는 내 상태, It was boring은 대상의 성질입니다."
  },
  {
    id: "daily-opinion-34",
    category: "daily-opinion",
    ko: "정말 감동받았어요.",
    en: "I was really ___.",
    accept: ["moved", "touched", "impressed"],
    hint: "마음이 움직였다는 비유에서 나온 형용사",
    note: "moved와 touched는 뭉클함, impressed는 감탄에 가깝습니다."
  },
  {
    id: "daily-opinion-35",
    category: "daily-opinion",
    ko: "좀 헷갈려요.",
    en: "I'm a bit ___.",
    accept: ["confused", "lost"],
    hint: "머릿속이 정리되지 않은 상태를 뜻하는 형용사",
    note: "I'm lost는 대화를 따라가지 못할 때도 씁니다."
  },
  {
    id: "daily-opinion-36",
    category: "daily-opinion",
    ko: "완전히 잊어버렸어요.",
    en: "It totally ___ my mind.",
    accept: ["slipped"],
    hint: "미끄러졌다는 비유에서 나온 동사, 과거형",
    note: "slip one's mind는 깜빡했다는 뜻으로 변명할 때 자주 씁니다."
  },
  {
    id: "daily-opinion-37",
    category: "daily-opinion",
    ko: "생각보다 괜찮았어요.",
    en: "It was better than ___.",
    accept: ["expected"],
    hint: "미리 그럴 것이라 여겼다는 동사의 과거분사",
    note: "than I expected에서 주어를 생략한 형태입니다."
  },
  {
    id: "daily-opinion-38",
    category: "daily-opinion",
    ko: "좀 실망스러웠어요.",
    en: "It was a bit of a ___.",
    accept: ["letdown", "disappointment"],
    hint: "기대에 못 미쳤다는 뜻의 명사",
    note: "letdown이 더 구어적입니다. let down이라는 동사에서 나왔습니다."
  },
  {
    id: "daily-opinion-39",
    category: "daily-opinion",
    ko: "속상해요.",
    en: "I'm ___ about it.",
    accept: ["upset"],
    hint: "화와 슬픔이 섞인 감정을 뜻하는 형용사",
    note: "angry보다 부드럽고, sad보다 마음이 뒤집힌 느낌을 담습니다."
  },
  {
    id: "daily-opinion-40",
    category: "daily-opinion",
    ko: "마음이 놓이네요.",
    en: "That's a ___ off my mind.",
    accept: ["weight", "load"],
    hint: "무게를 뜻하는 명사면 둘 다 됩니다",
    note: "걱정을 무거운 짐에 비유한 표현입니다."
  },
  {
    id: "daily-opinion-41",
    category: "daily-opinion",
    ko: "겁이 좀 나요.",
    en: "I'm ___ of it.",
    accept: ["scared", "afraid", "terrified"],
    hint: "두려움을 뜻하는 형용사",
    note: "afraid of는 대상에 대한 두려움, afraid that은 걱정하는 상황에 씁니다."
  },
  {
    id: "daily-opinion-42",
    category: "daily-opinion",
    ko: "후회는 없어요.",
    en: "I have no ___.",
    accept: ["regrets"],
    hint: "뉘우침을 뜻하는 명사. 보통 복수형으로 씁니다",
    note: "동사로도 같은 형태를 쓰지만 여기서는 명사입니다."
  },
  {
    id: "daily-opinion-43",
    category: "daily-opinion",
    ko: "그래서 그랬던 거군요.",
    en: "That ___ everything.",
    accept: ["explains"],
    hint: "까닭을 밝힌다는 뜻의 동사. 3인칭 단수형",
    note: "이해가 안 되던 일이 설명을 듣고 납득될 때 씁니다."
  },
  {
    id: "daily-opinion-44",
    category: "daily-opinion",
    ko: "저한테는 너무 부담스러워요.",
    en: "It's too much for me to ___.",
    accept: ["handle"],
    hint: "감당해 낸다는 뜻의 동사",
    note: "handle은 물건을 다루는 것에서 상황을 감당하는 것까지 넓게 씁니다."
  },
  {
    id: "daily-opinion-45",
    category: "daily-opinion",
    ko: "상상도 안 되네요.",
    en: "I can't even ___ it.",
    accept: ["imagine"],
    hint: "머릿속에 장면을 그려본다는 뜻의 동사",
    note: "even이 들어가 '~조차'라는 강조가 됩니다."
  },
  {
    id: "daily-opinion-46",
    category: "daily-opinion",
    ko: "저도 마찬가지예요.",
    en: "___ here.",
    accept: ["same"],
    hint: "'똑같다'는 뜻의 짧은 형용사",
    note: "Same here는 상대 말에 짧게 동의할 때 쓰는 관용 표현입니다."
  },
  {
    id: "daily-opinion-47",
    category: "daily-opinion",
    ko: "그럴 가치가 있었어요.",
    en: "It was ___ it.",
    accept: ["worth"],
    hint: "값어치가 있다는 뜻의 형용사",
    note: "worth 뒤에는 it이나 -ing가 옵니다. to부정사는 쓰지 않습니다."
  },
  {
    id: "daily-opinion-48",
    category: "daily-opinion",
    ko: "아쉽게 됐네요.",
    en: "That's too ___.",
    accept: ["bad"],
    hint: "'좋다'의 반대말",
    note: "That's too bad는 상대의 안 좋은 소식에 건네는 짧은 위로입니다."
  },
  {
    id: "daily-opinion-49",
    category: "daily-opinion",
    ko: "저는 상관없어요, 편하실 대로 하세요.",
    en: "It's up to ___.",
    accept: ["you"],
    hint: "상대를 가리키는 대명사",
    note: "up to you는 결정을 상대에게 맡긴다는 뜻입니다."
  },
  {
    id: "daily-opinion-50",
    category: "daily-opinion",
    ko: "솔직히 잘 모르겠어요.",
    en: "___, I have no idea.",
    accept: ["honestly"],
    hint: "'정직한'이라는 형용사에서 나온 부사",
    note: "Honestly는 문장 앞에서 '솔직히 말하면'이라는 뜻으로 씁니다."
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
    id: "travel-airport-17",
    category: "travel-airport",
    ko: "여권 좀 보여주시겠어요?",
    en: "May I see your ___, please?",
    accept: ["passport"],
    hint: "국경을 넘을 때 필요한 신분 증명 책자",
    note: "입국심사에서 가장 먼저 듣는 말입니다."
  },
  {
    id: "travel-airport-18",
    category: "travel-airport",
    ko: "왕복 항공권입니다.",
    en: "It's a ___ ticket.",
    accept: ["return", "roundtrip"],
    hint: "갔다가 돌아온다는 뜻의 말",
    note: "미국은 round-trip, 영국은 return을 주로 씁니다. 편도는 one-way입니다."
  },
  {
    id: "travel-airport-19",
    category: "travel-airport",
    ko: "이번이 첫 방문입니다.",
    en: "This is my ___ visit.",
    accept: ["first"],
    hint: "순서의 맨 앞을 뜻하는 말",
    note: "입국심사에서 방문 이력을 물을 때 쓰는 대답입니다."
  },
  {
    id: "travel-airport-20",
    category: "travel-airport",
    ko: "짐은 몇 개까지 되나요?",
    en: "How many bags am I ___?",
    accept: ["allowed"],
    hint: "허용된다는 뜻의 동사, 과거분사",
    note: "수하물 규정을 물을 때 씁니다. baggage allowance라고도 합니다."
  },
  {
    id: "travel-airport-21",
    category: "travel-airport",
    ko: "가방이 무게를 초과했나요?",
    en: "Is my bag ___?",
    accept: ["overweight"],
    hint: "무게가 기준을 넘었다는 뜻의 한 단어",
    note: "over(넘는)와 weight(무게)가 합쳐진 말입니다."
  },
  {
    id: "travel-airport-22",
    category: "travel-airport",
    ko: "이건 기내에 들고 탈 거예요.",
    en: "This is my ___ bag.",
    accept: ["carry-on", "carryon"],
    hint: "들고 타는 짐을 뜻하는 말. 하이픈 유무 둘 다 인정합니다",
    note: "부치는 짐은 checked baggage입니다."
  },
  {
    id: "travel-airport-23",
    category: "travel-airport",
    ko: "통로 쪽 자리로 주세요.",
    en: "I'd like an ___ seat.",
    accept: ["aisle"],
    hint: "좌석 사이로 난 길을 뜻하는 명사",
    note: "s를 발음하지 않아 '아일'로 읽습니다."
  },
  {
    id: "travel-airport-24",
    category: "travel-airport",
    ko: "비상구 좌석으로 바꿀 수 있나요?",
    en: "Can I change to an ___ row seat?",
    accept: ["exit"],
    hint: "밖으로 나가는 문을 뜻하는 명사",
    note: "비상구 좌석은 다리 공간이 넓지만 승무원의 안내에 협조해야 합니다."
  },
  {
    id: "travel-airport-25",
    category: "travel-airport",
    ko: "게이트는 몇 시에 닫나요?",
    en: "What time does the gate ___?",
    accept: ["close"],
    hint: "'열다'의 반대말",
    note: "게이트는 출발 10분에서 20분 전에 닫히므로 탑승 시각보다 이쪽이 더 중요합니다."
  },
  {
    id: "travel-airport-26",
    category: "travel-airport",
    ko: "게이트가 변경되었습니다.",
    en: "The gate has been ___.",
    accept: ["changed"],
    hint: "달라졌다는 뜻의 동사, 과거분사",
    note: "공항 안내판을 자주 확인해야 하는 이유입니다."
  },
  {
    id: "travel-airport-27",
    category: "travel-airport",
    ko: "비행기를 놓칠 것 같아요.",
    en: "I'm going to ___ my flight.",
    accept: ["miss"],
    hint: "제때 잡지 못한다는 뜻의 동사",
    note: "시간에 못 맞추는 것에는 miss를 씁니다. lose는 물건을 잃을 때 씁니다."
  },
  {
    id: "travel-airport-28",
    category: "travel-airport",
    ko: "환승 시간이 얼마나 되나요?",
    en: "How long is the ___?",
    accept: ["layover", "stopover"],
    hint: "갈아타기 위해 기다리는 시간을 뜻하는 명사",
    note: "layover가 더 흔합니다. stopover는 하루 이상 머무는 경우에도 씁니다."
  },
  {
    id: "travel-airport-29",
    category: "travel-airport",
    ko: "다음 비행기로 바꿔주실 수 있나요?",
    en: "Could you put me on the next ___?",
    accept: ["flight"],
    hint: "비행 편을 뜻하는 명사",
    note: "put someone on은 좌석을 배정해준다는 뜻으로 씁니다."
  },
  {
    id: "travel-airport-30",
    category: "travel-airport",
    ko: "수하물 찾는 곳이 어디인가요?",
    en: "Where is ___ claim?",
    accept: ["baggage", "luggage"],
    hint: "짐을 통틀어 부르는 명사",
    note: "안내판에는 보통 Baggage Claim으로 적혀 있습니다."
  },
  {
    id: "travel-airport-31",
    category: "travel-airport",
    ko: "제 가방이 파손됐어요.",
    en: "My bag is ___.",
    accept: ["damaged", "broken"],
    hint: "망가졌다는 뜻의 형용사",
    note: "수하물 사고는 도착 공항의 카운터에서 바로 접수해야 합니다."
  },
  {
    id: "travel-airport-32",
    category: "travel-airport",
    ko: "분실 신고를 하고 싶은데요.",
    en: "I'd like to ___ a lost bag.",
    accept: ["report"],
    hint: "공식적으로 알린다는 뜻의 동사",
    note: "report는 신고와 보고 양쪽에 두루 씁니다."
  },
  {
    id: "travel-airport-33",
    category: "travel-airport",
    ko: "얼마나 지연되나요?",
    en: "How long will the ___ be?",
    accept: ["delay"],
    hint: "늦어짐을 뜻하는 명사",
    note: "동사와 명사의 형태가 같습니다."
  },
  {
    id: "travel-airport-34",
    category: "travel-airport",
    ko: "제 비행기가 결항됐어요.",
    en: "My flight was ___.",
    accept: ["cancelled", "canceled"],
    hint: "취소되었다는 뜻의 동사, 과거분사. 철자가 두 가지입니다",
    note: "영국식은 l을 두 번, 미국식은 한 번 씁니다."
  },
  {
    id: "travel-airport-35",
    category: "travel-airport",
    ko: "창문 덮개 좀 내려주시겠어요?",
    en: "Could you ___ the window shade?",
    accept: ["close", "lower"],
    hint: "덮거나 아래로 내린다는 뜻의 동사",
    note: "기내에서 옆자리 승객에게 부탁할 때 쓰는 표현입니다."
  },
  {
    id: "travel-airport-36",
    category: "travel-airport",
    ko: "좌석을 뒤로 젖혀도 될까요?",
    en: "Do you mind if I ___ my seat?",
    accept: ["recline"],
    hint: "등받이를 뒤로 눕힌다는 뜻의 동사",
    note: "뒷사람에게 먼저 물어보는 것이 예의로 여겨집니다."
  },
  {
    id: "travel-airport-37",
    category: "travel-airport",
    ko: "지나가도 될까요?",
    en: "Could I ___ by, please?",
    accept: ["squeeze", "get"],
    hint: "좁은 틈을 비집고 나간다는 뜻의 동사",
    note: "squeeze by는 좁은 자리를 지날 때 쓰는 정중한 표현입니다."
  },
  {
    id: "travel-airport-38",
    category: "travel-airport",
    ko: "물 한 잔 주시겠어요?",
    en: "Could I get a ___ of water?",
    accept: ["glass", "cup"],
    hint: "물을 담는 그릇을 뜻하는 명사",
    note: "기내에서는 보통 plastic cup에 담아 줍니다."
  },
  {
    id: "travel-airport-39",
    category: "travel-airport",
    ko: "닭고기로 주세요.",
    en: "I'll ___ the chicken.",
    accept: ["have", "take"],
    hint: "선택한다는 뜻으로도 쓰는 기본 동사",
    note: "기내식은 보통 chicken or beef 중에서 고르게 합니다."
  },
  {
    id: "travel-airport-40",
    category: "travel-airport",
    ko: "화장실이 어디인가요?",
    en: "Where's the ___?",
    accept: ["lavatory", "restroom", "bathroom"],
    hint: "화장실을 가리키는 말. 기내에서는 특유의 단어를 씁니다",
    note: "기내 표지판에는 Lavatory라고 적혀 있습니다."
  },
  {
    id: "travel-airport-41",
    category: "travel-airport",
    ko: "이 서류 작성을 도와주시겠어요?",
    en: "Could you help me ___ out this form?",
    accept: ["fill"],
    hint: "빈 곳을 채운다는 뜻의 동사",
    note: "fill out은 미국식, fill in은 영국식입니다."
  },
  {
    id: "travel-airport-42",
    category: "travel-airport",
    ko: "세관 신고서를 잃어버렸어요.",
    en: "I lost my ___ form.",
    accept: ["customs", "declaration"],
    hint: "세관 또는 신고를 뜻하는 명사",
    note: "customs는 항상 s가 붙습니다. custom은 관습이라는 다른 뜻입니다."
  },
  {
    id: "travel-airport-43",
    category: "travel-airport",
    ko: "현금은 얼마나 가지고 계신가요?",
    en: "How much ___ are you carrying?",
    accept: ["cash", "money"],
    hint: "지폐와 동전을 뜻하는 명사",
    note: "일정 금액을 넘으면 신고해야 하는 나라가 많습니다."
  },
  {
    id: "travel-airport-44",
    category: "travel-airport",
    ko: "일주일 정도 머물 예정입니다.",
    en: "About a ___.",
    accept: ["week"],
    hint: "7일을 묶어 부르는 단위",
    note: "How long will you be staying?에 대한 짧은 대답입니다."
  },
  {
    id: "travel-airport-45",
    category: "travel-airport",
    ko: "호텔은 이미 예약했습니다.",
    en: "I've already ___ a hotel.",
    accept: ["booked", "reserved"],
    hint: "예약을 뜻하는 동사의 과거분사",
    note: "숙소 예약 여부는 입국심사에서 자주 확인하는 항목입니다."
  },
  {
    id: "travel-airport-46",
    category: "travel-airport",
    ko: "면세점은 어디에 있나요?",
    en: "Where's the ___ shop?",
    accept: ["duty-free", "dutyfree"],
    hint: "세금이 붙지 않는다는 뜻의 말",
    note: "duty는 관세를 뜻합니다. free는 '없다'는 뜻입니다."
  },
  {
    id: "travel-airport-47",
    category: "travel-airport",
    ko: "제 자리를 못 찾겠어요.",
    en: "I can't ___ my seat.",
    accept: ["find"],
    hint: "찾는다는 뜻의 동사",
    note: "탑승권의 좌석 번호를 보여주며 승무원에게 물으면 됩니다."
  },
  {
    id: "travel-airport-48",
    category: "travel-airport",
    ko: "온라인 체크인이 안 돼요.",
    en: "Online check-in isn't ___.",
    accept: ["working"],
    hint: "기계나 기능이 제대로 돌아간다는 뜻",
    note: "안 될 때는 공항 카운터에서 직접 체크인하면 됩니다."
  },
  {
    id: "travel-airport-49",
    category: "travel-airport",
    ko: "이 줄이 맞나요?",
    en: "Is this the right ___?",
    accept: ["line", "queue"],
    hint: "차례를 기다리며 늘어선 사람들",
    note: "미국은 line, 영국·호주는 queue를 씁니다."
  },
  {
    id: "travel-airport-50",
    category: "travel-airport",
    ko: "안전한 여행 되세요.",
    en: "Have a safe ___.",
    accept: ["trip", "journey"],
    hint: "여정을 뜻하는 명사면 둘 다 됩니다",
    note: "journey가 조금 더 길고 격식 있는 여정을 가리킵니다."
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
  },
  {
    id: "travel-hotel-17",
    category: "travel-hotel",
    ko: "빈방 있나요?",
    en: "Do you have any rooms ___?",
    accept: ["available"],
    hint: "쓸 수 있는 상태라는 뜻의 형용사",
    note: "빈방은 empty가 아니라 available로 묻습니다."
  },
  {
    id: "travel-hotel-18",
    category: "travel-hotel",
    ko: "1박에 얼마인가요?",
    en: "How much is it per ___?",
    accept: ["night"],
    hint: "숙박 요금은 하루가 아니라 이것을 단위로 셉니다",
    note: "숙박은 day가 아니라 night으로 셉니다. 2박은 two nights입니다."
  },
  {
    id: "travel-hotel-19",
    category: "travel-hotel",
    ko: "조식은 몇 시부터인가요?",
    en: "What time does breakfast ___?",
    accept: ["start", "begin", "open"],
    hint: "시작을 뜻하는 동사면 여러 개가 됩니다",
    note: "끝나는 시각은 What time does breakfast end?로 묻습니다."
  },
  {
    id: "travel-hotel-20",
    category: "travel-hotel",
    ko: "짐 좀 방으로 올려주시겠어요?",
    en: "Could you ___ my bags up to the room?",
    accept: ["bring", "take", "send"],
    hint: "물건을 옮겨다 준다는 뜻의 동사",
    note: "이 서비스를 해주는 직원을 bellhop 또는 porter라고 합니다."
  },
  {
    id: "travel-hotel-21",
    category: "travel-hotel",
    ko: "금연실로 부탁드립니다.",
    en: "I'd like a ___ room.",
    accept: ["non-smoking", "nonsmoking"],
    hint: "담배를 피우지 않는다는 뜻의 말. 하이픈 유무 둘 다 인정합니다",
    note: "흡연실은 smoking room입니다."
  },
  {
    id: "travel-hotel-22",
    category: "travel-hotel",
    ko: "전망 좋은 방으로 주실 수 있나요?",
    en: "Could I get a room with a ___?",
    accept: ["view"],
    hint: "창밖으로 보이는 경치를 뜻하는 명사",
    note: "바다 전망은 ocean view, 도심 전망은 city view입니다."
  },
  {
    id: "travel-hotel-23",
    category: "travel-hotel",
    ko: "더 조용한 방 있을까요?",
    en: "Do you have a ___ room?",
    accept: ["quieter"],
    hint: "소리가 적다는 형용사의 비교급",
    note: "엘리베이터나 도로에서 먼 방을 요청할 때 씁니다."
  },
  {
    id: "travel-hotel-24",
    category: "travel-hotel",
    ko: "방을 먼저 볼 수 있을까요?",
    en: "Could I ___ the room first?",
    accept: ["see", "view"],
    hint: "눈으로 확인한다는 뜻의 동사",
    note: "작은 숙소에서는 방을 미리 보여주는 경우가 많습니다."
  },
  {
    id: "travel-hotel-25",
    category: "travel-hotel",
    ko: "엘리베이터가 어디인가요?",
    en: "Where's the ___?",
    accept: ["elevator", "lift"],
    hint: "층을 오르내리는 기계. 미국식과 영국식 단어가 다릅니다",
    note: "미국은 elevator, 영국·호주는 lift를 씁니다."
  },
  {
    id: "travel-hotel-26",
    category: "travel-hotel",
    ko: "카드키가 작동하지 않아요.",
    en: "My key card doesn't ___.",
    accept: ["work"],
    hint: "기계가 제대로 돌아간다는 뜻의 동사",
    note: "휴대폰 옆에 두면 자기 정보가 지워질 수 있습니다."
  },
  {
    id: "travel-hotel-27",
    category: "travel-hotel",
    ko: "변기가 막혔어요.",
    en: "The toilet is ___.",
    accept: ["clogged", "blocked"],
    hint: "무언가에 막혀 흐르지 않는다는 뜻의 형용사",
    note: "미국은 clogged, 영국은 blocked를 주로 씁니다."
  },
  {
    id: "travel-hotel-28",
    category: "travel-hotel",
    ko: "수건이 없어요.",
    en: "There are no ___ in the room.",
    accept: ["towels"],
    hint: "몸을 닦는 천. 복수형입니다",
    note: "프런트에 전화하면 바로 가져다줍니다."
  },
  {
    id: "travel-hotel-29",
    category: "travel-hotel",
    ko: "난방이 안 켜져요.",
    en: "The ___ isn't turning on.",
    accept: ["heater", "heating"],
    hint: "방을 따뜻하게 만드는 장치",
    note: "냉방은 air conditioning 또는 AC라고 합니다."
  },
  {
    id: "travel-hotel-30",
    category: "travel-hotel",
    ko: "불이 안 들어와요.",
    en: "The light doesn't ___ on.",
    accept: ["come", "turn"],
    hint: "켜진다는 뜻을 만드는 동사. on과 짝을 이룹니다",
    note: "카드키를 꽂아야 전기가 들어오는 방이 많습니다."
  },
  {
    id: "travel-hotel-31",
    category: "travel-hotel",
    ko: "방이 아직 청소가 안 되어 있어요.",
    en: "The room hasn't been ___ yet.",
    accept: ["cleaned"],
    hint: "치웠다는 뜻의 동사, 과거분사",
    note: "체크인 시간 전에 도착하면 종종 생기는 상황입니다."
  },
  {
    id: "travel-hotel-32",
    category: "travel-hotel",
    ko: "방에서 냄새가 나요.",
    en: "The room ___ bad.",
    accept: ["smells"],
    hint: "코로 느끼는 감각을 뜻하는 동사. 3인칭 단수형",
    note: "smell 뒤에는 부사가 아니라 형용사가 옵니다."
  },
  {
    id: "travel-hotel-33",
    category: "travel-hotel",
    ko: "방을 바꿔주실 수 있을까요?",
    en: "Is it possible to ___ rooms?",
    accept: ["swap", "move"],
    hint: "다른 방으로 옮기거나 맞바꾼다는 뜻",
    note: "빈방이 있으면 대개 바꿔줍니다. 성수기에는 어려울 수 있습니다."
  },
  {
    id: "travel-hotel-34",
    category: "travel-hotel",
    ko: "환불받을 수 있을까요?",
    en: "Can I get my money ___?",
    accept: ["back"],
    hint: "되돌려 받는다는 방향을 나타내는 말",
    note: "get one's money back은 refund보다 구어적입니다."
  },
  {
    id: "travel-hotel-35",
    category: "travel-hotel",
    ko: "예약을 취소하고 싶은데요.",
    en: "I'd like to ___ my reservation.",
    accept: ["cancel"],
    hint: "없던 일로 만든다는 뜻의 동사",
    note: "무료 취소 기한은 free cancellation until로 표시됩니다."
  },
  {
    id: "travel-hotel-36",
    category: "travel-hotel",
    ko: "하루 일찍 나가려고 합니다.",
    en: "I need to check out a day ___.",
    accept: ["early", "earlier"],
    hint: "예정보다 앞선다는 뜻의 말",
    note: "조기 퇴실 수수료를 받는 곳도 있으니 미리 확인하는 것이 좋습니다."
  },
  {
    id: "travel-hotel-37",
    category: "travel-hotel",
    ko: "보증금은 언제 돌려받나요?",
    en: "When do I get the ___ back?",
    accept: ["deposit"],
    hint: "미리 맡겨두는 돈을 뜻하는 명사",
    note: "카드로 잡아둔 보증금은 반환까지 며칠 걸릴 수 있습니다."
  },
  {
    id: "travel-hotel-38",
    category: "travel-hotel",
    ko: "영수증 좀 주시겠어요?",
    en: "Could I get a ___, please?",
    accept: ["receipt"],
    hint: "결제 내역이 적힌 종이",
    note: "p를 발음하지 않아 '리싯'으로 읽습니다."
  },
  {
    id: "travel-hotel-39",
    category: "travel-hotel",
    ko: "이 요금은 뭔가요?",
    en: "What's this ___ for?",
    accept: ["charge", "fee"],
    hint: "청구된 금액을 뜻하는 명사",
    note: "리조트 요금이나 도시세가 따로 붙는 경우가 많습니다."
  },
  {
    id: "travel-hotel-40",
    category: "travel-hotel",
    ko: "청구서에 문제가 있는 것 같아요.",
    en: "There seems to be a mistake on my ___.",
    accept: ["bill"],
    hint: "낼 돈이 적힌 문서를 뜻하는 명사",
    note: "호텔 청구서는 bill 또는 folio라고 합니다."
  },
  {
    id: "travel-hotel-41",
    category: "travel-hotel",
    ko: "짐 맡기는 곳이 있나요?",
    en: "Is there a ___ room?",
    accept: ["luggage", "storage", "baggage"],
    hint: "짐 또는 보관을 뜻하는 명사",
    note: "체크아웃 후 관광할 때 유용합니다."
  },
  {
    id: "travel-hotel-42",
    category: "travel-hotel",
    ko: "택시 잡는 것 좀 도와주실 수 있나요?",
    en: "Could you help me ___ a cab?",
    accept: ["hail", "catch"],
    hint: "지나가는 차를 손짓해 세운다는 뜻의 동사",
    note: "hail a taxi가 굳어진 표현입니다."
  },
  {
    id: "travel-hotel-43",
    category: "travel-hotel",
    ko: "공항 셔틀이 있나요?",
    en: "Is there an airport ___?",
    accept: ["shuttle"],
    hint: "정해진 구간을 오가는 차량을 뜻하는 명사",
    note: "무료인 경우 complimentary shuttle이라고 안내합니다."
  },
  {
    id: "travel-hotel-44",
    category: "travel-hotel",
    ko: "근처에 추천할 만한 식당 있나요?",
    en: "Could you ___ a good restaurant nearby?",
    accept: ["recommend", "suggest"],
    hint: "좋은 것을 골라 알려준다는 뜻의 동사",
    note: "프런트 직원은 이런 질문에 익숙합니다."
  },
  {
    id: "travel-hotel-45",
    category: "travel-hotel",
    ko: "모닝콜 좀 부탁드려요.",
    en: "Could I get a ___ call at seven?",
    accept: ["wake-up", "wakeup"],
    hint: "잠에서 깨우는 것을 뜻하는 말. 하이픈 유무 둘 다 인정합니다",
    note: "모닝콜은 콩글리시입니다. 영어로는 wake-up call입니다."
  },
  {
    id: "travel-hotel-46",
    category: "travel-hotel",
    ko: "방 청소는 안 해주셔도 됩니다.",
    en: "No ___ today, please.",
    accept: ["housekeeping"],
    hint: "객실 정리를 담당하는 부서를 뜻하는 말",
    note: "room service는 객실로 음식을 가져다주는 것이라 뜻이 다릅니다. 문에 거는 Do Not Disturb 표지로도 같은 뜻을 전할 수 있습니다."
  },
  {
    id: "travel-hotel-47",
    category: "travel-hotel",
    ko: "몇 시까지 들어와야 하나요?",
    en: "Is there a ___ at night?",
    accept: ["curfew"],
    hint: "정해진 시간 이후 출입을 막는 규칙",
    note: "게스트하우스나 기숙사형 숙소에 있는 경우가 있습니다."
  },
  {
    id: "travel-hotel-48",
    category: "travel-hotel",
    ko: "옆방에서 담배 냄새가 나요.",
    en: "I can ___ smoke from next door.",
    accept: ["smell"],
    hint: "코로 느낀다는 뜻의 동사",
    note: "금연 객실에서 흡연이 적발되면 큰 벌금이 부과되는 곳이 많습니다."
  },
  {
    id: "travel-hotel-49",
    category: "travel-hotel",
    ko: "짐을 두고 왔어요.",
    en: "I ___ something in my room.",
    accept: ["left", "forgot"],
    hint: "물건을 남겨두고 나왔다는 뜻의 동사, 과거형",
    note: "분실물은 lost and found로 접수합니다."
  },
  {
    id: "travel-hotel-50",
    category: "travel-hotel",
    ko: "정말 편안했습니다.",
    en: "It was very ___.",
    accept: ["comfortable"],
    hint: "몸이 편하다는 뜻의 형용사",
    note: "체크아웃할 때 건네면 좋은 인사입니다."
  }
];
