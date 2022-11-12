import classes from '../AboutUsPage/AboutUsPage.module.css';
import ContactUsSection1 from './ContactUsSection1';
import ContactUsSection2 from './ContactUsSection2';
const ContactUs = () => {
    return (
      <>
      <div className={classes.backgroundForAll}>

          <div className={classes.section1_}>
            <ContactUsSection1/>  
          </div> 

          <div className={classes.section}>
            <ContactUsSection2/>  
          </div>
      </div>
      </>
    );
  };
  
  export default ContactUs;