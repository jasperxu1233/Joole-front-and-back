import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/joole'
});

instance.defaults.headers.common['Authorization'] = new Date().getTime() >= new Date(localStorage.getItem('expirationDate'))?``:`Bearer ${localStorage.getItem("token")}`;
// instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;


export default instance;