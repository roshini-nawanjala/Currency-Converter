import axios from "axios";

const API_URL = "http://localhost:8082/api/currency";

export const convertCurrency = async (currencyData) => {
  const response = await axios.post(`${API_URL}/convert`, currencyData);
  return response.data;
};

export const getHistory = async () => {
  const response = await axios.get(`${API_URL}/history`);
  return response.data;
};

export const deleteHistory = async (id) => {
  const response = await axios.delete(`${API_URL}/history/${id}`);
  return response.data;
};

export const deleteAllHistory = async () => {
  const response = await axios.delete(`${API_URL}/history`);
  return response.data;
};

export const getLiveRate = async (from, to) => {
  const response = await axios.get(
    `http://localhost:8082/api/currency/rate?from=${from}&to=${to}`,
  );

  return response.data;
};
