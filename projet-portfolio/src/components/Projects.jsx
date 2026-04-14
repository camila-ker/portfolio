import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "Clynexa",
      description: "Plateforme robuste et solution logicielle sur-mesure déployée pour Clynexa, axée sur la sécurité et la scalabilité des données.",
      techs: ["React", "Node.js", "Docker", "Sécurité"],
      github: "#",
      demo: "#",
      imageUrl: "/images/clynexa.png.png",
      placeholderColor: "from-blue-500 to-indigo-600"
    },
    {
      title: "Smart Odoo",
      description: "Déploiement et intégration intelligente d'une architecture réseau ERP Odoo pour une gestion centralisée et sécurisée.",
      techs: ["Odoo", "Python", "Réseau", "PostgreSQL"],
      github: "#",
      demo: "#",
      imageUrl: "/images/smart-odoo.png.webp",
      placeholderColor: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Derniers Projets</h2>
          <div className="w-16 h-1 bg-indigo-500 rounded-full mb-6"></div>
          <p className="opacity-70 max-w-2xl">
            Une sélection de mes travaux récents, combinant esthétique visuelle et robustesse technique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col rounded-3xl overflow-hidden glass border border-[rgba(var(--foreground),0.05)] hover:border-indigo-500/30 transition-all hover:shadow-2xl hover:shadow-indigo-500/10"
    >
      {/* Image Placeholder */}
      <div className={`h-56 w-full ${project.imageUrl ? 'bg-black' : 'bg-gradient-to-br ' + project.placeholderColor} relative overflow-hidden`}>
        {project.imageUrl && (
          <img src={project.imageUrl} alt={project.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        )}
        <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-transparent" />
        <div className="absolute bottom-4 right-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
           <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-white/90 text-black p-3 rounded-full inline-flex hover:scale-110 transition-transform shadow-lg">
             <ExternalLink size={20} />
           </a>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
        <p className="opacity-70 text-sm mb-6 flex-1 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techs.map((tech, i) => (
            <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-md bg-[rgba(var(--foreground),0.05)] border border-[rgba(var(--foreground),0.1)]">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-[rgba(var(--foreground),0.08)]">
          <a href={project.github} className="text-sm font-medium opacity-70 hover:opacity-100 hover:text-indigo-500 flex items-center gap-2 transition-colors">
            <Code2 size={16} /> Code Source
          </a>
        </div>
      </div>
    </motion.div>
  );
}
