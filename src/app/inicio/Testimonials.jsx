import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Gracia Agnez",
      position: "Designation",
      image: "https://html.rometheme.net/pharmed/image/image-600x600-22.jpg",
      rating: 4,
      text: "Exceptional service and care! The pharmacists here always go above and beyond to make sure I understand my medications and provide valuable advice. They truly care about my health."
    },
    {
      id: 2,
      name: "Muguel Adam",
      position: "Designation",
      image: "https://html.rometheme.net/pharmed/image/image-600x600-23.jpg",
      rating: 4,
      text: "Exceptional service and care! The pharmacists here always go above and beyond to make sure I understand my medications and provide valuable advice. They truly care about my health."
    },
    {
      id: 3,
      name: "Robert Anderson",
      position: "Designation",
      image: "https://html.rometheme.net/pharmed/image/image-600x600-21.jpg",
      rating: 4,
      text: "Exceptional service and care! The pharmacists here always go above and beyond to make sure I understand my medications and provide valuable advice. They truly care about my health."
    }
  ];

  const teamMembers = [
    "https://html.rometheme.net/pharmed/image/team1.jpg",
    "https://html.rometheme.net/pharmed/image/team2.jpg",
    "https://html.rometheme.net/pharmed/image/team3.jpg"
  ];

  return (
    <section className="relative py-8 md:py-12 lg:py-16 mt-5 overflow-visible">
      <div className="px-4 md:px-8 lg:px-16 rounded-3xl" 
           style={{ 
             backgroundImage: 'url(https://html.rometheme.net/pharmed/image/BG_testi.png)',
             backgroundSize: 'cover',
             backgroundPosition: 'center'
           }}>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          
          {/* Columna izquierda - Testimonios */}
          <div className="mb-3 flex py-8 flex-col justify-center scrollanimation animate-fade-in-left">
            <div className="flex flex-col gap-4 md:gap-6 p-6 md:p-8 bg-blue-50 rounded-3xl shadow-xl">
              
              {/* Encabezado */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-2 items-center">
                  <img 
                    src="https://html.rometheme.net/pharmed/image/cuida_medicine-outline.png" 
                    className="w-10 h-10 object-contain" 
                    alt="Medicine icon"
                  />
                  <h6 className="text-primary m-0 font-semibold">Testimonials</h6>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                  Let's Hear What They Say About Us
                </h3>
              </div>

              {/* Carrusel de testimonios */}
              <div className="overflow-hidden">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  spaceBetween={30}
                  slidesPerView={1}
                  className="swiperTestimonials"
                >
                  {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <div className="testimonial-container bg-white p-6 md:p-8 rounded-2xl shadow-sm">
                        
                        {/* Rating y texto */}
                        <div className="flex flex-col gap-4 mb-6">
                          <div className="flex gap-1">
                            {[...Array(4)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                            <Star className="w-5 h-5 fill-gray-300 text-gray-300" />
                          </div>
                          <p className="text-gray-600 italic text-base md:text-lg">
                            "{testimonial.text}"
                          </p>
                        </div>

                        {/* Información del cliente */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                          <div className="flex flex-row gap-3 items-center">
                            <div className="customer-item w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
                              <img 
                                src={testimonial.image} 
                                className="w-full h-full object-cover"
                                alt={testimonial.name}
                              />
                            </div>
                            <div className="flex flex-col">
                              <h4 className="text-lg md:text-xl font-semibold text-gray-900">{testimonial.name}</h4>
                              <span className="text-gray-600 text-sm md:text-base">{testimonial.position}</span>
                            </div>
                          </div>
                          
                          <Quote className="w-10 h-10 md:w-12 md:h-12 text-primary/30 hidden md:block" />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          {/* Columna derecha - Imagen y estadísticas */}
          <div className="scrollanimation animate-fade-in-right">
            <div className="h-full relative">
              
              {/* Imagen principal */}
              <div className="relative z-10 mb-6">
                <div className="rounded-3xl overflow-hidden">
                  <img 
                    src="https://html.rometheme.net/pharmed/image/testi.png" 
                    alt="Happy customers" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Tarjeta flotante con estadísticas */}
              <div className="absolute z-20  right-0 bottom-10">
                <div className="flex flex-col items-center justify-center gap-4 bg-blue-50 p-6 md:p-8 rounded-3xl shadow-xl mx-4 md:mx-8">
                  
                  {/* Avatares de clientes */}
                  <div className="flex -space-x-3 md:-space-x-4">
                    {teamMembers.map((member, index) => (
                      <div key={index} className="customer-item w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
                        <img 
                          src={member} 
                          className="w-full h-full object-cover"
                          alt={`Team member ${index + 1}`}
                        />
                      </div>
                    ))}
                    
                    {/* Contador */}
                    <div className="customer-item w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center">
                      <span className="text-primary font-bold text-lg md:text-xl">1k+</span>
                    </div>
                  </div>

                  {/* Rating y reviews */}
                  <div className="flex flex-col gap-2 items-center">
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="w-5 h-5 md:w-6 md:h-6 fill-gray-300 text-gray-300" />
                    </div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900">(1.5k+ Reviews)</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;