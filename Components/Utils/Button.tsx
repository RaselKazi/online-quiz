import React from "react";

type PropsType = {
  style?: string;
  title: string;
};

export default function Button({ style, title }: PropsType) {
  return (
    <div
      className={
        style === "sande"
          ? `py-2 px-4 bg-white text-black border-2 border-gray-900 rounded-lg capitalize hover:bg-black hover:text-white transition-all duration-300 cursor-pointer`
          : ` py-2 px-4 bg-black text-white rounded-lg cursor-pointer capitalize hover:bg-gray-700  transition-all duration-300`
      }>
      {title}
    </div>
  );
}
