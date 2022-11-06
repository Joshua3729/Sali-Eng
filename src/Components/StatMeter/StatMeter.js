import classes from "./StatMeter.module.css";

const StatMeter = ({ name, percentage = 0 }) => {
  return (
    <div className={classes.service_stat_wrapper}>
      <p>{name}</p>
      <div className={classes.stat_meter_wrapper}>
        <div className={classes.stat_meter} style={{ width: `${percentage}%` }}>
          <p>{percentage}%</p>
        </div>
      </div>
    </div>
  );
};

export default StatMeter;
