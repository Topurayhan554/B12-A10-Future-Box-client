import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";

const EditList = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/listing/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data.result);
        setLoading(false);
        console.log("edit data", data);
      });
  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name?.value,
      category: e.target.category?.value,
      Price: e.target.price?.value,
      location: e.target.location?.value,
      description: e.target.description?.value,
      image: e.target.image?.value,
      date: e.target.date?.value,
      email: items.email,
    };

    fetch(`http://localhost:3000/listing/${items._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully updated!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">Update items</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="label font-medium">Name</label>
            <input
              type="text"
              defaultValue={items.name}
              name="name"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter name"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="label font-medium">Category</label>
            <select
              defaultValue={items.category || ""}
              name="category"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="Pets">🐶 Pets (Adoption)</option>
              <option value="Food">🍖 Pet Food</option>
              <option value="Accessories">🧸 Accessories</option>
              <option value="Health & Wellness">💊 Pet Care Products</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="label font-medium">Price</label>
            <input
              type="number"
              defaultValue={items.Price || ""}
              name="price"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter price"
            />
          </div>

          {/* Location */}
          <div>
            <label className="label font-medium">Location</label>
            <input
              type="text"
              defaultValue={items.location || ""}
              name="location"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter location"
            />
          </div>

          {/* Description */}
          <div>
            <label className="label font-medium">Description</label>
            <textarea
              defaultValue={items.description || ""}
              name="description"
              required
              rows="3"
              className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* Image URL */}
          <div>
            <label className="label font-medium">Image URL</label>
            <input
              type="url"
              name="image"
              defaultValue={items.image || ""}
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Date */}
          <div>
            <label className="label font-medium">Date</label>
            <input
              type="date"
              name="date"
              defaultValue={items.date || ""}
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
          >
            Update items
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditList;
