import classes from "./TextAnimation2.module.css";
import { useInView } from "react-intersection-observer";

const TextAnimation2 = ({ text, header, color, textAnimation }) => {
  const textArray = text.split(" ");
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const headerStyle = {
    textTransform: "uppercase",
    color: `${color}`,
    fontSize: header ? "25px" : "20px",
    lineHeight: "1.1",
    marginBottom: "15px",
    fontWeight: "bold",
  };
  if (textAnimation === "easeUp") {
    console.log("guns");
    return (
      <p ref={ref} className={inView ? classes.easeup : null}>
        {text}
      </p>
    );
  }
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

export default TextAnimation2;
