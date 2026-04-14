import { motion } from 'framer-motion';
import { DownloadCloud, Camera } from 'lucide-react';

export function Profile() {
  return (
    <section id="profile" className="relative px-6 md:px-12 py-32 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-12 card-glass p-8 md:p-16 rounded-[40px] border border-white/10"
        >
          {/* Avatar / Photo Slot */}
          <div className="flex-shrink-0 relative group">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center relative z-10 transition-transform duration-500 group-hover:scale-105">
              <img src="/images/photo_cv.jfif" alt="Kerdja Camila" className="w-full h-full object-cover" />
            </div>
            {/* Halo Effect */}
            <div className="absolute inset-0 bg-indigo-500 rounded-full blur-[60px] opacity-20 scale-110 -z-10 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500"></div>
          </div>

          {/* Intro text & CV */}
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Mieux me connaître.</h2>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light max-w-2xl">
                Je combine rigueur académique et expérience terrain pour créer des produits robustes. Mon profil hybride (design + code) me permet de mener un projet de la phase conceptuelle à son déploiement optimal.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
