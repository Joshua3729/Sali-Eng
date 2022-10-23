import Card from "../../Components/Card/Card";
import Hero from "../../Components/Hero/Hero";
import classes from "./LandingPage.module.css";
import desk from "../../Assets/Images/desk.jpeg";
import storage from "../../Assets/Images/storage.jpeg";
import kitchen from "../../Assets/Images/Kitchen.jpeg";

const LandingPage = () => {
  return (
    <>
      <div className={classes.LandingPage}>
        <Hero />
        <div className={classes.section_2}>
          <div className={classes.innerWraper}>
            <div className={classes.header_wrapper}>
              <h1 className={classes.primary_header}>Our Services</h1>
              <div className={classes.section_details}>
                <p>
                  We believe in serving you by providing affordable, smart and
                  exective class retail solutions with the help of our
                  well-trained engineers
                </p>
              </div>
            </div>
            <div className={classes.grid_wrapper}>
              <Card
                image={desk}
                header={"Office Equipment"}
                details={"Get State Of The Art Office Equipment At Low Prices"}
              />
              <Card
                image={storage}
                header={"Retail Garmet Wardrobe"}
                details={"We Build Industrial Retail Wardrobe."}
              />
              <Card
                image={kitchen}
                header={"Large Kitchen Cupboards"}
                details={"We Also Build State Of The A Kitchen Equipment"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
