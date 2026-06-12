import { useState, useEffect } from 'react';
import { Section } from './Section';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder, FiImage, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const projects = [
  {
    title: 'Hrelix',
    description: 'A comprehensive HR management system streamlining employee onboarding, performance tracking, and payroll processing.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    github: '#',
    external: '#',
    gallery: [
      `${import.meta.env.BASE_URL}hrelix-1.png`,
      `${import.meta.env.BASE_URL}hrelix-2.png`,
      `${import.meta.env.BASE_URL}hrelix-3.png`
    ]
  },
  {
    title: 'Invox',
    description: 'An pocket financial tracker application, to track your expenses income and savings. Get complete insight of your money!',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    github: '#',
    external: '#',
    gallery: [
      `${import.meta.env.BASE_URL}invox-1.png`,
      `${import.meta.env.BASE_URL}invox-2.png`,
      `${import.meta.env.BASE_URL}invox-3.png`
    ]
  },
  {
    title: 'TravlPoint',
    description: 'A travel itinerary planner that helps users organize their trips, discover new destinations, and collaborate with travel buddies.',
    tech: ['React Native', 'Firebase', 'Google Maps API'],
    github: '#',
    external: '#',
    gallery: [
      `${import.meta.env.BASE_URL}travlpoint-1.png`
    ]
  }
];

export function Projects() {
  const [selectedGallery, setSelectedGallery] = useState<string[] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedGallery) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedGallery]);

  const handleNext = () => {
    if (!selectedGallery) return;
    setCurrentImageIndex((prev) => (prev === selectedGallery.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    if (!selectedGallery) return;
    setCurrentImageIndex((prev) => (prev === 0 ? selectedGallery.length - 1 : prev - 1));
  };

  return (
    <Section id="projects" title="Some Things I've Built">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative bg-navy-light/40 rounded-xl p-8 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border border-navy-lightest hover:border-accent/40 hover:shadow-[0_0_30px_rgba(224,49,49,0.15)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
            <div className="flex justify-between items-center mb-8 relative z-10">
              <FiFolder className="text-accent w-12 h-12" />
              <div className="flex gap-4">
                {project.gallery && project.gallery.length > 0 && (
                  <button
                    onClick={() => {
                      setSelectedGallery(project.gallery);
                      setCurrentImageIndex(0);
                    }}
                    className="text-slate hover:text-accent transition-colors cursor-pointer"
                    aria-label="View Gallery"
                  >
                    <FiImage className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                )}
                <a href={project.github} className="text-slate hover:text-accent transition-colors">
                  <FiGithub className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                <a href={project.external} className="text-slate hover:text-accent transition-colors">
                  <FiExternalLink className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-lightest mb-4 group-hover:text-accent transition-colors relative z-10">
              {project.title}
            </h3>
            <p className="text-slate text-base mb-8 flex-grow leading-relaxed relative z-10">
              {project.description}
            </p>

            <ul className="flex flex-wrap gap-3 font-mono text-xs text-slate-light mt-auto relative z-10">
              {project.tech.map((tech, techIdx) => (
                <li key={techIdx} className="bg-navy-main/80 px-3 py-1 rounded-full border border-navy-lightest/50">
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-navy-main/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedGallery(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-slate hover:text-accent transition-colors p-2 bg-navy-light/50 rounded-full hover:bg-navy-light z-10 cursor-pointer"
            >
              <FiX className="w-8 h-8" />
            </button>

            {/* Main Image Container */}
            <div className="relative w-full max-w-5xl h-[60vh] md:h-[75vh] flex items-center justify-center">

              {/* Prev Button */}
              {selectedGallery.length > 1 && (
                <button
                  onClick={handlePrev}
                  className="absolute left-0 md:-left-12 text-slate hover:text-accent transition-colors p-2 bg-navy-light/80 md:bg-transparent rounded-full z-10 cursor-pointer"
                >
                  <FiChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
                </button>
              )}

              {/* Image */}
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={selectedGallery[currentImageIndex]}
                alt={`Screenshot ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_30px_rgba(224,49,49,0.15)] border border-navy-lightest"
              />

              {/* Next Button */}
              {selectedGallery.length > 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-0 md:-right-12 text-slate hover:text-accent transition-colors p-2 bg-navy-light/80 md:bg-transparent rounded-full z-10 cursor-pointer"
                >
                  <FiChevronRight className="w-8 h-8 md:w-12 md:h-12" />
                </button>
              )}
            </div>

            {/* Counter */}
            {selectedGallery.length > 1 && (
              <div className="mt-6 font-mono text-slate text-sm">
                <span className="text-accent">{currentImageIndex + 1}</span> / {selectedGallery.length}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
