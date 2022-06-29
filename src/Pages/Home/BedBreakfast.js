import React from "react";

const BedBreakfast = () => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col">
            <h1>Bed & breakfast</h1>
            <p>
              ORDER BREAKFAST JUST FOR{" "}
              <span className="color-warning"> $2.99</span>
              WITH YOUR BOOKING
            </p>
            <button className="btn btn_color">Book Now</button>
          </div>
          <div className="col">
            <div className="d-flex justify-content-center align-items-center">
              <h1
                className="bg-danger rounded-circle d-flex justify-content-center align-items-center"
                style={{ height: "184px", width: "184px" }}
              >
                9.2
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BedBreakfast;
