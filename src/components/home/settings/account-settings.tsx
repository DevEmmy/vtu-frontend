
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { RiArrowDropRightLine } from "react-icons/ri";
import { IoMdLock } from "react-icons/io";
import { FaRegCreditCard } from "react-icons/fa6";

function accountSettings() {
    const settings = [
        {
            icon: <IoMdLock />,
            title: 'Change Password',
            link: '/change-password'
        },
    ]
  return (
    <div className='relative px-3 py-5 flex flex-col gap-7 min-h-screen'>
        <Link to={"/settings"} className='text-xl'>
            <FaArrowLeftLong />
        </Link>

        <h1 className='text-xl font-bold'>Account Settings</h1>

        <div className='flex flex-col gap-4'>
            {settings.map((item, index) =>(
                <Link key={index} className='flex items-center py-2' to={item.link}>
                    <div className='text-xl'>
                        {item.icon}
                    </div>
                    
                    <h2 className='ml-2'>{item.title}</h2>
                    <RiArrowDropRightLine  className='ml-auto text-3xl text-gray-500'/>
                </Link>
            ))}
        </div>
      
    </div>
  )
}

export default accountSettings
