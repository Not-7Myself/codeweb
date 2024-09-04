import React from "react";
import "./EventList.css";

import digitalimaging from "./Icons/digitalimaging.jpeg";
import gaming from "./Icons/gaming.png";
import pycode from "./Icons/pycode.jpg";
import dcrypt from "./Icons/dcrpty.jpg";
import scratch from "./Icons/scratch.jpg";
import musicmatrix from "./Icons/musicmatrix.jpg";
import photography from "./Icons/photography.png";
import quiz from "./Icons/quiz.jpg";
import gd from "./Icons/gd.png";
import ideathon from "./Icons/ideathon.png";
import chatforge from "./Icons/chatforge.jpg";
import robowars from "./Icons/robowars.png";
import framefusion from "./Icons/framefusion.png";
import tuxpaint from "./Icons/tuxpaint.png";

import { Link } from "react-router-dom";
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
          Fight-for-Glory (using bots of course!)
        </>
      ),
    },

    {
      nome: "chatforge",
      value: chatforge,
      name: "Chat Forge",
      desc: <>Create AI bots, which will steal your jots (jobs didnt rhyme)</>,
    },
    {
      nome: "framefusion",
      value: framefusion,
      name: "Frame Fusion",
      desc: <>Lights, Camera - never mind you can't afford those</>,
    },
    {
      nome: "dcrypt",
      value: dcrypt,
      name: "DCrypt",
      desc: (
        <>
          Use your brain, to solve the hardest cryptic and hacking problems ever
          problemed!
        </>
      ),
    },
    {
      nome: "pycode",
      value: pycode,
      name: "PyCODE",
      desc: <>Do Programming and Graphs like 3D</>,
    },
    {
      nome: "quiz",
      value: quiz,
      name: "Quiz",
      desc: (
        <>
          The ultimate challenge of your knowledge using your non-existent wits.
        </>
      ),
    },
    {
      nome: "musicmatrix",
      value: musicmatrix,
      name: "Music Matrix",
      desc: <>Compose your beats like its for your 9th symphony...</>,
    },
    {
      nome: "gaming",
      value: gaming,
      name: "Gaming",
      desc: <>Games don't make you violent, lag does</>,
    },
    {
      nome: "digitalimaging",
      value: digitalimaging,
      name: "Digital Imaging",
      desc: <>Either you are a designer, or you use Canva.</>,
    },
    {
      nome: "groupdiscussion",
      value: gd,
      name: "Group Discussion",
      desc: <>Welcome to a 'Disciplined' News Room</>,
    },
    {
      nome: "photography",
      value: photography,
      name: "Photography",
      desc: <>Show the people what Your eyes can see</>,
    },
    {
      nome: "tuxpaint",
      value: tuxpaint,
      name: "Tux Paint",
      desc: <>Wassup Tech Cat</>,
    },
    {
      nome: "scratch",
      value: scratch,
      name: "Scratch",
      desc: <>Wassup Artsy Penguin</>,
    },
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
        <Link to={`${src.nome}`}>
          <button className="btn">Details</button>
        </Link>
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
