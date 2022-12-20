import classes from "../AboutUsPage/AboutUsPage.module.css";
import ContactUsSection1 from "./ContactUsSection1";
import ContactUsSection2 from "./ContactUsSection2";
import ContactUsSection3 from "./ContactUsSection3";

const ContactUs = () => {
  return (
    <>
      <div className={classes.backgroundForAll}>
        <div className={classes.section1_}>
          <ContactUsSection1 />
        </div>

        <div className={classes.section}>
          <ContactUsSection2 />
        </div>

        <div className={classes.section}>
          <ContactUsSection3 />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
