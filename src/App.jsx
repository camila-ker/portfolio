import { Cursor } from './components/Cursor';
import { AuroraBackground } from './components/AuroraBackground';
import { Navigation } from './components/Navigation';
import { HeroReveal } from './components/HeroReveal';
import { Profile } from './components/Profile';
import { BentoGrid } from './components/BentoGrid';
import { Timeline } from './components/Timeline';
import { ToolsGrid } from './components/ToolsGrid';
import { ProjectShowcase } from './components/ProjectShowcase';
import { Contact } from './components/Contact';

function App() {
  return (
    <div id="home">
      <Cursor />
      <AuroraBackground />
      <Navigation />
      
      <main className="relative z-10 w-full overflow-hidden selection:bg-indigo-500/50">
        <HeroReveal />
        <Profile />
        <BentoGrid />
        <Timeline />
        <ToolsGrid />
        <ProjectShowcase />
        <Contact />
      </main>

      <footer className="relative z-10 py-12 text-center text-white/30 text-sm font-mono uppercase tracking-widest border-t border-white/5 mt-32">
        Designed & Built by camila kerdja
      </footer>
    </div>
  );
}

export default App;
