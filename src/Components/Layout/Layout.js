import React from "react";
import Body from "./Body";
import Navbar from "../navbar/secondaryNavbar";
const Fitness = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Body />
    </>
  );
};

export default Fitness;
