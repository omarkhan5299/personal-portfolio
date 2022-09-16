import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Omar",
  lastName: "Khan",
  initials: "M.O.K", // the example uses first and last, but feel free to use three or more if you like.
  position: " a Software Engineer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "Fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "Based in the NY",
    },
    {
      emoji: "💼",
      text: "Grad student at NYU",
    },
    {
      emoji: "📧",
      text: "mok236@nyu.edu",
    },
  ],
  socials: [
    {
      link: "https://www.instagram.com/omaaar_khan/",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/omarkhan5299",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/m-omar-khan/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },

    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Omar. I'm a graduate student at New York University - Courant, majoring in Computer Science. I enjoy hiking up mountains and photography, and I believe artificial intelligence is the next step in the evolution of our civilization!",
  skills: {
    proficientWith: [
      "Python",
      "React",
      "Git",
      "Github",
      "Bootstrap",
      "Golang",
      "Kubernetes",
      "Docker",
    ],
    exposedTo: ["AWS", "Scikit-learn", "Adobe tools"],
  },
  hobbies: [
    {
      label: "Reading",
      emoji: "📖",
    },
    {
      label: "Theater",
      emoji: "🎭",
    },
    {
      label: "Photography",
      emoji: "🎥",
    },
    {
      label: "Cooking",
      emoji: "🌶",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Equinix Internship",
      live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "NicheSolv Internship",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock2,
    },
    {
      title: "G.E. Healthcare Internship",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock3,
    },
    {
      title: "Spokesly Internship",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock4,
    },
    {
      title: "Resume",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock5,
    },
  ],
};
