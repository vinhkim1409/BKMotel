import axios from "axios";


const axiosClient = axios.create({
  baseURL: '/api',
  //https://bkmotel-api.onrender.com
});



export default axiosClient;
