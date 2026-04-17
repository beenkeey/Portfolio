import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Bot,
  Database,
  GitBranch,
  Globe,
  Mail,
  MessagesSquare,
  ServerCog,
  SquareStack,
  Terminal,
} from "lucide-react";
import { BackgroundGlow } from "./components/BackgroundGlow";
import { LoadingScreen } from "./components/LoadingScreen";
import { Reveal } from "./components/Reveal";
import { ScrollProgress } from "./components/ScrollProgress";
import { SectionTitle } from "./components/SectionTitle";

const experiences = [
  "Built backend systems for KPI automation, reducing manual reporting load and improving decision speed.",
  "Integrated 1C through REST APIs, enabling reliable data synchronization across internal workflows.",
  "Developed a corporate communication platform (Flask + WebSockets) for real-time team coordination.",
  "Designed a self-service solution for regional departments, improving service accessibility at scale.",
  "Operated infrastructure across Linux (Astra), Docker, Nginx, Apache, PostgreSQL, MariaDB, and Windows Server AD.",
];

const projects = [
  {
    name: "Internal KPI Automation System",
    problem: "Manual KPI processing consumed time and created reporting delays.",
    solution: "Designed backend automation flows with integration endpoints and scheduled processing.",
    impact: "Improved reporting consistency and accelerated management-level visibility of key metrics.",
    stack: ["Python", "Django", "REST API", "PostgreSQL"],
  },
  {
    name: "Corporate Communication Platform",
    problem: "Internal teams lacked fast communication channels for operational updates.",
    solution: "Built a real-time communication service with Flask and WebSockets for internal use.",
    impact: "Enabled instant coordination between departments and reduced response latency.",
    stack: ["Flask", "WebSockets", "AJAX", "Linux"],
  },
  {
    name: "Self-Service Portal for Government Services",
    problem: "Regional units needed a streamlined way to execute recurring service workflows.",
    solution: "Implemented a self-service portal architecture with secure backend services and integrations.",
    impact: "Increased autonomy of regional teams and reduced routine workload on central staff.",
    stack: ["Python", "REST API", "MariaDB", "Nginx"],
  },
];

const skillGroups = [
  { title: "Backend", icon: ServerCog, values: ["Python", "Django", "Flask", "REST API"] },
  { title: "Databases", icon: Database, values: ["PostgreSQL", "MariaDB"] },
  { title: "DevOps", icon: Terminal, values: ["Docker", "Linux", "Nginx"] },
  { title: "Other", icon: GitBranch, values: ["Git", "WebSockets", "AJAX"] },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setIsLoading(false), 1200);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="relative">
      <LoadingScreen isLoading={isLoading} />
      <ScrollProgress />
      <BackgroundGlow />

      <main className="mx-auto max-w-6xl px-5 pb-14 md:px-10">
        <section id="hero" className="flex min-h-screen items-center py-20">
          <div className="w-full">
            <motion.p
              className="mb-5 text-xs tracking-[0.24em] text-indigo-300 uppercase"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Software Engineering Portfolio
            </motion.p>
            <motion.h1
              className="text-4xl leading-tight font-semibold md:text-6xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Данил Каханов
            </motion.h1>
            <motion.p
              className="mt-4 text-lg text-slate-200 md:text-2xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
            >
              Software Engineer / Backend Developer
            </motion.p>
            <motion.p
              className="mt-7 max-w-3xl text-base leading-relaxed text-slate-300 md:text-xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.54 }}
            >
              I build scalable systems, automate business processes, and turn complex workflows into efficient
              digital solutions.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <a
                href="#projects"
                className="rounded-xl bg-indigo-500 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-indigo-400"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-white/25 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Contact Me
              </a>
            </motion.div>
            <motion.div
              className="mt-14 flex flex-wrap items-center gap-5 text-sm text-slate-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.85 }}
            >
              <div className="glass-card rounded-lg px-4 py-2">Age: 24</div>
              <div className="glass-card rounded-lg px-4 py-2">Location: Krasnoyarsk</div>
              <div className="glass-card rounded-lg px-4 py-2">2+ years production experience</div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-20">
          <Reveal>
            <SectionTitle
              eyebrow="About Me"
              title="Production-minded engineer with strong backend focus"
              subtitle="I design robust backend services, automate routine processes, and connect systems into reliable digital workflows. My work is grounded in real production constraints: performance, maintainability, and operational stability."
            />
          </Reveal>
        </section>

        <section id="experience" className="py-20">
          <Reveal>
            <SectionTitle
              eyebrow="Experience"
              title="KGBU MFC (Russia) — Software Engineer"
              subtitle="2+ years building internal systems that improve operational speed and service quality."
            />
          </Reveal>
          <div className="relative ml-3 border-l border-white/20 pl-8">
            {experiences.map((item, idx) => (
              <Reveal key={item} delay={idx * 0.08}>
                <div className="relative mb-6 rounded-2xl p-5 transition hover:-translate-y-1 glass-card">
                  <span className="absolute top-7 -left-[2.2rem] h-3 w-3 rounded-full bg-indigo-300" />
                  <p className="text-sm leading-relaxed text-slate-200 md:text-base">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="skills" className="py-20">
          <Reveal>
            <SectionTitle
              eyebrow="Skills"
              title="Backend, data, and infrastructure toolkit"
              subtitle="Technology choices focused on scalability, integration reliability, and stable operations."
            />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map(({ title, icon: Icon, values }, idx) => (
              <Reveal key={title} delay={idx * 0.06}>
                <div className="glass-card rounded-2xl p-5 transition hover:-translate-y-1">
                  <div className="mb-4 flex items-center gap-3">
                    <Icon className="h-5 w-5 text-indigo-300" />
                    <h3 className="text-lg font-semibold">{title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {values.map((skill) => (
                      <span key={skill} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="projects" className="py-20">
          <Reveal>
            <SectionTitle
              eyebrow="Projects"
              title="Impact-oriented system products"
              subtitle="Internal platforms presented through business outcomes: problem, solution, and measurable operational effect."
            />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project, idx) => (
              <Reveal key={project.name} delay={idx * 0.08}>
                <div className="group glass-card h-full rounded-2xl p-6 transition hover:-translate-y-2 hover:border-indigo-300/60">
                  <div className="mb-5 flex items-center gap-2 text-indigo-300">
                    <SquareStack className="h-5 w-5" />
                    <h3 className="text-base font-semibold">{project.name}</h3>
                  </div>
                  <p className="mb-3 text-sm text-slate-200">
                    <span className="font-medium text-white">Problem:</span> {project.problem}
                  </p>
                  <p className="mb-3 text-sm text-slate-200">
                    <span className="font-medium text-white">Solution:</span> {project.solution}
                  </p>
                  <p className="mb-4 text-sm text-slate-200">
                    <span className="font-medium text-white">Impact:</span> {project.impact}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-md bg-indigo-400/12 px-2 py-1 text-xs text-indigo-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="education" className="py-20">
          <Reveal>
            <SectionTitle eyebrow="Education" title="Academic growth trajectory" />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {["Bachelor", "Master", "PhD (in progress)"].map((stage, idx) => (
              <Reveal key={stage} delay={idx * 0.08}>
                <div className="glass-card rounded-2xl p-5">
                  <p className="mb-2 text-xs tracking-[0.2em] text-slate-400 uppercase">Stage {idx + 1}</p>
                  <h3 className="text-lg font-semibold">{stage}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20">
          <Reveal>
            <div className="glass-card rounded-3xl p-7 md:p-10">
              <SectionTitle
                eyebrow="Contact"
                title="Let’s discuss how I can contribute to your engineering team"
                subtitle="Open to backend engineering opportunities where system reliability, integration quality, and delivery impact matter."
              />
              <div className="grid gap-3 md:grid-cols-3">
                <a
                  href="https://t.me/username"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 p-4 transition hover:border-indigo-300/60 hover:bg-white/10"
                >
                  <MessagesSquare className="h-5 w-5 text-indigo-300" />
                  <span className="text-sm">Telegram</span>
                </a>
                <a
                  href="mailto:danil.kakhanov@example.com"
                  className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 p-4 transition hover:border-indigo-300/60 hover:bg-white/10"
                >
                  <Mail className="h-5 w-5 text-indigo-300" />
                  <span className="text-sm">Email</span>
                </a>
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 p-4 transition hover:border-indigo-300/60 hover:bg-white/10"
                >
                  <Globe className="h-5 w-5 text-indigo-300" />
                  <span className="text-sm">GitHub</span>
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl items-center justify-between border-t border-white/10 px-5 py-6 text-xs text-slate-400 md:px-10">
        <p>© {new Date().getFullYear()} Данил Каханов</p>
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1">
            <Bot className="h-3.5 w-3.5" /> Automation-first
          </span>
          <span className="inline-flex items-center gap-1">
            <Globe className="h-3.5 w-3.5" /> Production systems
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
