import axios from "axios"

export const Api = () => {
    const api = axios.create({
        baseURL: import.meta.env.VITE_API_URL,
        withCredentials: true,
    })
    return api
}