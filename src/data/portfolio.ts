// Content for the portfolio page. Mirrors the `renderVals()` data from the
// Claude Design source (`Nawaf Almarzooq - Portfolio.dc.html`).

export const email = "Naawafd@gmail.com";
export const phone = "0590399191";
export const linkedin = "https://www.linkedin.com/in/nawaf-almarzooq-12a428348/";
export const github = "https://github.com/Nawaf1054";

export const languagesTech = [
  "Flutter & Dart",
  "JavaScript",
  "Astro",
  "HTML & CSS",
  "SQL",
];

export const techSkills = [
  "BLoC / Cubit",
  "REST APIs",
  "Firebase Firestore",
  "MySQL",
  "Oracle",
  "Git",
  "GitHub",
  "UI/UX Fundamentals",
  "Debugging",
  "Prompt Engineering",
  "AI-Assisted Dev (Claude Code)",
];

export const zillTech = [
  "Flutter",
  "Dart",
  "Firebase",
  "Gemini AI",
  "Deepgram",
  "Pinecone",
  "WebRTC",
  "RAG",
];

export interface ZillFeature {
  icon: string;
  title: string;
  body: string;
}

export const zillFeatures: ZillFeature[] = [
  {
    icon: "ph-waveform",
    title: "Live call transcription",
    body: "Real-time speech-to-text streams the conversation as it happens, so agents never lose the thread.",
  },
  {
    icon: "ph-magnifying-glass",
    title: "RAG knowledge retrieval",
    body: "A retrieval-augmented workflow pulls accurate, context-aware answers from the knowledge base.",
  },
  {
    icon: "ph-sparkle",
    title: "Ranked reply suggestions",
    body: "AI drafts and ranks responses — recommended, more likely, then maybe — for a fast, confident reply.",
  },
];

export interface Project {
  icon: string;
  title: string;
  subtitle: string;
  date: string;
  body: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    icon: "ph-coffee",
    title: "Coffee & Restaurant Quick Service App",
    subtitle: "Cross-platform ordering",
    date: "Personal",
    body: "A Flutter app for coffee shops and restaurants with customer ordering, moderator management, and an admin dashboard. Scalable state management with BLoC/Cubit and a responsive UI.",
    tech: ["Flutter", "Firebase", "Firestore", "FCM", "Google Maps API", "BLoC/Cubit"],
  },
];

export interface Experience {
  date: string;
  role: string;
  org: string;
  points: string[];
}

export const experience: Experience[] = [
  {
    date: "June 2026",
    role: "Full-Stack Developer — Hackathon Participant",
    org: "AgentX Hackathon",
    points: [
      "Collaborated with a multidisciplinary team to design and develop an AI-powered customer service assistant.",
      "Gained hands-on experience in AI product design, Retrieval-Augmented Generation (RAG), speech-to-text, and real-time AI workflows.",
      "Benefited from expert mentoring sessions and technical workshops on AI and product development.",
    ],
  },
  {
    date: "May 2024 – Aug 2024",
    role: "Cooperative Training",
    org: "TVTC",
    points: [
      "Provided technical support by diagnosing and resolving hardware, software, and operating-system issues.",
      "Performed maintenance and troubleshooting for computers, projectors, and network-connected devices.",
      "Configured and connected multiple devices within a centralized server environment.",
    ],
  },
];

export interface Cert {
  title: string;
  issuer: string;
  img: string;
}

const satr = "Tuwaiq Academy — Satr";

export const certs: Cert[] = [
  { title: "Intensive English Program", issuer: "TVTC", img: "/assets/english-cert.png" },
  { title: "Building and Training LLMs from scratch", issuer: "Qassim Tech - Saai", img: "/assets/certs/llm-scratch.png" },
  { title: "Flutter 101", issuer: satr, img: "/assets/certs/flutter-101.png" },
  { title: "Flutter 102", issuer: satr, img: "/assets/certs/flutter-102.png" },
  { title: "Flutter 103", issuer: satr, img: "/assets/certs/flutter-103.png" },
  { title: "Flutter 104", issuer: satr, img: "/assets/certs/flutter-104.png" },
  { title: "Flutter 105", issuer: satr, img: "/assets/certs/flutter-105.png" },
  { title: "Flutter 106", issuer: satr, img: "/assets/certs/flutter-106.png" },
  { title: "Dart 101", issuer: satr, img: "/assets/certs/dart-101.png" },
  { title: "Dart 102", issuer: satr, img: "/assets/certs/dart-102.png" },
  { title: "Dart 103", issuer: satr, img: "/assets/certs/dart-103.png" },
  { title: "Dart 104", issuer: satr, img: "/assets/certs/dart-104.png" },
  { title: "Git Fundamentals", issuer: satr, img: "/assets/certs/git.png" },
  { title: "UX/UI", issuer: satr, img: "/assets/certs/ux-ui.png" },
];

export const resumeUrl = "https://drive.google.com/file/d/1J6EkiUj3fiABva4XGZH_LBFcrbALG498/view?usp=sharing";
