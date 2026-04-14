import { motion } from 'framer-motion';

export function HeroReveal() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 40, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    },
  };

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 z-10 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col perspective-1000"
        >
          {/* Subtle Tagline & Name Introduction */}
          <motion.div variants={child} className="mb-6 flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="h-px w-12 bg-indigo-500/50 hidden md:block" />
            <h2 className="text-2xl md:text-3xl font-light text-white/80">
              Bonjour, je suis <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">Kerdja Camila</span>
            </h2>
          </motion.div>

          <motion.h1
            variants={child}
            className="text-6xl md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter leading-[0.9] text-white"
            style={{ textTransform: 'uppercase' }}
          >
            Creative
          </motion.h1>
          <motion.h1
            variants={child}
            className="text-6xl md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400"
            style={{ textTransform: 'uppercase' }}
          >
            Developer
          </motion.h1>

          <motion.div variants={child} className="mt-12 max-w-2xl">
            <p className="text-xl md:text-3xl text-white/60 font-light leading-snug">
              Je développe des systèmes et applications robustes, en intégrant des solutions réseau
              et des pratiques de sécurité avancées pour des expériences fiables et évolutives.
            </p>
          </motion.div>

          <motion.div variants={child} className="mt-16 flex items-center gap-6">
            <a href="#work" className="group relative px-8 py-4 bg-white text-black font-bold text-lg rounded-full overflow-hidden">
              <span className="relative z-10">Explorer mon travail</span>
              <div className="absolute inset-0 bg-indigo-500 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
              <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explorer mon travail
              </span>
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
