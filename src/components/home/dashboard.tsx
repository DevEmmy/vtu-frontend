import { Link, useNavigate } from "react-router-dom";
import Nav from "./nav";
import userImg from "/Ellipse 97.png";
import { GoBell } from "react-icons/go";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { SiHostinger } from "react-icons/si";
import { CiMenuBurger } from "react-icons/ci";
import {
  IoEyeOutline,
  IoWalletOutline,
  IoReceiptOutline,
  IoChatbubblesOutline,
  IoSchoolOutline,
} from "react-icons/io5";
import { TbMobiledata } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";
import {
  RiExchangeDollarFill,
  RiEyeCloseLine,
  RiEyeLine,
} from "react-icons/ri";
import balance from "/BALANCE.png";
import frame from "/Frame 399.png";
import img1 from "/trans1.png";
import img2 from "/trans2.png";
import img3 from "/trans3.png";
import img4 from "/trans4.png";
import { useUser } from "../../hooks/Auth";
import { useAllTransactions } from "../../hooks/MakePayments";
import Each from "../Transaction/Each";
import useMonnify from "../../hooks/useMonnify";
import { useState, useEffect } from "react";
import formatPrice from "../../utils/formatPrice";
import SideNav from "./side-nav";
import Banner from "../../assets/BANNER.svg";


function dashboard() {
  const { transactions } = useAllTransactions();
  const { user } = useUser();
  const [hideBalance, setHideBalance] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const quickAction = [
    {
      img: <IoWalletOutline />,
      title: "Fund Wallet",
      link: "/fund-wallet",
    },
    {
      img: <TbMobiledata />,
      title: "Buy Data",
      link: "/buy-data",
    },
    {
      img: <BsTelephone />,
      title: "Buy Airtime",
      link: "/buy-airtime",
    },
    {
      img: <IoReceiptOutline />,
      title: "Pay Electricity Bills",
      link: "/pay-bills",
    },
  ];

  const service = [
    {
      img: <IoChatbubblesOutline />,
      title: "Bulk SMS",
      link: "/bulk-sms",
      external: false,
    },
    {
      img: <IoSchoolOutline />,
      title: "Educational Pin",
      link: "/educational-pins",
      external: false,
    },
    {
      img: <PiTelevisionSimpleBold />,
      title: "TV Subscription",
      link: "/tv-subscription",
      external: false,
    },
    {
      img: <SiHostinger />,
      title: "Domain and Hosting",
      link: "https://www.hostinger.com",
      external: true,
    },
  ];

  useEffect(() => {
    if (!user) {
      navigate("/on-boarding");
    }
  }, [user, navigate]);

  if (!user) {
    return null; 
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col items-center gap-5 p-3 relative pb-[100px]">
        <div className="flex w-full pt-3 items-center">
          <div className="mr-2">
            <img
              src={
                "https://static.vecteezy.com/system/resources/previews/026/966/960/original/default-avatar-profile-icon-of-social-media-user-vector.jpg"
              }
              alt=""
              className="w-[60px] h-[60px] rounded-full object-cover"
            />
          </div>
          <div>
            <h1 className="font-semibold ">Hi, {user.firstName}</h1>
            <p className="text-[0.65rem] sm:text-sm text-gray-400">
              welcome, let's make payments!
            </p>
          </div>
          <div className="ml-auto flex items-center">
            <CiMenuBurger
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>
        <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="flex flex-col items-center relative w-full">
          <img src={balance} alt="" className="z-10 w-full" />
          <img src={frame} alt="" className="-mt-2 w-full" />
          <div className="absolute z-30 w-full -mt-2 text-white h-full flex flex-col justify-center pl-6">
            <div className="flex items-center gap-3">
              <h3 className="text-lg text-gray-100 font-bold">
                Wallet Balance
              </h3>
              <p
                onClick={() => setHideBalance(!hideBalance)}
                className="cursor-pointer"
              >
                {!hideBalance ? <RiEyeLine /> : <RiEyeCloseLine />}
              </p>
            </div>
            <div className="flex text-2xl items-center gap-1 font-bold">
              <h1>
                ₦{hideBalance ? "****" : formatPrice(user.accountBalance)}
              </h1>
              {/* <IoEyeOutline /> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full gap-4">
          <div>
            <h1 className="font-bold ">Quick Action</h1>
          </div>
          <div className="flex justify-between ">
            {quickAction.map((item, index) => {
              return (
                <Link
                  to={item.link}
                  key={index}
                  className="flex flex-col max-w-[90px] text-center items-center"
                >
                  <div className="w-20 h-20 rounded-xl flex justify-center items-center text-2xl bg-pale text-primary hover:text-white  hover:bg-primary">
                    {item.img}
                  </div>
                  <p className="text-xs">{item.title}</p>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="flex justify-between ">
            <h1 className="font-bold ">Services</h1>
            <Link to={"/services"} className="text-xs text-primary">
              See More
            </Link>
          </div>
          <div className="flex justify-between">
          {service.map((item, index) =>
          item.external ? (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center w-20"
              key={index}
            >
              <div className="flex flex-col items-center justify-center text-2xl h-10">
                {item.img}
              </div>
              <p className="text-xs text-center">{item.title}</p>
            </a>
          ) : (
            <Link
              to={item.link}
              className="flex flex-col items-center w-20"
              key={index}
            >
              <div className="flex flex-col items-center justify-center text-2xl h-10">
                {item.img}
              </div>
              <p className="text-xs text-center">{item.title}</p>
            </Link>
          )
        )}
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="flex justify-between ">
            <h1 className="font-bold ">Transactions</h1>
            <Link to={"/transactions"} className="text-xs text-primary">
              View all
            </Link>
          </div>
          <div className="flex flex-col gap-2 py-3 w-full">
            {transactions?.map((item: any, index: number) => (
              <Each item={item} key={index} />
            ))}
          </div>
        </div>
        <Link to={"/fund-wallet"} className="w-full">
          <img src={Banner} alt="Fund Banner" className="w-full" />
        </Link>
      </div>
      <Nav
        dashboard={true}
        transaction={false}
        profile={false}
        settings={false}
      />
    </div>
  );
}

export default dashboard;
