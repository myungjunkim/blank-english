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
    en: "We don't have a reservation. Do you have any ___?",
    accept: ["openings", "availability"],
    hint: "비어 있는 자리를 뜻하는 명사",
    note: "walk-in은 예약 없이 온 손님을 뜻합니다."
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
    ko: "덜 익혀주세요.",
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
    ko: "이거 주문한 것과 다른 것 같아요.",
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
    en: "I'll have it ___.",
    accept: ["hot"],
    hint: "온도가 높다는 뜻의 형용사",
    note: "차가운 것은 iced라고 합니다."
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
    ko: "영수증이 없어도 되나요?",
    en: "Do I need the receipt, or is it ___?",
    accept: ["optional"],
    hint: "골라도 되고 안 해도 된다는 뜻의 형용사",
    note: "영수증 없이 교환이 안 되는 곳이 많습니다."
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
    en: "___ wishes on your wedding.",
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
    accept: ["handle", "drink"],
    hint: "감당하거나 마신다는 뜻의 동사",
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
    en: "Don't ___ a cold.",
    accept: ["catch", "get"],
    hint: "붙잡는다는 뜻의 동사가 병에도 쓰입니다",
    note: "catch a cold가 한 덩어리입니다. get a cold도 씁니다."
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
    ko: "제 부탁 하나만 들어주실 수 있나요?",
    en: "Could you do me a ___?",
    accept: ["solid"],
    hint: "단단하다는 뜻의 형용사가 명사로 쓰이면 '도움'이 됩니다",
    note: "do me a solid는 아주 편한 사이에서 쓰는 구어 표현입니다."
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
    en: "Let me ___ in and help.",
    accept: ["pitch"],
    hint: "던져 넣는다는 동사가 '거들다'라는 뜻이 됩니다",
    note: "pitch in은 여럿이 함께 일을 거든다는 뜻입니다."
  },
  {
    id: "daily-request-63",
    category: "daily-request",
    ko: "부탁 좀 드려도 될까요?",
    en: "Can I ___ on you for something?",
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
    ko: "확인 좀 부탁드립니다.",
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
    note: "Could you elaborate?가 더 격식 있는 표현입니다."
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
    accept: ["handle"],
    hint: "감당해 낸다는 뜻의 동사",
    note: "take it from here는 이어받아 처리하겠다는 뜻입니다." 
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
    ko: "그 내용 한번 확인해 주시겠어요?",
    en: "Could you ___ that again?",
    accept: ["confirm", "verify"],
    hint: "사실인지 다시 못 박는다는 동사",
    note: "confirm은 예약이나 일정 확인에도 자주 씁니다."
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
    ko: "이거 빌려가도 될까요?",
    en: "Can I ___ this with me?",
    accept: ["bring"],
    hint: "가지고 온다는 뜻의 기본 동사",
    note: "borrow는 그 자리에서 쓰고 돌려줄 때, take with me는 가져갈 때 씁니다."
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
    accept: ["place", "stead"],
    hint: "자리를 뜻하는 명사",
    note: "in my place는 '나 대신'이라는 뜻입니다."
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
    en: "It's ___ it.",
    accept: ["manageable"],
    hint: "감당할 수 있다는 뜻의 형용사",
    note: "manage(해내다)에 -able이 붙은 말입니다."
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
    ko: "저는 그게 마음에 들어요.",
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
    ko: "정말 답답해요.",
    en: "It's so ___.",
    accept: ["stifling", "suffocating"],
    hint: "숨이 막힌다는 뜻의 형용사",
    note: "공기와 상황 양쪽에 씁니다."
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
    en: "I'd ___ do that instead.",
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
    ko: "좀 놀라운데요.",
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
    accept: ["cannot", "can't"],
    hint: "가능성을 부정하는 조동사",
    note: "cannot be는 '그럴 리 없다'는 강한 추측입니다. 줄여서 can't be라고도 씁니다."
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
    ko: "솔직히 부담됩니다.",
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
    ko: "이건 액체인데 괜찮나요?",
    en: "Is this ___ allowed?",
    accept: ["liquid"],
    hint: "흐르는 물질을 뜻하는 명사",
    note: "기내 반입 액체는 보통 100ml까지입니다."
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
    accept: ["flying", "flight"],
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
    accept: ["vacant", "free"],
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
    ko: "유심 카드 파는 곳이 있나요?",
    en: "Is there a place that ___ SIM cards?",
    accept: ["sells"],
    hint: "판다는 뜻의 동사. 3인칭 단수형",
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
    ko: "몇 시부터 입실할 수 있나요?",
    en: "What time can I ___ in?",
    accept: ["get"],
    hint: "들어간다는 뜻을 만드는 기본 동사",
    note: "get in은 방에 들어갈 수 있는 시각을 뜻합니다."
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
    en: "Could you ___ the receipt to my email?",
    accept: ["email", "send"],
    hint: "전자우편으로 보낸다는 동사",
    note: "email은 명사와 동사로 모두 씁니다."
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
  }
];
