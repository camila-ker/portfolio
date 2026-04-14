import { motion } from 'framer-motion';
import { 
  FileJson, Server, Globe2, Layout, 
  Terminal, Database, Box, ShieldCheck, 
  Settings, PenTool, GitBranch, Share2 
} from 'lucide-react';

export function ToolsGrid() {
  // Adding explicitly requested tools + existing ones
  const tools = [
    { name: "React", icon: <Layout /> },
    { name: "Laravel", icon: <Server /> },
    { name: "Django", icon: <FileJson /> },
    { name: "Node.js", icon: <Globe2 /> },
    { name: "PHP", icon: <Terminal /> },
    { name: "Bases de données (SQL)", icon: <Database /> },
    { name: "DevOps", icon: <Box /> },
    { name: "Docker", icon: <Box /> },
    { name: "API REST", icon: <Share2 /> },
    { name: "Sécurité", icon: <ShieldCheck /> },
    { name: "Git / GitHub", icon: <GitBranch /> },
    { name: "Réseaux (OSPF)", icon: <Settings /> }
  ];

  return (
    <section id="tools" className="relative px-6 md:px-12 py-32 z-10 bg-gradient-to-b from-transparent to-black/50 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center justify-center flex flex-col md:flex-row gap-16 items-center">
        
        <div className="flex-1 text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter uppercase"
          >
            Outils <br/><span className="text-white/40">& Code</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-lg text-white/60 max-w-md leading-relaxed"
          >
            Une stack technique riche alliant le développement web complet (PHP, Django, React, Laravel) avec des notions poussées en réseaux, sécurité, API et DevOps.
          </motion.p>
        </div>

        <motion.div 
          className="flex-[2] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
             hidden: { opacity: 0 },
             visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
          }}
        >
          {tools.map((tool, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200 } }
              }}
              className="card-glass border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/5 hover:border-indigo-500/50 transition-all cursor-default group"
            >
              <div className="text-white/40 group-hover:text-indigo-400 transition-colors duration-300">
                {tool.icon}
              </div>
              <span className="font-medium text-sm text-center text-white/70 group-hover:text-white transition-colors">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
