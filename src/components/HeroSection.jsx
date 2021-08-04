import React from 'react'
import ArrowIcon from '../assets/icon-arrow-down.svg'
import heroDesktop from '../assets/desktop/image-header.jpg'
import heroPhone from '../assets/mobile/image-header.jpg'


export default function HeroSection(props) {
    return (
        <div className="h-full relative">
            <div>
            <img src={heroDesktop} className="hidden md:block"/>
            <img src={heroPhone} className="md:hidden"/>
            </div>
            <div className="absolute text-white font-mono uppercase z-10 top-0 w-full h-full flex flex-col justify-center -mt-4 sm:-mt-10 md:-mt-10 lg:-mt-20 xl:-mt-32">
                {props.heading && <h1 className="mx-auto text-center text-4xl sm:text-5xl xl:text-6xl my-0 sm:my-20 md:my-0 lg:my-10 xl:my-16"> {props.heading}</h1>}
                <img src={ArrowIcon} className=" mx-auto my-4 w-7 md:w-3 lg:w-4 xl:w-6"/>
            </div>
        </div>
    )
}