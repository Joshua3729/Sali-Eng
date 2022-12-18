import { getThemeProps } from "@material-ui/styles";
import { useInView } from "react-intersection-observer";
import classes from "./EaseInComponent.module.css";

const EaseInComponent = ({ type, text, children }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  let component = null;
  switch (type) {
    case "button":
      component = (
        <button
          className={[
            classes.view_projects_btn,
            inView ? classes.buttonAnimation : null,
          ].join(" ")}
          ref={ref}
        >
          {text}
        </button>
      );
      break;
    case "button2":
      component = (
        <div
          ref={ref}
          className={[
            classes.button2,
            inView ? classes.buttonAnimation : null,
          ].join(" ")}
        >
          {children}
        </div>
      );
      break;
    case "paragraph":
      component = (
        <p
          className={[
            classes.parrallex_text,
            inView ? classes.paragraphAnimation : null,
          ].join(" ")}
          style={
            {
              // opacity: inView ? "1" : "0",
            }
          }
          ref={ref}
        >
          {text}
        </p>
      );
      break;
    case "paragraph2":
      component = (
        <div
          className={[
            classes.paragraph2Wrapper,
            inView ? classes.paragraph2Animation : null,
          ].join(" ")}
          ref={ref}
        >
          {children}
        </div>
      );
      break;

    default:
      break;
  }

  return component;
};

export default EaseInComponent;
