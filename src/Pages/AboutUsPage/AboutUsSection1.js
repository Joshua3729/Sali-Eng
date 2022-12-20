import classes from "./AboutUsPage.module.css";
import img2 from "../../Components/drawable/img1.jpg";
import teamImg from "../../Assets/Images/team_meeting.avif";
import PageBanner from "./SVGComponent/PageBanner";
function AboutUsSection1() {
  return (
    <div
      className={classes.section1Parent}
      style={{
        backgroundImage: ` linear-gradient(to right,  rgba(24, 27, 41, 0.7), rgba(108, 117, 134, 0.6)), url(${teamImg})`,
      }}
    >
      <PageBanner />

      <p className={classes.aboutUsText}>About us</p>
    </div>
  );
}

export default AboutUsSection1;
