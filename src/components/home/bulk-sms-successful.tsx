
import check from "../../../public/CHECK.png"
import { Link } from 'react-router-dom';

interface Props {
phoneNumber: string;
}
const BulkSmsSuccessful:React.FC<Props> = ({ phoneNumber }) => {

  return (
      <div className="flex flex-col justify-center gap-6 items-center bg-white px-5 w-full min-h-screen">
        <img src={check} alt="" />
        <h1 className="text-2xl font-bold mb-2">Successful</h1>
        
        <p className="text-gray-600 mb-6">Your message has been sent to: {phoneNumber}</p>
        <Link to={'/'}>
          <a href="#" className="text-blue-500 hover:underline">Back to Dashboard</a>
        </Link>
      </div>

  );


}

export default BulkSmsSuccessful
