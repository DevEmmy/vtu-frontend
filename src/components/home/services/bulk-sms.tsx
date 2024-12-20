import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { TiContacts } from "react-icons/ti";
import BulkSmsSuccessful from '../bulk-sms-successful';

function BulkSms() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber && message) {
      setIsSubmitted(true);  // Show the BulkSmsSuccessful component
    }
  };

  return (
    <div className='px-3 py-5 flex flex-col gap-9 min-h-screen'>
      <Link to={"/"} className='text-xl'>
        <FaArrowLeftLong />
      </Link>
      <h1 className='text-xl font-medium'>Bulk SMS</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
        <div className='bg-gray-100 rounded-3xl flex items-center py-3 justify-between px-3'>
          <input
            type="text"
            placeholder='Phone Number'
            className='bg-gray-100 focus:outline-none py-1'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TiContacts className='text-2xl text-primary' />
        </div>

        <div className='border-b-2 pb-3'>
          <textarea
            className='w-full focus:outline-none'
            placeholder='Type your message here'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={!phoneNumber || !message}
          className={`text-white text-center font-semimedium py-3 bg-primary rounded-3xl ${
            !phoneNumber || !message ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
          }`}
        >
          Confirm
        </button>
      </form>

      {isSubmitted && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <BulkSmsSuccessful phoneNumber={phoneNumber}/>
        </div>
      )}
    </div>
  );
}

export default BulkSms;
