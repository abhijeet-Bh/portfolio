import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export function Footer() {
  return (
    <footer className="py-8 text-center flex flex-col items-center bg-navy-light/30 border-t border-navy-lightest/50 mt-12 w-full">
      <div className="flex space-x-6 mb-6 md:hidden">
        <a href="https://github.com/abhijeet-bh" className="text-slate hover:text-accent transition-colors">
          <FiGithub className="w-5 h-5" />
        </a>
        <a href="#" className="text-slate hover:text-accent transition-colors">
          <FiLinkedin className="w-5 h-5" />
        </a>
        <a href="#" className="text-slate hover:text-accent transition-colors">
          <FiTwitter className="w-5 h-5" />
        </a>
      </div>
      <a 
        href="https://github.com/abhijeet-bh" 
        className="font-mono text-sm text-slate hover:text-accent transition-colors"
      >
        Designed & Built by Abhijeet Bhardwaj
      </a>
    </footer>
  );
}
