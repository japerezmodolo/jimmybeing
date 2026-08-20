/* =========================================================================
   JIMMYBEING.COM — CONTENT & TRANSLATIONS
   -------------------------------------------------------------------------
   HOW TO EDIT THIS FILE
   - All site copy lives here, split into EN / ES / PT.
   - Each language object has the SAME structure — if you add a field to
     one language, add it to the other two as well or it will show blank.
   - Anything wrapped like "ADD_LINK_HERE" or "TODO:" is a placeholder for
     you to fill in later.
   - Each timeline entry has a `linkedinPosts` array: [] shows a dashed
     "Add link" placeholder on the site; add objects like
     { url: "https://...", title: "Optional readable title or null" }
     to show real, clickable posts (as many as you want per role).
   ========================================================================= */

const TRANSLATIONS = {
  en: {
    meta: { lang: "en", langLabel: "EN", htmlLang: "en" },
    nav: {
      about: "About",
      experience: "Journey",
      personal: "Beyond Work",
      connect: "Connect",
    },
    hero: {
      eyebrow: "Personal Brand",
      title: "Jimmy Being",
      subtitle:
        "Revenue &amp; Growth, Leadership and Entrepreneur. I build & work with purspose across Latin America.",
      ctaPrimary: "Get in Touch",
      ctaSecondary: "See My Journey",
      videoLabel: "Video greeting",
      videoComingSoon:
        "Coming soon: a personal greeting in your language, in my own voice.",
      videoBadge: "Powered by ElevenLabs AI voice",
    },
    about: {
      heading: "About Me",
      body1:
        "I'm Jaime Pérez Modolo, most people know me as Jimmy. I'm an Industrial Civil Engineer, and for the past 8+ years I've been building and scaling companies across Chile, Mexico, Colombia, and Peru. These days I lead Pop Estate, a Proptech startup, as CEO and Head of Revenue.",
      body2:
        "Outside of work, I'm a certified yoga instructor, a freediver, and a kitesurfer. I think professional and personal growth go hand in hand, so this site is where both sides of my story live.",
    },
    experience: {
      heading: "Professional Journey",
      intro:
        "I started in engineering, moved into renewable energy, then HR tech, and now Proptech. Ten years building things that matter, plus two ventures of my own along the way.",
      ventureBadge: "Venture",
      linkedinLabel: "LinkedIn post",
      featuredPostsLabel: "Featured LinkedIn posts",
      instagramLabel: "See it on Instagram",
      addLinkLabel: "Add link",
      timeline: [
        {
          period: "2024 — Present",
          role: "CEO &amp; Head of Revenue",
          company: "Pop Estate",
          tag: "Property Management Software (PMS)",
          isVenture: false,
          bullets: [
            "Lead all organizational functions: product roadmap, budget, strategy, growth, and revenue.",
            "Restructured the commercial team and report results to the board on a monthly basis.",
            "Achieved 2x ARR in 18 months and reduced churn from 30% to 12% annually.",
          ],
          linkedinPosts: [
            {
              url: "https://www.linkedin.com/posts/jaime-p%C3%A9rez-modolo-0a7b57b8_el-real-estate-es-un-negocio-de-ladrillos-activity-7442973743766728705-HXuf?utm_source=share&utm_medium=member_desktop&rcm=ACoAABkWSL8BHMWWlPhbVlZdQKxf9tQSlvLWEFU",
              title: "El real estate es un negocio de ladrillos…",
            },
            { url: "https://lnkd.in/p/dfAnH5Py", title: "Starting the year.." },
            { url: "https://lnkd.in/p/ddYcRdP2", title: "Thoughts.." },
            { url: "https://lnkd.in/p/dN-wDjXB", title: "Pop Estate in the real world" },
          ],
        },
        {
          period: "2022 — 2024",
          role: "Co-Founder",
          company: "KudozApp",
          tag: "Own Venture",
          isVenture: true,
          bullets: [
            "A motivational social network built around accountability: instead of followers, people had \"supporters\" who helped them achieve their personal goals.",
          ],
          linkedinPosts: [],
          instagram: "https://www.instagram.com/kudoz.app/",
        },
        {
          period: "2021 — 2024",
          role: "Product Manager · Business Development Manager · Partnerships Manager",
          company: "Buk",
          tag: "HR Software",
          isVenture: false,
          bullets: [
            "Built the B2B and B2C Benefits business line across 4 LATAM markets (Chile, Mexico, Colombia, Peru); launched the B2B insurance product.",
            "Owned the Benefits module roadmap, coordinating engineering, design, sales, marketing, and operations.",
            "Led and structured Partnerships in LATAM, closing 50+ strategic alliances with providers and platforms.",
            "Grew Buk Benefits revenue 2.2x in 18 months.",
          ],
          linkedinPosts: [
            {
              url: "https://www.linkedin.com/posts/jaime-p%C3%A9rez-modolo-0a7b57b8_vamos-con-todo-2025-quer%C3%ADa-compartir-que-activity-7282354041848782849-BrMO?utm_source=share&utm_medium=member_desktop&rcm=ACoAABkWSL8BHMWWlPhbVlZdQKxf9tQSlvLWEFU",
              title: "Vamos con todo 2025, quería compartir que…",
            },
            {
              url: "https://www.linkedin.com/posts/jaime-p%C3%A9rez-modolo-0a7b57b8_bukcl-activity-7127639801180114944-rELR?utm_source=share&utm_medium=member_desktop&rcm=ACoAABkWSL8BHMWWlPhbVlZdQKxf9tQSlvLWEFU",
              title: "#BukCL",
            },
            {
              url: "https://www.linkedin.com/posts/jaime-p%C3%A9rez-modolo-0a7b57b8_quisiera-agradecer-al-equipo-por-este-tremendo-activity-7091764327468167168-VwGQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAABkWSL8BHMWWlPhbVlZdQKxf9tQSlvLWEFU",
              title: "Quisiera agradecer al equipo por este tremendo…",
            },
            {
              url: "https://www.linkedin.com/posts/jaime-p%C3%A9rez-modolo-0a7b57b8_wfabuk-rompeparadigmas-activity-7035954556622528513-4pZs?utm_source=share&utm_medium=member_desktop&rcm=ACoAABkWSL8BHMWWlPhbVlZdQKxf9tQSlvLWEFU",
              title: "#WFABuk #RompeParadigmas",
            },
          ],
        },
        {
          period: "2021 — 2022",
          role: "Co-Founder",
          company: "Sowl Kombuchas",
          tag: "Own Venture",
          isVenture: true,
          bullets: [
            "TODO (please confirm/refine): Co-founded Sowl, a Chilean kombucha brand. I was involved in product development, brand building, and go-to-market from launch.",
          ],
         
          instagram: "https://www.instagram.com/sowl.cl/",
        },
        {
          period: "2020 — 2021",
          role: "Commercial Manager",
          company: "Crea Solar SpA",
          tag: "Solar Energy",
          isVenture: false,
          bullets: [
            "Led the commercial operations of a solar energy startup focused on distributed generation under the ESCO model.",
          ],
         
        },
        {
          period: "2019 — 2020",
          role: "Business Development Manager &amp; Financial Analyst",
          company: "Rising Sun Chile SpA",
          tag: "Solar Energy",
          isVenture: false,
          bullets: [
            "Evaluated, sold, and built solar energy projects via turnkey and ESCO financing model (leasing / PPA).",
            "Led capital-raising processes and negotiated a potential joint venture between Kyklos and Rising Sun.",
            "Grew the pipeline by $12M USD.",
          ],
         
        },
        {
          period: "2017",
          role: "Project Manager — Sustainability",
          company: "Lippi Outdoor SA",
          tag: "Retail",
          isVenture: false,
          bullets: [
            "Led the shift from plastic to reusable bags, saving $30K USD per year.",
          ],
         
        },
        {
          period: "2011 — 2017",
          role: "Teaching Assistant &amp; Private Tutor",
          company: "Pontificia Universidad Católica de Chile",
          tag: "Education",
          isVenture: false,
          bullets: [
            "University teaching assistant and private tutor throughout university.",
          ],
        },
      ],
    },
    education: {
      heading: "Education",
      items: [
        {
          school: "Pontificia Universidad Católica de Chile",
          period: "2011 — 2017",
          detail:
            "Industrial Civil Engineer, Diploma in Hydraulic Engineering. Graduated with distinction — 6.7 / 7.0.",
        },
        {
          school: "University of California, Santa Cruz",
          period: "2014 — 2015",
          detail:
            "Academic Exchange (7 months). Business Strategy, Marketing, Technology Management, Groundwater Modeling, Italian Language.",
        },
        {
          school: "Craighouse School",
          period: "1996 — 2010",
          detail:
            "Primary and Secondary Education, bilingual Spanish / English. GPA 6.7 / 7.0.",
        },
      ],
    },
    skills: {
      heading: "Skills",
      languagesLabel: "Languages",
      languages: "Spanish (Native) · English (Advanced) · Portuguese (Intermediate)",
      technicalLabel: "Technical",
      technical:
        "Microsoft Office · Claude · SQL (Intermediate) · HubSpot &amp; Pipedrive CRM · Jira · Notion · Slack",
      businessLabel: "Business",
      business:
        "B2B SaaS · LATAM Expansion · Revenue Growth · Partnerships · Product Management · Solar Energy",
    },
    personal: {
      heading: "Beyond Work",
      body: "I love learning and challenging myself constantly. Amateur sportsman, I practice surf, yoga, freediving and I love to escape winter to Brasil to practice Kitesurf. I try to find balance between hardwork and a healthy lifestyle.",
      items: [
        "200h certified Yoga Instructor (YTT, 2019)",
        "Freediving L1 (SSI) &amp; Stress and Rescue Diving (SSI) certified",
        "10-day silent Vipassana meditation retreat",
        "CPR &amp; First Aid certified (React Right)",
        "Work &amp; Holiday Visa, Sydney, Australia (2017–2019)",
        "Social volunteering in the Atacama Region, Chile (2015), organized by FEUC",
        "Interests: kitesurfing, surfing, soccer, yoga",
        "Chilean and Italian nationality",
      ],
    },
    contact: {
      heading: "Let's Connect",
      body: "Interested in working together, or just want to say hi? Reach out below!",
      emailCta: "Email Me",
      whatsappCta: "WhatsApp",
      whatsappMessage: "Hi Jimmy, I saw your website and wanted to reach out!",
      linkedinCta: "LinkedIn",
      instagramCta: "Instagram",
      agentHeading: "Book time with me",
      agentIntro:
        "Chat with my AI assistant below. Ask it about my work and ventures, or let it help you find 10 minutes on my calendar.",
      agentBadge: "AI scheduling assistant",
    },
    footer: {
      tagline: "Jimmy Being: Revenue & Growth, Leadership and Entrepreneur.",
      rights: "© 2026 Jaime Pérez Modolo. All rights reserved.",
    },
  },

  es: {
    meta: { lang: "es", langLabel: "ES", htmlLang: "es" },
    nav: {
      about: "Sobre mí",
      experience: "Trayectoria",
      personal: "Más allá del trabajo",
      connect: "Contacto",
    },
    hero: {
      eyebrow: "Marca Personal",
      title: "Jimmy Being",
      subtitle:
        "Revenue &amp; Growth, buen líder y emprendedor. Construyo y trabajo en empresas con propósito en LATAM.",
      ctaPrimary: "Contáctame",
      ctaSecondary: "Conoce mi Trayectoria",
      videoLabel: "Saludo en video",
      videoComingSoon:
        "Próximamente: un saludo personal en tu idioma, con mi propia voz.",
      videoBadge: "Con voz de IA de ElevenLabs",
    },
    about: {
      heading: "Sobre Mí",
      body1:
        "Soy Jaime Pérez Modolo, la mayoría me conoce como Jimmy. Soy Ingeniero Civil Industrial y llevo más de 8 años construyendo y escalando productos en Chile, México, Colombia y Perú. Hoy lidero Pop Estate, una startup Proptech, como Gerente General.",
      body2:
        "Fuera del trabajo me gusta aprender y desafiarme constantemente. Practico surf, yoga, apnea y trato de escaparme al nordeste de Brasil a hacer kitesurf de vez en cuando. Creo que el crecimiento profesional y personal van de la mano, así que este sitio es donde conviven ambas historias.",
    },
    experience: {
      heading: "Trayectoria Profesional",
      intro:
        "Empecé en ingeniería, luego energía renovable, después HR tech y ahora Proptech. Una década construyendo proyectos que generan valor, más dos emprendimientos propios que intenté en el camino.",
      ventureBadge: "Emprendimiento",
      linkedinLabel: "Post de LinkedIn",
      featuredPostsLabel: "Posts de LinkedIn destacados",
      instagramLabel: "Ver en Instagram",
      addLinkLabel: "Agregar link",
      timeline: [
        {
          period: "2024 — Presente",
          role: "CEO &amp; Head of Revenue",
          company: "Pop Estate",
          tag: "Software de Gestión de Propiedades (PMS)",
          isVenture: false,
          bullets: [
            "Lidero todas las funciones organizacionales: roadmap de producto, presupuesto, estrategia, crecimiento e ingresos.",
            "Reestructuré el equipo comercial y reporto resultados al directorio mensualmente.",
            "Logramos 2x en ARR en 18 meses y reducimos el churn de 30% a 12% anual.",
          ],
          linkedinPosts: [
            {
              url: "https://www.linkedin.com/posts/jaime-p%C3%A9rez-modolo-0a7b57b8_el-real-estate-es-un-negocio-de-ladrillos-activity-7442973743766728705-HXuf?utm_source=share&utm_medium=member_desktop&rcm=ACoAABkWSL8BHMWWlPhbVlZdQKxf9tQSlvLWEFU",
              title: "El real estate es un negocio de ladrillos…",
            },
            { url: "https://lnkd.in/p/dfAnH5Py", title: "Inicio de año.." },
            { url: "https://lnkd.in/p/ddYcRdP2", title: "Una reflexión.." },
            { url: "https://lnkd.in/p/dN-wDjXB", title: "Pop Estate en la vía pública" },
          ],
        },
        {
          period: "2022 — 2024",
          role: "Co-Fundador",
          company: "KudozApp",
          tag: "Emprendimiento Propio",
          isVenture: true,
          bullets: [
            "Una red social motivacional basada en accountability: en vez de followers, las personas tenían \"supporters\" que las ayudaban a lograr sus objetivos personales.",
          ],
          
          instagram: "https://www.instagram.com/kudoz.app/",
        },
        {
          period: "2021 — 2024",
          role: "Product Manager · Business Development Manager · Partnerships Manager",
          company: "Buk",
          tag: "Software de RRHH",
          isVenture: false,
          bullets: [
            "Desarrollé la línea de negocio B2B y B2C de Beneficios en 4 mercados de LATAM (Chile, México, Colombia y Perú); lancé el producto de seguros B2B.",
            "A cargo del roadmap del módulo de Beneficios, coordinando con ingeniería, diseño, ventas, marketing y operaciones.",
            "Lideré y estructuré el área de Partnerships en LATAM, cerrando más de 50 alianzas estratégicas con proveedores y plataformas.",
            "Hice crecer los ingresos de Buk Benefits 2.2x en 18 meses.",
          ],
          linkedinPosts: [
            {
              url: "https://www.linkedin.com/posts/jaime-p%C3%A9rez-modolo-0a7b57b8_vamos-con-todo-2025-quer%C3%ADa-compartir-que-activity-7282354041848782849-BrMO?utm_source=share&utm_medium=member_desktop&rcm=ACoAABkWSL8BHMWWlPhbVlZdQKxf9tQSlvLWEFU",
              title: "Vamos con todo 2025, quería compartir que…",
            },
            {
              url: "https://www.linkedin.com/posts/jaime-p%C3%A9rez-modolo-0a7b57b8_bukcl-activity-7127639801180114944-rELR?utm_source=share&utm_medium=member_desktop&rcm=ACoAABkWSL8BHMWWlPhbVlZdQKxf9tQSlvLWEFU",
              title: "#BukCL",
            },
            {
              url: "https://www.linkedin.com/posts/jaime-p%C3%A9rez-modolo-0a7b57b8_quisiera-agradecer-al-equipo-por-este-tremendo-activity-7091764327468167168-VwGQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAABkWSL8BHMWWlPhbVlZdQKxf9tQSlvLWEFU",
              title: "Quisiera agradecer al equipo por este tremendo…",
            },
            {
              url: "https://www.linkedin.com/posts/jaime-p%C3%A9rez-modolo-0a7b57b8_wfabuk-rompeparadigmas-activity-7035954556622528513-4pZs?utm_source=share&utm_medium=member_desktop&rcm=ACoAABkWSL8BHMWWlPhbVlZdQKxf9tQSlvLWEFU",
              title: "#WFABuk #RompeParadigmas",
            },
          ],
        },
        {
          period: "2021 — 2022",
          role: "Co-Fundador",
          company: "Sowl Kombuchas",
          tag: "Emprendimiento Propio",
          isVenture: true,
          bullets: [
            "TODO (por favor confirma/ajusta): Co-fundé Sowl, una marca chilena de kombucha. Participé en el desarrollo de producto, la construcción de marca y su lanzamiento al mercado.",
          ],
          l
          instagram: "https://www.instagram.com/sowl.cl/",
        },
        {
          period: "2020 — 2021",
          role: "Gerente Comercial",
          company: "Crea Solar SpA",
          tag: "Energía Solar",
          isVenture: false,
          bullets: [
            "Lideré las operaciones comerciales de una startup de energía solar enfocada en generación distribuida bajo el modelo ESCO.",
          ],
        
        },
        {
          period: "2019 — 2020",
          role: "Business Development Manager &amp; Analista Financiero",
          company: "Rising Sun Chile SpA",
          tag: "Energía Solar",
          isVenture: false,
          bullets: [
            "Evalué, vendí y construí proyectos de energía solar llave en mano y con financiamiento ESCO (leasing / PPA).",
            "Lideré procesos de levantamiento de capital y negocié una potencial Joint Venture entre Kyklos y Rising Sun.",
            "Hice crecer el pipeline en $12MM USD.",
          ],
        },
        {
          period: "2017",
          role: "Project Manager — Sustentabilidad",
          company: "Lippi Outdoor SA",
          tag: "Retail",
          isVenture: false,
          bullets: [
            "Lideré el cambio de bolsas plásticas a reutilizables, ahorrando $30K USD al año.",
          ],
        },
        {
          period: "2011 — 2017",
          role: "Ayudante de Cátedra &amp; Profesor Particular",
          company: "Pontificia Universidad Católica de Chile",
          tag: "Educación",
          isVenture: false,
          bullets: [
            "Ayudante de cátedra universitario y profesor particular durante toda la universidad.",
          ],
        },
      ],
    },
    education: {
      heading: "Educación",
      items: [
        {
          school: "Pontificia Universidad Católica de Chile",
          period: "2011 — 2017",
          detail:
            "Ingeniero Civil Industrial, Diploma en Ingeniería Hidráulica. Egresado con distinción — 6.7 / 7.0.",
        },
        {
          school: "University of California, Santa Cruz",
          period: "2014 — 2015",
          detail:
            "Intercambio académico (7 meses). Estrategia de Negocios, Marketing, Gestión Tecnológica, Modelamiento de Aguas Subterráneas, Idioma Italiano.",
        },
        {
          school: "Craighouse School",
          period: "1996 — 2010",
          detail:
            "Educación básica y media, bilingüe español / inglés. Promedio 6.7 / 7.0.",
        },
      ],
    },
    skills: {
      heading: "Habilidades",
      languagesLabel: "Idiomas",
      languages: "Español (Nativo) · Inglés (Avanzado) · Portugués (Intermedio)",
      technicalLabel: "Técnicas",
      technical:
        "Microsoft Office · Claude · SQL (Intermedio) · CRM HubSpot &amp; Pipedrive · Jira · Notion · Slack",
      businessLabel: "Negocios",
      business:
        "B2B SaaS · Expansión LATAM · Growth · Partnerships · Product Management · Energía Solar",
    },
    personal: {
      heading: "Más Allá del Trabajo",
      body: "Me gusta aprender y desafiarme constantemente. Deportista amateur, practico yoga, surf y buceo entre otras disciplinas. Busco el equilibrio entre el trabajo duro y la vida saludable.",
      items: [
        "Instructor de Yoga certificado 200h (YTT, 2019)",
        "Freediving L1 (SSI) &amp; Stress and Rescue Diving (SSI) certificado",
        "Retiro de meditación Vipassana de 10 días en silencio",
        "Certificado en RCP &amp; Primeros Auxilios (React Right)",
        "Visa Work &amp; Holiday en Sídney, Australia (2017–2019)",
        "Voluntariado social en la Región de Atacama, Chile (2015), organizado por la FEUC",
        "Intereses: kitesurf, surf, fútbol, yoga",
        "Nacionalidad chilena e italiana",
      ],
    },
    contact: {
      heading: "Conversemos",
      body: "¿Te interesa trabajar juntos o simplemente saludar? Escríbeme.",
      emailCta: "Escríbeme",
      whatsappCta: "WhatsApp",
      whatsappMessage: "Hola Jimmy, vi tu página y quería escribirte!",
      linkedinCta: "LinkedIn",
      instagramCta: "Instagram",
      agentHeading: "Agenda una reunión conmigo",
      agentIntro:
        "Conversa aquí abajo con mi asistente de IA. Pregúntale sobre mi trabajo y emprendimientos, o pídele que te ayude a encontrar 10 minutos en mi calendario.",
      agentBadge: "Asistente de agendamiento con IA",
    },
    footer: {
      tagline: "Jimmy Being: Revenue &amp; Growth, buen líder y emprendedor.",
      rights: "© 2026 Jaime Pérez Modolo. Todos los derechos reservados.",
    },
  },

  pt: {
    meta: { lang: "pt", langLabel: "PT", htmlLang: "pt" },
    nav: {
      about: "Sobre mim",
      experience: "Trajetória",
      personal: "Além do Trabalho",
      connect: "Contato",
    },
    hero: {
      eyebrow: "Marca Pessoal",
      title: "Jimmy Being",
      subtitle:
        "Revenue &amp; Growth, empreendedor e líder. Construo e trabalho com propósito na América Latina.",
      ctaPrimary: "Fale Comigo",
      ctaSecondary: "Conheça Minha Trajetória",
      videoLabel: "Saudação em vídeo",
      videoComingSoon:
        "Em breve: uma saudação pessoal no seu idioma, com minha própria voz.",
      videoBadge: "Com voz de IA da ElevenLabs",
    },
    about: {
      heading: "Sobre Mim",
      body1:
        "Sou Jaime Pérez Modolo, a maioria me conhece como Jimmy. Sou Engenheiro Civil Industrial e há mais de 8 anos construo e escalo produtos no Chile, México, Colômbia e Peru. Hoje lidero a Pop Estate, uma startup Proptech como CEO.",
      body2:
        "Fora do trabalho, eu faço surf, yoga, apneia e gosto do visitar o nordeste do brasil para praticar kitesurfista. Acredito que o crescimento profissional e pessoal andam juntos, por isso este site é onde as duas histórias se encontram.",
    },
    experience: {
      heading: "Trajetória Profissional",
      intro:
        "Comecei na engenharia, passei pela energia renovável, depois HR tech e agora Proptech. Uma década construindo coisas que importam, além de dois empreendimentos próprios pelo caminho.",
      ventureBadge: "Empreendimento",
      linkedinLabel: "Post no LinkedIn",
      featuredPostsLabel: "Posts do LinkedIn em destaque",
      instagramLabel: "Ver no Instagram",
      addLinkLabel: "Adicionar link",
      timeline: [
        {
          period: "2024 — Atual",
          role: "Chief Executive Officer",
          company: "Pop Estate",
          tag: "Software de Gestão de Propriedades (PMS)",
          isVenture: false,
          bullets: [
            "Lidero todas as funções organizacionais: roadmap de produto, orçamento, estratégia, crescimento e receita.",
            "Reestruturei a equipe comercial e reporto resultados ao conselho mensalmente.",
            "Alcançamos 2x de ARR em 18 meses e reduzimos o churn de 30% para 12% ao ano.",
          ],
          linkedinPosts: [
            {
              url: "https://www.linkedin.com/posts/jaime-p%C3%A9rez-modolo-0a7b57b8_el-real-estate-es-un-negocio-de-ladrillos-activity-7442973743766728705-HXuf?utm_source=share&utm_medium=member_desktop&rcm=ACoAABkWSL8BHMWWlPhbVlZdQKxf9tQSlvLWEFU",
              title: "El real estate es un negocio de ladrillos…",
            },
            { url: "https://lnkd.in/p/dfAnH5Py", title: "Inicio de año.." },
            { url: "https://lnkd.in/p/ddYcRdP2", title: "Uma reflexão.."},
            { url: "https://lnkd.in/p/dN-wDjXB", title: "O painel publicitário" },
          ],
        },
        {
          period: "2022 — 2024",
          role: "Cofundador",
          company: "KudozApp",
          tag: "Empreendimento Próprio",
          isVenture: true,
          bullets: [
            "Uma rede motivacional baseada em accountability: em vez de followers, as pessoas tinham \"supporters\" que as ajudavam a alcançar seus objetivos pessoais.",
          ],
          instagram: "https://www.instagram.com/kudoz.app/",
        },
        {
          period: "2021 — 2024",
          role: "Product Manager · Business Development Manager · Partnerships Manager",
          company: "Buk",
          tag: "Software de RH",
          isVenture: false,
          bullets: [
            "Desenvolvi a linha de negócio B2B e B2C de Benefícios em 4 mercados da América Latina (Chile, México, Colômbia e Peru); lancei o produto de seguros B2B.",
            "Responsável pelo roadmap do módulo de Benefícios, coordenando engenharia, design, vendas, marketing e operações.",
            "Liderei e estruturei a área de Partnerships na América Latina, fechando mais de 50 parcerias estratégicas.",
            "Aumentei a receita da Buk Benefits em 2,2x em 18 meses.",
          ],
          linkedinPosts: [
            {
              url: "https://www.linkedin.com/posts/jaime-p%C3%A9rez-modolo-0a7b57b8_vamos-con-todo-2025-quer%C3%ADa-compartir-que-activity-7282354041848782849-BrMO?utm_source=share&utm_medium=member_desktop&rcm=ACoAABkWSL8BHMWWlPhbVlZdQKxf9tQSlvLWEFU",
              title: "Vamos con todo 2025, quería compartir que…",
            },
            {
              url: "https://www.linkedin.com/posts/jaime-p%C3%A9rez-modolo-0a7b57b8_bukcl-activity-7127639801180114944-rELR?utm_source=share&utm_medium=member_desktop&rcm=ACoAABkWSL8BHMWWlPhbVlZdQKxf9tQSlvLWEFU",
              title: "#BukCL",
            },
            {
              url: "https://www.linkedin.com/posts/jaime-p%C3%A9rez-modolo-0a7b57b8_quisiera-agradecer-al-equipo-por-este-tremendo-activity-7091764327468167168-VwGQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAABkWSL8BHMWWlPhbVlZdQKxf9tQSlvLWEFU",
              title: "Quisiera agradecer al equipo por este tremendo…",
            },
            {
              url: "https://www.linkedin.com/posts/jaime-p%C3%A9rez-modolo-0a7b57b8_wfabuk-rompeparadigmas-activity-7035954556622528513-4pZs?utm_source=share&utm_medium=member_desktop&rcm=ACoAABkWSL8BHMWWlPhbVlZdQKxf9tQSlvLWEFU",
              title: "#WFABuk #RompeParadigmas",
            },
          ],
        },
        {
          period: "2021 — 2022",
          role: "Cofundador",
          company: "Sowl Kombuchas",
          tag: "Empreendimento Próprio",
          isVenture: true,
          bullets: [
            "TODO (favor confirmar/ajustar): Cofundei a Sowl, uma marca chilena de kombucha. Participei do desenvolvimento do produto, construção de marca e lançamento no mercado.",
          ],
          
          instagram: "https://www.instagram.com/sowl.cl/",
        },
        {
          period: "2020 — 2021",
          role: "Gerente Comercial",
          company: "Crea Solar SpA",
          tag: "Energia Solar",
          isVenture: false,
          bullets: [
            "Liderei as operações comerciais de uma startup de energia solar focada em geração distribuída sob o modelo ESCO.",
          ],
         
        },
        {
          period: "2019 — 2020",
          role: "Business Development Manager &amp; Analista Financeiro",
          company: "Rising Sun Chile SpA",
          tag: "Energia Solar",
          isVenture: false,
          bullets: [
            "Avaliei, vendi e construí projetos de energia solar via chave-na-mão e financiamento ESCO (leasing / PPA).",
            "Liderei processos de captação de capital e negociei uma potencial joint venture entre Kyklos e Rising Sun.",
            "Aumentei o pipeline em US$ 12 milhões.",
          ],
         
        },
        {
          period: "2017",
          role: "Project Manager — Sustentabilidade",
          company: "Lippi Outdoor SA",
          tag: "Varejo",
          isVenture: false,
          bullets: [
            "Liderei a troca de sacolas plásticas por reutilizáveis, economizando US$ 30 mil por ano.",
          ],
   
        },
        {
          period: "2011 — 2017",
          role: "Monitor Universitário &amp; Professor Particular",
          company: "Pontificia Universidad Católica de Chile",
          tag: "Educação",
          isVenture: false,
          bullets: [
            "Monitor universitário e professor particular durante toda a graduação.",
          ],
       
        },
      ],
    },
    education: {
      heading: "Formação",
      items: [
        {
          school: "Pontificia Universidad Católica de Chile",
          period: "2011 — 2017",
          detail:
            "Engenheiro Civil Industrial, Diploma em Engenharia Hidráulica. Formado com distinção — 6,7 / 7,0.",
        },
        {
          school: "University of California, Santa Cruz",
          period: "2014 — 2015",
          detail:
            "Intercâmbio acadêmico (7 meses). Estratégia de Negócios, Marketing, Gestão de Tecnologia, Modelagem de Águas Subterrâneas, Língua Italiana.",
        },
        {
          school: "Craighouse School",
          period: "1996 — 2010",
          detail:
            "Ensino Fundamental e Médio, bilíngue espanhol / inglês. Média 6,7 / 7,0.",
        },
      ],
    },
    skills: {
      heading: "Habilidades",
      languagesLabel: "Idiomas",
      languages: "Espanhol (Nativo) · Inglês (Avançado) · Português (Intermediário)",
      technicalLabel: "Técnicas",
      technical:
        "Microsoft Office · Claude · SQL (Intermediário) · CRM HubSpot &amp; Pipedrive · Jira · Notion · Slack",
      businessLabel: "Negócios",
      business:
        "B2B SaaS · Expansão na América Latina · Crescimento de Receita · Partnerships · Product Management · Energia Solar",
    },
    personal: {
      heading: "Além do Trabalho",
      body: "Instrutor de yoga, praticante de apneia e atleta a vida toda. Acredito em desacelerar para avançar mais rápido, a meditação e o movimento me mantêm presente enquanto construo empresas de alto crescimento.",
      items: [
        "Instrutor de Yoga certificado 200h (YTT, 2019)",
        "Freediving L1 (SSI) &amp; Stress and Rescue Diving (SSI) certificado",
        "Retiro de meditação Vipassana de 10 dias em silêncio",
        "Certificado em RCP &amp; Primeiros Socorros (React Right)",
        "Visto Work &amp; Holiday em Sydney, Austrália (2017–2019)",
        "Voluntariado social na Região de Atacama, Chile (2015), organizado pela FEUC",
        "Interesses: kitesurf, surf, futebol, yoga",
        "Nacionalidade chilena e italiana",
      ],
    },
    contact: {
      heading: "Vamos Conversar",
      body: "Quer trabalhar comigo, investir, ou só dar um oi? Entre em contato abaixo.",
      emailCta: "Envie um Email",
      whatsappCta: "WhatsApp",
      whatsappMessage: "Oi Jimmy, vi seu site e queria falar com você!",
      linkedinCta: "LinkedIn",
      instagramCta: "Instagram",
      agentHeading: "Agende um horário comigo",
      agentIntro:
        "Converse aqui embaixo com meu assistente de IA. Pergunte sobre meu trabalho e empreendimentos, ou peça ajuda para encontrar 10 minutos na minha agenda.",
      agentBadge: "Assistente de agendamento com IA",
    },
    footer: {
      tagline: "Jimmy Being: Revenue & Growth, empreendedor e líder.",
      rights: "© 2026 Jaime Pérez Modolo. Todos os direitos reservados.",
    },
  },
};
