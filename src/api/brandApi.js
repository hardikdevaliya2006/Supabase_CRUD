import axios from "axios";

export const brandApi = axios.create({
    baseURL: import.meta.env.VITE_BRAND_FETCH_BASE_URL,
    params: {
        c: import.meta.env.VITE_BRAND_FETCH_CLIENT_ID
    }
})