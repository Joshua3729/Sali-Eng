import { useEffect, useState } from "react";
import CountUp from "react-countup";
import classes from "./StatMeter.module.css";

const StatMeter = ({ name, percentage = 0, inView }) => {
  return (
    <div className={classes.service_stat_wrapper}>
      <p>{name}</p>
      <div className={classes.stat_meter_wrapper}>
        <div
          className={classes.stat_meter}
          style={{ width: inView ? `${percentage}%` : 0 }}
        >
          <p>
            <CountUp duration={2} end={inView ? percentage : 0} />%
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatMeter;
