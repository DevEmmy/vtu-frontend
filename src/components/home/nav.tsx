

import { LuLayoutDashboard } from "react-icons/lu";
import { IoReceiptOutline, IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

function nav() {
    const nav = [
        {
            img: <LuLayoutDashboard />,
            title: "Dashboard",
            link: '/'
        },
        {
            img: <IoReceiptOutline />,
            title: "Transactions",
            link: '/fund-wallet'
        },
        {
            img: <FaRegUser />,
            title: "Profile",
            link: '/fund-wallet'
        },
        {
            img: <IoSettingsOutline />,
            title: "Settings",
            link: '/fund-wallet'
        }
      ];
  return (
    <div className='py-6 px-4 flex justify-between bg-white max-w-[425px] w-full fixed bottom-0 z-50'>
      
        {nav.map((item, index)=>(
            <div key={index} className='w-20 text-2xl text-gray-400 flex flex-col items-center'>
                {item.img}
                <p className='text-xs'>{item.title}</p>
            </div>
        ))}
      
    </div>
  )
}

export default nav
