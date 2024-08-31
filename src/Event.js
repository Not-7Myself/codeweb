import React from "react";
import "./Event.css";

const Event = ({ data }) => {
  return (
    <div className="bodyalt">
      <div className="intro">
        <h1>{data.nome}</h1>
        <div>
          No. of Participants per team: <span>{data.n}</span> <br />
          <br />
          Domain: <span>{data.dom}</span> <br />
          Mode: <span>{data.mode}</span>
          <br />
          {data.software}
          <br />
        </div>
      </div>
      {data.body}
      <br />
      <br />
      <div className="tertiary">{data.contact}</div>
    </div>
  );
};

export default Event;
