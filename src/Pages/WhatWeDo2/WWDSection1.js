import classes from "../WhatWeDo2/WhatWeDo2.module.css";
import imageSection1 from "../../Assets/Images/Kitchen.jpeg";
import workshopImg from "../../Assets/Images/workshop.avif";
import PageBanner from "../AboutUsPage/SVGComponent/PageBanner";

const WWDSection1 = () => {
  return (
    <>
      <div className={classes.WWDsection1Parent}>
        <div
          className={classes.innerWrapper}
          style={{
            backgroundImage: ` linear-gradient(to right,  rgba(24, 27, 41, 0.7), rgba(108, 117, 134, 0.6)), url(${workshopImg})`,
          }}
        ></div>

        <PageBanner />
        <p className={classes.aboutUsText}>What We Do</p>
      </div>
    </>
  );
};

export default WWDSection1;
