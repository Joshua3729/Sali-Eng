import classes from "./AboutUsPage.module.css";
import img2 from "../../Components/drawable/img1.jpg";
import teamImg from "../../Assets/Images/team_meeting.avif";
import PageBanner from "./SVGComponent/PageBanner";
import TextAnimation2 from "../LandingPage/Components/TextAnimation2/TextAnimation2";
import BannerTextAnimation from "../../Components/BannerTextAnimation/BannerTextAnimation";
function AboutUsSection1() {
  return (
    <div className={classes.section1Parent}>
      <div
        className={classes.innerWrapper}
        style={{
          backgroundImage: ` linear-gradient(to right,  rgba(24, 27, 41, 0.7), rgba(108, 117, 134, 0.6)), url(${teamImg})`,
        }}
      ></div>

      <PageBanner />

      <p className={classes.aboutUsText}>
        <BannerTextAnimation text={"About us"} header={true} color={"white"} />
      </p>
    </div>
  );
}

export default AboutUsSection1;
