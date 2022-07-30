import Image from "next/image";
import React from "react";
import avatar from "../../public/img/avatar.png";
import ProgressBar from "../Utils/ProgressBar";
import IconCard from "./IconCard";
export default function ProfileCard() {
  return (
    <div className=" grid grid-cols-7 gap-7 md:gap-8">
      <div className=" col-span-2 row-span-1 md:row-span-2">
        <Image
          className="rounded-2xl hover:opacity-90 cursor-pointer"
          alt="avatar"
          src={avatar}
          layout="responsive"
          width={380}
          height={380}></Image>
      </div>
      <div className="col-span-5 ">
        <h1 className="font-sans  font-semibold text-5xl text-gray-700 tracking-wide">
          Rasel kazi
        </h1>
        <p className=" font-medium text-xl mt-4 text-gray-400 tracking-wider">
          Bron boster
        </p>
      </div>
      <div className="col-span-7 md:col-span-4">
        <div className="mb-6">
          <ProgressBar></ProgressBar>
        </div>

        <div className=" flex gap-4">
          <IconCard></IconCard>
          <IconCard></IconCard>
          <IconCard></IconCard>
        </div>
      </div>
    </div>
  );
}
