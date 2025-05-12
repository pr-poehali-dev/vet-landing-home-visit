
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <Button
        variant="outline"
        size="icon"
        onClick={scrollToTop}
        className={`
          bg-primary text-white rounded-full shadow-lg transition-all duration-300
          hover:bg-primary/90 hover:scale-110
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
        `}
      >
        <Icon name="ChevronUp" className="h-5 w-5" />
        <span className="sr-only">Вернуться наверх</span>
      </Button>
    </div>
  );
};

export default ScrollToTop;
