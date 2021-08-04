import {React, useState} from 'react'
import { HashLink, NavHashLink } from 'react-router-hash-link'
import { default as logo } from '../assets/logo.svg' 
import menuIcon from '../assets/icon-hamburger.svg'

const liNav = ['About', 'Services', 'Testimonials']

export default function NavBar({...otherProps}){
    // Usando hooks se bindea el estado de React con el ciclo de vida. 
    const [active, setActive] = useState(true);
    // se crea el manejador de eventos que mofidicara el estado inicial
    const onClick = () => {
        setActive(!active);
    }
    return (
        <div className="z-20 top-0 left-0 w-screen absolute px-6 md:px-0 py-3">
            <div className="relative flex p-5 md:px-10 items-center justify-between md:justify-around ">
                <img src={logo} className="w-auto md:w-1/5 md:-ml-10"></img>
                <img src={menuIcon} className="md:hidden " onClick={onClick}></img>
                <nav className={`${active && 'hidden'} absolute md:block md:static top-full left-0 -mx-1 sm:mx-0 bg-white md:bg-transparent w-full md:w-1/3 lg:w-1/4 z-20 rounded-md max-h-screen` }>
                    <ul className=" w-full md:w-auto md:flex md:flex-row p-4 md:p-0  text-grayish-blue md:text-white md:-ml-14">
                        <li className="mt-6 text-center md:mx-2 hover:text-dark-grayish-blue transition duration-500">
                            <HashLink smooth to={'page/#about'}>{liNav[0]}</HashLink>
                        </li>
                        <li className="mt-6 text-center md:mx-2 hover:text-dark-grayish-blue transition duration-500">
                            <HashLink smooth to="page/#services">{liNav[1]}</HashLink>
                        </li>
                        <li className="mt-6 text-center md:mx-2 hover:text-dark-grayish-blue transition duration-500">
                            <HashLink smooth to="page/#testimonials">{liNav[2]}</HashLink>
                        </li>
                        <li className="my-6 md:my-4 md:mx-2 block text-center"> 
                            <HashLink smooth to="page/#contact"><button className="uppercase bg-custom-yellow hover:border-white hover:bg-yellow-400 md:hover:bg-transparent border md:hover:border-white py-3 px-6 xl:px-10 rounded-full text-black font-mono text-sm transition duration-500">contact</button></HashLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}