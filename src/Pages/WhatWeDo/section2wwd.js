import classes from "../WhatWeDo/WhatWeDo.module.css";
import image1 from "../../Assets/Images/store.jpeg";
import image2 from "../../Assets/Images/clothingrack1.jpeg";
import image3 from "../../Assets/Images/desk.jpeg";

const section2wwd = () => {
  return (
    <>
    
      <div className={classes.retail.space}>
        <h4 className={classes.H4div}>Innovating The Retail Space</h4>
         <h1  className={classes.H1div}>We provide high quality services</h1>
        <p  className={classes.Pdiv}>
          Our nealry 5200 square metre production facility with state of the art
          machinery.
        </p>
      </div>
      <div className={classes.wwdSection}>
        <div className={classes.design}>
          <img src={image1} alt="section 3 image" className={classes.img1} />
          <h2>Design</h2>
          <p>
            Our Design team cover 2D Design / DTP / 3D design and Rendering as
            well as Mechanical Design and Engineerin
          </p>
        </div>

        <div className={classes.plastic}>
          <img src={image2} alt="section 3 image" className={classes.img2} />
          <h2>Plastic Manufactoring</h2>
          <p>
            Our Design team cover 2D Design / DTP / 3D design and Rendering as
            well as Mechanical Design and Engineerin
          </p>
        </div>

        <div className={classes.manufactoring}>
          <img src={image3} alt="section 3 image" className={classes.img3} />
          <h2>Manufactoring</h2>
          <p>
            Our Design team cover 2D Design / DTP / 3D design and Rendering as
            well as Mechanical Design and Engineerin
          </p>
        </div>
      </div>
    </>
  );
};

export default section2wwd;
