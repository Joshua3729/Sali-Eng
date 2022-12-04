import DragSlideShow from "../Components/DragSlideShow/DragSlideShow";
import classes from "./SuppliersSection.module.css";

const SuppliersSection = () => {
  return (
    <div className={classes.SuppliersSection}>
      <div className={classes.title_wrapper}>
        <h6 className={classes.SuppliersSection_title}>
          Sali Engineering Trusted Suppliers
        </h6>
      </div>
      <DragSlideShow />
    </div>
  );
};

export default SuppliersSection;
