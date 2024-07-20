import React from 'react'
import curve from '../../../../public/Rectangle 49.png'
import Nav from '../nav'
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from 'react-icons/fa6'
import userImg from '../../../../public/Ellipse 97.png'
import { TbUserEdit } from "react-icons/tb";

type ProfileTitle = 'userName' | 'email' | 'phone'| 'address'

function profile() {

    const profileTitle = ['Username' , 'Email' , 'Phone Number', 'Address']

    const [profile, setProfile] = React.useState({
        userName: 'Aisha',
        email: '123aisha@gmail.com',
        phone: '07076533245',
        address: 'No1 Adekola street Alimosho Lagos State'
    })
  return (
    <div className='relative'>
      <div className='absolute w-full left-0 top-0 '>
        <img src={curve} alt="" />
      </div>
    <div className='relative px-3 py-5 flex flex-col gap-7 min-h-screen'>

        <Link to={"/home"} className='text-xl'>
            <FaArrowLeftLong />
        </Link>

        <div className='w-full flex flex-col items-center mt-24'>
            <img src={userImg} className='w-[80px]' alt="" />
            <h1 className='font-bold text-2xl'>Aisha Bello</h1>
        </div>

        <div className='flex flex-col gap-4'>
            {Object.keys(profile).map((item, index)=>(
              <div key={index} className='flex justify-between items-center py-2'>
                <h2 className='font-bold'>{profileTitle[index]}</h2>
                <p className='text-gray-500 max-w-[60%] text-right'>{profile[item as ProfileTitle]}</p>
            </div>  
            ))}
        </div>

        <div className='flex justify-center'>
            <Link to={'/profile-edit'} className='py-3 px-8 rounded-3xl bg-primary text-white flex items-center justify-center gap-2'>
                <TbUserEdit />
                <p>Edit Profile</p>
            </Link>
        </div>

        
    </div>

    <Nav dashboard={false} transaction={false} profile={true} settings={false}/>
    </div>
  )
}

export default profile
