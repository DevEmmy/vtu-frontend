import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import switchOn from '../../../../public/switch-on.svg'
import switchOff from '../../../../public/switch-off.svg'
import { CgProfile } from "react-icons/cg";
import { PiTipJar } from "react-icons/pi";

function notificationSettings() {
      // Initialize state variables
  const [var1, setVar1] = React.useState(false);
  const [var2, setVar2] = React.useState(false);

  // Handler functions to toggle the state
  const toggleVar1 = () => setVar1(prevVar1 => !prevVar1);
  const toggleVar2 = () => setVar2(prevVar2 => !prevVar2);

    const settings = [
        {
            icon: <CgProfile />,
            title: 'Profile Visibility',
            imgState: var1,
            function: toggleVar1
            
        },
        {
            icon: <PiTipJar />,
            title: 'Show Account Balance',
            imgState: var2,
            function: toggleVar2
        },
    ]
  return (
    <div className='relative px-3 py-5 flex flex-col gap-7 min-h-screen'>
        <Link to={"/settings"} className='text-xl'>
            <FaArrowLeftLong />
        </Link>

        <h1 className='text-xl font-medium'>Privacy Settings</h1>

        <div className='flex flex-col gap-4'>
            {settings.map((item, index) =>(
                <div key={index} className='flex items-center py-2' onClick={item.function}>
                    <div className='text-xl'>
                        {item.icon}
                    </div>
                    
                    <h2 className='ml-2'>{item.title}</h2>

                    <img src={item.imgState ? switchOn:switchOff} alt="" className='ml-auto'/>
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default notificationSettings
