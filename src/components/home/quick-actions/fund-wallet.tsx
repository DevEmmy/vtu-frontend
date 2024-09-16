
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoCopyOutline } from "react-icons/io5";
import { GoShareAndroid } from "react-icons/go";
import { Link } from 'react-router-dom';
import  useMonnify  from "../../../hooks/useMonnify";
import { useState } from "react";
import { useFundWallet, useUser } from "../../../hooks/Auth";


function fundWallet() {
  const [amount, setAmount] = useState(0)
  const {success, isError, isLoading, fundWalletFn} = useFundWallet()

  const {user} = useUser()

  const config = {
    amount: amount,
    currency: 'NGN',
    reference: `${new String(new Date().getTime())}`,
    customerName: `${user.firstName} ${user.lastName}`,
    customerEmail: `${user.email}`,
    paymentDescription: 'Funding wallet',
    metadata: {
      name: `${user.firstName} ${user.lastName}`,
    },
    isTestMode: false,
    customerPhoneNumber: `${user.phoneNumber}`,
    apiKey: import.meta.env.VITE_MONNIFY_API_KEY as string,
    contractCode: import.meta.env.VITE_CONTRACT_CODE as string,
  };
  const {startPayment} = useMonnify(config)
  
  const submit = ()=>{
   startPayment(
      () => {console.log('loading has started'); fundWalletFn({amount})},
      () => console.log('SDK is UP'),
      (res) =>{ console.log('response', res); fundWalletFn({amount})},
      (data) => console.log('data', data)
    )
  }

  
  return (
    <div className='px-3 py-5 flex flex-col gap-7 min-h-screen'>
        <Link to={"/home"} className='text-xl'>
            <FaArrowLeftLong />
        </Link>
        <h1 className='text-xl font-bold'>Fund Wallet</h1>
        
        <div className="flex flex-col gap-5">
          <p>How Much do you want to fund?</p>
          <input type="number" className="border-b focus:outline-none p-3" placeholder="100 - 100,000" onChange={(e: any)=> setAmount(e.target.value)}/>
          <button className="bg-primary rounded-lg p-4 text-white" onClick={submit}>Proceed to Payment</button>
        </div>
          
            
    </div>
  )
}

export default fundWallet
