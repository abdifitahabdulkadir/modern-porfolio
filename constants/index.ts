import { ROUTES } from "./Routes";

export const navLinks = [
  {
    _id: 1,
    title: "About",
    moveTo: ROUTES.ABOUT,
  },
  {
    _id: 2,
    title: "Work",
    moveTo: ROUTES.WORK,
  },
  {
    _id: 3,
    title: "Testimonials",
    moveTo: ROUTES.TESTIMONIALS,
  },
  {
    _id: 4,
    title: "Contact",
    moveTo: ROUTES.CONTACT,
  },
];

export const skillsList: SkillsType[] = [
  {
    id: 1,
    imageUrl: "/skills/js.svg",
    title: "Javascript",
  },
  {
    id: 2,
    imageUrl: "/skills/typescritp.svg",
    title: "TypeScript",
  },
  {
    id: 3,
    imageUrl: "/skills/react.svg",
    title: "React.js",
  },
  {
    id: 4,
    imageUrl: "/skills/nexjs.svg",
    title: "Nextjs",
  },
  {
    id: 5,
    imageUrl: "/skills/nodejs.svg",
    title: "Node js",
  },
  {
    id: 6,
    imageUrl: "/skills/express.svg",
    title: "Express",
  },
  {
    id: 7,
    imageUrl: "/skills/nest.svg",
    title: "Nest.js",
  },
  {
    id: 8,
    imageUrl: "/skills/socket.svg",
    title: "Socket.io",
  },
  {
    id: 9,
    imageUrl: "/skills/postrgres.svg",
    title: "PostgreSQL",
  },
  {
    id: 10,
    imageUrl: "/skills/mongo.svg",
    title: "Mongodb",
  },
  {
    id: 11,
    imageUrl: "/skills/sass.svg",
    title: "Sass/Scss",
  },
  {
    id: 13,
    imageUrl: "/skills/figmacolored.svg",
    title: "Figma",
  },
  {
    id: 14,
    imageUrl: "/skills/crpes.svg",
    title: "Cypress",
  },
  {
    id: 15,
    imageUrl: "/skills/stroybook.svg",
    title: "Storybook",
  },
  {
    id: 16,
    imageUrl: "/skills/git.svg",
    title: "Git",
  },
];

export const experiences: ExperiencesType[] = [
  {
    id: 1,
    platformLogo: "/icons/upwork.svg",
    role: "Sr. Frontend Developer",
    tasks: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    from: "Nov 2021",
    to: "Present",
  },
  {
    id: 2,
    platformLogo: "/icons/upwork.svg",
    role: "Team Lead",
    tasks: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    from: "Jul 2017",
    to: "Oct 2021",
  },
  {
    id: 3,
    platformLogo: "/icons/upwork.svg",
    role: "Full Stack Developer",
    tasks: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.",
    ],
    from: "Dec 2015",
    to: "May 2017",
  },
];

export const worsk: WorkType[] = [
  {
    id: 1,
    name: "Fiskil",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    techStacks: [
      "React",
      "Nextjs",
      "Typescript",
      "Git",
      "Tailwingcss",
      "Figma",
      "Cypress",
      "Nestjs",
      "StoryBook",
      "PostgreSQL",
    ],
    projectImage: "/projects/fiskil.svg",
  },
];
