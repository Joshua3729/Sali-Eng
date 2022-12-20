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
              image={
                "https://mir-s3-cdn-cf.behance.net/project_modules/1400/46f58e90581057.5e1b77f069fdc.jpg"
              }
              header={"Product Grofiers"}
              details={"High quality designs."}
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
              image={
                "https://i.pinimg.com/originals/e9/d3/89/e9d389c647df2be00f6f585d7bd6990a.jpg"
              }
              header={"Counter Top Displays"}
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
              image={
                "https://mir-s3-cdn-cf.behance.net/project_modules/disp/98977017312529.562b875f9c22b.jpg"
              }
              header={"Kiosk store counters"}
              details={"We Also Build State Of The A Kitchen Equipment"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
