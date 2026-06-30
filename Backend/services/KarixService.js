import axiosInstance, { KARIX_URL } from "../config/axiosInstance.js";

export const sendToKarix = async (payload) => {

    const response = await axiosInstance.post(KARIX_URL, payload);

    return response.data;

};
