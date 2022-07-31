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
        className={`pl-10 text-lg text-center font-semibold text-gray-700 absolute flex items-center justify-center top-0 left-6 h-full  rounded-lg border-r-8  w-5/6 transition-all duration-500 shadow-xl ${
          correctOption === id
            ? option.correct
              ? "border-green-300 bg-green-100"
              : "border-red-300 bg-red-100"
            : "border-sky-300 bg-gray-50"
        }`}>
        {option.text}
        <div className=" absolute bottom-0 bg-gradient-to-b from-gray-300/50 to-gray-200/20 left-0 w-full h-1/2 "></div>
      </div>

      <div className=" py-1">
        <div
          className={`p-1 flex justify-center items-center  h-12 w-12 rounded-xl shadow-2xl rotate-45 overflow-hidden border-4 bg-gradient-to-tl  ${
            correctOption === id
              ? option.correct
                ? "border-green-300 from-green-600/30 to-green-50 "
                : "border-red-300 from-red-600/30 to-red-50 "
              : " from-sky-600/30 to-gray-50 border-sky-300 "
          }`}>
          <div
            className={` w-8 h-8 flex justify-center items-center bg-gradient-to-b  rounded-full  text-gray-200 -rotate-45 text-2xl font-bold ${
              correctOption === id
                ? option.correct
                  ? "from-green-100 to-green-500 "
                  : " from-red-100 to-red-500"
                : " from-sky-100 to-sky-500"
            }`}>
            {id + 1}
          </div>
        </div>
      </div>
    </div>
  );
}
