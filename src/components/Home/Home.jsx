import React from "react";
import { FaPlayCircle } from "react-icons/fa";

import dog1 from "../../assets/273eae196685e4c7218ad47f291b9ab7.jpg";
import { useLoaderData } from "react-router";
import PetAndSuppliesCard from "../../PetAndSuppliesCard/PetAndSuppliesCard";
import HeroSection from "./HeroCarusl";

const HomePage = () => {
  const data = useLoaderData();

  return (
    <div className="font-sans text-gray-800 bg-orange-50">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Side Images */}
          <div className="relative w-full md:w-1/2 h-[400px]">
            {/* Top Image */}
            <img
              src="https://i.pinimg.com/1200x/4f/a6/dd/4fa6dda44b9be0e1db998dfb9c1d705e.jpg"
              alt="Happy owner and dog"
              className="absolute top-0 left-0 w-50 h-50 rounded-2xl shadow-2xl object-cover hover:scale-[1.05] transition"
            />
            {/* Bottom Image */}
            <img
              src="https://i.pinimg.com/1200x/4f/a6/dd/4fa6dda44b9be0e1db998dfb9c1d705e.jpg"
              alt="Cute cat"
              className="absolute -bottom-5 left-0 w-50 h-50 rounded-2xl shadow-2xl object-cover hover:scale-[1.05] transition"
            />
            {/* Right Image */}
            <img
              src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6"
              alt="Pet accessories"
              className="absolute top-1/2 left-80 w-50 h-50 rounded-2xl shadow-2xl object-cover transform -translate-x-1/2 -translate-y-1/2 hover:scale-[1.05] transition"
            />
          </div>

          {/* Right Side Text */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-5 text-orange-600">
              About PawMart
            </h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              At <span className="font-semibold">PawMart</span>, we’re
              passionate about redefining pet care. We design premium products
              that ensure comfort, safety, and style for every pet. From organic
              food to trendy accessories — every item is crafted with love and
              care.
            </p>
            <button className="bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-orange-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-900">
          Explore Our Categories
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Pet Accessories",
              desc: "Stylish collars, leashes & harnesses.",
              img: "https://i.pinimg.com/1200x/43/5d/d9/435dd991c85562e0b485c10ea733b706.jpg",
            },
            {
              title: "Premium Pet Food",
              desc: "Nutritious food for healthy pets.",
              img: "https://i.pinimg.com/1200x/ad/7d/ad/ad7dadbc1fb752ebbe88ef17cd7c738b.jpg",
            },
            {
              title: "Grooming Essentials",
              desc: "Shampoos, brushes, and spa kits.",
              img: "https://i.pinimg.com/736x/6a/89/48/6a8948b559735c80860cdf2169efc874.jpg",
            },
            {
              title: "Health & Wellness",
              desc: "Supplements and care products.",
              img: "https://i.pinimg.com/736x/99/4d/18/994d18ef7c5ca94a5d41d454e98ba687.jpg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-1"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover shadow-lg"
              />
              <h3 className="font-semibold text-xl text-orange-600 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <button className="text-sm text-orange-600 hover:underline">
                Discover More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Listings */}
      <div>
        <h1 className="text-3xl text-gray-800 text-center "></h1>
        {
          <div className="py-20 px-6 bg-white">
            <h2 className="text-3xl font-bold mb-10 text-center text-orange-600">
              Recent Listings{" "}
              <span className="text-gray-400">({data.length})</span>
            </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {data.map((item) => (
                <PetAndSuppliesCard
                  key={item._id}
                  item={item}
                ></PetAndSuppliesCard>
              ))}
            </div>
          </div>
        }
      </div>

      {/* Why Adopt Section */}
      <section className="py-20 px-6 bg-orange-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-10">
          🐾 Why Adopt from PawMart?
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed mb-8">
          Adopting a pet saves lives and gives a loving home to animals in need.
          At PawMart, we connect you with healthy, vaccinated, and happy pets
          waiting for your care. Each adoption brings joy to both the pet and
          your family.
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Save Lives",
              desc: "Every adoption rescues a pet and gives it a second chance.",
            },
            {
              title: "Health & Care",
              desc: "All pets are checked and vaccinated for a safe adoption.",
            },
            {
              title: "Unconditional Love",
              desc: "Adopted pets bring joy, loyalty, and companionship to your home.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition"
            >
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Our Pet Heroes */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-10">
          🐕 Meet Our Pet Heroes
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed mb-12">
          Celebrating the amazing adopters and caregivers who have made a
          difference in the lives of our furry friends.
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Ayesha Rahman",
              role: "Dog Adopter",
              img: "https://i.pinimg.com/736x/a0/3f/a9/a03fa990fa61671c6fb11f78318ed033.jpg",
            },
            {
              name: "Tanvir Hossain",
              role: "Cat Caregiver",
              img: "https://i.pinimg.com/736x/6e/16/a5/6e16a5f2b4842e3fef4b446427567f7e.jpg",
            },
            {
              name: "Mithila Sultana",
              role: "Pet Volunteer",
              img: "https://i.pinimg.com/1200x/26/f5/7c/26f57cea68363c1fa9e4acbe1d372851.jpg",
            },
            {
              name: "Riyad Karim",
              role: "Adoption Advocate",
              img: "https://i.pinimg.com/736x/e9/d7/fd/e9d7fdcd51b37b6397d1b523bedf50f0.jpg",
            },
          ].map((hero, i) => (
            <div
              key={i}
              className="bg-orange-50 p-5 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition"
            >
              <img
                src={hero.img}
                alt={hero.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                {hero.name}
              </h3>
              <p className="text-orange-600">{hero.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
