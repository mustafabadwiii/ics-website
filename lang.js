/* Language switching (English / العربية). You normally don't need to edit this file.
   Arabic for the company content is in data-ar.js. */
(function () {
  "use strict";

  var lang = "en";
  try {
    var q = (location.search.match(/[?&]lang=(ar|en)/) || [])[1];
    lang = q || localStorage.getItem("site-lang") || "en";
  } catch (e) {}
  if (lang !== "ar") lang = "en";

  /* Fixed interface text: English -> Arabic */
  var UI = {
    // Header, footer, navigation
    "About": "من نحن",
    "Services": "خدماتنا",
    "Clients": "عملاؤنا",
    "Contact": "اتصل بنا",
    "Home": "الرئيسية",
    "Register": "سجّل معنا",
    "Careers": "الوظائف",
    "Clients & Projects": "العملاء والمشروعات",
    "Menu": "القائمة",
    "Tel:": "تليفون:",
    "All rights reserved.": "جميع الحقوق محفوظة.",
    "Subcontractor Registration": "تسجيل مقاولي الباطن",

    // Home
    "View Clients & Projects": "العملاء والمشروعات",
    "Contact Us": "اتصل بنا",
    "Subcontractors & Suppliers": "مقاولو الباطن والموردون",
    "Want to work with us? Register your company →": "تريد العمل معنا؟ سجّل شركتك ←",
    "Apply for a job →": "قدّم على وظيفة ←",
    "About the Company": "عن الشركة",
    "Who we are, how we started, and the work we deliver.": "من نحن، وكيف بدأنا، وما الأعمال التي ننفذها.",
    "Established": "سنة التأسيس",
    "Years of Experience": "سنوات الخبرة",
    "Projects Completed": "المشروعات المنفذة",
    "Project photo": "صورة مشروع",
    "Previous photo": "الصورة السابقة",
    "Next photo": "الصورة التالية",
    "Photo": "صورة",
    "History": "تاريخنا",
    "Experience": "خبرتنا",
    "Vision": "رؤيتنا",
    "What We Do": "ماذا نقدم",
    "Our Services": "خدماتنا",
    "Our Clients": "عملاؤنا",
    "All Clients & Projects": "كل العملاء والمشروعات",
    "Reach our office for enquiries, tenders and project discussions.": "تواصل مع مكتبنا للاستفسارات والمناقصات ومناقشة المشروعات.",
    "Company Address": "عنوان الشركة",
    "Office Phone Numbers": "أرقام تليفون المكتب",
    "Email Address": "البريد الإلكتروني",
    "View on Google Maps →": "عرض على خرائط جوجل ←",

    // Clients & Projects
    "← Back to Home": "→ العودة للرئيسية",
    "Back to Home": "العودة للرئيسية",
    "Select a client to view the projects we delivered for them and the works carried out on each.":
      "اختر عميلًا لعرض المشروعات التي نفذناها له والأعمال المنفذة في كل مشروع.",
    "Client": "العميل",
    "Project": "المشروع",
    "project": "مشروع",
    "projects": "مشروعات",
    "Location": "الموقع",
    "Works": "الأعمال",
    "Project details for this client will be published soon.": "سيتم نشر تفاصيل مشروعات هذا العميل قريبًا.",
    "Sample clients and projects shown for layout purposes. Replace them with real data.":
      "العملاء والمشروعات المعروضة أمثلة للتصميم فقط.",

    // Registration page
    "Subcontractor & Supplier Registration": "تسجيل مقاولي الباطن والموردين",
    "Register your company to work with us as a subcontractor or supplier. Our team reviews every registration and will contact you when a suitable project is available.":
      "سجّل شركتك للعمل معنا كمقاول باطن أو مورد. يراجع فريقنا كل طلب تسجيل، وسنتواصل معك عند توفر مشروع مناسب.",
    "Registration Type": "نوع التسجيل",
    "Subcontractor": "مقاول باطن",
    "Supplier": "مورد",
    "Both": "الاثنان",
    "Contact Details": "بيانات التواصل",
    "Full Name": "الاسم بالكامل",
    "Company Name": "اسم الشركة",
    "Phone Number": "رقم التليفون",
    "City / Governorate": "المدينة / المحافظة",
    "Select": "اختر",
    "Less than 3 years": "أقل من 3 سنوات",
    "3 to 5 years": "من 3 إلى 5 سنوات",
    "5 to 10 years": "من 5 إلى 10 سنوات",
    "More than 10 years": "أكثر من 10 سنوات",
    "Field of Work": "مجال العمل",
    "Select every field your company works in.": "اختر كل المجالات التي تعمل فيها شركتك.",
    "Other": "أخرى",
    "Please specify": "برجاء التوضيح",
    "Additional Information": "معلومات إضافية",
    "Previous projects, team size, or anything else you would like us to know": "المشروعات السابقة، أو حجم فريق العمل، أو أي معلومات أخرى تود إضافتها",
    "Submit Registration": "إرسال التسجيل",
    "Registration received": "تم استلام التسجيل",
    "Thank you. Our team will review your details and contact you by phone.": "شكرًا لك. سيراجع فريقنا بياناتك ويتواصل معك تليفونيًا.",
    "Enter your full name.": "اكتب اسمك بالكامل.",
    "Enter a valid phone number, for example 01012345678.": "اكتب رقم تليفون صحيح، مثل 01012345678.",
    "Enter a valid email address, or leave it empty.": "اكتب بريدًا إلكترونيًا صحيحًا، أو اتركه فارغًا.",
    "Select at least one field of work.": "اختر مجال عمل واحدًا على الأقل.",
    "Please correct the highlighted fields.": "برجاء تصحيح الحقول الموضحة.",
    "Sending...": "جارٍ الإرسال...",
    "We could not send your registration. Check your internet connection and try again, or call us on":
      "تعذر إرسال التسجيل. تأكد من اتصالك بالإنترنت وحاول مرة أخرى، أو اتصل بنا على",

    // Careers page
    "We are always looking for qualified engineers and accountants. Send us your details and CV, and our HR team will contact you when a suitable position opens.":
      "نرحب دائمًا بالمهندسين والمحاسبين المؤهلين. أرسل بياناتك وسيرتك الذاتية، وسيتواصل معك فريق الموارد البشرية عند توفر وظيفة مناسبة.",
    "Position": "الوظيفة",
    "Specialization": "التخصص",
    "Personal Details": "البيانات الشخصية",
    "City of Residence": "مدينة الإقامة",
    "CV": "السيرة الذاتية",
    "Choose your CV file": "اختر ملف السيرة الذاتية",
    "PDF or Word, up to 5 MB": "ملف PDF أو Word، بحد أقصى 5 ميجابايت",
    "Current position, expected salary, notice period, or anything else you would like us to know":
      "الوظيفة الحالية، أو الراتب المتوقع، أو مدة الإخطار، أو أي معلومات أخرى تود إضافتها",
    "Submit Application": "إرسال الطلب",
    "Application received": "تم استلام طلبك",
    "Thank you. Our HR team will review your CV and contact you if your profile matches an open position.":
      "شكرًا لك. سيراجع فريق الموارد البشرية سيرتك الذاتية ويتواصل معك إذا كانت مناسبة لوظيفة متاحة.",
    "Choose Engineering or Accounting.": "اختر الهندسة أو الحسابات.",
    "Choose your specialization.": "اختر تخصصك.",
    "Enter a valid email address.": "اكتب بريدًا إلكترونيًا صحيحًا.",
    "Choose your years of experience.": "اختر سنوات خبرتك.",
    "Attach your CV.": "أرفق سيرتك الذاتية.",
    "The CV must be a PDF or Word file.": "يجب أن تكون السيرة الذاتية ملف PDF أو Word.",
    "The file is too large. Save it as a smaller PDF and try again.": "حجم الملف كبير. احفظه كملف PDF أصغر وحاول مرة أخرى.",
    "We could not send your application. Check your internet connection and try again, or email your CV to":
      "تعذر إرسال طلبك. تأكد من اتصالك بالإنترنت وحاول مرة أخرى، أو أرسل سيرتك الذاتية إلى"
  };

  var AR = (typeof SITE_AR !== "undefined" && SITE_AR) || {};
  var TERMS = AR.terms || {};

  function T(s) {
    if (lang !== "ar" || s == null) return s;
    var k = String(s).trim();
    return UI[k] || TERMS[k] || s;
  }
  function pick(ar, en) { return lang === "ar" && ar ? ar : en; }

  /* Replace fixed English text in the page with Arabic */
  function translatePage(root) {
    if (lang !== "ar") return;
    var walker = document.createTreeWalker(root || document.body, NodeFilter.SHOW_TEXT, null);
    var n, list = [];
    while ((n = walker.nextNode())) list.push(n);
    list.forEach(function (node) {
      var p = node.parentNode;
      if (!p || /^(SCRIPT|STYLE|TEXTAREA)$/.test(p.nodeName) || p.closest("[data-no-translate]")) return;
      var raw = node.nodeValue, key = raw.trim();
      if (!key) return;
      var tr = UI[key] || TERMS[key];
      if (tr) node.nodeValue = raw.replace(key, tr);
    });
    [].forEach.call((root || document).querySelectorAll("[placeholder],[aria-label]"), function (el) {
      ["aria-label"].forEach(function (a) { if (el.hasAttribute(a) && UI[el.getAttribute(a)]) el.setAttribute(a, UI[el.getAttribute(a)]); });
    });
  }

  function setLang(l) {
    try { localStorage.setItem("site-lang", l); } catch (e) {}
    var url = location.href.replace(/([?&])lang=(ar|en)&?/, "$1").replace(/[?&]$/, "");
    if (url === location.href) location.reload(); else location.href = url;
  }

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  window.I18N = { lang: lang, T: T, pick: pick, AR: AR, translatePage: translatePage, setLang: setLang };
})();
