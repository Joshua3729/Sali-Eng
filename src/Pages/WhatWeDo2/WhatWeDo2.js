import classes from "../WhatWeDo2/WhatWeDo2.module.css";
import WWDSection1 from "./WWDSection1";
import WWDSection2 from "./WWDSection2";
import WWDSection3 from "./WWDSection3";

const WhatWeDo2 = () => {
  return (
    <div className={classes.mySection}>
      <div className={classes.WWDsection1}>
        <WWDSection1 />
      </div>

      <div className={classes.WWDsection2}>
        <WWDSection2 />
      </div>

      <div className={classes.WWDsection3}>
        <WWDSection3 />
      </div>
    </div>
  );
};
export default WhatWeDo2;
