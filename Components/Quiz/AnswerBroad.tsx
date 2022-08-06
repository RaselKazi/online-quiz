import React, { useContext } from "react";
import { Store } from "../../Data/Store/Store";

export default function AnswerBroad() {
  const { state, dispatch } = useContext(Store);

  const { answer, currantQuestionId } = state;
  const start = Math.floor(answer?.length / 15) * 15;
  const end = answer?.length;
  let board = [
    { id: 2, correct: true, mark: true },
    { id: 3, correct: false, mark: true },
    { id: 114, correct: false, mark: false },
  ];
  // for (let i = 0; i == 15; i++) {
  //   console.log(i);
  //   // if (answer[i + start]) {
  //   //   console.log("ht");
  //   //   board.push({ id: i + start, correct: true, mark: true });
  //   // } else {
  //   //   console.log("hm");
  //   //   board.push({ id: i + start, correct: false, mark: false });
  //   // }
  // }
  let rows = [];
  if (start / 15 == 0) {
    rows = [];
  }
  for (let i = end; i <= start + 14; i++) {
    rows.push(
      <div
        key={i}
        className="flex items-center justify-center h-10 w-10 rounded-full   cursor-pointer bg-white dark:bg-slate-800   transition-all duration-300 font-medium dark:text-gray-600 border-2 border-gray-300 dark:border-gray-700  text-gray-500 hover:text-gray-900 hover:bg-gray-200  dark:hover:text-gray-900  dark:hover:bg-gray-700">
        {i + 1}
      </div>
    );
  }
  return (
    <div className="rounded-xl shadow-2xl px-4 py-2 mr-6 dark:bg-slate-800/60">
      <div className=" flex justify-center items-center pb-2 text-xl font-semibold capitalize text-gray-500  dark:text-gray-200 border-b dark:border-sky-500/50 border-sky-100">
        <p>total answer</p>
      </div>
      <div className="grid grid-cols-4 py-2  gap-2">
        {answer
          ?.slice(start, end)
          .map((item: { id: string; correct: boolean }) => (
            <div
              key={item.id}
              className={`flex items-center justify-center h-10 w-10 rounded-full   cursor-pointer bg-white dark:bg-slate-800   transition-all duration-300 font-medium dark:text-gray-50 border-2 ${
                item.correct
                  ? " hover:text-gray-50 bg-green-50  border-green-400 hover:bg-green-400 "
                  : " bg-red-50 border-red-400 hover:bg-red-400 hover:text-gray-50  "
              }`}>
              {item.id}
            </div>
          ))}
        {rows.map((item) => item)}
      </div>
      <div className="border-t border-sky-200 dark:border-sky-500/50 pt-1">
        <p className=" text-gray-400 text-center">view all</p>
      </div>
    </div>
  );
}
