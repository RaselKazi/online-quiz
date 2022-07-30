import React, { useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { quizData } from "../../Data/quiz";
import QuizOption from "./QuizOption";
export default function QuizBody() {
  const [nextQu, setNextQu] = useState(0);
  const [option, setOption] = useState(5);
  const [explain, setExplain] = useState("");
  const [openModule, setOpenModule] = useState(false);

  const optionHandler = (
    exp: React.SetStateAction<string>,
    index: React.SetStateAction<number>
  ) => {
    setExplain(exp);
    setOption(index);
  };

  const handleNextButton = () => {
    setNextQu(nextQu + 1);
    setOption(5);
    setExplain("");
  };
  const handlePevButton = () => {
    setNextQu(nextQu - 1);
    setOption(5);
    setExplain("");
  };
  return (
    <div className="  px-12 py-4  flex justify-center">
      {/* module */}

      <div className=" w-full  bg-white rounded-3xl drop-shadow-2xl">
        <div className=" w-full h-20">
          <div className="p-4 flex justify-between">
            <div className="">
              <h1 className="text-xl font-bold">Hello world!</h1>
            </div>
            <div
              onClick={() => setOpenModule(true)}
              className=" cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="py-2 px-3 rounded-md bg-green-200  flex">
              10
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </div>
          </div>
          <div className="w-full bg-gray-300 h   h-0.5">
            <div
              style={{ width: "60%" }}
              className=" relative bg-gradient-to-r from-sky-400 to-blue-700 h-0.5 rounded-full">
              <div className=" absolute top-0 left-0  w-full bg-gradient-to-r from-sky-400/50 to-blue-700/50 h-1.5 rounded-full  blur-sm "></div>
            </div>
          </div>
        </div>

        {/* body */}
        <div className=" w-full h-fit max-h-fit">
          {quizData.slice(nextQu, nextQu + 1).map((qu) => {
            return (
              <div key={qu.id} className="w-full  flex-col justify-between ">
                <div className=" h-64 lg:h-80">
                  <h1 className="text-xl font-bold">{qu.title}</h1>
                  <div className="">
                    {/* <CodeMirror
                    value={qu.code}
                    options={{
                      mode: "xml",
                      theme: "material",
                      lineNumbers: true,
                    }}
                    onChange={(editor, data, value) => {}}
                    className="h-[250px] text-xl overflow-y-auto "
                  /> */}
                  </div>
                </div>

                <div className=" ml-6 grid grid-cols-1 md:grid-cols-2">
                  {qu.options.map((option, i) => {
                    return (
                      <QuizOption key={i} id={i} option={option}></QuizOption>
                      // <div
                      //   key={po.text}
                      //   className={`m-2 p-2 flex justify-between  text-lg  font-bold border-2  rounded-md  shadow-xl  cursor-pointer transition duration-200 ${
                      //     option !== i
                      //       ? "hover:bg-gray-200 border-gray-300"
                      //       : po.correct
                      //       ? "border-sky-500 bg-sky-500/40"
                      //       : "border-red-500 bg-red-500/40"
                      //   }`}
                      //   onClick={() => optionHandler(qu.explanation, i)}>
                      //   {po.text}
                      //   {option !== i ? (
                      //     ""
                      //   ) : po.correct ? (
                      //     <svg
                      //       xmlns="http://www.w3.org/2000/svg"
                      //       className="h-8 w-8 text-blue-600"
                      //       fill="none"
                      //       viewBox="0 0 24 24"
                      //       stroke="currentColor"
                      //       strokeWidth="2">
                      //       <path
                      //         strokeLinecap="round"
                      //         strokeLinejoin="round"
                      //         d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      //       />
                      //     </svg>
                      //   ) : (
                      //     <svg
                      //       xmlns="http://www.w3.org/2000/svg"
                      //       className="h-8 w-8 text-red-700"
                      //       fill="none"
                      //       viewBox="0 0 24 24"
                      //       stroke="currentColor"
                      //       strokeWidth="2">
                      //       <path
                      //         strokeLinecap="round"
                      //         strokeLinejoin="round"
                      //         d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      //       />
                      //     </svg>
                      //   )}
                      // </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className=" w-full h-20 px-6 py-2 border-t-2 border-sky-200 flex justify-between items-center">
          <div className=" text-xl font-semibold text-gray-700">
            <p>
              {`${nextQu + 1} of ${quizData.length} `}{" "}
              <span className=" hidden lg:block">Question</span>
            </p>
          </div>
          <div className=" flex px-2">
            <button
              className="   py-2 px-5 rounded-lg bg-gradient-to-t from-gray-400 to-gray-50 flex mr-4 text-xl  font-semibold text-gray-800 capitalize shadow-lg shadow-gray-600/70 tracking-widest  hover:-translate-x-2 transition-all duration-300 border-r-4 border-sky-300 "
              onClick={() => handlePevButton()}
              disabled={nextQu < 1}>
              Back
            </button>
            <button
              className="py-2 px-5 rounded-lg bg-gradient-to-t from-sky-300 to-sky-50 flex mr-4 text-xl  font-semibold text-gray-700 capitalize shadow-lg shadow-sky-500/70 tracking-widest hover:translate-x-2 transition-all duration-300 border-l-4 border-sky-300"
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
