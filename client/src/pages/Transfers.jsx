import React, { useState } from "react";

const Transfers = () => {
  const [form, setForm] = useState({
    assetType: "",
    assetIdOrQty: "",
    sourceBase: "Base Alpha", // Assume this comes from user context
    destinationBase: "",
    transferDate: new Date().toISOString().split("T")[0],
    reason: "",
    approvingAuthority: "",
    notes: "",
  });

  const [history, setHistory] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      id: `T-${Math.floor(Math.random() * 10000)}`,
      ...form,
      status: "Pending",
      initiatedBy: "Current User",
      date: form.transferDate,
    };
    setHistory([newEntry, ...history]);
    setForm({
      assetType: "",
      assetIdOrQty: "",
      sourceBase: "Base Alpha",
      destinationBase: "",
      transferDate: new Date().toISOString().split("T")[0],
      reason: "",
      approvingAuthority: "",
      notes: "",
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Transfer Assets</h1>

      {/* Transfer Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow"
      >
        <div>
          <label className="block text-sm font-semibold mb-1">
            Asset Type / Equipment
          </label>
          <input
            type="text"
            name="assetType"
            value={form.assetType}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">
            Asset ID(s) or Quantity
          </label>
          <input
            type="text"
            name="assetIdOrQty"
            value={form.assetIdOrQty}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">
            Source Base
          </label>
          <input
            type="text"
            name="sourceBase"
            value={form.sourceBase}
            disabled
            className="w-full border border-gray-300 p-2 rounded bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">
            Destination Base
          </label>
          <input
            type="text"
            name="destinationBase"
            value={form.destinationBase}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">
            Transfer Date
          </label>
          <input
            type="date"
            name="transferDate"
            value={form.transferDate}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">
            Reason for Transfer
          </label>
          <input
            type="text"
            name="reason"
            value={form.reason}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">
            Approving Authority (optional)
          </label>
          <input
            type="text"
            name="approvingAuthority"
            value={form.approvingAuthority}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-1">
            Notes / Remarks
          </label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          ></textarea>
        </div>

        <div className="md:col-span-2 text-right">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit Transfer
          </button>
        </div>
      </form>

      {/* Transfer History */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Transfer History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded-lg">
            <thead className="bg-gray-100 text-sm text-left">
              <tr>
                <th className="px-4 py-2 font-medium">Transfer ID</th>
                <th className="px-4 py-2 font-medium">Asset</th>
                <th className="px-4 py-2 font-medium">Qty/IDs</th>
                <th className="px-4 py-2 font-medium">Source</th>
                <th className="px-4 py-2 font-medium">Destination</th>
                <th className="px-4 py-2 font-medium">Status</th>
                <th className="px-4 py-2 font-medium">Date</th>
                <th className="px-4 py-2 font-medium">Initiated By</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {history.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center py-4 text-gray-500">
                    No transfers recorded yet.
                  </td>
                </tr>
              ) : (
                history.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="px-4 py-2">{item.id}</td>
                    <td className="px-4 py-2">{item.assetType}</td>
                    <td className="px-4 py-2">{item.assetIdOrQty}</td>
                    <td className="px-4 py-2">{item.sourceBase}</td>
                    <td className="px-4 py-2">{item.destinationBase}</td>
                    <td className="px-4 py-2 text-green-600">{item.status}</td>
                    <td className="px-4 py-2">{item.date}</td>
                    <td className="px-4 py-2">{item.initiatedBy}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transfers;
