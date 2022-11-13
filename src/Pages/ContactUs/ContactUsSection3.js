import { Form } from 'react-router-dom';
import classes from './ContactUs.module.css';
import PropTypes from 'prop-types'
import React, { Component } from 'react'

 class ContactUsSection3 extends Component {
  render() {
    return (
            <form  className={classes.contactUsForm}>
              <div className={classes.formTitle}>Send us a message</div>
              <div className={classes.formSubtitle}>Contact us today and our friendly support team will reach out as soon as possible.</div>

              <div className={classes.containerWithinForm}>
              <div className={classes.formContent}>
                <label className={classes.formSubtitle}>Full name</label>
                <input type="text" value="" className={classes.input} placeholder="David Parker"></input>
              </div>

              <div className={classes.formContent}>
                <label className={classes.formSubtitle}>Email address</label>
                <input type="text" value="" className={classes.input} placeholder="myeamil@gmail.com"></input>
              </div>

              <div className={classes.formContent}>
                <label className={classes.formSubtitle}>Subject</label>
                <input type="text" value="" className={classes.input} placeholder="Subject"></input>
              </div>


              <div className={classes.paragraphInForm}>
                <label className={classes.formSubtitle}>Write your message below</label>
                <input type="text" value=""></input>

                <button className={classes.buttonSubmit}>Submit form</button>
              </div>
              </div>
            </form>
    )
  }
}
export default ContactUsSection3;