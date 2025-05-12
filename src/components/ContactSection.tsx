import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { toast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    petType: "",
    message: "",
  });

  const sectionRef = useRef<HTMLElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({
      name: "",
      phone: "",
      petType: "",
      message: "",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elementsToAnimate =
            entry.target.querySelectorAll(".animate-on-scroll");
          if (entry.isIntersecting) {
            elementsToAnimate.forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.1 },
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
    <section id="contacts" ref={sectionRef} className="py-16 md:py-24 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-white"></div>
      <div className="absolute top-0 left-0 opacity-10 -z-5">
        <Icon name="Cat" className="w-72 h-72 text-primary" />
      </div>
      <div className="absolute bottom-0 right-0 opacity-10 -z-5">
        <Icon name="Dog" className="w-72 h-72 text-secondary" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Свяжитесь с нами для{" "}
                <span className="text-primary">вызова ветеринара</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Оставьте заявку, и мы оперативно свяжемся с вами для уточнения
                деталей вызова и определения удобного времени.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Icon name="Phone" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Телефон</h3>
                    <p className="text-primary hover:underline">
                      <a href="tel:89043029179">8 904 302 91 79</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Icon name="Mail" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-primary hover:underline">
                      <a href="mailto:info@vetvisit.ru">info@vetvisit.ru</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Icon name="Clock" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Время работы</h3>
                    <p className="text-gray-600">Ежедневно с 9:00 до 21:00</p>
                    <p className="text-gray-600">
                      Экстренные вызовы - круглосуточно
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Icon name="MapPin" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Зона обслуживания</h3>
                    <p className="text-gray-600">
                      Город и пригород в радиусе 30 км
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll">
              <div className="bg-white p-8 rounded-xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Заполните форму</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Номер телефона</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="petType">Вид животного</Label>
                    <Input
                      id="petType"
                      name="petType"
                      placeholder="Кошка, собака, хомяк и т.д."
                      value={formData.petType}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Опишите проблему</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Что беспокоит вашего питомца?"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Отправить заявку
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
