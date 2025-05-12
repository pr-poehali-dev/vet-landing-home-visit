
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect, useRef } from "react";

const services = [
  {
    icon: "Stethoscope",
    title: "Осмотр и диагностика",
    description: "Комплексное обследование питомца с выявлением возможных заболеваний на ранней стадии.",
    color: "primary"
  },
  {
    icon: "Syringe",
    title: "Вакцинация",
    description: "Плановые и экстренные прививки с использованием качественных вакцин от проверенных производителей.",
    color: "secondary"
  },
  {
    icon: "Pill",
    title: "Лечение заболеваний",
    description: "Эффективная терапия острых и хронических патологий, подбор оптимальных схем лечения.",
    color: "accent"
  },
  {
    icon: "Scissors",
    title: "Хирургические процедуры",
    description: "Малая хирургия в домашних условиях, включая кастрацию, стерилизацию и другие операции.",
    color: "dark"
  },
  {
    icon: "HeartPulse",
    title: "Кардиология",
    description: "Диагностика и лечение сердечно-сосудистой системы с использованием портативного оборудования.",
    color: "primary"
  },
  {
    icon: "Microscope",
    title: "Лабораторные исследования",
    description: "Забор и анализ биоматериалов с выдачей результатов в кратчайшие сроки.",
    color: "secondary"
  }
];

const ServicesSection = () => {
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
    <section id="services" ref={sectionRef} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Наши <span className="text-primary">услуги</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Предоставляем полный спектр ветеринарных услуг в комфортной для вашего питомца домашней обстановке
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow animate-on-scroll">
              <CardContent className="p-6">
                <div className={`bg-${service.color}/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6`}>
                  <Icon 
                    name={service.icon as any} 
                    className={`w-8 h-8 text-${service.color}`} 
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
