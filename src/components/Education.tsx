import { Section } from './Section';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

const education = [
  {
    school: 'Vellore Institute Of Technology',
    degree: 'B.TECH. IN COMPUTER SCIENCE & ENGINEERING',
    date: '2021 - 2025',
    description: 'Vellore, Tamil Nadu',
    kpi: '8.20/10 CGPA'
  },
  {
    school: 'DAV Public School',
    degree: 'Intermediate (XII) - CBSE',
    date: 'Completed',
    description: 'Hazaribagh, Jharkhand. Physics, Chemistry & Mathematics',
    kpi: '78.4%'
  },
  {
    school: 'Don Bosco Academy',
    degree: 'Matriculation (X) - ICSE',
    date: 'Completed',
    description: 'Ranchi, Jharkhand. Science with Mathematics',
    kpi: '87.6%'
  }
];

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid gap-6 w-full">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative p-6 md:p-8 rounded-lg bg-navy-light/50 border border-navy-lightest hover:border-accent/50 shadow-lg hover:shadow-[0_0_20px_rgba(224,49,49,0.15)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
            <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-navy-main rounded-full border border-navy-lightest group-hover:border-accent/30 transition-colors">
                  <FiAward className="text-accent w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-lightest">{edu.school}</h3>
              </div>
              <span className="font-mono text-sm text-accent bg-accent/10 px-3 py-1 rounded-full">{edu.date}</span>
            </div>
            <div className="ml-14">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <p className="text-slate-lightest font-semibold mb-2 text-lg">{edu.degree}</p>
                  <p className="text-slate leading-relaxed">{edu.description}</p>
                </div>
                {edu.kpi && (
                  <div className="flex flex-col items-end shrink-0">
                    <span className="text-accent font-bold text-xl md:text-2xl">{edu.kpi.split(' ')[0]}</span>
                    {edu.kpi.includes(' ') && <span className="text-slate text-xs font-mono">{edu.kpi.split(' ')[1]}</span>}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
