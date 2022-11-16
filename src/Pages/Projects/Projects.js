import classes from "../AboutUsPage/AboutUsPage.module.css";
import ProjectsSection1 from "./ProjectsSection1";
import ProjectsSection2 from "./ProjectsSection2";
import bgcolor from '../AboutUsPage/AboutUsPage.module.css';

const Projects = () => {
  return (
    <>
      <div className={bgcolor.backgroundForAll}>
        <div className={classes.section1_}>
          <ProjectsSection1 />
        </div>

        <div className={classes.section}>
          <ProjectsSection2 />
        </div>
      </div>
    </>
  );
};

export default Projects;
