import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.email) return;

    fetch(
      `https://b12-a10-future-box-server.vercel.app/my-listing?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b12-a10-future-box-server.vercel.app/listing/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then(() => {
            setItems((prev) => prev.filter((item) => item._id !== id));
            Swal.fire({
              title: "Deleted!",
              text: "Your listing has been deleted.",
              icon: "success",
              timer: 1500,
              showConfirmButton: false,
            });
          })
          .catch((error) => console.error(error));
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
          My Listings
        </h2>
        <p className="text-gray-500">
          Manage and edit your posted listings below.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mt-4 rounded-full"></div>
      </div>

      {items.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          You haven’t added any listings yet.
        </p>
      ) : (
        <div className="overflow-x-auto bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl border border-gray-100">
          <table className="min-w-full text-left text-gray-800">
            <thead className="bg-gradient-to-r from-orange-400 to-red-400 text-white">
              <tr>
                <th className="p-4 text-sm font-semibold uppercase tracking-wider">
                  Name
                </th>
                <th className="p-4 text-sm font-semibold uppercase tracking-wider">
                  Category
                </th>
                <th className="p-4 text-sm font-semibold uppercase tracking-wider">
                  Price
                </th>
                <th className="p-4 text-sm font-semibold uppercase tracking-wider">
                  Location
                </th>
                <th className="p-4 text-sm font-semibold uppercase tracking-wider">
                  Date
                </th>
                <th className="p-4 text-center text-sm font-semibold uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {items.map((item, idx) => (
                <tr
                  key={item._id}
                  className={`transition duration-300 ${
                    idx % 2 === 0 ? "bg-white" : "bg-orange-50"
                  } hover:bg-orange-100/70`}
                >
                  <td className="p-4 font-semibold text-gray-900">
                    {item.name}
                  </td>
                  <td className="p-4 text-gray-700">{item.category}</td>
                  <td className="p-4 text-gray-800 font-medium">
                    ${item.Price || ""}
                  </td>
                  <td className="p-4 text-gray-700">{item.location || ""}</td>
                  <td className="p-4 text-gray-600">
                    {new Date(item.date || item.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center gap-3">
                      <Link to={`/edit-listing/${item._id}`}>
                        <button className="px-4 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform duration-200">
                          ✏️ Edit
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="px-4 py-1.5 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform duration-200"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyList;
