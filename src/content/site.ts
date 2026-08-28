/* =============================================================================
 *  EBE POWER — DANE STRONY
 * -----------------------------------------------------------------------------
 *  ⚠️  DANE ZASTĘPCZE (PLACEHOLDER). Wszędzie gdzie widzisz "TODO" wpisz
 *      rzeczywiste dane firmy. Cała treść strony (teksty, oferta, dane
 *      kontaktowe, ceny, marki, realizacje) jest w TYM JEDNYM PLIKU.
 *      Po zmianie danych nie trzeba ruszać komponentów.
 * ========================================================================== */

export const company = {
  name: 'EBE POWER',
  /** Pełna nazwa do stopki, faktur, polityki prywatności */
  legalName: 'EBE POWER', // TODO: pełna nazwa prawna wraz z formą (np. Sp. z o.o.)
  claim: 'Energia, która nie zatrzyma Twojego biznesu',
  short: 'Agregaty prądotwórcze — sprzedaż, dobór mocy, montaż i serwis.',

  /* --- Kontakt ------------------------------------------------------------ */
  phone: '888 883 232',
  phoneHref: 'tel:+48888883232',
  /** Osobny numer na serwis / awarie. Zostaw puste, jeśli nie dotyczy. */
  phoneSecondary: '', // TODO
  email: 'kontakt@ebe-power.pl',
  emailService: '', // TODO (np. serwis@ebe-power.pl) — puste = ukryty
  street: 'Borki 10',
  postal: '97-400',
  city: 'Bełchatów',
  region: 'woj. łódzkie',

  /* --- Dane rejestrowe ----------------------------------------------------- */
  nip: '769 183 05 28',
  /** Zostaw puste, jeśli nie dotyczy — wtedy nie pokażemy ich na stronie. */
  regon: '', // TODO
  krs: '', // TODO (tylko spółki wpisane do KRS)
  bank: '', // TODO

  /* --- Godziny otwarcia ---------------------------------------------------- */
  hours: [
    { days: 'Poniedziałek – Piątek', time: '8:00 – 16:00' },
    { days: 'Sobota', time: 'zamknięte' },
    { days: 'Niedziela', time: 'zamknięte' },
    { days: 'Pogotowie serwisowe', time: '24/7' }, // TODO: potwierdź lub usuń
  ],

  /* --- Sklep internetowy ---------------------------------------------------- */
  /** Adres sklepu online. Zostaw puste (''), aby ukryć linki do sklepu. */
  shopUrl: 'https://sklep.ebe-power.pl',

  /* --- Social media (wpisz pełne URL-e, puste = ukryte) -------------------- */
  social: {
    facebook: '', // TODO: https://facebook.com/...
    linkedin: '', // TODO
    youtube: '', // TODO
  },

  /* --- Mapa (link "otwórz w mapach" + osadzona mapa) ----------------------- */
  /** Adres do wyszukania w mapach (kodowanie zrobi encodeURIComponent) */
  mapQuery: 'Borki 10, 97-400 Bełchatów',
  /** Embedding bez klucza API. Zostaw puste, żeby ukryć mapę. */
  mapEmbed: 'https://www.google.com/maps?q=Borki+10%2C+97-400+Be%C5%82chat%C3%B3w&output=embed',

  /** Rok założenia firmy (do licznika "lat doświadczenia") */
  founded: 2011, // TODO
  /** Endpoint formularza (np. Formspree / własny backend). Pusty = wysyłka przez e-mail. */
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT ?? '',
}

/* --- Liczby / dowód społeczny ---------------------------------------------- */
export const stats = [
  { value: 2026 - company.founded, suffix: '', label: 'lat na rynku energii' },
  { value: 1200, suffix: '+', label: 'dostarczonych agregatów' },
  { value: 2000, suffix: ' kVA', label: 'maksymalna moc jednostki' },
  { value: 24, suffix: '/7', label: 'pogotowie serwisowe' },
]

/* --- OFERTA — kategorie agregatów ----------------------------------------- */
export type Product = {
  id: string
  name: string
  range: string
  image: string
  lead: string
  features: string[]
  specs: { label: string; value: string }[]
  applications: string[]
  priceFrom: string
}

export const products: Product[] = [
  {
    id: 'przenosne',
    name: 'Agregaty przenośne',
    range: '2 – 12 kW',
    image: '/images/product-portable.jpg',
    lead: 'Lekkie, mobilne generatory na budowę, do warsztatu, na działkę i do domu. Włóż do bagażnika, uruchom jednym przyciskiem.',
    features: [
      'Silniki benzynowe i diesel, rozruch ręczny lub elektryczny',
      'Wersje inwerterowe – bezpieczne dla elektroniki',
      'Obudowa otwarta lub dźwiękochłonna (od 60 dB)',
      'Od 4 do 12 godzin pracy na jednym zbiorniku',
    ],
    specs: [
      { label: 'Moc znamionowa', value: '2 – 12 kW' },
      { label: 'Paliwo', value: 'benzyna / diesel' },
      { label: 'Napięcie', value: '230 V / 400 V' },
      { label: 'Głośność', value: 'od 60 dB(A)' },
    ],
    applications: ['Budowa', 'Warsztat', 'Dom i ogród', 'Eventy plenerowe'],
    priceFrom: 'od 2 900 zł netto',
  },
  {
    id: 'stacjonarne',
    name: 'Agregaty stacjonarne',
    range: '10 – 100 kVA',
    image: '/images/product-stationary.jpg',
    lead: 'Zasilanie awaryjne dla firmy, hotelu, serwerowni czy zakładu produkcyjnego. Startuje automatycznie w kilka sekund po zaniku sieci.',
    features: [
      'Współpraca z układem SZR (automatyka zaniku sieci)',
      'Obudowa dźwiękochłonna i wersja do zabudowy w kontenerze',
      'Zbiornik paliwa 8–24 h pracy ciągłej',
      'Sterowniki z monitoringiem i powiadomieniami SMS/e-mail',
    ],
    specs: [
      { label: 'Moc znamionowa', value: '10 – 100 kVA' },
      { label: 'Paliwo', value: 'diesel' },
      { label: 'Napięcie', value: '400 V / 230 V' },
      { label: 'Autonomia', value: '8 – 24 h' },
    ],
    applications: ['Firmy i biura', 'Serwerownie', 'Hotele', 'Zakłady produkcyjne'],
    priceFrom: 'od 24 900 zł netto',
  },
  {
    id: 'przemyslowe',
    name: 'Agregaty przemysłowe i kontenerowe',
    range: '100 – 2000 kVA',
    image: '/images/product-industrial.jpg',
    lead: 'Ciężki sprzęt do pracy ciągłej i szczytowej. Zabudowa kontenerowa, zbiorniki wielkogabarytowe, integracja z istniejącą infrastrukturą.',
    features: [
      'Zabudowa kontenerowa 20’ / 40’ z wygłuszeniem i wentylacją',
      'Praca ciągła (Prime) i rezerwowa (Standby)',
      'Integracja z rozdzielniami, SZR i systemami BMS',
      'Możliwość pracy równoległej kilku jednostek',
    ],
    specs: [
      { label: 'Moc znamionowa', value: '100 – 2000 kVA' },
      { label: 'Paliwo', value: 'diesel / gaz' },
      { label: 'Napięcie', value: '400 V / 6 kV / 15 kV' },
      { label: 'Praca', value: 'Prime / Standby' },
    ],
    applications: ['Przemysł ciężki', 'Szpitale', 'Data center', 'Kopalnie i energetyka'],
    priceFrom: 'wycena indywidualna',
  },
  {
    id: 'uzywane',
    name: 'Agregaty używane i poleasingowe',
    range: '5 – 500 kVA',
    image: '/images/product-used.jpg',
    lead: 'Sprawdzony sprzęt po przeglądzie serwisowym, z udokumentowanym przebiegiem i gwarancją rozruchową. Najlepszy stosunek ceny do mocy.',
    features: [
      'Pełny przegląd: silnik, prądnica, układ paliwowy, sterowanie',
      'Wymiana olejów, filtrów, pasków i akumulatorów',
      'Dokumentacja zdjęciowa i protokół pomiarowy',
      'Gwarancja rozruchowa 6–12 miesięcy',
    ],
    specs: [
      { label: 'Moc znamionowa', value: '5 – 500 kVA' },
      { label: 'Przebieg', value: 'raport mth' },
      { label: 'Stan', value: 'po przeglądzie' },
      { label: 'Gwarancja', value: '6 – 12 miesięcy' },
    ],
    applications: ['Budżetowe inwestycje', 'Zasilanie rezerwowe', 'Wynajem', 'Projekty sezonowe'],
    priceFrom: 'od 60% ceny nowego',
  },
]

/* --- USŁUGI ---------------------------------------------------------------- */
export type Service = {
  icon: 'gauge' | 'package' | 'truck' | 'wrench' | 'settings' | 'file'
  title: string
  lead: string
}

export const services: Service[] = [
  {
    icon: 'gauge',
    title: 'Dobór mocy i analiza obciążeń',
    lead: 'Liczymy moc pod realny profil odbiorników, prądy rozruchowe i jednoczesność. Dostajesz kalkulację, nie domysły.',
  },
  {
    icon: 'package',
    title: 'Sprzedaż agregatów nowych i używanych',
    lead: 'Jednostki 2 kW – 2 MW od sprawdzonych producentów, z pełną dokumentacją techniczną i gwarancją.',
  },
  {
    icon: 'truck',
    title: 'Transport, montaż i uruchomienie',
    lead: 'Dowóz własnym sprzętem, posadowienie, podłączenie, rozruch i test pod obciążeniem u klienta.',
  },
  {
    icon: 'settings',
    title: 'Automatyka SZR i integracja',
    lead: 'Szafy automatyki zaniku sieci, przełączanie bezprzerwowe, monitoring i sterowanie zdalne.',
  },
  {
    icon: 'wrench',
    title: 'Serwis, przeglądy i części',
    lead: 'Przeglądy okresowe, naprawy gwarancyjne i pogwarancyjne, oryginalne części i materiały eksploatacyjne.',
  },
  {
    icon: 'file',
    title: 'Finansowanie, leasing i dokumentacja',
    lead: 'Leasing, raty i wynajem z opcją wykupu. Pomagamy też w formalnościach i dokumentacji odbiorowej.',
  },
]

/* --- DLACZEGO MY ----------------------------------------------------------- */
export const advantages = [
  {
    title: 'Dobieramy moc, nie sprzedajemy "na oko"',
    lead: 'Zanim zaproponujemy urządzenie, dostajesz kalkulację obciążeń i prądów rozruchowych wraz z rekomendacją.',
  },
  {
    title: 'Sprzęt od sprawdzonych producentów',
    lead: 'Silniki i prądnice renomowanych marek, dostępność części i serwisu przez lata, nie przez jeden sezon.',
  },
  {
    title: 'Jeden partner od A do Z',
    lead: 'Dobór, dostawa, montaż, automatykę i serwis realizuje ten sam zespół. Bez przerzucania odpowiedzialności.',
  },
  {
    title: 'Realne terminy dostaw',
    lead: 'Część modeli mamy od ręki w magazynie, resztę sprowadzamy w przewidywalnym, potwierdzonym terminie.',
  },
  {
    title: 'Gwarancja i serwis po gwarancji',
    lead: 'Pełna obsługa serwisowa przez cały cykl życia agregatu, w tym przeglądy okresowe i testy obciążeniowe.',
  },
  {
    title: 'Pogotowie energetyczne 24/7',
    lead: 'Gdy zabraknie prądu, jesteśmy dostępni całą dobę – także w weekendy i święta.',
  },
]

/* --- ZASTOSOWANIA / BRANŻE ------------------------------------------------- */
export type Application = {
  title: string
  lead: string
  image: string
}

export const applications: Application[] = [
  {
    title: 'Budownictwo',
    lead: 'Zasilanie narzędzi, kontenerów zaplecza i maszyn tam, gdzie sieć jeszcze nie doszła.',
    image: '/images/real-3.jpg',
  },
  {
    title: 'Przemysł i produkcja',
    lead: 'Zabezpieczenie ciągłości linii produkcyjnych i strat liczonych w tysiącach złotych za minutę.',
    image: '/images/real-1.jpg',
  },
  {
    title: 'Ochrona zdrowia i data center',
    lead: 'Zasilanie gwarantowane z automatyką SZR, monitoringiem i testami pod obciążeniem.',
    image: '/images/real-4.jpg',
  },
  {
    title: 'Eventy i imprezy plenerowe',
    lead: 'Ciche agregaty nagłośnieniowe, sceniczne i zasilanie zaplecza festiwali oraz wesel.',
    image: '/images/real-2.jpg',
  },
  {
    title: 'Rolnictwo i uprawy',
    lead: 'Zasilanie systemów nawadniania, doju, chłodni, suszarni i szklarni w szczytowych momentach.',
    image: '/images/real-5.jpg',
  },
  {
    title: 'Dom i mała firma',
    lead: 'Kompaktowe zasilanie awaryjne dla domu, biura, warsztatu i serwerowni – start w kilka sekund.',
    image: '/images/product-stationary.jpg',
  },
]

/* --- PROCES WSPÓŁPRACY ----------------------------------------------------- */
export const process = [
  {
    step: '01',
    title: 'Zapytanie i rozmowa techniczna',
    lead: 'Zadzwonimy lub odpowiemy na e-mail w ciągu jednego dnia roboczego i zapytamy o kluczowe parametry.',
  },
  {
    step: '02',
    title: 'Analiza i dobór urządzenia',
    lead: 'Przygotujemy kalkulację mocy i 2–3 warianty: budżetowy, rekomendowany i z zapasem mocy.',
  },
  {
    step: '03',
    title: 'Oferta, formalności, termin',
    lead: 'Wycena z kosztami transportu, montażu i automatyką. Leasing, raty lub wynajem z wykupem.',
  },
  {
    step: '04',
    title: 'Dostawa, montaż, szkolenie',
    lead: 'Rozruch, test pod obciążeniem, przekazanie dokumentacji i szkolenie obsługi. Zostajemy na serwis.',
  },
]

/* --- REALIZACJE ------------------------------------------------------------ */
export type Project = {
  title: string
  category: 'Przemysł' | 'Budownictwo' | 'Eventy' | 'Ochrona zdrowia' | 'Rolnictwo' | 'Infrastruktura'
  scope: string
  unit: string
  image: string
  year: string
}

export const projects: Project[] = [
  {
    title: 'Zasilanie rezerwowe zakładu produkcyjnego',
    category: 'Przemysł',
    scope: 'Dobór, dostawa, montaż, automatyką SZR i rozruch pod obciążeniem',
    unit: '2 × 500 kVA, praca równoległa',
    image: '/images/real-1.jpg',
    year: '2025',
  },
  {
    title: 'Agregat dla generalnego wykonawcy',
    category: 'Budownictwo',
    scope: 'Dostawa w 72 h, posadowienie na płycie, podłączenie zaplecza budowy',
    unit: '1 × 100 kVA, obudowa wyciszona',
    image: '/images/real-3.jpg',
    year: '2025',
  },
  {
    title: 'Festiwal plenerowy – zasilanie sceny',
    category: 'Eventy',
    scope: 'Dostawa, okablowanie, dystrybucja mocy i obsługa podczas wydarzenia',
    unit: '2 × 250 kVA + rozdzielnie',
    image: '/images/real-2.jpg',
    year: '2024',
  },
  {
    title: 'Szpital – zasilanie gwarantowane',
    category: 'Ochrona zdrowia',
    scope: 'Integracja z istniejącym SZR, testy obciążeniowe, przeglądy okresowe',
    unit: '1 × 400 kVA + zbiornik 24 h',
    image: '/images/real-4.jpg',
    year: '2024',
  },
  {
    title: 'Zasilanie gospodarstwa i szklarni',
    category: 'Rolnictwo',
    scope: 'Dobór pod pompy nawadniania i chłodnię, rozruch przy silnikach indukcyjnych',
    unit: '1 × 60 kVA + SZR',
    image: '/images/real-5.jpg',
    year: '2025',
  },
  {
    title: 'Roboty drogowe w nocy',
    category: 'Infrastruktura',
    scope: 'Agregat mobilny na przyczepie wraz z oświetleniem i zasilaniem narzędzi',
    unit: '1 × 45 kVA + maszty oświetleniowe',
    image: '/images/real-6.jpg',
    year: '2023',
  },
  {
    title: 'Budowa domu jednorodzinnego',
    category: 'Budownictwo',
    scope: 'Wydanie agregatu przenośnego wraz z przedłużaczami i instruktażem',
    unit: '1 × 8 kW, benzynowy',
    image: '/images/real-7.jpg',
    year: '2025',
  },
]

export const projectCategories = [
  'Wszystkie',
  'Przemysł',
  'Budownictwo',
  'Eventy',
  'Ochrona zdrowia',
  'Rolnictwo',
  'Infrastruktura',
] as const

/* --- OPINIE ---------------------------------------------------------------- */
export const testimonials = [
  {
    name: 'Tomasz W.',
    role: 'Kierownik utrzymania ruchu, zakład produkcyjny',
    text: 'Zamiast "bierzcie 300 kVA" dostaliśmy tabelę obciążeń i trzy warianty. Agregat pracuje od roku, przeglądy zrobione w terminie, zero niespodzianek.',
  },
  {
    name: 'Marek K.',
    role: 'Właściciel firmy budowlanej',
    text: 'Zamówienie w poniedziałek, agregat stał na budowie w czwartek. Montaż, rozruch i szkolenie w jednym dniu. Tak powinno to wyglądać.',
  },
  {
    name: 'Anna S.',
    role: 'Dyrektor placówki medycznej',
    text: 'Najbardziej cenię testy pod obciążeniem i dokumentację, która przeszła kontrolę bez uwag. Wiedzą, że w ochronie zdrowia nie ma miejsca na przypadek.',
  },
]

/* --- FAQ ------------------------------------------------------------------- */
export const faq = [
  {
    q: 'Jak dobrać moc agregatu do moich potrzeb?',
    a: 'Sumujemy moc wszystkich odbiorników, uwzględniamy prądy rozruchowe (silniki, sprężarki, pompy potrafią potrzebować 3–6× mocy znamionowej na ułamek sekundy) oraz współczynnik jednoczesności. Na tej podstawie podajemy wymaganą moc w kVA i dodajemy bezpieczną rezerwę. Możesz to policzyć sam w kalkulatorze na stronie Oferta – my i tak sprawdzimy wynik przed wysyłką.',
  },
  {
    q: 'Czy agregat może działać jako automatyczne zasilanie awaryjne?',
    a: 'Tak. Agregat stacjonarny lub przemysłowy łączymy z szafą SZR (samoczynne załączanie rezerwy). Po zaniku napięcia w sieci urządzenie startuje samo w kilka–kilkanaście sekund, a po powrocie zasilania wraca do trybu czuwania. Dobór szafy i sterownika jest częścią oferty.',
  },
  {
    q: 'Czy zajmujecie się montażem i uruchomieniem?',
    a: 'Tak – dowozimy agregat, posadowiamy go na fundamencie lub płycie, podłączamy do rozdzielni, wykonujemy rozruch i test pod obciążeniem, a na koniec szkolimy obsługę i przekazujemy dokumentację odbiorową.',
  },
  {
    q: 'Jaki jest czas realizacji zamówienia?',
    a: 'Popularne modele do 100 kVA mamy dostępne od ręki lub w ciągu kilku dni roboczych. Jednostki przemysłowe i konfiguracje nietypowe wyceniamy i produkujemy zwykle w 6–12 tygodni. Zawsze podajemy potwierdzony termin przed podpisaniem umowy.',
  },
  {
    q: 'Czy agregaty używane mają gwarancję?',
    a: 'Tak. Każda używana jednostka przechodzi przegląd (silnik, prądnica, układ paliwowy, sterowanie, wymiana materiałów eksploatacyjnych), dostaje protokół pomiarowy i gwarancję rozruchową na 6–12 miesięcy, w zależności od modelu i przebiegu.',
  },
  {
    q: 'Czy serwisujecie agregaty innych marek i spoza Waszej sprzedaży?',
    a: 'Tak. Serwisujemy większość marek dostępnych na rynku, również urządzenia kupione gdzie indziej. Wykonujemy przeglądy okresowe, naprawy, dostawy części oraz pogotowie energetyczne 24/7.',
  },
]

/* --- MARKI (dostarczane / serwisowane) ------------------------------------ */
/* Uwaga: nazwy są własnością ich producentów. Zmień listę na takie, które
   faktycznie oferujesz lub serwisujesz. */
export const brands = [
  'Cummins',
  'Perkins',
  'Volvo Penta',
  'Baudouin',
  'Stamford',
  'Leroy-Somer',
  'Mecc Alte',
  'Himoinsa',
  'Pramac',
  'Atlas Copco',
  'Caterpillar',
  'Kohler',
  'SDMO',
  'Deep Sea',
  'ComAp',
]

/* --- KALKULATOR DOBORU MOCY — domyślne odbiorniki -------------------------- */
export type CalcLoad = {
  id: string
  label: string
  /** domyślna moc znamionowa [kW] */
  defaultKw: number
  /** współczynnik prądu rozruchowego (1 = brak udaru) */
  surge: number
  /** hint wyświetlany pod polem */
  hint?: string
  on: boolean
}

export const calcLoads: CalcLoad[] = [
  { id: 'light', label: 'Oświetlenie LED i gniazdka', defaultKw: 1.5, surge: 1, on: true },
  { id: 'it', label: 'Komputery, serwerownia, UPS', defaultKw: 2.0, surge: 1.1, on: true },
  { id: 'fridge', label: 'Chłodnictwo, lodówki, mroźnie', defaultKw: 1.2, surge: 3, on: false },
  { id: 'pump', label: 'Pompy, hydrofory', defaultKw: 2.2, surge: 4, on: false },
  { id: 'compressor', label: 'Sprężarka', defaultKw: 4.0, surge: 4, on: false },
  { id: 'hvac', label: 'Klimatyzacja i wentylacja', defaultKw: 3.5, surge: 2.5, on: false },
  { id: 'tools', label: 'Elektronarzędzia budowlane', defaultKw: 3.0, surge: 2, on: false },
  { id: 'welder', label: 'Spawarka', defaultKw: 5.0, surge: 2, on: false },
  { id: 'kitchen', label: 'Kuchnia elektryczna / catering', defaultKw: 6.0, surge: 1, on: false },
  { id: 'heating', label: 'Ogrzewanie elektryczne', defaultKw: 9.0, surge: 1, on: false },
]

/* --- NAWIGACJA ------------------------------------------------------------- */
export const nav = [
  { to: '/', label: 'Start' },
  { to: '/oferta', label: 'Oferta' },
  { to: '/realizacje', label: 'Realizacje' },
  { to: '/o-firmie', label: 'O firmie' },
  { to: '/kontakt', label: 'Kontakt' },
]
