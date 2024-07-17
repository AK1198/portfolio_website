"use client";

import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";

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
            className="flex flex-row gap-3 py-5 justify-center items-center whitespace-nowrap  font-bold  w-auto h-auto"
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
            <div className="group p-2 rounded-md border-[2px] text-white bg-blue-600 hover:bg-blue-500 border-blue-700">
              <a
                href="/Arulkumaran_Resume_updated.pdf"
                download={"Arulkumaran_Resume.pdf"}
              >
                <div className="flex items-center space-x-2 ">
                  <p className="m-0">Download CV</p>
                  <div>
                    <MdOutlineFileDownload size={"30px"} />
                  </div>
                </div>
              </a>
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
              className=" border rounded-full   border-cyan-200 "
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
