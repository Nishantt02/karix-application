import axios from "axios";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const normalizeEnvValue = (value = "") => value.trim().replace(/^['"]|['"]$/g, "");

export const KARIX_URL = normalizeEnvValue(process.env.KARIX_URL);

if (!KARIX_URL) {
    throw new Error("KARIX_URL is missing in Backend/.env");
}

try {
    new URL(KARIX_URL);
} catch {
    throw new Error("KARIX_URL must be a valid absolute URL, for example https://example.com/path");
}

const axiosInstance = axios.create({

    headers: {

        "authentication-token": normalizeEnvValue(process.env.KARIX_TOKEN),

        "Content-Type": "application/json"

    }

});

export default axiosInstance;
