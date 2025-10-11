// Traduzioni per tutte le pagine
const translations = {
  it: {
    index: {
      title: "Stampa 3D del Futuro",
      subtitle: "Trasforma le tue idee in realtà con la nostra Bambu Lab A1 Mini.",
      startBtn: "Inizia Ora",
      demoBtn: "Guarda la demo",
      servicesTitle: "Servizi Avanzati",
      materialLink: "Materiali supportati",
      speedLink: "Velocità di stampa",
      precisionLink: "Precisione dimensionale",
      projectsTitle: "Progetti recenti",
      footer: "© 2025 Ian Lab - Tutti i diritti riservati"
    },
    PLA: {
      title: "PLA : Acido Polilattico",
      description: "Il PLA è un materiale biodegradabile, rigido e facile da stampare, ideale per prototipi e oggetti decorativi.",
      applications: "Prototipi, oggetti decorativi",
      availability: "✅ Disponibile"
    },
    PLA_PLUS: {
      title: "PLA+ / Tough PLA : PLA Modificato",
      description: "Più resistente e meno fragile del PLA classico, adatto a gadget e pezzi sottoposti a piccoli urti.",
      applications: "Gadget, pezzi sottoposti a piccoli urti",
      availability: "Disponibile su richiesta"
    },
    PLA_SILK: {
      title: "PLA Silk / Wood / Marble / Metal : PLA con additivi estetici",
      description: "Bell'effetto visivo, può essere abrasivo. Perfetto per oggetti artistici, regali e modelli decorativi.",
      applications: "Oggetti artistici, regali, modelli decorativi",
      availability: "Disponibile su richiesta"
    },
    PETG: {
      title: "PETG : Polietilene Tereftalato Glicole",
      description: "Flessibile, resistente e idrofobo, ideale per contenitori e componenti tecnici.",
      applications: "Contenitori, componenti tecnici",
      availability: "Disponibile su richiesta"
    },
    PETG_CF: {
      title: "PETG-CF : PETG con fibre di carbonio",
      description: "Molto rigido, abrasivo, finitura opaca. Ideale per supporti, staffe e parti funzionali.",
      applications: "Supporti, staffe, parti funzionali",
      availability: "✅ Disponibile"
    },
    TPU: {
      title: "TPU 95A : Poliuretano Termoplastico",
      description: "Elastico, resistente all'usura, flessibile. Perfetto per cover, guarnizioni, ruote e oggetti morbidi.",
      applications: "Cover, guarnizioni, ruote, oggetti morbidi",
      availability: "✅ Disponibile"
    },
    ABS: {
      title: "ABS : Acrilonitrile Butadiene Stirene",
      description: "Resistente agli urti e al calore, soggetto a deformazione. Ideale per custodie, elettronica e componenti strutturali.",
      applications: "Custodie, elettronica, componenti strutturali",
      availability: "Disponibile su richiesta"
    },
    ASA: {
      title: "ASA : Acrilico Stirene Acrilonitrile",
      description: "Simile all’ABS ma resistente ai raggi UV. Perfetto per insegne e componenti esterni per auto o bici.",
      applications: "Insegne, componenti esterni per auto o bici",
      availability: "Disponibile su richiesta"
    },
    PA: {
      title: "PA (Nylon) : Poliammide",
      description: "Molto resistente, basso attrito, assorbe umidità. Ideale per ingranaggi, cerniere e guide.",
      applications: "Ingranaggi, cerniere, guide",
      availability: "Disponibile su richiesta"
    },
    PA_CF: {
      title: "PA-CF / PA-GF : Poliammide con fibra di carbonio o vetro",
      description: "Altissima resistenza, abrasivo, rigido. Perfetto per robotica e parti strutturali.",
      applications: "Robotica, parti strutturali, componenti sottoposti a carico",
      availability: "Disponibile su richiesta"
    },
    PC: {
      title: "PC / PC-Blend : Policarbonato",
      description: "Estremamente resistente, rigido, richiede alte temperature. Ideale per supporti tecnici e prototipi meccanici.",
      applications: "Supporti tecnici, prototipi meccanici",
      availability: "Disponibile su richiesta"
    },
    PVA: {
      title: "PVA : Alcol Polivinilico",
      description: "Solubile in acqua, sensibile all’umidità. Perfetto per supporti per PLA e stampe multiestrusione.",
      applications: "Supporti per PLA, stampe multiestrusione",
      availability: "Disponibile su richiesta"
    },
    BVOH: {
      title: "BVOH : Copolimero di Butandiolo e Vinilalcool",
      description: "Solubile in acqua, più stabile del PVA. Ideale per supporti per PETG e materiali tecnici.",
      applications: "Supporti per PETG e materiali tecnici",
      availability: "Disponibile su richiesta"
    }
  },
  en: {
    index: {
      title: "3D Printing of the Future",
      subtitle: "Turn your ideas into reality with our Bambu Lab A1 Mini.",
      startBtn: "Start Now",
      demoBtn: "Watch the demo",
      servicesTitle: "Advanced Services",
      materialLink: "Supported Materials",
      speedLink: "Printing Speed",
      precisionLink: "Dimensional Accuracy",
      projectsTitle: "Recent Projects",
      footer: "© 2025 Ian Lab - All rights reserved"
    },
    PLA: {
      title: "PLA : Polylactic Acid",
      description: "PLA is a biodegradable, rigid and easy-to-print material, ideal for prototypes and decorative objects.",
      applications: "Prototypes, decorative objects",
      availability: "✅ Available"
    },
    PLA_PLUS: {
      title: "PLA+ / Tough PLA : Modified PLA",
      description: "Stronger and less brittle than classic PLA, suitable for gadgets and small-impact parts.",
      applications: "Gadgets, small-impact parts",
      availability: "Available on request"
    },
    PLA_SILK: {
      title: "PLA Silk / Wood / Marble / Metal : PLA with aesthetic additives",
      description: "Beautiful visual effect, can be abrasive. Perfect for artistic objects, gifts, and decorative models.",
      applications: "Artistic objects, gifts, decorative models",
      availability: "Available on request"
    },
    PETG: {
      title: "PETG : Polyethylene Terephthalate Glycol",
      description: "Flexible, resistant, and water-repellent, ideal for containers and technical components.",
      applications: "Containers, technical components",
      availability: "Available on request"
    },
    PETG_CF: {
      title: "PETG-CF : PETG with carbon fiber",
      description: "Very rigid, abrasive, matte finish. Ideal for supports, brackets, and functional parts.",
      applications: "Supports, brackets, functional parts",
      availability: "✅ Available"
    },
    TPU: {
      title: "TPU 95A : Thermoplastic Polyurethane",
      description: "Elastic, wear-resistant, flexible. Perfect for covers, seals, wheels, and soft objects.",
      applications: "Covers, seals, wheels, soft objects",
      availability: "✅ Available"
    },
    ABS: {
      title: "ABS : Acrylonitrile Butadiene Styrene",
      description: "Impact and heat resistant, ideal for enclosures, electronics, and structural components.",
      applications: "Enclosures, electronics, structural components",
      availability: "Available on request"
    },
    ASA: {
      title: "ASA : Acrylonitrile Styrene Acrylate",
      description: "Similar to ABS but UV resistant. Perfect for signage and external automotive or bike components.",
      applications: "Signage, external automotive or bike components",
      availability: "Available on request"
    },
    PA: {
      title: "PA (Nylon) : Polyamide",
      description: "Very resistant, low friction, absorbs moisture. Ideal for gears, hinges, and guides.",
      applications: "Gears, hinges, guides",
      availability: "Available on request"
    },
    PA_CF: {
      title: "PA-CF / PA-GF : Polyamide with carbon or glass fiber",
      description: "Very high resistance, abrasive, rigid. Perfect for robotics and structural parts.",
      applications: "Robotics, structural parts, load-bearing components",
      availability: "Available on request"
    },
    PC: {
      title: "PC / PC-Blend : Polycarbonate",
      description: "Extremely resistant, rigid, requires high temperatures. Ideal for technical supports and mechanical prototypes.",
      applications: "Technical supports, mechanical prototypes",
      availability: "Available on request"
    },
    PVA: {
      title: "PVA : Polyvinyl Alcohol",
      description: "Water-soluble, moisture sensitive. Perfect for supports for PLA and multi-extrusion prints.",
      applications: "Supports for PLA, multi-extrusion prints",
      availability: "Available on request"
    },
    BVOH: {
      title: "BVOH : Butanediol Vinyl Alcohol Copolymer",
      description: "Water-soluble, more stable than PVA. Ideal for supports for PETG and technical materials.",
      applications: "Supports for PETG and technical materials",
      availability: "Available on request"
    }
  }
};

// Funzione per applicare la lingua
function applyLanguage(lang) {
  document.documentElement.lang = lang;
  const page = document.body.dataset.page;
  const t = translations[lang][page];
  if (!t) return;

  // Aggiorna tutti i campi se esistono
  for (const key in t
