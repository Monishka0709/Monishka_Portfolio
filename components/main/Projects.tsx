
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import ProjectContainer from "./ProjectContainer";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-2"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5">
        My Projects
      </h1>
      <ProjectContainer />
    </div>
  );
};

export default Projects;