import React from "react";
import phcn from '../../../public/phcn.svg'
import ekedp from '../../../public/ekedp.svg'
import aedc from '../../../public/aedc.svg'
import { MdOutlineRadioButtonUnchecked, MdOutlineRadioButtonChecked } from "react-icons/md";



// Define a type for the keys
type Item = 'PHCN' | 'EKEDP' | 'AEDC';

// Define a type for the state object
type ItemState = {
  [key in Item]: boolean;
};


const electricityItem = ({}) =>  {
    
  


  const [electricityItem , setelectricityItem ] = React.useState<ItemState>({
    PHCN: false,
    EKEDP: false,
    AEDC: false,
  })

   


  const handleSelectElectricityItem = (selectedItem: Item) => {
    // Reset all networks to false, then set the selected network to true
        setelectricityItem({
        PHCN: false,
        EKEDP: false,
        AEDC: false,
        [selectedItem]: true,
        
        });
        

        
    }

  const electricityImage =[
    {
        image: phcn,
    
        
    },
    {
        image: ekedp,
    
        
    },
    {
        image: aedc,
        
    
    },
  ]
  return (
    <div className='absolute top-0 w-full left-0 h-screen flex flex-col justify-end z-20  bg-[rgba(0,0,0,0.4)]'>
      <div className='bg-white rounded-t-3xl w-full flex flex-col gap-6 px-5 py-8'>
        {Object.keys(electricityItem).map((item , index) =>(
            <div className='flex items-center' key={index} onClick={() => handleSelectElectricityItem(item as Item)}>
                <img src={electricityImage[index].image} alt="" />
                <h2 className='font-bold ml-2'>{item}</h2>
                <div className='ml-auto'>{electricityItem[item as Item] ? <MdOutlineRadioButtonChecked /> :<MdOutlineRadioButtonUnchecked />}</div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default electricityItem
