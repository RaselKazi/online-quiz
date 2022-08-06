import Link from "next/link";
import React from "react";

export default function FrameButton() {
  return (
    <>
      <Link href="/quiz" passHref>
        <div
          className={`relative px-4 py-2 text-xl text-center font-semibold text-gray-500 dark:text-gray-50 h-10 w-20 rounded-md  transition-all duration-500 shadow-lg  border-sky-300  dark:border-sky-700 border-x-4 bg-gray-50 dark:bg-slate-800 group cursor-pointer hover:w-32 hover:scale-110 "
`}>
          <div className=" overflow-hidden dark:text-gray-50">QuizStart</div>
          <div className=" absolute bottom-0 bg-gradient-to-b from-gray-300/50 to-gray-200/20 dark:from-gray-500/30  dark:to-gray-700/20 left-0 w-full h-1/2 "></div>
        </div>
      </Link>
    </>
  );
}
