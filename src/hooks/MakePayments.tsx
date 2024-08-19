import { useState } from "react"
import { axiosConfig } from "../utils/apiClient";
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { toastError } from "../utils/toast";



export const usePurchaseAirtime = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [response, setResponse] = useState();

    const navigate = useNavigate()

    const purchaseAirtime = async (data: any) => {
        setIsLoading(true)
        data.transaction.type = "AIRTIME"

        try {
            let response = await axiosConfig.post("/transaction", data)
            let retrievedData = response.data.payload;

            navigate(`/reciept/${retrievedData._id}`)

            if (retrievedData.sucess) {
                setResponse(retrievedData);
                toast.success("Transaction Processed!")
            }

            else {
                console.log(retrievedData)
            }
        }
        catch(err: any){
            toastError(err.response.data.message)
            setIsError(true)
            console.log(err)
        }
        
        setIsLoading(false)
    }

    return { purchaseAirtime, isLoading, isError }
}

export const useAllTransactions = () => {
    const fetchTransactions = async () => {
        let response = await axiosConfig.get("/transaction")
        let data = response.data.payload
        return data;
    }

    const { data: transactions, isError, isLoading } = useQuery("transaction", fetchTransactions)


    return { transactions, isError, isLoading };
}

export const useFetchTransactionById = (id: string) => {
    const fetchTransactions = async () => {
        let response = await axiosConfig.get(`/transaction/${id}`)
        let data = response.data.payload
        return data;
    }

    const { data: transaction, isError, isLoading } = useQuery(id, fetchTransactions)


    return { transaction, isError, isLoading };
}