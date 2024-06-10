import axios from "axios";

export const api = axios.create({
    baseURL: "https://movies-backend-yw4s.onrender.com"
});

