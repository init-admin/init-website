/* ═══════════════════════════════════════════════════════════════
   Init — i18n
   11 languages matching the mobile app locale set.
   Detects browser language, falls back to English.
   Persists user choice in localStorage under 'lang'.
═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  const LANG_KEY = 'lang';

  const LANGUAGES = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'it', label: 'Italiano' },
    { code: 'es', label: 'Español' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'zh', label: '中文' },
    { code: 'bn', label: 'বাংলা' },
    { code: 'te', label: 'తెలుగు' },
    { code: 'mr', label: 'मराठी' },
    { code: 'ta', label: 'தமிழ்' },
    { code: 'kn', label: 'ಕನ್ನಡ' },
  ];

  /* ── Translations ─────────────────────────────────────────── */

  const T = {
    en: {
      nav_how: 'How it works',
      nav_for: 'Init is for',
      nav_download: 'Download',
      hero_eyebrow: 'Mutual interest matching',
      hero_title: 'Find out if it\'s<br><span class="accent">mutual</span>.',
      hero_sub: 'Private interest. Revealed only when it\'s mutual.',
      hero_cta_get: 'Get the app',
      hero_cta_how: 'How it works',
      how_eyebrow: 'How it works',
      how_title: 'Express what you feel.',
      how_body: 'Phone, email, username, or Instagram. Pick a category. Nothing shows until they feel it back.',
      how_link: 'See the categories',
      step1_label: '01 · Expressed',
      step1_title: 'Expressed. Now wait.',
      step1_body: 'They see the feeling. Not who. Not until it\'s mutual.',
      step2_label: '02 · Matched',
      step2_title: 'It\'s mutual. Take it forward.',
      step2_body: 'You both find out together. No asking first. Just a quiet yes — from both sides.',
      cat_eyebrow: 'Init is for',
      cat_title: 'Every feeling you haven\'t said yet.',
      cat_crush: 'Crush',
      cat_crush_story: 'A feeling you can\'t explain.',
      cat_hangout: 'Hangout',
      cat_hangout_story: 'An ask you keep putting off.',
      cat_love: 'Love',
      cat_love_story: 'Both feel it. Neither says it first.',
      cat_date: 'Date',
      cat_date_story: 'A question you keep rehearsing.',
      cat_marriage: 'Marriage',
      cat_marriage_story: 'A future you\'ve pictured with them.',
      cat_apology: 'Apology',
      cat_apology_story: 'Words left unsaid for too long.',
      dl_title: 'Download Init.',
      dl_body: 'iOS and Android. Beta access opening now.',
      footer_tagline: 'Mutual interest matching. Private until it\'s mutual.',
      footer_product: 'Product',
      footer_company: 'Company',
      footer_legal: 'Legal',
      footer_contact: 'Contact',
      footer_press: 'Press',
      footer_careers: 'Careers',
      footer_privacy: 'Privacy Policy',
      footer_terms: 'Terms of Service',
      footer_cookie: 'Cookie Policy',
      footer_rights: 'All rights reserved.',
    },

    fr: {
      nav_how: 'Comment ça marche',
      nav_for: 'Init c\'est pour',
      nav_download: 'Télécharger',
      hero_eyebrow: 'Correspondance d\'intérêt mutuel',
      hero_title: 'Découvrez si c\'est<br><span class="accent">réciproque</span>.',
      hero_sub: 'Intérêt privé. Révélé seulement quand c\'est réciproque.',
      hero_cta_get: 'Télécharger l\'app',
      hero_cta_how: 'Comment ça marche',
      how_eyebrow: 'Comment ça marche',
      how_title: 'Exprimez ce que vous ressentez.',
      how_body: 'Téléphone, email, nom d\'utilisateur ou Instagram. Choisissez une catégorie. Rien ne s\'affiche tant qu\'ils ne le ressentent pas en retour.',
      how_link: 'Voir les catégories',
      step1_label: '01 · Exprimé',
      step1_title: 'Exprimé. Maintenant attendez.',
      step1_body: 'Ils voient le sentiment. Pas qui. Pas jusqu\'à ce que ce soit réciproque.',
      step2_label: '02 · Correspondance',
      step2_title: 'C\'est réciproque. Allez de l\'avant.',
      step2_body: 'Vous découvrez ensemble. Sans demander en premier. Juste un oui silencieux — des deux côtés.',
      cat_eyebrow: 'Init c\'est pour',
      cat_title: 'Chaque sentiment que vous n\'avez pas encore dit.',
      cat_crush: 'Coup de cœur',
      cat_crush_story: 'Un sentiment que vous ne pouvez pas expliquer.',
      cat_hangout: 'Sortie',
      cat_hangout_story: 'Une question que vous n\'arrêtez pas de repousser.',
      cat_love: 'Amour',
      cat_love_story: 'Les deux le ressentent. Aucun ne le dit en premier.',
      cat_date: 'Rendez-vous',
      cat_date_story: 'Une question que vous répétez sans cesse.',
      cat_marriage: 'Mariage',
      cat_marriage_story: 'Un avenir que vous avez imaginé avec eux.',
      cat_apology: 'Excuses',
      cat_apology_story: 'Des mots non dits depuis trop longtemps.',
      dl_title: 'Télécharger Init.',
      dl_body: 'iOS et Android. L\'accès bêta s\'ouvre maintenant.',
      footer_tagline: 'Correspondance d\'intérêt mutuel. Privé jusqu\'à ce que ce soit réciproque.',
      footer_product: 'Produit',
      footer_company: 'Entreprise',
      footer_legal: 'Légal',
      footer_contact: 'Contact',
      footer_press: 'Presse',
      footer_careers: 'Carrières',
      footer_privacy: 'Politique de Confidentialité',
      footer_terms: 'Conditions d\'Utilisation',
      footer_cookie: 'Politique de Cookies',
      footer_rights: 'Tous droits réservés.',
    },

    it: {
      nav_how: 'Come funziona',
      nav_for: 'Init è per',
      nav_download: 'Scarica',
      hero_eyebrow: 'Corrispondenza di interesse reciproco',
      hero_title: 'Scopri se è<br><span class="accent">reciproco</span>.',
      hero_sub: 'Interesse privato. Rivelato solo quando è reciproco.',
      hero_cta_get: 'Scarica l\'app',
      hero_cta_how: 'Come funziona',
      how_eyebrow: 'Come funziona',
      how_title: 'Esprimi quello che provi.',
      how_body: 'Telefono, email, username o Instagram. Scegli una categoria. Niente viene mostrato finché non lo ricambiano.',
      how_link: 'Vedi le categorie',
      step1_label: '01 · Espresso',
      step1_title: 'Espresso. Ora attendi.',
      step1_body: 'Vedono la sensazione. Non chi. Non fino a quando non è reciproco.',
      step2_label: '02 · Abbinato',
      step2_title: 'È reciproco. Vai avanti.',
      step2_body: 'Lo scoprite insieme. Nessuno chiede prima. Solo un silenzioso sì — da entrambe le parti.',
      cat_eyebrow: 'Init è per',
      cat_title: 'Ogni sentimento che non hai ancora detto.',
      cat_crush: 'Cotta',
      cat_crush_story: 'Un sentimento che non riesci a spiegare.',
      cat_hangout: 'Uscita',
      cat_hangout_story: 'Una domanda che continui a rimandare.',
      cat_love: 'Amore',
      cat_love_story: 'Entrambi lo sentono. Nessuno lo dice per primo.',
      cat_date: 'Appuntamento',
      cat_date_story: 'Una domanda che continui a ripetere.',
      cat_marriage: 'Matrimonio',
      cat_marriage_story: 'Un futuro che hai immaginato con loro.',
      cat_apology: 'Scuse',
      cat_apology_story: 'Parole non dette per troppo tempo.',
      dl_title: 'Scarica Init.',
      dl_body: 'iOS e Android. Accesso beta in apertura ora.',
      footer_tagline: 'Corrispondenza di interesse reciproco. Privato fino a quando non è reciproco.',
      footer_product: 'Prodotto',
      footer_company: 'Azienda',
      footer_legal: 'Legale',
      footer_contact: 'Contatto',
      footer_press: 'Stampa',
      footer_careers: 'Lavora con noi',
      footer_privacy: 'Informativa sulla Privacy',
      footer_terms: 'Termini di Servizio',
      footer_cookie: 'Cookie Policy',
      footer_rights: 'Tutti i diritti riservati.',
    },

    es: {
      nav_how: 'Cómo funciona',
      nav_for: 'Init es para',
      nav_download: 'Descargar',
      hero_eyebrow: 'Coincidencia de interés mutuo',
      hero_title: 'Descubre si es<br><span class="accent">mutuo</span>.',
      hero_sub: 'Interés privado. Revelado solo cuando es mutuo.',
      hero_cta_get: 'Descarga la app',
      hero_cta_how: 'Cómo funciona',
      how_eyebrow: 'Cómo funciona',
      how_title: 'Expresa lo que sientes.',
      how_body: 'Teléfono, email, nombre de usuario o Instagram. Elige una categoría. Nada se muestra hasta que ellos lo sientan también.',
      how_link: 'Ver las categorías',
      step1_label: '01 · Expresado',
      step1_title: 'Expresado. Ahora espera.',
      step1_body: 'Ellos ven el sentimiento. No quién. No hasta que sea mutuo.',
      step2_label: '02 · Coincidencia',
      step2_title: 'Es mutuo. Dalo un paso más.',
      step2_body: 'Ambos lo descubren juntos. Sin preguntar primero. Solo un tranquilo sí — de ambos lados.',
      cat_eyebrow: 'Init es para',
      cat_title: 'Cada sentimiento que aún no has dicho.',
      cat_crush: 'Crush',
      cat_crush_story: 'Un sentimiento que no puedes explicar.',
      cat_hangout: 'Salir',
      cat_hangout_story: 'Una pregunta que sigues postergando.',
      cat_love: 'Amor',
      cat_love_story: 'Ambos lo sienten. Ninguno lo dice primero.',
      cat_date: 'Cita',
      cat_date_story: 'Una pregunta que sigues ensayando.',
      cat_marriage: 'Matrimonio',
      cat_marriage_story: 'Un futuro que has imaginado con ellos.',
      cat_apology: 'Disculpa',
      cat_apology_story: 'Palabras no dichas por demasiado tiempo.',
      dl_title: 'Descarga Init.',
      dl_body: 'iOS y Android. Acceso beta abriendo ahora.',
      footer_tagline: 'Coincidencia de interés mutuo. Privado hasta que sea mutuo.',
      footer_product: 'Producto',
      footer_company: 'Empresa',
      footer_legal: 'Legal',
      footer_contact: 'Contacto',
      footer_press: 'Prensa',
      footer_careers: 'Empleos',
      footer_privacy: 'Política de Privacidad',
      footer_terms: 'Términos de Servicio',
      footer_cookie: 'Política de Cookies',
      footer_rights: 'Todos los derechos reservados.',
    },

    hi: {
      nav_how: 'यह कैसे काम करता है',
      nav_for: 'Init किसके लिए है',
      nav_download: 'डाउनलोड',
      hero_eyebrow: 'पारस्परिक रुचि मिलान',
      hero_title: 'जानें कि यह<br><span class="accent">पारस्परिक</span> है।',
      hero_sub: 'निजी रुचि। केवल पारस्परिक होने पर प्रकट होती है।',
      hero_cta_get: 'ऐप डाउनलोड करें',
      hero_cta_how: 'यह कैसे काम करता है',
      how_eyebrow: 'यह कैसे काम करता है',
      how_title: 'अपनी भावना व्यक्त करें।',
      how_body: 'फोन, ईमेल, यूजरनेम या Instagram. एक श्रेणी चुनें। जब तक वे भी ऐसा महसूस न करें, कुछ भी नहीं दिखता।',
      how_link: 'श्रेणियां देखें',
      step1_label: '०१ · व्यक्त',
      step1_title: 'व्यक्त किया। अब प्रतीक्षा करें।',
      step1_body: 'वे भावना देखते हैं। कौन, यह नहीं। पारस्परिक होने तक नहीं।',
      step2_label: '०२ · मिलान',
      step2_title: 'यह पारस्परिक है। आगे बढ़ें।',
      step2_body: 'आप दोनों एक साथ जानते हैं। पहले पूछने की जरूरत नहीं। दोनों तरफ से एक शांत हाँ — बस।',
      cat_eyebrow: 'Init किसके लिए है',
      cat_title: 'हर वह भावना जो आपने अभी तक नहीं कही।',
      cat_crush: 'क्रश',
      cat_crush_story: 'एक एहसास जो आप समझा नहीं सकते।',
      cat_hangout: 'मिलना',
      cat_hangout_story: 'एक सवाल जो आप टालते रहे।',
      cat_love: 'प्यार',
      cat_love_story: 'दोनों महसूस करते हैं। पर कोई पहले नहीं बोलता।',
      cat_date: 'डेट',
      cat_date_story: 'एक सवाल जो आप मन में रिहर्सल करते रहते हैं।',
      cat_marriage: 'विवाह',
      cat_marriage_story: 'एक भविष्य जो आपने उनके साथ सोचा है।',
      cat_apology: 'माफी',
      cat_apology_story: 'बहुत लंबे समय से न कहे गए शब्द।',
      dl_title: 'Init डाउनलोड करें।',
      dl_body: 'iOS और Android। बीटा एक्सेस अभी शुरू हो रहा है।',
      footer_tagline: 'पारस्परिक रुचि मिलान। पारस्परिक होने तक निजी।',
      footer_product: 'उत्पाद',
      footer_company: 'कंपनी',
      footer_legal: 'कानूनी',
      footer_contact: 'संपर्क',
      footer_press: 'प्रेस',
      footer_careers: 'करियर',
      footer_privacy: 'गोपनीयता नीति',
      footer_terms: 'सेवा की शर्तें',
      footer_cookie: 'कुकी नीति',
      footer_rights: 'सर्वाधिकार सुरक्षित।',
    },

    zh: {
      nav_how: '如何运作',
      nav_for: 'Init 适用于',
      nav_download: '下载',
      hero_eyebrow: '双向兴趣匹配',
      hero_title: '发现是否<br><span class="accent">双向</span>。',
      hero_sub: '私密兴趣。仅在双向时揭示。',
      hero_cta_get: '下载应用',
      hero_cta_how: '如何运作',
      how_eyebrow: '如何运作',
      how_title: '表达你的感受。',
      how_body: '电话、邮箱、用户名或 Instagram。选择一个类别。直到对方也有同感才会显示。',
      how_link: '查看类别',
      step1_label: '01 · 已表达',
      step1_title: '已表达。现在等待。',
      step1_body: '他们看到了感受。不知道是谁。直到双向才会知道。',
      step2_label: '02 · 匹配',
      step2_title: '是双向的。向前迈进。',
      step2_body: '你们一起发现。不需要先问。只是一个安静的是——来自双方。',
      cat_eyebrow: 'Init 适用于',
      cat_title: '每一个你还没说出口的感受。',
      cat_crush: '暗恋',
      cat_crush_story: '一种你无法解释的感受。',
      cat_hangout: '约出去',
      cat_hangout_story: '一个你一直推迟的邀约。',
      cat_love: '爱情',
      cat_love_story: '双方都有感觉。谁也不先说。',
      cat_date: '约会',
      cat_date_story: '一个你一直在心里排练的问题。',
      cat_marriage: '婚姻',
      cat_marriage_story: '一个你想象过与他们共度的未来。',
      cat_apology: '道歉',
      cat_apology_story: '太久没有说出口的话。',
      dl_title: '下载 Init。',
      dl_body: 'iOS 和 Android。Beta 访问现在开放。',
      footer_tagline: '双向兴趣匹配。私密，直到双向为止。',
      footer_product: '产品',
      footer_company: '公司',
      footer_legal: '法律',
      footer_contact: '联系',
      footer_press: '媒体',
      footer_careers: '招聘',
      footer_privacy: '隐私政策',
      footer_terms: '服务条款',
      footer_cookie: 'Cookie 政策',
      footer_rights: '版权所有。',
    },

    bn: {
      nav_how: 'কীভাবে কাজ করে',
      nav_for: 'Init কার জন্য',
      nav_download: 'ডাউনলোড',
      hero_eyebrow: 'পারস্পরিক আগ্রহ মিলানো',
      hero_title: 'জানুন এটা<br><span class="accent">পারস্পরিক</span> কিনা।',
      hero_sub: 'ব্যক্তিগত আগ্রহ। শুধুমাত্র পারস্পরিক হলেই প্রকাশ পায়।',
      hero_cta_get: 'অ্যাপ নামান',
      hero_cta_how: 'কীভাবে কাজ করে',
      how_eyebrow: 'কীভাবে কাজ করে',
      how_title: 'আপনার অনুভূতি প্রকাশ করুন।',
      how_body: 'ফোন, ইমেইল, ইউজারনেম বা Instagram। একটি বিভাগ বেছে নিন। যতক্ষণ না তারাও একই অনুভব করে, কিছুই দেখায় না।',
      how_link: 'বিভাগগুলি দেখুন',
      step1_label: '০১ · প্রকাশিত',
      step1_title: 'প্রকাশিত। এখন অপেক্ষা করুন।',
      step1_body: 'তারা অনুভূতিটি দেখে। কে, তা নয়। পারস্পরিক না হওয়া পর্যন্ত নয়।',
      step2_label: '০২ · মিলানো',
      step2_title: 'এটা পারস্পরিক। এগিয়ে যান।',
      step2_body: 'আপনারা দুজনে একসাথে জানতে পারেন। আগে জিজ্ঞেস করতে হয় না। উভয় পক্ষ থেকে একটি নিরব হ্যাঁ — শুধু।',
      cat_eyebrow: 'Init কার জন্য',
      cat_title: 'প্রতিটি অনুভূতি যা আপনি এখনও বলেননি।',
      cat_crush: 'ক্রাশ',
      cat_crush_story: 'একটি অনুভূতি যা আপনি ব্যাখ্যা করতে পারেন না।',
      cat_hangout: 'আড্ডা',
      cat_hangout_story: 'একটি প্রশ্ন যা আপনি বারবার এড়িয়ে যাচ্ছেন।',
      cat_love: 'ভালোবাসা',
      cat_love_story: 'দুজনেই অনুভব করে। কেউই আগে বলে না।',
      cat_date: 'ডেট',
      cat_date_story: 'একটি প্রশ্ন যা আপনি বারবার মনে মনে বলছেন।',
      cat_marriage: 'বিবাহ',
      cat_marriage_story: 'একটি ভবিষ্যৎ যা আপনি তাদের সাথে কল্পনা করেছেন।',
      cat_apology: 'ক্ষমা',
      cat_apology_story: 'অনেক দিন ধরে না বলা কথা।',
      dl_title: 'Init নামান।',
      dl_body: 'iOS এবং Android। বেটা অ্যাক্সেস এখন শুরু হচ্ছে।',
      footer_tagline: 'পারস্পরিক আগ্রহ মিলানো। পারস্পরিক না হওয়া পর্যন্ত ব্যক্তিগত।',
      footer_product: 'পণ্য',
      footer_company: 'কোম্পানি',
      footer_legal: 'আইনি',
      footer_contact: 'যোগাযোগ',
      footer_press: 'প্রেস',
      footer_careers: 'ক্যারিয়ার',
      footer_privacy: 'গোপনীয়তা নীতি',
      footer_terms: 'পরিষেবার শর্তাবলী',
      footer_cookie: 'কুকি নীতি',
      footer_rights: 'সর্বস্বত্ব সংরক্ষিত।',
    },

    te: {
      nav_how: 'ఇది ఎలా పని చేస్తుంది',
      nav_for: 'Init కోసం',
      nav_download: 'డౌన్‌లోడ్',
      hero_eyebrow: 'పరస్పర ఆసక్తి జతపరచడం',
      hero_title: 'ఇది<br><span class="accent">పరస్పరం</span> అని తెలుసుకోండి.',
      hero_sub: 'వ్యక్తిగత ఆసక్తి. పరస్పరమైనప్పుడు మాత్రమే వెల్లడవుతుంది.',
      hero_cta_get: 'యాప్ డౌన్‌లోడ్ చేయండి',
      hero_cta_how: 'ఇది ఎలా పని చేస్తుంది',
      how_eyebrow: 'ఇది ఎలా పని చేస్తుంది',
      how_title: 'మీకు అనిపించేది వ్యక్తపరచండి.',
      how_body: 'ఫోన్, ఇమెయిల్, యూజర్నేమ్ లేదా Instagram. ఒక వర్గాన్ని ఎంచుకోండి. వారూ అలా భావించే వరకు ఏదీ కనిపించదు.',
      how_link: 'వర్గాలు చూడండి',
      step1_label: '01 · వ్యక్తపరచబడింది',
      step1_title: 'వ్యక్తపరచబడింది. ఇప్పుడు వేచి ఉండండి.',
      step1_body: 'వారు అనుభూతిని చూస్తారు. ఎవరు అని కాదు. పరస్పరమయ్యే వరకు కాదు.',
      step2_label: '02 · జతపరచబడింది',
      step2_title: 'ఇది పరస్పరమైనది. ముందుకు తీసుకెళ్ళండి.',
      step2_body: 'మీరిద్దరూ కలిసి తెలుసుకుంటారు. ముందు అడగవద్దు. రెండు వైపుల నుండి ఒక నిశ్శబ్ద అవును — మాత్రమే.',
      cat_eyebrow: 'Init కోసం',
      cat_title: 'మీరు ఇంకా చెప్పని ప్రతి అనుభూతి.',
      cat_crush: 'క్రష్',
      cat_crush_story: 'మీరు వివరించలేని ఒక అనుభూతి.',
      cat_hangout: 'కలవడం',
      cat_hangout_story: 'మీరు వాయిదా వేస్తూనే ఉన్న ఒక అభ్యర్థన.',
      cat_love: 'ప్రేమ',
      cat_love_story: 'ఇద్దరికీ అనిపిస్తుంది. ఎవరూ ముందు చెప్పరు.',
      cat_date: 'డేట్',
      cat_date_story: 'మీరు పదే పదే మనసులో రిహార్సల్ చేస్తున్న ప్రశ్న.',
      cat_marriage: 'వివాహం',
      cat_marriage_story: 'మీరు వారితో కలిసి ఊహించిన భవిష్యత్తు.',
      cat_apology: 'క్షమాపణ',
      cat_apology_story: 'చాలా కాలంగా చెప్పని మాటలు.',
      dl_title: 'Init డౌన్‌లోడ్ చేయండి.',
      dl_body: 'iOS మరియు Android. బీటా యాక్సెస్ ఇప్పుడు తెరుచుకుంటోంది.',
      footer_tagline: 'పరస్పర ఆసక్తి జతపరచడం. పరస్పరమయ్యే వరకు వ్యక్తిగతం.',
      footer_product: 'ఉత్పత్తి',
      footer_company: 'కంపెనీ',
      footer_legal: 'చట్టపరమైన',
      footer_contact: 'సంప్రదించండి',
      footer_press: 'పత్రికా',
      footer_careers: 'కెరీర్',
      footer_privacy: 'గోపనీయత విధానం',
      footer_terms: 'సేవా నిబంధనలు',
      footer_cookie: 'కుకీ విధానం',
      footer_rights: 'అన్ని హక్కులూ రిజర్వ్ చేయబడ్డాయి.',
    },

    mr: {
      nav_how: 'हे कसे काम करते',
      nav_for: 'Init साठी आहे',
      nav_download: 'डाउनलोड',
      hero_eyebrow: 'परस्पर रुची जुळवणे',
      hero_title: 'हे<br><span class="accent">परस्पर</span> आहे का ते जाणून घ्या.',
      hero_sub: 'खाजगी रुची. फक्त परस्पर असेल तेव्हाच उघड होते.',
      hero_cta_get: 'अॅप मिळवा',
      hero_cta_how: 'हे कसे काम करते',
      how_eyebrow: 'हे कसे काम करते',
      how_title: 'तुम्हाला काय वाटते ते सांगा.',
      how_body: 'फोन, ईमेल, यूजरनेम किंवा Instagram. एक वर्ग निवडा. जोपर्यंत ते देखील असेच अनुभवत नाहीत, तोपर्यंत काहीही दिसत नाही.',
      how_link: 'वर्ग पहा',
      step1_label: '०१ · व्यक्त',
      step1_title: 'व्यक्त केले. आता थांबा.',
      step1_body: 'ते भावना पाहतात. कोण ते नाही. परस्पर होईपर्यंत नाही.',
      step2_label: '०२ · जुळले',
      step2_title: 'हे परस्पर आहे. पुढे जा.',
      step2_body: 'तुम्ही दोघे एकत्र जाणून घेता. आधी विचारण्याची गरज नाही. दोन्ही बाजूंनी फक्त एक शांत होय.',
      cat_eyebrow: 'Init साठी आहे',
      cat_title: 'प्रत्येक भावना जी तुम्ही अद्याप बोललेली नाही.',
      cat_crush: 'क्रश',
      cat_crush_story: 'एक भावना जी तुम्ही समजावू शकत नाही.',
      cat_hangout: 'भेट',
      cat_hangout_story: 'एक विनंती जी तुम्ही सतत पुढे ढकलत आहात.',
      cat_love: 'प्रेम',
      cat_love_story: 'दोघांनाही वाटते. पण कोणी आधी सांगत नाही.',
      cat_date: 'डेट',
      cat_date_story: 'एक प्रश्न जो तुम्ही मनातच सतत तालीम देत आहात.',
      cat_marriage: 'विवाह',
      cat_marriage_story: 'एक भविष्य जे तुम्ही त्यांच्यासोबत कल्पिले आहे.',
      cat_apology: 'माफी',
      cat_apology_story: 'खूप काळापासून न बोललेले शब्द.',
      dl_title: 'Init डाउनलोड करा.',
      dl_body: 'iOS आणि Android. बीटा प्रवेश आता सुरू होत आहे.',
      footer_tagline: 'परस्पर रुची जुळवणे. परस्पर होईपर्यंत खाजगी.',
      footer_product: 'उत्पादन',
      footer_company: 'कंपनी',
      footer_legal: 'कायदेशीर',
      footer_contact: 'संपर्क',
      footer_press: 'प्रेस',
      footer_careers: 'करिअर',
      footer_privacy: 'गोपनीयता धोरण',
      footer_terms: 'सेवेच्या अटी',
      footer_cookie: 'कुकी धोरण',
      footer_rights: 'सर्व हक्क राखीव.',
    },

    ta: {
      nav_how: 'இது எப்படி செயல்படுகிறது',
      nav_for: 'Init யாருக்காக',
      nav_download: 'பதிவிறக்கம்',
      hero_eyebrow: 'பரஸ்பர ஆர்வம் பொருத்துதல்',
      hero_title: 'இது<br><span class="accent">பரஸ்பரம்</span> என்று தெரிந்துகொள்ளுங்கள்.',
      hero_sub: 'தனிப்பட்ட ஆர்வம். பரஸ்பரமானபோது மட்டுமே வெளிப்படுகிறது.',
      hero_cta_get: 'ஆப்பைப் பெறுங்கள்',
      hero_cta_how: 'இது எப்படி செயல்படுகிறது',
      how_eyebrow: 'இது எப்படி செயல்படுகிறது',
      how_title: 'உங்கள் உணர்வை வெளிப்படுத்துங்கள்.',
      how_body: 'போன், இமெயில், பயனர்பெயர் அல்லது Instagram. ஒரு வகையைத் தேர்ந்தெடுங்கள். அவர்களும் அவ்வாறு உணரும் வரை எதுவும் தெரியாது.',
      how_link: 'வகைகளை காண்க',
      step1_label: '01 · வெளிப்படுத்தப்பட்டது',
      step1_title: 'வெளிப்படுத்தப்பட்டது. இப்போது காத்திருங்கள்.',
      step1_body: 'அவர்கள் உணர்வை பார்க்கிறார்கள். யார் என்று இல்லை. பரஸ்பரமாகும் வரை இல்லை.',
      step2_label: '02 · பொருத்தப்பட்டது',
      step2_title: 'இது பரஸ்பரமானது. முன்னோக்கி செல்லுங்கள்.',
      step2_body: 'நீங்கள் இருவரும் சேர்ந்து தெரிந்துகொள்கிறீர்கள். முதலில் கேட்க வேண்டியதில்லை. இரு பக்கங்களிலிருந்தும் ஒரு அமைதியான ஆம்.',
      cat_eyebrow: 'Init யாருக்காக',
      cat_title: 'நீங்கள் இன்னும் சொல்லாத ஒவ்வொரு உணர்வும்.',
      cat_crush: 'கிரஷ்',
      cat_crush_story: 'நீங்கள் விளக்க முடியாத ஒரு உணர்வு.',
      cat_hangout: 'சந்திப்பு',
      cat_hangout_story: 'நீங்கள் தொடர்ந்து தள்ளிப்போடும் ஒரு கோரிக்கை.',
      cat_love: 'காதல்',
      cat_love_story: 'இருவருக்கும் உணர்கிறது. யாரும் முதலில் சொல்வதில்லை.',
      cat_date: 'டேட்',
      cat_date_story: 'நீங்கள் மனதில் மீண்டும் மீண்டும் ஒத்திகை செய்யும் ஒரு கேள்வி.',
      cat_marriage: 'திருமணம்',
      cat_marriage_story: 'நீங்கள் அவர்களுடன் கற்பனை செய்த ஒரு எதிர்காலம்.',
      cat_apology: 'மன்னிப்பு',
      cat_apology_story: 'மிக நீண்ட காலமாக சொல்லாமல் இருந்த வார்த்தைகள்.',
      dl_title: 'Init பதிவிறக்கம் செய்யுங்கள்.',
      dl_body: 'iOS மற்றும் Android. பீட்டா அணுகல் இப்போது திறக்கிறது.',
      footer_tagline: 'பரஸ்பர ஆர்வம் பொருத்துதல். பரஸ்பரமாகும் வரை தனிப்பட்டது.',
      footer_product: 'தயாரிப்பு',
      footer_company: 'நிறுவனம்',
      footer_legal: 'சட்டப்பூர்வ',
      footer_contact: 'தொடர்பு',
      footer_press: 'பத்திரிகை',
      footer_careers: 'வாய்ப்புகள்',
      footer_privacy: 'தனியுரிமை கொள்கை',
      footer_terms: 'சேவை விதிமுறைகள்',
      footer_cookie: 'குக்கி கொள்கை',
      footer_rights: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    },

    kn: {
      nav_how: 'ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ',
      nav_for: 'Init ಯಾರಿಗಾಗಿ',
      nav_download: 'ಡೌನ್‌ಲೋಡ್',
      hero_eyebrow: 'ಪರಸ್ಪರ ಆಸಕ್ತಿ ಹೊಂದಾಣಿಕೆ',
      hero_title: 'ಇದು<br><span class="accent">ಪರಸ್ಪರ</span> ಎಂದು ತಿಳಿಯಿರಿ.',
      hero_sub: 'ವ್ಯಕ್ತಿಗತ ಆಸಕ್ತಿ. ಪರಸ್ಪರವಾದಾಗ ಮಾತ್ರ ತಿಳಿಯುತ್ತದೆ.',
      hero_cta_get: 'ಅಪ್ಲಿಕೇಶನ್ ಪಡೆಯಿರಿ',
      hero_cta_how: 'ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ',
      how_eyebrow: 'ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ',
      how_title: 'ನಿಮ್ಮ ಭಾವನೆ ವ್ಯಕ್ತಪಡಿಸಿ.',
      how_body: 'ಫೋನ್, ಇಮೇಲ್, ಬಳಕೆದಾರ ಹೆಸರು ಅಥವಾ Instagram. ಒಂದು ವರ್ಗ ಆಯ್ಕೆ ಮಾಡಿ. ಅವರೂ ಅದನ್ನು ಅನುಭವಿಸುವ ತನಕ ಯಾವುದೂ ತೋರಿಸುವುದಿಲ್ಲ.',
      how_link: 'ವರ್ಗಗಳನ್ನು ನೋಡಿ',
      step1_label: '01 · ವ್ಯಕ್ತಪಡಿಸಲಾಗಿದೆ',
      step1_title: 'ವ್ಯಕ್ತಪಡಿಸಲಾಗಿದೆ. ಈಗ ಕಾಯಿರಿ.',
      step1_body: 'ಅವರು ಭಾವನೆ ನೋಡುತ್ತಾರೆ. ಯಾರು ಎಂದಲ್ಲ. ಪರಸ್ಪರವಾಗುವ ತನಕ ಅಲ್ಲ.',
      step2_label: '02 · ಹೊಂದಾಣಿಕೆ',
      step2_title: 'ಇದು ಪರಸ್ಪರ. ಮುಂದೆ ಹೋಗಿ.',
      step2_body: 'ನೀವಿಬ್ಬರೂ ಒಟ್ಟಿಗೆ ತಿಳಿಯುತ್ತೀರಿ. ಮೊದಲು ಕೇಳುವ ಅಗತ್ಯವಿಲ್ಲ. ಎರಡೂ ಕಡೆಯಿಂದ ಒಂದು ಶಾಂತವಾದ ಹೌದು.',
      cat_eyebrow: 'Init ಯಾರಿಗಾಗಿ',
      cat_title: 'ನೀವು ಇನ್ನು ಹೇಳದ ಪ್ರತಿಯೊಂದು ಭಾವನೆ.',
      cat_crush: 'ಕ್ರಶ್',
      cat_crush_story: 'ನೀವು ವಿವರಿಸಲಾಗದ ಒಂದು ಭಾವನೆ.',
      cat_hangout: 'ಭೇಟಿ',
      cat_hangout_story: 'ನೀವು ಮತ್ತೆ ಮತ್ತೆ ಮುಂದೂಡುತ್ತಿರುವ ಒಂದು ಬೇಡಿಕೆ.',
      cat_love: 'ಪ್ರೀತಿ',
      cat_love_story: 'ಇಬ್ಬರೂ ಅನುಭವಿಸುತ್ತಾರೆ. ಯಾರೂ ಮೊದಲು ಹೇಳುವುದಿಲ್ಲ.',
      cat_date: 'ಡೇಟ್',
      cat_date_story: 'ನೀವು ಮನಸ್ಸಿನಲ್ಲಿ ಪದೇ ಪದೇ ಅಭ್ಯಾಸ ಮಾಡುತ್ತಿರುವ ಒಂದು ಪ್ರಶ್ನೆ.',
      cat_marriage: 'ವಿವಾಹ',
      cat_marriage_story: 'ನೀವು ಅವರೊಂದಿಗೆ ಕಲ್ಪಿಸಿಕೊಂಡ ಒಂದು ಭವಿಷ್ಯ.',
      cat_apology: 'ಕ್ಷಮೆ',
      cat_apology_story: 'ತುಂಬಾ ಕಾಲದಿಂದ ಹೇಳದ ಮಾತುಗಳು.',
      dl_title: 'Init ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ.',
      dl_body: 'iOS ಮತ್ತು Android. ಬೀಟಾ ಪ್ರವೇಶ ಈಗ ತೆರೆಯುತ್ತಿದೆ.',
      footer_tagline: 'ಪರಸ್ಪರ ಆಸಕ್ತಿ ಹೊಂದಾಣಿಕೆ. ಪರಸ್ಪರವಾಗುವ ತನಕ ವ್ಯಕ್ತಿಗತ.',
      footer_product: 'ಉತ್ಪನ್ನ',
      footer_company: 'ಕಂಪನಿ',
      footer_legal: 'ಕಾನೂನು',
      footer_contact: 'ಸಂಪರ್ಕ',
      footer_press: 'ಪ್ರೆಸ್',
      footer_careers: 'ಉದ್ಯೋಗಾವಕಾಶ',
      footer_privacy: 'ಗೌಪ್ಯತಾ ನೀತಿ',
      footer_terms: 'ಸೇವಾ ನಿಯಮಗಳು',
      footer_cookie: 'ಕುಕಿ ನೀತಿ',
      footer_rights: 'ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
    },
  };

  /* ── Core ─────────────────────────────────────────────────── */

  function detectLang() {
    const param = new URLSearchParams(window.location.search).get('lang');
    if (param && T[param]) return param;
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved && T[saved]) return saved;
    } catch (_) { /* localStorage unavailable */ }
    const nav = ((navigator.language || navigator.userLanguage || 'en')).slice(0, 2).toLowerCase();
    return T[nav] ? nav : 'en';
  }

  const NON_LATIN = new Set(['hi', 'bn', 'te', 'mr', 'ta', 'kn', 'zh']);

  function applyTranslations(lang) {
    const t = T[lang] || T.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    document.documentElement.classList.toggle('non-latin', NON_LATIN.has(lang));
    const currentEl = document.getElementById('langCurrent');
    if (currentEl) {
      const entry = LANGUAGES.find(l => l.code === lang);
      currentEl.textContent = entry ? entry.label : lang.toUpperCase();
    }
  }

  function setLanguage(lang) {
    try { localStorage.setItem(LANG_KEY, lang); } catch (_) { /* ignore */ }
    const url = new URL(window.location);
    if (lang === 'en') {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', lang);
    }
    history.replaceState(null, '', url);
    applyTranslations(lang);
    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  /* ── Selector UI ──────────────────────────────────────────── */

  function buildSelector() {
    const selector = document.getElementById('langSelector');
    if (!selector) return;

    const dropdown = document.getElementById('langDropdown');
    const langBtn  = document.getElementById('langBtn');

    LANGUAGES.forEach(({ code, label }) => {
      const btn = document.createElement('button');
      btn.className = 'lang-option';
      btn.dataset.lang = code;
      btn.textContent = label;
      btn.addEventListener('click', () => {
        setLanguage(code);
        dropdown.hidden = true;
        langBtn.setAttribute('aria-expanded', 'false');
      });
      dropdown.appendChild(btn);
    });

    langBtn.addEventListener('click', e => {
      e.stopPropagation();
      const open = !dropdown.hidden;
      dropdown.hidden = open;
      langBtn.setAttribute('aria-expanded', String(!open));
    });

    document.addEventListener('click', () => {
      dropdown.hidden = true;
      langBtn.setAttribute('aria-expanded', 'false');
    });

    dropdown.addEventListener('click', e => e.stopPropagation());
  }

  /* ── Init ─────────────────────────────────────────────────── */

  buildSelector();
  const lang = detectLang();
  setLanguage(lang);
})();
