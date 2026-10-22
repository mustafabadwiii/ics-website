/* =====================================================================
   SITE CONTENT — edit this file only to change the website's content.
   Every value in [square brackets] is a placeholder to replace.
   ===================================================================== */

const SITE = {

  /* ---------- Company ---------- */
  company: {
    name: "ICS FOR DEVELOPMENT AND PROJECTS",
    tagline: "Contracting & Engineering",
    logo: "assets/logo-transparent.png",              // replace with your logo file, e.g. "assets/logo.png"
    logoOnDark: "assets/logo-white.png",   // light version of the logo for the dark Contact section
    backgroundLogo: true,                 // faded logo behind the page: true = show, false = hide
    backgroundLogoImage: "assets/logo-watermark.png", // the faded version of the logo
    backgroundLogoOpacity: 0.09,          // how faded it is: 0.03 = very light, 0.12 = stronger

    // Short introduction shown at the top of the Home page
    intro:
      "We deliver construction and engineering works for commercial, industrial and public projects, " +
      "from mechanical, electrical and plumbing systems to civil works and full general contracting.",

    // Photos for the slideshow at the top of the Home page, in order.
    // Add a photo: put it in assets/projects/hero and add its path here.
    heroImages: [
      "assets/projects/hero/operating-room-visit-1.jpg",
      "assets/projects/hero/operating-room-visit-2.jpg",
      "assets/projects/hero/operating-room-visit-3.jpg",
      "assets/projects/hero/hospital-visit-corridor.jpg",
      "assets/projects/hero/dar-al-shifa-reception.jpg",
      "assets/projects/hero/nurse-station-corridor.jpg",
      "assets/projects/hero/fire-pump-set.jpg",
      "assets/projects/hero/nurse-station-marble.jpg",
      "assets/projects/hero/fire-pump-diesel.jpg",
      "assets/projects/hero/steel-platform-fire-line.jpg",
      "assets/projects/hero/fire-pump-gate-valve.jpg",
      "assets/projects/hero/fire-pump-room.jpg",
      "assets/projects/hero/fire-pump-valves.jpg",
      "assets/projects/hero/ics-lobby.jpg"
    ],
    heroSlideSeconds: 3,                  // seconds each photo stays on screen

    founded: "2012",                    // e.g. "2005"
    experienceYears: "14+",              // shown under "Established"
    projectsCount: "50+",                // shown under "Years of Experience"

    about: {
      history:
        "ICS Al Hassan is a construction and engineering company specializing in MEP works, civil construction, general contracting, and data infrastructure. We are committed to delivering quality projects, maintaining strong client relationships, and providing reliable engineering solutions built on professionalism, integrity, and technical excellence.",
      experience:
        "ICS Al Hassan delivers engineering and construction solutions across MEP works, civil construction, general contracting, and data infrastructure, with a focus on technical quality, efficient execution, and reliable project delivery.",
      vision:
        "To be a trusted leader in construction and engineering, recognized for excellence, innovation, and lasting partnerships with our clients.",
      scope:
        `MEP Works: Mechanical, electrical, and plumbing systems.

Civil Construction: Civil, structural, and building construction works.

General Contracting: Integrated project execution, coordination, and management.

Data Infrastructure: Structured cabling and data infrastructure solutions.

Building & Facilities Maintenance: Preventive and corrective maintenance for buildings and facilities.`
    }
  },

  /* ---------- Contact ---------- */
  contact: {
    address: "22 Ahmed El Zomor St, Nasr City, Cairo",
    // Google Maps link for the office location. Leave "" to search the address above.
    // For an exact pin: Google Maps > tap your location > Share > Copy link, and paste it here.
    mapLink: "https://maps.app.goo.gl/4EFvduXduV3FYbMo7",
    phones: [
      { label: "Office", number: "+20 110 088 5884", dial: "+201100885884" }
    ],
    email: "info@ics-alhassan.com",
    emailLink: "info@ics-alhassan.com",     // the address used when someone clicks the email
    // Extra emails shown under the main email. Add more { label, email } items, or leave [ ] empty.
    otherEmails: [
      { label: "Projects Manager Email", email: "pm@ics-alhassan.com" }
    ]
  },

  /* ---------- Subcontractor & Supplier Registration ----------
     Registrations are sent by email to "sendTo".
     The first time someone registers, the form service (FormSubmit.co)
     sends an activation email to this address. Open it and click
     "Activate Form" once, and every registration after that arrives
     as an email.                                                       */
  registration: {
    sendTo: "pm@ics-alhassan.com",
    // Fields of work the applicant can choose from. Add, remove or rename freely.
    trades: [
      "HVAC",
      "Firefighting",
      "Fire Alarm",
      "Plumbing & Drainage",
      "Electrical Works",
      "Low Current / ELV",
      "Structured Cabling & Data Networks",
      "CCTV & Access Control",
      "BMS (Building Management Systems)",
      "Medical Gases",
      "Elevators & Escalators",
      "Civil & Concrete Works",
      "Steel Structures",
      "Masonry & Plastering",
      "Finishing Works",
      "Gypsum Board & Ceilings",
      "Flooring & Tiling",
      "Painting",
      "Aluminum & Glass",
      "Insulation & Waterproofing",
      "Ductwork Fabrication",
      "Thermal & Acoustic Insulation",
      "Earthworks & Excavation",
      "Equipment Rental",
      "Building Materials Supply",
      "MEP Equipment Supply"
    ]
  },

  /* ---------- Careers (job applications) ----------
     Applications and CVs are sent by email to "sendTo" through FormSubmit.co.
     The first application triggers an activation email to that address:
     open it and click "Activate Form" once.                            */
  careers: {
    sendTo: "pm@ics-alhassan.com",
    // Each department has its own list of specializations. Add, remove or rename freely.
    departments: [
      {
        name: "Engineering",
        specializations: [
          "Mechanical Engineer (HVAC)",
          "Mechanical Engineer (Plumbing & Firefighting)",
          "Electrical Engineer (Power)",
          "Electrical Engineer (Low Current / ELV)",
          "Civil / Structural Engineer",
          "Architectural Engineer",
          "Site Engineer",
          "Technical Office Engineer",
          "Planning Engineer",
          "Quantity Surveyor",
          "QA / QC Engineer",
          "HSE Engineer",
          "MEP Coordinator",
          "Project Manager",
          "Procurement Engineer",
          "Sales Engineer"
        ]
      },
      {
        name: "Accounting",
        specializations: [
          "General Accountant",
          "Project Accountant",
          "Cost Accountant",
          "Tax Accountant",
          "Accounts Payable / Receivable",
          "Treasury Accountant",
          "Chief Accountant",
          "Internal Auditor",
          "Financial Manager"
        ]
      }
    ],
    experienceOptions: [
      "Fresh Graduate",
      "1 to 3 years",
      "3 to 5 years",
      "5 to 10 years",
      "More than 10 years"
    ],
    maxCvSizeMB: 5
  },

  /* ---------- Services ---------- */
  services: [
    {
      title: "MEP Works",
      description:
        "Mechanical, electrical and plumbing works, from installation to testing and commissioning."
    },
    {
      title: "Civil Construction",
      description:
        "Structural and civil works carried out to approved drawings, specifications and site safety standards."
    },
    {
      title: "General Contracting",
      description:
        "Full project delivery under one contract, covering planning, coordination, supervision and handover."
    },
    {
      title: "Database Infrastructure",
      description:
        "Infrastructure works that support data and IT systems within the buildings and facilities we deliver."
    },
    {
      title: "Building & Facilities Maintenance",
      description:
        "Preventive and corrective maintenance for buildings and facilities, keeping MEP systems and building works in reliable operating condition."
    }
  ],

  /* ---------- Clients & Projects ----------
     To add a client: copy one { ... } block, give it a unique "id"
     (lowercase, no spaces), then list its projects inside "projects".
     Each project can have one or more images.                          */

  showSampleNotice: false,   // true shows a "sample data" note above the clients

  /* Each client's projects go inside its "projects: [ ]".
     Copy this example into the brackets and fill it in:

          {
            name: "Project name",
            location: "City",
            description: "Short description of the project and what the company delivered.",
            works: ["MEP Works", "Civil Construction"],
            images: ["assets/projects/photo-1.jpg", "assets/projects/photo-2.jpg"]
          }

     Separate two projects with a comma.  */

  clients: [
    {
      id: "dar-al-shifa",
      name: "Dar Al Shifa Hospital",
      logo: "assets/clients/dar-al-shifa.png",
      projects: []
    },
    {
      id: "el-zeitoun",
      name: "El Zeitoun Specialized Hospital",
      logo: "assets/clients/el-zeitoun.png",
      projects: []
    },
    {
      id: "nasser-institute",
      name: "Nasser Institute Hospital",
      logo: "assets/clients/nasser-institute.png",
      projects: []
    },
    {
      id: "mokattam",
      name: "Mokattam Specialized Hospital",
      logo: "assets/clients/mokattam.png",
      projects: []
    },
    {
      id: "sharm-international",
      name: "Sharm International Hospital",
      logo: "assets/clients/sharm-international.png",
      projects: []
    },
    {
      id: "sharq-el-madina",
      name: "Sharq El-Madina Hospital",
      logo: "assets/clients/sharq-el-madina.png",
      projects: []
    },
    {
      id: "sheikh-zayed",
      name: "Sheikh Zayed Specialized Hospital",
      logo: "assets/clients/sheikh-zayed.png",
      projects: []
    },
    {
      id: "al-haram",
      name: "Al Haram Specialized Hospital",
      logo: "assets/clients/al-haram.png",
      projects: []
    },
    {
      id: "al-salam",
      name: "Al Salam Specialty Hospital",
      logo: "assets/clients/al-salam.png",
      projects: []
    },
    {
      id: "nicd-imbaba",
      name: "Imbaba Chest & Allergy Center (NICD)",
      logo: "assets/clients/nicd-imbaba.png",
      projects: []
    },
    {
      id: "whh-assiut",
      name: "Women Health Hospital, Assiut University",
      logo: "assets/clients/whh-assiut.png",
      projects: []
    },
    {
      id: "qabbary",
      name: "Qabbary Hospital, Alexandria",
      logo: "assets/clients/qabbary.png",
      projects: []
    },
    {
      id: "dcgc-damietta",
      name: "Damietta Cardiology & Gastroenterology Center",
      logo: "assets/clients/dcgc-damietta.png",
      projects: []
    },
    {
      id: "bargasy-motors",
      name: "Bargasy Motors",
      logo: "assets/clients/bargasy-motors.png",
      projects: []
    },
    {
      id: "shabana-stores",
      name: "Shabana Stores",
      logo: "assets/clients/shabana-stores.png",
      projects: []
    },
    {
      id: "khodeir",
      name: "Khodeir",
      logo: "assets/clients/khodeir.png",
      projects: []
    },
    {
      id: "nile-university",
      name: "Nile University",
      logo: "assets/clients/nile-university.png",
      projects: []
    },
    {
      id: "nile-badrawi",
      name: "Nile Badrawi Hospital",
      logo: "assets/clients/nile-badrawi.png",
      projects: []
    },
    {
      id: "dbk-pharma",
      name: "DBK Pharma",
      logo: "assets/clients/dbk-pharma.png",
      projects: []
    },
    {
      id: "el-sherouk",
      name: "El Sherouk Hospital",
      logo: "assets/clients/el-sherouk.png",
      projects: []
    },
    {
      id: "ministry-of-transport",
      name: "Ministry of Transport",
      logo: "assets/clients/ministry-of-transport.png",
      projects: []
    },
    {
      id: "ministry-of-health",
      name: "Ministry of Health & Population",
      logo: "assets/clients/ministry-of-health.png",
      projects: []
    },
    {
      id: "smc-specialized-centers",
      name: "Specialized Medical Centers Secretariat (SMC)",
      logo: "assets/clients/smc-specialized-centers.png",
      projects: []
    },
    {
      id: "nbe-hospital",
      name: "National Bank of Egypt Hospital",
      logo: "assets/clients/nbe-hospital.png",
      projects: []
    },
    {
      id: "luxor-international",
      name: "Luxor International Hospital",
      logo: "assets/clients/luxor-international.png",
      projects: []
    },
    {
      id: "cairo-fatimid",
      name: "Cairo Fatimid Hospital",
      logo: "assets/clients/cairo-fatimid.png",
      projects: []
    },
    {
      id: "al-helal",
      name: "Al Helal Hospital",
      logo: "assets/clients/al-helal.png",
      projects: []
    },
    {
      id: "ashmoun-general",
      name: "Ashmoun General Hospital",
      logo: "assets/clients/ashmoun-general.png",
      projects: []
    },
    {
      id: "mirage-mall",
      name: "Mirage Mall",
      logo: "assets/clients/mirage-mall.png",
      projects: []
    }
  ]
};
