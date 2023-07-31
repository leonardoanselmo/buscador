import axios from 'axios';

// https://viacep.com.br/ws/55296512/json

const api = axios.create({
  baseURL: "https://viacep.com.br/ws/"
});

export default api;