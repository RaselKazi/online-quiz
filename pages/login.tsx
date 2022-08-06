/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { Cookies } from "next/dist/server/web/spec-extension/cookies";
import Image from "next/image";
import router, { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Input from "../Components/Utils/Input";
import { Store } from "../Data/Store/Store";
import avatar from "../public/bg.jpeg";
import icon from "../public/icon.png";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "../firebase-config";

export default function login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { redirect } = router.query;
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  // //firebaseGoogleAuth
  // const firebaseAuth = getAuth(firebaseApp);
  // const provider = new GoogleAuthProvider();

  // const signInGoogle = async () => {
  //   const { user } = await signInWithPopup(firebaseAuth, provider);
  //   const { refreshToken, providerData } = user;
  //   // dispatch({ type: "USER_LOGIN", payload: user });
  //   console.log(refreshToken, providerData);
  //   router.push("/quiz");
  // };

  useEffect(() => {
    console.log(userInfo);
    if (userInfo.hasOwnProperty("email")) {
      router.push("/quiz");
    }
  }, []);

  const handelRegister = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/api/users/register", {
        name,
        email,
        password,
      });
      toast.success("User register successfully");
      dispatch({ type: "USER_LOGIN", payload: data });
      setLoading(false);
      router.push("/quiz");
    } catch (err) {
      setLoading(false);
      toast.error("User register Failed");
    }
  };

  const handelLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });
      toast.success("User login successfully");
      dispatch({ type: "USER_LOGIN", payload: data });
      setLoading(false);
      router.push("/quiz");
    } catch (err) {
      setLoading(false);
      toast.error("Invalid email or password");
    }
  };
  return (
    <div className=" w-screen h-screen max-h-screen overflow-hidden">
      <div className=" absolute top-0 left-0 w-full h-full">
        <Image
          className=" h-screen "
          alt="avatar"
          src={avatar}
          layout="fill"
          width={600}
          height={300}></Image>
      </div>

      <div className="flex justify-center items-center h-full">
        <form className=" w-5/6 md:w-4/6 lg:w-2/6 px-6 py-8 border border-sky-500/50 bg-slate-900/30 backdrop-blur  rounded-xl">
          <h1 className=" py-4 text-4xl text-center font-semibold text-white capitalize">
            create an account
          </h1>

          <div className=" flex flex-col items-center">
            <div className="flex items-center justify-center bg-slate-900/60 border border-sky-500 px-4 py-2 rounded-full cursor-pointer text-gray-100  transition-all duration-300 hover:bg-slate-50  hover:text-gray-900 text-xl">
              <Image
                className=" h-screen "
                alt="avatar"
                src={icon}
                layout="fixed"
                width={30}
                height={30}></Image>
              <h1 className=" ml-4   capitalize">sing with google</h1>
            </div>
            <h5 className="text-gray-400 my-5">Or Sign Up Using Details</h5>
          </div>
          {open && (
            <Input
              icon="user"
              type="text"
              placeHol="Enter Your Name.."
              getValue={setName}></Input>
          )}

          <Input
            icon="email"
            type="email"
            placeHol="Enter Your Email.."
            getValue={setEmail}></Input>
          <Input
            icon="password"
            type="password"
            placeHol="Enter password.."
            getValue={setPassword}></Input>
          {open ? (
            <button
              disabled={loading}
              type="submit"
              className="py-2 text-2xl text-center font-semibold text-white bg-sky-400 w-full h-14 capitalize disabled:opacity-30"
              onClick={handelRegister}>
              <div className=" flex justify-center items-center">
                <h1> create account</h1>
                <div
                  className={`animate-spin ml-5 h-6 w-6 rounded-full border-gray-400 border-r-gray-200 border-4 transition-all duration-300  ${
                    !loading && "hidden"
                  }`}></div>
              </div>
            </button>
          ) : (
            <button
              disabled={loading}
              type="submit"
              className="py-2 text-3xl text-center font-semibold text-white bg-sky-400 w-full h-14 capitalize disabled:opacity-30"
              onClick={handelLogin}>
              <div className=" flex justify-center items-center">
                <h1>Login</h1>
                <div
                  className={`animate-spin ml-5 h-6 w-6 rounded-full border-gray-400 border-r-gray-200 border-4 transition-all duration-300  ${
                    !loading && "hidden"
                  }`}></div>
              </div>
            </button>
          )}

          <div className="text-center mt-6">
            <a
              className="text-sky-400 flex items-center justify-center hover:text-sky-700 cursor-pointer transition duration-300"
              onClick={() => setOpen(!open)}>
              {open ? (
                <span> Already have an account</span>
              ) : (
                <span>Create a new account</span>
              )}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </form>
      </div>
      <ToastContainer limit={2} />
    </div>
  );
}
