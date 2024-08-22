import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";
import { Link } from 'react-router-dom';
import SelectNetwork from '../select-network';
import ConfirmPayment from '../confirm-payment';
import PinInput from '../pin-input'
import { useMakeTransaction } from "../../../hooks/MakePayments";
import Loader from "../../Loader";


function buyAirtime() {
    const [confirm, setConfirm] = React.useState(false)
    const toggleConfirm = () => {
        if (isValidInput) {
            setConfirm(prev => !prev)
        }
    }

    const [network, setNetwork] = React.useState("mtn")
    const [phone, setPhone] = useState("")

    const [pinInput, setPinInput] = React.useState(false)
    const togglePinInput = () => {
        setPinInput(prev => !prev)
    }

    const [isNetwork, setIsNetwork] = React.useState(false)
    const toggleNetwork = () => {
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
        { price: 50 },
        { price: 100 },
        { price: 150 },
        { price: 200 },
        { price: 500 },
        { price: 1000 },
    ]

    const networks = [
        {
            title: "MTN",
            value: "mtn"
        },
        {
            title: "Airtel",
            value: "airtel"
        },
        {
            title: "Glo",
            value: "glo"
        },
        {
            title: "9mobile",
            value: "9mobile"
        }
    ]

    const {makeTransaction, isLoading, isError} = useMakeTransaction()

    const submit = (pin: string)=>{
        let data = {
            transaction: {
                amount: inputValue,
                type: "AIRTIME",
                details: {
                    phone,
                    network
                }
            },
            pin
        }

        makeTransaction(data)
    }
    return (
        <div className={`px-3 py-5 w-[100%] relative flex flex-col gap-7 min-h-screen`}>
            <Link to={"/home"} className='text-xl'>
                <FaArrowLeftLong />
            </Link>

            <h1 className='text-xl font-bold'>Buy Airtime</h1>

            <div className='flex flex-col gap-5'>
                <div className='bg-gray-100 rounded-3xl flex items-center py-3 justify-between px-3'>
                    <select className='bg-gray-100 w-full focus:outline-none' value={network} onChange={(e) => setNetwork(e.target.value)}>
                        {
                            networks.map((n, i) => {
                                return (
                                    <option value={n.value} key={i}>{n.title}</option>
                                )
                            })
                        }
                    </select>
                    {/* <RiArrowDropDownLine className='text-3xl' onClick={()=> toggleNetwork()}/> */}
                </div>

                <div className='bg-gray-100 rounded-3xl flex items-center py-3 justify-between px-3'>
                    <input type="number" className='bg-gray-100 focus:outline-none' value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder='Phone Number' />
                    <TiContacts className='text-3xl text-primary' />
                </div>
                <div className='flex py-2 border-b-2 text-sm items-center justify-between'>
                    <div className="flex items-center gap-2">
                        <h1 className='font-bold mr-2 text-[24px]'>₦</h1>
                        <input type="text" value={inputValue} onChange={handleInputChange} placeholder='50-50,000' className='py-1 w-2/3 text-lg focus:outline-none' />
                    </div>
                    <button onClick={() => toggleConfirm()} className={`${isValidInput ? 'opacity-100' : 'opacity-50 cursor-not-allowed'} px-7 py-1 rounded-3xl bg-primary text-white`}>
                        Pay
                    </button>
                </div>
            </div>
            
            {confirm && <ConfirmPayment setConfirm={toggleConfirm} network={network} amount={inputValue} phone={phone} setPinInput={togglePinInput} />}

            {pinInput && <PinInput action={submit} setPinInput={togglePinInput} />}

            {
                isLoading
                &&
                <Loader />
            }
        </div>
    )
}

export default buyAirtime
