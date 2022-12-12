import React, { Component } from "react";
// import classes from '../ContactUs/ContactUs.module.css';
import classes from "./Quote.module.css";

export default class Quotelandingpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userEmail: "",
      ContactDetails: "",
      Company: "",
      Project: "",
      userMessage: "",
    };
  }

  handleUserName = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  handleUserEmail = (event) => {
    this.setState({
      userEmail: event.target.value,
    });
  };

  handleContactDetailst = (event) => {
    this.setState({
      ContactDetails: event.target.value,
    });
  };
 
  handleCompany = (event) => {
    this.setState({
      Company: event.target.value,
    });
  };
  handleProject = (event) => {
    this.setState({
      Project: event.target.value,
    });
  };

  handleUserMessage = (event) => {
    this.setState({
      userMessage: event.target.value,
    });
  };
  render() {
    return (
      <>
        <div className={classes.projectsSection3}>
          <div className={classes.section}>
            <div className={classes.message}>
             
              <div className={classes.innerGrid}>
                <div className={classes.subjectLine}>Request a Quotation</div>
                <div className={classes.storyLine}>
                  We offer you the ability to request an online quotation.
                  Simply complete the form below and upload any concept drawings
                  of your idea. We will respond to you within 24 hours. Your
                  name.
                </div>
              </div>
            </div>

            <div className={classes.form}>
              <form className={classes.contactUsForm}>
                <div className={classes.formTitle}><p className={classes.getQuote}><b>Get A Quote</b></p></div>
            

                <div className={classes.containerWithinForm}>
                  <div className={classes.formContent}>
                    <label className={classes.formSubtitle}>Full name</label>
                    <input
                      type="text"
                      value={this.state.userName}
                      className={classes.input}
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
                     
                      onChange={this.handleUserEmail}
                    ></input>
                  </div>

                  <div className={classes.formContent}>
                    <label className={classes.formSubtitle}>Contact Number</label>
                    <input
                      type="text"
                      value={this.state.ContactDetails}
                      className={classes.input}
                     
                      onChange={this.handleContactDetails}
                    ></input>
                  </div>

                  <div className={classes.formContent}>
                    <label className={classes.formSubtitle}>Company</label>
                    <input
                      type="text"
                      value={this.state.Company}
                      className={classes.input}
                  
                      onChange={this.handleCompany}
                    ></input>
                  </div>

                  
                  <div className={classes.formContent}>
                    <label className={classes.formSubtitle}>Project</label>
                    <input
                      type="text"
                      value={this.state.Project}
                      className={classes.input}
                    
                      onChange={this.handleProject}
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
                    <label className={classes.uploadsection}>Upload Files Here (optional)</label>
                    <span className={classes.optional}>
                     <button className={classes.buttonSubmit1}>
                      Choose File 
                    </button>
                     <p className={classes.para}>No file chosen</p></span>
                    <button className={classes.buttonSubmit2}>
                      Request Quote
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
