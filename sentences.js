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
    note: "둘 다 자연스럽습니다. 말로 알려주는 것은 tell, 직접 데려가거나 가리켜 보이는 것은 show입니다. 실제 예문에서는 show me the way가 더 많이 쓰입니다."
  },
  {
    id: "travel-out-02",
    category: "travel-out",
    ko: "저기요, 이 자리 누가 앉았나요?",
    en: "Excuse me, is this seat ___?",
    accept: ["taken", "free", "available"],
    hint: "앉아 있는지가 아니라, 주인이 정해졌는지를 묻습니다",
    note: "taken은 '누가 차지했는지'를 묻습니다. free나 available로 '비어 있는지'를 물어도 자연스럽습니다. 다만 empty는 방이나 그릇에 쓰는 말이라 자리에는 어색합니다."
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
    ko: "이 요리에는 뭐가 들어가나요?",
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
    note: "표준 표기는 to-go입니다. doggy bag이라는 표현도 있지만 요즘은 to-go box를 더 많이 씁니다."
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
    ko: "선물 포장 해주시겠어요?",
    en: "Could you ___ it, please? It's a gift.",
    accept: ["wrap", "gift-wrap"],
    hint: "종이나 천으로 감싸는 동작을 뜻하는 동사",
    note: "gift-wrap이라는 한 단어로도 씁니다. 포장지는 wrapping paper입니다."
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
    accept: ["transfer", "change"],
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
    id: "travel-out-51",
    category: "travel-out",
    ko: "예약 안 했는데 자리 있나요?",
    en: "Do you have any tables ___?",
    accept: ["available", "free"],
    hint: "쓸 수 있는 상태라는 뜻의 형용사",
    note: "예약 없이 온 손님을 walk-in이라고 합니다."
  },
  {
    id: "travel-out-52",
    category: "travel-out",
    ko: "대기 시간이 몇 분인가요?",
    en: "How many ___ is the wait?",
    accept: ["minutes"],
    hint: "60초를 뜻하는 단위. 복수형",
    note: "대기 명단은 waiting list라고 합니다."
  },
  {
    id: "travel-out-53",
    category: "travel-out",
    ko: "밖에 앉아도 될까요?",
    en: "Could we sit ___?",
    accept: ["outside", "outdoors"],
    hint: "건물 바깥을 뜻하는 말",
    note: "테라스 자리는 patio라고도 합니다."
  },
  {
    id: "travel-out-54",
    category: "travel-out",
    ko: "이 자리 괜찮을까요?",
    en: "Is this table ___?",
    accept: ["okay", "ok", "fine", "alright"],
    hint: "괜찮다는 뜻의 형용사면 여러 개가 됩니다",
    note: "직원이 자리를 안내하며 묻는 말입니다."
  },
  {
    id: "travel-out-55",
    category: "travel-out",
    ko: "주문할게요.",
    en: "We're ___ to order.",
    accept: ["ready"],
    hint: "준비되었다는 뜻의 형용사",
    note: "직원이 Are you ready to order?라고 먼저 묻기도 합니다."
  },
  {
    id: "travel-out-56",
    category: "travel-out",
    ko: "조금만 더 볼게요.",
    en: "Could we have a little more ___?",
    accept: ["time"],
    hint: "흘러가는 것을 뜻하는 기본 명사",
    note: "메뉴를 더 보고 싶을 때 쓰는 표현입니다."
  },
  {
    id: "travel-out-57",
    category: "travel-out",
    ko: "오늘의 요리가 뭔가요?",
    en: "What's today's ___?",
    accept: ["special"],
    hint: "특별하다는 형용사가 명사로 쓰이면 '오늘의 메뉴'가 됩니다",
    note: "칠판에 Today's Special이라고 적힌 경우가 많습니다."
  },
  {
    id: "travel-out-58",
    category: "travel-out",
    ko: "이건 뭐로 만든 거예요?",
    en: "What's this ___ of?",
    accept: ["made"],
    hint: "만들어졌다는 동사의 과거분사",
    note: "be made of는 재료를 물을 때 씁니다."
  },
  {
    id: "travel-out-59",
    category: "travel-out",
    ko: "양이 많은가요?",
    en: "Is it a big ___?",
    accept: ["portion", "serving"],
    hint: "한 사람 몫의 분량을 뜻하는 명사",
    note: "나눠 먹을 때는 share를 씁니다."
  },
  {
    id: "travel-out-60",
    category: "travel-out",
    ko: "둘이 나눠 먹을게요.",
    en: "We'll ___ it.",
    accept: ["share", "split"],
    hint: "함께 나눈다는 뜻의 동사",
    note: "split the bill은 계산을 나눈다는 뜻입니다."
  },
  {
    id: "travel-out-61",
    category: "travel-out",
    ko: "땅콩이 들어갔나요?",
    en: "Does it ___ peanuts?",
    accept: ["contain", "have"],
    hint: "안에 들어 있다는 뜻의 동사",
    note: "알레르기가 있으면 반드시 확인해야 합니다."
  },
  {
    id: "travel-out-62",
    category: "travel-out",
    ko: "고수는 빼주세요.",
    en: "No cilantro, ___.",
    accept: ["please"],
    hint: "부탁을 부드럽게 만드는 말",
    note: "영국에서는 cilantro 대신 coriander를 씁니다."
  },
  {
    id: "travel-out-63",
    category: "travel-out",
    ko: "소스는 따로 주세요.",
    en: "Could I get the sauce on the ___?",
    accept: ["side"],
    hint: "옆쪽을 뜻하는 명사",
    note: "on the side는 따로 담아 달라는 뜻입니다."
  },
  {
    id: "travel-out-64",
    category: "travel-out",
    ko: "미디엄 레어로 해주세요.",
    en: "Medium ___, please.",
    accept: ["rare"],
    hint: "덜 익힌 상태를 뜻하는 형용사",
    note: "완전히 익힌 것은 well done입니다."
  },
  {
    id: "travel-out-65",
    category: "travel-out",
    ko: "물 좀 리필해 주시겠어요?",
    en: "Could we get a ___ on the water?",
    accept: ["refill"],
    hint: "다시 채워 넣는 것을 뜻하는 명사",
    note: "미국 식당은 물과 음료를 무료로 리필해 주는 곳이 많습니다."
  },
  {
    id: "travel-out-66",
    category: "travel-out",
    ko: "이거 제 것이 아닌 것 같은데요.",
    en: "I don't think this is ___.",
    accept: ["mine"],
    hint: "내 것이라는 뜻의 소유대명사",
    note: "부드럽게 잘못 나온 음식을 알릴 때 씁니다."
  },
  {
    id: "travel-out-67",
    category: "travel-out",
    ko: "음식이 아직 안 나왔어요.",
    en: "Our food hasn't ___ yet.",
    accept: ["arrived", "come"],
    hint: "도착했다는 동사의 과거분사",
    note: "주문한 지 오래됐을 때 정중히 확인하는 표현입니다."
  },
  {
    id: "travel-out-68",
    category: "travel-out",
    ko: "이거 식었어요.",
    en: "This is ___.",
    accept: ["cold"],
    hint: "온도가 낮다는 뜻의 형용사",
    note: "따뜻하게 다시 해달라고 하면 됩니다."
  },
  {
    id: "travel-out-69",
    category: "travel-out",
    ko: "정말 맛있었어요.",
    en: "That was ___.",
    accept: ["delicious", "excellent"],
    hint: "맛이 아주 좋다는 뜻의 형용사",
    note: "직원에게 건네면 좋아하는 인사입니다."
  },
  {
    id: "travel-out-70",
    category: "travel-out",
    ko: "디저트 메뉴 있나요?",
    en: "Do you have a ___ menu?",
    accept: ["dessert"],
    hint: "식사 뒤에 먹는 단 음식",
    note: "철자에 s가 두 개입니다. desert는 사막입니다."
  },
  {
    id: "travel-out-71",
    category: "travel-out",
    ko: "같이 계산해 주세요.",
    en: "We'll pay ___.",
    accept: ["together"],
    hint: "함께라는 뜻의 부사",
    note: "따로 계산은 separately입니다."
  },
  {
    id: "travel-out-72",
    category: "travel-out",
    ko: "영수증 주시겠어요?",
    en: "Could I have the ___, please?",
    accept: ["receipt"],
    hint: "결제 내역이 적힌 종이",
    note: "p를 발음하지 않습니다."
  },
  {
    id: "travel-out-73",
    category: "travel-out",
    ko: "이 근처에 카페 있나요?",
    en: "Is there a ___ around here?",
    accept: ["cafe", "coffee shop"],
    hint: "커피를 파는 가게",
    note: "cafe는 프랑스어에서 온 말이라 악센트를 생략해도 됩니다."
  },
  {
    id: "travel-out-74",
    category: "travel-out",
    ko: "따뜻한 걸로 주세요.",
    en: "Can I get that ___?",
    accept: ["hot"],
    hint: "온도가 높다는 뜻의 형용사",
    note: "차가운 것은 iced로 주문합니다. Iced americano처럼 씁니다."
  },
  {
    id: "travel-out-75",
    category: "travel-out",
    ko: "우유 대신 두유로 해주세요.",
    en: "Could you use soy milk ___?",
    accept: ["instead"],
    hint: "대신이라는 뜻의 부사",
    note: "instead of 뒤에 바꿀 대상을 붙이기도 합니다."
  },
  {
    id: "travel-out-76",
    category: "travel-out",
    ko: "가장 작은 사이즈로 주세요.",
    en: "The ___ size, please.",
    accept: ["smallest"],
    hint: "작다는 형용사의 최상급",
    note: "미국 카페는 small, medium, large로 부릅니다."
  },
  {
    id: "travel-out-77",
    category: "travel-out",
    ko: "여기서 드시나요, 가져가시나요?",
    en: "Is that for here or ___?",
    accept: ["takeaway", "to-go"],
    hint: "가져가는 것을 뜻하는 말",
    note: "미국은 to-go, 영국은 takeaway를 씁니다."
  },
  {
    id: "travel-out-78",
    category: "travel-out",
    ko: "다른 색상도 있나요?",
    en: "Do you have this in another ___?",
    accept: ["color", "colour"],
    hint: "빨강·파랑 같은 것을 통틀어 부르는 명사. 영·미 철자가 다릅니다",
    note: "미국은 color, 영국은 colour로 씁니다."
  },
  {
    id: "travel-out-79",
    category: "travel-out",
    ko: "한 치수 큰 걸로 주세요.",
    en: "Could I get one size ___?",
    accept: ["up", "bigger"],
    hint: "위로 올린다는 방향 또는 크다는 비교급",
    note: "한 치수 작은 것은 one size down입니다."
  },
  {
    id: "travel-out-80",
    category: "travel-out",
    ko: "거울이 어디 있나요?",
    en: "Where's the ___?",
    accept: ["mirror"],
    hint: "모습을 비추는 물건",
    note: "탈의실 안에 있는 경우가 많습니다."
  },
  {
    id: "travel-out-81",
    category: "travel-out",
    ko: "이거 얼마나 할인되나요?",
    en: "How much is it marked ___?",
    accept: ["down"],
    hint: "아래로 내린다는 방향",
    note: "marked down은 값을 내렸다는 뜻입니다."
  },
  {
    id: "travel-out-82",
    category: "travel-out",
    ko: "이건 최종 가격인가요?",
    en: "Is that the ___ price?",
    accept: ["final"],
    hint: "마지막이라는 뜻의 형용사",
    note: "흥정이 가능한 곳에서 확인할 때 씁니다."
  },
  {
    id: "travel-out-83",
    category: "travel-out",
    ko: "조금만 더 깎아주세요.",
    en: "Could you ___ the price a bit?",
    accept: ["lower", "reduce"],
    hint: "값을 아래로 내린다는 뜻의 동사",
    note: "come down a little도 같은 뜻으로 씁니다."
  },
  {
    id: "travel-out-84",
    category: "travel-out",
    ko: "두 개 사면 할인되나요?",
    en: "Is there a discount if I buy ___?",
    accept: ["two"],
    hint: "숫자 2",
    note: "묶음 할인은 bulk discount라고 합니다."
  },
  {
    id: "travel-out-85",
    category: "travel-out",
    ko: "이거 세금 환급 되나요?",
    en: "Can I claim the tax ___ on this?",
    accept: ["back"],
    hint: "되돌려 받는다는 방향을 나타내는 말",
    note: "매장에서 서류를 받아 공항에서 신청합니다."
  },
  {
    id: "travel-out-86",
    category: "travel-out",
    ko: "현금만 받나요?",
    en: "Is it cash ___?",
    accept: ["only"],
    hint: "그것뿐이라는 뜻의 말",
    note: "cash only라고 붙여둔 가게가 많습니다."
  },
  {
    id: "travel-out-87",
    category: "travel-out",
    ko: "봉투는 따로 돈을 내야 하나요?",
    en: "Is the bag ___?",
    accept: ["extra"],
    hint: "값이 따로 붙는다는 뜻의 말",
    note: "유럽은 비닐봉투가 유료인 곳이 많습니다."
  },
  {
    id: "travel-out-88",
    category: "travel-out",
    ko: "교환하고 싶은데요.",
    en: "I'd like to ___ this.",
    accept: ["exchange"],
    hint: "서로 바꾼다는 뜻의 동사",
    note: "환불은 refund, 교환은 exchange입니다."
  },
  {
    id: "travel-out-89",
    category: "travel-out",
    ko: "영수증이 꼭 필요한가요?",
    en: "Is the receipt ___?",
    accept: ["required", "necessary"],
    hint: "반드시 있어야 한다는 뜻의 형용사",
    note: "영수증 없이 교환이 안 되는 곳이 많으니 받아두는 편이 좋습니다."
  },
  {
    id: "travel-out-90",
    category: "travel-out",
    ko: "여기서 얼마나 걸어야 하나요?",
    en: "How far is it on ___?",
    accept: ["foot"],
    hint: "걸어서 간다는 뜻을 만드는 신체 부위. 단수형",
    note: "on foot은 도보를 뜻하는 굳어진 표현입니다."
  },
  {
    id: "travel-out-91",
    category: "travel-out",
    ko: "이 길이 맞나요?",
    en: "Am I ___ the right way?",
    accept: ["going", "heading"],
    hint: "어느 방향으로 나아간다는 동사의 -ing형",
    note: "길을 물을 때 방향만 확인하는 짧은 표현입니다."
  },
  {
    id: "travel-out-92",
    category: "travel-out",
    ko: "저기 신호등에서 건너세요.",
    en: "___ at the traffic light.",
    accept: ["cross"],
    hint: "길을 가로질러 건넌다는 동사",
    note: "횡단보도는 crosswalk 또는 zebra crossing입니다."
  },
  {
    id: "travel-out-93",
    category: "travel-out",
    ko: "두 블록만 더 가세요.",
    en: "Go two more ___.",
    accept: ["blocks"],
    hint: "도로로 나뉜 구역을 뜻하는 명사. 복수형",
    note: "미국식 길 안내에서 자주 쓰입니다."
  },
  {
    id: "travel-out-94",
    category: "travel-out",
    ko: "오른쪽에 있어요.",
    en: "It's on your ___.",
    accept: ["right"],
    hint: "왼쪽의 반대",
    note: "on your right는 진행 방향 기준입니다."
  },
  {
    id: "travel-out-95",
    category: "travel-out",
    ko: "길 건너편에 있어요.",
    en: "It's ___ the street.",
    accept: ["across"],
    hint: "가로질러 맞은편이라는 뜻의 전치사",
    note: "across from은 바로 맞은편을 뜻합니다."
  },
  {
    id: "travel-out-96",
    category: "travel-out",
    ko: "이 버스 시청 가나요?",
    en: "Does this bus ___ to city hall?",
    accept: ["run"],
    hint: "노선이 다닌다는 뜻으로도 쓰는 동사",
    note: "버스나 열차 노선에는 run을 씁니다."
  },
  {
    id: "travel-out-97",
    category: "travel-out",
    ko: "몇 정거장 남았나요?",
    en: "How many ___ to go?",
    accept: ["stops"],
    hint: "버스나 지하철이 서는 곳. 복수형",
    note: "지하철역은 station, 버스는 stop입니다."
  },
  {
    id: "travel-out-98",
    category: "travel-out",
    ko: "카드를 어디에 찍나요?",
    en: "Where do I ___ my card?",
    accept: ["tap", "scan"],
    hint: "가볍게 대는 동작을 뜻하는 동사",
    note: "교통카드 단말기에 대는 것을 tap이라고 합니다."
  },
  {
    id: "travel-out-99",
    category: "travel-out",
    ko: "조금만 더 빨리 가주시겠어요?",
    en: "Could you ___ it up a little?",
    accept: ["speed"],
    hint: "속도를 올린다는 뜻의 동사",
    note: "speed up은 속도를 높인다는 뜻입니다."
  },
  {
    id: "travel-out-100",
    category: "travel-out",
    ko: "요금이 얼마 나왔나요?",
    en: "How much is the ___?",
    accept: ["fare"],
    hint: "교통편에 내는 돈을 뜻하는 명사",
    note: "택시·버스 요금은 fare, 물건값은 price입니다."
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
    accept: ["meet", "see"],
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
    ko: "제 명함 한 장 드릴게요.",
    en: "Here's my ___ card.",
    accept: ["business"],
    hint: "일·회사를 뜻하는 명사. card와 붙어 명함이 됩니다",
    note: "처음 인사할 때는 How do you do?보다 Nice to meet you를 씁니다. How do you do?는 요즘 거의 쓰지 않습니다."
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
    accept: ["looks", "feels"],
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
    accept: ["bite", "meal"],
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
    id: "daily-greeting-51",
    category: "daily-greeting",
    ko: "전화 잘못 거신 것 같아요.",
    en: "I think you have the wrong ___.",
    accept: ["number"],
    hint: "전화기에 누르는 것",
    note: "You've got the wrong number라고도 합니다."
  },
  {
    id: "daily-greeting-52",
    category: "daily-greeting",
    ko: "잠시만요, 바꿔드릴게요.",
    en: "Hold on, I'll ___ you through.",
    accept: ["put"],
    hint: "통화를 연결해 준다는 뜻으로 쓰는 기본 동사",
    note: "put someone through는 전화를 다른 사람에게 돌려준다는 뜻입니다."
  },
  {
    id: "daily-greeting-53",
    category: "daily-greeting",
    ko: "나중에 다시 걸게요.",
    en: "I'll call you ___.",
    accept: ["back"],
    hint: "되돌려 준다는 방향을 나타내는 말",
    note: "call back은 회신 전화를 뜻합니다."
  },
  {
    id: "daily-greeting-54",
    category: "daily-greeting",
    ko: "목소리가 잘 안 들려요.",
    en: "I can't ___ you very well.",
    accept: ["hear"],
    hint: "귀로 하는 동작",
    note: "listen은 의도적으로 귀 기울이는 것이고, hear는 들리는 것입니다."
  },
  {
    id: "daily-greeting-55",
    category: "daily-greeting",
    ko: "오랜만에 연락드려요.",
    en: "It's been a while since we last ___.",
    accept: ["spoke", "talked"],
    hint: "말을 주고받았다는 동사의 과거형",
    note: "since 뒤에는 과거형을 씁니다."
  },
  {
    id: "daily-greeting-56",
    category: "daily-greeting",
    ko: "생일 축하해요!",
    en: "___ birthday!",
    accept: ["happy"],
    hint: "기쁨을 뜻하는 형용사",
    note: "영어권에서는 생일에 Happy birthday만 말해도 충분합니다."
  },
  {
    id: "daily-greeting-57",
    category: "daily-greeting",
    ko: "승진 축하드려요!",
    en: "___ on your promotion!",
    accept: ["congratulations"],
    hint: "축하를 뜻하는 명사. 항상 복수형으로 씁니다",
    note: "단수 congratulation은 쓰지 않습니다. 줄여서 Congrats라고도 합니다."
  },
  {
    id: "daily-greeting-58",
    category: "daily-greeting",
    ko: "즐거운 연휴 보내세요.",
    en: "Have a great ___.",
    accept: ["holiday"],
    hint: "쉬는 기간을 뜻하는 명사",
    note: "미국에서는 연말 인사로 Happy holidays를 씁니다."
  },
  {
    id: "daily-greeting-59",
    category: "daily-greeting",
    ko: "결혼 축하드립니다.",
    en: "___ wishes on your wedding day.",
    accept: ["best"],
    hint: "가장 좋다는 뜻의 최상급",
    note: "Best wishes는 축하 카드에 흔히 쓰는 문구입니다."
  },
  {
    id: "daily-greeting-60",
    category: "daily-greeting",
    ko: "삼가 조의를 표합니다.",
    en: "I'm sorry for your ___.",
    accept: ["loss"],
    hint: "잃음을 뜻하는 명사",
    note: "부고를 들었을 때 쓰는 정해진 표현입니다."
  },
  {
    id: "daily-greeting-61",
    category: "daily-greeting",
    ko: "힘내세요.",
    en: "___ your chin up.",
    accept: ["keep"],
    hint: "그 상태를 유지하라는 뜻의 동사",
    note: "턱을 들고 있으라는 비유로, 낙담한 사람을 격려할 때 씁니다."
  },
  {
    id: "daily-greeting-62",
    category: "daily-greeting",
    ko: "별말씀을요.",
    en: "Don't ___ it.",
    accept: ["mention"],
    hint: "입에 올린다는 뜻의 동사",
    note: "고맙다는 말에 대한 겸손한 대답입니다."
  },
  {
    id: "daily-greeting-63",
    category: "daily-greeting",
    ko: "천만에요.",
    en: "You're ___.",
    accept: ["welcome"],
    hint: "환영한다는 뜻으로도 쓰는 말",
    note: "Thank you에 대한 가장 기본적인 대답입니다."
  },
  {
    id: "daily-greeting-64",
    category: "daily-greeting",
    ko: "덕분에 잘 됐어요.",
    en: "Thanks to ___, it worked out.",
    accept: ["you"],
    hint: "상대를 가리키는 대명사",
    note: "thanks to는 '~덕분에'라는 뜻으로, 나쁜 일에 비꼬아 쓰기도 합니다."
  },
  {
    id: "daily-greeting-65",
    category: "daily-greeting",
    ko: "취미가 뭐예요?",
    en: "What do you do for ___?",
    accept: ["fun"],
    hint: "재미를 뜻하는 명사",
    note: "What's your hobby?는 다소 교과서적으로 들립니다."
  },
  {
    id: "daily-greeting-66",
    category: "daily-greeting",
    ko: "저는 등산을 좋아해요.",
    en: "I'm ___ hiking.",
    accept: ["into"],
    hint: "안으로 들어간다는 전치사가 '푹 빠져 있다'는 뜻이 됩니다",
    note: "be into는 무언가를 즐겨 한다는 구어 표현입니다."
  },
  {
    id: "daily-greeting-67",
    category: "daily-greeting",
    ko: "운동 자주 하세요?",
    en: "Do you ___ out often?",
    accept: ["work"],
    hint: "out과 짝을 이뤄 운동한다는 뜻이 됩니다",
    note: "work out은 헬스나 근력 운동에 주로 씁니다."
  },
  {
    id: "daily-greeting-68",
    category: "daily-greeting",
    ko: "어떤 음악 들으세요?",
    en: "What kind of music do you ___ to?",
    accept: ["listen"],
    hint: "귀를 기울인다는 뜻의 동사",
    note: "listen 뒤에는 항상 to가 붙습니다."
  },
  {
    id: "daily-greeting-69",
    category: "daily-greeting",
    ko: "저는 커피를 잘 못 마셔요.",
    en: "I can't ___ coffee.",
    accept: ["drink", "handle"],
    hint: "마시거나 감당한다는 뜻의 동사",
    note: "can't handle은 카페인이 몸에 안 받는다는 뉘앙스를 담습니다."
  },
  {
    id: "daily-greeting-70",
    category: "daily-greeting",
    ko: "술은 잘 못해요.",
    en: "I'm not much of a ___.",
    accept: ["drinker"],
    hint: "마시는 사람을 뜻하는 명사",
    note: "not much of a는 '그다지 ~는 아니다'라는 겸손한 표현입니다."
  },
  {
    id: "daily-greeting-71",
    category: "daily-greeting",
    ko: "출퇴근 얼마나 걸려요?",
    en: "How long is your ___?",
    accept: ["commute"],
    hint: "집과 직장을 오가는 길을 뜻하는 명사",
    note: "동사로도 같은 형태를 씁니다."
  },
  {
    id: "daily-greeting-72",
    category: "daily-greeting",
    ko: "지하철로 통근해요.",
    en: "I commute by ___.",
    accept: ["subway", "train"],
    hint: "땅속을 달리는 열차",
    note: "by 뒤에는 관사 없이 교통수단을 바로 씁니다."
  },
  {
    id: "daily-greeting-73",
    category: "daily-greeting",
    ko: "반려동물 키우세요?",
    en: "Do you have a ___?",
    accept: ["pet"],
    hint: "집에서 기르는 동물을 뜻하는 명사",
    note: "keep보다 have를 씁니다. keep a pet은 다소 어색합니다."
  },
  {
    id: "daily-greeting-74",
    category: "daily-greeting",
    ko: "고양이 두 마리 키워요.",
    en: "I have two ___.",
    accept: ["cats"],
    hint: "야옹 하고 우는 동물. 복수형",
    note: "두 마리이므로 반드시 복수형을 씁니다."
  },
  {
    id: "daily-greeting-75",
    category: "daily-greeting",
    ko: "어디 사세요?",
    en: "___ do you live?",
    accept: ["where"],
    hint: "장소를 묻는 의문사",
    note: "처음 만난 사이에서는 동네 이름 정도만 말해도 충분합니다."
  },
  {
    id: "daily-greeting-76",
    category: "daily-greeting",
    ko: "회사 근처에 살아요.",
    en: "I live ___ to the office.",
    accept: ["close", "next"],
    hint: "가깝다는 뜻의 말",
    note: "close to는 가까이, next to는 바로 옆을 뜻합니다."
  },
  {
    id: "daily-greeting-77",
    category: "daily-greeting",
    ko: "한국말 잘하시네요.",
    en: "Your Korean is ___.",
    accept: ["great", "good", "excellent"],
    hint: "칭찬하는 형용사면 여러 개가 됩니다",
    note: "You speak Korean well이라고도 합니다."
  },
  {
    id: "daily-greeting-78",
    category: "daily-greeting",
    ko: "조금밖에 못해요.",
    en: "Only a ___.",
    accept: ["little", "bit"],
    hint: "적은 양을 뜻하는 말",
    note: "a little과 a bit 모두 겸손하게 물러설 때 씁니다."
  },
  {
    id: "daily-greeting-79",
    category: "daily-greeting",
    ko: "어느 학교 나오셨어요?",
    en: "Where did you ___ to school?",
    accept: ["go"],
    hint: "장소로 이동한다는 기본 동사",
    note: "go to school은 재학한다는 뜻이라 과거형으로 출신 학교를 묻습니다."
  },
  {
    id: "daily-greeting-80",
    category: "daily-greeting",
    ko: "형제자매 있으세요?",
    en: "Do you have any ___?",
    accept: ["siblings"],
    hint: "형제와 자매를 한꺼번에 부르는 명사",
    note: "형제와 자매를 함께 가리키는 말입니다. 문장을 바꿔 Do you have any brothers or sisters?라고 물어도 됩니다."
  },
  {
    id: "daily-greeting-81",
    category: "daily-greeting",
    ko: "저는 외동이에요.",
    en: "I'm an ___ child.",
    accept: ["only"],
    hint: "하나뿐이라는 뜻의 말",
    note: "an only child가 한 덩어리입니다. a lonely child와 혼동하지 않게 주의합니다."
  },
  {
    id: "daily-greeting-82",
    category: "daily-greeting",
    ko: "결혼하셨어요?",
    en: "Are you ___?",
    accept: ["married"],
    hint: "혼인한 상태를 뜻하는 형용사",
    note: "처음 만난 사이에서는 다소 사적인 질문으로 받아들여질 수 있습니다."
  },
  {
    id: "daily-greeting-83",
    category: "daily-greeting",
    ko: "아이는 몇 명이에요?",
    en: "How many ___ do you have?",
    accept: ["kids", "children"],
    hint: "어린 사람을 뜻하는 명사. 복수형",
    note: "kids가 더 구어적이고 children이 더 격식 있습니다."
  },
  {
    id: "daily-greeting-84",
    category: "daily-greeting",
    ko: "사진 보여드릴게요.",
    en: "Let me ___ you a picture.",
    accept: ["show"],
    hint: "눈으로 보게 해준다는 동사",
    note: "show는 사람과 사물을 나란히 목적어로 받습니다."
  },
  {
    id: "daily-greeting-85",
    category: "daily-greeting",
    ko: "정말 귀엽네요!",
    en: "She's so ___!",
    accept: ["cute", "adorable"],
    hint: "귀여움을 뜻하는 형용사",
    note: "adorable이 cute보다 감탄의 정도가 큽니다."
  },
  {
    id: "daily-greeting-86",
    category: "daily-greeting",
    ko: "요즘 재미있는 일 있어요?",
    en: "Anything ___ going on?",
    accept: ["interesting"],
    hint: "흥미를 끈다는 뜻의 형용사",
    note: "-thing으로 끝나는 대명사는 형용사가 뒤에 옵니다."
  },
  {
    id: "daily-greeting-87",
    category: "daily-greeting",
    ko: "별일 없어요.",
    en: "___ new.",
    accept: ["nothing"],
    hint: "아무것도 없다는 뜻의 대명사",
    note: "What's new?에 대한 짧은 대답입니다."
  },
  {
    id: "daily-greeting-88",
    category: "daily-greeting",
    ko: "요즘 날씨가 오락가락해요.",
    en: "The weather's been ___ lately.",
    accept: ["unpredictable"],
    hint: "미리 알 수 없다는 뜻의 형용사",
    note: "un-(부정) + predict(예측하다) + -able이 합쳐진 말입니다."
  },
  {
    id: "daily-greeting-89",
    category: "daily-greeting",
    ko: "이제 곧 봄이네요.",
    en: "___ is just around the corner.",
    accept: ["spring"],
    hint: "겨울 다음에 오는 계절",
    note: "around the corner는 곧 다가온다는 비유입니다."
  },
  {
    id: "daily-greeting-90",
    category: "daily-greeting",
    ko: "밖이 쌀쌀해요.",
    en: "It's ___ out there.",
    accept: ["chilly"],
    hint: "으슬으슬 춥다는 뜻의 형용사",
    note: "cold보다 약한 추위를 뜻합니다."
  },
  {
    id: "daily-greeting-91",
    category: "daily-greeting",
    ko: "우산 챙기세요.",
    en: "Don't ___ your umbrella.",
    accept: ["forget"],
    hint: "기억하지 못한다는 뜻의 동사",
    note: "Don't forget이 Remember보다 더 자주 쓰입니다."
  },
  {
    id: "daily-greeting-92",
    category: "daily-greeting",
    ko: "감기 조심하세요.",
    en: "___ warm out there.",
    accept: ["stay", "keep"],
    hint: "그 상태를 유지하라는 뜻의 동사",
    note: "헤어질 때 감기 조심하라는 뜻으로 Stay warm을 씁니다. Don't catch a cold는 문법은 맞지만 인사로는 잘 쓰지 않습니다."
  },
  {
    id: "daily-greeting-93",
    category: "daily-greeting",
    ko: "몸은 좀 어떠세요?",
    en: "How are you ___?",
    accept: ["feeling"],
    hint: "몸이나 마음의 상태를 뜻하는 동사 -ing형",
    note: "아픈 사람에게 안부를 물을 때 쓰는 표현입니다."
  },
  {
    id: "daily-greeting-94",
    category: "daily-greeting",
    ko: "많이 좋아졌어요.",
    en: "Much ___, thanks.",
    accept: ["better"],
    hint: "좋다의 비교급",
    note: "much는 비교급을 강조합니다. very better라고 하지 않습니다."
  },
  {
    id: "daily-greeting-95",
    category: "daily-greeting",
    ko: "푹 쉬세요.",
    en: "Get some ___.",
    accept: ["rest"],
    hint: "몸을 쉬게 하는 것을 뜻하는 명사",
    note: "Get some sleep도 같은 상황에 씁니다."
  },
  {
    id: "daily-greeting-96",
    category: "daily-greeting",
    ko: "늦어서 죄송합니다.",
    en: "Sorry I'm ___.",
    accept: ["late"],
    hint: "정해진 시각을 넘겼다는 형용사",
    note: "Sorry for being late가 조금 더 격식 있습니다."
  },
  {
    id: "daily-greeting-97",
    category: "daily-greeting",
    ko: "기다리게 해서 죄송해요.",
    en: "Sorry to keep you ___.",
    accept: ["waiting"],
    hint: "기다린다는 동사의 -ing형",
    note: "keep 뒤에는 -ing형이 옵니다."
  },
  {
    id: "daily-greeting-98",
    category: "daily-greeting",
    ko: "제 실수예요.",
    en: "That was my ___.",
    accept: ["mistake", "fault", "bad"],
    hint: "잘못을 뜻하는 명사",
    note: "My bad는 아주 가벼운 사과로, 격식 있는 자리에는 쓰지 않습니다."
  },
  {
    id: "daily-greeting-99",
    category: "daily-greeting",
    ko: "괜찮아요, 신경 쓰지 마세요.",
    en: "It's fine, don't ___ about it.",
    accept: ["worry"],
    hint: "걱정한다는 뜻의 동사",
    note: "Don't worry about it은 사과를 받아줄 때 쓰는 정해진 대답입니다."
  },
  {
    id: "daily-greeting-100",
    category: "daily-greeting",
    ko: "언제 한번 놀러 오세요.",
    en: "Come ___ sometime.",
    accept: ["over"],
    hint: "집으로 건너온다는 방향을 나타내는 말",
    note: "come over는 남의 집에 방문한다는 뜻입니다."
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
    accept: ["trouble", "bother"],
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
    accept: ["bothering", "troubling", "disturbing", "interrupting"],
    hint: "방해한다는 뜻의 동사 -ing형",
    note: "일하는 사람에게 말을 걸 때 먼저 붙이면 좋습니다. interrupting이 가장 흔하게 쓰입니다."
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
    id: "daily-request-51",
    category: "daily-request",
    ko: "좀 급한 일이라서요.",
    en: "It's kind of ___.",
    accept: ["urgent"],
    hint: "빨리 처리해야 한다는 뜻의 형용사",
    note: "kind of를 앞에 붙이면 재촉하는 느낌이 덜해집니다."
  },
  {
    id: "daily-request-52",
    category: "daily-request",
    ko: "제 소개 좀 해도 될까요?",
    en: "May I ___ myself?",
    accept: ["introduce"],
    hint: "안으로 이끈다는 어원을 가진 동사",
    note: "introduce oneself는 자기소개를 한다는 뜻입니다."
  },
  {
    id: "daily-request-53",
    category: "daily-request",
    ko: "옆으로 조금만 비켜주실 수 있을까요?",
    en: "Could you ___ over a bit?",
    accept: ["scoot", "move", "shift"],
    hint: "옆으로 비켜준다는 뜻의 동사",
    note: "scoot over는 벤치나 좌석에서 옆으로 밀어 앉아 달라는 편한 표현입니다."
  },
  {
    id: "daily-request-54",
    category: "daily-request",
    ko: "이것 좀 잡아주세요.",
    en: "Could you ___ this steady?",
    accept: ["hold"],
    hint: "손으로 붙들고 있으라는 동사",
    note: "hold steady는 흔들리지 않게 붙잡아 달라는 뜻입니다."
  },
  {
    id: "daily-request-55",
    category: "daily-request",
    ko: "불 좀 켜주시겠어요?",
    en: "Could you ___ on the light?",
    accept: ["turn", "switch"],
    hint: "on과 짝을 이뤄 작동시킨다는 동사",
    note: "turn on과 switch on 모두 씁니다. 끄는 것은 turn off입니다."
  },
  {
    id: "daily-request-56",
    category: "daily-request",
    ko: "짐 좀 같이 들어주실래요?",
    en: "Could you help me ___ these bags upstairs?",
    accept: ["carry"],
    hint: "손에 들고 나른다는 뜻의 동사",
    note: "carry는 들고 이동하는 것, hold는 그 자리에서 붙잡고 있는 것입니다."
  },
  {
    id: "daily-request-57",
    category: "daily-request",
    ko: "길 좀 비켜주시겠어요?",
    en: "Could you ___ me through, please?",
    accept: ["let"],
    hint: "허락한다는 뜻의 동사",
    note: "Excuse me만 말해도 같은 뜻이 전해집니다."
  },
  {
    id: "daily-request-58",
    category: "daily-request",
    ko: "제 자리를 양보해 드릴게요.",
    en: "You can ___ my seat.",
    accept: ["have", "take"],
    hint: "가져가라는 뜻의 기본 동사",
    note: "Take my seat이라고 짧게 말해도 됩니다."
  },
  {
    id: "daily-request-59",
    category: "daily-request",
    ko: "이것 좀 확인해 주실 수 있나요?",
    en: "Could you ___ this, please?",
    accept: ["check", "verify"],
    hint: "맞는지 살펴본다는 동사",
    note: "체크인의 그 동사와 같은 말입니다."
  },
  {
    id: "daily-request-60",
    category: "daily-request",
    ko: "제가 먼저 해도 될까요?",
    en: "Do you mind if I go ___?",
    accept: ["first", "ahead"],
    hint: "순서상 앞선다는 말",
    note: "go first와 go ahead 모두 순서를 앞당길 때 씁니다."
  },
  {
    id: "daily-request-61",
    category: "daily-request",
    ko: "천천히 하셔도 돼요.",
    en: "___ your time.",
    accept: ["take"],
    hint: "시간을 가져가라는 뜻의 동사",
    note: "서두르는 상대를 안심시킬 때 쓰는 표현입니다."
  },
  {
    id: "daily-request-62",
    category: "daily-request",
    ko: "제가 도와드릴게요.",
    en: "Let me ___ in.",
    accept: ["pitch"],
    hint: "던져 넣는다는 동사가 '거들다'라는 뜻이 됩니다",
    note: "pitch in은 여럿이 함께 일을 거든다는 뜻입니다."
  },
  {
    id: "daily-request-63",
    category: "daily-request",
    ko: "이것 좀 부탁드려도 될까요?",
    en: "Can I ___ on you for this?",
    accept: ["count", "rely", "depend"],
    hint: "믿고 기댄다는 뜻의 동사",
    note: "count on은 '믿는다'는 뜻으로, 부탁 앞에 붙이면 정중해집니다."
  },
  {
    id: "daily-request-64",
    category: "daily-request",
    ko: "제 몫까지 부탁드려요.",
    en: "Could you ___ for me too?",
    accept: ["order"],
    hint: "음식을 시킨다는 동사",
    note: "식당에서 먼저 자리를 비울 때 쓰는 표현입니다."
  },
  {
    id: "daily-request-65",
    category: "daily-request",
    ko: "조금만 옆으로 가주세요.",
    en: "Could you ___ aside, please?",
    accept: ["step", "stand"],
    hint: "발을 옮겨 비켜서라는 동사",
    note: "step aside는 길을 터 달라는 정중한 표현입니다."
  },
  {
    id: "daily-request-66",
    category: "daily-request",
    ko: "불 좀 꺼주시겠어요?",
    en: "Would you mind ___ off the light?",
    accept: ["turning", "switching"],
    hint: "작동을 멈춘다는 동사의 -ing형",
    note: "mind 뒤에는 -ing형이 옵니다. 켜는 것은 turn on입니다."
  },
  {
    id: "daily-request-67",
    category: "daily-request",
    ko: "그 말 제가 전해드릴까요?",
    en: "Should I ___ on the message?",
    accept: ["pass"],
    hint: "건네준다는 뜻의 동사",
    note: "pass on은 말을 다른 사람에게 전달한다는 뜻입니다."
  },
  {
    id: "daily-request-68",
    category: "daily-request",
    ko: "이 건은 회신 좀 부탁드립니다.",
    en: "Please ___ back to me on this.",
    accept: ["get"],
    hint: "회신한다는 뜻을 만드는 기본 동사",
    note: "get back to someone은 나중에 답을 준다는 뜻입니다."
  },
  {
    id: "daily-request-69",
    category: "daily-request",
    ko: "제가 좀 늦을 것 같아요.",
    en: "I'm running a bit ___.",
    accept: ["late", "behind"],
    hint: "시간에 뒤처졌다는 뜻의 말",
    note: "running late는 이동 중에 늦고 있다는 뉘앙스를 담습니다."
  },
  {
    id: "daily-request-70",
    category: "daily-request",
    ko: "조금만 기다려 주실 수 있나요?",
    en: "Could you bear with me for a ___?",
    accept: ["bit"],
    hint: "아주 짧은 동안을 뜻하는 말",
    note: "bear with me는 양해를 구하는 정중한 표현입니다."
  },
  {
    id: "daily-request-71",
    category: "daily-request",
    ko: "이거 어떻게 하는지 보여주실래요?",
    en: "Could you ___ me how it works?",
    accept: ["show"],
    hint: "직접 해 보이며 알려주는 동사",
    note: "how it works는 작동 방식을 뜻합니다."
  },
  {
    id: "daily-request-72",
    category: "daily-request",
    ko: "제가 한번 봐도 될까요?",
    en: "Mind if I take a ___?",
    accept: ["look", "peek"],
    hint: "눈으로 하는 동작을 명사로 씁니다",
    note: "peek는 살짝 엿본다는 뉘앙스입니다."
  },
  {
    id: "daily-request-73",
    category: "daily-request",
    ko: "이건 제가 맡을게요.",
    en: "I've got ___.",
    accept: ["this", "it"],
    hint: "가까이 있는 것을 가리키는 대명사",
    note: "I've got this는 '내가 알아서 할게'라는 자신 있는 표현입니다."
  },
  {
    id: "daily-request-74",
    category: "daily-request",
    ko: "제가 알아볼게요.",
    en: "I'll ___ into it.",
    accept: ["look", "check"],
    hint: "안을 들여다본다는 뜻의 동사",
    note: "look into는 조사하거나 알아본다는 뜻입니다."
  },
  {
    id: "daily-request-75",
    category: "daily-request",
    ko: "조금만 더 설명해 주시겠어요?",
    en: "Could you ___ that a bit more?",
    accept: ["explain"],
    hint: "까닭이나 방법을 밝혀준다는 동사",
    note: "더 격식 있게 말하려면 Could you elaborate on that?이라고 합니다. elaborate는 on 없이 목적어를 받지 못합니다."
  },
  {
    id: "daily-request-76",
    category: "daily-request",
    ko: "예를 들어 주실 수 있나요?",
    en: "Could you give me an ___?",
    accept: ["example"],
    hint: "본보기를 뜻하는 명사",
    note: "for example은 문장 안에서 예를 들 때 씁니다."
  },
  {
    id: "daily-request-77",
    category: "daily-request",
    ko: "제 말 이해되세요?",
    en: "Does that make ___?",
    accept: ["sense"],
    hint: "말이 통한다는 뜻을 만드는 명사",
    note: "Do you understand?보다 상대를 덜 무안하게 만듭니다."
  },
  {
    id: "daily-request-78",
    category: "daily-request",
    ko: "조용히 해주시겠어요?",
    en: "Could you be a bit ___, please?",
    accept: ["quieter"],
    hint: "소리가 적다는 형용사의 비교급",
    note: "Could you keep it down?이 조금 더 직접적인 표현입니다."
  },
  {
    id: "daily-request-79",
    category: "daily-request",
    ko: "자리 좀 맡아드릴까요?",
    en: "Should I ___ you a seat?",
    accept: ["save", "get"],
    hint: "남겨둔다는 뜻의 동사",
    note: "save a seat이 가장 흔합니다."
  },
  {
    id: "daily-request-80",
    category: "daily-request",
    ko: "제가 태워다 드릴까요?",
    en: "Do you need a ___?",
    accept: ["ride", "lift"],
    hint: "차를 얻어 타는 것을 뜻하는 명사",
    note: "미국은 ride, 영국은 lift를 씁니다."
  },
  {
    id: "daily-request-81",
    category: "daily-request",
    ko: "이거 좀 옮겨주시겠어요?",
    en: "Could you ___ this over there?",
    accept: ["put", "move"],
    hint: "다른 자리에 놓는다는 동사",
    note: "put over there는 위치를 옮겨 달라는 뜻입니다."
  },
  {
    id: "daily-request-82",
    category: "daily-request",
    ko: "제 이름 좀 적어주세요.",
    en: "Could you ___ my name down?",
    accept: ["put", "write"],
    hint: "종이에 적는다는 동사",
    note: "put down은 명단에 이름을 올린다는 뜻으로도 씁니다."
  },
  {
    id: "daily-request-83",
    category: "daily-request",
    ko: "괜찮으시면 제가 할게요.",
    en: "I'll do it, if that ___ for you.",
    accept: ["works"],
    hint: "일이 되게 한다는 동사. 3인칭 단수형",
    note: "work for someone은 '~에게 괜찮다'는 뜻으로 일정 조율에 자주 씁니다."
  },
  {
    id: "daily-request-84",
    category: "daily-request",
    ko: "혹시 무리한 부탁인가요?",
    en: "Am I asking too ___?",
    accept: ["much"],
    hint: "양이 많다는 뜻의 말",
    note: "부탁이 과한지 스스로 확인할 때 씁니다."
  },
  {
    id: "daily-request-85",
    category: "daily-request",
    ko: "거절하셔도 서운하지 않아요.",
    en: "I won't be ___ if you say no.",
    accept: ["offended", "upset", "hurt"],
    hint: "기분이 상했다는 뜻의 형용사",
    note: "상대가 편하게 거절할 수 있게 해주는 표현입니다."
  },
  {
    id: "daily-request-86",
    category: "daily-request",
    ko: "제가 뭐 도울 일 있을까요?",
    en: "Is there ___ I can do?",
    accept: ["anything"],
    hint: "무엇이든 가리키는 대명사",
    note: "의문문에서는 something 대신 anything을 씁니다."
  },
  {
    id: "daily-request-87",
    category: "daily-request",
    ko: "필요하시면 말씀만 하세요.",
    en: "Just ___ the word.",
    accept: ["say"],
    hint: "입으로 소리 내는 동사",
    note: "Just say the word는 '말만 하면 바로 하겠다'는 뜻입니다."
  },
  {
    id: "daily-request-88",
    category: "daily-request",
    ko: "제가 처리할게요.",
    en: "I'll ___ it from here.",
    accept: ["take", "handle"],
    hint: "이어받아 처리한다는 뜻을 만드는 동사",
    note: "take it from here가 가장 흔합니다. handle it from here도 같은 뜻입니다."
  },
  {
    id: "daily-request-89",
    category: "daily-request",
    ko: "조금만 참아주세요.",
    en: "Please ___ with me a little longer.",
    accept: ["bear"],
    hint: "견딘다는 뜻의 동사",
    note: "bear with me는 기다려 달라는 정중한 표현입니다."
  },
  {
    id: "daily-request-90",
    category: "daily-request",
    ko: "일정 확인 좀 부탁드려요.",
    en: "Could you ___ the schedule?",
    accept: ["confirm", "check"],
    hint: "사실인지 못 박는다는 동사",
    note: "confirm은 예약이나 일정을 확정할 때 씁니다."
  },
  {
    id: "daily-request-91",
    category: "daily-request",
    ko: "제가 자리를 비울게요.",
    en: "I'll give you two some ___.",
    accept: ["privacy", "space"],
    hint: "방해받지 않는 상태를 뜻하는 명사",
    note: "give someone space는 혼자 있게 해준다는 뜻입니다."
  },
  {
    id: "daily-request-92",
    category: "daily-request",
    ko: "조금 더 큰 걸로 주시겠어요?",
    en: "Could I get a ___ one?",
    accept: ["bigger", "larger"],
    hint: "크다는 형용사의 비교급",
    note: "작은 것은 smaller입니다."
  },
  {
    id: "daily-request-93",
    category: "daily-request",
    ko: "혹시 여분 있으세요?",
    en: "Do you have a ___ one?",
    accept: ["spare"],
    hint: "남는 것을 뜻하는 형용사",
    note: "spare key, spare tire처럼 명사 앞에 붙여 씁니다."
  },
  {
    id: "daily-request-94",
    category: "daily-request",
    ko: "이거 가져가도 될까요?",
    en: "Can I ___ this with me?",
    accept: ["bring", "take"],
    hint: "물건을 지니고 이동한다는 뜻의 기본 동사. 두 가지가 다 됩니다",
    note: "가는 곳으로 함께 가져가는 것은 bring, 지금 있는 곳에서 가지고 나가는 것은 take입니다. with me를 붙이면 둘 다 자연스럽습니다."
  },
  {
    id: "daily-request-95",
    category: "daily-request",
    ko: "제가 나중에 갚을게요.",
    en: "I'll ___ you back later.",
    accept: ["pay"],
    hint: "돈을 돌려준다는 동사",
    note: "pay back은 빌린 돈을 갚는다는 뜻입니다."
  },
  {
    id: "daily-request-96",
    category: "daily-request",
    ko: "부담 드려서 죄송해요.",
    en: "Sorry to ___ you with this.",
    accept: ["burden", "trouble"],
    hint: "짐을 지운다는 뜻의 동사",
    note: "burden은 무게를 지운다는 비유입니다."
  },
  {
    id: "daily-request-97",
    category: "daily-request",
    ko: "염치없지만 하나만 더요.",
    en: "I hate to be a ___, but one more thing.",
    accept: ["pest", "nuisance"],
    hint: "귀찮게 구는 사람을 뜻하는 명사",
    note: "be a pest는 스스로를 낮추며 부탁을 덧붙일 때 씁니다."
  },
  {
    id: "daily-request-98",
    category: "daily-request",
    ko: "제 대신 좀 가주실 수 있나요?",
    en: "Could you go in my ___?",
    accept: ["place"],
    hint: "자리를 뜻하는 명사",
    note: "in my place는 '나 대신'이라는 뜻입니다. in my stead도 같은 뜻이지만 요즘 말로는 쓰지 않습니다."
  },
  {
    id: "daily-request-99",
    category: "daily-request",
    ko: "이건 우리끼리만 알고 있어요.",
    en: "This stays between ___.",
    accept: ["us"],
    hint: "우리를 가리키는 대명사의 목적격",
    note: "between us는 둘만 알고 있자는 뜻입니다."
  },
  {
    id: "daily-request-100",
    category: "daily-request",
    ko: "덕분에 살았어요.",
    en: "You're a ___.",
    accept: ["lifesaver"],
    hint: "목숨을 구해준 사람을 뜻하는 한 단어",
    note: "큰 도움을 받았을 때 쓰는 과장 섞인 감사 표현입니다."
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
    accept: ["sure", "certain"],
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
    accept: ["nervous", "anxious"],
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
    accept: ["hard", "difficult"],
    hint: "어렵다는 뜻의 짧은 형용사",
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
    accept: ["honest", "frank"],
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
    ko: "제 생각도 그래요.",
    en: "That's what I ___.",
    accept: ["think", "thought"],
    hint: "머릿속으로 하는 동작을 뜻하는 동사",
    note: "That's what I thought는 '내 짐작이 맞았다'는 뉘앙스를 담습니다."
  },
  {
    id: "daily-opinion-22",
    category: "daily-opinion",
    ko: "아직 결정을 못 했어요.",
    en: "I haven't made up my ___ yet.",
    accept: ["mind"],
    hint: "생각을 담는 곳을 뜻하는 명사",
    note: "make up one's mind는 결심한다는 뜻의 한 덩어리입니다. decide보다 구어적입니다."
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
    accept: ["scared", "afraid"],
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
    accept: ["handle", "take"],
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
    ko: "편하실 대로 하세요.",
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
    accept: ["honestly", "frankly"],
    hint: "'정직한'이라는 형용사에서 나온 부사",
    note: "Honestly는 문장 앞에서 '솔직히 말하면'이라는 뜻으로 씁니다."
  },
  {
    id: "daily-opinion-51",
    category: "daily-opinion",
    ko: "저도 같은 생각이에요.",
    en: "That's how I ___ too.",
    accept: ["feel"],
    hint: "마음으로 느낀다는 뜻의 동사",
    note: "I agree보다 부드럽게 동의를 표현합니다."
  },
  {
    id: "daily-opinion-52",
    category: "daily-opinion",
    ko: "말도 안 돼요.",
    en: "That's completely ___.",
    accept: ["ridiculous", "absurd"],
    hint: "터무니없다는 뜻의 말",
    note: "강한 부정이라 상대를 자극할 수 있습니다."
  },
  {
    id: "daily-opinion-53",
    category: "daily-opinion",
    ko: "어느 정도는 동의해요.",
    en: "I agree to some ___.",
    accept: ["extent", "degree"],
    hint: "정도나 범위를 뜻하는 명사",
    note: "to some extent는 부분적으로 동의할 때 쓰는 완충 표현입니다."
  },
  {
    id: "daily-opinion-54",
    category: "daily-opinion",
    ko: "그건 경우에 따라 달라요.",
    en: "It ___ on the situation.",
    accept: ["depends"],
    hint: "기댄다는 뜻의 동사. 3인칭 단수형",
    note: "It depends만 짧게 말해도 통합니다."
  },
  {
    id: "daily-opinion-55",
    category: "daily-opinion",
    ko: "마음이 좀 복잡해요.",
    en: "I have mixed ___ about it.",
    accept: ["feelings"],
    hint: "마음의 상태를 뜻하는 명사. 복수형",
    note: "mixed feelings는 좋기도 하고 나쁘기도 한 복잡한 심경입니다."
  },
  {
    id: "daily-opinion-56",
    category: "daily-opinion",
    ko: "솔직히 좀 놀랐어요.",
    en: "I was a bit ___, to be honest.",
    accept: ["surprised", "taken aback"],
    hint: "예상 밖이라 놀랐다는 형용사",
    note: "taken aback은 뜻밖의 일에 당황했다는 뜻입니다."
  },
  {
    id: "daily-opinion-57",
    category: "daily-opinion",
    ko: "기분이 좀 상했어요.",
    en: "That kind of ___ my feelings.",
    accept: ["hurt"],
    hint: "아프게 한다는 뜻의 동사. 과거형도 같은 형태",
    note: "hurt는 현재형과 과거형이 같습니다."
  },
  {
    id: "daily-opinion-58",
    category: "daily-opinion",
    ko: "저는 신경 쓰여요.",
    en: "It ___ me a little.",
    accept: ["bothers"],
    hint: "거슬리게 한다는 동사. 3인칭 단수형",
    note: "bother는 크지 않은 불편을 나타냅니다."
  },
  {
    id: "daily-opinion-59",
    category: "daily-opinion",
    ko: "그럴 만해요.",
    en: "That's ___ enough.",
    accept: ["reasonable"],
    hint: "이치에 맞는다는 뜻의 형용사",
    note: "상대의 행동을 이해한다고 인정할 때 씁니다."
  },
  {
    id: "daily-opinion-60",
    category: "daily-opinion",
    ko: "저는 별로 관심 없어요.",
    en: "I'm not ___ interested.",
    accept: ["particularly", "especially"],
    hint: "특별히라는 뜻의 부사",
    note: "not particularly는 완곡하게 거절할 때 씁니다."
  },
  {
    id: "daily-opinion-61",
    category: "daily-opinion",
    ko: "생각보다 어렵네요.",
    en: "It's ___ than I thought.",
    accept: ["harder", "tougher"],
    hint: "어렵다는 형용사의 비교급",
    note: "than I thought는 예상과 비교할 때 씁니다."
  },
  {
    id: "daily-opinion-62",
    category: "daily-opinion",
    ko: "할 만해요.",
    en: "It's pretty ___.",
    accept: ["manageable", "doable"],
    hint: "감당할 수 있다는 뜻의 형용사",
    note: "manage(해내다)에 -able이 붙은 말입니다. doable은 '할 수 있다'는 뜻입니다."
  },
  {
    id: "daily-opinion-63",
    category: "daily-opinion",
    ko: "저는 찬성이에요.",
    en: "I'm all ___ it.",
    accept: ["for"],
    hint: "편을 든다는 뜻의 전치사",
    note: "I'm all for it은 적극 찬성한다는 뜻입니다."
  },
  {
    id: "daily-opinion-64",
    category: "daily-opinion",
    ko: "좀 지나친 것 같아요.",
    en: "That's a bit much, don't you ___?",
    accept: ["think", "agree"],
    hint: "머릿속으로 판단한다는 동사",
    note: "don't you think는 상대의 동의를 구하는 부가 의문입니다."
  },
  {
    id: "daily-opinion-65",
    category: "daily-opinion",
    ko: "저는 좀 회의적이에요.",
    en: "I'm a little ___ about it.",
    accept: ["skeptical", "doubtful"],
    hint: "의심스럽다는 뜻의 형용사",
    note: "skeptical은 증거가 부족해 믿기 어렵다는 뉘앙스입니다."
  },
  {
    id: "daily-opinion-66",
    category: "daily-opinion",
    ko: "정말 대단하네요.",
    en: "That's really ___.",
    accept: ["impressive", "amazing", "remarkable"],
    hint: "감탄을 자아낸다는 뜻의 형용사",
    note: "impressive는 실력이나 성과에 주로 씁니다."
  },
  {
    id: "daily-opinion-67",
    category: "daily-opinion",
    ko: "좀 아쉬워요.",
    en: "It's a bit of a ___.",
    accept: ["shame", "pity"],
    hint: "안타까움을 뜻하는 명사",
    note: "What a shame은 유감을 나타내는 흔한 표현입니다."
  },
  {
    id: "daily-opinion-68",
    category: "daily-opinion",
    ko: "저는 상관 안 해요.",
    en: "It makes no ___ to me.",
    accept: ["difference"],
    hint: "다름을 뜻하는 명사",
    note: "makes no difference는 어느 쪽이든 괜찮다는 뜻입니다."
  },
  {
    id: "daily-opinion-69",
    category: "daily-opinion",
    ko: "솔직히 지쳤어요.",
    en: "I'm ___ out, honestly.",
    accept: ["worn", "burned"],
    hint: "닳아 없어졌다는 비유의 과거분사",
    note: "worn out은 몸이, burned out은 마음이 소진된 상태입니다."
  },
  {
    id: "daily-opinion-70",
    category: "daily-opinion",
    ko: "저는 좀 부담스러워요.",
    en: "It feels like a lot of ___.",
    accept: ["pressure"],
    hint: "누르는 힘을 뜻하는 명사",
    note: "a lot of pressure는 심리적 압박이 크다는 뜻입니다."
  },
  {
    id: "daily-opinion-71",
    category: "daily-opinion",
    ko: "딱히 할 말이 없네요.",
    en: "I'm at a ___ for words.",
    accept: ["loss"],
    hint: "잃어버림을 뜻하는 명사",
    note: "at a loss for words는 말문이 막혔다는 뜻입니다."
  },
  {
    id: "daily-opinion-72",
    category: "daily-opinion",
    ko: "저는 그렇게 안 봐요.",
    en: "I don't see it that ___.",
    accept: ["way"],
    hint: "방식이나 관점을 뜻하는 명사",
    note: "부드럽게 반대 의견을 낼 때 씁니다."
  },
  {
    id: "daily-opinion-73",
    category: "daily-opinion",
    ko: "충분히 이해해요.",
    en: "I totally ___.",
    accept: ["understand", "get it"],
    hint: "뜻을 알아듣는다는 동사",
    note: "I totally get it이 더 구어적입니다."
  },
  {
    id: "daily-opinion-74",
    category: "daily-opinion",
    ko: "좀 어색했어요.",
    en: "It was a little ___.",
    accept: ["awkward"],
    hint: "어색하고 불편하다는 뜻의 형용사",
    note: "분위기나 상황에 두루 씁니다."
  },
  {
    id: "daily-opinion-75",
    category: "daily-opinion",
    ko: "기대를 안 했는데 좋았어요.",
    en: "I had low ___, but it was good.",
    accept: ["expectations"],
    hint: "기대를 뜻하는 명사. 복수형",
    note: "low expectations는 기대를 낮췄다는 뜻입니다."
  },
  {
    id: "daily-opinion-76",
    category: "daily-opinion",
    ko: "조금 실망했어요.",
    en: "It fell ___ of what I hoped.",
    accept: ["short"],
    hint: "길이가 모자란다는 형용사",
    note: "fall short of는 기대에 못 미친다는 뜻입니다."
  },
  {
    id: "daily-opinion-77",
    category: "daily-opinion",
    ko: "그 말이 와닿네요.",
    en: "That ___ with me.",
    accept: ["resonates", "sits well"],
    hint: "울림을 준다는 뜻의 동사. 3인칭 단수형",
    note: "resonate with는 공감이 된다는 뜻입니다."
  },
  {
    id: "daily-opinion-78",
    category: "daily-opinion",
    ko: "좀 두고 봐야죠.",
    en: "We'll have to ___ and see.",
    accept: ["wait"],
    hint: "기다린다는 뜻의 동사",
    note: "wait and see는 판단을 미룬다는 뜻입니다."
  },
  {
    id: "daily-opinion-79",
    category: "daily-opinion",
    ko: "저도 그럴 줄 몰랐어요.",
    en: "I didn't see that ___.",
    accept: ["coming"],
    hint: "다가온다는 동사의 -ing형",
    note: "didn't see it coming은 전혀 예상 못 했다는 뜻입니다."
  },
  {
    id: "daily-opinion-80",
    category: "daily-opinion",
    ko: "여기 공기가 답답해요.",
    en: "It's so ___ in here.",
    accept: ["stuffy", "stifling"],
    hint: "공기가 탁해 숨이 막힌다는 뜻의 형용사",
    note: "stuffy는 환기가 안 된 실내에, stifling은 더워서 숨 막힐 때 씁니다. 마음이 답답한 것은 frustrating입니다."
  },
  {
    id: "daily-opinion-81",
    category: "daily-opinion",
    ko: "마음이 편해졌어요.",
    en: "I feel much more at ___ now.",
    accept: ["ease"],
    hint: "편안함을 뜻하는 명사",
    note: "at ease는 긴장이 풀린 상태입니다."
  },
  {
    id: "daily-opinion-82",
    category: "daily-opinion",
    ko: "좀 억울해요.",
    en: "It feels ___.",
    accept: ["unfair"],
    hint: "공평하지 않다는 뜻의 형용사",
    note: "fair 앞에 un-을 붙여 반대 뜻을 만듭니다."
  },
  {
    id: "daily-opinion-83",
    category: "daily-opinion",
    ko: "제 탓인 것 같아요.",
    en: "I think it was my ___.",
    accept: ["fault"],
    hint: "잘못을 뜻하는 명사",
    note: "my fault는 책임을 인정하는 말입니다."
  },
  {
    id: "daily-opinion-84",
    category: "daily-opinion",
    ko: "신경 쓰지 않으려고요.",
    en: "I'm trying not to ___ on it.",
    accept: ["dwell"],
    hint: "한곳에 오래 머문다는 뜻의 동사",
    note: "dwell on은 안 좋은 일을 곱씹는다는 뜻입니다."
  },
  {
    id: "daily-opinion-85",
    category: "daily-opinion",
    ko: "결국 잘 풀렸어요.",
    en: "It ___ out in the end.",
    accept: ["worked"],
    hint: "일이 되게 한다는 동사의 과거형",
    note: "work out은 결과가 잘 나왔다는 뜻입니다."
  },
  {
    id: "daily-opinion-86",
    category: "daily-opinion",
    ko: "저는 낙관적이에요.",
    en: "I'm ___ about how it'll turn out.",
    accept: ["optimistic", "hopeful"],
    hint: "앞날을 밝게 본다는 뜻의 형용사",
    note: "반대말은 pessimistic입니다."
  },
  {
    id: "daily-opinion-87",
    category: "daily-opinion",
    ko: "좀 무리인 것 같아요.",
    en: "That might be a ___.",
    accept: ["stretch"],
    hint: "잡아 늘인다는 동사가 명사로 쓰이면 '무리'가 됩니다",
    note: "a bit of a stretch는 근거가 약하다는 뜻으로도 씁니다."
  },
  {
    id: "daily-opinion-88",
    category: "daily-opinion",
    ko: "굳이 그럴 필요 있을까요?",
    en: "Is that really ___?",
    accept: ["necessary"],
    hint: "꼭 있어야 한다는 뜻의 형용사",
    note: "부드럽게 반대할 때 쓰는 물음입니다."
  },
  {
    id: "daily-opinion-89",
    category: "daily-opinion",
    ko: "차라리 그게 낫겠어요.",
    en: "I'd ___ do that.",
    accept: ["rather"],
    hint: "차라리라는 뜻의 부사",
    note: "would rather 뒤에는 동사원형이 옵니다."
  },
  {
    id: "daily-opinion-90",
    category: "daily-opinion",
    ko: "많이 배웠어요.",
    en: "I ___ a lot from it.",
    accept: ["learned", "learnt"],
    hint: "배운다는 동사의 과거형. 철자가 두 가지입니다",
    note: "미국은 learned, 영국은 learnt를 주로 씁니다."
  },
  {
    id: "daily-opinion-91",
    category: "daily-opinion",
    ko: "그건 처음 듣는데요.",
    en: "That's ___ to me.",
    accept: ["news"],
    hint: "새로 듣는 소식을 뜻하는 명사",
    note: "That's news to me는 처음 듣는다는 뜻입니다."
  },
  {
    id: "daily-opinion-92",
    category: "daily-opinion",
    ko: "그건 좀 아닌 것 같아요.",
    en: "I'm not ___ on that idea.",
    accept: ["sold", "keen"],
    hint: "설득되었다는 뜻의 과거분사",
    note: "not sold on은 아직 납득이 안 된다는 뜻입니다."
  },
  {
    id: "daily-opinion-93",
    category: "daily-opinion",
    ko: "제 취향은 아니에요.",
    en: "It's not my ___ of tea.",
    accept: ["cup"],
    hint: "차를 담는 그릇",
    note: "not my cup of tea는 취향이 아니라는 영국식 관용구입니다."
  },
  {
    id: "daily-opinion-94",
    category: "daily-opinion",
    ko: "저는 마음이 놓여요.",
    en: "That's ___ to hear.",
    accept: ["reassuring"],
    hint: "다시 안심시켜 준다는 뜻의 형용사",
    note: "re-(다시) + assure(안심시키다)가 합쳐진 말입니다."
  },
  {
    id: "daily-opinion-95",
    category: "daily-opinion",
    ko: "좀 헷갈리게 하시네요.",
    en: "You're ___ me.",
    accept: ["confusing"],
    hint: "헷갈리게 한다는 동사의 -ing형",
    note: "confused는 내가 헷갈린 상태, confusing은 헷갈리게 하는 쪽입니다."
  },
  {
    id: "daily-opinion-96",
    category: "daily-opinion",
    ko: "그럴 리가 없어요.",
    en: "That ___ be right.",
    accept: ["can't", "cannot"],
    hint: "가능성을 부정하는 조동사",
    note: "can't be는 '그럴 리 없다'는 강한 추측입니다. 격식을 갖추면 cannot be입니다."
  },
  {
    id: "daily-opinion-97",
    category: "daily-opinion",
    ko: "저는 마음을 바꿨어요.",
    en: "I ___ my mind.",
    accept: ["changed"],
    hint: "달라졌다는 동사의 과거형",
    note: "change one's mind는 생각을 바꾼다는 뜻입니다."
  },
  {
    id: "daily-opinion-98",
    category: "daily-opinion",
    ko: "한꺼번에 받아들이기 벅차네요.",
    en: "It's a lot to ___ in.",
    accept: ["take"],
    hint: "안으로 받아들인다는 뜻의 동사",
    note: "take in은 정보를 소화한다는 뜻입니다."
  },
  {
    id: "daily-opinion-99",
    category: "daily-opinion",
    ko: "저는 확신이 서요.",
    en: "I'm ___ it'll work.",
    accept: ["convinced"],
    hint: "설득되어 믿게 되었다는 뜻의 형용사",
    note: "convinced는 sure보다 근거가 있다는 느낌을 줍니다."
  },
  {
    id: "daily-opinion-100",
    category: "daily-opinion",
    ko: "그 말씀 새겨듣겠습니다.",
    en: "I'll ___ that in mind.",
    accept: ["keep", "bear"],
    hint: "마음에 담아둔다는 뜻의 동사",
    note: "keep that in mind는 조언을 받아들이겠다는 뜻입니다."
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
    accept: ["staying", "here"],
    hint: "머무는 동작. will be 뒤라서 -ing 형태입니다",
    note: "예정된 미래라서 will be -ing를 씁니다."
  },
  {
    id: "travel-airport-05",
    category: "travel-airport",
    ko: "관광차 왔습니다.",
    en: "I'm here on ___.",
    accept: ["vacation", "holiday"],
    hint: "on 뒤에 오는 명사. 휴가를 뜻하는 말이면 둘 다 됩니다",
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
    accept: ["show", "turn"],
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
    accept: ["fasten", "buckle"],
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
    ko: "일주일 정도요.",
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
    note: "표준 표기는 duty-free입니다. duty는 관세, free는 '없다'는 뜻입니다."
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
    id: "travel-airport-51",
    category: "travel-airport",
    ko: "체크인 카운터가 어디예요?",
    en: "Where's the check-in ___?",
    accept: ["counter", "desk"],
    hint: "직원이 서 있는 긴 탁자를 뜻하는 명사",
    note: "항공사 카운터는 counter나 desk 모두 씁니다."
  },
  {
    id: "travel-airport-52",
    category: "travel-airport",
    ko: "창가 자리로 바꿀 수 있을까요?",
    en: "Could I ___ to a window seat?",
    accept: ["switch", "move"],
    hint: "다른 자리로 옮긴다는 뜻의 동사",
    note: "switch seats라고도 합니다."
  },
  {
    id: "travel-airport-53",
    category: "travel-airport",
    ko: "일행과 붙어 앉고 싶어요.",
    en: "We'd like to sit ___.",
    accept: ["together"],
    hint: "함께라는 뜻의 부사",
    note: "체크인할 때 미리 말해야 자리를 붙여줍니다."
  },
  {
    id: "travel-airport-54",
    category: "travel-airport",
    ko: "짐 무게가 얼마까지예요?",
    en: "What's the weight ___?",
    accept: ["limit", "allowance"],
    hint: "넘으면 안 되는 선을 뜻하는 명사",
    note: "baggage allowance는 무료로 부칠 수 있는 양을 뜻합니다."
  },
  {
    id: "travel-airport-55",
    category: "travel-airport",
    ko: "초과 요금이 얼마예요?",
    en: "How much is the excess baggage ___?",
    accept: ["fee", "charge"],
    hint: "내야 하는 돈을 뜻하는 명사",
    note: "excess baggage는 규정을 넘은 짐입니다."
  },
  {
    id: "travel-airport-56",
    category: "travel-airport",
    ko: "이 가방은 깨지기 쉬워요.",
    en: "This bag is ___.",
    accept: ["fragile"],
    hint: "쉽게 부서진다는 뜻의 형용사",
    note: "수하물에 붙이는 스티커에도 FRAGILE이라고 적혀 있습니다."
  },
  {
    id: "travel-airport-57",
    category: "travel-airport",
    ko: "짐에 자물쇠를 채워야 하나요?",
    en: "Should I ___ my suitcase?",
    accept: ["lock"],
    hint: "잠근다는 뜻의 동사",
    note: "미국행은 TSA 승인 자물쇠를 써야 합니다."
  },
  {
    id: "travel-airport-58",
    category: "travel-airport",
    ko: "보안 검색대가 어디예요?",
    en: "Where's the ___ checkpoint?",
    accept: ["security"],
    hint: "안전을 지키는 일을 뜻하는 명사",
    note: "공항 안내판에는 Security라고만 적힌 경우가 많습니다."
  },
  {
    id: "travel-airport-59",
    category: "travel-airport",
    ko: "노트북을 꺼내야 하나요?",
    en: "Do I need to ___ out my laptop?",
    accept: ["take"],
    hint: "밖으로 꺼낸다는 뜻의 기본 동사",
    note: "보안 검색에서 자주 듣는 지시입니다."
  },
  {
    id: "travel-airport-60",
    category: "travel-airport",
    ko: "신발을 벗어야 하나요?",
    en: "Do I have to ___ my shoes?",
    accept: ["remove"],
    hint: "치워 없앤다는 뜻의 격식 있는 동사",
    note: "take off는 옷과 신발을 벗을 때 씁니다."
  },
  {
    id: "travel-airport-61",
    category: "travel-airport",
    ko: "이거 가지고 들어가도 되나요?",
    en: "Can I ___ this through?",
    accept: ["take", "bring"],
    hint: "가지고 통과한다는 뜻의 동사",
    note: "take something through는 검색대를 통과시킨다는 뜻입니다. 기내 반입 액체는 보통 100ml까지입니다."
  },
  {
    id: "travel-airport-62",
    category: "travel-airport",
    ko: "주머니를 비워주세요.",
    en: "Please ___ your pockets.",
    accept: ["empty"],
    hint: "안을 비운다는 뜻의 동사",
    note: "형용사로도 같은 형태를 씁니다."
  },
  {
    id: "travel-airport-63",
    category: "travel-airport",
    ko: "팔을 들어주세요.",
    en: "Please ___ your arms.",
    accept: ["raise", "lift"],
    hint: "위로 올린다는 뜻의 동사",
    note: "보안 검색대에서 듣는 지시입니다."
  },
  {
    id: "travel-airport-64",
    category: "travel-airport",
    ko: "탑승 시작했나요?",
    en: "Has boarding ___ yet?",
    accept: ["started", "begun"],
    hint: "시작되었다는 동사의 과거분사",
    note: "begin의 과거분사는 begun입니다."
  },
  {
    id: "travel-airport-65",
    category: "travel-airport",
    ko: "제 좌석 번호가 뭐죠?",
    en: "What's my seat ___?",
    accept: ["number"],
    hint: "숫자를 뜻하는 명사",
    note: "탑승권에 SEAT 옆에 적혀 있습니다."
  },
  {
    id: "travel-airport-66",
    category: "travel-airport",
    ko: "짐 올리는 것 좀 도와주시겠어요?",
    en: "Could you help me with the ___ bin?",
    accept: ["overhead"],
    hint: "머리 위를 뜻하는 말",
    note: "overhead bin은 좌석 위 짐칸입니다."
  },
  {
    id: "travel-airport-67",
    category: "travel-airport",
    ko: "자리 좀 바꿔주실 수 있나요?",
    en: "Would you mind ___ seats with me?",
    accept: ["swapping", "trading"],
    hint: "서로 맞바꾼다는 동사의 -ing형",
    note: "mind 뒤에는 -ing형이 옵니다."
  },
  {
    id: "travel-airport-68",
    category: "travel-airport",
    ko: "이륙이 몇 시인가요?",
    en: "What time is ___?",
    accept: ["takeoff"],
    hint: "비행기가 땅을 떠나는 것을 뜻하는 한 단어",
    note: "착륙은 landing입니다."
  },
  {
    id: "travel-airport-69",
    category: "travel-airport",
    ko: "비행 시간이 얼마나 되나요?",
    en: "How long is the ___ time?",
    accept: ["flight", "flying"],
    hint: "하늘을 나는 것을 뜻하는 말",
    note: "flight time과 flying time 모두 씁니다."
  },
  {
    id: "travel-airport-70",
    category: "travel-airport",
    ko: "난기류가 좀 있네요.",
    en: "There's some ___.",
    accept: ["turbulence"],
    hint: "공기가 요동치는 현상을 뜻하는 명사",
    note: "기장 방송에서 자주 듣는 단어입니다."
  },
  {
    id: "travel-airport-71",
    category: "travel-airport",
    ko: "멀미가 나요.",
    en: "I feel ___.",
    accept: ["airsick", "nauseous", "sick"],
    hint: "속이 울렁거린다는 뜻의 형용사",
    note: "좌석 앞주머니에 sick bag이 들어 있습니다."
  },
  {
    id: "travel-airport-72",
    category: "travel-airport",
    ko: "이어폰 하나 주시겠어요?",
    en: "Could I get a pair of ___?",
    accept: ["headphones", "earphones"],
    hint: "귀에 꽂는 기기. 항상 복수형",
    note: "a pair of를 붙여 한 쌍임을 나타냅니다."
  },
  {
    id: "travel-airport-73",
    category: "travel-airport",
    ko: "베개 하나 더 주세요.",
    en: "Could I get another ___?",
    accept: ["pillow"],
    hint: "머리를 받치는 물건",
    note: "담요는 blanket입니다."
  },
  {
    id: "travel-airport-74",
    category: "travel-airport",
    ko: "기내식은 언제 나와요?",
    en: "When is the ___ served?",
    accept: ["meal"],
    hint: "끼니를 뜻하는 명사",
    note: "be served는 음식이 제공된다는 뜻입니다."
  },
  {
    id: "travel-airport-75",
    category: "travel-airport",
    ko: "채식 기내식으로 부탁했어요.",
    en: "I requested a ___ meal.",
    accept: ["vegetarian", "vegan"],
    hint: "고기를 먹지 않는 사람을 뜻하는 말",
    note: "특별 기내식은 출발 24시간 전까지 신청해야 합니다."
  },
  {
    id: "travel-airport-76",
    category: "travel-airport",
    ko: "물 좀 더 주시겠어요?",
    en: "Could I get some ___ water?",
    accept: ["more"],
    hint: "양을 늘린다는 뜻의 말",
    note: "some more water가 자연스럽습니다."
  },
  {
    id: "travel-airport-77",
    category: "travel-airport",
    ko: "쓰레기 좀 치워주시겠어요?",
    en: "Could you take this ___?",
    accept: ["away"],
    hint: "멀리 가져간다는 방향을 나타내는 말",
    note: "take away는 치워 간다는 뜻입니다."
  },
  {
    id: "travel-airport-78",
    category: "travel-airport",
    ko: "화장실이 비었나요?",
    en: "Is the lavatory ___?",
    accept: ["free", "vacant"],
    hint: "비어 있다는 뜻의 형용사",
    note: "기내 화장실 표시는 VACANT와 OCCUPIED입니다."
  },
  {
    id: "travel-airport-79",
    category: "travel-airport",
    ko: "곧 착륙합니다.",
    en: "We'll be ___ shortly.",
    accept: ["landing"],
    hint: "땅에 내린다는 동사의 -ing형",
    note: "shortly는 곧이라는 뜻입니다."
  },
  {
    id: "travel-airport-80",
    category: "travel-airport",
    ko: "좌석을 원위치로 해주세요.",
    en: "Please return your seat to the ___ position.",
    accept: ["upright"],
    hint: "똑바로 선 상태를 뜻하는 형용사",
    note: "착륙 전 방송에서 반드시 나오는 말입니다."
  },
  {
    id: "travel-airport-81",
    category: "travel-airport",
    ko: "입국 신고서를 주시겠어요?",
    en: "Could I get an ___ card?",
    accept: ["arrival", "immigration"],
    hint: "도착이나 입국을 뜻하는 명사",
    note: "기내에서 미리 받아 작성해 두면 편합니다."
  },
  {
    id: "travel-airport-82",
    category: "travel-airport",
    ko: "어디에 묵으실 예정입니까?",
    en: "Where will you be ___?",
    accept: ["staying"],
    hint: "머문다는 동사의 -ing형",
    note: "입국심사에서 숙소 주소를 물을 때 씁니다."
  },
  {
    id: "travel-airport-83",
    category: "travel-airport",
    ko: "돌아가는 편은 언제입니까?",
    en: "When is your ___ flight?",
    accept: ["return", "departing"],
    hint: "되돌아온다는 뜻의 말",
    note: "return flight는 귀국 항공편입니다."
  },
  {
    id: "travel-airport-84",
    category: "travel-airport",
    ko: "지문을 찍어주세요.",
    en: "Please place your ___ here.",
    accept: ["fingers", "finger"],
    hint: "손끝을 뜻하는 명사",
    note: "지문은 fingerprint입니다."
  },
  {
    id: "travel-airport-85",
    category: "travel-airport",
    ko: "카메라를 봐주세요.",
    en: "Please look at the ___.",
    accept: ["camera"],
    hint: "사진을 찍는 기계",
    note: "입국심사에서 얼굴 사진을 찍을 때 듣습니다."
  },
  {
    id: "travel-airport-86",
    category: "travel-airport",
    ko: "입국이 허가되었습니다.",
    en: "You're ___ to enter.",
    accept: ["cleared", "approved"],
    hint: "통과되었다는 뜻의 과거분사",
    note: "cleared는 검사를 통과했다는 뜻입니다."
  },
  {
    id: "travel-airport-87",
    category: "travel-airport",
    ko: "수하물 번호표가 여기 있어요.",
    en: "Here's my baggage ___.",
    accept: ["tag", "receipt"],
    hint: "짐에 붙이는 꼬리표",
    note: "짐을 잃어버렸을 때 이 번호로 찾습니다."
  },
  {
    id: "travel-airport-88",
    category: "travel-airport",
    ko: "제 짐이 다른 공항으로 갔대요.",
    en: "My luggage was sent to the wrong ___.",
    accept: ["airport", "destination"],
    hint: "비행기가 뜨고 내리는 곳",
    note: "이런 경우 항공사가 숙소로 배송해 줍니다."
  },
  {
    id: "travel-airport-89",
    category: "travel-airport",
    ko: "언제쯤 받을 수 있을까요?",
    en: "When can I ___ it?",
    accept: ["expect", "receive"],
    hint: "오리라고 여긴다는 뜻의 동사",
    note: "When can I expect it?은 도착 시점을 묻는 정중한 표현입니다."
  },
  {
    id: "travel-airport-90",
    category: "travel-airport",
    ko: "세관에 신고할 게 없습니다.",
    en: "I have ___ to declare.",
    accept: ["nothing"],
    hint: "아무것도 없다는 뜻의 대명사",
    note: "신고할 것이 없으면 녹색 통로로 갑니다."
  },
  {
    id: "travel-airport-91",
    category: "travel-airport",
    ko: "이건 개인 용품이에요.",
    en: "These are for ___ use.",
    accept: ["personal"],
    hint: "개인을 뜻하는 형용사",
    note: "상업적 목적이 아님을 밝힐 때 씁니다."
  },
  {
    id: "travel-airport-92",
    category: "travel-airport",
    ko: "가방을 열어주세요.",
    en: "Please ___ your bag.",
    accept: ["open"],
    hint: "닫힌 것을 여는 동사",
    note: "세관에서 무작위로 검사할 때 듣습니다."
  },
  {
    id: "travel-airport-93",
    category: "travel-airport",
    ko: "환전은 어디서 하나요?",
    en: "Where can I ___ money?",
    accept: ["exchange", "change"],
    hint: "서로 바꾼다는 뜻의 동사",
    note: "공항 환전소는 환율이 나쁜 편입니다."
  },
  {
    id: "travel-airport-94",
    category: "travel-airport",
    ko: "유심 카드는 어디서 사나요?",
    en: "Where can I buy a ___ card?",
    accept: ["SIM"],
    hint: "휴대폰에 넣는 작은 칩을 부르는 세 글자 약어",
    note: "공항 도착층에 통신사 부스가 있는 경우가 많습니다."
  },
  {
    id: "travel-airport-95",
    category: "travel-airport",
    ko: "공항버스는 어디서 타나요?",
    en: "Where do I ___ the airport bus?",
    accept: ["catch", "board"],
    hint: "차를 잡아탄다는 뜻의 동사",
    note: "catch a bus는 시간에 맞춰 탄다는 뉘앙스입니다."
  },
  {
    id: "travel-airport-96",
    category: "travel-airport",
    ko: "짐 카트가 어디 있나요?",
    en: "Where can I find a luggage ___?",
    accept: ["cart", "trolley"],
    hint: "짐을 싣고 미는 수레",
    note: "미국은 cart, 영국은 trolley를 씁니다."
  },
  {
    id: "travel-airport-97",
    category: "travel-airport",
    ko: "환승 카운터가 어디예요?",
    en: "Where's the ___ desk?",
    accept: ["transfer", "connection"],
    hint: "갈아타는 것을 뜻하는 명사",
    note: "환승 시간이 짧으면 직원에게 도움을 요청하세요."
  },
  {
    id: "travel-airport-98",
    category: "travel-airport",
    ko: "제 비행기가 이미 떠났어요.",
    en: "My flight already ___.",
    accept: ["left", "departed"],
    hint: "떠났다는 동사의 과거형",
    note: "이 경우 항공사 카운터에서 재발권을 요청합니다."
  },
  {
    id: "travel-airport-99",
    category: "travel-airport",
    ko: "다음 편에 자리 있나요?",
    en: "Are there any ___ on the next flight?",
    accept: ["seats"],
    hint: "앉는 자리. 복수형",
    note: "대기자 명단은 standby list라고 합니다."
  },
  {
    id: "travel-airport-100",
    category: "travel-airport",
    ko: "수고하셨습니다, 감사합니다.",
    en: "Thanks for all your ___.",
    accept: ["help"],
    hint: "도움을 뜻하는 명사",
    note: "직원에게 감사를 전할 때 쓰는 마무리 인사입니다."
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
    accept: ["available", "free"],
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
    ko: "다른 층으로 옮길 수 있나요?",
    en: "Could I move to a different ___?",
    accept: ["floor"],
    hint: "건물에서 같은 높이에 있는 공간을 뜻하는 말",
    note: "높은 층은 higher floor, 낮은 층은 lower floor라고 합니다."
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
    ko: "7시에 모닝콜 좀 부탁드려요.",
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
    ko: "방에 뭘 두고 왔어요.",
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
    accept: ["comfortable", "relaxing", "pleasant", "cozy"],
    hint: "몸이 편하다는 뜻의 형용사",
    note: "체크아웃할 때 건네면 좋은 인사입니다."
  },
  {
    id: "travel-hotel-51",
    category: "travel-hotel",
    ko: "예약 확인해 주시겠어요?",
    en: "Could you ___ my booking?",
    accept: ["confirm"],
    hint: "맞다고 못 박는다는 뜻의 동사",
    note: "예약 번호를 함께 말하면 빠릅니다."
  },
  {
    id: "travel-hotel-52",
    category: "travel-hotel",
    ko: "방은 몇 시부터 쓸 수 있나요?",
    en: "What time is the room ___?",
    accept: ["ready"],
    hint: "준비가 끝났다는 뜻의 형용사",
    note: "청소가 끝나 입실 가능한 상태를 ready라고 합니다."
  },
  {
    id: "travel-hotel-53",
    category: "travel-hotel",
    ko: "조금 일찍 들어가도 될까요?",
    en: "Is ___ check-in possible?",
    accept: ["early"],
    hint: "정해진 때보다 앞선다는 형용사",
    note: "성수기에는 추가 요금을 받기도 합니다."
  },
  {
    id: "travel-hotel-54",
    category: "travel-hotel",
    ko: "신분증이 필요한가요?",
    en: "Do you need to see my ___?",
    accept: ["ID", "passport"],
    hint: "신분을 증명하는 것",
    note: "해외 숙소는 대부분 여권을 요구합니다."
  },
  {
    id: "travel-hotel-55",
    category: "travel-hotel",
    ko: "보증금을 카드로 잡아둘게요.",
    en: "We'll put a ___ on your card.",
    accept: ["hold"],
    hint: "묶어둔다는 뜻의 명사",
    note: "put a hold는 실제 결제가 아니라 한도만 잡아두는 것입니다."
  },
  {
    id: "travel-hotel-56",
    category: "travel-hotel",
    ko: "짐을 잠깐 맡길 수 있을까요?",
    en: "Could I ___ my bags here for a while?",
    accept: ["leave"],
    hint: "남겨둔다는 뜻의 동사",
    note: "체크인 전이나 체크아웃 후에 자주 씁니다."
  },
  {
    id: "travel-hotel-57",
    category: "travel-hotel",
    ko: "몇 층이에요?",
    en: "What ___ is it on?",
    accept: ["floor", "level"],
    hint: "건물에서 같은 높이의 공간",
    note: "영국은 1층을 ground floor라고 합니다."
  },
  {
    id: "travel-hotel-58",
    category: "travel-hotel",
    ko: "조용한 층으로 부탁드려요.",
    en: "A quiet floor, if ___.",
    accept: ["possible"],
    hint: "할 수 있다는 뜻의 형용사",
    note: "if possible은 요청을 부드럽게 만드는 말입니다."
  },
  {
    id: "travel-hotel-59",
    category: "travel-hotel",
    ko: "침대 두 개짜리 방으로 주세요.",
    en: "I'd like a room with two ___.",
    accept: ["beds"],
    hint: "잠자는 가구. 복수형",
    note: "침대 두 개는 twin, 큰 침대 하나는 double입니다."
  },
  {
    id: "travel-hotel-60",
    category: "travel-hotel",
    ko: "금고는 어떻게 쓰나요?",
    en: "How do I use the ___?",
    accept: ["safe"],
    hint: "귀중품을 넣는 잠금 상자",
    note: "형용사 safe와 철자가 같습니다."
  },
  {
    id: "travel-hotel-61",
    category: "travel-hotel",
    ko: "수건을 더 갖다주시겠어요?",
    en: "Could you ___ up more towels?",
    accept: ["bring", "send"],
    hint: "위층으로 가져다준다는 뜻의 동사",
    note: "bring up은 객실로 올려 보낸다는 뜻입니다."
  },
  {
    id: "travel-hotel-62",
    category: "travel-hotel",
    ko: "방이 너무 추워요.",
    en: "The room is too ___.",
    accept: ["cold", "chilly"],
    hint: "온도가 낮다는 뜻의 형용사",
    note: "난방 조절이 안 되면 프런트에 알리면 됩니다."
  },
  {
    id: "travel-hotel-63",
    category: "travel-hotel",
    ko: "창문이 안 열려요.",
    en: "The window won't ___.",
    accept: ["open"],
    hint: "닫힌 것을 여는 동사",
    note: "won't는 기계가 말을 안 듣는다는 뜻으로도 씁니다."
  },
  {
    id: "travel-hotel-64",
    category: "travel-hotel",
    ko: "샤워기 물이 약해요.",
    en: "The water ___ is weak.",
    accept: ["pressure"],
    hint: "물이 밀어내는 힘을 뜻하는 명사",
    note: "수압이 세면 strong water pressure입니다."
  },
  {
    id: "travel-hotel-65",
    category: "travel-hotel",
    ko: "배수가 안 돼요.",
    en: "The sink won't ___.",
    accept: ["drain"],
    hint: "물이 빠져나간다는 뜻의 동사",
    note: "세면대는 sink, 욕조는 bathtub입니다."
  },
  {
    id: "travel-hotel-66",
    category: "travel-hotel",
    ko: "티브이가 안 나와요.",
    en: "The TV isn't ___ on.",
    accept: ["turning", "coming"],
    hint: "켜진다는 뜻을 만드는 동사의 -ing형",
    note: "리모컨 건전지를 먼저 확인해 보는 것이 좋습니다."
  },
  {
    id: "travel-hotel-67",
    category: "travel-hotel",
    ko: "와이파이가 자꾸 끊겨요.",
    en: "The Wi-Fi keeps ___ out.",
    accept: ["cutting", "dropping"],
    hint: "끊긴다는 뜻의 동사 -ing형",
    note: "keep -ing는 반복해서 일어난다는 뜻입니다."
  },
  {
    id: "travel-hotel-68",
    category: "travel-hotel",
    ko: "방에 벌레가 있어요.",
    en: "There's a ___ in my room.",
    accept: ["bug", "insect"],
    hint: "작은 곤충을 뜻하는 명사",
    note: "bug가 더 구어적입니다."
  },
  {
    id: "travel-hotel-69",
    category: "travel-hotel",
    ko: "시트를 갈아주시겠어요?",
    en: "Could you change the ___?",
    accept: ["sheets", "bedding"],
    hint: "침대에 까는 천. 복수형",
    note: "베갯잇은 pillowcase입니다."
  },
  {
    id: "travel-hotel-70",
    category: "travel-hotel",
    ko: "방을 좀 치워주시겠어요?",
    en: "Could you ___ up the room?",
    accept: ["tidy", "clean"],
    hint: "정리한다는 뜻의 동사",
    note: "tidy up은 가볍게 정돈한다는 뜻입니다."
  },
  {
    id: "travel-hotel-71",
    category: "travel-hotel",
    ko: "쓰레기통을 비워주세요.",
    en: "Please ___ the trash.",
    accept: ["empty", "take out"],
    hint: "안을 비운다는 뜻의 동사",
    note: "영국은 trash 대신 rubbish를 씁니다."
  },
  {
    id: "travel-hotel-72",
    category: "travel-hotel",
    ko: "방해하지 말아주세요.",
    en: "Please do not ___.",
    accept: ["disturb"],
    hint: "방해한다는 뜻의 동사",
    note: "문에 거는 표지에 그대로 적혀 있는 말입니다."
  },
  {
    id: "travel-hotel-73",
    category: "travel-hotel",
    ko: "조식은 어디서 먹나요?",
    en: "Where is breakfast ___?",
    accept: ["served"],
    hint: "음식이 제공된다는 뜻의 과거분사",
    note: "be served는 식사가 나오는 장소나 시각을 물을 때 씁니다."
  },
  {
    id: "travel-hotel-74",
    category: "travel-hotel",
    ko: "조식 쿠폰이 있어요.",
    en: "I have a breakfast ___.",
    accept: ["voucher", "coupon"],
    hint: "교환권을 뜻하는 명사",
    note: "voucher가 숙박업계에서 더 흔한 말입니다."
  },
  {
    id: "travel-hotel-75",
    category: "travel-hotel",
    ko: "수영장은 몇 시까지 해요?",
    en: "What time does the pool ___?",
    accept: ["close"],
    hint: "문을 닫는다는 동사",
    note: "여는 시각은 open입니다."
  },
  {
    id: "travel-hotel-76",
    category: "travel-hotel",
    ko: "헬스장은 무료인가요?",
    en: "Is the gym ___ of charge?",
    accept: ["free"],
    hint: "돈이 들지 않는다는 뜻의 형용사",
    note: "free of charge는 무료라는 격식 있는 표현입니다."
  },
  {
    id: "travel-hotel-77",
    category: "travel-hotel",
    ko: "세탁 서비스가 있나요?",
    en: "Do you offer ___ service?",
    accept: ["laundry"],
    hint: "빨래를 뜻하는 명사",
    note: "세탁기는 washing machine입니다."
  },
  {
    id: "travel-hotel-78",
    category: "travel-hotel",
    ko: "다림질할 수 있는 게 있나요?",
    en: "Is there an ___ in the room?",
    accept: ["iron"],
    hint: "옷의 주름을 펴는 도구",
    note: "다리미판은 ironing board입니다."
  },
  {
    id: "travel-hotel-79",
    category: "travel-hotel",
    ko: "어댑터를 빌릴 수 있나요?",
    en: "Could I borrow an ___?",
    accept: ["adapter", "adaptor"],
    hint: "콘센트 모양을 맞춰주는 기구. 철자가 두 가지입니다",
    note: "미국은 adapter, 영국은 adaptor를 주로 씁니다."
  },
  {
    id: "travel-hotel-80",
    category: "travel-hotel",
    ko: "충전기를 두고 온 것 같아요.",
    en: "I think I left my ___.",
    accept: ["charger"],
    hint: "전기를 채워 넣는 기기",
    note: "프런트에 분실물로 맡겨진 경우가 많습니다."
  },
  {
    id: "travel-hotel-81",
    category: "travel-hotel",
    ko: "방 번호가 몇 번이죠?",
    en: "What's my room ___?",
    accept: ["number"],
    hint: "숫자를 뜻하는 명사",
    note: "카드키 봉투에 적혀 있는 경우가 많습니다."
  },
  {
    id: "travel-hotel-82",
    category: "travel-hotel",
    ko: "카드키를 하나 더 주시겠어요?",
    en: "Could I get a ___ key card?",
    accept: ["second", "spare"],
    hint: "여분이나 두 번째를 뜻하는 말",
    note: "일행이 따로 다닐 때 유용합니다."
  },
  {
    id: "travel-hotel-83",
    category: "travel-hotel",
    ko: "체크아웃을 미룰 수 있나요?",
    en: "Could I ___ my checkout?",
    accept: ["delay", "postpone"],
    hint: "뒤로 미룬다는 뜻의 동사",
    note: "late checkout이라고 말해도 통합니다."
  },
  {
    id: "travel-hotel-84",
    category: "travel-hotel",
    ko: "하루 더 연장하고 싶어요.",
    en: "I'd like to ___ my stay by one night.",
    accept: ["extend"],
    hint: "길게 늘인다는 뜻의 동사",
    note: "연박은 extend one's stay라고 합니다."
  },
  {
    id: "travel-hotel-85",
    category: "travel-hotel",
    ko: "방을 업그레이드할 수 있나요?",
    en: "Is it possible to ___ my room?",
    accept: ["upgrade"],
    hint: "등급을 올린다는 뜻의 동사",
    note: "빈방이 있으면 무료로 해주는 경우도 있습니다."
  },
  {
    id: "travel-hotel-86",
    category: "travel-hotel",
    ko: "추가 요금이 붙나요?",
    en: "Is there an ___ charge?",
    accept: ["extra", "additional"],
    hint: "덧붙는다는 뜻의 형용사",
    note: "리조트 요금이나 도시세가 따로 붙는 곳이 많습니다."
  },
  {
    id: "travel-hotel-87",
    category: "travel-hotel",
    ko: "세금이 포함된 가격인가요?",
    en: "Does that ___ tax?",
    accept: ["include"],
    hint: "안에 넣는다는 뜻의 동사",
    note: "세금 포함은 tax included라고 표시합니다."
  },
  {
    id: "travel-hotel-88",
    category: "travel-hotel",
    ko: "현금으로 내도 되나요?",
    en: "Can I pay in ___?",
    accept: ["cash"],
    hint: "지폐와 동전을 뜻하는 명사",
    note: "pay in cash와 pay by card로 전치사가 다릅니다."
  },
  {
    id: "travel-hotel-89",
    category: "travel-hotel",
    ko: "영수증을 이메일로 보내주시겠어요?",
    en: "Could you ___ me the receipt by email?",
    accept: ["send"],
    hint: "보낸다는 뜻의 기본 동사",
    note: "email은 동사로도 써서 Could you email me the receipt?라고도 합니다."
  },
  {
    id: "travel-hotel-90",
    category: "travel-hotel",
    ko: "이 요금은 무엇 때문인가요?",
    en: "What is this ___ for?",
    accept: ["fee"],
    hint: "서비스에 매기는 돈을 뜻하는 명사",
    note: "청구서에 모르는 항목이 있으면 물어보는 것이 좋습니다."
  },
  {
    id: "travel-hotel-91",
    category: "travel-hotel",
    ko: "미니바는 이용 안 했어요.",
    en: "I didn't ___ the minibar.",
    accept: ["use", "touch"],
    hint: "쓴다는 뜻의 기본 동사",
    note: "미니바 요금이 잘못 청구되는 일이 종종 있습니다."
  },
  {
    id: "travel-hotel-92",
    category: "travel-hotel",
    ko: "택시를 예약해 주시겠어요?",
    en: "Could you ___ a taxi for me?",
    accept: ["book", "arrange"],
    hint: "미리 잡아둔다는 뜻의 동사",
    note: "공항 가는 택시는 미리 예약하는 편이 안전합니다."
  },
  {
    id: "travel-hotel-93",
    category: "travel-hotel",
    ko: "공항에 도착하는 데 얼마나 걸리나요?",
    en: "How long does it take to ___ the airport?",
    accept: ["reach"],
    hint: "도달한다는 뜻의 동사",
    note: "get to도 같은 뜻으로 씁니다."
  },
  {
    id: "travel-hotel-94",
    category: "travel-hotel",
    ko: "근처에 편의점이 있나요?",
    en: "Is there a convenience ___ nearby?",
    accept: ["store", "shop"],
    hint: "물건을 파는 곳",
    note: "미국은 store, 영국은 shop을 주로 씁니다."
  },
  {
    id: "travel-hotel-95",
    category: "travel-hotel",
    ko: "이 근처 볼 만한 곳 있나요?",
    en: "Anything worth ___ around here?",
    accept: ["seeing", "visiting"],
    hint: "눈으로 본다는 동사의 -ing형",
    note: "worth 뒤에는 -ing형이 옵니다."
  },
  {
    id: "travel-hotel-96",
    category: "travel-hotel",
    ko: "지도 하나 얻을 수 있을까요?",
    en: "Could I have a ___ of the area?",
    accept: ["map"],
    hint: "길이 그려진 종이",
    note: "프런트에 무료 지도가 놓여 있는 경우가 많습니다."
  },
  {
    id: "travel-hotel-97",
    category: "travel-hotel",
    ko: "짐을 내려주시겠어요?",
    en: "Could you ___ my bags down?",
    accept: ["bring", "take"],
    hint: "아래층으로 가져간다는 뜻의 동사",
    note: "체크아웃할 때 요청하면 됩니다."
  },
  {
    id: "travel-hotel-98",
    category: "travel-hotel",
    ko: "방에 뭘 두고 온 것 같아요.",
    en: "I think I ___ something behind.",
    accept: ["left"],
    hint: "남겨두고 나왔다는 동사의 과거형",
    note: "leave behind는 깜빡 두고 온다는 뜻입니다."
  },
  {
    id: "travel-hotel-99",
    category: "travel-hotel",
    ko: "보관해 주시면 나중에 찾으러 올게요.",
    en: "Could you ___ it until I come back?",
    accept: ["hold", "keep"],
    hint: "맡아둔다는 뜻의 동사",
    note: "프런트에 맡겨두면 안전합니다."
  },
  {
    id: "travel-hotel-100",
    category: "travel-hotel",
    ko: "머무는 동안 잘 지냈습니다.",
    en: "I had a ___ stay.",
    accept: ["lovely", "wonderful", "great"],
    hint: "아주 좋았다는 뜻의 형용사",
    note: "체크아웃할 때 건네면 좋은 인사입니다."
  },
  {
    id: "daily-people-01",
    category: "daily-people",
    ko: "저희 아버지는 작년에 은퇴하셨어요.",
    en: "My ___ retired last year.",
    accept: ["dad", "father"],
    hint: "가족 중 남자 어른을 부르는 말. 편한 말과 격식 있는 말 둘 다 됩니다",
    note: "dad가 일상 대화에서 훨씬 많이 쓰입니다. father는 격식 있는 자리나 글에서 씁니다."
  },
  {
    id: "daily-people-02",
    category: "daily-people",
    ko: "저희 어머니가 요리를 정말 잘하세요.",
    en: "My ___ is a great cook.",
    accept: ["mom", "mother"],
    hint: "가족 중 여자 어른을 부르는 말",
    note: "영국에서는 mum으로 씁니다. 미국은 mom입니다."
  },
  {
    id: "daily-people-03",
    category: "daily-people",
    ko: "저는 형이 하나 있어요.",
    en: "I have an older ___.",
    accept: ["brother"],
    hint: "같은 부모에게서 난 남자 형제",
    note: "영어에는 형과 남동생을 가르는 낱말이 없습니다. older brother, younger brother로 구별합니다."
  },
  {
    id: "daily-people-04",
    category: "daily-people",
    ko: "제 여동생이 저보다 키가 커요.",
    en: "My younger ___ is taller than me.",
    accept: ["sister"],
    hint: "같은 부모에게서 난 여자 형제",
    note: "little sister라고도 자주 씁니다. 나이가 어리다는 뜻이지 키가 작다는 뜻이 아닙니다."
  },
  {
    id: "daily-people-05",
    category: "daily-people",
    ko: "아들이 이제 막 다섯 살이 됐어요.",
    en: "My ___ just turned five.",
    accept: ["son"],
    hint: "자기 아이 중 남자아이",
    note: "turn 다음에 나이를 붙이면 '몇 살이 되다'입니다. He turns ten next month처럼 씁니다."
  },
  {
    id: "daily-people-06",
    category: "daily-people",
    ko: "딸이 지금 대학에 다녀요.",
    en: "My ___ is in college.",
    accept: ["daughter"],
    hint: "자기 아이 중 여자아이",
    note: "미국은 대학을 college, 영국은 university라고 부르는 경우가 많습니다."
  },
  {
    id: "daily-people-07",
    category: "daily-people",
    ko: "아내가 지금 출장 중이에요.",
    en: "My ___ is away on business.",
    accept: ["wife"],
    hint: "결혼한 여자 배우자",
    note: "away on business가 '출장 가 있다'입니다. on a business trip도 같은 뜻입니다."
  },
  {
    id: "daily-people-08",
    category: "daily-people",
    ko: "남편이 요리를 다 해요.",
    en: "My ___ does all the cooking.",
    accept: ["husband"],
    hint: "결혼한 남자 배우자",
    note: "does all the cooking은 '요리를 도맡아 한다'는 뜻의 흔한 표현입니다."
  },
  {
    id: "daily-people-09",
    category: "daily-people",
    ko: "아기가 밤새 안 깨고 잤어요.",
    en: "The ___ slept through the night.",
    accept: ["baby"],
    hint: "갓난아이를 가리키는 말",
    note: "sleep through the night는 아기를 키우는 사람들이 늘 쓰는 표현입니다. 중간에 안 깨고 쭉 잤다는 뜻입니다."
  },
  {
    id: "daily-people-10",
    category: "daily-people",
    ko: "저는 아이가 둘이에요.",
    en: "I've got two ___.",
    accept: ["kids", "children"],
    hint: "아이를 뜻하는 복수 명사. 편한 말과 격식 있는 말 둘 다 됩니다",
    note: "일상 대화에서는 kids가 압도적으로 많습니다. children은 글이나 안내문에서 씁니다."
  },
  {
    id: "daily-people-11",
    category: "daily-people",
    ko: "저는 부모님이랑 같이 살아요.",
    en: "I live with my ___.",
    accept: ["parents"],
    hint: "아버지와 어머니를 한꺼번에 부르는 말",
    note: "항상 복수로 씁니다. 한 분만 가리킬 때는 parent입니다."
  },
  {
    id: "daily-people-12",
    category: "daily-people",
    ko: "저희 가족은 다 서울에 살아요.",
    en: "My whole ___ lives in Seoul.",
    accept: ["family"],
    hint: "한 집안 사람들을 통틀어 부르는 말",
    note: "미국에서는 family를 하나의 덩어리로 보아 단수 취급합니다. 영국에서는 복수로도 씁니다."
  },
  {
    id: "daily-people-13",
    category: "daily-people",
    ko: "저희 할머니가 올해 아흔이세요.",
    en: "My ___ is ninety this year.",
    accept: ["grandmother", "grandma"],
    hint: "어머니나 아버지의 어머니",
    note: "grandma가 일상 대화에서 더 자주 쓰입니다. 할아버지는 grandpa입니다."
  },
  {
    id: "daily-people-14",
    category: "daily-people",
    ko: "삼촌이 저를 키우다시피 하셨어요.",
    en: "My ___ pretty much raised me.",
    accept: ["uncle"],
    hint: "부모의 남자 형제",
    note: "영어에는 삼촌·외삼촌·고모부를 가르는 낱말이 없고 모두 uncle입니다. 이모·고모는 aunt입니다."
  },
  {
    id: "daily-people-15",
    category: "daily-people",
    ko: "저는 사촌들이랑 같이 자랐어요.",
    en: "I grew up with my ___.",
    accept: ["cousins"],
    hint: "삼촌이나 이모의 자녀들",
    note: "영어의 cousin은 친가·외가, 남녀를 가리지 않습니다."
  },
  {
    id: "daily-people-16",
    category: "daily-people",
    ko: "저희 부모님은 아들 셋을 두셨어요.",
    en: "My parents had three ___.",
    accept: ["boys", "sons"],
    hint: "남자아이를 뜻하는 복수 명사",
    note: "boys가 더 편한 말투입니다. sons는 조금 더 또박또박한 느낌입니다."
  },
  {
    id: "daily-people-17",
    category: "daily-people",
    ko: "제가 아버지를 많이 닮았어요.",
    en: "I look a lot ___ my dad.",
    accept: ["like"],
    hint: "'~처럼'을 뜻하는 전치사. look과 짝을 이룹니다",
    note: "look like는 생김새가 닮았다는 뜻입니다. 성격이 닮았을 때는 take after를 씁니다."
  },
  {
    id: "daily-people-18",
    category: "daily-people",
    ko: "어머니 성함을 따서 지은 이름이에요.",
    en: "I was ___ after my mom.",
    accept: ["named"],
    hint: "이름을 붙인다는 뜻의 동사. 여기서는 수동태 자리입니다",
    note: "be named after는 '누구의 이름을 따서 짓다'입니다."
  },
  {
    id: "daily-people-19",
    category: "daily-people",
    ko: "저희 부부는 결혼한 지 10년 됐어요.",
    en: "My wife and I have been ___ for ten years.",
    accept: ["married"],
    hint: "혼인한 상태를 뜻하는 말",
    note: "get married가 '결혼하다'라는 동작이고, be married는 '결혼한 상태'입니다."
  },
  {
    id: "daily-people-20",
    category: "daily-people",
    ko: "곧 둘째가 태어나요.",
    en: "We're having ___ baby soon.",
    accept: ["another"],
    hint: "'하나 더'를 뜻하는 말",
    note: "We're having a baby는 '아이가 생겼다'는 뜻으로 임신 소식을 전할 때 씁니다."
  },
  {
    id: "daily-people-21",
    category: "daily-people",
    ko: "그분 정말 좋은 분이세요.",
    en: "He's a really nice ___.",
    accept: ["guy", "man", "person"],
    hint: "남자 한 사람을 가리키는 말. 편한 말과 점잖은 말 둘 다 됩니다",
    note: "guy가 가장 흔한 구어입니다. person은 남녀를 가리지 않습니다."
  },
  {
    id: "daily-people-22",
    category: "daily-people",
    ko: "저기 저 여자분 아세요?",
    en: "Do you know that ___ over there?",
    accept: ["woman", "lady"],
    hint: "여자 한 사람을 가리키는 말",
    note: "woman이 가장 무난합니다. lady는 정중한 느낌이지만 상황에 따라 어색할 수 있습니다."
  },
  {
    id: "daily-people-23",
    category: "daily-people",
    ko: "그 사람 되게 웃겨요.",
    en: "He's a really ___ guy.",
    accept: ["funny"],
    hint: "남을 웃게 만든다는 뜻의 형용사",
    note: "funny는 '재미있다'와 '이상하다' 두 가지로 쓰입니다. 여기서는 앞의 뜻입니다."
  },
  {
    id: "daily-people-24",
    category: "daily-people",
    ko: "저보다 두 살 위세요.",
    en: "She's two years ___ than me.",
    accept: ["older"],
    hint: "나이가 많다는 뜻의 비교급",
    note: "나이 차이는 숫자를 앞에 붙여 two years older처럼 말합니다."
  },
  {
    id: "daily-people-25",
    category: "daily-people",
    ko: "저보다 어려요.",
    en: "He's ___ than me.",
    accept: ["younger"],
    hint: "나이가 적다는 뜻의 비교급",
    note: "than me와 than I am 둘 다 씁니다. 일상에서는 than me가 훨씬 흔합니다."
  },
  {
    id: "daily-people-26",
    category: "daily-people",
    ko: "사람이 참 많네요.",
    en: "There are so many ___ here.",
    accept: ["people"],
    hint: "사람을 뜻하는 복수 명사",
    note: "people 자체가 복수라서 peoples라고 쓰지 않습니다."
  },
  {
    id: "daily-people-27",
    category: "daily-people",
    ko: "저 남자애가 제 아들이에요.",
    en: "That ___ is my son.",
    accept: ["boy", "kid"],
    hint: "남자아이를 가리키는 말",
    note: "kid는 남녀를 가리지 않는 편한 말입니다."
  },
  {
    id: "daily-people-28",
    category: "daily-people",
    ko: "저 여자애가 제 딸이에요.",
    en: "That ___ is my daughter.",
    accept: ["girl", "kid"],
    hint: "여자아이를 가리키는 말",
    note: "다 자란 성인 여성에게 girl을 쓰면 실례가 될 수 있습니다. 그때는 woman을 씁니다."
  },
  {
    id: "daily-people-29",
    category: "daily-people",
    ko: "좀 조용한 편이세요.",
    en: "She's kind of a quiet ___.",
    accept: ["person"],
    hint: "남녀를 가리지 않고 한 사람을 뜻하는 말",
    note: "kind of는 '좀', '약간'이라는 뜻으로 말을 부드럽게 만듭니다."
  },
  {
    id: "daily-people-30",
    category: "daily-people",
    ko: "남자들끼리만 있었어요.",
    en: "It was just the ___.",
    accept: ["guys"],
    hint: "남자 여럿을 편하게 부르는 말",
    note: "미국에서는 you guys를 남녀 섞인 무리에게도 씁니다. 다만 이 문장처럼 the guys라고 하면 보통 남자들만을 가리킵니다."
  },
  {
    id: "daily-people-31",
    category: "daily-people",
    ko: "다들 정말 친절하셨어요.",
    en: "___ was so nice.",
    accept: ["Everyone", "Everybody"],
    hint: "빠짐없이 모든 사람을 뜻하는 말",
    note: "둘 다 단수로 취급해서 was를 씁니다. everybody가 조금 더 편한 말투입니다."
  },
  {
    id: "daily-people-32",
    category: "daily-people",
    ko: "나이에 비해 젊어 보이세요.",
    en: "You look young for your ___.",
    accept: ["age"],
    hint: "몇 살인지를 뜻하는 명사",
    note: "for your age는 '나이에 비해'입니다. 칭찬으로 쓰이지만 나이 이야기 자체를 꺼리는 사람도 있습니다."
  },
  {
    id: "daily-people-33",
    category: "daily-people",
    ko: "성격이 정말 좋으세요.",
    en: "She's got a great ___.",
    accept: ["personality"],
    hint: "그 사람의 됨됨이나 성향을 뜻하는 명사",
    note: "She's got은 She has의 구어체입니다. 말할 때는 이쪽이 훨씬 많습니다."
  },
  {
    id: "daily-people-34",
    category: "daily-people",
    ko: "그분은 웃는 모습이 참 예뻐요.",
    en: "She has a lovely ___.",
    accept: ["smile"],
    hint: "입가에 웃음을 띤 표정",
    note: "웃음소리를 내는 것은 laugh, 표정만 짓는 것은 smile입니다."
  },
  {
    id: "daily-people-35",
    category: "daily-people",
    ko: "어디서 뵌 것 같아요.",
    en: "You look ___.",
    accept: ["familiar"],
    hint: "전에 본 적이 있는 것 같다는 뜻의 형용사",
    note: "처음 본 사람 같지 않을 때 쓰는 표현입니다. 정확히 어디서 봤는지 모를 때 딱 맞습니다."
  },
  {
    id: "daily-people-36",
    category: "daily-people",
    ko: "이름이 기억이 안 나요.",
    en: "I can't remember his ___.",
    accept: ["name"],
    hint: "사람을 부를 때 쓰는 말",
    note: "It's on the tip of my tongue이라고 하면 '입에서 맴도는데 안 나온다'는 뜻입니다."
  },
  {
    id: "daily-people-37",
    category: "daily-people",
    ko: "목소리가 낯익어요.",
    en: "His ___ sounds familiar.",
    accept: ["voice"],
    hint: "말할 때 나는 소리",
    note: "전화로 아는 사람을 알아볼 때 자주 쓰는 표현입니다."
  },
  {
    id: "daily-people-38",
    category: "daily-people",
    ko: "두 분 정말 닮으셨네요.",
    en: "You two look so ___.",
    accept: ["alike", "similar"],
    hint: "서로 비슷하다는 뜻의 말",
    note: "alike는 항상 뒤에 명사를 두지 않고 씁니다. similar는 similar to each other처럼 쓰기도 합니다."
  },
  {
    id: "daily-people-39",
    category: "daily-people",
    ko: "그 애가 아빠를 쏙 빼닮았네요.",
    en: "He looks ___ like his dad.",
    accept: ["just", "exactly"],
    hint: "'꼭', '똑같이'라는 뜻으로 like를 강하게 만드는 말",
    note: "just like가 '똑 닮았다'는 느낌을 살립니다. exactly like도 같은 뜻이지만 조금 더 딱딱합니다."
  },
  {
    id: "daily-people-40",
    category: "daily-people",
    ko: "제가 어머니 성격을 닮았어요.",
    en: "I take ___ my mom.",
    accept: ["after"],
    hint: "'뒤'를 뜻하는 전치사가 take와 붙으면 닮았다는 뜻이 됩니다",
    note: "take after는 성격이나 기질이 닮았을 때, look like는 생김새가 닮았을 때 씁니다."
  },
  {
    id: "daily-people-41",
    category: "daily-people",
    ko: "그 사람들 다음 주에 와요.",
    en: "___ are coming next week.",
    accept: ["They"],
    hint: "여러 사람을 가리키는 주어",
    note: "가까운 미래의 정해진 일정은 be coming처럼 진행형으로 말하는 것이 자연스럽습니다."
  },
  {
    id: "daily-people-42",
    category: "daily-people",
    ko: "제가 그분한테 말씀드릴게요.",
    en: "I'll tell ___ about it.",
    accept: ["him", "her"],
    hint: "'그 사람에게'에 해당하는 목적어 자리의 말",
    note: "tell 뒤에는 he가 아니라 him이 옵니다. 동사 뒤에서는 목적격을 씁니다."
  },
  {
    id: "daily-people-43",
    category: "daily-people",
    ko: "그 여자분한테 물어보세요.",
    en: "You should ask ___.",
    accept: ["her"],
    hint: "'그 여자에게'에 해당하는 목적어 자리의 말",
    note: "her는 '그녀를'과 '그녀의' 두 가지로 다 쓰입니다."
  },
  {
    id: "daily-people-44",
    category: "daily-people",
    ko: "그 사람들한테 연락해 볼게요.",
    en: "I'll ___ in touch with them.",
    accept: ["get"],
    hint: "in touch with와 붙어 연락을 취한다는 뜻이 되는 동사",
    note: "get in touch with는 '연락을 취하다'입니다. 이미 아는 사이에 다시 연락할 때 씁니다."
  },
  {
    id: "daily-people-45",
    category: "daily-people",
    ko: "그건 그분 생각이고요.",
    en: "That's just his ___.",
    accept: ["opinion"],
    hint: "어떤 일에 대한 생각이나 견해를 뜻하는 명사",
    note: "That's just his opinion은 '그건 그 사람 생각일 뿐'이라며 선을 긋는 말입니다."
  },
  {
    id: "daily-people-46",
    category: "daily-people",
    ko: "그분들 집이 여기서 가까워요.",
    en: "___ place is close by.",
    accept: ["Their"],
    hint: "'그 사람들의'에 해당하는 말",
    note: "place는 house보다 편하게 '집'을 가리키는 말입니다."
  },
  {
    id: "daily-people-47",
    category: "daily-people",
    ko: "그 사람이 바쁘다고 하던데요.",
    en: "He ___ he was busy.",
    accept: ["said"],
    hint: "말하다의 과거형",
    note: "say 뒤에는 들은 사람을 두지 않습니다. He said he was busy처럼 바로 내용이 옵니다."
  },
  {
    id: "daily-people-48",
    category: "daily-people",
    ko: "그 사람들이 저한테 알려줬어요.",
    en: "They ___ me about it.",
    accept: ["told"],
    hint: "말해 주다의 과거형. 듣는 사람을 바로 뒤에 둡니다",
    note: "tell은 듣는 사람을 바로 뒤에 둡니다. told me처럼 씁니다. say는 그렇게 쓰지 않습니다."
  },
  {
    id: "daily-people-49",
    category: "daily-people",
    ko: "그분이 안부 전해달라세요.",
    en: "He says ___.",
    accept: ["hi", "hello"],
    hint: "만났을 때 건네는 짧은 인사말",
    note: "Say hi to your family처럼도 씁니다. '가족들한테 안부 전해줘'라는 뜻입니다."
  },
  {
    id: "daily-people-50",
    category: "daily-people",
    ko: "그분 요즘 어떻게 지내세요?",
    en: "How's ___ doing?",
    accept: ["he", "she"],
    hint: "한 사람을 가리키는 주어 자리의 말",
    note: "How's he doing?은 그 사람의 근황을 제3자에게 묻는 표현입니다."
  },
  {
    id: "daily-people-51",
    category: "daily-people",
    ko: "그 사람들 아직 안 왔어요.",
    en: "They haven't arrived ___.",
    accept: ["yet"],
    hint: "'아직'을 뜻하는 말. 부정문 끝에 붙습니다",
    note: "yet은 아직 일어나지 않은 일을 말할 때 문장 끝에 붙입니다. 긍정문에서는 already를 씁니다."
  },
  {
    id: "daily-people-52",
    category: "daily-people",
    ko: "그분을 만나러 왔어요.",
    en: "I'm here to ___ him.",
    accept: ["see", "meet"],
    hint: "사람을 만난다는 뜻의 동사",
    note: "I'm here to see는 약속하고 찾아갔을 때 안내 데스크에서 쓰는 말입니다. 이미 아는 사이면 see, 처음이면 meet이 자연스럽습니다."
  },
  {
    id: "daily-people-53",
    category: "daily-people",
    ko: "그분이 직접 하셨어요.",
    en: "He did it ___.",
    accept: ["himself"],
    hint: "'그 사람 자신'을 뜻하는 말",
    note: "did it himself는 남을 시키지 않고 직접 했다는 뜻입니다."
  },
  {
    id: "daily-people-54",
    category: "daily-people",
    ko: "그 여자분이 혼자서 다 하셨어요.",
    en: "She did it all by ___.",
    accept: ["herself"],
    hint: "'그 여자 자신'을 뜻하는 말",
    note: "by herself는 '혼자 힘으로'입니다. 앞에 all을 붙이면 뜻이 더 강해집니다."
  },
  {
    id: "daily-people-55",
    category: "daily-people",
    ko: "그 사람들끼리 알아서 해결했어요.",
    en: "They worked it out ___.",
    accept: ["themselves"],
    hint: "'그 사람들 자신'을 뜻하는 말",
    note: "work out은 문제를 풀어 해결한다는 뜻입니다. 운동한다는 뜻으로도 씁니다."
  },
  {
    id: "daily-people-56",
    category: "daily-people",
    ko: "그분 얘기 많이 들었어요.",
    en: "I've ___ a lot about him.",
    accept: ["heard"],
    hint: "듣다의 과거분사",
    note: "처음 만난 자리에서 하는 인사말로 자주 씁니다. 좋은 뜻으로 들립니다."
  },
  {
    id: "daily-people-57",
    category: "daily-people",
    ko: "두 분 다 오세요.",
    en: "___ of them are coming.",
    accept: ["Both"],
    hint: "둘 다를 뜻하는 말",
    note: "both of them은 두 명일 때, all of them은 셋 이상일 때 씁니다."
  },
  {
    id: "daily-people-58",
    category: "daily-people",
    ko: "그 사람 지금 자리에 없어요.",
    en: "He's not here right ___.",
    accept: ["now"],
    hint: "'지금'을 뜻하는 말",
    note: "right now는 '바로 지금'입니다. 전화를 대신 받았을 때 자주 쓰는 말입니다."
  },
  {
    id: "daily-people-59",
    category: "daily-people",
    ko: "두 사람 사이가 좋아요.",
    en: "They get ___ well.",
    accept: ["along"],
    hint: "'~을 따라'라는 전치사가 get과 붙으면 사이가 좋다는 뜻이 됩니다",
    note: "get along with는 '~와 잘 지내다'입니다. 사람 사이를 말할 때 가장 흔한 표현입니다."
  },
  {
    id: "daily-people-60",
    category: "daily-people",
    ko: "그분 이름이 뭐예요?",
    en: "What's ___ name?",
    accept: ["his", "her"],
    hint: "'그 사람의'에 해당하는 말",
    note: "본인에게 직접 물을 때는 What's your name?이지만, 조금 딱딱하게 들려 May I ask your name?을 쓰기도 합니다."
  },
  {
    id: "daily-people-61",
    category: "daily-people",
    ko: "우리 전에 만난 적 있죠?",
    en: "Haven't we met ___?",
    accept: ["before"],
    hint: "'전에'를 뜻하는 말",
    note: "Haven't we met before?는 낯익은 사람에게 말을 걸 때 쓰는 자연스러운 표현입니다."
  },
  {
    id: "daily-people-62",
    category: "daily-people",
    ko: "저희는 대학 때 만났어요.",
    en: "We ___ in college.",
    accept: ["met"],
    hint: "만나다의 과거형",
    note: "meet은 처음 만나는 것, see는 이미 아는 사람을 보는 것입니다."
  },
  {
    id: "daily-people-63",
    category: "daily-people",
    ko: "친구 소개로 알게 됐어요.",
    en: "We met through a ___.",
    accept: ["friend"],
    hint: "가깝게 지내는 사람",
    note: "through a friend는 '친구를 거쳐서', 즉 소개로 알게 됐다는 뜻입니다."
  },
  {
    id: "daily-people-64",
    category: "daily-people",
    ko: "십 년 넘게 알고 지낸 사이예요.",
    en: "We've known each ___ for over ten years.",
    accept: ["other"],
    hint: "each와 짝을 이뤄 '서로'가 되는 말",
    note: "each other는 두 사람 사이에, one another는 셋 이상에 쓴다고 하지만 실제로는 구별 없이 씁니다."
  },
  {
    id: "daily-people-65",
    category: "daily-people",
    ko: "같이 일하는 사이예요.",
    en: "We ___ together.",
    accept: ["work"],
    hint: "직장에서 일한다는 뜻의 동사",
    note: "We work together는 동료 사이라는 뜻입니다. 직장 동료 한 명은 coworker입니다."
  },
  {
    id: "daily-people-66",
    category: "daily-people",
    ko: "저희 옆집에 살아요.",
    en: "They live next ___.",
    accept: ["door"],
    hint: "'문'을 뜻하는 말이 next와 붙으면 옆집이 됩니다",
    note: "next door가 '바로 옆집'입니다. 옆집 사람은 next-door neighbor라고 합니다."
  },
  {
    id: "daily-people-67",
    category: "daily-people",
    ko: "같은 동네에서 자랐어요.",
    en: "We grew ___ in the same town.",
    accept: ["up"],
    hint: "'위로'를 뜻하는 말이 grow와 붙으면 자란다는 뜻이 됩니다",
    note: "grow up은 사람이 자라는 것, grow는 키나 식물이 자라는 것입니다."
  },
  {
    id: "daily-people-68",
    category: "daily-people",
    ko: "오래된 친구예요.",
    en: "He's an ___ friend.",
    accept: ["old"],
    hint: "오래되었다는 뜻의 형용사",
    note: "an old friend는 나이가 많다는 뜻이 아니라 오래 알고 지낸 사이라는 뜻입니다."
  },
  {
    id: "daily-people-69",
    category: "daily-people",
    ko: "두 분은 어떻게 아는 사이세요?",
    en: "How do you two ___ each other?",
    accept: ["know"],
    hint: "알고 있다는 뜻의 동사",
    note: "처음 만난 자리에서 두 사람의 관계를 물을 때 쓰는 자연스러운 표현입니다."
  },
  {
    id: "daily-people-70",
    category: "daily-people",
    ko: "두 분 정말 잘 어울리세요.",
    en: "You two make a great ___.",
    accept: ["couple"],
    hint: "짝을 이룬 두 사람을 뜻하는 명사",
    note: "make a great couple은 연인이나 부부에게 하는 덕담입니다."
  },
  {
    id: "daily-people-71",
    category: "daily-people",
    ko: "연락하고 지내요.",
    en: "We keep in ___.",
    accept: ["touch"],
    hint: "'닿음'을 뜻하는 명사가 keep in과 붙으면 연락을 이어간다는 뜻이 됩니다",
    note: "헤어질 때 Let's keep in touch라고 하면 '연락하고 지내자'입니다."
  },
  {
    id: "daily-people-72",
    category: "daily-people",
    ko: "요즘은 자주 못 봐요.",
    en: "I don't see him ___ these days.",
    accept: ["much", "often"],
    hint: "양이나 횟수가 많다는 뜻의 말",
    note: "부정문에서 much는 '별로'라는 뜻이 됩니다. don't see him much가 자연스럽습니다."
  },
  {
    id: "daily-people-73",
    category: "daily-people",
    ko: "같이 갈 사람 있어요?",
    en: "Is ___ coming with you?",
    accept: ["anyone", "anybody"],
    hint: "'누군가'를 뜻하는 말. 묻는 문장에 쓰는 쪽입니다",
    note: "물음과 부정에는 anyone, 평서문에는 someone을 쓰는 것이 기본입니다."
  },
  {
    id: "daily-people-74",
    category: "daily-people",
    ko: "아무도 안 왔어요.",
    en: "___ showed up.",
    accept: ["Nobody", "No one"],
    hint: "'아무도 ~않다'를 한 낱말로 나타내는 말",
    note: "이미 부정의 뜻이 들어 있어 didn't를 함께 쓰지 않습니다. show up은 '나타나다'입니다."
  },
  {
    id: "daily-people-75",
    category: "daily-people",
    ko: "누가 저한테 그러던데요.",
    en: "___ told me that.",
    accept: ["Someone", "Somebody"],
    hint: "'누군가'를 뜻하는 말. 평서문에 쓰는 쪽입니다",
    note: "누구인지 밝히고 싶지 않거나 기억나지 않을 때 씁니다."
  },
  {
    id: "daily-people-76",
    category: "daily-people",
    ko: "그분은 다들 아세요.",
    en: "Everyone ___ him.",
    accept: ["knows"],
    hint: "알고 있다는 뜻의 동사. 주어가 단수 취급이라는 점에 유의합니다",
    note: "everyone은 뜻은 여럿이지만 단수 취급이라 knows처럼 동사에 s가 붙습니다."
  },
  {
    id: "daily-people-77",
    category: "daily-people",
    ko: "다른 분들은 어디 가셨어요?",
    en: "Where did the ___ go?",
    accept: ["others"],
    hint: "나머지 사람들을 뜻하는 복수 명사",
    note: "the others는 '나머지 사람들 전부'입니다. others는 그냥 '다른 사람들'입니다."
  },
  {
    id: "daily-people-78",
    category: "daily-people",
    ko: "또 누가 오나요?",
    en: "Who ___ is coming?",
    accept: ["else"],
    hint: "'그 밖에'를 뜻하는 말. 의문사 바로 뒤에 붙습니다",
    note: "who else, what else, anything else처럼 항상 뒤에 붙습니다."
  },
  {
    id: "daily-people-79",
    category: "daily-people",
    ko: "혼자 사세요?",
    en: "Do you live by ___?",
    accept: ["yourself"],
    hint: "'당신 자신'을 뜻하는 말",
    note: "by yourself는 '혼자서'입니다. alone도 같은 뜻이지만 조금 쓸쓸한 느낌이 있습니다."
  },
  {
    id: "daily-people-80",
    category: "daily-people",
    ko: "저희끼리 갈게요.",
    en: "We'll go on our ___.",
    accept: ["own"],
    hint: "'자기만의'를 뜻하는 말",
    note: "on our own은 '우리끼리, 우리 힘으로'입니다."
  },
  {
    id: "daily-people-81",
    category: "daily-people",
    ko: "아이들이 이제 다 컸어요.",
    en: "The kids are all ___ up.",
    accept: ["grown"],
    hint: "자라다의 과거분사",
    note: "grown-up을 명사로 쓰면 '어른'이라는 뜻이 됩니다."
  },
  {
    id: "daily-people-82",
    category: "daily-people",
    ko: "애들 키우느라 정신이 없어요.",
    en: "___ kids keeps me busy.",
    accept: ["Raising"],
    hint: "아이를 키운다는 뜻의 동사. 주어 자리라 -ing 꼴입니다",
    note: "raise는 아이를 키우는 것, grow는 식물을 기르는 것입니다."
  },
  {
    id: "daily-people-83",
    category: "daily-people",
    ko: "저희 아버지가 하시던 일을 물려받았어요.",
    en: "I took over my ___ business.",
    accept: ["dad's", "father's"],
    hint: "가족 중 남자 어른. '~의'를 나타내는 꼴로 씁니다",
    note: "take over는 일이나 자리를 넘겨받는다는 뜻입니다."
  },
  {
    id: "daily-people-84",
    category: "daily-people",
    ko: "저희 어머니가 늘 그렇게 말씀하셨어요.",
    en: "My mom ___ said that.",
    accept: ["always"],
    hint: "'늘', '언제나'를 뜻하는 말",
    note: "always는 보통 일반동사 앞에 옵니다. be동사일 때는 뒤에 옵니다."
  },
  {
    id: "daily-people-85",
    category: "daily-people",
    ko: "남편이랑 같이 왔어요.",
    en: "I ___ with my husband.",
    accept: ["came"],
    hint: "오다의 과거형",
    note: "came with는 함께 왔다는 뜻입니다. 지금 함께 있다면 I'm here with my husband라고 합니다."
  },
  {
    id: "daily-people-86",
    category: "daily-people",
    ko: "아내가 좋아하겠네요.",
    en: "My wife will ___ this.",
    accept: ["love"],
    hint: "아주 좋아한다는 뜻의 동사",
    note: "will love this는 선물을 고를 때 자주 쓰는 말입니다. like보다 훨씬 강한 뜻입니다."
  },
  {
    id: "daily-people-87",
    category: "daily-people",
    ko: "아들이 축구를 해요.",
    en: "My son ___ soccer.",
    accept: ["plays"],
    hint: "운동을 한다는 뜻의 동사. 주어가 3인칭 단수입니다",
    note: "운동 종목에는 play를 씁니다. 미국은 soccer, 영국은 football이라고 부릅니다."
  },
  {
    id: "daily-people-88",
    category: "daily-people",
    ko: "딸이 저보다 영어를 잘해요.",
    en: "My daughter speaks ___ English than I do.",
    accept: ["better"],
    hint: "good의 비교급",
    note: "than I do는 than me보다 조금 더 또박또박한 말투입니다. 둘 다 씁니다."
  },
  {
    id: "daily-people-89",
    category: "daily-people",
    ko: "손주가 셋이에요.",
    en: "I have three ___.",
    accept: ["grandkids", "grandchildren"],
    hint: "자식의 아이들을 뜻하는 복수 명사",
    note: "grandkids가 더 편한 말입니다. 손자는 grandson, 손녀는 granddaughter입니다."
  },
  {
    id: "daily-people-90",
    category: "daily-people",
    ko: "형제 중에 제가 막내예요.",
    en: "I'm the ___ of three.",
    accept: ["youngest"],
    hint: "나이가 가장 적다는 뜻의 최상급",
    note: "맏이는 the oldest, 가운데는 the middle child입니다."
  },
  {
    id: "daily-people-91",
    category: "daily-people",
    ko: "여자분들이 남자분들보다 많았어요.",
    en: "There were more ___ than men.",
    accept: ["women"],
    hint: "여자 여럿을 뜻하는 복수 명사",
    note: "woman의 복수는 womans가 아니라 women입니다. 소리도 '워먼'에서 '위민'으로 달라집니다."
  },
  {
    id: "daily-people-92",
    category: "daily-people",
    ko: "부모님이 자주 오세요.",
    en: "My parents ___ a lot.",
    accept: ["visit"],
    hint: "찾아온다는 뜻의 동사. 주어가 복수입니다",
    note: "parents는 복수라서 visits가 아니라 visit입니다."
  },
  {
    id: "daily-people-93",
    category: "daily-people",
    ko: "저희 가족은 다들 늦잠을 자요.",
    en: "Everyone in my family ___ in.",
    accept: ["sleeps"],
    hint: "잠을 잔다는 뜻의 동사. in과 붙으면 늦게까지 잔다는 뜻이 됩니다",
    note: "sleep in은 일부러 늦게까지 자는 것입니다. 늦잠을 자서 늦은 것은 oversleep입니다."
  },
  {
    id: "daily-people-94",
    category: "daily-people",
    ko: "어떤 남자분이 도와주셨어요.",
    en: "A ___ helped me out.",
    accept: ["man", "guy"],
    hint: "남자 한 사람을 가리키는 말",
    note: "help someone out은 곤란한 상황에서 도와줬다는 뜻입니다."
  },
  {
    id: "daily-people-95",
    category: "daily-people",
    ko: "어떤 여자분이 길을 알려주셨어요.",
    en: "A woman gave me ___.",
    accept: ["directions"],
    hint: "길 안내를 뜻하는 명사. 이 뜻일 때는 항상 복수입니다",
    note: "단수 direction은 '방향'이라는 다른 뜻이 됩니다."
  },
  {
    id: "daily-people-96",
    category: "daily-people",
    ko: "저 사람들 아까부터 기다리고 있었어요.",
    en: "They've been ___ for a while.",
    accept: ["waiting"],
    hint: "기다린다는 뜻의 동사. 진행형 자리입니다",
    note: "for a while은 '꽤 오래'라는 뜻입니다. 계속 이어진 일이라 have been -ing를 씁니다."
  },
  {
    id: "daily-people-97",
    category: "daily-people",
    ko: "제 친구 한 명을 소개해 드릴게요.",
    en: "I'd like you to ___ a friend of mine.",
    accept: ["meet"],
    hint: "처음 만난다는 뜻의 동사",
    note: "I'd like you to meet은 사람을 소개할 때 쓰는 가장 무난한 표현입니다."
  },
  {
    id: "daily-people-98",
    category: "daily-people",
    ko: "저희는 서로 잘 아는 사이예요.",
    en: "We know each other pretty ___.",
    accept: ["well"],
    hint: "'잘'을 뜻하는 부사",
    note: "pretty well은 '꽤 잘'입니다. 여기서 pretty는 '예쁜'이 아니라 정도를 나타냅니다."
  },
  {
    id: "daily-people-99",
    category: "daily-people",
    ko: "제 또래예요.",
    en: "He's ___ my age.",
    accept: ["about", "around"],
    hint: "'대략', '~쯤'을 뜻하는 말",
    note: "about my age가 '나랑 비슷한 나이'입니다. around도 같은 뜻으로 씁니다."
  },
  {
    id: "daily-people-100",
    category: "daily-people",
    ko: "그분들 얘기 좀 해주세요.",
    en: "Tell me about ___.",
    accept: ["them"],
    hint: "'그 사람들'에 해당하는 목적어 자리의 말",
    note: "Tell me about은 상대가 이야기를 이어가게 만드는 말입니다. 대화를 늘리는 데 좋습니다."
  },
  {
    id: "travel-out-101",
    category: "travel-out",
    ko: "예약 시간을 8시로 옮길 수 있을까요?",
    en: "Could we ___ our reservation to eight?",
    accept: ["move"],
    hint: "자리를 옮긴다는 뜻의 동사",
    note: "move a reservation은 시간을 바꾼다는 뜻입니다. 취소하고 다시 잡는 것이 아닙니다."
  },
  {
    id: "travel-out-102",
    category: "travel-out",
    ko: "두 명 더 와도 될까요?",
    en: "Could we ___ two more people?",
    accept: ["add"],
    hint: "수를 더한다는 뜻의 동사",
    note: "예약 인원을 늘릴 때 씁니다. 줄일 때는 drop을 씁니다."
  },
  {
    id: "travel-out-103",
    category: "travel-out",
    ko: "얼마나 더 기다려야 하나요?",
    en: "How much ___ is the wait?",
    accept: ["longer"],
    hint: "시간이 더 길다는 뜻의 비교급",
    note: "How much longer는 이미 기다리고 있는 상황에서 씁니다."
  },
  {
    id: "travel-out-104",
    category: "travel-out",
    ko: "대기자 명단에 올려주세요.",
    en: "Could you put me on the ___ list?",
    accept: ["waiting", "wait"],
    hint: "기다린다는 뜻의 말",
    note: "미국에서는 waitlist라는 한 단어로도 씁니다."
  },
  {
    id: "travel-out-105",
    category: "travel-out",
    ko: "아기 의자 있나요?",
    en: "Do you have a ___ chair?",
    accept: ["high"],
    hint: "높다는 뜻의 형용사. chair와 붙어 유아용 의자가 됩니다",
    note: "high chair는 아기를 앉히는 다리 긴 의자입니다."
  },
  {
    id: "travel-out-106",
    category: "travel-out",
    ko: "물 좀 주시겠어요?",
    en: "Could we get some ___, please?",
    accept: ["water"],
    hint: "마시는 것 중 가장 기본이 되는 것",
    note: "미국 식당에서는 물을 따로 청하지 않아도 먼저 내줍니다."
  },
  {
    id: "travel-out-107",
    category: "travel-out",
    ko: "얼음은 빼주세요.",
    en: "No ___, please.",
    accept: ["ice"],
    hint: "물을 얼린 것",
    note: "얼음을 더 원하면 extra ice라고 합니다."
  },
  {
    id: "travel-out-108",
    category: "travel-out",
    ko: "빨대 하나 주시겠어요?",
    en: "Could I get a ___ for my drink?",
    accept: ["straw"],
    hint: "음료를 빨아 마시는 가는 관",
    note: "요즘은 종이 빨대를 쓰는 곳이 많습니다. paper straw라고 합니다."
  },
  {
    id: "travel-out-109",
    category: "travel-out",
    ko: "냅킨 좀 더 주세요.",
    en: "Could we get more ___?",
    accept: ["napkins"],
    hint: "입이나 손을 닦는 종이",
    note: "영국에서는 serviette이라고도 합니다."
  },
  {
    id: "travel-out-110",
    category: "travel-out",
    ko: "앞접시 하나 주시겠어요?",
    en: "Could we get a small ___?",
    accept: ["plate"],
    hint: "음식을 담는 납작한 그릇",
    note: "나눠 먹을 때 쓰는 접시는 side plate라고도 합니다."
  },
  {
    id: "travel-out-111",
    category: "travel-out",
    ko: "젓가락 있나요?",
    en: "Do you have ___?",
    accept: ["chopsticks"],
    hint: "동아시아에서 쓰는 두 개짜리 식사 도구",
    note: "항상 복수로 씁니다. 한 짝은 a chopstick입니다."
  },
  {
    id: "travel-out-112",
    category: "travel-out",
    ko: "포크로 주시겠어요?",
    en: "Could I get a ___ instead?",
    accept: ["fork"],
    hint: "끝이 갈라진 서양식 식사 도구",
    note: "instead를 붙이면 '이것 말고 저것으로'라는 뜻이 됩니다."
  },
  {
    id: "travel-out-113",
    category: "travel-out",
    ko: "소금 좀 건네주시겠어요?",
    en: "Could you pass the ___?",
    accept: ["salt"],
    hint: "짠맛을 내는 조미료",
    note: "pass the salt는 식탁에서 옆 사람에게 건네달라고 할 때 쓰는 정해진 표현입니다."
  },
  {
    id: "travel-out-114",
    category: "travel-out",
    ko: "이거 다시 데워주시겠어요?",
    en: "Could you ___ this, please?",
    accept: ["reheat"],
    hint: "다시 데운다는 뜻의 동사",
    note: "heat up은 처음 데우는 것, reheat는 식은 것을 다시 데우는 것입니다."
  },
  {
    id: "travel-out-115",
    category: "travel-out",
    ko: "음료는 뭐가 있나요?",
    en: "What ___ do you have?",
    accept: ["drinks", "beverages"],
    hint: "마실 것을 뜻하는 복수 명사",
    note: "drinks가 편한 말, beverages는 메뉴판에 적히는 말입니다."
  },
  {
    id: "travel-out-116",
    category: "travel-out",
    ko: "생맥주 한 잔 주세요.",
    en: "I'll have a ___ beer.",
    accept: ["draft", "draught"],
    hint: "통에서 바로 따르는 방식을 뜻하는 말",
    note: "미국은 draft, 영국은 draught로 적지만 소리는 같습니다."
  },
  {
    id: "travel-out-117",
    category: "travel-out",
    ko: "무알코올 음료 있나요?",
    en: "Do you have any ___ drinks?",
    accept: ["non-alcoholic", "nonalcoholic"],
    hint: "술이 들어 있지 않다는 뜻의 형용사",
    note: "요즘은 mocktail이라는 말도 씁니다."
  },
  {
    id: "travel-out-118",
    category: "travel-out",
    ko: "하나 더 시킬까요?",
    en: "Should we ___ another one?",
    accept: ["order"],
    hint: "음식을 주문한다는 뜻의 동사",
    note: "another one은 '같은 걸로 하나 더'라는 뜻입니다."
  },
  {
    id: "travel-out-119",
    category: "travel-out",
    ko: "이건 서비스인가요?",
    en: "Is this on the ___?",
    accept: ["house"],
    hint: "집을 뜻하는 명사가 가게를 가리키면 무료가 됩니다",
    note: "on the house는 가게에서 그냥 준다는 뜻입니다. 우리말 '서비스'는 영어로 통하지 않습니다."
  },
  {
    id: "travel-out-120",
    category: "travel-out",
    ko: "계산이 잘못된 것 같아요.",
    en: "I think there's an ___ on the bill.",
    accept: ["error"],
    hint: "잘못된 부분을 뜻하는 명사",
    note: "There's an error on the bill은 따지지 않고 부드럽게 알리는 말투입니다."
  },
  {
    id: "travel-out-121",
    category: "travel-out",
    ko: "음식이 좀 짜요.",
    en: "It's a little too ___.",
    accept: ["salty"],
    hint: "소금 맛이 강하다는 뜻의 형용사",
    note: "a little too를 붙이면 불평이 아니라 알려주는 느낌이 됩니다."
  },
  {
    id: "travel-out-122",
    category: "travel-out",
    ko: "좀 기름져요.",
    en: "It's a bit ___.",
    accept: ["greasy", "oily"],
    hint: "기름기가 많다는 뜻의 형용사",
    note: "greasy는 기름진 음식에, oily는 기름이 겉도는 느낌에 씁니다."
  },
  {
    id: "travel-out-123",
    category: "travel-out",
    ko: "이 고기가 덜 익은 것 같아요.",
    en: "I think this meat is ___.",
    accept: ["undercooked", "raw"],
    hint: "충분히 익지 않았다는 뜻의 말",
    note: "undercooked는 덜 익은 것, raw는 아예 날것입니다."
  },
  {
    id: "travel-out-124",
    category: "travel-out",
    ko: "음식이 정말 훌륭했어요.",
    en: "The food was ___.",
    accept: ["fantastic", "amazing"],
    hint: "아주 좋았다는 뜻의 강한 형용사",
    note: "계산할 때 이 말을 건네면 좋은 인상을 남깁니다."
  },
  {
    id: "travel-out-125",
    category: "travel-out",
    ko: "주방장님께 잘 먹었다고 전해주세요.",
    en: "Please give my ___ to the chef.",
    accept: ["compliments"],
    hint: "칭찬을 뜻하는 명사. 이 뜻일 때는 복수로 씁니다",
    note: "compliments to the chef는 정해진 표현입니다."
  },
  {
    id: "travel-out-126",
    category: "travel-out",
    ko: "팁은 얼마나 드리면 되나요?",
    en: "How much should I ___?",
    accept: ["tip"],
    hint: "봉사료를 준다는 뜻의 동사",
    note: "미국은 보통 15~20퍼센트입니다. 한국과 일본은 팁 문화가 없습니다."
  },
  {
    id: "travel-out-127",
    category: "travel-out",
    ko: "카드 두 장으로 나눠서 낼게요.",
    en: "Can we split it between two ___?",
    accept: ["cards"],
    hint: "결제 수단을 뜻하는 복수 명사",
    note: "가게에 따라 안 되는 곳도 있어 미리 물어보는 것이 좋습니다."
  },
  {
    id: "travel-out-128",
    category: "travel-out",
    ko: "봉사료가 포함된 가격인가요?",
    en: "Is the service ___ included?",
    accept: ["charge"],
    hint: "요금을 뜻하는 명사",
    note: "유럽 식당에는 service charge가 청구서에 붙는 곳이 많습니다."
  },
  {
    id: "travel-out-129",
    category: "travel-out",
    ko: "다른 자리로 앉아도 될까요?",
    en: "Could we sit somewhere ___?",
    accept: ["else"],
    hint: "'그 밖의'를 뜻하는 말",
    note: "somewhere else는 '다른 데'입니다."
  },
  {
    id: "travel-out-130",
    category: "travel-out",
    ko: "콘센트 가까운 자리 있나요?",
    en: "Is there a table near an ___?",
    accept: ["outlet"],
    hint: "전기를 꽂는 구멍",
    note: "미국은 outlet, 영국은 socket이라고 합니다."
  },
  {
    id: "travel-out-131",
    category: "travel-out",
    ko: "화장실 열쇠 있나요?",
    en: "Do you have a key for the ___?",
    accept: ["restroom", "bathroom"],
    hint: "볼일을 보는 곳",
    note: "미국 가게에서는 열쇠를 받아야 하는 곳이 종종 있습니다."
  },
  {
    id: "travel-out-132",
    category: "travel-out",
    ko: "주차 도장 좀 찍어주시겠어요?",
    en: "Could you ___ my parking?",
    accept: ["validate"],
    hint: "확인해 준다는 뜻의 동사",
    note: "validate parking은 가게에서 주차비를 깎아 주는 절차입니다."
  },
  {
    id: "travel-out-133",
    category: "travel-out",
    ko: "예약은 안 했는데요.",
    en: "We don't have a ___.",
    accept: ["reservation"],
    hint: "미리 자리를 잡아두는 것",
    note: "예약 없이 온 손님은 walk-in이라고 부릅니다."
  },
  {
    id: "travel-out-134",
    category: "travel-out",
    ko: "몇 시에 문 닫아요?",
    en: "What time do you ___?",
    accept: ["close"],
    hint: "영업을 마친다는 뜻의 동사",
    note: "여는 시간을 물을 때는 What time do you open?입니다."
  },
  {
    id: "travel-out-135",
    category: "travel-out",
    ko: "배달도 되나요?",
    en: "Do you ___?",
    accept: ["deliver"],
    hint: "집까지 가져다준다는 뜻의 동사",
    note: "포장만 되는 곳은 takeout only라고 합니다."
  },
  {
    id: "travel-out-136",
    category: "travel-out",
    ko: "이거 재고 있나요?",
    en: "Do you have this in ___?",
    accept: ["stock"],
    hint: "가게에 쌓아둔 물건을 뜻하는 명사",
    note: "in stock은 있다, out of stock은 없다는 뜻입니다."
  },
  {
    id: "travel-out-137",
    category: "travel-out",
    ko: "이거 품절인가요?",
    en: "Is it ___ out?",
    accept: ["sold"],
    hint: "팔다의 과거분사",
    note: "sold out은 다 팔렸다는 뜻입니다."
  },
  {
    id: "travel-out-138",
    category: "travel-out",
    ko: "다른 지점에 있을까요?",
    en: "Do you have it at another ___?",
    accept: ["store", "location"],
    hint: "가게 한 곳을 뜻하는 명사",
    note: "체인점의 지점은 location이나 branch라고 합니다."
  },
  {
    id: "travel-out-139",
    category: "travel-out",
    ko: "온라인으로 주문할 수 있나요?",
    en: "Can I order it ___?",
    accept: ["online"],
    hint: "인터넷으로 한다는 뜻의 말",
    note: "가게에서 주문해 집으로 받는 것은 ship to home이라고 합니다."
  },
  {
    id: "travel-out-140",
    category: "travel-out",
    ko: "배송은 얼마나 걸리나요?",
    en: "How long does ___ take?",
    accept: ["delivery", "shipping"],
    hint: "물건을 보내주는 일을 뜻하는 명사",
    note: "delivery는 받는 쪽, shipping은 보내는 쪽에서 보는 말입니다."
  },
  {
    id: "travel-out-141",
    category: "travel-out",
    ko: "집으로 보내주실 수 있나요?",
    en: "Could you ___ it to my house?",
    accept: ["ship", "send"],
    hint: "물건을 부친다는 뜻의 동사",
    note: "ship은 택배로 부치는 것, send는 더 넓게 씁니다."
  },
  {
    id: "travel-out-142",
    category: "travel-out",
    ko: "보증 기간이 얼마나 되나요?",
    en: "How long does the ___ last?",
    accept: ["warranty"],
    hint: "고장 나면 고쳐준다는 약속",
    note: "warranty는 제조사가 주는 보증, guarantee는 더 넓은 뜻의 약속입니다."
  },
  {
    id: "travel-out-143",
    category: "travel-out",
    ko: "선물용 영수증도 주시겠어요?",
    en: "Could I get a ___ receipt?",
    accept: ["gift"],
    hint: "선물을 뜻하는 명사",
    note: "gift receipt에는 가격이 찍히지 않아 받는 사람이 교환만 할 수 있습니다."
  },
  {
    id: "travel-out-144",
    category: "travel-out",
    ko: "이 세일 언제까지예요?",
    en: "When does the sale ___?",
    accept: ["end"],
    hint: "끝난다는 뜻의 동사",
    note: "세일 마지막 날은 the last day of the sale입니다."
  },
  {
    id: "travel-out-145",
    category: "travel-out",
    ko: "멤버십 카드 있으세요?",
    en: "Do you have a ___ card?",
    accept: ["membership", "loyalty"],
    hint: "회원임을 나타내는 말",
    note: "미국 가게에서 계산할 때 거의 매번 묻는 질문입니다."
  },
  {
    id: "travel-out-146",
    category: "travel-out",
    ko: "포인트 적립되나요?",
    en: "Do I earn ___?",
    accept: ["points"],
    hint: "쌓아두었다가 쓰는 것",
    note: "쓸 때는 redeem points라고 합니다."
  },
  {
    id: "travel-out-147",
    category: "travel-out",
    ko: "할부로 살 수 있나요?",
    en: "Can I pay in ___?",
    accept: ["installments"],
    hint: "여러 번에 나눠 낸다는 뜻의 명사",
    note: "한국만큼 흔하지 않아 안 되는 곳이 많습니다."
  },
  {
    id: "travel-out-148",
    category: "travel-out",
    ko: "일시불로 할게요.",
    en: "I'll pay in ___.",
    accept: ["full"],
    hint: "모자람 없이 전부라는 뜻의 말",
    note: "pay in full은 한 번에 다 낸다는 뜻입니다."
  },
  {
    id: "travel-out-149",
    category: "travel-out",
    ko: "이거 면세 되나요?",
    en: "Is this ___ free?",
    accept: ["duty", "tax"],
    hint: "물건에 붙는 세금을 뜻하는 명사",
    note: "공항 면세점은 duty-free, 관광객 세금 환급은 tax refund입니다."
  },
  {
    id: "travel-out-150",
    category: "travel-out",
    ko: "이거 신상품인가요?",
    en: "Is this a new ___?",
    accept: ["arrival"],
    hint: "새로 들어왔다는 뜻의 명사",
    note: "가게 앞에 New Arrivals라고 써 붙인 것을 자주 볼 수 있습니다."
  },
  {
    id: "travel-out-151",
    category: "travel-out",
    ko: "좀 더 밝은 색 있나요?",
    en: "Do you have it in a ___ color?",
    accept: ["lighter"],
    hint: "색이 옅다는 뜻의 비교급",
    note: "짙은 색은 darker입니다. light는 색이 옅다는 뜻과 가볍다는 뜻을 함께 가집니다."
  },
  {
    id: "travel-out-152",
    category: "travel-out",
    ko: "이거 세탁기에 돌려도 되나요?",
    en: "Is it machine ___?",
    accept: ["washable"],
    hint: "빨 수 있다는 뜻의 형용사",
    note: "손빨래만 되는 것은 hand wash only라고 적혀 있습니다."
  },
  {
    id: "travel-out-153",
    category: "travel-out",
    ko: "이거 소재가 뭐예요?",
    en: "What ___ is it?",
    accept: ["material", "fabric"],
    hint: "무엇으로 만들었는지를 뜻하는 명사",
    note: "옷감에는 fabric, 그 밖의 재료에는 material을 씁니다."
  },
  {
    id: "travel-out-154",
    category: "travel-out",
    ko: "이거 정품인가요?",
    en: "Is it ___?",
    accept: ["genuine", "authentic"],
    hint: "가짜가 아니라는 뜻의 형용사",
    note: "가짜는 fake나 counterfeit라고 합니다."
  },
  {
    id: "travel-out-155",
    category: "travel-out",
    ko: "이거 무게가 얼마나 나가요?",
    en: "How much does it ___?",
    accept: ["weigh"],
    hint: "무게를 잰다는 뜻의 동사",
    note: "명사 weight와 소리가 같습니다."
  },
  {
    id: "travel-out-156",
    category: "travel-out",
    ko: "좀 무겁네요.",
    en: "This one's a bit ___.",
    accept: ["heavy"],
    hint: "무겁다는 뜻의 형용사",
    note: "가벼운 것은 light입니다."
  },
  {
    id: "travel-out-157",
    category: "travel-out",
    ko: "이거 깨지기 쉬운가요?",
    en: "Is this item ___?",
    accept: ["fragile"],
    hint: "잘 깨진다는 뜻의 형용사",
    note: "택배 상자에 Fragile이라고 찍힌 것을 자주 볼 수 있습니다."
  },
  {
    id: "travel-out-158",
    category: "travel-out",
    ko: "좀 더 보고 다시 올게요.",
    en: "I'll ___ back later.",
    accept: ["come"],
    hint: "오다의 기본형",
    note: "사지 않고 나올 때 쓰는 부드러운 말입니다."
  },
  {
    id: "travel-out-159",
    category: "travel-out",
    ko: "이건 따로 담아주세요.",
    en: "Could you put those in a ___ bag?",
    accept: ["separate"],
    hint: "따로 떨어져 있다는 뜻의 형용사",
    note: "부사 separately와 헷갈리기 쉽습니다. 여기서는 bag을 꾸미므로 형용사입니다."
  },
  {
    id: "travel-out-160",
    category: "travel-out",
    ko: "카트는 어디에 있나요?",
    en: "Where can I get a ___?",
    accept: ["cart"],
    hint: "물건을 싣고 미는 수레",
    note: "미국은 cart, 영국은 trolley라고 합니다."
  },
  {
    id: "travel-out-161",
    category: "travel-out",
    ko: "계산대가 어디예요?",
    en: "Where's the ___ counter?",
    accept: ["checkout"],
    hint: "돈을 내는 곳",
    note: "미국에서는 cash register나 checkout이라고 합니다."
  },
  {
    id: "travel-out-162",
    category: "travel-out",
    ko: "줄이 어디서부터인가요?",
    en: "Where does the ___ start?",
    accept: ["line", "queue"],
    hint: "차례를 기다리며 선 줄",
    note: "미국은 line, 영국은 queue를 씁니다."
  },
  {
    id: "travel-out-163",
    category: "travel-out",
    ko: "이것들 살게요.",
    en: "I'd like to ___ these.",
    accept: ["buy", "purchase"],
    hint: "돈을 주고 얻는다는 뜻의 동사",
    note: "buy가 편한 말, purchase는 격식 있는 말입니다."
  },
  {
    id: "travel-out-164",
    category: "travel-out",
    ko: "영수증은 안 주셔도 돼요.",
    en: "I don't ___ the receipt.",
    accept: ["need"],
    hint: "필요하다는 뜻의 동사",
    note: "요즘은 이메일로 보내주기도 합니다. email receipt라고 합니다."
  },
  {
    id: "travel-out-165",
    category: "travel-out",
    ko: "가격표가 안 붙어 있어요.",
    en: "There's no price ___ on this.",
    accept: ["tag"],
    hint: "물건에 매달린 작은 표",
    note: "가격을 물으려면 Could you check the price?라고 합니다."
  },
  {
    id: "travel-out-166",
    category: "travel-out",
    ko: "가격 좀 확인해 주시겠어요?",
    en: "Could you ___ the price for me?",
    accept: ["check"],
    hint: "맞는지 살펴본다는 뜻의 동사",
    note: "가게에서 바코드를 찍어 확인해 줍니다."
  },
  {
    id: "travel-out-167",
    category: "travel-out",
    ko: "좀 더 생각해 볼게요.",
    en: "Let me ___ about it.",
    accept: ["think"],
    hint: "생각한다는 뜻의 동사",
    note: "사지 않고 자리를 뜰 때 쓰는 무난한 말입니다."
  },
  {
    id: "travel-out-168",
    category: "travel-out",
    ko: "이걸로 정했어요.",
    en: "I've ___.",
    accept: ["decided"],
    hint: "정하다의 과거분사",
    note: "메뉴를 다 골랐을 때도 씁니다."
  },
  {
    id: "travel-out-169",
    category: "travel-out",
    ko: "몇 번 출구로 나가야 하나요?",
    en: "Which ___ should I take?",
    accept: ["exit"],
    hint: "밖으로 나가는 문",
    note: "한국 지하철은 출구에 번호가 붙어 있어 Exit 3처럼 말합니다."
  },
  {
    id: "travel-out-170",
    category: "travel-out",
    ko: "막차가 몇 시예요?",
    en: "What time is the ___ train?",
    accept: ["last"],
    hint: "맨 나중이라는 뜻의 형용사",
    note: "첫차는 the first train입니다."
  },
  {
    id: "travel-out-171",
    category: "travel-out",
    ko: "배차 간격이 어떻게 되나요?",
    en: "How ___ do the buses come?",
    accept: ["often"],
    hint: "얼마나 자주인지를 묻는 부사",
    note: "대답은 Every ten minutes처럼 합니다."
  },
  {
    id: "travel-out-172",
    category: "travel-out",
    ko: "이 카드로 탈 수 있나요?",
    en: "Can I use this card to ___ the bus?",
    accept: ["ride"],
    hint: "차를 탄다는 뜻의 동사",
    note: "대중교통을 탈 때는 ride, 운전할 때는 drive입니다."
  },
  {
    id: "travel-out-173",
    category: "travel-out",
    ko: "교통카드 충전은 어디서 하나요?",
    en: "Where can I ___ my transit card?",
    accept: ["recharge", "reload"],
    hint: "다시 채운다는 뜻의 동사",
    note: "영국에서는 top up이라는 말을 씁니다."
  },
  {
    id: "travel-out-174",
    category: "travel-out",
    ko: "환승 할인이 되나요?",
    en: "Is there a ___ discount?",
    accept: ["transfer"],
    hint: "갈아탄다는 뜻의 명사",
    note: "미국에서는 갈아탈 때 주는 표를 transfer라고 부르기도 합니다."
  },
  {
    id: "travel-out-175",
    category: "travel-out",
    ko: "내리기 전에 벨을 눌러주세요.",
    en: "Press the ___ before your stop.",
    accept: ["button", "bell"],
    hint: "손가락으로 누르는 것",
    note: "미국 버스에는 줄을 당기는 것도 있습니다. pull the cord라고 합니다."
  },
  {
    id: "travel-out-176",
    category: "travel-out",
    ko: "내릴 곳을 지나쳤어요.",
    en: "I ___ my stop.",
    accept: ["missed"],
    hint: "놓치다의 과거형",
    note: "다음 정류장에서 내려 되돌아가면 됩니다."
  },
  {
    id: "travel-out-177",
    category: "travel-out",
    ko: "반대 방향으로 가는 것 같아요.",
    en: "I think I'm going the wrong ___.",
    accept: ["way"],
    hint: "방향을 뜻하는 명사",
    note: "the wrong way는 길을 잘못 들었다는 뜻입니다."
  },
  {
    id: "travel-out-178",
    category: "travel-out",
    ko: "지하철 앱이 있나요?",
    en: "Is there an ___ for the subway?",
    accept: ["app"],
    hint: "휴대폰에 까는 프로그램",
    note: "application의 줄임말이지만 지금은 app이 굳어진 말입니다."
  },
  {
    id: "travel-out-179",
    category: "travel-out",
    ko: "택시 승강장이 어디예요?",
    en: "Where's the taxi ___?",
    accept: ["stand", "rank"],
    hint: "택시가 줄지어 서 있는 곳",
    note: "미국은 taxi stand, 영국은 taxi rank라고 합니다."
  },
  {
    id: "travel-out-180",
    category: "travel-out",
    ko: "미터기 좀 켜주세요.",
    en: "Could you turn on the ___?",
    accept: ["meter"],
    hint: "요금을 재는 기계",
    note: "미터기를 안 켜면 부르는 게 값이 되므로 반드시 확인합니다."
  },
  {
    id: "travel-out-181",
    category: "travel-out",
    ko: "트렁크 좀 열어주시겠어요?",
    en: "Could you open the ___?",
    accept: ["trunk", "boot"],
    hint: "차 뒤쪽의 짐 싣는 곳",
    note: "미국은 trunk, 영국은 boot입니다."
  },
  {
    id: "travel-out-182",
    category: "travel-out",
    ko: "여기서 유턴할 수 있나요?",
    en: "Can you make a ___ here?",
    accept: ["U-turn", "uturn"],
    hint: "차를 반대 방향으로 돌리는 것",
    note: "알파벳 U 모양으로 돈다는 뜻입니다."
  },
  {
    id: "travel-out-183",
    category: "travel-out",
    ko: "길이 많이 막히나요?",
    en: "Is the traffic ___?",
    accept: ["bad", "heavy"],
    hint: "상태가 안 좋다는 뜻의 형용사",
    note: "traffic is heavy는 차가 많다, traffic is bad는 그래서 오래 걸린다는 쪽에 가깝습니다."
  },
  {
    id: "travel-out-184",
    category: "travel-out",
    ko: "다른 길로 가주시겠어요?",
    en: "Could you take a different ___?",
    accept: ["route"],
    hint: "가는 길을 뜻하는 명사",
    note: "road는 길 자체, route는 그 길을 이어 만든 경로입니다."
  },
  {
    id: "travel-out-185",
    category: "travel-out",
    ko: "여기서 얼마나 더 가야 해요?",
    en: "How much ___ is it?",
    accept: ["further", "farther"],
    hint: "거리가 더 멀다는 뜻의 비교급",
    note: "거리에는 farther, 정도에는 further를 쓴다고 하지만 실제로는 섞어 씁니다."
  },
  {
    id: "travel-out-186",
    category: "travel-out",
    ko: "신호가 초록불로 바뀌었어요.",
    en: "The ___ turned green.",
    accept: ["light"],
    hint: "길에 서서 색이 바뀌는 것",
    note: "traffic light를 줄여 light라고만 해도 통합니다."
  },
  {
    id: "travel-out-187",
    category: "travel-out",
    ko: "가장 가까운 횡단보도가 어디예요?",
    en: "Where's the nearest ___?",
    accept: ["crosswalk", "crossing"],
    hint: "길을 건너도록 줄을 그어 놓은 곳",
    note: "미국은 crosswalk, 영국은 zebra crossing이라고 합니다."
  },
  {
    id: "travel-out-188",
    category: "travel-out",
    ko: "이 근처에 주차장 있나요?",
    en: "Is there a ___ lot nearby?",
    accept: ["parking"],
    hint: "차를 세워두는 일을 뜻하는 말",
    note: "미국은 parking lot, 영국은 car park입니다."
  },
  {
    id: "travel-out-189",
    category: "travel-out",
    ko: "주차 요금이 어떻게 되나요?",
    en: "What's the parking ___?",
    accept: ["rate"],
    hint: "정해진 값이나 비율을 뜻하는 명사",
    note: "시간당 요금은 hourly rate입니다."
  },
  {
    id: "travel-out-190",
    category: "travel-out",
    ko: "자전거 빌릴 수 있나요?",
    en: "Can I ___ a bike?",
    accept: ["rent"],
    hint: "돈을 내고 잠시 쓴다는 뜻의 동사",
    note: "borrow는 공짜로 빌리는 것, rent는 돈을 내고 빌리는 것입니다."
  },
  {
    id: "travel-out-191",
    category: "travel-out",
    ko: "가장 가까운 버스 정류장이 어디예요?",
    en: "Where's the nearest bus ___?",
    accept: ["stop"],
    hint: "버스가 서는 곳",
    note: "기차역은 station, 버스는 stop을 씁니다."
  },
  {
    id: "travel-out-192",
    category: "travel-out",
    ko: "안전벨트를 매야 하나요?",
    en: "Do I need to wear a ___?",
    accept: ["seatbelt", "seat belt"],
    hint: "차에서 몸을 잡아주는 띠",
    note: "뒷자리도 매야 하는 나라가 많습니다."
  },
  {
    id: "travel-out-193",
    category: "travel-out",
    ko: "택시비는 현금으로 내도 되나요?",
    en: "Can I pay the fare in ___?",
    accept: ["cash"],
    hint: "지폐와 동전을 뜻하는 명사",
    note: "요즘은 카드만 받는 택시도 많습니다. cashless라고 합니다."
  },
  {
    id: "travel-out-194",
    category: "travel-out",
    ko: "길 좀 여쭤봐도 될까요?",
    en: "Could I ask you for ___?",
    accept: ["directions"],
    hint: "길 안내를 뜻하는 명사. 이 뜻일 때는 복수입니다",
    note: "단수 direction은 '방향'이라는 다른 뜻이 됩니다."
  },
  {
    id: "travel-out-195",
    category: "travel-out",
    ko: "여기가 어느 동네예요?",
    en: "What ___ are we in?",
    accept: ["area", "neighborhood"],
    hint: "동네나 구역을 뜻하는 명사",
    note: "지도를 보여주며 물으면 훨씬 빨리 통합니다."
  },
  {
    id: "travel-out-196",
    category: "travel-out",
    ko: "이 건물 이름이 뭐예요?",
    en: "What's this ___ called?",
    accept: ["building"],
    hint: "사람이 지은 큰 구조물",
    note: "길을 설명할 때 건물 이름이 가장 확실한 표시가 됩니다."
  },
  {
    id: "travel-out-197",
    category: "travel-out",
    ko: "저기 보이는 게 뭐예요?",
    en: "What's that over ___?",
    accept: ["there"],
    hint: "저쪽을 가리키는 말",
    note: "over there는 '저기 저쪽'이라는 뜻입니다."
  },
  {
    id: "travel-out-198",
    category: "travel-out",
    ko: "두 번째 신호에서 우회전하세요.",
    en: "Turn right at the ___ light.",
    accept: ["second"],
    hint: "차례가 두 번째라는 뜻의 말",
    note: "첫 번째는 first, 세 번째는 third입니다."
  },
  {
    id: "travel-out-199",
    category: "travel-out",
    ko: "직진하시면 왼쪽에 있어요.",
    en: "It's on the ___ after you go straight.",
    accept: ["left"],
    hint: "오른쪽의 반대",
    note: "on the left는 '왼쪽에'입니다. to the left는 '왼쪽으로'입니다."
  },
  {
    id: "travel-out-200",
    category: "travel-out",
    ko: "덕분에 잘 찾았어요.",
    en: "I ___ it, thanks.",
    accept: ["found"],
    hint: "찾다의 과거형",
    note: "길을 알려준 사람에게 건네는 짧은 인사입니다."
  },
  {
    id: "daily-greeting-101",
    category: "daily-greeting",
    ko: "이제 퇴근하세요?",
    en: "Are you ___ for the day?",
    accept: ["done", "finished"],
    hint: "일을 마쳤다는 뜻의 형용사",
    note: "done for the day는 오늘 일이 끝났다는 뜻입니다."
  },
  {
    id: "daily-greeting-102",
    category: "daily-greeting",
    ko: "오늘 일찍 나오셨네요.",
    en: "You're up ___ today.",
    accept: ["early"],
    hint: "이르다는 뜻의 말",
    note: "You're up early는 아침에 마주쳤을 때 건네는 가벼운 인사입니다."
  },
  {
    id: "daily-greeting-103",
    category: "daily-greeting",
    ko: "오늘 좋아 보이시네요.",
    en: "You look ___ today.",
    accept: ["well"],
    hint: "건강하고 괜찮아 보인다는 뜻의 말",
    note: "look good은 옷차림이나 외모, look well은 건강 상태를 말합니다."
  },
  {
    id: "daily-greeting-104",
    category: "daily-greeting",
    ko: "머리 자르셨네요.",
    en: "You got a ___.",
    accept: ["haircut"],
    hint: "머리를 자르는 일",
    note: "You got a haircut은 알아봐 주는 인사로 자주 씁니다."
  },
  {
    id: "daily-greeting-105",
    category: "daily-greeting",
    ko: "얼굴 좋아지셨어요.",
    en: "You look better than ___ time.",
    accept: ["last"],
    hint: "바로 앞의 것을 뜻하는 말",
    note: "아팠던 사람에게 건네는 인사로 자연스럽습니다."
  },
  {
    id: "daily-greeting-106",
    category: "daily-greeting",
    ko: "요즘 통 안 보이시네요.",
    en: "I haven't ___ you around lately.",
    accept: ["seen"],
    hint: "보다의 과거분사",
    note: "seen you around는 근처에서 마주치지 못했다는 뜻입니다."
  },
  {
    id: "daily-greeting-107",
    category: "daily-greeting",
    ko: "여기 처음 오셨어요?",
    en: "Is this your ___ time here?",
    accept: ["first"],
    hint: "맨 처음이라는 뜻의 말",
    note: "Do you come here often?은 작업 멘트로 굳어진 표현이라 피하는 것이 좋습니다."
  },
  {
    id: "daily-greeting-108",
    category: "daily-greeting",
    ko: "이 동네 분이세요?",
    en: "Are you from ___ here?",
    accept: ["around"],
    hint: "근처를 뜻하는 말",
    note: "from around here는 이 동네 사람이냐고 묻는 부드러운 말입니다."
  },
  {
    id: "daily-greeting-109",
    category: "daily-greeting",
    ko: "어느 회사 다니세요?",
    en: "What ___ do you work for?",
    accept: ["company"],
    hint: "사람들이 모여 일하는 조직",
    note: "work for는 그 회사에 소속되어 일한다는 뜻입니다."
  },
  {
    id: "daily-greeting-110",
    category: "daily-greeting",
    ko: "그 일 하신 지 얼마나 되셨어요?",
    en: "How ___ have you been doing that?",
    accept: ["long"],
    hint: "기간을 묻는 형용사",
    note: "How long have you been -ing는 지금까지 이어온 일을 물을 때 씁니다."
  },
  {
    id: "daily-greeting-111",
    category: "daily-greeting",
    ko: "일은 재미있으세요?",
    en: "Do you ___ your job?",
    accept: ["enjoy", "like"],
    hint: "즐긴다는 뜻의 동사",
    note: "Do you like your job?이 더 편한 말투입니다."
  },
  {
    id: "daily-greeting-112",
    category: "daily-greeting",
    ko: "출근길이 머신가요?",
    en: "Is it a long ___ for you?",
    accept: ["drive", "trip"],
    hint: "차로 가는 거리를 뜻하는 명사",
    note: "대중교통이면 commute를 씁니다."
  },
  {
    id: "daily-greeting-113",
    category: "daily-greeting",
    ko: "점심 드셨어요?",
    en: "Have you ___ lunch yet?",
    accept: ["had", "eaten"],
    hint: "먹다의 과거분사",
    note: "한국에서만큼 자주 묻지는 않습니다. 정말 궁금할 때 씁니다."
  },
  {
    id: "daily-greeting-114",
    category: "daily-greeting",
    ko: "커피 한잔하실래요?",
    en: "Do you want to ___ a coffee?",
    accept: ["grab"],
    hint: "잡아채듯 간단히 한다는 뜻의 동사",
    note: "grab a coffee는 가볍게 커피 한잔한다는 뜻입니다."
  },
  {
    id: "daily-greeting-115",
    category: "daily-greeting",
    ko: "제가 살게요.",
    en: "It's on ___.",
    accept: ["me"],
    hint: "'나'에 해당하는 목적어 자리의 말",
    note: "It's on me는 '내가 낸다'는 뜻입니다."
  },
  {
    id: "daily-greeting-116",
    category: "daily-greeting",
    ko: "다음엔 제가 살게요.",
    en: "I'll get it ___ time.",
    accept: ["next"],
    hint: "이번 다음이라는 뜻의 말",
    note: "I'll get the next one이라고도 합니다."
  },
  {
    id: "daily-greeting-117",
    category: "daily-greeting",
    ko: "요즘 일이 많으신가 봐요.",
    en: "You must be ___ these days.",
    accept: ["swamped"],
    hint: "일에 파묻혀 있다는 뜻의 말",
    note: "swamped는 늪에 빠졌다는 말에서 왔습니다. 일이 밀려 정신없다는 뜻입니다."
  },
  {
    id: "daily-greeting-118",
    category: "daily-greeting",
    ko: "너무 자신을 몰아붙이지 마세요.",
    en: "Don't ___ yourself too hard.",
    accept: ["push"],
    hint: "밀어붙인다는 뜻의 동사",
    note: "push yourself too hard는 자신을 몰아붙인다는 뜻입니다."
  },
  {
    id: "daily-greeting-119",
    category: "daily-greeting",
    ko: "좀 쉬셔야겠어요.",
    en: "You could use a ___.",
    accept: ["break"],
    hint: "잠깐 쉬는 시간",
    note: "You could use는 '~이 필요해 보인다'는 부드러운 권유입니다."
  },
  {
    id: "daily-greeting-120",
    category: "daily-greeting",
    ko: "휴가는 다녀오셨어요?",
    en: "Did you take any time ___?",
    accept: ["off"],
    hint: "일에서 벗어나 있다는 뜻을 만드는 말",
    note: "time off는 일을 쉬는 기간을 통틀어 가리킵니다."
  },
  {
    id: "daily-greeting-121",
    category: "daily-greeting",
    ko: "어디 좋은 데 다녀오셨어요?",
    en: "Did you go ___ nice?",
    accept: ["somewhere", "anywhere"],
    hint: "'어딘가'를 뜻하는 말",
    note: "형용사가 뒤에 붙는 것이 특징입니다. somewhere nice처럼 씁니다."
  },
  {
    id: "daily-greeting-122",
    category: "daily-greeting",
    ko: "사진 좀 보여주세요.",
    en: "I'd ___ to see the photos.",
    accept: ["love"],
    hint: "아주 좋아한다는 뜻의 동사. would와 붙어 부드러운 바람이 됩니다",
    note: "I'd love to는 I want to보다 부드럽고 반가운 느낌입니다."
  },
  {
    id: "daily-greeting-123",
    category: "daily-greeting",
    ko: "부럽네요.",
    en: "I'm so ___.",
    accept: ["jealous"],
    hint: "남의 것을 부러워한다는 뜻의 형용사",
    note: "여기서는 시샘이 아니라 가볍게 부러워하는 인사말입니다."
  },
  {
    id: "daily-greeting-124",
    category: "daily-greeting",
    ko: "저도 언젠가 가보고 싶어요.",
    en: "I'd like to go there ___.",
    accept: ["someday", "sometime"],
    hint: "언젠가를 뜻하는 말",
    note: "someday는 먼 미래, sometime은 시기를 정하지 않은 때입니다."
  },
  {
    id: "daily-greeting-125",
    category: "daily-greeting",
    ko: "오늘 무슨 날이에요?",
    en: "What's the ___?",
    accept: ["occasion"],
    hint: "특별한 일이 있는 때를 뜻하는 명사",
    note: "평소와 다르게 차려입은 사람에게 건네는 인사입니다."
  },
  {
    id: "daily-greeting-126",
    category: "daily-greeting",
    ko: "옷이 잘 어울리세요.",
    en: "That ___ you.",
    accept: ["suits"],
    hint: "잘 맞는다는 뜻의 동사",
    note: "That suits you는 옷이나 머리 모양이 어울린다는 뜻입니다."
  },
  {
    id: "daily-greeting-127",
    category: "daily-greeting",
    ko: "새 신발 사셨네요.",
    en: "Are those ___?",
    accept: ["new"],
    hint: "낡지 않았다는 뜻의 형용사",
    note: "알아봐 주는 것 자체가 좋은 인사가 됩니다."
  },
  {
    id: "daily-greeting-128",
    category: "daily-greeting",
    ko: "칭찬 감사합니다.",
    en: "Thanks for the ___.",
    accept: ["compliment"],
    hint: "좋게 말해주는 것을 뜻하는 명사",
    note: "칭찬을 들었을 때 이렇게 받으면 무난합니다."
  },
  {
    id: "daily-greeting-129",
    category: "daily-greeting",
    ko: "과찬이세요.",
    en: "You're too ___.",
    accept: ["kind"],
    hint: "마음이 곱다는 뜻의 형용사",
    note: "칭찬을 겸손하게 받아넘기는 말입니다."
  },
  {
    id: "daily-greeting-130",
    category: "daily-greeting",
    ko: "그렇게 말씀해 주시니 기분 좋네요.",
    en: "That's ___ of you to say.",
    accept: ["nice", "sweet"],
    hint: "친절하다는 뜻의 형용사",
    note: "sweet은 조금 더 다정한 느낌입니다."
  },
  {
    id: "daily-greeting-131",
    category: "daily-greeting",
    ko: "덕분에 힘이 나네요.",
    en: "That really ___ my day.",
    accept: ["made"],
    hint: "만들다의 과거형",
    note: "made my day는 그 말 덕분에 하루가 좋아졌다는 뜻입니다."
  },
  {
    id: "daily-greeting-132",
    category: "daily-greeting",
    ko: "요즘 어떻게 지내시나 궁금했어요.",
    en: "I've been ___ how you were doing.",
    accept: ["wondering"],
    hint: "궁금해한다는 뜻의 동사",
    note: "I've been wondering은 한동안 마음에 두고 있었다는 느낌을 줍니다."
  },
  {
    id: "daily-greeting-133",
    category: "daily-greeting",
    ko: "연락 못 드려서 죄송해요.",
    en: "Sorry I've been ___ of touch.",
    accept: ["out"],
    hint: "밖을 뜻하는 말. of touch와 붙어 연락이 끊겼다는 뜻이 됩니다",
    note: "out of touch는 한동안 연락을 못 했다는 뜻입니다."
  },
  {
    id: "daily-greeting-134",
    category: "daily-greeting",
    ko: "제가 먼저 연락드렸어야 했는데요.",
    en: "I should have ___ sooner.",
    accept: ["called", "reached out"],
    hint: "연락한다는 뜻의 동사, 과거분사",
    note: "reach out은 먼저 다가가 연락한다는 뜻입니다."
  },
  {
    id: "daily-greeting-135",
    category: "daily-greeting",
    ko: "언제 한번 뵈어요.",
    en: "Let's ___ up sometime.",
    accept: ["catch"],
    hint: "잡다를 뜻하는 동사. up과 붙어 밀린 이야기를 나눈다는 뜻이 됩니다",
    note: "catch up은 오랜만에 만나 근황을 나눈다는 뜻입니다."
  },
  {
    id: "daily-greeting-136",
    category: "daily-greeting",
    ko: "날짜 정해서 알려주세요.",
    en: "Let me know what ___ works.",
    accept: ["day", "date"],
    hint: "달력에서 하루를 가리키는 말",
    note: "What day works for you?라고 물으면 됩니다."
  },
  {
    id: "daily-greeting-137",
    category: "daily-greeting",
    ko: "이번 주는 좀 어려울 것 같아요.",
    en: "This week is a bit ___.",
    accept: ["tight", "packed"],
    hint: "빈틈이 없다는 뜻의 형용사",
    note: "일정이 빡빡하다는 뜻입니다."
  },
  {
    id: "daily-greeting-138",
    category: "daily-greeting",
    ko: "다음 주는 어떠세요?",
    en: "How ___ next week?",
    accept: ["about"],
    hint: "'~은 어때'라고 제안할 때 쓰는 말",
    note: "How about과 What about은 거의 같이 씁니다."
  },
  {
    id: "daily-greeting-139",
    category: "daily-greeting",
    ko: "일정 확인하고 알려드릴게요.",
    en: "I'll check my ___ and let you know.",
    accept: ["schedule", "calendar"],
    hint: "예정된 일을 적어둔 것",
    note: "미국에서는 calendar를 더 자주 씁니다."
  },
  {
    id: "daily-greeting-140",
    category: "daily-greeting",
    ko: "그때 뵙겠습니다.",
    en: "I'll see you ___.",
    accept: ["then"],
    hint: "그때를 뜻하는 말",
    note: "약속을 잡고 헤어질 때 쓰는 짧은 마무리입니다."
  },
  {
    id: "daily-greeting-141",
    category: "daily-greeting",
    ko: "먼저 들어가 볼게요.",
    en: "I'm going to ___ out.",
    accept: ["head"],
    hint: "머리를 뜻하는 낱말이 동사로 쓰이면 향해 간다는 뜻이 됩니다",
    note: "head out은 자리를 뜬다는 뜻입니다."
  },
  {
    id: "daily-greeting-142",
    category: "daily-greeting",
    ko: "이제 슬슬 가봐야겠어요.",
    en: "I should ___ going.",
    accept: ["get"],
    hint: "되다·시작하다를 뜻하는 기본 동사",
    note: "I should get going은 자리를 뜨기 전에 던지는 신호입니다."
  },
  {
    id: "daily-greeting-143",
    category: "daily-greeting",
    ko: "붙잡아서 죄송해요.",
    en: "Sorry to ___ you up.",
    accept: ["hold", "keep"],
    hint: "붙잡아 둔다는 뜻의 동사",
    note: "hold someone up은 남의 시간을 붙든다는 뜻입니다."
  },
  {
    id: "daily-greeting-144",
    category: "daily-greeting",
    ko: "아니에요, 저도 즐거웠어요.",
    en: "Not at ___, I enjoyed it.",
    accept: ["all"],
    hint: "'전혀'를 뜻하는 말",
    note: "Not at all은 상대의 미안함을 덜어주는 대답입니다."
  },
  {
    id: "daily-greeting-145",
    category: "daily-greeting",
    ko: "조심해서 가세요.",
    en: "___ safe out there.",
    accept: ["stay"],
    hint: "머무르다·유지하다를 뜻하는 동사",
    note: "Stay safe는 요즘 헤어질 때 가장 흔히 쓰는 인사 중 하나입니다."
  },
  {
    id: "daily-greeting-146",
    category: "daily-greeting",
    ko: "도착하면 연락 주세요.",
    en: "___ me when you get home.",
    accept: ["Text"],
    hint: "문자를 보낸다는 뜻의 동사",
    note: "명사 '문자'가 그대로 동사로 쓰입니다. get home은 집에 도착한다는 뜻입니다."
  },
  {
    id: "daily-greeting-147",
    category: "daily-greeting",
    ko: "좋은 주말 보내세요.",
    en: "Have a ___ weekend!",
    accept: ["great"],
    hint: "아주 좋다는 뜻의 형용사",
    note: "금요일에 헤어질 때 거의 반드시 하는 인사입니다."
  },
  {
    id: "daily-greeting-148",
    category: "daily-greeting",
    ko: "월요일에 봬요.",
    en: "See you on ___.",
    accept: ["Monday"],
    hint: "한 주가 시작되는 요일",
    note: "요일 앞에는 on을 씁니다."
  },
  {
    id: "daily-greeting-149",
    category: "daily-greeting",
    ko: "즐거운 저녁 되세요.",
    en: "Enjoy your ___.",
    accept: ["evening"],
    hint: "해가 진 뒤부터 잠들기 전까지",
    note: "가게를 나설 때 점원이 자주 건네는 말입니다."
  },
  {
    id: "daily-greeting-150",
    category: "daily-greeting",
    ko: "푹 주무세요.",
    en: "Sleep ___.",
    accept: ["well", "tight"],
    hint: "잘·꼭을 뜻하는 부사",
    note: "Sleep tight는 아이에게나 아주 가까운 사이에 씁니다."
  },
  {
    id: "daily-greeting-151",
    category: "daily-greeting",
    ko: "오늘 하루 어떠셨어요?",
    en: "How did your ___ go?",
    accept: ["day"],
    hint: "아침부터 밤까지의 하루",
    note: "How was your day?는 저녁에 만났을 때 가장 흔한 인사입니다."
  },
  {
    id: "daily-greeting-152",
    category: "daily-greeting",
    ko: "정신없는 하루였어요.",
    en: "It was a ___ day.",
    accept: ["crazy", "hectic"],
    hint: "정신없이 바쁘다는 뜻의 형용사",
    note: "crazy가 훨씬 편한 말투입니다."
  },
  {
    id: "daily-greeting-153",
    category: "daily-greeting",
    ko: "이제 좀 살 것 같아요.",
    en: "I can finally ___.",
    accept: ["relax", "breathe"],
    hint: "긴장을 푼다는 뜻의 동사",
    note: "finally breathe는 한숨 돌린다는 느낌을 살립니다."
  },
  {
    id: "daily-greeting-154",
    category: "daily-greeting",
    ko: "주말에 뭐 하셨어요?",
    en: "What did you get up ___ this weekend?",
    accept: ["to"],
    hint: "get up과 짝을 이뤄 '무엇을 하며 지냈나'가 되는 말",
    note: "get up to는 영국에서 특히 자주 씁니다."
  },
  {
    id: "daily-greeting-155",
    category: "daily-greeting",
    ko: "집에서 푹 쉬었어요.",
    en: "I just ___ at home.",
    accept: ["stayed"],
    hint: "머물다의 과거형",
    note: "stayed in이라고도 합니다. 나가지 않고 집에 있었다는 뜻입니다."
  },
  {
    id: "daily-greeting-156",
    category: "daily-greeting",
    ko: "밀린 잠 좀 잤어요.",
    en: "I ___ up on sleep.",
    accept: ["caught"],
    hint: "잡다의 과거형. up과 붙어 밀린 것을 따라잡는다는 뜻이 됩니다",
    note: "catch up on은 밀린 일이나 잠을 메운다는 뜻입니다."
  },
  {
    id: "daily-greeting-157",
    category: "daily-greeting",
    ko: "친구들 만났어요.",
    en: "I ___ out with some friends.",
    accept: ["hung"],
    hint: "걸다의 과거형. out과 붙어 어울려 논다는 뜻이 됩니다",
    note: "hang out은 특별한 목적 없이 함께 시간을 보낸다는 뜻입니다."
  },
  {
    id: "daily-greeting-158",
    category: "daily-greeting",
    ko: "영화 한 편 봤어요.",
    en: "I ___ a movie.",
    accept: ["watched", "saw"],
    hint: "보다의 과거형",
    note: "극장에서 봤으면 saw, 집에서 봤으면 watched가 자연스럽습니다."
  },
  {
    id: "daily-greeting-159",
    category: "daily-greeting",
    ko: "그 영화 어땠어요?",
    en: "How was ___?",
    accept: ["it"],
    hint: "앞에 나온 것을 가리키는 말",
    note: "How was it?은 무엇에 대해서든 감상을 묻는 만능 질문입니다."
  },
  {
    id: "daily-greeting-160",
    category: "daily-greeting",
    ko: "볼만했어요.",
    en: "It was ___ watching.",
    accept: ["worth"],
    hint: "그만한 값어치가 있다는 뜻의 말",
    note: "worth 뒤에는 -ing가 옵니다."
  },
  {
    id: "daily-greeting-161",
    category: "daily-greeting",
    ko: "요즘 뭐 재미있는 거 보세요?",
    en: "What are you ___ these days?",
    accept: ["watching"],
    hint: "보다의 -ing형",
    note: "드라마나 유튜브를 물을 때 쓰는 요즘 인사입니다."
  },
  {
    id: "daily-greeting-162",
    category: "daily-greeting",
    ko: "추천 좀 해주세요.",
    en: "Any ___?",
    accept: ["recommendations"],
    hint: "권해줄 만한 것을 뜻하는 복수 명사",
    note: "Any recommendations?는 짧지만 아주 자주 쓰는 표현입니다."
  },
  {
    id: "daily-greeting-163",
    category: "daily-greeting",
    ko: "저도 그거 봤어요.",
    en: "I've seen that ___.",
    accept: ["one"],
    hint: "앞에 나온 것 중 하나를 가리키는 말",
    note: "I've seen it은 이미 봤다는 뜻입니다."
  },
  {
    id: "daily-greeting-164",
    category: "daily-greeting",
    ko: "아직 못 봤어요.",
    en: "I haven't ___ around to it.",
    accept: ["gotten", "got"],
    hint: "얻다의 과거분사. around to와 붙어 '드디어 하게 되다'가 됩니다",
    note: "haven't gotten around to it은 하려다 못 했다는 뜻입니다."
  },
  {
    id: "daily-greeting-165",
    category: "daily-greeting",
    ko: "요즘 뭐 배우세요?",
    en: "Are you ___ anything new?",
    accept: ["learning"],
    hint: "배우다의 -ing형",
    note: "취미를 묻는 부드러운 질문입니다."
  },
  {
    id: "daily-greeting-166",
    category: "daily-greeting",
    ko: "운동은 좀 하세요?",
    en: "Do you go to the ___?",
    accept: ["gym"],
    hint: "운동하는 곳",
    note: "헬스장은 gym입니다. health club이라는 말은 잘 쓰지 않습니다."
  },
  {
    id: "daily-greeting-167",
    category: "daily-greeting",
    ko: "요즘 통 못 갔어요.",
    en: "I haven't been in a ___.",
    accept: ["while"],
    hint: "얼마간의 시간을 뜻하는 명사",
    note: "in a while은 '한동안'입니다."
  },
  {
    id: "daily-greeting-168",
    category: "daily-greeting",
    ko: "다시 시작해 보려고요.",
    en: "I'm trying to ___ it up again.",
    accept: ["pick"],
    hint: "집어 든다는 뜻의 동사. up과 붙어 다시 시작한다는 뜻이 됩니다",
    note: "pick it up again은 그만뒀던 것을 다시 붙잡는다는 뜻입니다."
  },
  {
    id: "daily-greeting-169",
    category: "daily-greeting",
    ko: "작심삼일이었어요.",
    en: "It only ___ three days.",
    accept: ["lasted"],
    hint: "이어지다의 과거형",
    note: "last는 명사로는 '마지막', 동사로는 '이어지다'입니다."
  },
  {
    id: "daily-greeting-170",
    category: "daily-greeting",
    ko: "이번엔 꼭 해볼게요.",
    en: "I'll ___ with it this time.",
    accept: ["stick"],
    hint: "붙다를 뜻하는 동사. with와 붙어 끝까지 해낸다는 뜻이 됩니다",
    note: "stick with it은 포기하지 않고 이어간다는 뜻입니다."
  },
  {
    id: "daily-greeting-171",
    category: "daily-greeting",
    ko: "잘하실 거예요.",
    en: "You'll do ___.",
    accept: ["fine", "great"],
    hint: "괜찮다는 뜻의 말",
    note: "You'll do fine은 앞둔 일을 앞두고 건네는 격려입니다."
  },
  {
    id: "daily-greeting-172",
    category: "daily-greeting",
    ko: "행운을 빌게요.",
    en: "I'll keep my fingers ___.",
    accept: ["crossed"],
    hint: "엇갈리게 겹치다의 과거분사",
    note: "손가락을 겹쳐 행운을 빈다는 몸짓에서 온 말입니다."
  },
  {
    id: "daily-greeting-173",
    category: "daily-greeting",
    ko: "잘됐으면 좋겠네요.",
    en: "I hope it ___ out.",
    accept: ["works"],
    hint: "일이 잘 풀린다는 뜻의 동사",
    note: "work out은 결과가 좋게 나온다는 뜻입니다."
  },
  {
    id: "daily-greeting-174",
    category: "daily-greeting",
    ko: "결과 나오면 알려주세요.",
    en: "Let me know how it ___.",
    accept: ["goes"],
    hint: "가다·되어가다를 뜻하는 동사",
    note: "how it goes는 '어떻게 됐는지'라는 뜻입니다."
  },
  {
    id: "daily-greeting-175",
    category: "daily-greeting",
    ko: "응원할게요.",
    en: "I'm ___ for you.",
    accept: ["rooting", "pulling"],
    hint: "편을 들어 응원한다는 뜻의 동사",
    note: "rooting for는 경기 응원에서 온 말이지만 일상에서도 씁니다."
  },
  {
    id: "daily-greeting-176",
    category: "daily-greeting",
    ko: "고맙습니다, 정말요.",
    en: "Thanks, I ___ it.",
    accept: ["mean"],
    hint: "진심으로 말한다는 뜻의 동사",
    note: "I mean it은 빈말이 아니라는 뜻입니다."
  },
  {
    id: "daily-greeting-177",
    category: "daily-greeting",
    ko: "언제든지요.",
    en: "___ time.",
    accept: ["any"],
    hint: "어느 것이든이라는 뜻의 말",
    note: "Anytime은 고맙다는 말에 대한 가벼운 대답입니다."
  },
  {
    id: "daily-greeting-178",
    category: "daily-greeting",
    ko: "별거 아니에요.",
    en: "It was ___ problem.",
    accept: ["no"],
    hint: "'하나도 없다'를 뜻하는 말",
    note: "No problem은 You're welcome보다 편한 대답입니다."
  },
  {
    id: "daily-greeting-179",
    category: "daily-greeting",
    ko: "서로 돕고 사는 거죠.",
    en: "That's what ___ are for.",
    accept: ["friends"],
    hint: "가깝게 지내는 사람들",
    note: "That's what friends are for는 도움을 받은 사람에게 건네는 정해진 대답입니다."
  },
  {
    id: "daily-greeting-180",
    category: "daily-greeting",
    ko: "다음에 또 봬요.",
    en: "___ next time.",
    accept: ["Until"],
    hint: "'~까지'를 뜻하는 전치사",
    note: "조금 격식 있는 작별 인사입니다."
  },
  {
    id: "daily-greeting-181",
    category: "daily-greeting",
    ko: "오늘 날씨 정말 좋네요.",
    en: "It's a ___ day, isn't it?",
    accept: ["gorgeous", "glorious"],
    hint: "눈부시게 좋다는 뜻의 형용사",
    note: "날씨 이야기는 영어권에서 가장 무난한 대화 시작입니다."
  },
  {
    id: "daily-greeting-182",
    category: "daily-greeting",
    ko: "밖에 바람이 많이 부네요.",
    en: "It's really ___ out.",
    accept: ["windy"],
    hint: "바람이 세다는 뜻의 형용사",
    note: "wind에 -y를 붙여 만든 날씨 형용사입니다."
  },
  {
    id: "daily-greeting-183",
    category: "daily-greeting",
    ko: "습도가 높네요.",
    en: "It's so ___ today.",
    accept: ["humid"],
    hint: "공기 중에 물기가 많다는 뜻의 형용사",
    note: "muggy라고 하면 후덥지근하다는 느낌이 더 강합니다."
  },
  {
    id: "daily-greeting-184",
    category: "daily-greeting",
    ko: "눈이 올 것 같아요.",
    en: "It might ___ tonight.",
    accept: ["snow"],
    hint: "하늘에서 내리는 하얀 것",
    note: "명사와 동사가 같은 꼴입니다."
  },
  {
    id: "daily-greeting-185",
    category: "daily-greeting",
    ko: "길이 미끄러워요.",
    en: "The roads are ___.",
    accept: ["slippery", "icy"],
    hint: "미끄럽다는 뜻의 형용사",
    note: "icy는 얼어붙어 미끄럽다는 뜻입니다."
  },
  {
    id: "daily-greeting-186",
    category: "daily-greeting",
    ko: "장마철이네요.",
    en: "It's the ___ season.",
    accept: ["rainy"],
    hint: "비가 자주 온다는 뜻의 형용사",
    note: "동남아시아에서는 monsoon season이라고도 합니다."
  },
  {
    id: "daily-greeting-187",
    category: "daily-greeting",
    ko: "여름이 다 갔네요.",
    en: "Summer's ___ over.",
    accept: ["almost"],
    hint: "거의라는 뜻의 말",
    note: "almost over는 '거의 끝났다'는 뜻입니다."
  },
  {
    id: "daily-greeting-188",
    category: "daily-greeting",
    ko: "해가 많이 짧아졌어요.",
    en: "The days are getting ___.",
    accept: ["shorter"],
    hint: "짧다의 비교급",
    note: "getting -er은 점점 그렇게 되어간다는 뜻입니다."
  },
  {
    id: "daily-greeting-189",
    category: "daily-greeting",
    ko: "환절기라 조심하세요.",
    en: "Watch out for the ___ in weather.",
    accept: ["change"],
    hint: "달라짐을 뜻하는 명사",
    note: "change in weather는 날씨가 바뀌는 시기를 말합니다."
  },
  {
    id: "daily-greeting-190",
    category: "daily-greeting",
    ko: "감기가 유행이래요.",
    en: "There's a ___ going around.",
    accept: ["cold"],
    hint: "기침과 콧물이 나는 가벼운 병",
    note: "going around는 병이 돌고 있다는 뜻입니다."
  },
  {
    id: "daily-greeting-191",
    category: "daily-greeting",
    ko: "저도 목이 좀 칼칼해요.",
    en: "My throat feels a bit ___.",
    accept: ["scratchy", "sore"],
    hint: "따끔거린다는 뜻의 형용사",
    note: "sore throat는 인후통, scratchy는 그보다 가벼운 느낌입니다."
  },
  {
    id: "daily-greeting-192",
    category: "daily-greeting",
    ko: "병원 가보셔야겠어요.",
    en: "You should see a ___.",
    accept: ["doctor"],
    hint: "병을 봐주는 사람",
    note: "영어에서는 go to the hospital보다 see a doctor를 씁니다. hospital은 큰 병원입니다."
  },
  {
    id: "daily-greeting-193",
    category: "daily-greeting",
    ko: "약은 드셨어요?",
    en: "Did you take any ___?",
    accept: ["medicine"],
    hint: "병을 낫게 하려고 먹는 것",
    note: "약을 먹는 것은 eat이 아니라 take입니다."
  },
  {
    id: "daily-greeting-194",
    category: "daily-greeting",
    ko: "빨리 나으세요.",
    en: "Feel better ___.",
    accept: ["soon"],
    hint: "머지않아를 뜻하는 말",
    note: "Get well soon과 함께 가장 흔한 쾌유 인사입니다."
  },
  {
    id: "daily-greeting-195",
    category: "daily-greeting",
    ko: "무리하지 말고 쉬세요.",
    en: "Take it easy and get some ___.",
    accept: ["sleep"],
    hint: "잠을 뜻하는 명사",
    note: "get some sleep은 잠을 좀 자두라는 뜻입니다."
  },
  {
    id: "daily-greeting-196",
    category: "daily-greeting",
    ko: "도움 필요하면 말씀하세요.",
    en: "___ me know if you need anything.",
    accept: ["let"],
    hint: "하게 해준다는 뜻의 동사",
    note: "Let me know는 부담 없이 건네는 도움의 손길입니다."
  },
  {
    id: "daily-greeting-197",
    category: "daily-greeting",
    ko: "생각해 주셔서 감사해요.",
    en: "Thanks for ___ of me.",
    accept: ["thinking"],
    hint: "생각하다의 -ing형",
    note: "thinking of me는 마음 써줘서 고맙다는 뜻입니다."
  },
  {
    id: "daily-greeting-198",
    category: "daily-greeting",
    ko: "이제 다 나았어요.",
    en: "I'm completely ___ now.",
    accept: ["recovered"],
    hint: "병에서 회복되다의 과거분사",
    note: "recover from은 병이나 힘든 일에서 벗어난다는 뜻입니다."
  },
  {
    id: "daily-greeting-199",
    category: "daily-greeting",
    ko: "다시 뵙게 되어 반가워요.",
    en: "Good to see you ___.",
    accept: ["again"],
    hint: "다시라는 뜻의 말",
    note: "처음 만난 사이에는 Good to meet you를 씁니다."
  },
  {
    id: "daily-greeting-200",
    category: "daily-greeting",
    ko: "오늘 이야기 즐거웠습니다.",
    en: "I enjoyed our ___.",
    accept: ["chat", "conversation"],
    hint: "주고받은 이야기를 뜻하는 명사",
    note: "chat은 가벼운 수다, conversation은 조금 더 격식 있는 말입니다."
  },
  {
    id: "daily-request-101",
    category: "daily-request",
    ko: "잠깐 실례해도 될까요?",
    en: "May I ___ you for a second?",
    accept: ["interrupt"],
    hint: "말이나 일을 중간에 끊는다는 뜻의 동사",
    note: "말을 끊고 끼어들 때 먼저 던지는 말입니다."
  },
  {
    id: "daily-request-102",
    category: "daily-request",
    ko: "염치없지만 부탁 하나 드릴게요.",
    en: "I hate to ___, but could you help me?",
    accept: ["impose"],
    hint: "남에게 부담을 지운다는 뜻의 동사",
    note: "I hate to impose는 폐를 끼쳐 미안하다는 뜻으로 부탁 앞에 붙입니다."
  },
  {
    id: "daily-request-103",
    category: "daily-request",
    ko: "이거 좀 봐주시겠어요?",
    en: "Could you take a quick ___ at this?",
    accept: ["glance"],
    hint: "슬쩍 한 번 본다는 뜻의 명사",
    note: "take a look보다 더 짧게 본다는 느낌입니다."
  },
  {
    id: "daily-request-104",
    category: "daily-request",
    ko: "여기 서명 좀 해주시겠어요?",
    en: "Could you ___ here, please?",
    accept: ["sign"],
    hint: "이름을 적어 확인한다는 뜻의 동사",
    note: "signature는 명사, sign은 동사입니다."
  },
  {
    id: "daily-request-105",
    category: "daily-request",
    ko: "번호 좀 알려주시겠어요?",
    en: "Could I get your ___?",
    accept: ["number"],
    hint: "전화를 걸 때 누르는 것",
    note: "친해진 뒤에 묻는 것이 자연스럽습니다."
  },
  {
    id: "daily-request-106",
    category: "daily-request",
    ko: "사진 한 장만 더 부탁드려요.",
    en: "Could you take ___ more?",
    accept: ["one"],
    hint: "숫자 하나를 뜻하는 말",
    note: "one more는 '하나만 더'입니다."
  },
  {
    id: "daily-request-107",
    category: "daily-request",
    ko: "가로로 찍어주시겠어요?",
    en: "Could you turn it ___?",
    accept: ["sideways", "horizontally"],
    hint: "옆으로 눕혀서라는 뜻의 부사",
    note: "세로는 vertically입니다. 요즘은 landscape와 portrait라는 말도 씁니다."
  },
  {
    id: "daily-request-108",
    category: "daily-request",
    ko: "뒤에 건물이 나오게 찍어주세요.",
    en: "Could you get the building in the ___?",
    accept: ["background", "shot"],
    hint: "사진에서 뒤쪽에 보이는 부분",
    note: "in the shot은 '화면 안에'라는 뜻입니다."
  },
  {
    id: "daily-request-109",
    category: "daily-request",
    ko: "원하시면 제가 찍어드릴게요.",
    en: "I can take it for you, if you ___.",
    accept: ["like"],
    hint: "좋아한다는 뜻의 동사가 if와 붙으면 '원하시면'이 됩니다",
    note: "if you like는 상대의 뜻에 맡기는 부드러운 마무리입니다."
  },
  {
    id: "daily-request-110",
    category: "daily-request",
    ko: "여기서 잠깐 기다려 주시겠어요?",
    en: "Could you ___ here for a moment?",
    accept: ["stay"],
    hint: "그 자리에 머문다는 뜻의 동사",
    note: "wait보다 자리를 지켜달라는 느낌이 강합니다."
  },
  {
    id: "daily-request-111",
    category: "daily-request",
    ko: "따라오시겠어요?",
    en: "Would you ___ me, please?",
    accept: ["follow"],
    hint: "뒤를 따라간다는 뜻의 동사",
    note: "안내할 때 쓰는 정중한 표현입니다."
  },
  {
    id: "daily-request-112",
    category: "daily-request",
    ko: "이쪽으로 오시겠어요?",
    en: "Could you come this ___?",
    accept: ["way"],
    hint: "방향을 뜻하는 명사",
    note: "This way, please는 안내 문구로도 자주 쓰입니다."
  },
  {
    id: "daily-request-113",
    category: "daily-request",
    ko: "제 뒤에 서주시겠어요?",
    en: "Could you stand ___ me?",
    accept: ["behind"],
    hint: "뒤쪽을 뜻하는 전치사",
    note: "앞은 in front of입니다."
  },
  {
    id: "daily-request-114",
    category: "daily-request",
    ko: "한 발짝만 뒤로 가주세요.",
    en: "Could you take a step ___?",
    accept: ["back"],
    hint: "뒤쪽을 뜻하는 말",
    note: "take a step back은 한 걸음 물러선다는 뜻입니다."
  },
  {
    id: "daily-request-115",
    category: "daily-request",
    ko: "가운데로 좀 모여주세요.",
    en: "Could everyone move to the ___?",
    accept: ["middle", "center"],
    hint: "한가운데를 뜻하는 명사",
    note: "영국에서는 centre로 적습니다."
  },
  {
    id: "daily-request-116",
    category: "daily-request",
    ko: "제 짐 좀 봐주실 수 있나요?",
    en: "Could you ___ my bag for a minute?",
    accept: ["watch"],
    hint: "눈을 떼지 않고 본다는 뜻의 동사",
    note: "keep an eye on과 같은 뜻이지만 더 짧습니다."
  },
  {
    id: "daily-request-117",
    category: "daily-request",
    ko: "자리 좀 맡아주세요.",
    en: "Could you hold my ___?",
    accept: ["spot"],
    hint: "자리 한 곳을 편하게 부르는 말",
    note: "spot은 자리 한 곳을 편하게 부르는 말입니다."
  },
  {
    id: "daily-request-118",
    category: "daily-request",
    ko: "제 차례 좀 대신 봐주세요.",
    en: "Could you keep my ___ in line?",
    accept: ["place", "spot"],
    hint: "줄에서 서 있던 자리",
    note: "keep my place in line은 줄을 잠시 비울 때 부탁하는 말입니다."
  },
  {
    id: "daily-request-119",
    category: "daily-request",
    ko: "금방 돌아올게요.",
    en: "I'll be ___ back.",
    accept: ["right"],
    hint: "'바로'라는 뜻으로 뒤의 말을 강하게 만드는 부사",
    note: "I'll be right back은 아주 짧게 자리를 뜰 때 씁니다."
  },
  {
    id: "daily-request-120",
    category: "daily-request",
    ko: "잠깐 시간 좀 내주실 수 있나요?",
    en: "Could you spare a ___?",
    accept: ["moment"],
    hint: "아주 짧은 시간",
    note: "spare는 시간을 내준다는 뜻입니다."
  },
  {
    id: "daily-request-121",
    category: "daily-request",
    ko: "우산 좀 빌려주실 수 있나요?",
    en: "Could I borrow your ___?",
    accept: ["umbrella"],
    hint: "비 올 때 쓰는 것",
    note: "빌린 것은 반드시 돌려줘야 합니다."
  },
  {
    id: "daily-request-122",
    category: "daily-request",
    ko: "충전기 좀 빌릴 수 있을까요?",
    en: "Could I use your ___?",
    accept: ["charger"],
    hint: "배터리를 채우는 도구",
    note: "콘센트를 빌릴 때는 Could I use your outlet?이라고 합니다."
  },
  {
    id: "daily-request-123",
    category: "daily-request",
    ko: "잠깐 전화 좀 써도 될까요?",
    en: "Could I make a quick ___?",
    accept: ["call"],
    hint: "전화 통화를 뜻하는 명사",
    note: "make a call은 전화를 건다는 뜻입니다."
  },
  {
    id: "daily-request-124",
    category: "daily-request",
    ko: "와이파이 좀 쓸 수 있을까요?",
    en: "Could I get on your ___?",
    accept: ["Wi-Fi", "wifi"],
    hint: "무선으로 인터넷에 연결하는 것",
    note: "get on the Wi-Fi는 와이파이에 접속한다는 뜻입니다."
  },
  {
    id: "daily-request-125",
    category: "daily-request",
    ko: "잠깐 자리 좀 비켜주시겠어요?",
    en: "Could you give me some ___?",
    accept: ["room"],
    hint: "몸을 움직일 만한 빈 자리",
    note: "room은 '방'과 '공간' 두 가지 뜻으로 씁니다."
  },
  {
    id: "daily-request-126",
    category: "daily-request",
    ko: "문 좀 잡아주시겠어요?",
    en: "Could you get the ___?",
    accept: ["door"],
    hint: "드나드는 곳을 막는 판",
    note: "Could you get the door?는 문을 열어주거나 잡아달라는 뜻입니다."
  },
  {
    id: "daily-request-127",
    category: "daily-request",
    ko: "엘리베이터 좀 잡아주세요.",
    en: "Could you hold the ___?",
    accept: ["elevator", "lift"],
    hint: "층을 오르내리는 기계",
    note: "Hold the elevator!라고 외치기도 합니다."
  },
  {
    id: "daily-request-128",
    category: "daily-request",
    ko: "몇 층 누르실 거예요?",
    en: "What ___ do you need?",
    accept: ["floor"],
    hint: "건물의 층을 뜻하는 명사",
    note: "엘리베이터에서 자주 주고받는 말입니다."
  },
  {
    id: "daily-request-129",
    category: "daily-request",
    ko: "3층 좀 눌러주시겠어요?",
    en: "Could you ___ three, please?",
    accept: ["press", "hit"],
    hint: "버튼을 누른다는 뜻의 동사",
    note: "hit은 더 편한 말투입니다."
  },
  {
    id: "daily-request-130",
    category: "daily-request",
    ko: "먼저 타세요.",
    en: "___ ahead.",
    accept: ["go"],
    hint: "가다를 뜻하는 기본 동사",
    note: "Go ahead는 '먼저 하세요'라는 뜻으로 아주 널리 씁니다."
  },
  {
    id: "daily-request-131",
    category: "daily-request",
    ko: "제가 들어드릴게요.",
    en: "Let me ___ that for you.",
    accept: ["carry", "grab"],
    hint: "들고 나른다는 뜻의 동사",
    note: "짐을 든 사람을 도울 때 건네는 말입니다."
  },
  {
    id: "daily-request-132",
    category: "daily-request",
    ko: "제가 뭘 도와드릴까요?",
    en: "How can I ___ you?",
    accept: ["assist"],
    hint: "돕는다는 뜻의 격식 있는 동사",
    note: "How can I assist you?는 안내 창구에서 쓰는 말투입니다. 편하게는 help를 씁니다."
  },
  {
    id: "daily-request-133",
    category: "daily-request",
    ko: "괜찮습니다, 제가 할게요.",
    en: "I'm ___, thanks.",
    accept: ["good", "fine"],
    hint: "괜찮다는 뜻의 형용사",
    note: "I'm good은 사양할 때 쓰는 가장 흔한 말입니다."
  },
  {
    id: "daily-request-134",
    category: "daily-request",
    ko: "그래 주시면 감사하죠.",
    en: "That would be ___.",
    accept: ["great", "wonderful"],
    hint: "아주 좋다는 뜻의 형용사",
    note: "제안을 받아들일 때 쓰는 부드러운 대답입니다."
  },
  {
    id: "daily-request-135",
    category: "daily-request",
    ko: "번거로우시면 안 하셔도 돼요.",
    en: "Only if it's not a ___.",
    accept: ["hassle", "bother"],
    hint: "귀찮은 일을 뜻하는 명사",
    note: "상대에게 빠져나갈 길을 열어주는 배려의 말입니다."
  },
  {
    id: "daily-request-136",
    category: "daily-request",
    ko: "정말 감사합니다, 큰 도움 됐어요.",
    en: "That ___ a lot.",
    accept: ["helps", "helped"],
    hint: "돕다의 현재형",
    note: "That helps a lot은 실질적으로 도움이 됐다는 뜻입니다."
  },
  {
    id: "daily-request-137",
    category: "daily-request",
    ko: "빚졌네요.",
    en: "I owe you ___.",
    accept: ["big"],
    hint: "크게라는 뜻의 말",
    note: "I owe you big time이라고도 합니다."
  },
  {
    id: "daily-request-138",
    category: "daily-request",
    ko: "언제든 갚을게요.",
    en: "I'll ___ it up to you.",
    accept: ["make"],
    hint: "만들다를 뜻하는 기본 동사. it up to와 붙어 갚는다는 뜻이 됩니다",
    note: "make it up to someone은 신세를 갚는다는 뜻입니다."
  },
  {
    id: "daily-request-139",
    category: "daily-request",
    ko: "제가 뭘 하면 될지 말씀해 주세요.",
    en: "Just tell me what you ___ me to do.",
    accept: ["want"],
    hint: "원한다는 뜻의 동사",
    note: "want someone to do는 남에게 무엇을 시킬 때 쓰는 기본 꼴입니다."
  },
  {
    id: "daily-request-140",
    category: "daily-request",
    ko: "제가 알아서 처리할게요.",
    en: "I'll take ___ of it.",
    accept: ["care"],
    hint: "돌봄을 뜻하는 명사. take와 붙어 맡아 처리한다는 뜻이 됩니다",
    note: "take care of it은 알아서 처리하겠다는 뜻입니다."
  },
  {
    id: "daily-request-141",
    category: "daily-request",
    ko: "이거 언제까지 하면 될까요?",
    en: "When is the ___?",
    accept: ["deadline"],
    hint: "정해진 기한을 뜻하는 명사",
    note: "due date라고도 합니다."
  },
  {
    id: "daily-request-142",
    category: "daily-request",
    ko: "조금 늦어도 될까요?",
    en: "Would it be okay if I'm a little ___?",
    accept: ["late"],
    hint: "정해진 때보다 늦다는 뜻의 형용사",
    note: "약속 시간에 늦을 때 미리 알리는 것이 예의입니다."
  },
  {
    id: "daily-request-143",
    category: "daily-request",
    ko: "하루만 더 주실 수 있나요?",
    en: "Could I have one more ___?",
    accept: ["day"],
    hint: "아침부터 밤까지의 하루",
    note: "기한을 미룰 때 쓰는 정중한 부탁입니다."
  },
  {
    id: "daily-request-144",
    category: "daily-request",
    ko: "먼저 처리해 주실 수 있나요?",
    en: "Could you make this a ___?",
    accept: ["priority"],
    hint: "먼저 해야 할 일을 뜻하는 명사",
    note: "top priority라고 하면 더 급하다는 뜻이 됩니다."
  },
  {
    id: "daily-request-145",
    category: "daily-request",
    ko: "편하실 때 주셔도 돼요.",
    en: "Whenever is ___ for you.",
    accept: ["convenient"],
    hint: "때가 알맞고 부담이 없다는 뜻의 형용사",
    note: "이 말을 덧붙이면 재촉하지 않는다는 뜻이 됩니다."
  },
  {
    id: "daily-request-146",
    category: "daily-request",
    ko: "가능하면 오늘 중으로요.",
    en: "By the end of the day, if ___.",
    accept: ["possible"],
    hint: "할 수 있다는 뜻의 형용사",
    note: "if possible을 붙이면 강요하지 않는 느낌이 됩니다."
  },
  {
    id: "daily-request-147",
    category: "daily-request",
    ko: "다시 한번 확인해 주시겠어요?",
    en: "Could you double-___ it?",
    accept: ["check"],
    hint: "살펴본다는 뜻의 동사",
    note: "double-check는 한 번 더 확인한다는 뜻입니다."
  },
  {
    id: "daily-request-148",
    category: "daily-request",
    ko: "제가 놓친 게 있을까요?",
    en: "Did I ___ anything?",
    accept: ["miss"],
    hint: "빠뜨린다는 뜻의 동사",
    note: "회의가 끝난 뒤나 검토를 마친 뒤에 씁니다."
  },
  {
    id: "daily-request-149",
    category: "daily-request",
    ko: "다시 한번 짚어주시겠어요?",
    en: "Could you run that ___ me again?",
    accept: ["by"],
    hint: "곁을 뜻하는 전치사. run과 붙어 다시 설명해 달라는 뜻이 됩니다",
    note: "run something by someone은 상대에게 다시 짚어 설명한다는 뜻입니다."
  },
  {
    id: "daily-request-150",
    category: "daily-request",
    ko: "쉽게 풀어서 말씀해 주시겠어요?",
    en: "Could you put it more ___?",
    accept: ["simply"],
    hint: "쉽고 간단하게라는 뜻의 부사",
    note: "put it은 '말로 표현하다'라는 뜻입니다."
  },
  {
    id: "daily-request-151",
    category: "daily-request",
    ko: "메모해도 될까요?",
    en: "Do you mind if I take ___?",
    accept: ["notes"],
    hint: "적어두는 것을 뜻하는 복수 명사",
    note: "take notes는 받아 적는다는 뜻입니다."
  },
  {
    id: "daily-request-152",
    category: "daily-request",
    ko: "녹음해도 괜찮을까요?",
    en: "Would it be okay to ___ this?",
    accept: ["record"],
    hint: "소리를 담아둔다는 뜻의 동사",
    note: "반드시 먼저 물어보아야 합니다."
  },
  {
    id: "daily-request-153",
    category: "daily-request",
    ko: "사진 찍어도 되나요?",
    en: "Am I ___ to take pictures?",
    accept: ["allowed"],
    hint: "허락받았다는 뜻의 과거분사",
    note: "박물관이나 가게에서는 미리 물어보는 것이 좋습니다."
  },
  {
    id: "daily-request-154",
    category: "daily-request",
    ko: "여기 들어가도 되나요?",
    en: "Is this area ___ to the public?",
    accept: ["open"],
    hint: "닫히지 않았다는 뜻의 형용사",
    note: "출입 금지 구역은 off-limits라고 합니다."
  },
  {
    id: "daily-request-155",
    category: "daily-request",
    ko: "만져봐도 될까요?",
    en: "Can I ___ it?",
    accept: ["touch"],
    hint: "손을 댄다는 뜻의 동사",
    note: "가게에서는 Do not touch라고 적힌 곳이 있습니다."
  },
  {
    id: "daily-request-156",
    category: "daily-request",
    ko: "잠깐 앉았다 가도 될까요?",
    en: "Mind if I ___ down for a bit?",
    accept: ["sit"],
    hint: "앉는다는 뜻의 동사",
    note: "Mind if I는 Do you mind if I를 줄인 편한 말투입니다."
  },
  {
    id: "daily-request-157",
    category: "daily-request",
    ko: "여기 주차해도 되나요?",
    en: "Is it okay to ___ here?",
    accept: ["park"],
    hint: "차를 세워둔다는 뜻의 동사",
    note: "주차 금지는 No parking입니다."
  },
  {
    id: "daily-request-158",
    category: "daily-request",
    ko: "반려견 데리고 들어가도 되나요?",
    en: "Are dogs ___ inside?",
    accept: ["welcome", "permitted"],
    hint: "받아들여진다는 뜻의 말",
    note: "pet-friendly라고 써 붙인 가게도 있습니다."
  },
  {
    id: "daily-request-159",
    category: "daily-request",
    ko: "여기서 먹어도 되나요?",
    en: "Can we eat ___ here?",
    accept: ["in"],
    hint: "안쪽을 뜻하는 말",
    note: "eat in은 가게 안에서 먹는 것, take out은 가져가는 것입니다."
  },
  {
    id: "daily-request-160",
    category: "daily-request",
    ko: "밖에서 사 온 음식 먹어도 되나요?",
    en: "Can we bring in ___ food?",
    accept: ["outside"],
    hint: "바깥을 뜻하는 말",
    note: "outside food는 가게에서 팔지 않은 음식을 말합니다."
  },
  {
    id: "daily-request-161",
    category: "daily-request",
    ko: "잠깐 화장실 좀 다녀올게요.",
    en: "I'm going to ___ to the restroom.",
    accept: ["run"],
    hint: "뛰다를 뜻하는 동사가 잠깐 다녀온다는 뜻으로도 쓰입니다",
    note: "run to는 잠깐 빨리 다녀온다는 느낌을 줍니다."
  },
  {
    id: "daily-request-162",
    category: "daily-request",
    ko: "먼저 가셔도 돼요.",
    en: "Don't ___ for me.",
    accept: ["wait"],
    hint: "기다린다는 뜻의 동사",
    note: "Don't wait for me는 먼저 가라는 뜻입니다."
  },
  {
    id: "daily-request-163",
    category: "daily-request",
    ko: "같이 가도 될까요?",
    en: "Can I ___ along?",
    accept: ["come", "tag"],
    hint: "따라간다는 뜻의 동사",
    note: "tag along은 슬쩍 따라붙는다는 가벼운 느낌입니다."
  },
  {
    id: "daily-request-164",
    category: "daily-request",
    ko: "저도 껴도 될까요?",
    en: "Can I ___ you?",
    accept: ["join"],
    hint: "무리에 들어간다는 뜻의 동사",
    note: "Can I join you?는 자리에 합석해도 되냐고 묻는 말입니다."
  },
  {
    id: "daily-request-165",
    category: "daily-request",
    ko: "한 명 더 껴도 될까요?",
    en: "Can we ___ in one more?",
    accept: ["squeeze", "fit"],
    hint: "비집고 넣는다는 뜻의 동사",
    note: "squeeze in은 자리가 빠듯한데 억지로 넣는다는 느낌입니다."
  },
  {
    id: "daily-request-166",
    category: "daily-request",
    ko: "제 몫은 제가 낼게요.",
    en: "I'll pay my ___.",
    accept: ["share"],
    hint: "나눠 맡은 몫을 뜻하는 명사",
    note: "각자 내는 것은 go Dutch나 split the bill이라고 합니다."
  },
  {
    id: "daily-request-167",
    category: "daily-request",
    ko: "현금이 다 떨어졌어요.",
    en: "I'm ___ of cash.",
    accept: ["out"],
    hint: "다 떨어졌다는 뜻을 만드는 말",
    note: "out of cash는 현금이 다 떨어졌다는 뜻입니다."
  },
  {
    id: "daily-request-168",
    category: "daily-request",
    ko: "제가 나중에 보내드릴게요.",
    en: "I'll ___ you the money later.",
    accept: ["send", "transfer"],
    hint: "돈을 보낸다는 뜻의 동사",
    note: "계좌 이체는 transfer라고 합니다."
  },
  {
    id: "daily-request-169",
    category: "daily-request",
    ko: "잔돈 있으세요?",
    en: "Do you have ___ change?",
    accept: ["any"],
    hint: "조금이라도 있는지 묻는 말",
    note: "change는 잔돈을 뜻할 때 셀 수 없는 명사로 씁니다."
  },
  {
    id: "daily-request-170",
    category: "daily-request",
    ko: "천 원만 빌려주실 수 있나요?",
    en: "Could you ___ me a thousand won?",
    accept: ["lend"],
    hint: "돈을 빌려준다는 뜻의 동사",
    note: "borrow는 빌리는 쪽, lend는 빌려주는 쪽입니다."
  },
  {
    id: "daily-request-171",
    category: "daily-request",
    ko: "제 대신 좀 전해주시겠어요?",
    en: "Could you ___ this on to them?",
    accept: ["forward"],
    hint: "앞으로를 뜻하는 낱말이 동사로 쓰이면 전달한다는 뜻이 됩니다",
    note: "이메일을 전달할 때도 forward를 씁니다."
  },
  {
    id: "daily-request-172",
    category: "daily-request",
    ko: "그분과 연결해 주실 수 있나요?",
    en: "Could you ___ me with them?",
    accept: ["connect"],
    hint: "이어준다는 뜻의 동사",
    note: "connect A with B는 두 사람을 이어준다는 뜻입니다."
  },
  {
    id: "daily-request-173",
    category: "daily-request",
    ko: "좋은 곳 좀 알려주세요.",
    en: "Any good ___?",
    accept: ["spots", "places"],
    hint: "가볼 만한 곳을 뜻하는 복수 명사",
    note: "Any good spots?는 짧게 추천을 청하는 말입니다."
  },
  {
    id: "daily-request-174",
    category: "daily-request",
    ko: "조언 좀 구할 수 있을까요?",
    en: "Could I ask for your ___?",
    accept: ["advice"],
    hint: "어떻게 하면 좋을지 일러주는 말",
    note: "셀 수 없는 명사라 an advice라고 하지 않습니다."
  },
  {
    id: "daily-request-175",
    category: "daily-request",
    ko: "솔직하게 말씀해 주세요.",
    en: "Please be ___ with me.",
    accept: ["honest"],
    hint: "숨기지 않는다는 뜻의 형용사",
    note: "Be honest with me는 듣기 싫은 말이라도 해달라는 뜻입니다."
  },
  {
    id: "daily-request-176",
    category: "daily-request",
    ko: "어떻게 생각하세요?",
    en: "What are your ___ on this?",
    accept: ["thoughts"],
    hint: "생각을 뜻하는 복수 명사",
    note: "What do you think?보다 조금 더 격식 있는 말입니다."
  },
  {
    id: "daily-request-177",
    category: "daily-request",
    ko: "이 일 좀 맡아주실 수 있을까요?",
    en: "Could you take this ___?",
    accept: ["over"],
    hint: "넘어감을 뜻하는 말. take와 붙어 넘겨받는다는 뜻이 됩니다",
    note: "take over는 하던 일을 이어받는다는 뜻입니다."
  },
  {
    id: "daily-request-178",
    category: "daily-request",
    ko: "저 대신 좀 나가주실 수 있나요?",
    en: "Could you ___ in for me?",
    accept: ["fill"],
    hint: "빈자리를 채운다는 뜻의 동사",
    note: "fill in for someone은 자리를 대신 메운다는 뜻입니다."
  },
  {
    id: "daily-request-179",
    category: "daily-request",
    ko: "같이 좀 봐주시겠어요?",
    en: "Could we go over it ___?",
    accept: ["together"],
    hint: "함께라는 뜻의 말",
    note: "혼자 보기 어려울 때 같이 검토하자고 청하는 말입니다."
  },
  {
    id: "daily-request-180",
    category: "daily-request",
    ko: "제 생각을 좀 정리해 주시겠어요?",
    en: "Could you help me ___ my thoughts?",
    accept: ["organize", "organise"],
    hint: "가지런히 정리한다는 뜻의 동사",
    note: "영국에서는 organise로 적습니다."
  },
  {
    id: "daily-request-181",
    category: "daily-request",
    ko: "부탁이 하나 더 있는데요.",
    en: "One ___ thing, if you don't mind.",
    accept: ["more"],
    hint: "수나 양이 더 있다는 뜻의 말",
    note: "if you don't mind를 붙이면 부담이 줄어듭니다."
  },
  {
    id: "daily-request-182",
    category: "daily-request",
    ko: "무리한 부탁인 건 알아요.",
    en: "I know it's a ___ to ask.",
    accept: ["lot"],
    hint: "많다는 뜻의 말",
    note: "a lot to ask는 부담이 큰 부탁이라는 뜻입니다."
  },
  {
    id: "daily-request-183",
    category: "daily-request",
    ko: "안 되시면 말씀해 주세요.",
    en: "Just say so if you ___.",
    accept: ["can't"],
    hint: "할 수 없다는 뜻의 줄임말",
    note: "Just say so는 그냥 말만 해달라는 뜻입니다."
  },
  {
    id: "daily-request-184",
    category: "daily-request",
    ko: "억지로 안 하셔도 돼요.",
    en: "You don't have to say ___.",
    accept: ["yes"],
    hint: "받아들인다는 뜻의 짧은 대답",
    note: "거절할 여지를 남겨주는 배려의 말입니다."
  },
  {
    id: "daily-request-185",
    category: "daily-request",
    ko: "생각해 보고 알려주세요.",
    en: "___ it over and let me know.",
    accept: ["Think", "Sleep"],
    hint: "생각한다는 뜻의 동사",
    note: "sleep on it은 하룻밤 자면서 생각해 보라는 뜻입니다."
  },
  {
    id: "daily-request-186",
    category: "daily-request",
    ko: "지금 답 안 주셔도 돼요.",
    en: "You don't have to ___ right away.",
    accept: ["decide", "answer"],
    hint: "정한다는 뜻의 동사",
    note: "right away는 '지금 당장'입니다."
  },
  {
    id: "daily-request-187",
    category: "daily-request",
    ko: "여쭤보길 잘했네요.",
    en: "I'm ___ I asked.",
    accept: ["glad"],
    hint: "기쁘다는 뜻의 형용사",
    note: "I'm glad I asked는 물어보길 잘했다는 뜻입니다."
  },
  {
    id: "daily-request-188",
    category: "daily-request",
    ko: "혹시 몰라서 여쭤봐요.",
    en: "Just in ___.",
    accept: ["case"],
    hint: "어떤 경우를 뜻하는 명사",
    note: "just in case는 '혹시 몰라서'라는 뜻입니다."
  },
  {
    id: "daily-request-189",
    category: "daily-request",
    ko: "괜히 여쭤봤네요.",
    en: "___ mind.",
    accept: ["Never"],
    hint: "'한 번도 ~않다'를 뜻하는 말",
    note: "Never mind는 없던 일로 하자는 뜻입니다."
  },
  {
    id: "daily-request-190",
    category: "daily-request",
    ko: "제가 잘못 여쭤봤어요.",
    en: "Let me ___ that.",
    accept: ["rephrase"],
    hint: "다시 표현한다는 뜻의 동사",
    note: "말을 잘못 꺼냈을 때 고쳐 말하겠다는 뜻입니다."
  },
  {
    id: "daily-request-191",
    category: "daily-request",
    ko: "제가 여쭤볼 자리가 아니었네요.",
    en: "That was out of ___.",
    accept: ["line"],
    hint: "선을 뜻하는 명사",
    note: "out of line은 선을 넘었다는 뜻입니다."
  },
  {
    id: "daily-request-192",
    category: "daily-request",
    ko: "불편하셨다면 죄송해요.",
    en: "Sorry if that made you ___.",
    accept: ["uncomfortable"],
    hint: "마음이 편하지 않다는 뜻의 형용사",
    note: "made you uncomfortable은 상대를 불편하게 했다는 뜻입니다."
  },
  {
    id: "daily-request-193",
    category: "daily-request",
    ko: "제가 선을 넘었네요.",
    en: "I ___ too far.",
    accept: ["went"],
    hint: "가다의 과거형",
    note: "go too far는 도를 지나쳤다는 뜻입니다."
  },
  {
    id: "daily-request-194",
    category: "daily-request",
    ko: "다시는 안 그럴게요.",
    en: "It won't ___ again.",
    accept: ["happen"],
    hint: "일이 생긴다는 뜻의 동사",
    note: "It won't happen again은 사과 뒤에 덧붙이는 다짐입니다."
  },
  {
    id: "daily-request-195",
    category: "daily-request",
    ko: "이해해 주셔서 감사해요.",
    en: "Thanks for ___.",
    accept: ["understanding"],
    hint: "알아준다는 뜻의 -ing형",
    note: "Thanks for understanding은 양해해 줘서 고맙다는 뜻입니다."
  },
  {
    id: "daily-request-196",
    category: "daily-request",
    ko: "제 부탁 들어주셔서 감사해요.",
    en: "Thanks for ___ me out.",
    accept: ["helping"],
    hint: "돕다의 -ing형",
    note: "help someone out은 곤란한 상황에서 도와줬다는 뜻입니다."
  },
  {
    id: "daily-request-197",
    category: "daily-request",
    ko: "정말 큰 힘이 됐어요.",
    en: "You really came ___ for me.",
    accept: ["through"],
    hint: "통과를 뜻하는 말. come과 붙어 기대에 부응했다는 뜻이 됩니다",
    note: "come through for someone은 어려울 때 힘이 되어줬다는 뜻입니다."
  },
  {
    id: "daily-request-198",
    category: "daily-request",
    ko: "다음엔 제가 도울게요.",
    en: "I'll ___ the favor.",
    accept: ["return"],
    hint: "돌려준다는 뜻의 동사",
    note: "return the favor는 받은 도움을 갚는다는 뜻입니다."
  },
  {
    id: "daily-request-199",
    category: "daily-request",
    ko: "필요하시면 언제든 부르세요.",
    en: "___ free to ask anytime.",
    accept: ["Feel"],
    hint: "느끼다를 뜻하는 동사",
    note: "Feel free to는 부담 갖지 말라는 뜻입니다."
  },
  {
    id: "daily-request-200",
    category: "daily-request",
    ko: "제가 편이 되어드릴게요.",
    en: "I'm on your ___.",
    accept: ["side"],
    hint: "어느 한쪽을 뜻하는 명사",
    note: "on your side는 편을 들어주겠다는 뜻입니다. I've got your back도 같은 뜻입니다."
  },
  {
    id: "daily-opinion-101",
    category: "daily-opinion",
    ko: "제 말이 그 말이에요.",
    en: "That's ___ my point.",
    accept: ["exactly"],
    hint: "조금도 다르지 않다는 뜻의 부사",
    note: "That's exactly my point는 상대가 내 뜻을 짚어줬을 때 씁니다."
  },
  {
    id: "daily-opinion-102",
    category: "daily-opinion",
    ko: "무슨 말씀인지 알겠어요.",
    en: "I ___ you.",
    accept: ["hear"],
    hint: "소리가 들린다는 뜻의 동사",
    note: "I hear you는 동의까지는 아니지만 이해했다는 뜻입니다."
  },
  {
    id: "daily-opinion-103",
    category: "daily-opinion",
    ko: "그건 인정해요.",
    en: "I'll give you ___.",
    accept: ["that"],
    hint: "앞에 나온 말을 가리키는 낱말",
    note: "I'll give you that은 다른 건 몰라도 그 점은 인정한다는 뜻입니다."
  },
  {
    id: "daily-opinion-104",
    category: "daily-opinion",
    ko: "생각해 볼 만하네요.",
    en: "That's worth ___ about.",
    accept: ["thinking"],
    hint: "생각하다의 -ing형",
    note: "worth 뒤에는 -ing가 옵니다."
  },
  {
    id: "daily-opinion-105",
    category: "daily-opinion",
    ko: "저는 좀 망설여져요.",
    en: "I'm a bit ___ about this.",
    accept: ["hesitant"],
    hint: "선뜻 못 하고 머뭇거린다는 뜻의 형용사",
    note: "hesitant는 반대까지는 아니고 조심스럽다는 뜻입니다."
  },
  {
    id: "daily-opinion-106",
    category: "daily-opinion",
    ko: "좀 더 알아보고 싶어요.",
    en: "I'd like to look ___ it more.",
    accept: ["into"],
    hint: "안쪽으로를 뜻하는 전치사. look과 붙어 알아본다는 뜻이 됩니다",
    note: "look into는 자세히 알아본다는 뜻입니다."
  },
  {
    id: "daily-opinion-107",
    category: "daily-opinion",
    ko: "판단하기엔 아직 일러요.",
    en: "It's too ___ to tell.",
    accept: ["early", "soon"],
    hint: "때가 이르다는 뜻의 형용사",
    note: "tell은 여기서 '알아차리다'라는 뜻입니다."
  },
  {
    id: "daily-opinion-108",
    category: "daily-opinion",
    ko: "두고 보면 알겠죠.",
    en: "Time will ___.",
    accept: ["tell"],
    hint: "알려준다는 뜻의 동사",
    note: "Time will tell은 시간이 지나면 알게 된다는 뜻입니다."
  },
  {
    id: "daily-opinion-109",
    category: "daily-opinion",
    ko: "저는 잘 모르겠어요.",
    en: "I'm on the ___ about it.",
    accept: ["fence"],
    hint: "울타리를 뜻하는 명사",
    note: "on the fence는 담장 위에 앉아 어느 쪽으로도 못 내려온다는 그림에서 온 말입니다."
  },
  {
    id: "daily-opinion-110",
    category: "daily-opinion",
    ko: "반반이에요.",
    en: "I'm ___ between the two.",
    accept: ["torn"],
    hint: "찢다의 과거분사",
    note: "torn은 마음이 두 쪽으로 갈렸다는 뜻입니다."
  },
  {
    id: "daily-opinion-111",
    category: "daily-opinion",
    ko: "결정을 못 하겠어요.",
    en: "I can't ___ up my mind on this.",
    accept: ["make"],
    hint: "만들다를 뜻하는 기본 동사. up one's mind와 붙어 마음을 정한다는 뜻이 됩니다",
    note: "make up one's mind는 마음을 정한다는 뜻입니다."
  },
  {
    id: "daily-opinion-112",
    category: "daily-opinion",
    ko: "어느 쪽이든 괜찮아요.",
    en: "___ way works for me.",
    accept: ["Either"],
    hint: "둘 중 어느 쪽이든이라는 뜻의 말",
    note: "Either way는 어느 쪽으로 정해도 좋다는 뜻입니다."
  },
  {
    id: "daily-opinion-113",
    category: "daily-opinion",
    ko: "저는 그냥 따라갈게요.",
    en: "I'll go with the ___.",
    accept: ["flow"],
    hint: "흐름을 뜻하는 명사",
    note: "go with the flow는 흐름에 맡긴다는 뜻입니다."
  },
  {
    id: "daily-opinion-114",
    category: "daily-opinion",
    ko: "굳이 반대하진 않아요.",
    en: "I have no ___ feelings.",
    accept: ["strong"],
    hint: "세다는 뜻의 형용사",
    note: "no strong feelings는 어느 쪽이든 크게 상관없다는 뜻입니다."
  },
  {
    id: "daily-opinion-115",
    category: "daily-opinion",
    ko: "저도 그렇게 생각했어요.",
    en: "I was thinking the same ___.",
    accept: ["thing"],
    hint: "일이나 사항을 두루 가리키는 말",
    note: "I was thinking the same thing은 말이 통했다는 반가움을 담습니다."
  },
  {
    id: "daily-opinion-116",
    category: "daily-opinion",
    ko: "완전 공감해요.",
    en: "I can totally ___ to that.",
    accept: ["relate"],
    hint: "남의 처지를 자기 일처럼 느낀다는 뜻의 동사",
    note: "relate to는 겪어봐서 안다는 뜻입니다."
  },
  {
    id: "daily-opinion-117",
    category: "daily-opinion",
    ko: "저도 그런 적 있어요.",
    en: "I've ___ there.",
    accept: ["been"],
    hint: "be동사의 과거분사",
    note: "I've been there는 나도 겪어봤다는 뜻입니다."
  },
  {
    id: "daily-opinion-118",
    category: "daily-opinion",
    ko: "어떤 기분인지 알아요.",
    en: "I know the ___.",
    accept: ["feeling"],
    hint: "느낌을 뜻하는 명사",
    note: "I know the feeling은 위로할 때 자주 씁니다."
  },
  {
    id: "daily-opinion-119",
    category: "daily-opinion",
    ko: "제 얘기 같네요.",
    en: "That ___ home.",
    accept: ["hits"],
    hint: "때린다는 뜻의 동사",
    note: "hit home은 남 얘기 같지 않게 와닿는다는 뜻입니다."
  },
  {
    id: "daily-opinion-120",
    category: "daily-opinion",
    ko: "생각도 못 했네요.",
    en: "That never ___ my mind.",
    accept: ["crossed"],
    hint: "가로지르다의 과거형",
    note: "cross one's mind는 머릿속을 스친다는 뜻입니다."
  },
  {
    id: "daily-opinion-121",
    category: "daily-opinion",
    ko: "그렇게 볼 수도 있겠네요.",
    en: "I never ___ of it that way.",
    accept: ["thought"],
    hint: "생각하다의 과거형",
    note: "새 관점을 인정할 때 쓰는 부드러운 말입니다."
  },
  {
    id: "daily-opinion-122",
    category: "daily-opinion",
    ko: "관점을 바꿔서 보면요.",
    en: "Look at it from a different ___.",
    accept: ["angle", "perspective"],
    hint: "바라보는 방향을 뜻하는 명사",
    note: "angle은 더 편한 말, perspective는 조금 더 무게 있는 말입니다."
  },
  {
    id: "daily-opinion-123",
    category: "daily-opinion",
    ko: "일장일단이 있죠.",
    en: "There are ___ and cons.",
    accept: ["pros"],
    hint: "좋은 점을 뜻하는 복수 명사",
    note: "pros and cons는 장점과 단점입니다."
  },
  {
    id: "daily-opinion-124",
    category: "daily-opinion",
    ko: "장점이 더 커요.",
    en: "The benefits ___ the risks.",
    accept: ["outweigh"],
    hint: "저울에서 더 무겁다는 뜻의 동사",
    note: "outweigh는 견주었을 때 더 크다는 뜻입니다."
  },
  {
    id: "daily-opinion-125",
    category: "daily-opinion",
    ko: "위험 부담이 너무 커요.",
    en: "It's too ___.",
    accept: ["risky"],
    hint: "위험이 따른다는 뜻의 형용사",
    note: "risk에 -y를 붙인 형용사입니다."
  },
  {
    id: "daily-opinion-126",
    category: "daily-opinion",
    ko: "밑져야 본전이죠.",
    en: "We have nothing to ___.",
    accept: ["lose"],
    hint: "잃는다는 뜻의 동사",
    note: "nothing to lose는 손해 볼 것이 없다는 뜻입니다."
  },
  {
    id: "daily-opinion-127",
    category: "daily-opinion",
    ko: "한번 해볼 만해요.",
    en: "It's worth a ___.",
    accept: ["shot"],
    hint: "한 번 해보는 시도를 뜻하는 명사",
    note: "worth a shot은 밑져야 본전이라는 느낌입니다."
  },
  {
    id: "daily-opinion-128",
    category: "daily-opinion",
    ko: "저는 신중한 편이에요.",
    en: "I tend to play it ___.",
    accept: ["safe"],
    hint: "위험하지 않다는 뜻의 형용사",
    note: "play it safe는 안전한 쪽을 고른다는 뜻입니다."
  },
  {
    id: "daily-opinion-129",
    category: "daily-opinion",
    ko: "성급했던 것 같아요.",
    en: "I think I ___ into it.",
    accept: ["rushed"],
    hint: "서두르다의 과거형",
    note: "rush into는 충분히 생각하지 않고 뛰어든다는 뜻입니다."
  },
  {
    id: "daily-opinion-130",
    category: "daily-opinion",
    ko: "다시 생각해 봐야겠어요.",
    en: "I need to ___ it.",
    accept: ["reconsider"],
    hint: "다시 생각한다는 뜻의 동사",
    note: "re-를 붙이면 '다시'라는 뜻이 더해집니다."
  },
  {
    id: "daily-opinion-131",
    category: "daily-opinion",
    ko: "저는 아무 상관 없어요.",
    en: "I had nothing to do with ___.",
    accept: ["it"],
    hint: "앞에 나온 일을 가리키는 말",
    note: "have nothing to do with는 그 일과 아무 관련이 없다는 뜻입니다."
  },
  {
    id: "daily-opinion-132",
    category: "daily-opinion",
    ko: "누구 탓도 아니에요.",
    en: "No one's to ___.",
    accept: ["blame"],
    hint: "탓한다는 뜻의 동사",
    note: "be to blame은 책임이 있다는 뜻입니다."
  },
  {
    id: "daily-opinion-133",
    category: "daily-opinion",
    ko: "어쩔 수 없었어요.",
    en: "There was nothing I could ___.",
    accept: ["do"],
    hint: "하다를 뜻하는 기본 동사",
    note: "손쓸 방법이 없었다는 뜻입니다."
  },
  {
    id: "daily-opinion-134",
    category: "daily-opinion",
    ko: "그럴 수도 있죠.",
    en: "It ___.",
    accept: ["happens"],
    hint: "일이 생긴다는 뜻의 동사",
    note: "It happens는 누구나 겪는 일이라며 넘겨주는 말입니다."
  },
  {
    id: "daily-opinion-135",
    category: "daily-opinion",
    ko: "이미 지난 일이에요.",
    en: "It's water under the ___.",
    accept: ["bridge"],
    hint: "강 위에 놓인 다리",
    note: "water under the bridge는 이미 흘러간 일이라는 뜻입니다."
  },
  {
    id: "daily-opinion-136",
    category: "daily-opinion",
    ko: "그만 잊어버리세요.",
    en: "Just ___ it go.",
    accept: ["let"],
    hint: "하게 놔둔다는 뜻의 동사",
    note: "let it go는 마음에서 놓아준다는 뜻입니다."
  },
  {
    id: "daily-opinion-137",
    category: "daily-opinion",
    ko: "마음에 담아두지 마세요.",
    en: "Don't take it ___.",
    accept: ["personally"],
    hint: "개인적으로라는 뜻의 부사",
    note: "take it personally는 자기를 향한 말로 받아들인다는 뜻입니다."
  },
  {
    id: "daily-opinion-138",
    category: "daily-opinion",
    ko: "악의는 없었어요.",
    en: "I didn't ___ it that way.",
    accept: ["mean"],
    hint: "그런 뜻으로 말한다는 뜻의 동사",
    note: "I didn't mean it that way는 오해를 풀 때 씁니다."
  },
  {
    id: "daily-opinion-139",
    category: "daily-opinion",
    ko: "말이 헛나왔어요.",
    en: "That came out ___.",
    accept: ["wrong"],
    hint: "잘못됐다는 뜻의 형용사",
    note: "That came out wrong은 뜻과 다르게 말이 나갔다는 뜻입니다."
  },
  {
    id: "daily-opinion-140",
    category: "daily-opinion",
    ko: "오해가 있었네요.",
    en: "There's been a ___.",
    accept: ["misunderstanding"],
    hint: "서로 다르게 알아들은 것을 뜻하는 명사",
    note: "mis-는 '잘못'이라는 뜻을 더합니다."
  },
  {
    id: "daily-opinion-141",
    category: "daily-opinion",
    ko: "제 뜻은 그게 아니었어요.",
    en: "That's not what I was ___ at.",
    accept: ["getting"],
    hint: "얻다의 -ing형. at과 붙어 말하려는 바가 됩니다",
    note: "what I'm getting at은 '내가 말하려는 것'입니다."
  },
  {
    id: "daily-opinion-142",
    category: "daily-opinion",
    ko: "정리하자면요.",
    en: "To ___ it up.",
    accept: ["sum", "wrap"],
    hint: "합치거나 마무리한다는 뜻의 동사",
    note: "sum up은 요약한다는 뜻입니다."
  },
  {
    id: "daily-opinion-143",
    category: "daily-opinion",
    ko: "결론적으로요.",
    en: "At the end of the ___.",
    accept: ["day"],
    hint: "아침부터 밤까지의 하루",
    note: "at the end of the day는 '결국'이라는 뜻의 관용구입니다."
  },
  {
    id: "daily-opinion-144",
    category: "daily-opinion",
    ko: "중요한 건 그게 아니에요.",
    en: "That's ___ the point.",
    accept: ["beside"],
    hint: "곁을 뜻하는 전치사",
    note: "beside the point는 논점에서 벗어났다는 뜻입니다."
  },
  {
    id: "daily-opinion-145",
    category: "daily-opinion",
    ko: "본론으로 들어가죠.",
    en: "Let's ___ to the point.",
    accept: ["get"],
    hint: "닿는다는 뜻의 기본 동사",
    note: "get to the point는 빙 돌리지 말고 본론을 말하자는 뜻입니다."
  },
  {
    id: "daily-opinion-146",
    category: "daily-opinion",
    ko: "솔직히 말씀드리면요.",
    en: "To be ___ with you.",
    accept: ["straight"],
    hint: "곧다는 뜻의 형용사",
    note: "be straight with someone은 돌리지 않고 솔직히 말한다는 뜻입니다."
  },
  {
    id: "daily-opinion-147",
    category: "daily-opinion",
    ko: "제 개인적인 생각입니다만.",
    en: "This is ___ my opinion.",
    accept: ["just"],
    hint: "'그저'를 뜻하는 말",
    note: "앞에 붙여두면 주장이 부드러워집니다."
  },
  {
    id: "daily-opinion-148",
    category: "daily-opinion",
    ko: "제가 잘못 알고 있을 수도 있어요.",
    en: "I might be ___.",
    accept: ["mistaken"],
    hint: "잘못 알고 있다는 뜻의 형용사",
    note: "I might be mistaken은 I could be wrong보다 조금 더 정중합니다."
  },
  {
    id: "daily-opinion-149",
    category: "daily-opinion",
    ko: "확실하진 않아요.",
    en: "Don't ___ me on that.",
    accept: ["quote"],
    hint: "말을 그대로 옮긴다는 뜻의 동사",
    note: "Don't quote me on that은 확실하지 않으니 옮기지 말라는 뜻입니다."
  },
  {
    id: "daily-opinion-150",
    category: "daily-opinion",
    ko: "제가 알기로는요.",
    en: "As far as I ___.",
    accept: ["know"],
    hint: "알고 있다는 뜻의 동사",
    note: "as far as I know는 '내가 아는 한'입니다."
  },
  {
    id: "daily-opinion-151",
    category: "daily-opinion",
    ko: "들은 얘기예요.",
    en: "That's just what I ___.",
    accept: ["heard"],
    hint: "듣다의 과거형",
    note: "책임을 지지 않고 전할 때 씁니다."
  },
  {
    id: "daily-opinion-152",
    category: "daily-opinion",
    ko: "소문일 뿐이에요.",
    en: "It's just a ___.",
    accept: ["rumor", "rumour"],
    hint: "떠도는 이야기를 뜻하는 명사",
    note: "영국에서는 rumour로 적습니다."
  },
  {
    id: "daily-opinion-153",
    category: "daily-opinion",
    ko: "믿기 어렵네요.",
    en: "I find that hard to ___.",
    accept: ["believe"],
    hint: "믿는다는 뜻의 동사",
    note: "I find that hard to believe는 대놓고 부정하지 않으면서 의심을 드러냅니다."
  },
  {
    id: "daily-opinion-154",
    category: "daily-opinion",
    ko: "정말요?",
    en: "___ really?",
    accept: ["Oh"],
    hint: "놀람을 나타내는 짧은 감탄사",
    note: "Oh really?는 어조에 따라 놀람도 되고 빈정거림도 됩니다."
  },
  {
    id: "daily-opinion-155",
    category: "daily-opinion",
    ko: "설마요.",
    en: "___ way.",
    accept: ["No"],
    hint: "부정을 나타내는 짧은 말",
    note: "No way는 놀람과 부정을 함께 나타냅니다."
  },
  {
    id: "daily-opinion-156",
    category: "daily-opinion",
    ko: "농담이시죠?",
    en: "You've got to be ___.",
    accept: ["kidding"],
    hint: "농담한다는 뜻의 -ing형",
    note: "You're kidding me는 믿기지 않을 때 씁니다."
  },
  {
    id: "daily-opinion-157",
    category: "daily-opinion",
    ko: "진짜 그럴 줄 몰랐어요.",
    en: "I'm genuinely ___.",
    accept: ["shocked"],
    hint: "크게 놀랐다는 뜻의 형용사",
    note: "genuinely는 '정말로'라는 뜻을 더합니다."
  },
  {
    id: "daily-opinion-158",
    category: "daily-opinion",
    ko: "말문이 막히네요.",
    en: "I'm ___.",
    accept: ["speechless"],
    hint: "말이 안 나온다는 뜻의 형용사",
    note: "speech에 -less를 붙여 만든 말입니다."
  },
  {
    id: "daily-opinion-159",
    category: "daily-opinion",
    ko: "어이가 없네요.",
    en: "That's ___.",
    accept: ["unbelievable"],
    hint: "믿을 수 없다는 뜻의 형용사",
    note: "좋은 뜻으로도 나쁜 뜻으로도 씁니다. 어조로 갈립니다."
  },
  {
    id: "daily-opinion-160",
    category: "daily-opinion",
    ko: "화가 나요.",
    en: "It ___ me off.",
    accept: ["ticks"],
    hint: "시계 소리를 뜻하는 낱말이 off와 붙으면 짜증나게 한다는 뜻이 됩니다",
    note: "tick someone off는 화나게 한다는 뜻입니다. 심한 말은 아닙니다."
  },
  {
    id: "daily-opinion-161",
    category: "daily-opinion",
    ko: "참기 힘들어요.",
    en: "I can't ___ it anymore.",
    accept: ["stand", "take"],
    hint: "견딘다는 뜻의 동사",
    note: "can't stand는 도저히 못 견디겠다는 뜻입니다."
  },
  {
    id: "daily-opinion-162",
    category: "daily-opinion",
    ko: "진정하세요.",
    en: "___ down.",
    accept: ["Calm"],
    hint: "가라앉힌다는 뜻의 동사",
    note: "화난 사람에게 이 말을 하면 오히려 더 화낼 수 있습니다."
  },
  {
    id: "daily-opinion-163",
    category: "daily-opinion",
    ko: "한숨 돌리고 얘기해요.",
    en: "Let's take a ___.",
    accept: ["breather"],
    hint: "잠깐 숨 돌리는 시간",
    note: "take a breather는 잠시 쉬어간다는 뜻입니다."
  },
  {
    id: "daily-opinion-164",
    category: "daily-opinion",
    ko: "그 얘긴 나중에 해요.",
    en: "Let's ___ that for later.",
    accept: ["save"],
    hint: "남겨둔다는 뜻의 동사",
    note: "save it for later는 나중으로 미루자는 뜻입니다."
  },
  {
    id: "daily-opinion-165",
    category: "daily-opinion",
    ko: "이 얘긴 그만하죠.",
    en: "Let's ___ the subject.",
    accept: ["change", "drop"],
    hint: "바꾸거나 그만둔다는 뜻의 동사",
    note: "drop the subject는 더 이상 말하지 말자는 뜻입니다."
  },
  {
    id: "daily-opinion-166",
    category: "daily-opinion",
    ko: "제가 예민했네요.",
    en: "I was being too ___.",
    accept: ["sensitive"],
    hint: "쉽게 상처받는다는 뜻의 형용사",
    note: "was being은 그때 그렇게 굴었다는 뜻입니다."
  },
  {
    id: "daily-opinion-167",
    category: "daily-opinion",
    ko: "제가 지나쳤어요.",
    en: "I ___.",
    accept: ["overreacted"],
    hint: "지나치게 반응하다의 과거형",
    note: "over-를 붙이면 '지나치게'라는 뜻이 더해집니다."
  },
  {
    id: "daily-opinion-168",
    category: "daily-opinion",
    ko: "속이 후련해요.",
    en: "That's a load off my ___.",
    accept: ["chest"],
    hint: "몸의 앞쪽 윗부분",
    note: "get something off one's chest는 담아둔 말을 털어놓는다는 뜻입니다."
  },
  {
    id: "daily-opinion-169",
    category: "daily-opinion",
    ko: "말하고 나니 낫네요.",
    en: "I feel better now that I ___ it.",
    accept: ["said"],
    hint: "말하다의 과거형",
    note: "now that은 '~하고 나니'라는 뜻입니다."
  },
  {
    id: "daily-opinion-170",
    category: "daily-opinion",
    ko: "고민이 좀 있어요.",
    en: "Something's been ___ me.",
    accept: ["bugging", "eating"],
    hint: "신경 쓰이게 한다는 뜻의 -ing형",
    note: "bug someone은 계속 거슬리게 한다는 뜻입니다."
  },
  {
    id: "daily-opinion-171",
    category: "daily-opinion",
    ko: "밤에 잠이 안 와요.",
    en: "It's keeping me ___ at night.",
    accept: ["up"],
    hint: "깨어 있다는 뜻을 만드는 말",
    note: "keep someone up은 잠 못 들게 한다는 뜻입니다."
  },
  {
    id: "daily-opinion-172",
    category: "daily-opinion",
    ko: "스트레스가 심해요.",
    en: "I'm under a lot of ___.",
    accept: ["stress"],
    hint: "마음을 짓누르는 부담",
    note: "under stress는 압박을 받고 있다는 뜻입니다."
  },
  {
    id: "daily-opinion-173",
    category: "daily-opinion",
    ko: "번아웃이 온 것 같아요.",
    en: "I think I'm ___ out.",
    accept: ["burning"],
    hint: "타다의 -ing형",
    note: "burn out은 다 타버렸다는 말에서 온 표현입니다."
  },
  {
    id: "daily-opinion-174",
    category: "daily-opinion",
    ko: "쉬어야 할 것 같아요.",
    en: "I need to take some time ___.",
    accept: ["off"],
    hint: "일에서 벗어나 있다는 뜻을 만드는 말",
    note: "take time off는 일에서 잠시 벗어난다는 뜻입니다."
  },
  {
    id: "daily-opinion-175",
    category: "daily-opinion",
    ko: "요즘 의욕이 없어요.",
    en: "I've lost my ___.",
    accept: ["motivation"],
    hint: "하고 싶게 만드는 마음",
    note: "lose motivation은 의욕을 잃었다는 뜻입니다."
  },
  {
    id: "daily-opinion-176",
    category: "daily-opinion",
    ko: "다시 힘을 내볼게요.",
    en: "I'll ___ myself together.",
    accept: ["pull"],
    hint: "당긴다는 뜻의 동사",
    note: "pull oneself together는 마음을 다잡는다는 뜻입니다."
  },
  {
    id: "daily-opinion-177",
    category: "daily-opinion",
    ko: "잘될 거예요.",
    en: "Everything will turn out ___.",
    accept: ["fine", "okay", "alright"],
    hint: "괜찮다는 뜻의 형용사",
    note: "turn out 뒤에는 결과를 나타내는 말이 옵니다. turn out fine처럼 씁니다."
  },
  {
    id: "daily-opinion-178",
    category: "daily-opinion",
    ko: "너무 걱정 마세요.",
    en: "Try not to stress ___ it.",
    accept: ["over"],
    hint: "'~에 대해'를 뜻하는 전치사",
    note: "stress는 명사와 동사가 같은 꼴입니다."
  },
  {
    id: "daily-opinion-179",
    category: "daily-opinion",
    ko: "생각보다 별거 아닐 거예요.",
    en: "It's probably not as bad as it ___.",
    accept: ["seems"],
    hint: "~처럼 보인다는 뜻의 동사",
    note: "as ... as it seems는 '보이는 만큼'이라는 뜻입니다."
  },
  {
    id: "daily-opinion-180",
    category: "daily-opinion",
    ko: "긍정적으로 봐요.",
    en: "Look on the ___ side.",
    accept: ["bright"],
    hint: "밝다는 뜻의 형용사",
    note: "look on the bright side는 좋은 쪽을 보자는 뜻입니다."
  },
  {
    id: "daily-opinion-181",
    category: "daily-opinion",
    ko: "그래도 다행이에요.",
    en: "At least that's ___.",
    accept: ["something"],
    hint: "'무언가'를 뜻하는 말",
    note: "At least that's something은 그나마 건진 게 있다는 뜻입니다."
  },
  {
    id: "daily-opinion-182",
    category: "daily-opinion",
    ko: "그럴 만한 이유가 있겠죠.",
    en: "There must be a ___.",
    accept: ["reason"],
    hint: "까닭을 뜻하는 명사",
    note: "상대를 함부로 판단하지 않을 때 쓰는 말입니다."
  },
  {
    id: "daily-opinion-183",
    category: "daily-opinion",
    ko: "제가 뭐라 할 처지는 아니죠.",
    en: "Who am I to ___?",
    accept: ["judge"],
    hint: "옳고 그름을 가른다는 뜻의 동사",
    note: "Who am I to judge?는 나도 남 말 할 처지가 아니라는 뜻입니다."
  },
  {
    id: "daily-opinion-184",
    category: "daily-opinion",
    ko: "각자 사정이 있는 거죠.",
    en: "Everyone has their own ___.",
    accept: ["reasons"],
    hint: "까닭을 뜻하는 복수 명사",
    note: "own을 붙이면 '저마다의'라는 뜻이 됩니다."
  },
  {
    id: "daily-opinion-185",
    category: "daily-opinion",
    ko: "취향은 다 다르니까요.",
    en: "To each their ___.",
    accept: ["own"],
    hint: "자기만의 것을 뜻하는 말",
    note: "To each their own은 사람마다 취향이 다르다는 뜻의 관용구입니다."
  },
  {
    id: "daily-opinion-186",
    category: "daily-opinion",
    ko: "저랑은 안 맞아요.",
    en: "It's just not for ___.",
    accept: ["me"],
    hint: "'나'에 해당하는 목적어 자리의 말",
    note: "not for me는 나쁘다기보다 나와 안 맞는다는 뜻입니다."
  },
  {
    id: "daily-opinion-187",
    category: "daily-opinion",
    ko: "생각보다 훨씬 좋았어요.",
    en: "It ___ my expectations.",
    accept: ["exceeded"],
    hint: "넘어선다는 뜻의 과거형",
    note: "exceed expectations는 기대를 뛰어넘었다는 뜻입니다."
  },
  {
    id: "daily-opinion-188",
    category: "daily-opinion",
    ko: "제 기대에는 못 미쳤어요.",
    en: "It didn't ___ up to the hype.",
    accept: ["live"],
    hint: "산다는 뜻의 동사. up to와 붙어 기대에 부응한다는 뜻이 됩니다",
    note: "hype는 실제보다 부풀려진 기대를 말합니다."
  },
  {
    id: "daily-opinion-189",
    category: "daily-opinion",
    ko: "괜히 기대했어요.",
    en: "I got my ___ up for nothing.",
    accept: ["hopes"],
    hint: "바람을 뜻하는 복수 명사",
    note: "get one's hopes up은 기대를 부풀린다는 뜻입니다."
  },
  {
    id: "daily-opinion-190",
    category: "daily-opinion",
    ko: "다음엔 더 잘하면 되죠.",
    en: "There's always ___ time.",
    accept: ["next"],
    hint: "이번 다음이라는 뜻의 말",
    note: "실패한 사람을 다독일 때 쓰는 말입니다."
  },
  {
    id: "daily-opinion-191",
    category: "daily-opinion",
    ko: "배운 게 있으니 됐어요.",
    en: "At ___ I learned something.",
    accept: ["least"],
    hint: "'적어도'를 만드는 말",
    note: "영국에서는 learnt를 더 자주 씁니다."
  },
  {
    id: "daily-opinion-192",
    category: "daily-opinion",
    ko: "후회는 안 해요.",
    en: "I don't ___ it.",
    accept: ["regret"],
    hint: "뉘우친다는 뜻의 동사",
    note: "regret 뒤에 -ing가 오면 이미 한 일을 뉘우친다는 뜻입니다."
  },
  {
    id: "daily-opinion-193",
    category: "daily-opinion",
    ko: "제 선택이었으니까요.",
    en: "It was my ___.",
    accept: ["choice", "call"],
    hint: "고른 것을 뜻하는 명사",
    note: "my call은 내가 정했다는 뜻입니다."
  },
  {
    id: "daily-opinion-194",
    category: "daily-opinion",
    ko: "책임은 제가 질게요.",
    en: "I'll take ___ for it.",
    accept: ["responsibility"],
    hint: "맡아 감당해야 할 몫",
    note: "take responsibility는 책임을 진다는 뜻입니다."
  },
  {
    id: "daily-opinion-195",
    category: "daily-opinion",
    ko: "제가 처리했어야 했는데요.",
    en: "I should have ___ it.",
    accept: ["handled"],
    hint: "다루다의 과거분사",
    note: "should have + 과거분사는 하지 못한 일에 대한 아쉬움입니다."
  },
  {
    id: "daily-opinion-196",
    category: "daily-opinion",
    ko: "다음엔 미리 말씀드릴게요.",
    en: "I'll give you a ___ next time.",
    accept: ["heads-up", "headsup"],
    hint: "미리 알려주는 것을 뜻하는 명사",
    note: "give a heads-up은 미리 귀띔한다는 뜻입니다."
  },
  {
    id: "daily-opinion-197",
    category: "daily-opinion",
    ko: "이번 일로 많이 배웠어요.",
    en: "It was a good ___ for me.",
    accept: ["lesson"],
    hint: "배움을 뜻하는 명사",
    note: "a good lesson은 값진 교훈이라는 뜻입니다."
  },
  {
    id: "daily-opinion-198",
    category: "daily-opinion",
    ko: "다시는 안 그럴 거예요.",
    en: "Never ___.",
    accept: ["again"],
    hint: "다시라는 뜻의 말",
    note: "Never again은 두 번 다시 하지 않겠다는 짧고 단호한 다짐입니다."
  },
  {
    id: "daily-opinion-199",
    category: "daily-opinion",
    ko: "덕분에 마음이 편해졌어요.",
    en: "That takes a ___ off my mind.",
    accept: ["worry"],
    hint: "걱정을 뜻하는 명사",
    note: "take a worry off one's mind는 걱정을 덜어준다는 뜻입니다."
  },
  {
    id: "daily-opinion-200",
    category: "daily-opinion",
    ko: "얘기 들어주셔서 감사해요.",
    en: "Thanks for ___.",
    accept: ["listening"],
    hint: "귀 기울인다는 뜻의 -ing형",
    note: "hear는 그냥 들리는 것, listen은 귀 기울여 듣는 것입니다."
  },
  {
    id: "travel-airport-101",
    category: "travel-airport",
    ko: "탑승 수속은 언제까지 해야 하나요?",
    en: "What's the check-in ___?",
    accept: ["deadline", "cutoff"],
    hint: "정해진 마감 시각을 뜻하는 명사",
    note: "보통 출발 한 시간 전에 마감합니다."
  },
  {
    id: "travel-airport-102",
    category: "travel-airport",
    ko: "터미널이 어디인가요?",
    en: "Which ___ am I departing from?",
    accept: ["terminal"],
    hint: "공항에서 탑승동을 가리키는 말",
    note: "큰 공항은 터미널이 여러 개라 미리 확인해야 합니다."
  },
  {
    id: "travel-airport-103",
    category: "travel-airport",
    ko: "자동 체크인 기계는 어디 있나요?",
    en: "Where are the check-in ___?",
    accept: ["kiosks", "machines"],
    hint: "혼자 조작하는 작은 기계",
    note: "self-check-in kiosk라고 부릅니다."
  },
  {
    id: "travel-airport-104",
    category: "travel-airport",
    ko: "예약 번호가 여기 있어요.",
    en: "Here's my ___ number.",
    accept: ["booking", "confirmation"],
    hint: "예약을 확인하는 번호",
    note: "booking reference나 PNR이라고도 합니다."
  },
  {
    id: "travel-airport-105",
    category: "travel-airport",
    ko: "여권 번호를 입력해야 하나요?",
    en: "Do I need to ___ my passport number?",
    accept: ["enter"],
    hint: "적어 넣는다는 뜻의 동사",
    note: "기계 화면에서 자주 나오는 말입니다."
  },
  {
    id: "travel-airport-106",
    category: "travel-airport",
    ko: "짐이 두 개예요.",
    en: "I have two ___ to check.",
    accept: ["suitcases"],
    hint: "옷을 넣어 다니는 여행 가방",
    note: "부치는 짐은 checked baggage입니다."
  },
  {
    id: "travel-airport-107",
    category: "travel-airport",
    ko: "이 가방 무게 좀 재주시겠어요?",
    en: "Could you ___ this bag?",
    accept: ["weigh"],
    hint: "무게를 잰다는 뜻의 동사",
    note: "무게 초과면 추가 요금을 내야 합니다."
  },
  {
    id: "travel-airport-108",
    category: "travel-airport",
    ko: "몇 킬로까지 되나요?",
    en: "What's the weight ___ per bag?",
    accept: ["allowance"],
    hint: "허용되는 양을 뜻하는 명사",
    note: "항공사마다 다르니 미리 확인해야 합니다."
  },
  {
    id: "travel-airport-109",
    category: "travel-airport",
    ko: "여기서 짐을 다시 싸도 될까요?",
    en: "Can I ___ my bag here?",
    accept: ["repack"],
    hint: "다시 싼다는 뜻의 동사",
    note: "무게가 넘으면 그 자리에서 짐을 옮겨 담기도 합니다."
  },
  {
    id: "travel-airport-110",
    category: "travel-airport",
    ko: "이 가방은 기내 반입 되나요?",
    en: "Is this bag allowed on ___?",
    accept: ["board"],
    hint: "배나 비행기 안을 뜻하는 말",
    note: "크기와 무게 모두 기준이 있습니다."
  },
  {
    id: "travel-airport-111",
    category: "travel-airport",
    ko: "보조 배터리는 기내에 들고 타야 하나요?",
    en: "Do ___ have to go in my carry-on bag?",
    accept: ["batteries"],
    hint: "전기를 담아두는 작은 통을 뜻하는 복수 명사",
    note: "보조 배터리는 부치는 짐에 넣을 수 없습니다."
  },
  {
    id: "travel-airport-112",
    category: "travel-airport",
    ko: "액체는 얼마까지 되나요?",
    en: "How much ___ can I bring?",
    accept: ["liquid"],
    hint: "물처럼 흐르는 것을 뜻하는 명사",
    note: "보통 100밀리리터짜리 용기까지만 됩니다."
  },
  {
    id: "travel-airport-113",
    category: "travel-airport",
    ko: "이건 버려야 하나요?",
    en: "Do I have to ___ this away?",
    accept: ["throw"],
    hint: "던진다는 뜻의 동사. away와 붙어 버린다는 뜻이 됩니다",
    note: "보안 검색에서 기준을 넘는 액체는 버려야 합니다."
  },
  {
    id: "travel-airport-114",
    category: "travel-airport",
    ko: "가방에 자물쇠가 달려 있어요.",
    en: "My bag has a ___ on it.",
    accept: ["padlock"],
    hint: "고리에 걸어 잠그는 자물쇠",
    note: "미국행 짐은 TSA 인증 자물쇠를 써야 합니다."
  },
  {
    id: "travel-airport-115",
    category: "travel-airport",
    ko: "안에 깨지기 쉬운 게 있어요.",
    en: "There's something ___ inside.",
    accept: ["breakable"],
    hint: "깨질 수 있다는 뜻의 형용사",
    note: "미리 말하면 fragile 표를 붙여줍니다."
  },
  {
    id: "travel-airport-116",
    category: "travel-airport",
    ko: "우선 하차 표 붙여주시겠어요?",
    en: "Could you add a ___ tag?",
    accept: ["priority"],
    hint: "먼저 처리한다는 뜻의 명사",
    note: "priority tag가 붙으면 짐이 먼저 나옵니다."
  },
  {
    id: "travel-airport-117",
    category: "travel-airport",
    ko: "최종 목적지까지 부쳐주세요.",
    en: "Please check it ___ to my final destination.",
    accept: ["through"],
    hint: "끝까지 통과한다는 뜻의 말",
    note: "check through는 갈아타도 짐을 다시 찾지 않는다는 뜻입니다."
  },
  {
    id: "travel-airport-118",
    category: "travel-airport",
    ko: "탑승권 두 장 다 주시겠어요?",
    en: "Could I get ___ boarding passes?",
    accept: ["both"],
    hint: "둘 다를 뜻하는 말",
    note: "환승이 있으면 두 장을 함께 받습니다."
  },
  {
    id: "travel-airport-119",
    category: "travel-airport",
    ko: "좌석 배정은 어떻게 되나요?",
    en: "How is seating ___?",
    accept: ["assigned"],
    hint: "정해서 나눠준다는 뜻의 과거분사",
    note: "저가 항공은 자리를 따로 사야 하는 경우가 많습니다."
  },
  {
    id: "travel-airport-120",
    category: "travel-airport",
    ko: "앞쪽 자리로 주실 수 있나요?",
    en: "Could I get a seat near the ___?",
    accept: ["front"],
    hint: "앞쪽을 뜻하는 명사",
    note: "뒤쪽은 back이나 rear입니다."
  },
  {
    id: "travel-airport-121",
    category: "travel-airport",
    ko: "다리 뻗을 공간이 넓은 자리 있나요?",
    en: "Any seats with extra ___?",
    accept: ["legroom"],
    hint: "다리를 놓을 자리를 뜻하는 명사",
    note: "비상구 좌석은 legroom이 넓습니다."
  },
  {
    id: "travel-airport-122",
    category: "travel-airport",
    ko: "화장실 근처는 피하고 싶어요.",
    en: "I'd rather not sit ___ the lavatory.",
    accept: ["near", "by"],
    hint: "가까이를 뜻하는 전치사",
    note: "I'd rather not은 부드러운 거절입니다."
  },
  {
    id: "travel-airport-123",
    category: "travel-airport",
    ko: "일행이 두 명이에요.",
    en: "There are two of ___.",
    accept: ["us"],
    hint: "'우리'에 해당하는 목적어 자리의 말",
    note: "함께 앉고 싶다면 이 말을 먼저 꺼냅니다."
  },
  {
    id: "travel-airport-124",
    category: "travel-airport",
    ko: "탑승 시각이 몇 시인가요?",
    en: "What time do we ___ boarding?",
    accept: ["start", "begin"],
    hint: "시작한다는 뜻의 동사",
    note: "탑승은 보통 출발 40분 전에 시작합니다."
  },
  {
    id: "travel-airport-125",
    category: "travel-airport",
    ko: "몇 번째 그룹이에요?",
    en: "Which boarding ___ am I in?",
    accept: ["group", "zone"],
    hint: "차례를 나눈 묶음",
    note: "탑승권에 Group 3처럼 찍혀 있습니다."
  },
  {
    id: "travel-airport-126",
    category: "travel-airport",
    ko: "라운지를 쓸 수 있나요?",
    en: "Do I have ___ to the lounge?",
    accept: ["access"],
    hint: "들어갈 수 있는 자격",
    note: "카드 혜택으로 쓸 수 있는 경우가 많습니다."
  },
  {
    id: "travel-airport-127",
    category: "travel-airport",
    ko: "충전할 곳이 어디인가요?",
    en: "Where can I ___ my phone?",
    accept: ["charge"],
    hint: "배터리를 채운다는 뜻의 동사",
    note: "charging station이라고 적힌 곳을 찾으면 됩니다."
  },
  {
    id: "travel-airport-128",
    category: "travel-airport",
    ko: "공항 와이파이는 무료인가요?",
    en: "Is the airport Wi-Fi ___?",
    accept: ["free"],
    hint: "돈을 안 낸다는 뜻의 형용사",
    note: "시간 제한이 있는 곳도 있습니다."
  },
  {
    id: "travel-airport-129",
    category: "travel-airport",
    ko: "게이트까지 얼마나 걸리나요?",
    en: "How long does it take to ___ the gate?",
    accept: ["reach"],
    hint: "닿는다는 뜻의 동사",
    note: "큰 공항은 게이트까지 20분 넘게 걸리기도 합니다."
  },
  {
    id: "travel-airport-130",
    category: "travel-airport",
    ko: "셔틀 트레인을 타야 하나요?",
    en: "Do I need to take the ___ train?",
    accept: ["shuttle"],
    hint: "짧은 구간을 오가는 것",
    note: "터미널 사이를 오가는 무료 열차입니다."
  },
  {
    id: "travel-airport-131",
    category: "travel-airport",
    ko: "출발 안내 화면이 어디 있나요?",
    en: "Where's the departure ___?",
    accept: ["board", "screen"],
    hint: "정보를 띄워 보여주는 판",
    note: "departures board를 보면 게이트를 알 수 있습니다."
  },
  {
    id: "travel-airport-132",
    category: "travel-airport",
    ko: "탑승 안내 방송이 나왔나요?",
    en: "Has the boarding ___ been made?",
    accept: ["announcement"],
    hint: "여러 사람에게 알리는 말",
    note: "공항에서 나오는 방송을 announcement라고 합니다."
  },
  {
    id: "travel-airport-133",
    category: "travel-airport",
    ko: "마지막 안내 방송이었나요?",
    en: "Was that the ___ call?",
    accept: ["final", "last"],
    hint: "맨 나중이라는 뜻의 형용사",
    note: "final call이 나오면 서둘러 가야 합니다."
  },
  {
    id: "travel-airport-134",
    category: "travel-airport",
    ko: "제 이름이 불렸어요.",
    en: "They just ___ my name.",
    accept: ["called"],
    hint: "부르다의 과거형",
    note: "이름이 불리면 게이트로 가야 합니다."
  },
  {
    id: "travel-airport-135",
    category: "travel-airport",
    ko: "좌석 등급을 올릴 수 있나요?",
    en: "Can I ___ to business class?",
    accept: ["upgrade"],
    hint: "등급을 올린다는 뜻의 동사",
    note: "빈 자리가 있으면 돈을 더 내고 올릴 수 있습니다."
  },
  {
    id: "travel-airport-136",
    category: "travel-airport",
    ko: "마일리지로 결제할 수 있나요?",
    en: "Can I pay with ___?",
    accept: ["miles", "points"],
    hint: "탄 거리만큼 쌓이는 것",
    note: "항공사에 따라 miles나 points라고 부릅니다."
  },
  {
    id: "travel-airport-137",
    category: "travel-airport",
    ko: "제 마일리지 적립해 주세요.",
    en: "Could you add this to my ___ account?",
    accept: ["mileage", "frequent flyer"],
    hint: "마일리지를 모아두는 회원 제도",
    note: "탑승 전에 말해야 적립됩니다."
  },
  {
    id: "travel-airport-138",
    category: "travel-airport",
    ko: "휠체어 도움을 받을 수 있나요?",
    en: "Could I request ___ assistance?",
    accept: ["wheelchair"],
    hint: "바퀴 달린 의자",
    note: "미리 신청하면 게이트까지 안내해 줍니다."
  },
  {
    id: "travel-airport-139",
    category: "travel-airport",
    ko: "유아 동반석이 있나요?",
    en: "Do you have seats for ___ with infants?",
    accept: ["families"],
    hint: "한 집안 사람들을 뜻하는 복수 명사",
    note: "아기 요람을 달 수 있는 자리를 bassinet seat이라고 합니다."
  },
  {
    id: "travel-airport-140",
    category: "travel-airport",
    ko: "유모차는 어디에 맡기나요?",
    en: "Where do I leave the ___?",
    accept: ["stroller", "pram"],
    hint: "아기를 태워 미는 것",
    note: "미국은 stroller, 영국은 pram이나 pushchair라고 합니다."
  },
  {
    id: "travel-airport-141",
    category: "travel-airport",
    ko: "보안 검색이 오래 걸리나요?",
    en: "Is the security line ___?",
    accept: ["long"],
    hint: "줄이 길다는 뜻의 형용사",
    note: "성수기에는 한 시간 넘게 걸리기도 합니다."
  },
  {
    id: "travel-airport-142",
    category: "travel-airport",
    ko: "벨트를 풀어야 하나요?",
    en: "Do I need to take off my ___?",
    accept: ["belt"],
    hint: "허리에 매는 띠",
    note: "금속이 있으면 소리가 울립니다."
  },
  {
    id: "travel-airport-143",
    category: "travel-airport",
    ko: "시계도 벗어야 하나요?",
    en: "What about my ___?",
    accept: ["watch"],
    hint: "손목에 차는 시계",
    note: "What about은 '이건 어떤가요'라고 이어 물을 때 씁니다."
  },
  {
    id: "travel-airport-144",
    category: "travel-airport",
    ko: "이 통에 넣으면 되나요?",
    en: "Do these go in the ___?",
    accept: ["tray", "bin"],
    hint: "물건을 담는 얕은 그릇",
    note: "보안 검색대에서 쓰는 플라스틱 통입니다."
  },
  {
    id: "travel-airport-145",
    category: "travel-airport",
    ko: "다시 검사해야 한다고 하네요.",
    en: "They need to ___ my bag again.",
    accept: ["scan"],
    hint: "기계로 훑어본다는 뜻의 동사",
    note: "의심스러운 물건이 보이면 다시 봅니다."
  },
  {
    id: "travel-airport-146",
    category: "travel-airport",
    ko: "가방을 열어봐도 될까요?",
    en: "May I ___ your bag?",
    accept: ["search", "inspect"],
    hint: "속을 살펴본다는 뜻의 동사",
    note: "보안 요원이 물어보는 말입니다."
  },
  {
    id: "travel-airport-147",
    category: "travel-airport",
    ko: "이건 뭔가요?",
    en: "What's this ___?",
    accept: ["item"],
    hint: "물건 하나를 뜻하는 명사",
    note: "보안 검색에서 걸린 물건을 가리킬 때 씁니다."
  },
  {
    id: "travel-airport-148",
    category: "travel-airport",
    ko: "약이에요, 처방전도 있어요.",
    en: "It's medication, and I have the ___.",
    accept: ["prescription"],
    hint: "의사가 써준 약 지시서",
    note: "약은 원래 통에 담아 가는 것이 안전합니다."
  },
  {
    id: "travel-airport-149",
    category: "travel-airport",
    ko: "이제 가셔도 됩니다.",
    en: "You're all ___.",
    accept: ["set", "clear"],
    hint: "다 됐다는 뜻의 말",
    note: "You're all set은 절차가 끝났다는 뜻입니다."
  },
  {
    id: "travel-airport-150",
    category: "travel-airport",
    ko: "제 물건 하나가 안 보여요.",
    en: "One of my things is ___.",
    accept: ["missing"],
    hint: "없어졌다는 뜻의 형용사",
    note: "보안 검색대에서 물건을 두고 오기 쉽습니다."
  },
  {
    id: "travel-airport-151",
    category: "travel-airport",
    ko: "출국 심사는 어디서 하나요?",
    en: "Where do I go through passport ___?",
    accept: ["control"],
    hint: "살펴 관리한다는 뜻의 명사",
    note: "영국에서는 passport control, 미국에서는 immigration이라고 합니다."
  },
  {
    id: "travel-airport-152",
    category: "travel-airport",
    ko: "이 줄이 외국인 줄인가요?",
    en: "Is this the line for ___?",
    accept: ["visitors", "foreigners"],
    hint: "그 나라 사람이 아닌 이들을 뜻하는 복수 명사",
    note: "공항 안내판에는 보통 Visitors나 All Passports라고 적혀 있습니다."
  },
  {
    id: "travel-airport-153",
    category: "travel-airport",
    ko: "직업이 무엇입니까?",
    en: "What's your ___?",
    accept: ["occupation"],
    hint: "직업을 뜻하는 격식 있는 명사",
    note: "입국 신고서에 자주 나오는 항목입니다."
  },
  {
    id: "travel-airport-154",
    category: "travel-airport",
    ko: "혼자 오셨습니까?",
    en: "Are you traveling ___?",
    accept: ["alone"],
    hint: "홀로라는 뜻의 말",
    note: "입국 심사에서 자주 묻는 질문입니다."
  },
  {
    id: "travel-airport-155",
    category: "travel-airport",
    ko: "일행이 있습니다.",
    en: "I'm traveling with a ___.",
    accept: ["colleague", "companion"],
    hint: "함께 다니는 사람",
    note: "동료면 colleague, 그냥 동행이면 companion입니다."
  },
  {
    id: "travel-airport-156",
    category: "travel-airport",
    ko: "전에 와보신 적 있습니까?",
    en: "Have you been here ___?",
    accept: ["before"],
    hint: "전에라는 뜻의 말",
    note: "입국 심사관이 자주 던지는 질문입니다."
  },
  {
    id: "travel-airport-157",
    category: "travel-airport",
    ko: "출장차 왔습니다.",
    en: "I'm traveling on ___.",
    accept: ["business"],
    hint: "일을 뜻하는 명사",
    note: "관광이면 on vacation, 일이면 on business입니다."
  },
  {
    id: "travel-airport-158",
    category: "travel-airport",
    ko: "회의에 참석하러 왔습니다.",
    en: "I'm attending a ___.",
    accept: ["conference"],
    hint: "여러 사람이 모이는 큰 회의",
    note: "작은 회의는 meeting이라고 합니다."
  },
  {
    id: "travel-airport-159",
    category: "travel-airport",
    ko: "친척을 만나러 왔습니다.",
    en: "I'm here to visit ___.",
    accept: ["relatives"],
    hint: "친척을 뜻하는 복수 명사",
    note: "family라고 해도 통합니다."
  },
  {
    id: "travel-airport-160",
    category: "travel-airport",
    ko: "돌아가는 표를 보여드릴까요?",
    en: "Would you like to see my ___ ticket?",
    accept: ["return"],
    hint: "돌아온다는 뜻의 말",
    note: "돌아가는 표가 없으면 입국이 거절될 수 있습니다."
  },
  {
    id: "travel-airport-161",
    category: "travel-airport",
    ko: "비자는 여기 있습니다.",
    en: "Here's my ___.",
    accept: ["visa"],
    hint: "입국을 허락하는 서류",
    note: "무비자로 들어가는 나라도 많습니다."
  },
  {
    id: "travel-airport-162",
    category: "travel-airport",
    ko: "전자 여행 허가를 받았습니다.",
    en: "I have an electronic travel ___.",
    accept: ["authorization", "authorisation"],
    hint: "허락을 뜻하는 명사",
    note: "미국은 ESTA, 캐나다는 eTA라고 부릅니다."
  },
  {
    id: "travel-airport-163",
    category: "travel-airport",
    ko: "숙소 주소를 적어야 하나요?",
    en: "Do I need to write down the ___?",
    accept: ["address"],
    hint: "집이나 건물이 있는 곳을 적은 것",
    note: "입국 신고서에 묵을 곳을 적어야 합니다."
  },
  {
    id: "travel-airport-164",
    category: "travel-airport",
    ko: "머무는 동안 호텔에 있을 겁니다.",
    en: "I'll be staying at a ___.",
    accept: ["hotel"],
    hint: "여행객이 묵는 곳",
    note: "친척 집이면 with my family라고 하면 됩니다."
  },
  {
    id: "travel-airport-165",
    category: "travel-airport",
    ko: "체류 기간은 이 주입니다.",
    en: "My ___ is two weeks.",
    accept: ["stay"],
    hint: "머무는 일을 뜻하는 명사",
    note: "동사와 명사가 같은 꼴입니다."
  },
  {
    id: "travel-airport-166",
    category: "travel-airport",
    ko: "지문을 채취하겠습니다.",
    en: "We need to take your ___.",
    accept: ["fingerprints"],
    hint: "손가락 끝에 있는 무늬",
    note: "요즘은 얼굴도 함께 찍습니다."
  },
  {
    id: "travel-airport-167",
    category: "travel-airport",
    ko: "안경을 벗어주세요.",
    en: "Please remove your ___.",
    accept: ["glasses"],
    hint: "눈에 쓰는 것",
    note: "얼굴을 찍을 때 벗으라고 합니다."
  },
  {
    id: "travel-airport-168",
    category: "travel-airport",
    ko: "모자를 벗어주세요.",
    en: "Please take off your ___.",
    accept: ["hat", "cap"],
    hint: "머리에 쓰는 것",
    note: "얼굴이 가려지면 확인이 안 됩니다."
  },
  {
    id: "travel-airport-169",
    category: "travel-airport",
    ko: "입국이 거절되었습니다.",
    en: "Entry has been ___.",
    accept: ["denied", "refused"],
    hint: "받아들이지 않았다는 뜻의 과거분사",
    note: "이유를 물어보고 항공사에 알려야 합니다."
  },
  {
    id: "travel-airport-170",
    category: "travel-airport",
    ko: "통역이 필요합니다.",
    en: "I need an ___.",
    accept: ["interpreter"],
    hint: "말을 옮겨주는 사람",
    note: "translator는 글, interpreter는 말을 옮깁니다."
  },
  {
    id: "travel-airport-171",
    category: "travel-airport",
    ko: "대사관에 연락하고 싶습니다.",
    en: "I'd like to contact my ___.",
    accept: ["embassy", "consulate"],
    hint: "다른 나라에 있는 자기 나라 공관",
    note: "큰 도시에는 consulate가 있습니다."
  },
  {
    id: "travel-airport-172",
    category: "travel-airport",
    ko: "수하물 벨트가 몇 번인가요?",
    en: "Which ___ is my luggage on?",
    accept: ["carousel", "belt"],
    hint: "짐이 돌아 나오는 둥근 장치",
    note: "carousel은 회전목마를 뜻하는 말에서 왔습니다."
  },
  {
    id: "travel-airport-173",
    category: "travel-airport",
    ko: "짐이 아직 안 나왔어요.",
    en: "My bag hasn't come ___ yet.",
    accept: ["out"],
    hint: "밖으로를 뜻하는 말",
    note: "come out은 벨트에서 나온다는 뜻입니다."
  },
  {
    id: "travel-airport-174",
    category: "travel-airport",
    ko: "제 것과 비슷한 가방이 많네요.",
    en: "A lot of bags look like ___.",
    accept: ["mine"],
    hint: "'내 것'을 뜻하는 소유대명사",
    note: "가방에 표를 달아두면 찾기 쉽습니다."
  },
  {
    id: "travel-airport-175",
    category: "travel-airport",
    ko: "누가 제 가방을 가져간 것 같아요.",
    en: "I think someone ___ my bag.",
    accept: ["took"],
    hint: "가져가다의 과거형",
    note: "비슷한 가방을 착각해 가져가는 일이 종종 있습니다."
  },
  {
    id: "travel-airport-176",
    category: "travel-airport",
    ko: "분실물 센터가 어디인가요?",
    en: "Where's ___ and found?",
    accept: ["lost"],
    hint: "잃다의 과거분사",
    note: "lost and found는 분실물 보관소입니다."
  },
  {
    id: "travel-airport-177",
    category: "travel-airport",
    ko: "여기 서류를 작성해 주세요.",
    en: "Please fill out this ___.",
    accept: ["form"],
    hint: "빈칸을 채워 넣는 종이",
    note: "분실 신고를 하면 접수 번호를 줍니다."
  },
  {
    id: "travel-airport-178",
    category: "travel-airport",
    ko: "찾으면 호텔로 보내주시나요?",
    en: "Will you ___ it to my hotel?",
    accept: ["deliver"],
    hint: "가져다준다는 뜻의 동사",
    note: "대부분 숙소까지 무료로 보내줍니다."
  },
  {
    id: "travel-airport-179",
    category: "travel-airport",
    ko: "생필품 살 돈을 받을 수 있나요?",
    en: "Can I get ___ for essentials?",
    accept: ["compensation", "reimbursement"],
    hint: "손해를 메워주는 돈",
    note: "짐이 늦어지면 세면도구 값을 받을 수 있습니다."
  },
  {
    id: "travel-airport-180",
    category: "travel-airport",
    ko: "세관 신고서는 어디에 내나요?",
    en: "Where do I ___ in the customs form?",
    accept: ["turn", "hand"],
    hint: "in과 붙어 서류를 제출한다는 뜻이 되는 동사",
    note: "turn in과 hand in 모두 서류를 낸다는 뜻입니다."
  },
  {
    id: "travel-airport-181",
    category: "travel-airport",
    ko: "선물로 가져온 겁니다.",
    en: "These are ___ for my family.",
    accept: ["gifts", "presents"],
    hint: "남에게 주려고 산 것",
    note: "선물도 금액이 크면 신고 대상이 됩니다."
  },
  {
    id: "travel-airport-182",
    category: "travel-airport",
    ko: "음식은 가지고 있지 않습니다.",
    en: "I'm not carrying any ___ products.",
    accept: ["food"],
    hint: "먹는 것을 뜻하는 명사",
    note: "고기와 과일은 대부분의 나라에서 금지됩니다."
  },
  {
    id: "travel-airport-183",
    category: "travel-airport",
    ko: "면세로 얼마까지 가져갈 수 있나요?",
    en: "How much can I bring in ___-free?",
    accept: ["duty"],
    hint: "물건에 붙는 세금을 뜻하는 명사",
    note: "술과 담배는 따로 정해진 양이 있습니다."
  },
  {
    id: "travel-airport-184",
    category: "travel-airport",
    ko: "세금을 내야 하나요?",
    en: "Do I have to pay ___ on this?",
    accept: ["duty", "tax"],
    hint: "물건에 붙는 세금",
    note: "한도를 넘으면 그 자리에서 냅니다."
  },
  {
    id: "travel-airport-185",
    category: "travel-airport",
    ko: "녹색 통로로 가면 되나요?",
    en: "Should I go through the ___ channel?",
    accept: ["green"],
    hint: "신호등에서 지나가도 좋다는 색",
    note: "신고할 것이 없으면 green, 있으면 red입니다."
  },
  {
    id: "travel-airport-186",
    category: "travel-airport",
    ko: "환승 시간이 빠듯해요.",
    en: "My connection is ___.",
    accept: ["tight"],
    hint: "여유가 없다는 뜻의 형용사",
    note: "환승 시간이 촉박하면 직원에게 미리 말합니다."
  },
  {
    id: "travel-airport-187",
    category: "travel-airport",
    ko: "다시 보안 검색을 받아야 하나요?",
    en: "Do I have to go through security ___?",
    accept: ["again"],
    hint: "다시라는 뜻의 말",
    note: "나라에 따라 환승할 때도 다시 검색합니다."
  },
  {
    id: "travel-airport-188",
    category: "travel-airport",
    ko: "환승 비자가 꼭 있어야 하나요?",
    en: "Is a transit visa ___?",
    accept: ["required", "necessary"],
    hint: "꼭 있어야 한다는 뜻의 형용사",
    note: "공항 밖으로 나가지 않아도 필요한 나라가 있습니다."
  },
  {
    id: "travel-airport-189",
    category: "travel-airport",
    ko: "다음 게이트까지 안내해 주시겠어요?",
    en: "Could you ___ me to my next gate?",
    accept: ["direct", "point"],
    hint: "길을 알려준다는 뜻의 동사",
    note: "직원에게 탑승권을 보여주면 알려줍니다."
  },
  {
    id: "travel-airport-190",
    category: "travel-airport",
    ko: "짐은 자동으로 넘어가나요?",
    en: "Does my luggage ___ automatically?",
    accept: ["transfer"],
    hint: "옮겨 간다는 뜻의 동사",
    note: "같은 항공사끼리는 대부분 자동으로 넘어갑니다."
  },
  {
    id: "travel-airport-191",
    category: "travel-airport",
    ko: "창문 덮개를 올려주세요.",
    en: "Please open your window ___.",
    accept: ["shade"],
    hint: "햇빛을 가리는 덮개",
    note: "이착륙 때는 창문 덮개를 올려두어야 합니다."
  },
  {
    id: "travel-airport-192",
    category: "travel-airport",
    ko: "테이블을 접어주세요.",
    en: "Please stow your tray ___.",
    accept: ["table"],
    hint: "앞좌석에 붙은 작은 판",
    note: "stow는 제자리에 넣어둔다는 뜻입니다."
  },
  {
    id: "travel-airport-193",
    category: "travel-airport",
    ko: "휴대폰을 비행기 모드로 해주세요.",
    en: "Please switch your phone to ___ mode.",
    accept: ["airplane", "flight"],
    hint: "하늘을 나는 것을 뜻하는 명사",
    note: "미국은 airplane mode, 영국은 flight mode라고 합니다."
  },
  {
    id: "travel-airport-194",
    category: "travel-airport",
    ko: "이어폰을 빼주시겠어요?",
    en: "Could you take out your ___?",
    accept: ["earphones"],
    hint: "귀에 꽂는 작은 소리 장치",
    note: "안내 방송을 들어야 할 때 부탁합니다."
  },
  {
    id: "travel-airport-195",
    category: "travel-airport",
    ko: "마실 것은 뭐가 있나요?",
    en: "What do you have to ___?",
    accept: ["drink"],
    hint: "마신다는 뜻의 동사",
    note: "기내에서는 대부분 무료입니다."
  },
  {
    id: "travel-airport-196",
    category: "travel-airport",
    ko: "커피 한 잔 주시겠어요?",
    en: "Could I get a ___ of coffee?",
    accept: ["cup"],
    hint: "손잡이가 달린 잔",
    note: "물은 a glass of water라고 합니다."
  },
  {
    id: "travel-airport-197",
    category: "travel-airport",
    ko: "이거 치워주시겠어요?",
    en: "Could you ___ this for me?",
    accept: ["clear"],
    hint: "치운다는 뜻의 동사",
    note: "다 먹은 그릇을 치워달라고 할 때 씁니다."
  },
  {
    id: "travel-airport-198",
    category: "travel-airport",
    ko: "담요 한 장 더 주시겠어요?",
    en: "Could I get one more ___?",
    accept: ["blanket"],
    hint: "몸을 덮는 천",
    note: "기내는 생각보다 춥습니다."
  },
  {
    id: "travel-airport-199",
    category: "travel-airport",
    ko: "입국 신고서를 한 장 더 주세요.",
    en: "Could I get another landing ___?",
    accept: ["card"],
    hint: "적어 내는 작은 종이",
    note: "잘못 적으면 새로 받아 다시 씁니다."
  },
  {
    id: "travel-airport-200",
    category: "travel-airport",
    ko: "편안한 비행이었습니다.",
    en: "It was a ___ flight.",
    accept: ["smooth", "comfortable"],
    hint: "흔들림 없이 순조로웠다는 뜻의 형용사",
    note: "내릴 때 승무원에게 건네면 좋은 인사가 됩니다."
  },
  {
    id: "travel-hotel-101",
    category: "travel-hotel",
    ko: "이름 철자를 알려드릴게요.",
    en: "Let me ___ my name for you.",
    accept: ["spell"],
    hint: "글자를 하나하나 말한다는 뜻의 동사",
    note: "이름이 길면 먼저 철자를 알려주는 것이 빠릅니다."
  },
  {
    id: "travel-hotel-102",
    category: "travel-hotel",
    ko: "예약 번호를 보여드릴까요?",
    en: "Would you like to see my ___ number?",
    accept: ["confirmation"],
    hint: "예약이 됐음을 알리는 것",
    note: "이메일로 받은 번호를 보여주면 됩니다."
  },
  {
    id: "travel-hotel-103",
    category: "travel-hotel",
    ko: "이 요금이 맞나요?",
    en: "Is this the ___ I booked?",
    accept: ["rate"],
    hint: "정해진 값을 뜻하는 명사",
    note: "예약할 때와 값이 다르면 바로 확인해야 합니다."
  },
  {
    id: "travel-hotel-104",
    category: "travel-hotel",
    ko: "조식이 포함된 요금으로 예약했어요.",
    en: "I booked the rate that ___ breakfast.",
    accept: ["includes"],
    hint: "포함한다는 뜻의 동사. 주어가 단수입니다",
    note: "예약 확인 메일을 보여주면 확실합니다."
  },
  {
    id: "travel-hotel-105",
    category: "travel-hotel",
    ko: "2박 예약했습니다.",
    en: "I booked it for two ___.",
    accept: ["nights"],
    hint: "잠자는 밤을 세는 단위",
    note: "숙박은 밤 수로 셉니다. 2박 3일은 two nights입니다."
  },
  {
    id: "travel-hotel-106",
    category: "travel-hotel",
    ko: "성인 두 명입니다.",
    en: "It's for two ___.",
    accept: ["adults"],
    hint: "다 자란 사람을 뜻하는 복수 명사",
    note: "아이는 children이나 kids로 따로 셉니다."
  },
  {
    id: "travel-hotel-107",
    category: "travel-hotel",
    ko: "여기 서명하면 되나요?",
    en: "Do I ___ here?",
    accept: ["sign"],
    hint: "이름을 적어 확인한다는 뜻의 동사",
    note: "체크인 서류에 서명을 요구하는 곳이 많습니다."
  },
  {
    id: "travel-hotel-108",
    category: "travel-hotel",
    ko: "짐 좀 잠깐 맡아주시겠어요?",
    en: "Could you ___ my bags for now?",
    accept: ["watch"],
    hint: "눈을 떼지 않고 본다는 뜻의 동사",
    note: "체크인 시간 전에 도착했을 때 부탁합니다."
  },
  {
    id: "travel-hotel-109",
    category: "travel-hotel",
    ko: "방이 준비되면 연락 주시겠어요?",
    en: "Could you ___ me when the room is ready?",
    accept: ["text", "call"],
    hint: "연락한다는 뜻의 동사",
    note: "번호를 남겨두면 준비되는 대로 알려줍니다."
  },
  {
    id: "travel-hotel-110",
    category: "travel-hotel",
    ko: "짐표를 주시겠어요?",
    en: "Could I get a luggage ___?",
    accept: ["ticket", "claim"],
    hint: "맡긴 짐을 찾을 때 내는 표",
    note: "이 표가 없으면 짐을 못 찾을 수 있습니다."
  },
  {
    id: "travel-hotel-111",
    category: "travel-hotel",
    ko: "방 번호는 알려주지 마세요.",
    en: "Please don't say my room number out ___.",
    accept: ["loud"],
    hint: "소리 내어라는 뜻을 만드는 말",
    note: "안전을 위해 방 번호는 종이에 적어 건네는 곳이 많습니다."
  },
  {
    id: "travel-hotel-112",
    category: "travel-hotel",
    ko: "몇 층인지 여쭤봐도 될까요?",
    en: "Which floor am I ___?",
    accept: ["on"],
    hint: "층을 말할 때 쓰는 전치사",
    note: "on the fifth floor처럼 씁니다."
  },
  {
    id: "travel-hotel-113",
    category: "travel-hotel",
    ko: "엘리베이터에 카드를 대야 하나요?",
    en: "Do I need to ___ my card in the elevator?",
    accept: ["tap", "scan"],
    hint: "카드를 대는 동작을 뜻하는 동사",
    note: "보안 때문에 카드가 있어야 층을 누를 수 있는 곳이 있습니다."
  },
  {
    id: "travel-hotel-114",
    category: "travel-hotel",
    ko: "방까지 안내해 드릴까요?",
    en: "Would you like me to ___ you to your room?",
    accept: ["show"],
    hint: "데려다준다는 뜻의 동사",
    note: "직원이 짐을 들고 안내해 주기도 합니다."
  },
  {
    id: "travel-hotel-115",
    category: "travel-hotel",
    ko: "이 방이 제가 예약한 방이 아닌데요.",
    en: "This isn't the room ___ I booked.",
    accept: ["type"],
    hint: "종류를 뜻하는 명사",
    note: "예약한 것과 다르면 바로 프런트에 말해야 합니다."
  },
  {
    id: "travel-hotel-116",
    category: "travel-hotel",
    ko: "방이 사진과 다르네요.",
    en: "The room looks ___ from the photos.",
    accept: ["different"],
    hint: "같지 않다는 뜻의 형용사",
    note: "different from과 different than 둘 다 씁니다."
  },
  {
    id: "travel-hotel-117",
    category: "travel-hotel",
    ko: "방이 생각보다 좁아요.",
    en: "The room is ___ than I expected.",
    accept: ["smaller"],
    hint: "작다의 비교급",
    note: "than I expected는 '생각했던 것보다'입니다."
  },
  {
    id: "travel-hotel-118",
    category: "travel-hotel",
    ko: "전망이 벽이네요.",
    en: "The window ___ a wall.",
    accept: ["faces"],
    hint: "마주 본다는 뜻의 동사",
    note: "face는 '얼굴'이라는 명사에서 온 동사입니다."
  },
  {
    id: "travel-hotel-119",
    category: "travel-hotel",
    ko: "다른 방을 보여주시겠어요?",
    en: "Could you show me ___ room?",
    accept: ["another"],
    hint: "다른 하나를 뜻하는 말",
    note: "another는 하나 더, other는 나머지를 가리킵니다."
  },
  {
    id: "travel-hotel-120",
    category: "travel-hotel",
    ko: "이 방으로 할게요.",
    en: "I'll ___ this one.",
    accept: ["take"],
    hint: "고른다는 뜻의 기본 동사",
    note: "I'll take it은 물건을 살 때도 그대로 씁니다."
  },
  {
    id: "travel-hotel-121",
    category: "travel-hotel",
    ko: "침대가 하나 더 들어갈까요?",
    en: "Can you add an extra ___?",
    accept: ["bed"],
    hint: "잠을 자는 가구",
    note: "추가 침대는 rollaway bed나 cot이라고 합니다."
  },
  {
    id: "travel-hotel-122",
    category: "travel-hotel",
    ko: "아기 침대가 있나요?",
    en: "Do you have a ___?",
    accept: ["crib", "cot"],
    hint: "아기가 자는 작은 침대",
    note: "미국은 crib, 영국은 cot이라고 합니다."
  },
  {
    id: "travel-hotel-123",
    category: "travel-hotel",
    ko: "베개가 너무 딱딱해요.",
    en: "The pillows are too ___.",
    accept: ["hard", "firm"],
    hint: "단단하다는 뜻의 형용사",
    note: "부드러운 베개를 원하면 softer pillows라고 하면 됩니다."
  },
  {
    id: "travel-hotel-124",
    category: "travel-hotel",
    ko: "이불이 얇아요.",
    en: "The blanket is too ___.",
    accept: ["thin"],
    hint: "두껍지 않다는 뜻의 형용사",
    note: "두꺼운 것은 thick입니다."
  },
  {
    id: "travel-hotel-125",
    category: "travel-hotel",
    ko: "매트리스가 꺼졌어요.",
    en: "The mattress ___.",
    accept: ["sags"],
    hint: "가운데가 내려앉는다는 뜻의 동사",
    note: "sag는 힘없이 처진다는 뜻입니다."
  },
  {
    id: "travel-hotel-126",
    category: "travel-hotel",
    ko: "방에서 곰팡이 냄새가 나요.",
    en: "The room smells ___.",
    accept: ["musty", "damp"],
    hint: "눅눅하고 퀴퀴하다는 뜻의 형용사",
    note: "musty는 오래 닫아둔 방에서 나는 냄새입니다."
  },
  {
    id: "travel-hotel-127",
    category: "travel-hotel",
    ko: "환기가 안 돼요.",
    en: "There's no ___ in here.",
    accept: ["ventilation", "airflow"],
    hint: "공기가 드나드는 것을 뜻하는 명사",
    note: "창문이 안 열리는 방이 종종 있습니다."
  },
  {
    id: "travel-hotel-128",
    category: "travel-hotel",
    ko: "물이 미지근해요.",
    en: "The water is only ___.",
    accept: ["lukewarm", "warm"],
    hint: "뜨겁지도 차갑지도 않다는 뜻의 형용사",
    note: "lukewarm은 미지근하다는 뜻의 정확한 낱말입니다."
  },
  {
    id: "travel-hotel-129",
    category: "travel-hotel",
    ko: "물이 잘 안 내려가요.",
    en: "The toilet doesn't ___ properly.",
    accept: ["flush"],
    hint: "물을 내린다는 뜻의 동사",
    note: "flush는 변기 물을 내리는 동작입니다."
  },
  {
    id: "travel-hotel-130",
    category: "travel-hotel",
    ko: "수도꼭지에서 물이 새요.",
    en: "The faucet is ___.",
    accept: ["leaking", "dripping"],
    hint: "물이 조금씩 흘러나온다는 뜻의 -ing형",
    note: "미국은 faucet, 영국은 tap이라고 합니다."
  },
  {
    id: "travel-hotel-131",
    category: "travel-hotel",
    ko: "샤워 커튼이 없어요.",
    en: "There's no shower ___.",
    accept: ["curtain"],
    hint: "물이 튀지 않게 치는 천",
    note: "없으면 바닥이 다 젖습니다."
  },
  {
    id: "travel-hotel-132",
    category: "travel-hotel",
    ko: "비누가 다 떨어졌어요.",
    en: "We're out of ___.",
    accept: ["soap"],
    hint: "몸을 씻을 때 쓰는 것",
    note: "out of는 다 떨어졌다는 뜻입니다."
  },
  {
    id: "travel-hotel-133",
    category: "travel-hotel",
    ko: "샴푸를 좀 더 주시겠어요?",
    en: "Could we get more ___?",
    accept: ["shampoo"],
    hint: "머리를 감을 때 쓰는 것",
    note: "린스는 conditioner라고 합니다."
  },
  {
    id: "travel-hotel-134",
    category: "travel-hotel",
    ko: "칫솔을 받을 수 있나요?",
    en: "Could I get a ___?",
    accept: ["toothbrush"],
    hint: "이를 닦는 도구",
    note: "치약은 toothpaste입니다. 없는 호텔도 많습니다."
  },
  {
    id: "travel-hotel-135",
    category: "travel-hotel",
    ko: "드라이어가 고장 났어요.",
    en: "The hair dryer is ___.",
    accept: ["broken"],
    hint: "부서지다의 과거분사",
    note: "고장 나면 바로 바꿔 줍니다."
  },
  {
    id: "travel-hotel-136",
    category: "travel-hotel",
    ko: "콘센트가 안 되네요.",
    en: "This ___ doesn't work.",
    accept: ["outlet"],
    hint: "전기를 꽂는 구멍",
    note: "미국은 outlet, 영국은 socket입니다."
  },
  {
    id: "travel-hotel-137",
    category: "travel-hotel",
    ko: "변압기가 필요한가요?",
    en: "Do I need a ___?",
    accept: ["converter", "transformer"],
    hint: "전압을 바꿔주는 기계",
    note: "모양만 바꾸는 것은 adapter, 전압을 바꾸는 것은 converter입니다."
  },
  {
    id: "travel-hotel-138",
    category: "travel-hotel",
    ko: "리모컨 건전지가 없어요.",
    en: "The remote needs new ___.",
    accept: ["batteries"],
    hint: "전기를 담아두는 작은 통",
    note: "remote control을 줄여 remote라고만 해도 통합니다."
  },
  {
    id: "travel-hotel-139",
    category: "travel-hotel",
    ko: "채널이 안 나와요.",
    en: "I can't get any ___.",
    accept: ["channels"],
    hint: "텔레비전에서 골라 보는 방송",
    note: "케이블이 빠져 있는 경우가 많습니다."
  },
  {
    id: "travel-hotel-140",
    category: "travel-hotel",
    ko: "와이파이가 아예 안 잡혀요.",
    en: "I can't ___ to the Wi-Fi at all.",
    accept: ["connect"],
    hint: "이어진다는 뜻의 동사",
    note: "층마다 신호가 다를 수 있습니다."
  },
  {
    id: "travel-hotel-141",
    category: "travel-hotel",
    ko: "비밀번호가 틀린 것 같아요.",
    en: "The password doesn't seem to be ___.",
    accept: ["correct", "right"],
    hint: "맞다는 뜻의 형용사",
    note: "대소문자를 구별하는 경우가 많습니다."
  },
  {
    id: "travel-hotel-142",
    category: "travel-hotel",
    ko: "옆방 소리가 다 들려요.",
    en: "I can hear ___ next door.",
    accept: ["everything"],
    hint: "모든 것을 뜻하는 말",
    note: "벽이 얇은 호텔에서 자주 겪는 일입니다."
  },
  {
    id: "travel-hotel-143",
    category: "travel-hotel",
    ko: "복도가 시끄러워요.",
    en: "It's noisy in the ___.",
    accept: ["hallway", "corridor"],
    hint: "방과 방 사이를 잇는 통로",
    note: "미국은 hallway, 영국은 corridor를 씁니다."
  },
  {
    id: "travel-hotel-144",
    category: "travel-hotel",
    ko: "새벽에 공사 소리가 났어요.",
    en: "There was ___ noise early this morning.",
    accept: ["construction"],
    hint: "건물을 짓는 일을 뜻하는 명사",
    note: "미리 알려주지 않은 공사는 항의할 만합니다."
  },
  {
    id: "travel-hotel-145",
    category: "travel-hotel",
    ko: "조용한 방으로 바꿔주실 수 있나요?",
    en: "Could you ___ us to a quieter room?",
    accept: ["move"],
    hint: "옮긴다는 뜻의 동사",
    note: "빈 방이 있으면 대부분 바꿔 줍니다."
  },
  {
    id: "travel-hotel-146",
    category: "travel-hotel",
    ko: "잠을 못 잤어요.",
    en: "I couldn't ___ all night.",
    accept: ["sleep"],
    hint: "잠잔다는 뜻의 동사",
    note: "불편을 알릴 때는 사실만 담담히 말하는 것이 낫습니다."
  },
  {
    id: "travel-hotel-147",
    category: "travel-hotel",
    ko: "어젯밤 일로 말씀드리고 싶어요.",
    en: "I'd like to ___ about last night.",
    accept: ["talk", "speak"],
    hint: "말한다는 뜻의 동사",
    note: "따지기 전에 이렇게 운을 떼면 대화가 부드러워집니다."
  },
  {
    id: "travel-hotel-148",
    category: "travel-hotel",
    ko: "매니저와 이야기할 수 있을까요?",
    en: "Could I speak with the ___?",
    accept: ["manager"],
    hint: "그곳을 책임지고 관리하는 사람",
    note: "직원이 해결하지 못하는 일은 매니저에게 갑니다."
  },
  {
    id: "travel-hotel-149",
    category: "travel-hotel",
    ko: "불만을 접수하고 싶습니다.",
    en: "I'd like to file a ___.",
    accept: ["complaint"],
    hint: "불편을 알리는 것을 뜻하는 명사",
    note: "file a complaint는 정식으로 접수한다는 뜻입니다."
  },
  {
    id: "travel-hotel-150",
    category: "travel-hotel",
    ko: "보상을 받을 수 있을까요?",
    en: "Is there any ___ for this?",
    accept: ["compensation"],
    hint: "손해를 메워주는 것",
    note: "요금 할인이나 무료 조식으로 대신하기도 합니다."
  },
  {
    id: "travel-hotel-151",
    category: "travel-hotel",
    ko: "요금을 좀 깎아주실 수 있나요?",
    en: "Could you ___ the rate?",
    accept: ["reduce", "lower"],
    hint: "낮춘다는 뜻의 동사",
    note: "불편을 겪었다면 정중히 요청해 볼 수 있습니다."
  },
  {
    id: "travel-hotel-152",
    category: "travel-hotel",
    ko: "사과 말씀 감사합니다.",
    en: "Thank you for the ___.",
    accept: ["apology"],
    hint: "잘못을 비는 말",
    note: "사과를 받아들일 때 쓰는 짧은 대답입니다."
  },
  {
    id: "travel-hotel-153",
    category: "travel-hotel",
    ko: "덕분에 잘 해결됐어요.",
    en: "That ___ the problem.",
    accept: ["solves", "solved"],
    hint: "문제를 푼다는 뜻의 동사",
    note: "That solves it이라고 짧게 말해도 됩니다."
  },
  {
    id: "travel-hotel-154",
    category: "travel-hotel",
    ko: "조식 시간이 언제 끝나요?",
    en: "When does breakfast ___?",
    accept: ["end", "finish"],
    hint: "끝난다는 뜻의 동사",
    note: "보통 아침 열 시에 끝납니다."
  },
  {
    id: "travel-hotel-155",
    category: "travel-hotel",
    ko: "조식은 뷔페인가요?",
    en: "Is breakfast a ___?",
    accept: ["buffet"],
    hint: "차려놓고 골라 먹는 방식",
    note: "정해진 메뉴가 나오는 것은 set breakfast입니다."
  },
  {
    id: "travel-hotel-156",
    category: "travel-hotel",
    ko: "방으로 가져다주실 수 있나요?",
    en: "Could I get room ___?",
    accept: ["service"],
    hint: "방까지 가져다주는 것",
    note: "room service는 값이 조금 더 비쌉니다."
  },
  {
    id: "travel-hotel-157",
    category: "travel-hotel",
    ko: "채식 메뉴가 있나요?",
    en: "Are there any ___ options?",
    accept: ["vegetarian", "vegan"],
    hint: "고기를 먹지 않는 사람을 위한 것",
    note: "vegan은 달걀과 우유도 먹지 않습니다."
  },
  {
    id: "travel-hotel-158",
    category: "travel-hotel",
    ko: "커피는 어디서 마실 수 있나요?",
    en: "Where can I ___ some coffee?",
    accept: ["grab", "get"],
    hint: "가져온다는 뜻의 동사",
    note: "로비에 무료 커피를 두는 곳이 많습니다."
  },
  {
    id: "travel-hotel-159",
    category: "travel-hotel",
    ko: "얼음은 어디서 구하나요?",
    en: "Where's the ___ machine?",
    accept: ["ice"],
    hint: "물을 얼린 것",
    note: "미국 호텔은 층마다 얼음 기계가 있습니다."
  },
  {
    id: "travel-hotel-160",
    category: "travel-hotel",
    ko: "마실 물이 있나요?",
    en: "Is there ___ water available?",
    accept: ["drinking"],
    hint: "마신다는 뜻의 -ing형",
    note: "수돗물을 마셔도 되는지 물을 때는 Is the tap water safe?라고 합니다."
  },
  {
    id: "travel-hotel-161",
    category: "travel-hotel",
    ko: "생수 두 병 주시겠어요?",
    en: "Could I get two ___ of water?",
    accept: ["bottles"],
    hint: "물을 담는 통",
    note: "무료로 주는 곳도 있고 미니바 값을 받는 곳도 있습니다."
  },
  {
    id: "travel-hotel-162",
    category: "travel-hotel",
    ko: "냉장고를 써도 되나요?",
    en: "Can I use the ___?",
    accept: ["fridge", "refrigerator"],
    hint: "음식을 차게 보관하는 기계",
    note: "fridge는 refrigerator의 줄임말입니다."
  },
  {
    id: "travel-hotel-163",
    category: "travel-hotel",
    ko: "전자레인지가 있나요?",
    en: "Is there a ___ I can use?",
    accept: ["microwave"],
    hint: "음식을 데우는 기계",
    note: "로비나 공용 주방에 있는 경우가 많습니다."
  },
  {
    id: "travel-hotel-164",
    category: "travel-hotel",
    ko: "주방을 같이 쓰는 건가요?",
    en: "Is the kitchen ___?",
    accept: ["shared", "communal"],
    hint: "여럿이 함께 쓴다는 뜻의 형용사",
    note: "게스트하우스에서 자주 나오는 질문입니다."
  },
  {
    id: "travel-hotel-165",
    category: "travel-hotel",
    ko: "세탁기를 쓸 수 있나요?",
    en: "Can I use the ___ machine?",
    accept: ["washing"],
    hint: "빨래한다는 뜻의 -ing형",
    note: "동전을 넣는 곳이 많습니다. coin laundry라고 합니다."
  },
  {
    id: "travel-hotel-166",
    category: "travel-hotel",
    ko: "건조기도 있나요?",
    en: "Is there a ___ too?",
    accept: ["dryer"],
    hint: "젖은 것을 말리는 기계",
    note: "영국에서는 tumble dryer라고 합니다."
  },
  {
    id: "travel-hotel-167",
    category: "travel-hotel",
    ko: "세제를 살 수 있나요?",
    en: "Can I buy ___ here?",
    accept: ["detergent"],
    hint: "빨래할 때 넣는 것",
    note: "작은 봉지로 파는 곳이 많습니다."
  },
  {
    id: "travel-hotel-168",
    category: "travel-hotel",
    ko: "빨래는 언제 되나요?",
    en: "When will my laundry be ___?",
    accept: ["ready", "done"],
    hint: "다 됐다는 뜻의 형용사",
    note: "보통 하루 걸립니다."
  },
  {
    id: "travel-hotel-169",
    category: "travel-hotel",
    ko: "다림질도 해주시나요?",
    en: "Do you offer ___?",
    accept: ["ironing", "pressing"],
    hint: "옷을 눌러 펴는 일",
    note: "정장을 다릴 때는 pressing이라고 합니다."
  },
  {
    id: "travel-hotel-170",
    category: "travel-hotel",
    ko: "짐을 방까지 올려주실 수 있나요?",
    en: "Could someone ___ my bags up?",
    accept: ["carry"],
    hint: "들고 나른다는 뜻의 동사",
    note: "짐을 들어주는 직원을 bellhop이라고 합니다."
  },
  {
    id: "travel-hotel-171",
    category: "travel-hotel",
    ko: "팁을 드려야 하나요?",
    en: "Should I ___ the staff?",
    accept: ["tip"],
    hint: "봉사료를 준다는 뜻의 동사",
    note: "미국 호텔에서는 짐을 들어주면 1~2달러를 줍니다."
  },
  {
    id: "travel-hotel-172",
    category: "travel-hotel",
    ko: "귀중품을 맡길 수 있나요?",
    en: "Can I store my ___ somewhere?",
    accept: ["valuables"],
    hint: "값나가는 물건을 뜻하는 복수 명사",
    note: "프런트에 금고를 두는 곳이 많습니다."
  },
  {
    id: "travel-hotel-173",
    category: "travel-hotel",
    ko: "금고 비밀번호를 잊어버렸어요.",
    en: "I forgot the safe ___.",
    accept: ["code", "combination"],
    hint: "금고를 여는 번호",
    note: "직원이 열어줄 수 있습니다."
  },
  {
    id: "travel-hotel-174",
    category: "travel-hotel",
    ko: "방에 아무도 못 들어오게 해주세요.",
    en: "Please don't let ___ into my room.",
    accept: ["anyone", "anybody"],
    hint: "'누구도'를 뜻하는 말",
    note: "부정문에서는 someone이 아니라 anyone을 씁니다."
  },
  {
    id: "travel-hotel-175",
    category: "travel-hotel",
    ko: "제 물건이 없어진 것 같아요.",
    en: "I think something is ___ from my room.",
    accept: ["missing", "gone"],
    hint: "없어졌다는 뜻의 말",
    note: "먼저 방을 다시 찾아보고 프런트에 알립니다."
  },
  {
    id: "travel-hotel-176",
    category: "travel-hotel",
    ko: "경찰에 신고해야 할까요?",
    en: "Should I ___ the police?",
    accept: ["call", "contact"],
    hint: "연락한다는 뜻의 동사",
    note: "여행자 보험 청구에는 신고 서류가 필요합니다."
  },
  {
    id: "travel-hotel-177",
    category: "travel-hotel",
    ko: "제 방 카드를 잃어버렸어요.",
    en: "I ___ my key card.",
    accept: ["lost"],
    hint: "잃다의 과거형",
    note: "신분증을 보여주면 새로 만들어 줍니다."
  },
  {
    id: "travel-hotel-178",
    category: "travel-hotel",
    ko: "카드를 다시 발급받을 수 있나요?",
    en: "Could you ___ my key card?",
    accept: ["reissue", "replace"],
    hint: "다시 내준다는 뜻의 동사",
    note: "잃어버린 카드는 바로 못 쓰게 막아 줍니다."
  },
  {
    id: "travel-hotel-179",
    category: "travel-hotel",
    ko: "카드가 안 먹는 것 같아요.",
    en: "I think my key card is ___.",
    accept: ["demagnetized", "deactivated"],
    hint: "기능이 풀렸다는 뜻의 과거분사",
    note: "휴대폰 옆에 두면 자기 정보가 지워질 수 있습니다."
  },
  {
    id: "travel-hotel-180",
    category: "travel-hotel",
    ko: "짐을 하루 더 맡길 수 있나요?",
    en: "Can I leave my bags one more ___?",
    accept: ["day"],
    hint: "아침부터 밤까지의 하루",
    note: "체크아웃한 뒤에도 대부분 맡아 줍니다."
  },
  {
    id: "travel-hotel-181",
    category: "travel-hotel",
    ko: "체크아웃은 어떻게 하나요?",
    en: "What's the checkout ___?",
    accept: ["process", "procedure"],
    hint: "일을 처리하는 순서를 뜻하는 명사",
    note: "요즘은 카드만 두고 나가면 되는 곳도 많습니다."
  },
  {
    id: "travel-hotel-182",
    category: "travel-hotel",
    ko: "카드는 여기 두고 가면 되나요?",
    en: "Can I just ___ the key card here?",
    accept: ["drop"],
    hint: "떨어뜨려 놓는다는 뜻의 동사",
    note: "drop off라고도 합니다."
  },
  {
    id: "travel-hotel-183",
    category: "travel-hotel",
    ko: "최종 요금을 확인하고 싶어요.",
    en: "I'd like to see the ___ bill.",
    accept: ["final"],
    hint: "맨 마지막이라는 뜻의 형용사",
    note: "체크아웃 전에 확인하면 다툼을 줄일 수 있습니다."
  },
  {
    id: "travel-hotel-184",
    category: "travel-hotel",
    ko: "이 항목이 뭔지 모르겠어요.",
    en: "I don't recognize this ___.",
    accept: ["item", "charge"],
    hint: "청구서에 적힌 한 줄",
    note: "모르는 항목은 그 자리에서 물어봐야 합니다."
  },
  {
    id: "travel-hotel-185",
    category: "travel-hotel",
    ko: "이건 제가 쓴 게 아니에요.",
    en: "I didn't ___ this.",
    accept: ["order"],
    hint: "시킨다는 뜻의 동사",
    note: "미니바 요금이 잘못 붙는 일이 종종 있습니다."
  },
  {
    id: "travel-hotel-186",
    category: "travel-hotel",
    ko: "빼주실 수 있나요?",
    en: "Could you ___ it from the bill?",
    accept: ["remove"],
    hint: "치워 없앤다는 뜻의 동사",
    note: "잘못 붙은 요금은 대부분 바로 빼 줍니다."
  },
  {
    id: "travel-hotel-187",
    category: "travel-hotel",
    ko: "카드 승인이 안 됐다고 하네요.",
    en: "They said my card was ___.",
    accept: ["declined"],
    hint: "거절되었다는 뜻의 과거분사",
    note: "해외 결제가 막혀 있는 경우가 많습니다."
  },
  {
    id: "travel-hotel-188",
    category: "travel-hotel",
    ko: "다른 카드로 해볼게요.",
    en: "Let me ___ another card.",
    accept: ["try"],
    hint: "해본다는 뜻의 동사",
    note: "여러 장을 가져가는 것이 안전합니다."
  },
  {
    id: "travel-hotel-189",
    category: "travel-hotel",
    ko: "영수증을 두 장 주시겠어요?",
    en: "Could I get two ___ of the receipt?",
    accept: ["copies"],
    hint: "똑같이 만든 것을 뜻하는 복수 명사",
    note: "회사에 낼 것과 따로 챙길 때 씁니다."
  },
  {
    id: "travel-hotel-190",
    category: "travel-hotel",
    ko: "공항까지 어떻게 가나요?",
    en: "How do I ___ to the airport?",
    accept: ["get"],
    hint: "닿는다는 뜻의 기본 동사",
    note: "How do I get to는 길을 물을 때 가장 무난한 표현입니다."
  },
  {
    id: "travel-hotel-191",
    category: "travel-hotel",
    ko: "몇 시에 나가면 될까요?",
    en: "What time should I head ___?",
    accept: ["out"],
    hint: "밖으로를 뜻하는 말. head와 붙어 길을 나선다는 뜻이 됩니다",
    note: "직원이 교통 상황을 보고 알려줍니다."
  },
  {
    id: "travel-hotel-192",
    category: "travel-hotel",
    ko: "택시를 미리 불러주시겠어요?",
    en: "Could you ___ a taxi in advance?",
    accept: ["reserve"],
    hint: "미리 잡아둔다는 뜻의 동사",
    note: "in advance는 '미리'라는 뜻입니다."
  },
  {
    id: "travel-hotel-193",
    category: "travel-hotel",
    ko: "짐 싣는 것 좀 도와주시겠어요?",
    en: "Could you help me ___ my bags?",
    accept: ["load"],
    hint: "차에 싣는다는 뜻의 동사",
    note: "내리는 것은 unload입니다."
  },
  {
    id: "travel-hotel-194",
    category: "travel-hotel",
    ko: "여기 머무는 동안 정말 좋았어요.",
    en: "We really ___ our stay.",
    accept: ["enjoyed"],
    hint: "즐기다의 과거형",
    note: "떠날 때 건네면 좋은 인사가 됩니다."
  },
  {
    id: "travel-hotel-195",
    category: "travel-hotel",
    ko: "직원분들이 정말 친절하셨어요.",
    en: "The staff were very ___.",
    accept: ["friendly", "helpful"],
    hint: "따뜻하고 도움이 된다는 뜻의 형용사",
    note: "staff는 영국에서 복수로 취급하는 일이 많습니다."
  },
  {
    id: "travel-hotel-196",
    category: "travel-hotel",
    ko: "후기를 남길게요.",
    en: "I'll leave a ___.",
    accept: ["review"],
    hint: "이용한 뒤 남기는 평가",
    note: "좋은 후기는 작은 숙소에 큰 힘이 됩니다."
  },
  {
    id: "travel-hotel-197",
    category: "travel-hotel",
    ko: "꼭 다시 오고 싶어요.",
    en: "I'd love to ___ back someday.",
    accept: ["come"],
    hint: "오다를 뜻하는 기본 동사",
    note: "come back은 다시 온다는 뜻입니다."
  },
  {
    id: "travel-hotel-198",
    category: "travel-hotel",
    ko: "친구들에게 추천할게요.",
    en: "I'll ___ this place to my friends.",
    accept: ["recommend"],
    hint: "권한다는 뜻의 동사",
    note: "recommend A to B는 A를 B에게 권한다는 뜻입니다."
  },
  {
    id: "travel-hotel-199",
    category: "travel-hotel",
    ko: "신경 써주셔서 감사했습니다.",
    en: "Thank you for taking such good ___ of us.",
    accept: ["care"],
    hint: "돌봄을 뜻하는 명사",
    note: "take care of는 잘 챙겨준다는 뜻입니다."
  },
  {
    id: "travel-hotel-200",
    category: "travel-hotel",
    ko: "다음에 또 뵙겠습니다.",
    en: "See you next ___.",
    accept: ["time"],
    hint: "때를 뜻하는 명사",
    note: "See you next time은 가볍고 따뜻한 작별 인사입니다."
  },
  {
    id: "daily-people-101",
    category: "daily-people",
    ko: "저희 형은 저보다 세 살 많아요.",
    en: "My brother is three ___ older than me.",
    accept: ["years"],
    hint: "나이를 세는 단위",
    note: "나이 차이는 숫자를 앞에 붙여 말합니다."
  },
  {
    id: "daily-people-102",
    category: "daily-people",
    ko: "저희는 나이 차이가 많이 나요.",
    en: "There's a big age ___ between us.",
    accept: ["gap", "difference"],
    hint: "벌어진 사이를 뜻하는 명사",
    note: "age gap은 나이 차이를 뜻하는 흔한 말입니다."
  },
  {
    id: "daily-people-103",
    category: "daily-people",
    ko: "쌍둥이예요.",
    en: "They're ___.",
    accept: ["twins"],
    hint: "한날 태어난 두 아이",
    note: "일란성은 identical twins입니다."
  },
  {
    id: "daily-people-104",
    category: "daily-people",
    ko: "저는 둘째예요.",
    en: "I'm the ___ child.",
    accept: ["middle"],
    hint: "가운데를 뜻하는 형용사",
    note: "삼 남매 중 가운데를 middle child라고 합니다."
  },
  {
    id: "daily-people-105",
    category: "daily-people",
    ko: "저희 집 맏이예요.",
    en: "I'm the ___ of four.",
    accept: ["oldest", "eldest"],
    hint: "나이가 가장 많다는 뜻의 최상급",
    note: "영국에서는 eldest를 조금 더 씁니다."
  },
  {
    id: "daily-people-106",
    category: "daily-people",
    ko: "동생이 곧 결혼해요.",
    en: "My sister is ___ married soon.",
    accept: ["getting"],
    hint: "되다를 뜻하는 동사의 -ing형",
    note: "get married는 결혼하는 동작입니다."
  },
  {
    id: "daily-people-107",
    category: "daily-people",
    ko: "결혼식이 다음 달이에요.",
    en: "The ___ is next month.",
    accept: ["wedding"],
    hint: "결혼하는 날의 행사",
    note: "결혼 생활 자체는 marriage입니다."
  },
  {
    id: "daily-people-108",
    category: "daily-people",
    ko: "제부가 참 좋은 사람이에요.",
    en: "My brother-in-___ is a great guy.",
    accept: ["law"],
    hint: "제도나 규칙을 뜻하는 낱말. brother-in-___ 꼴로 인척을 나타냅니다",
    note: "-in-law를 붙이면 결혼으로 맺어진 가족이 됩니다."
  },
  {
    id: "daily-people-109",
    category: "daily-people",
    ko: "시부모님과 사이가 좋아요.",
    en: "I get along well with my ___.",
    accept: ["in-laws"],
    hint: "결혼으로 맺어진 가족을 통틀어 부르는 말",
    note: "시댁과 처가를 가리지 않고 in-laws라고 합니다."
  },
  {
    id: "daily-people-110",
    category: "daily-people",
    ko: "조카가 정말 귀여워요.",
    en: "My ___ is so cute.",
    accept: ["niece", "nephew"],
    hint: "형제자매의 아이",
    note: "여자 조카는 niece, 남자 조카는 nephew입니다."
  },
  {
    id: "daily-people-111",
    category: "daily-people",
    ko: "저희 집안은 대가족이에요.",
    en: "I come from a ___ family.",
    accept: ["big"],
    hint: "크다는 뜻의 형용사",
    note: "come from a big family는 형제가 많다는 뜻입니다."
  },
  {
    id: "daily-people-112",
    category: "daily-people",
    ko: "명절에 다 같이 모여요.",
    en: "We all get ___ on holidays.",
    accept: ["together"],
    hint: "함께라는 뜻의 말",
    note: "get together는 여럿이 모인다는 뜻입니다."
  },
  {
    id: "daily-people-113",
    category: "daily-people",
    ko: "가족 모임이 있어요.",
    en: "We're having a family ___.",
    accept: ["gathering", "reunion"],
    hint: "여럿이 모이는 자리",
    note: "오랜만에 모이는 것은 reunion입니다."
  },
  {
    id: "daily-people-114",
    category: "daily-people",
    ko: "다들 멀리 살아요.",
    en: "We all live ___ apart.",
    accept: ["far"],
    hint: "거리가 멀다는 뜻의 말",
    note: "far apart는 서로 멀리 떨어져 있다는 뜻입니다."
  },
  {
    id: "daily-people-115",
    category: "daily-people",
    ko: "영상통화로 자주 봐요.",
    en: "We ___ chat a lot.",
    accept: ["video"],
    hint: "움직이는 화면을 뜻하는 명사",
    note: "video chat이나 video call 둘 다 씁니다."
  },
  {
    id: "daily-people-116",
    category: "daily-people",
    ko: "부모님이 많이 늙으셨어요.",
    en: "My parents are getting ___.",
    accept: ["old", "older"],
    hint: "나이가 든다는 뜻의 형용사",
    note: "getting old는 나이 들어간다는 뜻입니다."
  },
  {
    id: "daily-people-117",
    category: "daily-people",
    ko: "제가 부모님을 모시고 있어요.",
    en: "I take ___ of my parents.",
    accept: ["care"],
    hint: "돌봄을 뜻하는 명사",
    note: "take care of는 돌본다는 뜻입니다."
  },
  {
    id: "daily-people-118",
    category: "daily-people",
    ko: "아버지가 편찮으세요.",
    en: "My ___ isn't well.",
    accept: ["father"],
    hint: "가족 중 남자 어른을 뜻하는 격식 있는 말",
    note: "isn't well은 몸이 안 좋다는 부드러운 표현입니다."
  },
  {
    id: "daily-people-119",
    category: "daily-people",
    ko: "많이 걱정돼요.",
    en: "I'm really ___ about him.",
    accept: ["worried"],
    hint: "걱정한다는 뜻의 형용사",
    note: "worried about은 누구를 걱정한다는 뜻입니다."
  },
  {
    id: "daily-people-120",
    category: "daily-people",
    ko: "곧 나으실 거예요.",
    en: "He'll ___ soon.",
    accept: ["recover"],
    hint: "병에서 낫는다는 뜻의 동사",
    note: "get better라고 해도 같은 뜻입니다."
  },
  {
    id: "daily-people-121",
    category: "daily-people",
    ko: "그분은 저희 회사 선배예요.",
    en: "He's ___ to me at work.",
    accept: ["senior"],
    hint: "지위나 경력이 위라는 뜻의 형용사",
    note: "한국식 선후배 개념은 영어에 딱 맞는 말이 없어 senior나 more experienced로 풀어 씁니다."
  },
  {
    id: "daily-people-122",
    category: "daily-people",
    ko: "같은 팀에서 일해요.",
    en: "We're on the same ___.",
    accept: ["team"],
    hint: "함께 일하는 무리",
    note: "on the same team은 같은 팀 소속이라는 뜻입니다."
  },
  {
    id: "daily-people-123",
    category: "daily-people",
    ko: "제 상사예요.",
    en: "He's my ___.",
    accept: ["boss", "supervisor"],
    hint: "일을 시키는 윗사람",
    note: "boss가 편한 말, supervisor는 격식 있는 말입니다."
  },
  {
    id: "daily-people-124",
    category: "daily-people",
    ko: "부하 직원이 셋 있어요.",
    en: "I have three people ___ to me.",
    accept: ["reporting"],
    hint: "보고한다는 뜻의 -ing형",
    note: "report to someone은 그 사람 밑에서 일한다는 뜻입니다."
  },
  {
    id: "daily-people-125",
    category: "daily-people",
    ko: "일 잘하는 사람이에요.",
    en: "She's really ___ at her job.",
    accept: ["good"],
    hint: "잘한다는 뜻의 형용사",
    note: "good at 뒤에는 잘하는 것이 옵니다."
  },
  {
    id: "daily-people-126",
    category: "daily-people",
    ko: "믿을 만한 사람이에요.",
    en: "You can ___ on him.",
    accept: ["count", "rely"],
    hint: "기댄다는 뜻의 동사",
    note: "count on someone은 믿고 맡길 수 있다는 뜻입니다."
  },
  {
    id: "daily-people-127",
    category: "daily-people",
    ko: "말이 잘 통해요.",
    en: "We're always on the same ___.",
    accept: ["page", "wavelength"],
    hint: "책의 한 쪽을 뜻하는 명사",
    note: "on the same page는 생각이 맞아떨어진다는 뜻입니다."
  },
  {
    id: "daily-people-128",
    category: "daily-people",
    ko: "좀 어려운 분이에요.",
    en: "He's hard to ___ to.",
    accept: ["talk"],
    hint: "말한다는 뜻의 동사",
    note: "hard to talk to는 말 붙이기 어렵다는 뜻입니다."
  },
  {
    id: "daily-people-129",
    category: "daily-people",
    ko: "성격이 좀 급하세요.",
    en: "She's a bit ___.",
    accept: ["impatient"],
    hint: "참을성이 없다는 뜻의 형용사",
    note: "patient에 im-을 붙여 뜻을 뒤집었습니다."
  },
  {
    id: "daily-people-130",
    category: "daily-people",
    ko: "느긋한 편이에요.",
    en: "He's pretty ___.",
    accept: ["laid-back", "easygoing"],
    hint: "서두르지 않는다는 뜻의 형용사",
    note: "laid-back은 여유롭고 태평하다는 뜻입니다."
  },
  {
    id: "daily-people-131",
    category: "daily-people",
    ko: "낯을 좀 가려요.",
    en: "I'm a little ___ around new people.",
    accept: ["shy"],
    hint: "부끄러움을 탄다는 뜻의 형용사",
    note: "shy around는 누구 앞에서 수줍다는 뜻입니다."
  },
  {
    id: "daily-people-132",
    category: "daily-people",
    ko: "사람 만나는 걸 좋아해요.",
    en: "I'm a ___ people person.",
    accept: ["real", "total"],
    hint: "진짜라는 뜻으로 뒤의 말을 강하게 만드는 형용사",
    note: "a people person은 사람 사귀기를 좋아하는 사람입니다."
  },
  {
    id: "daily-people-133",
    category: "daily-people",
    ko: "혼자 있는 게 더 편해요.",
    en: "I'm more ___ on my own.",
    accept: ["comfortable"],
    hint: "마음이 편하다는 뜻의 형용사",
    note: "on my own은 혼자라는 뜻입니다."
  },
  {
    id: "daily-people-134",
    category: "daily-people",
    ko: "친구가 많지는 않아요.",
    en: "I don't have ___ friends.",
    accept: ["many"],
    hint: "수가 많다는 뜻의 말",
    note: "부정문에서는 much가 아니라 many를 씁니다."
  },
  {
    id: "daily-people-135",
    category: "daily-people",
    ko: "그래도 오래 가는 사이예요.",
    en: "But the ones I have ___ a long time.",
    accept: ["last"],
    hint: "이어진다는 뜻의 동사",
    note: "last a long time은 오래 이어진다는 뜻입니다."
  },
  {
    id: "daily-people-136",
    category: "daily-people",
    ko: "그분과는 소원해졌어요.",
    en: "We've ___ apart.",
    accept: ["grown", "drifted"],
    hint: "자라거나 떠내려간다는 뜻의 과거분사",
    note: "grow apart는 사이가 자연스럽게 멀어진다는 뜻입니다."
  },
  {
    id: "daily-people-137",
    category: "daily-people",
    ko: "연락이 끊겼어요.",
    en: "We ___ touch.",
    accept: ["lost"],
    hint: "잃다의 과거형",
    note: "lose touch는 연락이 끊긴다는 뜻입니다."
  },
  {
    id: "daily-people-138",
    category: "daily-people",
    ko: "다시 연락해 볼까 해요.",
    en: "I'm thinking of ___ out to her.",
    accept: ["reaching"],
    hint: "손을 뻗다의 -ing형",
    note: "reach out은 먼저 다가가 연락한다는 뜻입니다."
  },
  {
    id: "daily-people-139",
    category: "daily-people",
    ko: "저희는 다퉜어요.",
    en: "We had a ___.",
    accept: ["falling-out", "fight"],
    hint: "사이가 틀어진 일을 뜻하는 명사",
    note: "falling-out은 크게 다투고 멀어졌다는 뜻입니다."
  },
  {
    id: "daily-people-140",
    category: "daily-people",
    ko: "이제는 화해했어요.",
    en: "We've ___ up now.",
    accept: ["made"],
    hint: "만들다의 과거분사. up과 붙어 화해한다는 뜻이 됩니다",
    note: "make up은 다툰 뒤 화해한다는 뜻입니다."
  },
  {
    id: "daily-people-141",
    category: "daily-people",
    ko: "그분이 먼저 사과했어요.",
    en: "He ___ first.",
    accept: ["apologized", "apologised"],
    hint: "사과하다의 과거형",
    note: "영국에서는 apologised로 적습니다."
  },
  {
    id: "daily-people-142",
    category: "daily-people",
    ko: "제가 잘못했어요.",
    en: "I was in the ___.",
    accept: ["wrong"],
    hint: "잘못된 쪽을 뜻하는 말",
    note: "in the wrong은 내 잘못이라는 뜻입니다."
  },
  {
    id: "daily-people-143",
    category: "daily-people",
    ko: "서로 오해가 있었어요.",
    en: "We just ___ each other.",
    accept: ["misunderstood"],
    hint: "잘못 알아듣다의 과거형",
    note: "mis-는 '잘못'이라는 뜻을 더합니다."
  },
  {
    id: "daily-people-144",
    category: "daily-people",
    ko: "이제 괜찮아요.",
    en: "We're ___ now.",
    accept: ["fine", "good"],
    hint: "사이가 괜찮다는 뜻의 형용사",
    note: "We're good은 '이제 아무 문제 없다'는 뜻으로 자주 씁니다."
  },
  {
    id: "daily-people-145",
    category: "daily-people",
    ko: "그분 덕분에 많이 배웠어요.",
    en: "I learned a lot ___ him.",
    accept: ["from"],
    hint: "출처를 나타내는 전치사",
    note: "learn from someone은 그 사람에게서 배운다는 뜻입니다."
  },
  {
    id: "daily-people-146",
    category: "daily-people",
    ko: "저를 많이 챙겨주셨어요.",
    en: "She really ___ out for me.",
    accept: ["looked"],
    hint: "보다의 과거형. out for와 붙어 챙겨준다는 뜻이 됩니다",
    note: "look out for someone은 남을 살펴 챙긴다는 뜻입니다."
  },
  {
    id: "daily-people-147",
    category: "daily-people",
    ko: "제 롤모델이에요.",
    en: "He's my role ___.",
    accept: ["model"],
    hint: "본보기를 뜻하는 명사",
    note: "role model은 닮고 싶은 사람입니다."
  },
  {
    id: "daily-people-148",
    category: "daily-people",
    ko: "저도 그분처럼 되고 싶어요.",
    en: "I want to ___ in his footsteps.",
    accept: ["follow"],
    hint: "뒤를 따라간다는 뜻의 동사",
    note: "follow in someone's footsteps는 그 사람이 걸어간 길을 따라간다는 뜻입니다."
  },
  {
    id: "daily-people-149",
    category: "daily-people",
    ko: "그분이 저를 여기까지 이끌어주셨어요.",
    en: "She ___ me get here.",
    accept: ["helped"],
    hint: "돕다의 과거형",
    note: "help someone do는 누가 무엇을 하도록 돕는다는 뜻입니다."
  },
  {
    id: "daily-people-150",
    category: "daily-people",
    ko: "정말 고마운 분이에요.",
    en: "I'm really ___ to him.",
    accept: ["grateful", "thankful"],
    hint: "고맙게 여긴다는 뜻의 형용사",
    note: "grateful to someone은 그 사람에게 고맙다는 뜻입니다."
  },
  {
    id: "daily-people-151",
    category: "daily-people",
    ko: "그분들은 이웃이에요.",
    en: "They're our ___.",
    accept: ["neighbors", "neighbours"],
    hint: "가까이 사는 사람들",
    note: "영국에서는 neighbours로 적습니다."
  },
  {
    id: "daily-people-152",
    category: "daily-people",
    ko: "이사 온 지 얼마 안 됐어요.",
    en: "They just ___ in.",
    accept: ["moved"],
    hint: "옮기다의 과거형",
    note: "move in은 이사 들어온다는 뜻입니다."
  },
  {
    id: "daily-people-153",
    category: "daily-people",
    ko: "인사만 하는 사이예요.",
    en: "We just ___ hello.",
    accept: ["say"],
    hint: "말한다는 뜻의 기본 동사",
    note: "say hello는 가볍게 인사만 나눈다는 뜻입니다."
  },
  {
    id: "daily-people-154",
    category: "daily-people",
    ko: "그 집 개가 정말 순해요.",
    en: "Their dog is so ___.",
    accept: ["gentle", "friendly"],
    hint: "순하고 다정하다는 뜻의 형용사",
    note: "사나운 개는 aggressive라고 합니다."
  },
  {
    id: "daily-people-155",
    category: "daily-people",
    ko: "아이들이 같은 학교에 다녀요.",
    en: "Our kids go to the same ___.",
    accept: ["school"],
    hint: "공부하러 가는 곳",
    note: "go to school은 학교에 다닌다는 뜻입니다."
  },
  {
    id: "daily-people-156",
    category: "daily-people",
    ko: "같은 반이래요.",
    en: "They're in the same ___.",
    accept: ["class"],
    hint: "학교에서 나눈 학생 무리",
    note: "in the same class는 같은 반이라는 뜻입니다."
  },
  {
    id: "daily-people-157",
    category: "daily-people",
    ko: "그 애가 제 딸 친구예요.",
    en: "She's a friend of my ___.",
    accept: ["daughter's"],
    hint: "자기 아이 중 여자아이. '~의' 꼴로 씁니다",
    note: "a friend of my daughter's처럼 소유격을 겹쳐 쓰는 꼴입니다."
  },
  {
    id: "daily-people-158",
    category: "daily-people",
    ko: "아이들끼리 잘 놀아요.",
    en: "The kids ___ well together.",
    accept: ["play"],
    hint: "논다는 뜻의 동사",
    note: "play well together는 사이좋게 논다는 뜻입니다."
  },
  {
    id: "daily-people-159",
    category: "daily-people",
    ko: "그분은 학부모 모임 회장이에요.",
    en: "She ___ the parents' group.",
    accept: ["leads", "runs"],
    hint: "이끈다는 뜻의 동사",
    note: "run은 조직을 이끌어 간다는 뜻으로도 씁니다."
  },
  {
    id: "daily-people-160",
    category: "daily-people",
    ko: "저희 부부는 맞벌이예요.",
    en: "We both work ___.",
    accept: ["full-time", "fulltime"],
    hint: "온종일 일한다는 뜻의 말",
    note: "full-time은 온종일 일한다는 뜻입니다."
  },
  {
    id: "daily-people-161",
    category: "daily-people",
    ko: "아이는 어머니가 봐주세요.",
    en: "My mom ___ the kids.",
    accept: ["watches"],
    hint: "돌본다는 뜻으로도 쓰이는 동사",
    note: "watch the kids는 아이를 봐준다는 뜻입니다."
  },
  {
    id: "daily-people-162",
    category: "daily-people",
    ko: "어린이집에 맡겨요.",
    en: "We send them to ___.",
    accept: ["daycare"],
    hint: "낮 동안 아이를 맡아주는 곳",
    note: "영국에서는 nursery라고도 합니다."
  },
  {
    id: "daily-people-163",
    category: "daily-people",
    ko: "육아가 쉽지 않네요.",
    en: "Parenting isn't ___.",
    accept: ["easy"],
    hint: "쉽다는 뜻의 형용사",
    note: "parenting은 아이를 기르는 일 전체를 가리킵니다."
  },
  {
    id: "daily-people-164",
    category: "daily-people",
    ko: "손이 많이 가요.",
    en: "They need a lot of ___.",
    accept: ["attention"],
    hint: "마음을 쏟아 살피는 것",
    note: "need attention은 계속 신경 써야 한다는 뜻입니다."
  },
  {
    id: "daily-people-165",
    category: "daily-people",
    ko: "그래도 보람이 있어요.",
    en: "But it's ___ it.",
    accept: ["worth"],
    hint: "그만한 값어치가 있다는 뜻의 말",
    note: "It's worth it은 힘들어도 가치가 있다는 뜻입니다."
  },
  {
    id: "daily-people-166",
    category: "daily-people",
    ko: "아이가 벌써 학교에 가요.",
    en: "She's ___ in school.",
    accept: ["already"],
    hint: "예상보다 이르다는 뜻의 부사",
    note: "already는 벌써 그렇게 되었다는 놀라움을 담습니다."
  },
  {
    id: "daily-people-167",
    category: "daily-people",
    ko: "애들이 금방 크네요.",
    en: "They ___ up so fast.",
    accept: ["grow"],
    hint: "자란다는 뜻의 동사",
    note: "grow up so fast는 아이 이야기를 할 때 늘 나오는 말입니다."
  },
  {
    id: "daily-people-168",
    category: "daily-people",
    ko: "사춘기가 왔어요.",
    en: "He's a ___ now.",
    accept: ["teenager"],
    hint: "열세 살에서 열아홉 살 사이의 아이",
    note: "-teen으로 끝나는 나이라서 teenager입니다."
  },
  {
    id: "daily-people-169",
    category: "daily-people",
    ko: "말을 잘 안 해요.",
    en: "He doesn't ___ up much.",
    accept: ["open"],
    hint: "연다는 뜻의 동사. up과 붙어 속마음을 털어놓는다는 뜻이 됩니다",
    note: "open up은 마음을 열고 이야기한다는 뜻입니다."
  },
  {
    id: "daily-people-170",
    category: "daily-people",
    ko: "기다려주는 수밖에 없죠.",
    en: "I just have to be ___.",
    accept: ["patient"],
    hint: "참고 기다린다는 뜻의 형용사",
    note: "be patient는 조급해하지 않는다는 뜻입니다."
  },
  {
    id: "daily-people-171",
    category: "daily-people",
    ko: "그분 소식 들으셨어요?",
    en: "Did you ___ about him?",
    accept: ["hear"],
    hint: "소식이 들린다는 뜻의 동사",
    note: "hear about someone은 그 사람 소식을 듣는다는 뜻입니다."
  },
  {
    id: "daily-people-172",
    category: "daily-people",
    ko: "승진하셨대요.",
    en: "He got a ___.",
    accept: ["promotion"],
    hint: "직급이 올라가는 것",
    note: "get promoted라고 해도 같은 뜻입니다."
  },
  {
    id: "daily-people-173",
    category: "daily-people",
    ko: "회사를 옮기셨대요.",
    en: "She ___ jobs.",
    accept: ["changed", "switched"],
    hint: "바꾸다의 과거형",
    note: "change jobs는 직장을 옮긴다는 뜻입니다."
  },
  {
    id: "daily-people-174",
    category: "daily-people",
    ko: "외국으로 가셨대요.",
    en: "He moved ___.",
    accept: ["abroad", "overseas"],
    hint: "바다 건너 다른 나라로라는 뜻의 부사",
    note: "move abroad는 외국으로 이주한다는 뜻입니다."
  },
  {
    id: "daily-people-175",
    category: "daily-people",
    ko: "잘 지내신다니 다행이에요.",
    en: "I'm ___ to hear he's doing well.",
    accept: ["glad", "happy"],
    hint: "기쁘다는 뜻의 형용사",
    note: "glad to hear는 좋은 소식에 대한 반응입니다."
  },
  {
    id: "daily-people-176",
    category: "daily-people",
    ko: "언제 한번 다 같이 봐요.",
    en: "We should all get together ___.",
    accept: ["sometime"],
    hint: "언젠가를 뜻하는 말",
    note: "get together는 모인다는 뜻입니다."
  },
  {
    id: "daily-people-177",
    category: "daily-people",
    ko: "제가 자리를 마련해 볼게요.",
    en: "I'll ___ something up.",
    accept: ["set"],
    hint: "놓는다는 뜻의 동사. up과 붙어 자리를 마련한다는 뜻이 됩니다",
    note: "set something up은 약속이나 모임을 잡는다는 뜻입니다."
  },
  {
    id: "daily-people-178",
    category: "daily-people",
    ko: "다들 부를까요?",
    en: "Should we ___ everyone?",
    accept: ["invite"],
    hint: "오라고 청한다는 뜻의 동사",
    note: "invite everyone은 다 부른다는 뜻입니다."
  },
  {
    id: "daily-people-179",
    category: "daily-people",
    ko: "그분도 오실까요?",
    en: "Do you think he'll ___?",
    accept: ["come", "show"],
    hint: "온다는 뜻의 동사",
    note: "show up이라고 하면 '나타나다'라는 뜻이 됩니다."
  },
  {
    id: "daily-people-180",
    category: "daily-people",
    ko: "그분은 바빠서 못 오실 거예요.",
    en: "He's too busy to ___ it.",
    accept: ["make"],
    hint: "만들다를 뜻하는 동사가 '참석하다'로도 쓰입니다",
    note: "make it은 약속 자리에 갈 수 있다는 뜻입니다."
  },
  {
    id: "daily-people-181",
    category: "daily-people",
    ko: "제가 연락해 볼게요.",
    en: "I'll ___ him a message.",
    accept: ["send", "drop"],
    hint: "보낸다는 뜻의 동사",
    note: "drop someone a message는 가볍게 연락한다는 뜻입니다."
  },
  {
    id: "daily-people-182",
    category: "daily-people",
    ko: "그분 번호 있으세요?",
    en: "Do you have his contact ___?",
    accept: ["info", "information", "details"],
    hint: "연락처 정보를 뜻하는 명사",
    note: "contact info는 전화번호와 이메일을 통틀어 말합니다."
  },
  {
    id: "daily-people-183",
    category: "daily-people",
    ko: "제가 알려드릴게요.",
    en: "I'll ___ it on to you.",
    accept: ["pass"],
    hint: "넘겨준다는 뜻의 동사",
    note: "pass it on은 다른 사람에게 전달한다는 뜻입니다."
  },
  {
    id: "daily-people-184",
    category: "daily-people",
    ko: "그분이 여기 계셨으면 좋았을 텐데요.",
    en: "I ___ he were here.",
    accept: ["wish"],
    hint: "바란다는 뜻의 동사",
    note: "I wish 뒤에 과거형을 쓰면 지금 그렇지 않다는 아쉬움이 됩니다."
  },
  {
    id: "daily-people-185",
    category: "daily-people",
    ko: "그분이 많이 그리워요.",
    en: "I ___ him a lot.",
    accept: ["miss"],
    hint: "보고 싶다는 뜻의 동사",
    note: "miss someone은 그 사람이 그립다는 뜻입니다."
  },
  {
    id: "daily-people-186",
    category: "daily-people",
    ko: "좋은 분이셨어요.",
    en: "He was a good ___.",
    accept: ["man", "person"],
    hint: "사람을 가리키는 말",
    note: "돌아가신 분을 두고 하는 말로도 씁니다."
  },
  {
    id: "daily-people-187",
    category: "daily-people",
    ko: "그분 이야기를 자주 해요.",
    en: "We talk about him ___.",
    accept: ["often"],
    hint: "자주라는 뜻의 부사",
    note: "talk about someone often은 자주 화제에 올린다는 뜻입니다."
  },
  {
    id: "daily-people-188",
    category: "daily-people",
    ko: "사진을 아직 갖고 있어요.",
    en: "I still ___ his photo.",
    accept: ["have", "keep"],
    hint: "가지고 있다는 뜻의 동사",
    note: "still을 붙이면 지금까지도 그렇다는 뜻이 됩니다."
  },
  {
    id: "daily-people-189",
    category: "daily-people",
    ko: "저희 어머니 말씀이 늘 옳으셨어요.",
    en: "My mom was always ___.",
    accept: ["right"],
    hint: "맞다는 뜻의 형용사",
    note: "be right는 말이 맞다는 뜻입니다."
  },
  {
    id: "daily-people-190",
    category: "daily-people",
    ko: "이제야 그 말이 이해돼요.",
    en: "I finally ___ what she meant.",
    accept: ["understand", "get"],
    hint: "알아듣는다는 뜻의 동사",
    note: "get은 understand의 편한 말입니다."
  },
  {
    id: "daily-people-191",
    category: "daily-people",
    ko: "저도 부모가 되어보니 알겠어요.",
    en: "Now that I'm a ___, I understand.",
    accept: ["parent"],
    hint: "아버지나 어머니 한 사람",
    note: "Now that은 '~하고 나니'라는 뜻입니다."
  },
  {
    id: "daily-people-192",
    category: "daily-people",
    ko: "가족이 제일 소중하죠.",
    en: "Family ___ first.",
    accept: ["comes"],
    hint: "온다는 뜻의 동사. first와 붙어 가장 앞선다는 뜻이 됩니다",
    note: "come first는 무엇보다 앞선다는 뜻입니다."
  },
  {
    id: "daily-people-193",
    category: "daily-people",
    ko: "표현을 잘 못 해서요.",
    en: "I'm not good at ___ my feelings.",
    accept: ["expressing", "showing"],
    hint: "드러낸다는 뜻의 -ing형",
    note: "be good at 뒤에는 -ing가 옵니다."
  },
  {
    id: "daily-people-194",
    category: "daily-people",
    ko: "말로 다 못 하죠.",
    en: "Words aren't ___.",
    accept: ["enough"],
    hint: "모자라지 않다는 뜻의 말",
    note: "Words aren't enough는 말로는 부족하다는 뜻입니다."
  },
  {
    id: "daily-people-195",
    category: "daily-people",
    ko: "고맙다는 말을 못 했어요.",
    en: "I never ___ to say thank you.",
    accept: ["got"],
    hint: "얻다의 과거형. to와 붙어 '~할 기회가 있었다'가 됩니다",
    note: "never got to는 끝내 그러지 못했다는 아쉬움을 담습니다."
  },
  {
    id: "daily-people-196",
    category: "daily-people",
    ko: "이번엔 꼭 전할 거예요.",
    en: "I'll make ___ to tell him this time.",
    accept: ["sure"],
    hint: "틀림없다는 뜻의 형용사",
    note: "make sure to는 꼭 그렇게 하겠다는 다짐입니다."
  },
  {
    id: "daily-people-197",
    category: "daily-people",
    ko: "가까이 있을 때 잘해야죠.",
    en: "You should ___ people while they're here.",
    accept: ["appreciate", "cherish"],
    hint: "귀하게 여긴다는 뜻의 동사",
    note: "appreciate someone은 그 사람의 소중함을 안다는 뜻입니다."
  },
  {
    id: "daily-people-198",
    category: "daily-people",
    ko: "제가 요즘 자주 하는 생각이에요.",
    en: "That's been on my ___ lately.",
    accept: ["mind"],
    hint: "생각이 자리 잡는 곳",
    note: "on my mind는 계속 마음에 걸린다는 뜻입니다."
  },
  {
    id: "daily-people-199",
    category: "daily-people",
    ko: "이런 얘기 하니까 좋네요.",
    en: "It's ___ to talk about this.",
    accept: ["nice", "good"],
    hint: "좋다는 뜻의 형용사",
    note: "It's nice to는 그렇게 하는 것이 좋다는 뜻입니다."
  },
  {
    id: "daily-people-200",
    category: "daily-people",
    ko: "들어주셔서 고마워요.",
    en: "Thanks for hearing me ___.",
    accept: ["out"],
    hint: "끝까지라는 뜻을 만드는 말",
    note: "hear someone out은 끝까지 들어준다는 뜻입니다."
  }
];
