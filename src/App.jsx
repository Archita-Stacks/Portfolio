import { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import CloudQueueRoundedIcon from "@mui/icons-material/CloudQueueRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import ContactMailRoundedIcon from "@mui/icons-material/ContactMailRounded";
import DataObjectRoundedIcon from "@mui/icons-material/DataObjectRounded";
import DeveloperBoardRoundedIcon from "@mui/icons-material/DeveloperBoardRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import WebRoundedIcon from "@mui/icons-material/WebRounded";

const introText = "Welcome to Archita's work";

const navItems = [
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Accomplishments", href: "#accomplishments" },
  { label: "Connect", href: "#connect" },
];

const skillGroups = [
  {
    title: "Backend",
    color: "#151515",
    border: "#2b2b2b",
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
    color: "#14181c",
    border: "#29323a",
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
    color: "#141916",
    border: "#263128",
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
    color: "#171514",
    border: "#302b28",
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
    color: "#15171b",
    border: "#2a2f36",
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
    color: "#141917",
    border: "#27302c",
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
  "Successfully modernized monolithic applications into Spring Boot microservices to improve scalability and maintainability.",
  "Built reusable REST APIs and integration services that improved communication across enterprise systems.",
  "Implemented CI/CD pipelines with Jenkins, GitHub Actions, Docker, Kubernetes, and Terraform for more reliable releases.",
  "Developed Kafka-based asynchronous workflows to support scalable real-time data processing.",
  "Improved performance through query tuning, indexing, caching, and backend optimization techniques.",
  "Integrated OpenAI and Azure OpenAI for document search, intelligent recommendations, support automation, and workflow assistance.",
];

function SectionTitle({ title, subtitle, titleColor = "#ffffff", subtitleColor = "#a3a3a3" }) {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography
        variant="overline"
        sx={{ letterSpacing: "0.22em", color: subtitleColor }}
      >
        {subtitle}
      </Typography>
      <Typography
        variant="h2"
        sx={{ fontSize: { xs: "2rem", md: "3rem" }, mt: 1, color: titleColor }}
      >
        {title}
      </Typography>
    </Box>
  );
}

function SurfaceCard({ children, sx }) {
  return (
    <Box
      sx={{
        height: "100%",
        ...sx,
      }}
    >
      <Box sx={{ p: { xs: 0, md: 0 } }}>{children}</Box>
    </Box>
  );
}

function LogoBadge({ short, accent }) {
  return (
    <Box
      sx={{
        width: 26,
        height: 26,
        borderRadius: "8px",
        bgcolor: alpha(accent, 0.16),
        color: accent,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0.68rem",
        fontWeight: 900,
        letterSpacing: "-0.02em",
        border: `1px solid ${alpha(accent, 0.32)}`,
      }}
    >
      {short}
    </Box>
  );
}

export default function App() {
  const [typedText, setTypedText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

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
    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [imageUrl]);

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
    }

    const nextUrl = URL.createObjectURL(file);
    setImageUrl(nextUrl);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        color: "#ffffff",
        backgroundColor: "#0b0b0b",
        position: "relative",
      }}
    >
      <Container maxWidth="xl" sx={{ pb: 10 }}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: "84px",
            justifyContent: "space-between",
            borderBottom: `1px solid ${alpha("#ffffff", 0.1)}`,
            mb: { xs: 5, md: 8 },
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 900, letterSpacing: "0.08em" }}>
            ARCHITA PULLURU
          </Typography>
          <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
            {navItems.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                color="inherit"
                sx={{ color: alpha("#ffffff", 0.75) }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
        </Toolbar>

        <Box
          id="top"
          sx={{
            minHeight: { xs: "88vh", md: "75vh" },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.3fr 0.7fr" },
            gap: 4,
            alignItems: "start",
            px: 0,
            pt: { xs: 2, md: 6 },
            pb: { xs: 3, md: 5 },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.7rem", sm: "3.8rem", md: "5.2rem" },
                lineHeight: 1.02,
                minHeight: { xs: 180, md: 250 },
                maxWidth: 760,
                pt: { xs: 6, md: 10 },
              }}
            >
              {typedText}
            </Typography>
            <Typography
              sx={{
                mt: 3,
                maxWidth: 700,
                color: alpha("#ffffff", 0.78),
                fontSize: { xs: "1rem", md: "1.2rem" },
                lineHeight: 1.9,
                mb: { xs: 3, md: 5 },
              }}
            >
              Senior Full Stack Java Developer with 8+ years of experience building enterprise
              applications using Java, Spring Boot, React.js, Azure, Kubernetes, Kafka, and
              OpenAI-powered solutions.
            </Typography>
          </Box>

          <Box
            component="label"
            sx={{
              maxWidth: 420,
              width: "100%",
              justifySelf: { xs: "center", md: "end" },
              pt: { xs: 2, md: 12 },
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Avatar
              src={imageUrl}
              alt="Archita profile"
              sx={{
                width: 220,
                height: 220,
                bgcolor: alpha("#ffffff", 0.08),
                color: alpha("#ffffff", 0.45),
                fontSize: "1rem",
                border: `1px solid ${alpha("#ffffff", 0.12)}`,
              }}
            >
              Upload Photo
            </Avatar>
            <input hidden accept="image/*" type="file" onChange={handleImageUpload} />
          </Box>
        </Box>

        <Box id="skills" sx={{ pt: { xs: 0, md: 0 }, position: "relative", zIndex: 1 }}>
          <SectionTitle
            title="Skills"
            subtitle="WHAT I WORK WITH"
            titleColor="#ffffff"
            subtitleColor="#ffffff"
          />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, minmax(0, 1fr))",
                xl: "repeat(3, minmax(0, 1fr))",
              },
              gap: 3,
            }}
          >
            {skillGroups.map((group) => (
              <SurfaceCard
                key={group.title}
                sx={{
                  py: 2,
                }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2.5 }}>
                  <Box sx={{ color: "#f3f3f3" }}>{group.icon}</Box>
                  <Typography variant="h5" sx={{ color: "#f3f3f3" }}>
                    {group.title}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1.2} flexWrap="wrap" useFlexGap>
                  {group.skills.map((skill) => (
                    <Chip
                      key={skill.name}
                      icon={<LogoBadge short={skill.short} accent={skill.accent} />}
                      label={skill.name}
                      sx={{
                        height: 42,
                        color: "#f0f0f0",
                        bgcolor: alpha("#ffffff", 0.06),
                        border: `1px solid ${alpha("#ffffff", 0.1)}`,
                        "& .MuiChip-icon": {
                          marginLeft: "8px",
                        },
                        "& .MuiChip-label": {
                          fontWeight: 700,
                        },
                      }}
                    />
                  ))}
                </Stack>
              </SurfaceCard>
            ))}
          </Box>
        </Box>

        <Box id="about" sx={{ pt: { xs: 12, md: 18 }, position: "relative", zIndex: 1 }}>
          <SectionTitle title="About Me" subtitle="WHO I AM" />
          <SurfaceCard>
            <Typography
              sx={{
                color: "#d5d5d5",
                fontSize: { xs: "1rem", md: "1.12rem" },
                lineHeight: 2,
                maxWidth: 980,
              }}
            >
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
            </Typography>
          </SurfaceCard>
        </Box>

        <Box id="accomplishments" sx={{ pt: { xs: 10, md: 14 }, position: "relative", zIndex: 1 }}>
          <SectionTitle title="Accomplishments" subtitle="WHAT I HAVE DONE" />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
              gap: 3,
            }}
          >
            {accomplishments.map((item) => (
              <SurfaceCard key={item} sx={{ py: 1 }}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Box
                    sx={{
                      width: 34,
                      height: 34,
                      borderRadius: "8px",
                      bgcolor: "#20262a",
                      color: "#9db9c9",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid #31414b",
                      mt: 0.4,
                      flexShrink: 0,
                    }}
                  >
                    <StarsRoundedIcon sx={{ fontSize: 18 }} />
                  </Box>
                  <Typography sx={{ color: "#d6d6d6", lineHeight: 1.9 }}>
                    {item}
                  </Typography>
                </Stack>
              </SurfaceCard>
            ))}
          </Box>
        </Box>

        <Box id="connect" sx={{ pt: { xs: 10, md: 14 }, pb: 6, position: "relative", zIndex: 1 }}>
          <SectionTitle title="Let's Connect" subtitle="CONTACT" />
          <SurfaceCard>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={3}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", md: "center" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: { xs: "flex-start", md: "center" },
                  flexWrap: "wrap",
                  gap: 1.5,
                }}
              >
                <Typography sx={{ color: "#d0d0d0", lineHeight: 1.9 }}>
                  Connect with me through
                </Typography>
                <Typography sx={{ color: "#ffffff", fontSize: "18px" }} >
                  <Box
                    component="a"
                    href="mailto:architap.1806@gmail.com"
                    sx={{
                      fontSize: "18px",
                      color: "#ffffff",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    architap.1806@gmail.com
                  </Box>
                </Typography>
              </Box>
              <ContactMailRoundedIcon sx={{ color: "#203646", fontSize: 34 }} />
            </Stack>
          </SurfaceCard>
        </Box>
      </Container >
    </Box >
  );
}
