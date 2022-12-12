import classes from './Quote.module.css';
import imageSection1 from "../../Assets/Images/Kitchen.jpeg"
const QuoteSection1 = () => {
    return (
      
    
       <>
    <div className={classes.Quotesection1Parent}>
        <img src={imageSection1}  alt="section 1 image"  className={classes.Qsection1}/>
        <p className={classes.aboutUsText}>Request A Quote</p>
    </div>

    </>

      
        );
};

export default QuoteSection1;