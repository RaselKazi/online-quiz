import React from "react";

type AchievementProps = { color: string; tittle: string; opacity: number };
export default function AchievementBases({
  color,
  tittle,
  opacity,
}: AchievementProps) {
  return (
    <div style={{ opacity: `${opacity >= 100 ? 100 : 40}%` }}>
      <div className=" relative">
        <div className=" absolute -bottom-10 left-2 h-10 w-28 rounded-full w  blur-xl bg-gray-300 dark:bg-slate-700"></div>
        <div className=" relative  h-[4.5rem] w-[7rem] bg-gray-50 dark:bg-slate-900 rounded-xl ">
          <div className=" absolute w-full h-full top-0 left-0 bg-gray-50 dark:bg-slate-900 rounded-xl rotate-[60deg] "></div>
          <div className=" absolute w-full h-full top-0 left-0 bg-gray-50 dark:bg-slate-900 rounded-xl rotate-[120deg] "></div>
        </div>

        <div className=" absolute top-1 left-2 ">
          <div className=" relative   h-[4rem] w-[6rem] bg-gradient-to-b from-gray-100 to-gray-300 dark:from-slate-900  dark:to-gray-800  rounded-xl ">
            <div className=" absolute w-full h-full top-0 left-0 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-slate-900  dark:to-gray-800 rounded-xl rotate-[60deg]  overflow-hidden"></div>
            <div className=" absolute flex justify-center items-center w-full h-full top-0 left-0 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-slate-900  dark:to-gray-800 rounded-xl rotate-[120deg] ">
              <div
                className={`absolute h-12 w-4 bg-gray-50 -bottom-4 left-8  border-x-[6px]   rotate-[20deg]  ${
                  color === "purple"
                    ? "border-purple-600"
                    : color === "sky"
                    ? "border-sky-400"
                    : " border-yellow-300"
                }`}></div>

              <div
                className={`absolute h-12 w-4 bg-gray-50 bottom-3 right-16 border-x-[6px]  rotate-[105deg]  ${
                  color === "purple"
                    ? "border-purple-600"
                    : color === "sky"
                    ? "border-sky-400"
                    : " border-yellow-300"
                }`}></div>
              <div
                className={`  p-1 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full border-[6px] border-gray-400 shadow-xl   text-gray-200  -rotate-[120deg] ${
                  color === "purple"
                    ? "shadow-purple-400/80"
                    : color === "sky"
                    ? "shadow-sky-400/40"
                    : " shadow-yellow-400/40"
                }`}>
                {color === "purple" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                  </svg>
                ) : color === "sky" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="mt-10 font-semibold text-xl text-center text-gray-600  dark:text-gray-400">
        {tittle}
      </h1>
    </div>
  );
}
