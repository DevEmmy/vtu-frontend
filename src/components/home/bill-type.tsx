import React from "react";
import { MdOutlineRadioButtonUnchecked, MdOutlineRadioButtonChecked } from "react-icons/md";


type BillType = 'Electricity' | 'Water' | 'Rent';

type BillState = {
    [key in BillType]: boolean;
  };


const billType = () =>  {

    const [bill, setBill] = React.useState<BillState>({
        Electricity: false,
        Water: false,
        Rent:false
    })

    const toggleBill= (selectedBill: BillType) =>{
        setBill({
            Electricity: false,
            Water: false,
            Rent:false,
            [selectedBill]: true
        })
        
    }
  return (
    <div className='absolute top-0 w-full left-0 h-screen flex flex-col justify-end z-20  bg-[rgba(0,0,0,0.4)]'>
      <div className='bg-white rounded-t-3xl w-full flex flex-col gap-6 px-5 py-8'>
        {Object.keys(bill).map((item , ) =>(
            <div key={item} className="flex items-center justify-between" onClick={() => toggleBill(item as BillType)}>
               <h2 className='font-medium ml-2'>{item}</h2>
               <div className='ml-auto'>{bill[item as BillType] ? <MdOutlineRadioButtonChecked /> :<MdOutlineRadioButtonUnchecked />}</div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default billType
