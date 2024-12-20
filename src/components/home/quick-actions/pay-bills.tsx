import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import ConfirmBillPayment from "../confirm-bill-payment";
import PinInput from "../pin-input";
import BillType from "../bill-type";
import { HiCheck } from "react-icons/hi2";

function payBills() {
  const [confirm, setConfirm] = React.useState(false);
  const toggleConfirm = () => {
    if (isValidInput) {
      setConfirm((prev) => !prev);
    }
  };

  const [bill, setBill] = React.useState("phcn");
  const electricityBills = [
    { "title": "AEDC", "value": "abuja-electric" },
    { "title": "EKEDC", "value": "eko-electric" },
    { "title": "IBEDC", "value": "ibadan-electric" },
    { "title": "IKEDC", "value": "ikeja-electric" },
    { "title": "JEDplc", "value": "jos-electric" },
    { "title": "KAEDCO", "value": "kaduna-electric" },
    { "title": "KEDCO", "value": "kano-electric" },
    { "title": "PHED", "value": "portharcourt-electric" }
  ]
  

  const priceOption = [
    { price: 1000 },
    { price: 1500 },
    { price: 2000 },
    { price: 5000 },
    { price: 10000 },
  ];

  const [priceSelected, setPriceSelected] = React.useState<number | null>(null);

  const [pinInput, setPinInput] = React.useState(false);
  const togglePinInput = () => {
    setPinInput((prev) => !prev);
  };

  const [isBillType, setIsBillType] = React.useState(false);
  const toggleNetwork = () => {
    setIsBillType((prev) => !prev);
  };

  const [inputValue, setInputValue] = React.useState("");
  const [meterNumber, setMeterNumber] = React.useState("");

  const handleInputChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      setInputValue(value);
      setPriceSelected(null);
    }
  };

  const handleMeterNumberChange = (e: { target: { value: string } }) => {
    setMeterNumber(e.target.value);
  };

  const isValidInput = inputValue !== "" && /^\d+$/.test(inputValue);
  const isMeterNumberValid = meterNumber.trim() !== "";

  return (
    <div
      className={`px-3 py-5 w-[100%] relative flex flex-col gap-7 min-h-screen`}
    >
      <Link to={"/"} className="text-xl">
        <FaArrowLeftLong />
      </Link>

      <h1 className="text-xl font-medium">Pay Electricity Bills</h1>

      <div className="flex flex-col gap-5">
        <div className="bg-gray-100 rounded-3xl flex items-center py-3 justify-between px-3">
          <select
            className="bg-gray-100 w-full focus:outline-none"
            value={bill}
            onChange={(e) => {
              setBill(e.target.value);
            }}
          >
            {electricityBills.map((n, i) => {
              return (
                <option value={n.value} key={i}>
                  {n.title}
                </option>
              );
            })}
          </select>
        </div>

        <div className="bg-gray-100 rounded-3xl flex items-center py-3 justify-between px-3">
          <input
            type="text"
            className="bg-gray-100 focus:outline-none py-1"
            placeholder="Meter Number"
            value={meterNumber}
            onChange={handleMeterNumberChange}
          />
        </div>
      </div>
      <div className="flex py-2 border-b-2 text-sm items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="font-medium mr-2">₦</h1>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter Amount"
            className="py-1 w-2/3 text-lg focus:outline-none"
          />
        </div>
        <button
          onClick={() => toggleConfirm()}
          disabled={!isValidInput || !isMeterNumberValid}
          className={`${
            isValidInput && isMeterNumberValid
              ? "opacity-100"
              : "opacity-50 cursor-not-allowed"
          } px-7 py-1 rounded-3xl ml-auto bg-primary text-white`}
        >
          Pay
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 ">
        {priceOption.map((item: any, index: number) => (
          <div
            key={index}
            onClick={() => {
              setPriceSelected(index);
              setInputValue(String(item.price)); // Set the input value to the selected price
            }}
            className={`relative flex flex-col gap-2 items-center text-center py-7 border-2 rounded-lg  ${
              priceSelected === index
                ? "border-green-400 border-2"
                : "border-primary"
            }`}
          >
            {index === priceSelected && (
              <div className="absolute -top-3 -right-3 bg-green-600 text-white rounded-full p-1">
                <HiCheck />
              </div>
            )}
            <h2>₦{item.price}</h2>
          </div>
        ))}
      </div>
      {/* <button className="bg-primary rounded-lg p-4 text-white" onClick={() => toggleConfirm()}>
        Proceed to Payment
      </button> */}

      {confirm && (
        <ConfirmBillPayment
          setConfirm={toggleConfirm}
          amount={inputValue}
          setPinInput={togglePinInput}
          meterNumber={meterNumber}
          biller={bill}
        />
      )}

      {pinInput && <PinInput setPinInput={togglePinInput} />}
    </div>
  );
}

export default payBills;
