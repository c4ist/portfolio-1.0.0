import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav": {
        "about": "about",
        "works": "works"
      },
      "home": {
        "hero": "I plant flowers.",
        "intro": "Hi, I'm Cain, a second year high school student. I enjoy problem solving and clean syntax (I'm a fan of C++, lol.)",
        "description": "Currently tinkering with distributed systems and learning how to bake better sourdough. I really enjoy sci-fi novels and short documentaries.",
        "cta": "See my work",
        "footer": "gurt"
      },    
      "works": {
        "back": "Back",
        "title": "Selected Works",
        "subtitle": "A collection of digital artifacts, tools, and experiments.",
        "empty": "Currently reimagining this space. Check back soon."
      },
      "404": {
        "title": "Strayed off the path?",
        "description": "The page you're looking for doesn't seem to exist. It might have been moved, or perhaps it never was.",
        "back": "Return home"
      }
    }
  },
  es: {
    translation: {
      "nav": {
        "about": "sobre mí",
        "works": "trabajos"
      },
      "home": {
        "hero": "Planto flores.",
        "intro": "Hola, soy Cain, estudiante de segundo año de secundaria. Disfruto de la resolución de problemas y la sintaxis limpia (soy fan de C++, lol.)",
        "description": "Actualmente experimentando con sistemas distribuidos y aprendiendo a hornear mejor masa madre. Realmente disfruto de novelas de ciencia ficción y documentales cortos.",
        "cta": "Ver mi trabajo",
        "footer": "gurt"
      },
      "works": {
        "back": "Atrás",
        "title": "Trabajos Seleccionados",
        "subtitle": "Una colección de artefactos digitales, herramientas y experimentos.",
        "empty": "Actualmente reimaginando este espacio. Vuelve pronto."
      },
      "404": {
        "title": "¿Te has desviado del camino?",
        "description": "La página que buscas no parece existir. Podría haberse movido, o quizás nunca existió.",
        "back": "Volver al inicio"
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
