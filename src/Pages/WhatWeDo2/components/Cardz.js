import classes from "./Card.module.css";

const Cardz = ({ img, header_text, card_text }) => {
  return (
    <div className={classes.Cards}>
      <div className={classes.img_wrapper}>
        <img src={img} alt="section 3 image" className={classes.card_img} />
      </div>
      <div className={classes.text_wrapper}>
        <h2> {header_text}</h2>
        <p>{card_text}</p>
      </div>
    </div>
  );
};

export default Cardz;