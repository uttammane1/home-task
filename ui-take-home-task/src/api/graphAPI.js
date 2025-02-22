import axios from "axios";

const API_BASE = "https://mock-api.com";  // Replace with actual API base URL

export const fetchGraphData = async () => {
  const response = await axios.get(`${API_BASE}/graph`);
  return response.data;
};

export const fetchDependencies = async (flow) => {
  const response = await axios.get(`${API_BASE}/dependencies?flow=${flow}`);
  return response.data;
};

export const fetchConfiguration = async (flow) => {
  const response = await axios.get(`${API_BASE}/configuration?flow=${flow}`);
  return response.data;
};

export const saveConfiguration = async (config) => {
  await axios.post(`${API_BASE}/configuration`, config);
};
