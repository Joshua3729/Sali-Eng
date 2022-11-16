import { Form } from 'react-router-dom';
import classes from './ContactUs.module.css';
import PropTypes from 'prop-types'
import React, { Component } from 'react'

 class ContactUsSection3 extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      userName: '',
      userEmail: '',
      userSubject: '',
      userMessage: ''
    }
  }


  handleUserName = event => {
    this.setState({
      userName : event.target.value
    })
  }

  handleUserEmail = event => {
    this.setState({
        userEmail: event.target.value
    })
  }

   handleUserSubject = event => {
     this.setState({
       userSubject: event.target.value
     })
   }

   handleUserMessage = event => {
     this.setState({
       userMessage : event.target.value
     })
   }


  render() {
    return (
      <form className={classes.contactUsForm}>
        <div className={classes.formTitle}>Send us a message</div>
        <div className={classes.formSubtitle}>
          Contact us today and our friendly support team will reach out as soon
          as possible.
        </div>

        <div className={classes.containerWithinForm}>
          <div className={classes.formContent}>
            <label className={classes.formSubtitle}>Full name</label>
            <input
              type="text"
              value={this.state.userName}
              className={classes.input}
              placeholder="David Parker"
              onChange={this.handleUserName}
            ></input>
          </div>

          <div className={classes.formContent}>
            <label className={classes.formSubtitle}>Email address</label>
            <input
              type="text"
              value={this.state.userEmail}
              className={classes.input}
              placeholder="myEmail@gmail.com"
              onChange={this.handleUserEmail}
            ></input>
          </div>

          <div className={classes.formContent}>
            <label className={classes.formSubtitle}>Subject</label>
            <input
              type="text"
              value={this.state.userSubject}
              className={classes.input}
              placeholder="Subject"
              onChange={this.handleUserSubject}
            ></input>
          </div>

          <div className={classes.paragraphInForm}>
            <label className={classes.formSubtitle}>
              Write your message below
            </label>

            <textarea
              value={this.state.userMessage}
              onChange={this.handleUserMessage}
            >
              
            </textarea>


            <button className={classes.buttonSubmit}>Submit form</button>
          </div>
        </div>
      </form>
    );
  }
}
export default ContactUsSection3;