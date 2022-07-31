import React, { useState } from "react";
import AnswerBroad from "../Components/Quiz/AnswerBroad";
import Clock from "../Components/Quiz/Clock";
import FlipClock from "../Components/Quiz/FlipClock";
import QuizBody from "../Components/Quiz/QuizBody";
import SubmitBases from "../Components/Quiz/SubmitBases";
import Module from "../Components/Utils/Module";
import Timer from "../Components/Utils/Timer";

export default function quiz() {
  const [openModule, setOpenModule] = useState(false);
  return (
    <div className="">
      {openModule && <Module explain="" setOpenModule={setOpenModule}></Module>}
      <div className=" grid grid-cols-8 w-full">
        <div className="col-span-8 lg:col-span-6">
          <QuizBody></QuizBody>
        </div>
        <div className=" col-span-2 hidden lg:block">
          <div className=" flex flex-col justify-center items-center ">
            <Clock></Clock>
            <div className=" flex ">
              <Timer></Timer>
              <Timer></Timer>
            </div>
          </div>

          <AnswerBroad></AnswerBroad>
          <div className=" flex flex-col justify-evenly mt-6">
            <SubmitBases></SubmitBases>
            <SubmitBases></SubmitBases>
          </div>
        </div>
      </div>
    </div>
  );
}
