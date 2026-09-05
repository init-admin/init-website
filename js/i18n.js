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
      nav_download: 'Download',
      hero_eyebrow: 'Init Lounge',
      lounge_step1_title: 'Check in',
      lounge_step2_title: 'Drop a vibe',
      dl_title: 'Download Init.',
      dl_body: 'iOS and Android. Beta access opening now.',
      footer_product: 'Product',
      footer_company: 'Company',
      footer_legal: 'Legal',
      footer_contact: 'Contact',
      footer_privacy: 'Privacy Policy',
      footer_terms: 'Terms of Service',
      footer_cookie: 'Cookie Policy',
      footer_rights: 'All rights reserved.',

      btn_get_app: 'Get the app →',
      ll_title: 'Same place. Same vibe.<br>No icebreaker.',
      ll_lead: 'Check in wherever you are, drop a one-line vibe, and meet the people who are actually here right now.',
      ll_step3_title: 'Match, live',
      ll_step1_body: 'Arrive at a place, check in — no profile to build, just show up.',
      ll_step2_body: 'One line. A workout buddy, a debate partner, someone to split fries with.',
      ll_step3_body: 'Vibe back and it\'s mutual — chat opens right there.',
      ll_usp1_title: 'Real people, right now',
      ll_usp1_body: 'Everyone you see checked in moments back — no stale bios, no fake profiles.',
      ll_usp2_title: 'You choose who sees you',
      ll_usp2_body: 'Show your photo to everyone, or only to people you vibe on.',
      ll_usp3_title: 'Any vibe, any place',
      ll_usp3_body: 'Tech talk, pickup basketball, a plant swap, unfiltered politics — vibe on anything, anywhere: gyms, cafés, campuses, concerts, your own building.',
      home_footer_tagline: 'Same place. Same vibe. No icebreaker.',
      lp_title: 'No feed. No fakes. Just who\'s here.',
      lp_a: 'No profile to build — check in and you\'re in.',
      lp_b: 'Leave the lounge and your card vanishes — you\'re visible only while you\'re there.',
      lp_c: 'The table across the café, someone in your building, a regular at your bar — this is how you finally say hi.',
      lp_d: 'No bots, no months-old bios — everyone here checked in minutes ago.',
      lp_e: 'Proximity-gated — you can only check in when you\'re actually at the venue.',
    },

    fr: {
      nav_how: 'Comment ça marche',
      nav_download: 'Télécharger',
      hero_eyebrow: 'Init Lounge',
      lounge_step1_title: 'Pointez',
      lounge_step2_title: 'Posez votre vibe',
      dl_title: 'Télécharger Init.',
      dl_body: 'iOS et Android. L\'accès bêta s\'ouvre maintenant.',
      footer_product: 'Produit',
      footer_company: 'Entreprise',
      footer_legal: 'Légal',
      footer_contact: 'Contact',
      footer_privacy: 'Politique de Confidentialité',
      footer_terms: 'Conditions d\'Utilisation',
      footer_cookie: 'Politique de Cookies',
      footer_rights: 'Tous droits réservés.',

      btn_get_app: 'Télécharger l\'app →',
      ll_title: 'Même endroit. Même ambiance.<br>Pas besoin d\'entrée en matière.',
      ll_lead: 'Enregistrez-vous ou que vous soyez, laissez une vibe en une ligne et rencontrez les gens vraiment presents, ici et maintenant.',
      ll_step3_title: 'Match, en direct',
      ll_step1_body: 'Arrivez quelque part, enregistrez-vous — pas de profil à créer, juste à vous montrer.',
      ll_step2_body: 'Une ligne. Un partenaire de sport, un débatteur, quelqu\'un avec qui partager des frites.',
      ll_step3_body: 'Répondez à une vibe et c\'est réciproque — le chat s\'ouvre aussitôt.',
      ll_usp1_title: 'De vraies personnes, en ce moment',
      ll_usp1_body: 'Tout le monde que vous voyez s\'est enregistré il y a quelques instants — pas de bios obsolètes, pas de faux profils.',
      ll_usp2_title: 'Vous choisissez qui vous voit',
      ll_usp2_body: 'Montrez votre photo à tout le monde, ou seulement aux personnes avec qui vous avez un match de vibe.',
      ll_usp3_title: 'N\'importe quelle vibe, n\'importe où',
      ll_usp3_body: 'Tech, basket entre amis, échange de plantes, politique sans filtre — une vibe pour tout, partout : salles de sport, cafés, campus, concerts, votre propre immeuble.',
      home_footer_tagline: 'Même endroit. Même ambiance. Pas besoin d\'entrée en matière.',
      lp_title: 'Pas de fil. Pas de faux profils. Juste qui est la.',
      lp_a: 'Aucun profil a creer — enregistrez-vous et c\'est parti.',
      lp_b: 'Quittez le lounge et votre carte disparait — vous n\'etes visible que tant que vous etes sur place.',
      lp_c: 'La table d\'en face au cafe, quelqu\'un de votre immeuble, un habitue de votre bar — voila enfin comment engager la conversation.',
      lp_d: 'Pas de bots, pas de bios vieilles de plusieurs mois — ici, tout le monde s\'est enregistre il y a quelques minutes.',
      lp_e: 'Verifie par proximite — vous ne pouvez vous enregistrer que si vous etes vraiment sur place.',
    },

    it: {
      nav_how: 'Come funziona',
      nav_download: 'Scarica',
      hero_eyebrow: 'Init Lounge',
      lounge_step1_title: 'Fai il check-in',
      lounge_step2_title: 'Lascia una vibe',
      dl_title: 'Scarica Init.',
      dl_body: 'iOS e Android. Accesso beta in apertura ora.',
      footer_product: 'Prodotto',
      footer_company: 'Azienda',
      footer_legal: 'Legale',
      footer_contact: 'Contatto',
      footer_privacy: 'Informativa sulla Privacy',
      footer_terms: 'Termini di Servizio',
      footer_cookie: 'Cookie Policy',
      footer_rights: 'Tutti i diritti riservati.',

      btn_get_app: 'Scarica l\'app →',
      ll_title: 'Stesso posto. Stessa vibe.<br>Niente rompighiaccio.',
      ll_lead: 'Fai il check-in ovunque ti trovi, lascia una vibe in una riga e incontra le persone che sono davvero qui, adesso.',
      ll_step3_title: 'Match, dal vivo',
      ll_step1_body: 'Arriva in un posto, fai il check-in — nessun profilo da creare, basta presentarsi.',
      ll_step2_body: 'Una riga. Un compagno di allenamento, un partner di dibattito, qualcuno con cui dividere le patatine.',
      ll_step3_body: 'Rispondi a una vibe ed è reciproco — la chat si apre subito.',
      ll_usp1_title: 'Persone vere, proprio ora',
      ll_usp1_body: 'Tutti quelli che vedi hanno fatto il check-in pochi istanti fa — niente bio vecchie, niente profili falsi.',
      ll_usp2_title: 'Scegli tu chi ti vede',
      ll_usp2_body: 'Mostra la tua foto a tutti, oppure solo a chi condivide la tua vibe.',
      ll_usp3_title: 'Qualsiasi vibe, ovunque',
      ll_usp3_body: 'Tech talk, basket improvvisato, scambio di piante, politica senza filtri — vivi qualsiasi vibe, ovunque: palestre, caffè, campus, concerti, il tuo stesso palazzo.',
      home_footer_tagline: 'Stesso posto. Stessa vibe. Niente rompighiaccio.',
      lp_title: 'Niente feed. Niente falsi. Solo chi c\'e adesso.',
      lp_a: 'Nessun profilo da creare — fai il check-in e sei dentro.',
      lp_b: 'Esci dal lounge e la tua card sparisce — sei visibile solo finche sei li.',
      lp_c: 'Il tavolo di fronte al bar, qualcuno del tuo palazzo, un habitue del tuo locale — e cosi che finalmente rompi il ghiaccio.',
      lp_d: 'Niente bot, niente bio vecchie di mesi — qui si sono tutti registrati pochi minuti fa.',
      lp_e: 'Con verifica di prossimita — puoi fare il check-in solo se sei davvero sul posto.',
    },

    es: {
      nav_how: 'Cómo funciona',
      nav_download: 'Descargar',
      hero_eyebrow: 'Init Lounge',
      lounge_step1_title: 'Regístrate',
      lounge_step2_title: 'Deja tu vibra',
      dl_title: 'Descarga Init.',
      dl_body: 'iOS y Android. Acceso beta abriendo ahora.',
      footer_product: 'Producto',
      footer_company: 'Empresa',
      footer_legal: 'Legal',
      footer_contact: 'Contacto',
      footer_privacy: 'Política de Privacidad',
      footer_terms: 'Términos de Servicio',
      footer_cookie: 'Política de Cookies',
      footer_rights: 'Todos los derechos reservados.',

      btn_get_app: 'Descargar la app →',
      ll_title: 'Mismo lugar. Misma onda.<br>Sin rompehielos.',
      ll_lead: 'Registrate estes donde estes, deja una vibra en una linea y conoce a la gente que esta aqui de verdad, ahora mismo.',
      ll_step3_title: 'Match, en vivo',
      ll_step1_body: 'Llega a un lugar, regístrate — sin perfil que crear, solo preséntate.',
      ll_step2_body: 'Una línea. Un compañero de gimnasio, un compañero de debate, alguien con quien compartir papas fritas.',
      ll_step3_body: 'Responde a una onda y es mutuo — el chat se abre al instante.',
      ll_usp1_title: 'Gente real, ahora mismo',
      ll_usp1_body: 'Todos los que ves se registraron hace instantes — sin bios viejas, sin perfiles falsos.',
      ll_usp2_title: 'Tú eliges quién te ve',
      ll_usp2_body: 'Muestra tu foto a todos, o solo a las personas con las que conectas.',
      ll_usp3_title: 'Cualquier onda, cualquier lugar',
      ll_usp3_body: 'Charla tech, básquet improvisado, intercambio de plantas, política sin filtro — comparte cualquier onda, en cualquier lugar: gimnasios, cafés, campus, conciertos, tu propio edificio.',
      home_footer_tagline: 'Mismo lugar. Misma onda. Sin rompehielos.',
      lp_title: 'Sin feed. Sin perfiles falsos. Solo quien esta aqui.',
      lp_a: 'Sin perfil que crear: te registras y ya estas.',
      lp_b: 'Sales del lounge y tu tarjeta desaparece: solo eres visible mientras estas ahi.',
      lp_c: 'La mesa de enfrente en el cafe, alguien de tu edificio, un habitual de tu bar: asi es como por fin dices hola.',
      lp_d: 'Sin bots, sin biografias de hace meses: aqui todos se registraron hace minutos.',
      lp_e: 'Con verificacion por cercania: solo puedes registrarte si estas de verdad en el sitio.',
    },

    hi: {
      nav_how: 'यह कैसे काम करता है',
      nav_download: 'डाउनलोड',
      hero_eyebrow: 'Init Lounge',
      lounge_step1_title: 'चेक इन करें',
      lounge_step2_title: 'वाइब डालें',
      dl_title: 'Init डाउनलोड करें।',
      dl_body: 'iOS और Android। बीटा एक्सेस अभी शुरू हो रहा है।',
      footer_product: 'उत्पाद',
      footer_company: 'कंपनी',
      footer_legal: 'कानूनी',
      footer_contact: 'संपर्क',
      footer_privacy: 'गोपनीयता नीति',
      footer_terms: 'सेवा की शर्तें',
      footer_cookie: 'कुकी नीति',
      footer_rights: 'सर्वाधिकार सुरक्षित।',

      btn_get_app: 'ऐप डाउनलोड करें →',
      ll_title: 'वही जगह। वही वाइब।<br>कोई आइसब्रेकर नहीं।',
      ll_lead: 'आप जहाँ भी हों, वहीं चेक इन करें, एक लाइन की वाइब डालें और उन लोगों से मिलें जो अभी सचमुच यहीं मौजूद हैं।',
      ll_step3_title: 'मैच, लाइव',
      ll_step1_body: 'किसी जगह पहुँचें, चेक इन करें — कोई प्रोफ़ाइल नहीं बनानी, बस मौजूद रहें।',
      ll_step2_body: 'एक लाइन। एक वर्कआउट बडी, एक बहस का साथी, कोई जिसके साथ फ्राइज़ बाँट सकें।',
      ll_step3_body: 'वाइब वापस करें और यह म्यूचुअल है — चैट वहीं खुल जाती है।',
      ll_usp1_title: 'असली लोग, अभी इस वक्त',
      ll_usp1_body: 'जिसे भी आप देखते हैं वह अभी कुछ पल पहले चेक इन हुआ है — कोई पुरानी बायो नहीं, कोई फ़ेक प्रोफ़ाइल नहीं।',
      ll_usp2_title: 'आप चुनें कि आपको कौन देखे',
      ll_usp2_body: 'सबको अपनी फोटो दिखाएँ, या सिर्फ़ उन्हें जिनसे आपकी वाइब मिलती है।',
      ll_usp3_title: 'कोई भी वाइब, कहीं भी',
      ll_usp3_body: 'टेक टॉक, पिकअप बास्केटबॉल, पौधों की अदला-बदली, बेधड़क राजनीति — किसी भी चीज़ पर, कहीं भी वाइब करें: जिम, कैफ़े, कैंपस, कॉन्सर्ट, अपनी ही बिल्डिंग।',
      home_footer_tagline: 'वही जगह। वही वाइब। कोई आइसब्रेकर नहीं।',
      lp_title: 'कोई फ़ीड नहीं। कोई नकली प्रोफ़ाइल नहीं। बस वही जो यहाँ हैं।',
      lp_a: 'कोई प्रोफ़ाइल नहीं बनानी — चेक इन करें और आप शामिल।',
      lp_b: 'लाउंज छोड़ते ही आपका कार्ड गायब — आप सिर्फ़ तभी दिखते हैं जब तक आप वहाँ हैं।',
      lp_c: 'कैफ़े में सामने वाली टेबल, आपकी बिल्डिंग का कोई, आपके बार का कोई नियमित — आख़िरकार यूँ शुरू होती है बात।',
      lp_d: 'कोई बॉट नहीं, महीनों पुरानी बायो नहीं — यहाँ सबने कुछ मिनट पहले चेक इन किया है।',
      lp_e: 'दूरी से सत्यापित — चेक इन तभी होगा जब आप सचमुच उस जगह पर हों।',
    },

    zh: {
      nav_how: '如何运作',
      nav_download: '下载',
      hero_eyebrow: 'Init Lounge',
      lounge_step1_title: '签到',
      lounge_step2_title: '留下你的氛围',
      dl_title: '下载 Init。',
      dl_body: 'iOS 和 Android。Beta 访问现在开放。',
      footer_product: '产品',
      footer_company: '公司',
      footer_legal: '法律',
      footer_contact: '联系',
      footer_privacy: '隐私政策',
      footer_terms: '服务条款',
      footer_cookie: 'Cookie 政策',
      footer_rights: '版权所有。',

      btn_get_app: '下载应用 →',
      ll_title: '同一个地方。同一种氛围。<br>无需搭讪开场白。',
      ll_lead: '无论身在何处都能签到，写下一句心情，认识此刻真正在场的人。',
      ll_step3_title: '实时匹配',
      ll_step1_body: '到达一个地方，签到——无需建立个人资料，出现就好。',
      ll_step2_body: '一句话。健身搭子、辩论对手、一起分薯条的人。',
      ll_step3_body: '回应对方的心情，双方互相喜欢——聊天窗口立刻打开。',
      ll_usp1_title: '真实的人，就在此刻',
      ll_usp1_body: '你看到的每个人都是刚刚签到的——没有过时的简介，没有虚假资料。',
      ll_usp2_title: '你决定谁能看到你',
      ll_usp2_body: '向所有人展示照片，或只向和你心意相通的人展示。',
      ll_usp3_title: '任何氛围，任何地方',
      ll_usp3_body: '科技话题、临时篮球赛、植物交换、畅所欲言的政治讨论——在任何地方为任何事找到共鸣：健身房、咖啡馆、校园、演唱会、你自己居住的楼里。',
      home_footer_tagline: '同一个地方。同一种氛围。无需搭讪开场白。',
      lp_title: '没有信息流，没有假账号，只有此刻在场的人。',
      lp_a: '无需创建资料——签到即加入。',
      lp_b: '离开 lounge，你的卡片随即消失——只有在场时才可见。',
      lp_c: '咖啡馆对面那桌、你楼里的某个人、酒吧的常客——你终于有办法打个招呼。',
      lp_d: '没有机器人，没有几个月前的简介——这里每个人都是几分钟前签到的。',
      lp_e: '距离验证——只有真正身处场地时才能签到。',
    },

    bn: {
      nav_how: 'কীভাবে কাজ করে',
      nav_download: 'ডাউনলোড',
      hero_eyebrow: 'Init Lounge',
      lounge_step1_title: 'চেক ইন করুন',
      lounge_step2_title: 'ভাইব দিন',
      dl_title: 'Init নামান।',
      dl_body: 'iOS এবং Android। বেটা অ্যাক্সেস এখন শুরু হচ্ছে।',
      footer_product: 'পণ্য',
      footer_company: 'কোম্পানি',
      footer_legal: 'আইনি',
      footer_contact: 'যোগাযোগ',
      footer_privacy: 'গোপনীয়তা নীতি',
      footer_terms: 'পরিষেবার শর্তাবলী',
      footer_cookie: 'কুকি নীতি',
      footer_rights: 'সর্বস্বত্ব সংরক্ষিত।',

      btn_get_app: 'অ্যাপ ডাউনলোড করুন →',
      ll_title: 'একই জায়গা। একই ভাইব।<br>কোনো আইসব্রেকার লাগে না।',
      ll_lead: 'আপনি যেখানেই থাকুন সেখানে চেক ইন করুন, এক লাইনের ভাইব দিন এবং এখন সত্যিই যাঁরা এখানে আছেন তাঁদের সঙ্গে পরিচিত হন।',
      ll_step3_title: 'ম্যাচ, লাইভ',
      ll_step1_body: 'কোনো জায়গায় পৌঁছান, চেক ইন করুন — কোনো প্রোফাইল তৈরি করতে হবে না, শুধু উপস্থিত থাকুন।',
      ll_step2_body: 'এক লাইন। একজন ওয়ার্কআউট বন্ধু, একজন বিতর্কের সঙ্গী, কারো সাথে ফ্রাই ভাগ করে নেওয়া।',
      ll_step3_body: 'ভাইব ফিরিয়ে দিন আর সেটা পারস্পরিক হলে — চ্যাট তখনই খুলে যায়।',
      ll_usp1_title: 'আসল মানুষ, ঠিক এখনই',
      ll_usp1_body: 'আপনি যাদের দেখেন তারা সবাই মাত্র কিছুক্ষণ আগে চেক ইন করেছে — পুরনো বায়ো নেই, নকল প্রোফাইল নেই।',
      ll_usp2_title: 'আপনি বেছে নিন কে আপনাকে দেখবে',
      ll_usp2_body: 'সবাইকে আপনার ছবি দেখান, অথবা শুধু যাদের সাথে আপনার ভাইব মেলে তাদের।',
      ll_usp3_title: 'যেকোনো ভাইব, যেকোনো জায়গা',
      ll_usp3_body: 'টেক নিয়ে কথা, হঠাৎ বাস্কেটবল, গাছ বিনিময়, নির্ভয়ে রাজনীতি নিয়ে আলোচনা — যেকোনো কিছুতে, যেকোনো জায়গায় ভাইব করুন: জিম, ক্যাফে, ক্যাম্পাস, কনসার্ট, এমনকি আপনার নিজের বিল্ডিং।',
      home_footer_tagline: 'একই জায়গা। একই ভাইব। কোনো আইসব্রেকার লাগে না।',
      lp_title: 'কোনো ফিড নেই। কোনো নকল প্রোফাইল নেই। শুধু যাঁরা এখানে আছেন।',
      lp_a: 'কোনো প্রোফাইল বানাতে হবে না — চেক ইন করলেই হলো।',
      lp_b: 'লাউঞ্জ ছাড়লেই আপনার কার্ড উধাও — আপনি কেবল যতক্ষণ সেখানে আছেন ততক্ষণই দৃশ্যমান।',
      lp_c: 'ক্যাফের উল্টো দিকের টেবিল, আপনার বিল্ডিংয়ের কেউ, আপনার বারের নিয়মিত মুখ — এভাবেই অবশেষে আলাপ শুরু।',
      lp_d: 'কোনো বট নেই, কয়েক মাসের পুরনো বায়ো নেই — এখানে সবাই কয়েক মিনিট আগে চেক ইন করেছেন।',
      lp_e: 'নৈকট্য যাচাই — আপনি সত্যিই সেই জায়গায় থাকলে তবেই চেক ইন করতে পারবেন।',
    },

    te: {
      nav_how: 'ఇది ఎలా పని చేస్తుంది',
      nav_download: 'డౌన్‌లోడ్',
      hero_eyebrow: 'Init Lounge',
      lounge_step1_title: 'చెక్ ఇన్ చేయండి',
      lounge_step2_title: 'వైబ్ వేయండి',
      dl_title: 'Init డౌన్‌లోడ్ చేయండి.',
      dl_body: 'iOS మరియు Android. బీటా యాక్సెస్ ఇప్పుడు తెరుచుకుంటోంది.',
      footer_product: 'ఉత్పత్తి',
      footer_company: 'కంపెనీ',
      footer_legal: 'చట్టపరమైన',
      footer_contact: 'సంప్రదించండి',
      footer_privacy: 'గోపనీయత విధానం',
      footer_terms: 'సేవా నిబంధనలు',
      footer_cookie: 'కుకీ విధానం',
      footer_rights: 'అన్ని హక్కులూ రిజర్వ్ చేయబడ్డాయి.',

      btn_get_app: 'యాప్ డౌన్‌లోడ్ చేయండి →',
      ll_title: 'అదే స్థలం. అదే వైబ్.<br>ఐస్‌బ్రేకర్ అవసరం లేదు.',
      ll_lead: 'మీరు ఎక్కడ ఉన్నా అక్కడే చెక్ ఇన్ అవ్వండి, ఒక లైన్ వైబ్ పెట్టండి, ఇప్పుడు నిజంగా ఇక్కడ ఉన్నవారిని కలవండి.',
      ll_step3_title: 'మ్యాచ్, ప్రత్యక్షంగా',
      ll_step1_body: 'ఒక ప్రదేశానికి చేరుకోండి, చెక్ ఇన్ చేయండి — ప్రొఫైల్ తయారు చేయాల్సిన అవసరం లేదు, కేవలం అక్కడ ఉండండి.',
      ll_step2_body: 'ఒక్క లైన్. వర్కౌట్ బడ్డీ, డిబేట్ పార్టనర్, ఫ్రైస్ పంచుకునేవారు.',
      ll_step3_body: 'వైబ్ తిరిగి ఇవ్వండి, అది పరస్పరమైతే — చాట్ వెంటనే తెరుచుకుంటుంది.',
      ll_usp1_title: 'నిజమైన వ్యక్తులు, ఇప్పుడే',
      ll_usp1_body: 'మీరు చూసే ప్రతి ఒక్కరూ కొద్ది క్షణాల క్రితమే చెక్ ఇన్ అయ్యారు — పాత బయోలు లేవు, నకిలీ ప్రొఫైల్‌లు లేవు.',
      ll_usp2_title: 'మిమ్మల్ని ఎవరు చూడాలో మీరే ఎంచుకోండి',
      ll_usp2_body: 'మీ ఫోటోను అందరికీ చూపించండి, లేదా మీ వైబ్‌తో సరిపోలిన వారికి మాత్రమే.',
      ll_usp3_title: 'ఏ వైబ్ అయినా, ఏ చోటైనా',
      ll_usp3_body: 'టెక్ చర్చ, ఆకస్మిక బాస్కెట్‌బాల్, మొక్కల మార్పిడి, నిర్భయ రాజకీయ చర్చ — ఎక్కడైనా, దేనిపైనైనా వైబ్ చేయండి: జిమ్‌లు, కేఫ్‌లు, క్యాంపస్‌లు, కచేరీలు, మీ సొంత భవనం కూడా.',
      home_footer_tagline: 'అదే స్థలం. అదే వైబ్. ఐస్‌బ్రేకర్ అవసరం లేదు.',
      lp_title: 'ఫీడ్ లేదు. నకిలీలు లేవు. ఇక్కడ ఉన్నవారు మాత్రమే.',
      lp_a: 'ప్రొఫైల్ సృష్టించాల్సిన అవసరం లేదు — చెక్ ఇన్ అయితే చాలు.',
      lp_b: 'లాంజ్ నుండి బయటికి వెళ్తే మీ కార్డ్ మాయం — మీరు అక్కడ ఉన్నంత వరకే కనబడతారు.',
      lp_c: 'కఫేలో ఎదురుగా ఉన్న టేబుల్, మీ భవనంలో ఎవరో, మీ బార్‌కి తరచూ వచ్చేవారు — చివరకు ఇలా పలకరించవచ్చు.',
      lp_d: 'బాట్‌లు లేవు, నెలల నాటి బయోలు లేవు — ఇక్కడ అందరూ కొన్ని నిమిషాల క్రితమే చెక్ ఇన్ అయ్యారు.',
      lp_e: 'సామీప్య ధృవీకరణ — మీరు నిజంగా ఆ ప్రదేశంలో ఉంటేనే చెక్ ఇన్ చేయగలరు.',
    },

    mr: {
      nav_how: 'हे कसे काम करते',
      nav_download: 'डाउनलोड',
      hero_eyebrow: 'Init Lounge',
      lounge_step1_title: 'चेक इन करा',
      lounge_step2_title: 'वाइब टाका',
      dl_title: 'Init डाउनलोड करा.',
      dl_body: 'iOS आणि Android. बीटा प्रवेश आता सुरू होत आहे.',
      footer_product: 'उत्पादन',
      footer_company: 'कंपनी',
      footer_legal: 'कायदेशीर',
      footer_contact: 'संपर्क',
      footer_privacy: 'गोपनीयता धोरण',
      footer_terms: 'सेवेच्या अटी',
      footer_cookie: 'कुकी धोरण',
      footer_rights: 'सर्व हक्क राखीव.',

      btn_get_app: 'अ‍ॅप डाउनलोड करा →',
      ll_title: 'तीच जागा. तोच वाइब.<br>आइसब्रेकरची गरज नाही.',
      ll_lead: 'तुम्ही जिथे असाल तिथेच चेक इन करा, एका ओळीची व्हाइब टाका आणि आत्ता खरोखर इथे असलेल्या लोकांना भेटा.',
      ll_step3_title: 'मॅच, लाइव्ह',
      ll_step1_body: 'एखाद्या ठिकाणी पोहोचा, चेक इन करा — प्रोफाइल तयार करायची गरज नाही, फक्त हजर रहा.',
      ll_step2_body: 'एक ओळ. वर्कआउट बडी, डिबेट पार्टनर, फ्राईज वाटून खाणारं कोणीतरी.',
      ll_step3_body: 'वाइब परत द्या आणि ते परस्पर असेल तर — चॅट लगेच उघडतो.',
      ll_usp1_title: 'खरी माणसं, याच क्षणी',
      ll_usp1_body: 'तुम्हाला दिसणारा प्रत्येकजण काही क्षणांपूर्वीच चेक इन झालेला आहे — जुन्या बायो नाहीत, बनावट प्रोफाइल नाहीत.',
      ll_usp2_title: 'तुम्हाला कोण पाहू शकतं ते तुम्ही ठरवा',
      ll_usp2_body: 'तुमचा फोटो सर्वांना दाखवा, किंवा फक्त ज्यांच्याशी तुमचा वाइब जुळतो त्यांनाच.',
      ll_usp3_title: 'कोणताही वाइब, कोणतीही जागा',
      ll_usp3_body: 'टेक चर्चा, अचानक बास्केटबॉल, रोपांची देवाणघेवाण, बिनधास्त राजकारण — कुठेही, कशावरही वाइब करा: जिम, कॅफे, कॅम्पस, कॉन्सर्ट, अगदी तुमची स्वतःची इमारत.',
      home_footer_tagline: 'तीच जागा. तोच वाइब. आइसब्रेकरची गरज नाही.',
      lp_title: 'फीड नाही. बनावट प्रोफाइल नाही. फक्त जे इथे आहेत तेच.',
      lp_a: 'प्रोफाइल बनवायची गरज नाही — चेक इन करा आणि झालं.',
      lp_b: 'लाउंज सोडताच तुमचं कार्ड गायब — तुम्ही तिथे असेपर्यंतच दिसता.',
      lp_c: 'कॅफेतली समोरची टेबल, तुमच्या इमारतीतलं कोणीतरी, तुमच्या बारचा नियमित चेहरा — अखेर अशी होते सुरुवात.',
      lp_d: 'बॉट नाहीत, महिन्यांपूर्वीचे बायो नाहीत — इथे प्रत्येकाने काही मिनिटांपूर्वी चेक इन केलं आहे.',
      lp_e: 'सान्निध्य-पडताळणी — तुम्ही खरोखर त्या ठिकाणी असाल तरच चेक इन करता येईल.',
    },

    ta: {
      nav_how: 'இது எப்படி செயல்படுகிறது',
      nav_download: 'பதிவிறக்கம்',
      hero_eyebrow: 'Init Lounge',
      lounge_step1_title: 'செக் இன் செய்யுங்கள்',
      lounge_step2_title: 'வைப் போடுங்கள்',
      dl_title: 'Init பதிவிறக்கம் செய்யுங்கள்.',
      dl_body: 'iOS மற்றும் Android. பீட்டா அணுகல் இப்போது திறக்கிறது.',
      footer_product: 'தயாரிப்பு',
      footer_company: 'நிறுவனம்',
      footer_legal: 'சட்டப்பூர்வ',
      footer_contact: 'தொடர்பு',
      footer_privacy: 'தனியுரிமை கொள்கை',
      footer_terms: 'சேவை விதிமுறைகள்',
      footer_cookie: 'குக்கி கொள்கை',
      footer_rights: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',

      btn_get_app: 'ஆப்பைப் பதிவிறக்கவும் →',
      ll_title: 'அதே இடம். அதே வைப்.<br>ஐஸ்பிரேக்கர் தேவையில்லை.',
      ll_lead: 'நீங்கள் எங்கிருந்தாலும் அங்கேயே செக் இன் செய்யுங்கள், ஒரு வரி வைப் இடுங்கள், இப்போது உண்மையில் இங்கே இருப்பவர்களைச் சந்தியுங்கள்.',
      ll_step3_title: 'மேட்ச், நேரடியாக',
      ll_step1_body: 'ஒரு இடத்தை அடையுங்கள், செக் இன் செய்யுங்கள் — புரொஃபைல் உருவாக்க வேண்டியதில்லை, வெறுமனே வாருங்கள்.',
      ll_step2_body: 'ஒரு வரி. ஒரு உடற்பயிற்சி நண்பர், ஒரு விவாத பங்குதாரர், ஃபிரைஸை பகிர்ந்துகொள்பவர்.',
      ll_step3_body: 'வைப்பை திருப்பி அனுப்புங்கள், அது பரஸ்பரமானால் — அரட்டை உடனே திறக்கும்.',
      ll_usp1_title: 'உண்மையான மக்கள், இப்போதே',
      ll_usp1_body: 'நீங்கள் பார்க்கும் ஒவ்வொருவரும் சில நிமிடங்களுக்கு முன்பே செக் இன் செய்தவர்கள் — பழைய பயோக்கள் இல்லை, போலி புரொஃபைல்கள் இல்லை.',
      ll_usp2_title: 'உங்களை யார் பார்க்க வேண்டும் என்பதை நீங்களே தேர்வு செய்யுங்கள்',
      ll_usp2_body: 'உங்கள் புகைப்படத்தை அனைவருக்கும் காட்டுங்கள், அல்லது உங்களுடன் வைப் பொருந்துபவர்களுக்கு மட்டும்.',
      ll_usp3_title: 'எந்த வைப் ஆனாலும், எந்த இடம் ஆனாலும்',
      ll_usp3_body: 'டெக் பேச்சு, திடீர் கூடைப்பந்து, செடி பரிமாற்றம், தயக்கமில்லா அரசியல் — எங்கும், எதிலும் வைப் செய்யுங்கள்: ஜிம்கள், கஃபேக்கள், வளாகங்கள், இசை நிகழ்ச்சிகள், உங்கள் சொந்த கட்டிடம் கூட.',
      home_footer_tagline: 'அதே இடம். அதே வைப். ஐஸ்பிரேக்கர் தேவையில்லை.',
      lp_title: 'ஃபீட் இல்லை. போலிகள் இல்லை. இங்கே இருப்பவர்கள் மட்டும்.',
      lp_a: 'உருவாக்க சுயவிவரம் இல்லை — செக் இன் செய்தால் போதும்.',
      lp_b: 'லாஞ்சை விட்டு வெளியேறினால் உங்கள் கார்டு மறையும் — நீங்கள் அங்கு இருக்கும் வரை மட்டுமே தெரிவீர்கள்.',
      lp_c: 'கஃபேயில் எதிர் மேசை, உங்கள் கட்டடத்தில் ஒருவர், உங்கள் பாரின் வழக்கமான நபர் — இறுதியாக இப்படிதான் பேச்சு தொடங்கும்.',
      lp_d: 'பாட்கள் இல்லை, மாதங்கள் பழைய சுயவிவரங்கள் இல்லை — இங்கே அனைவரும் சில நிமிடங்களுக்கு முன் செக் இன் செய்தவர்கள்.',
      lp_e: 'அருகாமை சரிபார்ப்பு — நீங்கள் உண்மையில் அந்த இடத்தில் இருந்தால் மட்டுமே செக் இன் செய்ய முடியும்.',
    },

    kn: {
      nav_how: 'ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ',
      nav_download: 'ಡೌನ್‌ಲೋಡ್',
      hero_eyebrow: 'Init Lounge',
      lounge_step1_title: 'ಚೆಕ್ ಇನ್ ಮಾಡಿ',
      lounge_step2_title: 'ವೈಬ್ ಹಾಕಿ',
      dl_title: 'Init ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ.',
      dl_body: 'iOS ಮತ್ತು Android. ಬೀಟಾ ಪ್ರವೇಶ ಈಗ ತೆರೆಯುತ್ತಿದೆ.',
      footer_product: 'ಉತ್ಪನ್ನ',
      footer_company: 'ಕಂಪನಿ',
      footer_legal: 'ಕಾನೂನು',
      footer_contact: 'ಸಂಪರ್ಕ',
      footer_privacy: 'ಗೌಪ್ಯತಾ ನೀತಿ',
      footer_terms: 'ಸೇವಾ ನಿಯಮಗಳು',
      footer_cookie: 'ಕುಕಿ ನೀತಿ',
      footer_rights: 'ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',

      btn_get_app: 'ಆ್ಯಪ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ →',
      ll_title: 'ಅದೇ ಸ್ಥಳ. ಅದೇ ವೈಬ್.<br>ಐಸ್‌ಬ್ರೇಕರ್ ಬೇಕಿಲ್ಲ.',
      ll_lead: 'ನೀವು ಎಲ್ಲಿದ್ದರೂ ಅಲ್ಲಿಯೇ ಚೆಕ್ ಇನ್ ಮಾಡಿ, ಒಂದು ಸಾಲಿನ ವೈಬ್ ಹಾಕಿ, ಈಗ ನಿಜವಾಗಿಯೂ ಇಲ್ಲಿ ಇರುವವರನ್ನು ಭೇಟಿಯಾಗಿ.',
      ll_step3_title: 'ಮ್ಯಾಚ್, ಲೈವ್',
      ll_step1_body: 'ಒಂದು ಸ್ಥಳಕ್ಕೆ ಬನ್ನಿ, ಚೆಕ್ ಇನ್ ಮಾಡಿ — ಪ್ರೊಫೈಲ್ ರಚಿಸಬೇಕಿಲ್ಲ, ಬರೀ ಹಾಜರಿರಿ.',
      ll_step2_body: 'ಒಂದೇ ಸಾಲು. ವರ್ಕೌಟ್ ಬಡ್ಡಿ, ಚರ್ಚಾ ಸಂಗಾತಿ, ಫ್ರೈಸ್ ಹಂಚಿಕೊಳ್ಳುವವರು.',
      ll_step3_body: 'ವೈಬ್ ಹಿಂತಿರುಗಿಸಿ, ಅದು ಪರಸ್ಪರವಾದರೆ — ಚಾಟ್ ತಕ್ಷಣ ತೆರೆದುಕೊಳ್ಳುತ್ತದೆ.',
      ll_usp1_title: 'ನಿಜವಾದ ಜನರು, ಇದೀಗಲೇ',
      ll_usp1_body: 'ನೀವು ನೋಡುವ ಪ್ರತಿಯೊಬ್ಬರೂ ಕೆಲ ಕ್ಷಣಗಳ ಹಿಂದೆಯಷ್ಟೇ ಚೆಕ್ ಇನ್ ಆಗಿದ್ದಾರೆ — ಹಳೆಯ ಬಯೋಗಳಿಲ್ಲ, ನಕಲಿ ಪ್ರೊಫೈಲ್‌ಗಳಿಲ್ಲ.',
      ll_usp2_title: 'ನಿಮ್ಮನ್ನು ಯಾರು ನೋಡಬೇಕು ಎಂಬುದನ್ನು ನೀವೇ ಆಯ್ಕೆಮಾಡಿ',
      ll_usp2_body: 'ನಿಮ್ಮ ಫೋಟೋವನ್ನು ಎಲ್ಲರಿಗೂ ತೋರಿಸಿ, ಅಥವಾ ನಿಮ್ಮ ವೈಬ್‌ಗೆ ಹೊಂದುವವರಿಗೆ ಮಾತ್ರ.',
      ll_usp3_title: 'ಯಾವುದೇ ವೈಬ್, ಯಾವುದೇ ಸ್ಥಳ',
      ll_usp3_body: 'ಟೆಕ್ ಚರ್ಚೆ, ಹಠಾತ್ ಬ್ಯಾಸ್ಕೆಟ್‌ಬಾಲ್, ಸಸ್ಯ ವಿನಿಮಯ, ನಿರ್ಭೀತ ರಾಜಕೀಯ — ಎಲ್ಲಿಯಾದರೂ, ಯಾವುದರ ಮೇಲಾದರೂ ವೈಬ್ ಮಾಡಿ: ಜಿಮ್‌ಗಳು, ಕೆಫೆಗಳು, ಕ್ಯಾಂಪಸ್‌ಗಳು, ಕನ್ಸರ್ಟ್‌ಗಳು, ನಿಮ್ಮ ಸ್ವಂತ ಕಟ್ಟಡ ಕೂಡ.',
      home_footer_tagline: 'ಅದೇ ಸ್ಥಳ. ಅದೇ ವೈಬ್. ಐಸ್‌ಬ್ರೇಕರ್ ಬೇಕಿಲ್ಲ.',
      lp_title: 'ಫೀಡ್ ಇಲ್ಲ. ನಕಲಿಗಳಿಲ್ಲ. ಇಲ್ಲಿ ಇರುವವರು ಮಾತ್ರ.',
      lp_a: 'ರಚಿಸಲು ಪ್ರೊಫೈಲ್ ಇಲ್ಲ — ಚೆಕ್ ಇನ್ ಮಾಡಿದರೆ ಸಾಕು.',
      lp_b: 'ಲಾಂಜ್‌ನಿಂದ ಹೊರಬಂದರೆ ನಿಮ್ಮ ಕಾರ್ಡ್ ಮಾಯ — ನೀವು ಅಲ್ಲಿ ಇದ್ದಷ್ಟು ಹೊತ್ತು ಮಾತ್ರ ಗೋಚರ.',
      lp_c: 'ಕೆಫೆಯಲ್ಲಿ ಎದುರಿನ ಟೇಬಲ್, ನಿಮ್ಮ ಕಟ್ಟಡದ ಯಾರೋ, ನಿಮ್ಮ ಬಾರ್‌ನ ನಿಯಮಿತ ಮುಖ — ಕೊನೆಗೂ ಹೀಗೆ ಮಾತು ಶುರು.',
      lp_d: 'ಬಾಟ್‌ಗಳಿಲ್ಲ, ತಿಂಗಳ ಹಳೆಯ ಬಯೋಗಳಿಲ್ಲ — ಇಲ್ಲಿ ಎಲ್ಲರೂ ಕೆಲವು ನಿಮಿಷಗಳ ಹಿಂದೆ ಚೆಕ್ ಇನ್ ಮಾಡಿದವರು.',
      lp_e: 'ಸಾಮೀಪ್ಯ ಪರಿಶೀಲನೆ — ನೀವು ನಿಜವಾಗಿಯೂ ಆ ಸ್ಥಳದಲ್ಲಿ ಇದ್ದರೆ ಮಾತ್ರ ಚೆಕ್ ಇನ್ ಮಾಡಬಹುದು.',
    },
  };

  /* ── Core ─────────────────────────────────────────────────── */

  let currentLang = 'en';
  const changeListeners = [];

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
    currentLang = T[lang] ? lang : 'en';
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
    changeListeners.forEach(fn => { try { fn(currentLang); } catch (_) { /* ignore */ } });
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

  /* ── Public hook ──────────────────────────────────────────────
     Lets other scripts look up a translation for an arbitrary key
     outside the static data-i18n DOM pass, and
     get notified when the language changes so they can re-render
     dynamically-injected text. */
  window.__i18n = {
    t(key) {
      const t = T[currentLang] || T.en;
      return t[key] !== undefined ? t[key] : key;
    },
    onChange(fn) { changeListeners.push(fn); },
  };

  /* ── Init ─────────────────────────────────────────────────── */

  buildSelector();
  const lang = detectLang();
  setLanguage(lang);
})();
