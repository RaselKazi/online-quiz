import React from "react";
import CloseButton from "./CloseButton";
import Markdown from "markdown-to-jsx";
type ModuleProps = {
  explain: { ansId: number; text: string; explain: string };
  openModule: boolean;
  setOpenModule: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Module({
  explain,
  openModule,
  setOpenModule,
}: ModuleProps) {
  return (
    <>
      <div
        className={`absolute   top-0 left-0 h-screen w-screen bg-gray-900/80 backdrop-blur-sm  flex justify-center items-center z-10 transition-all duration-500  overflow-hidden ${
          openModule
            ? " block opacity-100 scale-100 transition-all duration-500 "
            : " hidden opacity-0 scale-0"
        }`}>
        <div className="w-5/6 lg:w-3/6 h-4/6 overflow-hidden bg-gray-50 dark:bg-slate-800 relative rounded-2xl ">
          <div className=" h-12 w-full bg-gradient-to-b from-gray-100 to-gray-300  dark:from-slate-800 dark:to-slate-600"></div>
          <CloseButton setOpenBtn={setOpenModule}></CloseButton>

          <div className="text-justify text-xl h-5/6 overflow-y-auto py-4 px-10">
            <div className="">
              <div className=" flex justify-center py-8 cursor-pointer group  transition-all duration-500">
                <div
                  className={` relative text-xl px-14 text-center font-semibold text-gray-900 dark:text-gray-100  dark:bg-gray-700 flex items-center justify-center h-16 w-5/6 md:w-4/6 lg:w-4/6 rounded-lg  transition-all duration-500 shadow-xl bg-gray-50"
        `}>
                  {explain.text}
                  <div className=" absolute bottom-0 bg-gradient-to-b from-gray-300/50 to-gray-200/20 dark:from-gray-400/40  dark:to-gray-700/10 left-0 w-full h-1/2 "></div>
                  <div className=" absolute top-2   -left-5">
                    <div
                      className={`p-1 flex justify-center items-center  h-12 w-12 rounded-xl shadow-2xl rotate-45 overflow-hidden border-4 bg-gradient-to-tl  " from-sky-600/30 to-gray-50 border-sky-300 `}>
                      <div
                        className={` w-8 h-8 flex justify-center items-center bg-gradient-to-b  rounded-full  text-gray-200 -rotate-45 text-2xl font-bold  from-sky-100 to-sky-500  text-center`}>
                        {explain.ansId}
                      </div>
                    </div>
                  </div>
                  <div className=" absolute top-2  -right-5">
                    <div
                      className={`p-1 flex justify-center items-center  h-12 w-12 rounded-xl shadow-2xl rotate-45 overflow-hidden border-4 bg-gradient-to-tl  " from-sky-600/30 to-gray-50 border-sky-300 `}>
                      <div
                        className={` w-8 h-8 flex justify-center items-center bg-gradient-to-b  rounded-full  text-gray-200 -rotate-45 text-2xl font-bold  from-sky-100 to-sky-500  text-center`}>
                        {explain.ansId}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" font-serif text-lg font-semibold rounded-md text-gray-700 dark:text-gray-300 tracking-tight">
              <Markdown>{explain.explain}</Markdown>
            </div>
          </div>
          <div className=" h-12 w-full bg-gradient-to-b from-gray-300 to-gray-50 dark:from-slate-800 dark:to-slate-600"></div>
        </div>
      </div>
    </>
  );
}
