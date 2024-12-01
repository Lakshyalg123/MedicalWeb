import React, { useState } from "react";
import { addMedicine, updateMedicine, deleteExpiredMedicines } from "../api/apiService";

function AdminPage() {
  const [medicine, setMedicine] = useState({
    name: "",
    price: 0.0,
    gst: 0.0,
    discount: 0.0,
    expiryDate: "",
    pricePerQty: 0.0,
  });

  const handleInputChange = (e) => {
    setMedicine({ ...medicine, [e.target.name]: e.target.value });
  };

  const handleAddMedicine = async () => {
    try {
      await addMedicine(medicine);
      alert("Medicine added successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to add medicine!");
    }
  };

  const handleUpdateMedicine = async () => {
    const { id, ...updatedData } = medicine;
    try {
      await updateMedicine(id, updatedData);
      alert("Medicine updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update medicine!");
    }
  };

  const handleDeleteExpired = async () => {
    try {
      await deleteExpiredMedicines();
      alert("Expired medicines deleted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to delete expired medicines!");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin: Manage Medicines</h2>
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Medicine Name"
          value={medicine.name}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={medicine.price}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="number"
          name="gst"
          placeholder="GST (%)"
          value={medicine.gst}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="number"
          name="discount"
          placeholder="Discount (%)"
          value={medicine.discount}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="date"
          name="expiryDate"
          value={medicine.expiryDate}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="number"
          name="pricePerQty"
          placeholder="Price Per Quantity"
          value={medicine.pricePerQty}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
        />
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handleAddMedicine}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Medicine
        </button>
        <button
          onClick={handleUpdateMedicine}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Update Medicine
        </button>
        <button
          onClick={handleDeleteExpired}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete Expired Medicines
        </button>
      </div>
    </div>
  );
}

export default AdminPage;
