import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "work",
    title: "Services",
  },
  {
    id: "history",
    title: "Past Events",
  },
  {
    id: "about",
    title: "Clientele",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "DXB LIVE",
    icon: web,
  },
  {
    title: "DUBAI WORLD TRADE CENTER",
    icon: mobile,
  },
  {
    title: "M4 EVENTS",
    icon: backend,
  },
  {
    title: "MUSIC OF PERSIA",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Omid Djalili",
    company_name: "Namaste Live in Dubai at Rashid Hall, DWTC",
    icon: web,
    iconBg: "#E6DEDD",
    date: "7th January 2024",
    points: [
      "DXB LIVE are delighted to announce the first of its planned pipeline of events, the award-winning British-Iranian actor/comedian, OMID DJALILI performed The NAMASTE show in Dubai on 7th January 2024." ,
      "The British-Iranian Comedy Powerhouse comes back to Dubai to perform his critically acclaimed new show NAMASTE where Omid peacefully bows to his inner anger and unleashes a torrent of comedic vitriol upon the current state of this dangerously messed up planet."
    ],
  },
  {
    title: "Dariush",
    company_name: "An Evening with Dariush Live at the Eventim Apollo London",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "9th October 2022",
    points: [
      "'The Legend' performed mega hits and timeless classics from his highly celebrated career in an evening that the audience is sure to cherish for years to come.",
    ],
  },
  {
    title: "Googoosh",
    company_name: "Infinite Nights Live at Dubai Expo",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "17th March 2022",
    points: [
      "The iconic singer and actress Googoosh, who has stolen hearts and gained massive popularity since the start of her musical journey, dazzled audiences in a first of its kind Infinite Nights show at the Jubilee Stage.",
    ],
  },
  {
    title: "STOMP",
    company_name: "Live in Dubai at the Dubai World Trade Center",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "30th April - 4th May 2014",
    points: [
      "London's hit show, STOMP, is a multi-award winning music and dance production which is coming to Dubai with even fresher, faster and funnier routines.",
      "Stomp is a global phenomenon that has thumped, bumped, scraped and banged for more than a decade in over 40 countries.",
    ],
  },
  {
    title: "Lord of the Dance",
    company_name: "Created by Michael Flately, Dubai World Trade Center Arena",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "27th - 28th March 2014",
    points: [
      "After a ten-year break, Lord of the Dance returned to UAE shores.",
      "The brainchild of Irish twinkle-toed dancing extrordinaire Michael Flatley, the award-winning dance show been seen by an incredible 60 million people in 60 different countries, shattering box offices records over an 11 year run.",
    ],
  },
  {
    title: "Enrique Iglesias",
    company_name: "Live in Dubai at the Dubai World Trade Center",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "26th October 2012",
    points: [
      "M4 Events brings you the largest indoor concert in the Middle East.",
      "Worldwide music sensation and Grammy Award winner Enrique Iglesias performed LIVE in Dubai World Trade Centre.",
      "One night. One performance. One legendary experince."
    ],
  },
  {
    title: "Yanni",
    company_name: "Live in Concert at Burj Park Downtown Dubai",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "28th October 2011",
    points: [
      "For the first time ever Yanni performed live in UAE at the iconic Burj Park, Downtown Dubai, with the spectacular Burj Khalifa and fountains as a backdrop.",
      
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Talent Booking",
    description:
      "Talent booking is more than a service; it's a promise to deliver unparalleled entertainment. Let us handle the talent acquisition, so you can bask in the spotlight of a perfectly curated event. Your vision, our expertise – the stage is set for a performance that transcends expectations.",
    tags: [
    ],
    image: carrent,
    source_code_link: "",
  },
  {
    name: "Event Management",
    description:
      "We collaborate closely to understand your musical preferences, target audience, and overall event objectives. Leveraging our extensive network of industry contacts, we ensure a seamless planning process, allowing you to focus on enjoying the magic of the music.",
    tags: [
    ],
    image: jobit,
    source_code_link: "",
  },
  {
    name: "Operational Logistics",
    description:
      "Operational logistics isn't just a function; it's the backbone of our commitment to delivering flawless events. From transportation to equipment setup, and on-site management, our dedicated professionals navigate the complexities of operational logistics effortlessly.",
    tags: [
    ],
    image: tripguide,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
