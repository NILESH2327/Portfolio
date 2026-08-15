import medixthonImg from '../../src/assets/Medixthon.png';
import aiSaasChatbotImg from '../../src/assets/support.png';
import krishiSakhiImg from '../../src/assets/krishi.png';
import talkieImg from '../../src/assets/login.png';


export const projects = [
  {
    id: "medixthon",
    title: "Medixthon",
    subtitle: "Hospital Management System",
    date: "June 2026",
    featured: true,
    tag: "FEATURED",
    image: medixthonImg,
    problem: "Manual, paper-based hospital workflows across departments",
    impact: "3 role-based portals, 15+ API endpoints",
    description: "A full-stack AI-driven hospital management system spanning 3 role-based portals with secure Clerk authentication.",
    checklist: [
      "3 role-based portals (Admin, Doctor, Patient)",
      "15+ REST API endpoints, 4 optimized MongoDB schemas",
      "3 Gemini AI features: Symptom Analyzer, Medicine Scanner, Lab Report Analyzer",
      "Stripe payments + Cloudinary document storage"
    ],
    stack: [
      "React", "Node.js", "Express.js", "MongoDB", "Clerk", "Gemini AI", "Stripe", "Cloudinary", "Tailwind CSS"
    ],
    links: {
      github: "https://github.com/NILESH2327/Medixthon",
      live: ""
    }
  },
  {
    id: "ai-saas-chatbot",
    title: "AI SaaS Customer Support Chatbot",
    subtitle: "Multi-Tenant Chatbot Platform",
    date: "Feb 2026",
    featured: true,
    tag: "FEATURED",
    image: aiSaasChatbotImg,
    problem: "Businesses lacked an easy, embeddable AI support widget",
    impact: "Deployed across multiple client sites",
    description: "A multi-tenant AI chatbot SaaS with an embeddable JavaScript widget for automated customer support across client websites.",
    checklist: [
      "Embeddable JS widget for any website",
      "Scalekit authentication & org management",
      "Gemini-powered conversation handling",
      "Deployed on Vercel with near-instant latency"
    ],
    stack: [
      "Next.js", "MongoDB", "Scalekit", "Gemini API", "Vercel"
    ],
    links: {
      github: "https://github.com/NILESH2327/Ai-Customer-support", 
      live: "https://ai-customer-support-eta.vercel.app/" 
    }
  },
  {
    id: "krishi-sakhi",
    title: "Krishi Sakhi",
    subtitle: "AI-Powered Farming Assistant",
    date: "Dec 2025",
    featured: false,
    tag: "NATIONAL WINNER",
    image: krishiSakhiImg,
    problem: "Farmers lacked access to personalized crop guidance",
    impact: "National Winner among 10,000+ teams",
    description: "An AI-powered farming assistant delivering personalized crop recommendations using farmer profiles, crop data, and weather insights — winner among 10,000+ teams at Smart India Hackathon 2025.",
    checklist: [
      "Multilingual voice + text interface",
      "ElevenLabs voice synthesis integration",
      "Twilio SMS alerts for accessibility",
      "Personalized AI crop recommendations"
    ],
    stack: [
      "React.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "ElevenLabs", "Twilio"
    ],
    links: {
      github: "https://github.com/NILESH2327/Diployfor74/tree/main",
      live: "https://hilarious-haupia-22b309.netlify.app/" 
    }
  },
  {
    id: "talkie",
    title: "Talkie",
    subtitle: "Real-Time MERN Chat Application",
    date: "2026",
    featured: false,
    tag: null,
    image: talkieImg,
    problem: "Needed a fast, real-time way for users to chat instantly",
    impact: "Instant messaging with live presence",
    description: "A real-time chat application built on the MERN stack with Socket.IO, letting users message instantly, share images, update their profile, and see who's online.",
    checklist: [
      "Real-time messaging with Socket.IO + JWT authentication",
      "Live online/offline presence indicators",
      "Image sharing via Multer + Cloudinary uploads",
      "Profile updates, avatar upload, and message deletion"
    ],
    stack: [
      "React.js", "Vite", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT"
    ],
    links: {
      github: "https://github.com/NILESH2327/Talkie",
      live: "https://talkie-two-amber.vercel.app" 
    }
  }
];
