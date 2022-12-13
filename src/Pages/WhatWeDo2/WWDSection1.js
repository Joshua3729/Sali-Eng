import classes from "../WhatWeDo2/WhatWeDo2.module.css";
import imageSection1 from "../../Assets/Images/Kitchen.jpeg";

const WWDSection1 = () => {
  return (
    <>
      <div className={classes.WWDsection1Parent}>
        <img
          src={imageSection1}
          alt="section 1 image"
          className={classes.WWDsection1}
        />
        <p className={classes.aboutUsText}>What We Do</p>
      </div>
    </>
  );
};

export default WWDSection1;
