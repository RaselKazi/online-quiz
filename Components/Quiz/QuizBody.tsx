import React, { useState } from "react";

import { quizData } from "../../Data/quiz";
import Module from "../Utils/Module";
import QuizOption from "./QuizOption";
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { javascript } from "@codemirror/lang-javascript";
const defaultExplain = "hi im racel kazi";

export default function QuizBody() {
  const [nextQu, setNextQu] = useState(0);
  const [pvs, setPvs] = useState(true);
  const [correctOption, setCorrectOption] = useState(5);
  const [explain, setExplain] = useState(defaultExplain);
  const [openModule, setOpenModule] = useState(false);

  const optionHandler = (
    exp: React.SetStateAction<string>,
    index: React.SetStateAction<number>,
    correct: boolean
  ) => {
    setExplain(exp);
    setCorrectOption(index);

    if (!correct && pvs) {
      setOpenModule(true);
      setPvs(false);
    }
  };

  const handleNextButton = () => {
    setNextQu(nextQu + 1);
    setCorrectOption(5);
    setExplain(defaultExplain);
    setPvs(true);
  };
  const handlePevButton = () => {
    setNextQu(nextQu - 1);
    setCorrectOption(5);
    setExplain(defaultExplain);
  };

  return (
    <div className="  px-12 py-4  flex justify-center">
      {/* module */}
      {openModule && (
        <Module
          openModule={openModule}
          explain={explain}
          setOpenModule={setOpenModule}></Module>
      )}

      <div className=" w-full  bg-white rounded-3xl drop-shadow-2xl">
        <div className=" w-full h-20">
          <div className="p-3 px-6 grid grid-cols-2">
            <div className="">
              <h1 className="text-2xl font-bold text-gray-400">Hello world!</h1>
            </div>
            <div className=" flex items-center justify-between">
              <div
                onClick={() => setOpenModule(true)}
                className=" cursor-pointer py-2 mx-4 px-3 rounded-md bg-gradient-to-t from-sky-300/80 to-sky-50 shadow-lg text-xl font-bold text-sky-600 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8  "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex justify-center items-center">
                <div className="py-2 mx-3 px-3 rounded-md bg-gradient-to-t from-gray-300/80 to-gray-50 shadow-lg text-xl font-bold text-gray-500  tracking-widest">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <p className="py-2 px-3 rounded-md bg-gradient-to-t from-gray-300/80 to-gray-50 shadow-lg text-xl font-bold text-gray-500  tracking-widest">
                  10
                </p>
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-300 h   h-0.5">
            <div
              style={{
                width: `${Math.round((nextQu / quizData.length) * 100)}%`,
              }}
              className=" relative bg-gradient-to-r from-sky-400 to-blue-700 h-0.5 rounded-full">
              <div className=" absolute top-0 left-0  w-full bg-gradient-to-r from-sky-400/50 to-blue-700/50 h-1.5 rounded-full  blur-sm "></div>
            </div>
          </div>
        </div>

        {/* body */}
        <div className=" w-full ">
          {quizData.slice(nextQu, nextQu + 1).map((qu) => {
            return (
              <div key={qu.id} className="w-full  flex-col justify-between ">
                <div className=" rounded-lg overflow-hidden relative">
                  <div className=" absolute top-3 right-2 h-4 w-4 rounded-full bg-gradient-to-b from-red-100 to-red-600  shadow-md shadow-red-500"></div>
                  <div className=" absolute top-3 right-8 h-4 w-4 rounded-full bg-gradient-to-b from-yellow-100 to-yellow-600  shadow-md shadow-yellow-500 "></div>
                  <div className=" absolute top-3 right-14 h-4 w-4 rounded-full bg-gradient-to-b from-green-100 to-green-600  shadow-md shadow-green-500"></div>
                  <h1 className="py-3 px-6 text-lg font-bold bg-gray-700 text-gray-300">
                    {qu.title}
                  </h1>
                  <div className="">
                    <CodeMirror
                      value={qu.code}
                      height="320px"
                      theme={dracula}
                      extensions={[javascript({ jsx: true })]}
                      className=" h text-xl overflow-y-auto "
                    />
                  </div>
                </div>

                <div className=" ml-10 mt-6 m-4 grid grid-cols-1 md:grid-cols-2">
                  {qu.options.map((option, i) => {
                    return (
                      <div
                        key={i}
                        onClick={() =>
                          optionHandler(qu.explanation, i, option.correct)
                        }>
                        <QuizOption
                          id={i}
                          option={option}
                          correctOption={correctOption}></QuizOption>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className=" w-full h-20 px-6 py-2 border-t-2 border-sky-200 flex justify-between items-center">
          <div className=" text-xl font-semibold text-gray-700">
            <p className=" flex">
              {`${nextQu + 1} of ${quizData.length} `}{" "}
              <span className=" ml-4 hidden lg:block">Question</span>
            </p>
          </div>
          <div className=" flex px-2">
            <button
              className="   py-2 px-5 rounded-lg bg-gradient-to-t from-gray-400 to-gray-50 flex mr-4 text-xl  font-semibold text-gray-800 capitalize shadow-lg shadow-gray-600/70 tracking-widest  hover:-translate-x-2 transition-all duration-300 border-x-4 border-gray-400 "
              onClick={() => handlePevButton()}
              disabled={nextQu < 1}>
              Back
            </button>
            <button
              className="py-2 px-5 rounded-lg bg-gradient-to-t from-sky-300 to-sky-50 flex mr-4 text-xl  font-semibold text-gray-700 capitalize shadow-lg shadow-sky-500/70 tracking-widest hover:translate-x-2 transition-all duration-300 border-x-4 border-sky-400"
              onClick={() => handleNextButton()}
              disabled={nextQu >= quizData.length - 1}>
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
