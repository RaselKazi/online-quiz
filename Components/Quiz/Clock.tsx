import React, { useContext, useEffect, useRef, useState } from "react";
import { Store } from "../../Data/Store/Store";
type TimerClock = { time: number };
export default function Clock({ time }: TimerClock) {
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);

  const { state, dispatch } = useContext(Store);

  const { theme } = state;
  return (
    <>
      <div
        className={`mt-2  relative flex justify-center items-center h-40 w-40 rounded-full shadow-lg ${
          theme === "dark" ? " dark_theme " : "clock_circle"
        }`}>
        <span className=" absolute top-3 left-1/2 h-3 w-0.5 bg-gray-300 dark:bg-gray-500 "></span>
        <span className="absolute right-4 top-1/2 h-3 w-0.5 bg-gray-300  dark:bg-gray-500 rotate-90"></span>
        <span className=" absolute bottom-3 left-1/2 h-3 w-0.5 bg-gray-300 dark:bg-gray-500 "></span>
        <span className="absolute left-4 top-1/2 h-3 w-0.5 bg-gray-300 dark:bg-gray-500 rotate-90"></span>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   h-2 w-2 rounded-full bg-purple-900  "></div>
        <div
          style={{ transform: `rotate(${(30 - time) * 12}deg)` }}
          className=" bottom-1/2 left-1/2  absolute h-12 w-0.5 rounded-full bg-purple-900 origin-bottom"
          id="clock-seconds">
          <div className=" absolute  -bottom-4 right-0 h-5 w-0.5 bg-purple-900"></div>
        </div>
      </div>
    </>
  );
}
