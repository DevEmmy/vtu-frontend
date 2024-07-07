import React from 'react'

interface Props{
    next: ()=> void
}

const OnB2 = ({next}: Props) => {
    return (
        <div className='h-[100vh] flex flex-col '>
        <img src="./ob2.png" className='w-full mx-auto object-contain' alt="" />

        <div className="steps">
            <div className="line !bg-white !opacity-100" />
            <div className="line !bg-white !opacity-100" />
            <div className="line" />
        </div>

        <div className="onboarding_container">

            <p className='text-[22px] font-bold'>Explore Key Features</p>
            <p className='text-sm'>
            Buy data bundles and airtime for any network, Pay electricity and other utility bills, services like GOtv.
            </p>

            <button className=' bg-primary text-white font-semibold py-2 px-10 rounded-full' onClick={next}>
                Next
            </button>

            <p className='text-xs'>skip</p>
        </div>
    </div>
    )
}

export default OnB2