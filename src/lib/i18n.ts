// Domestic Pro Service — i18n strings
// Cape Town Northern Suburbs market: English, Afrikaans, isiXhosa.
// (isiXhosa is the dominant African language in the Western Cape.)

export type Locale = "en" | "af" | "xh";

export const LOCALES: { id: Locale; label: string; nativeLabel: string; flag: string }[] = [
  { id: "en", label: "English", nativeLabel: "English", flag: "EN" },
  { id: "af", label: "Afrikaans", nativeLabel: "Afrikaans", flag: "AF" },
  { id: "xh", label: "isiXhosa", nativeLabel: "isiXhosa", flag: "XH" },
];

export interface Dict {
  // Top utility
  coverage: string;
  since: string;
  callNow: string;
  // Nav / header
  navHome: string;
  navAbout: string;
  navServices: string;
  navBook: string;
  navContact: string;
  aiMatcherBadge: string;
  demoBadge: string;
  // Hero
  heroEyebrow: string;
  heroTitle: string;
  heroSuburbLine: string;
  heroLead: string;
  heroCtaBook: string;
  heroCtaCall: string;
  // Trust strip
  trust1: string;
  trust2: string;
  trust3: string;
  trust4: string;
  trust5: string;
  // Services
  servicesTitle: string;
  servicesLead: string;
  serviceResidentialName: string;
  serviceResidentialDesc: string;
  serviceCommercialName: string;
  serviceCommercialDesc: string;
  serviceDeepName: string;
  serviceDeepDesc: string;
  serviceMoveName: string;
  serviceMoveDesc: string;
  startingFrom: string;
  viewMore: string;
  // Why choose us
  whyTitle: string;
  whyLead: string;
  why1: string;
  why2: string;
  why3: string;
  why4: string;
  why5: string;
  // Areas
  areasTitle: string;
  areasLead: string;
  areaDurbanvilleDesc: string;
  areaBellvilleDesc: string;
  areaTygervalleyDesc: string;
  areaParowDesc: string;
  // Demo: intake
  demoEyebrow: string;
  demoTitle: string;
  demoLead: string;
  demoThreeCol: string;
  demoLiveAuto: string;
  demoNoLogin: string;
  intakePanelTitle: string;
  intakePanelLead: string;
  scenarioLabel: string;
  scenarioDurbanville: string;
  scenarioDurbanvilleDesc: string;
  scenarioTygervalley: string;
  scenarioTygervalleyDesc: string;
  fieldName: string;
  fieldPhone: string;
  fieldSuburb: string;
  fieldSuburbHint: string;
  fieldArea: string;
  fieldService: string;
  fieldProperty: string;
  fieldDay: string;
  fieldTime: string;
  fieldNotes: string;
  petSafe: string;
  ecoFriendly: string;
  submitJob: string;
  processing: string;
  resetForm: string;
  pipelineRunning: string;
  // Pipeline
  pipelineTitle: string;
  pipelineLead: string;
  pipelineIdle: string;
  pipelineIdleHint: string;
  liveConsole: string;
  stage1Title: string;
  stage1Sub: string;
  stage2Title: string;
  stage2Sub: string;
  stage3Title: string;
  stage3Sub: string;
  stage4Title: string;
  stage4Sub: string;
  // Admin
  adminTitle: string;
  adminLead: string;
  noLeadYet: string;
  noLeadHint: string;
  instantLead: string;
  client: string;
  suburb: string;
  property: string;
  preferred: string;
  estRevenue: string;
  duration: string;
  teamSize: string;
  ecoSafetyFlag: string;
  equipmentChecklist: string;
  ecoSupply: string;
  petSafeSupply: string;
  oneClickDispatch: string;
  acceptLockQueue: string;
  leadAccepted: string;
  lockCalendarSlot: string;
  calendarLocked: string;
  sendSms: string;
  smsSent: string;
  viewReferral: string;
  referralModalTitle: string;
  referralModalDesc: string;
  referralScore: string;
  referralScoreDesc: string;
  adjacentSuburbs: string;
  recurringPotential: string;
  offSeasonUplift: string;
  referralRecommendation: string;
  gotIt: string;
  fullyDispatched: string;
  // ROI
  roiTitle: string;
  roiLead: string;
  roiRealtime: string;
  roiOffSeasonLabel: string;
  roiOffSeasonDesc: string;
  roiAdjacentLabel: string;
  roiAdjacentDesc: string;
  roiRecurringLabel: string;
  roiRecurringDesc: string;
  roiHeadline: string;
  // Reviews
  reviewsTitle: string;
  reviewsLead: string;
  reviewsRating: string;
  reviewsOutOf: string;
  reviewsVerifiedBy: string;
  reviewGoogleCta: string;
  // Stats
  statsTitle: string;
  statsReviews: string;
  statsClients: string;
  statsJobs: string;
  statsYears: string;
  // How it works
  howTitle: string;
  how1Title: string;
  how1Body: string;
  how2Title: string;
  how2Body: string;
  how3Title: string;
  how3Body: string;
  // Footer
  footerTrustEco: string;
  footerTrustPet: string;
  footerTrustCoverage: string;
  footerCompany: string;
  footerBrandDesc: string;
  footerCoverage: string;
  footerContact: string;
  footerBusinessHours: string;
  footerBusinessHoursValue: string;
  footerQuickLinks: string;
  footerBuiltBy: string;
  footerBuiltByDesc: string;
  footerRights: string;
  footerFiona: string;
  whatsapp: string;
  // Misc
  durbanvilleCorridor: string;
  // Shop section
  shopEyebrow: string;
  shopTitle: string;
  shopLead: string;
  shopCta: string;
  shopBrowseAll: string;
  shopAddToBasket: string;
  shopOnSale: string;
  shopComboBadge: string;
  shopFeaturedTitle: string;
  shopFeaturedLead: string;
  shopFreeDelivery: string;
  shopZAAware: string;
  shopEcoTag: string;
  shopPetTag: string;
  shopFamilyTag: string;
  shopComboTag: string;
  shopCart: string;
  shopCartTotal: string;
  shopCartCheckout: string;
  shopCartEmpty: string;
  shopContinueShopping: string;
  shopTotalItems: string;
  shopItems: string;
  shopRemove: string;
  shopAddedToCart: string;
  shopRemovedFromCart: string;
  shopShowOnly: string;
  catAll: string;
  catCombo: string;
  catMulti: string;
  catKitchen: string;
  catFloor: string;
  catFabric: string;
  catAir: string;
  catSneaker: string;
  // Product taglines (short benefit statements)
  prodAirTag: string;
  prodSneakerTag: string;
  prodDishTag: string;
  prodComboTag: string;
  prodFloorTag: string;
  prodHandyTag: string;
  prodFabricTag: string;
  prodMultiCitrusTag: string;
  prodMultiGreenTag: string;
  // Reviews/review modal
  reviewsAvRating: string;
  reviewsAvRatingDesc: string;
  navShop: string;
}

export const DICT: Record<Locale, Dict> = {
  en: {
    coverage: "Durbanville · Bellville · Tygervalley · Parow",
    since: "Since 2021",
    callNow: "081 037 2833",
    navHome: "Home",
    navAbout: "About",
    navServices: "Services",
    navBook: "Book Now",
    navContact: "Contact",
    aiMatcherBadge: "AI Job Matcher Active",
    demoBadge: "Demo by",
    heroEyebrow: "Professional Cleaning You Can Trust",
    heroTitle: "Eco-friendly & pet-safe cleaning, the Cape Town Northern Suburbs way.",
    heroSuburbLine: "Durbanville · Bellville · Tygervalley & Parow",
    heroLead:
      "Reliable, affordable and family-friendly cleaning crews — trusted by Northern Suburbs families and businesses since 2021.",
    heroCtaBook: "Book in 60 seconds",
    heroCtaCall: "Call 081 037 2833",
    trust1: "Experienced & professional since 2021",
    trust2: "Eco-friendly, family- & pet-safe products",
    trust3: "Flexible bookings to fit your schedule",
    trust4: "Affordable, upfront pricing",
    trust5: "100% satisfaction guaranteed",
    servicesTitle: "Our Cleaning Solutions",
    servicesLead:
      "At Domestic Pro Service, we believe every customer deserves more than just a “cleaning.” You deserve peace of mind, reliability, and care that lasts even after we leave.",
    serviceResidentialName: "Residential Cleaning",
    serviceResidentialDesc: "Regular or once-off cleaning to keep your home fresh, tidy, and healthy.",
    serviceCommercialName: "Commercial Cleaning",
    serviceCommercialDesc: "Daily, weekly, or monthly cleaning for offices, shops, and commercial spaces.",
    serviceDeepName: "Deep Cleaning",
    serviceDeepDesc: "A thorough, top-to-bottom clean for your home or business. Perfect for seasonal refreshes or special occasions.",
    serviceMoveName: "Move-In / Move-Out Cleaning",
    serviceMoveDesc: "Perfect for landlords, tenants, and homeowners — we leave your space spotless and ready.",
    startingFrom: "Starting from",
    viewMore: "View More",
    whyTitle: "Why Choose Domestic Pro Service?",
    whyLead:
      "We know that inviting someone into your home or workplace takes trust. That’s why our customers choose us again and again.",
    why1: "Experienced & professional since 2021",
    why2: "Eco-friendly, family- & pet-safe products",
    why3: "Flexible bookings to fit your schedule",
    why4: "Affordable, upfront pricing",
    why5: "100% satisfaction guaranteed",
    areasTitle: "Areas We Service",
    areasLead:
      "At Domestic Pro Service, we’re more than just a cleaning company — we’re part of the community. Since 2021, we’ve been proudly serving Durbanville, Bellville, Tygervalley, and Parow, helping families and businesses enjoy cleaner, healthier spaces.",
    areaDurbanvilleDesc:
      "Known for its family-friendly neighbourhoods, schools, and beautiful wine route, Durbanville is where comfort and lifestyle meet.",
    areaBellvilleDesc:
      "As a busy business and residential hub, Bellville is full of offices, apartments, and growing enterprises.",
    areaTygervalleyDesc:
      "With its bustling shopping centres and modern office spaces, Tygervalley is the heartbeat of business and retail in the northern suburbs.",
    areaParowDesc:
      "Parow offers a blend of established homes and growing businesses — from residential deep cleans to professional office cleaning.",
    demoEyebrow: "Live Demo",
    demoTitle: "AI Job Matcher — instant lead → dispatch walkthrough",
    demoLead:
      "See exactly how a Durbanville job request lands with Domestic Pro Service, gets tagged for eco & pet-safe supply, estimated, and routed to our ops team — in seconds.",
    demoThreeCol: "3-column / dual-panel",
    demoLiveAuto: "Live automation",
    demoNoLogin: "No login required",
    intakePanelTitle: "Customer Intake",
    intakePanelLead: "Public booking widget — captured directly into the Domestic Pro pipeline.",
    scenarioLabel: "Example scenario",
    scenarioDurbanville: "Durbanville Deep Clean",
    scenarioDurbanvilleDesc: "Deep clean + eco pet treatment for 2 dogs.",
    scenarioTygervalley: "Tygervalley Office Clean",
    scenarioTygervalleyDesc: "After-hours, eco-friendly office sanitising.",
    fieldName: "Customer name",
    fieldPhone: "Phone",
    fieldSuburb: "Location / Suburb",
    fieldSuburbHint: "Domestic Pro covers Cape Town Northern Suburbs only.",
    fieldArea: "Area / Estate",
    fieldService: "Service requested",
    fieldProperty: "Property size",
    fieldDay: "Preferred day",
    fieldTime: "Preferred time",
    fieldNotes: "Customer notes",
    petSafe: "Pet-Safe required",
    ecoFriendly: "Eco-friendly products",
    submitJob: "Submit Job Request",
    processing: "Processing…",
    resetForm: "Reset form",
    pipelineRunning: "AI matcher running — see live pipeline →",
    pipelineTitle: "AI Processing Pipeline",
    pipelineLead: "Live automation workflow — runs as soon as a job request is submitted.",
    pipelineIdle: "Pipeline idle",
    pipelineIdleHint:
      "Submit a job request from the intake form to watch the AI matcher run end-to-end.",
    liveConsole: "Live console",
    stage1Title: "Geo-Fencing & Service Area Match",
    stage1Sub: "Validates location is within Durbanville coverage.",
    stage2Title: "Special Requirement Tagging",
    stage2Sub: 'Flags "Pet-Safe / Eco-Friendly" supply assignment.',
    stage3Title: "Job Estimator & Lead Scoring",
    stage3Sub: "Calculates estimated hours, team size, and lead priority.",
    stage4Title: "Dispatcher Routing",
    stage4Sub: "Prepares dispatch card for Domestic Pro operations team.",
    adminTitle: "Ops Dashboard",
    adminLead: "Operations view — instant lead, dispatch & referral actions.",
    noLeadYet: "No incoming lead yet",
    noLeadHint:
      "Once the AI matcher finishes, the instant lead card will appear here with one-click dispatch actions.",
    instantLead: "Instant Lead",
    client: "Client",
    suburb: "Suburb",
    property: "Property",
    preferred: "Preferred",
    estRevenue: "Est. revenue",
    duration: "Duration",
    teamSize: "Team size",
    ecoSafetyFlag: "Eco-Safety Flag",
    equipmentChecklist: "Equipment checklist",
    ecoSupply: "Eco supply",
    petSafeSupply: "Pet-safe supply",
    oneClickDispatch: "One-click dispatch",
    acceptLockQueue: "Accept & lock into ops queue",
    leadAccepted: "Lead accepted",
    lockCalendarSlot: "Accept & Lock Calendar Slot",
    calendarLocked: "Calendar slot locked",
    sendSms: "Send Automated SMS / WhatsApp Confirmation",
    smsSent: "Confirmation sent to client",
    viewReferral: "View Area Referral Booster Insights",
    referralModalTitle: "Area Referral Booster Insights",
    referralModalDesc: "How this lead ripples across the Domestic Pro Northern Suburbs corridor.",
    referralScore: "Cross-referral score: 78 / 100",
    referralScoreDesc: "Neighbouring suburbs show 22% cross-referral overlap with adjacent corridors.",
    adjacentSuburbs: "Adjacent suburbs",
    recurringPotential: "Recurring potential",
    offSeasonUplift: "Off-season uplift",
    referralRecommendation:
      "Offer a 3-suburb bundle discount (Durbanville + Bellville + Tygervalley) to lift off-season calendar fill rate by an estimated 35%.",
    gotIt: "Got it",
    fullyDispatched:
      "✓ Lead fully dispatched & client confirmed. Job is now on the Domestic Pro live calendar.",
    roiTitle: "ROI & Referral Engine",
    roiLead: "Live business impact — BusinessHustle automation for Domestic Pro.",
    roiRealtime: "Realtime",
    roiOffSeasonLabel: "Off-season calendar fill",
    roiOffSeasonDesc:
      "Estimated monthly uplift from automated intake vs. word-of-mouth referrals.",
    roiAdjacentLabel: "Adjacent corridor leads",
    roiAdjacentDesc: "Cross-referral overlap between Durbanville / Bellville / Tygervalley / Parow.",
    roiRecurringLabel: "Recurring weekly rate",
    roiRecurringDesc: "Likelihood of converting a one-off deep clean into a recurring weekly slot.",
    roiHeadline: "Estimated monthly off-season calendar fill rate:",
    statsTitle: "Numbers speak for themselves",
    statsReviews: "Reviews received",
    statsClients: "Clients satisfied",
    statsJobs: "Jobs created",
    statsYears: "Years established",
    reviewsTitle: "Our Happy Clients",
    reviewsLead: "Real reviews from Domestic Pro Service customers across the Northern Suburbs.",
    reviewsRating: "5.0",
    reviewsOutOf: "out of 5 stars",
    reviewsVerifiedBy: "Verified by Google",
    reviewGoogleCta: "Read all reviews on Google",
    howTitle: "How it works",
    how1Title: "Customer submits intake",
    how1Body: "A pre-populated Durbanville or Tygervalley scenario — captured directly into the Domestic Pro pipeline.",
    how2Title: "AI matcher runs 4 stages",
    how2Body: "Geo-fencing → eco/pet tagging → estimator & lead scoring → dispatch card, all animated live.",
    how3Title: "Ops team one-click dispatches",
    how3Body: "Accept the lead, lock a calendar slot, send SMS/WhatsApp, and review referral booster insights.",
    footerTrustEco: "Eco-friendly products",
    footerTrustPet: "Pet-safe treatments",
    footerTrustCoverage: "Durbanville · Bellville · Tygervalley · Parow",
    footerCompany: "Domestic Pro Service (Pty) Ltd",
    footerBrandDesc:
      "High-end, eco-conscious cleaning crews covering Cape Town’s Northern Suburbs. Family-owned, referral-driven — now AI-matched by BusinessHustle.",
    footerCoverage: "Coverage",
    footerContact: "Contact",
    footerBusinessHours: "Business hours",
    footerBusinessHoursValue: "8:00 AM – 5:00 PM, 5 days a week",
    footerQuickLinks: "Quick links",
    footerBuiltBy: "Demo built by",
    footerBuiltByDesc: "Local AI automation · businesshustle.co.za",
    footerRights: "© 2026 Domestic Pro Service (Pty) Ltd · Managing Director: Elmar Stoffels",
    footerFiona: "Demo built by BusinessHustle · Fiona Burke",
    whatsapp: "WhatsApp us",
    durbanvilleCorridor: "Durbanville Corridor",

    // Shop section (EN)
    shopEyebrow: "Shop DPS — Domestic Pro Supplies",
    shopTitle: "Eco-friendly cleaning products, bottled with care.",
    shopLead:
      "Bring the Domestic Pro standard home. Our pet-safe, eco-friendly cleaners are formulated for Cape Town homes — buy online or add them to your next clean.",
    shopCta: "Browse the shop",
    shopBrowseAll: "Browse all products",
    shopAddToBasket: "Add to basket",
    shopOnSale: "Sale",
    shopComboBadge: "Best value",
    shopFeaturedTitle: "Featured — DPS Cleaning Combo",
    shopFeaturedLead:
      "A full starter pack: multi-purpose, dish, floor, and fabric cleaners in one bundle. Rated 5.00 by Cape Town customers — save R50.99 today.",
    shopFreeDelivery: "Free local delivery in Durbanville · Bellville · Tygervalley · Parow on orders over R250",
    shopZAAware: "Formulated & bottled in South Africa",
    shopEcoTag: "Eco-friendly",
    shopPetTag: "Pet-safe",
    shopFamilyTag: "Family-safe",
    shopComboTag: "Bundle & save",
    shopCart: "Your cart",
    shopCartTotal: "Order total",
    shopCartCheckout: "Checkout",
    shopCartEmpty: "Your cart is empty",
    shopContinueShopping: "Continue shopping",
    shopTotalItems: "Items in cart",
    shopItems: "items",
    shopRemove: "Remove",
    shopAddedToCart: "Added to cart",
    shopRemovedFromCart: "Removed from cart",
    shopShowOnly: "Showing",
    catAll: "All products",
    catCombo: "Combo bundles",
    catMulti: "Multi-purpose",
    catKitchen: "Kitchen",
    catFloor: "Floor & tile",
    catFabric: "Fabric & linen",
    catAir: "Air freshener",
    catSneaker: "Sneaker cleaner",
    prodAirTag: "Long-lasting cherry scent for any room.",
    prodSneakerTag: "Gentle on sneakers, tough on dirt.",
    prodDishTag: "Cuts grease, gentle on hands.",
    prodComboTag: "4 cleaners, 1 bundle, R50 saving.",
    prodFloorTag: "Streak-free shine on tile & laminate.",
    prodHandyTag: "All-purpose lemon cleaner, every surface.",
    prodFabricTag: "Refreshes linen between washes.",
    prodMultiCitrusTag: "Citrus-burst degreaser, kitchen to bath.",
    prodMultiGreenTag: "Pet-safe, plant-based all-rounder.",
    reviewsAvRating: "5.0",
    reviewsAvRatingDesc: "average rating across all DPS products",
    navShop: "Shop DPS",
  },

  af: {
    coverage: "Durbanville · Bellville · Tygervalley · Parow",
    since: "Sedert 2021",
    callNow: "081 037 2833",
    navHome: "Tuis",
    navAbout: "Oor ons",
    navServices: "Dienste",
    navBook: "Besnou",
    navContact: "Kontak",
    aiMatcherBadge: "AI Werk-Passer Aktief",
    demoBadge: "Demo deur",
    heroEyebrow: "Professionele Skoonmaak Wat Jy Kan Vertrou",
    heroTitle: "Eko-vriendelike & troeteldier-veilige skoonmaak, die Kaapstad Noordelike Voorstede manier.",
    heroSuburbLine: "Durbanville · Bellville · Tygervalley & Parow",
    heroLead:
      "Betroubare, bekostigbare en gesins-vriendelike skoonmaakspanne — vertrou deur Noordelike Voorstede gesinne en besighede sedert 2021.",
    heroCtaBook: "Besnou in 60 sekondes",
    heroCtaCall: "Bel 081 037 2833",
    trust1: "Ervare & professionele sedert 2021",
    trust2: "Eko-vriendelike, gesins- & troeteldier-veilige produkte",
    trust3: "Buigsaam vir jou skedule",
    trust4: "Bekostigbare, voorafpryse",
    trust5: "100% tevredenheid gewaarborg",
    servicesTitle: "Ons Skoonmaak Oplossings",
    servicesLead:
      "By Domestic Pro Service glo ons elke kliënt verdien meer as net 'n “skoonmaak.” Jy verdien gemoedsrus, betroubaarheid en sorg wat hou lank nadat ons vertrek het.",
    serviceResidentialName: "Huishoudelike Skoonmaak",
    serviceResidentialDesc: "Gereelde of eenmalige skoonmaak om jou huis vars, netjies en gesond te hou.",
    serviceCommercialName: "Kommersiële Skoonmaak",
    serviceCommercialDesc: "Daaglikse, weeklikse of maandelikse skoonmaak vir kantore, winkels en kommersiële ruimtes.",
    serviceDeepName: "Diep Skoonmaak",
    serviceDeepDesc: "'n Deeglike, bo-na-onder skoonmaak vir jou huis of besigheid. Perfek vir seisoenverversings.",
    serviceMoveName: "In-Trek / Uit-Trek Skoonmaak",
    serviceMoveDesc: "Perfek vir eienaars, huurders en huiseienaars — ons laat jou ruimte skoon en gereed.",
    startingFrom: "Begin vanaf",
    viewMore: "Sien meer",
    whyTitle: "Waarom Kies Kliënte Domestic Pro Service?",
    whyLead:
      "Ons weet om iemand in jou huis of werkplek in te nooi vereis vertroue. Daarom kies ons kliënte ons oor en oor.",
    why1: "Ervare & professionele sedert 2021",
    why2: "Eko-vriendelike, gesins- & troeteldier-veilige produkte",
    why3: "Buigsaam vir jou skedule",
    why4: "Bekostigbare, voorafpryse",
    why5: "100% tevredenheid gewaarborg",
    areasTitle: "Gebiede Wat Ons Bedien",
    areasLead:
      "By Domestic Pro Service is ons meer as net 'n skoonmaakmaatskappy — ons is deel van die gemeenskap. Sedert 2021 bedien ons trots Durbanville, Bellville, Tygervalley en Parow.",
    areaDurbanvilleDesc:
      "Bekend vir sy gesinsvriendelike buurte, skole en pragtige wynroete — Durbanville is waar gerief en leefstyl ontmoet.",
    areaBellvilleDesc:
      "As 'n besige besigheids- en woonsentrum is Bellville vol kantore, woonstelle en groeiende ondernemings.",
    areaTygervalleyDesc:
      "Met sy besige winkelsentrums en moderne kantoorruimtes is Tygervalley die hartklop van besigheid in die noordelike voorstede.",
    areaParowDesc:
      "Parow bied 'n mengsel van gevestigde huise en groeiende besighede — van diep skoonmaak tot professionele kantoor skoonmaak.",
    demoEyebrow: "Lewende Demo",
    demoTitle: "AI Werk-Passer — onmiddellike lood → aflewering stap-vir-stap",
    demoLead:
      "Sien presies hoe 'n Durbanville werksversoek by Domestic Pro Service aankom, geëtiketteer word vir eko & troeteldier-veilige voorraad, beraam word en na ons operasiespan gestuur word.",
    demoThreeCol: "3-kolom / dubbel-paneel",
    demoLiveAuto: "Lewende outomasie",
    demoNoLogin: "Geen aantekening nodig",
    intakePanelTitle: "Kliënt Intake",
    intakePanelLead: "Openbare bespreingswidget — direk in die Domestic Pro pyplyn vasgevang.",
    scenarioLabel: "Voorbeeld scenario",
    scenarioDurbanville: "Durbanville Diep Skoonmaak",
    scenarioDurbanvilleDesc: "Diep skoonmaak + eko troeteldierbehandeling vir 2 honde.",
    scenarioTygervalley: "Tygervalley Kantoor Skoonmaak",
    scenarioTygervalleyDesc: "Buite-ure, eko-vriendelike kantoor sanitasie.",
    fieldName: "Kliënt naam",
    fieldPhone: "Telefoon",
    fieldSuburb: "Ligging / Voorstad",
    fieldSuburbHint: "Domestic Pro dek slegs Kaapstad Noordelike Voorstede.",
    fieldArea: "Area / Landgoed",
    fieldService: "Diens versoek",
    fieldProperty: "Eiendom grootte",
    fieldDay: "Voorkeur dag",
    fieldTime: "Voorkeur tyd",
    fieldNotes: "Kliënt notas",
    petSafe: "Troeteldier-veilig benodig",
    ecoFriendly: "Eko-vriendelike produkte",
    submitJob: "Dien Werkversoek In",
    processing: "Verwerk…",
    resetForm: "Herstel vorm",
    pipelineRunning: "AI passer loop — sien lewende pyplyn →",
    pipelineTitle: "AI Verwerkingspyplyn",
    pipelineLead: "Lewende outomatisering — loop sodra 'n werksversoek ingedien is.",
    pipelineIdle: "Pyplyn ledig",
    pipelineIdleHint:
      "Dien 'n werksversoek in om die AI passer van begin tot einde te sien loop.",
    liveConsole: "Lewende konsole",
    stage1Title: "Geo-Omheining & Diensarea Pas",
    stage1Sub: "Bevestig ligging is binne Durbanville dekking.",
    stage2Title: "Spesiale Vereiste Etikettering",
    stage2Sub: "Merk Troeteldier-Veilige / Eko-Vriendelike voorraad opdrag.",
    stage3Title: "Werksberamer & Loodtelling",
    stage3Sub: "Bereken geskatte ure, spangrootte en loodprioriteit.",
    stage4Title: "Afleweringsroetering",
    stage4Sub: "Berei afleweringskaart voor vir Domestic Pro operasiespan.",
    adminTitle: "Operasie-Dashboard",
    adminLead: "Operasie-oorsig — onmiddellike lood, aflewering & verwysingsaksies.",
    noLeadYet: "Geen inkomende lood nog",
    noLeadHint:
      "Sodra die AI passer klaar is, sal die onmiddellike loodkaart hier verskyn met een-klik aflewering.",
    instantLead: "Onmiddellike Lood",
    client: "Kliënt",
    suburb: "Voorstad",
    property: "Eiendom",
    preferred: "Voorkeur",
    estRevenue: "Geskatte inkomste",
    duration: "Duur",
    teamSize: "Span",
    ecoSafetyFlag: "Eko-Veiligheid Vlag",
    equipmentChecklist: "Toerusting kontrolllys",
    ecoSupply: "Eko voorraad",
    petSafeSupply: "Troeteldier-veilige voorraad",
    oneClickDispatch: "Een-klik aflewering",
    acceptLockQueue: "Aanvaar & sluit in operasie-tou",
    leadAccepted: "Lood aanvaar",
    lockCalendarSlot: "Aanvaar & Sluit Kalendergleuf",
    calendarLocked: "Kalendergleuf gesluit",
    sendSms: "Stuur Outomatiese SMS / WhatsApp Bevestiging",
    smsSent: "Bevestiging gestuur aan kliënt",
    viewReferral: "Bekyk Gebiedsverwysingsbooster-insigte",
    referralModalTitle: "Gebiedsverwysingsbooster-insigte",
    referralModalDesc: "Hoe hierdie lood rimpel oor die Domestic Pro Noordelike Voorstede korridor.",
    referralScore: "Kruisverwysings telling: 78 / 100",
    referralScoreDesc: "Aangrensende voorstede toon 22% kruisverwysing oorvleueling.",
    adjacentSuburbs: "Aangrensende voorstede",
    recurringPotential: "Herhalende potensiaal",
    offSeasonUplift: "Buite-seisoen verhoging",
    referralRecommendation:
      "Bied 'n 3-voorstad bundelafslag (Durbanville + Bellville + Tygervalley) om buite-seisoen kalendervul met 35% te lig.",
    gotIt: "Verstaan",
    fullyDispatched: "✓ Lood volledig afgelewer & kliënt bevestig. Werk is nou op die Domestic Pro kalender.",
    roiTitle: "ROI & Verwysingsenjin",
    roiLead: "Lewende besigheidsimpak — BusinessHustle outomatisering vir Domestic Pro.",
    roiRealtime: "Intyds",
    roiOffSeasonLabel: "Buite-seisoen kalendervul",
    roiOffSeasonDesc: "Geskatte maandelikse verhoging van outomatiese intake vs. mond-tot-mond.",
    roiAdjacentLabel: "Aangrensende korridor loode",
    roiAdjacentDesc: "Kruisverwysing oorvleueling tussen Durbanville / Bellville / Tygervalley / Parow.",
    roiRecurringLabel: "Herhalende weeklikse koers",
    roiRecurringDesc: "Waarskynlikheid om 'n eenmalige diep skoonmaak in 'n weeklikse gleuf te omskep.",
    roiHeadline: "Geskatte maandelikse buite-seisoen kalendervulkoers:",
    statsTitle: "Getalle spreek vir hulleself",
    statsReviews: "Resensies ontvang",
    statsClients: "Kliënte tevrede",
    statsJobs: "Werke geskep",
    statsYears: "Jare gevestig",
    reviewsTitle: "Ons Gelukkige Kliënte",
    reviewsLead: "Regte resensies van Domestic Pro Service kliënte oor die Noordelike Voorstede.",
    reviewsRating: "5.0",
    reviewsOutOf: "uit 5 sterre",
    reviewsVerifiedBy: "Geverifieer deur Google",
    reviewGoogleCta: "Lees alle resensies op Google",
    howTitle: "Hoe dit werk",
    how1Title: "Kliënt dien intake in",
    how1Body: "Vooraf-gevulde Durbanville of Tygervalley scenario — vasgevang in die Domestic Pro pyplyn.",
    how2Title: "AI passer loop 4 stadiums",
    how2Body: "Geo-omheining → eko/troeteldier etikettering → beramer → aflewering, alles geanimeer.",
    how3Title: "Operasiespan een-klik aflewering",
    how3Body: "Aanvaar die lood, sluit 'n kalendergleuf, stuur SMS/WhatsApp, hersien verwysingsinsigte.",
    footerTrustEco: "Eko-vriendelike produkte",
    footerTrustPet: "Troeteldier-veilige behandelings",
    footerTrustCoverage: "Durbanville · Bellville · Tygervalley · Parow",
    footerCompany: "Domestic Pro Service (Pty) Ltd",
    footerBrandDesc:
      "Eko-bewuste skoonmaakspanne oor Kaapstad se Noordelike Voorstede. Familie-eie, verwysingsgedrewe — nou AI-gepas deur BusinessHustle.",
    footerCoverage: "Dekking",
    footerContact: "Kontak",
    footerBusinessHours: "Besigheidsure",
    footerBusinessHoursValue: "8:00 VM – 5:00 NM, 5 dae per week",
    footerQuickLinks: "Vinnige skakels",
    footerBuiltBy: "Demo gebou deur",
    footerBuiltByDesc: "Plaaslike AI outomatisering · businesshustle.co.za",
    footerRights: "© 2026 Domestic Pro Service (Pty) Ltd · Besturende Direkteur: Elmar Stoffels",
    footerFiona: "Demo gebou deur BusinessHustle · Fiona Burke",
    whatsapp: "WhatsApp ons",
    durbanvilleCorridor: "Durbanville Korridor",

    // Shop section (AF)
    shopEyebrow: "Shop DPS — Domestic Pro Voorraad",
    shopTitle: "Eko-vriendelike skoonmaakprodukte, met sorg gebottel.",
    shopLead:
      "Bring die Domestic Pro standaard huis toe. Ons troeteldier-veilige, eko-vriendelike skoonmakers is gemeng vir Kaapstadse huise — koop aanlyn of voeg by jou volgende skoonmaak.",
    shopCta: "Blaai deur die winkel",
    shopBrowseAll: "Blaai deur alle produkte",
    shopAddToBasket: "Voeg by mandjie",
    shopOnSale: "Aanbieding",
    shopComboBadge: "Beste waarde",
    shopFeaturedTitle: "Beklemtoon — DPS Skoonmaak Kombopak",
    shopFeaturedLead:
      "'n Volle beginnerpak: multi-doel, skottelgoed, vloer, en stofskoonmakers in een bundel. Gewaardeer 5.00 deur Kaapstadse kliënte — bespaar R50.99 vandag.",
    shopFreeDelivery: "Gratis plaaslike aflewering in Durbanville · Bellville · Tygervalley · Parow op bestellings bo R250",
    shopZAAware: "Gemeng & gebottel in Suid-Afrika",
    shopEcoTag: "Eko-vriendelik",
    shopPetTag: "Troeteldier-veilig",
    shopFamilyTag: "Gesins-veilig",
    shopComboTag: "Bundel & bespaar",
    shopCart: "Jou mandjie",
    shopCartTotal: "Bestelling totaal",
    shopCartCheckout: "Kassaad",
    shopCartEmpty: "Jou mandjie is leeg",
    shopContinueShopping: "Gaan voort met winkel",
    shopTotalItems: "Items in mandjie",
    shopItems: "items",
    shopRemove: "Verwyder",
    shopAddedToCart: "By mandjie gevoeg",
    shopRemovedFromCart: "Uit mandjie verwyder",
    shopShowOnly: "Wys",
    catAll: "Alle produkte",
    catCombo: "Kombopakke",
    catMulti: "Multi-doel",
    catKitchen: "Kombuis",
    catFloor: "Vloer & teël",
    catFabric: "Stof & linne",
    catAir: "Lugverfrisser",
    catSneaker: "Skoonmaker vir skoene",
    prodAirTag: "Langdurige kersiegeur vir enige kamer.",
    prodSneakerTag: "Sag op skoene, hard op vuil.",
    prodDishTag: "Sny vet, sag op hande.",
    prodComboTag: "4 skoonmakers, 1 bundel, R50 besparing.",
    prodFloorTag: "Vleklose glans op teël & laminaat.",
    prodHandyTag: "All-doel sitroenskoonmaker, elke oppervlak.",
    prodFabricTag: "Verfris linne tussen wasse.",
    prodMultiCitrusTag: "Sitrus ontveter, kombuis tot bad.",
    prodMultiGreenTag: "Troeteldier-veilig, plant-gebaseerde all-rounder.",
    reviewsAvRating: "5.0",
    reviewsAvRatingDesc: "gemiddelde gradering oor alle DPS produkte",
    navShop: "Shop DPS",
  },

  xh: {
    coverage: "Durbanville · Bellville · Tygervalley · Parow",
    since: "Kusuka ngo-2021",
    callNow: "081 037 2833",
    navHome: "Ikhaya",
    navAbout: "Malunga",
    navServices: "Iinkonzo",
    navBook: "Bhukisha ngoku",
    navContact: "Thintana",
    aiMatcherBadge: "I-AI Sebenza I-Matcher Iyasebenza",
    demoBadge: "Idemo ngo",
    heroEyebrow: "UkuCoca Ngokwabantu Abakhuselekileyo Ukusuka ngo-2021",
    heroTitle: "Ukucoca ngendlela ehlonipha imvelo neempahla zomntu, indlela yaseKapa iNyakatho.",
    heroSuburbLine: "Durbanville · Bellville · Tygervalley noParow",
    heroLead:
      "Abacoca abathembekileyo, abangenamalinge amakhulu, abathandwa ziiapolisi zasentsazana nezoshishino kwiiNyakatho ukusukela ngo-2021.",
    heroCtaBook: "Bhukisha kwi-60 yemizuzwana",
    heroCtaCall: "Yinxibelela 081 037 2833",
    trust1: "Abakhulelweyo nabanoyilo ukusukela ngo-2021",
    trust2: "Iimveliso ezingahlali zingcolisi imvelo, zikhusele imihla nepets",
    trust3: "Izicwangciso eziguquguqukayo ezikumgxeba wakho",
    trust4: "Ixabiso elibekwe phambili, elifikelelekayo",
    trust5: "Iqinisekiso lokwaneliseka ngama-100%",
    servicesTitle: "Iindlela Zethu ZokuCoca",
    servicesLead:
      "Kwi-Domestic Pro Service, sikholelwa ukuba umthengi ngamnye ufanelwe kukuba anxibe ngaphezu kokucoca. Ufanelwe ukuzola, ukuthembeka, nenkathalo ehlala nayo.",
    serviceResidentialName: "UkuCoca Ikhaya",
    serviceResidentialDesc: "Ukucoca ngokuthe ngokanye okanye inye ukugcina ikhaya lifudumele, licoce njalo, lise empilweni.",
    serviceCommercialName: "UkuCoca Ikhaya leMisebenzi",
    serviceCommercialDesc: "Ukucoca yonke imihla, yonke iveki, okanye yonke inyanga iiofisi, iivenkile, nendawo yoshishino.",
    serviceDeepName: "UkuCoca Ngokujulileyo",
    serviceDeepDesc: "Ukucoca okupheleleyo ukusuela phezulu kuye phantsi ikhaya okanye indawo yoshishino. Kulungile ekuvuselelweni kwexesha.",
    serviceMoveName: "UkuCoca Nokungena / Nokuphuma",
    serviceMoveDesc: "Kulungile kubanikazi, abahlali, naboze bakhupha indawo iyolungele nayo icociwe.",
    startingFrom: "Iqala ukusuka",
    viewMore: "Bona ngakumbi",
    whyTitle: "Kutheni Khetha i-Domestic Pro Service?",
    whyLead:
      "Siyazi ukuba ukumema umntu enyangweni yakho okanye kwindawo yakho yomsebenzi kufuna ukuthembeka. Yiloo nto abathengi bethu basibetha ngayo kwaakhedn ngokwakhedn.",
    why1: "Abakhulelweyo nabanoyilo ukusukela ngo-2021",
    why2: "Iimveliso ezingahlali zingcolisi imvelo, zikhusele imihla nepets",
    why3: "Izicwangciso eziguquguqukayo ezikumgxeba wakho",
    why4: "Ixabiso elibekwe phambili, elifikelelekayo",
    why5: "Iqinisekiso lokwaneliseka ngama-100%",
    areasTitle: "Iindawo EziSiconge",
    areasLead:
      "Kwi-Domestic Pro Service, singaphezu kwenkampani yokucoca — singamalunga oluntu. Ukusukela ngo-2021, sikhonze iDurbanville, iBellville, iTygervalley, neParow ngentlonipho.",
    areaDurbanvilleDesc:
      "Ibiyelwe ngeentshaba zoluntu, iisekol, nendela eyofole kwizimbongi iDurbanville ukulunga nokuphila.",
    areaBellvilleDesc:
      "Njengendawo ephatheka kangangaphezulu yoshishino nokuhlala, iBellville iyonke ngamiofisi, iifulathi, nentshishino ekhulayo.",
    areaTygervalleyDesc:
      "Enxizelelwe ziirothi namakhaya emisebenzi, iTygervalley yintliziyo yoshishino neerekhothi kwiiNyakatho.",
    areaParowDesc:
      "IParow yindawo egqityiweyo kwindlu ezikho khona kunye nentshishino ekhulayo — ukusuka kokucoca ngokujulileyo kwiiofisi ngokusemthethweni.",
    demoEyebrow: "Idemo eNkohlakalayo",
    demoTitle: "I-AI Sebenza I-Matcher — umthunywa ngamnye → isithuba ngasinye",
    demoLead:
      "Bona ukuba isicelo saseDurbanville singena njani kwi-Domestic Pro, sitsho imveliso ekhusele imvelo neepets, sibalewe, sishtsuthelwe kwiqela lethu ngokuthe ngqa.",
    demoThreeCol: "iikholam ezisi-3 / iindawo ezisi-2",
    demoLiveAuto: "Eyona ndlela iphila",
    demoNoLogin: "Akukho ngeno lweakhawunti",
    intakePanelTitle: "Inboundi yoMthengi",
    intakePanelLead: "I-widget yokubhukisha — idonswa kwindlela yokuqalisa kwinqwelo moya yeDomestic Pro.",
    scenarioLabel: "Isicelo sesimo",
    scenarioDurbanville: "UkuCoca okuJulileyo kwaDurbanville",
    scenarioDurbanvilleDesc: "Ukucoca okujulileyo + ukupathwa kwamahhashi e-eko (2).",
    scenarioTygervalley: "UkuCoca Iofisi kwaTygervalley",
    scenarioTygervalleyDesc: "Emva kweyure, ukucoca kofisi i-eko.",
    fieldName: "Igama lomthengi",
    fieldPhone: "Umnqamlezo",
    fieldSuburb: "Indawo / Isixeko",
    fieldSuburbHint: "Domestic Pro ekhuphela iKapa iNyakatho kuphela.",
    fieldArea: "Indawo / Isitaladi",
    fieldService: "Inkonzo efunwa",
    fieldProperty: "Ubukhulu bendlu",
    fieldDay: "Iyure yokuthanda",
    fieldTime: "Ixesha elithandwa",
    fieldNotes: "Amanqaku omthengi",
    petSafe: "I-Pet-safe iyafuneka",
    ecoFriendly: "Iimveliso ezingahlali zingcolisi imvelo",
    submitJob: "Thumela isicelo somsebenzi",
    processing: "Inkqubo iyaqhuba…",
    resetForm: "Sula ifom",
    pipelineRunning: "I-AI matcher iyasebenza — bona indlela iphila →",
    pipelineTitle: "Indlela yokuQhubelekayo ye-AI",
    pipelineLead: "Iyaphila ngenxa yemizuzwana xa sityhwunyiwe.",
    pipelineIdle: "Indlela ilale",
    pipelineIdleHint:
      "Thumela isicelo ukubona i-AI matcher isuka ngaphantsi ukuya phezulu.",
    liveConsole: "Konsol ephilayo",
    stage1Title: "Ukuvala indawo ngokomatshini",
    stage1Sub: "Iqinisekisa ukuba indawo ilapha kwiDurbanville.",
    stage2Title: "Ukuqamba izinto ezithintelwe",
    stage2Sub: "Iqamba i-Pet-Safe / Eko-Vriendelike imiliso.",
    stage3Title: "Ukuqikelela umsebenzi & ukubala ukuthandwa",
    stage3Sub: "Iqikelela iiyure, ubukhulu bethimba, nepriority.",
    stage4Title: "Indlela yokuthumela",
    stage4Sub: "Ilohola ikhadi lokuthumela kwigumbi lenkonzo.",
    adminTitle: "I-Dashboard yokuSebenzisa",
    adminLead: "Ukubona ukusingatha — umthunywa ngamnye, ukuthumela neenkcukacha.",
    noLeadYet: "Akukho mthunywa kafikileyo",
    noLeadHint:
      "Xa i-AI matcher igqibile, ikhadi lomthunywa liza kuvela apha ngesinye isixhobo sokuthumela.",
    instantLead: "Umthunywa nangoku",
    client: "Umthengi",
    suburb: "Isixeko",
    property: "Indlu",
    preferred: "Okuthandwa",
    estRevenue: "Inzuzo eqikelelwayo",
    duration: "Ixesha",
    teamSize: "Iqela",
    ecoSafetyFlag: "I-eko Vikelo",
    equipmentChecklist: "Uluhlu lweqondo leqondo",
    ecoSupply: "Imiliso ye-Eko",
    petSafeSupply: "Imiliso yamahhashi",
    oneClickDispatch: "Isixhobo sokuqinisekisa ngokusindwa",
    acceptLockQueue: "Vuma & ufake kolwethu",
    leadAccepted: "Umthunywa uvumiwe",
    lockCalendarSlot: "Vuma & Vala iKhalenda",
    calendarLocked: "IKhalenda ivaliwe",
    sendSms: "Thumela i-SMS / WhatsApp ngokuzenzekelayo",
    smsSent: "Isiqinisekiso sithunyelwe kumthengi",
    viewReferral: "Bona iNgcombolo yoluntu lwendawo",
    referralModalTitle: "INgcombolo yoluntu lwendawo",
    referralModalDesc: "Indlela lo mthunywa usasaza ngayo kwikhorido yeDomestic Pro.",
    referralScore: "Imarike yokusasaza: 78 / 100",
    referralScoreDesc: "Isixeko esikufutshane sibonisa ukudibanisa kwe-22%.",
    adjacentSuburbs: "Isixeko esikufutshane",
    recurringPotential: "Isiphithiphithi sokuphinda",
    offSeasonUplift: "Inyuselo yesikhathi esibi",
    referralRecommendation:
      "Nika isaphulelo sama-3-isixeko (Durbanville + Bellville + Tygervalley) ukonyusa inyuselo nge-35%.",
    gotIt: "Andiva",
    fullyDispatched: "✓ Umthunywa uthunyelwe ngokupheleleyo umthengi evumiwe. Umsebenzi usekhalendeni.",
    roiTitle: "I-ROI & Injini yoluntu",
    roiLead: "Impembelelo yoshishino — iBusinessHustle yeDomestic Pro.",
    roiRealtime: "Ekuqhubekayo",
    roiOffSeasonLabel: "Ukuzalwa kwekhalenda kwangexesha",
    roiOffSeasonDesc: "Inyuselo yenyanga esixhoseni ngokungazangele.",
    roiAdjacentLabel: "Ithuba leLuntu ekufutshane",
    roiAdjacentDesc: "Ukusasaza phakathi kweDurbanville / Bellville / Tygervalley / Parow.",
    roiRecurringLabel: "Iyure ngaphakathi yamabase",
    roiRecurringDesc: "Amanqaku okugqiba ukucoca okulodwa abe ngamabase.",
    roiHeadline: "Ukuzalwa kwekhalenda kwangexesha ebi:",
    statsTitle: "Amanani athetha ngokwawo",
    statsReviews: "Umaxham ezivezayo",
    statsClients: "Abathengi anelisiweyo",
    statsJobs: "Iimisebenzi eyenzekileyo",
    statsYears: "Imihulu eyabalweyo",
    reviewsTitle: "Iikhasi ezivuyisayo zethu",
    reviewsLead: "Izimangaliso ezibuzwa kumthengi bakaDomestic Pro eNyakatho.",
    reviewsRating: "5.0",
    reviewsOutOf: "kwiiyenkcwceyezi-5",
    reviewsVerifiedBy: "Ziqinisekiswe yiGoogle",
    reviewGoogleCta: "Funda wonke amaxham kuGoogle",
    howTitle: "Indlela esebenza ngayo",
    how1Title: "Umthengi uthumela i-intake",
    how1Body: "Isicelo esinezantsi seDurbanville okanye iTygervalley — singeniswa kwinkqubo.",
    how2Title: "I-AI matcher iya kwizigaba ezi-4",
    how2Body: "Ukuvalela indawo → ukuchaza eko → ukulinganisa → ukuthumela — kubonakalisa ngokuzenzekela.",
    how3Title: "Iqela elinye ukuthumela",
    how3Body: "Vuma umthunywa, vala ikhalenda, thumela i-SMS, jonga iNgcombolo.",
    footerTrustEco: "Iimveliso ezingahlali zingcolisi imvelo",
    footerTrustPet: "Iindlela ezikhusele amahhashi",
    footerTrustCoverage: "Durbanville · Bellville · Tygervalley · Parow",
    footerCompany: "Domestic Pro Service (Pty) Ltd",
    footerBrandDesc:
      "Abacoca abakhuseleyo imvelo iKapa iNyakatho. Ipolisi eyeykhaya, ethengelwa ngomntu — ngoku i-AI yiBusinessHustle.",
    footerCoverage: "Ukhuseleko",
    footerContact: "Thintana",
    footerBusinessHours: "Iiyure zoshishino",
    footerBusinessHoursValue: "8:00 AM – 5:00 PM, 5 iyure ngeveki",
    footerQuickLinks: "Iinkcukacha ezikhawulezayo",
    footerBuiltBy: "Idemo yenziwe ngo",
    footerBuiltByDesc: "I-AI yasekhaya · businesshustle.co.za",
    footerRights: "© 2026 Domestic Pro Service (Pty) Ltd · Umlawuli: Elmar Stoffels",
    footerFiona: "Idemo yenziwe yiBusinessHustle · Fiona Burke",
    whatsapp: "Sincoca nge-WhatsApp",
    durbanvilleCorridor: "Ikorido yeDurbanville",

    // Shop section (XH)
    shopEyebrow: "Shop DPS — Iimpahla zikaDomestic Pro",
    shopTitle: "Iimveliso zokucoca ezingahlali zingcolisa imvelo, ezibotshiwe ngokukhathalela.",
    shopLead:
      "Rhweba isindingi seDomestic Pro endlini. Abacoci bethu abakhusele amahhashi, abangacolisi imvelo, benziwe kakhulu kwiiapolis zakwaKapa — rhweba online okanye ufake kwikocoya yakho elandelayo.",
    shopCta: "Khangela kwithanga",
    shopBrowseAll: "Khangela zonke iimveliso",
    shopAddToBasket: "Yongeza kwlangu",
    shopOnSale: "Ntengiso",
    shopComboBadge: "Ixabiso elihle kakhulu",
    shopFeaturedTitle: "Phawuli — DPS Ikhombo lokucoca",
    shopFeaturedLead:
      "Iqela eligqibeleleyo le-eco: ukucoca okuzonke, okwesitya, okwomhlaba, noludongolo elinye. Ligqitywe 5.00 yabathengi bakwaKapa — ugcine R50.99 namhlanje.",
    shopFreeDelivery: "Iyalela mahala kwindawo eDurbanville · Bellville · Tygervalley · Parow kwirekhodi ngaphezulu koR250",
    shopZAAware: "Iqaliwe nabotshiwe eMzantsi Afrika",
    shopEcoTag: "Ehlonipha imvelo",
    shopPetTag: "Ikhusele amahhashi",
    shopFamilyTag: "Ikhusele intsapho",
    shopComboTag: "Qhatha ugcine",
    shopCart: "Ilangu yakho",
    shopCartTotal: "Isixa sesaziso",
    shopCartCheckout: "Qinisekisa",
    shopCartEmpty: "Ilangu yakho izele",
    shopContinueShopping: "Qhubeka norhwabo",
    shopTotalItems: "Iinto kwilangu",
    shopItems: "iinto",
    shopRemove: "Susa",
    shopAddedToCart: "Kongezwe kwilangu",
    shopRemovedFromCart: "Kususiwe kwilangu",
    shopShowOnly: "Kubonisa",
    catAll: "Zonke iimveliso",
    catCombo: "Iikhombo zeqela",
    catMulti: "Yonke indlela",
    catKitchen: "Igumbi lokutya",
    catFloor: "Umntwana nethayile",
    catFabric: "Isixa noludongolo",
    catAir: "Abaqambi bomoya",
    catSneaker: "Ukucoca iinketho",
    prodAirTag: "Ifumbe elide le-cherry kwindawo nganye.",
    prodSneakerTag: "Sefula kwiinketho, inamandla kwindalo.",
    prodDishTag: "Icheba amafutha, khusele izandla.",
    prodComboTag: "4 abacoci, 1 iqela, R50 ukugcina.",
    prodFloorTag: "Ukukhanya ngaphandle kwezihlanu kwethayile nalaminet.",
    prodHandyTag: "Yonke-indlela isitruyi, yonke indawo.",
    prodFabricTag: "Hlaziya ilineni phakathi kwamaxhatho.",
    prodMultiCitrusTag: "Citrus ukukhaba amafutha, esitya kwebhafu.",
    prodMultiGreenTag: "Ikhusele amahhashi, yonke-indlela entyanweni.",
    reviewsAvRating: "5.0",
    reviewsAvRatingDesc: "ukugqibela okumiddlinga kuzo zonke iimveliso zeDPS",
    navShop: "Shop DPS",
  },
};
