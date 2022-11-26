import { useState } from "react";
import SlideShow from "../SlideShow/SlideShow";
import classes from "./Hero.module.css";
import Tab from "./Tab/Tab";
import storeImg from "../../Assets/Images/store.jpeg";
import clothingrack1 from "../../Assets/Images/clothingrack1.jpeg";
import clothingrack2 from "../../Assets/Images/clothingrack2.jpeg";

import desk from "../../Assets/Images/desk.jpeg";
import TextAnimation from "../../Pages/LandingPage/Components/TextAnimation";

const Hero = () => {
  const [tab, setTab] = useState(0);

  const images = [
    {
      img: clothingrack1,
    },

    {
      img: storeImg,
    },
    {
      img: clothingrack2,
    },
  ];

  return (
    <div className={classes.Hero}>
      <SlideShow images={images} tab={tab} setTab={setTab} />
      <div className={classes.callToAction}>
        {/* <h1 className={classes.CTA_Header}>
          Your One Stop Shop For Retail Solutions. Come Work With Us
        </h1> */}
        <TextAnimation
          text={" Your One Stop Shop For Retail Solutions. Come Work With Us"}
          header={true}
        />
        <p className={classes.secondaryHeader}>
          Lorem ipsum dolor sit amet. Est velit facere sit voluptas molestiae et
          suscipit officiis hic nostrum velit? A esse ipsam vel ratione deserunt
          est delectus laborum et architecto magnam et expedita quos vel aperiam
          tempore.
        </p>
        <button className={classes.CTA_btn}>Explore More</button>
      </div>
      <div className={classes.BgTabs}>
        {images.map((slide, i) => {
          return (
            <Tab
              key={i}
              active={tab === i}
              image={slide.img}
              tab={i}
              length={images.length}
              click={setTab}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
