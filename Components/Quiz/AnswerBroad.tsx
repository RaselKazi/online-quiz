import React from "react";

export default function AnswerBroad() {
  return (
    <div className="rounded-xl shadow-2xl px-4 py-6">
      <div className=" flex justify-center items-center pb-4 text-xl font-semibold capitalize text-gray-500">
        <p>total answer</p>
      </div>
      <div className="grid grid-cols-4  gap-2">
        {[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
        ].map((item) => (
          <div
            key={item}
            className=" flex items-center justify-center h-10 w-10 rounded-full border-2 border-sky-300 cursor-pointer hover:bg-slate-200 transition-all duration-300">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
