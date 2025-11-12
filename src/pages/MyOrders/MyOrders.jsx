import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { FaDownload, FaTrash } from "react-icons/fa";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log(items);

  useEffect(() => {
    if (!user?.email) return;

    fetch(
      `https://b12-a10-future-box-server.vercel.app/my-orders?email=${user.email}`,
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
      .catch((err) => {
        console.error("Error fetching orders:", err);
        setLoading(false);
      });
  }, [user]);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text("My Orders Report", 14, 10);

    const tableColumn = [
      "Product Name",
      "Buyer Name",
      "Price",
      "Quantity",
      "Address",
      "Date",
      "Phone",
    ];

    const tableRows = items.map((item) => [
      item.productName,
      item.buyerName,
      `$${item.price}`,
      item.quantity,
      item.address,
      new Date(item.date).toLocaleDateString(),
      item.phone,
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save("My_Orders_Report.pdf");
  };

  const handleRemove = (id) => {
    fetch(`https://b12-a10-future-box-server.vercel.app/delete-orders/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setItems(items.filter((item) => item._id !== id));
        }
      })
      .catch((err) => console.error("Error deleting order:", err));
  };

  if (loading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
          alt="No Orders"
          className="w-40 mx-auto mb-4 opacity-70"
        />
        <p className="text-xl font-medium">You don’t have any orders yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <title>My orders</title>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#FF004D] to-[#ff6a89] text-white rounded-2xl shadow-lg px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
        <h1 className="text-3xl font-bold tracking-wide drop-shadow-lg">
          🛍️ My Orders
        </h1>
        <button
          onClick={handleDownloadPDF}
          className="flex items-center gap-2 px-6 py-2.5 bg-white text-[#FF004D] rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          <FaDownload className="text-[#FF004D]" /> Download Report
        </button>
      </div>

      {/* Table Card */}
      <div className="bg-white bg-opacity-90 backdrop-blur-md border border-gray-100 shadow-xl rounded-2xl overflow-hidden transition-all">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gradient-to-r from-[#FF004D] to-[#ff6a89] text-white text-left">
            <tr>
              <th className="px-5 py-3">Product</th>
              <th className="px-5 py-3">Buyer</th>
              <th className="px-5 py-3">Price</th>
              <th className="px-5 py-3">Qty</th>
              <th className="px-5 py-3">Address</th>
              <th className="px-5 py-3">Date</th>
              <th className="px-5 py-3">Phone</th>
              <th className="px-5 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr
                key={item._id}
                className={`transition hover:bg-pink-50 ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="px-5 py-3 font-medium text-gray-900">
                  {item.productName}
                </td>
                <td className="px-5 py-3">{item.buyerName}</td>
                <td className="px-5 py-3 font-semibold text-[#FF004D]">
                  ${item.price}
                </td>
                <td className="px-5 py-3 text-center">{item.quantity}</td>
                <td className="px-5 py-3">{item.address}</td>
                <td className="px-5 py-3">
                  {new Date(item.date).toLocaleDateString()}
                </td>
                <td className="px-5 py-3">{item.phone}</td>

                {/* Remove Button */}
                <td className="px-5 py-3 text-center">
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="p-2 rounded-full text-white bg-red-500 hover:bg-red-600 transition-all"
                    title="Remove Order"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-400 text-center mt-6">
        Showing <span className="font-semibold">{items.length}</span> orders
      </p>
    </div>
  );
};

export default MyOrders;
