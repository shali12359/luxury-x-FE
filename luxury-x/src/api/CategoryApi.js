import axiosClient from "./axiosClient";

export const categoryApi = {
    create: (data) => axiosClient.post(`/category`, data),
    get: (id) => axiosClient.get(`/category/${id}`),
    getAll: () => axiosClient.get(`category`),
    update: (id, data) => axiosClient.put(`/category/${id}`, data),
    delete: (id) => axiosClient.delete(`/category/${id}`)
}