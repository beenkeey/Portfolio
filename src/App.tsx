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
  "Разрабатывал backend-системы для автоматизации KPI, снижая ручную нагрузку и ускоряя принятие решений.",
  "Интегрировал 1С через REST API, обеспечив стабильную синхронизацию данных между системами.",
  "Создал корпоративную платформу коммуникации (Flask + WebSockets) для работы в реальном времени.",
  "Спроектировал систему самообслуживания для региональных подразделений.",
  "Работал с инфраструктурой: Linux (Astra), Docker, Nginx, Apache, PostgreSQL, MariaDB, Windows Server (AD).",
  "Участвовал в проектировании архитектуры систем и формировании технических требований.",
];

const projects = [
 {
    name: "Система автоматизации KPI",
    problem: "Ручная обработка KPI занимала много времени и приводила к задержкам в отчетности.",
    solution: "Разработал backend-логику с автоматизацией процессов и интеграциями через API.",
    impact: "Сократил время формирования отчетов и повысил прозрачность KPI для управленческих решений.",
    stack: ["Python", "Django", "REST API", "PostgreSQL"],
  },
  {
    name: "Корпоративная платформа коммуникации",
    problem: "Отсутствие быстрых каналов взаимодействия между подразделениями.",
    solution: "Реализовал сервис с real-time коммуникацией на Flask и WebSockets.",
    impact: "Снизил задержки в коммуникации и повысил эффективность взаимодействия.",
    stack: ["Flask", "WebSockets", "AJAX", "Linux"],
  },
  {
    name: "Портал самообслуживания",
    problem: "Региональные подразделения не имели удобного инструмента для работы с сервисами.",
    solution: "Разработал архитектуру портала с безопасной backend-логикой и интеграциями.",
    impact: "Повысил автономность подразделений и снизил нагрузку на центральные отделы.",
    stack: ["Python", "REST API", "MariaDB", "Nginx"],
  },
];

const skillGroups = [
  { title: "Backend", icon: ServerCog, values: ["Python", "Django", "Flask", "REST API"] },
  { title: "Базы данных", icon: Database, values: ["PostgreSQL", "MariaDB"] },
  { title: "DevOps", icon: Terminal, values: ["Docker", "Linux", "Nginx"] },
  { title: "Другое", icon: GitBranch, values: ["Git", "WebSockets", "AJAX"] },
  { title: "Языки", icon: Globe, values: ["Русский (родной)", "Английский B2"] }
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
              Портфолио инженера-программиста
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
              Инженер-программист / Backend-разработчик
            </motion.p>
            <motion.p
              className="mt-7 max-w-3xl text-base leading-relaxed text-slate-300 md:text-xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.54 }}
            >
              Разрабатываю масштабируемые системы, автоматизирую бизнес-процессы и превращаю сложные задачи в эффективные цифровые решения.
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
                Мои проекты
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-white/25 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Связаться со мной
              </a>
            </motion.div>
            <motion.div
              className="mt-14 flex flex-wrap items-center gap-5 text-sm text-slate-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.85 }}
            >
              <div className="glass-card rounded-lg px-4 py-2">Возраст: 24 года</div>
              <div className="glass-card rounded-lg px-4 py-2">Город проживания: Красноярск</div>
              <div className="glass-card rounded-lg px-4 py-2">2+ года коммерческого опыта</div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-20">
          <Reveal>
            <SectionTitle
              eyebrow="Обо мне"
              title="Инженер с практическим опытом backend-разработки"
              subtitle="Разрабатываю backend-сервисы, автоматизирую процессы и создаю надежные системы для реальных бизнес-задач. Работаю с учетом производительности, масштабируемости и стабильности. Также отличаюсь высокой обучаемостью, вниманием к деталям и ориентацией на результат.
Умею эффективно работать в команде и быстро адаптироваться к новым задачам и технологиям."
            />
          </Reveal>
        </section>

        <section id="experience" className="py-20">
          <Reveal>
            <SectionTitle
              eyebrow="Опыт"
              title="КГБУ МФЦ — Инженер-программист"
              subtitle="Более 2 лет разработки внутренних систем, повышающих эффективность бизнес-процессов."
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
              eyebrow="Навыки"
              title="Технологический стек"
              subtitle="Инструменты и технологии для разработки, интеграций и поддержки систем."
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
              eyebrow="Проекты"
              title="Ключевые разработки"
              subtitle="Реализованные системы с фокусом на бизнес-задачи и результат."
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
                    <span className="font-medium text-white">Проблема:</span> {project.problem}
                  </p>
                  <p className="mb-3 text-sm text-slate-200">
                    <span className="font-medium text-white">Решение:</span> {project.solution}
                  </p>
                  <p className="mb-4 text-sm text-slate-200">
                    <span className="font-medium text-white">Результат:</span> {project.impact}
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
            <SectionTitle eyebrow="Образование" title="Образование и развитие" />
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                degree: "Бакалавр",
                desc: "Автоматизация технологических процессов и производств",
                year: "2023",
              },
              {
                degree: "Магистр",
                desc: "Киберфизические системы управления производством",
                year: "2025",
              },
              {
                degree: "Аспирантура (в процессе)",
                desc: "Теоретическая информатика и кибернетика",
                year: "2028",
              },
            ].map((item, idx) => (
              <Reveal key={item.degree} delay={idx * 0.08}>
                <div className="glass-card rounded-2xl p-5 transition hover:-translate-y-1">

                  <p className="mb-2 text-xs text-slate-400">{item.year}</p>

                  <h3 className="text-lg font-semibold mb-2">
                    {item.degree}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>

                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="courses" className="py-20">
          <Reveal>
            <SectionTitle
              eyebrow="Дополнительно"
              title="Повышение квалификации"
              subtitle="Дополнительное обучение и развитие профессиональных навыков"
            />
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Основы Astra Linux (2025)",
              "Разработка интерактивных веб-интерфейсов (2024)",
              "Управление в IT сфере (2024)",
              "Верстка веб-приложений (2024)",
            ].map((course, idx) => (
              <Reveal key={course} delay={idx * 0.06}>
                <div className="glass-card rounded-2xl p-5">
                  <p className="text-sm text-slate-200">{course}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20">
          <Reveal>
            <div className="glass-card rounded-3xl p-7 md:p-10">
              <SectionTitle
                eyebrow="Контакты"
                title="Свяжитесь со мной"
                subtitle="Открыт к предложениям по backend-разработке и участию в проектах."
              />
              <div className="grid gap-3 md:grid-cols-3">
                <a
                  href="https://t.me/defeen"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 p-4 transition hover:border-indigo-300/60 hover:bg-white/10"
                >
                  <MessagesSquare className="h-5 w-5 text-indigo-300" />
                  <span className="text-sm">Telegram</span>
                </a>
                <a
                  href="mailto:kahanda@icloud.com"
                  className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 p-4 transition hover:border-indigo-300/60 hover:bg-white/10"
                >
                  <Mail className="h-5 w-5 text-indigo-300" />
                  <span className="text-sm">Email</span>
                </a>
                <a
                  href="https://github.com/beenkeey"
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
            <Bot className="h-3.5 w-3.5" /> Автоматизация процессов
          </span>
          <span className="inline-flex items-center gap-1">
            <Globe className="h-3.5 w-3.5" /> Промышленные системы
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
