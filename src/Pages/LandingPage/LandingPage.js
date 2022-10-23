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
                header={"Retail Garmet Wardrobes"}
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
        <div className={classes.section_3}>
          <div className={classes.innerWraper}>
            <div className={classes.header_wrapper}>
              <div className={classes.section_details}>
                <h2>On point and driven engineering team</h2>
                <p>
                  With magnitude of experience and an ongoing desire for
                  providing quality retail solutions throughout South Africa.
                  The Sali engineering and design teams are on hand to build out
                  your ideas
                </p>
              </div>
              <div className={classes.stats_wrapper}>
                <div className={classes.stat_item}>
                  <p className={classes.stat}>+100</p>
                  <div className={classes.stat_description}>Clients</div>
                </div>
                <div className={classes.stat_item}>
                  <p className={classes.stat}>+1</p>
                  <div className={classes.stat_description}>Sites</div>
                </div>
                <div className={classes.stat_item}>
                  <p className={classes.stat}>+10</p>
                  <div className={classes.stat_description}>
                    Completed 2022 projects
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.section_content}>
              <div className={classes.service_stats}>
                <div className={classes.service_stat_wrapper}></div>
                <div className={classes.service_stat_wrapper}></div>
                <div className={classes.service_stat_wrapper}></div>
              </div>

              <div className={classes.slide_show}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
