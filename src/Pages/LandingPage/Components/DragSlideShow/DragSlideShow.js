import React, { useEffect, useRef, useState } from "react";
import classes from "./DragSlideShow.module.css";

const DragSlideShow = () => {
  const [tab, setTab] = useState(0);
  const delay = 15000;

  const images = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

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

  let slides = images.map((slide, index) => {
    return (
      <div className={classes.slide}>
        {/* <div className={classes.innerWrapper}></div> */}
      </div>
    );
  });

  return (
    <div className={classes.slideshow}>
      <div
        className={classes.slideshowSlider}
        style={{ transform: `translate3d(${-tab * 220}px, 0, 0)` }}
      >
        {slides}
      </div>
    </div>
  );
};

export default DragSlideShow;
