import React from "react";
import gotv from '../../../public/Gotv.svg'
import dstv from '../../../public/Dstv.svg'
import startime from '../../../public/startimes.svg'
import { MdOutlineRadioButtonUnchecked, MdOutlineRadioButtonChecked } from "react-icons/md";



// Define a type for the keys
type Item = 'DSTV' | 'GOTV' | 'Startime';

// Define a type for the state object
type ItemState = {
  [key in Item]: boolean;
};


const tvItem = ({}) =>  {

  


  const [TV, setTV] = React.useState<ItemState>({
    DSTV: false,
    GOTV: false,
    Startime: false,
  })

   


  const handleSelectTVItem = (selectedTVItem: Item) => {
    // Reset all networks to false, then set the selected network to true
        setTV({
        DSTV: false,
        GOTV: false,
        Startime: false,
        [selectedTVItem]: true,
        
        });
        

        
    }

  const tvImage =[
    {
        image: dstv,
    
        
    },
    {
        image: gotv,
    
        
    },
    {
        image: startime,
        
    
    },
  ]
  return (
    <div className='absolute top-0 w-full left-0 h-screen flex flex-col justify-end z-20  bg-[rgba(0,0,0,0.4)]'>
      <div className='bg-white rounded-t-3xl w-full flex flex-col gap-6 px-5 py-8'>
        {Object.keys(TV).map((item , index) =>(
            <div className='flex items-center' key={index} onClick={() => handleSelectTVItem(item as Item)}>
                <img src={tvImage[index].image} alt="" />
                <h2 className='font-bold ml-2'>{item}</h2>
                <div className='ml-auto'>{TV[item as Item] ? <MdOutlineRadioButtonChecked /> :<MdOutlineRadioButtonUnchecked />}</div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default tvItem
