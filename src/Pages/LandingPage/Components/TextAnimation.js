import classes from "./TextAnimation.module.css";
import { useInView } from "react-intersection-observer";

const TextAnimation = ({ text }) => {
  const textArray = text.split(" ");
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const headerStyle = {
    textTransform: "uppercase",
    color: "white",
    fontSize: "50px",
    lineHeight: "1.1",
    marginBottom: "15px",
    fontWeight: "bold",
  };
  return (
    <span
      className={inView ? classes.span : null}
      ref={ref}
      style={inView ? headerStyle : null}
    >
      {textArray.map((item, index) => (
        <>
          <span key={index} className={inView ? classes.span : null}>
            {item}
          </span>
          <span> </span>
        </>
      ))}
    </span>
  );
};

export default TextAnimation;
