import React, { useEffect, useRef } from "react";
import classes from "./SlideShow.module.css";

const SlideShow = ({ tab, setTab, images }) => {
  const delay = 15000;

  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setTab((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [tab]);

  let slides = images.map((slide, index) => (
    <>
      <div
        className={classes.slide}
        style={{ backgroundImage: `url(${slide.img})` }}
      >
        <div className={classes.backDrop}></div>
      </div>
    </>
  ));

  return (
    <div className={classes.slideshow}>
      <div
        className={classes.slideshowSlider}
        style={{ transform: `translate3d(${-tab * 100}%, 0, 0)` }}
      >
        {slides}
      </div>
    </div>
  );
};

export default SlideShow;
