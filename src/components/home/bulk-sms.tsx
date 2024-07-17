import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { TiContacts } from "react-icons/ti";

function bulkSms() {
  return (
    <div className='px-3 py-5 flex flex-col gap-9 min-h-screen'>
        <Link to={"/home"} className='text-xl'>
            <FaArrowLeftLong />
        </Link>
        <h1 className='text-xl font-bold'>Bulk SMS</h1>
        <form action="" className='flex flex-col gap-8'>
            <div className='bg-gray-100 rounded-3xl flex items-center py-3 justify-between px-3'>
              <input type="text" placeholder='Phone Number' className='bg-gray-100 focus:outline-none py-1'/>  
              <TiContacts className='text-2xl text-primary' />
            </div>

            <div className='border-b-2 pb-3'>
                <textarea className='w-full focus:outline-none' placeholder='Type your message here'/>
            </div>

            <Link to={'/successful'} className='text-white text-center font-semibold bg-primary py-3 rounded-3xl'>Confirm</Link>


            
        </form>
    </div>
  )
}

export default bulkSms
