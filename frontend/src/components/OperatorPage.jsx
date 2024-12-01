import React, { useState, useEffect } from "react";
import { getAllMedicines, addSale, getDailySales, getMonthlySales } from "../api/apiService";

function OperatorPage() {
  const [medicines, setMedicines] = useState([]);
  const [sale, setSale] = useState({
    name: "",
    medicine_Id: "",
    quantity: 0,
    saleDate: "",
  });

  const [salesDate, setSalesDate] = useState("");
  const [monthlyRange, setMonthlyRange] = useState({
    startDate: "",
    endDate: "",
  });
  const [dailySales, setDailySales] = useState([]);
  const [monthlySales, setMonthlySales] = useState([]);

  useEffect(() => {
    fetchMedicines();
  }, []);

  const fetchMedicines = async () => {
    try {
      const response = await getAllMedicines();
      setMedicines(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch medicines!");
    }
  };

  const handleSaleInputChange = (e) => {
    setSale({ ...sale, [e.target.name]: e.target.value });
  };

  const handleAddSale = async () => {
    try {
      await addSale(sale);
      alert("Sale added successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to add sale!");
    }
  };

  const fetchDailySales = async () => {
    try {
      const response = await getDailySales(salesDate);
      setDailySales(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch daily sales!");
    }
  };

  const fetchMonthlySales = async () => {
    try {
      const response = await getMonthlySales(monthlyRange.startDate, monthlyRange.endDate);
      setMonthlySales(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch monthly sales!");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Operator: Manage Sales</h2>

      {/* Medicine List */}
      <h3 className="text-xl font-semibold mb-2">Available Medicines</h3>
      <ul className="list-disc ml-6">
        {medicines.map((med) => (
          <li key={med.id}>{med.name}</li>
        ))}
      </ul>

      {/* Add Sale */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Add Sale</h3>
        <input
          type="text"
          name="name"
          placeholder="Medicine Name"
          value={sale.name}
          onChange={handleSaleInputChange}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          name="medicine_Id"
          placeholder="Medicine ID"
          value={sale.medicine_Id}
          onChange={handleSaleInputChange}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={sale.quantity}
          onChange={handleSaleInputChange}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="date"
          name="saleDate"
          value={sale.saleDate}
          onChange={handleSaleInputChange}
          className="border p-2 mb-2 w-full"
        />
        <button
          onClick={handleAddSale}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Sale
        </button>
      </div>

      {/* Daily Sales */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Fetch Daily Sales</h3>
        <input
          type="date"
          value={salesDate}
          onChange={(e) => setSalesDate(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <button
          onClick={fetchDailySales}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Get Daily Sales
        </button>
      </div>

      {/* Monthly Sales */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Fetch Monthly Sales</h3>
        <input
          type="date"
          name="startDate"
          placeholder="Start Date"
          value={monthlyRange.startDate}
          onChange={(e) => setMonthlyRange({ ...monthlyRange, startDate: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="date"
          name="endDate"
          placeholder="End Date"
          value={monthlyRange.endDate}
          onChange={(e) => setMonthlyRange({ ...monthlyRange, endDate: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <button
          onClick={fetchMonthlySales}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Get Monthly Sales
        </button>
      </div>
    </div>
  );
}

export default OperatorPage
