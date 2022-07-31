import React from "react";

export default function FrameButton() {
  return (
    <>
      <div
        className={`relative px-4 py-2 text-xl text-center font-semibold text-gray-500 h-10 w-20 rounded-md  transition-all duration-500 shadow-xl shadow-sky-300/40 border-sky-300 border-x-4 bg-gray-50 group cursor-pointer hover:w-32 hover:scale-110 "
  `}>
        <div className=" overflow-hidden">QuizStart</div>
        <div className=" absolute bottom-0 bg-gradient-to-b from-gray-300/50 to-gray-200/20 left-0 w-full h-1/2 "></div>
      </div>
    </>
  );
}
