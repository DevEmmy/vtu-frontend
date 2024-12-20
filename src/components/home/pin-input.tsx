
import React from "react";
import { HiOutlineBackspace } from 'react-icons/hi';
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Loader from "../Loader";


interface ConfirmPaymentProps {
  setPinInput?: Function | null;
  action?: Function | null;
}

const pinInput: React.FC<ConfirmPaymentProps> = ({ setPinInput, action }) =>{
    const [password, setPassword] = React.useState('');
    // const [isTrue, setIsTrue] = React.useState(false)

    const navigate = useNavigate()

  const handleNumberClick = (num: string) => {
    if (password.length < 4) {
      setPassword(password + num);
    }
  };

  const handleBackspace = () => {
    setPassword(password.slice(0, -1));
  };


  const handleSubmit = () => {
    setPinInput()
    if (password.length === 4) {
      setPassword(password)
      action(password)
      // navigate('/successful')
    }
  };
  return (
    <div className='absolute bottom-0 w-full left-0 h-full flex flex-col justify-end z-20  bg-[rgba(0,0,0,0.4)]'>

    
    <div className='bg-white w-full py-8 pt-14 rounded-t-3xl px-5 text-center'>
      <div className='relative flex justify-center items-center'>
        <h1 className='font-medium text-2xl'>Confirm to pay</h1>
        <IoMdClose className='absolute right-0 text-2xl' onClick={()=>setPinInput()}/>
      </div>
        
        <p className='text-sm text-gray-500 py-2 pb-7'>Please enter your 4 digit pin to continue</p>
        <div className="flex justify-center gap-8 mb-6">
            {Array.from({ length: 4 }).map((_, index) => (
                <input
                key={index}
                type="password"
                value={password[index] || ''}
                readOnly
                className="w-11 h-11 rounded-xl border-2 border-gray-300 text-center text-xl focus:outline-none focus:border-primary"
                />
            ))}
            </div>
            <div className="grid grid-cols-3 gap-2 mb-4">
            {Array.from({ length: 9 }, (_, i) => i + 1).map(num => (
                <button
                key={num}
                onClick={() => handleNumberClick(num.toString())}
                className="w-full h-8 text-xl p-2"
                >
                {num}
                </button>
            ))}
            <button
                onClick={() => handleNumberClick('0')}
                className="w-full h-9 text-xl col-start-2 col-end-3 p-2"
            >
                0
            </button>

            <button className='w-full h-9 text-xl flex justify-center' onClick={handleBackspace}>
            <HiOutlineBackspace className='mt-3'/>   
            </button>

            

            </div>
            <button
            onClick={handleSubmit}
            className="w-full py-3 bg-blue-500 text-white rounded-lg"
            >
            Make Payment
            </button>
        </div>
    </div>
  )
}

export default pinInput
