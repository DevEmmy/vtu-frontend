import React from 'react'
import { MdOutlineRadioButtonUnchecked, MdOutlineRadioButtonChecked } from "react-icons/md";


    type Item = 'WAEC' | 'NECO' | 'JAMB' | 'ICAN' | 'TOFEL' | 'SAT'
    type ItemState = {
        [key in Item]: boolean
    }

    interface FunctionProp{
        setPaymentItem: Function
      }
    

const educationalItems: React.FC<FunctionProp>  = ({}) =>  {
    
    const [educationalItems, seteducationalItems] = React.useState<ItemState>(  {
        WAEC : false,
        NECO: false,
        JAMB: false,
        ICAN: false,
        TOFEL: false,
        SAT: false,
    }  )
        const toggleState = (selected: Item) => {
            seteducationalItems({
                WAEC : false,
                NECO: false,
                JAMB: false,
                ICAN: false,
                TOFEL: false,
                SAT: false,
                [selected]: true
            })
        }
        
      return (
        <div className='absolute top-0 w-full left-0 h-screen flex justify-end flex-col z-20  bg-[rgba(0,0,0,0.4)]'>
            {/* <div className='w-full h-full' onClick={setPaymentItem((prev: any) =>!prev)}></div> */}
          <div className='bg-white rounded-t-3xl w-full flex flex-col gap-6 px-5 py-8' >
            {Object.keys(educationalItems).map((item , index) =>(
                <div className='flex py-2 justify-between items-center ' key={index} onClick={() => toggleState(item as Item)}>
                    {item}
                    {educationalItems[item as Item] ? <MdOutlineRadioButtonChecked /> :<MdOutlineRadioButtonUnchecked />}
                </div>
            ))}
          </div>
        </div>
      )
    
}

export default educationalItems
