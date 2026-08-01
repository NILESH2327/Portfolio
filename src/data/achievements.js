import { BiTrophy, BiCodeAlt, BiStar, BiCalendarEvent } from 'react-icons/bi';

export const achievements = [
  {
    id: "sih-2025",
    title: "Smart India Hackathon 2025",
    subtitle: "National Winner",
    description: "Won nationally among 10,000+ teams for an AI-based farming assistant for Kerala farmers.",
    icon: BiTrophy,
    accent: "yellow"
  },
  {
    id: "leetcode-knight",
    title: "LeetCode Knight",
    subtitle: "Rating 1833 (Max 1880)",
    description: "782+ problems solved, top 5.5% globally. Active contest participant.",
    icon: BiCodeAlt,
    accent: "purple"
  },
  {
    id: "codechef",
    title: "CodeChef",
    subtitle: "Max Rating 1596",
    description: "Strong algorithmic thinking and consistent contest performances.",
    icon: BiStar,
    accent: "blue"
  },
  {
    id: "cp-contests",
    title: "Competitive Programming",
    subtitle: "47+ Contests",
    description: "Participated across weekly/bi-weekly LeetCode, CodeChef, and Codeforces contests.",
    icon: BiCalendarEvent,
    accent: "teal"
  }
];

export const education = {
  degree: "B.Tech — Information Technology",
  duration: "2023–2027",
  institution: "Bundelkhand Institute of Engineering and Technology, Jhansi",
  performance: "CGPA: 8.46/10"
};

export const extraAchievements = [
  "Selected participant at INSOMNIA'26 (IIT Roorkee)",
  "Amazon ML School Participant (2025–26)",
  "Adobe India Hackathon Participant"
];
