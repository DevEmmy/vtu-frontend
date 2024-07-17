
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { RiArrowLeftLine, RiLockPasswordFill} from 'react-icons/ri'
import { MdOutlineMail } from "react-icons/md";

function newAccount() {
  return (
    <div className='flex flex-col px-3 py-5 gap-9'>
            <RiArrowLeftLine className='text-xl'/>
            <div>
                <h1 className='font-bold text-3xl'>
                    Create Account
                </h1>
                <p className='text-sm'>Sign in to continue</p>
            </div>

            <div className='bg-pale px-4 py-2 rounded-3xl w-[100%] flex gap-5 justify-stretch'>

                <button className='text-primary bg-white rounded-2xl w-[100%] font-semibold'>Sign Up</button>
                
                <Link to={'/login'}>
                <button className='text-primary100 bg-pale border-white border-2 w-[120px]  rounded-2xl py-1 text-center'>Log In</button>
                </Link>
                
            </div>

            <form action="" className='auth'>
                <div>
                <MdOutlineMail />
                    <input type="email" placeholder='username' />
                </div>

                <div>
                    <RiLockPasswordFill />
                    <input type="password" placeholder='password' className=''/>
                </div>
            </form>

            <div className='flex justify-between items-center '>
                <div className='flex gap-2 text-sm'>
                    <input type="checkbox" className='' name="" id="" />
                    <p>Remember me</p>
                </div>

                <p className='text-primary text-sm'>Forgotten password?</p>
            </div>

            <button className='bg-primary text-white py-3 rounded-3xl'>Next</button>

            <div className='flex justify-center'>
                <p className='text-sm text-gray-500'>Or Sign In with</p>
            </div>

            <div className='flex justify-center'>
                <button className='flex items-center justify-center gap-1 border-2 py-2 px-4 rounded-3xl border-black'>
                 <FcGoogle className='text-2xl'/>
                 <p className='text-gray-500 text-sm'>Google</p>
                </button>
                

                
            </div>
            <p className='text-center text-sm'>Already have an account? <span className='text-primary'>Sign Up</span></p>
        </div>
  )
}

export default newAccount
