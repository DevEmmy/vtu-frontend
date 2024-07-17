
import { Link } from 'react-router-dom'

const OnB3 = () => {
    return (
        <div className='pb-3 flex flex-col '>
            <img src="./ob3.png" className='w-full mx-auto object-contain' alt="" />

            <div className="steps">
                <div className="line !bg-white !opacity-100" />
                <div className="line !bg-white !opacity-100" />
                <div className="line !bg-white !opacity-100" />
            </div>

            <div className="onboarding_container">

                <p className='text-[22px] font-bold'>Explore Key Features</p>
                <p className='text-sm'>
                    Buy data bundles and airtime for any network, Pay electricity and other utility bills, services like GOtv.
                </p>

                <Link to={"/login"} className='w-full'>
                    <button className=' bg-primary text-white font-semibold py-3 px-10 w-full rounded-full'>
                        Login
                    </button>
                </Link>

                <Link to={"/new-account"}>
                    <button className='border border-primary text-primary font-semibold py-3 px-10 w-full rounded-full'>
                        Sign up
                    </button>
                </Link>

                


            </div>
        </div>
    )
}

export default OnB3