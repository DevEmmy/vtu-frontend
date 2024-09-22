import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import ConfirmTvPayment from '../confirm-tv-payment';
import PinInput from '../pin-input';
import { useScrollTop } from '../../../hooks/use-scroll-top';

function TvSubscription() {
  const isScrolled = useScrollTop();
  const [TV, setTV] = React.useState('gotv');
  const [smartcardNumber, setSmartcardNumber] = React.useState('');
  const [confirm, setConfirm] = React.useState(false);
  const [pinInput, setPinInput] = React.useState(false);
  const [selectedPackage, setSelectedPackage] = React.useState(null); 

  const toggleConfirm = () => {
    if (smartcardNumber !== '') {
      setConfirm((prev) => !prev);
    }
  };

  const togglePinInput = () => {
    setPinInput((prev) => !prev);
  };

  const TVType = [
    { title: 'GOTV', value: 'gotv' },
    { title: 'DSTV', value: 'dstv' },
    { title: 'Startimes', value: 'startimes' },
  ];

  const gotvOffers = [
    {
      package: 'SUPA',
      price: '15,700',
      color: `bg-[#B501B8]`,
      description: `Get your front-row seat to the Premier League with Supa+. GOtv Supa+ has a full house of entertainment including a dedicated PL channel, more for movie lovers, plus entertainment boost for kids.`,
    },
    {
      package: 'SUPA',
      price: '9,600',
      color: `bg-[#1E90FF]`,
      description: `Enjoy premium local shows with Supa-TV. GOtv Supa offers sport, telenovela, kids' channels, and more.`,
    },
    {
      package: 'MAX',
      price: '7,200',
      color: `bg-[#930033]`,
      description: `GOtv Max provides a wide range of sport, movies, series, and the latest local stories, all at great value.`,
    },
  ];

  const dstvOffers = [
    {
      package: 'Premium',
      price: '21,000',
      color: `bg-[#003399]`,
      description: `Enjoy the best of DSTV with exclusive sports, movies, series, and international channels.`,
    },
    {
      package: 'Compact Plus',
      price: '14,250',
      color: `bg-[#009900]`,
      description: `Affordable entertainment with sports and movies for the whole family.`,
    },
    {
      package: 'Compact',
      price: '9,900',
      color: `bg-[#FF4500]`,
      description: `A variety of entertainment, sports, and news channels at an affordable rate.`,
    },
    {
      package: 'Family',
      price: '6,200',
      color: `bg-[#FFD700]`,
      description: `Great family-friendly entertainment at a budget-friendly price.`,
    },
    {
      package: 'Access',
      price: '2,000',
      color: `bg-[#8B0000]`,
      description: `Basic entertainment, news, and sports for a minimal subscription fee.`,
    },
  ];

  // Dynamically choose offers based on the selected biller
  const offers = TV === 'dstv' ? dstvOffers : gotvOffers;

  const handlePackageSelect = (pkg) => {
    if (smartcardNumber !== '') {
      setSelectedPackage(pkg); // Store selected package
      toggleConfirm();
    }
  };

  return (
    <div className={`px-3 py-5 w-[100%] relative flex flex-col gap-7 min-h-screen`}>
      <div
        className={`transition-all duration-500 ease-in-out bg-white fixed w-full top-0 p-3 ${isScrolled ? 'flex items-center z-20 gap-1 p-2' : 'block'}`}
      >
        <Link to="/" className="text-xl">
          <FaArrowLeftLong />
        </Link>
        <h1 className='text-xl font-bold'>TV Subscription</h1>
      </div>

      <div className='flex flex-col gap-5 mt-20'>
        <div className='bg-gray-100 rounded-3xl flex items-center py-3 justify-between px-3'>
          <select className='bg-gray-100 w-full focus:outline-none' value={TV} onChange={(e) => setTV(e.target.value)}>
            {TVType.map((n, i) => (
              <option value={n.value} key={i}>
                {n.title}
              </option>
            ))}
          </select>
        </div>

        <div className='py-2 border-b-2'>
          <input
            type="text"
            placeholder='Smartcard Number'
            value={smartcardNumber}
            onChange={(e) => setSmartcardNumber(e.target.value)}
            className='w-full focus:outline-none placeholder:text-gray-300'
          />
        </div>
      </div>

      <div className='flex items-center'>
        <div className='relative flex flex-col-reverse items-center'>
          <h3 className='font-semibold'>Offers</h3>
          <div className='w-[40%] absolute border-b-2 border-primary'></div>
        </div>
      </div>

      <div className='flex flex-col gap-6'>
        {offers.map((item, index) => (
          <div
            key={index}
            className={`${item.color} px-4 py-6 flex flex-col gap-2 text-white ${
              smartcardNumber.length < 6 ? 'opacity-90 cursor-not-allowed' : ''
            }`}
            onClick={() => handlePackageSelect(item)} 
          >
            <div className='flex items-center justify-between'>
              <div>
                <h1 className='text-2xl font-bold'>{TV.toUpperCase()}</h1>
                <p className='font-semibold text-xl'>{item.package}</p>
              </div>
              <div className='px-3 py-1 text-primary bg-white font-bold'>
                NGN{item.price}
              </div>
            </div>
            <div>
              <p className='text-sm'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {confirm && <ConfirmTvPayment setConfirm={toggleConfirm} setPinInput={togglePinInput} biller={TV} smartcardNumber={smartcardNumber} amount={selectedPackage?.price}/>}

      {pinInput && <PinInput setPinInput={togglePinInput} />}
    </div>
  );
}

export default TvSubscription;

