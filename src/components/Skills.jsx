import { motion } from 'framer-motion';
import { 
  MonitorSmartphone, Server, Database, Container, 
  TerminalSquare, Blocks, Layers, Feather 
} from 'lucide-react';

export function Skills() {
  const skills = [
    { name: 'Frontend (React/Next)', icon: <MonitorSmartphone size={24} /> },
    { name: 'CSS / Tailwind CSS', icon: <Feather size={24} /> },
    { name: 'UI / UX Design', icon: <Layers size={24} /> },
    { name: 'Backend (Node.js)', icon: <Server size={24} /> },
    { name: 'Bases de données', icon: <Database size={24} /> },
    { name: 'Docker / DevOps', icon: <Container size={24} /> },
    { name: 'Ligne de commande', icon: <TerminalSquare size={24} /> },
    { name: 'Architecture System', icon: <Blocks size={24} /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 relative bg-black/5 dark:bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Compétences Techniques</h2>
          <p className="opacity-70 max-w-2xl mx-auto">
            Une boîte à outils moderne pour construire des applications performantes, évolutives et agréables à utiliser.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="flex items-center gap-4 p-5 rounded-2xl glass hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-colors group cursor-default"
            >
              <div className="p-3 rounded-xl bg-[rgb(var(--foreground))] text-[rgb(var(--background))] group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                {skill.icon}
              </div>
              <span className="font-medium text-sm md:text-base">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
