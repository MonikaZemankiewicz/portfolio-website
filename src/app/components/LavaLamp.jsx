import React from "react";

const LavaLamp = () => {
  return (
    <>
      <div className="lamp">
        <div className="lava">
          <circle className="blob"></circle>
          <circle className="blob"></circle>
          <circle className="blob"></circle>
          <circle className="blob"></circle>
          <circle className="blob"></circle>
          <circle className="blob"></circle>
          <circle className="blob"></circle>
          <circle className="blob top"></circle>
          <circle className="blob bottom"></circle>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="absolute top-200"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default LavaLamp;
