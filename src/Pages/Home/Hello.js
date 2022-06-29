import React from "react";
import "./bannar.css";

const Hello = () => {
  return (
    <div>
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col">
              {" "}
              <img
                className="img-fluid"
                src="http://cityhostel.axiomthemes.com/wp-content/uploads/2016/12/bg_hello.jpg?id=278"
                alt=""
              />
            </div>
            <div className="col row">
              <div className="col">
                <h1 className="banner_text">Hello!</h1>
                <p>WELCOME THERE!</p>
                <p>
                  Our hostel is located in the city’s finest and trendiest
                  district. Everyone who is interested in being a part of the
                  creative and cutting-edge world that is New York, you are
                  welcome to CityHostel for the best experience.
                </p>
                <button className="btn btn_color fw-bold">MORE ABOUT US</button>
              </div>
              <div className="col">
                <img
                  className="img-fluid"
                  src="http://cityhostel.axiomthemes.com/wp-content/uploads/2019/01/badge.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hello;
