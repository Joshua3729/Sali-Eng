import classes from "./Navigation.module.css";
import ReactDOM from "react-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../UI/Logo/Logo";

const Navigation = ({ activeLink }) => {
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
      <Logo scroll={scroll} />
      <ul className={classes.nav_list}>
        <li className={classes.nav_item}>
          <Link
            to="/"
            style={{
              color: scroll ? "black" : "white",
              textDecoration: "none",
            }}
          >
            <span
              className={
                activeLink === "/"
                  ? [classes.navLink, classes.activeLink].join(" ")
                  : classes.navLink
              }
            >
              Home
            </span>
          </Link>
        </li>
        <li className={classes.nav_item}>
          <Link
            to="/AboutUs"
            style={{
              color: scroll ? "black" : "white",
              textDecoration: "none",
            }}
          >
            <span
              className={
                activeLink === "/AboutUs"
                  ? [classes.navLink, classes.activeLink].join(" ")
                  : classes.navLink
              }
            >
              About us
            </span>
          </Link>
        </li>
        <li
          className={classes.nav_item}
          style={{ color: scroll ? "black" : "white" }}
        >
          <Link
            to="/WhatWeDo2"
            style={{
              color: scroll ? "black" : "white",
              textDecoration: "none",
            }}
          >
            <span
              className={
                activeLink === "/WhatWeDo2"
                  ? [classes.navLink, classes.activeLink].join(" ")
                  : classes.navLink
              }
            >
              What We Do
            </span>
          </Link>
        </li>
        <li
          className={classes.nav_item}
          style={{ color: scroll ? "black" : "white" }}
        >
          <Link
            to="/Projects"
            style={{
              color: scroll ? "black" : "white",
              textDecoration: "none",
            }}
          >
            <span
              className={
                activeLink === "/Projects"
                  ? [classes.navLink, classes.activeLink].join(" ")
                  : classes.navLink
              }
            >
              Projects
            </span>
          </Link>
        </li>
        <li
          className={classes.nav_item}
          style={{ color: scroll ? "black" : "white" }}
        >
          <Link
            to="/ContactUs"
            style={{
              color: scroll ? "black" : "white",
              textDecoration: "none",
            }}
          >
            <span
              className={
                activeLink === "/ContactUs"
                  ? [classes.navLink, classes.activeLink].join(" ")
                  : classes.navLink
              }
            >
              Contact us
            </span>
          </Link>
        </li>
        <li
          className={classes.nav_item}
          style={{ color: scroll ? "black" : "white" }}
        >
          <Link
            to="/Quote" 
          >
              <span
              // className={
              //   activeLink === "/Quote"
              //     ? [classes.navLink, classes.activeLink].join(" ")
              //     : classes.navLink
              
              // }
            >
             <button className={classes.CTA_btn }>Get a Quote</button>
            </span>
          
          </Link>
   
        </li>
      </ul>
    </div>,
    document.getElementById("nav-bar")
  );
};

export default Navigation;
