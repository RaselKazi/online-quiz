import React, { useContext } from "react";
import { Store } from "../../Data/Store/Store";
type SubmitProps = { color?: string; totalAns: number };
export default function SubmitBases({ color, totalAns }: SubmitProps) {
  const { state, dispatch } = useContext(Store);

  const { answer, currantQuestionId } = state;
  return (
    <div className=" relative mb-3 cursor-pointer group  transition-all duration-500">
      <div
        className={`absolute top-0 left-10 h-full  bg-gray-50 dark:bg-gray-800/60 rounded-lg border-r-8  group-hover:w-5/6 transition-all duration-700  overflow-hidden ${
          currantQuestionId % 5 == 0 ? " w-5/6 " : " w-0 "
        } ${
          color === "red"
            ? "border-red-400/70 dark:border-red-900"
            : " border-sky-400/70 dark:border-sky-800"
        }`}>
        <div className=" absolute bottom-0 bg-gradient-to-b from-gray-300/60 to-gray-200/30  dark:from-gray-500/30  dark:to-gray-700/20 left-0 w-full h-1/2 "></div>

        <div className=" text-center transition-all duration-700">
          <h1 className=" text-4xl text-gray-500  dark:text-slate-200 font-bold tracking-widest">
            {totalAns}
          </h1>
          <p className=" py-2 capitalize  text-xl text-gray-400  font-bold">
            {color === "red" ? "wrong answers" : "correct answers"}
          </p>
        </div>
      </div>

      <div className=" py-1">
        <div className=" p-1 flex justify-center items-center  h-20 w-20 rounded-3xl shadow-2xl  bg-gradient-to-tl from-gray-50 to-gray-100  dark:from-slate-800  dark:to-slate-700 rotate-45 overflow-hidden">
          <div
            className={`flex  justify-center items-center rounded-3xl  h-full w-full   bg-gradient-to-tl  to-gray-50  dark:to-slate-900  ${
              color === "red" ? "from-red-600/30" : " from-sky-600/30"
            }`}>
            <div
              className={`p-1 bg-gradient-to-b  rounded-full border-4  shadow-2xl  text-gray-200 ${
                color === "red"
                  ? " border-red-400 shadow-red-500 from-red-100 to-red-500 dark:from-slate-900/50 dark:to-slate-800/40 dark:border-slate-700/60 dark:shadow-sky-900 dark:text-red-600"
                  : " border-sky-400 shadow-sky-500 from-sky-100 to-sky-500 dark:from-slate-900/60 dark:to-slate-800/40 dark:border-slate-700 dark:shadow-sky-900 dark:text-sky-500"
              }`}>
              {color === "red" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" h-8 w-8 -rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
