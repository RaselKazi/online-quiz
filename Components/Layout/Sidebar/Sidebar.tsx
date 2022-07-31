import React from "react";
import CloseButton from "../../Utils/CloseButton";
type SidebarProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
function Sidebar({ open, setOpen }: SidebarProps) {
  return (
    <div className=" h-screen w-full shadow-2xl flex flex-col border border-sky-500/50">
      <div className="lg:hidden">
        {open && <CloseButton setOpenBtn={setOpen}></CloseButton>}
      </div>

      <div className=" flex items-center pl-4  w-full  h-44 hover:cursor-pointer  transition-all duration-300 text-lg font-semibold capitalize">
        <div className=" flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-t from-gray-400/80 to-gray-50 shadow-lg text-3xl font-extrabold text-gray-400 mr-4">
          R
        </div>
        <p className=" font-bold text-2xl text-gray-400">Rasel kazi</p>
      </div>
      {["1", "2", "3"].map((item) => (
        <div
          key={item}
          className=" relative ml-3 pl-3 py-2 cursor-pointer group  transition-all duration-500">
          <div
            className={`text-lg text-center font-semibold text-gray-600 absolute flex items-center justify-center top-0  right-0 h-full  hover:border-r-8 w-5/6 transition-all duration-500 border-sky-300 hover:bg-gradient-to-r from-white to-sky-100 capitalize "
          }`}>
            blog
          </div>
          <div className="">
            <div
              className={`flex justify-center items-center  h-8 w-8 rounded-lg shadow-2xl rotate-45 overflow-hidden border-2 bg-gradient-to-tl  from-sky-600/30 to-gray-50 border-sky-300 "
              `}>
              <div
                className={` w-7 h-7 flex justify-center items-center   text-sky-500/60 -rotate-45 text-2xl font-bold   "
                `}>
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
