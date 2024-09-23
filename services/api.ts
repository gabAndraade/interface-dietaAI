import axios from 'axios'

// http://192.168.1.16:3333 / create
export const api = axios.create({
    baseURL: "https://backend-dieta-ai.vercel.app/"
})