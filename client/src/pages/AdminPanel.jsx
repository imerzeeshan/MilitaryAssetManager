import React from "react";

const AdminPanel = () => {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Admin Panel</h1>

      {/* User Management */}
      <section className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">User Management</h2>

        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
          <input
            type="text"
            placeholder="Search by name or role"
            className="w-full md:w-1/3 p-2 border border-gray-300 rounded-md"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Search
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-gray-200 text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-2 text-left">User</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Role</th>
                <th className="px-4 py-2 text-left">Base</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Jane Smith</td>
                <td className="px-4 py-2">jane@military.gov</td>
                <td className="px-4 py-2">Logistics Officer</td>
                <td className="px-4 py-2">Base Bravo</td>
                <td className="px-4 py-2 space-x-2">
                  <button className="text-blue-600 hover:underline">
                    Edit
                  </button>
                  <button className="text-red-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
              {/* More rows from data */}
            </tbody>
          </table>
        </div>
      </section>

      {/* Assign Roles */}
      <section className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Assign Roles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="email"
            placeholder="User Email"
            className="p-2 border border-gray-300 rounded-md"
          />
          <select className="p-2 border border-gray-300 rounded-md">
            <option>Select Role</option>
            <option value="admin">Admin</option>
            <option value="commander">Base Commander</option>
            <option value="logistics">Logistics Officer</option>
          </select>
        </div>
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Assign Role
        </button>
      </section>

      {/* Audit Logs */}
      <section className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Audit Logs</h2>

        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-gray-200 text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-2 text-left">Timestamp</th>
                <th className="px-4 py-2 text-left">User</th>
                <th className="px-4 py-2 text-left">Action</th>
                <th className="px-4 py-2 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">2025-06-11 10:25</td>
                <td className="px-4 py-2">admin@military.gov</td>
                <td className="px-4 py-2">Assigned Role</td>
                <td className="px-4 py-2">Assigned 'Commander' to John Doe</td>
              </tr>
              {/* More logs from data */}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AdminPanel;
