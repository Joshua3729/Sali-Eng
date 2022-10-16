import Hero from "../../Components/Hero/Hero";
import Navigation from "../../Components/Navigation/Navigation";
import classes from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <>
      <Navigation />
      <div className={classes.LandingPage}>
        <Hero />
        <div className={classes.section_2}></div>
      </div>
    </>
  );
};

export default LandingPage;
