import axios from "axios";

const BASE_URL = "http://localhost:8080"; // Replace with your backend URL

export const addMedicine = (medicine) =>
  axios.post(`${BASE_URL}/admin/medicines`, medicine);

export const updateMedicine = (id, medicine) =>
  axios.put(`${BASE_URL}/admin/medicines/${id}`, medicine);

export const deleteExpiredMedicines = () =>
  axios.delete(`${BASE_URL}/admin/Medicines/expired/delete`);

export const getAllMedicines = () =>
  axios.get(`${BASE_URL}/operator/all-medicines`);

export const addSale = (sale) =>
  axios.post(`${BASE_URL}/operator/sales/add`, sale);

export const getDailySales = (date) =>
  axios.get(`${BASE_URL}/operator/sales/daily`, {
    params: { date },
  });

export const getMonthlySales = (startDate, endDate) =>
  axios.get(`${BASE_URL}/operator/sales/monthly`, {
    params: { startDate, endDate },
  });
