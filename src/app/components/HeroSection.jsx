"use client";
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import * as motion from "framer-motion/client";
import "../globals.css";
import Image from "next/image";

export default function HeroSection() {
  const words = ["Coding", "Designing", "Research", "WEB Dev"];

  return (
    <div className="m-2 mt-24 z-50 overflow-x-hidden">
      <div className="flex gap-2 max-md:flex-col max-md:gap-0 z-10">
        <motion.div
          className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full"
          initial={{ opacity: 0 }}  // Removed x animation
          animate={{ opacity: 1 }}  // Fade in effect
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col grow px-16 pt-20 pb-10 w-full bg-[#AD88C6] border-[3px] border-white border-solid rounded-[38px] max-md:px-5 max-md:mt-5 max-md:max-w-full">
            <motion.div
              className="text-5xl font-bold text-[#252525] max-md:max-w-full max-md:text-4xl"
              initial={{ opacity: 0 }}  // Removed y animation
              animate={{ opacity: 1 }}   // Fade in effect
              transition={{ duration: 1, delay: 0.2 }}
            >
              Hey, I’m Sarthak, Web Developer With Strong<br />
              <FlipWords words={words} /> Skills
            </motion.div>

            <motion.div
              className="mt-11 text-base text-justify text-black max-md:mt-10 max-md:max-w-full"
              initial={{ opacity: 0 }}  // Removed y animation
              animate={{ opacity: 1 }}   // Fade in effect
              transition={{ duration: 1, delay: 0.4 }}
            >
              I'm on a mission to bring innovation and creativity to the digital
              world. Whether it's building robust software or crafting stunning web
              experiences, I'm always eager to learn and push my boundaries.
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-5 justify-between self-start mt-44 max-md:mt-10"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}  
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                Hire Me
              </motion.button>

              <div className="flex gap-2.5 items-start my-auto">
                <motion.a
                  href="https://github.com/sarthu210"
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    loading="lazy"
                    width={42}
                    height={42}
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
                    className="shrink-0 mt-1 aspect-[1] w-[42px] bg-white p-1 rounded-lg"
                  />
                </motion.a>

                <motion.a
                  href="https://www.behance.net/sarthak_nande8"
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    loading="lazy"
                    width={42}
                    height={42}
                    src="https://cdn-icons-png.flaticon.com/512/4138/4138191.png"
                    className="shrink-0 mt-1 aspect-[1] w-[42px] h-[42px] bg-white p-1 rounded-lg"
                  />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/sarthak-nande/"
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    loading="lazy"
                    width={42}
                    height={42}
                    src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
                    className="shrink-0 mt-1 aspect-[1] w-[42px] bg-white p-1 rounded-lg"
                  />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full" 
          initial={{ opacity: 0 }} // Removed x animation
          animate={{ opacity: 1 }}  // Fade in effect
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="flex flex-col grow max-md:mt-5 max-md:max-w-full">
            <div className="px-16 py-11 chin-tapak-damdam bg-[#DD5746] border-[3px] border-white border-solid rounded-[38px] max-md:px-5 max-md:max-w-full">
              <div className="flex max-lg:flex-wrap max-lg:justify-center gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col max-lg:mr-8 w-[40%] max-md:ml-0 max-md:w-full">
                  <div className="shrink-0 bg-[url('https://lh3.googleusercontent.com/pw/AP1GczOnByMPnygha7szPjlNZyEXDv6cG_OuuyYOW86nb5WvNvTUI4DMoYLAvy9HPWlbHbQndg78zjjcuJHTtrSah4CsamhYUpNp5tBbRvdsLaLOM7chSA7H-n8B6rUqdP0T924ZcC3zq7f3jn7s8ARyCU-g=w791-h869-s-no-gm?authuser=0')] bg-cover mx-auto rounded-full border border-lime-100 border-[4px] border-solid h-[160px] stroke-[1px] w-[160px] max-md:mt-5" />
                </div>
                <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto text-lime-100 max-md:mt-10 lg:text-start text-center">
                    <div className="text-4xl text-bold font-bold">Sarthak Nande</div>
                    <div className="mt-3.5 text-lg ">
                      Computer Science Student
                    </div>
                    <div className="mt-1.5 text-xs ">
                      Web Developer | Java | JavaScript | Python | C | Data
                      Structure | UI/UX | Graphic Designer
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col px-12 pt-12 pb-10 mt-6 bg-[#E5C287] border-[3px] border-white border-solid rounded-[38px] max-md:px-5 max-md:max-w-full">
              <div className="text-5xl font-semibold text-neutral-800 max-md:max-w-full max-md:text-4xl">
                About Me
              </div>
              <div className="mt-11 text-justify text-neutral-800 text-base max-md:mt-10 max-md:max-w-full">
                👋 Hi there! I'm Sarthak Nande, a passionate Computer Science
                and Engineering student at SKN Sinhgad College of Engineering,
                Pandharpur. 🎓
                <br />
                🌐 In the web development realm, I'm well-versed in HTML, CSS,
                and JavaScript. I'm also comfortable with technologies like
                Node.js and React, which I use to craft dynamic and
                user-friendly web applications.
                <br />
                📚 Beyond coding, I'm a curious learner and a team player,
                always ready to collaborate on exciting projects. Let's connect
                and explore opportunities in the tech world!
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
