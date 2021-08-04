import React from 'react'


export default function Services({dataService}) {

    return (
        <>
            <section className="flex flex-col md:flex-row" id="services">
            {dataService.map((data, i) => (
                <div className="w-full md:w-1/2 relative" key={i}>
                    <img  src={require(`../assets/desktop${data.mobile}`).default} className="md:hidden w-full h-full"/>
                    <img src={require(`../assets/desktop${data.desktop}`).default} className="hidden md:block w-full h-full"/>
                    <div className="absolute z-10 top-1/2 sm:top-2/3 w-full p-5 sm:px-28 md:px-8 lg:px-20 xl:px-36 2xl:px-48 -mt-1 sm:-mt-7 md:-mt-14 text-center text-very-dark-desaturated-blue">
                        <h2 className="font-mono sm:text-2xl mb-1" >{data.title}</h2>
                        <span className="font-serif sm:text-lg md:text-base lg:text-lg">{data.body}</span>
                    </div>
                    </div>
                        ))}
            </section>
        </>
    )
}