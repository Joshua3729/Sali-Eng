import classes from "../AboutUsPage/AboutUsPage.module.css";
import img2 from "../../Components/drawable/img1.jpg";
import contactusImg from "../../Assets/Images/contactus.jpg";
import PageBanner from "../AboutUsPage/SVGComponent/PageBanner";
import BannerTextAnimation from "../../Components/BannerTextAnimation/BannerTextAnimation";

function ContactUsSection1() {
  return (
    <>
      <div className={classes.section1Parent}>
        <div
          className={classes.innerWrapper}
          style={{
            backgroundImage: ` linear-gradient(to right,  rgba(24, 27, 41, 0.7), rgba(108, 117, 134, 0.6)), url(${contactusImg})`,
          }}
        ></div>

        <PageBanner />
        <p className={classes.aboutUsText}>
          <BannerTextAnimation
            text={"Contact us"}
            header={true}
            color={"white"}
          />
        </p>
      </div>
    </>
  );
}

export default ContactUsSection1;
