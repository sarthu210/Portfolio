import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

export default function SmallCards({ short, link, heading, bgcolor }) {
  return (
    <div className="flex flex-row gap-3 w-fit h-[100px] border-white border-[3px] p-4 rounded-[30px] shadow-lg" style={{backgroundColor: bgcolor}}>
    <div className="">
        <div className="rounded-full p-[12px] border-black border-[3px] h-16 w-16 bg-white"><p className="text-black font-bold text-2xl text-center">{short}</p></div>
    </div>
    <div className="flex flex-nowrap flex-col gap-1">
      <h1 className="text-2xl text-nowrap font-bold text-black">{heading}</h1>
      <LinkPreview url={link} className="text-black underline">View Project</LinkPreview>
    </div>
    </div>
  );
}