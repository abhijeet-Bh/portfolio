import { motion } from 'framer-motion';
import { FiMapPin, FiMail } from 'react-icons/fi';

export function Hero() {
  return (
    <section id="hero" className="min-h-[80vh] md:min-h-screen flex flex-col justify-center items-center pt-20 pb-12 w-full">
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-accent font-mono mb-4 text-sm md:text-base">Hi, my name is</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-slate-lightest via-white to-slate-lightest drop-shadow-lg break-words">
            Abhijeet Bhardwaj.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-accent to-pink-500 break-words">
            I build things for the web.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="max-w-2xl text-slate text-base md:text-xl mb-6 leading-relaxed">
            I'm a Software Engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
          </p>
          <div className="flex flex-wrap items-center gap-6 mb-12 text-slate-light font-mono text-sm">
            <div className="flex items-center gap-2 bg-navy-light px-4 py-2 rounded-full border border-navy-lightest shadow-sm">
              <FiMapPin className="text-accent" />
              <span>India</span>
            </div>
            <div className="flex items-center gap-2 bg-navy-light px-4 py-2 rounded-full border border-navy-lightest shadow-sm">
              <FiMail className="text-accent" />
              <span>Available for opportunities</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="w-full sm:w-auto">
          {/* Desktop Button */}
          <a
            href="#projects"
            className="hidden md:inline-flex items-center justify-center gap-2 border-2 border-accent text-accent bg-transparent hover:bg-accent hover:text-white px-8 py-4 rounded font-mono text-base font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(224,49,49,0.3)] hover:shadow-[0_0_25px_rgba(224,49,49,0.6)] hover:-translate-y-1"
          >
            Check out my work!
          </a>
          
          {/* Mobile Button */}
          <button
            onClick={() => window.dispatchEvent(new Event('open-resume'))}
            className="md:hidden inline-flex items-center justify-center gap-2 border-2 border-accent text-accent bg-transparent hover:bg-accent hover:text-white px-6 py-3 rounded font-mono text-sm font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(224,49,49,0.3)] hover:-translate-y-1 w-full cursor-pointer"
          >
            Resume
          </button>
        </div>
        </motion.div>
      </div>
    </section>
  );
}
