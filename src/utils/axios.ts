import axios from "axios";
import { Obj } from "../global/interface";
import { getToken } from "./localStorage";

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT_API,
});
httpClient.interceptors.request.use(function (config) {
  (config.headers as Obj).Authorization = getToken;
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default httpClient;
