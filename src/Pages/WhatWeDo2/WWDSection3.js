import classes from "../WhatWeDo2/WhatWeDo2.module.css";
import Typewriter from "typewriter-effect";
import React, { Component } from "react";

export default class WWDSection3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userEmail: "",
      userSubject: "",
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

  handleUserSubject = (event) => {
    this.setState({
      userSubject: event.target.value,
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
        <div className={classes.WWDForSection3}>
          <div className={classes.section}>
            <div className={classes.message}>
              <div className={classes.innerGrid}>
                <div className={classes.subjectLine}>
                  Looking After..! The Details And The Planet.
                </div>

                {/* <div className={classes.storyLine}>
                Rochelle Retail Solutions is able to provide a eco-friendly
                solution and advice on the Green alternatives for your
                Projects. 85% of all Waste raw material are Recycled or
                Re-worked after each production process.
              </div> */}
                <div>
                  <label className={classes.moreInfoButton}>
                    <b>EXPLORE MORE</b>
                  </label>
                  <a href="" className={classes.link}>
                    <b>See our pricing &#62;</b>
                  </a>
                </div>
              </div>
            </div>

            <div className={classes.form}>
              <form className={classes.contactUsForm}>
                <div className={classes.formTitle}>Get In Touch</div>
                <div className={classes.formSubtitle}>
                  <p className={classes.paragraph}>
                    At every level across all disciplines.
                  </p>
                </div>

                <div className={classes.containerWithinForm}>
                  <div className={classes.formContent}>
                    <label className={classes.formSubtitle}>Full name*</label>
                    <input
                      type="text"
                      value={this.state.userName}
                      className={classes.input}
                      placeholder="name & surname"
                      onChange={this.handleUserName}
                    ></input>
                  </div>

                  <div className={classes.formContent}>
                    <label className={classes.formSubtitle}>
                      Email address*
                    </label>
                    <input
                      type="text"
                      value={this.state.userEmail}
                      className={classes.input}
                      placeholder="Email"
                      onChange={this.handleUserEmail}
                    ></input>
                  </div>

                  <div className={classes.formContent}>
                    <label className={classes.formSubtitle}>Subject*</label>
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
