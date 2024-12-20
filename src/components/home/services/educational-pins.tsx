import React from 'react';
import { FaArrowLeftLong, FaLock } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import EducationalItems from '../educational-item';
import ConfirmEduPayment from '../confirm-edu-payment';
import PinInput from '../pin-input';

function EducationalPins() {
  const [paymentItem, setPaymentItem] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('3400');
  const [pinInput, setPinInput] = React.useState(false);
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [biller, setBiller] = React.useState('WAEC Result PIN');
  const togglePaymentItem = () => {
    setPaymentItem((prev) => !prev);
  };

  const toggleConfirm = () => {
    if (isValidForm) {
      setConfirm((prev) => !prev);
    }
  };

  const togglePinInput = () => {
    setPinInput((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Only allow valid numbers or an empty string
    if (value === '' || /^\d+$/.test(value)) {
      setInputValue(value);
    }
  };

  const isValidForm = mobileNumber !== '' && /^\d+$/.test(inputValue);

  return (
    <div className={`px-3 py-5 w-[100%] relative flex flex-col gap-7 min-h-screen`}>
      <Link to={"/"} className='text-xl'>
        <FaArrowLeftLong />
      </Link>

      <h1 className='text-xl font-medium'>Educational Pins</h1>

      <div className='flex flex-col gap-5'>
        <div className='bg-gray-100 rounded-3xl flex items-center py-3 justify-between px-3'>
          <select value={biller} onChange={(e) => setBiller(e.target.value)} className='bg-gray-100 focus:outline-none py-1 w-full'>
            <option value="WAEC Result PIN">WAEC Result PIN</option>
          </select>
        </div>

        <div className='bg-gray-100 rounded-3xl flex items-center py-3 justify-between px-3'>
          <input
            type="text"
            className='bg-gray-100 focus:outline-none py-1 w-full'
            placeholder='Account Number'
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
      </div>

      <div className='flex py-2 border-b-2 text-sm items-center'>
      <div className="flex items-center gap-2">
        <h1 className='font-medium mr-2'>₦</h1>
        <div className='flex items-center text-gray-500'>
          <input
            type="text"
            value={inputValue}
            disabled
            className={`py-1 w-2/3 text-lg focus:outline-none bg-transparent`}
            onChange={handleInputChange}
          />
          <FaLock className='ml-2' />
      </div>
        </div>
        <button
          onClick={toggleConfirm}
          disabled={!isValidForm}
          className={`${isValidForm ? 'opacity-100' : 'opacity-50 cursor-not-allowed'} px-7 py-1 rounded-3xl ml-auto bg-primary text-white`}
        >
          Pay
        </button>
      </div>

      {paymentItem && <EducationalItems setPaymentItem={togglePaymentItem} />}
      {confirm && <ConfirmEduPayment setConfirm={toggleConfirm} setPinInput={togglePinInput} mobileNumber={mobileNumber} amount={inputValue} biller={biller}/>}
      {pinInput && <PinInput setPinInput={togglePinInput} />}
    </div>
  );
}

export default EducationalPins;
