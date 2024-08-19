import axios from "axios";

const getToken = ()=>{
    return localStorage.getItem("token")
}

export const axiosConfig = axios.create({
    baseURL: "http://192.168.83.168:3030",
    headers: {
        "Authorization": `Bearer ${getToken()}`
    }
})

