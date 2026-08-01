import {
  BiCodeAlt,
  BiLayout,
  BiServer,
  BiBot,
  BiBrain,
  BiCloudUpload,
  BiTrophy,
  BiCreditCard,
} from "react-icons/bi";

import { FaDatabase } from "react-icons/fa";

import {
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiTypescript,
  SiMysql,

  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiHtml5,

  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiJsonwebtokens,

  SiGooglegemini,

  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
  SiVercel,

  SiLeetcode,
  SiCodechef,
  SiCodeforces,

  SiStripe,
  SiClerk,
  SiCloudinary,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";
import { LuBrainCircuit } from "react-icons/lu";

export const skills = [
  {
    id: "01",
    category: "Languages",
    icon: BiCodeAlt,

    items: [
      {
        name: "C/C++",
        icon: SiCplusplus,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
      {
        name: "Python",
        icon: SiPython,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "SQL",
        icon: SiMysql,
      },
    ],
  },

  {
    id: "02",
    category: "Frontend",
    icon: BiLayout,

    items: [
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "Redux Toolkit",
        icon: SiRedux,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "HTML/CSS",
        icon: SiHtml5,
      },
    ],
  },

  {
    id: "03",
    category: "Backend",
    icon: BiServer,

    items: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
      },
      {
        name: "Express.js",
        icon: SiExpress,
      },
      {
        name: "Socket.io",
        icon: SiSocketdotio,
      },
      {
        name: "JWT",
        icon: SiJsonwebtokens,
      },
      {
        name: "REST API",
        icon: TbApi,
      },
      {
        name: "CORS",
        icon: TbApi,
      },
    ],
  },

  {
    id: "04",
    category: "AI / Generative AI",
    icon: BiBot,

    items: [
      {
        name: "Gemini API",
        icon: SiGooglegemini,
      },
      {
        name: "LLM Fundamentals",
        icon: LuBrainCircuit,
      },
    ],
  },

  {
    id: "05",
    category: "Databases & Tools",
    icon: FaDatabase,

    items: [
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "Git",
        icon: SiGit,
      },
      {
        name: "GitHub",
        icon: SiGithub,
      },
      {
        name: "Postman",
        icon: SiPostman,
      },
      {
        name: "Docker",
        icon: SiDocker,
      },
      {
        name: "Vercel",
        icon: SiVercel,
      },
    ],
  },

  {
    id: "06",
    category: "Core Concepts",
    icon: BiBrain,

    items: [
      {
        name: "Data Structures",
        icon: LuBrainCircuit,
      },
      {
        name: "Algorithms",
        icon: LuBrainCircuit,
      },
      {
        name: "OOP",
        icon: LuBrainCircuit,
      },
      {
        name: "DBMS",
        icon: LuBrainCircuit,
      },
    ],
  },

  {
    id: "07",
    category: "Cloud & Deployment",
    icon: BiCloudUpload,

    items: [
      {
        name: "Docker",
        icon: SiDocker,
      },
      {
        name: "Vercel",
        icon: SiVercel,
      },
    ],
  },

  {
    id: "08",
    category: "Competitive Programming",
    icon: BiTrophy,

    items: [
      {
        name: "LeetCode",
        icon: SiLeetcode,
      },
      {
        name: "CodeChef",
        icon: SiCodechef,
      },
      {
        name: "Codeforces",
        icon: SiCodeforces,
      },
      {
        name: "782+ Problems",
        icon: BiTrophy,
      },
    ],
  },

  {
    id: "09",
    category: "Payments & Auth",
    icon: BiCreditCard,

    items: [
      {
        name: "Stripe",
        icon: SiStripe,
      },
      {
        name: "Clerk",
        icon: SiClerk,
      },
      {
        name: "Scalekit",
        icon: TbApi,
      },
      {
        name: "Cloudinary",
        icon: SiCloudinary,
      },
    ],
  },
];