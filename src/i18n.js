import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav": {
        "about": "about",
        "works": "works",
        "literature": "literature",
        "recipes": "recipes"
      },
      "home": {
        "hero": {
          "eyebrow": "portfolio",
          "title": "i plant flowers and build digital things.",
          "subtitle": "i'm cain, a second year high school student focused on careful frontend craft and systems-oriented thinking.",
          "primaryCta": "jump to featured works",
          "secondaryCta": "read about me"
        },
        "about": {
          "eyebrow": "about",
          "title": "building carefully, learning continuously.",
          "description": "i enjoy clean syntax, practical tooling, and projects that evolve with intention.",
          "paragraphOne": "i've been writing code for around two years, with a focus on problem solving and architecture that stays simple as the codebase grows.",
          "paragraphTwo": "right now i'm exploring distributed systems, sharpening UI fundamentals, and documenting lessons from books and baking experiments.",
          "cta": "browse all projects"
        },
        "featured": {
          "eyebrow": "featured works",
          "title": "selected projects",
          "description": "a curated set of things i've built, tested, and iterated on.",
          "cta": "view full archive",
          "empty": "featured projects are being curated."
        },
        "other": {
          "eyebrow": "other sections",
          "title": "beyond coding",
          "description": "explore reading notes, kitchen experiments, and the links where i post updates.",
          "literatureTitle": "literature",
          "literatureDescription": "books, notes, and ideas currently shaping my thinking.",
          "recipesTitle": "recipes",
          "recipesDescription": "small kitchen experiments from sourdough to simple weekday meals."
        },
        "social": {
          "github": "GitHub",
          "linkedin": "LinkedIn",
          "letterboxd": "Letterboxd",
          "email": "Email"
        },
        "footer": "gurt"
      },    
      "works": {
        "title": "selected works",
        "subtitle": "a collection of digital artifacts, tools, and experiments.",
        "empty": "currently reimagining this space. check back soon.",
        "loadError": "unable to load projects right now.",
        "backToFeatured": "back to featured works",
        "moreOn": "more projects on",
        "featuredBadge": "featured",
        "viewProject": "view project",
        "viewCode": "view code"
      },
      "404": {
        "title": "Strayed off the path?",
        "description": "The page you're looking for doesn't seem to exist. It might have been moved, or perhaps it never was.",
        "back": "Return home"
      },
      "literature": {
        "back": "back",
        "title": "literature",
        "subtitle": "writings that have shaped my thinking.",
        "currentlyReading": "currently reading",
        "favorites": "favorites",
        "wantToRead": "want to read",
        "empty": "coming soon."
      },
      "recipes": {
        "back": "back",
        "title": "recipes",
        "subtitle": "experiments in the kitchen, from sourdough to simple meals.",
        "baking": "baking",
        "cooking": "cooking",
        "empty": "coming soon."
      }
    }
  },
  es: {
    translation: {
      "nav": {
        "about": "sobre mí",
        "works": "trabajos",
        "literature": "literatura",
        "recipes": "recetas"
      },
      "home": {
        "hero": {
          "eyebrow": "portafolio",
          "title": "planto flores y construyo cosas digitales.",
          "subtitle": "soy caín, estudiante de segundo año de secundaria, enfocado en interfaces cuidadas y pensamiento orientado a sistemas.",
          "primaryCta": "ir a trabajos destacados",
          "secondaryCta": "leer sobre mí"
        },
        "about": {
          "eyebrow": "sobre mí",
          "title": "construyendo con cuidado, aprendiendo siempre.",
          "description": "disfruto la sintaxis limpia, las herramientas prácticas y los proyectos que evolucionan con intención.",
          "paragraphOne": "llevo cerca de dos años programando, con enfoque en resolver problemas y mantener una arquitectura simple mientras el código crece.",
          "paragraphTwo": "ahora mismo exploro sistemas distribuidos, mejoro fundamentos de UI y documento aprendizajes de libros y experimentos en la cocina.",
          "cta": "ver todos los proyectos"
        },
        "featured": {
          "eyebrow": "trabajos destacados",
          "title": "proyectos seleccionados",
          "description": "una selección curada de cosas que he construido, probado e iterado.",
          "cta": "ver archivo completo",
          "empty": "los proyectos destacados se están curando."
        },
        "other": {
          "eyebrow": "otras secciones",
          "title": "más allá del código",
          "description": "explora notas de lectura, experimentos de cocina y enlaces donde comparto actualizaciones.",
          "literatureTitle": "literatura",
          "literatureDescription": "libros, notas e ideas que están moldeando mi forma de pensar.",
          "recipesTitle": "recetas",
          "recipesDescription": "pequeños experimentos en la cocina, desde masa madre hasta comidas simples."
        },
        "social": {
          "github": "GitHub",
          "linkedin": "LinkedIn",
          "letterboxd": "Letterboxd",
          "email": "Correo"
        },
        "footer": "gurt"
      },
      "works": {
        "title": "trabajos seleccionados",
        "subtitle": "una colección de artefactos digitales, herramientas y experimentos.",
        "empty": "actualmente reimaginando este espacio. vuelve pronto.",
        "loadError": "no se pudieron cargar los proyectos en este momento.",
        "backToFeatured": "volver a trabajos destacados",
        "moreOn": "más proyectos en",
        "featuredBadge": "destacado",
        "viewProject": "ver proyecto",
        "viewCode": "ver código"
      },
      "404": {
        "title": "¿te has desviado del camino?",
        "description": "la página que buscas no parece existir. podría haberse movido, o quizás nunca existió.",
        "back": "volver al inicio"
      },
      "literature": {
        "back": "atrás",
        "title": "literatura",
        "subtitle": "escritos que han moldeado mi pensamiento.",
        "currentlyReading": "leyendo actualmente",
        "favorites": "favoritos",
        "wantToRead": "por leer",
        "empty": "próximamente."
      },
      "recipes": {
        "back": "atrás",
        "title": "recetas",
        "subtitle": "experimentos en la cocina, desde masa madre hasta comidas simples.",
        "baking": "panadería",
        "cooking": "cocina",
        "empty": "próximamente."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
