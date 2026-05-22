import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload,
  FaExternalLinkAlt,
  FaPython,
  FaReact,
  FaDatabase,
  FaChartBar,
  FaMoon,
  FaSun,
} from "react-icons/fa";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const skills = [
    "Python",
    "Machine Learning",
    "Data Analytics",
    "SQL",
    "Power BI",
    "React",
    "Node.js",
    "MongoDB",
  ];

  const projects = [
    {
      title: "HighwayGo LK",
      desc: "A MERN mobile app for Sri Lankan highway bus booking with authentication, seat booking, and real-time GPS bus tracking features.",
      image: "/HighwayGO.png",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/dmrs2003/highwaygo-lk-app.git",
      demo: "https://github.com/dmrs2003/highwaygo-lk-app.git",
    },

    {
      title: "Student Performance Prediction",
      desc: "Machine learning system that predicts student performance using academic data.",
      image: "/StudentPerformance.png",
      tech: ["Python", "Pandas", "ML"],
      github: "#",
      demo: "#",
    },

    {
      title: "Sales Analytics Dashboard",
      desc: "Interactive dashboard for business analytics and revenue visualization.",
      image: "/sales.png",
      tech: ["Power BI", "SQL", "Excel"],
      github: "#",
      demo: "#",
    },

    {
      title: "Plant Disease Detection System",
      desc: "AI-powered web app for detecting plant leaf diseases using Deep Learning and MobileNetV2.",
      image: "/PlantDisease.png",
      tech: ["Python", "TensorFlow", "MobileNetV2"],
      github: "https://github.com/dmrs2003/plant_disease_detection.git",
      demo: "https://github.com/dmrs2003/plant_disease_detection.git",
    },
  ];

  const theme =
    darkMode
      ? "bg-[#020617] text-white"
      : "bg-slate-100 text-slate-950";

  const card =
    darkMode
      ? "border-white/10 bg-white/5"
      : "border-slate-200 bg-white shadow-lg";

  const text =
    darkMode
      ? "text-slate-300"
      : "text-slate-700";

  return (
    <div className={`min-h-screen ${theme}`}>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 z-50 w-full border-b backdrop-blur-xl ${
          darkMode
            ? "border-white/10 bg-[#020617]/80"
            : "border-slate-200 bg-white/80"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-bold">
            Ramindu<span className="text-cyan-400">.dev</span>
          </h1>

          <div className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#home" className="hover:text-cyan-400">
              Home
            </a>

            <a href="#about" className="hover:text-cyan-400">
              About
            </a>

            <a href="#skills" className="hover:text-cyan-400">
              Skills
            </a>

            <a href="#projects" className="hover:text-cyan-400">
              Projects
            </a>

            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full border border-cyan-400 px-4 py-2 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pt-28 md:grid-cols-2"
      >
        {/* LEFT SIDE */}
        <div>
          <p className="mb-5 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-cyan-400">
            Data Science Undergraduate
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            Hi, I'm{" "}
            <span className="text-cyan-400">
              Ramindu Sulakkana
            </span>
          </h1>

          <p className={`mt-7 max-w-2xl text-lg leading-8 ${text}`}>
            I create intelligent, data-driven solutions using
            Machine Learning, Data Analytics, and modern
            full-stack web technologies.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-2xl bg-cyan-400 px-7 py-4 font-bold text-slate-950 hover:bg-cyan-300"
            >
              View Projects
            </a>

            <a
              href="/Ramindu Sulakkana.pdf"
              className="flex items-center gap-2 rounded-2xl border border-cyan-400 px-7 py-4 font-bold text-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
            >
              <FaDownload />
              Download CV
            </a>
          </div>

          <div className="mt-8 flex gap-4 text-xl">
            <a
              href="https://github.com/dmrs2003"
              className={`rounded-full border p-4 hover:text-cyan-400 ${card}`}
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ramindu-sulakkana-737978317/"
              className={`rounded-full border p-4 hover:text-cyan-400 ${card}`}
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:ramindusulakkana08@gmail.com"
              className={`rounded-full border p-4 hover:text-cyan-400 ${card}`}
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* PROFILE IMAGE */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-[3rem] bg-cyan-400/20 blur-3xl"></div>

          <div
            className={`relative rounded-[3rem] border p-6 ${card}`}
          >
            <img
              src="/profile.png"
              alt="Ramindu"
              className="h-[430px] w-full rounded-[2.5rem] object-cover"
            />

            {/* FLOATING BADGES */}
            <div className="absolute -left-10 top-8 rounded-2xl bg-cyan-400 px-6 py-4 text-xl font-bold text-slate-950 shadow-2xl">
              Python
            </div>

            <div className="absolute -right-10 top-28 rounded-2xl bg-white px-6 py-4 text-xl font-bold text-slate-950 shadow-2xl">
              AI / ML
            </div>

            <div className="absolute -bottom-8 left-6 rounded-2xl border border-cyan-400 bg-slate-950 px-6 py-4 text-xl font-bold text-cyan-400 shadow-2xl">
              Data Analytics
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-24"
      >
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
          About Me
        </h2>

        <p className={`max-w-4xl text-lg leading-9 ${text}`}>
          I am a passionate Data Science undergraduate with
          interests in Artificial Intelligence, Machine
          Learning, Data Analytics, and Full Stack
          Development. I enjoy solving real-world problems
          using technology and data-driven solutions.
        </p>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            [FaPython, "Machine Learning"],
            [FaChartBar, "Data Analytics"],
            [FaDatabase, "Database Systems"],
            [FaReact, "Web Development"],
          ].map(([Icon, title]) => (
            <div
              key={title}
              className={`rounded-3xl border p-7 hover:border-cyan-400 ${card}`}
            >
              <Icon className="mb-5 text-4xl text-cyan-400" />

              <h3 className="text-xl font-bold">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="mx-auto max-w-7xl px-6 py-24"
      >
        <h2 className="mb-10 text-4xl font-bold md:text-5xl">
          Skills
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className={`rounded-2xl border p-6 text-lg font-semibold hover:border-cyan-400 ${card}`}
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="mx-auto max-w-7xl px-6 py-24"
      >
        <h2 className="mb-10 text-4xl font-bold md:text-5xl">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`overflow-hidden rounded-3xl border transition duration-500 hover:-translate-y-2 hover:border-cyan-400 ${card}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-80 w-full object-contain bg-slate-900 p-2 transition duration-500 hover:scale-105"
              />

              <div className="p-7">
                <h3 className="mb-4 text-2xl font-bold text-cyan-400">
                  {project.title}
                </h3>

                <p className={`mb-5 leading-7 ${text}`}>
                  {project.desc}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-cyan-400"
                  >
                    GitHub <FaGithub />
                  </a>

                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-cyan-400"
                  >
                    Demo <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 py-24"
      >
        <h2 className="mb-10 text-5xl font-black text-blue-500">
          Contact
        </h2>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT CONTACT */}
          <div className="rounded-xl bg-slate-800 p-8">
            <p className="mb-10 text-xl leading-9 text-slate-300">
              I'm always open to discussing new projects,
              creative ideas, or opportunities to be part of
              your visions.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-blue-500/20 text-3xl text-blue-400">
                  <FaEnvelope />
                </div>

                <p className="text-lg text-slate-300">
                  ramindusulakkana08@gmail.com
                </p>
              </div>

              <div className="flex items-center gap-5">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-blue-500/20 text-3xl text-blue-400">
                  <FaPhone />
                </div>

                <p className="text-lg text-slate-300">
                  +94 76 498 8570
                </p>
              </div>

              <div className="flex items-center gap-5">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-blue-500/20 text-3xl text-blue-400">
                  <FaMapMarkerAlt />
                </div>

                <p className="text-lg text-slate-300">
                  Sri Lanka
                </p>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <form className="space-y-7">
            <div>
              <label className="mb-3 block font-semibold">
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-slate-600 bg-slate-800 px-6 py-5 text-white outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-3 block font-semibold">
                Email
              </label>

              <input
                type="email"
                placeholder="username@domain.com"
                className="w-full rounded-xl border border-slate-600 bg-slate-800 px-6 py-5 text-white outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-3 block font-semibold">
                Message
              </label>

              <textarea
                placeholder="Your message..."
                className="h-56 w-full resize-none rounded-xl border border-slate-600 bg-slate-800 px-6 py-5 text-white outline-none focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full rounded-xl bg-blue-600 px-6 py-5 font-bold text-white hover:bg-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className={`border-t py-8 text-center ${
          darkMode
            ? "border-white/10 text-slate-400"
            : "border-slate-200 text-slate-600"
        }`}
      >
        © 2026 Ramindu Sulakkana. Built with React &
        Tailwind CSS.
      </footer>
    </div>
  );
}