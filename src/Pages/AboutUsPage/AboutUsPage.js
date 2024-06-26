import background1 from '../../Components/drawable/AboutUsBG.jpg';
import classes from './AboutUsPage.module.css';
import AboutUsSection1 from './AboutUsSection1';
import AboutUsSection2 from './AboutUsSection2';
import AboutUsSection3 from './AboutUsSection3';
import AboutUsSection4 from './AboutUsSection4';
import AboutUsSection5 from './AboutUsSection5';
import FinalPart from './finalPart';

const AboutUsPage = () => {
    return (
      <>
        <div className={classes.backgroundForAll}>
          <div className={classes.section1_}>
            <AboutUsSection1 />
          </div>
          <div className={classes.section}>
            <AboutUsSection2 />
          </div>
          <div className={classes.section}>
            <AboutUsSection3 />
          </div>
          <div className={classes.section}>
            <AboutUsSection4 />
          </div>

          <div className={classes.svg1}>
            <div className={classes.section}>
              <AboutUsSection5 />
            </div>

          </div>
          <div className={classes.finalPart}>
              <FinalPart/>
          </div>
        </div>
      </>
    );
  };
  
  export default AboutUsPage;