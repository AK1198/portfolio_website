import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  const isVideo = src.endsWith('.mp4') || src.endsWith('.webm')||src.endsWith('.mkv')
  return (
    
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
     {isVideo ? (
        <video  className="w-full " preload="none" width={1000} height={1000} playsInline loop muted autoPlay>
        <source src={src} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      ) : (
      <img
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
      )}
     
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;