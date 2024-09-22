import React from "react";
import { IoMdClose } from "react-icons/io";
import check from '../../../public/CHECK.png'

interface ConfirmEduPaymentProps {
  setConfirm?: Function | null;
  setPinInput?: Function | null;
  network: string,
  phone: string,
  amount: string,
  dataSize: string,
  duration: string,
}

const ConfirmEduPayment: React.FC<any> = ({ setConfirm, setPinInput, amount, biller, mobileNumber, serviceProvider }) => {
  
  return (
    <div className='absolute bottom-0 w-full left-0 h-full flex flex-col justify-end z-20  bg-[rgba(0,0,0,0.4)]'>
      <div className='bg-white rounded-t-3xl w-full flex flex-col gap-6 px-5 py-8'>
          <div className='relative flex justify-center items-center'>
            <h1 className='text-primary  text-3xl'>₦{amount}</h1>
            <IoMdClose className='absolute right-0 text-2xl' onClick={()=>setConfirm()}/>
          </div>

          <div>
            <div className='flex justify-between py-2'>
              <p className='text-gray-500'>Biller name</p>
              <h3 className='font-bold'>{biller}</h3>
            </div>
            <div className='flex justify-between py-1'>
              <p className='text-gray-500'>Service Provider</p>
              <h3 className='font-bold'>{serviceProvider}</h3>
            </div>
            <div className='flex justify-between py-2'>
              <p className='text-gray-500'>User ID</p>
              <h3 className='font-bold'>{mobileNumber}</h3>
            </div>
          </div>

          <button className='bg-primary text-white py-4 rounded-3xl font-semibold' onClick={()=>{setConfirm(); setPinInput();}}>
            Confirm
          </button>
      </div>
    </div>
  )
}

export default ConfirmEduPayment;
