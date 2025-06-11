import React, { useState } from "react";

const Expenditures = () => {
  const [form, setForm] = useState({
    equipmentType: "",
    quantity: "",
    date: "",
    base: "",
    reason: "",
    personnel: "",
  });

  const [expenditures, setExpenditures] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenditures([...expenditures, { ...form, id: Date.now().toString() }]);
    setForm({
      equipmentType: "",
      quantity: "",
      date: "",
      base: "",
      reason: "",
      personnel: "",
    });
  };

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Track Expended Assets</h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow p-6 rounded-lg"
      >
        <div>
          <label className="block text-sm font-medium">
            Asset Type / Equipment Type
          </label>
          <input
            type="text"
            name="equipmentType"
            value={form.equipmentType}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            placeholder="e.g. Ammunition"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Quantity Expended</label>
          <input
            type="number"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">
            Date of Expenditure
          </label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Base</label>
          <input
            type="text"
            name="base"
            value={form.base}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Reason</label>
          <input
            type="text"
            name="reason"
            value={form.reason}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            placeholder="e.g. Training, Operation, Damage"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">
            Reporting Personnel
          </label>
          <input
            type="text"
            name="personnel"
            value={form.personnel}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Submit Expenditure
          </button>
        </div>
      </form>

      {/* History Table */}
      <h2 className="text-xl font-semibold mt-10 mb-4">
        Historical Expenditures
      </h2>
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full text-sm text-left border">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-2">Asset Type</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Base</th>
              <th className="px-4 py-2">Reason</th>
              <th className="px-4 py-2">Personnel</th>
            </tr>
          </thead>
          <tbody>
            {expenditures.length > 0 ? (
              expenditures.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="px-4 py-2">{item.equipmentType}</td>
                  <td className="px-4 py-2">{item.quantity}</td>
                  <td className="px-4 py-2">{item.date}</td>
                  <td className="px-4 py-2">{item.base}</td>
                  <td className="px-4 py-2">{item.reason}</td>
                  <td className="px-4 py-2">{item.personnel}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-4 py-4 text-center" colSpan="6">
                  No expenditure records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Expenditures;
