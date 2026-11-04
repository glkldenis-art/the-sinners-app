const tg = window.Telegram?.WebApp;
if (tg) {
  tg.ready();
  tg.expand();
  if (tg.BackButton) {
    tg.BackButton.onClick(() => {
      closeSheet();
      closeSwipeDeck();
      closeLangModal();
    });
  }
}

const I18N = {
  en: {
    flag: "🇺🇸 EN",
    searchPlaceholder: "Search title, studio, actors...",
    dailyPick: "Daily Pick",
    watch: "Watch in Channel",
    details: "Details ›",
    freshReleases: "Fresh Releases",
    top20: "Top 20",
    byCountry: "Cinema by Country",
    allCountries: "All Countries",
    fullArchive: "Full Archive",
    moviesArchive: "Movies: ",
    studiosAlphabetPrompt: "Select a letter to browse studios",
    studiosSearching: "Searching for letter {letter}...",
    studiosNone: "No studios found for letter {letter}",
    studiosFound: "Studios found: {count}",
    topStudio: "★ TOP STUDIO",
    studioTagline: "Flagship studio collection",
    studioReleases: "{count} releases in catalog",
    otherStudios: "Other studios starting with {letter}:",
    actorsAlphabetPrompt: "Select a letter to browse actors",
    actorsSearching: "Searching for letter {letter}...",
    actorsNone: "No actors found for letter {letter}",
    actorsFound: "Actors found: {count}",
    topActor: "★ MAIN STAR",
    actorTagline: "Leading star for letter {letter}",
    actorMovies: "{count} movies in archive",
    otherActors: "Other actors starting with {letter}:",
    sheetStarring: "Starring:",
    franchiseOther: "Other parts of this series:",
    favsTab: "Favorites",
    historyTab: "History",
    favsHint: "Saved movies:",
    historyHint: "Recently watched:",
    favsEmptyTitle: "Collection is empty",
    favsEmptyDesc: "Tap the pepper on any movie to save it for later",
    historyEmptyTitle: "Watch history is clean",
    historyEmptyDesc: "Releases you open in the channel will appear here",
    clearHistory: "Clear History",
    clearHistoryConfirm: "Clear entire watch history?",
    navFeed: "Feed",
    navStudios: "Studios",
    navActors: "Actors",
    moviesCount: "{count} movies",
    inCollection: "{count} saved",
    inHistory: "{count} in history",
    notFound: "Nothing found 😕",
    scrollMore: "Scroll for more...",
    archiveEnd: "Archive fully browsed",
    netError: "Network error",
    noLink: "Link is not yet in the database",
    swipeBadge: "Cinema Deck",
    swipeEmptyTitle: "Deck finished!",
    swipeEmptyDesc: "Load a fresh batch of random movies from the archive",
    swipeReload: "Load More",
    leftInDeck: "{count} left in deck"
  },
  es: {
    flag: "🇪🇸 ES",
    searchPlaceholder: "Buscar título, estudio, actores...",
    dailyPick: "Elección del día",
    watch: "Ver en el canal",
    details: "Detalles ›",
    freshReleases: "Novedades",
    top20: "Top 20",
    byCountry: "Cine por país",
    allCountries: "Todos los países",
    fullArchive: "Archivo completo",
    moviesArchive: "Películas: ",
    studiosAlphabetPrompt: "Elige una letra para buscar estudios",
    studiosSearching: "Buscando letra {letter}...",
    studiosNone: "No hay estudios con la letra {letter}",
    studiosFound: "Estudios encontrados: {count}",
    topStudio: "★ ESTUDIO TOP",
    studioTagline: "Colección insignia del estudio",
    studioReleases: "{count} lanzamientos en el catálogo",
    otherStudios: "Otros estudios con la letra {letter}:",
    actorsAlphabetPrompt: "Elige una letra para buscar actores",
    actorsSearching: "Buscando letra {letter}...",
    actorsNone: "No hay actores con la letra {letter}",
    actorsFound: "Actores encontrados: {count}",
    topActor: "★ GRAN ESTRELLA",
    actorTagline: "Líder de lanzamientos con la letra {letter}",
    actorMovies: "{count} películas en el archivo",
    otherActors: "Otros actores con la letra {letter}:",
    sheetStarring: "Protagonistas:",
    franchiseOther: "Más partes de esta saga:",
    favsTab: "Favoritos",
    historyTab: "Historial",
    favsHint: "Películas guardadas:",
    historyHint: "Visto recientemente:",
    favsEmptyTitle: "Colección vacía",
    favsEmptyDesc: "Pulsa el chile en la tarjeta para guardarla",
    historyEmptyTitle: "Historial vacío",
    historyEmptyDesc: "Aquí aparecerán las películas que abras en el canal",
    clearHistory: "Borrar historial",
    clearHistoryConfirm: "¿Borrar todo el historial?",
    navFeed: "Novedades",
    navStudios: "Estudios",
    navActors: "Actores",
    moviesCount: "{count} películas",
    inCollection: "{count} guardadas",
    inHistory: "{count} en historial",
    notFound: "No se encontró nada 😕",
    scrollMore: "Desplaza para cargar más...",
    archiveEnd: "Archivo visto por completo",
    netError: "Error de red",
    noLink: "El enlace aún no está en la base",
    swipeBadge: "Baraja de cine",
    swipeEmptyTitle: "¡Baraja completada!",
    swipeEmptyDesc: "Carga un nuevo lote de películas aleatorias del archivo",
    swipeReload: "Cargar más",
    leftInDeck: "{count} restantes"
  },
  de: {
    flag: "🇩🇪 DE",
    searchPlaceholder: "Titel, Studio, Darsteller suchen...",
    dailyPick: "Tipp des Tages",
    watch: "Im Kanal ansehen",
    details: "Details ›",
    freshReleases: "Neuheiten",
    top20: "Top 20",
    byCountry: "Filme nach Land",
    allCountries: "Alle Länder",
    fullArchive: "Gesamtes Archiv",
    moviesArchive: "Filme: ",
    studiosAlphabetPrompt: "Buchstaben wählen für Studios",
    studiosSearching: "Suche nach {letter}...",
    studiosNone: "Keine Studios mit {letter} gefunden",
    studiosFound: "Studios gefunden: {count}",
    topStudio: "★ TOP STUDIO",
    studioTagline: "Flaggschiff-Sammlung des Studios",
    studioReleases: "{count} Releases im Katalog",
    otherStudios: "Weitere Studios mit {letter}:",
    actorsAlphabetPrompt: "Buchstaben wählen für Darsteller",
    actorsSearching: "Suche nach {letter}...",
    actorsNone: "Keine Darsteller mit {letter} gefunden",
    actorsFound: "Darsteller gefunden: {count}",
    topActor: "★ TOP STAR",
    actorTagline: "Meiste Releases mit Buchstabe {letter}",
    actorMovies: "{count} Filme im Archiv",
    otherActors: "Weitere Darsteller mit {letter}:",
    sheetStarring: "Hauptdarsteller:",
    franchiseOther: "Weitere Teile der Reihe:",
    favsTab: "Favoriten",
    historyTab: "Verlauf",
    favsHint: "Gespeicherte Filme:",
    historyHint: "Kürzlich angesehen:",
    favsEmptyTitle: "Sammlung ist leer",
    favsEmptyDesc: "Tippe auf die Chili, um einen Film zu speichern",
    historyEmptyTitle: "Verlauf ist leer",
    historyEmptyDesc: "Hier erscheinen Filme, die du im Kanal geöffnet hast",
    clearHistory: "Verlauf löschen",
    clearHistoryConfirm: "Gesamten Verlauf löschen?",
    navFeed: "Neuheiten",
    navStudios: "Studios",
    navActors: "Darsteller",
    moviesCount: "{count} Filme",
    inCollection: "{count} gespeichert",
    inHistory: "{count} im Verlauf",
    notFound: "Nichts gefunden 😕",
    scrollMore: "Weiter scrollen zum Laden...",
    archiveEnd: "Archiv komplett durchsucht",
    netError: "Netzwerkfehler",
    noLink: "Link ist noch nicht in der Datenbank",
    swipeBadge: "Film-Deck",
    swipeEmptyTitle: "Deck durchgesehen!",
    swipeEmptyDesc: "Lade eine neue Auswahl an Zufallsfilmen aus dem Archiv",
    swipeReload: "Mehr laden",
    leftInDeck: "{count} übrig"
  },
  fr: {
    flag: "🇫🇷 FR",
    searchPlaceholder: "Titre, studio, acteurs...",
    dailyPick: "Choix du jour",
    watch: "Regarder sur le canal",
    details: "Infos ›",
    freshReleases: "Nouveautés",
    top20: "Top 20",
    byCountry: "Cinéma par pays",
    allCountries: "Tous les pays",
    fullArchive: "Archives complètes",
    moviesArchive: "Films : ",
    studiosAlphabetPrompt: "Choisissez une lettre pour les studios",
    studiosSearching: "Recherche pour la lettre {letter}...",
    studiosNone: "Aucun studio trouvé pour {letter}",
    studiosFound: "Studios trouvés : {count}",
    topStudio: "★ TOP STUDIO",
    studioTagline: "Collection phare du studio",
    studioReleases: "{count} sorties au catalogue",
    otherStudios: "Autres studios avec la lettre {letter} :",
    actorsAlphabetPrompt: "Choisissez une lettre pour les acteurs",
    actorsSearching: "Recherche pour la lettre {letter}...",
    actorsNone: "Aucun acteur trouvé pour {letter}",
    actorsFound: "Acteurs trouvés : {count}",
    topActor: "★ GRANDE ÉTOILE",
    actorTagline: "Leader des sorties avec la lettre {letter}",
    actorMovies: "{count} films dans les archives",
    otherActors: "Autres acteurs avec la lettre {letter} :",
    sheetStarring: "Avec :",
    franchiseOther: "Autres parties de cette saga :",
    favsTab: "Favoris",
    historyTab: "Historique",
    favsHint: "Films enregistrés :",
    historyHint: "Récemment regardés :",
    favsEmptyTitle: "Collection vide",
    favsEmptyDesc: "Touchez le piment pour enregistrer un film",
    historyEmptyTitle: "Historique vide",
    historyEmptyDesc: "Les films ouverts dans le canal apparaîtront ici",
    clearHistory: "Effacer l'historique",
    clearHistoryConfirm: "Effacer tout l'historique ?",
    navFeed: "Nouveautés",
    navStudios: "Studios",
    navActors: "Acteurs",
    moviesCount: "{count} films",
    inCollection: "{count} enregistrés",
    inHistory: "{count} dans l'historique",
    notFound: "Rien trouvé 😕",
    scrollMore: "Faites défiler pour charger plus...",
    archiveEnd: "Archives entièrement consultées",
    netError: "Erreur réseau",
    noLink: "Le lien n'est pas encore dans la base",
    swipeBadge: "Ciné-Deck",
    swipeEmptyTitle: "Paquet terminé !",
    swipeEmptyDesc: "Chargez un nouveau lot de films aléatoires des archives",
    swipeReload: "Charger plus",
    leftInDeck: "{count} restants"
  },
  ru: {
    flag: "🇷🇺 RU",
    searchPlaceholder: "Поиск по названию, студии, актёрам...",
    dailyPick: "Выбор дня",
    watch: "Смотреть в канале",
    details: "Инфо ›",
    freshReleases: "Свежие релизы",
    top20: "Топ 20",
    byCountry: "Кино по странам",
    allCountries: "Все страны",
    fullArchive: "Полный архив",
    moviesArchive: "Фильмы: ",
    studiosAlphabetPrompt: "Выберите букву для поиска студий",
    studiosSearching: "Ищем на букву {letter}...",
    studiosNone: "На букву {letter} студий не найдено",
    studiosFound: "Найдено студий: {count}",
    topStudio: "★ ТОП СТУДИЯ",
    studioTagline: "Флагманская коллекция студии",
    studioReleases: "{count} релизов в каталоге",
    otherStudios: "Остальные студии на букву {letter}:",
    actorsAlphabetPrompt: "Выберите букву для поиска актёров",
    actorsSearching: "Ищем на букву {letter}...",
    actorsNone: "На букву {letter} актёров не найдено",
    actorsFound: "Найдено актёров: {count}",
    topActor: "★ ГЛАВНАЯ ЗВЕЗДА",
    actorTagline: "Лидер по числу релизов на букву {letter}",
    actorMovies: "{count} фильмов в архиве",
    otherActors: "Остальные актёры на букву {letter}:",
    sheetStarring: "В главных ролях:",
    franchiseOther: "Другие части серии:",
    favsTab: "Избранное",
    historyTab: "История",
    favsHint: "Отложенные фильмы:",
    historyHint: "Недавно смотрели:",
    favsEmptyTitle: "Коллекция пуста",
    favsEmptyDesc: "Жми на перчик на карточке фильма или в шторке, чтобы сохранить кино",
    historyEmptyTitle: "История просмотров чиста",
    historyEmptyDesc: "Здесь появятся релизы, по которым вы переходили в канале",
    clearHistory: "Очистить историю",
    clearHistoryConfirm: "Очистить всю историю просмотров?",
    navFeed: "Новинки",
    navStudios: "Студии",
    navActors: "Актёры",
    moviesCount: "{count} фильмов",
    inCollection: "{count} в коллекции",
    inHistory: "{count} в истории",
    notFound: "Ничего не найдено 😕",
    scrollMore: "Прокрутите для загрузки...",
    archiveEnd: "Архив просмотрен полностью",
    netError: "Ошибка сети",
    noLink: "Ссылка ещё не добавлена в базу",
    swipeBadge: "Кино-колода",
    swipeEmptyTitle: "Колода просмотрена!",
    swipeEmptyDesc: "Загрузите новую партию случайных фильмов из архива",
    swipeReload: "Загрузить ещё",
    leftInDeck: "осталось: {count}"
  }
};

let currentLang = localStorage.getItem('sinners_lang');
if (!currentLang) {
  const tgLang = (window.Telegram?.WebApp?.initDataUnsafe?.user?.language_code || '').toLowerCase();
  if (tgLang.startsWith('ru')) currentLang = 'ru';
  else if (tgLang.startsWith('es')) currentLang = 'es';
  else if (tgLang.startsWith('de')) currentLang = 'de';
  else if (tgLang.startsWith('fr')) currentLang = 'fr';
  else currentLang = 'en';
}

function t(key, params = {}) {
  let str = (I18N[currentLang] && I18N[currentLang][key]) || (I18N['en'] && I18N['en'][key]) || key;
  for (let p in params) {
    str = str.replace(`{${p}}`, params[p]);
  }
  return str;
}

function applyLanguageUI() {
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) langBtn.innerText = I18N[currentLang]?.flag || '🇺🇸 EN';

  const sInput = document.getElementById('search-input');
  if (sInput) sInput.placeholder = t('searchPlaceholder');

  const heroBadge = document.getElementById('txt-hero-badge');
  if (heroBadge) heroBadge.innerText = t('dailyPick');
  const heroWatch = document.getElementById('txt-hero-watch');
  if (heroWatch) heroWatch.innerText = t('watch');
  const heroDetails = document.getElementById('txt-hero-details');
  if (heroDetails) heroDetails.innerText = t('details');

  const recentTitle = document.getElementById('txt-recent-title');
  if (recentTitle) recentTitle.innerText = t('freshReleases');
  const recentBadge = document.getElementById('txt-recent-badge');
  if (recentBadge) recentBadge.innerText = t('top20');

  const countryTitle = document.getElementById('txt-country-title');
  if (countryTitle) countryTitle.innerText = t('byCountry');
  const chipAll = document.getElementById('chip-all-countries');
  if (chipAll) chipAll.innerText = t('allCountries');

  const gridTitle = document.getElementById('grid-section-title');
  if (gridTitle) {
    gridTitle.innerText = currentCountry ? `${t('moviesArchive')}${currentCountry}` : t('fullArchive');
  }

  const navFeed = document.getElementById('nav-lbl-feed');
  if (navFeed) navFeed.innerText = t('navFeed');
  const navStudios = document.getElementById('nav-lbl-studios');
  if (navStudios) navStudios.innerText = t('navStudios');
  const navActors = document.getElementById('nav-lbl-actors');
  if (navActors) navActors.innerText = t('navActors');

  const sheetWatch = document.getElementById('txt-sheet-watch');
  if (sheetWatch) sheetWatch.innerText = t('watch');
  const sheetFranchise = document.getElementById('txt-sheet-franchise');
  if (sheetFranchise) sheetFranchise.innerText = t('franchiseOther');

  const sBadge = document.getElementById('txt-swipe-badge');
  if (sBadge) sBadge.innerText = t('swipeBadge');
  const sEmptyTitle = document.getElementById('txt-swipe-empty-title');
  if (sEmptyTitle) sEmptyTitle.innerText = t('swipeEmptyTitle');
  const sEmptyDesc = document.getElementById('txt-swipe-empty-desc');
  if (sEmptyDesc) sEmptyDesc.innerText = t('swipeEmptyDesc');
  const sReload = document.getElementById('txt-swipe-reload');
  if (sReload) sReload.innerText = t('swipeReload');

  const clearBtn = document.getElementById('btn-clear-history');
  if (clearBtn) clearBtn.innerText = t('clearHistory');
  const favEmptyTitle = document.getElementById('txt-favs-empty-title');
  if (favEmptyTitle) favEmptyTitle.innerText = t('favsEmptyTitle');
  const favEmptyDesc = document.getElementById('txt-favs-empty-desc');
  if (favEmptyDesc) favEmptyDesc.innerText = t('favsEmptyDesc');
  const histEmptyTitle = document.getElementById('txt-history-empty-title');
  if (histEmptyTitle) histEmptyTitle.innerText = t('historyEmptyTitle');
  const histEmptyDesc = document.getElementById('txt-history-empty-desc');
  if (histEmptyDesc) histEmptyDesc.innerText = t('historyEmptyDesc');

  updateFavCounter();

  document.querySelectorAll('.lang-item').forEach(el => {
    const isCurrent = el.getAttribute('onclick')?.includes(`'${currentLang}'`);
    el.classList.toggle('active', isCurrent);
  });
}

function openLangModal() {
  if (tg?.HapticFeedback) tg.HapticFeedback.selectionChanged();
  if (tg?.BackButton) tg.BackButton.show();
  document.getElementById('lang-modal').classList.add('active');
}

function closeLangModal() {
  document.getElementById('lang-modal').classList.remove('active');
  if (tg?.BackButton) tg.BackButton.hide();
}

function setLanguage(lang) {
  if (tg?.HapticFeedback) tg.HapticFeedback.notificationOccurred('success');
  currentLang = lang;
  localStorage.setItem('sinners_lang', lang);
  applyLanguageUI();
  closeLangModal();

  if (currentTab === 'studios') {
    loadAlphabetData('studios', selectedStudioLetter);
  } else if (currentTab === 'actors') {
    loadAlphabetData('actors', selectedActorLetter);
  } else if (currentTab === 'favorites') {
    switchMediaSubTab(currentMediaSubTab);
  }
}

// ====================================================
// СЕРВЕР И ДАННЫЕ (SUPABASE)
// ====================================================
const SUPABASE_URL = 'https://otcnrvimrqyppmfjnqpv.supabase.co';
const SUPABASE_KEY = 'sb_publishable_niMZLppQ5UZwkQWc6Pj29g_910mdIkQ';
const TABLE_NAME = 'movies_v2';
const SELECT_FIELDS = '*';
const PAGE_SIZE = 24;

let currentOffset = 0;
let isLoading = false;
let hasMore = true;
let currentSearch = '';
let currentCountry = '';
let debounceTimer = null;
let activeMovie = null;
let heroMovie = null;
let currentTab = 'feed';
let currentMediaSubTab = 'favs';
let selectedStudioLetter = 'A';
let selectedActorLetter = 'A';

// Голоса и Свайп-лента
const votesData = {};
let swipeDeck = [];
let currentSwipeIndex = 0;
let isSwipeLoading = false;
let topCardElement = null;

const ALPHABET = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','#'];
let favorites = JSON.parse(localStorage.getItem('sinners_favs') || '[]');
let watchHistory = JSON.parse(localStorage.getItem('sinners_history') || '[]');

const BRAND_PALETTE = [
  { bg: '#251217', color: '#ff4d5a', border: '#e50914' },
  { bg: '#0e1d2b', color: '#38bdf8', border: '#0284c7' },
  { bg: '#221a0d', color: '#fbbf24', border: '#d97706' },
  { bg: '#1c1328', color: '#c084fc', border: '#9333ea' },
  { bg: '#0d2218', color: '#34d399', border: '#059669' },
  { bg: '#261221', color: '#f472b6', border: '#db2777' }
];

function getThemeForName(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return BRAND_PALETTE[Math.abs(hash) % BRAND_PALETTE.length];
}

function getMonogram(name) {
  if (!name) return 'TS';
  const parts = name.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.substring(0, 2).toUpperCase();
}

const grid = document.getElementById('catalog-grid');
const favoritesGrid = document.getElementById('favorites-grid');
const historyGrid = document.getElementById('history-grid');
const scrollStatus = document.getElementById('scroll-status');
const statusBadge = document.getElementById('status-badge');
const searchInput = document.getElementById('search-input');
const searchClear = document.getElementById('search-clear');
const favCounter = document.getElementById('fav-counter');
const feedShowcase = document.getElementById('feed-showcase');

function updateFavCounter() {
  if (favorites.length > 0) {
    favCounter.innerText = favorites.length;
    favCounter.style.display = 'block';
  } else {
    favCounter.style.display = 'none';
  }
  const favLabel = document.getElementById('label-subtab-favs');
  if (favLabel) favLabel.innerText = `${t('favsTab')} (${favorites.length})`;
  const histLabel = document.getElementById('label-subtab-history');
  if (histLabel) histLabel.innerText = `${t('historyTab')} (${watchHistory.length})`;
}

function isFav(id) {
  return favorites.some(m => m.id === id);
}

function toggleFavorite(movie, e) {
  if (e) e.stopPropagation();
  if (tg?.HapticFeedback) tg.HapticFeedback.impactOccurred('medium');

  const index = favorites.findIndex(m => m.id === movie.id);
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.unshift(movie);
  }

  localStorage.setItem('sinners_favs', JSON.stringify(favorites));
  updateFavCounter();
  updatePepperUI(movie.id);

  if (currentTab === 'favorites' && currentMediaSubTab === 'favs') {
    renderFavorites();
  }
}

function toggleCurrentFavorite() {
  if (!activeMovie) return;
  toggleFavorite(activeMovie);
  document.getElementById('sheet-fav-btn').classList.toggle('active', isFav(activeMovie.id));
}

function updatePepperUI(movieId) {
  document.querySelectorAll(`[data-pepper-id="${movieId}"]`).forEach(el => {
    el.classList.toggle('active', isFav(movieId));
  });
  if (heroMovie && heroMovie.id === movieId) {
    const heroPep = document.getElementById('hero-pepper-btn');
    if (heroPep) heroPep.classList.toggle('active', isFav(movieId));
  }
  updateSwipeFavBtn(movieId);
}

function recordHistory(movie) {
  if (!movie || !movie.id) return;
  const idx = watchHistory.findIndex(m => m.id === movie.id);
  if (idx > -1) watchHistory.splice(idx, 1);
  watchHistory.unshift(movie);
  if (watchHistory.length > 40) watchHistory = watchHistory.slice(0, 40);
  localStorage.setItem('sinners_history', JSON.stringify(watchHistory));
  updateFavCounter();
  if (currentTab === 'favorites' && currentMediaSubTab === 'history') {
    renderHistory();
  }
}

function clearHistoryPrompt() {
  if (watchHistory.length === 0) return;
  if (confirm(t('clearHistoryConfirm'))) {
    watchHistory = [];
    localStorage.removeItem('sinners_history');
    updateFavCounter();
    renderHistory();
    if (tg?.HapticFeedback) tg.HapticFeedback.notificationOccurred('success');
  }
}

function switchTab(tab) {
  if (tg?.HapticFeedback) tg.HapticFeedback.selectionChanged();
  currentTab = tab;

  document.querySelectorAll('.tab-view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  const target = document.getElementById(`tab-${tab}`);
  if (target) target.classList.add('active');

  const btnIndex = tab === 'feed' ? 0 : tab === 'studios' ? 1 : tab === 'actors' ? 2 : 4;
  document.querySelectorAll('.nav-btn')[btnIndex]?.classList.add('active');

  if (tab === 'favorites') {
    switchMediaSubTab(currentMediaSubTab);
  } else if (tab === 'feed') {
    statusBadge.innerText = t('moviesCount', { count: currentOffset });
  } else if (tab === 'studios') {
    initAlphabet('studios');
  } else if (tab === 'actors') {
    initAlphabet('actors');
  }
}

function switchMediaSubTab(subTab) {
  if (tg?.HapticFeedback) tg.HapticFeedback.selectionChanged();
  currentMediaSubTab = subTab;

  const favsBtn = document.getElementById('btn-subtab-favs');
  const histBtn = document.getElementById('btn-subtab-history');
  const favsView = document.getElementById('media-favs-view');
  const histView = document.getElementById('media-history-view');
  const clearBtn = document.getElementById('btn-clear-history');
  const hint = document.getElementById('media-section-hint');

  if (subTab === 'favs') {
    favsBtn.classList.add('active');
    histBtn.classList.remove('active');
    favsView.style.display = 'block';
    histView.style.display = 'none';
    clearBtn.style.display = 'none';
    hint.innerText = t('favsHint');
    renderFavorites();
  } else {
    histBtn.classList.add('active');
    favsBtn.classList.remove('active');
    favsView.style.display = 'none';
    histView.style.display = 'block';
    clearBtn.style.display = watchHistory.length > 0 ? 'block' : 'none';
    hint.innerText = t('historyHint');
    renderHistory();
  }
}

function renderFavorites() {
  favoritesGrid.innerHTML = '';
  const emptyMsg = document.getElementById('favorites-empty');
  statusBadge.innerText = t('inCollection', { count: favorites.length });
  if (favorites.length === 0) {
    emptyMsg.style.display = 'block';
    return;
  }
  emptyMsg.style.display = 'none';
  favorites.forEach(m => favoritesGrid.appendChild(createCardElement(m)));
}

function renderHistory() {
  historyGrid.innerHTML = '';
  const emptyMsg = document.getElementById('history-empty');
  const clearBtn = document.getElementById('btn-clear-history');
  statusBadge.innerText = t('inHistory', { count: watchHistory.length });
  if (watchHistory.length === 0) {
    emptyMsg.style.display = 'block';
    clearBtn.style.display = 'none';
    return;
  }
  emptyMsg.style.display = 'none';
  clearBtn.style.display = 'block';
  watchHistory.forEach(m => historyGrid.appendChild(createCardElement(m)));
}

// ====================================================
// ЛОГИКА ГОЛОСОВАНИЯ (HOT / PASS)
// ====================================================
function getTelegramUserId() {
  if (window.Telegram?.WebApp?.initDataUnsafe?.user?.id) {
    return window.Telegram.WebApp.initDataUnsafe.user.id;
  }
  let guestId = localStorage.getItem('sinners_guest_uid');
  if (!guestId) {
    guestId = Math.floor(100000000 + Math.random() * 900000000);
    localStorage.setItem('sinners_guest_uid', guestId);
  }
  return guestId;
}

async function loadVotesStats(movieIds) {
  if (!movieIds.length) return;
  const uid = getTelegramUserId();
  const idsQuery = movieIds.join(',');

  try {
    const [statsRes, userVotesRes] = await Promise.all([
      fetch(`${SUPABASE_URL}/rest/v1/movie_votes_stats?movie_id=in.(${idsQuery})`, {
        headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
      }),
      fetch(`${SUPABASE_URL}/rest/v1/movie_votes?telegram_user_id=eq.${uid}&movie_id=in.(${idsQuery})`, {
        headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
      })
    ]);

    const stats = await statsRes.json();
    const userVotes = await userVotesRes.json();

    movieIds.forEach(id => {
      votesData[id] = { hot: 0, pass: 0, myVote: null };
    });

    if (Array.isArray(stats)) {
      stats.forEach(st => {
        if (votesData[st.movie_id]) {
          votesData[st.movie_id].hot = Number(st.hot_count) || 0;
          votesData[st.movie_id].pass = Number(st.pass_count) || 0;
        }
      });
    }

    if (Array.isArray(userVotes)) {
      userVotes.forEach(uv => {
        if (votesData[uv.movie_id]) {
          votesData[uv.movie_id].myVote = uv.vote_type;
        }
      });
    }
  } catch (e) {
    console.error("Ошибка загрузки голосов:", e);
  }
}

async function castVote(movieId, type, event) {
  if (event) event.stopPropagation();
  if (window.Telegram?.WebApp?.HapticFeedback) {
    window.Telegram.WebApp.HapticFeedback.impactOccurred('medium');
  }

  if (!votesData[movieId]) {
    votesData[movieId] = { hot: 0, pass: 0, myVote: null };
  }

  const curr = votesData[movieId];
  const prevVote = curr.myVote;
  if (prevVote === type) return;

  if (prevVote === 'hot') curr.hot = Math.max(0, curr.hot - 1);
  if (prevVote === 'pass') curr.pass = Math.max(0, curr.pass - 1);

  if (type === 'hot') curr.hot++;
  if (type === 'pass') curr.pass++;

  curr.myVote = type;
  updateVoteButtonsUI(movieId);

  try {
    await fetch(`${SUPABASE_URL}/rest/v1/movie_votes`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'resolution=merge-duplicates'
      },
      body: JSON.stringify({
        movie_id: movieId,
        telegram_user_id: getTelegramUserId(),
        vote_type: type
      })
    });
  } catch (err) {
    console.error("Ошибка отправки голоса:", err);
  }
}

function updateVoteButtonsUI(movieId) {
  const data = votesData[movieId] || { hot: 0, pass: 0, myVote: null };
  
  document.querySelectorAll(`[data-vote-box="${movieId}"]`).forEach(box => {
    const hotBtn = box.querySelector('.btn-hot');
    const passBtn = box.querySelector('.btn-pass');

    if (hotBtn) {
      hotBtn.className = `vote-btn hot ${box.classList.contains('hero-vote-bar') ? 'hero-vote-btn' : ''} ${data.myVote === 'hot' ? 'active' : ''}`;
      hotBtn.innerHTML = `🔥 ${box.classList.contains('hero-vote-bar') ? 'Hot: ' : ''}${data.hot}`;
    }
    if (passBtn) {
      passBtn.className = `vote-btn pass ${box.classList.contains('hero-vote-bar') ? 'hero-vote-btn' : ''} ${data.myVote === 'pass' ? 'active' : ''}`;
      passBtn.innerHTML = `🧊 ${box.classList.contains('hero-vote-bar') ? 'Pass: ' : ''}${data.pass}`;
    }
  });
}

// ====================================================
// ВИТРИНА НОВИНОК
// ====================================================
async function loadFeedShowcase() {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${TABLE_NAME}?select=${SELECT_FIELDS}&order=id.desc&limit=20`, {
      headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
    });
    const recents = await res.json();
    
    const ids = recents.map(m => m.id);
    await loadVotesStats(ids);

    const carousel = document.getElementById('recent-carousel');
    carousel.innerHTML = '';

    recents.forEach(m => {
      const card = document.createElement('div');
      card.className = 'carousel-card';
      card.style.width = '175px';
      card.style.minWidth = '175px';
      card.onclick = () => showMovieDetails(m);

      const mono = m.studio ? getMonogram(m.studio) : '';
      const v = votesData[m.id] || { hot: 0, pass: 0, myVote: null };

      card.innerHTML = `
        <div class="carousel-poster" style="aspect-ratio: 3 / 2; position: relative; overflow: hidden; border-radius: 10px;">
          ${m.poster_url ? `<img src="${m.poster_url}" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;z-index:1;" loading="lazy" alt="" onerror="this.remove();" />` : ''}
          <span class="card-year" style="z-index:2;">${m.year || ''}</span>
          <div class="poster-watermark" style="font-size: 60px;">${mono}</div>
          <div>
            <svg class="poster-icon-svg" style="width:24px;height:24px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <rect x="2" y="2" width="20" height="20" rx="4"/>
              <path d="m10 8 6 4-6 4V8z"/>
              <path d="M2 7h20"/><path d="m6 2 2 5"/><path d="m14 2 2 5"/>
            </svg>
          </div>
        </div>
        <div class="carousel-info">
          <div class="carousel-title">${m.title || 'Movie'}</div>
          <div class="carousel-meta">${m.country_flag ? m.country_flag + ' ' : ''}${m.studio || 'The Sinners'}</div>
          <div class="vote-bar" data-vote-box="${m.id}">
            <button class="vote-btn hot btn-hot ${v.myVote === 'hot' ? 'active' : ''}" onclick="castVote(${m.id}, 'hot', event)">
              🔥 ${v.hot}
            </button>
            <button class="vote-btn pass btn-pass ${v.myVote === 'pass' ? 'active' : ''}" onclick="castVote(${m.id}, 'pass', event)">
              🧊 ${v.pass}
            </button>
          </div>
        </div>
      `;
      carousel.appendChild(card);
    });

    if (recents.length > 0) {
      const now = new Date();
      const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
      heroMovie = recents[dayOfYear % recents.length];
      renderHeroBanner(heroMovie);
    }
  } catch (e) {
    console.error('Showcase error', e);
  }
}

function renderHeroBanner(m) {
  if (!m) return;
  const banner = document.getElementById('hero-banner');
  document.getElementById('hero-title').innerText = m.title || 'Movie';
  
  const altEl = document.getElementById('hero-alt-title');
  if (m.alternative_titles) {
    altEl.innerText = `AKA: ${m.alternative_titles}`;
    altEl.style.display = 'block';
  } else {
    altEl.style.display = 'none';
  }

  const meta = document.getElementById('hero-meta');
  const studioDisplay = m.additional_studios ? `${m.studio} / ${m.additional_studios}` : m.studio;

  meta.innerHTML = `
    ${m.year ? `<span class="hero-meta-item"><svg class="meta-svg" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg>${m.year}</span>` : ''}
    ${m.duration ? `<span class="hero-meta-item"><svg class="meta-svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${m.duration}</span>` : ''}
    ${m.country ? `<span class="hero-meta-item">${m.country_flag || ''} ${m.country}</span>` : ''}
    ${studioDisplay ? `<span class="hero-meta-item"><svg class="meta-svg" viewBox="0 0 24 24"><path d="m22 8-6 4 6 4V8z"/><rect x="2" y="6" width="14" height="12" rx="3"/></svg>${studioDisplay}</span>` : ''}
  `;

  const heroVoteBox = document.getElementById('hero-vote-box');
  if (heroVoteBox) {
    const v = votesData[m.id] || { hot: 0, pass: 0, myVote: null };
    heroVoteBox.setAttribute('data-vote-box', m.id);
    heroVoteBox.innerHTML = `
      <button class="vote-btn hero-vote-btn hot btn-hot ${v.myVote === 'hot' ? 'active' : ''}" onclick="castVote(${m.id}, 'hot', event)">
        🔥 Hot: ${v.hot}
      </button>
      <button class="vote-btn hero-vote-btn pass btn-pass ${v.myVote === 'pass' ? 'active' : ''}" onclick="castVote(${m.id}, 'pass', event)">
        🧊 Pass: ${v.pass}
      </button>
    `;
  }

  const pep = document.getElementById('hero-pepper-btn');
  pep.classList.toggle('active', isFav(m.id));

  if (m.poster_url) {
    banner.style.backgroundImage = `linear-gradient(180deg, rgba(14, 14, 18, 0.72) 0%, rgba(14, 14, 18, 0.94) 100%), url('${m.poster_url}')`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';
  } else {
    banner.style.backgroundImage = '';
  }
  banner.style.display = 'block';
}

function openHeroDetails(e) {
  if (e) e.stopPropagation();
  if (heroMovie) showMovieDetails(heroMovie);
}

function openHeroPost(e) {
  if (e) e.stopPropagation();
  if (heroMovie) openChannelPost(heroMovie);
}

function toggleHeroFavorite(e) {
  if (e) e.stopPropagation();
  if (heroMovie) toggleFavorite(heroMovie);
}

function filterByCountry(country, btn) {
  if (tg?.HapticFeedback) tg.HapticFeedback.selectionChanged();
  currentCountry = country;

  document.querySelectorAll('.country-chip').forEach(c => c.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const titleEl = document.getElementById('grid-section-title');
  if (titleEl) {
    titleEl.innerText = country ? `${t('moviesArchive')}${country}` : t('fullArchive');
  }

  fetchMovies(true);
}

// ====================================================
// АЛФАВИТНЫЙ УКАЗАТЕЛЬ (СТУДИИ И АКТЕРЫ)
// ====================================================
function initAlphabet(type) {
  const container = document.getElementById(`${type}-alphabet`);
  if (container.children.length > 0) return;

  ALPHABET.forEach(letter => {
    const btn = document.createElement('button');
    btn.className = `alpha-btn ${letter === 'A' ? 'active' : ''}`;
    btn.innerText = letter;
    btn.onclick = () => selectLetter(type, letter, btn);
    container.appendChild(btn);
  });

  loadAlphabetData(type, 'A');
}

function selectLetter(type, letter, btn) {
  if (tg?.HapticFeedback) tg.HapticFeedback.selectionChanged();
  document.querySelectorAll(`#${type}-alphabet .alpha-btn`).forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  if (type === 'studios') selectedStudioLetter = letter;
  if (type === 'actors') selectedActorLetter = letter;
  loadAlphabetData(type, letter);
}

async function loadAlphabetData(type, letter) {
  const statusEl = document.getElementById(`${type}-status`);
  statusEl.innerText = t(type === 'studios' ? 'studiosSearching' : 'actorsSearching', { letter });

  try {
    if (type === 'studios') {
      const wrap = document.getElementById('studios-wrap');
      wrap.innerHTML = '';

      const endpoint = `${SUPABASE_URL}/rest/v1/${TABLE_NAME}?select=studio,additional_studios&or=(studio.ilike.*${letter}*,additional_studios.ilike.*${letter}*)&limit=1000`;
      const res = await fetch(endpoint, {
        headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
      });
      const data = await res.json();
      
      const studiosMap = new Map();
      const studioCounts = {};

      data.forEach(d => {
        const rawStudios = [d.studio, d.additional_studios].filter(Boolean).join(', ');
        const parts = rawStudios.split(/[,/]/);
        parts.forEach(p => {
          const name = p.trim();
          if (!name) return;

          const firstChar = name.charAt(0).toUpperCase();
          const isMatch = (letter === '#') ? !/[A-Z]/i.test(firstChar) : (firstChar === letter.toUpperCase());

          if (isMatch) {
            const key = name.replace(/[\s\-_]+/g, '').toLowerCase();
            if (!studiosMap.has(key)) studiosMap.set(key, name);
            const canonicalName = studiosMap.get(key);
            studioCounts[canonicalName] = (studioCounts[canonicalName] || 0) + 1;
          }
        });
      });

      const studios = Array.from(studiosMap.values()).map(st => ({
        name: st,
        count: studioCounts[st] || 1
      })).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

      if (studios.length === 0) {
        statusEl.innerText = t('studiosNone', { letter });
        return;
      }
      statusEl.innerText = t('studiosFound', { count: studios.length });

      const topStudio = studios[0];
      const topMono = getMonogram(topStudio.name);
      const topBanner = document.createElement('div');
      topBanner.className = 'vip-banner';
      topBanner.onclick = () => filterFeedByQuery(topStudio.name);
      topBanner.innerHTML = `
        <div>
          <div class="vip-badge">${t('topStudio')}</div>
          <div class="vip-title">${topStudio.name}</div>
          <div class="vip-desc">${t('studioTagline')}</div>
          <div class="vip-count">${t('studioReleases', { count: topStudio.count })}</div>
        </div>
        <div class="vip-avatar">${topMono}</div>
      `;
      wrap.appendChild(topBanner);

      if (studios.length > 1) {
        const secTitle = document.createElement('div');
        secTitle.className = 'section-subtitle';
        secTitle.innerText = t('otherStudios', { letter });
        wrap.appendChild(secTitle);

        const gridEl = document.createElement('div');
        gridEl.className = 'catalog-tiles-grid';

        for (let i = 1; i < studios.length; i++) {
          const st = studios[i];
          const theme = getThemeForName(st.name);
          const mono = getMonogram(st.name);

          const tile = document.createElement('div');
          tile.className = 'catalog-tile';
          tile.onclick = () => filterFeedByQuery(st.name);
          tile.innerHTML = `
            <div class="tile-avatar" style="background:${theme.bg}; color:${theme.color}; border-color:${theme.border};">
              ${mono}
            </div>
            <div class="tile-title">${st.name}</div>
            <div class="tile-badge">${t('studioReleases', { count: st.count })}</div>
          `;
          gridEl.appendChild(tile);
        }
        wrap.appendChild(gridEl);
      }

    } else if (type === 'actors') {
      const wrap = document.getElementById('actors-wrap');
      wrap.innerHTML = '';

      const endpoint = `${SUPABASE_URL}/rest/v1/${TABLE_NAME}?select=actors&actors=not.is.null&actors=ilike.*${letter}*&limit=1000`;
      const res = await fetch(endpoint, {
        headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
      });
      const data = await res.json();

      const actorsMap = new Map();
      const actorCounts = {};

      data.forEach(d => {
        if (!d.actors) return;
        const cleanStr = d.actors.replace(/#/g, ',');
        const parts = cleanStr.split(/[,;\n\r/]/);

        parts.forEach(p => {
          let name = p.trim().replace(/^[\s,._-]+|[\s,._-]+$/g, '');
          if (!name || name.length < 2) return;
          if (!name.includes(' ') && /[a-z][A-Z]/.test(name)) {
            name = name.replace(/([a-z])([A-Z])/g, '$1 $2');
          }

          const firstChar = name.charAt(0).toUpperCase();
          const isMatch = (letter === '#') ? !/[A-Z]/i.test(firstChar) : (firstChar === letter.toUpperCase());

          if (isMatch) {
            const key = name.replace(/[\s\-_]+/g, '').toLowerCase();
            if (!actorsMap.has(key)) actorsMap.set(key, name);
            const canonicalName = actorsMap.get(key);
            actorCounts[canonicalName] = (actorCounts[canonicalName] || 0) + 1;
          }
        });
      });

      const actors = Array.from(actorsMap.values()).map(ac => ({
        name: ac,
        count: actorCounts[ac] || 1
      })).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

      if (actors.length === 0) {
        statusEl.innerText = t('actorsNone', { letter });
        return;
      }
      statusEl.innerText = t('actorsFound', { count: actors.length });

      const topActor = actors[0];
      const topMono = getMonogram(topActor.name);
      const topBanner = document.createElement('div');
      topBanner.className = 'vip-banner';
      topBanner.onclick = () => filterFeedByQuery(topActor.name);
      topBanner.innerHTML = `
        <div>
          <div class="vip-badge">${t('topActor')}</div>
          <div class="vip-title">${topActor.name}</div>
          <div class="vip-desc">${t('actorTagline', { letter })}</div>
          <div class="vip-count">${t('actorMovies', { count: topActor.count })}</div>
        </div>
        <div class="vip-avatar">${topMono}</div>
      `;
      wrap.appendChild(topBanner);

      if (actors.length > 1) {
        const secTitle = document.createElement('div');
        secTitle.className = 'section-subtitle';
        secTitle.innerText = t('otherActors', { letter });
        wrap.appendChild(secTitle);

        const gridEl = document.createElement('div');
        gridEl.className = 'catalog-tiles-grid';

        for (let i = 1; i < actors.length; i++) {
          const ac = actors[i];
          const theme = getThemeForName(ac.name);
          const mono = getMonogram(ac.name);

          const tile = document.createElement('div');
          tile.className = 'catalog-tile';
          tile.onclick = () => filterFeedByQuery(ac.name);
          tile.innerHTML = `
            <div class="tile-avatar" style="background:${theme.bg}; color:${theme.color}; border-color:${theme.border};">
              ${mono}
            </div>
            <div class="tile-title">${ac.name}</div>
            <div class="tile-badge">${t('actorMovies', { count: ac.count })}</div>
          `;
          gridEl.appendChild(tile);
        }
        wrap.appendChild(gridEl);
      }
    }
  } catch (err) {
    statusEl.innerText = t('netError');
  }
}

function filterFeedByQuery(query) {
  if (tg?.HapticFeedback) tg.HapticFeedback.impactOccurred('medium');
  searchInput.value = query;
  currentSearch = query;
  searchClear.style.display = 'flex';
  if (feedShowcase) feedShowcase.style.display = 'none';
  switchTab('feed');
  fetchMovies(true);
}

// ====================================================
// ЛОГИКА ФРАНШИЗ (ПО КЛЮЧУ FRANCHISE_KEY)
// ====================================================
async function loadFranchiseParts(movie, containerType) {
  const container = document.getElementById(`${containerType}-franchise`);
  const listEl = document.getElementById(`${containerType}-franchise-list`);
  if (!container || !listEl) return;

  container.style.display = 'none';
  listEl.innerHTML = '';
  if (!movie.franchise_key) return;

  const endpoint = `${SUPABASE_URL}/rest/v1/${TABLE_NAME}?select=${SELECT_FIELDS}&franchise_key=eq.${encodeURIComponent(movie.franchise_key)}&order=year.asc,id.asc&limit=25`;

  try {
    const res = await fetch(endpoint, {
      headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
    });
    const parts = await res.json();
    if (!parts || parts.length <= 1) return;

    listEl.innerHTML = '';
    parts.forEach(part => {
      const isCurrent = part.id === movie.id;
      const chip = document.createElement('div');
      chip.className = `franchise-chip ${isCurrent ? 'current-part' : ''}`;
      
      const orderLabel = part.franchise_order ? `ч. ${part.franchise_order}` : (part.year || '');

      chip.innerHTML = `
        <div class="franchise-chip-title">${part.title}</div>
        <div class="franchise-chip-meta">${orderLabel} ${part.duration ? '• ' + part.duration : ''} ${isCurrent ? '★' : ''}</div>
      `;
      chip.onclick = (e) => {
        e.stopPropagation();
        if (isCurrent) return;
        if (tg?.HapticFeedback) tg.HapticFeedback.selectionChanged();
        if (containerType === 'sheet') showMovieDetails(part);
      };
      listEl.appendChild(chip);
    });

    container.style.display = 'block';
  } catch (e) {
    container.style.display = 'none';
  }
}

// ====================================================
// СВАЙП-ЛЕНТА РЕЛИЗОВ (TINDER MODE)
// ====================================================
async function openSwipeDeck() {
  if (tg?.HapticFeedback) tg.HapticFeedback.selectionChanged();
  if (tg?.BackButton) tg.BackButton.show();

  const overlay = document.getElementById('swipe-overlay');
  if (overlay) overlay.classList.add('active');

  if (swipeDeck.length === 0 || currentSwipeIndex >= swipeDeck.length) {
    await reloadSwipeDeck();
  } else {
    renderSwipeDeck();
  }
}

function closeSwipeDeck() {
  const overlay = document.getElementById('swipe-overlay');
  if (overlay) overlay.classList.remove('active');
  if (tg?.BackButton) tg.BackButton.hide();
}

async function reloadSwipeDeck() {
  if (isSwipeLoading) return;
  isSwipeLoading = true;
  if (tg?.HapticFeedback) tg.HapticFeedback.impactOccurred('light');

  const container = document.getElementById('swipe-deck-container');
  const emptyState = document.getElementById('swipe-empty-state');
  const counter = document.getElementById('swipe-counter');
  if (counter) counter.innerText = 'Загрузка...';

  container.querySelectorAll('.swipe-card').forEach(c => c.remove());
  if (emptyState) emptyState.classList.remove('active');

  const randomOffset = Math.floor(Math.random() * 450);

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${TABLE_NAME}?select=${SELECT_FIELDS}&limit=16&offset=${randomOffset}`, {
      headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
    });
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      swipeDeck = data.sort(() => 0.5 - Math.random());
      currentSwipeIndex = 0;
      renderSwipeDeck();
    } else {
      if (emptyState) emptyState.classList.add('active');
      if (counter) counter.innerText = '';
    }
  } catch (err) {
    console.error("Ошибка колоды:", err);
    if (emptyState) emptyState.classList.add('active');
    if (counter) counter.innerText = '';
  } finally {
    isSwipeLoading = false;
  }
}

function renderSwipeDeck() {
  const container = document.getElementById('swipe-deck-container');
  const emptyState = document.getElementById('swipe-empty-state');
  const counter = document.getElementById('swipe-counter');

  container.querySelectorAll('.swipe-card').forEach(c => c.remove());

  const remaining = swipeDeck.length - currentSwipeIndex;
  if (remaining <= 0) {
    if (emptyState) emptyState.classList.add('active');
    if (counter) counter.innerText = '';
    return;
  }
  if (emptyState) emptyState.classList.remove('active');
  if (counter) counter.innerText = t('leftInDeck', { count: remaining });

  const cardsToRender = Math.min(3, remaining);
  for (let i = cardsToRender - 1; i >= 0; i--) {
    const movieIdx = currentSwipeIndex + i;
    const movie = swipeDeck[movieIdx];
    const card = createSwipeCardElement(movie, i);
    container.appendChild(card);
    if (i === 0) {
      topCardElement = card;
      attachDragEvents(card, movie);
      updateSwipeFavBtn(movie.id);
    }
  }
}

function updateSwipeFavBtn(movieId) {
  const btn = document.getElementById('swipe-fav-btn');
  if (btn) btn.classList.toggle('active', isFav(movieId));
}

function createSwipeCardElement(m, depth) {
  const card = document.createElement('div');
  card.className = 'swipe-card';
  card.setAttribute('data-movie-id', m.id);

  const scale = 1 - depth * 0.04;
  const translateY = depth * 9;
  card.style.transform = `scale(${scale}) translateY(${translateY}px)`;
  card.style.zIndex = 10 - depth;
  if (depth > 0) card.style.pointerEvents = 'none';

  const mono = m.studio ? getMonogram(m.studio) : 'TS';
  const studioDisplay = m.additional_studios ? `${m.studio} / ${m.additional_studios}` : (m.studio || 'The Sinners');

  card.innerHTML = `
    ${m.poster_url 
      ? `<img class="swipe-card-poster" src="${m.poster_url}" loading="eager" alt="" onerror="this.remove();" />` 
      : `<div style="position:absolute;inset:0;background:radial-gradient(circle at 50% 30%, #251b22 0%, #15131b 60%, #0d0c10 100%);display:flex;align-items:center;justify-content:center;"><div style="font-size:110px;font-weight:900;color:rgba(255,255,255,0.04);">${mono}</div></div>`
    }
    <div class="swipe-card-gradient"></div>
    <div class="swipe-stamp like">LIKE 🌶️</div>
    <div class="swipe-stamp nope">SKIP ✕</div>

    <div class="swipe-card-content">
      <div class="swipe-card-title">${m.title || 'Movie'}</div>
      <div class="swipe-card-meta">
        ${m.year ? `<span class="swipe-meta-chip">📅 ${m.year}</span>` : ''}
        ${m.duration ? `<span class="swipe-meta-chip">⏱ ${m.duration}</span>` : ''}
        ${m.country_flag ? `<span class="swipe-meta-chip">${m.country_flag} ${m.country || ''}</span>` : ''}
        <span class="swipe-meta-chip">🏢 ${studioDisplay}</span>
      </div>
      ${m.actors ? `<div class="swipe-card-actors">⭐ ${m.actors}</div>` : ''}
    </div>
  `;

  return card;
}

function attachDragEvents(card, movie) {
  let isPointerDown = false;
  let startX = 0;
  let startY = 0;

  const likeStamp = card.querySelector('.swipe-stamp.like');
  const nopeStamp = card.querySelector('.swipe-stamp.nope');

  function onPointerDown(e) {
    if (e.target.closest('.swipe-controls') || e.target.closest('.swipe-close-btn')) return;
    isPointerDown = true;
    startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    startY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
    card.classList.add('dragging');
  }

  function onPointerMove(e) {
    if (!isPointerDown) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
    const dx = clientX - startX;
    const dy = clientY - startY;

    const rot = dx * 0.08;
    card.style.transform = `translate(${dx}px, ${dy}px) rotate(${rot}deg)`;

    if (dx > 30) {
      const op = Math.min(1, (dx - 30) / 70);
      if (likeStamp) likeStamp.style.opacity = op;
      if (nopeStamp) nopeStamp.style.opacity = 0;
    } else if (dx < -30) {
      const op = Math.min(1, (-dx - 30) / 70);
      if (nopeStamp) nopeStamp.style.opacity = op;
      if (likeStamp) likeStamp.style.opacity = 0;
    } else {
      if (likeStamp) likeStamp.style.opacity = 0;
      if (nopeStamp) nopeStamp.style.opacity = 0;
    }
  }

  function onPointerUp(e) {
    if (!isPointerDown) return;
    isPointerDown = false;
    card.classList.remove('dragging');

    const clientX = e.clientX || (e.changedTouches && e.changedTouches[0].clientX) || 0;
    const dx = clientX - startX;

    if (dx > 90) {
      finishSwipe(card, movie, 'right');
    } else if (dx < -90) {
      finishSwipe(card, movie, 'left');
    } else {
      card.style.transform = 'translate(0px, 0px) rotate(0deg)';
      if (likeStamp) likeStamp.style.opacity = 0;
      if (nopeStamp) nopeStamp.style.opacity = 0;
    }
  }

  card.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', onPointerUp);
  window.addEventListener('pointercancel', onPointerUp);
}

function finishSwipe(card, movie, direction) {
  card.style.pointerEvents = 'none';
  const flyX = direction === 'right' ? window.innerWidth * 1.4 : -window.innerWidth * 1.4;
  const flyRot = direction === 'right' ? 25 : -25;
  card.style.transform = `translate(${flyX}px, 20px) rotate(${flyRot}deg)`;
  card.style.opacity = '0';

  if (direction === 'right') {
    if (!isFav(movie.id)) toggleFavorite(movie);
    if (tg?.HapticFeedback) tg.HapticFeedback.notificationOccurred('success');
  } else {
    if (tg?.HapticFeedback) tg.HapticFeedback.impactOccurred('light');
  }

  currentSwipeIndex++;
  setTimeout(() => {
    card.remove();
    renderSwipeDeck();
  }, 220);
}

function swipeLeft() {
  if (currentSwipeIndex >= swipeDeck.length || !topCardElement) return;
  const movie = swipeDeck[currentSwipeIndex];
  const nopeStamp = topCardElement.querySelector('.swipe-stamp.nope');
  if (nopeStamp) nopeStamp.style.opacity = 1;
  finishSwipe(topCardElement, movie, 'left');
}

function swipeRight() {
  if (currentSwipeIndex >= swipeDeck.length || !topCardElement) return;
  const movie = swipeDeck[currentSwipeIndex];
  const likeStamp = topCardElement.querySelector('.swipe-stamp.like');
  if (likeStamp) likeStamp.style.opacity = 1;
  finishSwipe(topCardElement, movie, 'right');
}

function swipeWatch() {
  if (currentSwipeIndex >= swipeDeck.length) return;
  const movie = swipeDeck[currentSwipeIndex];
  openChannelPost(movie);
}

// Заглушки совместимости
function spinRoulette() { openSwipeDeck(); }
function closeRoulette() { closeSwipeDeck(); }
function updateRouletteUI(m) {}

// ====================================================
// ЗАГРУЗКА И СЕТКА ФИЛЬМОВ
// ====================================================
async function fetchMovies(isReset = false) {
  if (isLoading || (!hasMore && !isReset)) return;
  isLoading = true;

  if (isReset) {
    currentOffset = 0;
    hasMore = true;
    grid.innerHTML = '';
    scrollStatus.innerText = t('loading') || 'Loading...';
  }

  let endpoint = `${SUPABASE_URL}/rest/v1/${TABLE_NAME}?select=${SELECT_FIELDS}&order=id.desc&limit=${PAGE_SIZE}&offset=${currentOffset}`;

  if (currentSearch.trim()) {
    const query = encodeURIComponent(`*${currentSearch.trim()}*`);
    endpoint += `&or=(title.ilike.${query},alternative_titles.ilike.${query},studio.ilike.${query},additional_studios.ilike.${query},actors.ilike.${query},franchise_key.ilike.${query})`;
  }

  if (currentCountry) {
    const cQuery = encodeURIComponent(`*${currentCountry}*`);
    endpoint += `&country=ilike.${cQuery}`;
  }

  try {
    const res = await fetch(endpoint, {
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`
      }
    });

    const movies = await res.json();
    if (movies.length < PAGE_SIZE) hasMore = false;

    if (movies.length === 0 && isReset) {
      scrollStatus.innerText = t('notFound');
      statusBadge.innerText = t('moviesCount', { count: 0 });
      isLoading = false;
      return;
    }

    movies.forEach(m => grid.appendChild(createCardElement(m)));
    currentOffset += movies.length;

    statusBadge.innerText = t('moviesCount', { count: currentOffset });
    scrollStatus.innerText = hasMore ? t('scrollMore') : t('archiveEnd');

  } catch (err) {
    scrollStatus.innerText = t('netError');
  } finally {
    isLoading = false;
  }
}

function createCardElement(m) {
  const card = document.createElement('div');
  card.className = 'card';
  card.onclick = () => showMovieDetails(m);

  const favClass = isFav(m.id) ? 'active' : '';
  const mono = m.studio ? getMonogram(m.studio) : 'TS';

  card.innerHTML = `
    <div class="poster-box">
      ${m.poster_url ? `<img src="${m.poster_url}" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;z-index:1;" loading="lazy" alt="" onerror="this.remove();" />` : ''}
      <div class="card-pepper ${favClass}" style="z-index:2;">
        <svg class="pepper-svg" viewBox="0 0 24 24">
          <path d="M16 2.5c-.6 1.4-1.5 2.5-2.8 2.5-1.5 0-2.2-.6-3.2-1.5-.7-.6-1.5-1.5-2.5-1.5-1.4 0-2.3 1-2.5 2.5-.2 1.3.4 2.8 1.4 4.2C8 11 10.5 13 12 14c1.5-1 4-3 5.6-5.3 1-1.4 1.6-2.9 1.4-4.2-.2-1.5-1.1-2.5-2.5-2.5z"/>
          <path d="M13.8 5.2c-3.2 0-6 2.8-6 6.8 0 4.5 4.2 7.5 6 9.5 1.8-2 6-5 6-9.5 0-4-2.8-6.8-6-6.8z"/>
        </svg>
      </div>
      <span class="card-year" style="z-index:2;">${m.year || ''}</span>
      <div class="poster-watermark">${mono}</div>
      <div>
        <svg class="poster-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <rect x="2" y="2" width="20" height="20" rx="4"/>
          <path d="m10 8 6 4-6 4V8z"/>
          <path d="M2 7h20"/><path d="m6 2 2 5"/><path d="m14 2 2 5"/>
        </svg>
        <div class="poster-title-preview">${m.title || 'Movie'}</div>
      </div>
    </div>
    <div class="card-info">
      <div class="card-title">${m.title || 'Untitled'}</div>
      <div class="card-meta">
        ${m.country_flag ? m.country_flag + ' ' : ''}${m.studio || 'The Sinners'}
      </div>
    </div>
  `;
  return card;
}

searchInput.addEventListener('input', (e) => {
  const val = e.target.value;
  searchClear.style.display = val ? 'flex' : 'none';

  if (feedShowcase) {
    feedShowcase.style.display = val.trim() ? 'none' : 'block';
  }

  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    currentSearch = val;
    if (currentTab !== 'feed') switchTab('feed');
    fetchMovies(true);
  }, 400);
});

function clearSearch() {
  searchInput.value = '';
  currentSearch = '';
  searchClear.style.display = 'none';
  if (feedShowcase) feedShowcase.style.display = 'block';
  fetchMovies(true);
}

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !isLoading && hasMore && currentTab === 'feed') {
    fetchMovies();
  }
}, { rootMargin: '200px' });

observer.observe(document.getElementById('scroll-sentinel'));

function showMovieDetails(m) {
  activeMovie = m;
  if (tg?.HapticFeedback) tg.HapticFeedback.selectionChanged();
  if (tg?.BackButton) tg.BackButton.show();

  document.getElementById('sheet-title').innerText = m.title || 'Untitled';
  const sTitle = document.getElementById('sheet-title');
  let sPoster = document.getElementById('sheet-poster-img');
  if (!sPoster && sTitle) {
    sPoster = document.createElement('div');
    sPoster.id = 'sheet-poster-img';
    sPoster.style.cssText = 'width:100%; aspect-ratio:3/2; border-radius:12px; overflow:hidden; margin-bottom:14px; background:#18181b;';
    sTitle.parentNode.insertBefore(sPoster, sTitle);
  }
  if (sPoster) {
    if (m.poster_url) {
      sPoster.innerHTML = `<img src="${m.poster_url}" style="width:100%; height:100%; object-fit:cover; display:block;" alt="" onerror="this.parentElement.style.display='none';" />`;
      sPoster.style.display = 'block';
    } else {
      sPoster.style.display = 'none';
    }
  }

  const altEl = document.getElementById('sheet-alt-title');
  if (m.alternative_titles) {
    altEl.innerText = `AKA: ${m.alternative_titles}`;
    altEl.style.display = 'block';
  } else {
    altEl.style.display = 'none';
  }

  const meta = document.getElementById('sheet-meta');
  const studioDisplay = m.additional_studios ? `${m.studio} / ${m.additional_studios}` : m.studio;

  meta.innerHTML = `
    ${m.year ? `<div class="sheet-meta-item"><svg class="meta-svg" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg>${m.year}</div>` : ''}
    ${m.duration ? `<div class="sheet-meta-item"><svg class="meta-svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${m.duration}</div>` : ''}
    ${m.country ? `<div class="sheet-meta-item">${m.country_flag || ''} ${m.country}</div>` : ''}
    ${studioDisplay ? `<div class="sheet-meta-item"><svg class="meta-svg" viewBox="0 0 24 24"><path d="m22 8-6 4 6 4V8z"/><rect x="2" y="6" width="14" height="12" rx="3"/></svg>${studioDisplay}</div>` : ''}
  `;

  const actorsEl = document.getElementById('sheet-actors');
  actorsEl.innerHTML = m.actors ? `<span>${t('sheetStarring')}</span>${m.actors}` : '';
  actorsEl.style.display = m.actors ? 'block' : 'none';

  document.getElementById('sheet-fav-btn').classList.toggle('active', isFav(m.id));
  document.getElementById('sheet-overlay').classList.add('active');

  loadFranchiseParts(m, 'sheet');
}

function closeSheet() {
  document.getElementById('sheet-overlay').classList.remove('active');
  if (tg?.BackButton) tg.BackButton.hide();
}

function openChannelPost(movie) {
  if (!movie || !movie.telegram_url) {
    alert(t('noLink'));
    return;
  }
  if (tg?.HapticFeedback) tg.HapticFeedback.impactOccurred('medium');

  recordHistory(movie);

  if (tg?.openTelegramLink) {
    tg.openTelegramLink(movie.telegram_url);
  } else {
    window.open(movie.telegram_url, '_blank');
  }
}

// Старт приложения
applyLanguageUI();
loadFeedShowcase();
fetchMovies();
