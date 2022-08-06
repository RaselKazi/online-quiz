import React from "react";
import AchievementBases from "../Utils/AchievementBases";
import ProgressBar from "../Utils/ProgressBar";
type AchievementCardProps = {
  totalCorrectAns: number;
  totalAnswer: number;
};
export default function AchievementCard({
  totalCorrectAns,
  totalAnswer,
}: AchievementCardProps) {
  return (
    <div className=" rounded-2xl shadow-xl px-8 pt-10  dark:bg-slate-800/60">
      <div className=" flex items-center gap-6">
        <div className=" flex w-2/3 gap-6 items-center">
          <h1 className="font-semibold text-xl text-black dark:text-slate-300">
            AchievementCard
          </h1>
          <p className=" py-1 px-2 font-medium  text-gray-900 dark:text-gray-300 rounded-lg bg-gray-300 dark:bg-slate-700 ">
            {Math.floor((totalCorrectAns / 100) * 4)}
          </p>
        </div>

        <p className="font-medium  text-gray-400 dark:text-gray-600">{`${Math.floor(
          (totalAnswer / 144) * 100
        )}/150`}</p>
        <ProgressBar
          widthVal={Math.floor((totalCorrectAns / 144) * 100)}></ProgressBar>
      </div>
      <div className=" grid grid-cols-3 md:grid-cols-2  lg:grid-cols-3 justify-items-center items-center mt-20 mb-12 gap-6 md:gap-16 lg:gap-10 ">
        <AchievementBases
          opacity={Math.floor((totalCorrectAns / 10) * 100)}
          color="purple"
          tittle=" Comeback"
        />
        <AchievementBases
          opacity={Math.floor((totalCorrectAns / 50) * 100)}
          color="sky"
          tittle=" Lucky"
        />
        <div className=" col-span-1  md:col-span-2 lg:col-span-1">
          <AchievementBases
            opacity={Math.floor((totalCorrectAns / 110) * 100)}
            color="yellow"
            tittle="Leader"
          />
        </div>
      </div>

      <div className=" border-t border-gray-200 flex justify-center items-center h-12 dark:border-sky-900 ">
        <p className=" capitalize text-gray-500 cursor-pointer"> view all</p>
      </div>
    </div>
  );
}
