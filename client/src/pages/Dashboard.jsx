import React, { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AppContext } from "../context/AppContext";

const Dashboard = () => {
  const { navigate } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);

  const metrics = [
    { title: "Opening Balance", value: "1,200" },
    { title: "Closing Balance", value: "950" },
    { title: "Net Movement", value: "-250", hasModal: true },
    { title: "Assigned Assets", value: "300" },
    { title: "Expended Assets", value: "100" },
  ];

  useEffect(() => {
    const token = Cookies.get("baseToken");
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="p-6 space-y-8">
      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <input type="date" className="border p-2 rounded-md w-40" />
        <select className="border p-2 rounded-md">
          <option>All Bases</option>
          <option>Base Alpha</option>
          <option>Base Bravo</option>
        </select>
        <select className="border p-2 rounded-md">
          <option>All Types</option>
          <option>Vehicles</option>
          <option>Small Arms</option>
          <option>Ammunition</option>
          <option>Heavy Weaponry</option>
        </select>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-lg p-4 shadow hover:shadow-lg cursor-pointer"
            onClick={() => metric.hasModal && setShowModal(true)}
          >
            <h3 className="text-gray-600 font-semibold">{metric.title}</h3>
            <p className="text-3xl font-bold text-blue-700">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Modal for Net Movement */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative">
            <button
              className="absolute top-2 right-3 text-xl font-bold text-gray-500"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Net Movement Breakdown</h2>
            <div className="space-y-2">
              <div>
                <strong>Purchases:</strong>
                <ul className="list-disc ml-6 text-sm">
                  <li>Rifle M4 – 50 units – 2025-06-10 – Base Alpha</li>
                </ul>
              </div>
              <div>
                <strong>Transfers In:</strong>
                <ul className="list-disc ml-6 text-sm">
                  <li>Ammo Crate – 200 units – 2025-06-08 – Base Bravo</li>
                </ul>
              </div>
              <div>
                <strong>Transfers Out:</strong>
                <ul className="list-disc ml-6 text-sm">
                  <li>Mortars – 30 units – 2025-06-09 – Base Delta</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
