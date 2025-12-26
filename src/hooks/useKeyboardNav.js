import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useKeyboardNav = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }

      if (e.metaKey || e.ctrlKey || e.altKey) {
        return;
      }

      const key = e.key.toLowerCase();

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
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigate]);
};

export default useKeyboardNav;
