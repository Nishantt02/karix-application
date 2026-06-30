import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const axiosInstance = axios.create({

    baseURL: process.env.KARIX_URL,

    headers: {

        "authentication-token": process.env.KARIX_TOKEN,

        "Content-Type": "application/json"

    }

});

export default axiosInstance;