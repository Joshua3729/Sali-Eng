import classes from './AboutUsPage.module.css';
import img1 from '../../Components/drawable/AboutUsBG.jpg';
function AboutUsSection1() {
  return (
    <div className={classes.section1Parent}>
        <img src={img1}  alt="section 1 image"  className={classes.section1}/>
        <p className={classes.aboutUsText}>About us</p>

    </div>
  )
}

export default AboutUsSection1;