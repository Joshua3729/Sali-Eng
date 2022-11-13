import classes from './ContactUs.module.css';
import email from '../../Assets/Images/email.png';
import locationIcon from '../../Assets/Images/location.png';
import callIcon from '../../Assets/Images/phone-call.png';
import img1 from '../../Components/drawable/AboutUsBG.jpg';
import img2 from '../../Components/drawable/img1.jpg';
import img3 from '../../Components/drawable/img1.jpg';
import img4 from '../../Components/drawable/img3.jpg';
import img5 from '../../Components/drawable/img4.jpg';
import img6 from '../../Components/drawable/img5.jpg';
const ContactUsSection2 = () => {
  return (
    <>
    <h1 className={classes.firstLine}>Build your Brand with us.</h1>
    <div  className={classes.gridContainer1}>
            <img src={img1}  alt="grid item"  className={classes.gridItemImg}/>
            
            <img src={img2}  alt="grid item"  className={classes.gridItemImg}/>

            <img src={img3}  alt="grid item"  className={classes.gridItemImg}/>
        
            <img src={img4}  alt="grid item"  className={classes.gridItemImg}/>
    
            <img src={img5}  alt="grid item"  className={classes.gridItemImg}/>
    
            <img src={img6}  alt="grid item"  className={classes.gridItemImg}/>
    </div>

    <div className={classes.subject}>

        <div className={classes.alignment}>
            Contact us today
        </div>
        
    </div>
    <div className={classes.subjectLine}>
        We offer free Quotations within 24 hours
    </div>

    <div  className={classes.cardContainer}>

    <div className={classes.wrapper}>
        <div className={classes.card}>

            <img src={callIcon}  alt="call icon"  className={classes.cardIcon}/>
            <div className={classes.callUs}>
                call us today.
            </div>

            <div  className={classes.callUsNo}>
                (+27) 71 220 8870
            </div>


        </div>
    </div>
        <div className={classes.card}>
            
            <img src={email}  alt="email icon"  className={classes.cardIcon}/>
            <div className={classes.callUs}>
                send an email.
            </div>

            <div  className={classes.callUsNo}>
                Salizwa@saliretails.com
        </div>
        </div>
        <div className={classes.card}>
            <img src={locationIcon}  alt="location icon"  className={classes.cardIcon}/>
            <div className={classes.callUs}>
                visit our HQ.
            </div>

            <div  className={classes.callUsNo}>
                12 mandela st cape town.
            </div>

        </div>
    </div>
    
    </>
  )
}

export default ContactUsSection2;