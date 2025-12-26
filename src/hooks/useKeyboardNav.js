import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const useKeyboardNav = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }

      if (e.metaKey || e.ctrlKey || e.altKey) {
        return;
      }

      const key = e.key.toLowerCase();
      const isSpanish = i18n.language === 'es';

      if (isSpanish) {
        switch (key) {
          case 's':
            navigate('/');
            break;
          case 't':
            navigate('/works');
            break;
          case 'l':
            navigate('/literature');
            break;
          case 'r':
            navigate('/recipes');
            break;
          default:
            break;
        }
      } else {
        switch (key) {
          case 'a':
            navigate('/');
            break;
          case 'w':
            navigate('/works');
            break;
          case 'l':
            navigate('/literature');
            break;
          case 'r':
            navigate('/recipes');
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigate, i18n.language]);
};

export default useKeyboardNav;
