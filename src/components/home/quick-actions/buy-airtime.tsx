import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiCheck } from "react-icons/hi2";
import { TiContacts } from "react-icons/ti";
import { Link } from "react-router-dom";
import SelectNetwork from "../select-network";
import ConfirmPayment from "../confirm-payment";
import PinInput from "../pin-input";
import { useMakeTransaction } from "../../../hooks/MakePayments";
import Loader from "../../Loader";
import Banner from "../../../assets/BANNER.svg";
import { useScrollTop } from "../../../hooks/use-scroll-top";

function buyAirtime() {
  const isScrolled = useScrollTop();
  const [confirm, setConfirm] = React.useState(false);
  const toggleConfirm = () => {
    if (isValidInput) {
      setConfirm((prev) => !prev);
    }
  };

  const [network, setNetwork] = React.useState("mtn");

  const [pinInput, setPinInput] = React.useState(false);
  const togglePinInput = () => {
    setPinInput((prev) => !prev);
  };

  const [isNetwork, setIsNetwork] = React.useState(false);
  const toggleNetwork = () => {
    setIsNetwork((prev) => !prev);
  };

  const [inputValue, setInputValue] = React.useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedPrice, setSelectedPrice] = React.useState<number | null>(null);

  const handleInputChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      setInputValue(value);
      setSelectedPrice(null);
    }
  };
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  const isValidInput = inputValue !== "" && /^\d+$/.test(inputValue);
  const isPhoneNumberValid = phoneNumber !== "" && /^\d+$/.test(phoneNumber);

  const airtimeOption = [
    { price: 50 },
    { price: 100 },
    { price: 200 },
    { price: 500 },
    { price: 1000 },
    { price: 2000 },
  ];

  const networks = [
    {
      title: "MTN",
      value: "mtn",
    },
    {
      title: "Airtel",
      value: "airtel",
    },
    {
      title: "Glo",
      value: "glo",
    },
    {
      title: "9mobile",
      value: "9mobile",
    },
  ];

  const { makeTransaction, isLoading, isError } = useMakeTransaction();

  const submit = (pin: string) => {
    console.log(pin)
    let data = {
      transaction: {
        amount: inputValue,
        type: "AIRTIME",
        details: {
          phoneNumber,
          network,
        },
      },
      pin,
    };

    makeTransaction(data);
  };
  return (
    <div className={`px-3 py-5 w-[100%] relative flex flex-col gap-7 min-h-screen`}>
      <div
        className={`transition-all duration-500 ease-in-out bg-white fixed w-full top-0 p-3 ${
          isScrolled ? "flex items-center z-20 gap-1 p-2" : "block"
        }`}
      >
        <Link to={"/"} className="text-xl">
          <FaArrowLeftLong />
        </Link>

        <h1 className="text-xl font-medium">Buy Airtime</h1>
      </div>

      <div className="flex flex-col gap-5 mt-20">
        <div className="bg-gray-100 rounded-3xl flex items-center py-3 justify-between px-3">
          <select
            className="bg-gray-100 w-full focus:outline-none"
            value={network}
            onChange={(e) => setNetwork(e.target.value)}
          >
            {networks.map((n, i) => {
              return (
                <option value={n.value} key={i}>
                  {n.title}
                </option>
              );
            })}
          </select>
          {/* <RiArrowDropDownLine className='text-3xl' onClick={()=> toggleNetwork()}/> */}
        </div>

        <div className="bg-gray-100 rounded-3xl flex items-center py-3 justify-between px-3">
          <input
            type="text"
            className="bg-gray-100 focus:outline-none"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Phone Number"
          />
          <TiContacts className="text-3xl text-primary" />
        </div>
        <div className="flex py-2 border-b-2 text-sm items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="font-medium mr-2 text-[24px]">₦</h1>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="50-50,000"
              className="py-1 w-2/3 text-lg focus:outline-none"
            />
          </div>
          <button
            disabled={!isValidInput || !isPhoneNumberValid}
            onClick={() => toggleConfirm()}
            className={`${
              isValidInput && isPhoneNumberValid
                ? "opacity-100"
                : "opacity-50 cursor-not-allowed"
            } px-7 py-1 rounded-3xl bg-primary text-white`}
          >
            Pay
          </button>
        </div>
        <span className="font-semimedium">Offers</span>
        <div className="grid grid-cols-3 gap-4 ">
          {airtimeOption.map((item: any, index: number) => (
            <div
              key={index}
              onClick={() => {
                setSelectedPrice(index);
                setInputValue(String(item.price));
              }}
              className={`relative flex flex-col gap-2 items-center text-center py-7 border-2 rounded-lg  ${
                selectedPrice === index
                  ? "border-green-400 border-2"
                  : "border-primary"
              }`}
            >
              {index === selectedPrice && (
                <div className="absolute -top-3 -right-3 bg-green-600 text-white rounded-full p-1">
                  <HiCheck />
                </div>
              )}
              <h2>₦{item.price}</h2>
            </div>
          ))}
        </div>
        <Link to={"/fund-wallet"} className="w-full">
          <img src={Banner} alt="Fund Banner" className="w-full" />
        </Link>
      </div>

      {confirm && (
        <ConfirmPayment
          setConfirm={toggleConfirm}
          network={network}
          amount={inputValue}
          phone={phoneNumber}
          setPinInput={togglePinInput}
        />
      )}
      {pinInput && <PinInput action={submit} setPinInput={togglePinInput} />}

      {isLoading && <Loader />}
    </div>
  );
}

export default buyAirtime;
