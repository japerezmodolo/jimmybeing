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
        "Revenue &amp; Growth Leader · Entrepreneur · Yoga Instructor — building purposeful companies across Latin America.",
      ctaPrimary: "Get in Touch",
      ctaSecondary: "See My Journey",
      videoLabel: "Video greeting",
      videoComingSoon:
        "Coming soon — a personal greeting in your language, in my own voice.",
      videoBadge: "Powered by ElevenLabs AI voice",
    },
    about: {
      heading: "About Me",
      body1:
        "I'm Jaime Pérez Modolo — known as Jimmy — an Industrial Civil Engineer with 8+ years of experience building and scaling companies across Chile, Mexico, Colombia, and Peru. I currently lead Pop Estate, a Proptech startup, as CEO &amp; Head of Revenue.",
      body2:
        "Beyond the boardroom, I'm a certified yoga instructor, a freediver, a kitesurfer, and someone who believes professional and personal growth are part of the same journey. This site is where both stories live.",
    },
    experience: {
      heading: "Professional Journey",
      intro:
        "From engineering to renewable energy, HR tech, and now Proptech — a decade of building things that matter, plus two ventures of my own.",
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
            { url: "https://lnkd.in/p/dfAnH5Py", title: null },
            { url: "https://lnkd.in/p/ddYcRdP2", title: null },
            { url: "https://lnkd.in/p/dN-wDjXB", title: null },
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
            "TODO (please confirm/refine): Co-founded Sowl, a Chilean kombucha brand — involved in product development, brand building, and go-to-market from launch.",
          ],
          linkedinPosts: [],
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
          linkedinPosts: [],
        },
        {
          period: "2019 — 2020",
          role: "Business Development Manager &amp; Financial Analyst",
          company: "Rising Sun Chile SpA",
          tag: "Solar Energy",
          isVenture: false,
          bullets: [
            "Evaluated, sold, and closed solar energy projects via direct sales and ESCO financing (leasing / PPA).",
            "Led capital-raising processes and negotiated a potential joint venture between Kyklos and Rising Sun.",
            "Grew the pipeline by $12M USD.",
          ],
          linkedinPosts: [],
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
          linkedinPosts: [],
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
          linkedinPosts: [],
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
      body: "Yoga instructor, freediver, and lifelong athlete. I believe in slowing down to move faster — meditation and movement keep me grounded while building fast-growing companies.",
      items: [
        "200h certified Yoga Instructor (YTT, 2019)",
        "Freediving L1 (SSI) &amp; Stress and Rescue Diving (SSI) certified",
        "10-day silent Vipassana meditation retreat",
        "CPR &amp; First Aid certified (React Right)",
        "Work &amp; Holiday Visa — Sydney, Australia (2017–2019)",
        "Social volunteering — Atacama Region, Chile (2015), organized by FEUC",
        "Interests: kitesurfing, surfing, soccer, yoga",
        "Chilean and Italian nationality",
      ],
    },
    contact: {
      heading: "Let's Connect",
      body: "Interested in working together, investing, or just want to say hi? Reach out below.",
      emailCta: "Email Me",
      linkedinCta: "LinkedIn",
      instagramCta: "Instagram",
      agentHeading: "Book time with me",
      agentComingSoon:
        "Coming soon: chat with my AI assistant here and it will find a time on my calendar automatically.",
      agentBadge: "AI scheduling assistant — coming soon",
    },
    footer: {
      tagline: "Jimmy Being — Revenue & Growth Leader, Entrepreneur, and Yoga Instructor.",
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
        "Líder en Revenue &amp; Growth · Emprendedor · Instructor de Yoga — construyendo empresas con propósito en América Latina.",
      ctaPrimary: "Contáctame",
      ctaSecondary: "Conoce mi Trayectoria",
      videoLabel: "Saludo en video",
      videoComingSoon:
        "Próximamente — un saludo personal en tu idioma, con mi propia voz.",
      videoBadge: "Con voz de IA de ElevenLabs",
    },
    about: {
      heading: "Sobre Mí",
      body1:
        "Soy Jaime Pérez Modolo — conocido como Jimmy — Ingeniero Civil Industrial con más de 8 años de experiencia construyendo y escalando empresas en Chile, México, Colombia y Perú. Actualmente lidero Pop Estate, una startup Proptech, como CEO &amp; Head of Revenue.",
      body2:
        "Más allá de las salas de directorio, soy instructor de yoga certificado, freediver, kitesurfista, y creo que el crecimiento profesional y personal son parte del mismo camino. Este sitio es donde conviven ambas historias.",
    },
    experience: {
      heading: "Trayectoria Profesional",
      intro:
        "De la ingeniería a la energía renovable, HR tech y ahora Proptech — una década construyendo cosas que importan, además de dos emprendimientos propios.",
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
            { url: "https://lnkd.in/p/dfAnH5Py", title: null },
            { url: "https://lnkd.in/p/ddYcRdP2", title: null },
            { url: "https://lnkd.in/p/dN-wDjXB", title: null },
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
          linkedinPosts: [],
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
            "TODO (por favor confirma/ajusta): Co-fundé Sowl, una marca chilena de kombucha — participé en el desarrollo de producto, la construcción de marca y su lanzamiento al mercado.",
          ],
          linkedinPosts: [],
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
          linkedinPosts: [],
        },
        {
          period: "2019 — 2020",
          role: "Business Development Manager &amp; Analista Financiero",
          company: "Rising Sun Chile SpA",
          tag: "Energía Solar",
          isVenture: false,
          bullets: [
            "Evalué, vendí y cerré proyectos de energía solar mediante venta directa y financiamiento ESCO (leasing / PPA).",
            "Lideré procesos de levantamiento de capital y negocié una potencial Joint Venture entre Kyklos y Rising Sun.",
            "Hice crecer el pipeline en $12MM USD.",
          ],
          linkedinPosts: [],
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
          linkedinPosts: [],
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
          linkedinPosts: [],
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
        "B2B SaaS · Expansión LATAM · Crecimiento de Ingresos · Partnerships · Product Management · Energía Solar",
    },
    personal: {
      heading: "Más Allá del Trabajo",
      body: "Instructor de yoga, freediver y deportista de toda la vida. Creo en ir más lento para avanzar más rápido — la meditación y el movimiento me mantienen conectado mientras construyo empresas de alto crecimiento.",
      items: [
        "Instructor de Yoga certificado 200h (YTT, 2019)",
        "Freediving L1 (SSI) &amp; Stress and Rescue Diving (SSI) certificado",
        "Retiro de meditación Vipassana de 10 días en silencio",
        "Certificado en RCP &amp; Primeros Auxilios (React Right)",
        "Visa Work &amp; Holiday — Sídney, Australia (2017–2019)",
        "Voluntariado social — Región de Atacama, Chile (2015), organizado por la FEUC",
        "Intereses: kitesurf, surf, fútbol, yoga",
        "Nacionalidad chilena e italiana",
      ],
    },
    contact: {
      heading: "Conversemos",
      body: "¿Te interesa trabajar juntos, invertir, o simplemente saludar? Escríbeme.",
      emailCta: "Escríbeme",
      linkedinCta: "LinkedIn",
      instagramCta: "Instagram",
      agentHeading: "Agenda una reunión conmigo",
      agentComingSoon:
        "Próximamente: conversa aquí con mi asistente de IA y coordinará automáticamente un horario en mi calendario.",
      agentBadge: "Asistente de agendamiento con IA — próximamente",
    },
    footer: {
      tagline: "Jimmy Being — Líder en Revenue & Growth, Emprendedor e Instructor de Yoga.",
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
        "Líder em Revenue &amp; Growth · Empreendedor · Instrutor de Yoga — construindo empresas com propósito na América Latina.",
      ctaPrimary: "Fale Comigo",
      ctaSecondary: "Conheça Minha Trajetória",
      videoLabel: "Saudação em vídeo",
      videoComingSoon:
        "Em breve — uma saudação pessoal no seu idioma, com minha própria voz.",
      videoBadge: "Com voz de IA da ElevenLabs",
    },
    about: {
      heading: "Sobre Mim",
      body1:
        "Sou Jaime Pérez Modolo — conhecido como Jimmy — Engenheiro Civil Industrial com mais de 8 anos de experiência construindo e escalando empresas no Chile, México, Colômbia e Peru. Atualmente lidero a Pop Estate, uma startup Proptech, como CEO &amp; Head of Revenue.",
      body2:
        "Além das salas de reunião, sou instrutor de yoga certificado, praticante de apneia, kitesurfista, e acredito que o crescimento profissional e pessoal fazem parte da mesma jornada. Este site é onde as duas histórias se encontram.",
    },
    experience: {
      heading: "Trajetória Profissional",
      intro:
        "Da engenharia à energia renovável, HR tech e agora Proptech — uma década construindo coisas que importam, além de dois empreendimentos próprios.",
      ventureBadge: "Empreendimento",
      linkedinLabel: "Post no LinkedIn",
      featuredPostsLabel: "Posts do LinkedIn em destaque",
      instagramLabel: "Ver no Instagram",
      addLinkLabel: "Adicionar link",
      timeline: [
        {
          period: "2024 — Atual",
          role: "CEO &amp; Head of Revenue",
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
            { url: "https://lnkd.in/p/dfAnH5Py", title: null },
            { url: "https://lnkd.in/p/ddYcRdP2", title: null },
            { url: "https://lnkd.in/p/dN-wDjXB", title: null },
          ],
        },
        {
          period: "2022 — 2024",
          role: "Cofundador",
          company: "KudozApp",
          tag: "Empreendimento Próprio",
          isVenture: true,
          bullets: [
            "Uma rede social motivacional baseada em accountability: em vez de followers, as pessoas tinham \"supporters\" que as ajudavam a alcançar seus objetivos pessoais.",
          ],
          linkedinPosts: [],
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
            "TODO (favor confirmar/ajustar): Cofundei a Sowl, uma marca chilena de kombucha — participei do desenvolvimento do produto, construção de marca e lançamento no mercado.",
          ],
          linkedinPosts: [],
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
          linkedinPosts: [],
        },
        {
          period: "2019 — 2020",
          role: "Business Development Manager &amp; Analista Financeiro",
          company: "Rising Sun Chile SpA",
          tag: "Energia Solar",
          isVenture: false,
          bullets: [
            "Avaliei, vendi e fechei projetos de energia solar via venda direta e financiamento ESCO (leasing / PPA).",
            "Liderei processos de captação de capital e negociei uma potencial joint venture entre Kyklos e Rising Sun.",
            "Aumentei o pipeline em US$ 12 milhões.",
          ],
          linkedinPosts: [],
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
          linkedinPosts: [],
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
          linkedinPosts: [],
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
      body: "Instrutor de yoga, praticante de apneia e atleta a vida toda. Acredito em desacelerar para avançar mais rápido — a meditação e o movimento me mantêm presente enquanto construo empresas de alto crescimento.",
      items: [
        "Instrutor de Yoga certificado 200h (YTT, 2019)",
        "Freediving L1 (SSI) &amp; Stress and Rescue Diving (SSI) certificado",
        "Retiro de meditação Vipassana de 10 dias em silêncio",
        "Certificado em RCP &amp; Primeiros Socorros (React Right)",
        "Visto Work &amp; Holiday — Sydney, Austrália (2017–2019)",
        "Voluntariado social — Região de Atacama, Chile (2015), organizado pela FEUC",
        "Interesses: kitesurf, surf, futebol, yoga",
        "Nacionalidade chilena e italiana",
      ],
    },
    contact: {
      heading: "Vamos Conversar",
      body: "Quer trabalhar comigo, investir, ou só dar um oi? Entre em contato abaixo.",
      emailCta: "Envie um Email",
      linkedinCta: "LinkedIn",
      instagramCta: "Instagram",
      agentHeading: "Agende um horário comigo",
      agentComingSoon:
        "Em breve: converse aqui com meu assistente de IA e ele encontrará automaticamente um horário na minha agenda.",
      agentBadge: "Assistente de agendamento com IA — em breve",
    },
    footer: {
      tagline: "Jimmy Being — Líder em Revenue & Growth, Empreendedor e Instrutor de Yoga.",
      rights: "© 2026 Jaime Pérez Modolo. Todos os direitos reservados.",
    },
  },
};
