import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

function Layout({ children }: React.PropsWithChildren<{}>): JSX.Element {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative  w-screen flex dark:bg-slate-900 overflow-hidden">
      <div
        className={`absolute top-0 left-0 lg:block  w-60 lg:w-72 lg:static z-10 bg-white dark:bg-slate-900  transition-all duration-300 ${
          open ? " block" : "  hidden"
        }`}>
        <Sidebar open={open} setOpen={setOpen} />
      </div>

      <div className="w-full">
        <header className=" flex justify-between items-center h-20 w-full border-b border-sky-400/30 z-50">
          <div className="w-1/3">
            <div
              onClick={() => {
                setOpen(true);
              }}
              className=" ml-8 text-sky-500 cursor-pointer lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
          </div>

          <Navbar />
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Layout;
