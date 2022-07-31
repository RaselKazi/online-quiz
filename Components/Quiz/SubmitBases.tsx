import React from "react";

export default function SubmitBases() {
  return (
    <div className=" relative mb-3 cursor-pointer group  transition-all duration-500">
      <div className=" absolute top-0 left-10 h-full w-0 bg-gray-50 rounded-lg border-r-8 border-sky-400/70 group-hover:w-5/6 transition-all duration-700">
        <div className=" absolute bottom-0 bg-gradient-to-b from-gray-300/60 to-gray-200/30 left-0 w-full h-1/2 "></div>
      </div>

      <div className=" py-1">
        <div className=" p-1 flex justify-center items-center  h-20 w-20 rounded-3xl shadow-2xl  bg-gradient-to-tl from-gray-50 to-gray-100 rotate-45 overflow-hidden">
          <div className="flex  justify-center items-center rounded-3xl  h-full w-full   bg-gradient-to-tl from-sky-600/30 to-gray-50  ">
            <div className=" p-2 bg-gradient-to-b from-sky-100 to-sky-500 rounded-full border-4 border-sky-400 shadow-2xl shadow-sky-500  text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 -rotate-45 "
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
