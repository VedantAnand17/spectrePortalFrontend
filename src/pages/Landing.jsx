import React, { useState } from 'react'
import VideoLoader from '../components/VideoLoader'

export default function Landing() {
    const [showLoader, setShowLoader] = useState(true)

    const handleLoadComplete = () => {
        setShowLoader(false)
    }

    if (showLoader) {
        return <VideoLoader onLoadComplete={handleLoadComplete} />
    }

    return (
        <div className='h-screen w-screen flex'>
            <img src="https://cdn.discordapp.com/attachments/1325497393680093194/1331298477623476365/Desktop_-_103_1.png?ex=67911bd3&is=678fca53&hm=adedca1ee90bdd62ec5ee5e62ef2a212596936b67680af4fa3d8ed225ccf9e37&" className='object-fill h-screen w-screen absolute' alt="" />
            <div className="flex h-screen w-screen items-center justify-center">
                <div className="absolute flex justify-around w-screen items-center font-semibold text-white">
                    <button className='bg-blue-800 p-3 rounded-3xl px-5 bg-opacity-85 hover:bg-opacity-100'>LOGIN</button>
                    <button className='bg-blue-800 p-3 rounded-3xl px-5 bg-opacity-85 hover:bg-opacity-100'>SIGN UP</button>
                </div>
            </div>
        </div>
    )
}