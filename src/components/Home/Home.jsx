import React from "react";
import { FaPlayCircle } from "react-icons/fa";

import dog1 from "../../assets/273eae196685e4c7218ad47f291b9ab7.jpg";

// Sample Listings Data (12 items)
const listings = [
  {
    name: "Golden Retriever Puppy",
    category: "Pets",
    price: 0,
    location: "Dhaka",
    description: "Friendly 2-month-old puppy available for adoption.",
    image:
      "https://i.pinimg.com/736x/a0/3f/a9/a03fa990fa61671c6fb11f78318ed033.jpg",
    email: "owner1@gmail.com",
    date: "2025-10-27",
  },
  {
    name: "Persian Cat",
    category: "Pets",
    price: 0,
    location: "Chattogram",
    description: "Beautiful white Persian cat looking for a loving home.",
    image:
      "https://i.pinimg.com/736x/6e/16/a5/6e16a5f2b4842e3fef4b446427567f7e.jpg",
    email: "owner2@gmail.com",
    date: "2025-10-26",
  },
  {
    name: "Premium Dog Food (10kg)",
    category: "Food",
    price: 2500,
    location: "Sylhet",
    description: "High-protein dog food suitable for all breeds.",
    image:
      "https://i.pinimg.com/1200x/26/f5/7c/26f57cea68363c1fa9e4acbe1d372851.jpg",
    email: "shop1@gmail.com",
    date: "2025-10-25",
  },
  {
    name: "Cat Scratching Post",
    category: "Accessories",
    price: 800,
    location: "Dhaka",
    description: "Durable and fun scratching post for active cats.",
    image:
      "https://i.pinimg.com/736x/e9/d7/fd/e9d7fdcd51b37b6397d1b523bedf50f0.jpg",
    email: "shop2@gmail.com",
    date: "2025-10-25",
  },
  {
    name: "German Shepherd Puppy",
    category: "Pets",
    price: 0,
    location: "Khulna",
    description: "Playful and healthy German Shepherd ready for adoption.",
    image:
      "https://i.pinimg.com/736x/11/c1/33/11c1333210702b0d3501ea9f99044144.jpg",
    email: "owner3@gmail.com",
    date: "2025-10-24",
  },
  {
    name: "Bird Cage (Large Size)",
    category: "Accessories",
    price: 1200,
    location: "Rajshahi",
    description:
      "Spacious cage suitable for parrots and other medium-sized birds.",
    image:
      "https://i.pinimg.com/736x/3b/57/59/3b5759bc7711e1fce20597f0e7179abc.jpg",
    email: "shop3@gmail.com",
    date: "2025-10-23",
  },
  {
    name: "Rabbit Hay Food Pack",
    category: "Food",
    price: 500,
    location: "Dhaka",
    description: "Organic hay for rabbits and guinea pigs.",
    image:
      "https://i.pinimg.com/736x/7f/f4/9a/7ff49a2914c561f9761aa61652a6de79.jpg",
    email: "shop4@gmail.com",
    date: "2025-10-22",
  },
  {
    name: "Siamese Cat",
    category: "Pets",
    price: 0,
    location: "Barishal",
    description: "Charming Siamese cat looking for adoption.",
    image:
      "https://i.pinimg.com/1200x/8a/9f/15/8a9f15d3dd14425d0ba6f9f4a74a5cd1.jpg",
    email: "owner4@gmail.com",
    date: "2025-10-21",
  },
  {
    name: "Pet Shampoo (Aloe Vera)",
    category: "Care Products",
    price: 650,
    location: "Sylhet",
    description: "Gentle pet shampoo for smooth and shiny fur.",
    image:
      "https://i.pinimg.com/1200x/20/76/7f/20767fe96a70be77da8614027719cba3.jpg",
    email: "shop5@gmail.com",
    date: "2025-10-20",
  },
  {
    name: "Pomeranian Puppy",
    category: "Pets",
    price: 0,
    location: "Dhaka",
    description: "Cute fluffy Pomeranian puppy ready for adoption.",
    image:
      "https://i.pinimg.com/736x/30/98/70/3098702d09e6794dbf9c9346382dadd1.jpg",
    email: "owner5@gmail.com",
    date: "2025-10-20",
  },
  {
    name: "Dog Leash and Collar Set",
    category: "Accessories",
    price: 400,
    location: "Chattogram",
    description: "Stylish leash and collar set for medium to large dogs.",
    image:
      "https://i.pinimg.com/736x/61/46/d8/6146d8d0f5369c1110b97a1ed6ea19a1.jpg",
    email: "shop6@gmail.com",
    date: "2025-10-19",
  },
  {
    name: "Kitten Starter Food",
    category: "Food",
    price: 950,
    location: "Khulna",
    description: "Nutritious kitten food for healthy growth.",
    image:
      "https://i.pinimg.com/736x/19/0d/00/190d0057f919b2c55ac600dd4c688b60.jpg",
    email: "shop7@gmail.com",
    date: "2025-10-18",
  },
];

const HomePage = () => {
  return (
    <div className="font-sans text-gray-800 bg-orange-50">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-orange-100 to-orange-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
          {/* Left Text Section */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
              Crafting Pure Joy for{" "}
              <span className="text-orange-600">Your Furry Friends</span>
            </h1>
            <p className="mt-5 text-gray-600 max-w-md mx-auto md:mx-0 text-lg">
              Welcome to{" "}
              <span className="font-semibold text-orange-600">PawMart</span>,
              where we bring happiness and comfort to your beloved pets with
              premium care and heartfelt craftsmanship.
            </p>

            <div className="mt-8 flex justify-center md:justify-start gap-4 flex-wrap">
              <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition">
                Shop Now
              </button>
              <button className="flex items-center gap-2 text-orange-600 font-medium hover:underline">
                <FaPlayCircle className="text-2xl" /> Watch Video
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex justify-center md:justify-end">
            <img
              src={dog1}
              alt="Dog with glasses"
              className="w-[400px] rounded-xl drop-shadow-lg hover:scale-105 transition"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Side Images */}
          <div className="relative flex-shrink-0 w-full md:w-1/2 h-[400px]">
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
              img: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6", // example
            },
            {
              title: "Premium Pet Food",
              desc: "Nutritious food for healthy pets.",
              img: "https://images.unsplash.com/photo-1611599538184-8f1c2a0e7a0e",
            },
            {
              title: "Grooming Essentials",
              desc: "Shampoos, brushes, and spa kits.",
              img: "https://images.unsplash.com/photo-1601758123927-196cb9c7c2b5",
            },
            {
              title: "Health & Wellness",
              desc: "Supplements and care products.",
              img: "https://images.unsplash.com/photo-1611599538184-8f1c2a0e7a0e",
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
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10 text-orange-600">
          Recent Listings
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {listings.map((item, i) => (
            <div
              key={i}
              className="bg-orange-50 p-5 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h3 className="font-semibold text-lg text-gray-900">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm">{item.category}</p>
              <p className="text-orange-600 font-bold mt-1">
                {item.price === 0 ? "Free for Adoption" : `$${item.price}`}
              </p>
              <p className="text-gray-500 text-sm mt-1">{item.location}</p>
              <button className="bg-orange-600 text-white mt-3 px-4 py-2 rounded-lg hover:bg-orange-700 transition">
                See Details
              </button>
            </div>
          ))}
        </div>
      </section>

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
