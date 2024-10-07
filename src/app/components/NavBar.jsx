'use client'
import React, { useState } from 'react';
import { motion, useScroll } from "framer-motion";
import profile from "../../../public/profile.jpeg";
import "../globals.css";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();

    // Animation variants for the menu items
    const menuItemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    // Animation for the mobile menu dropdown
    const menuVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: "auto", transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <div className="fixed top-0 w-full z-50">
            <div className="flex bg-[#252525] justify-between items-center py-4 px-8 border-b-[3px] border-white border-solid">
                <motion.div initial="hidden" animate="visible" variants={menuItemVariants} className='flex gap-2'>
                    <img src='./favicon.ico' className='h-12' />
                    <div className='flex flex-col'>
                        <h1 className="text-md font-bold text-white">Sarthak Nande</h1>
                        <h1 className='text-sm italic text-[#a2a2a2]'>Computer Science Student</h1>
                    </div>
                </motion.div>
                <div className="hidden md:block">
                    <ul className="flex space-x-4">
                        {["Home", "Blogs", "Services", "Hire Me"].map((item, index) => (
                            <motion.li
                                key={item}
                                initial="hidden"
                                animate="visible"
                                variants={menuItemVariants}
                                className="text-white cursor-pointer hover:text-[#AD88C6] transition-colors duration-300"
                            >
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            style={{ color: 'white' }}
                            animate={{ rotate: isMenuOpen ? 90 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </motion.svg>
                    </button>
                </div>
            </div>

            <motion.div
                className="md:hidden bg-[#252525]"
                initial="hidden"
                animate={isMenuOpen ? "visible" : "hidden"}
                variants={menuVariants}
            >
                <ul className="flex flex-col space-y-4 pb-3 ">
                    {["Home", "Blogs", "Services", "Hire Me"].map((item, index) => (
                        <motion.li
                            key={item}
                            className="ml-5 mt-5 text-white cursor-pointer"
                            variants={menuItemVariants}
                            initial="hidden"
                            animate={isMenuOpen ? "visible" : "hidden"}
                            transition={{ delay: 0.1 * index }}
                        >
                            {item}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

            <motion.div className="progress-bar" style={{ scaleX: scrollYProgress, background: "#ED7D31", height: "6px", position: "fixed", top: 78, left: 0, right: 0, zIndex: 100 }} />
        </div>
    );
}
