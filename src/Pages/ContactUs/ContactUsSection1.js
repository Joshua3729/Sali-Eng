import classes from '../AboutUsPage/AboutUsPage.module.css';
import img2 from '../../Components/drawable/img1.jpg';
function ContactUsSection1() {
  return (
    <>
    <div className={classes.section1Parent}>
        <img src={img2}  alt="section 1 image"  className={classes.section1}/>
        <p className={classes.aboutUsText}>Contact us</p>
    </div>

    </>
  )
}

export default ContactUsSection1;