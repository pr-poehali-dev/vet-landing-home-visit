
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Анна Петрова",
    pet: "кот Мурзик",
    image: "https://images.unsplash.com/photo-1628015081036-0747ec8f077a?w=150&h=150&fit=crop",
    text: "Огромное спасибо ветеринару, который приехал к нам домой! Мой кот панически боится клиник, а дома был спокоен и позволил провести все необходимые процедуры. Профессионально и внимательно!",
    rating: 5
  },
  {
    id: 2,
    name: "Дмитрий Волков",
    pet: "собака Рекс",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=150&h=150&fit=crop",
    text: "У нашего пса проблемы с суставами, и поездка в клинику для него очень болезненна. Вызвали ветеринара на дом, и это было лучшее решение. Доктор был внимательным, осмотрел питомца, сделал укол, дал рекомендации. Рекс даже не нервничал.",
    rating: 5
  },
  {
    id: 3,
    name: "Елена Соколова",
    pet: "хомяк Пушок",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
    text: "Обратились с проблемой у хомячка. Ветеринар приехал с необходимым оборудованием, быстро поставил диагноз и назначил лечение. Сейчас наш питомец здоров! Очень довольны качеством обслуживания.",
    rating: 4
  },
  {
    id: 4,
    name: "Сергей Игнатьев",
    pet: "кошка Масяня",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    text: "Наша кошка заболела в выходной день, и мы не знали, что делать. Вызвали ветеринара на дом, который приехал менее чем за час! Оперативность и профессионализм на высшем уровне. Теперь только к вам!",
    rating: 5
  },
  {
    id: 5,
    name: "Ирина Лебедева",
    pet: "кролик Пушистик",
    image: "https://images.unsplash.com/photo-1619380061814-58f7170a5a6d?w=150&h=150&fit=crop",
    text: "Очень благодарна команде ВетВизит за помощь нашему кролику. Доктор был терпелив и аккуратен, подробно объяснил причину болезни и дал рекомендации по уходу. Большое спасибо!",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const testimonialContainerRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elementsToAnimate = entry.target.querySelectorAll('.animate-on-scroll');
          if (entry.isIntersecting) {
            elementsToAnimate.forEach((el) => {
              el.classList.add('visible');
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

  useEffect(() => {
    if (testimonialContainerRef.current) {
      testimonialContainerRef.current.style.transform = `translateX(-${activeIndex * 100}%)`;
    }
  }, [activeIndex]);

  return (
    <section id="reviews" ref={sectionRef} className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Что говорят <span className="text-primary">наши клиенты</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы гордимся отзывами владельцев питомцев, которым оказали помощь
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto animate-on-scroll">
          <div className="overflow-hidden">
            <div 
              ref={testimonialContainerRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ width: `${testimonials.length * 100}%` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full px-4" 
                  style={{ flex: `0 0 ${100 / testimonials.length}%` }}
                >
                  <Card className="shadow-lg border-none">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Icon 
                                key={i} 
                                name="Star" 
                                className={`w-5 h-5 ${
                                  i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                                }`} 
                              />
                            ))}
                          </div>
                          <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                          <div>
                            <p className="font-bold text-dark">{testimonial.name}</p>
                            <p className="text-sm text-gray-500">Питомец: {testimonial.pet}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button 
            variant="outline" 
            size="icon" 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white shadow-lg hover:bg-primary hover:text-white md:-translate-x-12"
            onClick={prevTestimonial}
          >
            <Icon name="ChevronLeft" className="h-5 w-5" />
            <span className="sr-only">Предыдущий отзыв</span>
          </Button>

          <Button 
            variant="outline" 
            size="icon" 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white shadow-lg hover:bg-primary hover:text-white md:translate-x-12"
            onClick={nextTestimonial}
          >
            <Icon name="ChevronRight" className="h-5 w-5" />
            <span className="sr-only">Следующий отзыв</span>
          </Button>
        </div>

        <div className="flex justify-center mt-8 animate-on-scroll">
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  activeIndex === index ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Перейти к отзыву ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
