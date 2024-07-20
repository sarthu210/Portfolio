'use client'
import React, { useState } from 'react';
import { motion,useScroll } from "framer-motion"
import "../globals.css"
export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();
  return( 
     <div className="fixed top-0 w-full z-50">
         <div className="flex bg-[#252525] justify-between items-center py-4 px-8 border-b-[3px] border-white border-solid">
            <div>
            <h1 className="text-2xl font-bold text-white">SPN</h1>
            </div>
            <div className="hidden md:block">
            <ul className="flex space-x-4">
                <li>
                <a href="#" className="text-white">Home</a>
                </li>
                <li>
                <a href="#" className="text-white">About</a>
                </li>
                <li>
                <a href="#" className="text-white">Services</a>
                </li>
                <li>
                <a href="#" className="text-white">Contact</a>
                </li>
            </ul>
            </div>
            <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                {isMenuOpen ? (
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    />
                ) : (
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                    />
                )}
                </svg>
            </button>
            </div>
        </div>
        {isMenuOpen && (
            <div className="md:hidden">
            <ul className="flex flex-col space-y-4">
                <li className='ml-5 mt-5'>
                <a href="#" className="text-white">Home</a>
                </li>
                <li className='m-5'>
                <a href="#" className="text-white">About</a>
                </li>
                <li className='m-5'>
                <a href="#" className="text-white">Services</a>
                </li>
                <li className='m-5'>
                <a href="#" className="text-white">Contact</a>
                </li>
            </ul>
            </div>
        )} 
        
        <motion.div className="progress-bar" style={{ scaleX: scrollYProgress, backgroundColor: "red", height: "6px", position: "fixed", top: 60, left: 0, right: 0, zIndex: 100 }} />
        
     </div> 
     )
  
}
