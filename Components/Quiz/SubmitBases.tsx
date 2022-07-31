import React from "react";
type SubmitProps = { color?: string };
export default function SubmitBases({ color }: SubmitProps) {
  return (
    <div className=" relative mb-3 cursor-pointer group  transition-all duration-500">
      <div
        className={`absolute top-0 left-10 h-full w-0 bg-gray-50 rounded-lg border-r-8  group-hover:w-5/6 transition-all duration-700  overflow-hidden ${
          color === "red" ? "border-red-400/70" : " border-sky-400/70"
        }`}>
        <div className=" absolute bottom-0 bg-gradient-to-b from-gray-300/60 to-gray-200/30 left-0 w-full h-1/2 "></div>

        <div className=" text-center transition-all duration-700">
          <h1 className=" text-4xl text-gray-500 font-bold tracking-widest">
            12
          </h1>
          <p className=" py-2 capitalize  text-xl text-gray-400 font-bold">
            total answer
          </p>
        </div>
      </div>

      <div className=" py-1">
        <div className=" p-1 flex justify-center items-center  h-20 w-20 rounded-3xl shadow-2xl  bg-gradient-to-tl from-gray-50 to-gray-100 rotate-45 overflow-hidden">
          <div
            className={`flex  justify-center items-center rounded-3xl  h-full w-full   bg-gradient-to-tl  to-gray-50  ${
              color === "red" ? "from-red-600/30" : " from-sky-600/30"
            }`}>
            <div
              className={`p-2 bg-gradient-to-b  rounded-full border-4  shadow-2xl  text-gray-200 ${
                color === "red"
                  ? " border-red-400 shadow-red-500 from-red-100 to-red-500"
                  : " border-sky-400 shadow-sky-500 from-sky-100 to-sky-500"
              }`}>
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
