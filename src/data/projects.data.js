import lightencyMobile from "../assets/images/lightency-mobile-mockup.png";
import lightencyDesktop from "../assets/images/lightency-laptop-mockup.png";
import tuskDesktop from "../assets/images/tusk-laptop-mockup.png";
import answersVillageDesktop from "../assets/images/answers-village-laptop-mockup.png";
import abcDesktop from "../assets/images/abc-laptop-mockup.png";
import annaDesktop from "../assets/images/anna-laptop-mockup.png";
import aessDesktop from "../assets/images/aess-laptop-mockup.png";

import latoFont from "../assets/images/lato-font.png";
import robotoFont from "../assets/images/roboto-font.png";
import openSansFont from "../assets/images/open-sans-font.png";
import jacqueFont from "../assets/images/jacque-font.png";

const data = [
  {
    id: 1,
    isReady: true,
    isOnDisplay: true,
    isMobile: true,
    isDesktop: true,
    title: "Lightency",
    description:
      "I was tasked to give the company website a new look and correct some inconsistencies found in the old one",
    imageMobile: lightencyMobile,
    imageDesktop: lightencyDesktop,
    imageMobileCoords: "47,45,72,4,342,7,368,35,370,610,343,658,88,658,48,621",
    imageDesktopCoords:
      "103,70,115,55,716,54,735,69,733,476,802,479,804,494,771,506,69,503,34,491,31,478,103,479",
    colors: ["#202a43", "#ffde00", "#ffffff", "#000000"],
    tools: ["After Effects", "Illustrator", "React"],
    fonts: [
      {
        name: "Lato",
        image: latoFont,
      },
    ],
    link: "lightency.netlify.com",
  },
  {
    id: 2,
    isReady: true,
    isOnDisplay: false,
    isMobile: true,
    isDesktop: true,
    title: "Tusk",
    description: "A social app",
    imageMobile: null,
    imageDesktop: tuskDesktop,
    imageMobileCoords: "47,45,72,4,342,7,368,35,370,610,343,658,88,658,48,621",
    imageDesktopCoords:
      "103,70,115,55,716,54,735,69,733,476,802,479,804,494,771,506,69,503,34,491,31,478,103,479",
    colors: ["#ffb840", "#212121"],
    tools: ["Express", "Node", "Mongo"],
    fonts: [
      {
        name: "Open Sans",
        image: openSansFont,
      },
    ],
    link: "tusk.world",
  },
  {
    id: 3,
    isReady: true,
    isOnDisplay: false,
    isMobile: true,
    isDesktop: true,
    title: "Answers Village",
    description: "A query app",
    imageMobile: null,
    imageDesktop: answersVillageDesktop,
    imageMobileCoords: "47,45,72,4,342,7,368,35,370,610,343,658,88,658,48,621",
    imageDesktopCoords:
      "103,70,115,55,716,54,735,69,733,476,802,479,804,494,771,506,69,503,34,491,31,478,103,479",
    colors: ["#ffffff", "#000000"],
    tools: ["React", "Hooks"],
    fonts: [
      {
        name: "Roboto",
        image: robotoFont,
      },
    ],
    link: "answersvillage.com",
  },
  {
    id: 4,
    isReady: true,
    isOnDisplay: false,
    isMobile: true,
    isDesktop: true,
    title: "ABC Shop",
    description: "E-commerce app",
    imageMobile: null,
    imageDesktop: abcDesktop,
    imageMobileCoords: "47,45,72,4,342,7,368,35,370,610,343,658,88,658,48,621",
    imageDesktopCoords:
      "103,70,115,55,716,54,735,69,733,476,802,479,804,494,771,506,69,503,34,491,31,478,103,479",
    colors: ["#cd5e77", "#000000"],
    tools: ["React"],
    fonts: [
      {
        name: "Jacque Francois",
        image: jacqueFont,
      },
    ],
    link: "https://stupefied-lichterman-cd4eea.netlify.com/",
  },
  {
    id: 5,
    isReady: true,
    isOnDisplay: false,
    isMobile: true,
    isDesktop: true,
    title: "Portfolio",
    description: "Portfolio app",
    imageMobile: null,
    imageDesktop: annaDesktop,
    imageMobileCoords: "47,45,72,4,342,7,368,35,370,610,343,658,88,658,48,621",
    imageDesktopCoords:
      "103,70,115,55,716,54,735,69,733,476,802,479,804,494,771,506,69,503,34,491,31,478,103,479",
    colors: ["#70a743", "#000000", "#a84d5c"],
    tools: ["React", "Illustrator"],
    fonts: [
      {
        name: "Jacque Francois",
        image: jacqueFont,
      },
    ],
    link: "annabotnaru.herokuapp.com",
  },
  {
    id: 6,
    isReady: true,
    isOnDisplay: false,
    isMobile: false,
    isDesktop: true,
    title: "Portfolio",
    description: "School Project",
    imageMobile: null,
    imageDesktop: aessDesktop,
    imageMobileCoords: "47,45,72,4,342,7,368,35,370,610,343,658,88,658,48,621",
    imageDesktopCoords:
      "103,70,115,55,716,54,735,69,733,476,802,479,804,494,771,506,69,503,34,491,31,478,103,479",
    colors: ["#a42731", "#000000", "#ffffff"],
    tools: ["PHP", "Javascript"],
    fonts: [
      {
        name: "Lato",
        image: latoFont,
      },
    ],
    link: "N/A",
  },
];

export default data;
