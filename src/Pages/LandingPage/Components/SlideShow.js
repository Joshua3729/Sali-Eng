import React, { useEffect, useRef, useState } from "react";
import classes from "./SlideShow.module.css";

const SlideShow = ({ images }) => {
  const [tab, setTab] = useState(0);
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

  let slides = images.map((slide, index) => {
    return (
      <>
        <div
          className={classes.slide}
          style={{ backgroundImage: `url(${slide.img})` }}
        >
          <div className={classes.backDrop}></div>
          <div
            className={classes.text_wrapper}
            style={{
              transform: tab == index ? "translateY(0)" : "translateY(100%)",
              opacity: tab == index ? "1" : "0",
            }}
          >
            <div className={classes.inner_textWrapper}>
              <p className={classes.details}>{slide.text}</p>
              <button className={classes.more_aboutUs_btn}>
                More About Us
              </button>
            </div>
          </div>
        </div>
      </>
    );
  });

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
