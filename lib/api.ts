import axios from "axios";

const isServer = typeof window === "undefined";
const backendUrl = process.env.BACKEND_URL || "http://localhost:9091";

const api = axios.create({
  baseURL: isServer ? `${backendUrl}/api` : "/api",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && typeof window !== "undefined") {
      document.cookie = "access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      if (window.location.pathname !== "/admin/login") {
        window.location.href = "/admin/login";
      }
    }
    return Promise.reject(error);
  }
);

export default api;
