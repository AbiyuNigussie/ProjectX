import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

const apiService = {
  post: (endpoint, data) => {
    return api.post(endpoint, data);
  },
};

export default apiService;
