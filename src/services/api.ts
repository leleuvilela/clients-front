import axios from 'axios';

const url =
  process.env.NODE_ENV === 'production'
    ? 'https://clients-qualicorp.herokuapp.com'
    : 'http://localhost:3333'

const api = axios.create({
  baseURL: url,
})

export default api;
