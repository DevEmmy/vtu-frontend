import React from 'react'
import { HiOutlineBackspace } from 'react-icons/hi2';
import check from "../../../../public/CHECK.png"
import img1 from '../../../../public/security1.png'
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';


function changePassword() {
    const [password, setPassword] = React.useState('');
    const prevPassword = '1111'
    const [isTrue, setIsTrue] = React.useState(false)
    const [isSuccessful, setIsSuccessful] = React.useState(false)

  const handleNumberClick = (num: string) => {
    if (password.length < 4) {
      setPassword(password + num);
    }
  };

  const handleBackspace = () => {
    setPassword(password.slice(0, -1));
  };


  const handleInitialSubmit = () => {
    if (password == prevPassword) {
        setPassword('')
        setIsTrue(true)
    }
  };

  const handleFinalSubmit = () =>{
    if (password.length === 4) {
        setPassword(password)
        setIsSuccessful(true)
    }
  }
  return (
    <div className={`flex flex-col px-3 py-5 gap-8 relative`}>
         <Link to={"/account-settings"} className='text-xl'>
            <FaArrowLeftLong />
        </Link>
        <div>
        <h2 className="text-3xl font-bold">Change Password</h2>
        <p className="">{isTrue ? 'Type in your new password':'Type in your previous password to continue'}</p>
        </div>
        
        <div className='w-[100%] flex justify-center'>
         <img src={img1} alt="" className='w-[60%]'/>            
        </div>

        
        <div className="flex justify-center gap-8 mb-6">
        {Array.from({ length: 4 }).map((_, index) => (
            <input
            key={index}
            type="password"
            value={password[index] || ''}
            readOnly
            className="w-14 h-14 rounded-xl border-2 border-gray-300 text-center text-xl focus:outline-none focus:border-primary"
            />
        ))}
        </div>
        <div className="grid grid-cols-3 gap-2 mb-4">
        {Array.from({ length: 9 }, (_, i) => i + 1).map(num => (
            <button
            key={num}
            onClick={() => handleNumberClick(num.toString())}
            className="w-full h-12 text-xl"
            >
            {num}
            </button>
        ))}
        <button
            onClick={() => handleNumberClick('0')}
            className="w-full h-12 text-xl col-start-2 col-end-3"
        >
            0
        </button>

        <button className='w-full h-12 text-xl flex justify-center' onClick={handleBackspace}>
         <HiOutlineBackspace className='mt-3'/>   
        </button>

        

        </div>
        <button
        onClick={isTrue? handleFinalSubmit:handleInitialSubmit}
        className="w-full py-2 bg-blue-500 text-white rounded-lg"
        >
        {isTrue? 'Change Password':'Enter'}
        </button>

        {isSuccessful && 
        <div className='absolute top-0 left-0 w-[100%] h-full z-10 flex flex-col justify-end bg-[rgba(0,0,0,0.4)]'>
            <div className=' bg-white py-20 px-3 rounded-t-2xl flex items-center flex-col gap-7'>
          <img src={check} alt="" />
          <h1 className='font-semibold text-xl'>Successful</h1>
          <p className='text-sm text-gray-500'>You have successfully changed your password</p>
          <Link to={"/account-settings"} className='w-full'>
              <button className='font-bold text-white bg-primary w-full py-2 rounded-3xl'>Done</button>
          </Link>
          
        </div>
        </div>
        
        }
      
    </div>
  )
}

export default changePassword
