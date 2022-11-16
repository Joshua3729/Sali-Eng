
import classes from './Projects.module.css';
import img1 from "../../Components/drawable/AboutUsBG.jpg";
import img2 from "../../Components/drawable/img1.jpg";
import img3 from "../../Components/drawable/img1.jpg";
import img4 from "../../Components/drawable/img3.jpg";
import img5 from "../../Components/drawable/img4.jpg";
import img6 from "../../Components/drawable/img5.jpg";
import img7 from "../../Components/drawable/img6.jpg";
import img8 from "../../Components/drawable/img7.jpg";

// let slideIndex = 1;
// showDivs(slideIndex);

// const showDivs = (n) => {

//   let i;
//   let x = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("demo");
//   if (n > x.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = x.length;
//   }
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" w3-white", "");
//   }
//   x[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " w3-white";
  
// }

// const currentDiv = (n) => {
//   showDivs((slideIndex = n));
// }
// const plusDivs = (n) => {
//   showDivs((slideIndex += n));
// }


const ProjectsSection2 = () => {
  return (
    <>
      <div className={classes.stunningProjects}>stunning Projects</div>
      <div className={classes.stunningProjectsMessage}>
        We envisage your project in order to execute it. We work in multiple
        sectors and are experts in…
      </div>
      <ul className={classes.projectList}>
        <li>
          <img src={img1} alt="list item" className={classes.listItem} />
        </li>
        <li>
          <img src={img2} alt="list item" className={classes.listItem} />
        </li>
        <li>
          <img src={img3} alt="list item" className={classes.listItem} />
        </li>
        <li>
          <img src={img4} alt="list item" className={classes.listItem} />
        </li>
        <li>
          <img src={img5} alt="list item" className={classes.listItem} />
        </li>
        <li>
          <img src={img6} alt="list item" className={classes.listItem} />
        </li>
        <li>
          <img src={img7} alt="list item" className={classes.listItem} />
        </li>
        <li>
          <img src={img8} alt="list item" className={classes.listItem} />
        </li>
        <li>
          <img src={img8} alt="list item" className={classes.listItem} />
        </li>
      </ul>
    </>
  );
}

export default ProjectsSection2