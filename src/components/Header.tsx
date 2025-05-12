
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Icon name="Stethoscope" className="h-8 w-8 text-primary mr-2" />
          <span className="font-montserrat font-bold text-2xl text-dark">
            <span className="text-primary">Вет</span>
            Визит
          </span>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#services" className="text-dark hover:text-primary transition-colors">
            Услуги
          </a>
          <a href="#why-us" className="text-dark hover:text-primary transition-colors">
            Почему мы
          </a>
          <a href="#reviews" className="text-dark hover:text-primary transition-colors">
            Отзывы
          </a>
          <a href="#contacts" className="text-dark hover:text-primary transition-colors">
            Контакты
          </a>
          <Button className="bg-primary hover:bg-primary/90">
            Записаться
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md animate-fadeIn">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-dark hover:text-primary transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Услуги
            </a>
            <a 
              href="#why-us" 
              className="text-dark hover:text-primary transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Почему мы
            </a>
            <a 
              href="#reviews" 
              className="text-dark hover:text-primary transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Отзывы
            </a>
            <a 
              href="#contacts" 
              className="text-dark hover:text-primary transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Контакты
            </a>
            <Button className="bg-primary hover:bg-primary/90 mx-4">
              Записаться
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
