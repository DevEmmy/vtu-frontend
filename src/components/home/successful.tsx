
import check from "../../../public/CHECK.png"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function successful() {
  const navigate = useNavigate()

  return (

      <div className="flex flex-col justify-center gap-6 items-center bg-white px-5 w-full min-h-screen">
        <img src={check} alt="" />
        <h1 className="text-2xl font-bold mb-2">Successful</h1>
        
        <p className="text-gray-600 mb-6">Your transaction has been successful</p>
        <button onClick={()=>{navigate('/reciept')}} className="bg-primary w-full text-white px-4 py-2 rounded-full mb-4 hover:bg-blue-600">
          View Receipt
        </button>
        <Link to={'/home'}>
          <a href="#" className="text-blue-500 hover:underline">Back to Dashboard</a>

        </Link>
      </div>

  );


}

export default successful
