;
import check from '../../../public/green check.png'
import { FiUpload } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';
import { useFetchTransactionById } from '../../hooks/MakePayments';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const PaymentSuccess = () => {
  const navigate = useNavigate()
  const { transactionId } = useParams()

  const { transaction } = useFetchTransactionById(transactionId as string)
  
  const downloadReceipt = () => {
    const receiptElement = document.querySelector('.receipt') as HTMLElement;

    if (receiptElement) {
      html2canvas(receiptElement, {
        scale: 2, // Adjust the scale to reduce quality
        useCORS: true, // Enable cross-origin for external images
        allowTaint: true, // Allow tainted canvas
      }).then((canvas) => {
        const imgData = canvas.toDataURL('image/jpeg', 0.7); // Use JPEG with quality 0.7
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'pt',
          format: [receiptElement.offsetWidth, receiptElement.offsetHeight],
        });
        pdf.addImage(imgData, 'JPEG', 0, 0, receiptElement.offsetWidth, receiptElement.offsetHeight);
        pdf.save('receipt.pdf');
      });
    }
  };

  return (
    <>
      {
        transaction
        &&
        <div className="relative flex flex-col items-center justify-center gap-14 min-h-screen px-8 bg-primary">
          <div className='flex w-full'>
            <FiUpload className='text-white text-3xl ml-auto'  onClick={downloadReceipt}/>
          </div>


          <div className="bg-white rounded-lg p-2 w-[96%] ">
            <div className="receipt p-8">
            <div className="flex justify-center mb-4">
              <img src={check} alt="" />
            </div>
            <h2 className="text-center text-xl font-semimedium mb-2">Payment Success!</h2>
          
            <div className="flex flex-col gap-3 text-sm text-gray-600 mt-12 mb-4">
              <div className="grid justify-between">
                <span>Reference Number:</span>
                <span className=''>{transaction._id}</span>
              </div>
              <div className="flex justify-between">
                <span>Status</span>
                <span>{transaction.status}</span>
              </div>

              <div className="flex justify-between">
                <span>Date</span>
                <span>{new Date(transaction.createdAt).toLocaleDateString('en-GB')}</span>
              </div>
              <div className="flex justify-between">
                <span>Time</span>
                <span>{new Date(transaction.createdAt).toLocaleTimeString('en-GB')}</span>
              </div>

              <div className="flex justify-between">
                <span>{transaction.type} Purchase</span>
                <span className='uppercase'>{transaction.details.network}</span>
              </div>



              <div className="flex justify-between border-dashed border-y-2 py-3">
                <span>Amount</span>
                <span className="font-medium text-black">N {transaction.amount}.00</span>
              </div>
            </div>
            </div>

            <button
              onClick={downloadReceipt}
              className="w-[90%] mx-auto flex items-center justify-center mt-10 py-3 gap-2 border-black border text-black  rounded-3xl mb-4"
            >
              <MdOutlineFileDownload className='text-xl' />Get PDF Receipt
            </button>

          </div>

          <button onClick={() => navigate('/')} className="w-full bg-white text-primary py-3 rounded-3xl">
            Back to Dashboard
          </button>
        </div>
      }
    </>
  );
};

export default PaymentSuccess;

