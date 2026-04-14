import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function ProjectShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const projects = [
    {
      title: "Qockpit (Qovoltis)",
      category: "Dashboard & Énergie",
      description: "Plateforme moderne de pilotage centralisée pour la gestion en temps réel des bornes de recharge électrique.",
      tech: ["React", "Tailwind CSS", "API REST", "DevOps"],
      color: "from-blue-600 to-indigo-900",
      imageUrl: "/images/qockpit.png.webp",
      link: "#"
    },
    {
      title: "Qontrol (Qovoltis)",
      category: "Interface d'Administration",
      description: "Système d'administration sécurisé pour la configuration et la gestion du matériel Qovoltis (authentification, gestion des droits).",
      tech: ["Laravel", "Node.js", "Sécurité", "Auth", "PhpMyAdmin", "MongoDB", "JavaScript"],
      color: "from-purple-600 to-fuchsia-900",
      imageUrl: "/images/qontrol.png.webp",
      link: "#"
    },
    {
      title: "Portail CROM-TO",
      category: "Site Institutionnel",
      description: "Conception et développement du site officiel du Conseil Régional de l'Ordre des Médecins. Base de données, connexion sécurisée, gestion par le superadmin, annuaire et publications.",
      tech: ["Laravel", "PHP", "PostgreSQL", "JavaScript", "Bootstrap", "PhpMyAdmin"],
      color: "from-cyan-600 to-blue-900",
      imageUrl: "/images/crom.png.webp",
      link: "#"
    },
    {
      title: "VMS Industrie ERP",
      category: "Progiciel de Gestion",
      description: "Déploiement et personnalisation d'une solution Odoo ERP sur-mesure pour le suivi détaillé de la production industrielle et la gestion des chaînes logistiques de VMS Industrie.",
      tech: ["Odoo", "Python", "PostgreSQL", "XML"],
      color: "from-emerald-600 to-teal-900",
      imageUrl: "/images/vms.png.webp",
      link: "#"
    },
    {
      title: "Suroil ERP",
      category: "Big Data & Logistique",
      description: "Implémentation d'un ERP complet (basé sur Odoo), connectant la gestion de l'inventaire des produits Suroil aux expéditions en temps réel.",
      tech: ["Odoo", "Python", "PostgreSQL"],
      color: "from-orange-600 to-red-900",
      imageUrl: "/images/suroil.png.webp",
      link: "#"
    },
    {
      title: "AFZIM Hôtel",
      category: "Hôtellerie & Luxe",
      description: "Conception d'une plateforme web haut de gamme de réservation et de gestion hôtelière. Interfaces utilisateurs premium associées à un robuste système de back-office.",
      tech: ["React", "Node.js", "MySQL", "Tailwind CSS"],
      color: "from-amber-600 to-yellow-900",
      imageUrl: "/images/afzim.png.webp",
      link: "#"
    }
  ];

  return (
    <section id="work" ref={containerRef} className="relative py-32 z-10 px-6 md:px-12 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 md:mb-32 sticky top-32 z-20">
          <motion.h2
            className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mix-blend-difference"
            style={{
              x: useTransform(scrollYProgress, [0, 1], [0, -200])
            }}
          >
            Sélection <br /><span className="text-white/40">Projets</span>
          </motion.h2>
        </div>

        <div className="space-y-32 md:space-y-48 pb-32">
          {projects.map((project, index) => {
            const yOffset = useTransform(scrollYProgress, [0, 1], [100, -100 * (index % 3 + 1)]);

            return (
              <motion.div
                key={index}
                style={{ y: yOffset }}
                className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch gap-8 md:gap-16 group`}
              >
                {/* Image Container */}
                <div className="w-full md:w-3/5 aspect-[4/3] rounded-[40px] overflow-hidden relative flex-shrink-0">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10 duration-700 hover:backdrop-blur-sm shadow-[0_0_50px_rgba(0,0,0,0.5)]" />

                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 opacity-80"
                      style={{ background: project.image }}
                    />
                  )}

                  {/* Glass overlay details on hover */}
                  <div className="absolute inset-x-0 bottom-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                    <div className="flex gap-4">
                      <a href={project.link} className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform shadow-[0_4px_15px_rgba(255,255,255,0.3)]">
                        <ArrowUpRight size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Text Info */}
                <div className="w-full md:w-2/5 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm font-mono text-white/50 tracking-widest uppercase">0{index + 1}</span>
                    <span className="w-12 h-[1px] bg-white/20" />
                    <span className="text-sm font-mono text-indigo-400 tracking-widest uppercase">{project.category}</span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all duration-500">
                    {project.title}
                  </h3>

                  <p className="text-lg text-white/60 mb-8 leading-relaxed font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="px-4 py-2 rounded-full border border-white/10 text-sm font-medium bg-white/5 text-white/80 shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
