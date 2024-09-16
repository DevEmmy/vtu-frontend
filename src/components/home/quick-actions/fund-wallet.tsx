
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoCopyOutline } from "react-icons/io5";
import { GoShareAndroid } from "react-icons/go";
import { CiShare2 } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import  useMonnify  from "../../../hooks/useMonnify";
import { useState } from "react";
import { useFundWallet, useUser } from "../../../hooks/Auth";
import Banner from "../../../assets/BANNER.svg";


function fundWallet() {
  const [amount, setAmount] = useState(0)
  const {success, isError, isLoading, fundWalletFn} = useFundWallet()
  const [copied, setCopied] = useState(false);

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


  const copyToClipboard = () => {
    navigator.clipboard.writeText('703 245 2445');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // reset copied state after 2 seconds
  };

const listStyle = 'bg-[#C0E0FF] text-blue-500 rounded-full p-4 w-4 h-4 flex items-center justify-center';
  
  return (
    <div className='px-3 py-5 flex flex-col gap-7 min-h-screen'>
    <Link to={"/home"} className='text-xl'>
      <FaArrowLeftLong />
    </Link>
    <h1 className='text-xl font-bold'>Fund Wallet</h1>

    <div className='flex flex-col gap-5'>
      <div className="border-b ">
        <p className='text-gray-500 text-xs'>VTU Telecommunication Account Number</p>
        <div className='flex items-center gap-2'>
          <span className='text-md font-bold py-1'>703 245 2445</span>
          <button
            className='text-primary hover:underline'
            onClick={copyToClipboard}
          >
            {copied ? <FaCheckCircle className="text-green-500"/> : <IoCopyOutline />}
          </button>
        </div>
      </div>

      <div className="border-b">
        <p className='text-gray-500 text-xs'>Choose Bank</p>
        <div className='flex items-center gap-2 py-2'>
          <div className='bg-gray-300 rounded-full w-7 h-7'></div>
          <span>Access Bank</span>
        </div>
      </div>

      <div>
        <p className='text-gray-500 text-xs'>Choose Recipient</p>
        <span className='text-md font-bold'>MEGAPAY</span>
      </div>

      <button className="bg-[#C0E0FF] text-blue-500 rounded-3xl p-3 mt-3 flex items-center justify-center">
        <CiShare2 className="h-6 w-6"/>
        Share Account Information
      </button>

      <div className='mt-5'>
  <h2 className='text-md font-medium'>How to transfer to Megapay?</h2>
  <ol className=' mt-2 flex flex-col gap-2'>
    <li className='flex items-center text-sm text-gray-500 gap-2'>
      <span className={listStyle}>
        1
      </span>
      Copy the VTU Telecommunication number above
    </li>
    <li className='flex items-center text-sm text-gray-500 gap-2'>
      <span className={listStyle}>
        2
      </span>
      Open the bank app you want to transfer from
    </li>
    <li className='flex items-center text-sm text-gray-500 gap-2'>
      <span className={listStyle}>
        3
      </span>
      Select Access Bank and transfer
    </li>
  </ol>
</div>
<img src={Banner} alt="Fund Banner" className="w-full"/>
    </div>
  </div>
  )
}

export default fundWallet
