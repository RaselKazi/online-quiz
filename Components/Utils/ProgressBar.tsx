import React from "react";
type ProgressBarProps = { widthVal: number };
export default function ProgressBar({ widthVal }: ProgressBarProps) {
  return (
    <div className="w-full bg-gray-300 dark:bg-slate-800 rounded-full  h-2.5">
      <div
        style={{
          width: `${widthVal ? (widthVal <= 100 ? widthVal : 100) : 2}%`,
        }}
        className=" relative bg-gradient-to-r from-pink-400/80 to-orange-500/70 h-2.5 rounded-full  shadow-2xl shadow-orange-400 ">
        <div className=" absolute top-1 left-1  w-full bg-gradient-to-r from-pink-500/80 to-orange-500/70 h-2.5 rounded-full  shadow-2xl shadow-orange-400 blur "></div>
      </div>
    </div>
  );
}
