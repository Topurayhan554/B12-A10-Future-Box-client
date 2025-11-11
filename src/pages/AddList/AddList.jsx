import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
const AddListing = () => {
  const { user } = useContext(AuthContext);

  const [price, setPrice] = useState("");

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    if (selected === "Pets") {
      setPrice(0);
    } else {
      setPrice("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name?.value,
      category: e.target.category?.value,
      email: user.email,
      description: e.target.description?.value,
      Price: e.target.price?.value ? Number(e.target.price.value) : 0,

      location: e.target.location?.value,
      image: e.target.image?.value,
      date: e.target.date?.value,
    };

    fetch("http://localhost:3000/listing", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully added!");
        console.log(data);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-3xl mx-auto my-5 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-4xl font-extrabold text-center text-orange-600 mb-6">
        🐾 Add New Listing
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product/Pet Name */}
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-[#FF004D] outline-none"
            required
          />
        </div>

        {/* Category Dropdown */}
        <div>
          <label className="block font-medium mb-1">Category</label>
          <select
            defaultValue={""}
            name="category"
            onChange={handleCategoryChange}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-[#FF004D] outline-none"
            required
          >
            <option value="">Select a Category</option>
            <option value="Pets">🐶 Pets (Adoption)</option>
            <option value="Pet Food">🍖 Pet Food</option>
            <option value="Accessories">🧸 Accessories</option>
            <option value="Care Products">💊 Pet Care Products</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium mb-1">Price</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
            disabled={price === 0}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-[#FF004D] outline-none"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-[#FF004D] outline-none"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            placeholder="Write something..."
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-[#FF004D] outline-none"
            rows="3"
            required
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            placeholder="https://example.com/image.jpg"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-[#FF004D] outline-none"
            required
          />
        </div>

        {/* Date */}
        <div>
          <label className="block font-medium mb-1">Date</label>
          <input
            type="date"
            name="date"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-[#FF004D] outline-none"
            required
          />
        </div>

        {/* Email (Readonly) */}
        <div>
          <label className="block font-medium mb-1">Your Email</label>
          <input
            type="email"
            value={user.email || ""}
            readOnly
            className="w-full border rounded-lg p-2 bg-gray-100"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-amber-600 hover:scale-105 hover:bg-amber-500 text-white font-semibold px-6 py-2 rounded-lg transition duration-300"
          >
            Add to Listing
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddListing;
