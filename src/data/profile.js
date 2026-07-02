import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

// Personal / profile info used by the Sidebar and Intro sections.
export const profile = {
  name: "Manish Kumar",
  role: "Software Engineer",
  avatar: "/public/profile.jpeg",
  availabilityLabel: "Available for Work",
  bio: "who builds **multi-tenant platforms**, **scalable microservices**, and **AI-powered systems**.",
  email: "manishkumar7543811190@gmail.com",
  phone: "+91 8207755328",
  location: "Bengaluru, India",
  cvUrl: "/Manish_kumar_MERN_STACK.pdf",
  cvLabel: "Download CV",
  cardIntro:
    "**Software Engineer** specializing in **full-stack development**, building scalable products end to end.",
  introParagraph:
    "Software Engineer specializing in **full-stack development**. I build multi-tenant platforms, scalable microservices, and **AI-powered systems** with React, Next.js, Node.js, and TypeScript.",
  education: {
    degree: "B.E. in Computer Science and Engineering",
    school: "Chandigarh University",
    location: "Mohali, Punjab",
    duration: "Aug 2021 – May 2025",
  },
};

export const socialLinks = [
  {
    Icon: FaGithub,
    href: "https://github.com/Manishkumar82077",
    hoverColor: "#e6edf3",
  },
  {
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/manishkumar82077/",
    hoverColor: "#0A66C2",
  },
  {
    Icon: SiLeetcode,
    href: "https://leetcode.com/u/manishdev404/",
    hoverColor: "#FFA116",
  },
  {
    Icon: SiCodeforces,
    href: "https://codeforces.com/profile/manishdev_404",
    hoverColor: "#1F8ACB",
  },
];

export const stats = [
  { count: "1+", label: "YEARS OF EXPERIENCE" },
  { count: "400+", label: "DSA PROBLEMS SOLVED" },
  { count: "1627", label: "PEAK LEETCODE RATING" },
];
