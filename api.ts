import axios from 'axios'

export const api = axios.create({
    baseURL: "https://backend-dieta-ai.vercel.app/",
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true // Isso garante que os cookies se houver sejam enviados
});
