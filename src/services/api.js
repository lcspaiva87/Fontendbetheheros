import axios from 'axios';


const api = axios.create({
    baseURL:'https://paiva-behero-api.herokuapp.com'
})

export default api;