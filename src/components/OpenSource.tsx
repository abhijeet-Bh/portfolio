import { Section } from './Section';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiGitPullRequest } from 'react-icons/fi';

const contributions = [
  {
    title: 'Awesome Music Player',
    description: 'Premium Desktop Audio Environment. Contributed to core features, performance improvements, and bug fixes for this comprehensive music player application.',
    tech: ['Rust', 'TypeScript', 'React', 'Tauri'],
    github: 'https://github.com/S1avv/awesome-music-player',
    external: 'https://github.com/S1avv/awesome-music-player'
  }
];

export function OpenSource() {
  return (
    <Section id="opensource" title="Open Source Contributions">
      <div className="grid gap-6">
        {contributions.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative bg-navy-light/40 rounded-xl p-6 md:p-8 hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row gap-6 border border-navy-lightest hover:border-accent/40 hover:shadow-[0_0_30px_rgba(224,49,49,0.15)] items-start md:items-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
            
            <div className="bg-navy-main/80 p-4 rounded-full border border-navy-lightest/50 relative z-10">
              <FiGitPullRequest className="text-accent w-8 h-8" />
            </div>

            <div className="flex-grow relative z-10">
              <h3 className="text-xl md:text-2xl font-bold text-slate-lightest mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-slate text-sm md:text-base mb-4 leading-relaxed">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-3 font-mono text-xs text-slate-light">
                {project.tech.map((tech, techIdx) => (
                  <li key={techIdx} className="bg-navy-main/80 px-3 py-1 rounded-full border border-navy-lightest/50">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 mt-4 md:mt-0 relative z-10 self-start md:self-center">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-accent transition-colors p-2 hover:bg-navy-main rounded-full">
                <FiGithub className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-accent transition-colors p-2 hover:bg-navy-main rounded-full">
                <FiExternalLink className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
