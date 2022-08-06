import Image from "next/image";
import React, { useContext } from "react";
import { Store } from "../../Data/Store/Store";
import avatar from "../../public/img/avatar.png";
import ProgressBar from "../Utils/ProgressBar";
import IconCard from "./IconCard";

type ProfileCardProps = {
  totalCorrectAns: number;
  totalWrongAns: number;
  totalAnswer: number;
};
export default function ProfileCard({
  totalCorrectAns,
  totalWrongAns,
  totalAnswer,
}: ProfileCardProps) {
  return (
    <div className=" mx-12 my-8 grid grid-cols-12 gap-5 lg:gap-8">
      <div className=" col-span-3 lg:col-span-2 row-span-1 lg:row-span-2">
        <Image
          className="rounded-2xl hover:opacity-90 cursor-pointer"
          alt="avatar"
          src={avatar}
          layout="responsive"
          width={380}
          height={380}></Image>
      </div>
      <div className="col-span-9 ">
        <h1 className="font-sans  font-semibold text-4xl md:text-6xl text-gray-700 tracking-wide dark:text-gray-200">
          Rasel kazi
        </h1>
        <p className=" font-medium text-lg md:text-xl mt-4 text-gray-400 tracking-wider dark:text-gray-300">
          {`Bonus booster ${
            totalAnswer ? Math.floor((totalAnswer / 144) * 20) : "0"
          } Lv`}
        </p>
      </div>
      <div className="col-span-12 lg:col-span-9">
        <div className="mb-6 relative">
          <ProgressBar
            widthVal={Math.floor((totalAnswer / 144) * 100)}></ProgressBar>
          <div className=" absolute -top-9 right-1 font-medium text-gray-400 text-sm md:text-base ">
            {`${totalAnswer}0/1440 xp`}
          </div>
        </div>

        <div className=" flex justify-between">
          <IconCard text="Game Wins" countNumber={27} icon="Wins"></IconCard>
          <IconCard
            text="Wrong Answer"
            countNumber={totalWrongAns}
            icon="Score"></IconCard>
          <IconCard
            text="Correct Answers"
            countNumber={totalCorrectAns}
            icon="Correct"></IconCard>
        </div>
      </div>
    </div>
  );
}
