import React from "react";
import "./EventList.css";

import Spline from "@splinetool/react-spline";

import digitalimaging from "./Icons/digitalimaging.jpeg";
import gaming from "./Icons/gaming.jpg";
import pycode from "./Icons/pycode.jpg";
import dcrypt from "./Icons/dcrpty.jpg";
import scratch from "./Icons/scratch.jpg";
import musicmatrix from "./Icons/musicmatrix.jpg";
import photography from "./Icons/photography.jpg";
import quiz from "./Icons/quiz.jpg";
import gd from "./Icons/gd.jpg";
import ideathon from "./Icons/ideathon.png";
import chatforge from "./Icons/chatforge.jpg";
import robowars from "./Icons/robowars.png";
import framefusion from "./Icons/framefusion.jpg";
import tuxpaint from "./Icons/tuxpaint.png";

import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const eventImages = [
  [
    {
      nome: "ideathon",
      value: ideathon,
      name: "Ideathon",
      desc: (
        <>
          Creativity is all you need!!!
          <br />
          <br />
          (And maybe some Programming, Design and Speaking skills...)
        </>
      ),
    },
    {
      nome: "robowars",
      value: robowars,
      name: "Robo Wars",
      desc: (
        <>
          Destroy each other in a
          <br />
          Fight-to-Death (using bots ofcourse!)
        </>
      ),
    },

    { nome: "chatforge", value: chatforge, name: "Chat Forge" },
    { nome: "framefusion", value: framefusion, name: "Frame Fusion" },
    { nome: "dcrypt", value: dcrypt, name: "DCrypt" },
    { nome: "pycode", value: pycode, name: "PyCODE" },
    { nome: "quiz", value: quiz, name: "Quiz" },
    { nome: "musicmatrix", value: musicmatrix, name: "Music Matrix" },
    { nome: "gaming", value: gaming, name: "Gaming" },
    { nome: "digitalimaging", value: digitalimaging, name: "Digital Imaging" },
    { nome: "groupdiscussion", value: gd, name: "Group Discussion" },
    { nome: "photography", value: photography, name: "Photography" },
    { nome: "tuxpaint", value: tuxpaint, name: "Tux Paint" },
    { nome: "scratch", value: scratch, name: "Scratch" },
  ],
];

const EventBox = ({ src }) => {
  return (
    <div className="box">
      <div className="card-image">
        <img src={src.value} alt={src.name} />
      </div>
      <div className="card-content">
        <h1 className="card-title">{src.name}</h1>
        <p className="card-description">{src.desc}</p>
        <NavLink to={`${src.nome}`}>
          <button className="btn">Details</button>
        </NavLink>
      </div>
    </div>
  );
};
export default function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "50px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".boxes", { delay: 50 });

    return () => {
      sr.destroy();
    };
  }, []);
  return (
    <div className="list">
      <div className="intro">
        <h1>EVENTS</h1>
        <p className="p1">
          CODE 2K24 is packed with a plethora of events, exercising your skills
          on video editing, cryptic hunting, gaming, pitching, and much more!
        </p>
      </div>
      <div className="events">
        {eventImages.map((chunk, index) => (
          <div className="boxes" key={index}>
            {chunk.map((src, idx) => (
              <EventBox key={idx} src={src} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
