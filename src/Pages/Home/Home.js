import React from "react";
import Bannar from "./Bannar";
import Hello from "./Hello";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Bannar></Bannar>
      <Hello></Hello>
    </div>
  );
};

export default Home;
