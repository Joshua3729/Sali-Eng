import { useState, useRef } from "react";
import SlideShow from "../SlideShow/SlideShow";
import classes from "./Hero.module.css";
import Tab from "./Tab/Tab";

const Hero = () => {
  const [tab, setTab] = useState(0);

  const images = [
    {
      img: "https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1028&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1580418835996-7783da1c3c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1570857502809-08184874388e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=578&q=80",
    },
  ];
  console.log(tab);

  return (
    <div className={classes.Hero}>
      <SlideShow images={images} tab={tab} setTab={setTab} />
      <div className={classes.callToAction}>
        <h1 className={classes.CTA_Header}>
          Your One Stop Shop For Retail Solutions. Come Work With Us
        </h1>
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
