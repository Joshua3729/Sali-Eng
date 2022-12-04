import React, { Component } from 'react'
// import classes from '../ContactUs/ContactUs.module.css';
import classes from './Projects.module.css';
export default class ProjectsSection3 extends Component {
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
          userName : event.target.value,
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
      <>
        <div className={classes.projectsSection3}>
          <div className={classes.section}>
            <div className={classes.message}>
              <div className={classes.deals}>
                <div className={classes.exclusive}>Exclusive Deals </div>

                <div>
                  Find out more about how we can help you with your branded.
                </div>
              </div>

              <div className={classes.innerGrid}>
                <div className={classes.subjectLine}>Looking After..! The Details And The Planet </div>
                <div className={classes.storyLine}>
                  Rochelle Retail Solutions is able to provide a eco-friendly
                  solution and advice on the Green alternatives for your
                  Projects. 85% of all Waste raw material are Recycled or
                  Re-worked after each production process.
                </div>
                <div>
                  <label  className={classes.moreInfoButton}>
                    email  us for information.
                  </label>
                </div>

              </div>
            </div>

            <div className={classes.form}>
              <form className={classes.contactUsForm}>
                <div className={classes.formTitle}>Get In Touch </div>
                <div className={classes.formSubtitle}>
                  Contact us today and our friendly support team will reach out
                  as soon as possible.
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
                    <label className={classes.formSubtitle}>
                      Email address
                    </label>
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
                    ></textarea>

                    <button className={classes.buttonSubmit}>
                      Submit form
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
