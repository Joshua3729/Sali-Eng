import background1 from '../../Components/drawable/AboutUsBG.jpg';
import classes from './AboutUsPage.module.css';
import AboutUsSection2 from './AboutUsSection2';
import AboutUsSection3 from './AboutUsSection3';
import AboutUsSection4 from './AboutUsSection4';
import AboutUsSection5 from './AboutUsSection5';

const AboutUsPage = () => {
    return (
      <>
      <div className={classes.backgroundForAll}>
        <div className={classes.AboutUsPage} style={{ backgroundImage: `url(${background1})` }}>

              <span className={classes.text}> About us</span>
        </div>
          
        
        <div className={classes.section_2}>

          <div className={classes.alignment}>
            <AboutUsSection2/>
          </div>
        </div>

        <div className={classes.section_2}>
          
            <AboutUsSection3/>
        </div>

        <div className={classes.section_2}>
          
            <AboutUsSection4/>
        </div>

        <div className={classes.section_2}>
        </div>

        <div className={classes.section_2}>
          
            <AboutUsSection5/>
        </div>
        </div>

      </>

    );
  };
  
  export default AboutUsPage;