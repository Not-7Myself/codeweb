import "./Home.css";
import teaser from "./vids/teaser24.mp4";
import { ReactTyped as Typed } from "react-typed";
import { Link } from "react-router-dom";
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
    const srs = ScrollReveal({
      origin: "bottom",
      distance: "80px",
      duration: 1400,
      reset: true,
    });

    sr.reveal(".hero", { delay: 200 });
    srs.reveal(".text", { delay: 0 });
    srs.reveal(".imag", { delay: 50 });

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
          <h3 className="date">30th September - 1st October, 2K24</h3>
          <span>
            <Link className="btn" to="/Register">
              <button>REGISTER</button>
            </Link>
            <Link className="btn" to="/Brochure">
              <button>BROCHURE</button>
            </Link>
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
        <video
          src={teaser}
          controls
          loop
          disablePictureInPicture
          playsInline
        ></video>{" "}
      </div>
    </div>
  );
}
function About() {
  return (
    <div className="about">
      <div className="imag">
        <img src={code} alt="CODE" />
      </div>
      <div className="text">
        <h1>About</h1>
        CODE is an illustrious annual technological symposium hosted by the CODE
        Club of Apeejay School, Noida. This prestigious event brings together
        tech enthusiasts from across Delhi-NCR to compete at the cutting edge of
        technology. With a rich agenda featuring competitive programming, a
        cryptic hunt, robotic face-offs, and many more, CODE stands as a premier
        platform for fostering technological excellence and inspiring the next
        generation of innovators.
        <div className="btns">
          <a href="https://chat.whatsapp.com/H8yqL6cYmhZB2tqg5Rbv1y">
            <button className="ws">
              {" "}
              <i className="fab fa-whatsapp"></i>
              {"   "}Join Whatsapp
            </button>
          </a>
          <a href="https://discord.gg/CbCnY8bty2">
            <button className="dc">
              {" "}
              <i className="fab fa-discord"></i>
              {"   "}Join Discord
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
