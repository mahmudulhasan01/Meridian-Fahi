import React from "react";
import "./bannar.css";

const Bannar = () => {
  return (
    <div className="banner w-100 d-flex justify-content-center align-items-center text-center">
      <div className=" ">
        <div className="text-white banner_text ">
          <p className="">Book Your Stay On</p>
          <h1 className="">Meridian Fahi</h1>
          <div className="btn text-dark fw-bold btn_color">Book Now</div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
