import axiosClient from "./axiosClient";

export const ProductApi = {
    create: (data) => axiosClient.post(`/product`, data),
    get: (id) => axiosClient.get(`/product/${id}`),
    getAll: () => axiosClient.get(`product`),
    getByCategoryName: (categoryName) => axiosClient.get(`/product/find`, {
        params: {
            categoryName: categoryName,
        }
    }),
    filterByPriceOrArrival: (minPrice, maxPrice, fromDate, toDate, categoryName) =>  {
        const params = {};

        if (minPrice !== undefined) params.minPrice = minPrice;
        if (maxPrice !== undefined) params.maxPrice = maxPrice;
        if (fromDate !== undefined) params.fromDate = fromDate;
        if (toDate !== undefined) params.toDate = toDate;
        if (categoryName !== undefined) params.categoryName = categoryName;

        return axiosClient.get(`/product/filter`, { params });
    },
    update: (id, data) => axiosClient.put(`/product/${id}`, data),
    delete: (id) => axiosClient.delete(`/product/${id}`)
}