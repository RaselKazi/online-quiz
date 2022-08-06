import React, { useState, useContext, useEffect } from "react";

import { quizData } from "../../Data/quizData";
import Module from "../Utils/Module";
import QuizOption from "./QuizOption";
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { githubLight, githubDark } from "@uiw/codemirror-theme-github";
import { javascript } from "@codemirror/lang-javascript";
import { Store } from "../../Data/Store/Store";

const defaultExplain = {
  ansId: 0,
  correct: false,
  text: "",
  explain: "",
};

type QuizBodyProps = {
  countdown: number;
  start: () => void;
  reset: () => void;
};

type QuizExplain = {
  ansId: number | any;
  correct: boolean;
  text: string | any;
  explain: string;
};
export default function QuizBody({ countdown, start, reset }: QuizBodyProps) {
  const [pvs, setPvs] = useState(true);
  const [correctOption, setCorrectOption] = useState(5);
  const [explain, setExplain] = useState<QuizExplain>({} as QuizExplain);
  const [openModule, setOpenModule] = useState(false);
  const [count, setCount] = useState(30);
  const [nextActive, setNextActive] = useState(true);
  const [partyTime, setPartyTime] = useState(false);
  const { state, dispatch } = useContext(Store);

  const { answer, currantQuestionId, theme } = state;

  const answerList = quizData[currantQuestionId - 1]?.options.map((ite, i) => {
    return { ansId: i + 1, correct: ite.correct, text: ite.text };
  });

  const correctAns = answerList?.find((ite, i) => ite.correct);

  if (countdown < 1) {
    dispatch({
      type: "ADD_ANSWER_ITEM",
      payload: {
        id: currantQuestionId,
        ansId: 5,
        correct: false,
      },
    });
  }
  //handel option
  const optionHandler = (
    index: number,
    correct: boolean,
    explainText: string
  ) => {
    const answerData = {
      id: currantQuestionId,
      ansId: index,
      correct,
    };

    const explainData = {
      ansId: correctAns?.ansId,
      correct,
      text: correctAns?.text,
      explain: explainText,
    };

    setExplain(explainData);
    setCorrectOption(index);
    setNextActive(false);
    reset();
    if (pvs) {
      if (!correct && currantQuestionId % 3 === 0) {
        setOpenModule(true);
      }
      setPvs(false);
    }

    if (pvs) {
      dispatch({
        type: "ADD_ANSWER_ITEM",
        payload: answerData,
      });
    }
  };

  const handleNextButton = () => {
    if (currantQuestionId >= answer.length) {
      setNextActive(true);
    }
    dispatch({
      type: "UPDATE_QUESTION_ID",
      payload: currantQuestionId + 1,
    });

    setCorrectOption(5);
    reset();
    start();
    setExplain(defaultExplain);
    setPvs(true);
  };
  const handlePevButton = () => {
    dispatch({
      type: "UPDATE_QUESTION_ID",
      payload: currantQuestionId - 1,
    });
    setNextActive(false);
    setCorrectOption(5);
    setExplain(defaultExplain);
  };

  useEffect(() => {
    // const timeCountInterval = setInterval(() => {
    //   setCount((prevCount) => prevCount - 1);
    // }, 1000);
    // if (count <= 0) {
    //   clearInterval(timeCountInterval);
    // }
    // if (partyTime) {
    // }
    // return () => clearInterval(timeCountInterval);
  }, []);

  return (
    <div className="  px-12 py-4  flex justify-center">
      {/* module */}
      {openModule && (
        <Module
          openModule={openModule}
          explain={explain}
          setOpenModule={setOpenModule}></Module>
      )}

      <div className="z-0 w-full  bg-white dark:bg-slate-800/60 rounded-3xl drop-shadow-2xl">
        <div className=" w-full h-20">
          <div className="p-3 px-6 grid grid-cols-2">
            <div className="">
              <h1 className="text-2xl font-bold text-gray-400 dark:text-gray-300">
                Hello world!
              </h1>
            </div>
            <div className=" flex items-center justify-end gap-2">
              <div
                onClick={() => setOpenModule(true)}
                className=" cursor-pointer py-1.5 px-2 mx-3  rounded-md bg-gradient-to-t from-gray-300/80 to-gray-50 shadow-lg text-xl font-bold text-sky-600 dark:from-gray-700  dark:to-gray-800  dark:text-sky-400 dark:shadow-sky-600/20 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
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
              <div className=" lg:hidden flex items-center justify-end gap-2">
                <div className="py-2  px-3 rounded-md bg-gradient-to-t from-gray-300/80 to-gray-50 shadow-lg text-xl font-bold text-gray-500  tracking-widest dark:from-gray-800  dark:to-gray-600  dark:text-gray-200">
                  <div
                    style={{ transform: `rotate(${(30 - countdown) * 12}deg)` }}
                    className=" relative h-7 w-7 rounded-full border-2 border-gray-200">
                    <div className=" absolute top-1 left-1/2 h-[10px] w-0.5 border-b-2 bg-purple-500  border-gray-100  "></div>
                  </div>
                </div>

                <p className="py-2 px-3 rounded-md bg-gradient-to-t from-gray-300/80 to-gray-50 shadow-lg text-xl font-bold text-gray-500 dark:from-gray-800  dark:to-gray-600  dark:text-gray-200 tracking-widest">
                  {`${countdown <= 9 ? "0" + countdown : countdown}`}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-300 dark:bg-slate-700 h-1.5">
            <div
              style={{
                width: `${Math.round(
                  (currantQuestionId / quizData.length) * 100
                )}%`,
              }}
              className=" relative bg-gradient-to-r from-pink-400 to-orange-600 h-1.5 rounded-full">
              <div className=" absolute top-0 left-0  w-full bg-gradient-to-r from-pink-400 to-orange-600 h-2.5 rounded-full  blur "></div>
            </div>
          </div>
        </div>

        {/* body */}
        <div className=" w-full ">
          {quizData
            .slice(currantQuestionId - 1, currantQuestionId)
            .map((qu) => {
              return (
                <div key={qu.id} className="w-full  flex-col justify-between ">
                  <div className=" rounded-lg overflow-hidden relative ">
                    <div className=" absolute top-3 right-2 h-4 w-4 rounded-full bg-gradient-to-b from-red-100 to-red-600  shadow-md shadow-red-500"></div>
                    <div className=" absolute top-3 right-8 h-4 w-4 rounded-full bg-gradient-to-b from-yellow-100 to-yellow-600  shadow-md shadow-yellow-500 "></div>
                    <div className=" absolute top-3 right-14 h-4 w-4 rounded-full bg-gradient-to-b from-green-100 to-green-600  shadow-md shadow-green-500"></div>
                    <h1 className="py-3 px-6 pr-16 text-xl font-bold  bg-gradient-to-b from-gray-50 to-gray-300  text-gray-600  dark:from-slate-900  dark:to-slate-700   dark:text-gray-300">
                      {qu.title}
                    </h1>
                    <div className="">
                      <CodeMirror
                        value={qu.code}
                        height="320px"
                        theme={theme === "dark" ? dracula : githubLight}
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
                            optionHandler(i, option.correct, qu.explanation)
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

        <div className=" w-full h-20 px-6 py-2 border-t border-sky-300 dark:border-sky-500/40  flex justify-between items-center">
          <div className=" text-xl font-semibold text-gray-700 dark:text-gray-300">
            <p className=" flex">
              {`${currantQuestionId} of ${quizData.length} `}{" "}
              <span className=" ml-4 hidden lg:block">Question</span>
            </p>
          </div>
          <div className=" flex px-2">
            <button
              className="   py-2 px-5 rounded-lg bg-gradient-to-t from-gray-400 to-gray-50  dark:from-gray-500  dark:to-gray-800 flex mr-4 text-xl  font-semibold text-gray-800 dark:text-gray-100 capitalize shadow-lg shadow-gray-600/70 tracking-widest  hover:-translate-x-2 transition-all duration-300 border-x-4 border-gray-400 cursor-pointer disabled:opacity-30 "
              onClick={() => handlePevButton()}
              disabled={currantQuestionId <= 1}>
              Back
            </button>
            <button
              className="py-2 px-5 rounded-lg bg-gradient-to-t from-sky-300 to-sky-50  dark:from-sky-600  dark:to-gray-800 flex mr-4 text-xl  font-semibold text-gray-700 dark:text-sky-100 capitalize shadow-lg shadow-sky-500/70 dark:shadow-sky-500/40 tracking-widest hover:translate-x-2 transition-all duration-300 border-x-4 border-sky-400 cursor-pointer disabled:opacity-30"
              onClick={() => handleNextButton()}
              disabled={currantQuestionId >= quizData.length || nextActive}>
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
