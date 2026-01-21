import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Componente para el contador animado
const CounterItem = ({ target, suffix, title, description, duration = 1000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            startCounter();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasStarted]);

  const startCounter = () => {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  };

  return (
    <div ref={ref} className="py-10 mb-3 border-r last:border-r-0">
      <div className="flex flex-col items-center text-center px-4 md:px-8">
        <div className="flex items-baseline justify-center gap-1">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            {count}
          </h3>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            {suffix}
          </h3>
        </div>
        <h5 className="text-xl md:text-2xl font-semibold text-gray-900 mt-4 mb-3">
          {title}
        </h5>
        <p className="text-gray-600 text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

function WhyChooseUs() {
  const slides = [
    { id: 1, img: 'https://html.rometheme.net/pharmed/image/img24.jpg' },
    { id: 2, img: 'https://html.rometheme.net/pharmed/image/img25.jpg' },
    { id: 3, img: 'https://html.rometheme.net/pharmed/image/img26.jpg' },
  ];

  const counterData = [
    {
      target: 127,
      suffix: '+',
      title: 'Professional Staff',
      description: 'Our team offers reliable, personalized care to help you achieve optimal health outcomes.'
    },
    {
      target: 2,
      suffix: 'K',
      title: 'Active Members',
      description: 'They are committed to providing ongoing support, ensuring the best possible care.'
    },
    {
      target: 25,
      suffix: '+',
      title: 'Years Experience',
      description: 'We leverage our extensive background to deliver accurate advice, trusted medical services.'
    }
  ];

  return (
    <>
      <section className="bg-primary-50 py-8 md:py-12 lg:py-16 pb-40 md:pb-48 lg:pb-64">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Columna izquierda - Carrusel Swiper */}
            <div className="mb-3 order-2 lg:order-1">
              <div className="relative pe-0 lg:pe-5">
                {/* Swiper */}
                <div className="relative z-10">
                  <Swiper
                    modules={[Navigation]}
                    loop
                    navigation={{
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    }}
                    spaceBetween={10}
                    slidesPerView={1}
                    className="swiperCard"
                  >
                    {slides.map((slide) => (
                      <SwiperSlide key={slide.id}>
                        <div className="p-0 rounded-3xl lg:rounded-4xl overflow-hidden">
                          <div className="flex justify-center">
                            <img
                              src={slide.img}
                              className="w-full h-auto object-cover rounded-3xl lg:rounded-4xl"
                              alt="Healthcare services"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Botón de navegación siguiente */}
                <button
                  className="swiper-button-next  bg-white/90 backdrop-blur-sm rounded-full shadow-sm text-primary hover:bg-white hover:shadow-md hover:text-primary-600 transition-all duration-300 absolute top-1/2 -translate-y-1/2 right-4 transform hover:scale-110"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5 mx-auto" strokeWidth={2.5} />
                </button>

                {/* Botón de navegación anterior */}
                <button
                  className="swiper-button-prev  bg-white/90 backdrop-blur-sm rounded-full shadow-sm text-primary hover:bg-white hover:shadow-md hover:text-primary-600 transition-all duration-300 absolute top-1/2 -translate-y-1/2 left-4 transform hover:scale-110"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5 mx-auto" strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Columna derecha - Contenido */}
            <div className="mb-3 order-1 lg:order-2">
              <div className="grid h-f gap-3 md:gap-4 lg:gap-6">
                <div className="flex flex-col gap-3 md:gap-4 lg:gap-6">
                  {/* Encabezado */}
                  <div className="flex flex-row gap-2 items-center">
                    <img
                      src="https://html.rometheme.net/pharmed/image/cuida_medicine-outline.png"
                      className="w-10 h-10 object-contain"
                      alt="Medicine icon"
                    />
                    <h6 className="text-primary m-0 font-semibold">Why Choose Us</h6>
                  </div>

                  {/* Título */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                    Caring for Your Health with Integrity & Excellence
                  </h3>

                  {/* Descripción */}
                  <p className="text-gray-600">
                    At our pharmacy, we are dedicated to providing top-notch healthcare solutions with a
                    focus on quality, safety, and personalized care.
                  </p>

                  {/* Barras de progreso */}
                  <div className="flex flex-col gap-4 md:gap-6">
                    {/* Progreso 1 */}
                    <div className="w-full group">
                      <div className="flex justify-between items-center mb-2">
                        <h5 className="text-lg font-semibold text-gray-800">Priority Customer Support</h5>
                        <span className="text-primary font-bold text-sm md:text-base">85%</span>
                      </div>
                      <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ width: '85%' }}
                        />
                      </div>
                    </div>

                    {/* Progreso 2 */}
                    <div className="w-full group">
                      <div className="flex justify-between items-center mb-2">
                        <h5 className="text-lg font-semibold text-gray-800">Innovation and Growth</h5>
                        <span className="text-primary font-bold text-sm md:text-base">90%</span>
                      </div>
                      <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-1000 ease-out delay-300"
                          style={{ width: '90%' }}
                        />
                      </div>
                    </div>

                    {/* Progreso 3 */}
                    <div className="w-full group">
                      <div className="flex justify-between items-center mb-2">
                        <h5 className="text-lg font-semibold text-gray-800">Global Community of Wellness</h5>
                        <span className="text-primary font-bold text-sm md:text-base">88%</span>
                      </div>
                      <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-1000 ease-out delay-600"
                          style={{ width: '88%' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Tarjetas */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 mt-2">
                  {/* Tarjeta 1 */}
                  <div className="mb-3">
                    <div className="flex flex-col gap-1 p-4 md:p-6 bg-white rounded-2xl lg:rounded-3xl relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-primary-100">
                      <h5 className="text-xl font-bold text-gray-900">Wellness Journey</h5>
                      <p className="text-gray-600 text-sm md:text-base">Secure Your Consultation Appointment!</p>
                      <a href="#" className="text-primary font-semibold hover:underline inline-flex items-center gap-1 mt-2">
                        Make Appointment
                        <i className="fas fa-arrow-right text-sm"></i>
                      </a>
                      {/* Ícono */}
                      <div className="absolute bottom-0 right-0 opacity-10">
                        <i className="fas fa-user-md text-primary" style={{ fontSize: '78px' }}></i>
                      </div>
                    </div>
                  </div>

                  {/* Tarjeta 2 */}
                  <div className="mb-3">
                    <div className="flex flex-col gap-1 p-4 md:p-6 bg-white rounded-2xl lg:rounded-3xl relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-primary-100">
                      <h5 className="text-xl font-bold text-gray-900">Need Care?</h5>
                      <p className="text-gray-600 text-sm md:text-base">We are available 24/7. Call Now for Immediate Assistance!</p>
                      <a href="tel:0761-8523-398" className="text-primary font-semibold hover:underline inline-flex items-center gap-1 mt-2">
                        0761-8523-398
                        <i className="fas fa-phone text-sm"></i>
                      </a>
                      {/* Ícono */}
                      <div className="absolute bottom-0 right-0 opacity-10">
                        <i className="fas fa-phone text-primary" style={{ fontSize: '78px' }}></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Sección de contadores */}
      <section className="pt-0 -mt-32 md:-mt-40 lg:-mt-48 relative z-20">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="bg-primary-50 border border-primary-200 rounded-3xl lg:rounded-4xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary-200">
                {counterData.map((item, index) => (
                  <CounterItem
                    key={index}
                    target={item.target}
                    suffix={item.suffix}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChooseUs;