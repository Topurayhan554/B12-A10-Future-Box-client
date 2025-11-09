import React from "react";
import { useLoaderData } from "react-router";
import PetAndSuppliesCard from "../../PetAndSuppliesCard/PetAndSuppliesCard";

const PetAndSupplies = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <h1 className="text-3xl text-gray-800 text-center "></h1>

      {
        <div className="py-20 px-6 bg-white">
          <h2 className="text-3xl font-bold mb-10 text-center text-orange-600">
            All Categories{" "}
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
  );
};

export default PetAndSupplies;
