import classes from './AboutUsPage.module.css';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import img1 from '../../Components/drawable/AboutUsBG.jpg';
import img2 from '../../Components/drawable/img1.jpg';
import img3 from '../../Components/drawable/img1.jpg';
import img4 from '../../Components/drawable/img3.jpg';
import img5 from '../../Components/drawable/img4.jpg';
import img6 from '../../Components/drawable/img5.jpg';
import img7 from '../../Components/drawable/img6.jpg';
import img8 from '../../Components/drawable/img7.jpg';




const AboutUsSection3 = ()=>{

    return (
        <>
        <div>
            <div className={classes.gridContainer}>
            <Grid  container  spacing={2}   >

                <Grid item xs={3}>

                </Grid>

                <Grid item  xs={3} > 
                    
                    <div className={classes.bMargin}>
                        <h1 className={classes.count}>+00</h1>
                        <h1 className={classes.supportingText} >Team members</h1>
                    </div>
                </Grid>
                <Grid item  xs={3}> 
                    <div className={classes.bMargin}>
                        
                        <h1 className={classes.count}>+00</h1>
                        <h1 className={classes.supportingText}>Yearly Products produced</h1>
                      
                    </div>


                </Grid>
                
                <Grid item xs={3}>

                </Grid>


                    {/* // first four  */}
                <Grid item  xs={3} >
                    <img src={img1}  alt="grid item"  className={classes.gridItemImg}/>
                </Grid>
                
                <Grid item  xs={3}> 
                <img src={img2}  alt="grid item"  className={classes.gridItemImg}/>
                </Grid>

                <Grid item  xs={3}> 
                <img src={img3}  alt="grid item"  className={classes.gridItemImg}/>
                </Grid>


                <Grid item  xs={3}> 
                    <img src={img4}  alt="grid item"  className={classes.gridItemImg}/>
                </Grid>

                {/* // last four  */}
                <Grid item  xs={3}> 
                    <img src={img5}  alt="grid item"  className={classes.gridItemImg}/>
                </Grid>

                <Grid item  xs={3}> 
                    <img src={img6}  alt="grid item"  className={classes.gridItemImg}/>
                </Grid>

                <Grid item  xs={3}> 
                    <img src={img7}  alt="grid item"  className={classes.gridItemImg}/>
                </Grid>

                <Grid item  xs={3}> 
                    <img src={img8}  alt="grid item"  className={classes.gridItemImg}/>
                </Grid>
               
            </Grid> 
            </div>
        
        </div>
        
        </>
    )
}
export default AboutUsSection3;