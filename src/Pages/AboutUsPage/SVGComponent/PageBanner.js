import * as React from "react";
import classes from "./PageBanner.module.css";

const PageBanner = (props) => (
  <svg
    viewBox="0 0 2532 641"
    className={classes.PageBanner}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2532 191.937C2138.35 155.167 1915.37 209.806 1495 375.686L2532 552V191.937Z"
      fill="#D9D9D9"
      fill-opacity="0.5"
    />
    <path
      d="M2532 268C2209.68 268.097 2036.17 285.982 1748 370.5L2532 639V268Z"
      fill="#181B29"
      fill-opacity="0.5"
    />
    <path
      d="M962 614H0V190C298.228 417.313 525.038 465.888 951.057 497.768L962 614Z"
      fill="#D9D9D9"
      fill-opacity="0.5"
    />
    <path
      d="M536.912 560C326.845 525.186 209.282 487.186 0 391V632H726L536.912 560Z"
      fill="#181B29"
      fill-opacity="0.5"
    />
    <path
      d="M812.047 514.053C511.678 578.538 335.143 594.831 0 574.48V641H2532V507.96C2337.61 441.62 2225.9 420.149 2024.6 393.707C1586.12 332.442 1321.8 362.812 812.047 514.053Z"
      fill="white"
    />
  </svg>
);
export default PageBanner;
