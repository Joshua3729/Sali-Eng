import logo from "../../../Assets/Images/logo.png";
import classes from "./Logo.module.css";

const Logo = ({ scroll }) => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="logo" />
      <div
        style={{ color: scroll ? "#181b29" : "white" }}
        className={classes.logo_name}
      >
        Sali Retail
      </div>
      <div
        style={{ color: scroll ? "#181b29" : "white" }}
        className={classes.logo_details}
      >
        Solutions
      </div>
    </div>
  );
};

export default Logo;
