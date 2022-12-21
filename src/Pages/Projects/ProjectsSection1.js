import classes from "../AboutUsPage/AboutUsPage.module.css";
import img2 from "../../Components/drawable/img1.jpg";
import projectsImg from "../../Assets/Images/projects.avif";
import PageBanner from "../AboutUsPage/SVGComponent/PageBanner";
import BannerTextAnimation from "../../Components/BannerTextAnimation/BannerTextAnimation";

const ProjectsSection1 = () => {
  return (
    <>
      <div className={classes.section1Parent}>
        <div
          className={classes.innerWrapper}
          style={{
            backgroundImage: ` linear-gradient(to right,  rgba(24, 27, 41, 0.7), rgba(108, 117, 134, 0.6)), url(${projectsImg})`,
          }}
        ></div>

        <PageBanner />
        <p className={classes.aboutUsText}>
          <BannerTextAnimation
            text={"Projects"}
            header={true}
            color={"white"}
          />
        </p>
      </div>
    </>
  );
};

export default ProjectsSection1;
