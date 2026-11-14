import type { LucideIcon } from "lucide-react";
import { Cpu, Layers, Code2, Sparkles } from "lucide-react";

export const CV_URL =
  "https://drive.google.com/file/d/1GZtxOuLvBuxRHpYOXSKltdxlfHur-6tF/view?usp=drive_link";

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  detail: string;
  // Replace with a real photo in /public/education/ (e.g. "/education/ntu.jpg")
  image: string;
}

export const education: Education[] = [
  {
    degree: "MSc, Smart Manufacturing",
    school: "Nanyang Technological University (NTU)",
    location: "Singapore",
    period: "Jun 2026 – Jun 2027",
    detail:
      "Graduate studies focused on Industry 4.0, additive manufacturing, and smart production systems.",
    image: "/placeholder.jpg",
  },
  {
    degree: "BEng, Electronics and Telecommunication Engineering",
    school: "University of Rwanda",
    location: "Kigali, Rwanda",
    period: "Apr 2021 – Jun 2025",
    detail: "GPA: 3.5 / 4.0",
    image: "/placeholder.jpg",
  },
  {
    degree: "High School Diploma, Mathematics, Physics and Chemistry",
    school: "Petit Séminaire St. Vincent de Paul",
    location: "Ndera, Rwanda",
    period: "Jan 2013 – Nov 2019",
    detail: "Score: 73 / 73",
    image: "/placeholder.jpg",
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export const experience: Experience[] = [
  {
    role: "Embedded Systems and IoT Engineer",
    company: "Beno Holdings, Kigali",
    period: "Jan 2026 – Aug 2026",
    points: [
      "Designed and built Smart Cane (E-nkoni), an IoT-enabled assistive navigation device for the visually impaired.",
      "Engineered The AUTO Test, a sensor and cloud-based digitization of the motorcycle driving-license testing protocol.",
    ],
  },
  {
    role: "Computer Literacy Instructor",
    company: "Alight Rwanda (Humanitarian)",
    period: "Dec 2025",
    points: [
      "Delivered a Computer Literacy Program across the Mahama and Nyabiheke refugee camps, reaching women and youth.",
    ],
  },
  {
    role: "Perception Annotation and Review Engineer",
    company: "ReadyToBloom Inc., Japan",
    period: "Aug 2025 – Dec 2025",
    points: [
      "Annotated and reviewed sensor and video data for Toyota Industries' AI training pipeline on autonomous pallet and load handling.",
    ],
  },
  {
    role: "Embedded Systems Trainer, Internship",
    company: "Unipod and FabLab, University of Rwanda",
    period: "Jun 2025 – Sep 2025",
    points: [
      "Trained university students in hands-on embedded system design using UR's fabrication labs and prototyping equipment.",
    ],
  },
  {
    role: "Firmware Engineer",
    company: "Beno Holdings, Kigali",
    period: "Aug 2024 – 2025",
    points: [
      "Developed embedded firmware and IoT integration for real-time data acquisition on motorcycle playground systems.",
    ],
  },
  {
    role: "Firmware and IoT Trainer",
    company: "Kagoma Tech, Kigali",
    period: "Jan 2023 – Jun 2025",
    points: [
      "Trained high school students in microcontrollers, embedded systems, and applied IoT project development.",
    ],
  },
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
  icon: LucideIcon;
  color: string;
  bg: string;
  summary: string;
  skills: Skill[];
  // Roles from `experience` (matched by role + company) that used this area
  relatedRoles: string[];
  projects: Project[];
}

export const skillAreas: SkillArea[] = [
  {
    id: "embedded",
    title: "Embedded Systems & IoT",
    icon: Cpu,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    summary:
      "Firmware, sensors and cloud-connected devices, from schematic and PCB to real-time data acquisition in the field.",
    skills: [
      { name: "Microcontroller firmware", level: "Advanced" },
      { name: "Real-time data acquisition & sensors", level: "Advanced" },
      { name: "IoT & cloud integration", level: "Advanced" },
      { name: "PCB schematic capture & layout", level: "Proficient" },
      { name: "PCB printing & assembly", level: "Proficient" },
      { name: "Hardware–software interfacing", level: "Advanced" },
      { name: "Altium Designer / EasyEDA", level: "Proficient" },
      { name: "MATLAB / Origin Pro", level: "Proficient" },
    ],
    relatedRoles: [
      "Embedded Systems and IoT Engineer",
      "Firmware Engineer",
      "Embedded Systems Trainer, Internship",
      "Firmware and IoT Trainer",
    ],
    projects: [
      {
        title: "Smart Cane (E-nkoni)",
        description:
          "IoT-enabled assistive navigation device for the visually impaired.",
        image: "/placeholder.svg",
        tags: ["IoT", "Sensors", "Assistive Tech"],
      },
      {
        title: "The AUTO Test",
        description:
          "Sensor and cloud-based digitization of the motorcycle driving-license testing protocol.",
        image: "/placeholder.svg",
        tags: ["Sensors", "Cloud", "Firmware"],
      },
      {
        title: "Bilitrack",
        description: "Hyperbilirubinemia (jaundice) testing device.",
        image: "/placeholder.svg",
        tags: ["Biomedical", "Optical Sensing", "Embedded"],
      },
    ],
  },
  {
    id: "3d",
    title: "3D Printing & Enclosure Design",
    icon: Layers,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    summary:
      "CAD modelling and additive manufacturing for prototypes and device enclosures, including 3D and 4D printing workflows.",
    skills: [
      { name: "SolidWorks", level: "Proficient" },
      { name: "Fusion CAD", level: "Proficient" },
      { name: "3D modelling & prototyping", level: "Advanced" },
      { name: "Creality printing", level: "Advanced" },
      { name: "3D & 4D printing workflows", level: "Proficient" },
      { name: "Additive manufacturing", level: "Proficient" },
      { name: "Digital twins", level: "Familiar" },
    ],
    relatedRoles: ["Embedded Systems Trainer, Internship"],
    projects: [],
  },
  {
    id: "software",
    title: "Software Development",
    icon: Code2,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    summary:
      "Full-stack web platforms and dashboards, from the database and API to a responsive front end.",
    skills: [
      { name: "React / Next.js", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Node.js / Express / Nest.js", level: "Advanced" },
      { name: "PostgreSQL / MongoDB", level: "Proficient" },
      { name: "Docker", level: "Proficient" },
      { name: "Tailwind CSS", level: "Advanced" },
    ],
    relatedRoles: [],
    projects: [
      {
        title: "Tie the Knot",
        description:
          "Dating and wedding planning app with user matching, venue booking and vendor connections.",
        image: "/datingapp.png",
        tags: ["React", "NestJS", "MongoDB", "Socket.io"],
        url: "https://tieknot.vercel.app/",
      },
      {
        title: "Aguka",
        description:
          "Community saving and lending platform that lets groups manage shared funds transparently.",
        image: "/aguka.png",
        tags: ["React", "Tailwind CSS", "Node.js", "TypeScript"],
        url: "https://aguka2025.vercel.app/",
      },
      {
        title: "MEP Electric",
        description:
          "Business site with authentication, admin dashboard and Stripe payments.",
        image: "/ecommerce-dashboard.png",
        tags: ["Next.js", "NestJS", "Stripe"],
        url: "https://meperictrictech.com",
      },
    ],
  },
  {
    id: "others",
    title: "Others",
    icon: Sparkles,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    summary:
      "Research, AI data work, teaching and leadership that sit alongside the engineering.",
    skills: [
      { name: "Research & technical writing", level: "Advanced" },
      { name: "Perception annotation (AI datasets)", level: "Advanced" },
      { name: "Technical training & mentorship", level: "Advanced" },
      { name: "Team leadership & cross-cultural communication", level: "Advanced" },
      { name: "Cisco Packet Tracer", level: "Proficient" },
      { name: "MS Office", level: "Advanced" },
    ],
    relatedRoles: [
      "Perception Annotation and Review Engineer",
      "Computer Literacy Instructor",
    ],
    projects: [
      {
        title: "Optical Sensor-based Water Safety Monitoring",
        description:
          "Peer-reviewed paper on assessing bio-waste levels for home water safety (MDPI, 2024).",
        image: "/placeholder.svg",
        tags: ["Research", "Optical Sensors", "Publication"],
        url: "https://sciforum.net/paper/view/17629",
      },
    ],
  },
];

export const leadership = [
  {
    role: "Minister of Information",
    org: "University of Rwanda Students' Union (URSU)",
    period: "2024",
  },
  {
    role: "Lead ICT and Digital Skills Trainer, Volunteer",
    org: "Gakenke District",
    period: "2020 – 2021",
  },
  {
    role: "Youth Coordinator",
    org: "Ministry of Local Government, Gakenke",
    period: "2019 – 2020",
  },
];

export const awards = [
  "IEEE-MTTS Project Presentation Award, IEEE MTT-S (Oct 2025)",
  "Backend Web Development Certificate, Solvit Africa (Nov 2025)",
  "Andela Technical Certificate, Andela (Mar 2023)",
  "Digital Ambassador Award, Mineduc (Apr 2021)",
  "First Aid Certification, Rwanda Red Cross Society (2019)",
];

export const languages = [
  { name: "Kinyarwanda", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "French", level: "Advanced" },
  { name: "Latin", level: "Working knowledge" },
];
