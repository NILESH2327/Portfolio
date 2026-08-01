import { BiBookBookmark, BiTrophy, BiCodeBlock } from 'react-icons/bi';

export const journey = [
  {
    id: 1,
    type: "education",
    icon: BiBookBookmark,
    title: "Started B.Tech IT",
    subtitle: "Bundelkhand Institute of Engineering and Technology, Jhansi",
    date: "Aug 2023",
    description: "Joined Bundelkhand Institute of Engineering and Technology, Jhansi for Information Technology.",
    tags: ["IT", "DSA", "OOP"]
  },
  {
    id: 2,
    type: "achievement",
    icon: BiTrophy,
    title: "JEE Main & Advanced Qualifier",
    subtitle: "National Level Examination",
    date: "2023",
    description: "Qualified JEE Main & Advanced among 1M+ candidates, demonstrating strong analytical and mathematical skills.",
    tags: ["JEE", "Analytical Reasoning"]
  },
  {
    id: 3,
    type: "project",
    icon: BiCodeBlock,
    title: "Krishi Sakhi Project",
    subtitle: "AI-Powered Farming Assistant",
    date: "Dec 2025",
    description: "Built an AI-powered farming assistant with multilingual voice/SMS support for Kerala farmers — won Smart India Hackathon 2025 among 10,000+ teams.",
    tags: ["React.js", "Node.js", "Gemini API", "ElevenLabs", "Twilio"]
  },
  {
    id: 4,
    type: "achievement",
    icon: BiTrophy,
    title: "Smart India Hackathon 2025 — National Winner",
    subtitle: "Ministry of Education / AICTE",
    date: "Dec 2025",
    description: "Won nationally among 10,000+ teams for an AI-based farming assistant.",
    tags: ["National Winner", "AI", "Teamwork"]
  },
  {
    id: 5,
    type: "project",
    icon: BiCodeBlock,
    title: "AI SaaS Customer Support Chatbot",
    subtitle: "Multi-Tenant AI Platform",
    date: "Feb 2026",
    description: "Engineered a multi-tenant AI chatbot SaaS with embeddable widget, Scalekit auth, and Gemini-powered conversations, deployed on Vercel.",
    tags: ["Next.js", "MongoDB", "Scalekit", "Gemini API"]
  },
  {
    id: 6,
    type: "project",
    icon: BiCodeBlock,
    title: "Medixthon",
    subtitle: "AI-driven Hospital Management System",
    date: "June 2026",
    description: "Developed a full-stack AI-driven hospital management system with 3 role-based portals, 15+ REST APIs, Gemini AI features, and Stripe payments.",
    tags: ["MERN", "Clerk", "Gemini AI", "Stripe", "Cloudinary"]
  }
];
