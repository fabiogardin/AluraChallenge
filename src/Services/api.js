import axios from 'axios';

const api = axios.create({
    baseURL: "http://192.168.1.242:1337/",
});

export default api;