/* =====================================================================
   ARABIC CONTENT — the Arabic version of the text in data.js.
   Shown when a visitor switches the site to العربية.
   Anything left empty ("") falls back to the English text from data.js.
   ===================================================================== */

const SITE_AR = {

  company: {
    name: "",                     // Arabic company name. Empty = keep the English name.
    tagline: "مقاولات وهندسة",
    intro:
      "ننفذ أعمال المقاولات والهندسة للمشروعات التجارية والصناعية والحكومية، من أنظمة الأعمال الكهروميكانيكية " +
      "والسباكة إلى الأعمال المدنية والمقاولات العامة المتكاملة.",
    about: {
      history:
        "شركة ICS الحسن هي شركة مقاولات وهندسة متخصصة في الأعمال الكهروميكانيكية (MEP) والإنشاءات المدنية والمقاولات العامة والبنية التحتية للبيانات. نلتزم بتنفيذ مشروعات عالية الجودة، والحفاظ على علاقات قوية مع عملائنا، وتقديم حلول هندسية موثوقة قائمة على الاحترافية والنزاهة والتميز الفني.",
      experience:
        "تقدم شركة ICS الحسن حلولًا هندسية وإنشائية في مجالات الأعمال الكهروميكانيكية والإنشاءات المدنية والمقاولات العامة والبنية التحتية للبيانات، مع التركيز على الجودة الفنية وكفاءة التنفيذ والالتزام في تسليم المشروعات.",
      vision:
        "أن نكون شركة رائدة وموثوقة في مجال المقاولات والهندسة، معروفة بالتميز والابتكار والشراكات الدائمة مع عملائنا.",
      scope:
`الأعمال الكهروميكانيكية (MEP): أنظمة التكييف والكهرباء والسباكة.
الإنشاءات المدنية: الأعمال المدنية والخرسانية وأعمال المباني.
المقاولات العامة: تنفيذ متكامل للمشروعات مع التنسيق والإدارة.
البنية التحتية للبيانات: الكابلات الهيكلية وحلول البنية التحتية للبيانات.
صيانة المباني والمنشآت: الصيانة الوقائية والعلاجية للمباني والمنشآت.`
    }
  },

  contact: {
    address: "22 شارع أحمد الزمر، مدينة نصر، القاهرة"
  },

  // Same order as "services" in data.js
  services: [
    { title: "الأعمال الكهروميكانيكية (MEP)", description: "أعمال الميكانيكا والكهرباء والسباكة، من التركيب حتى الاختبار والتشغيل." },
    { title: "الإنشاءات المدنية", description: "أعمال إنشائية ومدنية منفذة وفق الرسومات والمواصفات المعتمدة ومعايير السلامة بالموقع." },
    { title: "المقاولات العامة", description: "تنفيذ كامل للمشروع بعقد واحد يشمل التخطيط والتنسيق والإشراف والتسليم." },
    { title: "البنية التحتية للبيانات", description: "أعمال البنية التحتية التي تخدم أنظمة البيانات وتكنولوجيا المعلومات داخل المباني والمنشآت التي ننفذها." },
    { title: "صيانة المباني والمنشآت", description: "الصيانة الوقائية والعلاجية للمباني والمنشآت، للحفاظ على الأنظمة الكهروميكانيكية وأعمال المباني في حالة تشغيل سليمة." }
  ],

  // Client names in Arabic, by client "id" from data.js
  clients: {
    "dar-al-shifa": "مستشفى دار الشفاء",
    "el-zeitoun": "مستشفى الزيتون التخصصي",
    "ni": "مستشفى معهد ناصر",
    "nasser-institute": "مستشفى معهد ناصر",
    "mokattam": "مستشفى المقطم التخصصي",
    "sharm-international": "مستشفى شرم الشيخ الدولي",
    "sharq-el-madina": "مستشفى شرق المدينة",
    "sheikh-zayed": "مستشفى الشيخ زايد التخصصي",
    "hospital-wreath": "مستشفى الهرم التخصصي",
    "al-haram": "مستشفى الهرم التخصصي",
    "al-salam": "مستشفى السلام التخصصي",
    "nicd-imbaba": "مركز الحساسية والصدر بإمبابة",
    "whh-assiut": "مستشفى صحة المرأة - جامعة أسيوط",
    "qabbary": "مستشفى القباري - الإسكندرية",
    "dcgc-damietta": "مركز القلب والجهاز الهضمي بدمياط",
    "bargasy-motors": "برجاسي موتورز",
    "shabana-stores": "شبانة ستورز",
    "khodeir": "خضير",
    "nile-university": "جامعة النيل",
    "nile-badrawi": "مستشفى النيل بدراوي",
    "dbk-pharma": "دي بي كي فارما",
    "el-sherouk": "مستشفى الشروق",
    "ministry-of-transport": "وزارة النقل",
    "ministry-of-health": "وزارة الصحة والسكان",
    "smc-specialized-centers": "الأمانة العامة للمراكز الطبية المتخصصة",
    "nbe-hospital": "مستشفى البنك الأهلي",
    "luxor-international": "مستشفى الأقصر الدولي",
    "cairo-fatimid": "مستشفى القاهرة الفاطمية",
    "al-helal": "مستشفى الهلال الأحمر",
    "ashmoun-general": "مستشفى أشمون العام",
    "mirage-mall": "ميراج مول"
  },

  /* Arabic for short labels used in data.js: fields of work, job titles,
     experience options, email labels. Left: English exactly as in data.js. Right: Arabic. */
  terms: {
    // Contact
    "Projects Manager Email": "بريد مدير المشروعات",

    // Subcontractor registration: fields of work
    "HVAC": "التكييف والتهوية (HVAC)",
    "Firefighting": "مكافحة الحريق",
    "Fire Alarm": "إنذار الحريق",
    "Plumbing & Drainage": "السباكة والصرف",
    "Electrical Works": "الأعمال الكهربائية",
    "Low Current / ELV": "التيار الخفيف",
    "Structured Cabling & Data Networks": "الكابلات الهيكلية وشبكات البيانات",
    "CCTV & Access Control": "كاميرات المراقبة والتحكم في الدخول",
    "BMS (Building Management Systems)": "أنظمة إدارة المباني (BMS)",
    "Medical Gases": "الغازات الطبية",
    "Elevators & Escalators": "المصاعد والسلالم المتحركة",
    "Civil & Concrete Works": "الأعمال المدنية والخرسانية",
    "Steel Structures": "الإنشاءات المعدنية",
    "Masonry & Plastering": "المباني والمحارة",
    "Finishing Works": "أعمال التشطيبات",
    "Gypsum Board & Ceilings": "الجبس بورد والأسقف",
    "Flooring & Tiling": "الأرضيات والبلاط",
    "Painting": "الدهانات",
    "Aluminum & Glass": "الألوميتال والزجاج",
    "Insulation & Waterproofing": "العزل المائي",
    "Ductwork Fabrication": "تصنيع مجاري الهواء (الدكت)",
    "Thermal & Acoustic Insulation": "العزل الحراري والصوتي",
    "Earthworks & Excavation": "أعمال الحفر والردم",
    "Equipment Rental": "تأجير المعدات",
    "Building Materials Supply": "توريد مواد البناء",
    "MEP Equipment Supply": "توريد معدات الأعمال الكهروميكانيكية",

    // Careers: departments
    "Engineering": "الهندسة",
    "Accounting": "الحسابات",

    // Careers: engineering specializations
    "Mechanical Engineer (HVAC)": "مهندس ميكانيكا (تكييف وتهوية)",
    "Mechanical Engineer (Plumbing & Firefighting)": "مهندس ميكانيكا (سباكة ومكافحة حريق)",
    "Electrical Engineer (Power)": "مهندس كهرباء (قوى)",
    "Electrical Engineer (Low Current / ELV)": "مهندس كهرباء (تيار خفيف)",
    "Civil / Structural Engineer": "مهندس مدني / إنشائي",
    "Architectural Engineer": "مهندس معماري",
    "Site Engineer": "مهندس موقع",
    "Technical Office Engineer": "مهندس مكتب فني",
    "Planning Engineer": "مهندس تخطيط",
    "Quantity Surveyor": "مهندس حصر وكميات",
    "QA / QC Engineer": "مهندس جودة",
    "HSE Engineer": "مهندس سلامة وصحة مهنية",
    "MEP Coordinator": "منسق أعمال كهروميكانيكية",
    "Project Manager": "مدير مشروع",
    "Procurement Engineer": "مهندس مشتريات",
    "Sales Engineer": "مهندس مبيعات",

    // Careers: accounting specializations
    "General Accountant": "محاسب عام",
    "Project Accountant": "محاسب مشروعات",
    "Cost Accountant": "محاسب تكاليف",
    "Tax Accountant": "محاسب ضرائب",
    "Accounts Payable / Receivable": "محاسب موردين وعملاء",
    "Treasury Accountant": "محاسب خزينة",
    "Chief Accountant": "رئيس حسابات",
    "Internal Auditor": "مراجع داخلي",
    "Financial Manager": "مدير مالي",

    // Careers: years of experience
    "Fresh Graduate": "حديث التخرج",
    "1 to 3 years": "من سنة إلى 3 سنوات",
    "3 to 5 years": "من 3 إلى 5 سنوات",
    "5 to 10 years": "من 5 إلى 10 سنوات",
    "More than 10 years": "أكثر من 10 سنوات"
  }
};
