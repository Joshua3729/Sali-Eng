import classes from "../AboutUsPage/AboutUsPage.module.css";
import img2 from "../../Components/drawable/img1.jpg";
import callusImg from "../../Assets/Images/call_us.avif";
import PageBanner from "../AboutUsPage/SVGComponent/PageBanner";

function ContactUsSection1() {
  return (
    <>
      <div className={classes.section1Parent}>
        <div
          className={classes.innerWrapper}
          style={{
            backgroundImage: ` linear-gradient(to right,  rgba(24, 27, 41, 0.7), rgba(108, 117, 134, 0.6)), url(${callusImg})`,
          }}
        ></div>

        <PageBanner />
        <p className={classes.aboutUsText}>Contact us</p>
      </div>
    </>
  );
}

export default ContactUsSection1;
