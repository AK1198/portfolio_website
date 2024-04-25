"use client"
import React from "react";

const Career = () => {
  return (
    <div
    id="career" 
    className="w-full h-full ">
        <div className="flex flex-col items-center justify-center ">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">Experience</h1>
           
        </div>
      {/* <!-- Item #1 --> */}
      <div className="relative pl-8 sm:pl-48 py-6 group">
        {/* <!-- Purple label --> */}
        <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
          Insaix Innovation Sdn Bhd
        </div>
        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-10 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-10 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time className="sm:absolute left-2 translate-y-0.5 inline-flex items-center justify-center sm:justify-start text-xs font-semibold uppercase w-40 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
            Jan 2023 - Present
          </time>
          <div className="text-xl font-bold text-green-500">
            Full-Stack Developer
          </div>
        </div>
        {/* <!-- Content --> */}
        <div>
          <ul className="text-gray-100 sm:text-sm text-xs list-disc pl-4">
            <li>
              Develop new features and pages in response to client requirements
              or project specifications
            </li>
            <li>
              Enhance user interface, ensuring a visually appealing design, and
              implementing UI components according to provided mockups
            </li>
            <li>Perform bug fixes and ad-hoc tasks</li>
            <li> Document code and processes</li>
            <li>Deploy and maintain website on AWS EC2</li>
            <li>Conduct proactive research on emerging technologies</li>
          </ul>
        </div>
      </div>

      {/* <!-- Item #2 --> */}
      <div className="relative pl-8 sm:pl-48 py-6 group">
        {/* <!-- Purple label --> */}
        <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
          Fave
        </div>
        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-10 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-10 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time className="sm:absolute left-2 translate-y-0.5 inline-flex items-center justify-center sm:justify-start  text-xs font-semibold uppercase w-40 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
            Jul 2022-Jan 2023
          </time>
          <div className="text-xl font-bold text-green-500">
            Software Engineer
          </div>
        </div>
        {/* <!-- Content --> */}
        <div>
          <ul className="text-gray-100 sm:text-sm text-xs list-disc pl-4">
            <li>Maintain Microservices projects</li>
            <li>Collaborate with team members for bug fixes</li>
            <li>Create JUNIT tests</li>
          </ul>
        </div>
      </div>

      {/* <!-- Item #3 --> */}
      <div className="relative pl-8 sm:pl-48 py-6 group ">
        {/* <!-- Purple label --> */}
        <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
          Omnilytics Sdn Bhd
        </div>
        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
        <div className="flex flex-col sm:flex-row items-start  mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-10 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-10 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time className="sm:absolute left-2 translate-y-0.5 inline-flex items-center justify-center sm:justify-start  text-xs font-semibold uppercase w-40 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
            Mar 2022-Jul 2022
          </time>
          <div className="text-xl font-bold text-green-500">
            Data Scientist Intern
          </div>
        </div>
        {/* <!-- Content --> */}
        <div>
          <ul className="text-gray-100 sm:text-sm text-xs list-disc pl-4 ">
            <li>
              Perform data analysis, focusing on identifying trends, and
              patterns
            </li>
            <li>
              Refactored existing codebase to eliminate redundancy leading to
              easier maintenance
            </li>
            <li> Documented codebase thoroughly</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Career;
