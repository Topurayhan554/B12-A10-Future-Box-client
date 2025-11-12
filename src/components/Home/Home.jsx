import React from "react";
import { FaPlayCircle } from "react-icons/fa";

import dog1 from "../../assets/273eae196685e4c7218ad47f291b9ab7.jpg";
import { Link, useLoaderData } from "react-router";
import PetAndSuppliesCard from "../../PetAndSuppliesCard/PetAndSuppliesCard";
import HeroSection from "./HeroCarusl";
import PetHeros from "./PetHeros";

const HomePage = () => {
  const data = useLoaderData();
 

  return (
    <div className="font-sans text-gray-800 bg-orange-50">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Side Images */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <img
              src="https://i.pinimg.com/736x/a2/91/c9/a291c993693a5c000141735f0371a808.jpg"
              alt="Happy owner and dog"
              className="w-full h-48 sm:h-56 md:h-60 lg:h-72 rounded-2xl shadow-xl object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://i.pinimg.com/1200x/1c/48/52/1c4852569d20f485be37d6713788a6cd.jpg"
              alt="Pet accessories"
              className="w-full h-48 sm:h-56 md:h-60 lg:h-72 rounded-2xl shadow-xl object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://i.pinimg.com/1200x/1e/ee/c4/1eeec4de6f91ec7f6c8532cf41bb47f0.jpg"
              alt="Pet accessories"
              className="w-full h-48 sm:h-56 md:h-60 lg:h-72 rounded-2xl shadow-xl object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://i.pinimg.com/736x/01/b5/c6/01b5c670a4c19433d128242d1f09d38f.jpg"
              alt="Cute cat"
              className="w-full h-48 sm:h-56 md:h-60 lg:h-72 rounded-2xl shadow-xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right Side Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-orange-600">
              About PawMart
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
              At <span className="font-semibold">PawMart</span>, we’re
              passionate about redefining pet care. We design premium products
              that ensure comfort, safety, and style for every pet. From organic
              food to trendy accessories — every item is crafted with love and
              care.
            </p>
            <button className="bg-orange-600 text-white px-6 py-2.5 rounded-lg hover:bg-orange-700 transition duration-300">
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

              category: "Pets",
              desc: "Stylish collars, leashes & harnesses.",
              img: "https://i.pinimg.com/1200x/43/5d/d9/435dd991c85562e0b485c10ea733b706.jpg",
            },
            {
              title: "Premium Pet Food",
              category: "Food",
              desc: "Nutritious food for healthy pets.",
              img: "https://i.pinimg.com/1200x/ad/7d/ad/ad7dadbc1fb752ebbe88ef17cd7c738b.jpg",
            },
            {
              title: "Grooming Essentials",
              category: "Accessories",

              desc: "Shampoos, brushes, and spa kits.",
              img: "https://i.pinimg.com/736x/6a/89/48/6a8948b559735c80860cdf2169efc874.jpg",
            },
            {
              title: "Health & Wellness",

              category: "Care Products",
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
              <Link
                to={`/categories/${item.category}`}
                className="text-sm text-orange-600 hover:underline"
              >
                Discover More →
              </Link>
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

            <div className="flex flex-col sm:flex-row items-center justify-center w-full my-12">
              <hr className="flex-grow border-t border-orange-200 w-full sm:w-auto" />
              <Link
                to={"/pet-supplies"}
                className="mx-4 my-4 sm:my-0 px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                See All
              </Link>
              <hr className="flex-grow border-t border-orange-200 w-full sm:w-auto" />
            </div>
          </div>
        }
      </div>

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

      {/* Pet Heroes */}
      <PetHeros />
    </div>
  );
};

export default HomePage;
