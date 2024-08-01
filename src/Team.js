import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import html from "./images/web-dev.png";
import keynote from "./images/keynote.png";

import "./App.css";
import "./Team.css";

const cardData1 = [
  {
    name: `Moloy Sikka`,
    title: "President",
    description: "This is a small description.",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
  {
    name: "Vipul Mittal",
    title: "Robotics President",
    description: "This is a small description.",
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
    title: "Vice President",
    description: "This is a small description.",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
  {
    name: "Manan Kasana",
    title: "Vice President",
    description: "This is a small description.",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
  {
    name: "Surat Sahni",
    title: "Robotics Vice President",
    description: "This is a small description.",
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
    name: "Shambhavi",
    title: "Director",
    description: "This is a small description.",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
  {
    name: "Ritik Singh",
    title: "Director",
    description: "This is a small description.",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
  {
    name: "Siddhant Mishra",
    title: "Director",
    description: "This is a small description.",
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
    name: "Atharva Gupta",
    title: "Director",
    description: "This is a small description.",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
  {
    name: "Saksham",
    title: "Director",
    description: "This is a small description.",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
  {
    name: "Saharsh Bhardwaj",
    title: "Director",
    description: "This is a small description.",
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
    name: "Ariet Jha",
    title: "Director",
    description: "This is a small description.",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
  {
    name: "Maulik Jain",
    title: "Director",
    description: "This is a small description.",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
  {
    name: "Antahakaran",
    title: "Director",
    description: "This is a small description.",
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
    name: "Nairit",
    title: "Director",
    description: "This is a small description.",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
  {
    name: "Siya Batra",
    title: "Secretary",
    description: "This is a small description.",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
  {
    name: "Abhiroop Kapoor",
    title: "Secretary",
    description: "This is a small description.",
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
    name: "Yashraj Bhardwaj",
    title: "Director",
    description: "This is a small description.",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
  {
    name: "Ishaan Gupta",
    title: "Director",
    description: "This is a small description.",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
  {
    name: "Ritobrato Bhaumik",
    title: "Director",
    description: "This is a small description.",
    icons: [
      { icon: faInstagram, href: "#" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      { icon: faSpotify, href: "#" },
    ],
  },
];
const Card = ({ name, title, description, icons }) => {
  return (
    <div className="card">
      <div className="card-image"></div>
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <h3 className="card-post">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-icons">
          {icons.map((icon, index) => (
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
        <Card
          key={index}
          name={card.name}
          title={card.title}
          description={card.description}
          icons={card.icons}
        />
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

      <img src={html} className="img1" alt="Python" />
      <img src={keynote} className="img2" alt="Camera" />
    </div>
  );
}
