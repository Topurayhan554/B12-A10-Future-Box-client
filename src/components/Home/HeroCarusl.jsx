import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import dog1 from "../../assets/273eae196685e4c7218ad47f291b9ab7.jpg";
import dog2 from "../../assets/30fb6f5af95f24723789c444c9adc258.jpg";
import dog3 from "../../assets/90bafbb4368eb094cf2d33ead399d83b.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Swiper Background */}
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {[dog1, dog2, dog3].map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${img})`,
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold leading-snug">
                    Crafting Pure Joy for{" "}
                    <span className="text-orange-400">Your Furry Friends</span>
                  </h1>
                  <p className="mt-5 text-gray-200 max-w-md mx-auto text-lg">
                    Welcome to{" "}
                    <span className="font-semibold text-orange-400">
                      PawMart
                    </span>
                    , where we bring happiness and comfort to your beloved pets
                    with premium care and heartfelt craftsmanship.
                  </p>

                  <div className="mt-8 flex justify-center gap-4 flex-wrap">
                    <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition">
                      Shop Now
                    </button>
                    <button className="flex items-center gap-2 text-orange-400 font-medium hover:underline">
                      <FaPlayCircle className="text-2xl" /> Watch Video
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
