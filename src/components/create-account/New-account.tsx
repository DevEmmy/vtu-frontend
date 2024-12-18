import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { RiArrowLeftLine, RiLockPasswordFill, RiUser2Fill } from 'react-icons/ri';
import { MdOutlineMail } from 'react-icons/md';
import { useSignUp } from '../../hooks/Auth';

function NewAccount() {
  // Define state for email, password, and rememberMe checkbox
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const {signUpFn, isError, isLoading} = useSignUp();

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    signUpFn({email, password, firstName, lastName})
    
  };

  return (
    <div className='flex flex-col px-3 py-5 gap-9'>
      <RiArrowLeftLine className='text-xl' />
      <div>
        <h1 className='font-bold text-3xl'>Create Account</h1>
        <p className='text-sm'>Sign in to continue</p>
      </div>

      <div className='bg-pale px-4 py-2 rounded-3xl w-full flex gap-5 justify-stretch'>
        <button className='text-primary bg-white rounded-2xl w-full font-semibold'>
          Sign Up
        </button>

        <Link to={'/login'}>
          <button className='text-primary100 bg-pale border-white border-2 w-[120px] rounded-2xl py-1 text-center'>
            Log In
          </button>
        </Link>
      </div>

      <form onSubmit={handleSubmit} className='auth'>
      <div className='flex items-center gap-2'>
          <MdOutlineMail />
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
          <RiUser2Fill />
          <input
            type='text'
            placeholder='First Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className='w-full'
          />
        </div>

        <div className='flex items-center gap-2'>
          <RiUser2Fill />
          <input
            type='text'
            placeholder='Last Name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
          Next
        </button>
      </form>

      {/* <div className='flex justify-center'>
        <p className='text-sm text-gray-500'>Or Sign In with</p>
      </div> */}

      {/* <div className='flex justify-center'>
        <button className='flex items-center justify-center gap-1 border-2 py-2 px-4 rounded-3xl border-black'>
          <FcGoogle className='text-2xl' />
          <p className='text-gray-500 text-sm'>Google</p>
        </button>
      </div> */}

      <p className='text-center text-sm'>
        Already have an account?{' '}
        <span className='text-primary cursor-pointer'>Sign Up</span>
      </p>
    </div>
  );
}

export default NewAccount;
