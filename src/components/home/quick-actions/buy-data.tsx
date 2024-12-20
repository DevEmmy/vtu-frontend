import React from "react";
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";
import ConfirmDataPayment from '../confirm-data-payment';
import PinInput from '../pin-input'
import { dataPlans } from "../../../utils/dataPlans";
import { HiCheck } from "react-icons/hi2";
import { useMakeTransaction } from "../../../hooks/MakePayments";
import { useScrollTop } from "../../../hooks/use-scroll-top";
import Loader from "../../Loader";


function buyData() {
  const isScrolled = useScrollTop();

  const [confirm, setConfirm] = React.useState(false);
  const toggleConfirm = () => {
    setConfirm(prev => !prev);
  };

  const [pinInput, setPinInput] = React.useState(false);
  const togglePinInput = () => {
    setPinInput(prev => !prev);
  };

  const offers = ['Best Offers', 'General', 'Social', 'Voice', 'HyNetFlex'];
  
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
  ];

  const [network, setNetwork] = React.useState("mtn");
  const [dataSelected, setDataSelected] = React.useState<number | string>("");  
  const [phoneNumber, setPhoneNumber] = React.useState<string>(""); 

  const { makeTransaction, isLoading, isError } = useMakeTransaction();


  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value); 
    }
  };

  const isPhoneNumberValid = phoneNumber.length === 11 && /^\d+$/.test(phoneNumber);
  const isDataSelectedValid = typeof dataSelected === 'number' || (typeof dataSelected === 'string' && dataSelected.trim() !== "");

  const submit = (pin: string) => {
    let data = {
      transaction: {
        amount: dataPlans[network][dataSelected as number].price,
        type: "DATA",
        details: {
          phoneNumber: `${phoneNumber}`,
          network,
          variationId: dataPlans[network][dataSelected as number].code
        }
      },
      // pin
    };

    makeTransaction(data);
  };

  return (
    <div className={`px-3 py-5 w-[100%] relative flex flex-col gap-7 h-full`}>
      <div
        className={`transition-all duration-500 ease-in-out bg-white fixed w-full top-0 p-3 ${isScrolled ? 'flex items-center z-20 gap-1 p-2' : 'block'}`}
      >
        <Link to="/" className="text-xl">
          <FaArrowLeftLong />
        </Link>

        <h1 className="text-xl font-medium">Buy Data</h1>
      </div>

      <div className="mt-10 w-full flex flex-col gap-3 py-3">

        <div className='flex flex-col gap-5 '>
          <div className='bg-gray-100 rounded-3xl flex items-center py-3 justify-between px-3'>
            <select className='bg-gray-100 w-full focus:outline-none' value={network} onChange={(e) => { setNetwork(e.target.value); setDataSelected("") }}>
              {networks.map((n, i) => (
                <option value={n.value} key={i}>{n.title}</option>
              ))}
            </select>
          </div>

          <div className='bg-gray-100 rounded-3xl flex items-center py-3 justify-between px-3'>
            <input type="number" className='bg-gray-100 focus:outline-none py-1' placeholder='Phone Number' value={phoneNumber} onChange={handlePhoneNumberChange} />
            <TiContacts className='text-3xl text-primary' />
          </div>
        </div>

        <p>Offers:</p>

        <div className='grid grid-cols-3 gap-4 '>
          {dataPlans[network].map((item: any, index: number) => (
            <div key={index} onClick={() => setDataSelected(index)} className={`relative flex flex-col gap-2 items-center text-center py-7 border-2 rounded-lg ${dataSelected === index ? "border-green-400 border-2" : "border-primary"}`}>
              {index === dataSelected &&
                <div className="absolute -top-3 -right-3  bg-green-600 text-white rounded-full p-1">
                  <HiCheck />
                </div>
              }
              <h1 className='font-medium '>{item.dataSize}</h1>
              <p className='text-gray-500 text-sm'>₦{item.price}</p>
              <p className='text-[10px]'>{item.duration}</p>
            </div>
          ))}
        </div>
        <button disabled={!isPhoneNumberValid || !isDataSelectedValid} className={`${isPhoneNumberValid && isDataSelectedValid ? 'opacity-100' : 'opacity-50 cursor-not-allowed'} bg-primary rounded-lg p-4 text-white`} onClick={() => toggleConfirm()}>Proceed to Payment</button>

        </div>
        
        {confirm && <ConfirmDataPayment setConfirm={toggleConfirm} setPinInput={togglePinInput} amount={dataPlans[network][dataSelected as number].price} dataSize={dataPlans[network][dataSelected as number].dataSize} duration={dataPlans[network][dataSelected as string].duration} phone={phoneNumber} network={network} />}
                {pinInput && <PinInput action={submit} setPinInput={togglePinInput} />}
                {isLoading && <Loader />}
    </div>
        
  );
}

export default buyData;