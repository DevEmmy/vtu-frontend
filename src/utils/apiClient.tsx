import axios from "axios";

// Create an Axios instance"https://megapay-backend.onrender.com",
export const axiosConfig = axios.create({
  baseURL: "http://192.168.176.168:4030",
});

// Add a request interceptor to dynamically set the Authorization header
axiosConfig.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Get the latest token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);
