import React from "react";
import { Link } from "react-router";

const PetAndSuppliesCard = ({ item }) => {
  return (
    <div className="p-2">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
        {/* Image */}
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-64 object-cover"
        />

        {/* Details */}
        <div className="p-4">
          <h3 className="text-gray-900 font-bold text-lg">{item.name}</h3>
          <div className="flex items-center justify-between mt-2">
            <p className="text-gray-600 ">{item.category}</p>
            <p className="text-gray-500">{item.location}</p>
          </div>
          <p className="text-orange-600 font-bold mt-2 text-lg">
            ${item.Price}
          </p>

          {/* Button */}
          <Link to={`/see-details/${item._id}`}>
            <button className="mt-4 w-full bg-orange-600 text-white font-semibold py-2 rounded-xl hover:bg-orange-700 hover:scale-105 transition-all duration-300">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PetAndSuppliesCard;
