import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1/",
});

const useAxios = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  // request interceptor to add authorization header for every secure call to the api
  instance.interceptors.request.use(
    (config) => {
      config.headers.authorization = `bearer ${localStorage.getItem(
        "access_token"
      )}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // intercept 401 and 403 status
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (err) => {
      const status = err.response.status;
      // for 401 or 403 logout the user and move the user to the login
      if (status === 401 || status === 403) {
        navigate("/login", { replace: true });
        await logout();
      }
      return Promise.reject(err);
    }
  );

  return instance;
};

export default useAxios;
