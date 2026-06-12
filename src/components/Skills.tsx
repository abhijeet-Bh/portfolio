import { Section } from './Section';
import { motion } from 'framer-motion';
import {
  SiJavascript, SiTypescript, SiReact, SiTailwindcss,
  SiRust, SiSpringboot, SiFlutter, SiDocker,
  SiGit, SiFigma
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';

const skills = [
  { name: 'JavaScript (ES6+)', icon: SiJavascript, color: 'group-hover:text-yellow-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'group-hover:text-blue-400' },
  { name: 'React.js', icon: SiReact, color: 'group-hover:text-sky-400' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'group-hover:text-cyan-400' },
  { name: 'Rust', icon: SiRust, color: 'group-hover:text-orange-600' },
  { name: 'Java', icon: FaJava, color: 'group-hover:text-orange-500' },
  { name: 'Spring Boot', icon: SiSpringboot, color: 'group-hover:text-green-400' },
  { name: 'Flutter', icon: SiFlutter, color: 'group-hover:text-cyan-500' },
  { name: 'Docker', icon: SiDocker, color: 'group-hover:text-blue-500' },
  { name: 'AWS', icon: FaAws, color: 'group-hover:text-orange-400' },
  { name: 'Git', icon: SiGit, color: 'group-hover:text-red-500' },
  { name: 'Figma', icon: SiFigma, color: 'group-hover:text-pink-500' }
];

export function Skills() {
  return (
    <Section id="skills" title="Technologies I've been working with">
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 w-full">
        {skills.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="group flex flex-col items-center justify-center p-4 md:p-6 bg-navy-light rounded-xl border border-navy-lightest hover:border-accent/50 hover:shadow-[0_0_20px_rgba(224,49,49,0.15)] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-pink-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"></div>
                <Icon className={`relative z-10 w-10 h-10 text-slate transition-colors duration-300 ${skill.color}`} />
              </div>
              <span className="font-mono text-sm text-slate-light group-hover:text-slate-lightest transition-colors text-center">{skill.name}</span>
            </motion.li>
          );
        })}
      </ul>
    </Section>
  );
}
