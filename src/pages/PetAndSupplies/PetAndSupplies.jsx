import React, { useState } from "react";
import { useLoaderData } from "react-router";
import PetAndSuppliesCard from "../../PetAndSuppliesCard/PetAndSuppliesCard";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const PetAndSupplies = () => {
  const data = useLoaderData();
  const [items, setItems] = useState(data);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search?.value;
    setLoading(true);

    fetch(`http://localhost:3000/search?search=${search_text}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="py-20 px-6 bg-white">
      {/* Title + Search Input */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
        <h2 className="text-3xl font-bold text-orange-600">
          All Categories <span className="text-gray-400">({items.length})</span>
        </h2>

        <form onSubmit={handleSearch} className="w-full md:w-auto">
          <div className="flex w-full md:w-auto">
            <input
              type="text"
              name="search"
              placeholder="Search pets or supplies..."
              className="w-full md:w-64 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              type="submit"
              className="bg-orange-600 text-white px-4 py-2 rounded-r-lg hover:bg-orange-700 transition-colors"
            >
              {loading ? <LoadingSpinner /> : "Search"}
            </button>
          </div>
        </form>
      </div>

      {/* Cards Grid */}
      {items.length > 0 ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item) => (
            <PetAndSuppliesCard key={item._id} item={item} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-10">
          No items found.
        </p>
      )}
    </div>
  );
};

export default PetAndSupplies;
