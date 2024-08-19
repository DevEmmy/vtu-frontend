
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from 'react-icons/fa6';
import { RiArrowDropDownLine } from 'react-icons/ri';
import img1 from '../../../public/trans1.png'
import img2 from '../../../public/trans2.png'
import img3 from '../../../public/trans3.png'
import img4 from '../../../public/trans4.png'
import Nav from './nav'
import { useAllTransactions } from '../../hooks/MakePayments';
import Each from '../Transaction/Each';




function transactions() {

  const { transactions } = useAllTransactions()

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


  return (
    <>


      <div className='px-3 py-5 flex flex-col gap-7 min-h-screen'>
        <Link to={"/home"} className='text-xl'>
          <FaArrowLeftLong />
        </Link>

        <h1 className='text-xl font-bold'>Transactions</h1>

        <div>
          <div className='flex items-center'>
            <h3 className='font-semibold'>Jun</h3>
            <RiArrowDropDownLine className='text-3xl' />
          </div>

          <div className='flex py-2 border-b-2 gap-3'>
            <div className='font-light'>
              <h4>In <span className='font-semibold'>$500,000</span></h4>
            </div>
            <div className='font-light'>
              <h4>Out <span className='font-semibold'>$500,000</span></h4>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-5 py-1 w-full'>
          {transactions?.map((item: any, index: number) => (
            <Each item={item} key={index} />
          ))}
        </div>

      </div>
      <Nav transaction={true} dashboard={false} profile={false} settings={false} />

    </>
  )
}

export default transactions
