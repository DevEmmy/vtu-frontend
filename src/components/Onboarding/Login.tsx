
import { RiArrowLeftLine, RiLockPasswordFill, RiUser2Fill } from 'react-icons/ri'

const Login = () => {
    return (
        <div className='p-3'>
            <RiArrowLeftLine />
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
        </div>
    )
}

export default Login