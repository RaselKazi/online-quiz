import React, { useState } from "react";
import CloseButton from "../../Utils/CloseButton";
import { MenuItem } from "../../../Data/MenuData";
import Link from "next/link";
type SidebarProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
function Sidebar({ open, setOpen }: SidebarProps) {
  const [active, setActive] = useState("");
  return (
    <div className=" h-screen w-full shadow-2xl flex flex-col border-r border-sky-500/50">
      <div className=" lg:hidden">
        <CloseButton setOpenBtn={setOpen}></CloseButton>
      </div>

      <div className=" flex items-center pl-4  w-full  h-44 hover:cursor-pointer  transition-all duration-300 text-lg font-semibold capitalize">
        <div className=" flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-t from-gray-400/80 to-gray-50 dark:from-slate-900/90 dark:to-slate-700 bg shadow-lg text-3xl font-extrabold text-gray-400 dark:text-gray-500 mr-4">
          R
        </div>
        <p className=" font-bold text-2xl text-gray-400 dark:text-gray-600">
          Rasel kazi
        </p>
      </div>
      {MenuItem.map((item) => (
        <div
          key={item.title}
          onClick={() => {
            setActive(item.title);
          }}
          className=" relative ml-3 pl-3 py-2 my-2 cursor-pointer group  transition-all duration-500 ">
          <Link href={`${item.link}`} passHref>
            <div
              className={`absolute flex items-center top-0 right-0 pl-8 text-lg font-semibold text-gray-500 dark:text-sky-800  h-full  hover:text-sky-400 dark:hover:text-sky-500 hover:border-r-8 w-5/6 transition-all duration-500 border-sky-300 dark:border-sky-600 hover:bg-gradient-to-r from-white dark:from-slate-900 to-sky-100 dark:to-sky-900/60  ${
                active === item.title
                  ? " text-sky-400 dark:text-sky-500 border-r-8 bg-gradient-to-r from-white to-sky-100 "
                  : ""
              } capitalize"
          `}>
              {item.title}
            </div>
          </Link>

          <div className="">
            <div
              className={`flex justify-center items-center  h-8 w-8 rounded-lg shadow-lg rotate-45 overflow-hidden border-2 bg-gradient-to-tl  from-sky-600/30 to-gray-50 dark:from-slate-800 dark:to-slate-700 dark:border-slate-600 dark:shadow-sky-900 border-sky-300 "
              `}>
              <div
                className={` w-7 h-7 flex justify-center items-center   text-sky-500/60 dark:text-sky-400 -rotate-45 text-2xl font-bold   "
                `}>
                {item.icon}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
