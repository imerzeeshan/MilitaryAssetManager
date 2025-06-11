import React, { useState } from "react";

const Purchases = () => {
  const [formData, setFormData] = useState({
    assetType: "",
    model: "",
    quantity: "",
    unitCost: "",
    purchaseDate: new Date().toISOString().split("T")[0],
    supplier: "",
    base: "",
    poNumber: "",
    notes: "",
  });

  const [records, setRecords] = useState([]);
  const [filters, setFilters] = useState({ date: "", assetType: "", base: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    const totalCost = (+formData.quantity || 0) * (+formData.unitCost || 0);

    const newRecord = {
      id: Date.now(),
      ...formData,
      totalCost: totalCost.toFixed(2),
    };

    setRecords([newRecord, ...records]);

    // Reset form
    setFormData({
      assetType: "",
      model: "",
      quantity: "",
      unitCost: "",
      purchaseDate: new Date().toISOString().split("T")[0],
      supplier: "",
      base: "",
      poNumber: "",
      notes: "",
    });
  };

  const filteredRecords = records.filter(
    (r) =>
      (!filters.date || r.purchaseDate === filters.date) &&
      (!filters.assetType ||
        r.assetType.toLowerCase().includes(filters.assetType.toLowerCase())) &&
      (!filters.base ||
        r.base.toLowerCase().includes(filters.base.toLowerCase()))
  );

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Purchase Management</h1>

      {/* Form */}
      <div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <input
          type="text"
          name="assetType"
          placeholder="Asset Type"
          value={formData.assetType}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="model"
          placeholder="Model / Name"
          value={formData.model}
          onChange={handleChange}
          className="input"
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="input"
        />
        <input
          type="number"
          name="unitCost"
          placeholder="Unit Cost"
          value={formData.unitCost}
          onChange={handleChange}
          className="input"
        />
        <input
          type="date"
          name="purchaseDate"
          value={formData.purchaseDate}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="supplier"
          placeholder="Supplier"
          value={formData.supplier}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="base"
          placeholder="Receiving Base"
          value={formData.base}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="poNumber"
          placeholder="Purchase Order Number"
          value={formData.poNumber}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="notes"
          placeholder="Notes"
          value={formData.notes}
          onChange={handleChange}
          className="input"
        />
        <div className="col-span-full">
          <button
            onClick={handleAdd}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Add Purchase
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Filter by Asset Type"
          className="input w-full md:w-1/3"
          value={filters.assetType}
          onChange={(e) =>
            setFilters({ ...filters, assetType: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Filter by Base"
          className="input w-full md:w-1/3"
          value={filters.base}
          onChange={(e) => setFilters({ ...filters, base: e.target.value })}
        />
        <input
          type="date"
          className="input w-full md:w-1/3"
          value={filters.date}
          onChange={(e) => setFilters({ ...filters, date: e.target.value })}
        />
      </div>

      {/* Table */}
      <div className="overflow-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="px-4 py-2">Asset</th>
              <th className="px-4 py-2">Model</th>
              <th className="px-4 py-2">Qty</th>
              <th className="px-4 py-2">Unit Cost</th>
              <th className="px-4 py-2">Total</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Base</th>
              <th className="px-4 py-2">Supplier</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.length === 0 ? (
              <tr>
                <td colSpan="8" className="px-4 py-4 text-center text-gray-500">
                  No records found
                </td>
              </tr>
            ) : (
              filteredRecords.map((record) => (
                <tr key={record.id} className="border-t">
                  <td className="px-4 py-2">{record.assetType}</td>
                  <td className="px-4 py-2">{record.model}</td>
                  <td className="px-4 py-2">{record.quantity}</td>
                  <td className="px-4 py-2">${record.unitCost}</td>
                  <td className="px-4 py-2">${record.totalCost}</td>
                  <td className="px-4 py-2">{record.purchaseDate}</td>
                  <td className="px-4 py-2">{record.base}</td>
                  <td className="px-4 py-2">{record.supplier}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Purchases;
