import React from "react";
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";
import ConfirmPayment from '../confirm-payment';
import PinInput from '../pin-input'
import { dataPlans } from "../../../utils/dataPlans";
import { HiCheck } from "react-icons/hi2";
import { useMakeTransaction } from "../../../hooks/MakePayments";
import Loader from "../../Loader";


function buyData() {

  const [confirm, setConfirm] = React.useState(false)
  const toggleConfirm = () => {
    setConfirm(prev => !prev)
  }

  const [pinInput, setPinInput] = React.useState(false)
  const togglePinInput = () => {
    setPinInput(prev => !prev)
  }

  const offers = ['Best Offers', 'General', 'Social', 'Voice', 'HyNetFlex']
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

  const [network, setNetwork] = React.useState("mtn")
  const [dataSelected, setDataSelected] = React.useState<number | null>()
  const [phoneNumber, setPhoneNumber] = React.useState<number | null>()

  const {makeTransaction, isLoading, isError} = useMakeTransaction()

  const submit = (pin: string)=>{
      let data = {
          transaction: {
              amount: dataPlans[network][dataSelected].price,
              type: "DATA",
              details: {
                  phoneNumber: `0${phoneNumber}`,
                  network,
                  variationId: dataPlans[network][dataSelected].code
              }
          },
          pin
      }

      makeTransaction(data)
  }

  return (
    <div className={`px-3 py-5 w-[100%] relative flex flex-col gap-3 min-h-screen`}>
      <Link to={"/home"} className='text-xl'>
        <FaArrowLeftLong />
      </Link>

      <h1 className='text-xl font-bold'>Buy Data</h1>

      <div className='flex flex-col gap-5'>
        <div className='bg-gray-100 rounded-3xl flex items-center py-3 justify-between px-3'>
          <select className='bg-gray-100 w-full focus:outline-none' value={network} onChange={(e) => {setNetwork(e.target.value); setDataSelected(null)}}>
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
          <input type="number" className='bg-gray-100 focus:outline-none py-1' placeholder='Phone Number' onChange={(e)=> setPhoneNumber(Number(e.target.value))}/>
          <TiContacts className='text-3xl text-primary' />
        </div>
      </div>

      {/* <div className='grid grid-cols-5'>
        {offers.map((_, index) => (
          <div key={index} className='py-1 relative flex justify-center'>
            <h1 className='text-xs text-gray-500 text-center hover:scale-125 hover:font-bold hover:text-black'>{offers[index]} </h1>
            <div className='absolute mt-6 w-[40%] z-10 border-b-2 border-primary'></div>
          </div>
        ))}
      </div> */}

      <p>Offers:</p>

      <div className='grid grid-cols-3 gap-4 '>
        {dataPlans[network].map((item: any, index: number) => (
          <div key={index} onClick={()=> setDataSelected(index)}  className={`relative flex flex-col gap-2 items-center text-center py-7 border-2 rounded-lg border-primary ${ dataSelected === index && "border-green-400 border-2"}`}>
            {
              index === dataSelected&&
              <div className="absolute -top-3 -right-3  bg-green-600 text-white rounded-full p-1">
                <HiCheck />
              </div>
            }
            <h1 className='font-bold '>{item.dataSize}</h1>
            <p className='text-gray-500 text-sm'>₦{item.price}</p>
            <p className='text-[10px]'>{item.duration}</p>
          </div>
        ))}
      </div>

      <button className="bg-primary rounded-lg p-4 text-white"onClick={() => toggleConfirm()}>Proceed to Payment</button>

      {confirm && <ConfirmPayment setConfirm={toggleConfirm} setPinInput={togglePinInput}  amount={dataPlans[network][dataSelected].price} phone={"0" +phoneNumber} network={network} />}

      {pinInput && <PinInput action={submit} setPinInput={togglePinInput} />}
      {
                isLoading
                &&
                <Loader />
            }
    </div>
  )
}

export default buyData
