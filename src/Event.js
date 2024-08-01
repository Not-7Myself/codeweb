import React from "react";
import "./Event.css";
import html from "./images/web-dev.png";

const Event = ({ data }) => {
  return (
    <div className="bodyalt">
      <div className="intro">
        <h1>Hackathon</h1>
        <div>
          No. of Participants per team: <span>2</span> <br></br>
          Domain: <span>OPEN</span> <br></br>
          Mode: <span>HYBRID</span>
          <br />
          <br />
          Software: <span>Any IDE</span>
        </div>
      </div>
      <div className="primary">
        <h2>Details</h2>
        <div>
          Details Participants will have to design an app/website/chrome
          extension/etc.(Any type of <span>Software</span>), on the topic{" "}
          <span>‘Developer productivity’</span>. Participants will have to bring
          their project on the event day, in a pen drive or on their laptop.
          They will have to present their project, which will be followed by a
          QnA session.
        </div>
      </div>
      <div className="tertiary">
        <h2>Contact</h2>
        <div>
          Amaan Elahi <br></br>
          Discord: <span> _notmyself</span> <br></br>
          Phone No: <span> +91 98702 11033</span>
        </div>
      </div>
      <div className="btns">
        <button>SUBMIT</button>{" "}
      </div>
      <img src={html} className="img"></img>
    </div>
  );
};

export default Event;
