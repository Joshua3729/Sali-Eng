import Hero from "../../Components/Hero/Hero";
import classes from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={classes.LandingPage}>
      <Hero />
    </div>
  );
};

export default LandingPage;
