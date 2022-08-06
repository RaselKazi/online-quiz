import Image from "next/image";
import React from "react";
import Layout from "../Components/Layout/Layout";
import avatar from "../public/img/profile.jpg";

export default function about() {
  return (
    <Layout>
      <div className=" w-3/4 h-full mt-44  flex justify-center items-center mx-auto">
        <div className=" grid grid-cols-1 gap-7 lg:gap-12 lg:grid-cols-3">
          <div className=" flex justify-center items-center">
            <div className=" w-60 h-80 bg-gradient-to-tr from-sky-400 to-sky-100 dark:from-sky-800 dark:to-sky-900/40 rounded-2xl relative border-4 border-gray-300 dark:border-gray-600">
              <div className=" absolute h-full w-full top-0 -left-2 -rotate-6 hover:-rotate-12  origin-bottom transition-all duration-500 border-4 rounded-2xl  border-gray-300 dark:border-gray-600 overflow-hidden">
                <Image
                  className=" cursor-pointer"
                  alt="avatar"
                  src={avatar}
                  layout="fixed"
                  width={250}
                  height={320}></Image>
              </div>
            </div>
          </div>

          <div className=" lg:col-span-2 lg:border-l-2 border-sky-500 lg:px-12 lg:py-6">
            <div className="">
              <p className=" text-base font-medium  text-gray-500">
                I am a Junior Web Developer. Hey, there 👋 I am Rasel Kazi from
                Bangladesh. I am a self-taught web developer who always
                passionate about expanding and broadening technical knowledge by
                learning new technologies. I am always eager to understand how
                and why of the technologies before deep diving into it.
                Currently, I am expanding my knowledge on Javascript
              </p>
            </div>
            <div className=" flex justify-start items-center my-14">
              <div className=" mr-14">
                <h1 className="text-xl font-semibold text-gray-400 dark:text-gray-600 capitalize tracking-widest">
                  contact us
                </h1>
                <div className=" flex mt-3">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/freelancer.raselkazi"
                    className=" mr-8 px-3 rounded-md bg-gradient-to-t from-gray-300/80 to-gray-50 
                dark:from-slate-800/25 dark:to-slate-700
                  shadow-lg text-2xl font-bold text-blue-500 cursor-pointer hover:translate-y-1 transition-all duration-300"
                    rel="noreferrer">
                    f
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/rasel-kazi-4197a41b9/"
                    className=" px-2 rounded-md bg-gradient-to-t from-gray-300/80 to-gray-50 dark:from-slate-800/25 dark:to-slate-700 shadow-lg text-2xl font-bold text-sky-500 cursor-pointer hover:translate-y-1 transition-all duration-300"
                    rel="noreferrer">
                    in
                  </a>
                </div>
              </div>
              <div className=" flex justify-center items-center mt-4">
                <div className=" h-14 w-14 rounded-full border-4 border-sky-500 overflow-hidden">
                  <Image
                    className=" cursor-pointer rounded-full"
                    alt="avatar"
                    src={avatar}
                    layout="fixed"
                    width={50}
                    height={55}></Image>
                </div>
                <div className=" ml-5">
                  <h1 className=" text-xl font-semibold dark:text-gray-300">
                    Rasel kazi
                  </h1>
                  <p className=" text-gray-400 dark:text-gray-600">
                    web developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
