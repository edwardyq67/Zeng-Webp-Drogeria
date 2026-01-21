import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const MedicalTeam = () => {
  const medicalTeam = [
    {
      id: 1,
      name: "Dr. Robert Nathan",
      position: "Owner",
      specialization: "Administrator",
      image: "https://html.rometheme.net/pharmed/image/img35.jpg",
      courses: ["all", "course5"],
    },
    {
      id: 2,
      name: "Angela Clay",
      position: "Pharmacist",
      specialization: "Pharmacist",
      image: "https://html.rometheme.net/pharmed/image/img34.jpg",
      courses: ["all", "course2"],
    },
    {
      id: 3,
      name: "Kenzo Abigail",
      position: "Medical Laboratory",
      specialization: "Medical Laboratory",
      image: "https://html.rometheme.net/pharmed/image/img33.jpg",
      courses: ["all", "course3"],
    },
    {
      id: 4,
      name: "Clarine Kitty",
      position: "Cashier",
      specialization: "Administrator",
      image: "https://html.rometheme.net/pharmed/image/img32.jpg",
      courses: ["all", "course5"],
    },
    {
      id: 5,
      name: "Andrea Cruis",
      position: "Nurse",
      specialization: "Nurse",
      image: "https://html.rometheme.net/pharmed/image/img31.jpg",
      courses: ["all", "course4"],
    },
    {
      id: 6,
      name: "Dr. Michael Chen",
      position: "Senior Surgeon",
      specialization: "Surgeon",
      image: "https://html.rometheme.net/pharmed/image/img30.jpg",
      courses: ["all", "course6"],
    },
    {
      id: 7,
      name: "Sarah Johnson",
      position: "Pediatrician",
      specialization: "Pediatrics",
      image: "https://html.rometheme.net/pharmed/image/img35.jpg",
      courses: ["all", "course7"],
    },
    {
      id: 8,
      name: "David Rodriguez",
      position: "Cardiologist",
      specialization: "Cardiology",
      image: "https://html.rometheme.net/pharmed/image/img34.jpg",
      courses: ["all", "course8"],
    }
  ];

  const specializations = [
    { id: "all", label: "All" },
    { id: "course2", label: "Pharmacist" },
    { id: "course3", label: "Medical Laboratory" },
    { id: "course4", label: "Nurse" },
    { id: "course5", label: "Administrator" },
    { id: "course6", label: "Surgeon" },
    { id: "course7", label: "Pediatrics" },
    { id: "course8", label: "Cardiology" }
  ];

  const [activeFilter, setActiveFilter] = useState("all");
  const swiperRef = useRef(null);

  const filteredTeam = activeFilter === "all" 
    ? medicalTeam 
    : medicalTeam.filter(member => member.courses.includes(activeFilter));

  const scrollLeft = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="https://html.rometheme.net/pharmed/image/cuida_medicine-outline.png" 
              className="w-8 h-8" 
              alt="Medical Icon" 
            />
            <span className="text-teal-600 font-semibold">Our Team</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Meet Our Certified Healthcare Providers
          </h2>
          <p className="text-gray-600">
            With expertise in various medical and pharmacy fields, they prioritize your health, offering personalized treatments and trusted guidance.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
          {specializations.map(spec => (
            <button
              key={spec.id}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === spec.id 
                  ? 'bg-teal-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setActiveFilter(spec.id)}
            >
              {spec.label}
            </button>
          ))}
        </div>

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div 
            ref={swiperRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredTeam.map(member => (
              <div 
                key={member.id} 
                className="flex-shrink-0 w-72"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-80">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 right-0 bg-teal-600 p-3 rounded-tl-xl">
                      <div className="flex flex-col gap-3">
                        <a href="https://www.facebook.com" className="text-white hover:text-teal-200 transition-colors">
                          <Facebook size={16} />
                        </a>
                        <a href="https://www.twitter.com" className="text-white hover:text-teal-200 transition-colors">
                          <Twitter size={16} />
                        </a>
                        <a href="https://www.instagram.com" className="text-white hover:text-teal-200 transition-colors">
                          <Instagram size={16} />
                        </a>
                        <a href="https://www.youtube.com" className="text-white hover:text-teal-200 transition-colors">
                          <Youtube size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-600">
                      {member.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default MedicalTeam;