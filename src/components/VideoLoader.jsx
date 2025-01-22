import React, { useState, useEffect } from 'react'

export default function VideoLoader({ onLoadComplete }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onLoadComplete()
        }, 6800) 

        return () => clearTimeout(timer)
    }, [onLoadComplete])

    return (
        <div className="fixed inset-0 w-screen h-screen bg-black">
            <video 
                className="w-full h-full object-cover"
                autoPlay 
                muted 
                playsInline
            >
                <source 
                    src="https://cdn.discordapp.com/attachments/1325497393680093194/1331300925884862506/WhatsApp_Video_2025-01-18_at_01.07.01_1243a6c3.mp4?ex=6791c6db&is=6790755b&hm=ba2fff0250339a834742e7bf2e5891e05c698f432d93295a6356eb98734a074e&" 
                    type="video/mp4" 
                />
            </video>
        </div>
    )
}