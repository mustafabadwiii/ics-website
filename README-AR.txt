دليل سريع لتعديل ونشر الموقع
================================

الملفات:
  index.html      الصفحة الرئيسية (Home)
  projects.html   صفحة العملاء والمشروعات (Clients & Projects)
  data.js         كل محتوى الموقع — عدّل هذا الملف فقط
  styles.css      التصميم والألوان
  main.js         تشغيل الصفحات (لا تحتاج لتعديله)
  assets/         اللوجو والصور

1) اللوجو الحقيقي
   انسخ ملف اللوجو داخل assets باسم مثل logo.png
   ثم في data.js غيّر:  logo: "assets/logo.png"

2) بيانات الشركة
   في data.js داخل company: الاسم (name)، سنة التأسيس (founded)،
   التاريخ والخبرة والرؤية (about)، والصورة الرئيسية (heroImage).
   وداخل contact: العنوان والتليفونات والإيميل.
   في التليفون: number هو الرقم الظاهر، dial هو الرقم الذي يُتصل به (بدون مسافات).

3) العملاء والمشروعات
   ضع لوجو العميل في assets/clients وصور المشروعات في assets/projects
   في data.js انسخ بلوك عميل كامل { ... } وغيّر:
     id   اسم قصير فريد بالإنجليزي بدون مسافات (مثال: "orascom")
     name, logo, projects
   كل مشروع: name, location, description, works, images (صورة أو أكثر)
   بعد إضافة البيانات الحقيقية اجعل:  showSampleNotice: false

4) النشر
   ارفع محتويات المجلد كما هي إلى استضافة الموقع (public_html أو ما يقابله)
   بحيث يكون index.html في جذر الدومين. لا ترفع ملف _preview-index.html.
