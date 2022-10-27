import classes from './AboutUsPage.module.css';
import img1 from '../../Components/drawable/img1.jpg';
import img2 from '../../Components/drawable/img2.jpg'


const AboutUsSection4 = ()=>{
    return (
        <>
        <div className={classes.text_s4}>
          <div  className={classes.text_s4_p2}>
            <h1 className={classes.message}>Specialists on innovative solutions</h1>
            <p className={classes.paragraph}> If you’re thinking that filler text seems pretty boring and uncontroversial
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
                content in the design process. Those opposed to using filler text of any
                sort counter by saying: The ultimate purpose of any digital product, whether a
                website, app, or HTML email, is to showcase real content, not to showcase great
                design. You can’t get a true sense for how your content plays with your
                design unless you use the real thing!C/O <pre><a href="https://placeholder.com/text/">placeholder.com</a></pre></p>
          </div>




            <div  className={classes.parent}>

              <img src={img1}  alt="grid item"  className={classes.floatingImages}/>

                <div  className={classes.child} >

                  <img src={img2}  alt="grid item"  className={classes.floatingImages}/>
                </div>

            </div>


        </div>
        
      </>
      );
};
export default AboutUsSection4;