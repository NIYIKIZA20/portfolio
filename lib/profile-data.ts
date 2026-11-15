import type { LucideIcon } from "lucide-react";
import { Cpu, Layers, Code2, Sparkles } from "lucide-react";

export const CV_URL =
  "https://drive.google.com/file/d/1GZtxOuLvBuxRHpYOXSKltdxlfHur-6tF/view?usp=drive_link";

export const WHATSAPP_URL =
  "https://wa.me/250789092847?text=" +
  encodeURIComponent("Hello Jean Baptiste, I came across your portfolio and would like to connect.");

// web3forms key: messages and appointment requests are delivered to my inbox
export const WEB3FORMS_KEY = "bc0d3da8-b2bd-4dc7-bc6d-7f6efba144b7";

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  highlight: string;
  logo: string;
  // ISO country code, matches /public/flags/{code}.svg
  country: "sg" | "rw";
}

export const education: Education[] = [
  {
    degree: "MSc, Smart Manufacturing",
    school: "Nanyang Technological University",
    location: "Singapore",
    period: "2026 – 2027",
    highlight: "Industry 4.0 · Additive Manufacturing",
    logo: "/education/ntu.png",
    country: "sg",
  },
  {
    degree: "BEng, Electronics & Telecommunication",
    school: "University of Rwanda",
    location: "Kigali, Rwanda",
    period: "2021 – 2025",
    highlight: "GPA 3.5 / 4.0",
    logo: "/education/ur.jpg",
    country: "rw",
  },
  {
    degree: "Mathematics, Physics & Chemistry",
    school: "Petit Séminaire St. Vincent de Paul",
    location: "Ndera, Rwanda",
    period: "2013 – 2019",
    highlight: "Perfect score: 73 / 73",
    logo: "/education/pssv.png",
    country: "rw",
  },
];

export const highlights = [
  { value: "3", label: "Hardware products built" },
  { value: "6", label: "Professional roles" },
  { value: "IEEE", label: "MTT-S Presentation Award 2025" },
  { value: "MDPI", label: "Peer-reviewed author" },
];

export const workedWith = [
  "Beno Holdings",
  "ReadyToBloom Inc. · Japan",
  "Unipod & FabLab · University of Rwanda",
  "Alight Rwanda",
  "Kagoma Tech",
];

export type SkillLevel = "Advanced" | "Proficient" | "Familiar";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  url?: string;
}

export interface SkillArea {
  id: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  // Replace with a real photo in /public/skills/ (e.g. "/skills/embedded.jpg")
  image: string;
  skills: Skill[];
  projects: Project[];
}

export const skillAreas: SkillArea[] = [
  {
    id: "embedded",
    title: "Embedded Systems & IoT",
    tagline: "Devices that sense, think and connect.",
    icon: Cpu,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    image: "/skills/embedded.jpg",
    skills: [
      { name: "Microcontroller firmware", level: "Advanced" },
      { name: "Sensors & real-time data acquisition", level: "Advanced" },
      { name: "IoT & cloud integration", level: "Advanced" },
      { name: "PCB design (Altium, EasyEDA)", level: "Proficient" },
      { name: "PCB printing & assembly", level: "Proficient" },
    ],
    projects: [
      {
        title: "Smart Cane (E-nkoni)",
        description: "IoT navigation aid for the visually impaired.",
        image: "/placeholder.svg",
        tags: ["IoT", "Sensors", "Assistive Tech"],
      },
      {
        title: "The AUTO Test",
        description: "Sensor-driven, cloud-based motorcycle licence testing.",
        image: "/placeholder.svg",
        tags: ["Sensors", "Cloud", "Firmware"],
      },
      {
        title: "Bilitrack",
        description: "Device for detecting jaundice in newborns.",
        image: "/placeholder.svg",
        tags: ["Biomedical", "Optical Sensing"],
      },
    ],
  },
  {
    id: "3d",
    title: "3D Printing & Enclosure Design",
    tagline: "From CAD sketch to printed part.",
    icon: Layers,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    image: "/placeholder.jpg",
    skills: [
      { name: "3D modelling & prototyping", level: "Advanced" },
      { name: "Creality printing", level: "Advanced" },
      { name: "SolidWorks & Fusion CAD", level: "Proficient" },
      { name: "3D & 4D printing workflows", level: "Proficient" },
      { name: "Digital twins", level: "Familiar" },
    ],
    projects: [],
  },
  {
    id: "software",
    title: "Software Development",
    tagline: "Full-stack platforms, built to ship.",
    icon: Code2,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    image: "/skills/software.jpg",
    skills: [
      { name: "React / Next.js", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Node.js / Express / Nest.js", level: "Advanced" },
      { name: "PostgreSQL / MongoDB", level: "Proficient" },
      { name: "Docker", level: "Proficient" },
    ],
    projects: [
      {
        title: "Tie the Knot",
        description: "Matching and wedding planning platform.",
        image: "/datingapp.png",
        tags: ["React", "NestJS", "MongoDB"],
        url: "https://tieknot.vercel.app/",
      },
      {
        title: "Aguka",
        description: "Community saving and lending platform.",
        image: "/aguka.png",
        tags: ["React", "Node.js", "TypeScript"],
        url: "https://aguka2025.vercel.app/",
      },
      {
        title: "MEP Electric",
        description: "Business site with dashboard and payments.",
        image: "/ecommerce-dashboard.png",
        tags: ["Next.js", "NestJS", "Stripe"],
        url: "https://meperictrictech.com",
      },
    ],
  },
  {
    id: "others",
    title: "Others",
    tagline: "Research, AI data and teaching.",
    icon: Sparkles,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    image: "/placeholder.jpg",
    skills: [
      { name: "Research & technical writing", level: "Advanced" },
      { name: "Perception annotation for AI", level: "Advanced" },
      { name: "Technical training & mentorship", level: "Advanced" },
      { name: "Team leadership", level: "Advanced" },
      { name: "MATLAB & Origin Pro", level: "Proficient" },
    ],
    // Research papers live on /publications, not here
    projects: [],
  },
];
