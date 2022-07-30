import React from "react";

type ModuleProps = {
  explain: string;
  setOpenModule: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Module({ explain, setOpenModule }: ModuleProps) {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen bg-gray-500/70 flex justify-center items-center z-20 transition duration-200">
      <div className="w-5/6 md:w-2/3 h-2/3 py-14  bg-gray-100 relative rounded-2xl ">
        <div
          className=" absolute top-0 right-0 m-3 cursor-pointer"
          onClick={() => setOpenModule(false)}>
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="text-justify text-xl h-full overflow-y-auto py-4 px-8">
          {explain}
        </div>
      </div>
    </div>
  );
}
