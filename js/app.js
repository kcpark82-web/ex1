// Discover Andong App Logic with Bilingual (EN/KR) Support

document.addEventListener('DOMContentLoaded', () => {
  // State Management
  let activeTab = 'all';
  let favorites = JSON.parse(localStorage.getItem('andong_favorites')) || [];
  let currentLang = localStorage.getItem('andong_lang') || 'en'; // 'en' or 'kr'

  // Translation Dictionary for Static UI Elements
  const I18N = {
    en: {
      "brand-sub": "Spirit of Korea",
      "nav-attractions": "Attractions",
      "nav-food": "Food & Dining",
      "nav-itinerary": "Itineraries",
      "nav-taxi": "Taxi Helper",
      "nav-survival": "Survival Kit",
      "btn-currency": "KRW Calculator",
      "btn-mytrip": "My Trip",
      "hero-tag": "🏛️ UNESCO World Heritage & Gastronomy Capital",
      "hero-title": "Experience the Heart of Traditional Korea in Andong",
      "hero-subtitle": "Ancient hanok folk villages, tranquil Confucian academies, famous Jjimdak, and enchanting moonlight bridges.",
      "search-placeholder": "Search places (e.g., Hahoe Village, Jjimdak, Night View)...",
      "btn-search": "Explore",
      "tag-all": "✨ All Highlights",
      "tag-unesco": "🏛️ UNESCO Sites",
      "tag-jjimdak": "🍲 Must-Eat Food",
      "tag-nightview": "🌙 Night View",
      "tag-nature": "🌿 Nature Parks",
      "attractions-title": "Must-Visit Attractions",
      "attractions-subtitle": "Discover centuries of history, culture, and natural beauty in Andong",
      "tab-all": "All Places",
      "tab-unesco": "🏛️ UNESCO Heritage",
      "tab-nightview": "🌙 Night Views",
      "tab-nature": "🌿 Nature & Scenic",
      "tab-culture": "🎭 Culture & Market",
      "taxi-badge": "🚕 Foreigner Survival Feature",
      "taxi-title": "Show-to-Taxi-Driver Card",
      "taxi-desc": "Don't worry about speaking Korean! Pick your destination below, show this screen to your taxi driver, or press the Audio button to let your phone speak Korean aloud for you.",
      "btn-speak-taxi": "Speak Korean Aloud",
      "btn-copy-taxi": "Copy Korean Text",
      "food-title": "Andong Gastronomy Guide",
      "food-subtitle": "Savor famous local specialties from spicy braised chicken to Michelin-starred bakery bread",
      "itinerary-title": "Recommended Travel Itineraries",
      "itinerary-subtitle": "Optimized routes tailored for 1-day trips, 2-day explorations, or express city tours",
      "survival-title": "Foreigner Survival Kit",
      "survival-subtitle": "Useful Korean phrases with audio pronunciation, local bus routes, and 24/7 tourist helpline",
      "phrases-heading": "🗣️ Useful Korean Phrases with Audio",
      "bus-heading": "🚌 City Bus Transport Guide",
      "emergency-heading": "📞 24/7 Tourist Support & Emergency Hotline",
      "em-1330-title": "Korea Travel Hotline (1330)",
      "em-1330-desc": "Free 24/7 English, Japanese, and Chinese tourist interpretation, bus routes, and assistance.",
      "em-desk-title": "Andong KTX Station Tourist Office",
      "em-desk-desc": "Located right inside the train station lobby for free paper maps & guidance.",
      "em-911-title": "Emergency (Police & Medical)",
      "em-911-desc": "For urgent medical or emergency police assistance anywhere in Korea.",
      "footer-desc": "Your ultimate companion for exploring Andong, Gyeongsangbuk-do. Built specifically for foreign travelers to easily navigate culture, food, transport, and heritage.",
      "footer-links-title": "Quick Navigation",
      "footer-info-title": "Key Info"
    },
    kr: {
      "brand-sub": "한국 정신문화의 수도",
      "nav-attractions": "관광 명소",
      "nav-food": "안동 미식 가이드",
      "nav-itinerary": "추천 여행 코스",
      "nav-taxi": "택시 도우미",
      "nav-survival": "외국인 서바이벌",
      "btn-currency": "원화 환율 계산기",
      "btn-mytrip": "내 여행 일정",
      "hero-tag": "🏛️ 유네스코 세계유산 & 미식의 도시",
      "hero-title": "한국의 전통과 숨결이 살아 숨 쉬는 안동으로",
      "hero-subtitle": "600년 역사의 하회마을, 호젓한 서원, 원조 안동찜닭, 달빛 가득한 월영교를 경험해보세요.",
      "search-placeholder": "명소 또는 요리 검색 (예: 하회마을, 찜닭, 야경)...",
      "btn-search": "검색하기",
      "tag-all": "✨ 전체 명소",
      "tag-unesco": "🏛️ 유네스코 유산",
      "tag-jjimdak": "🍲 추천 먹거리",
      "tag-nightview": "🌙 야경 명소",
      "tag-nature": "🌿 힐링 숲/공원",
      "attractions-title": "안동 필수 방문 명소",
      "attractions-subtitle": "수백 년의 역사와 수려한 자연경관이 어우러진 안동의 대표 명소",
      "tab-all": "전체 보기",
      "tab-unesco": "🏛️ 유네스코 세계유산",
      "tab-nightview": "🌙 야경 추천",
      "tab-nature": "🌿 자연 & 힐링",
      "tab-culture": "🎭 문화 & 시장",
      "taxi-badge": "🚕 외국인 필수 편의 기능",
      "taxi-title": "택시 기사님 보여주기 카드",
      "taxi-desc": "한국어를 못해도 걱정하지 마세요! 목적지를 선택하고 이 화면을 기사님께 보여주거나 음성 재생 버튼을 누르면 스마트폰이 대신 한국어로 말해줍니다.",
      "btn-speak-taxi": "한국어 음성 재생",
      "btn-copy-taxi": "한국어 문구 복사",
      "food-title": "안동 대표 미식 가이드",
      "food-subtitle": "매콤달콤 안동찜닭부터 헛제삿밥, 미슐랭 빵집 크림치즈빵까지 안동의 대표 맛집 탐방",
      "itinerary-title": "맞춤형 추천 여행 코스",
      "itinerary-subtitle": "당일치기, 1박 2일, 반일 알짜 야경 코스까지 최적화된 동선 제공",
      "survival-title": "외국인 서바이벌 키트",
      "survival-subtitle": "음성 지원 필수 한국어 회화, 시내버스 가이드, 24시간 외국인 관광 핫라인",
      "phrases-heading": "🗣️ 음성 지원 필수 한국어 회화",
      "bus-heading": "🚌 안동 시내버스 노선 가이드",
      "emergency-heading": "📞 24시간 관광 안내 & 긴급 연락처",
      "em-1330-title": "관광 통역 안내 전화 (1330)",
      "em-1330-desc": "24시간 무료 영어, 일어, 중국어 관광 통역 및 버스/관광 안내.",
      "em-desk-title": "안동역 KTX 관광안내소",
      "em-desk-desc": "안동역 로비 내 위치 / 무료 관광 지적 및 안내 제공.",
      "em-911-title": "긴급 구조 (경찰 & 병원)",
      "em-911-desc": "긴급 의료 지원 (119) 및 경찰 신고 (112).",
      "footer-desc": "경상북도 안동시를 방문하는 외국인 관광객을 위한 맞춤형 가이드입니다. 전통 문화, 미식, 교통 정보를 손쉽게 이용하세요.",
      "footer-links-title": "빠른 메뉴",
      "footer-info-title": "주요 정보"
    }
  };

  // DOM Elements
  const attractionGrid = document.getElementById('attraction-grid');
  const foodGrid = document.getElementById('food-grid');
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  const filterTabs = document.querySelectorAll('.tab-btn');
  const tagBtns = document.querySelectorAll('.tag-btn');
  const favoriteCountBadge = document.getElementById('trip-count');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalContainer = document.getElementById('modal-container');
  const modalCloseBtn = document.getElementById('modal-close');
  const taxiSelect = document.getElementById('taxi-destination-select');
  const taxiCardKorean = document.getElementById('taxi-korean-text');
  const taxiCardEnglish = document.getElementById('taxi-english-text');
  const taxiSpeakBtn = document.getElementById('btn-speak-taxi');
  const taxiCopyBtn = document.getElementById('btn-copy-taxi');
  const toast = document.getElementById('toast-notification');
  const toastMessage = document.getElementById('toast-message');
  const langToggleBtn = document.getElementById('btn-lang-toggle');
  const langToggleLabel = document.getElementById('lang-toggle-label');

  // Initialize App
  init();

  function init() {
    applyLanguage(currentLang);
    setupEventListeners();
  }

  // --- Language Switching ---

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('andong_lang', lang);

    // Update toggle button text
    if (langToggleLabel) {
      langToggleLabel.textContent = lang === 'en' ? '한국어' : 'English';
    }

    // Update static HTML text elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (I18N[lang] && I18N[lang][key]) {
        el.textContent = I18N[lang][key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (I18N[lang] && I18N[lang][key]) {
        el.placeholder = I18N[lang][key];
      }
    });

    // Re-render all dynamic lists with current language
    renderAttractions(activeTab, searchInput ? searchInput.value : '');
    renderFood();
    renderItineraries();
    renderPhrases();
    renderBuses();
    populateTaxiDropdown();
    updateFavoriteCount();
  }

  function toggleLanguage() {
    const nextLang = currentLang === 'en' ? 'kr' : 'en';
    applyLanguage(nextLang);
    showToast(nextLang === 'en' ? 'Switched to English' : '한국어로 변경되었습니다');
  }

  // --- Render Functions ---

  function renderAttractions(filterCategory = 'all', searchQuery = '') {
    if (!attractionGrid) return;
    attractionGrid.innerHTML = '';

    let items = ANDONG_DATA.attractions;

    if (filterCategory !== 'all') {
      items = items.filter(item => item.category === filterCategory);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      items = items.filter(item => {
        const nameText = (item.name[currentLang] || item.name.en).toLowerCase();
        const shortDescText = (item.shortDesc[currentLang] || item.shortDesc.en).toLowerCase();
        return nameText.includes(q) || item.koreanName.includes(q) || shortDescText.includes(q);
      });
    }

    if (items.length === 0) {
      attractionGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
          <h3>${currentLang === 'en' ? 'No attractions found' : '검색 결과가 없습니다'}</h3>
          <p>${currentLang === 'en' ? 'Try searching for a different keyword or select another category.' : '다른 키워드로 검색하거나 다른 카테고리를 선택해보세요.'}</p>
        </div>
      `;
      return;
    }

    items.forEach(place => {
      const isFav = favorites.includes(place.id);
      const title = place.name[currentLang] || place.name.en;
      const shortDesc = place.shortDesc[currentLang] || place.shortDesc.en;
      const stayTime = place.recommendedStay[currentLang] || place.recommendedStay.en;

      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="card-image-wrap">
          <img src="${place.image}" alt="${title}" class="card-image" loading="lazy" />
          ${place.unesco ? `<span class="badge-unesco">${currentLang === 'en' ? '🏛️ UNESCO Heritage' : '🏛️ 유네스코 세계유산'}</span>` : ''}
          <span class="badge-category">${capitalize(place.category)}</span>
          <button class="btn-favorite ${isFav ? 'active' : ''}" data-id="${place.id}" title="${isFav ? 'Remove' : 'Add to My Trip'}">
            ${isFav ? '❤️' : '🤍'}
          </button>
        </div>
        <div class="card-body">
          <div class="card-title-row">
            <h3 class="card-title">${title}</h3>
          </div>
          <div class="card-korean-name">${place.koreanName} (${place.pronunciation})</div>
          <p class="card-desc">${shortDesc}</p>
          <div class="card-meta">
            <span class="meta-item">⏱️ ${stayTime}</span>
            <span class="meta-item">⭐ ${place.rating} (${place.reviewsCount})</span>
          </div>
          <div class="card-actions">
            <button class="btn-card-action btn-card-primary" onclick="openAttractionModal('${place.id}')">
              📖 ${currentLang === 'en' ? 'View Details' : '상세보기'}
            </button>
            <button class="btn-card-action" onclick="showTaxiCardFor('${place.id}')">
              🚕 ${currentLang === 'en' ? 'Taxi Card' : '택시 카드'}
            </button>
          </div>
        </div>
      `;
      attractionGrid.appendChild(card);
    });

    // Rebind favorite buttons
    document.querySelectorAll('.btn-favorite').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        toggleFavorite(id);
      });
    });
  }

  function renderFood() {
    if (!foodGrid) return;
    foodGrid.innerHTML = '';

    ANDONG_DATA.foods.forEach(food => {
      const title = food.name[currentLang] || food.name.en;
      const category = food.category[currentLang] || food.category.en;
      const shortDesc = food.shortDesc[currentLang] || food.shortDesc.en;
      const spiceLevel = food.spiceLevel[currentLang] || food.spiceLevel.en;

      const card = document.createElement('div');
      card.className = 'card food-card';
      card.innerHTML = `
        <div class="card-image-wrap">
          <img src="${food.image}" alt="${title}" class="card-image" loading="lazy" />
          <span class="badge-category">${category}</span>
        </div>
        <div class="card-body">
          <h3 class="card-title">${title}</h3>
          <div class="card-korean-name">${food.koreanName} (${food.pronunciation})</div>
          <p class="card-desc">${shortDesc}</p>
          <div style="display:flex; gap:8px; margin: 10px 0; flex-wrap:wrap;">
            <span class="spice-tag">🌶️ ${spiceLevel}</span>
            <span class="veg-tag">${food.vegetarian ? (currentLang === 'en' ? '🌱 Vegetarian Friendly' : '🌱 채식 가능') : (currentLang === 'en' ? '🍖 Meat/Fish' : '🍖 고기/생선 요리')}</span>
          </div>
          <div class="card-meta">
            <span>💰 ${food.priceRange}</span>
          </div>
          <div class="card-actions" style="margin-top:14px;">
            <button class="btn-card-action btn-card-primary" onclick="openFoodModal('${food.id}')">
              🍲 ${currentLang === 'en' ? 'How to Eat & Order' : '먹는 법 및 주문 팁'}
            </button>
            <button class="btn-card-action" onclick="speakText('${food.koreanOrderPhrase}')">
              🔊 ${currentLang === 'en' ? 'Order Audio' : '주문 음성 듣기'}
            </button>
          </div>
        </div>
      `;
      foodGrid.appendChild(card);
    });
  }

  function renderItineraries() {
    const itinContainer = document.getElementById('itinerary-container');
    if (!itinContainer) return;
    itinContainer.innerHTML = '';

    ANDONG_DATA.itineraries.forEach(itin => {
      const title = itin.title[currentLang] || itin.title.en;
      const subtitle = itin.subtitle[currentLang] || itin.subtitle.en;
      const duration = itin.duration[currentLang] || itin.duration.en;
      const tag = itin.tag[currentLang] || itin.tag.en;

      const card = document.createElement('div');
      card.className = 'itinerary-card';

      let stepsHTML = itin.steps.map(step => {
        const stepTitle = step.title[currentLang] || step.title.en;
        const stepTip = step.tip[currentLang] || step.tip.en;
        return `
          <div class="timeline-item">
            <div class="timeline-time">${step.time}</div>
            <div class="timeline-title">${stepTitle}</div>
            <div class="timeline-tip">💡 ${currentLang === 'en' ? 'Tip' : '꿀팁'}: ${stepTip}</div>
          </div>
        `;
      }).join('');

      card.innerHTML = `
        <div class="itinerary-header">
          <div>
            <span class="itinerary-badge">${tag}</span>
            <h3 style="font-size:1.3rem; margin-top:4px;">${title}</h3>
            <p style="color:var(--text-muted); font-size:0.9rem;">${subtitle} • 🕒 ${duration}</p>
          </div>
        </div>
        <div class="timeline">
          ${stepsHTML}
        </div>
      `;
      itinContainer.appendChild(card);
    });
  }

  function renderPhrases() {
    const phraseContainer = document.getElementById('phrase-grid');
    if (!phraseContainer) return;
    phraseContainer.innerHTML = '';

    ANDONG_DATA.phrases.forEach(item => {
      const card = document.createElement('div');
      card.className = 'phrase-card';
      card.innerHTML = `
        <div>
          <div class="phrase-text">${item.english}</div>
          <div class="phrase-korean">${item.korean}</div>
          <div class="phrase-romaja">${item.romaja}</div>
        </div>
        <button class="btn-speak" style="padding: 6px 12px; font-size:0.8rem;" onclick="speakText('${item.korean}')">
          🔊 ${currentLang === 'en' ? 'Speak' : '음성'}
        </button>
      `;
      phraseContainer.appendChild(card);
    });
  }

  function renderBuses() {
    const busContainer = document.getElementById('bus-grid');
    if (!busContainer) return;
    busContainer.innerHTML = '';

    ANDONG_DATA.buses.forEach(bus => {
      const destination = bus.destination[currentLang] || bus.destination.en;
      const departure = bus.departure[currentLang] || bus.departure.en;
      const frequency = bus.frequency[currentLang] || bus.frequency.en;
      const travelTime = bus.travelTime[currentLang] || bus.travelTime.en;
      const note = bus.note[currentLang] || bus.note.en;

      const card = document.createElement('div');
      card.className = 'bus-card';
      card.innerHTML = `
        <div class="bus-number">${bus.routeNumber}</div>
        <h4 style="margin: 4px 0 8px 0; font-size:1.1rem;">To: ${destination}</h4>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:4px;">📍 ${currentLang === 'en' ? 'Board at' : '승차장'}: ${departure}</p>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:8px;">⏱️ ${currentLang === 'en' ? 'Frequency' : '배차간격'}: ${frequency} (${travelTime})</p>
        <div style="font-size:0.82rem; background:#f8fafc; padding:8px; border-radius:6px;">💡 ${note}</div>
      `;
      busContainer.appendChild(card);
    });
  }

  // --- Taxi Generator Functions ---

  function populateTaxiDropdown() {
    if (!taxiSelect) return;
    taxiSelect.innerHTML = `<option value="">${currentLang === 'en' ? 'Select a Destination...' : '목적지를 선택하세요...'}</option>`;
    ANDONG_DATA.attractions.forEach(attraction => {
      const name = attraction.name[currentLang] || attraction.name.en;
      const opt = document.createElement('option');
      opt.value = attraction.id;
      opt.textContent = `${name} (${attraction.koreanName})`;
      taxiSelect.appendChild(opt);
    });

    taxiSelect.onchange = () => {
      const id = taxiSelect.value;
      if (id) {
        showTaxiCardFor(id);
      }
    };
  }

  window.showTaxiCardFor = function(attractionId) {
    const item = ANDONG_DATA.attractions.find(a => a.id === attractionId);
    if (!item) return;

    const name = item.name[currentLang] || item.name.en;
    const address = item.address[currentLang] || item.address.en;

    if (taxiSelect) taxiSelect.value = attractionId;
    if (taxiCardKorean) taxiCardKorean.textContent = item.taxiPhrase;
    if (taxiCardEnglish) taxiCardEnglish.textContent = `Destination: ${name} (${address})`;

    const taxiSection = document.getElementById('taxi-card-section');
    if (taxiSection) {
      taxiSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // --- Web Speech API (Pronunciation) ---
  window.speakText = function(text) {
    if (!('speechSynthesis' in window)) {
      showToast('Speech Synthesis is not supported in this browser.');
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko-KR';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
    showToast(currentLang === 'en' ? '🔊 Speaking Korean pronunciation...' : '🔊 한국어 발음 재생 중...');
  };

  // --- Copy to Clipboard ---
  window.copyTaxiText = function() {
    if (!taxiCardKorean) return;
    const text = taxiCardKorean.textContent;
    navigator.clipboard.writeText(text).then(() => {
      showToast(currentLang === 'en' ? '📋 Taxi phrase copied to clipboard!' : '📋 택시 문구가 복사되었습니다!');
    }).catch(() => {
      showToast('Failed to copy text.');
    });
  };

  // --- Modal Functions ---

  window.openAttractionModal = function(id) {
    const item = ANDONG_DATA.attractions.find(a => a.id === id);
    if (!item) return;

    const isFav = favorites.includes(item.id);
    const title = item.name[currentLang] || item.name.en;
    const desc = item.description[currentLang] || item.description.en;
    const address = item.address[currentLang] || item.address.en;
    const hours = item.hours[currentLang] || item.hours.en;
    const fee = item.fee[currentLang] || item.fee.en;
    const busRoute = item.busRoute[currentLang] || item.busRoute.en;
    const highlights = item.highlights[currentLang] || item.highlights.en;

    modalContainer.innerHTML = `
      <img src="${item.image}" alt="${title}" class="modal-hero-img" />
      <div class="modal-content">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:12px;">
          <div>
            <h2 style="font-family:var(--font-heading); font-size:1.8rem; line-height:1.2;">${title}</h2>
            <div style="color:var(--primary); font-weight:700; font-size:1.1rem; margin-top:4px;">${item.koreanName} (${item.pronunciation})</div>
          </div>
          <button class="btn-favorite ${isFav ? 'active' : ''}" onclick="toggleFavorite('${item.id}'); openAttractionModal('${item.id}');" style="position:static; width:44px; height:44px; font-size:1.2rem;">
            ${isFav ? '❤️' : '🤍'}
          </button>
        </div>

        <p style="margin: 16px 0; color:var(--text-main); font-size:1rem; line-height:1.6;">${desc}</p>

        <div style="background:#f8fafc; padding:16px; border-radius:var(--radius-sm); margin-bottom:20px;">
          <h4 style="margin-bottom:8px; font-size:1rem;">📌 ${currentLang === 'en' ? 'Key Highlights' : '주요 관람 포인트'}</h4>
          <ul style="padding-left:20px; font-size:0.9rem; color:var(--text-muted);">
            ${highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; font-size:0.88rem; color:var(--text-muted); margin-bottom:24px;">
          <div>📍 <strong>${currentLang === 'en' ? 'Address' : '주소'}:</strong> ${address}</div>
          <div>🕒 <strong>${currentLang === 'en' ? 'Hours' : '운영시간'}:</strong> ${hours}</div>
          <div>🎫 <strong>${currentLang === 'en' ? 'Admission' : '입장료'}:</strong> ${fee}</div>
          <div>🚌 <strong>${currentLang === 'en' ? 'Bus Access' : '버스 노선'}:</strong> ${busRoute}</div>
        </div>

        <div style="display:flex; gap:12px;">
          <button class="btn-speak" style="flex:1; justify-content:center;" onclick="speakText('${item.koreanName}')">
            🔊 ${currentLang === 'en' ? 'Listen Name Pronunciation' : '이름 음성 발음 들기'}
          </button>
          <button class="btn-card-action btn-card-primary" style="flex:1; justify-content:center;" onclick="closeModal(); showTaxiCardFor('${item.id}');">
            🚕 ${currentLang === 'en' ? 'Open Taxi Card' : '택시 카드 열기'}
          </button>
        </div>
      </div>
    `;

    modalOverlay.classList.add('active');
  };

  window.openFoodModal = function(id) {
    const food = ANDONG_DATA.foods.find(f => f.id === id);
    if (!food) return;

    const title = food.name[currentLang] || food.name.en;
    const desc = food.description[currentLang] || food.description.en;
    const tip = food.eatingTip[currentLang] || food.eatingTip.en;
    const place = food.whereToTry[currentLang] || food.whereToTry.en;

    modalContainer.innerHTML = `
      <img src="${food.image}" alt="${title}" class="modal-hero-img" />
      <div class="modal-content">
        <h2 style="font-family:var(--font-heading); font-size:1.8rem;">${title}</h2>
        <div style="color:var(--primary); font-weight:700; font-size:1.1rem; margin-top:4px;">${food.koreanName} (${food.pronunciation})</div>
        
        <p style="margin:16px 0; font-size:1rem; line-height:1.6;">${desc}</p>

        <div style="background:#fff7ed; border-left:4px solid var(--primary); padding:16px; border-radius:var(--radius-sm); margin-bottom:20px;">
          <h4 style="color:var(--primary-hover); margin-bottom:4px;">💡 ${currentLang === 'en' ? 'How to Eat Like a Local' : '현지인처럼 맛있게 먹는 팁'}</h4>
          <p style="font-size:0.92rem;">${tip}</p>
        </div>

        <div style="background:#f1f5f9; padding:16px; border-radius:var(--radius-sm); margin-bottom:20px;">
          <h4 style="margin-bottom:6px;">📍 ${currentLang === 'en' ? 'Recommended Place to Try:' : '추천 맛집 위치:'}</h4>
          <p style="font-size:0.9rem; color:var(--text-main);">${place}</p>
        </div>

        <div style="background:#fef2f2; border:1px solid #fecaca; padding:16px; border-radius:var(--radius-sm); margin-bottom:20px;">
          <h4 style="color:var(--accent-red); margin-bottom:6px;">🗣️ ${currentLang === 'en' ? 'Korean Ordering Phrase:' : '한국어 주문 문장:'}</h4>
          <p style="font-size:1.1rem; font-weight:700; font-family:'Noto Serif KR', serif; color:#991b1b; margin-bottom:8px;">${food.koreanOrderPhrase}</p>
          <button class="btn-speak" onclick="speakText('${food.koreanOrderPhrase}')">
            🔊 ${currentLang === 'en' ? 'Speak Order Aloud' : '주문 문장 음성 듣기'}
          </button>
        </div>
      </div>
    `;

    modalOverlay.classList.add('active');
  };

  window.closeModal = function() {
    modalOverlay.classList.remove('active');
  };

  // --- Favorite / My Trip Management ---

  function toggleFavorite(id) {
    if (favorites.includes(id)) {
      favorites = favorites.filter(favId => favId !== id);
      showToast(currentLang === 'en' ? 'Removed from My Trip' : '일정에서 삭제되었습니다');
    } else {
      favorites.push(id);
      showToast(currentLang === 'en' ? '❤️ Added to My Trip!' : '❤️ 내 여행 일정에 추가되었습니다!');
    }
    localStorage.setItem('andong_favorites', JSON.stringify(favorites));
    updateFavoriteCount();
    renderAttractions(activeTab, searchInput ? searchInput.value : '');
  }

  function updateFavoriteCount() {
    if (favoriteCountBadge) {
      favoriteCountBadge.textContent = favorites.length;
    }
  }

  window.openMyTripModal = function() {
    const favItems = ANDONG_DATA.attractions.filter(a => favorites.includes(a.id));

    if (favItems.length === 0) {
      modalContainer.innerHTML = `
        <div class="modal-content" style="text-align:center; padding:50px 20px;">
          <span style="font-size:3rem;">🗺️</span>
          <h3 style="font-size:1.5rem; margin-top:12px;">${currentLang === 'en' ? 'Your Trip Plan is Empty' : '저장된 여행지가 없습니다'}</h3>
          <p style="color:var(--text-muted); margin:8px 0 24px;">${currentLang === 'en' ? 'Click the heart icon (🤍) on any attraction to build your custom Andong itinerary!' : '원하는 명소의 하트(🤍) 아이콘을 눌러 나만의 안동 코스를 만들어보세요!'}</p>
          <button class="btn-card-action btn-card-primary" style="margin:0 auto; max-width:200px;" onclick="closeModal();">${currentLang === 'en' ? 'Start Exploring' : '명소 둘러보기'}</button>
        </div>
      `;
    } else {
      let listHTML = favItems.map(item => {
        const title = item.name[currentLang] || item.name.en;
        const stay = item.recommendedStay[currentLang] || item.recommendedStay.en;
        return `
          <div style="display:flex; justify-content:space-between; align-items:center; padding:12px; border-bottom:1px solid #e2e8f0;">
            <div style="display:flex; align-items:center; gap:12px;">
              <img src="${item.image}" style="width:50px; height:50px; border-radius:8px; object-fit:cover;" />
              <div>
                <h4 style="font-size:1rem;">${title}</h4>
                <p style="font-size:0.8rem; color:var(--text-muted);">${item.koreanName} • ⏱️ ${stay}</p>
              </div>
            </div>
            <button class="btn-favorite active" onclick="toggleFavorite('${item.id}'); openMyTripModal();">❤️</button>
          </div>
        `;
      }).join('');

      modalContainer.innerHTML = `
        <div class="modal-content">
          <h2 style="font-family:var(--font-heading); font-size:1.8rem; margin-bottom:8px;">🗺️ ${currentLang === 'en' ? `My Custom Andong Trip (${favItems.length} Places)` : `나만의 안동 여행 코스 (${favItems.length}곳)`}</h2>
          <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:20px;">${currentLang === 'en' ? 'Your saved destinations for your upcoming trip to Andong.' : '안동 여행을 위해 저장한 나만의 명소 목록입니다.'}</p>
          
          <div style="max-height:350px; overflow-y:auto; margin-bottom:20px;">
            ${listHTML}
          </div>

          <div style="display:flex; gap:12px;">
            <button class="btn-card-action btn-card-primary" style="flex:1; justify-content:center;" onclick="window.print()">
              🖨️ ${currentLang === 'en' ? 'Print / Save PDF Itinerary' : '일정 인쇄 / PDF 저장'}
            </button>
            <button class="btn-card-action" style="flex:1; justify-content:center;" onclick="closeModal()">
              ${currentLang === 'en' ? 'Close' : '닫기'}
            </button>
          </div>
        </div>
      `;
    }

    modalOverlay.classList.add('active');
  };

  // --- Currency Exchange Widget ---
  window.openCurrencyModal = function() {
    modalContainer.innerHTML = `
      <div class="modal-content">
        <h2 style="font-family:var(--font-heading); font-size:1.6rem; margin-bottom:6px;">💱 ${currentLang === 'en' ? 'KRW Currency Quick Converter' : '원화 환율 간편 계산기'}</h2>
        <p style="color:var(--text-muted); font-size:0.88rem; margin-bottom:20px;">${currentLang === 'en' ? 'Quick estimate conversion for South Korean Won (KRW).' : '한국 원화(KRW) 기준 주요 국가 환율 계산 서비스입니다.'}</p>
        
        <div style="margin-bottom:16px;">
          <label style="display:block; font-size:0.85rem; font-weight:600; margin-bottom:4px;">${currentLang === 'en' ? 'Amount in KRW (₩):' : '원화 금액 (₩):'}</label>
          <input type="number" id="krw-input" value="10000" step="1000" style="width:100%; padding:10px; border-radius:8px; border:1px solid #cbd5e1; font-size:1.1rem; font-weight:700;" />
        </div>

        <div id="currency-results" style="background:#f8fafc; padding:16px; border-radius:12px; display:grid; grid-template-columns:1fr 1fr; gap:12px; font-size:0.95rem;">
          <!-- Computed -->
        </div>
      </div>
    `;

    const krwInput = document.getElementById('krw-input');
    const resultsDiv = document.getElementById('currency-results');

    function updateConversion() {
      const val = parseFloat(krwInput.value) || 0;
      const usd = (val / 1340).toFixed(2);
      const eur = (val / 1450).toFixed(2);
      const jpy = (val / 9.0).toFixed(0);
      const cny = (val / 185).toFixed(1);

      resultsDiv.innerHTML = `
        <div>🇺🇸 <strong>USD:</strong> $${usd}</div>
        <div>🇪🇺 <strong>EUR:</strong> €${eur}</div>
        <div>🇯🇵 <strong>JPY:</strong> ¥${jpy}</div>
        <div>🇨🇳 <strong>CNY:</strong> ¥${cny}</div>
      `;
    }

    krwInput.addEventListener('input', updateConversion);
    updateConversion();
    modalOverlay.classList.add('active');
  };

  // --- Toast Notification ---

  function showToast(msg) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  // --- Event Listeners ---

  function setupEventListeners() {
    // Language Toggle Listener
    if (langToggleBtn) {
      langToggleBtn.addEventListener('click', toggleLanguage);
    }

    // Search Listener
    if (searchBtn && searchInput) {
      searchBtn.addEventListener('click', () => {
        renderAttractions(activeTab, searchInput.value);
      });
      searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
          renderAttractions(activeTab, searchInput.value);
        }
      });
    }

    // Category Tabs Listener
    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activeTab = tab.getAttribute('data-category');
        renderAttractions(activeTab, searchInput ? searchInput.value : '');
      });
    });

    // Quick Tags Listener
    tagBtns.forEach(tag => {
      tag.addEventListener('click', () => {
        tagBtns.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');
        const query = tag.getAttribute('data-tag');
        if (searchInput) searchInput.value = query === 'all' ? '' : query;
        renderAttractions('all', query === 'all' ? '' : query);
      });
    });

    // Modal Close Listeners
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
      });
    }

    // Taxi buttons
    if (taxiSpeakBtn) {
      taxiSpeakBtn.addEventListener('click', () => {
        if (taxiCardKorean) speakText(taxiCardKorean.textContent);
      });
    }

    if (taxiCopyBtn) {
      taxiCopyBtn.addEventListener('click', copyTaxiText);
    }
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
});
