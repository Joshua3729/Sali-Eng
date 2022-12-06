import React from 'react';
import { useState } from 'react';
import classes from "../Projects.module.css";

const ImageSlider = ({ slides }) => {
  
  const dots = [
    <div className={classes.dotStyle}></div>,
    <div className={classes.dotStyle}></div>,
    <div className={classes.dotStyle}></div>,
    <div className={classes.dotStyle}></div>,
  ];

  const [imageIndex, setImageIndex] = useState(
    {
      index0: 0,
      index1: 1,
      index2: 2,
      index3: 3
    }
  );
  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };

  
  
  
  const goToSlide = (slideIndex) => {
    
     for (const key in imageIndex) {
       if (imageIndex.key == slideIndex) {
         setImageIndex(
           {
             ...imageIndex,
             key:5
           }
         )
         
       }
     }
   
  };
  

  return (
    <div>
      <div className={classes.imageSliderContainer}>
        <img
          src={slides[imageIndex.index0].image}
          alt="list item"
          className={classes.listItem}
        />
        <img
          src={slides[imageIndex.index1].image}
          alt="list item"
          className={classes.listItem}
        />
        <img
          src={slides[imageIndex.index2].image}
          alt="list item"
          className={classes.listItem}
        />
        <img
          src={slides[imageIndex.index3].image}
          alt="list item"
          className={classes.listItem}
        />
      </div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div key={slide.key}></div>
        ))}

        <div className={classes.dotContainer}>
          {dots.map((dot, dotIndex) => (
            <div
              key={dotIndex}
              className={classes.dotStyle}
              onClick={() => goToSlide(dotIndex)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;