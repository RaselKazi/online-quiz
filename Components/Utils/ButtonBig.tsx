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
      <div className="button">
        <span className="button__text">play</span>
        {/* <div className=" absolute button__cone">
          <Image
            className=""
            alt="avatar"
            src={cone}
            layout="fixed"
            width={20}
            height={20}></Image>
        </div>
        <div className=" absolute button__cone">
          <Image
            className=""
            alt="avatar"
            src={cone}
            layout="fixed"
            width={20}
            height={20}></Image>
        </div>
        <div className=" absolute button__cone">
          <Image
            className=""
            alt="avatar"
            src={cone}
            layout="fixed"
            width={20}
            height={20}></Image>
        </div>
        <div className=" absolute button__cone">
          <Image
            className=""
            alt="avatar"
            src={cone}
            layout="fixed"
            width={20}
            height={20}></Image>
        </div> */}

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
