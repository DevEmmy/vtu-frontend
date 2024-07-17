
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoCopyOutline } from "react-icons/io5";
import { GoShareAndroid } from "react-icons/go";
import { Link } from 'react-router-dom';


function fundWallet() {
  const accountNumber = '806 698 3809'
  return (
    <div className='px-3 py-5 flex flex-col gap-7 min-h-screen'>
        <Link to={"/home"} className='text-xl'>
            <FaArrowLeftLong />
        </Link>
        <h1 className='text-xl font-bold'>Fund Wallet</h1>
        <div className='flex flex-col gap-5'>
          
            <div className='border-b-2 pb-2'>
              <div className='text-xs text-gray-400'>VTU Telecommunication Account Number</div>
              <div className='flex items-center gap-2 mt-2'>
                <h3 className='font-semibold'>{accountNumber}</h3><IoCopyOutline className='text-primary hover:text-blue-600'/>
              </div>
            </div>
            

            <div className='border-b-2 pb-2'>
              <div className='text-xs text-gray-400'>Choose Bank</div>
              <div className='flex items-center'>
                <div className='mr-2 w-14 h-14 rounded-full bg-gray-200'></div>
                <h1 className='font-bold'>Access Bank</h1>
              </div>
            </div>
            
            <div>
              <label htmlFor="recipient" className='text-xs text-gray-400'>Choose Reciepient</label>
              <h1 className='font-bold'>MEGAPAY</h1>
            </div>

            
            <Link to={'/successful'} className='bg-pale flex items-center justify-center gap-2 py-3 rounded-3xl text-primary font-semibold'><GoShareAndroid />Share Account Invitation</Link>
          
          
        </div>

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
