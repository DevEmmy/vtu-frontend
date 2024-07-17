
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import ConfirmPayment from './confirm-payment';
import PinInput from './pin-input'
import BillType from './bill-type'

function payBills() {
    const [confirm, setConfirm] = React.useState(false)
    const toggleConfirm = () =>{
        if (isValidInput) {
            setConfirm(prev => !prev)
        }
        
    } 

    const [billType, setBillType] = React.useState('')
    const [pinInput, setPinInput] = React.useState(false)
    const togglePinInput = () =>{
        setPinInput(prev => !prev)
    } 

    const [isBillType, setIsBillType] = React.useState(false)
    const toggleNetwork = () =>{
        setIsBillType(prev => !prev)
    } 

    const [inputValue, setInputValue] = React.useState('');

    const handleInputChange = (e: { target: { value: any; }; }) => {
      const value = e.target.value;
      // Only allow valid numbers or an empty string
      if (value === '' || /^\d+$/.test(value)) {
        setInputValue(value);
      }
    };
  
    const isValidInput = inputValue !== '' && /^\d+$/.test(inputValue);
  return (
    <div className={`px-3 py-5 w-[100%] relative flex flex-col gap-7 min-h-screen`}>
      <Link to={"/home"} className='text-xl'>
            <FaArrowLeftLong />
        </Link>

        <h1 className='text-xl font-bold'>Buy Airtime</h1>

        <div className='flex flex-col gap-5'>
            <div className='bg-gray-100 rounded-3xl flex items-center py-3 justify-between px-3'>
                <input type="text" className='bg-gray-100 focus:outline-none py-1' placeholder='Bill type' value={billType}/>
                <RiArrowDropDownLine onClick={()=> toggleNetwork()} className='text-3xl' />
            </div>

            <div className='bg-gray-100 rounded-3xl flex items-center py-3 justify-between px-3'>
                <input type="text" className='bg-gray-100 focus:outline-none py-1' placeholder='Biller'/>
                <RiArrowDropDownLine className='text-3xl' />
            </div>

            <div className='bg-gray-100 rounded-3xl flex items-center py-3 justify-between px-3'>
               <input type="text" className='bg-gray-100 focus:outline-none py-1' placeholder='Payment Item'/>
            </div>

            <div className='bg-gray-100 rounded-3xl flex items-center py-3 justify-between px-3'>
               <input type="text" className='bg-gray-100 focus:outline-none py-1' placeholder='Meter Number/Account Number'/>
            </div>
        </div>
        <div className='flex py-2 border-b-2 text-sm items-center'>
                <h1 className='font-bold mr-2'>$</h1>
                <input type="text" value={inputValue} onChange={handleInputChange} placeholder='Enter Amount' className='py-1 text-lg focus:outline-none'/>
                <button onClick={() => toggleConfirm()} className={`${isValidInput ? 'opacity-100' : 'opacity-50 cursor-not-allowed'} px-7 py-1 rounded-3xl ml-auto bg-primary text-white`}>
                    Pay
                </button>
            </div>

            {isBillType && <BillType billValue={setBillType} setIsBillType={setIsBillType}/>}
        {confirm && <ConfirmPayment setConfirm={toggleConfirm} setPinInput={togglePinInput}/>}

        {pinInput && <PinInput setPinInput={togglePinInput}/>}
    </div>
  )
}

export default payBills
