import "./Home.css";
import teaser from "./vids/Teaser.mp4";
import { ReactTyped as Typed } from "react-typed";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import code from "./images/code_logo.png";

export default function Home() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".hero", { delay: 300 });
    sr.reveal(".text", { delay: 200 });
    sr.reveal(".imag", { delay: 300 });

    return () => {
      sr.destroy();
    };
  }, []);

  return (
    <div className="home">
      <section>
        <div className="hero">
          <div class="area">
            <ul class="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <h1 className="title">CODE</h1>
          <p className="typetext">
            <Typed
              strings={[
                "VENI. VIDI. VICI.",
                "Confluence of Digital Experts",
                "Annual Tech Fest of Apeejay School, Noida",
              ]}
              typeSpeed={100}
              backSpeed={80}
              backDelay={1700}
              loop
            />
          </p>
          <h3 className="date">27-28 August, 2K24</h3>
          <span>
            <NavLink className="btn" to="/Register">
              <button>REGISTER</button>
            </NavLink>
            <NavLink className="btn" to="/Brochure">
              <button>BROCHURE</button>
            </NavLink>
          </span>
          <br />
          <div class="scroll-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </div>
        </div>
      </section>
      <About />
      <div className="teaser">
        <h1>TEASER</h1>
        <video src={teaser} loop disablePictureInPicture></video>
      </div>
    </div>
  );
}
function About() {
  return (
    <div className="about">
      <div className="text">
        <h1>About</h1>
        CODE is an illustrious annual technological symposium hosted by the CODE
        Club of Apeejay School, Noida. This prestigious event brings together
        tech enthusiasts from across Delhi-NCR to compete at the cutting edge of
        technology. With a rich agenda featuring competitive programming, group
        discussions, and robotic face-offs, CODE stands as a premier platform
        for fostering technological excellence and inspiring the next generation
        of innovators.
      </div>
      <div className="imag">
        <img src={code} alt="CODE" />
      </div>
    </div>
  );
}
