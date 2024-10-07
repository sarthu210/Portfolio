'use client'
import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";
export default function ProjectCard(props) {
  
  return (
    <div className="mt-5">
      <div className="max-w-md overflow-hiddenrounded-lg border-white border-[3px] rounded-lg shadow-md " style={{backgroundColor: props.bg}}>
    <img className="object-cover w-full h-64 rounded-t-lg" src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article"/>

    <div className="p-6">
        <div>
            <span className="text-xs font-medium text-white uppercase bg-black p-1 border-r-4  ">Project</span>
            <p className="block mt-2 text-xl font-semibold text-black transition-colors " >{props.title}</p>
            {props.description}
        </div>

        <div className="mt-4">
          <span className="text-xs font-medium text-white uppercase bg-black p-1 border-r-4  ">Skills</span>
          {
  Array.isArray(props.skills) && props.skills.length > 0 ? (
    props.skills.map((skill, index) => (
      <span key={index} className="inline-block mt-2 mr-2 px-3 py-1 ml-1 text-xs font-semibold text-black bg-white rounded-full">
        {skill}
      </span>
    ))
  ) : (
    <span>No skills available</span>
  )
}
        </div>

        <div className="mt-4">
            <div className="flex gap-5 items-center">
                <div className="flex items-center">
                  <LinkPreview url={props.link}><button className="rounded-md border-[3px] border-black bg-white w-32 h-10 text-black font-semibold " tabindex="0" role="link">See More</button></LinkPreview>
                </div>
                <span className="mx-1 text-sm font-bold text-black">{props.date}</span>
            </div>
        </div>
      
    </div>
</div>
    </div>
  );
}
