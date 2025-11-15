import React, { useState } from 'react'


export default function Header(){
    const [open, setOpen] = useState(false)
        return (
    <header>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm flex justify-between items-center px-6 py-4 md:mx-8 md:mt-4 md:w-[calc(100%-4rem)] fade-up shadow-sm">
                <div id="navLinks" className={`hidden md:flex gap-6 text-sm text-gray-700`}>
                <a href="#about" className="hover:text-green-700">About</a>
                <a href="#news" className="hover:text-green-700">News</a>
                <a href="#services" className="hover:text-green-700">Services</a>
                <a href="#team" className="hover:text-green-700">Our Team</a>
                <a href="#contact" className="hover:text-green-700">Enquiry</a>
            </div>


            <a href="#contact" className="border border-gray-700 px-4 py-2 flex items-center gap-2 hover:bg-gray-100 text-sm md:text-base">
                Contact Us <span>→</span>
            </a>


            <button onClick={()=>setOpen(v=>!v)} className="md:hidden flex items-center justify-center w-10 h-10">
                <img src={`${import.meta.env.BASE_URL}images/menu%20icon.png`} alt="Menu" width="36" height="36" loading="lazy"/>
            </button>
        </nav>


        <div className={`fixed top-[64px] left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg flex flex-col items-center gap-4 py-6 text-gray-700 text-base font-medium transform ${open? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 md:hidden z-40`}>
            <a href="#about">About</a>
            <a href="#news">News</a>
            <a href="#services">Services</a>
            <a href="#team">Our Team</a>
            <a href="#contact">Make Enquiry</a>
        </div>
    </header>
)
}