'use client'
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./card/ProjectCard";
import SmallCards from "./card/SmallCards";
import "../globals.css";

export default function ProjectSection() {
  const text1 = "Developed an interactive learning platform using React, Vite, Node.js, Express.js, MongoDB, and Redux Toolkit. The platform features user authentication with Passport.js, a real-time collaborative code editor integrated with Monaco Editor, and AI-based assessment for personalized learning and feedback.";
  const text2 = "HThe E-Gate Pass System is a comprehensive application designed to streamline gate pass requests for students and staff, utilizing React Native, Node.js, MongoDB, and Redux Toolkit. It features multi-level security and role-based access control, enabling efficient management of approvals from various authorities.";
  const text3 = "Utilized Firebase Authentication UI and Database for meet-up registration for event and also user and comment for asking quries";

  const [isReadMore1, readMore1] = useState(false);
  const [isReadMore2, readMore2] = useState(false);
  const [isReadMore3, readMore3] = useState(false);
  const [texts1, setText1] = useState(text1.slice(0, 100));
  const [texts2, setText2] = useState(text2.slice(0, 100));
  const [texts3, setText3] = useState(text3.slice(0, 100));
  const [showArrow, setShowArrow] = useState(true);

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current.scrollLeft > 0) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleArrowClick = () => {
    scrollContainerRef.current.scrollBy({
      left: 200, // Adjust this value as needed
      behavior: 'smooth'
    });
  };

  function showLess1() {
    setText1(text1);
    readMore1(true);
  }

  function noReadMore1() {
    setText1(text1.slice(0, 100));
    readMore1(false);
  }

  function showLess2() {
    setText2(text2);
    readMore2(true);
  }

  function noReadMore2() {
    setText2(text2.slice(0, 100));
    readMore2(false);
  }

  function showLess3() {
    setText3(text3);
    readMore3(true);
  }

  function noReadMore3() {
    setText3(text3.slice(0, 100));
    readMore3(false);
  }

  return (
    <>
      <div className="mt-5 flex flex-wrap justify-around p-2">
        <ProjectCard
          title="Interactive Learning Platform"
          skills={["Node.js","React.js","MongoDB","Express.js","Redux Toolkit","Monaco Editor","Passport.js","Tailwind CSS"]}
          description={
            isReadMore1 ? (
              <p>
                {texts1}
                <span onClick={noReadMore1} className="underline">
                  {" "}
                  show less
                </span>
              </p>
            ) : (
              <p>
                {texts1}{" "}
                <span className="underline" onClick={showLess1}>
                  {" "}
                  show more
                </span>
              </p>
            )
          }
          bg="#FC5185"
          date="15 April 2024"
          link="https://github.com/sarthu210/interactive-learning-platfrom"
        ></ProjectCard>
        <ProjectCard
          title="E-Gate Pass System"
          skills={["Node.js","React Native","MongoDB","Express.js","Redux Toolkit","JWT","JavaScript","CSS"]}
          description={
            isReadMore2 ? (
              <p>
                {texts2}
                <span onClick={noReadMore2} className="underline">
                  {" "}
                  show less
                </span>
              </p>
            ) : (
              <p>
                {texts2}
                <span className="underline" onClick={showLess2}>
                  {" "}
                  show more
                </span>
              </p>
            )
          }
          bg="#3FC1C9"
          date="20 Nov 2023"
          link="https://github.com/sarthu210/E-GetPass"
        />
        <ProjectCard
          title="Meet Registration"
          skills={["Firebase","React.js","CSS","HTML","Javascript"]}
          description={
            isReadMore3 ? (
              <p>
                {texts3}
                <span onClick={noReadMore3} className="underline">
                  {" "}
                  show less
                </span>
              </p>
            ) : (
              <p>
                {texts3}
                <span className="underline" onClick={showLess3}>
                  {" "}
                  show more
                </span>
              </p>
            )
          }
          bg="#FC5185"
          date="1 OCT 2024"
          link="https://github.com/sarthu210/Fire-Base-Meetup-Registration-"
        />
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
        <SmallCards short={"A"} heading={"AI Text Summarizer"} bgcolor={"#3FC1C9"} link={"https://replit.com/@SarthakNande/AI-Text-Summarizer-App#index.js"}></SmallCards>
        <SmallCards short={"W"} heading={"Water Quality Monitoring"} bgcolor={"#FC5185"} link={"https://github.com/sarthu210/Water_Quality_Monitoring_Hackathon"}></SmallCards>
        <SmallCards short={"G"} heading={"Geolocation-based-QR-Code"} bgcolor={"#3FC1C9"} link={"https://github.com/sarthu210/Geolocation-based-QR-Code"}></SmallCards>
        <SmallCards short={"R"} heading={"Redux TODO"} bgcolor={"#FC5185"} link={"https://github.com/sarthu210/redux-todo"}></SmallCards>
        <SmallCards short={"A"} heading={"Anonymous Feed Back System"} bgcolor={"#3FC1C9"} link={"https://github.com/sarthu210/Geolocation-based-QR-Code"}></SmallCards>
        <SmallCards short={"S"} heading={"Speed Up API"} bgcolor={"#FC5185"} link={"https://github.com/sarthu210/speed-up-api"}></SmallCards>
        <SmallCards short={"F"} heading={"File Uploader"} bgcolor={"#3FC1C9"} link={"https://github.com/sarthu210/file_uploading"}></SmallCards>
      </div>
    </>
  );
}