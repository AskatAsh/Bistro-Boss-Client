import axios from "axios";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_SERVER,
})

const useAxiosSecure = () => {

    // axios request interceptor
    axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem('access-token');
        config.headers.authorization = token;
        return config;
    }, (error) => {
        return Promise.reject(error);
    })

    return axiosSecure;
};

export default useAxiosSecure;