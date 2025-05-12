
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 to-white"></div>
      <div className="absolute top-20 right-20 opacity-10 -z-5">
        <Icon name="Paw" className="w-72 h-72 text-primary" />
      </div>

      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-6 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-dark animate-fadeIn">
              Ветеринарная помощь{" "}
              <span className="text-primary">с выездом на дом</span>
            </h1>
            <p
              className="text-lg md:text-xl text-gray-600 animate-fadeIn"
              style={{ animationDelay: "0.2s" }}
            >
              Профессиональная забота о здоровье вашего питомца в комфортной для
              него обстановке. Без стресса, очередей и поездок.
            </p>

            <div
              className="flex flex-wrap gap-4 pt-4 animate-fadeIn"
              style={{ animationDelay: "0.4s" }}
            >
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full">
                Вызвать ветеринара
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg rounded-full"
              >
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                Позвонить нам
              </Button>
            </div>

            <div
              className="flex items-center gap-6 pt-6 animate-fadeIn"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex -space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop"
                  alt="Ветеринар"
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=150&h=150&fit=crop"
                  alt="Ветеринар"
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop"
                  alt="Ветеринар"
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
              </div>
              <div>
                <div className="text-sm text-gray-500">Команда ветеринаров</div>
                <div className="font-medium">с опытом от 5 лет</div>
              </div>
            </div>
          </div>

          <div
            className="relative md:h-[600px] animate-fadeIn"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-secondary/20 rounded-full -z-10 translate-x-1/4 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-accent/20 rounded-full -z-10 -translate-x-1/4 translate-y-1/4"></div>

            <div className="relative h-full flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1628009368231-7bb7cfbcb3c1?w=800&h=1000&fit=crop"
                alt="Ветеринар с котом"
                className="rounded-2xl shadow-2xl max-h-[80vh] object-cover z-10"
              />

              {/* Floating badges */}
              <div
                className="absolute top-10 -left-6 md:top-20 md:-left-12 bg-white p-4 rounded-xl shadow-lg animate-fadeIn flex items-center gap-3"
                style={{ animationDelay: "0.7s" }}
              >
                <div className="bg-primary/10 p-2 rounded-full">
                  <Icon name="Clock" className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Быстрый приезд</p>
                  <p className="text-sm text-gray-500">В течение 60 минут</p>
                </div>
              </div>

              <div
                className="absolute bottom-10 -right-6 md:bottom-20 md:-right-12 bg-white p-4 rounded-xl shadow-lg animate-fadeIn flex items-center gap-3"
                style={{ animationDelay: "0.9s" }}
              >
                <div className="bg-secondary/10 p-2 rounded-full">
                  <Icon name="ShieldCheck" className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-medium">24/7 на связи</p>
                  <p className="text-sm text-gray-500">Поддержка и помощь</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
