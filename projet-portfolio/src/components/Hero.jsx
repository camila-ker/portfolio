import { motion } from 'framer-motion';
import { ArrowRight, Code2, Briefcase, Mail } from 'lucide-react';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-[100px] -z-10 animate-pulse pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 w-full">
        <motion.div 
          className="flex-1 space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-block py-1 px-3 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-500 text-sm font-medium">
            Disponible pour de nouveaux projets
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            Hello, je suis <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Alex</span><br/>
            Développeur Web.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-[rgb(var(--foreground))] opacity-70 max-w-2xl leading-relaxed">
            Je conçois et développe des expériences web frontend et fullstack modernes, rapides et orientées utilisateur.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
            <a href="#projects" className="group flex items-center gap-2 bg-[rgb(var(--foreground))] text-[rgb(var(--background))] px-6 py-3 rounded-lg font-medium hover:scale-105 active:scale-95 transition-all">
              Voir mes projets
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-3 ml-4">
              <SocialLink href="https://github.com" icon={<Code2 size={22} />} />
              <SocialLink href="https://linkedin.com" icon={<Briefcase size={22} />} />
              <SocialLink href="mailto:contact@example.com" icon={<Mail size={22} />} />
            </div>
          </motion.div>
        </motion.div>

        {/* Optional Graphic / Avatar side */}
        <motion.div 
          className="flex-1 hidden lg:flex justify-center"
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div className="relative w-80 h-80 rounded-3xl overflow-hidden card-glass">
             {/* Une image premium typée Vercel ou un avatar abstrait */}
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                 <div className="w-40 h-40 bg-indigo-500 rounded-full blur-[40px] opacity-60 mix-blend-screen" />
                 <span className="text-6xl absolute font-bold opacity-10 font-mono">{"</>"}</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-[rgb(var(--foreground))] bg-opacity-5 hover:bg-opacity-10 transition-colors border border-[rgba(var(--foreground),0.05)]"
    >
      {icon}
    </a>
  );
}
