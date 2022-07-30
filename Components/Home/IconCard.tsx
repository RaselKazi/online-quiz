import React from "react";

export default function IconCard() {
  return (
    <div className=" flex gap-2 items-center">
      <div className="p-3 rounded-2xl shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      </div>
      <div className=" ">
        <h1 className=" font-bold text-2xl ">20</h1>
        <p className="font-medium  text-gray-400">game wore</p>
      </div>
    </div>
  );
}
