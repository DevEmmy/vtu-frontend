import React from "react";
import { IoMdClose } from "react-icons/io";
import check from '../../../public/CHECK.png'

interface ConfirmDataPaymentProps {
  setConfirm?: Function | null;
  setPinInput?: Function | null;
  network: string,
  phone: string,
  amount: string,
  dataSize: string,
  duration: string,
}

const ConfirmDataPayment: React.FC<any> = ({ setConfirm, setPinInput, network, phone, amount, dataSize, duration }) => {
  
  return (
    <div className='absolute bottom-0 w-full left-0 h-full flex flex-col justify-end z-20  bg-[rgba(0,0,0,0.4)]'>
      <div className='bg-white rounded-t-3xl w-full flex flex-col gap-6 px-5 py-8'>
          <div className='relative flex justify-center items-center'>
            <h1 className='text-primary  text-3xl'>₦{amount}</h1>
            <IoMdClose className='absolute right-0 text-2xl' onClick={()=>setConfirm()}/>
          </div>

          <div>
            <div className='flex justify-between py-1'>
              <p className='text-gray-500'>Selected Network</p>
              <h3 className='font-bold'>{network}</h3>
            </div>
            <div className='flex justify-between py-2'>
              <p className='text-gray-500'>Phone Number</p>
              <h3 className='font-bold'>{phone}</h3>
            </div>
          </div>

          <div className='flex items-center py-2 px-3 border-2 rounded-xl border-primary gap-2'>
            <h3 className='font-bold'>{dataSize}</h3>
            <p className='text-sm'>{amount}</p>
            <p className='text-xs'>{duration}</p>
            <img src={check} alt="" className='w-[30px] ml-auto'/>
          </div>

          <button className='bg-primary text-white py-4 rounded-3xl font-semibold' onClick={()=>{setConfirm(); setPinInput();}}>
            Confirm
          </button>
      </div>
    </div>
  )
}

export default ConfirmDataPayment
