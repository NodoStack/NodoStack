// =========================
//  SISTEMA MULTILENGUAJE
// =========================

// Diccionario de traducciones
const translations = {
  es: {
    navbar: {
      sobre: "Sobre nosotras",
      resolvemos: "¿Qué resolvemos?",
      servicios: "Servicios",
      proyectos: "Proyectos",
      team: "Equipo",
      contacto: "Contacto"
    },
    hero: {
      title: "Donde la tecnología se convierte en soluciones reales."
    },
    cta: "📩 Escribí por WhatsApp",
    sobre: {
      title: "Sobre Nosotras",
      p1: `En <strong>NodoStack</strong> somos un equipo de desarrolladoras apasionadas por transformar ideas en soluciones reales.
      Nacimos con una visión clara: usar la tecnología para <strong>acompañar, crear y generar impacto positivo</strong> en cada etapa de tu proyecto.`,
      list: [
        "Creatividad y colaboración en cada entrega",
        "Soluciones a medida para cada desafío",
        "Experiencias digitales que dejan huella"
      ],
      bold: "No solo programamos, construimos historias digitales. ¡Listas para crear la tuya!"
    },
    resolvemos: {
      title: "¿Qué resolvemos?",
      cards: [
        {
          h5: "Necesidad de acompañamiento técnico",
          p: "Ya sea con entregas puntuales o soporte continuo, trabajamos como tu equipo tecnológico aliado."
        },
        {
          h5: "Desconexión tecnológica",
          p: "Te ayudamos a incorporar herramientas digitales que potencien tu negocio, sin complicaciones."
        },
        {
          h5: "Procesos que necesitan optimización",
          p: "Automatizamos tareas y digitalizamos flujos para que tu tiempo rinda más."
        },
        {
          h5: "Soluciones a medida",
          p: "Desarrollamos plataformas adaptadas 100% a tus necesidades."
        }
      ],
      italic: "Cada proyecto es único y lo resolvemos como tal."
    },
    servicios: {
      title: "Nuestros Servicios",
      cards: [
        {
          h5: "Desarrollo Web & Mobile",
          p: "Construimos sitios y aplicaciones modernas, adaptadas a tus objetivos y preparadas para escalar."
        },
        {
          h5: "Diseño UX/UI",
          p: "Creamos experiencias visuales claras, intuitivas y centradas en las personas que las usan."
        },
        {
          h5: "Consultoría técnica & acompañamiento",
          p: "Te asesoramos desde el inicio hasta el lanzamiento, con la opción de seguir acompañándote con mantenimiento y soporte."
        },
        {
          h5: "Testing y control de calidad",
          p: "Probamos cada parte del producto para asegurar estabilidad, funcionalidad y buena experiencia de uso."
        }
      ]
    },
    proyectos: {
      title: "Soluciones reales, resultados concretos",
      lead: "Creamos herramientas digitales simples, que resuelven problemas reales de tu negocio.",
      cards: [
        {
          h4: "¿Necesitás una página que genere clientes reales?",
          p: "Diseñamos páginas de aterrizaje enfocadas en captar clientes y generar resultados medibles para tu negocio.",
          li: [
            "Diseño atractivo y 100% adaptable a cualquier dispositivo",
            "Optimizada para SEO y velocidad de carga",
            "Integración con formularios de contacto",
            "Enfocada en convertir visitas en ventas reales"
          ]
        },
        {
          h4: "¿Querés vender online?",
          p: "Desarrollamos una app (web + móvil) donde los clientes compran fácilmente y vos controlás todo desde tu panel.",
          li: [
            "Catálogo con productos y fotos",
            "Pagos online y gestión de pedidos",
            "Funciona desde celular o computadora",
            "Todo a medida, sin plantillas genéricas"
          ]
        },
        {
          h4: "¿Recibís muchas consultas repetidas?",
          p: "Implementamos un chatbot que responde automáticamente preguntas frecuentes de tus clientes o tu equipo.",
          li: [
            "Ahorra tiempo de atención",
            "Disponible 24/7",
            "Personalizado con tu tono de marca",
            "Se integra con WhatsApp o tu web"
          ]
        }
      ]
    },
    team: "Nuestro equipo",
    contacto: {
      title: "Contacto",
      p: "¿Tenés una idea, un proyecto o una consulta? Escribinos, te respondemos en menos de 24 hs.",
      nombre: "Nombre",
      nombrePH: "Tu nombre completo",
      email: "Correo electrónico",
      emailPH: "tu@email.com",
      mensaje: "Mensaje",
      mensajePH: "Contanos en qué te podemos ayudar",
      enviar: "Enviar mensaje"
    },
    footer: "NodoStack © 2025 – Donde el código conecta"
  },

  // ================== ENGLISH ==================
  en: {
    navbar: {
      sobre: "About us",
      resolvemos: "What we solve",
      servicios: "Services",
      proyectos: "Projects",
      team: "Team",
      contacto: "Contact"
    },
    hero: {
      title: "Where technology becomes real solutions."
    },
    cta: "📩 Chat on WhatsApp",
    sobre: {
      title: "About Us",
      p1: `At <strong>NodoStack</strong> we are a team of developers passionate about turning ideas into real solutions.
      We were born with a clear vision: to use technology to <strong>support, create and generate positive impact</strong> in every stage of your project.`,
      list: [
        "Creativity and collaboration in every delivery",
        "Tailor-made solutions for each challenge",
        "Digital experiences that leave a mark"
      ],
      bold: "We don’t just code – we build digital stories. Ready to create yours?"
    },
    resolvemos: {
      title: "What we solve",
      cards: [
        {
          h5: "Need technical support",
          p: "Whether for one-time deliveries or ongoing support, we work as your tech team."
        },
        {
          h5: "Tech disconnect",
          p: "We help you adopt digital tools that boost your business, without complications."
        },
        {
          h5: "Processes needing optimization",
          p: "We automate tasks and digitize workflows so your time goes further."
        },
        {
          h5: "Custom solutions",
          p: "We develop platforms 100% tailored to your needs."
        }
      ],
      italic: "Every project is unique. We solve it accordingly."
    },
    servicios: {
      title: "Our Services",
      cards: [
        {
          h5: "Web & Mobile Development",
          p: "We build modern websites and apps, aligned with your goals and ready to scale."
        },
        {
          h5: "UX/UI Design",
          p: "We create visual experiences that are clear, intuitive and user-centered."
        },
        {
          h5: "Tech consulting & support",
          p: "We advise you from idea to launch, and optionally provide ongoing support."
        },
        {
          h5: "Testing & QA",
          p: "We test every part to ensure stability, usability and a great experience."
        }
      ]
    },
    proyectos: {
      title: "Real solutions, real results",
      lead: "We build simple digital tools that solve real business problems.",
      cards: [
        {
          h4: "Need a page that brings real clients?",
          p: "We design landing pages focused on capturing clients and generating measurable results for your business.",
          li: [
            "Attractive design, fully responsive",
            "SEO optimized and fast loading",
            "Integration with contact forms",
            "Focused on converting visits into sales"
          ]
        },
        {
          h4: "Want to sell online?",
          p: "We developed an app (web + mobile) where clients shop easily and you control everything.",
          li: [
            "Product catalog with images",
            "Online payments and order management",
            "Works on desktop or mobile",
            "Fully custom, no generic templates"
          ]
        },
        {
          h4: "Too many repeated inquiries?",
          p: "We implement a chatbot to auto-respond common questions from clients or staff.",
          li: [
            "Saves time on customer service",
            "Available 24/7",
            "Customized with your brand tone",
            "Integrates with WhatsApp or your website"
          ]
        }
      ]
    },
    team: "Our Team",
    contacto: {
      title: "Contact",
      p: "Got an idea or a project? Contact us – we reply within 24h.",
      nombre: "Name",
      nombrePH: "Your full name",
      email: "Email",
      emailPH: "your@email.com",
      mensaje: "Message",
      mensajePH: "Tell us how we can help you",
      enviar: "Send message"
    },
    footer: "NodoStack © 2025 – Where code connects"
  },

  // ================== ITALIANO ==================
  it: {
    navbar: {
      sobre: "Chi siamo",
      resolvemos: "Cosa risolviamo",
      servicios: "Servizi",
      proyectos: "Progetti",
      team: "Team",
      contacto: "Contatti"
    },
    hero: {
      title: "Dove la tecnologia diventa soluzioni reali."
    },
    cta: "📩 Scrivici su WhatsApp",
    sobre: {
      title: "Chi siamo",
      p1: `In <strong>NodoStack</strong> siamo un team di sviluppatrici appassionate nel trasformare idee in soluzioni reali.
      Siamo nate con una visione chiara: usare la tecnologia per <strong>accompagnare, creare e generare impatto positivo</strong> in ogni fase del tuo progetto.`,
      list: [
        "Creatività e collaborazione in ogni consegna",
        "Soluzioni su misura per ogni sfida",
        "Esperienze digitali che lasciano il segno"
      ],
      bold: "Non scriviamo solo codice – costruiamo storie digitali. Pronte a creare la tua?"
    },
    resolvemos: {
      title: "Cosa risolviamo",
      cards: [
        {
          h5: "Necessità di supporto tecnico",
          p: "Che si tratti di consegne singole o di supporto continuo, lavoriamo come il tuo team tecnologico."
        },
        {
          h5: "Disconnessione tecnologica",
          p: "Ti aiutiamo ad adottare strumenti digitali che fanno crescere il tuo business, senza complicazioni."
        },
        {
          h5: "Processi da ottimizzare",
          p: "Automatizziamo compiti e digitalizziamo i flussi di lavoro per farti risparmiare tempo."
        },
        {
          h5: "Soluzioni personalizzate",
          p: "Sviluppiamo piattaforme al 100% su misura per le tue esigenze."
        }
      ],
      italic: "Ogni progetto è unico. Lo risolviamo di conseguenza."
    },
    servicios: {
      title: "I nostri Servizi",
      cards: [
        {
          h5: "Sviluppo Web & Mobile",
          p: "Creiamo siti e app moderne, allineate ai tuoi obiettivi e pronte a crescere."
        },
        {
          h5: "Design UX/UI",
          p: "Creiamo esperienze visive chiare, intuitive e centrate sugli utenti."
        },
        {
          h5: "Consulenza tecnica & supporto",
          p: "Ti consigliamo dall’idea al lancio, e possiamo offrirti supporto continuo."
        },
        {
          h5: "Testing & QA",
          p: "Testiamo ogni parte per garantire stabilità, usabilità e un’ottima esperienza."
        }
      ]
    },
    proyectos: {
      title: "Soluzioni reali, risultati concreti",
      lead: "Creiamo strumenti digitali semplici che risolvono problemi reali del tuo business.",
      cards: [
        {
          h4: "Hai bisogno di una pagina che generi clienti reali?",
          p: "Progettiamo landing page focalizzate sull’acquisizione clienti e sui risultati misurabili.",
          li: [
            "Design accattivante e adattabile a qualsiasi dispositivo",
            "Ottimizzata per SEO e velocità",
            "Integrazione con moduli di contatto",
            "Focalizzata sulla conversione delle visite in vendite"
          ]
        },
        {
          h4: "Vuoi vendere online?",
          p: "Sviluppiamo un’app (web + mobile) dove i clienti acquistano facilmente e tu controlli tutto.",
          li: [
            "Catalogo prodotti con foto",
            "Pagamenti online e gestione ordini",
            "Funziona da desktop o mobile",
            "Completamente personalizzata, senza template generici"
          ]
        },
        {
          h4: "Ricevi troppe domande ripetute?",
          p: "Implementiamo un chatbot che risponde automaticamente alle domande frequenti.",
          li: [
            "Risparmia tempo nell’assistenza clienti",
            "Disponibile 24/7",
            "Personalizzato con il tono del tuo brand",
            "Si integra con WhatsApp o il tuo sito"
          ]
        }
      ]
    },
    team: "Il nostro Team",
    contacto: {
      title: "Contatti",
      p: "Hai un’idea o un progetto? Scrivici – rispondiamo entro 24 ore.",
      nombre: "Nome",
      nombrePH: "Il tuo nome completo",
      email: "Email",
      emailPH: "tu@email.com",
      mensaje: "Messaggio",
      mensajePH: "Raccontaci come possiamo aiutarti",
      enviar: "Invia messaggio"
    },
    footer: "NodoStack © 2025 – Dove il codice connette"
  }
};

// =========================
// APLICAR TRADUCCIONES
// =========================
function applyTranslations(lang) {
  const t = translations[lang];

  // ✅ Navbar
  document.querySelector('a.nav-link[href="#sobre"]').textContent = t.navbar.sobre;
  document.querySelector('a.nav-link[href="#resolvemos"]').textContent = t.navbar.resolvemos;
  document.querySelector('a.nav-link[href="#servicios"]').textContent = t.navbar.servicios;
  document.querySelector('a.nav-link[href="#proyectos"]').textContent = t.navbar.proyectos;
  document.querySelector('a.nav-link[href="#team"]').textContent = t.navbar.team;
  document.querySelector('a.nav-link[href="#contacto"]').textContent = t.navbar.contacto;

  // ✅ Hero
  document.querySelector('.hero-text h1').innerHTML = t.hero.title;

  // ✅ CTA
  document.querySelector('.btn-cta').textContent = t.cta;

  // ✅ Sobre nosotras
  document.querySelector('#sobre h2').textContent = t.sobre.title;
  document.querySelector('#sobre p.lead').innerHTML = t.sobre.p1;
  const sobreList = document.querySelectorAll('#sobre ul li');
  t.sobre.list.forEach((txt, i) => { if (sobreList[i]) sobreList[i].textContent = txt; });
  document.querySelector('#sobre p.fw-bold').textContent = t.sobre.bold;

  // ✅ Qué resolvemos
  document.querySelector('#resolvemos h2').textContent = t.resolvemos.title;
  const resCards = document.querySelectorAll('#resolvemos .card-dev-custom');
  t.resolvemos.cards.forEach((c, i) => {
    if (resCards[i]) {
      resCards[i].querySelector('h5').textContent = c.h5;
      resCards[i].querySelector('p').textContent = c.p;
    }
  });
  document.querySelector('#resolvemos p.fst-italic').textContent = t.resolvemos.italic;

  // ✅ Servicios
  document.querySelector('#servicios h2').textContent = t.servicios.title;
  const servCards = document.querySelectorAll('#servicios .col-md-6, #servicios .col-lg-3');
  t.servicios.cards.forEach((c, i) => {
    if (servCards[i]) {
      servCards[i].querySelector('h5').textContent = c.h5;
      servCards[i].querySelector('p').textContent = c.p;
    }
  });

  // ✅ Proyectos
  document.querySelector('#proyectos h2').textContent = t.proyectos.title;
  document.querySelector('#proyectos p.lead').textContent = t.proyectos.lead;
  const projCards = document.querySelectorAll('#proyectos .card-body');
  t.proyectos.cards.forEach((c, i) => {
    if (projCards[i]) {
      projCards[i].querySelector('h4').textContent = c.h4;
      projCards[i].querySelector('p').textContent = c.p;
      const lis = projCards[i].querySelectorAll('li');
      c.li.forEach((txt, j) => { if (lis[j]) lis[j].textContent = txt; });
    }
  });

  // ✅ Team
  document.querySelector('#team h2').textContent = t.team;

  // ✅ Contacto
  document.querySelector('#contacto h2').textContent = t.contacto.title;
  document.querySelector('#contacto p.text-center').textContent = t.contacto.p;
  document.querySelector('#contacto label[for="nombre"]').textContent = t.contacto.nombre;
  document.querySelector('#contacto input#nombre').placeholder = t.contacto.nombrePH;
  document.querySelector('#contacto label[for="email"]').textContent = t.contacto.email;
  document.querySelector('#contacto input#email').placeholder = t.contacto.emailPH;
  document.querySelector('#contacto label[for="mensaje"]').textContent = t.contacto.mensaje;
  document.querySelector('#contacto textarea#mensaje').placeholder = t.contacto.mensajePH;
  document.querySelector('#contacto button[type="submit"]').textContent = t.contacto.enviar;

  // ✅ Footer
  document.querySelector('footer p').textContent = t.footer;

    // ✅ Cambiar bandera y texto del dropdown
  const btn = document.querySelector('#idiomaDropdown');
  const flag = btn.querySelector('img');
  const span = btn.querySelector('span');

  if (lang === 'es') {
    flag.src = './img/es.png';
    flag.alt = 'Español';
    span.textContent = 'ES';
  } else if (lang === 'en') {
    flag.src = './img/gb.png';
    flag.alt = 'English';
    span.textContent = 'EN';
  } else if (lang === 'it') {
    flag.src = './img/it.png';
    flag.alt = 'Italiano';
    span.textContent = 'IT';
  }
}

// =========================
// LISTENERS DEL DROPDOWN
// =========================
document.querySelectorAll('.dropdown-item[data-lang]').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    const lang = item.getAttribute('data-lang');
    applyTranslations(lang);
  });
});

// =========================
// INICIALIZAR EN ESPAÑOL
// =========================
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations('es');
});
