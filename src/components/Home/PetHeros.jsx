import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const PetHeros = () => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/pet-heroes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // check if data comes correctly
        setHeroes(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching heroes:", err));
  }, []);

  return (
    <section className="bg-orange-50 py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-12">
        🐾 Meet Our Pet Heroes
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {heroes.map((hero) => (
          <SwiperSlide key={hero._id}>
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 mx-4">
              <img
                src={hero.image}
                alt={hero.name}
                className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-orange-400"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {hero.name}
              </h3>
              <p className="text-orange-600 font-medium">{hero.role}</p>
              <p className="mt-3 text-gray-600 italic">"{hero.quote}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PetHeros;
