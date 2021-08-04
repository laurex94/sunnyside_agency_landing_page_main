import React from 'react'

export default function Testominials ({dataTestimonials}) {
    return (
        <>
            <section className="h-full p-11 sm:px-32 sm:py-20 md:py-20 md:px-10 lg:px-14 2xl:mx" id="testimonials">
                <h2 className="uppercase text-xl sm:text-2xl md:text-2xl text-grayish-blue font-mono text-center tracking-widest md:mb-10">client testominials</h2>
                <div className="flex flex-col md:flex-row text-center lg:p-10 2xl:p-16">
                    {dataTestimonials.map((data,i) => (
                        <div className="w-full md:w-1/3 my-10 md:my-5 md:mx-5" key={i}>
                            <img src={require(`../assets${data.picture}`).default} className="rounded-full w-14 mx-auto mb-8"></img>
                            <p className="mb-8 text-very-dark-grayish-blue 2xl:px-10">
                            {data.body} 
                            </p>
                            <h3 className="text-xl text-very-dark-desaturated-blue font-mono mb-1">{data.name}</h3>
                            <h4 className="text-grayish-blue">{data.title}</h4>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}