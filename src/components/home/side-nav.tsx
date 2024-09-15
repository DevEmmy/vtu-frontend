import { Link } from "react-router-dom";
import { TiTimes } from "react-icons/ti";
import { CiUser } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { IconType } from "react-icons";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlinePayments } from "react-icons/md";
import { MdOutlineCall } from "react-icons/md";
import { TbTransfer } from "react-icons/tb";
import { CiReceipt } from "react-icons/ci";
import { IoWalletOutline } from "react-icons/io5";
import { PiToolboxThin } from "react-icons/pi";

interface NavItem {
  title: string;
  link: string;
  icon: IconType;
}
interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideNav: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const navItems: NavItem[] = [
    { title: "Dashboard", link: "/home", icon: LuLayoutDashboard },
    { title: "Fund Wallet", link: "/fund-wallet", icon: IoWalletOutline },
    { title: "Transaction History", link: "/transactions", icon: CiReceipt },
    { title: "Buy Data", link: "/buy-data", icon: TbTransfer },
    { title: "Buy Airtime", link: "/buy-airtime", icon: MdOutlineCall },
    { title: "Pay Bills", link: "/pay-bills", icon: MdOutlinePayments },
    { title: "Services", link: "/services", icon: PiToolboxThin },
  ];
  const AccNavItems: NavItem[] = [
    { title: "Profile", link: "/profile", icon: CiUser },
    { title: "Settings", link: "/settings", icon: IoSettingsOutline },
  ];
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full w-5/6 bg-white z-50 shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col bg-[#C0E0FF] justify-between items-center p-4">
          <button onClick={toggleNav} className="absolute text-2xl right-2">
            <TiTimes className="text-blue-400" />
          </button>
          <img src="./LOGO.svg" alt="VTU Logo" />
        </div>

        <div className="p-4 flex flex-col justify-evenly items-start w-full gap-3 mt-2">
          <sub>Go To</sub>
          {navItems.map((item, index) => (
            <div
              key={index}
              className="py-1 w-5/6 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Link
                to={item.link}
                className="w-full py-1 flex items-center gap-2 justify-between"
              >
                <div className="flex gap-1">
                  <item.icon className="w-6 h-6" />
                  <span>{item.title}</span>
                </div>
                <FaAngleRight />
              </Link>
            </div>
          ))}
        </div>
        <div className="p-4 flex flex-col justify-evenly items-start w-full gap-3">
          <sub>Account</sub>
          {AccNavItems.map((item, index) => (
            <div
              key={index}
              className="py-1 w-5/6 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Link
                to={item.link}
                className="w-full  py-2 flex items-center gap-2 justify-between"
              >
                <div className="flex gap-1">
                  <item.icon className="w-6 h-6" />
                  <span>{item.title}</span>
                </div>
                <FaAngleRight className="font-thin" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleNav}
        ></div>
      )}
    </>
  );
};

export default SideNav;
