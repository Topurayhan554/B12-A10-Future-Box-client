import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { FaMapMarkerAlt, FaEnvelope, FaTag } from "react-icons/fa";
import { toast } from "react-toastify";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const SeeDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:3000/see-details/${id}`, {
      headers: {
        authorization: `Bearer ${user?.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setItem(data.result);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user, id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderInfo = {
      buyerName: user?.displayName,
      buyerEmail: user?.email,
      productId: item._id,
      productName: item.name,
      category: item.category,
      quantity: item.category === "Pets" ? 1 : 1,
      price: item.Price,
      address: e.target.address?.value,
      date: e.target.date?.value,
      phone: e.target.phone?.value,
      notes: e.target.notes?.value,
      orderDate: new Date().toISOString(),
    };

    console.log({ orderInfo });

    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user?.accessToken}`,
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("✅ Order placed successfully!");
          document.getElementById("my_modal_5").close();
        } else {
          toast.error("❌ Failed to place order. Try again!");
        }
      })
      .catch(() => toast.error("❌ Something went wrong!"));
  };

  if (loading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto my-10 bg-white rounded-3xl overflow-hidden shadow-2xl">
      {/* Image Section */}
      <div className="relative group">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        <button
          onClick={() => navigate(-1)}
          className="absolute top-5 left-5 bg-white/90 text-gray-800 px-4 py-1.5 rounded-full shadow-lg hover:bg-white transition-all duration-300"
        >
          ← Back
        </button>

        <div className="absolute bottom-6 left-8 text-white">
          <h1 className="text-4xl font-bold drop-shadow-lg mb-2">
            {item.name}
          </h1>
          <p className="text-lg text-gray-200 flex items-center gap-2">
            <FaTag className="text-[#FF004D]" /> {item.category}
          </p>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-8 md:p-10">
        <div className=" mb-6">
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            {item.description}
          </p>

          <div className="space-y-3">
            <div className="flex justify-between">
              <p className="flex items-center gap-3 text-gray-700">
                <FaMapMarkerAlt className="text-[#FF004D]" />
                <span>
                  <strong>Location:</strong> {item.location}
                </span>
              </p>
              <p className="flex items-center gap-3 text-gray-700">
                <FaEnvelope className="text-[#FF004D]" />
                <span>
                  <strong>Email:</strong> {item.email}
                </span>
              </p>
            </div>
            <p className="flex items-center gap-3 text-gray-700">
              💰{" "}
              <span>
                <strong>Price:</strong>{" "}
                <span className="text-green-600 font-bold">
                  {item.Price > 0 ? `$${item.Price}` : "Free Adoption"}
                </span>
              </span>
            </p>
          </div>
        </div>

        {/* Order Button */}
        <div className="flex justify-center">
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="px-8 py-3 bg-orange-600 text-white text-lg font-semibold rounded-xl hover:bg-amber-400 shadow-md hover:shadow-lg transition-all duration-300"
          >
            🛒 Order Now
          </button>
        </div>
      </div>

      {/* Modal with Form */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-white rounded-2xl">
          <h3 className="font-bold text-xl mb-4 text-center text-[#FF004D]">
            Confirm Your Order
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Buyer Info */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Buyer Name
                </label>
                <input
                  type="text"
                  value={user?.displayName || ""}
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={user?.email || ""}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Product ID
                </label>
                <input
                  type="text"
                  value={item._id}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  value={item.name}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            {/* Quantity and Price */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Quantity
                </label>
                <input
                  type="number"
                  value={item.category === "Pets" ? 1 : 1}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Price
                </label>
                <input
                  type="text"
                  value={item.Price > 0 ? `$${item.Price}` : "Free Adoption"}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            {/* Address, Date, Phone */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Address
              </label>
              <input
                type="text"
                name="address"
                required
                placeholder="Enter your full address"
                className="input input-bordered w-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-semibold mb-1">Date</label>
                <input
                  type="date"
                  name="date"
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="Enter your phone number"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Additional Notes
              </label>
              <textarea
                name="notes"
                placeholder="Write any special instructions..."
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="modal-action">
              <button
                type="button"
                className="btn"
                onClick={() => document.getElementById("my_modal_5").close()}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn bg-amber-600 text-white hover:bg-[#e60044]"
              >
                Confirm Order
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default SeeDetails;
