
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoCopyOutline } from "react-icons/io5";
import { GoShareAndroid } from "react-icons/go";
import { Link } from 'react-router-dom';
import  useMonnify  from "../../../hooks/useMonnify";
import { useState } from "react";
import { useFundWallet, useUser } from "../../../hooks/Auth";
import { PaystackButton } from "react-paystack";
import { v4 as uuidv4 } from 'uuid';

function fundWallet() {
  const [amount, setAmount] = useState(0)
  const {success, isError, isLoading, fundWalletFn} = useFundWallet();

  const {user} = useUser();

  const config = {
    reference: uuidv4(),
    email: user.email,
    amount: amount * 100,
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY as string,
  };

  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    
    let data = {
      email : user.ammount,
      name : user.firstName + user.lastName,
      amount: config.amount / 100,
      ref: reference.reference,
    }
    console.log(data);
    fundWalletFn({amount: data.amount, ref: config.reference})
    // createTransaction(data)
  };

  
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  const componentProps = {
    ...config,
    text: 'Proceed to Payment',
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
};
  
  return (
    <div className='px-3 py-5 flex flex-col gap-7 min-h-screen'>
        <Link to={"/"} className='text-xl'>
            <FaArrowLeftLong />
        </Link>
        <h1 className='text-xl font-bold'>Fund Wallet</h1>
        <div className="flex flex-col gap-5">
          <p>How Much do you want to fund?</p>
          <input type="number" className="border-b focus:outline-none p-3" placeholder="100 - 100,000" onChange={(e: any)=> setAmount(e.target.value)}/>
          {/* <button className="bg-primary rounded-lg p-4 text-white" onClick={submit}>Proceed to Payment</button> */}
          <PaystackButton {...componentProps} className='border-primary1 border-2 py-3 px-16 md:w-full rounded-md text-white my-5  hover:text-white transition-all bg-primary' />
        </div>
    </div>
  )
}

export default fundWallet
