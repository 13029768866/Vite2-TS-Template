import axios from 'axios';
// import baseURL from './env';
import vm from '@/main';

// 注意：在使用代理的时候不要设置baseUrl
const CODE_OK = 0;
const axiosInstance = axios.crete({
    baseURL,
    timeout:1000
});

// 设置请求拦截
axiosInstance.interceptors.request.use(
    config =>{
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

// 设置响应拦截
axiosInstance.interceptors.response.use(
    res => {
        const {data = {},status } = res
        return Promise.reject(data);
    },
    err => {

    }
);
export default  axiosInstance;
