import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { FiBriefcase } from 'react-icons/fi';

const experiences = [
  {
    company: 'TCS',
    title: 'Software Engineer',
    date: 'Jan 08, 2026 - Present',
    details: [
      'Working as a full-time Software Engineer, contributing to scalable web and enterprise applications.',
      'Collaborating with cross-functional teams to deliver high-quality software solutions.',
      'Utilizing modern technologies like React, Node.js, and Cloud services to enhance performance and user experience.'
    ],
    skills: ['Java', 'Spring Boot', 'React', 'Cloud Services']
  },
  {
    company: 'Together',
    title: 'Software Engineer Intern',
    date: '2025',
    details: [
      'Developed and maintained features for the main web application using React and TypeScript.',
      'Improved the accessibility and responsiveness of the user interface.',
      'Participated in code reviews and agile ceremonies.'
    ],
    skills: ['Flutter', 'Dart', 'Mobile Dev']
  },
  {
    company: 'Gloroots',
    title: 'Frontend Intern',
    date: '2024',
    details: [
      'Built interactive UI components using React and Tailwind CSS.',
      'Integrated RESTful APIs to fetch and display dynamic data.',
      'Optimized application performance reducing load times by 20%.'
    ],
    skills: ['Django', 'Python', 'REST APIs', 'Backend Dev']
  },
  {
    company: 'GDSC',
    title: 'Core Member',
    date: '2023 - 2024',
    details: [
      'Organized and hosted workshops on web development and cloud computing.',
      'Mentored junior students and helped them build their first web applications.',
      'Collaborated with other core members to plan the annual tech fest.'
    ],
    skills: ['Leadership', 'Event Management', 'Mobile App Dev']
  }
];

export function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section id="experience" title="Where I've Worked">
      <div className="flex flex-col md:flex-row gap-8 w-full">
        {/* Tabs */}
        <div className="flex overflow-x-auto md:flex-col md:w-48 border-b md:border-b-0 md:border-l border-navy-lightest shrink-0 scrollbar-hide">
          {experiences.map((exp, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-4 text-left font-mono text-sm transition-all duration-300 border-b-2 md:border-b-0 md:border-l-2 whitespace-nowrap flex items-center gap-3 ${
                activeTab === idx
                  ? 'text-accent border-accent bg-navy-lightest/50 shadow-[inset_4px_0_0_0_rgba(224,49,49,0.1)]'
                  : 'text-slate hover:text-slate-light hover:bg-navy-light border-navy-lightest'
              } md:-ml-[2px]`}
            >
              <FiBriefcase className={activeTab === idx ? 'text-accent' : 'text-slate'} />
              {exp.company}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="min-h-[300px] w-full bg-navy-light/30 p-6 md:p-8 rounded-lg border border-navy-lightest/50 shadow-lg">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-slate-lightest mb-2">
              {experiences[activeTab].title}{' '}
              <span className="text-accent relative">
                @ {experiences[activeTab].company}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent/30"></span>
              </span>
            </h3>
            <p className="text-sm font-mono text-slate mb-6">
              {experiences[activeTab].date}
            </p>
            <ul className="space-y-4 mb-8">
              {experiences[activeTab].details.map((detail, idx) => (
                <li key={idx} className="flex text-slate">
                  <span className="text-accent mr-3 mt-1 text-sm">▹</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            
            {experiences[activeTab].skills && (
              <div className="mt-auto">
                <ul className="flex flex-wrap gap-3 font-mono text-xs text-slate-light">
                  {experiences[activeTab].skills.map((skill, skillIdx) => (
                    <li key={skillIdx} className="bg-navy-main/80 px-3 py-1 rounded-full border border-navy-lightest/50">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
