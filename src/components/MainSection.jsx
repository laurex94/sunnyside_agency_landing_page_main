import React from 'react'
import mainImagenPhone1 from '../assets/mobile/image-transform.jpg'
import mainImagenDesktop1 from '../assets/desktop/image-transform.jpg'
import mainImagenPhone2 from '../assets/mobile/image-stand-out.jpg'
import mainImagenDesktop2 from '../assets/desktop/image-stand-out.jpg'

export default function MainSection() {
        



    return (
        <main className="w-full" id="about">
            <section className="flex flex-col md:flex-row-reverse">
                <div className="w-full md:w-1/2">
                    <img src={mainImagenPhone1} className="md:hidden w-full h-full"/>
                    <img src={mainImagenDesktop1} className="hidden md:block w-full h-full"/>
                </div>
                <div className="w-full md:w-1/2 p-10 sm:py-16 sm:px-14 md:py-20 md:px-16 lg:py-24 lg:px-20 xl:py-28 xl:px-24 2xl:py-32 2xl:px-28">
                    <h2 className="text-3xl sm:text-5xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-mono text-center md:text-left mb-5 sm:mb-10 md:mb-5 sm:px-10 md:px-0 2xl:px-5">Transform your brand</h2>
                    <p className="font-serif text-center md:text-left sm:text-xl md:text-base xl:text-xl 2xl:text-xl sm:px-10 md:px-0 2xl:mx-5 2xl:mt-10">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                    <a className="block font-mono uppercase text-center md:text-left mt-10 md:mt-8 2xl:mt-14 2xl:px-5"><span className="hover:border-b-4 hover:border-custom-yellow transition duration-500 ">Learn more</span></a>
                </div>
            </section>
            
            <section className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                    <img src={mainImagenPhone2} className="md:hidden w-full h-full"/>
                    <img src={mainImagenDesktop2} className="hidden md:block w-full h-full"/>
                </div>
                <div className="w-full md:w-1/2 p-10 sm:py-16 sm:px-14 md:py-20 md:px-16 lg:py-24 lg:px-20 xl:py-28 xl:px-24 2xl:py-32 2xl:px-24">
                    <h2 className="text-3xl sm:text-5xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-mono text-center md:text-left mb-5 sm:mb-10 md:mb-5 sm:px-10 md:px-0 2xl:px-5">Stand out to the right audience</h2>
                    <p className="font-serif text-center md:text-left sm:text-xl md:text-base xl:text-xl 2xl:text-xl sm:px-10 md:px-0 2xl:mx-5 2xl:mt-10">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                    <a className="block font-mono uppercase text-center md:text-left mt-10 md:mt-8 2xl:mt-14 2xl:px-5"><span className="hover:border-b-4 hover:border-soft-red transition duration-500 ">Learn more</span></a>
                </div>
            </section>
        </main>
    )
}

