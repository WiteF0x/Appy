import axios from 'axios';

const API_URL = 'https://test-task-server.herokuapp.com/api/';

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 20000,
});

export default axiosInstance;
