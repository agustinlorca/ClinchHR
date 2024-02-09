import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ position: "relative", top: "80px" }}>
        {children}
      </div>
      <Footer/>
    </>
  );
};

export default Layout;
