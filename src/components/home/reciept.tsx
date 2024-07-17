;
import check from '../../../public/green check.png'
import { FiUpload } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
    const navigate = useNavigate()
  return (
    <div className="relative flex flex-col items-center justify-center gap-14 min-h-screen px-8 bg-primary">
        <div className='flex w-full'>
           <FiUpload className='text-white text-3xl ml-auto'/> 
        </div>
      
        
      <div className="bg-white rounded-lg p-8 w-80">
        <div className="flex justify-center mb-4">
          <img src={check} alt="" />
        </div>
        <h2 className="text-center text-xl font-semibold mb-2">Payment Success!</h2>
        <div className="w-[100%]  py-2 absolute left-0 flex justify-between px-[40px] items-center text-gray-500">
            <div className='w-[20px] h-[20px] bg-primary rounded-full'></div>
            <div>---------------------------------------------------</div>
            <div className='w-[20px] h-[20px] bg-primary rounded-full'></div>
        </div>
        <div className="flex flex-col gap-3 text-sm text-gray-600 mt-12 mb-4">
          <div className="flex justify-between">
            <span>Reference Number</span>
            <span>000085752257</span>
          </div>
          <div className="flex justify-between">
            <span>Date</span>
            <span>Mar 22, 2023</span>
          </div>
          <div className="flex justify-between">
            <span>Time</span>
            <span>07:80 AM</span>
          </div>
          <div className="flex justify-between">
            <span>Data Purchase</span>
            <span>MTN</span>
          </div>
          <div className="flex justify-between border-dashed border-y-2 py-3">
            <span>Amount</span>
            <span className="font-bold text-black">$50.00</span>
          </div>
        </div>
        <button className="w-full flex items-center justify-center mt-10 gap-2 border-black border text-black py-2 rounded-3xl mb-4">
        <MdOutlineFileDownload className='text-xl'/>Get PDF Receipt
        </button>
        
      </div>
      <button onClick={()=>navigate('/home')} className="w-full bg-white text-primary py-2 rounded-3xl">
          Back to Dashboard
      </button>
    </div>
  );
};

export default PaymentSuccess;

