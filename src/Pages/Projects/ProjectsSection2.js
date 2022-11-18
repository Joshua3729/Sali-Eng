
import classes from './Projects.module.css';
import img1 from "../../Components/drawable/AboutUsBG.jpg";
import img2 from "../../Components/drawable/img1.jpg";
import img3 from "../../Components/drawable/img1.jpg";
import img4 from "../../Components/drawable/img3.jpg";
import img5 from "../../Components/drawable/img4.jpg";
import img6 from "../../Components/drawable/img5.jpg";
import img7 from "../../Components/drawable/img6.jpg";
import img8 from "../../Components/drawable/img7.jpg";
import ImageSlider from './ImageSlider/ImageSlider';


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
  { image:  img1 , title: "mytitle" },
  { image:  img2 , title: "mytitle" },
  { image:  img3 , title: "mytitle" },
  { image:  img4 , title: "mytitle" },
  { image: img5 , title: "mytitle" },
  { image:  img6 , title: "mytitle" },
  { image:  img7 , title: "mytitle" },
  { image:  img8 , title: "mytitle" }
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
        <ImageSlider slides={slides} />
      </div>
    </>
  );
}

export default ProjectsSection2