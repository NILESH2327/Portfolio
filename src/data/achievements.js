import { BiTrophy, BiCodeAlt, BiStar, BiCalendarEvent } from 'react-icons/bi';

export const achievements = [
  {
    id: "sih-2025",
    title: "Smart India Hackathon 2025",
    subtitle: "National Winner · Rank 1 / 10,000+",
    description: "Ranked 1st among 10,000+ teams nationally for architecting an AI-powered agricultural advisory platform for Kerala farmers.",
    icon: BiTrophy,
    accent: "yellow"
  },
  {
    id: "leetcode-knight",
    title: "LeetCode Knight",
    subtitle: "Rating: 1889 · Top 4.7% Globally",
    description: "Solved 900+ Data Structures & Algorithms problems; achieved a peak contest rating of 1889.",
    icon: BiCodeAlt,
    accent: "purple"
  },
  {
    id: "competitive-programming",
    title: "Competitive Programming",
    subtitle: "Peak 1603 (CodeChef) · 50+ Contests",
    description: "Reached peak rating of 1603 on CodeChef; actively competed in 50+ live contests across LeetCode, CodeChef, and Codeforces.",
    icon: BiStar,
    accent: "blue"
  },
  {
    id: "hackathons-academics",
    title: "Hackathons & Academics",
    subtitle: "IIT Roorkee, Amazon ML, Adobe",
    description: "Finalist at INSOMNIA'26 (IIT Roorkee), Amazon ML School 2025–26, Adobe India Hackathon; qualified JEE Main & Advanced 2023.",
    icon: BiCalendarEvent,
    accent: "teal"
  }
];

export const education = {
  degree: "B.Tech — Information Technology",
  duration: "2023–2027",
  institution: "Bundelkhand Institute of Engineering and Technology, Jhansi",
  performance: "CGPA: 8.46 / 10"
};

export const extraAchievements = [
  "INSOMNIA'26 (IIT Roorkee) — Finalist / Participant",
  "Amazon ML School 2025–26 — Selected Participant",
  "Adobe India Hackathon 2025–26 — Participant",
  "JEE Main & Advanced 2023 — Qualified among 1M+ Candidates"
];
