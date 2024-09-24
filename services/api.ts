import axios from 'axios'

export const api = axios.create({
    baseURL: "https://backend-dieta-ai.vercel.app/create",
});
