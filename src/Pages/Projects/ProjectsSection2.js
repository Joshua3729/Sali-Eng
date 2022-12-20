
import classes from './Projects.module.css';
import img1 from "../../Components/drawable/sneaker.jpeg";
import img2 from "../../Components/drawable/pamper.jpeg";
import img3 from "../../Components/drawable/shoereck.jpeg";
import img4 from "../../Components/drawable/PSVITA.jpeg";
import img5 from "../../Components/drawable/SHELF.jpeg";
import img6 from "../../Components/drawable/glassstand.jpeg";
import img7 from "../../Components/drawable/Wines.jpeg";
import img8 from "../../Components/drawable/WOLF.jpeg";
import img9 from "../../Components/drawable/BLUE.jpeg";
import img10 from "../../Components/drawable/BLUEBAY.jpeg";
import img11 from "../../Components/drawable/SUPER.jpeg";
import img12 from "../../Components/drawable/WOLFHOUSE.jpeg";
import img13 from "../../Components/drawable/WOLF.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


const ProjectsSection2 = () => {
  return (
    <>
      <div className={classes.stunningProjects}>stunning Projects</div>
      <div className={classes.stunningProjectsMessage}>
        We envisage your project in order to execute it. We work in multiple
        sectors and are experts in…
      </div>

      <div className={classes.carouselContainer}>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          showDots={true}
          arrows={false}
          renderDotsOutside={false}
        >
          <div>
            <img src={img2} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img5} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img3} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img4} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img5} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img6} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img7} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img8} className={classes.listItem} alt="list item" />
          </div>
        </Carousel>
        <div className={classes.headingForRows}>Freestanding display</div>
      </div>
      <div className={classes.carouselContainer}>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          showDots={true}
          arrows={false}
          renderDotsOutside={false}
          infinite={true}
        >
          <div>
            <img src={img1} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img2} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img3} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img4} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img6} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img6} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img7} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img8} className={classes.listItem} alt="list item" />
          </div>
        </Carousel>
        <div className={classes.headingForRows}>Signage</div>
      </div>

      <div className={classes.carouselContainer}>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          showDots={true}
          arrows={false}
          renderDotsOutside={false}
          infinite={true}
        >
          <div>
            <img src={img9} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img10} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img11} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img12} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img13} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img9} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img12} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img13} className={classes.listItem} alt="list item" />
          </div>
        </Carousel>
        <div className={classes.headingForRows}>Counter Top Displays</div>
      </div>

      <div className={classes.carouselContainer}>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          showDots={true}
          arrows={false}
          renderDotsOutside={false}
          infinite={true}
        >
          <div>
            <img src={img1} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img2} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img3} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img4} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img6} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img6} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img7} className={classes.listItem} alt="list item" />
          </div>
          <div>
            <img src={img8} className={classes.listItem} alt="list item" />
          </div>
        </Carousel>
        <div className={classes.headingForRows}>Custom project</div>
      </div>
    </>
  );
}
export default ProjectsSection2