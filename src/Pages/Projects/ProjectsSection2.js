
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


{/* <div className={classes.projectList}>
  <img src={img1} alt="list item" className={classes.listItem} />
  <img src={img2} alt="list item" className={classes.listItem} />
  <img src={img3} alt="list item" className={classes.listItem} />
  <img src={img4} alt="list item" className={classes.listItem} />
  <img src={img5} alt="list item" className={classes.listItem} />
  <img src={img6} alt="list item" className={classes.listItem} />
  <img src={img7} alt="list item" className={classes.listItem} />
  <img src={img8} alt="list item" className={classes.listItem} />
  <img src={img8} alt="list item" className={classes.listItem} />
</div>; */}

const slides = [
  { key: 0, image: img1, title: "mytitle" },
  { key: 1, image: img2, title: "mytitle" },
  { key: 2, image: img3, title: "mytitle" },
  { key: 3, image: img4, title: "mytitle" },
  { key: 4, image: img5, title: "mytitle" },
  { key: 5, image: img6, title: "mytitle" },
  { key: 6, image: img7, title: "mytitle" },
  { key: 7, image: img8, title: "mytitle" },
];
const handleDragStart = (e) => e.preventDefault();
const items = [
  <img src={img1} onDragStart={handleDragStart} role="presentation" />,
  <img src={img2} onDragStart={handleDragStart} role="presentation" />,
  <img src={img3} onDragStart={handleDragStart} role="presentation" />,
];

const ProjectsSection2 = () => {
  return (
    <>
      <div className={classes.stunningProjects}>stunning Projects</div>
      <div className={classes.stunningProjectsMessage}>
        We envisage your project in order to execute it. We work in multiple
        sectors and are experts in…
      </div>

      <div>
        {/* <AliceCarousel>
          {slides.map((image) => (
            <div key={image.key} className={classes.text1}>
              {<img src={image.image} className={classes.listItem} />}
            </div>
          ))}
        </AliceCarousel> */}

        <AliceCarousel
          onDragStart={handleDragStart}
          role="presentation"
          items={items}
        />
      </div>
    </>
  );
}
export default ProjectsSection2