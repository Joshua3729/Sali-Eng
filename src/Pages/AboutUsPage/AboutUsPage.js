import background1 from '../../Components/drawable/AboutUsBG.jpg';
import classes from './AboutUsPage.module.css';
import Section2 from './AboutUsSection2';
const AboutUsPage = () => {
    return (
      <>
      <div className={classes.AboutUsPage} 
      style={{ backgroundImage: `url(${background1})` }}>
          
            
            <span className={classes.text}> About us</span>
      </div>
        
      
      <div className={classes.section_2}>
        <div
        className={classes.alignment}
        >
           <Section2/>
        </div>
        
      </div>
      
            
      </>
    );
  };
  
  export default AboutUsPage;