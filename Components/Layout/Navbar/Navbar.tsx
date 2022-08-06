import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import avatar from "../../../public/img/avatar.png";
import FrameButton from "../../Utils/FrameButton";
import { Store } from "../../../Data/Store/Store";

function Navbar() {
  const { state, dispatch } = useContext(Store);

  const { theme } = state;
  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const themeHandler = () => {
    const colorTheme = theme === "light" ? "dark" : "light";
    dispatch({
      type: "UPDATE_THEME",
      payload: colorTheme,
    });
  };
  const resetQuiz = () => {
    dispatch({ type: "RESET_QUIZ" });
  };
  const logOut = () => {
    dispatch({ type: "USER_LOGOUT" });
  };

  return (
    <div className=" grid grid-cols-3 justify-items-center px-8  w-2/3">
      <FrameButton></FrameButton>
      <div
        onClick={themeHandler}
        className=" p-2 rounded-xl bg-gradient-to-t from-gray-300/80 to-gray-50 shadow-lg  text-gray-500  dark:from-gray-600  dark:to-gray-800/80 dark:text-sky-500 dark:shadow-sky-800 cursor-pointer z-30 ">
        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </div>
      <div className="flex relative  items-center group">
        <div className=" w-10 h-10 -ml-3">
          <Image
            className=" rounded-full hover:opacity-90 cursor-pointer"
            alt="avatar"
            src={avatar}
            layout="fixed"
            width={40}
            height={40}></Image>
        </div>
        <h1 className=" hidden lg:block ml-3 cursor-pointer text-slate-600   hover:text-slate-400 text-center font-medium text-lg  dark:text-slate-100  dark:hover:text-slate-400 capitalize  transition-all duration-300">
          Rasel kazi
        </h1>

        <div className=" hidden group-hover:block absolute z-20 top-6 -left-2  w-28 bg-slate-50 rounded-md text-center font-medium text-lg text-slate-600 dark:bg-slate-900 dark:text-slate-200 capitalize border border-slate-300   dark:border-slate-600 group-hover:transition-all duration-300 ">
          <h1
            className="  py-1 cursor-pointer border-b border-slate-300  dark:border-slate-600  hover:bg-slate-300 dark:hover:bg-slate-700"
            onClick={resetQuiz}>
            reset Quiz
          </h1>
          <h1
            className=" py-1 cursor-pointer   hover:bg-slate-300 dark:hover:bg-slate-700 "
            onClick={logOut}>
            log out
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
