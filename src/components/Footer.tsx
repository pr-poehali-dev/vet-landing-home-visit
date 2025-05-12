import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Icon name="Stethoscope" className="h-8 w-8 text-primary mr-2" />
              <span className="font-montserrat font-bold text-2xl">
                <span className="text-primary">Вет</span>
                Визит
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Профессиональная ветеринарная помощь с выездом на дом. Забота о
              питомцах в комфортной для них обстановке.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-primary/20 p-2 rounded-full hover:bg-primary/30 transition-colors"
              >
                <Icon name="Facebook" className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-primary/20 p-2 rounded-full hover:bg-primary/30 transition-colors"
              >
                <Icon name="Instagram" className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-primary/20 p-2 rounded-full hover:bg-primary/30 transition-colors"
              >
                <Icon name="Telegram" className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-primary/20 p-2 rounded-full hover:bg-primary/30 transition-colors"
              >
                <Icon name="MessageCircle" className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6">Услуги</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Диагностика
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Вакцинация
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Лечение
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Хирургия
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Консультации
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6">Полезное</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  О компании
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Наши ветеринары
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Часто задаваемые вопросы
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Статьи о питомцах
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Icon name="Phone" className="h-5 w-5 text-primary mr-3" />
                <a
                  href="tel:89043029179"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  8 904 302 91 79
                </a>
              </li>
              <li className="flex items-center">
                <Icon name="Mail" className="h-5 w-5 text-primary mr-3" />
                <a
                  href="mailto:info@vetvisit.ru"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  info@vetvisit.ru
                </a>
              </li>
              <li className="flex items-center">
                <Icon name="Clock" className="h-5 w-5 text-primary mr-3" />
                <span className="text-gray-400">9:00 - 21:00 ежедневно</span>
              </li>
              <li className="flex items-center">
                <Icon name="MapPin" className="h-5 w-5 text-primary mr-3" />
                <span className="text-gray-400">Город и пригород</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              © 2025 ВетВизит. Все права защищены.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-primary transition-colors"
              >
                Условия использования
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-primary transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-primary transition-colors"
              >
                Карта сайта
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
