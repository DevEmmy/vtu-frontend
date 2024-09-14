import { Link } from "react-router-dom";
import { TiTimes } from "react-icons/ti";
import { CiUser } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { IconType } from "react-icons";
import { LuLayoutDashboard } from "react-icons/lu";

interface NavItem {
  title: string;
  link: string;
  icon?: IconType;
}
interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideNav: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const navItems: NavItem[] = [
    { title: "Dashboard", link: "/home", icon: LuLayoutDashboard },
    { title: "Fund Wallet", link: "/fund-wallet" },
    { title: "Transaction History", link: "/transactions" },
    { title: "Buy Data", link: "/buy-data" },
    { title: "Buy Airtime", link: "/buy-airtime" },
    { title: "Pay Bills", link: "/pay-bills" },
    { title: "Bulk SMS", link: "/bulk-sms" },
    { title: "Smile Data", link: "/smile-data" },
    { title: "Recharge Printing", link: "/fund-wallet" },
    { title: "Airtime to Cash", link: "/fund-wallet" },
    { title: "Educational Pin", link: "/educational-pins" },
    { title: "TV Subscription", link: "/tv-subscription" },
    { title: "Domain and Hosting", link: "/fund-wallet" },
];
const AccNavItems: NavItem[] = [
      { title: "Profile", link: "/profile", icon: CiUser },
      { title: "Settings", link: "/settings", icon: IoSettingsOutline },
    
  ]
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col bg-[#C0E0FF] justify-between items-center p-4">
          <button onClick={toggleNav} className="absolute text-2xl right-2">
            <TiTimes className="text-blue-400"/>
          </button>
            <img src="./LOGO.svg" alt="VTU Logo"/>
        </div>

        <div className="p-2">
            <sub>Go To</sub>
          {navItems.map((item, index) => (
            <div
              key={index}
              className="py-1 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Link to={item.link} className="w-full px-4 flex items-center gap-2">
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="p-2">
            <sub>Account</sub>
          {AccNavItems.map((item, index) => (
            <div
              key={index}
              className="py-1 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Link to={item.link} className="w-full px-4 flex items-center gap-2">
              <item.icon />
                {item.title}
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
