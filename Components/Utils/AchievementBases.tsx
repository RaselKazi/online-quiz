import React from "react";

export default function AchievementBases() {
  return (
    <div className=" relative">
      <div className=" absolute -bottom-10 left-2 h-10 w-28 rounded-full w  blur-xl bg-slate-400"></div>
      <div className=" relative  h-[4.5rem] w-[7rem] bg-gray-50 rounded-xl ">
        <div className=" absolute w-full h-full top-0 left-0 bg-gray-50 rounded-xl rotate-[60deg] "></div>
        <div className=" absolute w-full h-full top-0 left-0 bg-gray-50 rounded-xl rotate-[120deg] "></div>
      </div>

      <div className=" absolute top-1 left-2 ">
        <div className=" relative   h-[4rem] w-[6rem] bg-gradient-to-b from-gray-100 to-gray-300 rounded-xl ">
          <div className=" absolute w-full h-full top-0 left-0 bg-gradient-to-r from-gray-100 to-gray-300 rounded-xl rotate-[60deg]  overflow-hidden"></div>
          <div className=" absolute flex justify-center items-center w-full h-full top-0 left-0 bg-gradient-to-r from-gray-100 to-gray-300 rounded-xl rotate-[120deg] ">
            <div className=" absolute h-12 w-4 bg-gray-50 -bottom-4 left-8  border-x-[6px] border-yellow-300  rotate-[20deg]"></div>

            <div className=" absolute h-12 w-4 bg-gray-50 bottom-3 right-16 border-x-[6px] border-yellow-300  rotate-[105deg]"></div>
            <div className="  p-2 bg-gradient-to-b from-gray-100 to-gray-400 rounded-full border-4 border-gray-400 shadow-xl shadow-yellow-400/50  text-gray-100  -rotate-[120deg]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6  "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
