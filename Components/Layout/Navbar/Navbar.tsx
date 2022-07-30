import Image from "next/image";
import React from "react";
import Button from "../../Utils/Button";
import avatar from "../../../public/img/avatar.png";
import ButtonBig from "../../Utils/ButtonBig";

function Navbar() {
  return (
    <header className=" flex justify-end items-center h-20 w-full">
      <div className=" w-full md:w-1/2 flex justify-around">
        <div className=" flex gap-4">
          <Button title="Join Lobby" style="sande" />

          <ButtonBig title="Start Quiz"></ButtonBig>
        </div>
        <div className="flex">
          {["1", "2", "3"].map((img) => (
            <div key={img} className=" w-10 h-10">
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
