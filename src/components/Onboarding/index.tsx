import React, { useEffect, useState } from 'react'
import SplashScreen from './SplashScreen';
import OnB1 from './OnB1';
import OnB2 from './OnB2';
import OnB3 from './OnB3';

const Onboarding = () => {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{setShowSplash(false)}, 3000)
    }, [])

    const [screen, setScreens] = useState(0)

    const next = ()=>{
        setScreens(screen+1)
    }

    const onboardingScreens = [
        <OnB1 next={next}/>, <OnB2 next={next} />, <OnB3 />
    ]
    
  return (
    <div className='h-[100vh]'>
        {
                showSplash 
            ?
                <SplashScreen />
            :
                <>
                    {onboardingScreens[screen]}
                </>

        }
    </div>
  )
}

export default Onboarding