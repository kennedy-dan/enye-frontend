import axios from 'axios';
import { api } from '../url';
import store from '../store'

const axiosInstance = axios.create({
    baseURL : api,
    
})

export default axiosInstance