import axios from "axios";

const getToken = ()=>{
    return localStorage.getItem("token")
}

// "https://megapay-backend.onrender.com"

export const axiosConfig = axios.create({
    baseURL: "https://megapay-backend.onrender.com",
    headers: {
        "Authorization": `Bearer ${getToken()}`
    }
})

