/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import React from "react";
import cone from "../../public/buttonImg/cone.png";
import torus from "../../public/buttonImg/torus.png";
import icosahedron from "../../public/buttonImg/icosahedron.png";
import sphere from "../../public/buttonImg/sphere.png";

type PropsType = {
  style?: string;
  title: string;
};

export default function ButtonBig({ style, title }: PropsType) {
  return (
    <div>
      <div className="button relative">
        <span className="button__text">play</span>
        <div className=" absolute top-6 left-6 button__cone">
          <Image
            className="button_img"
            alt="avatar"
            src={cone}
            layout="fixed"
            width={20}
            height={20}></Image>
        </div>
        <div className=" absolute top-6 left-1/3 button__torus">
          <Image
            className="button_img"
            alt="avatar"
            src={torus}
            layout="fixed"
            width={25}
            height={25}></Image>
        </div>
        <div className=" absolute top-6  right-8 button__icosahedron">
          <Image
            className="button_img"
            alt="avatar"
            src={icosahedron}
            layout="fixed"
            width={35}
            height={35}></Image>
        </div>
        <div className=" absolute bottom-1 left-1/3 button__sphere">
          <Image
            className=" button_img"
            alt="avatar"
            src={sphere}
            layout="fixed"
            width={25}
            height={25}></Image>
        </div>

        <img
          src="../../public/buttonImg/cone.png"
          alt=""
          className="button__cone"
        />
        <img
          src="../../public/buttonImg/torus.png"
          alt=""
          className="button__torus"
        />
        <img
          src="../../public/buttonImg/icosahedron.png"
          alt=""
          className="button__icosahedron"
        />
        <img
          src="../../public/buttonImg/sphere.png"
          alt=""
          className="button__sphere"
        />
      </div>
    </div>
  );
}
