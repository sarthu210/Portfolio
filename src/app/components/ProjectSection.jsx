'use client'
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./card/ProjectCard";
import SmallCards from "./card/SmallCards";
import "../globals.css";

export default function ProjectSection() {
  const projects = [
    {
      title: "Interactive Learning Platform",
      skills: ["Node.js", "React.js", "MongoDB", "Express.js", "Redux Toolkit", "Monaco Editor", "Passport.js", "Tailwind CSS"],
      description: "Developed an interactive learning platform using React, Vite, Node.js, Express.js, MongoDB, and Redux Toolkit. The platform features user authentication with Passport.js, a real-time collaborative code editor integrated with Monaco Editor, and AI-based assessment for personalized learning and feedback.",
      bg: "#FC5185",
      date: "15 April 2024",
      link: "https://github.com/sarthu210/interactive-learning-platfrom"
    },
    {
      title: "E-Gate Pass System",
      skills: ["Node.js", "React Native", "MongoDB", "Express.js", "Redux Toolkit", "JWT", "JavaScript", "CSS"],
      description: "The E-Gate Pass System is a comprehensive application designed to streamline gate pass requests for students and staff, utilizing React Native, Node.js, MongoDB, and Redux Toolkit. It features multi-level security and role-based access control, enabling efficient management of approvals from various authorities.",
      bg: "#3FC1C9",
      date: "20 Nov 2023",
      link: "https://github.com/sarthu210/E-GetPass"
    },
    {
      title: "Meet Registration",
      skills: ["Firebase", "React.js", "CSS", "HTML", "Javascript"],
      description: "Utilized Firebase Authentication UI and Database for meet-up registration for event and also user and comment for asking queries.",
      bg: "#FC5185",
      date: "1 OCT 2024",
      link: "https://github.com/sarthu210/Fire-Base-Meetup-Registration-"
    }
  ];

  const [readMore, setReadMore] = useState([false, false, false]);
  const [showArrow, setShowArrow] = useState(true);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(scrollContainerRef.current.scrollLeft === 0);
    };

    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleArrowClick = () => {
    scrollContainerRef.current.scrollBy({
      left: 200,
      behavior: 'smooth'
    });
  };

  const toggleReadMore = (index) => {
    setReadMore(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <>
      <div className="mt-5 flex flex-wrap justify-around p-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            skills={project.skills}
            description={
              readMore[index] ? (
                <p className="text-justify">
                  {project.description}
                  <span onClick={() => toggleReadMore(index)} className="underline">
                    {" "}show less
                  </span>
                </p>
              ) : (
                <p className="text-justify">
                  {project.description.slice(0, 100)}...
                  <span className="underline" onClick={() => toggleReadMore(index)}>
                    {" "}show more
                  </span>
                </p>
              )
            }
            bg={project.bg}
            date={project.date}
            link={project.link}
          />
        ))}
      </div>
      <div className="relative mt-5 gap-3 overflow-x-auto flex flex-row justify-around p-2 hide-scrollbar" ref={scrollContainerRef}>
        {showArrow && (
          <div className="scroll-arrow absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full" onClick={handleArrowClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        )}
        <SmallCards short={"A"} heading={"AI Text Summarizer"} bgcolor={"#3FC1C9"} link={"https://replit.com/@SarthakNande/AI-Text-Summarizer-App#index.js"} />
        <SmallCards short={"W"} heading={"Water Quality Monitoring"} bgcolor={"#FC5185"} link={"https://github.com/sarthu210/Water_Quality_Monitoring_Hackathon"} />
        <SmallCards short={"G"} heading={"Geolocation-based-QR-Code"} bgcolor={"#3FC1C9"} link={"https://github.com/sarthu210/Geolocation-based-QR-Code"} />
        <SmallCards short={"R"} heading={"Redux TODO"} bgcolor={"#FC5185"} link={"https://github.com/sarthu210/redux-todo"} />
        <SmallCards short={"A"} heading={"Anonymous Feed Back System"} bgcolor={"#3FC1C9"} link={"https://github.com/sarthu210/Geolocation-based-QR-Code"} />
        <SmallCards short={"S"} heading={"Speed Up API"} bgcolor={"#FC5185"} link={"https://github.com/sarthu210/speed-up-api"} />
        <SmallCards short={"F"} heading={"File Uploader"} bgcolor={"#3FC1C9"} link={"https://github.com/sarthu210/file_uploading"} />
      </div>
    </>
  );
}