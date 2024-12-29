import axios from "axios";

export const authorizedInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true,
});

authorizedInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

authorizedInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.status === 401) {
      axios
        .post(`${process.env.VITE_SERVER_URL}auth/refresh`, undefined, {
          withCredentials: true,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.access_token);
          return authorizedInstance.request(error.config);
        })
        .catch((err) => Promise.reject(err.config));
    }
  }
);
