import classes from "../WhatWeDo2/WhatWeDo2.module.css";
import image1 from "../../Assets/Images/store.jpeg";
import image2 from "../../Assets/Images/clothingrack1.jpeg";
import image3 from "../../Assets/Images/desk.jpeg";
import Card from "./components/Card";
import Cards from "./components/Cards";
import Cardz from "./components/Cardz";

import image1b from "../../Assets/Images/store.jpeg";
import image2b from "../../Assets/Images/clothingrack1.jpeg";

const WWDsection2 = () => {
  return (
    <div className={classes.section_2}>
      <div className={classes.retail_space}>
        <h4 className={classes.H4div}>Innovating The Retail Space</h4>
        <h1 className={classes.H1div}>We provide high quality services</h1>
        <p className={classes.Pdiv}>
          Our nealry 5200 square metre production facility with state of the art
          machinery.
        </p>
      </div>
      <div className={classes.cards_gridWrapper}>
        <Card
          img={image1}
          header_text={"Design"}
          card_text={
            "Our Design team cover 2D Design / DTP / 3D design and Rendering as well as Mechanical Design and Engineerin"
          }
        />
        <Card
          img={image2}
          header_text={"Plastic Manufactoring"}
          card_text={
            " The first acrylic fabrication factory in the Western Cape"
          }
        />
        <Card
          img={image3}
          header_text={"Manufactoring"}
          card_text={
            "Our state of the art CNC systems, allow us the ability to increase productivity without compromised on quality and tolerances."
          }
        />
      </div>
    <div className={classes.last2Cards}>
      <div className={classes.cards_gridWrapper2}>
      <Cards
          img={image2b}
          header_text={"Logistics"}
          card_text={
            "Our Design team cover 2D Design / DTP / 3D design and Rendering as well as Mechanical Design and Engineerin"
          }
        />
        </div>
        <div className={classes.cards_gridWrapper3}>
        <Cardz
          img={image1b}
          header_text={"Quality Control"}
          card_text={
            " The first acrylic fabrication factory in the Western Cape"
          }
        />
      </div>
      
    </div>
    </div>
  );
};

export default WWDsection2;
