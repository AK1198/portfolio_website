"use client";
import {
  slideInFromLeft
} from "@/utils/motion";
import { motion } from "framer-motion";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div 
       initial="hidden"
       animate="visible"
       variants={slideInFromLeft(0.5)} >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
          MY SKILLS
        </h1>
      </motion.div>
     
    </div>
  );
};

export default SkillText;
