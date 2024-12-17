import axios from "axios";

const getToken = ()=>{
    return localStorage.getItem("token")
}

// "https://megapay-backend.onrender.com"

export const axiosConfig = axios.create({
    baseURL: "http://192.168.223.168:4030",
    headers: {
        "Authorization": `Bearer ${getToken()}`
    }
})

