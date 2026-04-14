import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-16 items-center"
        >
          <div className="flex-1 space-y-6 text-lg">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">À propos de moi</h2>
            <div className="w-16 h-1 bg-indigo-500 rounded-full"></div>
            <p className="opacity-80 leading-relaxed">
              Je m'appelle <strong className="text-indigo-400 font-semibold">Kerdja Camila</strong>, passionnée par le développement de systèmes performants et sécurisés. Je combine une rigueur d'ingénierie et une excellente maîtrise technique pour concevoir des architectures informatiques robustes, fluides et évolutives.
            </p>
            <p className="opacity-80 leading-relaxed">
              Mon approche est centrée sur la fiabilité et la sécurité réseau. J'accorde une attention particulière aux détails, de l'optimisation des flux de données à la protection des infrastructures, afin de garantir une expérience utilisateur à la fois rapide et inviolable.
            </p>
          </div>
          
          <div className="flex-1 grid grid-cols-2 gap-4 w-full">
             <StatCard number="5+" label="Années d'expérience" />
             <StatCard number="40+" label="Projets livrés" />
             <StatCard number="100%" label="Satisfaction client" />
             <StatCard number="24/7" label="Café consommé" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ number, label }) {
  return (
    <div className="p-6 rounded-2xl border border-[rgba(var(--foreground),0.1)] card-glass text-center hover:-translate-y-1 transition-transform">
      <div className="text-3xl md:text-4xl font-bold text-indigo-500 mb-2">{number}</div>
      <div className="text-sm font-medium opacity-70">{label}</div>
    </div>
  );
}
