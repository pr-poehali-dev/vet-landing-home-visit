
import { useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const advantages = [
  {
    icon: "HomeHeart",
    title: "Комфорт для питомца",
    description: "Лечение в привычной обстановке снижает стресс и способствует более быстрому выздоровлению"
  },
  {
    icon: "Clock",
    title: "Экономия времени",
    description: "Не нужно тратить время на дорогу в клинику и ожидание в очередях"
  },
  {
    icon: "Ban",
    title: "Защита от инфекций",
    description: "Отсутствие контакта с больными животными в зоне ожидания клиники"
  },
  {
    icon: "Microscope",
    title: "Полная диагностика",
    description: "Мы привозим с собой всё необходимое оборудование для обследования"
  }
];

const AdvantagesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elementsToAnimate = entry.target.querySelectorAll('.animate-on-scroll');
          if (entry.isIntersecting) {
            elementsToAnimate.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="why-us" ref={sectionRef} className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 animate-on-scroll">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full -z-10"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=600&fit=crop" 
                  alt="Ветеринарная помощь на дому" 
                  className="w-full h-auto"
                />
                
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-dark/50 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="bg-white/90 text-dark p-4 rounded-lg inline-block w-auto shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/20 p-2 rounded-full">
                        <Icon name="CheckCircle2" className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">98% довольных клиентов</p>
                        <p className="text-sm text-gray-600">По результатам опросов</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="animate-on-scroll">
              <span className="text-primary font-medium">Почему стоит выбрать нас</span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3 mb-6">
                Преимущества вызова ветеринара на дом
              </h2>
              <p className="text-gray-600 mb-8">
                Выезд ветеринара на дом — это не просто удобно, но и значительно снижает стресс для вашего питомца. Мы обеспечиваем качественное обслуживание прямо у вас дома с полным набором необходимого оборудования.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="animate-on-scroll">
                  <div className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Icon name={advantage.icon as any} className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{advantage.title}</h3>
                      <p className="text-gray-600">{advantage.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
