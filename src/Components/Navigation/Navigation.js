import classes from "./Navigation.module.css";
import ReactDOM from "react-dom";
import { useState } from "react";
import { Link } from 'react-router-dom';

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
        >
          <Link to="/" style={{ color: scroll ? "black" : "blue" , textDecoration:'none'}}>Home</Link>
        </li>
        <li
          className={classes.nav_item}
        >
            <Link to="/AboutUs" style={{ color: scroll ? "black" : "blue" , textDecoration:'none' }}>About us</Link>
        </li>
        <li
          className={classes.nav_item}
          style={{ color: scroll ? "black" : "white" }}
        >
         
          <Link to="/WhatWeDo" style={{ color: scroll ? "black" : "blue" , textDecoration:'none' }}>What We Do</Link>
        </li>
        <li
          className={classes.nav_item}
          style={{ color: scroll ? "black" : "white" }}
        >
      
          <Link to="/Projects" style={{ color: scroll ? "black" : "blue" , textDecoration:'none' }}>Projects</Link>
        </li>
        <li
          className={classes.nav_item}
          style={{ color: scroll ? "black" : "white" }}
        >
        
          <Link to="/ContactUs" style={{ color: scroll ? "black" : "blue" , textDecoration:'none' }}>ContactUs</Link>
        </li>
      </ul>
    </div>,
    document.getElementById("nav-bar")
  );
};

export default Navigation;
