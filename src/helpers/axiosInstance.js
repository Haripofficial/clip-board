import axios from "axios";
import { BASEURL } from "./constatnts";

const axiosInstance = axios.create({
  baseURL:BASEURL,
  withCredentials:true,
})

const responseHandler = response => {
  return response;
};

const errorHandler = error => {
  console.log(error.response.status)
  return Promise.reject(error);
};

axiosInstance.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default axiosInstance;