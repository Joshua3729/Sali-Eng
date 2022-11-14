import classes from "../AboutUsPage/AboutUsPage.module.css";
import img2 from "../../Components/drawable/img1.jpg";

const ProjectsSection1 = () => {
    return (
      <>
        <div className={classes.section1Parent}>
          <img src={img2} alt="section 1 image" className={classes.section1} />
          <p className={classes.aboutUsText}>Projects</p>
        </div>
      </>
    );
};

export default ProjectsSection1;
