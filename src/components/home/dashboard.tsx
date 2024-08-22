
import { Link } from 'react-router-dom';
import Nav from './nav'
import userImg from '../../../public/Ellipse 97.png'
import { GoBell } from "react-icons/go";
import { IoEyeOutline, IoWalletOutline, IoReceiptOutline, IoChatbubblesOutline } from "react-icons/io5";
import { TbMobiledata } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";
import { HiOutlinePrinter } from "react-icons/hi2";
import { RiExchangeDollarFill } from "react-icons/ri";
import balance from '../../../public/BALANCE.png'
import frame from '../../../public/Frame 399.png'
import img1 from '../../../public/trans1.png'
import img2 from '../../../public/trans2.png'
import img3 from '../../../public/trans3.png'
import img4 from '../../../public/trans4.png'
import { useUser } from '../../hooks/Auth';
import { useAllTransactions } from '../../hooks/MakePayments';
import Each from '../Transaction/Each';
import useMonnify from '../../hooks/useMonnify';

function dashboard() {
  
  
 

  const quickAction = [
    {
      img: <IoWalletOutline />,
      title: "Fund Wallet",
	  link: "/fund-wallet"
    },
    {
      img: <TbMobiledata />,
      title: "Buy Data",
      link: '/buy-data'
    },
    {
      img: <BsTelephone />,
      title: "Buy Airtime",
      link: '/buy-airtime'
    },
    {
      img: <IoReceiptOutline />,
      title: "Pay Electricity Bills",
      link: '/pay-bills'
    }
  ];

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
    }
  ];



  // const transactions = [
  //   {
  //     img: img1,
  //     title: "Top up Airtime",
  //     date: "June 20 2024",
  //     time: "10:00 AM",
  //     price: '-50.00'
  //   },
  //   {
  //     img: img4,
  //     title: "Funded Wallet",
  //     date: "June 20 2024",
  //     time: "02:00 PM",
  //     price: '+20000.00'
  //   },
  //   {
  //     img: img2,
  //     title: "Pay Bills",
  //     date: "June 20 2024",
  //     time: "11:00 AM",
  //     price: '-2000.00'
  //   },
  //   {
  //     img: img3,
  //     title: "Smile Data",
  //     date: "June 20 2024",
  //     time: "03:00 PM",
  //     price: '-200.00'
  //   },
  //   {
  //     img: img4,
  //     title: "Buy Data",
  //     date: "June 20 2024",
  //     time: "01:00 PM",
  //     price: '-500.00'
  //   }
  // ]

  const { transactions } = useAllTransactions()
  const { user } = useUser()


  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-col items-center gap-5 p-3 relative pb-[100px]'>
        <div className='flex w-full pt-3 items-center'>
          <div className='mr-2'>
            <img src={"https://static.vecteezy.com/system/resources/previews/026/966/960/original/default-avatar-profile-icon-of-social-media-user-vector.jpg"} alt="" className='w-[60px] h-[60px] rounded-full object-cover' />
          </div>
          <div>
            <h1 className='font-semibold '>Hi, {user.firstName}</h1>
            <p className='text-sm text-gray-400'>welcome, let's make payments!</p>
          </div>
          {/* <div className='ml-auto flex items-center'>
            <GoBell className='text-primary text-2xl' />
          </div> */}
        </div>

        <div className='flex flex-col items-center relative'>
          <img src={balance} alt="" className='z-10' />
          <img src={frame} alt="" className='-mt-2 ' />
          <div className='absolute z-30 w-full -mt-2 text-white h-full flex flex-col justify-center pl-6'>
            <h3 className='text-sm text-gray-100 font-bold'>Wallet Balance</h3>
            <div className='flex text-2xl items-center gap-1 font-bold'>
              <h1>₦{user.accountBalance}</h1>
              {/* <IoEyeOutline /> */}
            </div>
          </div>
        </div>

        <div className='flex flex-col w-full gap-4'>
          <div>
            <h1 className='font-bold '>Quick Action</h1>
          </div>
          <div className='flex justify-between '>
            {quickAction.map((item, index) =>{
              return (
               
                <Link to={item.link} key={index} className='flex flex-col max-w-[90px] text-center items-center'>
                <div className='w-20 h-20 rounded-xl flex justify-center items-center text-2xl bg-pale text-primary hover:text-white  hover:bg-primary'>
                  {item.img}
                </div>
                <p className='text-xs'>{item.title}</p>
              </Link>
             
              )
            } )}
          </div>
        </div>

        <div className='w-full flex flex-col gap-4'>
          <div className='flex justify-between '>
            <h1 className='font-bold '>Services</h1>
            <Link to={'/services'} className='text-xs text-primary'>See More</Link>
          </div>
          <div className='flex justify-between'>
            {service.map((item, index) => (
              <Link to={item.link} className='flex flex-col items-center w-20' key={index}>
                <div key={index} className='flex flex-col items-center justify-center text-2xl  h-10'>
                  {item.img}

                </div>
                <p className='text-xs text-center'>{item.title}</p>
              </Link>

            ))}
          </div>
        </div>

        <div className='w-full flex flex-col gap-4'>
          <div className='flex justify-between '>
            <h1 className='font-bold '>Transactions</h1>
            <Link to={'/transactions'} className='text-xs text-primary'>View all</Link>
          </div>
          <div className='flex flex-col gap-2 py-3 w-full'>

            {transactions?.map((item: any, index: number) => (
              <Each item={item} key={index}/>
            ))}
          </div>
        </div>





      </div>
      <Nav dashboard={true} transaction={false} profile={false} settings={false} />
    </div>
  )
}

export default dashboard
