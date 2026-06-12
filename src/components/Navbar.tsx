import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload } from 'react-icons/fi';

const navLinks = [
  { name: 'About', url: '#hero' },
  { name: 'Experience', url: '#experience' },
  { name: 'Work', url: '#projects' },
  { name: 'Open Source', url: '#opensource' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    if (isResumeOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isResumeOpen]);

  useEffect(() => {
    const handleOpenResume = () => setIsResumeOpen(true);
    window.addEventListener('open-resume', handleOpenResume);
    return () => window.removeEventListener('open-resume', handleOpenResume);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-navy-main/85 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
        }`}
    >
      <nav className="flex justify-between items-center px-6 md:px-12 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-mono text-xl font-bold"
        >
          <a href="/">AB</a>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          <ol className="flex space-x-8">
            {navLinks.map((link, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <a
                  href={link.url}
                  className="text-slate-light text-sm font-mono hover:text-accent transition-colors"
                >
                  <span className="text-accent mr-1">0{i + 1}.</span>
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ol>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
          >
            <button
              onClick={() => setIsResumeOpen(true)}
              className="border border-accent text-accent px-4 py-2 rounded text-sm font-mono hover:bg-accent/10 transition-colors cursor-pointer"
            >
              Resume
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Resume Modal */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-navy-main/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsResumeOpen(false)}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-slate hover:text-accent transition-colors p-2 bg-navy-light/50 rounded-full hover:bg-navy-light"
            >
              <FiX className="w-8 h-8" />
            </button>

            {/* PDF Viewer */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300, delay: 0.1 }}
              className="w-full max-w-5xl h-[70vh] md:h-[80vh] bg-navy-light rounded-xl overflow-hidden shadow-[0_0_50px_rgba(224,49,49,0.15)] border border-navy-lightest relative"
            >
              {/* Fallback text for mobile browsers that don't support iframe PDF rendering */}
              <iframe
                src="/resume.pdf"
                className="w-full h-full border-none"
                title="Resume PDF"
              >
                <div className="w-full h-full flex items-center justify-center p-8 text-center text-slate">
                  Your browser does not support embedded PDFs. Please use the download button below.
                </div>
              </iframe>
            </motion.div>

            {/* Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="mt-8"
            >
              <a
                href="/resume.pdf"
                download="Abhijeet_Bhardwaj_Resume.pdf"
                className="flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-mono text-sm md:text-base font-semibold hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(224,49,49,0.4)] transition-all duration-300 hover:-translate-y-1"
              >
                <FiDownload className="w-5 h-5" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
