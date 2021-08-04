import React from 'react'
import NavBar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import MainSection from '../components/MainSection';
import Services from '../components/Services';
import Testominials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import dataService from '../data/dataServiceSection.json'
import dataTestimonials from '../data/dataTestimonials.json'


export default function Home({...props}) {
    return (
        <> 
            <NavBar></NavBar>
            <HeroSection heading="we are creatives"></HeroSection>
            <MainSection ></MainSection>
            <Services dataService={dataService}></Services>
            <Testominials dataTestimonials={dataTestimonials}></Testominials>
            <Gallery></Gallery>
            <Footer></Footer>
        </>

        
    )
}