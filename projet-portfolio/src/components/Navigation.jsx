import { motion } from 'framer-motion';

export function Navigation() {
  const links = [
    { name: 'Accueil', href: '#home' },
    { name: 'Profil & CV', href: '#profile' },
    { name: 'À Propos', href: '#about' },
    { name: 'Parcours', href: '#timeline' },
    { name: 'Outils', href: '#tools' },
    { name: 'Projets', href: '#work' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-12 pointer-events-none"
    >
      <div className="max-w-4xl mx-auto flex justify-center">
        <nav className="pointer-events-auto flex items-center justify-center gap-2 md:gap-6 bg-black/20 backdrop-blur-3xl border border-white/10 rounded-full px-6 md:px-8 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
          {links.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href}
              className="text-white/60 hover:text-white text-xs md:text-sm font-medium tracking-wide uppercase transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
