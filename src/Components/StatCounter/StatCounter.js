import { useEffect, useState } from "react";
import CountUp from "react-countup";
import classes from "./StatCounter.module.css";

const StatCounter = ({ target, stat, inView }) => {
  return (
    <div className={classes.StatCounter}>
      <p className={classes.stat}>
        +<CountUp duration={2} end={inView ? target : 0} />
      </p>
      <div className={classes.stat_description}>{stat}</div>
    </div>
  );
};

export default StatCounter;
