import React, { useState } from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

function Layout({ children }: React.PropsWithChildren<{}>): JSX.Element {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-screen w-screen max-h-screen flex ">
      <div className="hidden relative lg:block  w-52 lg:w-72 ">
        <div className="  top-0 left-0 md:block">
          <Sidebar />
        </div>
      </div>

      <div className="w-full">
        <div>
          <Navbar />
        </div>

        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Layout;
