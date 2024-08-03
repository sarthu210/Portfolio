import React from "react";
import ProjectCard from "./card/ProjectCard"
export default function ProjectSection() {
  return (
    <div className="mt-5 flex flex-wrap justify-evenly p-2">
      <ProjectCard title="Interactive Learning Platform" description="Best app to word adjs asjskf askdjnasjnda kasjdksa kajnsdsa" bg="#FC5185" date="15 April 2024" />
      <ProjectCard title="Interactive Learning Platform" description="Best app to word adjs asjskf askdjnasjnda kasjdksa kajnsdsa" date="15 April 2024" bg="#3FC1C9"/>
      <ProjectCard title="Interactive Learning Platform" description="Best app to word adjs asjskf askdjnasjnda kasjdksa kajnsdsa" date="15 April 2024" bg="#FC5185"/>
    </div>
  );
}
