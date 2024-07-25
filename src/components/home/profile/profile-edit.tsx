import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import userImg from '../../../../public/Ellipse 97.png'
import { IoCameraOutline } from "react-icons/io5";

type ProfileTitle = 'userName' | 'email' | 'phone'| 'address'

function profileEdit() {
    const profileTitle = ['Fullname' , 'Email' , 'Phone Number', 'Address']

    const defaultProfile = {
        userName: 'Aisha Bello',
        email: '123aisha@gmail.com',
        phone: '07076533245',
        address: 'No1 Adekola street Alimosho Lagos State'
    }
    const [profile, setProfile] = React.useState(defaultProfile)
    const handleProfileChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setProfile(prevProfile => ({
          ...prevProfile,
          [name]: value
        }));
        console.log(profile);
        
        
      };

  return (
    <div className='relative px-3 py-5 flex flex-col gap-7 min-h-screen'>
        <Link to={"/home"} className='text-xl'>
            <FaArrowLeftLong />
        </Link>

        <h1 className='text-xl font-bold'>Edit Profile</h1>
        
        <div className='flex justify-center'>
            <div className='relative'>
                <img src={userImg} alt="" />
                <div className='w-[30px] h-[30px] text-lg flex justify-center items-center align-center rounded-full text-primary bg-white absolute bottom-0 right-0 z-10'>
                <IoCameraOutline />    
                </div>
                
            </div>
        </div>

        <div className='flex flex-col w-full gap-7'>
            {Object.keys(profile).map((item, index)=> (
                <div key={index} className='py-1 border-b border-primary'>
                    <p className='text-xs text-gray-500'>{profileTitle[index]}</p>
                    <input type="text" className='w-full focus:outline-none' name={item as ProfileTitle} defaultValue={profile[item as ProfileTitle]} onBlur={handleProfileChange} />
                </div>
            ))}
        </div>

        <div className='flex justify-center mt-10'>
            <Link to={'/profile'} className='text-white bg-primary py-3 px-8 rounded-3xl'>Save Changes</Link>
        </div>

    </div>
  )
}

export default profileEdit
