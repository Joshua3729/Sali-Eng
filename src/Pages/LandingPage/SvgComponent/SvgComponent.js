import * as React from "react";
import classes from "./SvgComponent.module.css";

const SVGComponent = (props) => (
  // <svg
  //   width="100%"
  //   viewBox="0 0 3125 624"
  //   className={classes.SVGComponent}
  //   fill="none"
  //   xmlns="http://www.w3.org/2000/svg"
  //   {...props}
  // >
  //   <path
  //     d="M3124 0C1966.97 257.658 1300.84 380.736 1.00447 463.265V615.024H3124V0Z"
  //     fill="#6C7586"
  //     fillOpacity={0.7}
  //   />
  //   <path
  //     d="M3124 108.827C3124 108.827 1414.08 534.375 1.00447 556.552V623.011H3124V108.827Z"
  //     fill="#181B29"
  //     fillOpacity={0.7}
  //   />
  //   <path
  //     d="M3124 217.655C2260.57 495.627 1539.87 579.213 1.00447 623.011H3124V217.655Z"
  //     fill="white"
  //     stroke="white"
  //   />
  // </svg>

  <svg
    className={classes.SVGComponent}
    viewBox="0 0 1201 367"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1200 0C755.559 151.319 499.682 223.6 0.384033 272.068V361.194H1200V0Z"
      fill="#6C7586"
      fillOpacity={0.7}
    />
    <path
      d="M1200 31.4209C1200 31.4209 543.177 312.343 0.384033 325.368V366H1200V31.4209Z"
      fill="#181B29"
      fillOpacity={0.7}
    />
    <path
      d="M1200 72.826C868.388 236.743 591.402 340.065 0.384033 365.892H1200V72.826Z"
      fill="white"
      stroke="white"
    />
  </svg>
);
export default SVGComponent;
