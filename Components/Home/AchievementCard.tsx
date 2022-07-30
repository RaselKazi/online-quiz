import React from "react";
import AchievementBases from "../Utils/AchievementBases";
import ProgressBar from "../Utils/ProgressBar";

export default function AchievementCard() {
  return (
    <div className=" rounded-2xl shadow-xl px-8 pt-10 ">
      <div className=" flex items-center gap-6">
        <div className=" flex w-2/3 gap-6 items-center">
          <h1 className="font-semibold text-xl text-black">AchievementCard</h1>
          <p className=" py-1 px-2 font-medium  text-gray-900 rounded-lg bg-gray-300 ">
            4
          </p>
        </div>

        <p className="font-medium  text-gray-400">123/23</p>
        <ProgressBar></ProgressBar>
      </div>
      <div className=" flex justify-center items-center my-20  gap-10">
        <AchievementBases></AchievementBases>
      </div>
      <div className=" border-t-2 border-gray-200 flex justify-center items-center h-12  ">
        <p className=" capitalize text-gray-500 cursor-pointer"> view all</p>
      </div>
    </div>
  );
}
