import { useEffect, useState } from "react";
import { axiosConfig } from "../utils/apiClient";
import { toastError, toastSuccess } from "../utils/toast";
import { useNavigate } from "react-router-dom";

const saveToStorage = (token: string, user: any) => {
    localStorage.setItem("token", token)
    localStorage.setItem("user", JSON.stringify(user))
}

export const useLogin = () => {

    const router = useNavigate()

    const [isError, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState();

    const loginFn = async (data: any) => {
        try {
            setIsLoading(true)
            let response = await axiosConfig.post("/auth/sign-in", data)
            if (response.status === 200) {
                setResponse(response.data)
                const { token, user } = response.data.payload
                saveToStorage(token, user)
                toastSuccess(response.data.message)
                router("/")
            }
            else {
                toastError(response.data.message)
            }
            setIsLoading(false)
            setError(true)
        }
        catch (err: any) {
            setIsLoading(false)
            setError(true)
            toastError(err.response.data.message)
        }

    }

    return { isError, isLoading, response, loginFn }
}


export const useSignUp = () => {

    const [isError, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState();
    const router = useNavigate()

    const signUpFn = async (data: any) => {
        try {
            setIsLoading(true)
            let response = await axiosConfig.post("/auth/sign-up", data)
            console.log(response)

            if (response.status === 200) {
                toastSuccess(response.data.message)
                const { token, user } = response.data.payload
                saveToStorage(token, user)
                setResponse(response.data)
                router("/security")
            }
            else {
                toastError(response.data.message)
            }
            setIsLoading(false)
            setError(true)
        }
        catch (err: any) {
            setIsLoading(false)
            setError(true)
            toastError(err.response.data.message)
        }


    }
    return { isError, isLoading, response, signUpFn }
}

export const useLogout = () => {
    const navigate = useNavigate();
  
    const logout = () => {
      localStorage.removeItem("user");

      navigate("/on-boarding");
    };
  
    return { logout };
  }

export const useUser = ()=>{
    let [user, setUser] = useState(JSON.parse(localStorage.getItem("user") as string))

    const fetchUser = async ()=>{
        let response = await axiosConfig.get("/auth/my-details");
        localStorage.setItem("user", JSON.stringify(response.data.payload))
        setUser(response.data.payload);
    }
    
    useEffect(()=>{
        fetchUser()
    }, [])

    return {user}
}

export const useCreatePin = () => {

    const [isError, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const createPinFn = async (data: any) => {
        try {
            setIsLoading(true)
            let response = await axiosConfig.post("/auth/create-pin", data)
            console.log(response)

            if (response.status === 200) {
                // toastSuccess(response.data.message)
                setSuccess(true);
            }
            else {
                toastError(response.data.message)
            }
            setIsLoading(false)
            setError(true)
        }
        catch (err: any) {
            setIsLoading(false)
            setError(true)
            toastError(err.response.data.message)
        }
    }

    return { isError, isLoading, success, createPinFn }
}



export const useUpdateProfile = () => {

    const [isError, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const updateProfileFn = async (data: any) => {
        try {
            setIsLoading(true)
            let response = await axiosConfig.patch("/auth/", data)
            console.log(response)

            if (response.status === 200) {
                toastSuccess(response.data.message)
                localStorage.setItem("user", JSON.stringify(response.data.payload))
                setSuccess(true);
            }
            else {
                toastError(response.data.message)
            }
            setIsLoading(false)
            setError(true)
        }
        catch (err: any) {
            setIsLoading(false)
            setError(true)
            toastError(err.response.data.message)
        }
    }

    return { isError, isLoading, success, updateProfileFn }
}




export const useFundWallet = () => {

    const [isError, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const fundWalletFn = async (data: any) => {
        try {
            setIsLoading(true)
            let response = await axiosConfig.patch("/auth/fund-wallet", data)
            console.log(response)

            if (response.status === 200) {
                toastSuccess(response.data.message)
                localStorage.setItem("user", JSON.stringify(response.data.payload))
                setSuccess(true);
            }
            else {
                toastError(response.data.message)
            }
            setIsLoading(false)
            setError(true)
        }
        catch (err: any) {
            setIsLoading(false)
            setError(true)
            toastError(err.response.data.message)
        }
    }

    return { isError, isLoading, success, fundWalletFn }
}




