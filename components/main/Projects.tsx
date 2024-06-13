"use client";
import { useEffect, useState } from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const imageUrls = ["/agri.png", "/summary.png", "/advance.png"];
  const interval = 5000;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to navigate to the next image
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Start auto navigation on component mount
    const intervalId = setInterval(goToNextImage, interval);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Run effect only once on mount
  return (
    <div className=" flex flex-col items-center justify-center " id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full md:w-full flex flex-1 mb-5 flex-col md:flex-row gap-10 px-10">
        {/* <ProjectCard
          src={imageUrls[currentImageIndex]}
          title="Smart Agri Dashboard"
          description="A responsive and intuitive platform tailored specifically for agricultural monitoring "
          repoLink="https://github.com/AK1198?tab=repositories"
          demoLink="https://github.com/AK1198?tab=repositories"
        /> */}
        <ProjectCard
          src="/house_image.jpg"
          title="House Price Prediction"
          description=" A website offering price prediction for houses in Boston . "
          repoLink="https://github.com/AK1198/bostonhousepricing"
          demoLink=""
        />
        <ProjectCard
          src="/weather_image.jpg"
          title="Weather Forecast"
          description=" A website offering comprehensive real-time weather insights ,utilizing data sourced from a reliable public API. "
          repoLink="https://github.com/AK1198/weather-app-nextjs"
          demoLink="https://weather-app-nextjs-git-main-ak1198s-projects.vercel.app/"
        />
        <ProjectCard
          src="/carParkingCounter2.mp4"
          title="Car Parking Counter"
          description="Detect available car parking space with help of computer vision and image processing.  "
          repoLink="https://github.com/AK1198/carParkingDetection"
          demoLink=""
        />
      </div>
    </div>
  );
};

export default Projects;
