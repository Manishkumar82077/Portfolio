import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaSitemap,
  FaUserShield,
  FaKey,
  FaBrain,
  FaGitAlt,
  FaCreditCard,
  FaEnvelope,
  FaDatabase,
} from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiFirebase,
  SiReactquery,
  SiAlgolia,
  SiPostman,
} from "react-icons/si";

export const experiences = [
  {
    id: "tab1",
    heading: "Software Engineer",
    company: "GFX Technologies",
    location: "Bengaluru, India",
    para: "Core engineer building a **multi-tenant eCommerce platform** — architecting **scalable microservices**, **RBAC-secured APIs**, and an **LLM-powered AI orchestration** layer with **Next.js, React, Node.js, TypeScript, PostgreSQL, and Firebase**.",
    date: "May, 2025 – Present",
    logoUrl:
      "https://www.image2url.com/r2/default/images/1782941970457-41e04e02-d1c3-4bc1-97d1-69bd673f6ca1.jpg",
    active: true,
    redirectRoute: "/experience/tab1",
    tags: [
      { name: "Next.js", icon: <RiNextjsLine color="#FFFFFF" /> },
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
      { name: "Express", icon: <SiExpress color="#FFFFFF" /> },
      { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
      { name: "React Query", icon: <SiReactquery color="#FF4154" /> },
      { name: "Microservices", icon: <FaSitemap color="#F97316" /> },
      { name: "RBAC", icon: <FaUserShield color="#F59E0B" /> },
      { name: "JWT", icon: <FaKey color="#EC4899" /> },
      { name: "Algolia", icon: <SiAlgolia color="#003DFF" /> },
      { name: "AWS", icon: <FaAws color="#FF9900" /> },
      { name: "RAG / LLM", icon: <FaBrain color="#10A37F" /> },
      { name: "Git", icon: <FaGitAlt color="#F05032" /> },
      { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
      { name: "PayU", icon: <FaCreditCard color="#10B981" /> },
      { name: "SendGrid", icon: <FaEnvelope color="#1A82E2" /> },
      { name: "LLM APIs", icon: <FaBrain color="#10A37F" /> },
      { name: "VectorDB", icon: <FaDatabase color="#10B981" /> },
    ],
    contributions: [
      "Architected and launched a **multi-tenant eCommerce platform** (E-commerce, Seller, Admin & AI Dashboards) as a **core engineer** in a **3-person team** using **Next.js, React, Node.js (Express), TypeScript, PostgreSQL, and Firebase** on a **microservices architecture**, supporting **5,000+ live SKUs** and **10+ concurrent sellers** in production.",
      "Designed and enforced **authentication and authorization based on RBAC** with strict isolation between sellers, administrators, and internal services, ensuring **secure access control** and **zero tenant data leakage** at scale.",
      "Optimized frontend performance and reduced API latency through **React Query server-state caching**, streamlined REST endpoints, memoization, and **CDN-backed delivery**, improving UI responsiveness across **3 dashboards**.",
      "Developed **10+ core commerce modules**: Orders, Payouts, Transactions, Products, Collections, Categories, Notifications, Settings, Credit/Debit Notes, and Shopify Import, contributing **150+ REST APIs** across **100+ backend functions**, enabling high-volume onboarding and streamlined seller operations.",
      "Integrated core third-party services across the platform: **Algolia** for real-time catalog search, **SendGrid** and **AWS SES** for transactional email delivery, and **PayU** for automated payment processing and reconciliation.",
      "Engineered backend services on a **microservices architecture** with **event-driven orchestration**, decoupling core commerce domains to enable independent scaling, fault isolation, and reliable asynchronous communication between services.",
      "Automated product-content quality control through an **LLM-powered AI workflow** that validates, reviews, rewrites, and standardizes listings, reducing duplicate and low-quality entries and improving **catalog quality** at scale.",
      "Built an internal **AI orchestration platform** for **RAG pipelines**, AI engine monitoring, execution tracing, workflow debugging, data and memory monitoring, LLM validation, and real-time pipeline visualization.",
      "Streamlined cross-tenant onboarding through **multi-tenant catalog sharing** and **Shopify import** for products, collections, and variants, plus a **sheet-based bulk import system**, reducing manual upload effort by **60%**.",
    ],
  },
];

export const getExperienceById = (id) =>
  experiences.find((exp) => exp.id === id);
