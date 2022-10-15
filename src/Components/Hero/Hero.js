import classes from "./Hero.module.css";
import Tab from "./Tab/Tab";

const Hero = () => {
  return (
    <div className={classes.Hero}>
      <div className={classes.backDrop}></div>
      <img
        src="https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1028&q=80"
        className={classes.HeroBg}
      />
      <div className={classes.BgTabs}>
        <Tab />
        <Tab />
        <Tab />
      </div>
    </div>
  );
};

export default Hero;
