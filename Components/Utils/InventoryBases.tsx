import React from "react";

export default function InventoryBases() {
  return (
    <div className=" p-2 flex justify-center items-center  h-28 w-28 rounded-3xl shadow-2xl  bg-gradient-to-tl from-gray-50 to-gray-100 rotate-45 overflow-hidden">
      <div className="flex  justify-center items-center rounded-3xl  h-full w-full   bg-gradient-to-tl from-sky-600/30 to-gray-50  ">
        <div className=" p-2 bg-gradient-to-b from-sky-100 to-sky-500 rounded-full border-4 border-sky-400 shadow-2xl shadow-sky-500  text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 -rotate-45 "
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
  );
}
