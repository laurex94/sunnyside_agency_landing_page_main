import React from 'react'
import image1 from '../assets/desktop/image-gallery-milkbottles.jpg'
import image2 from '../assets/desktop/image-gallery-orange.jpg'
import image3 from '../assets/desktop/image-gallery-cone.jpg'
import image4 from '../assets/desktop/image-gallery-sugarcubes.jpg'

export default function Gallery(props) {
    return (
        <>
            <section className="flex flex-col md:flex-row">
                <img src={image1} className="w-full md:w-1/4"></img>
                <img src={image2} className="w-full md:w-1/4"></img>
                <img src={image3} className="w-full md:w-1/4"></img>
                <img src={image4} className="w-full md:w-1/4"></img>
            </section>
        </>
    )
}