import React from "react";
type TimerProps = { time: number; type: string };
export default function Timer({ time, type }: TimerProps) {
  return (
    <div className=" my-4 mx-2 flex justify-center items-center  w-12 h-12 rounded-lg bg-gradient-to-t from-gray-400/80 to-gray-50  dark:from-gray-900  dark:to-gray-700  shadow-lg">
      <p className=" text-2xl font-bold text-gray-500  dark:text-gray-300">
        {`${
          type === "mileSec" ? "0" + Math.floor(time / 10) : "0" + (time % 10)
        }`}
      </p>
    </div>
  );
}
