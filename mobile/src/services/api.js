import axios from "axios";

const api = axios.create({
  baseURL: 'http://192.168.1.10:1111'
});

export default api;
