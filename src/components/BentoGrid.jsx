import { motion } from 'framer-motion';
import { Mail, MapPin, Terminal, MonitorPlay, Zap, ArrowUpRight, Code2 } from 'lucide-react';

export function BentoGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <section id="about" className="relative px-6 md:px-12 py-32 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 auto-rows-[250px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* About Card - Large */}
          <motion.div variants={cardVariants} className="card-glass rounded-3xl p-8 col-span-1 md:col-span-4 lg:col-span-4 row-span-1 md:row-span-2 flex flex-col justify-end group overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700">
               <Code2 size={200} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 relative z-10">Créatrice Numérique & Full-stack</h2>
            <p className="text-lg md:text-xl text-white/70 max-w-xl relative z-10 leading-relaxed font-light">
              Forte d'un Master en réseaux et systèmes embarqués, je combine de solides bases techniques avec des compétences approfondies en développement Full-stack, DevOps et intégration de solutions ERP comme Odoo. Je réalise des projets web complets, tout en portant également des initiatives entrepreneuriales innovantes.
            </p>
          </motion.div>

          {/* Social / Contact Links */}
          <motion.div variants={cardVariants} className="card-glass rounded-3xl p-6 col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-4 group">
             <a href="mailto:hello@example.com" className="flex-1 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors flex items-center justify-between px-6 p-4">
                <div className="flex items-center gap-4">
                  <Mail className="text-indigo-400" />
                  <span className="font-medium text-lg">Email</span>
                </div>
                <ArrowUpRight className="opacity-50 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
             </a>
             <a href="https://github.com" className="flex-1 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors flex items-center justify-between px-6 p-4">
                <div className="flex items-center gap-4">
                  <Code2 className="text-cyan-400" />
                  <span className="font-medium text-lg">GitHub</span>
                </div>
                <ArrowUpRight className="opacity-50 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
             </a>
          </motion.div>

          {/* Location Focus */}
          <motion.div variants={cardVariants} className="card-glass rounded-3xl p-8 col-span-1 md:col-span-2 lg:col-span-2 flex flex-col justify-between items-center text-center overflow-hidden relative group">
             <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <MapPin size={48} strokeWidth={1} className="text-white/50 group-hover:text-white transition-colors duration-500" />
             <div>
                <p className="text-white/60 font-medium">Basée à</p>
                <p className="text-2xl font-bold">Tizi Ouzou (UMMTO)</p>
                <p className="text-sm font-mono text-indigo-400 mt-2">Remote disponible</p>
             </div>
          </motion.div>

          {/* Tech Stack Mini */}
          <motion.div variants={cardVariants} className="card-glass rounded-3xl p-8 col-span-1 md:col-span-4 lg:col-span-4 flex flex-col justify-center">
             <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="flex-1">
                 <h3 className="text-2xl font-bold mb-2">Stack Ultime</h3>
                 <p className="text-white/60">Maîtrise complète de l'écosystème web et réseau pour des solutions sécurisées de bout en bout.</p>
               </div>
               <div className="flex gap-4 md:gap-8 justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                      <Terminal className="text-cyan-400" size={32} />
                    </div>
                    <span className="text-sm text-white/50 font-mono">Backend</span>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                      <MonitorPlay size={32} className="text-purple-400" />
                    </div>
                    <span className="text-sm text-white/50 font-mono">Frontend</span>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                      <Zap size={32} className="text-yellow-400" />
                    </div>
                    <span className="text-sm text-white/50 font-mono">Odoo/ERP</span>
                  </div>
               </div>
             </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
