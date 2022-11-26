import { useInView } from "react-intersection-observer";
import classes from "./EaseInComponent.module.css";

const EaseInComponent = ({ type, text }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  let component = null;
  switch (type) {
    case "button":
      component = (
        <button
          className={classes.view_projects_btn}
          ref={ref}
          style={{
            opacity: inView ? "1" : "0",
            transform: inView ? "rotateX(0deg)" : "rotateX(90deg)",
          }}
        >
          {text}
        </button>
      );
      break;
    case "paragraph":
      component = (
        <p
          className={classes.parrallex_text}
          style={{
            opacity: inView ? "1" : "0",
          }}
          ref={ref}
        >
          {text}
        </p>
      );
      break;

    default:
      break;
  }

  return component;
};

export default EaseInComponent;
