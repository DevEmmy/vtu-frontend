import { HiOutlinePrinter } from "react-icons/hi2";
import {
  IoChatbubblesOutline,
  IoSchoolOutline,
  IoWalletOutline,
  IoReceiptOutline,
} from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { RiExchangeDollarFill } from "react-icons/ri";
import { TbMobiledata } from "react-icons/tb";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { SiHostinger } from "react-icons/si";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { toastInfo } from "../../../utils/toast";
function services() {
  const service = [
    {
      img: <IoWalletOutline />,
      title: "Fund Wallet",
      link: "/fund-wallet",
      external: false,
    },
    {
      img: <TbMobiledata />,
      title: "Buy Data",
      link: "/buy-data",
      external: false,
    },
    {
      img: <BsTelephone />,
      title: "Buy Airtime",
      link: "/buy-airtime",
      external: false,
    },
    {
      img: <IoReceiptOutline />,
      title: "Pay Electricity Bills",
      link: "/pay-bills",
      external: false,
    },
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

  const unavailableServices = [
    {
      img: <TbMobiledata />,
      title: "Smile Data",
      link: "/smile-data",
    },
    {
      img: <HiOutlinePrinter />,
      title: "Recharge Printing",
      link: "/fund-wallet",
    },
    {
      img: <RiExchangeDollarFill />,
      title: "Airtime to Cash",
      link: "/fund-wallet",
    },
  ];

  const onInfo = () => {
    toastInfo("This service is unavailable, coming soon.");
  };

  return (
    <div className="px-3 py-5 flex flex-col gap-7 min-h-screen">
      <Link to={"/"} className="text-xl">
        <FaArrowLeftLong />
      </Link>
      <h1 className="text-xl font-bold">Services</h1>
      <div className="grid grid-cols-4">
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
        {unavailableServices.map((item, index) => (
          <div
            key={index}
            onClick={onInfo}
            className="flex flex-col items-center w-20 opacity-50"
          >
            <div className="flex flex-col items-center justify-center text-2xl  h-10">
              {item.img}
            </div>
            <p className="text-xs text-center">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default services;
