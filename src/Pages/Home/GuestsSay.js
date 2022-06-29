import React from "react";

const GuestsSay = () => {
  return (
    <div>
      <h1>Guests say</h1>
      <div className="" style={{ backgroundColor: "#8ABB6A" }}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="d-flex justify-content-center align-items-center">
                <h1
                  className="bg-white rounded-circle d-flex justify-content-center align-items-center"
                  style={{ height: "184px", width: "184px" }}
                >
                  9.2
                </h1>
              </div>
            </div>
            <div className="col">
              <h1>Guests say:</h1>
              <button className="btn btn_color fw-bold">
                Read Full Review
              </button>
            </div>
            <div className="col">
              <img
                className="rounded-circle"
                src="http://cityhostel.axiomthemes.com/wp-content/uploads/2016/12/guest-325x325.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestsSay;
