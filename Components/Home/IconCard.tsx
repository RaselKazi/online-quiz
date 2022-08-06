import React from "react";

interface SvgIconConstituentValues {
  strokeColor?: string;
  strokeWidth?: string;
  strokeWidth2?: string;
  strokeWidth3?: string;
  strokeFill?: string;
  fillColor?: string;
  fillColor2?: string;
  fillColor3?: string;
  fillColor4?: string;
  fillColor5?: string;
  fillColor6?: string;
  fillColor7?: string;
  imageWidth?: string;
  imageHeight?: string;
  width?: string;
  height?: string;
  rotateCenter?: number;
  className?: string;
  className2?: string;
}
type IconCardProps = { text: string; countNumber: number; icon: string };
export default function IconCard({ text, countNumber, icon }: IconCardProps) {
  return (
    <div className=" flex gap-2 items-center">
      <div className="p-1 md:p-4 rounded-2xl shadow-lg text-gray-600 dark:text-gray-100">
        {icon === "Wins" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
              clipRule="evenodd"
            />
          </svg>
        ) : icon === "Score" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      <div className=" ml-1 md:ml-3 lg:ml-5 ">
        <h1 className=" font-bold text-xl lg:text-3xl  text-gray-700 dark:text-gray-100">
          {countNumber}
        </h1>
        <p className="font-medium text-sm md:text-base text-gray-400 dark:text-gray-500">
          {text}
        </p>
      </div>
    </div>
  );
}
