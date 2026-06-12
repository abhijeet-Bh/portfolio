import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { OpenSource } from './components/OpenSource';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-navy-main min-h-screen text-slate-light selection:bg-accent selection:text-white overflow-x-hidden w-full relative">
      <Navbar />
      <main className="px-6 md:px-12 lg:px-24 w-full max-w-7xl mx-auto">
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <OpenSource />
      </main>
      <Footer />
    </div>
  );
}

export default App;
