import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://13.200.242.14:8080/api",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    }
});

export default axiosClient;
