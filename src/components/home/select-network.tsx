import React from "react";
import airtel from '../../../public/Airtel.png'
import mtn from '../../../public/MTN.png'
import mobile9 from '../../../public/9Mobile.png'
import { MdOutlineRadioButtonUnchecked, MdOutlineRadioButtonChecked } from "react-icons/md";

interface ValueProp{
  networkValue: Function
  setIsNetwork: Function
}

// Define a type for the keys
type Network = 'MTN' | 'Airtel' | 'Mobile9';

// Define a type for the state object
type NetworkState = {
  [key in Network]: boolean;
};


const selectNetwork: React.FC<ValueProp> = ({ networkValue, setIsNetwork }) =>  {



  const [network, setNetwork] = React.useState<NetworkState>({
    MTN: false,
    Airtel: false,
    Mobile9: false,
  })

   


  const handleSelectNetwork = (selectedNetwork: Network) => {
    // Reset all networks to false, then set the selected network to true
        setNetwork({
        MTN: false,
        Airtel: false,
        Mobile9: false,
        [selectedNetwork]: true,
        
        });
        
        networkValue(Object.keys(network).find(item => network[item as Network] ) || '')
        setIsNetwork((prev: any) =>!prev)

        
    }

  const networkType =[
    {
        image: mtn,
        name: 'MTN',
        
    },
    {
        image: airtel,
        name: 'Airtel',
        
    },
    {
        image: mobile9,
        name: '9Mobile',
    
    },
  ]
  return (
    <div className='absolute top-0 w-full left-0 h-screen flex flex-col justify-end z-20  bg-[rgba(0,0,0,0.4)]'>
      <div className='bg-white rounded-t-3xl w-full flex flex-col gap-6 px-5 py-8'>
        {Object.keys(network).map((item , index) =>(
            <div className='flex items-center' onClick={() => handleSelectNetwork(item as Network)}>
                <img src={networkType[index].image} alt="" />
                <h2 className='font-bold ml-2'>{networkType[index].name}</h2>
                <div className='ml-auto'>{network[item as Network] ? <MdOutlineRadioButtonChecked /> :<MdOutlineRadioButtonUnchecked />}</div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default selectNetwork
