

import { LuLayoutDashboard } from "react-icons/lu";
import { IoReceiptOutline, IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Prop{
    transaction: Boolean,
    dashboard: Boolean
    profile: Boolean
    settings: Boolean
}

const nav: React.FC<Prop> = ({ transaction, dashboard, profile, settings }) =>  {
    const nav = [
        {
            img: <LuLayoutDashboard />,
            title: "Dashboard",
            link: '/home',
            color: dashboard? 'text-primary' : 'text-gray-400'
        },
        {
            img: <IoReceiptOutline />,
            title: "Transactions",
            link: '/transactions',
            color: transaction ? 'text-primary' : 'text-gray-400'

        },
        {
            img: <FaRegUser />,
            title: "Profile",
            link: '/fund-wallet',
            color: profile ? 'text-primary' : 'text-gray-400'
        },
        {
            img: <IoSettingsOutline />,
            title: "Settings",
            link: '/fund-wallet',
            color: settings ? 'text-primary' : 'text-gray-400'
        }
      ];
  return (
    <div className='py-6 px-4 flex justify-between bg-white max-w-[425px] w-full fixed bottom-0 z-20'>
      
        {nav.map((item, index)=>(
            <Link to={item.link} key={index} className={`w-20 text-2xl ${item.color} flex flex-col items-center`}>
                {item.img}
                <p className='text-xs'>{item.title}</p>
            </Link>
        ))}
      
    </div>
  )
}

export default nav
