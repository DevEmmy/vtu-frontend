import axios from "axios";

const getToken = ()=>{
    return localStorage.getItem("token")
}

export const axiosConfig = axios.create({
    baseURL: "http://192.168.236.168:4030",
    headers: {
        "Authorization": `Bearer ${getToken()}`
    }
})

