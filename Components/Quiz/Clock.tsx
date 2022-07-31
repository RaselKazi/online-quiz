import React, { useEffect, useState } from "react";

export default function Clock() {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   const timeCount = setInterval(() => {
  //     setCount((prevCount) => prevCount + 12);
  //   }, 1000);
  //   if (count >= 30) {
  //     clearInterval(timeCount);
  //   }
  //   return () => {
  //     clearInterval(timeCount);
  //   };
  // }, []);

  console.log(count);
  return (
    <>
      <div className="clock__circle  relative flex justify-center items-center h-40 w-40 w rounded-full shadow-lg  shadow-inherit">
        <span className=" absolute top-3 left-1/2 h-3 w-0.5 bg-gray-300"></span>
        <span className="absolute right-4 top-1/2 h-3 w-0.5 bg-gray-300 rotate-90"></span>
        <span className=" absolute bottom-3 left-1/2 h-3 w-0.5 bg-gray-300"></span>
        <span className="absolute left-4 top-1/2 h-3 w-0.5 bg-gray-300 rotate-90"></span>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   h-2 w-2 rounded-full bg-purple-900"></div>
        <div
          style={{ transform: `rotate(${count}deg)` }}
          className=" bottom-1/2 left-1/2  absolute h-12 w-0.5 rounded-full bg-purple-900 origin-bottom"
          id="clock-seconds">
          <div className=" absolute  -bottom-4 right-0 h-5 w-0.5 bg-purple-900"></div>
        </div>
      </div>
    </>
  );
}
