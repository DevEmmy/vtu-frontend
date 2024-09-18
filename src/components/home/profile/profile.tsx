import React from 'react'
import curve from '../../../../public/Rectangle 49.png'
import Nav from '../nav'
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { CiEdit } from "react-icons/ci";
import userImg from '../../../../public/Ellipse 97.png'
import { TbUserEdit } from "react-icons/tb";
import { useUser } from '../../../hooks/Auth'

type ProfileTitle = 'email' | 'phone' | 'address'

function Profile() {

  // const profileTitle = ['Email' , 'Phone Number', 'Address']

  const [profile] = React.useState({
    // userName: 'Aisha',
    email: '123aisha@gmail.com',
    phone: '07076533245',
    address: 'No1 Adekola street Alimosho Lagos State'
  })

  const { user } = useUser();

  return (
    <div className='relative'>
      <div className='absolute w-full left-0 top-0 '>
        <img src={curve} alt="" className='w-full' />
      </div>
      <div className='relative px-3 py-5 flex flex-col gap-7 min-h-screen'>
  
        <Link to={"/home"} className='text-xl'>
          <FaArrowLeftLong />
        </Link>
  
        <div className='w-full flex flex-col items-center mt-24'>
          <img src={"https://static.vecteezy.com/system/resources/previews/026/966/960/original/default-avatar-profile-icon-of-social-media-user-vector.jpg"} className='w-[120px] h-[120px] rounded-full ' alt="" />
          <h1 className=' text-xl'>{user.firstName + " " + user.lastName}</h1>
        </div>
  
        <div className='flex flex-col gap-4 px-2'>
  
          <div className='flex justify-between items-center py-2'>
            <h2 className='font-bold'>First Name</h2>
            <p className='text-gray-500 max-w-[60%] text-right'>{user.firstName}</p>
          </div>
  
          <div className='flex justify-between items-center py-2'>
            <h2 className='font-bold'>Last Name</h2>
            <p className='text-gray-500 max-w-[60%] text-right'>{user.lastName}</p>
          </div>
  
          <div className='flex justify-between items-center py-2'>
            <h2 className='font-bold'>Email</h2>
            <p className='text-gray-500 max-w-[60%] text-right'>{user.email}</p>
          </div>
  
          <div className='flex justify-between items-center py-2'>
            <h2 className='font-bold'>Phone Number</h2>
            <p className='text-gray-500 max-w-[60%] text-right'>{user.phoneNumber || "please add phone number"}</p>
          </div>
  
          <div className='flex justify-between items-center py-2'>
            <h2 className='font-bold'>Address</h2>
            <p className='text-gray-500 max-w-[60%] text-right'>{user.address || "please add address"}</p>
          </div>
  
        </div>
  
        <div className='flex justify-center'>
          <Link to={'/profile-edit'} className='py-3 px-8 rounded-3xl bg-primary text-white flex items-center justify-center gap-2'>
            <TbUserEdit />
            <p>Edit Profile</p>
          </Link>
        </div>
  
      </div>
  
      <Nav dashboard={false} transaction={false} profile={true} settings={false} />
    </div>
  );
  
}

export default Profile
