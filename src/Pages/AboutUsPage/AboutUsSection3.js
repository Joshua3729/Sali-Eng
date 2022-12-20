import classes from './AboutUsPage.module.css';
import img1 from '../../Components/drawable/sneaker.jpeg';
import img2 from '../../Components/drawable/pamper.jpeg';
import img3 from '../../Components/drawable/MINIONS.jpeg';
import img4 from '../../Components/drawable/WINESHELF.jpeg';
import img5 from '../../Components/drawable/WOOD.jpeg';
import img6 from '../../Components/drawable/DOVEMEN.jpeg';
import img7 from '../../Components/drawable/READYMIX.jpeg';
import img8 from '../../Components/drawable/ARARAT.jpeg';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";

const AboutUsSection3 = () => {
  const [visibility, setVisibility] = useState(true);
  

    return (
      <>
        <div className={classes.topContainer}>
          <VisibilitySensor
            onChange={(isVisible) => {
              setVisibility(isVisible);
            }}
          >
            <>
              <div id="count">
                <h1 className={classes.count}>
                  <span>+ </span>
                  {visibility ? (
                    <CountUp start={0} end={270} duration={3} />
                  ) : (
                    <span>00</span>
                  )}
                </h1>
                <h1 className={classes.supportingText}>Team members</h1>
              </div>
              <div>
                <h1 className={classes.count}>
                  <span>+ </span>{" "}
                  {visibility ? (
                    <CountUp start={0} end={1180} duration={3} />
                  ) : (
                    <span>00</span>
                  )}
                </h1>
                <h1 className={classes.supportingText}>
                  Yearly Products produced
                </h1>
              </div>
            </>
          </VisibilitySensor>
        </div>
        <div className={classes.gridContainer}>
          <img src={img1} alt="grid item" className={classes.gridItemImg} />

          <img src={img2} alt="grid item" className={classes.gridItemImg} />

          <img src={img3} alt="grid item" className={classes.gridItemImg} />

          <img src={img4} alt="grid item" className={classes.gridItemImg} />

          <img src={img5} alt="grid item" className={classes.gridItemImg} />

          <img src={img6} alt="grid item" className={classes.gridItemImg} />

          <img src={img7} alt="grid item" className={classes.gridItemImg} />

          <img src={img8} alt="grid item" className={classes.gridItemImg} />
        </div>
      </>
    );
}
export default AboutUsSection3;