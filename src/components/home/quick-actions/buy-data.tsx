import React from "react";
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";
import ConfirmPayment from '../confirm-payment';
import PinInput from '../pin-input'


function buyData() {

  const [confirm, setConfirm] = React.useState(false)
  const toggleConfirm = () =>{
    setConfirm(prev => !prev)
  } 

  const [pinInput, setPinInput] = React.useState(false)
  const togglePinInput = () =>{
    setPinInput(prev => !prev)
  } 

    const offers = ['Best Offers', 'General', 'Social', 'Voice' , 'HyNetFlex']
    const bestOffers = [
        {
          plan: "1GB",
          price: 10,
          timeSpan: "Valid for 7 days"
        },
        {
          plan: "1.5GB",
          price: 15,
          timeSpan: "Valid for 7 days"
        },
        {
          plan: "5GB",
          price: 50,
          timeSpan: "Valid for 12 days"
        },
        {
          plan: "12GB",
          price: 120,
          timeSpan: "Valid for 30 days"
        },
        {
          plan: "20GB",
          price: 190,
          timeSpan: "Valid for 30 days"
        },
        {
          plan: "35GB",
          price: 300,
          timeSpan: "Valid for 60 days"
        }
      ];
      
  return (
    <div className={`px-3 py-5 w-[100%] relative flex flex-col gap-7 min-h-screen`}>
        <Link to={"/home"} className='text-xl'>
            <FaArrowLeftLong />
        </Link>

        <h1 className='text-xl font-bold'>Buy Data</h1>

        <div className='flex flex-col gap-5'>
            <div className='bg-gray-100 rounded-3xl flex items-center py-3 justify-between px-3'>
                <input type="text" className='bg-gray-100 focus:outline-none py-1' placeholder='Select Network'/>
                <RiArrowDropDownLine className='text-3xl' />
            </div>

            <div className='bg-gray-100 rounded-3xl flex items-center py-3 justify-between px-3'>
                <input type="text" className='bg-gray-100 focus:outline-none py-1' placeholder='Phone Number'/>
                <TiContacts className='text-3xl text-primary' />
            </div>
        </div>

        <div className='grid grid-cols-5'>
            {offers.map((_, index) =>(
                <div key={index} className='py-1 relative flex justify-center'>
                    <h1 className='text-xs text-gray-500 text-center hover:scale-125 hover:font-bold hover:text-black'>{offers[index]} </h1>
                    <div className='absolute mt-6 w-[40%] z-10 border-b-2 border-primary'></div>
                </div>
            ))}
        </div>

        <div className='grid grid-cols-3 gap-4 p-3'>
            {bestOffers.map((item, index) =>(
                <div key={index} onClick={() => toggleConfirm()} className='flex flex-col gap-2 items-center text-center py-7 border-2 rounded-lg border-primary'>
                    <h1 className='font-bold '>{item.plan}</h1>
                    <p className='text-gray-500 text-sm'>₦{item.price}</p>
                    <p className='text-[10px]'>{item.timeSpan}</p>
                </div>
            ))}
        </div>

        {confirm && <ConfirmPayment setConfirm={toggleConfirm} setPinInput={togglePinInput}/>}

        {pinInput && <PinInput setPinInput={togglePinInput}/>}
        
    </div>
  )
}

export default buyData
