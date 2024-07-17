
import { RiArrowLeftLine, RiLockPasswordFill, RiUser2Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si"

{/* <div className='p-3'>
            <RiArrowLeftLine className='text-black'/>
            <div className='flex flex-col gap-3 items-center  my-20 w-full h-[100vh] text-start'>
                <div className='w-full'>
                    <p className='text-[40px] w-full'>Welcome Back</p>
                    <p>Log in to continue</p>
                </div>

                <form action="" className='auth'>
                    <div>
                        <RiUser2Fill />
                        <input type="text" placeholder='username' />
                    </div>

                    <div>
                        <RiLockPasswordFill />
                        <input type="text" placeholder='username' />
                    </div>
                </form>

                <div className='flex justify-between items-center'>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <p>Remember me</p>
                    </div>

                    <p>Forgotten password</p>
                </div>
            </div>
        </div> */}
const Login = () => {
    return (
        <div className='flex flex-col px-3 py-5 gap-9'>
            <RiArrowLeftLine className='text-xl'/>
            <div>
                <h1 className='font-bold text-3xl'>
                    Welcome back
                </h1>
                <p className='text-sm'>Log in to continue</p>
            </div>

            <div className='bg-pale px-4 py-2 rounded-3xl w-[100%] flex gap-5 justify-stretch'>
                <Link to={'/new-account'}>
                <button className='text-primary100 bg-pale border-white border-2 w-[120px]  rounded-2xl py-1 text-center'>Sign Up</button>
                </Link>
                
                <button className='text-primary bg-white rounded-2xl w-[100%] font-semibold'>Log In</button>
                
            </div>

            <form action="" className='auth'>
                <div>
                    <RiUser2Fill />
                    <input type="text" placeholder='username' />
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
             
             <Link to={'/security'}>
                <button className='bg-primary text-white py-3 rounded-3xl w-full'>Next</button>
             </Link>


            <div className='flex justify-center'>
                <p className='text-sm text-gray-500'>Or Log In with</p>
            </div>

            <div className='grid grid-cols-3 gap-3'>
                <button className='flex items-center justify-center gap-1 border-2 py-2 rounded-3xl border-black'>
                 <FcGoogle className='text-2xl'/>
                 <p className='text-gray-500 text-sm'>Google</p>
                </button>
                <button className='flex items-center justify-center gap-1 border-2 py-2 rounded-3xl border-black'>
                <FaSquareXTwitter className='text-2xl'/>
                <p className='text-gray-500 text-sm'>X</p>
                </button>
                <button className='flex items-center justify-center gap-1 border-2 py-2 rounded-3xl border-black'>
                <SiFacebook className='text-2xl text-blue-700'/>
                <p className='text-gray-500 text-sm'>Facebook</p>
                </button>

                
            </div>
            <p className='text-center text-sm'>Already have an account? <span className='text-primary'>Sign Up</span></p>
        </div>
    )
}

export default Login

