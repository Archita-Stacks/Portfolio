import { useEffect, useState } from "react";
import { Chip, Container } from "@mui/material";
import CloudQueueRoundedIcon from "@mui/icons-material/CloudQueueRounded";
import ContactMailRoundedIcon from "@mui/icons-material/ContactMailRounded";
import DataObjectRoundedIcon from "@mui/icons-material/DataObjectRounded";
import DeveloperBoardRoundedIcon from "@mui/icons-material/DeveloperBoardRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import WebRoundedIcon from "@mui/icons-material/WebRounded";
import "./app.css";

const introText = "Welcome to Archita's work";
const PROFILE_IMAGE_URL = "/avatar_800KB.jpg";

const navItems = [
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Values", href: "#values" },
  { label: "Accomplishments", href: "#accomplishments" },
  { label: "Connect", href: "#connect" },
];

const skillGroups = [
  {
    title: "Backend",
    tone: "backend",
    icon: <DeveloperBoardRoundedIcon />,
    skills: [
      { name: "Java", short: "J", accent: "#e76f51" },
      { name: "Spring Boot", short: "S", accent: "#4f9d69" },
      { name: "Spring Security", short: "SS", accent: "#3f7d58" },
      { name: "Microservices", short: "M", accent: "#6b7280" },
      { name: "Hibernate", short: "H", accent: "#8b5e3c" },
      { name: "JPA", short: "JPA", accent: "#6d597a" },
      { name: "Kafka", short: "K", accent: "#374151" },
      { name: "JMS", short: "JMS", accent: "#4b5563" },
    ],
  },
  {
    title: "Frontend",
    tone: "frontend",
    icon: <WebRoundedIcon />,
    skills: [
      { name: "React.js", short: "R", accent: "#61dafb" },
      { name: "TypeScript", short: "TS", accent: "#3178c6" },
      { name: "JavaScript", short: "JS", accent: "#d4b000" },
      { name: "Redux Toolkit", short: "RT", accent: "#7c3aed" },
      { name: "Angular", short: "A", accent: "#c62828" },
      { name: "HTML5", short: "H5", accent: "#e44d26" },
      { name: "CSS3", short: "C3", accent: "#1572b6" },
      { name: "Material UI", short: "MUI", accent: "#007fff" },
    ],
  },
  {
    title: "Cloud",
    tone: "cloud",
    icon: <CloudQueueRoundedIcon />,
    skills: [
      { name: "Azure", short: "Az", accent: "#0078d4" },
      { name: "AWS", short: "AWS", accent: "#ff9900" },
      { name: "GCP", short: "G", accent: "#4285f4" },
      { name: "AKS", short: "AKS", accent: "#326ce5" },
      { name: "Azure Functions", short: "AF", accent: "#0062ad" },
      { name: "Azure OpenAI", short: "AI", accent: "#0ea5a4" },
    ],
  },
  {
    title: "Data and APIs",
    tone: "data",
    icon: <StorageRoundedIcon />,
    skills: [
      { name: "PostgreSQL", short: "PG", accent: "#336791" },
      { name: "Oracle", short: "O", accent: "#f80000" },
      { name: "MongoDB", short: "M", accent: "#13aa52" },
      { name: "REST APIs", short: "API", accent: "#2563eb" },
      { name: "GraphQL", short: "GQ", accent: "#e10098" },
      { name: "OpenAPI", short: "OA", accent: "#6ba539" },
    ],
  },
  {
    title: "DevOps",
    tone: "devops",
    icon: <DataObjectRoundedIcon />,
    skills: [
      { name: "Docker", short: "D", accent: "#2496ed" },
      { name: "Kubernetes", short: "K8", accent: "#326ce5" },
      { name: "Jenkins", short: "J", accent: "#d24939" },
      { name: "GitHub Actions", short: "GH", accent: "#24292f" },
      { name: "Terraform", short: "TF", accent: "#7b42bc" },
      { name: "Maven", short: "MV", accent: "#c71a36" },
    ],
  },
  {
    title: "AI",
    tone: "ai",
    icon: <PsychologyRoundedIcon />,
    skills: [
      { name: "OpenAI APIs", short: "OA", accent: "#10a37f" },
      { name: "RAG", short: "RAG", accent: "#0f766e" },
      { name: "LangChain", short: "LC", accent: "#1d4ed8" },
      { name: "Vector Search", short: "VS", accent: "#7c3aed" },
      { name: "Prompt Engineering", short: "PE", accent: "#b45309" },
      { name: "AI Chatbots", short: "BOT", accent: "#0f766e" },
    ],
  },
];

const accomplishments = [
  {
    title: "Application Modernization",
    description:
      "Successfully modernized monolithic applications into Spring Boot microservices to improve scalability and maintainability.",
  },
  {
    title: "API Integration",
    description:
      "Built reusable REST APIs and integration services that improved communication across enterprise systems.",
  },
  {
    title: "Reliable Delivery",
    description:
      "Implemented CI/CD pipelines with Jenkins, GitHub Actions, Docker, Kubernetes, and Terraform for more reliable releases.",
  },
  {
    title: "Event-Driven Workflows",
    description:
      "Developed Kafka-based asynchronous workflows to support scalable real-time data processing.",
  },
  {
    title: "Performance Optimization",
    description:
      "Improved performance through query tuning, indexing, caching, and backend optimization techniques.",
  },
  {
    title: "AI Solutions",
    description:
      "Integrated OpenAI and Azure OpenAI for document search, intelligent recommendations, support automation, and workflow assistance.",
  },
];

const coreValues = [
  {
    title: "Integrity",
    number: "01",
    description:
      "I build trusted systems with clear communication, clean implementation, and accountable delivery.",
  },
  {
    title: "Ownership",
    number: "02",
    description:
      "I stay close to outcomes, not just tasks, and help projects move forward from idea to production.",
  },
  {
    title: "Collaboration",
    number: "03",
    description:
      "I enjoy partnering across teams, translating technical details, and creating momentum together.",
  },
  {
    title: "Curiosity",
    number: "04",
    description:
      "I keep learning, exploring better patterns, and adapting quickly as products and technology evolve.",
  },
];

function SectionTitle({ title, subtitle, light = false }) {
  return (
    <div className={`section-title ${light ? "section-title--light" : ""}`}>
      <p className="section-title__subtitle">{subtitle}</p>
      <h2 className="section-title__title">{title}</h2>
    </div>
  );
}

function LogoBadge({ short, accent }) {
  return (
    <span className="logo-badge" style={{ "--accent": accent }}>
      {short}
    </span>
  );
}

function ProfileSvg({ imageUrl }) {
  return (
    <svg
      className="hero__profile-svg"
      viewBox="0 0 280 280"
      role="img"
      aria-label="Profile avatar"
    >
      <defs>
        <clipPath id="profileCircleClip">
          <circle cx="140" cy="140" r="118" />
        </clipPath>
      </defs>

      {imageUrl ? (
        <image
          href={imageUrl}
          x="22"
          y="22"
          width="236"
          height="236"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#profileCircleClip)"
        />
      ) : (
        <>
          <circle cx="140" cy="112" r="44" fill="rgba(255,255,255,0.18)" />
          <path
            d="M76 236c16-35 44-53 64-53s48 18 64 53"
            fill="rgba(255,255,255,0.18)"
          />
        </>
      )}
    </svg>
  );
}

export default function AppPage() {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const timer = window.setInterval(() => {
      currentIndex += 1;
      setTypedText(introText.slice(0, currentIndex));
      if (currentIndex >= introText.length) {
        window.clearInterval(timer);
      }
    }, 85);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const revealCards = document.querySelectorAll(".core-value-card, .accomplishment-card");

    if (!revealCards.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    revealCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-page">
      <Container maxWidth="xl" className="page-container">
        <header className="topbar">
          <h1 className="topbar__brand">ARCHITA PULLURU</h1>
          <nav className="topbar__nav">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="topbar__link">
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <section id="top" className="hero">
          <div className="hero__copy">
            <h2 className="hero__headline">{typedText}</h2>
            <p className="hero__summary">
              Senior Full Stack Java Developer with 8+ years of experience building enterprise
              applications using Java, Spring Boot, React.js, Azure, Kubernetes, Kafka, and
              OpenAI-powered solutions.
            </p>
          </div>

          <div className="hero__photo-shell hero__photo-shell--locked">
            <ProfileSvg imageUrl={PROFILE_IMAGE_URL} />
          </div>
        </section>

        <section id="skills" className="section section--skills">
          <SectionTitle title="Skills" subtitle="WHAT I WORK WITH" light />
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div key={group.title} className={`skill-group skill-group--${group.tone}`}>
                <div className="skill-group__header">
                  <span className="skill-group__icon">{group.icon}</span>
                  <h3 className="skill-group__title">{group.title}</h3>
                </div>
                <div className="skill-group__chips">
                  {group.skills.map((skill) => (
                    <Chip
                      key={skill.name}
                      icon={<LogoBadge short={skill.short} accent={skill.accent} />}
                      label={skill.name}
                      className="skill-chip"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section section--about">
          <SectionTitle title="About Me" subtitle="WHO I AM" />
          <p className="about-copy">
            I am a Senior Full Stack Java Developer with strong experience designing, developing,
            and supporting enterprise-scale applications across Insurance, Healthcare,
            Pharmaceutical, and Financial Services. My background covers Java, Spring Boot,
            Microservices, React.js, TypeScript, Azure, Kubernetes, Kafka, and cloud-native
            application development. I enjoy building systems that are secure, scalable, and easy
            to maintain, and I have hands-on experience in modernization, API development, cloud
            migration, performance optimization, and production support. I have also worked on
            AI-powered solutions using OpenAI APIs and Azure OpenAI, including intelligent
            document search, RAG-based workflows, recommendations, and workflow automation that
            solve real business problems.
          </p>
        </section>

        <section id="values" className="section section--values">
          <div className="values-layout">
            <div className="values-intro">
              <SectionTitle title="Core Values" subtitle="HOW I WORK" />
              <p className="values-intro__copy">
                The best products come from trust, shared ownership, and steady execution. These
                are the values I try to bring into every team, every system, and every delivery.
              </p>
            </div>

            <div className="values-list">
              {coreValues.map((value) => (
                <article key={value.title} className="core-value-card">
                  <p className="core-value-card__number">{value.number}</p>
                  <h3 className="core-value-card__title">{value.title}</h3>
                  <p className="core-value-card__description">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="accomplishments" className="section section--accomplishments">
          <div className="accomplishments-layout">
            <div className="accomplishments-intro">
              <SectionTitle title="Accomplishments" subtitle="WHAT I HAVE DONE" />
              <p className="accomplishments-intro__copy">
                A few highlights that reflect the kind of systems I have built, improved, and
                supported across enterprise teams.
              </p>
            </div>

            <div className="accomplishments-grid">
              {accomplishments.map((item, index) => (
                <article key={item.title} className="accomplishment-card">
                  <span className="accomplishment-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="accomplishment-card__title">{item.title}</h3>
                  <div className="accomplishment-item">
                    <span className="accomplishment-item__icon">
                      <StarsRoundedIcon fontSize="small" />
                    </span>
                    <p className="accomplishment-item__text">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="connect" className="section section--connect">
          <SectionTitle title="Let's Connect" subtitle="CONTACT" />
          <div className="connect-row">
            <div className="connect-copy connect-copy--inline">
              <p className="connect-copy__text">Connect with me through</p>
              <a className="connect-copy__email" href="mailto:architap.1806@gmail.com">
                architap.1806@gmail.com
              </a>
            </div>
            <ContactMailRoundedIcon className="connect-row__icon" />
          </div>
        </section>
      </Container>
    </div>
  );
}
