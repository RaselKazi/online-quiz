import React from "react";

type typeProps = { id: number; option: { correct: boolean; text: string } };
export default function QuizOption({ id, option }: typeProps) {
  return (
    <div className=" relative mb-3 cursor-pointer group  transition-all duration-500">
      <div className=" pl-10 text-lg text-center font-semibold text-gray-700 absolute flex items-center justify-center top-0 left-6 h-full bg-gray-50 rounded-lg border-r-8 border-sky-300 w-5/6 transition-all duration-700 shadow-xl">
        {option.text}
        <div className=" absolute bottom-0 bg-gradient-to-b from-gray-300/50 to-gray-200/20 left-0 w-full h-1/2 "></div>
      </div>

      <div className=" py-1">
        <div className=" p-1 flex justify-center items-center  h-12 w-12 rounded-xl shadow-2xl rotate-45 overflow-hidden border-4 border-sky-300 bg-gradient-to-tl from-sky-600/30 to-gray-50 ">
          <div className=" w-8 h-8 flex justify-center items-center bg-gradient-to-b from-sky-100 to-sky-500 rounded-full  text-gray-200 -rotate-45 text-2xl font-bold">
            {option ? (
              ""
            ) : option.correct ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
            1
          </div>
        </div>
      </div>
    </div>
  );
}
