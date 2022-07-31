import Image from "next/image";
import React from "react";
import avatar from "../../../public/img/avatar.png";
import FrameButton from "../../Utils/FrameButton";

function Navbar() {
  return (
    <header className=" flex justify-between items-center h-20 w-full">
      <div></div>
      <div className="flex justify-between w-2/3 md:w-1/2 px-8">
        <div className="">
          <FrameButton></FrameButton>
        </div>
        <div className="flex">
          {["1", "2", "3"].map((img) => (
            <div key={img} className=" w-10 h-10 -ml-3">
              <Image
                className=" rounded-full hover:opacity-90 cursor-pointer"
                alt="avatar"
                src={avatar}
                layout="fixed"
                width={40}
                height={40}></Image>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
