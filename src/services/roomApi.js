import axiosClient from "./axiosClient";

const roomApi = {
    getAll: (params) => {
        const url = '/room/';
        return axiosClient.get(url, { params })
    },
    get: (id) => {
        const url = `/room/${id}`;
        return axiosClient.get(url);
    },
}

export default roomApi
