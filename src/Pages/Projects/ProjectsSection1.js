import classes from "../AboutUsPage/AboutUsPage.module.css";
import img2 from "../../Components/drawable/img1.jpg";
import teamImg from "../../Assets/Images/team_meeting.avif";
import PageBanner from "../AboutUsPage/SVGComponent/PageBanner";

const ProjectsSection1 = () => {
  return (
    <>
      <div className={classes.section1Parent}>
        <div
          className={classes.innerWrapper}
          style={{
            backgroundImage: ` linear-gradient(to right,  rgba(24, 27, 41, 0.7), rgba(108, 117, 134, 0.6)), url(https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`,
          }}
        ></div>

        <PageBanner />
        <p className={classes.aboutUsText}>Projects</p>
      </div>
    </>
  );
};

export default ProjectsSection1;
