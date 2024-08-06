import React from "react";
import "./EventList.css";

import Event from "./Event";

import img1 from "./images/web-dev.png";
import img2 from "./images/clapperboard.png";
import img3 from "./images/game.png";
import tuxpaint from "./Icons/1.PNG";
import scratch from "./Icons/2.PNG";
import gaming from "./Icons/3.PNG";
import quiz from "./Icons/4.PNG";
import gd from "./Icons/5.PNG";
import photography from "./Icons/6.PNG";
import dcrypt from "./Icons/7.PNG";
import di from "./Icons/8.PNG";
import framefusion from "./Icons/9.PNG";
import musicmatrix from "./Icons/10.PNG";
import pycode from "./Icons/11.PNG";
import hackthon from "./Icons/12.PNG";
import keynote from "./Icons/13.PNG";
import chatforge from "./Icons/14.PNG";
import robowars from "./Icons/15.PNG";

import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const eventImages = [
  [
    { nome: "tuxpaint", value: tuxpaint },
    { nome: "scratch", value: scratch },
    { nome: "gaming", value: gaming },
  ],
  [
    { nome: "quiz", value: quiz },
    { nome: "groupdiscussion", value: gd },
    { nome: "photography", value: photography },
  ],
  [
    { nome: "dcrypt", value: dcrypt },
    { nome: "digitalimaging", value: di },
    { nome: "framefusion", value: framefusion },
  ],
  [
    { nome: "musicmatrix", value: musicmatrix },
    { nome: "pycode", value: pycode },
    { nome: "hackathon", value: hackthon },
  ],
  [
    { nome: "keynote", value: keynote },
    { nome: "chatforge", value: chatforge },
    { nome: "robowars", value: robowars },
  ],
];

const EventBox = ({ src }) => (
  <div className="box">
    <img className="e1" src={src} alt="Event" />
  </div>
);

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
        <p>
          CODE 2K24 is packed with a plethora of events, exercising your skills
          on video editing, cryptic hunting, gaming, pitching, and much more!
        </p>
      </div>
      <div className="events">
        {eventImages.map((chunk, index) => (
          <div className="boxes" key={index}>
            {chunk.map((src, idx) => (
              <NavLink to={`${src.nome}`}>
                <EventBox key={idx} src={src.value} />
              </NavLink>
            ))}
          </div>
        ))}
      </div>

      <img className="img1" src={img1} alt="Decoration" />
      <img className="img2" src={img2} alt="Decoration" />
      <img className="img3" src={img3} alt="Decoration" />
    </div>
  );
}
