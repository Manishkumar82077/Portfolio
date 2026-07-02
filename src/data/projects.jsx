import { FaReact, FaNodeJs, FaExchangeAlt, FaSync } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiFirebase,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiGooglemaps,
} from "react-icons/si";
import React from "react";

export const projects = [
  {
    id: 1,
    active: true,
    link: "https://github.com/Manishkumar82077/Personal-Health-Tracker",
    images: [
      "/health-1.jpeg",
      "/health-2.jpeg",
      "/health-3.jpeg",
      "/health-4.jpeg",
    ],
    heading: "Personal Health Tracker",
    discr:
      "A **full-stack health & wellness platform** — log nutrition, water, workouts, steps, and sleep against **personalized daily goals**, and see it all roll up into one clean **analytics dashboard**.",
    tags: [
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { name: "Nextjs", icon: <RiNextjsLine color="#FFFFFF" /> },
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
      { name: "Express", icon: <SiExpress color="#FFFFFF" /> },
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
      { name: "Firestore", icon: <SiFirebase color="#FFA000" /> },
      { name: "SWR", icon: <FaSync color="#FF6B00" /> },
      { name: "REST API", icon: <FaExchangeAlt color="#F97316" /> },
      { name: "Tailwind", icon: <RiTailwindCssFill color="#06B6D4" /> },
    ],
    details: [
      "Built a full-stack **health-tracking platform** with a **Next.js/React** frontend and a modular **Express.js REST API**, enabling users to log nutrition, water, workouts, steps, and sleep against **personalized daily goals**.",
      "Secured all API routes using **Firebase Authentication** with server-side **ID token verification** middleware, and modeled per-user data in **Cloud Firestore** for real-time persistence.",
      "Created an aggregated **analytics dashboard** that computes daily totals, remaining targets, and goal-progress metrics across all trackers, fetched efficiently with **SWR** and styled using reusable **Tailwind CSS** components.",
    ],
  },
  {
    id: 2,
    active: false,
    link: "https://github.com/Manishkumar82077/Community-Helper",
    images: ["/project2.png"],
    heading: "Community Helper",
    discr:
      "A **mobile-first community support platform** connecting volunteers with people who need urgent assistance — with **geolocation-based matching**, **real-time tracking**, and full request-lifecycle management.",
    tags: [
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
      { name: "Tailwind", icon: <RiTailwindCssFill color="#06B6D4" /> },
      { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
      { name: "Express", icon: <SiExpress color="#FFFFFF" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "Google Maps API", icon: <SiGooglemaps color="#4285F4" /> },
      { name: "REST API", icon: <FaExchangeAlt color="#F97316" /> },
    ],
    details: [
      "Led development of a **mobile-first community support platform** with a **React.js** and **Tailwind CSS** frontend, connecting volunteers with individuals requesting urgent assistance and handling the full request lifecycle through **RESTful APIs**.",
      "Implemented **geolocation-based volunteer matching** using **Google Maps API** and **MongoDB geospatial queries**, with real-time tracking and distance-based filtering to reduce average response time by **30%**.",
      "Modeled **MongoDB schemas** for users, volunteers, and assistance requests with **indexed collections** and **geospatial 2dsphere indexes**, optimizing CRUD operations and query performance for high-concurrency request processing.",
    ],
  },

  {
    id: 3,
    active: true,
    link: "https://github.com/Manishkumar82077/Moodly",
    images: ["/product1.png","/moodly3.png"],
    heading: "Moodly",
    discr:
      "A modern **mood-tracking web app** that lets users log their emotions, analyze **emotional trends** over time, and gain deeper self-awareness through **visual insights**.",
    tags: [
      { name: "Nextjs", icon: <RiNextjsLine color="#FFFFFF" /> },
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
      { name: "Tailwind", icon: <RiTailwindCssFill color="#06B6D4" /> },
      { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
    ],
    details: [
      "Built a **mood-tracking web application** with a **Next.js** frontend and **Firebase** backend, letting users log daily emotions and persist them in real time.",
      "Designed an **analytics view** that visualizes **emotional trends** over time with interactive charts, helping users build self-awareness.",
      "Implemented **Firebase Authentication** for secure sign-in and per-user data isolation, styled end to end with reusable **Tailwind CSS** components.",
    ],
  },

  // Placeholders for future projects
];

export const getProjectById = (id) =>
  projects.find((project) => String(project.id) === String(id));
