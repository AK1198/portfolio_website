"use client"
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center "
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex  mb-5 flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src=""
          title="Sales Dashboard"
          description="A dynamic website build using MERN stack and TailwinCss"
        />
        <ProjectCard
          src="weather_app.PNG"
          title="Weather Forecast"
          description="A weather forecast website build by integrating https://openweathermap.org/api API for weather data ."
        />
        <ProjectCard
          src="./carParkingCounter2.mp4"
          title="Car Parking Counter"
          description="Detect available car parking space with help of computer vision and image processing.  "
        />
      </div>
    </div>
  );
};

export default Projects;