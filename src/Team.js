import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import "./App.css";
import "./Team.css";

import Moloy from "./Pics/Moloy.jpg";
import Atharva from "./Pics/Atharva.png";
import Nairit from "./Pics/Nairit.png";
import Saksham from "./Pics/Saksham.png";
import Siya from "./Pics/Siya.png";
import Vipul from "./Pics/Vipul.png";
import Kanta from "./Pics/Antahkaran.png";
import Ariet from "./Pics/Ariet.png";
import Shambhavi from "./Pics/Shambhavi.png";
import Shivesh from "./Pics/Shivesh.png";
import Abhiroop from "./Pics/Abhiroop.png";
import Yashraj from "./Pics/Yashraj.jpg";
import Ishaan from "./Pics/Ishaan.jpg";
import Ritik from "./Pics/Ritik.jpg";
import Rakshit from "./Pics/Raksit.jpg";
import Maulik from "./Pics/Maulik.jpg";
import Manan from "./Pics/Manan.jpg";
import Saharsh from "./Pics/Saharsh.jpg";
import Surat from "./Pics/surat.jpg";
import Rito from "./Pics/Rito.jpg";
import sid from "./Pics/siddhant.jpg";
import amaan from "./Pics/Amaan.jpg";

const cardData1 = [
  {
    name: `Moloy Sikka`,
    img: Moloy,
    title: "President",
    description: "All that is gold does not glitter.",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
  {
    name: "Vipul Mittal",
    img: Vipul,
    title: "Robotics President",
    description: "psychward ceo",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
];
const cardData2 = [
  {
    name: "Amaan Elahi",
    img: amaan,

    title: "Vice President",
    description: "maybe, maybe not...",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
  {
    name: "Manan Kasana",
    img: Manan,

    title: "Vice President",
    description: "stop me if you can",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
  {
    name: "Surat Sahni",
    img: Surat,
    title: "Robotics Vice President",
    description: "be kind, be courageous 🍀 -my dad(and cinderella)",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
];
const cardData3 = [
  {
    name: "Atharva Srivastava",
    img: Shivesh,

    title: "OG",
    description: "Meow meow, meow meow meow meow?!?!?",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
  {
    name: "Saksham",
    img: Saksham,

    title: "Director",
    description: "The godfather>>",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
  {
    name: "Shambhavi",
    img: Shambhavi,

    title: "Director",
    description: "Messy bun and getting things done:)",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
];
const cardData4 = [
  {
    name: "Ritik Singh",
    img: Ritik,

    title: "Director",
    description: "Learn to rest, not to quit.",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
  {
    name: "Siddhant Mishra",
    img: sid,

    title: "Director",
    description: "print('Hello World!')",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
  {
    name: "Atharva Gupta",
    img: Atharva,

    title: "Director",
    description: "This is your MASTER SPEAKING! haHAA",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
];
const cardData5 = [
  {
    name: "Saharsh Bhardwaj",
    img: Saharsh,

    title: "Director",
    description: "You are never alone, god is always with you.",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
  {
    name: "Ariet Jha",
    img: Ariet,

    title: "Director",
    description: "ब्रह्म सत्यं जगत मिथ्या जीवो ब्रह्मैव नापरः ",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
  {
    name: "Maulik Jain",
    img: Maulik,

    title: "Director",
    description: "Preoccupied with a single leaf... you won't see the tree. ",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
];
const cardData6 = [
  {
    name: "Antahakaran",
    img: Kanta,

    title: "Director",
    description: "Show Me Your MOTIVATION!!",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
  {
    name: "Nairit",
    img: Nairit,

    title: "Director",
    description: "Mujhe Bread pasand hai :D",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
  {
    name: "Siya Batra",
    img: Siya,

    title: "Secretary",
    description: "H&M shoplifter",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
];
const cardData7 = [
  {
    name: "Abhiroop Kapoor",
    img: Abhiroop,

    title: "Secretary",
    description: "Tainted are those who do not attempt",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
  {
    name: "Yashraj Bhardwaj",
    img: Yashraj,

    title: "Secretary",
    description: "Trust God's Plan",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
  {
    name: "Ishaan Gupta",
    img: Ishaan,

    title: "Secretary",
    description: "Professional overthinker",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
];
const cardData8 = [
  {
    name: "Ritobrato Bhaumik",
    img: Rito,

    title: "Secretary",
    description: "God's Perfect Idiot",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
  {
    name: "Rakshit Mathur",
    img: Rakshit,

    title: "Secretary",
    description: "It's everything until it becomes nothing",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
];
const Card = ({ index, card }) => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "50px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".card", { delay: 50 });

    return () => {
      sr.destroy();
    };
  }, []);

  return (
    <div className="card">
      <div className="card-image">
        <img src={card.img} alt={card.name} />
      </div>
      <div className="card-content">
        <h2 className="card-title">{card.name}</h2>
        <h3 className="card-post">{card.title}</h3>
        <p className="card-description">{card.description}</p>
        <div className="card-icons">
          {card.icons.map((icon, index) => (
            <a key={index} href={icon.href} className={icon.icon.iconName}>
              <FontAwesomeIcon icon={icon.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const CardsContainer = ({ cards }) => {
  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};

export default function Team() {
  return (
    <div className="team">
      <h1>The Team</h1>
      <p className="p1">
        Our team consists of talented, experienced, and enthusiastic individuals
        who aim to learn and win in their respective fields. CODE 2K24 wouldn’t
        be possible without any of them.
      </p>

      <CardsContainer cards={cardData1} />
      <CardsContainer cards={cardData2} />
      <CardsContainer cards={cardData3} />
      <CardsContainer cards={cardData4} />
      <CardsContainer cards={cardData5} />
      <CardsContainer cards={cardData6} />
      <CardsContainer cards={cardData7} />
      <CardsContainer cards={cardData8} />
    </div>
  );
}
