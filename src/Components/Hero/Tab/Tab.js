import classes from "./Tab.module.css";

const Tab = ({ image, click, tab, active }) => {
  return (
    <div className={classes.Tab} onClick={() => click(tab)}>
      <div className={classes.wrapper}>
        <img src={image} className={classes.bgImage} />
        {!active && <div className={classes.backDrop}></div>}
      </div>
    </div>
  );
};

export default Tab;
