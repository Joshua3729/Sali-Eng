import classes from "./Card.module.css";

const Card = ({ img, header_text, card_text, height, bigCard }) => {
  return (
    <div className={classes.Card} style={{ maxHeight: height }}>
      <div
        className={classes.img_wrapper}
        style={{ height: bigCard ? "350px" : "280px" }}
      >
        <img src={img} alt="section 3 image" className={classes.card_img} />
      </div>
      <div className={classes.text_wrapper}>
        <h2> {header_text}</h2>
        <p>{card_text}</p>
      </div>
      <div className={classes.visitOurStores_wrapper}></div>
    </div>
  );
};

export default Card;
