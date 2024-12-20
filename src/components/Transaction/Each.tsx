import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../../public/trans1.png'
import formatPrice from '../../utils/formatPrice'

const Each = ({item}: any) => {
    const networks: any = {
        airtel: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6AHxf9mMpw6z397F9gKm1gTa6jDSpdFnrQ&s",
        mtn: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/New-mtn-logo.jpg/800px-New-mtn-logo.jpg",
        glo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPqW5FMofwQFCldGdwL8X5v_AF1MeBGMk_A&s",
        "9mobile": "https://dayoabiola.com/wp-content/uploads/2017/07/Etisalat_Logo_Crop_3_tets_46f86-300x261.jpg"
    }

    let [color, setColor] = useState("");
    const date = new Date(item.createdAt).toLocaleDateString('en-GB')
    const time = new Date(item.createdAt).toLocaleTimeString('en-GB')

    useEffect(()=>{
        switch (item.status) {
            case "PENDING":
                setColor("orange")
                break;

            case "SUCCESS":
                setColor("green")
                break;

            case "FAILED":
                setColor("red")
                break;
        
            default:
                break;
        }
    }, [item])

    return (
        <Link to={`/reciept/${item._id}`}>
            <div className='flex w-full items-center'>
                <img src={networks[item.details?.network] || "https://static.vecteezy.com/system/resources/thumbnails/004/896/073/small/money-top-up-on-mobile-phone-device-or-smartphone-concept-illustration-flat-design-eps10-graphic-element-for-icon-infographic-empty-state-app-or-web-ui-vector.jpg"} alt="" className='w-[50px] h-[50px] rounded-full' />
                <div className='flex flex-col ml-2'>
                    <h1 className='font-semimedium'>{item.type}</h1>
                    
                    <p 
                    style={{color: color}}
                    className='text-xs'>{item.status}</p>
                    <p className='text-xs text-gray-400'>{date} at {time}</p>
                </div>
                <h2 className='ml-auto font-medium'>₦{formatPrice(item.amount)}</h2>
            </div>
        </Link>
    )
}

export default Each