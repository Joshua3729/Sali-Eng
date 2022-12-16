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
    viewBox="0 0 3125 624"
    className={classes.SVGComponent}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3124 0C1966.97 257.658 1300.84 380.736 1.00439 463.265V615.024H3124V0Z"
      fill="#6C7586"
      fillOpacity={0.7}
    />
    <path
      d="M3124 108.827C3124 108.827 1414.07 534.375 1.00439 556.552V623.011H3124V108.827Z"
      fill="#181B29"
      fillOpacity={0.7}
    />
    <path
      d="M3124 216C2260.56 495.1 1539.86 579.024 1 623H3124V216Z"
      fill="white"
      stroke="white"
      strokeWidth={5}
    />
  </svg>
);
export default SVGComponent;
