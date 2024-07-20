import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import ConfirmPayment from '../confirm-payment';
import PinInput from '../pin-input'
import TVItem from '../tv-items';

function tvSubscription() {
    const [isTV, setIsTV] = React.useState(false)
    const toggleTV = () =>{
        setIsTV(prev => !prev)
    } 

    const [confirm, setConfirm] = React.useState(false)
    const toggleConfirm = () =>{
      setConfirm(prev => !prev)
    } 
  
    const [pinInput, setPinInput] = React.useState(false)
    const togglePinInput = () =>{
      setPinInput(prev => !prev)
    } 

    const gotv = [
        {
            package: 'SUPA',
            price: '15,700',
            color:`bg-[#B501B8]`,
            description: `Get your front-row seat to the Premier League with Supa+.
             GOtv Supa+ has a full house of entertainment like the dedicated PL channel, more for the movie lovers, plus a big entertainment boost for the kids.
             Make your home a happy place for all with GOtv Supa+.`
        },
        {
            package: 'SUPA',
            price: '9,600',
            color: `bg-[#1E90FF]`,
            description: `Enjoy something for everyone with Supa-TV.
             GOtv Supa has premium local shows and is Supa-loaded with kids,
             sport (Including English Premier League matches and WWE),
             telenovela and movie channels`
        },
        {
            package: 'MAX',
            price: '7,200',
            color:`bg-[#930033]`,
            description: `Take your home’s entertainment to the Max with a wide range of sport, movies, series,
             the latest local stories, kids' channels and more to choose from.
             GOtv Max gives you great value at a great price.`
        },
    ]
  return (
    <div className={`px-3 py-5 w-[100%] relative flex flex-col gap-7 min-h-screen`}>
        <Link to={"/home"} className='text-xl'>
            <FaArrowLeftLong />
        </Link>

        <h1 className='text-xl font-bold'>TV Subscription</h1>

        <div className='flex flex-col gap-5'>
            <div onClick={toggleTV} className='bg-gray-100 rounded-3xl flex items-center py-3 justify-between px-3'>
                <input type="text" className='bg-gray-100 focus:outline-none py-1' placeholder='Biller' value={'GOTV'}/>
                <RiArrowDropDownLine className='text-3xl' />
            </div>
            <div className='py-2 border-b-2'>
                <input type="text" placeholder='Smartcard Number' className='w-full focus:outline-none placeholder:text-gray-300' />
            </div>
        </div>   

        <div className='flex items-center'>
            <div className='relative flex flex-col-reverse items-center'>
                <h3 className='font-semibold'>Offers</h3>
                <div className='w-[40%] absolute border-b-2 border-primary'></div>
            </div>
        </div>  

        <div className='flex flex-col gap-6'>
           {gotv.map((item, index)=>(
            <div key={index} className={` ${item.color} px-4 py-6  flex flex-col gap-2 text-white`} onClick={() => toggleConfirm()}>
                <div className='flex items-center justify-between '>
                    <div className=''>
                      <h1 className='text-2xl font-bold'>GOTV</h1>
                      <p className='font-semibold text-xl'>{item.package}</p>
                    </div>
                    <div className='px-3 py-1 text-primary bg-white font-bold'>
                        NGN{item.price}
                    </div>
                </div>
                <div>
                    <p className='text-sm'>{item.description}</p>
                </div>

            </div>
           ))}
        </div>
        {isTV && <TVItem />}



        {confirm && <ConfirmPayment setConfirm={toggleConfirm} setPinInput={togglePinInput}/>}

        {pinInput && <PinInput setPinInput={togglePinInput}/>}
    </div>
  )
}

export default tvSubscription
