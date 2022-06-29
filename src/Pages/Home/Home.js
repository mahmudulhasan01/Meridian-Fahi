import React from "react";
import Bannar from "./Bannar";
import BedBreakfast from "./BedBreakfast";
import BookYourStay from "./BookYourStay";
import GuestsSay from "./GuestsSay";
import Hello from "./Hello";
import Navbar from "./Navbar";
import Rooms from "./Rooms";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Bannar></Bannar>
      <BookYourStay></BookYourStay>
      <Hello></Hello>
      <Rooms></Rooms>
      <GuestsSay></GuestsSay>
      <BedBreakfast></BedBreakfast>
    </div>
  );
};

export default Home;
