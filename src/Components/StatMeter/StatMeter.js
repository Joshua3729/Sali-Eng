import classes from "./StatMeter.module.css";

const StatMeter = () => {
  return (
    <div className={classes.service_stat_wrapper}>
      <p>CUSTOMER SUPPORT</p>
      <div className={classes.stat_meter_wrapper}>
        <div className={classes.stat_meter} style={{ width: "80%" }}>
          <p>80%</p>
        </div>
      </div>
    </div>
  );
};

export default StatMeter;
