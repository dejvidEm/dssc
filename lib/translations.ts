export type Language = "sk" | "en" | "de"

export interface Translations {
  nav: {
    home: string
    about: string
    services: string
    gallery: string
    contact: string
  }
  hero: {
    title: string
    subtitle: string
    description: string
    cta1: string
    cta2: string
    employees: string
    reviews: string
  }
  features: {
    title: string
    subtitle: string
    description: string
    feature1: {
      title: string
      description: string
      advantage1: string
      advantage2: string
      advantage3: string
    }
    feature2: {
      title: string
      description: string
      advantage1: string
      advantage2: string
      advantage3: string
    }
    feature3: {
      title: string
      description: string
      advantage1: string
      advantage2: string
      advantage3: string
    }
  }
  testimonials: {
    title: string
    subtitle: string
    testimonial1: {
      name: string
      role: string
      company: string
      content: string
    }
    testimonial2: {
      name: string
      role: string
      company: string
      content: string
    }
    testimonial3: {
      name: string
      role: string
      company: string
      content: string
    }
    testimonial4: {
      name: string
      role: string
      company: string
      content: string
    }
  }
  about: {
    title: string
    description: string
    mission: string
    vision: string
  }
  services: {
    title: string
    description: string
    service1: {
      title: string
      description: string
    }
    service2: {
      title: string
      description: string
    }
    service3: {
      title: string
      description: string
    }
    features: {
      strategicPlanning: string
      marketAnalysis: string
      riskAssessment: string
      performanceOptimization: string
      fullProjectManagement: string
      qualityAssurance: string
      timelineManagement: string
      resourceAllocation: string
      support24: string
      regularUpdates: string
      maintenance: string
      technicalAssistance: string
    }
    pricing: {
      from: string
      month: string
    }
    badges: {
      mostPopular: string
    }
    buttons: {
      getStarted: string
      learnMore: string
    }
    additional: {
      title: string
      subtitle: string
      expressService: {
        title: string
        description: string
      }
      securityAudit: {
        title: string
        description: string
      }
      innovationWorkshop: {
        title: string
        description: string
      }
    }
    process: {
      title: string
      subtitle: string
      discovery: {
        title: string
        description: string
      }
      planning: {
        title: string
        description: string
      }
      execution: {
        title: string
        description: string
      }
      delivery: {
        title: string
        description: string
      }
    }
  }
  contact: {
    title: string
    description: string
    form: {
      name: string
      email: string
      message: string
      submit: string
    }
    info: {
      email: {
        title: string
        description: string
      }
      phone: {
        title: string
        description: string
      }
      office: {
        title: string
        description: string
      }
      responseTime: {
        title: string
        details: string
        description: string
      }
    }
    map: {
      title: string
      description: string
      interactiveMap: string
    }
    faq: {
      title: string
      question1: {
        question: string
        answer: string
      }
      question2: {
        question: string
        answer: string
      }
      question3: {
        question: string
        answer: string
      }
    }
  }
  heading: {
    defaultTitle: string
    defaultButton: string
  }
  cta: {
    title: string
    subtitle: string
    primaryButton: string
    secondaryButton: string
    feature1: string
    feature2: string
    feature3: string
  }
  footer: {
    companyName: string
    description: string
    services: {
      title: string
      items: {
        climateControl: string
        security: string
        flexibleRental: string
        onlineManagement: string
        movingSupplies: string
      }
    }
    company: {
      title: string
      items: {
        about: string
        locations: string
        contact: string
        careers: string
        news: string
      }
    }
    support: {
      title: string
      items: {
        helpCenter: string
        faq: string
        contactSupport: string
        storageGuide: string
        movingTips: string
      }
    }
    legal: {
      title: string
      items: {
        privacy: string
        terms: string
        accessibility: string
        sitemap: string
      }
    }
    copyright: string
    rights: string
  }
}

export const translations: Record<Language, Translations> = {
  sk: {
    nav: {
      home: "Domov",
      about: "O nás",
      services: "Služby",
      gallery: "Galéria",
      contact: "Kontakt",
    },
    hero: {
      title: "Bezpečné, čisté a pohodlné",
      subtitle: "Samoobslužné skladovanie",
      description: "Skladujte svoje veci bezpečne v našich moderných zariadeniach. Klimatizované jednotky, 24/7 bezpečnosť a flexibilné možnosti prenájmu pre všetky vaše skladovacie potreby.",
      cta1: "Rezervovať jednotku",
      cta2: "Zobraziť ceny",
      employees: "45+ zamestnancov",
      reviews: "5.0 (2.5k recenzií)",
    },
    features: {
      title: "Funkcie",
      subtitle: "Prémiové skladovacie riešenia navrhnuté pre váš pokoj",
      description: "Zažite rozdiel s našimi modernými zariadeniami, pokročilými bezpečnostnými systémami a flexibilnými skladovacími možnosťami prispôsobenými všetkým vašim skladovacím potrebám.",
      feature1: {
        title: "Klimatizované skladovacie jednotky",
        description: "Chráňte svoje cenné veci v našich moderných klimatizovaných skladovacích jednotkách, ktoré udržiavajú optimálnu teplotu a vlhkosť.",
        advantage1: "Teplota kontrolovaná medzi 13-29°C",
        advantage2: "Kontrola vlhkosti zabraňuje plesniam a hnilobe",
        advantage3: "Ideálne pre elektroniku, dokumenty a nábytok",
      },
      feature2: {
        title: "24/7 Bezpečnosť a kontrola prístupu",
        description: "Vaše veci sú chránené 24 hodín denne s pokročilými bezpečnostnými systémami a kontrolovaným prístupom pre úplný pokoj.",
        advantage1: "24/7 video dohľadové monitorovanie",
        advantage2: "Elektronický prístup k bráne s osobnými kódmi",
        advantage3: "Dobre osvetlené zariadenia pre bezpečný prístup kedykoľvek",
      },
      feature3: {
        title: "Flexibilné možnosti prenájmu",
        description: "Vyberte si z rôznych veľkostí jednotiek a podmienok prenájmu, ktoré vyhovujú vašim potrebám, s jednoduchým online správou a platbami.",
        advantage1: "Rôzne veľkosti jednotiek od 5x5 do 10x30",
        advantage2: "Mesačné nájomné zmluvy",
        advantage3: "Online správa účtu a platby",
      },
    },
    testimonials: {
      title: "Čo hovoria naši klienti",
      subtitle: "Prečítajte si skúsenosti našich spokojných klientov",
      testimonial1: {
        name: "Mária Nováková",
        role: "Generálna riaditeľka",
        company: "TechStart s.r.o.",
        content:
          "Výnimočná kvalita služieb a profesionálny prístup. Naša spolupráca priniesla vynikajúce výsledky a odporúčam ich každému, kto hľadá spoľahlivého partnera.",
      },
      testimonial2: {
        name: "Peter Kováč",
        role: "Projektový manažér",
        company: "InnovateCorp",
        content:
          "Tím dokázal splniť všetky naše požiadavky v stanovenom termíne. Ich odbornosť a pozornosť k detailom boli kľúčové pre úspech nášho projektu.",
      },
      testimonial3: {
        name: "Anna Svobodová",
        role: "Marketingová riaditeľka",
        company: "GrowthAgency",
        content:
          "Profesionálny prístup a inovatívne riešenia. Spolupráca s nimi výrazne zlepšila našu efektivitu a pomohla nám dosiahnuť naše obchodné ciele.",
      },
      testimonial4: {
        name: "Tomáš Dvořák",
        role: "Zakladateľ",
        company: "StartupHub",
        content:
          "Ich strategické poradenstvo a implementácia boli presne to, čo sme potrebovali. Výsledky prekonali naše očakávania a určite budeme pokračovať v spolupráci.",
      },
    },
    about: {
      title: "O nás",
      description: "Sme tím odborníkov s dlhoročnými skúsenosťami v našom odbore.",
      mission: "Naša misia je poskytovať kvalitné služby našim klientom.",
      vision: "Naša vízia je byť lídrom v našom odbore.",
    },
    services: {
      title: "Naše služby",
      description: "Ponúkame široký rozsah profesionálnych služieb.",
      service1: {
        title: "Konzultácie",
        description: "Odborné poradenstvo pre váš biznis.",
      },
      service2: {
        title: "Implementácia",
        description: "Realizácia vašich projektov od začiatku do konca.",
      },
      service3: {
        title: "Podpora",
        description: "Nepretržitá podpora pre vašu spokojnosť.",
      },
      features: {
        strategicPlanning: "Strategické plánovanie",
        marketAnalysis: "Analýza trhu",
        riskAssessment: "Hodnotenie rizík",
        performanceOptimization: "Optimalizácia výkonu",
        fullProjectManagement: "Kompletné riadenie projektov",
        qualityAssurance: "Zabezpečenie kvality",
        timelineManagement: "Riadenie harmonogramu",
        resourceAllocation: "Alokácia zdrojov",
        support24: "Podpora 24/7",
        regularUpdates: "Pravidelné aktualizácie",
        maintenance: "Údržba",
        technicalAssistance: "Technická pomoc",
      },
      pricing: {
        from: "Od",
        month: "mesiac",
      },
      badges: {
        mostPopular: "Najpopulárnejšie",
      },
      buttons: {
        getStarted: "Začať",
        learnMore: "Dozvedieť sa viac",
      },
      additional: {
        title: "Dodatočné služby",
        subtitle: "Špecializované riešenia prispôsobené vašim jedinečným požiadavkám.",
        expressService: {
          title: "Expresná služba",
          description: "Rýchle riešenia pre urgentné projekty s vyhradenými zdrojmi.",
        },
        securityAudit: {
          title: "Bezpečnostný audit",
          description: "Komplexné hodnotenie bezpečnosti a testovanie zraniteľností.",
        },
        innovationWorkshop: {
          title: "Inovačný workshop",
          description: "Kolaboratívne stretnutia na identifikáciu nových príležitostí a riešení.",
        },
      },
      process: {
        title: "Náš proces",
        subtitle: "Overená metodológia, ktorá zabezpečuje úspešné dodanie projektov.",
        discovery: {
          title: "Objavovanie",
          description: "Pochopenie vašich potrieb a cieľov",
        },
        planning: {
          title: "Plánovanie",
          description: "Vytvorenie detailnej cestovnej mapy a stratégie",
        },
        execution: {
          title: "Realizácia",
          description: "Implementácia riešení s presnosťou",
        },
        delivery: {
          title: "Dodanie",
          description: "Zabezpečenie kvality a spokojnosti klienta",
        },
      },
    },
    contact: {
      title: "Kontaktujte nás",
      description: "Radi sa s vami spojíme a prediskutujeme vaše potreby.",
      form: {
        name: "Meno",
        email: "Email",
        message: "Správa",
        submit: "Odoslať",
      },
      info: {
        email: {
          title: "Email",
          description: "Pošlite nám email kedykoľvek",
        },
        phone: {
          title: "Telefón",
          description: "Po-Pia od 8:00 do 18:00",
        },
        office: {
          title: "Kancelária",
          description: "Navštívte našu kanceláriu",
        },
        responseTime: {
          title: "Doba odozvy",
          details: "Do 24 hodín",
          description: "Rýchlo sa vám ozveme",
        },
      },
      map: {
        title: "Nájdite nás",
        description: "Naša kancelária v Bratislave",
        interactiveMap: "Interaktívna mapa",
      },
      faq: {
        title: "Často kladené otázky",
        question1: {
          question: "Ako rýchlo odpovedáte?",
          answer: "Na všetky otázky zvyčajne odpovedáme do 24 hodín počas pracovných dní.",
        },
        question2: {
          question: "Ponúkate bezplatné konzultácie?",
          answer: "Áno, ponúkame bezplatnú úvodnú konzultáciu na prediskutovanie požiadaviek vášho projektu.",
        },
        question3: {
          question: "Aké jazyky podporujete?",
          answer: "Poskytujeme služby v slovenčine, angličtine a nemčine pre našu rôznorodú klientelu.",
        },
      },
    },
    heading: {
      defaultTitle: "Skladovacie riešenia pre váš úspech",
      defaultButton: "Začať teraz",
    },
    cta: {
      title: "Pripravení začať s bezpečným skladovaním?",
      subtitle: "Rezervujte si svoju skladovaciu jednotku ešte dnes a získajte prvý mesiac zdarma. Klimatizované jednotky, 24/7 bezpečnosť a flexibilné možnosti prenájmu.",
      primaryButton: "Rezervovať jednotku",
      secondaryButton: "Zobraziť ceny",
      feature1: "Prvý mesiac zdarma",
      feature2: "Bezpečnosť 24/7",
      feature3: "Flexibilný prenájom",
    },
    footer: {
      companyName: "DSSCompany",
      description: "Bezpečné a pohodlné skladovacie riešenia pre všetky vaše potreby. Klimatizované jednotky, 24/7 bezpečnosť a flexibilné možnosti prenájmu.",
      services: {
        title: "Služby",
        items: {
          climateControl: "Klimatizované skladovanie",
          security: "24/7 Bezpečnosť",
          flexibleRental: "Flexibilný prenájom",
          onlineManagement: "Online správa",
          movingSupplies: "Presťahovacie potreby",
        }
      },
      company: {
        title: "Spoločnosť",
        items: {
          about: "O nás",
          locations: "Lokality",
          contact: "Kontakt",
          careers: "Kariéra",
          news: "Novinky",
        }
      },
      support: {
        title: "Podpora",
        items: {
          helpCenter: "Centrum pomoci",
          faq: "Často kladené otázky",
          contactSupport: "Kontaktovať podporu",
          storageGuide: "Skladovací sprievodca",
          movingTips: "Tipy na presťahovanie",
        }
      },
      legal: {
        title: "Právne informácie",
        items: {
          privacy: "Ochrana súkromia",
          terms: "Podmienky",
          accessibility: "Dostupnosť",
          sitemap: "Mapa stránky",
        }
      },
      copyright: "© 2024 DSSCompany.",
      rights: "Všetky práva vyhradené.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      gallery: "Gallery",
      contact: "Contact",
    },
    hero: {
      title: "Secure, Clean & Convenient",
      subtitle: "Self Storage",
      description: "Store your belongings safely with our state-of-the-art facilities. Climate-controlled units, 24/7 security, and flexible rental options to meet all your storage needs.",
      cta1: "Reserve Unit",
      cta2: "View Pricing",
      employees: "45+ employees",
      reviews: "5.0 (2.5k reviews)",
    },
    features: {
      title: "Features",
      subtitle: "Premium Storage Solutions Designed for Your Peace of Mind",
      description: "Experience the difference with our modern facilities, advanced security systems, and flexible storage options tailored to meet all your storage needs.",
      feature1: {
        title: "Climate-Controlled Storage Units",
        description: "Protect your valuable belongings with our state-of-the-art climate-controlled storage units that maintain optimal temperature and humidity levels.",
        advantage1: "Temperature controlled between 55-85°F",
        advantage2: "Humidity control prevents mold and mildew",
        advantage3: "Perfect for electronics, documents, and furniture",
      },
      feature2: {
        title: "24/7 Security & Access Control",
        description: "Your belongings are protected around the clock with advanced security systems and controlled access to ensure peace of mind.",
        advantage1: "24/7 video surveillance monitoring",
        advantage2: "Electronic gate access with personal codes",
        advantage3: "Well-lit facilities for safe access anytime",
      },
      feature3: {
        title: "Flexible Rental Options",
        description: "Choose from various unit sizes and rental terms that fit your needs, with easy online management and payment options.",
        advantage1: "Multiple unit sizes from 5x5 to 10x30",
        advantage2: "Month-to-month rental agreements",
        advantage3: "Online account management and payments",
      },
    },
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Read about the experiences of our satisfied clients",
      testimonial1: {
        name: "Maria Johnson",
        role: "CEO",
        company: "TechStart Ltd.",
        content:
          "Exceptional service quality and professional approach. Our collaboration brought excellent results and I recommend them to anyone looking for a reliable partner.",
      },
      testimonial2: {
        name: "Peter Smith",
        role: "Project Manager",
        company: "InnovateCorp",
        content:
          "The team managed to meet all our requirements within the deadline. Their expertise and attention to detail were crucial for our project's success.",
      },
      testimonial3: {
        name: "Anna Wilson",
        role: "Marketing Director",
        company: "GrowthAgency",
        content:
          "Professional approach and innovative solutions. Working with them significantly improved our efficiency and helped us achieve our business goals.",
      },
      testimonial4: {
        name: "Thomas Davis",
        role: "Founder",
        company: "StartupHub",
        content:
          "Their strategic consulting and implementation were exactly what we needed. The results exceeded our expectations and we will definitely continue our collaboration.",
      },
    },
    about: {
      title: "About Us",
      description: "We are a team of experts with years of experience in our field.",
      mission: "Our mission is to provide quality services to our clients.",
      vision: "Our vision is to be a leader in our industry.",
    },
    services: {
      title: "Our Services",
      description: "We offer a wide range of professional services.",
      service1: {
        title: "Consulting",
        description: "Expert advice for your business.",
      },
      service2: {
        title: "Implementation",
        description: "End-to-end project realization.",
      },
      service3: {
        title: "Support",
        description: "Continuous support for your satisfaction.",
      },
      features: {
        strategicPlanning: "Strategic Planning",
        marketAnalysis: "Market Analysis",
        riskAssessment: "Risk Assessment",
        performanceOptimization: "Performance Optimization",
        fullProjectManagement: "Full Project Management",
        qualityAssurance: "Quality Assurance",
        timelineManagement: "Timeline Management",
        resourceAllocation: "Resource Allocation",
        support24: "24/7 Support",
        regularUpdates: "Regular Updates",
        maintenance: "Maintenance",
        technicalAssistance: "Technical Assistance",
      },
      pricing: {
        from: "From",
        month: "month",
      },
      badges: {
        mostPopular: "Most Popular",
      },
      buttons: {
        getStarted: "Get Started",
        learnMore: "Learn More",
      },
      additional: {
        title: "Additional Services",
        subtitle: "Specialized solutions tailored to your unique requirements.",
        expressService: {
          title: "Express Service",
          description: "Fast-track solutions for urgent projects with dedicated resources.",
        },
        securityAudit: {
          title: "Security Audit",
          description: "Comprehensive security assessment and vulnerability testing.",
        },
        innovationWorkshop: {
          title: "Innovation Workshop",
          description: "Collaborative sessions to identify new opportunities and solutions.",
        },
      },
      process: {
        title: "Our Process",
        subtitle: "A proven methodology that ensures successful project delivery.",
        discovery: {
          title: "Discovery",
          description: "Understanding your needs and objectives",
        },
        planning: {
          title: "Planning",
          description: "Creating a detailed roadmap and strategy",
        },
        execution: {
          title: "Execution",
          description: "Implementing solutions with precision",
        },
        delivery: {
          title: "Delivery",
          description: "Ensuring quality and client satisfaction",
        },
      },
    },
    contact: {
      title: "Contact Us",
      description: "We would love to hear from you and discuss your needs.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send",
      },
      info: {
        email: {
          title: "Email",
          description: "Send us an email anytime",
        },
        phone: {
          title: "Phone",
          description: "Mon-Fri from 8am to 6pm",
        },
        office: {
          title: "Office",
          description: "Visit our office",
        },
        responseTime: {
          title: "Response Time",
          details: "Within 24 hours",
          description: "We'll get back to you quickly",
        },
      },
      map: {
        title: "Find Us",
        description: "Our office location in Bratislava",
        interactiveMap: "Interactive Map",
      },
      faq: {
        title: "Frequently Asked Questions",
        question1: {
          question: "How quickly do you respond?",
          answer: "We typically respond to all inquiries within 24 hours during business days.",
        },
        question2: {
          question: "Do you offer free consultations?",
          answer: "Yes, we offer a free initial consultation to discuss your project requirements.",
        },
        question3: {
          question: "What languages do you support?",
          answer: "We provide services in Slovak, English, and German to serve our diverse clientele.",
        },
      },
    },
    heading: {
      defaultTitle: "Storage Solutions for Your Success",
      defaultButton: "Get Started",
    },
    cta: {
      title: "Ready to Start Secure Storage?",
      subtitle: "Reserve your storage unit today and get your first month free. Climate-controlled units, 24/7 security, and flexible rental options.",
      primaryButton: "Reserve Unit",
      secondaryButton: "View Pricing",
      feature1: "First month free",
      feature2: "24/7 Security",
      feature3: "Flexible rental",
    },
    footer: {
      companyName: "DSSCompany",
      description: "Secure and convenient storage solutions for all your needs. Climate-controlled units, 24/7 security, and flexible rental options.",
      services: {
        title: "Services",
        items: {
          climateControl: "Climate-Controlled Storage",
          security: "24/7 Security",
          flexibleRental: "Flexible Rental",
          onlineManagement: "Online Management",
          movingSupplies: "Moving Supplies",
        }
      },
      company: {
        title: "Company",
        items: {
          about: "About Us",
          locations: "Locations",
          contact: "Contact",
          careers: "Careers",
          news: "News",
        }
      },
      support: {
        title: "Support",
        items: {
          helpCenter: "Help Center",
          faq: "FAQ",
          contactSupport: "Contact Support",
          storageGuide: "Storage Guide",
          movingTips: "Moving Tips",
        }
      },
      legal: {
        title: "Legal",
        items: {
          privacy: "Privacy Policy",
          terms: "Terms of Service",
          accessibility: "Accessibility",
          sitemap: "Sitemap",
        }
      },
      copyright: "© 2024 DSSCompany.",
      rights: "All rights reserved.",
    },
  },
  de: {
    nav: {
      home: "Startseite",
      about: "Über uns",
      services: "Dienstleistungen",
      gallery: "Galerie",
      contact: "Kontakt",
    },
    hero: {
      title: "Sicher, sauber & bequem",
      subtitle: "Selbstlagerung",
      description: "Lagern Sie Ihre Sachen sicher in unseren modernen Einrichtungen. Klimatisierte Einheiten, 24/7 Sicherheit und flexible Mietoptionen für alle Ihre Lagerbedürfnisse.",
      cta1: "Einheit reservieren",
      cta2: "Preise anzeigen",
      employees: "45+ Mitarbeiter",
      reviews: "5.0 (2.5k Bewertungen)",
    },
    features: {
      title: "Funktionen",
      subtitle: "Premium-Lagerlösungen für Ihren Seelenfrieden",
      description: "Erleben Sie den Unterschied mit unseren modernen Einrichtungen, fortschrittlichen Sicherheitssystemen und flexiblen Lageroptionen, die auf alle Ihre Lagerbedürfnisse zugeschnitten sind.",
      feature1: {
        title: "Klimatisierte Lagerungseinheiten",
        description: "Schützen Sie Ihre wertvollen Sachen mit unseren modernen klimatisierten Lagerungseinheiten, die optimale Temperatur und Luftfeuchtigkeit aufrechterhalten.",
        advantage1: "Temperatur kontrolliert zwischen 13-29°C",
        advantage2: "Luftfeuchtigkeitskontrolle verhindert Schimmel und Mehltau",
        advantage3: "Perfekt für Elektronik, Dokumente und Möbel",
      },
      feature2: {
        title: "24/7 Sicherheit & Zugangskontrolle",
        description: "Ihre Sachen sind rund um die Uhr mit fortschrittlichen Sicherheitssystemen und kontrolliertem Zugang geschützt, um Seelenfrieden zu gewährleisten.",
        advantage1: "24/7 Videoüberwachung",
        advantage2: "Elektronischer Torzugang mit persönlichen Codes",
        advantage3: "Gut beleuchtete Einrichtungen für sicheren Zugang jederzeit",
      },
      feature3: {
        title: "Flexible Mietoptionen",
        description: "Wählen Sie aus verschiedenen Einheitsgrößen und Mietbedingungen, die Ihren Bedürfnissen entsprechen, mit einfachem Online-Management und Zahlungsoptionen.",
        advantage1: "Verschiedene Einheitsgrößen von 5x5 bis 10x30",
        advantage2: "Monat-zu-Monat Mietverträge",
        advantage3: "Online-Kontoverwaltung und Zahlungen",
      },
    },
    testimonials: {
      title: "Was unsere Kunden sagen",
      subtitle: "Lesen Sie über die Erfahrungen unserer zufriedenen Kunden",
      testimonial1: {
        name: "Maria Müller",
        role: "Geschäftsführerin",
        company: "TechStart GmbH",
        content:
          "Außergewöhnliche Servicequalität und professioneller Ansatz. Unsere Zusammenarbeit brachte hervorragende Ergebnisse und ich empfehle sie jedem, der einen zuverlässigen Partner sucht.",
      },
      testimonial2: {
        name: "Peter Schmidt",
        role: "Projektmanager",
        company: "InnovateCorp",
        content:
          "Das Team schaffte es, alle unsere Anforderungen innerhalb der Frist zu erfüllen. Ihre Expertise und Liebe zum Detail waren entscheidend für den Erfolg unseres Projekts.",
      },
      testimonial3: {
        name: "Anna Weber",
        role: "Marketing-Direktorin",
        company: "GrowthAgency",
        content:
          "Professioneller Ansatz und innovative Lösungen. Die Zusammenarbeit mit ihnen verbesserte unsere Effizienz erheblich und half uns, unsere Geschäftsziele zu erreichen.",
      },
      testimonial4: {
        name: "Thomas Fischer",
        role: "Gründer",
        company: "StartupHub",
        content:
          "Ihre strategische Beratung und Umsetzung waren genau das, was wir brauchten. Die Ergebnisse übertrafen unsere Erwartungen und wir werden definitiv unsere Zusammenarbeit fortsetzen.",
      },
    },
    about: {
      title: "Über uns",
      description: "Wir sind ein Team von Experten mit jahrelanger Erfahrung in unserem Bereich.",
      mission: "Unsere Mission ist es, qualitativ hochwertige Dienstleistungen für unsere Kunden zu erbringen.",
      vision: "Unsere Vision ist es, ein Marktführer in unserer Branche zu sein.",
    },
    services: {
      title: "Unsere Dienstleistungen",
      description: "Wir bieten eine breite Palette professioneller Dienstleistungen.",
      service1: {
        title: "Beratung",
        description: "Expertenberatung für Ihr Unternehmen.",
      },
      service2: {
        title: "Umsetzung",
        description: "End-to-End-Projektrealisierung.",
      },
      service3: {
        title: "Support",
        description: "Kontinuierliche Unterstützung für Ihre Zufriedenheit.",
      },
      features: {
        strategicPlanning: "Strategische Planung",
        marketAnalysis: "Marktanalyse",
        riskAssessment: "Risikobewertung",
        performanceOptimization: "Leistungsoptimierung",
        fullProjectManagement: "Vollständiges Projektmanagement",
        qualityAssurance: "Qualitätssicherung",
        timelineManagement: "Zeitplanmanagement",
        resourceAllocation: "Ressourcenzuteilung",
        support24: "24/7 Support",
        regularUpdates: "Regelmäßige Updates",
        maintenance: "Wartung",
        technicalAssistance: "Technische Unterstützung",
      },
      pricing: {
        from: "Ab",
        month: "Monat",
      },
      badges: {
        mostPopular: "Am beliebtesten",
      },
      buttons: {
        getStarted: "Loslegen",
        learnMore: "Mehr erfahren",
      },
      additional: {
        title: "Zusätzliche Dienstleistungen",
        subtitle: "Spezialisierte Lösungen, die auf Ihre individuellen Anforderungen zugeschnitten sind.",
        expressService: {
          title: "Express-Service",
          description: "Schnelle Lösungen für dringende Projekte mit dedizierten Ressourcen.",
        },
        securityAudit: {
          title: "Sicherheitsaudit",
          description: "Umfassende Sicherheitsbewertung und Schwachstellentests.",
        },
        innovationWorkshop: {
          title: "Innovations-Workshop",
          description: "Kollaborative Sitzungen zur Identifizierung neuer Möglichkeiten und Lösungen.",
        },
      },
      process: {
        title: "Unser Prozess",
        subtitle: "Eine bewährte Methodik, die eine erfolgreiche Projektabwicklung gewährleistet.",
        discovery: {
          title: "Entdeckung",
          description: "Verstehen Ihrer Bedürfnisse und Ziele",
        },
        planning: {
          title: "Planung",
          description: "Erstellung einer detaillierten Roadmap und Strategie",
        },
        execution: {
          title: "Umsetzung",
          description: "Präzise Implementierung von Lösungen",
        },
        delivery: {
          title: "Lieferung",
          description: "Sicherstellung von Qualität und Kundenzufriedenheit",
        },
      },
    },
    contact: {
      title: "Kontaktieren Sie uns",
      description: "Wir würden gerne von Ihnen hören und Ihre Bedürfnisse besprechen.",
      form: {
        name: "Name",
        email: "E-Mail",
        message: "Nachricht",
        submit: "Senden",
      },
      info: {
        email: {
          title: "E-Mail",
          description: "Senden Sie uns jederzeit eine E-Mail",
        },
        phone: {
          title: "Telefon",
          description: "Mo-Fr von 8:00 bis 18:00 Uhr",
        },
        office: {
          title: "Büro",
          description: "Besuchen Sie unser Büro",
        },
        responseTime: {
          title: "Antwortzeit",
          details: "Innerhalb von 24 Stunden",
          description: "Wir melden uns schnell bei Ihnen",
        },
      },
      map: {
        title: "Finden Sie uns",
        description: "Unser Bürostandort in Bratislava",
        interactiveMap: "Interaktive Karte",
      },
      faq: {
        title: "Häufig gestellte Fragen",
        question1: {
          question: "Wie schnell antworten Sie?",
          answer: "Wir antworten normalerweise innerhalb von 24 Stunden an Werktagen auf alle Anfragen.",
        },
        question2: {
          question: "Bieten Sie kostenlose Beratungen an?",
          answer: "Ja, wir bieten eine kostenlose Erstberatung an, um Ihre Projektanforderungen zu besprechen.",
        },
        question3: {
          question: "Welche Sprachen unterstützen Sie?",
          answer:
            "Wir bieten Dienstleistungen in Slowakisch, Englisch und Deutsch an, um unsere vielfältige Kundschaft zu bedienen.",
        },
      },
    },
    heading: {
      defaultTitle: "Lagerlösungen für Ihren Erfolg",
      defaultButton: "Loslegen",
    },
    cta: {
      title: "Bereit für sicheres Lagern?",
      subtitle: "Reservieren Sie heute Ihre Lagereinheit und erhalten Sie den ersten Monat kostenlos. Klimatisierte Einheiten, 24/7 Sicherheit und flexible Mietoptionen.",
      primaryButton: "Einheit reservieren",
      secondaryButton: "Preise anzeigen",
      feature1: "Erster Monat kostenlos",
      feature2: "24/7 Sicherheit",
      feature3: "Flexible Miete",
    },
    footer: {
      companyName: "DSSCompany",
      description: "Sichere und bequeme Lagerlösungen für alle Ihre Bedürfnisse. Klimatisierte Einheiten, 24/7 Sicherheit und flexible Mietoptionen.",
      services: {
        title: "Dienstleistungen",
        items: {
          climateControl: "Klimatisierte Lagerung",
          security: "24/7 Sicherheit",
          flexibleRental: "Flexible Miete",
          onlineManagement: "Online-Verwaltung",
          movingSupplies: "Umzugsmaterialien",
        }
      },
      company: {
        title: "Unternehmen",
        items: {
          about: "Über uns",
          locations: "Standorte",
          contact: "Kontakt",
          careers: "Karriere",
          news: "Nachrichten",
        }
      },
      support: {
        title: "Support",
        items: {
          helpCenter: "Hilfezentrum",
          faq: "FAQ",
          contactSupport: "Support kontaktieren",
          storageGuide: "Lagerführer",
          movingTips: "Umzugstipps",
        }
      },
      legal: {
        title: "Rechtliches",
        items: {
          privacy: "Datenschutz",
          terms: "Nutzungsbedingungen",
          accessibility: "Barrierefreiheit",
          sitemap: "Sitemap",
        }
      },
      copyright: "© 2024 DSSCompany.",
      rights: "Alle Rechte vorbehalten.",
    },
  },
}
