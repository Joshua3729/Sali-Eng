import classes from "./BannerTextAnimation.module.css";
import { useInView } from "react-intersection-observer";

const BannerTextAnimation = ({ text, header, color, textAnimation }) => {
  const textArray = text.split(" ");
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const headerStyle = {
    textTransform: "uppercase",

    lineHeight: "1.1",
    marginBottom: "15px",
  };

  return (
    <span className={classes.span} ref={ref} style={headerStyle}>
      {textArray.map((item, index) => (
        <>
          <span key={index} className={classes.span}>
            {item}
          </span>
          <span> </span>
        </>
      ))}
    </span>
  );
};

export default BannerTextAnimation;
