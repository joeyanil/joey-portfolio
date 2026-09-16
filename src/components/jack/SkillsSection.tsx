import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaNpm,
  FaLinux,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiVite,
  SiMysql,
  SiFirebase,
  SiC,
  SiCplusplus,
  SiPhp,
  SiGnubash,
  SiJson,
  SiXml,
  SiMarkdown,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiRedux,
  SiNextdotjs,
  SiBootstrap,
  SiJquery,
  SiGitlab,
  SiDocker,
  SiNetlify,
  SiVercel,
} from "react-icons/si";

const row1 = [
  { Icon: FaHtml5, name: "HTML5", color: "#E34F26" },
  { Icon: FaCss3Alt, name: "CSS3", color: "#1572B6" },
  { Icon: FaJs, name: "JavaScript", color: "#F7DF1E" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Icon: FaJava, name: "Java", color: "#F89820" },
  { Icon: SiC, name: "C", color: "#A8B9CC" },
  { Icon: SiCplusplus, name: "C++", color: "#00599C" },
  { Icon: FaPython, name: "Python", color: "#3776AB" },
  { Icon: SiMysql, name: "SQL", color: "#4479A1" },
  { Icon: SiPhp, name: "PHP", color: "#777BB4" },
  { Icon: SiGnubash, name: "Bash", color: "#4EAA25" },
  { Icon: SiJson, name: "JSON", color: "#FFFFFF" },
  { Icon: SiXml, name: "XML", color: "#FF6600" },
  { Icon: SiMarkdown, name: "Markdown", color: "#FFFFFF" },
  { Icon: FaNodeJs, name: "Node.js", color: "#339933" },
];

const row2 = [
  { Icon: FaReact, name: "React", color: "#61DAFB" },
  { Icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { Icon: SiFramer, name: "Framer Motion", color: "#0055FF" },
  { Icon: SiVite, name: "Vite", color: "#646CFF" },
  { Icon: FaGitAlt, name: "Git", color: "#F05032" },
  { Icon: FaGithub, name: "GitHub", color: "#FFFFFF" },
  { Icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { Icon: SiExpress, name: "Express", color: "#FFFFFF" },
  { Icon: SiPostman, name: "Postman", color: "#FF6C37" },
  { Icon: FaNpm, name: "npm", color: "#CB3837" },
  { Icon: FaLinux, name: "Linux", color: "#FCC624" },
  { Icon: SiRedux, name: "Redux", color: "#764ABC" },
];

const row3 = [
  { Icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
  { Icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
  { Icon: SiJquery, name: "jQuery", color: "#0769AD" },
  { Icon: SiGitlab, name: "GitLab", color: "#FC6D26" },
  { Icon: SiDocker, name: "Docker", color: "#2496ED" },
  { Icon: SiNetlify, name: "Netlify", color: "#00C7B7" },
  { Icon: SiVercel, name: "Vercel", color: "#FFFFFF" },
];

function SkillRow({ skills, reverse = false }: { skills: typeof row1; reverse?: boolean }) {
  return (
    <motion.div
      animate={{
        x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
      className="flex gap-6 whitespace-nowrap"
    >
      {[...skills, ...skills].map((skill, index) => {
        const Icon = skill.Icon;

        return (
          <div
            key={index}
            className="
              flex items-center gap-4
              px-7 py-4
              rounded-full
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-md
              hover:bg-white/[0.06]
              transition-all duration-300
              shrink-0
            "
          >
            <Icon size={36} color={skill.color} />

            <span className="text-white font-medium text-lg">{skill.name}</span>
          </div>
        );
      })}
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 overflow-hidden" style={{ background: "#0C0C0C" }}>
      <FadeIn y={40}>
        <h2
          className="
            hero-heading
            font-black
            uppercase
            leading-none
            tracking-tight
            text-center
            text-white
            mb-20
          "
          style={{
            fontSize: "clamp(3rem, 12vw, 160px)",
          }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-8">
        <SkillRow skills={row1} />

        <SkillRow skills={row2} reverse />

        <SkillRow skills={row3} />
      </div>
    </section>
  );
}
