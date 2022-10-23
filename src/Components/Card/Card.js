import classes from "./Card.module.css";

const Card = ({ image, header, details }) => {
  return (
    <div className={classes.Card}>
      <div className={classes.text_wrapper}>
        <h3 className={classes.header}>{header}</h3>
        <p className={classes.details}>{details}</p>
        <button className={classes.discoverMore_btn}>Discover more</button>
      </div>
      <div className={classes.backdrop}></div>
      <img src={image} />
    </div>
  );
};

export default Card;
