import { useInView } from "react-intersection-observer";
import classes from "./Section2.module.css";
import Card from "../../../Components/Card/Card";
import desk from "../../../Assets/Images/desk.jpeg";
import storage from "../../../Assets/Images/storage.jpeg";
import kitchen from "../../../Assets/Images/Kitchen.jpeg";

const Section2 = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div className={classes.section_2}>
      <div className={classes.innerWraper}>
        <div className={classes.header_wrapper}>
          <h1 className={classes.primary_header}>
            Multi-level Production Manufacturing
          </h1>
          <div className={classes.section_details}>
            <p>
              We believe in serving you by providing affordable, smart and
              exective class retail solutions with the help of our well-trained
              engineers
            </p>
          </div>
        </div>
        <div className={classes.grid_wrapper} ref={ref}>
          <div
            className={classes.card_item}
            style={{
              transform: inView ? "translateY(0)" : "translateY(100%)",
              opacity: inView ? 1 : 0,
            }}
          >
            <Card
              image={desk}
              header={"Office Equipment"}
              details={"Get State Of The Art Office Equipment At Low Prices"}
            />
          </div>
          <div
            className={classes.card_item}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translate(0)" : "translate(-100%,100%)",
            }}
          >
            <Card
              image={storage}
              header={"Retail Garmet Wardrobes"}
              details={"We Build Industrial Retail Wardrobe."}
            />
          </div>
          <div
            className={classes.card_item}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translate(0)" : "translate(-200%,100%)",
            }}
          >
            <Card
              image={kitchen}
              header={"Large Kitchen Cupboards"}
              details={"We Also Build State Of The A Kitchen Equipment"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
