import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import jsPDF from "jspdf";
import "jspdf-autotable";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch user orders
  useEffect(() => {
    fetch(`http://localhost:3000/my-orders?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
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

  // 🔹 Handle PDF Download
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

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save("My_Orders_Report.pdf");
  };

  // 🔹 Loading state
  if (loading) {
    return (
      <div className="text-center py-10 text-gray-600">
        Please wait... Loading...
      </div>
    );
  }

  // 🔹 Empty state
  if (items.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        You don’t have any orders yet.
      </div>
    );
  }

  // 🔹 Orders Table
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">My Orders</h1>
        <button
          onClick={handleDownloadPDF}
          className="px-5 py-2 bg-[#FF004D] text-white rounded-lg shadow-md hover:bg-[#e60045] transition"
        >
          Download Report
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="min-w-full text-sm text-gray-600">
          <thead className="bg-[#FF004D] text-white">
            <tr>
              <th className="px-4 py-3 text-left">Product Name</th>
              <th className="px-4 py-3 text-left">Buyer Name</th>
              <th className="px-4 py-3 text-left">Price</th>
              <th className="px-4 py-3 text-left">Quantity</th>
              <th className="px-4 py-3 text-left">Address</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Phone</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr
                key={item._id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3">{item.productName}</td>
                <td className="px-4 py-3">{item.buyerName}</td>
                <td className="px-4 py-3">${item.price}</td>
                <td className="px-4 py-3">{item.quantity}</td>
                <td className="px-4 py-3">{item.address}</td>
                <td className="px-4 py-3">
                  {new Date(item.date).toLocaleDateString()}
                </td>
                <td className="px-4 py-3">{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
