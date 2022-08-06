import React from "react";

type BasesProps = { color: string; tittle: string };
export default function InventoryBases({ color, tittle }: BasesProps) {
  return (
    <div className="">
      <div
        className={`p-2 flex justify-center items-center  h-28 w-28  rounded-3xl shadow-xl  bg-gradient-to-tl from-gray-50 to-gray-100  dark:from-slate-800  dark:to-slate-900/5 rotate-45 overflow-hidden  ${
          color === "green"
            ? "shadow-green-200 dark:shadow-green-500/10 "
            : color === "yellow"
            ? "shadow-yellow-200 dark:shadow-yellow-500/10 "
            : "shadow-pink-200 dark:shadow-pink-500/10 "
        }`}>
        <div
          className={`flex  justify-center items-center rounded-3xl  h-full w-full   bg-gradient-to-tl  ${
            color === "green"
              ? "from-green-400/30 to-green-50  dark:from-green-500/20  dark:to-slate-800/30 "
              : color === "yellow"
              ? "from-yellow-400/30 to-yellow-50 dark:from-yellow-500/20  dark:to-slate-800/30 "
              : "from-pink-400/30 to-pink-50 dark:from-pink-500/20  dark:to-slate-800/30 "
          }`}>
          <div
            className={` p-1 bg-gradient-to-b   rounded-full border-4  shadow-2xl   text-gray-200 -rotate-45 ${
              color === "green"
                ? " border-green-500/60 shadow-green-500 to-green-400  from-green-300"
                : color === "yellow"
                ? "border-yellow-500/60 shadow-yellow-500 to-yellow-400  from-yellow-300 "
                : "border-pink-500/60 shadow-pink-500 to-pink-400  from-pink-300 "
            }`}>
            {color === "green" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
            ) : color === "yellow" ? (
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
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 pb-1"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            )}
          </div>
        </div>
      </div>

      <h1 className="mt-8 font-semibold text-lg text-center text-gray-600 dark:text-gray-400 capitalize">
        {tittle}
      </h1>
    </div>
  );
}
