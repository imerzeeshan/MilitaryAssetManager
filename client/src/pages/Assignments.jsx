import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useEffect } from "react";

const Assignments = () => {
  const { navigate, token } = useContext(AppContext);
  const [assignmentForm, setAssignmentForm] = useState({
    assetType: "",
    assetId: "",
    personnel: "",
    assignmentDate: new Date().toISOString().split("T")[0],
    base: "",
    purpose: "",
    returnDate: "",
  });

  const [expenditureForm, setExpenditureForm] = useState({
    assetType: "",
    quantity: "",
    expenditureDate: new Date().toISOString().split("T")[0],
    base: "",
    reason: "",
    personnel: "",
  });

  const [assignedAssets, setAssignedAssets] = useState([]);
  const [expenditures, setExpenditures] = useState([]);

  const handleAssignChange = (e) => {
    setAssignmentForm({ ...assignmentForm, [e.target.name]: e.target.value });
  };

  const handleExpendChange = (e) => {
    setExpenditureForm({ ...expenditureForm, [e.target.name]: e.target.value });
  };

  const submitAssignment = (e) => {
    e.preventDefault();
    const newAssignment = {
      id: `A-${Math.floor(Math.random() * 10000)}`,
      ...assignmentForm,
    };
    setAssignedAssets([newAssignment, ...assignedAssets]);
    setAssignmentForm({
      assetType: "",
      assetId: "",
      personnel: "",
      assignmentDate: new Date().toISOString().split("T")[0],
      base: "",
      purpose: "",
      returnDate: "",
    });
  };

  const submitExpenditure = (e) => {
    e.preventDefault();
    const newExpenditure = {
      id: `E-${Math.floor(Math.random() * 10000)}`,
      ...expenditureForm,
    };
    setExpenditures([newExpenditure, ...expenditures]);
    setExpenditureForm({
      assetType: "",
      quantity: "",
      expenditureDate: new Date().toISOString().split("T")[0],
      base: "",
      reason: "",
      personnel: "",
    });
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="p-6 space-y-10">
      {/* Assign Asset Form */}
      <div>
        <h2 className="text-xl font-bold mb-4">Assign Asset</h2>
        <form
          onSubmit={submitAssignment}
          className="grid md:grid-cols-2 gap-4 bg-white p-6 rounded shadow"
        >
          <input
            name="assetType"
            placeholder="Asset Type"
            value={assignmentForm.assetType}
            onChange={handleAssignChange}
            className="p-2 border rounded"
            required
          />
          <input
            name="assetId"
            placeholder="Asset ID (e.g., Serial #)"
            value={assignmentForm.assetId}
            onChange={handleAssignChange}
            className="p-2 border rounded"
            required
          />
          <input
            name="personnel"
            placeholder="Personnel ID/Name"
            value={assignmentForm.personnel}
            onChange={handleAssignChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="date"
            name="assignmentDate"
            value={assignmentForm.assignmentDate}
            onChange={handleAssignChange}
            className="p-2 border rounded"
          />
          <input
            name="base"
            placeholder="Base of Assignment"
            value={assignmentForm.base}
            onChange={handleAssignChange}
            className="p-2 border rounded"
            required
          />
          <input
            name="purpose"
            placeholder="Purpose of Assignment"
            value={assignmentForm.purpose}
            onChange={handleAssignChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="date"
            name="returnDate"
            placeholder="Expected Return Date"
            value={assignmentForm.returnDate}
            onChange={handleAssignChange}
            className="p-2 border rounded"
          />
          <div className="md:col-span-2 text-right">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Assign
            </button>
          </div>
        </form>
      </div>

      {/* Assigned Assets Table */}
      <div>
        <h2 className="text-xl font-bold mb-4">Currently Assigned Assets</h2>
        <div className="overflow-x-auto bg-white rounded shadow">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 font-semibold">
              <tr>
                <th className="px-4 py-2">Asset Type</th>
                <th className="px-4 py-2">Asset ID</th>
                <th className="px-4 py-2">Personnel</th>
                <th className="px-4 py-2">Base</th>
                <th className="px-4 py-2">Purpose</th>
                <th className="px-4 py-2">Assigned Date</th>
                <th className="px-4 py-2">Return Date</th>
              </tr>
            </thead>
            <tbody>
              {assignedAssets.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-4 text-gray-500">
                    No assets assigned yet.
                  </td>
                </tr>
              ) : (
                assignedAssets.map((a) => (
                  <tr key={a.id} className="border-t">
                    <td className="px-4 py-2">{a.assetType}</td>
                    <td className="px-4 py-2">{a.assetId}</td>
                    <td className="px-4 py-2">{a.personnel}</td>
                    <td className="px-4 py-2">{a.base}</td>
                    <td className="px-4 py-2">{a.purpose}</td>
                    <td className="px-4 py-2">{a.assignmentDate}</td>
                    <td className="px-4 py-2">{a.returnDate || "-"}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Expenditure Form */}
      <div>
        <h2 className="text-xl font-bold mb-4">Report Expenditure</h2>
        <form
          onSubmit={submitExpenditure}
          className="grid md:grid-cols-2 gap-4 bg-white p-6 rounded shadow"
        >
          <input
            name="assetType"
            placeholder="Asset Type"
            value={expenditureForm.assetType}
            onChange={handleExpendChange}
            className="p-2 border rounded"
            required
          />
          <input
            name="quantity"
            placeholder="Quantity Expended"
            type="number"
            value={expenditureForm.quantity}
            onChange={handleExpendChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="date"
            name="expenditureDate"
            value={expenditureForm.expenditureDate}
            onChange={handleExpendChange}
            className="p-2 border rounded"
          />
          <input
            name="base"
            placeholder="Base"
            value={expenditureForm.base}
            onChange={handleExpendChange}
            className="p-2 border rounded"
            required
          />
          <input
            name="reason"
            placeholder="Reason (e.g., Training)"
            value={expenditureForm.reason}
            onChange={handleExpendChange}
            className="p-2 border rounded"
            required
          />
          <input
            name="personnel"
            placeholder="Reporting Personnel"
            value={expenditureForm.personnel}
            onChange={handleExpendChange}
            className="p-2 border rounded"
            required
          />
          <div className="md:col-span-2 text-right">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Report
            </button>
          </div>
        </form>
      </div>

      {/* Expenditure History Table */}
      <div>
        <h2 className="text-xl font-bold mb-4">Expenditure History</h2>
        <div className="overflow-x-auto bg-white rounded shadow">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 font-semibold">
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
              {expenditures.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-gray-500">
                    No expenditures reported yet.
                  </td>
                </tr>
              ) : (
                expenditures.map((e) => (
                  <tr key={e.id} className="border-t">
                    <td className="px-4 py-2">{e.assetType}</td>
                    <td className="px-4 py-2">{e.quantity}</td>
                    <td className="px-4 py-2">{e.expenditureDate}</td>
                    <td className="px-4 py-2">{e.base}</td>
                    <td className="px-4 py-2">{e.reason}</td>
                    <td className="px-4 py-2">{e.personnel}</td>
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

export default Assignments;
