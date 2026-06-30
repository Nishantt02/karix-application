import axiosInstance from "../config/axiosInstance.js";

export const sendToKarix = async (payload) => {

    const response = await axiosInstance.post("", payload);

    return response.data;

};