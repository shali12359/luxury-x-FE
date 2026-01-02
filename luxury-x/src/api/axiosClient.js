import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://3.110.44.15:8080/api",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    }
});

export default axiosClient;
