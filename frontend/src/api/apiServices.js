import axios from "axios";

const API_BASE_URL = "http://localhost:3030";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

const apiService = {
  post: (endpoint, data) => {
    return api.post(endpoint, data);
  },
  get: (endpoint) => {
    return api.get(endpoint);
  },
};

export default apiService;
