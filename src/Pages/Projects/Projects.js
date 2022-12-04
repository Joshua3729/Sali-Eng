import classes from "../AboutUsPage/AboutUsPage.module.css";
import ProjectsSection1 from "./ProjectsSection1";
import ProjectsSection2 from "./ProjectsSection2";
import ProjectsSection3 from "./ProjectsSection3";
import bgColor from '../AboutUsPage/AboutUsPage.module.css';

const Projects = () => {
  return (
    <>
      <div className={bgColor.backgroundForAll}>
        <div className={classes.section1_}>
          <ProjectsSection1 />
        </div>

        <div className={classes.section}>
          <ProjectsSection2 />
        </div>
        <div>
          <ProjectsSection3 />
        </div>
      </div>
    </>
  );
};

export default Projects;
