import React from 'react'
import { IoMdClose } from "react-icons/io";
import check from '../../../public/CHECK.png'

interface ConfirmPaymentProps {
  setConfirm: Function;
  setPinInput: Function;
}

const confirmPayment: React.FC<ConfirmPaymentProps> = ({ setConfirm, setPinInput }) => {
  
  return (
    <div className='absolute top-0 w-full left-0 h-screen flex flex-col justify-end z-20  bg-[rgba(0,0,0,0.4)]'>
      <div className='bg-white rounded-t-3xl w-full flex flex-col gap-6 px-5 py-8'>
          <div className='relative flex justify-center items-center'>
            <h1 className='text-primary font-bold text-3xl'>$50.00</h1>
            <IoMdClose className='absolute right-0 text-2xl' onClick={()=>setConfirm()}/>
          </div>

          <div>
            <div className='flex justify-between py-1'>
              <p className='text-gray-500'>Selected Network</p>
              <h3 className='font-bold'>MTN</h3>
            </div>
            <div className='flex justify-between py-2'>
              <p className='text-gray-500'>Phone Number</p>
              <h3 className='font-bold'>08066983809</h3>
            </div>
          </div>

          <div className='flex items-center py-2 px-3 border-2 rounded-xl border-primary gap-2'>
            <h3 className='font-bold'>5GB</h3>
            <p className='text-sm'>$50</p>
            <p className='text-xs'>Valid for 12 days</p>
            <img src={check} alt="" className='w-[30px] ml-auto'/>
          </div>
          <button className='bg-primary text-white py-2 rounded-3xl font-semibold' onClick={()=>{setConfirm(); setPinInput()}}>
            Confirm
          </button>
      </div>
    </div>
  )
}

export default confirmPayment
