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
          "eyebrow": "ml + systems",
          "title": "i build machine learning systems with distributed thinking.",
          "subtitle": "i'm cain, a second year high school student specializing in machine learning, computer vision, and distributed systems.",
          "primaryCta": "jump to featured works",
          "secondaryCta": "read about me"
        },
        "about": {
          "eyebrow": "about",
          "title": "learning so elite they say im like an llm",
          "description": "i focus on practical ML software, model pipelines, and infrastructure that scales cleanly.",
          "paragraphOne": "my main work is in machine learning and computer vision, including a facial recognition system built around robust detection and embedding-based matching.",
          "paragraphTwo": "i also study distributed systems to make ML workloads reliable, observable, and production-friendly.",
          "cta": "explore my projects"
        },
        "featured": {
          "eyebrow": "featured works",
          "title": "featured machine learning work",
          "description": "real projects centered on ML systems, inference workflows, and engineering fundamentals.",
          "cta": "view full archive",
          "empty": "featured projects are being curated."
        },
        "other": {
          "eyebrow": "other sections",
          "title": "reading + experiments",
          "description": "notes, books, and side experiments that support my machine learning and systems work.",
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
        "subtitle": "machine learning systems, distributed experiments, and supporting tools.",
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
          "eyebrow": "ml + sistemas",
          "title": "construyo sistemas de aprendizaje automático con mentalidad distribuida.",
          "subtitle": "soy caín, estudiante de segundo año de secundaria, especializado en aprendizaje automático, visión por computadora y sistemas distribuidos.",
          "primaryCta": "ir a trabajos destacados",
          "secondaryCta": "leer sobre mí"
        },
        "about": {
          "eyebrow": "sobre mí",
          "title": "aprendizaje automático primero, sistemas por diseño.",
          "description": "me enfoco en software de ML práctico, pipelines de modelos e infraestructura que escala de forma limpia.",
          "paragraphOne": "mi trabajo principal está en aprendizaje automático y visión por computadora, incluyendo un sistema de reconocimiento facial basado en detección robusta y matching por embeddings.",
          "paragraphTwo": "también estudio sistemas distribuidos para que las cargas de ML sean confiables, observables y listas para producción.",
          "cta": "explorar mis proyectos"
        },
        "featured": {
          "eyebrow": "trabajos destacados",
          "title": "trabajo destacado en aprendizaje automático",
          "description": "proyectos reales centrados en sistemas de ML, flujos de inferencia y fundamentos de ingeniería.",
          "cta": "ver archivo completo",
          "empty": "los proyectos destacados se están curando."
        },
        "other": {
          "eyebrow": "otras secciones",
          "title": "lectura + experimentos",
          "description": "notas, libros y experimentos paralelos que apoyan mi trabajo en ML y sistemas.",
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
        "subtitle": "sistemas de aprendizaje automático, experimentos distribuidos y herramientas de apoyo.",
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
