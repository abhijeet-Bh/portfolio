import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-12 md:py-20 flex flex-col items-center ${className}`}>
      <div className="w-full max-w-5xl mx-auto">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center mb-10 w-full"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-lightest mr-4 break-words whitespace-normal flex-shrink">
              {title}
            </h2>
            <div className="h-[1px] bg-navy-lightest flex-grow max-w-[300px]" />
          </motion.div>
        )}
        <div className="w-full">
          {children}
        </div>
      </div>
    </section>
  );
}
