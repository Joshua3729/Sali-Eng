import classes from "../WhatWeDo2/WhatWeDo2.module.css";
import image1 from "../../Assets/Images/ARARAT.jpeg";
import image2 from "../../Assets/Images/WOOD.jpeg";
import image3 from "../../Assets/Images/READYMIX.jpeg";
import Card from "./components/Card";
import Cards from "./components/Cards";
import Cardz from "./components/Cardz";

import image1b from "../../Assets/Images/SPECIAL.jpeg";
import image2b from "../../Assets/Images/sNICKERS.jpeg";

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
          header_text={"PRODUCT GLORIFIERS"}
          card_text={
            "Our Design team cover 2D Design / DTP / 3D design and Rendering as well as Mechanical Design and Engineerin"
          }
        />
        <Card
          img={image2}
          header_text={"COUNTER TOP DISPLAY"}
          card_text={
            " The first acrylic fabrication factory in the Western Cape"
          }
        />
        <Card
          img={image3}
          header_text={"KIOSK STORES PRODUCTS"}
          card_text={
            "Our state of the art CNC systems, allow us the ability to increase productivity without compromised on quality and tolerances."
          }
        />
      </div>
      <div className={classes.last2Cards}>
        <div className={classes.cards_gridWrapper2}>
          <Cards
            img={image1b}
            header_text={"GLOW SIGNAGE"}
            card_text={
              "Our Design team cover 2D Design / DTP / 3D design and Rendering as well as Mechanical Design and Engineerin"
            }
          />
        </div>
        <div className={classes.cards_gridWrapper3}>
          <Cardz
            img={image2b}
            header_text={"IN STORE UNITS"}
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
