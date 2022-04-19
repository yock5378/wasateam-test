import axios from "axios";

const service = axios.create({
    headers: {"Content-Type": "application/json"},
    timeout: 35000,
});

service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        throw error.response;
    }
);

service.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (!error.response) {
            console.log("Server error, please retry.");
            throw error;
        } else {
            throw error.response;
        }
    }
);

export default service;