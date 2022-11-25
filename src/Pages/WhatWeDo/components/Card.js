import classes from "./Card.module.css";

const Card = ({ img }) => {
  return (
    <div className={classes.Card}>
      <div className={classes.img_wrapper}>
        <img src={img} alt="section 3 image" className={classes.card_img} />
      </div>
      <div className={classes.text_wrapper}>
        <h2>Design</h2>
        <p>
          Our Design team cover 2D Design / DTP / 3D design and Rendering as
          well as Mechanical Design and Engineerin
        </p>
      </div>
    </div>
  );
};

export default Card;
