import React from 'react'
import { HiOutlinePrinter } from 'react-icons/hi2';
import { IoChatbubblesOutline, IoSchoolOutline } from 'react-icons/io5';
import { RiExchangeDollarFill } from 'react-icons/ri';
import { TbMobiledata } from 'react-icons/tb';
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { SiHostinger } from "react-icons/si";
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';

function services() {
    const service = [
        {
            img: <IoChatbubblesOutline />,
            title: "Bulk SMS",
              link: '/bulk-sms'
        },
        {
            img: <TbMobiledata />,
            title: "Smile Data",
              link: '/smile-data'
        },
        {
            img: <HiOutlinePrinter />,
            title: "Recharge Printing",
              link: '/fund-wallet'
        },
        {
            img: <RiExchangeDollarFill />,
            title: "Airtime to Cash",
              link: '/fund-wallet'
        },
        {
            img: <IoSchoolOutline /> ,
            title: "Educational Pin",
              link: '/fund-wallet'
        },
        {
            img: <PiTelevisionSimpleBold />,
            title: "TV Subscription",
              link: '/fund-wallet'
        },
        {
            img: <SiHostinger />,
            title: "Domain and Hosting",
              link: '/fund-wallet'
        }
      ];
  return (
    <div className='px-3 py-5 flex flex-col gap-7 min-h-screen'>
        <Link to={"/home"} className='text-xl'>
            <FaArrowLeftLong />
        </Link>

        <h1 className='text-xl font-bold'>Services</h1>

        <div className='grid grid-cols-4'>
          {service.map((item, index) =>(
            <Link to={item.link} className='flex flex-col items-center w-20' key={index}>
              <div key={index} className='flex flex-col items-center justify-center text-2xl  h-10'>
                {item.img}
                
              </div>
              <p className='text-xs text-center'>{item.title}</p>
            </Link>
          
        ))}
        </div>

        
      
    </div>
  )
}

export default services
