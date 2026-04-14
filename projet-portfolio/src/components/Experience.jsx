import { motion } from 'framer-motion';

export function Experience() {
  const experiences = [
    {
      role: 'Développeur Full Stack Senior',
      company: 'TechCorp Innovate',
      period: '2023 - Présent',
      description: 'Lead technique sur le développement d\'une plateforme SaaS B2B. Architecture microservices, React/Next.js en frontend, Node.js backend. Amélioration des performances de 40%.'
    },
    {
      role: 'Développeur Frontend',
      company: 'Digital Creative Agency',
      period: '2020 - 2023',
      description: 'Création d\'interfaces web interactives et de e-commerces ultra-rapides. Implémentation de design systems et de composants réutilisables.'
    },
    {
      role: 'Intégrateur Web',
      company: 'StartUp Studio',
      period: '2018 - 2020',
      description: 'Intégration pixel-perfect des designs Figma. Optimisation SEO et accessibilité. Création d\'animations fluides.'
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-black/5 dark:bg-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Mon Parcours</h2>
          <div className="w-16 h-1 bg-indigo-500 rounded-full"></div>
        </div>

        <div className="relative border-l border-[rgba(var(--foreground),0.1)] ml-4 md:ml-6 space-y-12 pb-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 rounded-full bg-indigo-500 -left-[8px] top-1.5 shadow-[0_0_10px_rgba(99,102,241,0.6)]" />
              
              <div className="bg-[rgba(var(--foreground),0.02)] border border-[rgba(var(--foreground),0.05)] p-6 rounded-2xl glass hover:border-indigo-500/30 transition-colors">
                <span className="text-indigo-500 font-mono text-sm font-semibold tracking-wider uppercase mb-2 block">
                  {exp.period}
                </span>
                <h3 className="text-xl md:text-2xl font-bold mb-1">{exp.role}</h3>
                <h4 className="text-lg opacity-70 mb-4">{exp.company}</h4>
                <p className="opacity-80 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
