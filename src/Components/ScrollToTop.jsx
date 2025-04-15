// src/Components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // يرجعك لأعلى الصفحة
  }, [pathname]);

  return null;
};

export default ScrollToTop;
