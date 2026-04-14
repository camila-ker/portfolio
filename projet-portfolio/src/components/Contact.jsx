import { motion } from 'framer-motion';
import { Send, Briefcase, Mail, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="relative px-6 md:px-12 py-32 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Contact Info & Socials */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Prêt à collaborer ?</h2>
            <p className="opacity-60 text-lg mb-10 leading-relaxed max-w-lg">
              Une idée, un projet ou simplement envie de discuter de tech ? N'hésitez pas à me contacter directement via ce formulaire ou sur LinkedIn.
            </p>

            <div className="space-y-6">
              <a href="https://www.linkedin.com/in/kerdja-camila-142bb0279/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 rounded-2xl card-glass hover:bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-all w-fit">
                <div className="p-3 rounded-full bg-indigo-500/20 text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                  <Briefcase size={24} />
                </div>
                <div>
                  <div className="text-sm opacity-50 font-mono">Réseau Professionnel</div>
                  <span className="font-medium text-lg">Connectons-nous sur LinkedIn</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4">
                <div className="p-3 rounded-full bg-cyan-500/10 text-cyan-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm opacity-50 font-mono">Localisation</div>
                  <span className="font-medium text-lg">Tizi Ouzou (Remote OK)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 md:p-10 rounded-3xl card-glass border border-white/10 relative overflow-hidden group">
            {/* Glowing background hint on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            {/* Using a standard mailto: action, or you can replace with Formspree if preferred */}
            <form action="mailto:votre-email@exemple.com" method="POST" encType="text/plain" className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium opacity-60 mb-2 font-mono">01. Nom Complet</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all font-medium text-white placeholder-white/20" 
                  placeholder="Jean Dupont"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium opacity-60 mb-2 font-mono">02. Votre Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={5} 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all font-medium text-white placeholder-white/20 resize-none" 
                  placeholder="Bonjour, j'ai une idée de projet..."
                  required
                ></textarea>
              </div>

              <button 
                className="w-full py-4 rounded-xl bg-white text-black font-bold text-lg flex items-center justify-center gap-3 hover:bg-indigo-400 hover:text-white transition-all duration-300 group/btn"
                type="submit"
              >
                Envoyer <Send size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
