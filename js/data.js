// Comprehensive Data for Andong Tourist Guide with Bilingual (EN/KR) Support
const ANDONG_DATA = {
  attractions: [
    {
      id: "hahoe-village",
      name: { en: "Andong Hahoe Folk Village", kr: "안동 하회마을" },
      koreanName: "안동 하회마을",
      pronunciation: "Han-dong Ha-hoe Ma-eul",
      category: "unesco",
      rating: 4.9,
      reviewsCount: 1420,
      image: "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1000&q=80",
      shortDesc: {
        en: "UNESCO World Heritage site featuring preserved Joseon Dynasty architecture, tile-roofed nobility houses, and straw-thatched commoner cottages.",
        kr: "조선시대 전통 가옥과 양반의 기와집, 서민의 초가집이 잘 보존된 유네스코 세계문화유산 하회마을입니다."
      },
      description: {
        en: "Hahoe Folk Village is a representative folk village in Korea where descendants of the Ryu clan have lived for over 600 years. Surrounded by the winding Nakdong River (hence the name 'Hahoe', meaning 'river curving around'), it preserves traditional living culture, ancient houses, and the famous Hahoe Mask Dance Drama (Hahoe Pyolshin-gut Talnori).",
        kr: "하회마을은 풍산 류씨 가문이 600여 년간 대를 이어 살아온 한국의 대표적인 양반 집성촌입니다. 낙동강이 마을을 감싸 안고 흐르는 배산임수 지형(하회: 물이 회돌아 흐름)을 자랑하며, 하회별신굿탈놀이와 전통 가옥이 생생하게 보존되어 있습니다."
      },
      unesco: true,
      address: { en: "40 Hahoenam-gil, Pungcheon-myeon, Andong-si", kr: "경상북도 안동시 풍천면 하회남길 40" },
      koreanAddress: "경상북도 안동시 풍천면 하회남길 40",
      hours: { en: "09:00 - 18:00 (Summer) / 09:00 - 17:00 (Winter)", kr: "09:00 - 18:00 (하절기) / 09:00 - 17:00 (동절기)" },
      fee: { en: "Adults: ₩5,000 / Youth: ₩2,500 / Children: ₩1,500", kr: "성인: 5,000원 / 청소년: 2,500원 / 어린이: 1,500원" },
      busRoute: { en: "Bus #210 from Andong Station (approx. 45-50 mins)", kr: "안동역에서 210번 시내버스 탑승 (약 45~50분 소요)" },
      recommendedStay: { en: "2.5 - 3.5 hours", kr: "2.5시간 ~ 3.5시간" },
      highlights: {
        en: ["Hahoe Mask Dance Performance (Free)", "Buyongdae Cliff Viewpoint (Ferry crossing)", "600-year-old Elm Tree (Samsin-halmi tree)"],
        kr: ["하회별신굿탈놀이 무료 상설공연", "부용대 절벽 전망대 (나룻배 탑승)", "600년 된 삼신할매 당산나무"]
      },
      taxiPhrase: "기사님, 안동 하회마을 매표소로 가주세요."
    },
    {
      id: "byeongsan-seowon",
      name: { en: "Byeongsan Seowon Confucian Academy", kr: "병산서원" },
      koreanName: "병산서원",
      pronunciation: "Byeong-san Seowon",
      category: "unesco",
      rating: 4.8,
      reviewsCount: 890,
      image: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?auto=format&fit=crop&w=1000&q=80",
      shortDesc: {
        en: "A masterwork of Korean traditional architecture integrated seamlessly into nature, overlooking the Nakdong River and steep cliff face.",
        kr: "낙동강과 병산의 절경을 품은 한국 서원 건축의 최고 걸작이자 유네스코 세계유산입니다."
      },
      description: {
        en: "Byeongsan Seowon is a UNESCO World Heritage Confucian Academy built in memory of Ryu Seong-ryong. Known for Mandaeru Pavilion, a grand wooden hall with open pillars offering an unfiltered view of Mount Byeongsan across the river. It is widely praised as one of Korea's finest examples of architecture harmonizing with nature.",
        kr: "병산서원은 서애 류성룡 선생의 학문과 업적을 기리기 위해 건립된 유네스코 세계유산입니다. 특히 7칸 크기의 만대루에 올라서면 정면의 병산과 낙동강 백사장이 병풍처럼 펼쳐져 자연과의 조화가 극치에 달합니다."
      },
      unesco: true,
      address: { en: "386 Byeongsan-gil, Pungcheon-myeon, Andong-si", kr: "경상북도 안동시 풍천면 병산길 386" },
      koreanAddress: "경상북도 안동시 풍천면 병산길 386",
      hours: { en: "09:00 - 18:00 (Summer) / 09:00 - 17:00 (Winter)", kr: "09:00 - 18:00 (하절기) / 09:00 - 17:00 (동절기)" },
      fee: { en: "Free Entry", kr: "무료 입과" },
      busRoute: { en: "Bus #210 (selective departures direct to Byeongsan)", kr: "210번 버스 (병산서원 경유 노선 확인)" },
      recommendedStay: { en: "1 - 1.5 hours", kr: "1시간 ~ 1.5시간" },
      highlights: {
        en: ["Mandaeru Pavilion View", "Crape Myrtle Trees in Bloom (July-August)", "Quiet Riverside Reflection"],
        kr: ["만대루의 확 트인 낙동강 전경", "배롱나무(목백일홍) 꽃 풍경 (7~8월)", "호젓한 강변 산책로"]
      },
      taxiPhrase: "기사님, 병산서원으로 가주세요."
    },
    {
      id: "woryeonggyo-bridge",
      name: { en: "Woryeonggyo Bridge (Moonlight Bridge)", kr: "월영교" },
      koreanName: "월영교",
      pronunciation: "Wol-yeong-gyo",
      category: "nightview",
      rating: 4.9,
      reviewsCount: 2150,
      image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1000&q=80",
      shortDesc: {
        en: "The longest wooden footbridge in Korea, famous for stunning nighttime illuminations, moonlight boat rides, and romantic lake reflection.",
        kr: "국내 최장 목책 인도교로, 환상적인 야간 조명과 문보트 체험이 유명한 낭만적인 야경 명소입니다."
      },
      description: {
        en: "Spanning 387 meters across the Nakdong River, Woryeonggyo (Moonlight Bridge) was constructed in memory of a tragic love story discovered in an ancient grave: a wife who crafted hemp shoes out of her own hair for her sick husband. At dusk, the bridge lights up with brilliant colors, and the center pavilion offers a peaceful breeze.",
        kr: "길이 387m의 월영교는 먼저 세상을 떠난 남편을 위해 자신의 머리카락으로 미투리(짚신)를 짠 숭고한 사랑을 기리기 위해 만들어진 다리입니다. 밤이 되면 다리와 월영정에 화려한 조명이 켜지며 수면에 반사되는 모습이 일품입니다."
      },
      unesco: false,
      address: { en: "26 Woryeong-gil, Andong-si", kr: "경상북도 안동시 월영길 26" },
      koreanAddress: "경상북도 안동시 월영길 26",
      hours: { en: "Open 24 hours (Lighting show operates in evenings)", kr: "24시간 개방 (야간 조명 상시 점등)" },
      fee: { en: "Free Entry (Moon boat rides: ~₩28,000 per boat)", kr: "입장료 무료 (문보트/황포돛배 이용료 별도)" },
      busRoute: { en: "Bus #112 or #511 from Downtown / Andong Station (15 mins)", kr: "시내/안동역에서 112번 또는 511번 버스 (약 15분)" },
      recommendedStay: { en: "1 - 2 hours (Best at sunset & night)", kr: "1시간 ~ 2시간 (일몰 및 야간 방문 추천)" },
      highlights: {
        en: ["Moonlight Illuminated Walkway", "Moon Boat & Donut Boat rentals", "Andong Folk Museum nearby", "Autumn foliage around the lake"],
        kr: ["월영교 야간 조명 산책", "초승달 모양 문보트 탑승", "안동민속박물관 및 야외박물관", "호수 둘레길 단풍나무 산책로"]
      },
      taxiPhrase: "기사님, 월영교 주차장으로 가주세요."
    },
    {
      id: "nakgang-waterway-park",
      name: { en: "Nakgang Waterway Park (Secret Forest)", kr: "낙강물길공원" },
      koreanName: "낙강물길공원",
      pronunciation: "Nak-gang Mul-gil Gong-won",
      category: "nature",
      rating: 4.7,
      reviewsCount: 760,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      shortDesc: {
        en: "Nicknamed 'Andong's Secret Forest' or 'Korea's Giverny', a fairytale park with ponds, stepping stones, and majestic metasequoia trees.",
        kr: "'안동의 지베르니'라 불리는 동화 같은 수변 공원으로, 징검다리와 메타세쿼이아 숲이 인상적인 포토존입니다."
      },
      description: {
        en: "Located just below Andong Dam, Nakgang Waterway Park offers dreamy reflections on tranquil water features. With wooden bridges, mossy stepping stones, and lush foliage, it is one of the top photo spots for travelers visiting Andong.",
        kr: "안동댐 바로 아래 위치한 낙강물길공원은 이국적인 숲과 연못이 어우러져 '한국의 지베르니'라는 별명을 가지고 있습니다. 연못 위 징검다리와 숲속 벤치에서 사진을 남기기 좋습니다."
      },
      unesco: false,
      address: { en: "423 Sanga-dong, Andong-si", kr: "경상북도 안동시 상아동 423" },
      koreanAddress: "경상북도 안동시 상아동 423",
      hours: { en: "Open 24 hours", kr: "24시간 개방" },
      fee: { en: "Free Entry", kr: "무료 입장" },
      busRoute: { en: "Bus #112 to Andong Dam / Woryeonggyo stop + 10 min walk", kr: "112번 버스 탑승 후 월영교/안동댐 하차 도보 10분" },
      recommendedStay: { en: "45 mins - 1.5 hours", kr: "45분 ~ 1.5시간" },
      highlights: {
        en: ["Pond Stepping Stones Photo Spot", "Metasequoia Tree Canopy", "Shady Picnic Benches"],
        kr: ["연못 징검다리 스냅샷 포토존", "울창한 메타세쿼이아 숲길", "그늘진 피크닉 벤치"]
      },
      taxiPhrase: "기사님, 낙강물길공원 입구로 가주세요."
    },
    {
      id: "manhyujeong",
      name: { en: "Manhyujeong Pavilion", kr: "만휴정" },
      koreanName: "만휴정",
      pronunciation: "Man-hyu-jeong",
      category: "nature",
      rating: 4.8,
      reviewsCount: 1100,
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80",
      shortDesc: {
        en: "Famous shooting location for K-Drama 'Mr. Sunshine'. Features an iconic single log wooden bridge over a rocky waterfall gorge.",
        kr: "드라마 <미스터 션샤인> 촬영지로 유명한 정자로, 계곡 위를 지나는 외나무다리가 압권입니다."
      },
      description: {
        en: "Manhyujeong is a serene secluded pavilion built by Kim Kye-haeng in 1500. Nestled in a valley with cascading waterfalls and smooth rock formations, it rose to global fame after appearing in the hit drama 'Mr. Sunshine' ('Love me, and let's save Joseon together').",
        kr: "조선시대 문신 김계행이 만년에 벼슬을 버리고 고향으로 내려와 지은 정자입니다. 폭포와 반석이 어우러진 계곡 위 외나무다리는 드라마 <미스터 션샤인>의 명장면 촬영지로 수많은 관광객이 찾는 명소입니다."
      },
      unesco: false,
      address: { en: "42 Mukhye-gil, Giran-myeon, Andong-si", kr: "경상북도 안동시 길안면 묵계길 42" },
      koreanAddress: "경상북도 안동시 길안면 묵계길 42",
      hours: { en: "09:30 - 18:00 (Admission closed 17:30)", kr: "09:30 - 18:00 (입장 마감 17:30)" },
      fee: { en: "₩2,000 (Environmental maintenance ticket)", kr: "2,000원 (환경정화 봉투 제공)" },
      busRoute: { en: "Bus #610 from Andong Station (approx. 40 mins)", kr: "안동역에서 610번 시내버스 (약 40분)" },
      recommendedStay: { en: "1 - 1.5 hours", kr: "1시간 ~ 1.5시간" },
      highlights: {
        en: ["Iconic Wooden Bridge Photo", "Songam Waterfall", "Mukhye Head House Tea Culture"],
        kr: ["외나무다리 인생샷 포토존", "송암폭포 계곡 전경", "묵계종택 한옥 카페 체험"]
      },
      taxiPhrase: "기사님, 길안면 만휴정으로 가주세요."
    },
    {
      id: "dosan-seowon",
      name: { en: "Dosan Seowon Confucian Academy", kr: "도산서원" },
      koreanName: "도산서원",
      pronunciation: "Do-san Seowon",
      category: "unesco",
      rating: 4.7,
      reviewsCount: 950,
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      shortDesc: {
        en: "UNESCO World Heritage site honoring Yi Hwang (Toegye), Korea's most eminent Neo-Confucian scholar featured on the 1,000 KRW bill.",
        kr: "퇴계 이황 선생의 학문과 덕행을 기리는 유네스코 세계유산이자 1,000원 지폐의 배경지입니다."
      },
      description: {
        en: "Dosan Seowon sits surrounded by mountains on the shores of Lake Andong. It includes Dosan Seodang (the humble classroom Yi Hwang built himself) and the grand main academy grounds. Take note of the small artificial island 'Sisadae' in the lake opposite the academy.",
        kr: "안동호가 바라보이는 조용한 산자락에 위치한 도산서원은 퇴계 이황 선생이 제자들을 가르치던 도산서당과 사후 건립된 서원이 어우러진 공간입니다. 건너편 안동호 위 시사단(試士壇) 풍경도 일품입니다."
      },
      unesco: true,
      address: { en: "154 Dosanseowon-gil, Dosan-myeon, Andong-si", kr: "경상북도 안동시 도산면 도산서원길 154" },
      koreanAddress: "경상북도 안동시 도산면 도산서원길 154",
      hours: { en: "09:00 - 18:00 (Summer) / 09:00 - 17:00 (Winter)", kr: "09:00 - 18:00 (하절기) / 09:00 - 17:00 (동절기)" },
      fee: { en: "Adults: ₩1,500 / Youth: ₩700 / Children: ₩600", kr: "성인: 1,500원 / 청소년: 700원 / 어린이: 600원" },
      busRoute: { en: "Bus #567 from Andong Station (approx. 50 mins)", kr: "안동역에서 567번 버스 (약 50분 소요)" },
      recommendedStay: { en: "1.5 - 2 hours", kr: "1.5시간 ~ 2시간" },
      highlights: {
        en: ["Yi Hwang's Original Classroom", "Sisadae Island Monument", "Museum of Confucian Artifacts"],
        kr: ["퇴계 선생이 직접 지은 도산서당", "안동호 위 시사단 전망", "유교 유물 전시관 (옥진각)"]
      },
      taxiPhrase: "기사님, 도산서원 주차장으로 가주세요."
    },
    {
      id: "bongjeongsa",
      name: { en: "Bongjeongsa Temple", kr: "봉정사" },
      koreanName: "봉정사",
      pronunciation: "Bong-jeong-sa",
      category: "unesco",
      rating: 4.8,
      reviewsCount: 620,
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1000&q=80",
      shortDesc: {
        en: "UNESCO Heritage temple home to Geukrakjeon, the oldest surviving wooden building in South Korea.",
        kr: "한국에서 가장 오래된 목조건축물인 극락전을 보유한 유네스코 세계유산 사찰입니다."
      },
      description: {
        en: "Founded in 672 AD by Monk Uisang, Bongjeongsa Temple is legendary for its tranquil pine forest setting and historic treasures. Queen Elizabeth II famously visited this temple in 1999 to experience authentic Korean heritage and tradition.",
        kr: "신라 문무왕 12년(672년) 의상대사가 창건한 사찰로, 한국에서 현존하는 가장 오래된 목조건물인 극락전(국보)을 품고 있습니다. 1999년 영국 엘리자베스 2세 여왕이 방문하여 극찬한 사찰이기도 합니다."
      },
      unesco: true,
      address: { en: "222 Bongjeongsa-gil, Seohu-myeon, Andong-si", kr: "경상북도 안동시 서후면 봉정사길 222" },
      koreanAddress: "경상북도 안동시 서후면 봉정사길 222",
      hours: { en: "08:00 - 19:00", kr: "08:00 - 19:00" },
      fee: { en: "Adults: ₩2,000 / Youth: ₩1,300", kr: "성인: 2,000원 / 청소년: 1,300원" },
      busRoute: { en: "Bus #310 from Downtown Andong (approx. 30 mins)", kr: "시내에서 310번 버스 (약 30분 소요)" },
      recommendedStay: { en: "1 - 2 hours", kr: "1시간 ~ 2시간" },
      highlights: {
        en: ["Geukrakjeon Hall (Oldest Wooden Structure in Korea)", "Daeungjeon Hall", "Hermitage Yeongsan-am Garden"],
        kr: ["국내 최고(最古) 목조건물 극락전", "대웅전 및 영산암 한옥 정원", "소나무 숲길 산책로"]
      },
      taxiPhrase: "기사님, 서후면 봉정사 매표소로 가주세요."
    },
    {
      id: "andong-market",
      name: { en: "Andong Old Market & Jjimdak Alley", kr: "안동 구시장 & 찜닭골목" },
      koreanName: "안동 구시장 & 찜닭골목",
      pronunciation: "Han-dong Gu-si-jang & Jjim-dak Gol-mok",
      category: "culture",
      rating: 4.8,
      reviewsCount: 3100,
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
      shortDesc: {
        en: "Vibrant traditional covered market lined with dozens of authentic Jjimdak eateries, street snacks, and traditional produce.",
        kr: "안동찜닭의 본고장이자 다양한 미식과 전통 먹거리가 가득한 활기찬 전통시장입니다."
      },
      description: {
        en: "The heart of Andong's culinary culture! Originating in the 1980s inside this very market, Andong Jjimdak Alley contains over 30 specialized restaurants cooking giant woks of savory-spicy braised chicken right before your eyes.",
        kr: "안동 미식 여행의 중심지! 1980년대 구시장 내부에서 형성된 찜닭골목에는 30여 개가 넘는 찜닭 전문점이 줄지어 있으며, 대형 솥에서 끓여내는 매콤달콤한 찜닭의 풍미를 맛볼 수 있습니다."
      },
      unesco: false,
      address: { en: "Beonyeong 1-gil, Andong-si", kr: "경상북도 안동시 번영1길 (안동 구시장)" },
      koreanAddress: "경상북도 안동시 번영1길 (안동 구시장)",
      hours: { en: "09:00 - 22:00 (Varies by store)", kr: "09:00 - 22:00 (점포별 상이)" },
      fee: { en: "Free Entry", kr: "무료 입장" },
      busRoute: { en: "10 min walk from Andong KTX Station / Central Bus Terminal", kr: "안동역/시내 중심가에서 도보 10분" },
      recommendedStay: { en: "1.5 - 2 hours", kr: "1.5시간 ~ 2시간" },
      highlights: {
        en: ["Freshly Cooked Wok Jjimdak", "Traditional Tteok & Rice Cakes", "Night Street Food Stalls"],
        kr: ["갓 볶아낸 원조 안동찜닭", "전통 떡 및 야시장 먹거리", "안동 갈비골목 연계 투어"]
      },
      taxiPhrase: "기사님, 안동 구시장 찜닭골목으로 가주세요."
    }
  ],

  foods: [
    {
      id: "andong-jjimdak",
      name: { en: "Andong Jjimdak", kr: "안동찜닭" },
      koreanName: "안동찜닭",
      pronunciation: "Han-dong Jjim-dak",
      category: { en: "Main Dish", kr: "메인 요리" },
      spiceLevel: { en: "Medium to Spicy", kr: "보통 ~ 매운맛" },
      vegetarian: false,
      priceRange: "₩28,000 - ₩35,000 (2~3인분)",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
      shortDesc: {
        en: "Savory soy-sauce braised chicken with bouncy glass noodles, potatoes, carrots, and spicy green chilies.",
        kr: "간장 양념에 닭고기, 당면, 감자, 채소, 청양고추를 넣어 짭조름하고 매콤하게 졸여낸 안동 대표 대표 요리입니다."
      },
      description: {
        en: "Andong's signature global culinary pride! Tender chicken chunks simmered in a rich garlic-soy glaze infused with dried red peppers and Cheongyang chili. Served in colossal sharing platters alongside chewy cellophane noodles.",
        kr: "안동을 대표하는 세계적인 미식! 마늘과 간장 양념 기반에 건고추와 청양고추로 칼칼함을 더한 푸짐한 찜닭으로, 쫄깃한 당면과 달콤한 감자의 조합이 일품입니다."
      },
      eatingTip: {
        en: "Eat the glass noodles first so they don't absorb all the broth! You can ask for 'Sun-han-mat' (순한맛 - mild/less spicy) if you cannot eat spicy food.",
        kr: "당면이 국물을 흡수하기 전에 당면부터 드세요! 매운 음식을 못 드시는 분은 '순한맛'으로 주문하시면 됩니다."
      },
      whereToTry: { en: "Jjimdak Alley in Andong Old Market", kr: "안동 구시장 찜닭골목 (유진찜닭, 현대찜닭, 중앙찜닭 등)" },
      koreanOrderPhrase: "사장님, 찜닭 중자 순한맛으로 주세요."
    },
    {
      id: "heotjesatbap",
      name: { en: "Heotjesatbap (Mock Ancestral Rice)", kr: "헛제삿밥" },
      koreanName: "헛제삿밥",
      pronunciation: "Heot-je-sat-bap",
      category: { en: "Traditional Meal", kr: "전통 한상" },
      spiceLevel: { en: "Non-Spicy / Mild", kr: "안 매움 / 순함" },
      vegetarian: true,
      priceRange: "₩13,000 - ₩20,000 (1인 기준)",
      image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?auto=format&fit=crop&w=800&q=80",
      shortDesc: {
        en: "A noble Bibimbap-style feast seasoned with soy sauce instead of spicy chili paste, served with grilled fish & side dishes.",
        kr: "고추장 대신 간장으로 비벼 먹는 안동 선비들의 야식 문화에서 유래한 고소하고 슴슴한 제사 음식 형태의 비빔밥입니다."
      },
      description: {
        en: "Historically, Confucian scholars in Andong cooked mock ceremonial feast foods during late-night study sessions even when no ancestral rite was held. Features steamed rice mixed with mountain herbs, bean sprouts, radish, accompanied by savory soy sauce dressing, beef/fish skewers, and soup.",
        kr: "조선시대 안동 유생들이 제사를 지내지 않고도 제삿밥처럼 차려 먹던 데서 유래한 향토 음식입니다. 고사리, 도라지 등 각종 나물과 탕국, 돔배기(전적), 간장 양념이 함께 나옵니다."
      },
      eatingTip: {
        en: "Mix the rice with the provided seasoned soy sauce (Ganjang) rather than red Gochujang to enjoy subtle authentic mountain herb flavors!",
        kr: "고추장 대신 양념 간장을 넣어 비벼 드시면 산나물 본연의 담백하고 깊은 풍미를 즐기실 수 있습니다."
      },
      whereToTry: { en: "Matkkadul Heotjesatbap near Woryeonggyo Bridge", kr: "월영교 주변 헛제삿밥 전문점 (맛까끌 헛제삿밥 등)" },
      koreanOrderPhrase: "헛제삿밥 2인분 주세요."
    },
    {
      id: "gan-godeungeo",
      name: { en: "Andong Salted Mackerel (Gan-godeungeo)", kr: "안동 간고등어" },
      koreanName: "안동 간고등어",
      pronunciation: "Gan Go-deung-eo",
      category: { en: "Seafood Set", kr: "생선 구이/조림" },
      spiceLevel: { en: "Non-Spicy", kr: "안 매움" },
      vegetarian: false,
      priceRange: "₩12,000 - ₩16,000 (1인 정식)",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
      shortDesc: {
        en: "Crispy grilled ocean mackerel salted with traditional aging techniques for rich umami flavor.",
        kr: "내륙 지방인 안동으로 해산물을 수송하며 발전한 전통 염장 기법의 짭조름하고 고소한 고등어 구이입니다."
      },
      description: {
        en: "Because Andong is inland, fish caught in coastal Yeongdeok were transported over mountain passes on foot. Salting the mackerel at the final pass allowed peak enzyme fermentation, producing incredibly juicy, fragrant, savory grilled fish.",
        kr: "동해안 영덕에서 잡은 고등어를 안동까지 운송하는 과정에서 수운재 고개에서 소금을 간하여 숙성시킨 전통 염장 생선입니다. 겉은 바삭하고 속은 촉촉한 감칠맛이 최고입니다."
      },
      eatingTip: {
        en: "Best paired with piping hot white rice, soybean paste soup (Doenjang-jjigae), and side dishes.",
        kr: "갓 지은 쌀밥 위에 짭조름한 간고등어 살과 된장찌개를 얹어 함께 드시면 밥도둑이 따로 없습니다."
      },
      whereToTry: { en: "Iljik Sikdang (near Andong KTX Station)", kr: "안동역 근처 일직식당" },
      koreanOrderPhrase: "간고등어 구이 정식 주세요."
    },
    {
      id: "mammoth-bakery",
      name: { en: "Mammoth Bakery (Cream Cheese Bread)", kr: "맘모스베이커리" },
      koreanName: "맘모스베이커리",
      pronunciation: "Mam-mo-seu Bakery",
      category: { en: "Bakery & Dessert", kr: "베이커리 / 디저트" },
      spiceLevel: { en: "Sweet & Savory", kr: "달콤 & 고소" },
      vegetarian: true,
      priceRange: "₩3,000 - ₩5,000 (개당)",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      shortDesc: {
        en: "Awarded Michelin Green Guide star! Famous nationwide for ultra-soft Cream Cheese Bread topped with parsley.",
        kr: "미슐랭 그린가이드 수록! 쫄깃한 빵 속에 달콤 고소한 크림치즈가 듬뿍 들어간 전국구 명물 빵집입니다."
      },
      description: {
        en: "One of Korea's legendary top 3 bakeries, operating in downtown Andong since 1980. Their signature Cream Cheese Bread has a chewy, mochi-like sourdough exterior filled with rich, tangily sweet cream cheese filling.",
        kr: "1980년부터 안동 시내 중심가를 지켜온 대한민국 3대 빵집 중 하나입니다. 시그니처 크림치즈빵은 쫄깃한 식감과 진한 크림치즈의 조화로 전국적인 사랑을 받고 있습니다."
      },
      eatingTip: {
        en: "Lines can form quickly! Visit in the morning or early afternoon to guarantee fresh hot batches.",
        kr: "인기가 많아 조기 품절될 수 있으니 오전이나 점심 시간 직후에 방문하시는 것을 추천합니다."
      },
      whereToTry: { en: "Downtown Andong Cultural Street (Munhwa-gil 46)", kr: "안동 시내 문화의거리 (경상북도 안동시 문화길 46)" },
      koreanOrderPhrase: "크림치즈빵 대표로 주세요."
    },
    {
      id: "andong-soju",
      name: { en: "Traditional Andong Soju", kr: "안동소주" },
      koreanName: "안동소주",
      pronunciation: "Han-dong So-ju",
      category: { en: "Beverage / Spirit", kr: "전통주 / 증류주" },
      spiceLevel: { en: "Alcohol ABV 22% - 45%", kr: "도수 22% ~ 45%" },
      vegetarian: true,
      priceRange: "₩10,000 - ₩45,000 (병당)",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
      shortDesc: {
        en: "Premium 700-year-old traditional distilled rice spirit brewed with pure spring water.",
        kr: "700년 역사를 지닌 100% 쌀과 은은한 은곡수로 증류해낸 대한민국 대표 명품 전통주입니다."
      },
      description: {
        en: "Unlike modern mass-produced green-bottle diluted soju, authentic Andong Soju is distilled from fermented pure rice using techniques inherited from the Mongol era in the 13th century. It boasts a clean, fragrant floral rice aroma and silky smooth finish.",
        kr: "일반 희석식 초록병 소주와 달리 쌀로 누룩을 만들어 증류한 고려시대 몽골 유래 전통 증류주입니다. 깊고 그윽한 쌀 향과 숙취가 없는 깔끔한 목넘김이 특징입니다."
      },
      eatingTip: {
        en: "Try the 22% ABV for beginners, or the 45% original craft batch for true spirits enthusiasts. Sip neat or with ice.",
        kr: "입문자는 22도 제품을, 매니아는 45도 전통 방식을 추천합니다. 온더락이나 스트레이트로 음미해보세요."
      },
      whereToTry: { en: "Andong Soju Museum & Traditional Distilleries", kr: "안동소주 박물관 및 명인 양조장" },
      koreanOrderPhrase: "안동소주 선물용으로 추천해주세요."
    }
  ],

  itineraries: [
    {
      id: "heritage-1day",
      title: { en: "Essential 1-Day UNESCO Cultural Heritage Tour", kr: "1일 유네스코 핵심 문화유산 투어" },
      subtitle: { en: "Experience 600 years of living tradition and breathtaking evening views.", kr: "600년 역사의 유네스코 유산과 야경을 하루 만에 돌아보는 대표 코스" },
      duration: { en: "1 Day (approx. 8 hours)", kr: "1일 코스 (약 8시간)" },
      tag: { en: "Most Popular", kr: "인기 최고" },
      steps: [
        { time: "09:30 AM", placeId: "hahoe-village", title: { en: "Explore Hahoe Folk Village", kr: "하회마을 산책 & 부용대" }, tip: { en: "Walk along the pine forest river paths and watch the Mask Dance Drama at 14:00.", kr: "솔숲 강변길을 걷고 오후 2시 하회별신굿탈놀이를 관람하세요." } },
        { time: "01:00 PM", placeId: "andong-market", title: { en: "Lunch at Jjimdak Alley", kr: "안동 구시장 찜닭 점심" }, tip: { en: "Head to Old Market for a feast of authentic Andong Jjimdak.", kr: "구시장 찜닭골목에서 원조 안동찜닭을 맛보세요." } },
        { time: "03:00 PM", placeId: "byeongsan-seowon", title: { en: "Relax at Byeongsan Seowon", kr: "병산서원 만대루 감상" }, tip: { en: "Sit quietly under Mandaeru Pavilion facing the river.", kr: "만대루 기둥 사이로 보이는 낙동강 풍경을 조용히 감상하세요." } },
        { time: "06:30 PM", placeId: "woryeonggyo-bridge", title: { en: "Moonlight Walk at Woryeonggyo", kr: "월영교 야경 & 문보트" }, tip: { en: "Watch the bridge lights turn on at twilight and enjoy a Moon Boat ride.", kr: "노을이 질 무렵 조명이 켜지는 월영교를 걷고 문보트를 타보세요." } }
      ]
    },
    {
      id: "spirit-2day",
      title: { en: "2-Day Complete Andong Immersion Route", kr: "2일 안동 완전 정복 심화 코스" },
      subtitle: { en: "From ancient Confucian academies to secret mossy forests and famous bakeries.", kr: "서원부터 힐링 숲, 미슐랭 빵집까지 알차게 즐기는 1박 2일 코스" },
      duration: { en: "2 Days / 1 Night", kr: "1박 2일" },
      tag: { en: "In-Depth", kr: "심화 코스" },
      steps: [
        { time: "Day 1 - 10:00 AM", placeId: "hahoe-village", title: { en: "Hahoe Village & Ferry Crossing", kr: "하회마을 & 나룻배 탐방" }, tip: { en: "Take the wooden ferry across to Buyongdae Cliff for panoramic aerial view.", kr: "나룻배를 타고 부용대에 올라 하회마을 전체 전경을 내려다보세요." } },
        { time: "Day 1 - 01:30 PM", placeId: "andong-market", title: { en: "Market Lunch & Bakery Walk", kr: "구시장 찜닭 & 맘모스베이커리" }, tip: { en: "Eat Jjimdak then grab Cream Cheese Bread at Mammoth Bakery.", kr: "찜닭 점심 후 문화의거리 맘모스베이커리에서 크림치즈빵을 챙기세요." } },
        { time: "Day 1 - 07:00 PM", placeId: "woryeonggyo-bridge", title: { en: "Woryeonggyo Bridge & Heotjesatbap Dinner", kr: "월영교 야경 & 헛제삿밥 저녁" }, tip: { en: "Dine on traditional mock-ancestral rice near the illuminated bridge.", kr: "월영교 근처에서 정갈한 헛제삿밥을 먹고 야경 산책을 즐기세요." } },
        { time: "Day 2 - 10:00 AM", placeId: "dosan-seowon", title: { en: "Dosan Seowon & Lake Andong", kr: "도산서원 & 안동호 전망" }, tip: { en: "Visit scholar Yi Hwang's serene academy beside the waters.", kr: "퇴계 이황 선생의 도산서당과 시사단을 탐방하세요." } },
        { time: "Day 2 - 01:00 PM", placeId: "nakgang-waterway-park", title: { en: "Picnic at Nakgang Secret Forest", kr: "낙강물길공원 힐링 산책" }, tip: { en: "Take magical photos at the stepping stones and pond.", kr: "연못 징검다리에서 스냅 사진을 촬영하세요." } },
        { time: "Day 2 - 03:30 PM", placeId: "manhyujeong", title: { en: "Mr. Sunshine Bridge at Manhyujeong", kr: "만휴정 외나무다리 인생샷" }, tip: { en: "Walk across the romantic log bridge over the waterfall.", kr: "드라마 촬영지인 외나무다리에서 여행 마무리를 남기세요." } }
      ]
    },
    {
      id: "express-halfday",
      title: { en: "Half-Day Express City & Night View Route", kr: "반일 알짜 당일치기/야경 코스" },
      subtitle: { en: "Perfect for travelers arriving by KTX train with limited time.", kr: "KTX열차 이용객을 위한 핵심 시내 & 야경 4시간 코스" },
      duration: { en: "4 - 5 Hours", kr: "4~5시간" },
      tag: { en: "Express", kr: "당일치기" },
      steps: [
        { time: "03:00 PM", placeId: "andong-market", title: { en: "Arrival & Downtown Gourmet Walk", kr: "안동역 도착 & 미식 투어" }, tip: { en: "Short walk from KTX station to sample Salted Mackerel or Jjimdak.", kr: "역에서 가까운 갈비골목/찜닭골목/간고등어 식당 방문." } },
        { time: "05:00 PM", placeId: "nakgang-waterway-park", title: { en: "Nakgang Waterway Park", kr: "낙강물길공원 산책" }, tip: { en: "Golden hour photo session by the forest pond.", kr: "해 질 녘 지베르니 숲속 연못 둘러보기." } },
        { time: "06:30 PM", placeId: "woryeonggyo-bridge", title: { en: "Woryeonggyo Night View", kr: "월영교 조명 야경 감상" }, tip: { en: "Experience Korea's footbridge lighting before train departure.", kr: "기차 탑승 전 월영교 조명을 감상하며 여행 마무리." } }
      ]
    }
  ],

  phrases: [
    { category: "Taxi", english: "Please take me to [Destination]", korean: "기사님, [목적지]로 가주세요.", romaja: "Gisa-nim, [Destination]-ro ga-ju-se-yo" },
    { category: "Taxi", english: "Please stop here.", korean: "여기서 세워주세요.", romaja: "Yeo-gi-seo se-wo-ju-se-yo" },
    { category: "Restaurant", english: "Please make it less spicy.", korean: "덜 매운맛으로 해주세요.", romaja: "Deol mae-un-mat-eu-ro hae-ju-se-yo" },
    { category: "Restaurant", english: "Is this dish spicy?", korean: "이 음식 매워요?", romaja: "I eum-sik mae-wo-yo?" },
    { category: "Restaurant", english: "Water, please.", korean: "물 좀 주세요.", romaja: "Mul jom ju-se-yo" },
    { category: "Restaurant", english: "Can I get the check, please?", korean: "계산해 주세요.", romaja: "Gye-san-hae ju-se-yo" },
    { category: "Direction", english: "Where is the bus stop?", korean: "버스 정류장이 어디예요?", romaja: "Beo-seujeong-ryu-jang-i eo-di-yeo-yo?" },
    { category: "Direction", english: "Where is the restroom?", korean: "화장실이 어디예요?", romaja: "Hwa-jang-sil-i eo-di-yeo-yo?" },
    { category: "General", english: "Hello!", korean: "안녕하세요!", romaja: "An-nyeong-ha-se-yo" },
    { category: "General", english: "Thank you!", korean: "감사합니다!", romaja: "Gam-sa-ham-ni-da" },
    { category: "General", english: "Do you accept credit cards?", korean: "카드 돼요?", romaja: "Ka-deu dwae-yo?" }
  ],

  buses: [
    {
      routeNumber: "Bus #210",
      destination: { en: "Hahoe Folk Village (하회마을)", kr: "하회마을" },
      departure: { en: "Andong Station (KTX) / Downtown Bus Stop", kr: "안동역(KTX) / 시내 정류장" },
      frequency: { en: "Every 30-40 mins", kr: "30~40분 간격" },
      travelTime: { en: "~45 mins", kr: "약 45분" },
      note: { en: "Selected departures extend directly to Byeongsan Seowon! Pay using T-Money card or contactless credit card.", kr: "일부 시간대는 병산서원까지 직행합니다. 교통카드(T-Money/신용카드) 결제 가능." }
    },
    {
      routeNumber: "Bus #567",
      destination: { en: "Dosan Seowon (도산서원)", kr: "도산서원" },
      departure: { en: "Andong Station / Downtown Bus Terminal", kr: "안동역 / 시내 버스 정류장" },
      frequency: { en: "Runs 5-6 times daily", kr: "1일 5~6회 운행" },
      travelTime: { en: "~50 mins", kr: "약 50분" },
      note: { en: "Check schedule at tourist office before boarding.", kr: "승차 전 역 안내소에서 출발 시간표를 확인하세요." }
    },
    {
      routeNumber: "Bus #112 / #511",
      destination: { en: "Woryeonggyo Bridge & Nakgang Park", kr: "월영교 & 낙강물길공원" },
      departure: { en: "Downtown Andong / Station Area", kr: "안동 시내 / 역 주변" },
      frequency: { en: "Every 25-35 mins", kr: "25~35분 간격" },
      travelTime: { en: "~15 mins", kr: "약 15분" },
      note: { en: "Easy short ride from city center.", kr: "시내 중심가에서 쉽게 이동 가능." }
    },
    {
      routeNumber: "Bus #310",
      destination: { en: "Bongjeongsa Temple (봉정사)", kr: "봉정사" },
      departure: { en: "Downtown Bus Stop", kr: "안동 시내 정류장" },
      frequency: { en: "Runs 7 times daily", kr: "1일 7회 운행" },
      travelTime: { en: "~30 mins", kr: "약 30분" },
      note: { en: "Scenic rural bus route.", kr: "아름다운 시골길 버스 노선." }
    }
  ]
};
