import React from "react";
import Dialog from "@mui/material/Dialog"; // Or use any modal library you prefer
import Button from '@mui/material/Button';

const NetMovementModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-3xl">
        <Dialog.Title className="text-lg font-bold mb-4">
          Net Movement Breakdown
        </Dialog.Title>

        <div className="space-y-4 max-h-[60vh] overflow-y-auto">
          <section>
            <h4 className="font-semibold mb-2">Purchases</h4>
            <ul className="list-disc pl-6">
              <li>Rifle M4 - Qty: 50 - 2025-06-10 - Supplier A</li>
            </ul>
          </section>
          <section>
            <h4 className="font-semibold mb-2">Transfers In</h4>
            <ul className="list-disc pl-6">
              <li>Ammo Crate - Qty: 200 - From Base Bravo - 2025-06-09</li>
            </ul>
          </section>
          <section>
            <h4 className="font-semibold mb-2">Transfers Out</h4>
            <ul className="list-disc pl-6">
              <li>Grenade - Qty: 100 - To Base Charlie - 2025-06-08</li>
            </ul>
          </section>
        </div>

        <div className="mt-6 text-right">
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default NetMovementModal;
