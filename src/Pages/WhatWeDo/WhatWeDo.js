import storage2 from '../../Assets/Images/storage 3.jpeg'

import classes  from "../WhatWeDo/WhatWeDo.module.css"
import  Section2 from "../WhatWeDo/section2wwd";
import  Section3 from "../WhatWeDo/section3wwd";
const WhatWeDo = () => {
  
  return (
    <>
      <div className={classes.mySection}>
      <div className={classes.section1} >
      <div className={classes.whatwedo}>What We Do </div>
        <img src={storage2} alt='section 3 image' className={classes.animate}
        />
         <p className={classes.para}></p>
      </div>
     
      <div className={classes.section2wwd}>
        <Section2/>
      </div> 

      <div className={classes.section3wwd}>
        <Section3 />
        </div>

        </div>
    </>
  );
};

export default WhatWeDo;
