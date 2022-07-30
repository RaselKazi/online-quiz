import React from "react";

function Sidebar() {
  return (
    <div className=" h-screen w-full shadow-2xl flex flex-col">
      <div className=" flex  w-full py-8 px-4 h-40 hover:cursor-pointer hover:text-yellow-500 transition-all duration-300 text-lg font-semibold capitalize">
        <div className=" mr-3">
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
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
            />
          </svg>
        </div>
        <p className=" font-bold text-2xl text-gray-900">hi</p>
      </div>
      {["1", "2", "3"].map((item) => (
        <div
          key={item}
          className=" py-2 px-5 flex  items-center hover:cursor-pointer hover:text-orange-500 transition-all duration-300 text-lg font-semibold capitalize text-gray-600">
          <div className=" mr-3">
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
          <div className="py-1">
            <p className=" font-sans text-lg  font-semibold tracking-wide ">
              Blog
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
