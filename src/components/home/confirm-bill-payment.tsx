import React from "react";
import { IoMdClose } from "react-icons/io";
import check from '../../../public/CHECK.png'

interface ConfirmBillPaymentProps {
  setConfirm?: Function | null;
  setPinInput?: Function | null;
  network: string,
  phone: string,
  amount: string,
  dataSize: string,
  duration: string,
}

const ConfirmBillPayment: React.FC<any> = ({ setConfirm, setPinInput, amount, biller, meterNumber }) => {
  
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
              <h3 className='font-medium'>{biller}</h3>
            </div>
            <div className='flex justify-between py-2'>
              <p className='text-gray-500'>Meter Number</p>
              <h3 className='font-medium'>{meterNumber}</h3>
            </div>
          </div>

          <button className='bg-primary text-white py-4 rounded-3xl font-semimedium' onClick={()=>{setConfirm(); setPinInput();}}>
            Confirm
          </button>
      </div>
    </div>
  )
}

export default ConfirmBillPayment;
