import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";
import { Link } from 'react-router-dom';
import SelectNetwork from '../select-network';
import ConfirmPayment from '../confirm-payment';
import PinInput from '../pin-input'


function buyAirtime() {
    const [confirm, setConfirm] = React.useState(false)
    const toggleConfirm = () =>{
        if (isValidInput) {
            setConfirm(prev => !prev)
        }
        
    } 

    const [network, setNetwork] = React.useState('')

    const [pinInput, setPinInput] = React.useState(false)
    const togglePinInput = () =>{
        setPinInput(prev => !prev)
    } 

    const [isNetwork, setIsNetwork] = React.useState(false)
    const toggleNetwork = () =>{
        setIsNetwork(prev => !prev)
    } 

  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    // Only allow valid numbers or an empty string
    if (value === '' || /^\d+$/.test(value)) {
      setInputValue(value);
    }
  };

  const isValidInput = inputValue !== '' && /^\d+$/.test(inputValue);

    const airtime = [
        {price: 50},
        {price: 100},
        {price: 150},
        {price: 200},
        {price: 500},
        {price: 1000},
    ]
  return (
    <div className={`px-3 py-5 w-[100%] relative flex flex-col gap-7 min-h-screen`}>
      <Link to={"/home"} className='text-xl'>
            <FaArrowLeftLong />
        </Link>

        <h1 className='text-xl font-bold'>Buy Airtime</h1>

        <div className='flex flex-col gap-5'>
            <div className='bg-gray-100 rounded-3xl flex items-center py-3 justify-between px-3'>
                <input type="text" className='bg-gray-100 focus:outline-none' value={network}  placeholder='Select Network'/>
                <RiArrowDropDownLine className='text-3xl' onClick={()=> toggleNetwork()}/>
            </div>

            <div className='bg-gray-100 rounded-3xl flex items-center py-3 justify-between px-3'>
                <input type="text" className='bg-gray-100 focus:outline-none' placeholder='Phone Number'/>
                <TiContacts className='text-3xl text-primary' />
            </div>
            <div className='flex py-2 border-b-2 text-sm items-center'>
                <h1 className='font-bold mr-2'>$</h1>
                <input type="text" value={inputValue} onChange={handleInputChange} placeholder='50-50,000' className='py-1 text-lg focus:outline-none'/>
                <button onClick={() => toggleConfirm()} className={`${isValidInput ? 'opacity-100' : 'opacity-50 cursor-not-allowed'} px-7 py-1 rounded-3xl ml-auto bg-primary text-white`}>
                    Pay
                </button>
            </div>
        </div>
        <div className='flex items-center'>
            <div className='relative flex flex-col-reverse items-center'>
                <h3 className='font-semibold'>Offers</h3>
                <div className='w-[40%] absolute border-b-2 border-primary'></div>
            </div>
        </div>
        <div className='grid grid-cols-3 gap-3'>
            {airtime.map((item, index)=>(
                <div onClick={() => setConfirm(prev => !prev)} key={index} className='flex justify-center h-[100px] items-center border-2 border-primary font-bold rounded-lg text-xl'>
                    <h1>${item.price}</h1>
                </div>
            ))}
        </div>

        {isNetwork && <SelectNetwork networkValue={setNetwork} setIsNetwork={setIsNetwork}/>}
        {confirm && <ConfirmPayment setConfirm={toggleConfirm} setPinInput={togglePinInput}/>}

        {pinInput && <PinInput setPinInput={togglePinInput}/>}
    </div>
  )
}

export default buyAirtime
