import { useState } from "react";
import SlideShow from "../SlideShow/SlideShow";
import classes from "./Hero.module.css";
import Tab from "./Tab/Tab";
import storeImg from "../../Assets/Images/store.jpeg";
import clothingrack1 from "../../Assets/Images/clothingrack1.jpeg";
import clothingrack2 from "../../Assets/Images/clothingrack2.jpeg";

import desk from "../../Assets/Images/desk.jpeg";
import cardPic1 from "../../Assets/Images/cardPic.png";
import cardPic2 from "../../Assets/Images/cardPic2.png";
import hero from "../../Assets/Images/hero.png";
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
      <div
        className={classes.bgImg_wrapper}
        style={{ backgroundImage: `url(${hero})` }}
      ></div>

      <div className={classes.callToAction}>
        <div className={classes.CTA_innerWrapper}>
          <TextAnimation
            text={"Let us design your tommorrow today!"}
            header={true}
          />
          <p className={classes.secondaryHeader}>
            At ILUMI DESIGN we design metal, plastic and wood work for clients.
            We also create logos and all aided design art work.
          </p>
          <button className={classes.CTA_btn}>Explore More</button>
        </div>
        <div className={classes.cardsWrapper}>
          {/* <div className={classes.heroCard}>
            <img src={cardPic1} />
          </div>
          <div className={classes.heroCard}>
            <img src={cardPic2} />
          </div>
          <div className={classes.heroCard}>
            <img src={cardPic3} />
          </div> */}
          {/* <img src={hero} /> */}
        </div>
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
