
import classes from './Projects.module.css';
import img1 from "../../Components/drawable/AboutUsBG.jpg";
import img2 from "../../Components/drawable/img1.jpg";
import img3 from "../../Components/drawable/img1.jpg";
import img4 from "../../Components/drawable/img3.jpg";
import img5 from "../../Components/drawable/img4.jpg";
import img6 from "../../Components/drawable/img5.jpg";
import img7 from "../../Components/drawable/img6.jpg";
import img8 from "../../Components/drawable/img7.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

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

      <div>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          showDots={true}
          // // responsive={responsive}
          arrows={false}
          renderDotsOutside={false}
          // ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          // autoPlaySpeed={1000}
          // keyBoardControl={true}
          // customTransition="all .5"
          // transitionDuration={500}
          // containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          //deviceType={this.props.deviceType}
          // dotListClass="custom-dot-list-style"
          // itemClass="carousel-item-padding-40-px"
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
        ;
      </div>
    </>
  );
}
export default ProjectsSection2