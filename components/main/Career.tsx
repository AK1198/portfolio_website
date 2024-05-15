"use client";

import { careerData } from "@/constants";

const Career = () => {

  return (
    <div id="career" className="w-full h-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          Experience
        </h1>
      </div>

      {careerData.map((item, index) => (
        <div key={index} className="relative pl-8 sm:pl-48 py-6 group">
          <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
            {item.company}
          </div>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-10 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-10 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-2 translate-y-0.5 inline-flex items-center justify-center sm:justify-start text-xs font-semibold uppercase w-40 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              {item.duration}
            </time>
            <div className="text-xl font-bold text-green-500">{item.position}</div>
          </div>
          <div>
            <ul className="text-gray-100 sm:text-sm text-xs list-disc pl-4">
              {item.responsibilities.map((responsibility, i) => (
                <li key={i}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Career;
