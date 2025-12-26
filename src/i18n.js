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
        "hero": "i plant flowers.",
        "intro": "hi, i'm cain, a second year high school student. i enjoy problem solving and clean syntax (i'm a fan of c++, lol.)",
        "description": "currently tinkering with distributed systems and learning how to bake better sourdough. i really enjoy sci-fi novels and short documentaries.",
        "cta": "see my work",
        "footer": "gurt"
      },    
      "works": {
        "back": "back",
        "title": "selected works",
        "subtitle": "a collection of digital artifacts, tools, and experiments.",
        "empty": "currently reimagining this space. check back soon."
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
        "hero": "planto flores.",
        "intro": "hola, soy caín, estudiante de segundo año de secundaria. disfruto de la resolución de problemas y la sintaxis limpia (soy fan de c++, lol.)",
        "description": "actualmente experimentando con sistemas distribuidos y aprendiendo a hornear mejor masa madre. realmente disfruto de novelas de ciencia ficción y documentales cortos.",
        "cta": "ver mi trabajo",
        "footer": "gurt"
      },
      "works": {
        "back": "atrás",
        "title": "trabajos seleccionados",
        "subtitle": "una colección de artefactos digitales, herramientas y experimentos.",
        "empty": "actualmente reimaginando este espacio. vuelve pronto."
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
