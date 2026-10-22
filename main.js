/* Builds the pages from the content in data.js. You normally don't need to edit this file. */
(function () {
  "use strict";
  var S = SITE, C = S.company, K = S.contact;
  var I = window.I18N || { lang: "en", T: function (s) { return s; }, AR: {}, translatePage: function () {}, setLang: function () {} };
  var T = I.T, AR = I.AR || {}, isAr = I.lang === "ar";
  var SERVICES = S.services, CLIENTS = S.clients;

  /* Arabic version of the content from data-ar.js (empty values fall back to English) */
  if (isAr) {
    var AC = AR.company || {}, AA = AC.about || {};
    C = Object.assign({}, C, {
      name: AC.name || C.name, tagline: AC.tagline || C.tagline, intro: AC.intro || C.intro,
      about: {
        history: AA.history || C.about.history, experience: AA.experience || C.about.experience,
        vision: AA.vision || C.about.vision, scope: AA.scope || C.about.scope
      }
    });
    K = Object.assign({}, K, { address: (AR.contact || {}).address || K.address });
    SERVICES = S.services.map(function (s, i) {
      var a = (AR.services || [])[i] || {};
      return { title: a.title || s.title, description: a.description || s.description };
    });
    CLIENTS = S.clients.map(function (c) {
      return Object.assign({}, c, { name: (AR.clients || {})[c.id] || c.name });
    });
  }
  function num(t) { return '<bdi dir="ltr">' + esc(t) + "</bdi>"; }
  var page = document.querySelector("[data-page]").getAttribute("data-page");

  function esc(t) {
    return String(t == null ? "" : t)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function $(sel) { return document.querySelector(sel); }
  var home = "index.html", projects = "projects.html";

  /* ---------- Shared: top bar, header, footer ---------- */
  var phonesTop = K.phones.slice(0, 1).map(function (p) {
    return '<a href="tel:' + esc(p.dial) + '">' + T("Tel:") + " " + num(p.number) + "</a>";
  }).join("");
  $("#topbar").innerHTML =
    '<div class="wrap">' + phonesTop +
    '<a href="mailto:' + esc(K.emailLink) + '">' + num(K.email) + "</a>" +
    '<button type="button" class="lang-btn" id="lang-btn" lang="' + (isAr ? "en" : "ar") + '">' + (isAr ? "English" : "العربية") + "</button></div>";

  var register = "register.html";
  var navLinks = page === "home"
    ? '<a href="#about">' + T("About") + '</a><a href="#services">' + T("Services") + '</a><a href="#clients">' + T("Clients") + '</a><a href="#contact">' + T("Contact") + "</a>"
    : '<a href="' + home + '">' + T("Home") + '</a><a href="' + projects + '"' + (page === "projects" ? ' aria-current="page"' : "") + ">" + T("Clients") + '</a><a href="' + home + '#contact">' + T("Contact") + "</a>";
  navLinks += '<a href="' + register + '"' + (page === "register" ? ' aria-current="page"' : "") + ">" + T("Register") + "</a>";
  navLinks += '<a href="careers.html"' + (page === "careers" ? ' aria-current="page"' : "") + ">" + T("Careers") + "</a>";
  var cta = '<a class="nav-cta" href="' + projects + '"' + (page === "projects" ? ' aria-current="page"' : "") + ">" + esc(T("Clients & Projects")) + "</a>";

  $("#header").innerHTML =
    '<div class="wrap">' +
      '<a class="brand" href="' + home + '">' +
        '<img src="' + esc(C.logo) + '" alt="' + esc(C.name) + ' logo">' +
        '<span><span class="brand-name">' + esc(C.name) + '</span><span class="brand-tag">' + esc(C.tagline) + "</span></span>" +
      "</a>" +
      '<button class="menu-btn" id="menu-btn" aria-expanded="false" aria-controls="nav">' + T("Menu") + '</button>' +
      '<nav class="nav" id="nav" aria-label="Main">' + navLinks + cta + "</nav>" +
    "</div>";

  /* Faded logo behind the page */
  if (C.backgroundLogo) {
    var wm = document.createElement("div");
    wm.className = "watermark";
    wm.setAttribute("aria-hidden", "true");
    wm.style.backgroundImage = 'url("' + (C.backgroundLogoImage || C.logo) + '")';
    wm.style.opacity = C.backgroundLogoOpacity || 0.06;
    document.body.insertBefore(wm, document.body.firstChild);
  }

  $("#lang-btn").addEventListener("click", function () { I.setLang(isAr ? "en" : "ar"); });

  var btn = $("#menu-btn"), nav = $("#nav");
  btn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
  });

  $("#footer").innerHTML =
    '<div class="wrap"><span>&copy; ' + new Date().getFullYear() + " " + esc(C.name) + ". " + T("All rights reserved.") + "</span>" +
    '<span><a href="' + home + '">' + T("Home") + '</a> &nbsp;·&nbsp; <a href="' + projects + '">' + esc(T("Clients & Projects")) + '</a> &nbsp;·&nbsp; <a href="' + register + '">' + T("Subcontractor Registration") + '</a> &nbsp;·&nbsp; <a href="careers.html">' + T("Careers") + "</a></span></div>";

  var pageName = { projects: "Clients & Projects", register: "Subcontractor & Supplier Registration", careers: "Careers" }[page];
  document.title = (pageName ? T(pageName) + " | " : "") + C.name + " | " + C.tagline;

  function clientTiles(asLinks, currentId) {
    return CLIENTS.map(function (c) {
      var inner = '<img src="' + esc(c.logo) + '" alt="' + esc(c.name) + ' logo"><span>' + esc(c.name) + "</span>";
      if (asLinks) {
        return '<a class="client-tile" href="' + projects + "#" + esc(c.id) + '">' + inner + "</a>";
      }
      return '<button type="button" class="client-tile" data-id="' + esc(c.id) + '" aria-current="' +
        (c.id === currentId ? "true" : "false") + '">' + inner + "</button>";
    }).join("");
  }
  var note = S.showSampleNotice
    ? '<p class="sample-note">' + T("Sample clients and projects shown for layout purposes. Replace them with real data.") + "</p>"
    : "";

  /* ---------- Home page ---------- */
  if (page === "home") {
    $("#hero-name").textContent = C.name;
    $("#hero-tag").textContent = C.tagline;
    $("#hero-intro").textContent = C.intro;
    /* Hero slideshow */
    (function () {
      var imgs = (C.heroImages && C.heroImages.length) ? C.heroImages : [C.heroImage || ""];
      var fig = $("#hero-figure"), n = imgs.length, cur = 0, timer = null;
      var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      var prevArrow = isAr ? "&#8250;" : "&#8249;", nextArrow = isAr ? "&#8249;" : "&#8250;";
      fig.innerHTML =
        '<div class="slides">' + imgs.map(function (src, i) {
          return '<img class="slide' + (i === 0 ? " is-active" : "") + '" ' + (i < 2 ? 'src="' : 'data-src="') + esc(src) +
            '" alt="' + esc(C.name) + " - " + T("Project photo") + " " + (i + 1) + '"' + (i === 0 ? "" : ' aria-hidden="true"') + ">";
        }).join("") + "</div>" +
        (n > 1 ?
          '<button type="button" class="slide-btn slide-prev" aria-label="' + T("Previous photo") + '">' + prevArrow + "</button>" +
          '<button type="button" class="slide-btn slide-next" aria-label="' + T("Next photo") + '">' + nextArrow + "</button>" +
          '<div class="slide-dots">' + imgs.map(function (s, i) {
            return '<button type="button" class="slide-dot' + (i === 0 ? " is-active" : "") + '" data-i="' + i + '" aria-label="' + T("Photo") + " " + (i + 1) + '"></button>';
          }).join("") + "</div>" +
          '<span class="slide-count"><bdi dir="ltr"><span id="slide-num">1</span> / ' + n + "</bdi></span>"
        : "");
      if (n < 2) return;
      var slides = fig.querySelectorAll(".slide"), dots = fig.querySelectorAll(".slide-dot");
      function load(i) { var s = slides[i]; if (s && !s.getAttribute("src") && s.dataset.src) s.src = s.dataset.src; }
      function go(i) {
        i = (i + n) % n; if (i === cur) return;
        load(i); load((i + 1) % n);
        slides[cur].classList.remove("is-active"); slides[cur].setAttribute("aria-hidden", "true");
        dots[cur].classList.remove("is-active");
        cur = i;
        slides[cur].classList.add("is-active"); slides[cur].removeAttribute("aria-hidden");
        dots[cur].classList.add("is-active");
        $("#slide-num").textContent = cur + 1;
      }
      function play() { stop(); if (!reduce) timer = setInterval(function () { go(cur + 1); }, (C.heroSlideSeconds || 5) * 1000); }
      function stop() { if (timer) { clearInterval(timer); timer = null; } }
      fig.querySelector(".slide-prev").addEventListener("click", function () { go(cur - 1); play(); });
      fig.querySelector(".slide-next").addEventListener("click", function () { go(cur + 1); play(); });
      fig.querySelector(".slide-dots").addEventListener("click", function (e) {
        var b = e.target.closest(".slide-dot"); if (b) { go(+b.dataset.i); play(); }
      });
      fig.addEventListener("mouseenter", stop); fig.addEventListener("mouseleave", play);
      fig.addEventListener("focusin", stop); fig.addEventListener("focusout", play);
      document.addEventListener("visibilitychange", function () { document.hidden ? stop() : play(); });
      var sx = null;
      fig.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; }, { passive: true });
      fig.addEventListener("touchend", function (e) {
        if (sx === null) return; var dx = e.changedTouches[0].clientX - sx; sx = null;
        if (Math.abs(dx) > 40) { var fwd = dx < 0; if (isAr) fwd = !fwd; go(cur + (fwd ? 1 : -1)); play(); }
      });
      play();
    })();

    $("#founded").textContent = C.founded;
    /* Number boxes (years of experience, projects): count up quickly from 0 when they come into view */
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    function countUp(el, text) {
      text = String(text || "");
      el.textContent = text;
      var mt = text.match(/^(\D*)(\d+)(.*)$/);
      if (!mt || reduceMotion) return;
      var target = parseInt(mt[2], 10);
      var run = function () {
        var start = null, duration = 4500;   // milliseconds: higher = slower count
        var step = function (t) {
          if (start === null) start = t;
          var p = Math.min((t - start) / duration, 1);
          el.textContent = mt[1] + Math.round(target * p) + mt[3];
          if (p < 1) requestAnimationFrame(step);
        };
        el.textContent = mt[1] + "0" + mt[3];
        requestAnimationFrame(step);
      };
      if ("IntersectionObserver" in window) {
        var io = new IntersectionObserver(function (entries) {
          if (entries[0].isIntersecting) { io.disconnect(); run(); }
        }, { threshold: 0.6 });
        io.observe(el);
      } else {
        run();
      }
    }
    countUp($("#experience-years"), C.experienceYears);
    countUp($("#projects-count"), C.projectsCount);
    var A = C.about;
    $("#about-items").innerHTML = [
      [T("History"), A.history], [T("Experience"), A.experience],
      [T("Vision"), A.vision], [T("What We Do"), A.scope]
    ].map(function (r) {
      // Text written as "Title: description" lines becomes a bulleted list with bold titles
      var lines = String(r[1] || "").split("\n").map(function (l) { return l.trim(); }).filter(Boolean);
      var isList = lines.length > 1 && lines.every(function (l) { return l.indexOf(":") > 0; });
      var body = isList
        ? '<ul class="about-list">' + lines.map(function (l) {
            var k = l.indexOf(":");
            return "<li><strong>" + esc(l.slice(0, k)) + ":</strong> " + esc(l.slice(k + 1).trim()) + "</li>";
          }).join("") + "</ul>"
        : "<p>" + esc(r[1]) + "</p>";
      return '<div class="about-item"><h3>' + r[0] + "</h3>" + body + "</div>";
    }).join("");

    $("#hero-strip").innerHTML = SERVICES.map(function (s) {
      return '<a href="#services">' + esc(s.title) + "</a>";
    }).join("");

    $("#service-grid").innerHTML = SERVICES.map(function (s) {
      return '<article class="service"><h3>' + esc(s.title) + "</h3><p>" + esc(s.description) + "</p></article>";
    }).join("");

    $("#client-note").innerHTML = note;
    $("#client-grid").innerHTML = clientTiles(true);

    $("#c-address").textContent = K.address;
    var mapUrl = K.mapLink || ("https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(K.address));
    $("#c-address").insertAdjacentHTML("afterend",
      '<a class="map-link" href="' + esc(mapUrl) + '" target="_blank" rel="noopener">' + esc(T("View on Google Maps →")) + "</a>");
    $("#c-phones").innerHTML = K.phones.map(function (p) {
      return '<a href="tel:' + esc(p.dial) + '">' + num(p.number) + "</a>";
    }).join("");
    $("#c-email").innerHTML = '<a href="mailto:' + esc(K.emailLink) + '">' + num(K.email) + "</a>";
    (K.otherEmails || []).forEach(function (e) {
      $("#c-email").insertAdjacentHTML("beforeend",
        '<span class="label extra-label">' + esc(T(e.label)) + '</span>' +
        '<a href="mailto:' + esc(e.email) + '">' + num(e.email) + "</a>");
    });
    $("#c-logo").src = C.logoOnDark || C.logo;
    $("#c-logo").alt = C.name + " logo";
  }

  /* ---------- Clients & Projects page ---------- */
  if (page === "projects") {
    $("#client-note").innerHTML = note;

    function find(id) {
      for (var i = 0; i < CLIENTS.length; i++) if (CLIENTS[i].id === id) return CLIENTS[i];
      return null;
    }

    function render(id, scroll) {
      var c = find(id) || CLIENTS[0];
      if (!c) return;
      $("#client-grid").innerHTML = clientTiles(false, c.id);

      var html =
        '<div class="client-head"><img src="' + esc(c.logo) + '" alt="' + esc(c.name) + ' logo">' +
        '<div class="client-head-text"><span class="label">' + T("Client") + "</span><h2>" + esc(c.name) + "</h2>" +
        (c.projects.length ? '<span class="label">' + c.projects.length + " " + T(c.projects.length === 1 ? "project" : "projects") + "</span>" : "") +
        "</div></div>" +
        '<div class="project-list">';

      c.projects.forEach(function (p, pi) {
        var imgs = p.images && p.images.length ? p.images : [];
        var thumbs = imgs.length > 1
          ? '<div class="thumbs">' + imgs.map(function (src, ii) {
              return '<button type="button" class="thumb" data-p="' + pi + '" data-src="' + esc(src) + '" aria-pressed="' + (ii === 0) +
                '" aria-label="Show image ' + (ii + 1) + '"><img src="' + esc(src) + '" alt=""></button>';
            }).join("") + "</div>"
          : "";
        html +=
          '<article class="project">' +
            '<div class="gallery"><div class="gallery-main">' +
              (imgs[0] ? '<img id="main-' + pi + '" src="' + esc(imgs[0]) + '" alt="' + esc(p.name) + '">' : "") +
            "</div>" + thumbs + "</div>" +
            '<div class="project-info"><span class="label">' + T("Project") + "</span><h3>" + esc(p.name) + "</h3>" +
              "<p>" + esc(p.description) + "</p>" +
              '<dl class="spec">' +
                "<dt>" + T("Client") + "</dt><dd>" + esc(c.name) + "</dd>" +
                (p.location ? "<dt>" + T("Location") + "</dt><dd>" + esc(p.location) + "</dd>" : "") +
                "<dt>" + T("Works") + '</dt><dd><ul class="works">' + (p.works || []).map(function (w) { return "<li>" + esc(T(w)) + "</li>"; }).join("") + "</ul></dd>" +
              "</dl>" +
            "</div>" +
          "</article>";
      });
      if (!c.projects.length) {
        html += '<p class="no-projects">' + T("Project details for this client will be published soon.") + "</p>";
      }
      html += "</div>";
      $("#client-projects").innerHTML = html;
      if (scroll) $("#client-projects").scrollIntoView({ block: "start" });
    }

    $("#client-grid").addEventListener("click", function (e) {
      var t = e.target.closest(".client-tile");
      if (!t) return;
      var id = t.getAttribute("data-id");
      try { history.replaceState(null, "", "#" + id); } catch (err) {}
      render(id, true);
    });
    $("#client-projects").addEventListener("click", function (e) {
      var t = e.target.closest(".thumb");
      if (!t) return;
      var pi = t.getAttribute("data-p");
      $("#main-" + pi).src = t.getAttribute("data-src");
      t.parentNode.querySelectorAll(".thumb").forEach(function (b) { b.setAttribute("aria-pressed", b === t ? "true" : "false"); });
    });
    window.addEventListener("hashchange", function () { render(location.hash.slice(1), true); });

    var initial = location.hash.slice(1);
    render(initial, !!find(initial));
  }

  /* ---------- Subcontractor & Supplier Registration page ---------- */
  if (page === "register") {
    var R = S.registration || { trades: [] };
    var grid = $("#trade-grid");
    grid.innerHTML = R.trades.concat(["Other"]).map(function (t, i) {
      return '<label class="choice"><input type="checkbox" name="trade" value="' + esc(t) + '" id="trade-' + i + '"> <span>' + esc(T(t)) + "</span></label>";
    }).join("");

    var otherBox = grid.querySelector('input[value="Other"]');
    otherBox.addEventListener("change", function () { $("#other-wrap").hidden = !otherBox.checked; });

    var form = $("#reg-form"), status = $("#form-status"), btn = $("#reg-btn");

    function setErr(id, msg) { $(id).textContent = msg || ""; }
    function validate() {
      var ok = true;
      var name = $("#f-name").value.trim();
      var phone = $("#f-phone").value.replace(/[\s\-()]/g, "");
      var email = $("#f-email").value.trim();
      setErr("#e-name"); setErr("#e-phone"); setErr("#e-email"); setErr("#e-trades");
      if (name.length < 3) { setErr("#e-name", T("Enter your full name.")); ok = false; }
      if (!/^(\+?20|0)?1[0125]\d{8}$/.test(phone) && !/^\+?\d{8,15}$/.test(phone)) {
        setErr("#e-phone", T("Enter a valid phone number, for example 01012345678.")); ok = false;
      }
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setErr("#e-email", T("Enter a valid email address, or leave it empty.")); ok = false; }
      if (!form.querySelectorAll('input[name="trade"]:checked').length) { setErr("#e-trades", T("Select at least one field of work.")); ok = false; }
      return ok;
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.textContent = "";
      if (!validate()) {
        status.textContent = T("Please correct the highlighted fields.");
        var firstErr = form.querySelector(".field-error:not(:empty)");
        if (firstErr) firstErr.parentNode.scrollIntoView({ block: "center" });
        return;
      }
      if (form.querySelector(".honey").value) return;

      var fd = new FormData(form);
      var trades = [].map.call(form.querySelectorAll('input[name="trade"]:checked'), function (c) { return c.value; });
      var payload = {
        _subject: "New " + fd.get("Registration Type") + " registration: " + fd.get("Full Name"),
        _template: "table",
        "Registration Type": fd.get("Registration Type"),
        "Full Name": fd.get("Full Name"),
        "Company Name": fd.get("Company Name") || "-",
        "Phone Number": fd.get("Phone Number"),
        "Email Address": fd.get("Email Address") || "-",
        "City": fd.get("City") || "-",
        "Years of Experience": fd.get("Years of Experience") || "-",
        "Fields of Work": trades.join(", ") + (otherBox.checked && fd.get("Other Field") ? " (Other: " + fd.get("Other Field") + ")" : ""),
        "Notes": fd.get("Notes") || "-"
      };
      if (fd.get("Email Address")) payload._replyto = fd.get("Email Address");

      btn.disabled = true; btn.textContent = T("Sending...");
      fetch("https://formsubmit.co/ajax/" + encodeURIComponent(R.sendTo), {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload)
      }).then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
        .then(function (res) {
          if (!res.ok || String(res.j.success) === "false") throw new Error(res.j.message || "failed");
          form.hidden = true; $("#reg-done").hidden = false;
          $("#reg-done").scrollIntoView({ block: "center" });
        })
        .catch(function () {
          btn.disabled = false; btn.textContent = T("Submit Registration");
          status.innerHTML = esc(T("We could not send your registration. Check your internet connection and try again, or call us on")) + " " +
            num((K.phones[0] || {}).number || "") + ".";
        });
    });
  }

  /* ---------- Careers page ---------- */
  if (page === "careers") {
    var J = S.careers;
    var jf = $("#job-form"), jStatus = $("#job-status"), jBtn = $("#job-btn");
    var spec = $("#j-spec"), specWrap = $("#spec-wrap"), specOtherWrap = $("#spec-other-wrap");

    $("#dept-row").innerHTML = J.departments.map(function (d, i) {
      return '<label class="choice"><input type="radio" name="Department" value="' + esc(d.name) + '" id="dept-' + i + '"> <span>' + esc(T(d.name)) + "</span></label>";
    }).join("");
    $("#j-years").innerHTML = '<option value="">' + T("Select") + "</option>" + J.experienceOptions.map(function (o) {
      return '<option value="' + esc(o) + '">' + esc(T(o)) + "</option>";
    }).join("");

    $("#dept-row").addEventListener("change", function (e) {
      var d = J.departments.filter(function (x) { return x.name === e.target.value; })[0];
      if (!d) return;
      $("#j-spec-label").innerHTML = (isAr ? T("Specialization") + " - " + esc(T(d.name)) : esc(d.name) + " Specialization") + ' <span class="req">*</span>';
      spec.innerHTML = '<option value="">' + T("Select") + "</option>" + d.specializations.concat(["Other"]).map(function (s) {
        return '<option value="' + esc(s) + '">' + esc(T(s)) + "</option>";
      }).join("");
      specWrap.hidden = false; specOtherWrap.hidden = true;
      $("#e-dept").textContent = "";
    });
    spec.addEventListener("change", function () { specOtherWrap.hidden = spec.value !== "Other"; });

    var cv = $("#j-cv");
    cv.addEventListener("change", function () {
      var f = cv.files[0];
      $("#file-name").textContent = f ? f.name : T("Choose your CV file");
      $("#file-drop").classList.toggle("has-file", !!f);
      $("#e-cv").textContent = "";
    });

    function jErr(id, msg) { $(id).textContent = msg || ""; }
    function jValidate() {
      var ok = true;
      ["#e-dept", "#e-spec", "#e-jname", "#e-jphone", "#e-jemail", "#e-jyears", "#e-cv"].forEach(function (id) { jErr(id); });
      if (!jf.querySelector('input[name="Department"]:checked')) { jErr("#e-dept", T("Choose Engineering or Accounting.")); ok = false; }
      else if (!spec.value) { jErr("#e-spec", T("Choose your specialization.")); ok = false; }
      if ($("#j-name").value.trim().length < 3) { jErr("#e-jname", T("Enter your full name.")); ok = false; }
      var ph = $("#j-phone").value.replace(/[\s\-()]/g, "");
      if (!/^(\+?20|0)?1[0125]\d{8}$/.test(ph) && !/^\+?\d{8,15}$/.test(ph)) { jErr("#e-jphone", T("Enter a valid phone number, for example 01012345678.")); ok = false; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($("#j-email").value.trim())) { jErr("#e-jemail", T("Enter a valid email address.")); ok = false; }
      if (!$("#j-years").value) { jErr("#e-jyears", T("Choose your years of experience.")); ok = false; }
      var f = cv.files[0];
      if (!f) { jErr("#e-cv", T("Attach your CV.")); ok = false; }
      else if (!/\.(pdf|docx?)$/i.test(f.name)) { jErr("#e-cv", T("The CV must be a PDF or Word file.")); ok = false; }
      else if (f.size > J.maxCvSizeMB * 1024 * 1024) { jErr("#e-cv", isAr ? T("The file is too large. Save it as a smaller PDF and try again.") : "The file is larger than " + J.maxCvSizeMB + " MB. Save it as a smaller PDF and try again."); ok = false; }
      return ok;
    }

    jf.addEventListener("submit", function (e) {
      e.preventDefault();
      jStatus.textContent = "";
      if (!jValidate()) {
        jStatus.textContent = T("Please correct the highlighted fields.");
        var first = jf.querySelector(".field-error:not(:empty)");
        if (first) first.parentNode.scrollIntoView({ block: "center" });
        return;
      }
      if (jf.querySelector(".honey").value) return;

      var src = new FormData(jf);
      var specText = spec.value === "Other" && src.get("Other Specialization") ? "Other: " + src.get("Other Specialization") : spec.value;
      var fd = new FormData();
      fd.append("_subject", "Job application: " + specText + " - " + src.get("Full Name"));
      fd.append("_template", "table");
      fd.append("_replyto", src.get("Email Address"));
      fd.append("Department", src.get("Department"));
      fd.append("Specialization", specText);
      fd.append("Full Name", src.get("Full Name"));
      fd.append("Phone Number", src.get("Phone Number"));
      fd.append("Email Address", src.get("Email Address"));
      fd.append("City", src.get("City") || "-");
      fd.append("Years of Experience", src.get("Years of Experience"));
      fd.append("Notes", src.get("Notes") || "-");
      fd.append("attachment", cv.files[0], cv.files[0].name);

      jBtn.disabled = true; jBtn.textContent = T("Sending...");
      fetch("https://formsubmit.co/ajax/" + encodeURIComponent(J.sendTo), {
        method: "POST", headers: { "Accept": "application/json" }, body: fd
      }).then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
        .then(function (res) {
          if (!res.ok || String(res.j.success) === "false") throw new Error(res.j.message || "failed");
          jf.hidden = true; $("#job-done").hidden = false;
          $("#job-done").scrollIntoView({ block: "center" });
        })
        .catch(function () {
          jBtn.disabled = false; jBtn.textContent = T("Submit Application");
          jStatus.textContent = T("We could not send your application. Check your internet connection and try again, or email your CV to") + " " + J.sendTo + ".";
        });
    });
  }

  /* Translate the fixed text on the page, then show it */
  I.translatePage(document.body);
  document.documentElement.classList.remove("i18n-pending");
})();
