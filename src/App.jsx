import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const resumeUrl =
  "https://drive.google.com/file/d/1y0eTKR-tsVPg1mKEJUwgoaC67zmtLT2O/view?usp=sharing";

const navItems = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

const skillGroups = [
  {
    title: "Tech",
    items: [
      "Python",
      "Java",
      "SQL",
      "JavaScript",
      "HTML/CSS",
      "React",
      "C/C++",
      "Excel",
      "FastAPI",
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: ["Pandas", "NumPy", "Matplotlib", "OpenCV"],
  },
  {
    title: "Cloud & Tools",
    items: [
      "AWS",
      "Docker",
      "Git",
      "GitHub",
      "CI/CD",
      "Power BI",
      "Figma",
      "Notion",
      "JIRA",
      "Confluence",
      "Google Workspace",
    ],
  },
  {
    title: "Domains",
    items: [
      "Product Management",
      "User Research",
      "Roadmapping",
      "PRD Writing",
      "A/B Testing",
      "Funnel Analysis",
      "KPI Tracking",
      "Cohort Analysis",
      "Competitive Analysis",
      "JTBD",
      "Agile/Scrum",
      "Opportunity Sizing",
      "LLM Workflows",
      "Prompt Design",
    ],
  },
];

const projects = [
  {
    title: "SynthAI",
    description: "AI User Interview Synthesizer for product teams",
    impact: "Reduced manual research time from 2-3 hours to under 10 minutes",
    live: "https://synth-ai-ebon.vercel.app",
    github: "https://github.com/Simarpreet-2607/SynthAI",
    image: "/projects/synthai.png",
  },
  {
    title: "VestMate",
    description: "AI portfolio builder for first-time investors",
    impact: "Guides users on what to invest in, reducing drop-offs after signup",
    live: "https://vestmate-portfolio-builder.vercel.app",
    github: "https://github.com/Simarpreet-2607/vestmate-portfolio-builder",
    image: "/projects/vestmate.png",
  },
  {
    title: "TCS & LRS Planner",
    description: "Tax decision assistant for US stock investing",
    impact: "Prevents confusion-driven drop-offs during transactions",
    live: "https://taxsmart-remitter.vercel.app",
    github: "https://github.com/Simarpreet-2607/taxsmart-remitter-41",
    image: "/projects/tcs.png",
  },
  {
    title: "NextStep",
    description: "Learning product focused on improving activation",
    impact: "Projects 25% improvement in user activation rates",
    github: "https://github.com/Simarpreet-2607/NextStep-Product-Case-Study-",
    image: "/projects/nextstep.png",
  },
];

const certs = [
  {
    label: "AWS Certified Cloud Practitioner",
    href: "https://drive.google.com/file/d/1jcK8UZn3WucnghotRxdPXyXFpFCqejXW/view?usp=drive_link",
  },
  {
    label: "GEN AI - IBM",
    href: "https://drive.google.com/file/d/1NtSoLIoMmdaM3ZqvqC1ennsmDBBumbof/view?usp=sharing",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

function SmartImage({ src, alt, className, fallback, ...props }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative h-full w-full">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-500/18 via-white/[0.04] to-blue-500/18">
          <span className="px-5 text-center text-sm font-black uppercase tracking-[0.2em] text-white/42">
            {fallback}
          </span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${failed ? "opacity-0" : ""}`}
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        {...props}
      />
    </div>
  );
}

function SectionTitle({ eyebrow, title, body }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mb-10 max-w-3xl"
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {body && <p className="mt-4 text-lg leading-8 text-white/62">{body}</p>}
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a href="#home" className="text-base font-black tracking-tight">
          Simar<span className="gradient-text">preet</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-white/64 transition hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-sm font-semibold text-white transition hover:border-blue-300/60 hover:bg-white/[0.08] md:inline-flex"
        >
          Resume <ArrowUpRight size={16} />
        </a>
        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-ink px-5 py-5 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-white/72"
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="section flex min-h-screen items-center pt-28 lg:pt-24"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
        className="grid w-full items-center gap-9 md:grid-cols-[minmax(0,1.12fr)_minmax(240px,0.88fr)] lg:gap-12"
      >
        <div className="min-w-0">
          <motion.p
            variants={fadeUp}
            className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/70"
          >
            Product thinking meets AI execution
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="max-w-[11ch] text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:max-w-[10ch] lg:text-7xl xl:text-8xl"
          >
            Hey, I'm <span className="gradient-text">Simarpreet.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-2xl font-bold text-white sm:text-3xl"
          >
            Aspiring Product Manager | AI Builder
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl text-lg leading-8 text-white/62 sm:text-xl"
          >
            I start with the problem, not the solution and I obsess over what
            frustrates users, then ship what removes it.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-blue-100"
            >
              View Projects
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 px-6 py-3 text-sm font-bold text-white transition hover:border-purple-300/70 hover:bg-white/[0.08]"
            >
              <Download size={17} /> Download Resume
            </a>
          </motion.div>
        </div>
        <motion.div
          variants={fadeUp}
          className="relative mx-auto w-full max-w-[21rem] md:mr-0 md:max-w-[24rem] lg:max-w-[28rem]"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple-500/24 to-blue-500/24 blur-2xl" />
          <SmartImage
            src="/profile.png"
            alt="Simarpreet"
            fallback="Simarpreet"
            className="relative aspect-[4/5] w-full rounded-xl border border-white/12 object-cover shadow-premium"
            loading="eager"
            decoding="async"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <SectionTitle eyebrow="About" title="0→1 every single time" />
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl font-black leading-tight text-white sm:text-4xl"
        >
          "I combine product thinking, AI, and user behavior insights to build
          solutions that actually get used."
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="space-y-5 text-lg leading-8 text-white/66"
        >
          <p>
            I'm a BTech CSE grad who lives at the intersection of product,
            data, and AI.
          </p>
          <p>
            I don't start with features. I start with friction, the moment a
            user hits a wall and work backwards from there. Four years of CS
            fundamentals mean I can reason through the problem technically, not
            just describe it.
          </p>
          <p>
            My approach is hands-on: spot the pattern, build the thing. The
            logic has to hold at every layer - user, system, and business.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle
        eyebrow="Skills"
        title="The toolkit behind the decisions."
        body="A compact blend of engineering fluency, product analysis, and research workflows."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            whileHover={{ y: -6 }}
            className="glass rounded-xl p-6"
          >
            <h3 className="mb-5 text-xl font-black text-white">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-semibold text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle
        eyebrow="Projects"
        title="AI products with crisp product intent."
        body="Each project pairs a user friction point with a practical AI-led workflow."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.55, delay: index * 0.04 }}
            className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.045]"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-white/[0.03]">
              <SmartImage
                src={project.image}
                alt={`${project.title} project preview`}
                fallback={project.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/35" />
            </div>
            <div className="p-6 sm:p-7">
              <h3 className="text-2xl font-black text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-white/64">
                {project.description}
              </p>
              <p className="mt-5 border-l-2 border-blue-300 pl-4 text-sm font-bold leading-6 text-blue-100">
                {project.impact}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-black transition hover:bg-blue-100"
                  >
                    Live <ArrowUpRight size={16} />
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/[0.08]"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  const bullets = [
    "Conducted user research and built PRDs",
    "Built Python-SQL pipeline for 50k+ records",
    "Improved campaign decision-making",
    "Worked cross-functionally with teams",
  ];

  return (
    <section id="experience" className="section">
      <SectionTitle eyebrow="Experience" title="Where product met analytics." />
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative max-w-3xl border-l border-white/14 pl-7"
      >
        <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400" />
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/42">
          Product & Analytics Intern
        </p>
        <h3 className="mt-2 text-3xl font-black text-white">Miqamedia</h3>
        <ul className="mt-6 space-y-3 text-base leading-7 text-white/66">
          {bullets.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="section">
      <SectionTitle
        eyebrow="Certifications"
        title="Proof points for cloud and AI fundamentals."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {certs.map((cert) => (
          <motion.a
            key={cert.label}
            href={cert.href}
            target="_blank"
            rel="noreferrer"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="glass flex items-center justify-between rounded-xl p-6 text-lg font-bold text-white"
          >
            {cert.label}
            <ArrowUpRight className="text-blue-300" size={20} />
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    {
      label: "reachsimarpreetsingh@gmail.com",
      href: "mailto:reachsimarpreetsingh@gmail.com",
      icon: Mail,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/reach-simarpreetsingh/",
      icon: Linkedin,
    },
    {
      label: "GitHub",
      href: "https://github.com/Simarpreet-2607",
      icon: Github,
    },
  ];

  return (
    <section id="contact" className="section">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="rounded-xl border border-white/10 bg-gradient-to-br from-purple-500/14 to-blue-500/14 p-7 sm:p-10 lg:p-12"
      >
        <p className="eyebrow">Contact</p>
        <h2 className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-6xl">
          Let’s build sharper products from better signals.
        </h2>
        <div className="mt-9 flex flex-wrap gap-3">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/20 px-4 py-3 text-sm font-bold text-white transition hover:border-blue-300/60 hover:bg-white/[0.08]"
            >
              <Icon size={17} /> {label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="min-h-screen overflow-hidden bg-ink text-white"
    >
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-purple-500 to-blue-400"
        style={{ scaleX }}
      />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-white/42">
        © 2026 Simarpreet Singh. Built with React, Tailwind CSS, and Framer
        Motion.
      </footer>
    </motion.main>
  );
}

export default App;
