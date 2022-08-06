import React from "react";
import InventoryBases from "../Utils/InventoryBases";
import ProgressBar from "../Utils/ProgressBar";
type InventoryCardProps = {
  totalCorrectAns: number;
  totalWrongAns: number;
  totalAnswer: number;
};
export default function InventoryCard({
  totalCorrectAns,
  totalWrongAns,
  totalAnswer,
}: InventoryCardProps) {
  return (
    <div className=" rounded-2xl shadow-xl px-8 pt-10 dark:bg-slate-800/60 ">
      <div className=" flex items-center gap-6">
        <div className=" flex w-2/3 gap-6 items-center">
          <h1 className="font-semibold text-xl text-black dark:text-slate-300 ">
            InventoryCard
          </h1>
          <p className=" py-1 px-2 font-medium  text-gray-900 dark:text-gray-300 rounded-lg bg-gray-300 dark:bg-slate-700 ">
            4
          </p>
        </div>

        <p className="font-medium  text-gray-400 dark:text-gray-600">{`${Math.floor(
          (totalAnswer / 120) * 100
        )}/150`}</p>
        <ProgressBar
          widthVal={Math.floor((totalCorrectAns / 70) * 100)}></ProgressBar>
      </div>

      <div className=" grid grid-cols-2  lg:grid-cols-3 justify-items-center items-center mt-16 mb-8 gap-6 lg:gap-10 ">
        <InventoryBases color="green" tittle="Extra time"></InventoryBases>
        <InventoryBases
          color="yellow"
          tittle={`${Math.floor(
            (totalAnswer / 144) * 50
          )}/50`}></InventoryBases>
        <div className=" col-span-2 lg:col-span-1">
          <InventoryBases
            color="pink"
            tittle="powerful answer"></InventoryBases>
        </div>
      </div>

      <div className=" border-t border-gray-300 dark:border-sky-900 flex justify-center items-center h-12  ">
        <p className=" capitalize text-gray-500 cursor-pointer"> view all</p>
      </div>
    </div>
  );
}
