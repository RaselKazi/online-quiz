import React from "react";

export default function AchievementBases() {
  return (
    <div className=" relative">
      <div className=" absolute -bottom-10 left-2 h-10 w-28 rounded-full w  blur-xl bg-slate-400"></div>
      <div className=" relative  h-[4.5rem] w-[7rem] bg-gray-100 rounded-xl ">
        <div className=" absolute w-full h-full top-0 left-0 bg-gray-100 rounded-xl rotate-[60deg] "></div>
        <div className=" absolute w-full h-full top-0 left-0 bg-gray-100 rounded-xl rotate-[120deg] "></div>
      </div>

      <div className=" absolute top-1 left-2 ">
        <div className=" relative   h-[4rem] w-[6rem] bg-gradient-to-b from-slate-100 to-slate-500 rounded-xl ">
          <div className=" absolute w-full h-full top-0 left-0 bg-gradient-to-r from-slate-100 to-slate-500 rounded-xl rotate-[60deg]  overflow-hidden"></div>
          <div className=" absolute flex justify-center items-center w-full h-full top-0 left-0 bg-gradient-to-r from-slate-100 to-slate-500 rounded-xl rotate-[120deg] ">
            <div className="  p-2 bg-gradient-to-b from-slate-100 to-slate-500 rounded-full border-4 border-sky-400 shadow-2xl shadow-sky-500  text-gray-200  -rotate-[120deg]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8  "
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
