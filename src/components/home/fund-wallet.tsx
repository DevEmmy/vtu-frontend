import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoCopyOutline } from "react-icons/io5";
import { GoShareAndroid } from "react-icons/go";
import { Link } from 'react-router-dom';


function fundWallet() {
  return (
    <div className='px-3 py-5 flex flex-col gap-7 min-h-screen'>
        <Link to={"/home"} className='text-xl'>
            <FaArrowLeftLong />
        </Link>
        <h1 className='text-xl font-bold'>Fund Wallet</h1>
        <form action="" className='flex flex-col gap-5'>
          
            <div className='border-b-2 pb-2'>
              <label htmlFor="phone-number" className='text-xs text-gray-400'>VTU Telecommunication Account Number</label>
              <div className='flex items-center'>
                <input type="phone" id='phone-number' name='phone-number' /><IoCopyOutline className='text-primary'/>
              </div>
            </div>
            

            <div className='border-b-2 pb-2'>
              <label htmlFor="bank" className='text-xs text-gray-400'>Choose Bank</label>
              <div className='flex items-center'>
                <div className='mr-2 w-14 h-14 rounded-full bg-gray-200'></div>
                <h1 className='font-bold'>Access Bank</h1>
              </div>
            </div>
            
            <div>
              <label htmlFor="recipient" className='text-xs text-gray-400'>Choose Reciepient</label>
              <h1 className='font-bold'>MEGAPAY</h1>
            </div>

            <button className='bg-pale flex items-center justify-center gap-2 py-3 rounded-3xl text-primary font-semibold'><GoShareAndroid />Share Account Information</button>
          
          
        </form>

      <div className="bg-white">
        <h2 className="font-bold mb-8">How to transfer to megapay ?</h2>
        <ol className="space-y-5">
          <li className="flex items-start space-x-2">
            <span className="flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full">1</span>
            <span className='text-sm'>Copy the VTU Telecommunication number above</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full">2</span>
            <span className='text-sm'>Open the bank app you want to transfer from</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full">3</span>
            <span className='text-sm'>Select the Access bank and transfer</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default fundWallet
