import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import userImg from '../../../../public/Ellipse 97.png'
import { IoCameraOutline } from "react-icons/io5";
import { useUpdateProfile, useUser } from '../../../hooks/Auth';

type ProfileTitle = 'firstName' | 'lastName' | 'email' | 'phoneNumber' | 'address'

function profileEdit() {
    const profileTitle = ['First Name', "Last Name", 'Email', 'Phone Number', 'Address'];
    const router = useNavigate();

    const {user} = useUser();
    const {updateProfileFn, isLoading} = useUpdateProfile()

    const defaultProfile = {
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        phoneNumber: user.phoneNumber || '',
        address: user.address || '',  // Ensure address is included
    }

    const [profile, setProfile] = React.useState(defaultProfile)

    const handleProfileChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setProfile(prevProfile => ({
            ...prevProfile,
            [name]: value
        }));
    };

    return (
        <div className='relative px-3 py-5 flex flex-col gap-7 min-h-screen'>
            <Link to={"/home"} className='text-xl'>
                <FaArrowLeftLong />
            </Link>

            <h1 className='text-xl font-bold'>Edit Profile</h1>

            {/* <div className='flex justify-center'>
                <div className='relative'>
                    <img src={userImg} alt="" />
                    <div className='w-[30px] h-[30px] text-lg flex justify-center items-center align-center rounded-full text-primary bg-white absolute bottom-0 right-0 z-10'>
                        <IoCameraOutline />
                    </div>
                </div>
            </div> */}

            <div className='flex flex-col w-full gap-7'>
                {Object.keys(profile).map((item, index) => (
                    <div key={index} className='py-1 border-b border-primary'>
                        <p className='text-xs text-gray-500'>{profileTitle[index]}</p>
                        <input
                            type="text"
                            className='w-full focus:outline-none'
                            name={item as ProfileTitle}
                            defaultValue={profile[item as ProfileTitle]} 
                            onBlur={handleProfileChange}
                        />
                    </div>
                ))}
            </div>

            <div className='flex justify-center mt-10'>
                <button onClick={() => updateProfileFn(profile)} className='text-white bg-primary py-3 px-8 rounded-3xl'>
                    {isLoading ? 'Saving...' : 'Save Changes'}
                </button>
            </div>

        </div>
    )
}

export default profileEdit;
