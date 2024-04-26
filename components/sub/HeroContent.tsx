"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

import Image from "next/image";
import ClickableButton from "./ClickableButton";

const HeroContent = () => {
  const [text, setText] = useState("Website Developer");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let words = ["Website Developer", "Software Developer", "Data Scientist"];
    const currentWord = words[index];

    const interval = setInterval(() => {
      if (isDeleting) {
        setText((prevText) => prevText.slice(0, -1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      } else {
        if (text === currentWord) {
          setIsDeleting(true);
        } else {
          setText((prevText) => prevText + currentWord[prevText.length]);
        }
      }
    }, 200);

    return () => clearInterval(interval);
  }, [text, index, isDeleting]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center  px-20 mt-16 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center items-center m-auto text-start">
        {/* <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div> */}

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 justify-center items-center whitespace-nowrap text-xl  md:text-4xl lg:text-6xl font-bold  text-white  w-auto h-auto"
        >
          <span>
            {`Hi! I'm`}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Arulkumaran{" "}
            </span>
          </span>
          <span>
            {`I'm a`}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              {text}{" "}
            </span>
          </span>
        </motion.div>
        <div className="">
          {" "}
          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-3 max-w-[600px]"
          >
            I&apos;m a Full Stack Software Engineer with experience in Website,
            Mobile, Software development and Artificial Intelligence. Check out
            my projects and skills.
          </motion.p>
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-row gap-6 py-5 justify-center items-center whitespace-nowrap  font-bold  w-auto h-auto"
          >
            <div className="p-2  border-[2px]  border-cyan-500">
              <ClickableButton
                imageUrl="./github_logo.png"
                linkUrl="https://github.com/AK1198?tab=repositories"
              />
            </div>
            <div className="p-2 border-[2px] border-cyan-500">
              <ClickableButton
                imageUrl="./linkin.png"
                linkUrl="https://www.linkedin.com/in/arulkumarandatascience/"
              />
            </div>
            <div className="p-2">
              {/* <a href="./public/ArulkumaranResume.pdf"download><button className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Download CV
              </button>
              </a> */}
              {/* <a href="ArulkumaranResume.pdf" download="ArulkumaranResume.pdf">
                Download PDF
              </a> */}
            </div>
          </motion.div>
          <motion.div
            variants={slideInFromRight(0.8)}
            className=" h-full w-full flex justify-center items-center"
          >
            <Image
              src="/ak.png"
              alt="my_pic"
              height={175}
              width={175}
              className=" border rounded-full  hover:shadow-lg hover:shadow-blue-900 border-cyan-200 "
            />
          </motion.div>
        </div>
      </div>
      {/* <motion.a
        href="#experience"
        variants={slideInFromRight(1)}
        className="py-2 px-2  button-primary text-center  text-white cursor-pointer rounded-lg max-w-[200px]"
      >
        Learn More!
      </motion.a> */}
    </motion.div>
  );
};

export default HeroContent;
