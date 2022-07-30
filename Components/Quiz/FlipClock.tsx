import React from "react";

export default function FlipClock() {
  return (
    <div className="flip-clock flip-clock-s">
      <div className="digit digit-left">
        {/* <!-- ::before --> */}
        <div className="card">
          <div className="card-face card-face-front"></div>
          <div className="card-face card-face-back"></div>
        </div>
        {/* <!-- ::after --> */}
      </div>
      <div className="digit digit-right">
        {/* <!-- ::before --> */}
        <div className="card">
          <div className="card-face card-face-front"></div>
          <div className="card-face card-face-back"></div>
        </div>
        {/* <!-- ::after --> */}
      </div>
    </div>
  );
}
