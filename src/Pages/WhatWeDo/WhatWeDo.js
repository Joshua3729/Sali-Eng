import storage2 from "../../Assets/Images/storage3.jpeg";
import image3 from "../../Assets/Images/desk.jpeg";

import classes from "../WhatWeDo/WhatWeDo.module.css";
import Section2 from "../WhatWeDo/section2wwd";
import Section3 from "../WhatWeDo/section3wwd";
const WhatWeDo = () => {
  return (
    <div className={classes.mySection}>
      <div className={classes.whatwedo_hero}>
        <div className={classes.whatwedo}>What We Do </div>
        <div
          className={classes.section_img_wrapper}
          style={{ backgroundImage: `url(${storage2})` }}
        ></div>

        <p className={classes.para}></p>
      </div>

      <div className={classes.section2wwd}>
        <Section2 />
      </div>

      <div className={classes.section3wwd}>
        <Section3 />
      </div>
    </div>
  );
};

export default WhatWeDo;
