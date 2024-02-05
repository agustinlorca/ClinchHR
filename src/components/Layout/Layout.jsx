import React from "react";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ position: "relative", top: "80px" }}>
        {children}
      </div>
    </>
  );
};

export default Layout;
