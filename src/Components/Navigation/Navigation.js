import classes from "./Navigation.module.css";
import ReactDOM from "react-dom";
import { useState } from "react";

const Navigation = () => {
  const [scroll, setScroll] = useState(false);

  const changeNavBarBGHandler = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", changeNavBarBGHandler);

  return ReactDOM.createPortal(
    <div
      className={
        scroll
          ? [classes.Navigation, classes.scroll].join(" ")
          : classes.Navigation
      }
    >
      <div className={classes.logo}>Sali Retail Solutions</div>
      <ul className={classes.nav_list}>
        <li
          className={classes.nav_item}
          style={{ color: scroll ? "black" : "white" }}
        >
          Home
        </li>
        <li
          className={classes.nav_item}
          style={{ color: scroll ? "black" : "white" }}
        >
          About us
        </li>
        <li
          className={classes.nav_item}
          style={{ color: scroll ? "black" : "white" }}
        >
          What We Do
        </li>
        <li
          className={classes.nav_item}
          style={{ color: scroll ? "black" : "white" }}
        >
          Projects
        </li>
        <li
          className={classes.nav_item}
          style={{ color: scroll ? "black" : "white" }}
        >
          Contact Us
        </li>
      </ul>
    </div>,
    document.getElementById("nav-bar")
  );
};

export default Navigation;
