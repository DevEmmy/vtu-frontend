import axios from "axios";

const getToken = ()=>{
    return localStorage.getItem("token")
}

export const axiosConfig = axios.create({
    baseURL: "http://localhost:3030",
    headers: {
        "Authorization": `Bearer ${getToken()}`
    }
})

