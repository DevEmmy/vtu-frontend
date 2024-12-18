import { useState } from 'react';
import { RiArrowLeftLine, RiLockPasswordFill, RiUser2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { SiFacebook } from 'react-icons/si';
import { useLogin } from '../../hooks/Auth';

const Login = () => {
  // Define state for email, password, and rememberMe checkbox
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

    const {loginFn, isError, isLoading} = useLogin()

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      loginFn({email, password})
      
    };
  

  return (
    <div className='flex flex-col px-3 py-5 gap-9'>
      <RiArrowLeftLine className='text-xl' />
      <div>
        <h1 className='font-bold text-3xl'>Welcome back</h1>
        <p className='text-sm'>Log in to continue</p>
      </div>

      <div className='bg-pale px-4 py-2 rounded-3xl w-full flex gap-5 justify-stretch'>
        <Link to={'/new-account'}>
          <button className='text-primary100 bg-pale border-white border-2 w-[120px] rounded-2xl py-1 text-center'>
            Sign Up
          </button>
        </Link>

        <button className='text-primary bg-white rounded-2xl w-full font-semibold'>
          Log In
        </button>
      </div>

      <form onSubmit={handleSubmit} className='auth'>
        <div className='flex items-center gap-2'>
          <RiUser2Fill />
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='w-full'
          />
        </div>

        <div className='flex items-center gap-2'>
          <RiLockPasswordFill />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='w-full'
          />
        </div>

        <div className='flex justify-between items-center'>
          <div className='flex gap-2 text-sm'>
            <input
              type='checkbox'
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className=''
            />
            <p>Remember me</p>
          </div>

          <p className='text-primary text-sm cursor-pointer'>
            Forgotten password?
          </p>
        </div>

        <button
          type='submit'
          className='bg-primary text-white py-3 rounded-3xl w-full mt-4'
        >
          {
            isLoading
            ?
            "Logging in"
            :
            "Log in"
          }
        </button>
      </form>
{/* 
      <div className='flex justify-center'>
        <p className='text-sm text-gray-500'>Or Log In with</p>
      </div>

      <div className='grid grid-cols-3 gap-3'>
        <button className='flex items-center justify-center gap-1 border-2 py-2 rounded-3xl border-black'>
          <FcGoogle className='text-2xl' />
          <p className='text-gray-500 text-sm'>Google</p>
        </button>
        <button className='flex items-center justify-center gap-1 border-2 py-2 rounded-3xl border-black'>
          <FaSquareXTwitter className='text-2xl' />
          <p className='text-gray-500 text-sm'>X</p>
        </button>
        <button className='flex items-center justify-center gap-1 border-2 py-2 rounded-3xl border-black'>
          <SiFacebook className='text-2xl text-blue-700' />
          <p className='text-gray-500 text-sm'>Facebook</p>
        </button>
      </div> */}

      <p className='text-center text-sm'>
        Already have an account?{' '}
        <span className='text-primary cursor-pointer'>Sign Up</span>
      </p>
    </div>
  );
};

export default Login;
