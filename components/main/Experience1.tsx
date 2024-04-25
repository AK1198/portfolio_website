"use client";
import { useMediaQuery } from "react-responsive";

const Experience1 = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  // const [showDetails1, setShowDetails1] = useState(false);
  // const [showDetails2, setShowDetails2] = useState(false);
  // const [showDetails3, setShowDetails3] = useState(false);

  // const toggleDetails1 = () => {
  //   setShowDetails1(!showDetails1);
  // };

  // const toggleDetails2 = () => {
  //   setShowDetails2(!showDetails2);
  // };

  // const toggleDetails3 = () => {
  //   setShowDetails3(!showDetails3);
  // };
  return (
    <div>
      {!isSmallScreen && (
        <div
          id="experience1"
          className="h-full  w-full  flex justify-center items-center"
        >
          <div className="max-w-7xl mx-auto w-full grid grid-cols-9 pb-80 py-20 px-2">
            <div className="col-span-4 w-full h-full ">
              <div className="w-full h-full bg-indigo-700 rounded-md p-2 md:pl-4">
                <div className=" rounded-md border border-radius-[20px]   bg-indigo-900 p-2">
                  <h1 className="text-white text-xl font-bold py-2">
                    Full-Stack Developer
                  </h1>
                  <h2 className="text-white text-lg font-semibold py-2">
                    Insaix Vision Sdn Bhd
                  </h2>
                </div>
                {/* {showDetails1 && ( */}
                <ul className="text-gray-100 sm:text-sm text-xs list-disc pl-4">
                  <li>
                    Develop new features and pages in response to client
                    requirements or project specifications
                  </li>
                  <li>
                    Enhance user interface, ensuring a visually appealing
                    design, and implementing UI components according to provided
                    mockups
                  </li>
                  <li>Perform bug fixes and ad-hoc tasks</li>
                  <li> Document code and processes</li>
                  <li>Deploy and maintain website on AWS EC2</li>
                  <li>Conduct proactive research on emerging technologies</li>
                </ul>
                {/* )}  */}
                {/* <button
              className="text-white text-sm mt-2 bg-indigo-600 py-1 px-3 rounded hover:bg-indigo-800"
              onClick={toggleDetails1}
            >
              {showDetails1 ? "Read Less" : "Read More"}
            </button> */}
              </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 bg-indigo-300"></div>
              <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white "></div>
            </div>
            <div className="col-span-4 w-full h-full  font-bold mt-[130px] text-green-500">
              JAN 2023 - PRESENT
            </div>

            <div className="col-span-4 w-full h-full mt-[80px]  text-end text-green-500 font-bold">
              JULY 2022 - JAN 2023
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 bg-indigo-300"></div>
              <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center"></div>
            </div>
            <div className="col-span-4 w-full h-full ">
              <div className="w-full h-full bg-indigo-700  rounded-md p-2 md:pl-4">
                <div className=" rounded-md border border-radius-[20px]   bg-indigo-900 p-2">
                  <h1 className="text-white text-xl font-bold py-2">
                    Software Engineer
                  </h1>
                  <h2 className="text-white text-lg  font-semibold py-2">
                    Fave
                  </h2>
                </div>

                <ul className="text-gray-100 sm:text-sm text-xs list-disc pl-4">
                  <li>Maintain Microservices projects</li>
                  <li>Collaborate with team members for bug fixes</li>
                  <li>Create JUNIT tests</li>
                </ul>
              </div>
            </div>

            <div className="col-span-4 w-full h-full ">
              <div className="w-full h-full bg-indigo-700 rounded-md p-2 md:pl-4">
                <div className=" rounded-md border border-radius-[20px] bg-indigo-900 p-2">
                  <h1 className="text-white text-xl font-bold py-2">
                    Data Scientist Intern
                  </h1>
                  <h2 className="text-white  text-lg font-semibold  py-2">
                    Omnilytics Sdn Bhd
                  </h2>
                </div>

                <ul className="text-gray-100 sm:text-sm text-xs list-disc pl-4 ">
                  <li>
                    Perform data analysis, focusing on identifying trends, and
                    patterns
                  </li>
                  <li>
                    Refactored existing codebase to eliminate redundancy leading
                    to easier maintenance
                  </li>
                  <li> Documented codebase thoroughly</li>
                </ul>
              </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 bg-indigo-300"></div>
              <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center"></div>
            </div>
            <div className="col-span-4 w-full h-full mt-[90px] text-green-500 font-bold">
              MAR 2022 - JULY 2022
            </div>
          </div>
        </div>
      )}
      {isSmallScreen && (
        <div id="experience" className="h-full w-full justify-items py-20 ">
          <div>
           
              <div className="text-white text-3xl">EXPERIENCE</div>
            
          </div>
          <div className="max-w-7xl mx-auto w-full grid grid-cols-9 gap-4 pb-80 py-20 px-2">
            <div className="relative col-span-1 w-full h-full flex items-center justify-center ">
              <div className="h-full w-1 bg-indigo-300"></div>
              <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white "></div>
            </div>
            <div className="col-span-8 grid grid-row-9 w-full h-full ">
              <div className="row-span-1 w-full h-full font-bold rounded-md  text-green-500 ">
                JAN 2023 - Present
              </div>
              <div className="row-span-8 w-full h-full ">
                <div className="w-full h-full bg-indigo-700 rounded-md p-2 md:pl-4">
                  <div className=" rounded-md border border-radius-[20px]   bg-indigo-900 p-2">
                    <h1 className="text-white text-xl font-bold py-2">
                      Full-Stack Developer
                    </h1>
                    <h2 className="text-white text-lg font-semibold py-2">
                      Insaix Vision Sdn Bhd
                    </h2>
                  </div>
                  {/* {showDetails1 && ( */}
                  <ul className="text-gray-100 sm:text-sm text-xs list-disc pl-4">
                    <li>
                      Develop new features and pages in response to client
                      requirements or project specifications
                    </li>
                    <li>
                      Enhance user interface, ensuring a visually appealing
                      design, and implementing UI components according to
                      provided mockups
                    </li>
                    <li>Perform bug fixes and ad-hoc tasks</li>
                    <li> Document code and processes</li>
                    <li>Deploy and maintain website on AWS EC2</li>
                    <li>Conduct proactive research on emerging technologies</li>
                  </ul>
                  {/* )}  */}
                  {/* <button
              className="text-white text-sm mt-2 bg-indigo-600 py-1 px-3 rounded hover:bg-indigo-800"
              onClick={toggleDetails1}
            >
              {showDetails1 ? "Read Less" : "Read More"}
            </button> */}
                </div>
              </div>
            </div>

            <div className="relative col-span-1 gap-0 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 bg-indigo-300"></div>
              <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white "></div>
            </div>
            <div className="col-span-8 grid grid-row-9 w-full h-full ">
              <div className="row-span-1 w-full h-full font-bold rounded-md  text-green-500 ">
                JULY 2022 - JAN 2023
              </div>
              <div className=" row-span-8  w-full h-full bg-indigo-700 rounded-md p-2 md:pl-4">
                <div className=" rounded-md border border-radius-[20px]   bg-indigo-900 p-2">
                  <h1 className="text-white text-xl font-bold py-2">
                    Software Engineer
                  </h1>
                  <h2 className="text-white text-lg font-semibold py-2">
                    Fave
                  </h2>
                </div>
                {/* {showDetails1 && ( */}
                <ul className="text-gray-100 sm:text-sm text-xs list-disc pl-4">
                  <li>Maintain Microservices projects</li>
                  <li>Collaborate with team members for bug fixes</li>
                  <li>Create JUNIT tests</li>
                </ul>
                {/* )}  */}
                {/* <button
              className="text-white text-sm mt-2 bg-indigo-600 py-1 px-3 rounded hover:bg-indigo-800"
              onClick={toggleDetails1}
            >
              {showDetails1 ? "Read Less" : "Read More"}
            </button> */}
              </div>
            </div>

            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 bg-indigo-300"></div>
              <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white "></div>
            </div>
            <div className="col-span-8 grid grid-row-9 w-full h-full ">
              <div className="row-span-1 w-full h-full font-bold rounded-md  text-green-500 ">
                MAR 2021 - JULY 2022
              </div>
              <div className=" row-span-8 w-full h-full bg-indigo-700 rounded-md p-2 md:pl-4">
                <div className=" rounded-md border border-radius-[20px]   bg-indigo-900 p-2">
                  <h1 className="text-white text-xl font-bold py-2">
                    Data Scientist Intern
                  </h1>
                  <h2 className="text-white text-lg font-semibold py-2">
                    Omnilytics Sdn Bhd
                  </h2>
                </div>
                {/* {showDetails1 && ( */}
                <ul className="text-gray-100 sm:text-sm text-xs list-disc pl-4">
                  <li>
                    Perform data analysis, focusing on identifying trends, and
                    patterns
                  </li>
                  <li>
                    Refactored existing codebase to eliminate redundancy leading
                    to easier maintenance
                  </li>
                  <li> Documented codebase thoroughly</li>
                </ul>
                {/* )}  */}
                {/* <button
              className="text-white text-sm mt-2 bg-indigo-600 py-1 px-3 rounded hover:bg-indigo-800"
              onClick={toggleDetails1}
            >
              {showDetails1 ? "Read Less" : "Read More"}
            </button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience1;
