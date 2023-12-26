import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column ">
      <Navbar />
      <Content className="flex-grow-1">{children}</Content>
      <Footer />
    </div>
  );
};

export default Layout;
