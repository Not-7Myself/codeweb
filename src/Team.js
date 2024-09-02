import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faSpotify,
  faSquareBehance,
  faLinkedin,
  faSquareXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./Team.css";

import Moloy from "./Pics/Moloy.jpg";
import Atharva from "./Pics/Atharva.jpg";
import Nairit from "./Pics/Nairit.jpg";
import Saksham from "./Pics/Saksham.jpg";
import Siya from "./Pics/Siya.jpg";
import Vipul from "./Pics/Vipul.jpg";
import Kanta from "./Pics/Antahkaran.jpg";
import Ariet from "./Pics/Ariet.jpg";
import Shambhavi from "./Pics/Shambhavi.jpg";
import Shivesh from "./Pics/Shivesh.jpg";
import Abhiroop from "./Pics/Abhiroop.jpg";
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
      { icon: faInstagram, href: "https://www.instagram.com/yolomsikka/" },
      { icon: faGithub, href: "https://github.com/MoloySikka" },
      {
        icon: faSpotify,
        href: "https://open.spotify.com/user/x7zaoulqe88cd6hv3siq5aiil?si=AU4KFzOCRNqkjfPZ5soM6A",
      },
    ],
  },
  {
    name: "Vipul Mittal",
    img: Vipul,
    title: "Robotics President",
    description: "Veni. Vidi. Vici.",
    icons: [
      { icon: faInstagram, href: "https://www.instagram.com/vip.mittal.803/" },
      {
        icon: faLinkedin,
        href: "https://www.linkedin.com/in/vipul-mittal-073a75289/",
      },
      { icon: faGithub, href: "https://github.com/aouxwoux" },
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
      { icon: faInstagram, href: "https://www.instagram.com/amaan_elahi07/" },
      { icon: faGithub, href: "https://github.com/Amaan-elahi" },
    ],
  },
  {
    name: "Manan Kasana",
    img: Manan,

    title: "Vice President",
    description: "stop me if you can",
    icons: [
      { icon: faInstagram, href: "https://www.instagram.com/manan.kasana/" },
      {
        icon: faLinkedin,
        href: "https://www.linkedin.com/in/manan-kasana-a38334277/",
      },
      { icon: faSquareXTwitter, href: "https://x.com/Manan_Kasana" },
    ],
  },
  {
    name: "Surat Sahni",
    img: Surat,
    title: "Robotics Vice President",
    description: "be kind, be courageous 🍀 -my dad(and cinderella)",
    icons: [
      { icon: faGithub, href: "https://github.com/Philia-S" },
      {
        icon: faSpotify,
        href: "https://open.spotify.com/user/lz00zw64tgurn0n1kazswd0jo?si=20974ae56dc3484b",
      },
    ],
  },
];
const cardData3 = [
  {
    name: "Atharva Srivastava",
    img: Shivesh,

    title: "Director",
    description: "print('Hello World!')",
    icons: [
      {
        icon: faInstagram,
        href: "https://www.instagram.com/shiveshh_?igsh=MWU0OGdrbWN5eWk2dQ==",
      },
    ],
  },
  {
    name: "Saksham",
    img: Saksham,

    title: "Director",
    description: "The godfather>>",
    icons: [
      {
        icon: faInstagram,
        href: "https://www.instagram.com/sakshampokhriyal_/",
      },
    ],
  },
  {
    name: "Shambhavi",
    img: Shambhavi,

    title: "Director",
    description: "Messy bun and getting things done:)",
    icons: [
      { icon: faInstagram, href: "https://www.instagram.com/_shxmbhaviiii07" },
    ],
  },
  {
    name: "Ritik Singh",
    img: Ritik,

    title: "Director",
    description: "Learn to rest, not to quit.",
    icons: [],
  },
  {
    name: "Siddhant Mishra",
    img: sid,

    title: "Director",
    description: "print('Hello World!')",
    icons: [],
  },
  {
    name: "Atharva Gupta",
    img: Atharva,

    title: "Director",
    description: "Victoria Concordia Crescit",
    icons: [
      { icon: faInstagram, href: "https://www.instagram.com/gwultatharva/" },
      { icon: faGithub, href: "https://github.com/GWUltAtharva" },
      {
        icon: faLinkedin,
        href: "http://www.linkedin.com/in/atharva-gupta-2a32b8284",
      },
    ],
  },
  {
    name: "Saharsh Bhardwaj",
    img: Saharsh,

    title: "Director",
    description: "You are never alone, god is always with you.",
    icons: [
      {
        icon: faInstagram,
        href: "https://www.instagram.com/saharsh.bharadwaj001",
      },
    ],
  },
  {
    name: "Ariet Jha",
    img: Ariet,

    title: "Director",
    description: "ब्रह्म सत्यं जगत मिथ्या जीवो ब्रह्मैव नापरः ",
    icons: [
      { icon: faInstagram, href: "https://www.instagram.com/proplayz77/" },
      {
        icon: faLinkedin,
        href: "https://www.linkedin.com/in/ariet-jha-9b22a6272/",
      },
      { icon: faGithub, href: "https://github.com/ProPlayz77" },
      {
        icon: faYoutube,
        href: "https://www.youtube.com/@proplayzmcxtreme8641",
      },
    ],
  },
  {
    name: "Maulik Jain",
    img: Maulik,

    title: "Director",
    description: "Preoccupied with a single leaf... you won't see the tree. ",
    icons: [
      { icon: faInstagram, href: "https://www.instagram.com/maulik._.jain22/" },
      {
        icon: faLinkedin,
        href: "https://www.linkedin.com/in/maulik-jain-0961222a3?trk=contact-info",
      },
    ],
  },
  {
    name: "Antahakaran",
    img: Kanta,

    title: "Director",
    description: "Show Me Your MOTIVATION!!",
    icons: [
      { icon: faInstagram, href: "https://www.instagram.com/godzilarampag/" },
      {
        icon: faLinkedin,
        href: "https://www.linkedin.com/in/antahakaran-sadhukhan-164002320/",
      },
      { icon: faSquareXTwitter, href: "https://x.com/GodzilaRampag" },
      { icon: faYoutube, href: "https://www.youtube.com/@GodzilaRampag" },
    ],
  },
  {
    name: "Nairit",
    img: Nairit,

    title: "Director",
    description: "Mujhe Bread pasand hai :D",
    icons: [
      {
        icon: faInstagram,
        href: "https://www.instagram.com/nairit.artz",
      },
      {
        icon: faSquareBehance,
        href: "https://www.behance.net/nairitchoudhury",
      },
    ],
  },
  {
    name: "Rakshit Mathur",
    img: Rakshit,

    title: "Secretary",
    description: "It's everything until it becomes nothing",
    icons: [
      { icon: faInstagram, href: "https://www.instagram.com/_rakshit_19/" },
      { icon: faGithub, href: "https://github.com/Rakshit-Mathur" },
      {
        icon: faSpotify,
        href: "https://open.spotify.com/playlist/0ozdSESSPtTKI1uvNdaxtR?si=16104ec77fd448b3",
      },
    ],
  },
  {
    name: "Yashraj Bhardwaj",
    img: Yashraj,

    title: "Secretary",
    description: "Trust God's Plan",
    icons: [
      { icon: faInstagram, href: "https://www.instagram.com/yash_raj.20/" },
    ],
  },
  {
    name: "Ishaan Gupta",
    img: Ishaan,

    title: "Secretary",
    description: "Professional overthinker",
    icons: [
      { icon: faInstagram, href: "https://www.instagram.com/ishaan_1610/" },
      {
        icon: faLinkedin,
        href: "http://www.linkedin.com/in/ishaan-gupta-9255562a8",
      },
      { icon: faGithub, href: "https://github.com/ishaangupta240" },
      { icon: faSquareXTwitter, href: "https://x.com/Ishaan_1610" },
    ],
  },
  {
    name: "Abhiroop Kapoor",
    img: Abhiroop,

    title: "Secretary",
    description: "Tainted are those who do not attempt",
    icons: [
      { icon: faInstagram, href: "https://www.instagram.com/abrp_abhiroop/" },
    ],
  },
  {
    name: "Siya Batra",
    img: Siya,

    title: "Secretary",
    description: "H&M shoplifter",
    icons: [
      { icon: faLinkedin, href: "http://www.linkedin.com/in/batra-siya" },
      { icon: faEnvelope, href: "#" },
      { icon: faGithub, href: "#" },
      {
        icon: faSpotify,
        href: "https://open.spotify.com/user/oofkkwmh2l8tin9t51ynnznw2",
      },
    ],
  },

  {
    name: "Ritobrato Bhaumik",
    img: Rito,

    title: "Secretary",
    description: "God's Perfect Idiot",
    icons: [{ icon: faSpotify, href: "https://bit.ly/ritospot" }],
  },
  {
    name: "S. Govinda Krishna",
    img: Rito,

    title: "Secretary",
    icons: [{ icon: faSpotify, href: "https://bit.ly/ritospot" }],
  },
];

const Card = ({ index, card }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={card.img} alt={card.name} />
      </div>
      <div className="card-content">
        <h2 className="card-title">{card.name}</h2>
        <h3 className="card-post">{card.title}</h3>
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
    </div>
  );
}
