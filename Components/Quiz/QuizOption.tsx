import React from "react";

type typeProps = {
  id: number;
  correctOption: number;
  option: { correct: boolean; text: string };
};
export default function QuizOption({ id, correctOption, option }: typeProps) {
  return (
    <div className=" relative mb-3 cursor-pointer group  transition-all duration-500">
      <div
        className={` pl-7 lg:text-base text-center font-semibold text-gray-700 dark:text-gray-200 absolute flex items-center justify-center top-0 left-6 h-full  rounded-lg border-r-8  w-5/6 transition-all duration-500 shadow-xl ${
          correctOption === id
            ? option.correct
              ? "border-green-300 bg-green-100 dark:border-green-700  dark:bg-green-800"
              : "border-red-300 bg-red-100 dark:border-red-700  dark:bg-red-800"
            : "border-sky-300 bg-gray-50  dark:border-sky-700  dark:bg-slate-800"
        }`}>
        {option.text}
        <div className=" absolute bottom-0 bg-gradient-to-b from-gray-300/50 to-gray-200/20   dark:from-gray-500/30  dark:to-gray-700/20 left-0 w-full h-1/2 "></div>
      </div>

      <div className=" py-1">
        <div
          className={`p-1 flex justify-center items-center  h-12 w-12 rounded-xl shadow-2xl rotate-45 overflow-hidden border-4 bg-gradient-to-tl  ${
            correctOption === id
              ? option.correct
                ? "border-green-300 from-green-600/30 to-green-50 dark:from-green-700  dark:to-slate-900 dark:border-slate-700 "
                : "border-red-300 from-red-600/30 to-red-50 dark:from-red-700  dark:to-slate-900 dark:border-slate-700 "
              : " from-sky-600/30 to-gray-50 border-sky-300 dark:from-slate-700  dark:to-sky-900 dark:border-slate-700 "
          }`}>
          <div
            className={` w-8 h-8 flex justify-center items-center bg-gradient-to-b  rounded-full  text-gray-200 -rotate-45 text-2xl font-bold ${
              correctOption === id
                ? option.correct
                  ? "from-green-100 to-green-500 dark:from-green-900  dark:to-green-300 dark:text-green-900"
                  : " from-red-100 to-red-500 dark:from-red-900  dark:to-red-300 dark:text-red-900"
                : " from-sky-100 to-sky-500  dark:from-sky-900  dark:to-sky-300 dark:text-sky-900"
            }`}>
            {id + 1}
          </div>
        </div>
      </div>
    </div>
  );
}
