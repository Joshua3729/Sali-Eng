import classes from './AboutUsPage.module.css';

import img2 from '../../Components/drawable/img1.jpg';
function AboutUsSection1() {
  return (
    <div className={classes.section1Parent}>
        <img src={img2}  alt="section 1 image"  className={classes.section1}/>
        <p className={classes.aboutUsText}>About us</p>

    </div>
  )
}

export default AboutUsSection1;