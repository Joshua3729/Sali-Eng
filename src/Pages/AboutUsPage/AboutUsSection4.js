import classes from './AboutUsPage.module.css';
import img1 from '../../Components/drawable/img1.jpg';
import img2 from '../../Components/drawable/img2.jpg'


const AboutUsSection4 = ()=>{
    return (
        <>
        <div className={classes.section4container}>
          <div  className={classes.text_s4_p2}>
            <div className={classes.message}>Specialists on innovative solutions</div>
            <div className={classes.paragraph}> If you’re thinking that filler text seems pretty boring and uncontroversial
              , you’d be wrong. Surprisingly, there is a very vocal faction of the design community
               that wants to see filler text banished to the original sources from whence it came.
                Perhaps not surprisingly, in an era of endless quibbling, there is an equally vocal 
                contingent of designers leaping to defend the use of the time-honored tradition of
                 greeking. The argument in favor of using filler text goes something like this: If
                you use real content in the design process, anytime you reach a review point you’ll
                end up reviewing and negotiating the content itself and not the design. This will
                just slow down the design process. Design first, with real content in mind (of course!),
                but don’t drop in the real content until the design is well on its way. Using
                filler text avoids the inevitable argumentation that accompanies the use of real 
                content in the design process.
                </div>
          </div>
         
            <div className={classes.containerOfAnimatedImages}>
              
              <img src={img1}  alt="grid item"  className={classes.floatingImages}  id={classes.topImage}/>
            <img src={img2} alt="grid item" className={classes.floatingImages} id={classes.bottomImage} />
            </div>
        </div>
        
      </>
      );
};
export default AboutUsSection4;