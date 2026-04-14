import { motion } from 'framer-motion';

export function Timeline() {
  const academic = [
    {
      year: "2025",
      degree: "Formation Full-stack",
      school: "Udemy (En ligne)",
      description: "Formation complète sur les technologies web frontend et backend modernes."
    },
    {
      year: "2024",
      degree: "Certificat Formation Langue Anglaise (B2+)",
      school: "Bridgeway School",
      description: ""
    },
    {
      year: "2024",
      degree: "Certificat Formation Odoo",
      school: "",
      description: ""
    },
    {
      year: "2023",
      degree: "Master Réseaux, Mobilités et Systèmes Embarqués",
      school: "UMMTO",
      description: ""
    },
    {
      year: "2022",
      degree: "Certificat en Deep Learning",
      school: "NVIDIA",
      description: ""
    },
    {
      year: "2021",
      degree: "Licence en Système Informatique",
      school: "UMMTO",
      description: ""
    },
    {
      year: "2018",
      degree: "Certificat en langage C++",
      school: "École technique",
      description: ""
    },
    {
      year: "2018",
      degree: "Baccalauréat Filière Scientifique",
      school: "",
      description: ""
    }
  ];

  const professional = [
    {
      year: "Nov 2025 - Présent",
      role: "Développeur Web",
      company: "Techitaway",
      description: "Employée en tant que développeur web."
    },
    {
      year: "Nov 2025 - Présent",
      role: "Développeur",
      company: "Qovoltis (À distance)",
      description: "Travail à distance au sein de Qovoltis."
    },
    {
      year: "Sep 2025 - Présent",
      role: "Porteuse de projet innovant (Clynexa)",
      company: "UMMTO",
      description: "Solution intelligente pour faciliter le quotidien des médecins."
    },
    {
      year: "Jul 2025 - Présent",
      role: "Membre de TriNova-TECH",
      company: "TriNova-TECH",
      description: ""
    },
    {
      year: "Mars 2025 - Présent",
      role: "Auto-entrepreneure Développement Full-stack",
      company: "Indépendant",
      description: "Réalisation de projets web pour clients privés. Spécialisation en intégration front et back-end avec gestion autonome des missions."
    },
    {
      year: "Nov 2024",
      role: "Développeur Odoo",
      company: "New Idea IT",
      description: "Employée en tant que développeur Odoo."
    },

    {
      year: "Jan 2024 - Présent",
      role: "Free-lancer Web",
      company: "Indépendant",
      description: "Réalisation d'un site web dynamique (React, Laravel, PostgreSQL, PHP)."
    },
    {
      year: "Nov 2023",
      role: "Stagiaire Odoo",
      company: "Smart Odoo",
      description: "Stagiaire à temps plein."
    },
    {
      year: "Jan 2023",
      role: "Développeur système embarqué",
      company: "UMMTO",
      description: "Conception d’un rover autonome à détection et évitement d’obstacles."
    },
    {
      year: "Juin 2022",
      role: "Ingénierie Réseaux",
      company: "UMMTO",
      description: "Établissement d’un réseau d’entreprise avec routeurs et RIP/OSPF."
    },
    {
      year: "Juin 2021",
      role: "Développeur Web",
      company: "UMMTO",
      description: "Réalisation d’un site web de gestion d'hôtel (PHP, MySQL, HTML, CSS, JS)."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="timeline" className="relative px-6 md:px-12 py-32 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter uppercase text-center md:text-left">
          Parcours <span className="text-white/40">Profil</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Academic Timeline */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
            <h3 className="text-2xl font-bold mb-12 text-indigo-400 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-indigo-500/50" /> Académique
            </h3>
            <div className="relative border-l border-white/10 ml-4 space-y-12">
              {academic.map((item, idx) => (
                <motion.div key={idx} variants={itemVariants} className="relative pl-8">
                  <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[6px] top-2 shadow-[0_0_15px_rgba(99,102,241,0.8)]" />

                  <div className="card-glass p-6 rounded-3xl hover:border-indigo-500/30 transition-colors group">
                    <time className="text-indigo-400 font-mono text-sm tracking-widest">{item.year}</time>
                    <h4 className="text-xl md:text-2xl font-bold mt-2 mb-1">{item.degree}</h4>
                    {item.school && <p className="text-white/80 font-medium mb-2">{item.school}</p>}
                    {item.description && <p className="text-white/60 font-light leading-relaxed">{item.description}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Professional Timeline */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
            <h3 className="text-2xl font-bold mb-12 text-cyan-400 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-cyan-500/50" /> Professionnel
            </h3>
            <div className="relative border-l border-white/10 ml-4 space-y-12">
              {professional.map((item, idx) => (
                <motion.div key={idx} variants={itemVariants} className="relative pl-8">
                  <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[6px] top-2 shadow-[0_0_15px_rgba(6,182,212,0.8)]" />

                  <div className="card-glass p-6 rounded-3xl hover:border-cyan-500/30 transition-colors group">
                    <time className="text-cyan-400 font-mono text-sm tracking-widest">{item.year}</time>
                    <h4 className="text-xl md:text-2xl font-bold mt-2 mb-1">{item.role}</h4>
                    {item.company && <p className="text-white/80 font-medium mb-2">{item.company}</p>}
                    {item.description && <p className="text-white/60 font-light leading-relaxed">{item.description}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
