import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://3.109.212.112:8080/api",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    }
});

export default axiosClient;
