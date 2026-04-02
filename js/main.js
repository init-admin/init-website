/* ============================================================
   INIT — Landing Page Scripts
   ============================================================ */

/* ── TRANSLATIONS ─────────────────────────────────── */
const translations = {
  en: {
    nav_home: "Home", nav_how: "How It Works", nav_privacy: "Privacy",
    nav_faq: "FAQ", nav_download: "Download",
    hero_eyebrow: "MUTUAL INTEREST MATCHING",
    hero_h1_a: "Find out if the feeling is ",
    hero_h1_b: "mutual",
    hero_h1_c: " — without ever risking rejection.",
    hero_sub: "Your interest stays completely private. They only find out if they feel it too.",
    hero_cta1: "Get the App", hero_cta2: "How it works",
    hero_tagline: "Your match could be one init away.",
    carousel_eyebrow: "WHY INIT",
    carousel_h2: "The feeling was always mutual.",
    carousel_sub: "Some things are better left unsaid. Until now, that was your only option.",
    slides: [
      { icon: "✦", head_a: "Find out if the feeling is ", head_b: "mutual", head_c: "", sub: "Without ever risking rejection." },
      { icon: "🤫", head_a: "Ever liked someone but ", head_b: "stayed quiet?", head_c: "", sub: "One wrong move changes everything. So you said nothing." },
      { icon: "💬", head_a: "The most painful thing isn't ", head_b: "rejection.", head_c: "", sub: "It's finding out years later they felt exactly the same way." },
      { icon: "🔒", head_a: "Your interest stays completely ", head_b: "private.", head_c: "", sub: "They only find out if they feel it too. If they don't — your secret stays yours." },
      { icon: "👥", head_a: "Not for strangers. For ", head_b: "people you know.", head_c: "", sub: "The people already in your life — who you've never found the words for." },
      { icon: "✦", head_a: "Init doesn't create connections. It ", head_b: "reveals them.", head_c: "", sub: "The ones that were always there." }
    ],
    how_eyebrow: "HOW IT WORKS",
    how_h2: "Simple. Private. Powerful.",
    how_sub: "Four steps to finding out what you've always wondered.",
    steps: [
      { title: "Express your interest", desc: "Tell Init who you're thinking about and what you feel — romantic, an apology, a friendship that could be something more." },
      { title: "They never know", desc: "Not even a hint. Your interest is invisible until there's a mutual match. No notifications, no hints, no awkwardness." },
      { title: "If they feel the same", desc: "Only then — you both find out. At the same time. The reveal is simultaneous and mutual." },
      { title: "Your secret stays yours", desc: "If they don't feel the same, nothing happens. No awkward moment. No damaged friendship. Forever private." }
    ],
    privacy_eyebrow: "PRIVACY FIRST",
    privacy_h2: "Your feelings are yours — until the universe decides otherwise.",
    privacy_p: "We built Init from the ground up with one principle: your feelings are your most private thing. We treat them that way.",
    privacy_pts: [
      { icon: "🔒", text: "No one can see that you expressed interest. Not your mutual friends. Not the person themselves." },
      { icon: "🚫", text: "No screenshots of your expression. No leaks. No 'someone told me you liked me...'" },
      { icon: "✨", text: "Init doesn't create awkwardness. It eliminates it." }
    ],
    privacy_cards: [
      { icon: "🛡️", title: "End-to-end private", body: "Interest expressions are encrypted and never revealed unless matched." },
      { icon: "🔑", title: "Zero-knowledge reveal", body: "Even Init can't tell who likes whom until both sides match." },
      { icon: "🗑️", title: "Delete anytime", body: "Remove your interest at any time. Your expression disappears completely." }
    ],
    cats_eyebrow: "INTEREST CATEGORIES",
    cats_h2: "Six ways to express what you feel.",
    cats_sub: "Pick one or more. Init finds overlap on both sides.",
    categories: [
      { emoji: "☕", name: "Hangout", desc: "Want to have a casual time out with someone you know but not sure if they feel the same? Express a Hangout interest and find out." },
      { emoji: "💫", name: "Date", desc: "Been thinking about asking someone out but afraid of making it awkward? Let Init find out." },
      { emoji: "❤️", name: "Love", desc: "Have deep feelings for someone but never found the right moment to say it? Express it here." },
      { emoji: "💍", name: "Marriage", desc: "Ready to take the next step with someone special? See if they're on the same page." },
      { emoji: "🤝", name: "Apology", desc: "Want to reconnect after a falling out? Express your intent — if they want to reconnect too, Init will let you both know." },
      { emoji: "💼", name: "Business", desc: "Interested in working with someone? Find out if they're open to collaboration — no cold pitch needed." }
    ],
    comp_eyebrow: "WHY INIT",
    comp_h2: "Not another dating app.",
    comp_sub: "Init is for the people already in your life.",
    comp_headers: ["Feature", "Other apps", "Init"],
    comp_rows: [
      ["Browse strangers", "✓", "✗"],
      ["For people you already know", "✗", "✓"],
      ["Interest stays private", "✗", "✓"],
      ["Mutual reveal only", "✗", "✓"],
      ["No public profile visible", "✗", "✓"],
      ["Works across contact methods", "✗", "✓"]
    ],
    dl_h2: "Download Init",
    dl_p: "Available on iOS and Android. Beta access available now.",
    dl_google: "Get it on", dl_google2: "Google Play",
    dl_apple: "Download on the", dl_apple2: "App Store",
    dl_coming: "Coming soon",
    faq_eyebrow: "FAQ",
    faq_h2: "Common questions.",
    faqs: [
      { q: "Does the other person know I expressed interest?", a: "No. Your interest is completely invisible to them unless they also express interest in you with at least one overlapping category. Only then are both of you notified simultaneously." },
      { q: "What if they don't feel the same?", a: "Nothing happens. They never know you expressed interest. Your secret stays yours — permanently. No awkward moments, no damaged friendships." },
      { q: "Can I express interest in someone not on Init?", a: "Yes. You can express interest using someone's phone number, email, Instagram, or other contact methods. If they join Init later and feel the same, you'll both be notified." },
      { q: "How does Init match across different contact methods?", a: "Init resolves identities across all linked identifiers. If you add someone by phone and they signed up with Gmail, Init can still detect the mutual match." },
      { q: "Can I delete my interest?", a: "Yes, at any time. If you delete a matched interest, the other person is notified that the connection has ended. Unmatched interests are deleted silently." },
      { q: "Is my data secure?", a: "All personal identifiers (phone, email, social profiles) are encrypted at rest using AES-256-GCM. We never sell your data or show your expressions to anyone." }
    ],
    footer_tagline: "Mutual interest matching. Privately.",
    footer_product: "Product", footer_company: "Company", footer_legal: "Legal",
    f_how: "How it works", f_privacy_p: "Privacy", f_cats: "Categories", f_faq: "FAQ",
    f_about: "About", f_contact: "Contact", f_blog: "Blog", f_careers: "Careers",
    f_pp: "Privacy Policy", f_tos: "Terms of Service", f_cookie: "Cookie Policy",
    footer_copy: "© 2025 Init. All rights reserved."
  },
  hi: {
    nav_home: "होम", nav_how: "यह कैसे काम करता है", nav_privacy: "गोपनीयता",
    nav_faq: "सवाल-जवाब", nav_download: "डाउनलोड",
    hero_eyebrow: "पारस्परिक रुचि मिलान",
    hero_h1_a: "जानें कि क्या भावना ",
    hero_h1_b: "आपसी है",
    hero_h1_c: " — बिना अस्वीकृति के जोखिम के।",
    hero_sub: "आपकी रुचि पूरी तरह निजी रहती है। वे तभी जानेंगे जब वे भी यही महसूस करें।",
    hero_cta1: "ऐप डाउनलोड करें", hero_cta2: "यह कैसे काम करता है",
    hero_tagline: "आपका मेल एक init दूर हो सकता है।",
    carousel_eyebrow: "Init क्यों?",
    carousel_h2: "भावना हमेशा आपसी थी।",
    carousel_sub: "कुछ चीजें अनकही रहना बेहतर होती थीं। अब तक यही आपका एकमात्र विकल्प था।",
    slides: [
      { icon: "✦", head_a: "जानें कि भावना ", head_b: "आपसी है या नहीं", head_c: "", sub: "बिना कभी अस्वीकृति के जोखिम के।" },
      { icon: "🤫", head_a: "कभी किसी को पसंद किया लेकिन ", head_b: "चुप रहे?", head_c: "", sub: "एक गलत कदम सब कुछ बदल सकता है। इसलिए आपने कुछ नहीं कहा।" },
      { icon: "💬", head_a: "सबसे दर्दनाक बात ", head_b: "अस्वीकृति नहीं है।", head_c: "", sub: "वो है जब सालों बाद पता चले कि उनकी भावना भी वही थी।" },
      { icon: "🔒", head_a: "आपकी रुचि पूरी तरह ", head_b: "निजी रहती है।", head_c: "", sub: "वे तभी जानेंगे जब वे भी ऐसा ही महसूस करें। अगर नहीं — आपका रहस्य हमेशा आपका रहेगा।" },
      { icon: "👥", head_a: "अजनबियों के लिए नहीं। ", head_b: "जिन्हें आप जानते हैं", head_c: " उनके लिए।", sub: "वो लोग जो पहले से आपकी जिंदगी में हैं — जिनके लिए आप कभी शब्द नहीं खोज पाए।" },
      { icon: "✦", head_a: "Init रिश्ते नहीं बनाता। यह उन्हें ", head_b: "उजागर करता है।", head_c: "", sub: "जो हमेशा से थे।" }
    ],
    how_eyebrow: "यह कैसे काम करता है",
    how_h2: "सरल। निजी। शक्तिशाली।",
    how_sub: "वो जानने के लिए चार कदम जो आप हमेशा से जानना चाहते थे।",
    steps: [
      { title: "अपनी रुचि व्यक्त करें", desc: "Init को बताएं कि आप किसके बारे में सोच रहे हैं और क्या महसूस करते हैं।" },
      { title: "उन्हें कभी पता नहीं चलेगा", desc: "कोई संकेत नहीं। जब तक मैच न हो तब तक आपकी रुचि अदृश्य है।" },
      { title: "अगर वे भी ऐसा महसूस करें", desc: "तभी — आप दोनों को एक साथ पता चलेगा।" },
      { title: "आपका रहस्य आपका रहेगा", desc: "अगर वे ऐसा नहीं महसूस करते, तो कुछ नहीं होता। हमेशा के लिए निजी।" }
    ],
    privacy_eyebrow: "गोपनीयता पहले",
    privacy_h2: "आपकी भावनाएं आपकी हैं — जब तक ब्रह्मांड तय न करे।",
    privacy_p: "हमने Init को एक सिद्धांत के साथ बनाया है: आपकी भावनाएं आपकी सबसे निजी चीज हैं।",
    privacy_pts: [
      { icon: "🔒", text: "कोई नहीं देख सकता कि आपने रुचि व्यक्त की। न आपके साझा मित्र, न वह व्यक्ति।" },
      { icon: "🚫", text: "कोई स्क्रीनशॉट नहीं, कोई लीक नहीं।" },
      { icon: "✨", text: "Init अजीबपन नहीं बनाता। यह उसे खत्म करता है।" }
    ],
    privacy_cards: [
      { icon: "🛡️", title: "पूरी तरह निजी", body: "रुचि एन्क्रिप्टेड है और मैच होने तक कभी नहीं दिखाई जाती।" },
      { icon: "🔑", title: "शून्य-ज्ञान प्रकटीकरण", body: "Init भी नहीं जान सकता कि कौन किसे पसंद करता है जब तक दोनों मैच न हों।" },
      { icon: "🗑️", title: "कभी भी हटाएं", body: "अपनी रुचि कभी भी हटाएं। यह पूरी तरह गायब हो जाती है।" }
    ],
    cats_eyebrow: "रुचि श्रेणियां",
    cats_h2: "छह तरीके अपनी भावना व्यक्त करने के।",
    cats_sub: "एक या अधिक चुनें। Init दोनों तरफ से ओवरलैप खोजता है।",
    categories: [
      { emoji: "☕", name: "मिलना-जुलना", desc: "किसी के साथ समय बिताना चाहते हैं लेकिन पता नहीं वे भी ऐसा चाहते हैं?" },
      { emoji: "💫", name: "डेट", desc: "किसी को डेट पर बुलाना चाहते हैं पर अजीबपन से डरते हैं?" },
      { emoji: "❤️", name: "प्यार", desc: "किसी के लिए गहरी भावनाएं हैं पर कहने का सही पल नहीं मिला?" },
      { emoji: "💍", name: "विवाह", desc: "किसी खास के साथ अगला कदम उठाने को तैयार हैं?" },
      { emoji: "🤝", name: "माफी", desc: "किसी से दूरी के बाद फिर जुड़ना चाहते हैं?" },
      { emoji: "💼", name: "व्यापार", desc: "किसी के साथ पेशेवर रूप से काम करना चाहते हैं?" }
    ],
    comp_eyebrow: "Init क्यों",
    comp_h2: "यह कोई और डेटिंग ऐप नहीं है।",
    comp_sub: "Init उन लोगों के लिए है जो पहले से आपकी जिंदगी में हैं।",
    comp_headers: ["विशेषता", "अन्य ऐप्स", "Init"],
    comp_rows: [
      ["अजनबियों को ब्राउज़ करें", "✓", "✗"],
      ["जिन्हें आप जानते हैं उनके लिए", "✗", "✓"],
      ["रुचि निजी रहती है", "✗", "✓"],
      ["केवल आपसी प्रकटीकरण", "✗", "✓"],
      ["कोई सार्वजनिक प्रोफ़ाइल नहीं", "✗", "✓"],
      ["सभी संपर्क विधियों पर काम करता है", "✗", "✓"]
    ],
    dl_h2: "Init डाउनलोड करें",
    dl_p: "iOS और Android पर उपलब्ध। अभी बीटा एक्सेस।",
    dl_google: "पर प्राप्त करें", dl_google2: "Google Play",
    dl_apple: "पर डाउनलोड करें", dl_apple2: "App Store",
    dl_coming: "जल्द आ रहा है",
    faq_eyebrow: "सवाल-जवाब",
    faq_h2: "सामान्य प्रश्न।",
    faqs: [
      { q: "क्या दूसरे व्यक्ति को पता चलेगा कि मैंने रुचि व्यक्त की?", a: "नहीं। जब तक वे भी आपमें रुचि व्यक्त न करें, आपकी रुचि उनके लिए पूरी तरह अदृश्य है।" },
      { q: "अगर वे ऐसा नहीं महसूस करते तो क्या होगा?", a: "कुछ नहीं होता। उन्हें कभी पता नहीं चलेगा। आपका रहस्य हमेशा आपका रहेगा।" },
      { q: "क्या मैं किसी ऐसे व्यक्ति में रुचि व्यक्त कर सकता हूं जो Init पर नहीं है?", a: "हां। आप फोन नंबर, ईमेल, Instagram आदि से रुचि व्यक्त कर सकते हैं।" },
      { q: "Init विभिन्न संपर्क विधियों से कैसे मैच करता है?", a: "Init सभी लिंक्ड पहचानकर्ताओं में पहचान को हल करता है।" },
      { q: "क्या मैं अपनी रुचि हटा सकता हूं?", a: "हां, किसी भी समय।" },
      { q: "क्या मेरा डेटा सुरक्षित है?", a: "सभी व्यक्तिगत पहचानकर्ता AES-256-GCM से एन्क्रिप्टेड हैं।" }
    ],
    footer_tagline: "आपसी रुचि मिलान। निजी तरीके से।",
    footer_product: "उत्पाद", footer_company: "कंपनी", footer_legal: "कानूनी",
    f_how: "यह कैसे काम करता है", f_privacy_p: "गोपनीयता", f_cats: "श्रेणियां", f_faq: "सवाल-जवाब",
    f_about: "हमारे बारे में", f_contact: "संपर्क", f_blog: "ब्लॉग", f_careers: "करियर",
    f_pp: "गोपनीयता नीति", f_tos: "सेवा की शर्तें", f_cookie: "कुकी नीति",
    footer_copy: "© 2025 Init. सर्वाधिकार सुरक्षित।"
  },
  fr: {
    nav_home: "Accueil", nav_how: "Comment ça marche", nav_privacy: "Confidentialité",
    nav_faq: "FAQ", nav_download: "Télécharger",
    hero_eyebrow: "CORRESPONDANCE D'INTÉRÊTS MUTUELLE",
    hero_h1_a: "Découvrez si le sentiment est ",
    hero_h1_b: "réciproque",
    hero_h1_c: " — sans jamais risquer le rejet.",
    hero_sub: "Votre intérêt reste totalement privé. L'autre personne ne le sait que si elle ressent la même chose.",
    hero_cta1: "Télécharger l'app", hero_cta2: "Comment ça marche",
    hero_tagline: "Votre match pourrait être à un init de distance.",
    carousel_eyebrow: "POURQUOI INIT",
    carousel_h2: "Le sentiment était toujours réciproque.",
    carousel_sub: "Certaines choses valaient mieux ne pas être dites. Jusqu'ici, c'était votre seule option.",
    slides: [
      { icon: "✦", head_a: "Découvrez si le sentiment est ", head_b: "réciproque", head_c: "", sub: "Sans jamais risquer le rejet." },
      { icon: "🤫", head_a: "Vous avez aimé quelqu'un mais ", head_b: "vous vous êtes tu?", head_c: "", sub: "Un faux pas change tout. Alors vous n'avez rien dit." },
      { icon: "💬", head_a: "La chose la plus douloureuse n'est pas ", head_b: "le rejet.", head_c: "", sub: "C'est de découvrir des années plus tard qu'ils ressentaient exactement la même chose." },
      { icon: "🔒", head_a: "Votre intérêt reste complètement ", head_b: "privé.", head_c: "", sub: "L'autre ne le sait que s'ils ressentent la même chose. Sinon — votre secret reste le vôtre." },
      { icon: "👥", head_a: "Pas pour des inconnus. Pour ", head_b: "les gens que vous connaissez.", head_c: "", sub: "Les personnes déjà dans votre vie — pour qui vous n'avez jamais trouvé les mots." },
      { icon: "✦", head_a: "Init ne crée pas des connexions. Il ", head_b: "les révèle.", head_c: "", sub: "Celles qui ont toujours été là." }
    ],
    how_eyebrow: "COMMENT ÇA MARCHE",
    how_h2: "Simple. Privé. Puissant.",
    how_sub: "Quatre étapes pour découvrir ce que vous vous êtes toujours demandé.",
    steps: [
      { title: "Exprimez votre intérêt", desc: "Dites à Init qui vous pensez et ce que vous ressentez." },
      { title: "Ils ne le sauront jamais", desc: "Pas même un indice. Votre intérêt est invisible jusqu'à une correspondance mutuelle." },
      { title: "S'ils ressentent la même chose", desc: "Seulement alors — vous le découvrez tous les deux. En même temps." },
      { title: "Votre secret reste le vôtre", desc: "S'ils ne ressentent pas la même chose, rien ne se passe. À jamais privé." }
    ],
    privacy_eyebrow: "CONFIDENTIALITÉ D'ABORD",
    privacy_h2: "Vos sentiments vous appartiennent — jusqu'à ce que l'univers en décide autrement.",
    privacy_p: "Nous avons construit Init avec un principe : vos sentiments sont ce que vous avez de plus privé.",
    privacy_pts: [
      { icon: "🔒", text: "Personne ne peut voir que vous avez exprimé un intérêt. Ni vos amis communs, ni la personne elle-même." },
      { icon: "🚫", text: "Pas de captures d'écran. Pas de fuites. Pas de 'quelqu'un m'a dit que tu m'aimais...'" },
      { icon: "✨", text: "Init ne crée pas de gêne. Il l'élimine." }
    ],
    privacy_cards: [
      { icon: "🛡️", title: "Totalement privé", body: "Les intérêts sont chiffrés et jamais révélés sans correspondance." },
      { icon: "🔑", title: "Révélation zéro-connaissance", body: "Même Init ne peut pas savoir qui aime qui avant la correspondance." },
      { icon: "🗑️", title: "Supprimez à tout moment", body: "Retirez votre intérêt à tout moment. Il disparaît complètement." }
    ],
    cats_eyebrow: "CATÉGORIES D'INTÉRÊT",
    cats_h2: "Six façons d'exprimer ce que vous ressentez.",
    cats_sub: "Choisissez-en une ou plusieurs. Init trouve les points communs des deux côtés.",
    categories: [
      { emoji: "☕", name: "Sortie amicale", desc: "Envie de passer du temps avec quelqu'un sans savoir s'il ressent la même chose?" },
      { emoji: "💫", name: "Rendez-vous", desc: "Vous pensez à inviter quelqu'un mais peur de créer une gêne?" },
      { emoji: "❤️", name: "Amour", desc: "Vous avez des sentiments profonds mais n'avez jamais trouvé le bon moment?" },
      { emoji: "💍", name: "Mariage", desc: "Prêt à franchir le pas avec quelqu'un de spécial?" },
      { emoji: "🤝", name: "Excuses", desc: "Vous voulez vous reconnecter après une brouille?" },
      { emoji: "💼", name: "Business", desc: "Intéressé à travailler avec quelqu'un professionnellement?" }
    ],
    comp_eyebrow: "POURQUOI INIT",
    comp_h2: "Pas une autre application de rencontres.",
    comp_sub: "Init est pour les personnes déjà dans votre vie.",
    comp_headers: ["Fonctionnalité", "Autres apps", "Init"],
    comp_rows: [
      ["Parcourir des inconnus", "✓", "✗"],
      ["Pour les gens que vous connaissez", "✗", "✓"],
      ["Intérêt reste privé", "✗", "✓"],
      ["Révélation mutuelle seulement", "✗", "✓"],
      ["Pas de profil public visible", "✗", "✓"],
      ["Fonctionne avec tous les contacts", "✗", "✓"]
    ],
    dl_h2: "Télécharger Init",
    dl_p: "Disponible sur iOS et Android. Accès bêta disponible maintenant.",
    dl_google: "Disponible sur", dl_google2: "Google Play",
    dl_apple: "Télécharger sur l'", dl_apple2: "App Store",
    dl_coming: "Bientôt disponible",
    faq_eyebrow: "FAQ",
    faq_h2: "Questions fréquentes.",
    faqs: [
      { q: "L'autre personne sait-elle que j'ai exprimé un intérêt?", a: "Non. Votre intérêt est complètement invisible jusqu'à une correspondance mutuelle." },
      { q: "Et s'ils ne ressentent pas la même chose?", a: "Rien ne se passe. Ils ne sauront jamais. Votre secret reste le vôtre." },
      { q: "Puis-je exprimer un intérêt pour quelqu'un qui n'est pas sur Init?", a: "Oui. Vous pouvez utiliser le numéro de téléphone, l'email, Instagram, etc." },
      { q: "Comment Init fait-il correspondre différentes méthodes de contact?", a: "Init résout les identités sur tous les identifiants liés." },
      { q: "Puis-je supprimer mon intérêt?", a: "Oui, à tout moment." },
      { q: "Mes données sont-elles sécurisées?", a: "Tous les identifiants personnels sont chiffrés avec AES-256-GCM." }
    ],
    footer_tagline: "Correspondance d'intérêts mutuelle. En toute confidentialité.",
    footer_product: "Produit", footer_company: "Entreprise", footer_legal: "Légal",
    f_how: "Comment ça marche", f_privacy_p: "Confidentialité", f_cats: "Catégories", f_faq: "FAQ",
    f_about: "À propos", f_contact: "Contact", f_blog: "Blog", f_careers: "Carrières",
    f_pp: "Politique de confidentialité", f_tos: "Conditions d'utilisation", f_cookie: "Politique de cookies",
    footer_copy: "© 2025 Init. Tous droits réservés."
  },
  es: {
    nav_home: "Inicio", nav_how: "Cómo funciona", nav_privacy: "Privacidad",
    nav_faq: "FAQ", nav_download: "Descargar",
    hero_eyebrow: "COINCIDENCIA MUTUA DE INTERESES",
    hero_h1_a: "Descubre si el sentimiento es ",
    hero_h1_b: "mutuo",
    hero_h1_c: " — sin arriesgar nunca el rechazo.",
    hero_sub: "Tu interés es completamente privado. Solo lo sabrán si sienten lo mismo.",
    hero_cta1: "Descargar la app", hero_cta2: "Cómo funciona",
    hero_tagline: "Tu match podría estar a un init de distancia.",
    carousel_eyebrow: "POR QUÉ INIT",
    carousel_h2: "El sentimiento siempre fue mutuo.",
    carousel_sub: "Algunas cosas era mejor no decirlas. Hasta ahora, esa era tu única opción.",
    slides: [
      { icon: "✦", head_a: "Descubre si el sentimiento es ", head_b: "mutuo", head_c: "", sub: "Sin arriesgar nunca el rechazo." },
      { icon: "🤫", head_a: "¿Alguna vez te gustó alguien pero ", head_b: "te quedaste callado?", head_c: "", sub: "Un movimiento en falso cambia todo. Así que no dijiste nada." },
      { icon: "💬", head_a: "Lo más doloroso no es ", head_b: "el rechazo.", head_c: "", sub: "Es descubrir años después que ellos sentían exactamente lo mismo." },
      { icon: "🔒", head_a: "Tu interés es completamente ", head_b: "privado.", head_c: "", sub: "Solo lo sabrán si sienten lo mismo. Si no — tu secreto es tuyo." },
      { icon: "👥", head_a: "No para desconocidos. Para ", head_b: "personas que conoces.", head_c: "", sub: "Las personas ya en tu vida — para quienes nunca encontraste las palabras." },
      { icon: "✦", head_a: "Init no crea conexiones. Las ", head_b: "revela.", head_c: "", sub: "Las que siempre estuvieron ahí." }
    ],
    how_eyebrow: "CÓMO FUNCIONA",
    how_h2: "Simple. Privado. Poderoso.",
    how_sub: "Cuatro pasos para descubrir lo que siempre te has preguntado.",
    steps: [
      { title: "Expresa tu interés", desc: "Cuéntale a Init en quién estás pensando y qué sientes." },
      { title: "Ellos nunca lo sabrán", desc: "Ni siquiera una pista. Tu interés es invisible hasta un match mutuo." },
      { title: "Si sienten lo mismo", desc: "Solo entonces — los dos lo descubren. Al mismo tiempo." },
      { title: "Tu secreto es tuyo", desc: "Si no sienten lo mismo, no pasa nada. Para siempre privado." }
    ],
    privacy_eyebrow: "PRIVACIDAD PRIMERO",
    privacy_h2: "Tus sentimientos son tuyos — hasta que el universo decida otra cosa.",
    privacy_p: "Construimos Init con un principio: tus sentimientos son tu cosa más privada.",
    privacy_pts: [
      { icon: "🔒", text: "Nadie puede ver que expresaste interés. Ni tus amigos en común, ni la persona misma." },
      { icon: "🚫", text: "Sin capturas de pantalla. Sin filtraciones." },
      { icon: "✨", text: "Init no crea incomodidad. La elimina." }
    ],
    privacy_cards: [
      { icon: "🛡️", title: "Totalmente privado", body: "Los intereses están cifrados y nunca se revelan sin un match." },
      { icon: "🔑", title: "Revelación de conocimiento cero", body: "Ni siquiera Init puede saber quién le gusta a quién hasta el match." },
      { icon: "🗑️", title: "Elimina en cualquier momento", body: "Retira tu interés en cualquier momento. Desaparece completamente." }
    ],
    cats_eyebrow: "CATEGORÍAS DE INTERÉS",
    cats_h2: "Seis formas de expresar lo que sientes.",
    cats_sub: "Elige una o más. Init encuentra coincidencias en ambos lados.",
    categories: [
      { emoji: "☕", name: "Salida casual", desc: "¿Quieres pasar tiempo con alguien pero no sabes si siente lo mismo?" },
      { emoji: "💫", name: "Cita", desc: "¿Estás pensando en invitar a alguien pero tienes miedo de crear incomodidad?" },
      { emoji: "❤️", name: "Amor", desc: "¿Tienes sentimientos profundos pero nunca encontraste el momento?" },
      { emoji: "💍", name: "Matrimonio", desc: "¿Listo para dar el siguiente paso con alguien especial?" },
      { emoji: "🤝", name: "Disculpa", desc: "¿Quieres reconectarte con alguien después de una pelea?" },
      { emoji: "💼", name: "Negocios", desc: "¿Interesado en trabajar con alguien profesionalmente?" }
    ],
    comp_eyebrow: "POR QUÉ INIT",
    comp_h2: "No es otra app de citas.",
    comp_sub: "Init es para las personas ya en tu vida.",
    comp_headers: ["Característica", "Otras apps", "Init"],
    comp_rows: [
      ["Explorar desconocidos", "✓", "✗"],
      ["Para personas que conoces", "✗", "✓"],
      ["Interés permanece privado", "✗", "✓"],
      ["Solo revelación mutua", "✗", "✓"],
      ["Sin perfil público visible", "✗", "✓"],
      ["Funciona con todos los contactos", "✗", "✓"]
    ],
    dl_h2: "Descargar Init",
    dl_p: "Disponible en iOS y Android. Acceso beta disponible ahora.",
    dl_google: "Disponible en", dl_google2: "Google Play",
    dl_apple: "Descargar en el", dl_apple2: "App Store",
    dl_coming: "Próximamente",
    faq_eyebrow: "FAQ",
    faq_h2: "Preguntas frecuentes.",
    faqs: [
      { q: "¿La otra persona sabe que expresé interés?", a: "No. Tu interés es completamente invisible hasta un match mutuo." },
      { q: "¿Qué pasa si no sienten lo mismo?", a: "No pasa nada. Nunca lo sabrán. Tu secreto es tuyo para siempre." },
      { q: "¿Puedo expresar interés por alguien que no está en Init?", a: "Sí. Puedes usar número de teléfono, email, Instagram, etc." },
      { q: "¿Cómo hace Init para encontrar matches entre diferentes métodos de contacto?", a: "Init resuelve identidades en todos los identificadores vinculados." },
      { q: "¿Puedo eliminar mi interés?", a: "Sí, en cualquier momento." },
      { q: "¿Están seguros mis datos?", a: "Todos los identificadores personales están cifrados con AES-256-GCM." }
    ],
    footer_tagline: "Coincidencia mutua de intereses. Privadamente.",
    footer_product: "Producto", footer_company: "Empresa", footer_legal: "Legal",
    f_how: "Cómo funciona", f_privacy_p: "Privacidad", f_cats: "Categorías", f_faq: "FAQ",
    f_about: "Acerca de", f_contact: "Contacto", f_blog: "Blog", f_careers: "Carreras",
    f_pp: "Política de privacidad", f_tos: "Términos de servicio", f_cookie: "Política de cookies",
    footer_copy: "© 2025 Init. Todos los derechos reservados."
  },
  it: {
    nav_home: "Home", nav_how: "Come funziona", nav_privacy: "Privacy",
    nav_faq: "FAQ", nav_download: "Scarica",
    hero_eyebrow: "CORRISPONDENZA MUTUA DEGLI INTERESSI",
    hero_h1_a: "Scopri se il sentimento è ",
    hero_h1_b: "reciproco",
    hero_h1_c: " — senza mai rischiare il rifiuto.",
    hero_sub: "Il tuo interesse rimane completamente privato. Lo scopriranno solo se provano lo stesso.",
    hero_cta1: "Scarica l'app", hero_cta2: "Come funziona",
    hero_tagline: "Il tuo match potrebbe essere a un init di distanza.",
    carousel_eyebrow: "PERCHÉ INIT",
    carousel_h2: "Il sentimento era sempre reciproco.",
    carousel_sub: "Alcune cose era meglio non dirle. Finora era l'unica opzione.",
    slides: [
      { icon: "✦", head_a: "Scopri se il sentimento è ", head_b: "reciproco", head_c: "", sub: "Senza mai rischiare il rifiuto." },
      { icon: "🤫", head_a: "Hai mai avuto una crocetta ma ", head_b: "sei rimasto in silenzio?", head_c: "", sub: "Una mossa sbagliata cambia tutto. Così non hai detto niente." },
      { icon: "💬", head_a: "La cosa più dolorosa non è ", head_b: "il rifiuto.", head_c: "", sub: "È scoprire anni dopo che provavano esattamente lo stesso." },
      { icon: "🔒", head_a: "Il tuo interesse rimane completamente ", head_b: "privato.", head_c: "", sub: "Lo scopriranno solo se provano lo stesso. Altrimenti — il tuo segreto rimane tuo." },
      { icon: "👥", head_a: "Non per sconosciuti. Per ", head_b: "persone che conosci.", head_c: "", sub: "Le persone già nella tua vita — per cui non hai mai trovato le parole." },
      { icon: "✦", head_a: "Init non crea connessioni. Le ", head_b: "rivela.", head_c: "", sub: "Quelle che erano sempre lì." }
    ],
    how_eyebrow: "COME FUNZIONA",
    how_h2: "Semplice. Privato. Potente.",
    how_sub: "Quattro passi per scoprire quello che hai sempre voluto sapere.",
    steps: [
      { title: "Esprimi il tuo interesse", desc: "Dì a Init a chi stai pensando e cosa provi." },
      { title: "Non lo sapranno mai", desc: "Nemmeno un indizio. Il tuo interesse è invisibile fino a un match reciproco." },
      { title: "Se provano lo stesso", desc: "Solo allora — lo scoprite entrambi. Allo stesso tempo." },
      { title: "Il tuo segreto rimane tuo", desc: "Se non provano lo stesso, non succede nulla. Per sempre privato." }
    ],
    privacy_eyebrow: "PRIVACY PRIMA",
    privacy_h2: "I tuoi sentimenti sono tuoi — finché l'universo non decide diversamente.",
    privacy_p: "Abbiamo costruito Init con un principio: i tuoi sentimenti sono la tua cosa più privata.",
    privacy_pts: [
      { icon: "🔒", text: "Nessuno può vedere che hai espresso interesse. Né i tuoi amici in comune, né la persona stessa." },
      { icon: "🚫", text: "Nessuno screenshot. Nessuna fuga di notizie." },
      { icon: "✨", text: "Init non crea imbarazzo. Lo elimina." }
    ],
    privacy_cards: [
      { icon: "🛡️", title: "Totalmente privato", body: "Gli interessi sono criptati e non vengono mai rivelati senza un match." },
      { icon: "🔑", title: "Rivelazione a conoscenza zero", body: "Anche Init non può sapere chi piace a chi fino al match." },
      { icon: "🗑️", title: "Elimina in qualsiasi momento", body: "Ritira il tuo interesse in qualsiasi momento. Scompare completamente." }
    ],
    cats_eyebrow: "CATEGORIE DI INTERESSE",
    cats_h2: "Sei modi per esprimere quello che provi.",
    cats_sub: "Scegline uno o più. Init trova la sovrapposizione da entrambe le parti.",
    categories: [
      { emoji: "☕", name: "Uscita casual", desc: "Vuoi passare del tempo con qualcuno ma non sai se prova lo stesso?" },
      { emoji: "💫", name: "Appuntamento", desc: "Stai pensando di invitare qualcuno ma hai paura di creare imbarazzo?" },
      { emoji: "❤️", name: "Amore", desc: "Hai sentimenti profondi per qualcuno ma non hai mai trovato il momento giusto?" },
      { emoji: "💍", name: "Matrimonio", desc: "Pronto a fare il passo successivo con qualcuno di speciale?" },
      { emoji: "🤝", name: "Scuse", desc: "Vuoi riconnetterti con qualcuno dopo un litigio?" },
      { emoji: "💼", name: "Business", desc: "Interessato a lavorare con qualcuno professionalmente?" }
    ],
    comp_eyebrow: "PERCHÉ INIT",
    comp_h2: "Non è l'ennesima app di incontri.",
    comp_sub: "Init è per le persone già nella tua vita.",
    comp_headers: ["Funzionalità", "Altre app", "Init"],
    comp_rows: [
      ["Sfoglia sconosciuti", "✓", "✗"],
      ["Per persone che conosci", "✗", "✓"],
      ["Interesse rimane privato", "✗", "✓"],
      ["Solo rivelazione reciproca", "✗", "✓"],
      ["Nessun profilo pubblico visibile", "✗", "✓"],
      ["Funziona con tutti i contatti", "✗", "✓"]
    ],
    dl_h2: "Scarica Init",
    dl_p: "Disponibile su iOS e Android. Accesso beta disponibile ora.",
    dl_google: "Disponibile su", dl_google2: "Google Play",
    dl_apple: "Scarica su", dl_apple2: "App Store",
    dl_coming: "Prossimamente",
    faq_eyebrow: "FAQ",
    faq_h2: "Domande frequenti.",
    faqs: [
      { q: "L'altra persona sa che ho espresso interesse?", a: "No. Il tuo interesse è completamente invisibile fino a un match reciproco." },
      { q: "E se non provano lo stesso?", a: "Non succede nulla. Non lo sapranno mai. Il tuo segreto rimane tuo per sempre." },
      { q: "Posso esprimere interesse per qualcuno che non è su Init?", a: "Sì. Puoi usare numero di telefono, email, Instagram, ecc." },
      { q: "Come fa Init a trovare match tra diversi metodi di contatto?", a: "Init risolve le identità su tutti gli identificatori collegati." },
      { q: "Posso eliminare il mio interesse?", a: "Sì, in qualsiasi momento." },
      { q: "I miei dati sono al sicuro?", a: "Tutti gli identificatori personali sono criptati con AES-256-GCM." }
    ],
    footer_tagline: "Corrispondenza mutua degli interessi. Privatamente.",
    footer_product: "Prodotto", footer_company: "Azienda", footer_legal: "Legale",
    f_how: "Come funziona", f_privacy_p: "Privacy", f_cats: "Categorie", f_faq: "FAQ",
    f_about: "Chi siamo", f_contact: "Contatto", f_blog: "Blog", f_careers: "Carriere",
    f_pp: "Informativa sulla privacy", f_tos: "Termini di servizio", f_cookie: "Politica sui cookie",
    footer_copy: "© 2025 Init. Tutti i diritti riservati."
  },
  zh: {
    nav_home: "首页", nav_how: "工作原理", nav_privacy: "隐私",
    nav_faq: "常见问题", nav_download: "下载",
    hero_eyebrow: "匿名兴趣匹配",
    hero_h1_a: "发现感情是否",
    hero_h1_b: "相互的",
    hero_h1_c: "——永不冒险被拒绝。",
    hero_sub: "您的兴趣完全保密。只有当对方也有同感时，他们才会知道。",
    hero_cta1: "下载应用", hero_cta2: "工作原理",
    hero_tagline: "您的缘分可能只差一个init。",
    carousel_eyebrow: "为什么选择INIT",
    carousel_h2: "感情一直是相互的。",
    carousel_sub: "有些事情最好不说。直到现在，这是您唯一的选择。",
    slides: [
      { icon: "✦", head_a: "发现感情是否", head_b: "相互的", head_c: "", sub: "永不冒险被拒绝。" },
      { icon: "🤫", head_a: "您曾喜欢某人但", head_b: "保持沉默?", head_c: "", sub: "一步走错，一切都变了。所以您什么都没说。" },
      { icon: "💬", head_a: "最痛苦的事不是", head_b: "被拒绝。", head_c: "", sub: "而是多年后发现他们的感受与您完全相同。" },
      { icon: "🔒", head_a: "您的兴趣完全", head_b: "保密。", head_c: "", sub: "只有当他们也有同感时才会知道。如果没有——您的秘密永远是您的。" },
      { icon: "👥", head_a: "不是为陌生人。而是为", head_b: "您认识的人。", head_c: "", sub: "已经在您生活中的人——您从未找到语言表达的人。" },
      { icon: "✦", head_a: "Init不创造联系。它", head_b: "揭示它们。", head_c: "", sub: "那些一直存在的联系。" }
    ],
    how_eyebrow: "工作原理",
    how_h2: "简单。私密。强大。",
    how_sub: "四个步骤发现您一直想知道的事情。",
    steps: [
      { title: "表达您的兴趣", desc: "告诉Init您在想谁以及您的感受。" },
      { title: "他们永远不会知道", desc: "连一点暗示都没有。您的兴趣是不可见的，直到产生相互匹配。" },
      { title: "如果他们有同感", desc: "只有那时——你们两个同时发现。" },
      { title: "您的秘密永远是您的", desc: "如果他们没有同感，什么都不会发生。永远保密。" }
    ],
    privacy_eyebrow: "隐私优先",
    privacy_h2: "您的感情是您的——直到宇宙另有决定。",
    privacy_p: "我们以一个原则构建Init：您的感情是您最私密的事情。",
    privacy_pts: [
      { icon: "🔒", text: "没有人能看到您表达了兴趣。不是您的共同朋友，也不是那个人本身。" },
      { icon: "🚫", text: "没有截图。没有泄露。" },
      { icon: "✨", text: "Init不制造尴尬。它消除尴尬。" }
    ],
    privacy_cards: [
      { icon: "🛡️", title: "完全私密", body: "兴趣被加密，在匹配之前永远不会被揭示。" },
      { icon: "🔑", title: "零知识揭示", body: "即使Init也无法知道谁喜欢谁，直到双方匹配。" },
      { icon: "🗑️", title: "随时删除", body: "随时撤回您的兴趣。它将完全消失。" }
    ],
    cats_eyebrow: "兴趣类别",
    cats_h2: "六种表达感情的方式。",
    cats_sub: "选择一个或多个。Init从两边找到重叠。",
    categories: [
      { emoji: "☕", name: "约会出行", desc: "想和某人共度时光但不确定他们是否有同感?" },
      { emoji: "💫", name: "约会", desc: "想约某人但害怕制造尴尬?" },
      { emoji: "❤️", name: "爱情", desc: "对某人有深厚感情但从未找到合适时机说出来?" },
      { emoji: "💍", name: "婚姻", desc: "准备好和特别的人迈出下一步了吗?" },
      { emoji: "🤝", name: "道歉", desc: "想在争吵后与某人重新联系?" },
      { emoji: "💼", name: "商业", desc: "有兴趣与某人专业合作?" }
    ],
    comp_eyebrow: "为什么选择INIT",
    comp_h2: "不是另一个约会应用。",
    comp_sub: "Init是为已经在您生活中的人。",
    comp_headers: ["功能", "其他应用", "Init"],
    comp_rows: [
      ["浏览陌生人", "✓", "✗"],
      ["为您认识的人", "✗", "✓"],
      ["兴趣保持私密", "✗", "✓"],
      ["仅相互揭示", "✗", "✓"],
      ["无公开可见档案", "✗", "✓"],
      ["跨所有联系方式工作", "✗", "✓"]
    ],
    dl_h2: "下载Init",
    dl_p: "适用于iOS和Android。现在可以进行Beta测试。",
    dl_google: "在", dl_google2: "Google Play上获取",
    dl_apple: "在", dl_apple2: "App Store下载",
    dl_coming: "即将推出",
    faq_eyebrow: "常见问题",
    faq_h2: "常见问题。",
    faqs: [
      { q: "对方知道我表达了兴趣吗?", a: "不知道。您的兴趣对他们完全不可见，直到产生相互匹配。" },
      { q: "如果他们没有同感怎么办?", a: "什么都不会发生。他们永远不会知道。您的秘密永远是您的。" },
      { q: "我可以对不在Init上的人表达兴趣吗?", a: "可以。您可以使用电话号码、电子邮件、Instagram等。" },
      { q: "Init如何在不同联系方式之间匹配?", a: "Init解析所有链接标识符的身份。" },
      { q: "我可以删除我的兴趣吗?", a: "可以，随时都可以。" },
      { q: "我的数据安全吗?", a: "所有个人标识符都使用AES-256-GCM加密。" }
    ],
    footer_tagline: "匿名兴趣匹配。私密地。",
    footer_product: "产品", footer_company: "公司", footer_legal: "法律",
    f_how: "工作原理", f_privacy_p: "隐私", f_cats: "类别", f_faq: "常见问题",
    f_about: "关于我们", f_contact: "联系", f_blog: "博客", f_careers: "招聘",
    f_pp: "隐私政策", f_tos: "服务条款", f_cookie: "Cookie政策",
    footer_copy: "© 2025 Init. 版权所有。"
  }
};

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "zh", label: "中文", flag: "🇨🇳" }
];

/* ── STATE ────────────────────────────────────────── */
let currentLang = localStorage.getItem("lang") || "en";
let currentTheme = localStorage.getItem("theme") || "dark";
let currentSlide = 0;
let carouselTimer = null;
let isCarouselPaused = false;

/* ── INIT ─────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(currentTheme);
  renderPage(currentLang);
  setupCarousel();
  setupThemeSwitcher();
  setupLangSwitcher();
  setupScrollReveal();
  setupMobileMenu();
  setupDropdownClose();
  startCarouselTimer();
});

/* ── THEME ────────────────────────────────────────── */
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  document.querySelectorAll(".theme-option").forEach(el => {
    el.classList.toggle("active", el.dataset.theme === theme);
  });
  const btn = document.getElementById("themeBtnLabel");
  const icons = { dark: "🌙", light: "☀️", init: "✦" };
  if (btn) btn.textContent = icons[theme] + " " + theme.charAt(0).toUpperCase() + theme.slice(1);
}

/* ── LANGUAGE ─────────────────────────────────────── */
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  renderPage(lang);
  document.querySelectorAll(".lang-option").forEach(el => {
    el.classList.toggle("active", el.dataset.lang === lang);
  });
  const chosen = languages.find(l => l.code === lang);
  const btn = document.getElementById("langBtnLabel");
  if (btn && chosen) btn.textContent = chosen.flag + " " + chosen.label;
}

/* ── RENDER ───────────────────────────────────────── */
function renderPage(lang) {
  const t = translations[lang] || translations.en;

  // Nav
  setText("nav_home", t.nav_home);
  setText("nav_how", t.nav_how);
  setText("nav_privacy", t.nav_privacy);
  setText("nav_faq", t.nav_faq);
  setText("nav_download", t.nav_download);

  // Hero
  setText("hero_eyebrow", t.hero_eyebrow);
  const h1 = document.getElementById("hero_h1");
  if (h1) h1.innerHTML = t.hero_h1_a + `<span class="highlight">${t.hero_h1_b}</span>` + t.hero_h1_c;
  setText("hero_sub", t.hero_sub);
  setText("hero_cta1", t.hero_cta1);
  setText("hero_cta2", t.hero_cta2);
  setText("hero_tagline", t.hero_tagline);

  // Carousel section
  setText("carousel_eyebrow", t.carousel_eyebrow);
  setText("carousel_h2", t.carousel_h2);
  setText("carousel_sub", t.carousel_sub);
  renderCarouselSlides(t.slides);

  // How it works
  setText("how_eyebrow", t.how_eyebrow);
  setText("how_h2", t.how_h2);
  setText("how_sub", t.how_sub);
  renderSteps(t.steps);

  // Privacy
  setText("privacy_eyebrow", t.privacy_eyebrow);
  setText("privacy_h2", t.privacy_h2);
  setText("privacy_p", t.privacy_p);
  renderPrivacyPoints(t.privacy_pts);
  renderPrivacyCards(t.privacy_cards);

  // Categories
  setText("cats_eyebrow", t.cats_eyebrow);
  setText("cats_h2", t.cats_h2);
  setText("cats_sub", t.cats_sub);
  renderCategories(t.categories);

  // Comparison
  setText("comp_eyebrow", t.comp_eyebrow);
  setText("comp_h2", t.comp_h2);
  setText("comp_sub", t.comp_sub);
  renderComparison(t.comp_headers, t.comp_rows);

  // Download
  setText("dl_h2", t.dl_h2);
  setText("dl_p", t.dl_p);
  setText("dl_google", t.dl_google);
  setText("dl_google2", t.dl_google2);
  setText("dl_apple", t.dl_apple);
  setText("dl_apple2", t.dl_apple2);
  setAll(".coming-soon-badge", t.dl_coming);

  // FAQ
  setText("faq_eyebrow", t.faq_eyebrow);
  setText("faq_h2", t.faq_h2);
  renderFAQ(t.faqs);

  // Footer
  setText("footer_tagline", t.footer_tagline);
  setText("footer_product", t.footer_product);
  setText("footer_company", t.footer_company);
  setText("footer_legal", t.footer_legal);
  setText("f_how", t.f_how); setText("f_privacy_p", t.f_privacy_p);
  setText("f_cats", t.f_cats); setText("f_faq", t.f_faq);
  setText("f_about", t.f_about); setText("f_contact", t.f_contact);
  setText("f_blog", t.f_blog); setText("f_careers", t.f_careers);
  setText("f_pp", t.f_pp); setText("f_tos", t.f_tos); setText("f_cookie", t.f_cookie);
  setText("footer_copy", t.footer_copy);
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el && val !== undefined) el.textContent = val;
}
function setAll(sel, val) {
  document.querySelectorAll(sel).forEach(el => el.textContent = val);
}

/* ── RENDER HELPERS ───────────────────────────────── */
function renderCarouselSlides(slides) {
  const track = document.getElementById("carouselTrack");
  if (!track) return;
  track.innerHTML = slides.map((s, i) => `
    <div class="carousel-slide" aria-hidden="${i !== currentSlide}">
      <div class="slide-icon">${s.icon}</div>
      <h3 class="slide-head">${s.head_a}<span class="highlight">${s.head_b}</span>${s.head_c}</h3>
      <p class="slide-sub">${s.sub}</p>
    </div>
  `).join("");
  goToSlide(currentSlide, false);
  renderDots(slides.length);
}

function renderSteps(steps) {
  const el = document.getElementById("stepsGrid");
  if (!el) return;
  el.innerHTML = steps.map((s, i) => `
    <div class="step-card reveal">
      <div class="step-number">${i + 1}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>
  `).join("");
  observeReveal();
}

function renderPrivacyPoints(pts) {
  const el = document.getElementById("privacyPoints");
  if (!el) return;
  el.innerHTML = pts.map(p => `
    <div class="privacy-point">
      <div class="privacy-point-icon">${p.icon}</div>
      <p class="privacy-point-text">${p.text}</p>
    </div>
  `).join("");
}

function renderPrivacyCards(cards) {
  const el = document.getElementById("privacyCards");
  if (!el) return;
  el.innerHTML = cards.map(c => `
    <div class="privacy-card reveal">
      <div class="privacy-card-icon">${c.icon}</div>
      <div class="privacy-card-content">
        <h4>${c.title}</h4>
        <p>${c.body}</p>
      </div>
    </div>
  `).join("");
  observeReveal();
}

function renderCategories(cats) {
  const el = document.getElementById("categoriesGrid");
  if (!el) return;
  el.innerHTML = cats.map(c => `
    <div class="category-card reveal">
      <div class="category-emoji">${c.emoji}</div>
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
    </div>
  `).join("");
  observeReveal();
}

function renderComparison(headers, rows) {
  const el = document.getElementById("comparisonTable");
  if (!el) return;
  el.innerHTML = `
    <div class="comparison-header">
      <div>${headers[0]}</div>
      <div>${headers[1]}</div>
      <div class="col-init">${headers[2]}</div>
    </div>
    ${rows.map(r => `
      <div class="comparison-row">
        <div class="col-feature">${r[0]}</div>
        <div>${r[1] === "✓" ? '<span class="check">✓</span>' : '<span class="cross">✗</span>'}</div>
        <div class="col-init">${r[2] === "✓" ? '<span class="check">✓</span>' : '<span class="cross">✗</span>'}</div>
      </div>
    `).join("")}
  `;
}

function renderFAQ(faqs) {
  const el = document.getElementById("faqList");
  if (!el) return;
  el.innerHTML = faqs.map((f, i) => `
    <div class="faq-item" data-index="${i}">
      <div class="faq-question">
        <span>${f.q}</span>
        <span class="faq-arrow">▼</span>
      </div>
      <div class="faq-answer">${f.a}</div>
    </div>
  `).join("");
  setupFAQ();
}

/* ── CAROUSEL ─────────────────────────────────────── */
function setupCarousel() {
  document.getElementById("prevBtn")?.addEventListener("click", () => {
    const t = translations[currentLang] || translations.en;
    currentSlide = (currentSlide - 1 + t.slides.length) % t.slides.length;
    goToSlide(currentSlide);
    resetTimer();
  });
  document.getElementById("nextBtn")?.addEventListener("click", () => {
    const t = translations[currentLang] || translations.en;
    currentSlide = (currentSlide + 1) % t.slides.length;
    goToSlide(currentSlide);
    resetTimer();
  });

  // Touch/swipe
  const outer = document.querySelector(".carousel-track-outer");
  if (outer) {
    let startX = 0;
    outer.addEventListener("touchstart", e => { startX = e.touches[0].clientX; }, { passive: true });
    outer.addEventListener("touchend", e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) {
        const t = translations[currentLang] || translations.en;
        currentSlide = diff > 0
          ? (currentSlide + 1) % t.slides.length
          : (currentSlide - 1 + t.slides.length) % t.slides.length;
        goToSlide(currentSlide);
        resetTimer();
      }
    });
    outer.addEventListener("mouseenter", () => { isCarouselPaused = true; });
    outer.addEventListener("mouseleave", () => { isCarouselPaused = false; });
  }
}

function goToSlide(index, animate = true) {
  const track = document.getElementById("carouselTrack");
  if (!track) return;
  if (!animate) track.style.transition = "none";
  track.style.transform = `translateX(-${index * 100}%)`;
  if (!animate) setTimeout(() => track.style.transition = "", 10);
  document.querySelectorAll(".carousel-dots .dot").forEach((d, i) => {
    d.classList.toggle("active", i === index);
  });
  track.querySelectorAll(".carousel-slide").forEach((s, i) => {
    s.setAttribute("aria-hidden", i !== index);
  });
}

function renderDots(count) {
  const dotsEl = document.querySelector(".carousel-dots");
  if (!dotsEl) return;
  dotsEl.innerHTML = Array.from({ length: count }, (_, i) =>
    `<div class="dot${i === currentSlide ? " active" : ""}" data-index="${i}"></div>`
  ).join("");
  dotsEl.querySelectorAll(".dot").forEach(d => {
    d.addEventListener("click", () => {
      currentSlide = parseInt(d.dataset.index);
      goToSlide(currentSlide);
      resetTimer();
    });
  });
}

function startCarouselTimer() {
  carouselTimer = setInterval(() => {
    if (isCarouselPaused) return;
    const t = translations[currentLang] || translations.en;
    currentSlide = (currentSlide + 1) % t.slides.length;
    goToSlide(currentSlide);
  }, 5000);
}

function resetTimer() {
  clearInterval(carouselTimer);
  startCarouselTimer();
}

/* ── THEME SWITCHER ───────────────────────────────── */
function setupThemeSwitcher() {
  const btn = document.getElementById("themeBtn");
  const menu = document.getElementById("themeMenu");
  btn?.addEventListener("click", e => {
    e.stopPropagation();
    menu?.classList.toggle("open");
    document.getElementById("langMenu")?.classList.remove("open");
  });
  document.querySelectorAll(".theme-option").forEach(el => {
    el.addEventListener("click", () => {
      applyTheme(el.dataset.theme);
      menu?.classList.remove("open");
    });
  });
}

/* ── LANG SWITCHER ────────────────────────────────── */
function setupLangSwitcher() {
  const btn = document.getElementById("langBtn");
  const menu = document.getElementById("langMenu");

  // Populate lang options
  if (menu) {
    menu.innerHTML = languages.map(l => `
      <div class="lang-option${l.code === currentLang ? " active" : ""}" data-lang="${l.code}">
        <span>${l.flag}</span><span>${l.label}</span>
      </div>
    `).join("");
    menu.querySelectorAll(".lang-option").forEach(el => {
      el.addEventListener("click", () => {
        applyLang(el.dataset.lang);
        menu.classList.remove("open");
      });
    });
  }

  btn?.addEventListener("click", e => {
    e.stopPropagation();
    menu?.classList.toggle("open");
    document.getElementById("themeMenu")?.classList.remove("open");
  });

  // Set initial label
  const chosen = languages.find(l => l.code === currentLang);
  const label = document.getElementById("langBtnLabel");
  if (label && chosen) label.textContent = chosen.flag + " " + chosen.label;
}

/* ── DROPDOWN CLOSE ON OUTSIDE CLICK ─────────────── */
function setupDropdownClose() {
  document.addEventListener("click", () => {
    document.getElementById("themeMenu")?.classList.remove("open");
    document.getElementById("langMenu")?.classList.remove("open");
    document.getElementById("mobileNav")?.classList.remove("open");
  });
}

/* ── FAQ ──────────────────────────────────────────── */
function setupFAQ() {
  document.querySelectorAll(".faq-item").forEach(item => {
    item.querySelector(".faq-question")?.addEventListener("click", () => {
      const wasOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("open"));
      if (!wasOpen) item.classList.add("open");
    });
  });
}

/* ── SCROLL REVEAL ────────────────────────────────── */
function observeReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll(".reveal:not(.visible)").forEach(el => observer.observe(el));
}

function setupScrollReveal() {
  observeReveal();
}

/* ── MOBILE MENU ──────────────────────────────────── */
function setupMobileMenu() {
  const btn = document.getElementById("mobileMenuBtn");
  const nav = document.getElementById("mobileNav");
  btn?.addEventListener("click", e => {
    e.stopPropagation();
    nav?.classList.toggle("open");
  });
  nav?.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => nav.classList.remove("open"));
  });
}
