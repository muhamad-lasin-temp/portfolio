import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import RishminaImage from '../../assets/Rishmina.png';

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (window.scrollY <= 20) {
        setMenuOpen(false);
      }

      const sections = ['home', 'about', 'projects', 'experience', 'ai-skills', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'AI Skills', id: 'ai-skills' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[90] flex flex-col items-center p-4">
      <nav 
        id="navbar-capsule"
        className={`px-2 py-2 mt-2 bg-white/70 backdrop-blur-md rounded-full border border-gray-100 transition-all duration-500 flex items-center ${
          isScrolled 
            ? 'w-auto shadow-lg bg-white/95 cursor-pointer hover:scale-105' 
            : 'w-full max-w-3xl justify-between shadow-md px-4'
        }`}
        onClick={() => {
          if (isScrolled) setMenuOpen(!menuOpen);
        }}
      >
        {isScrolled ? (
          <div className="flex items-center gap-3 px-1 pr-4">
            <img 
              src={RishminaImage} 
              alt="Rishmina Sherin Avatar" 
              className="w-8 h-8 rounded-full object-cover border border-gray-200"
              referrerPolicy="no-referrer"
            />
            <span className="text-gray-700 font-sans font-medium text-sm">Available for work</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
          </div>
        ) : (
          <>
            {/* Left: Avatar & Logo details */}
            <div 
              onClick={(e) => { e.stopPropagation(); scrollToSection('home'); }} 
              className="flex items-center gap-2 cursor-pointer hover:opacity-85 transition-opacity"
              id="nav-logo"
            >
              <img 
                src={RishminaImage} 
                alt="Rishmina Sherin Avatar" 
                className="w-8 h-8 rounded-full object-cover border border-gray-200"
                referrerPolicy="no-referrer"
              />
              <span className="font-display tracking-widest text-[#1a1a1a] text-sm font-semibold max-sm:hidden">
                RISHMINA
              </span>
            </div>

            {/* Center: Main Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={(e) => { e.stopPropagation(); scrollToSection(item.id); }}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all ${
                    activeSection === item.id 
                      ? 'text-gray-900 bg-gray-100/80 backdrop-blur-sm' 
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-gray-200/50 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Right: Contact button (Pill) */}
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => { e.stopPropagation(); scrollToSection('contact'); }}
                className={`px-5 py-2 font-sans font-medium text-xs tracking-wider uppercase rounded-full transition-all duration-350 cursor-pointer ${
                  activeSection === 'contact' 
                    ? 'bg-violet-600 text-white' 
                    : 'bg-black hover:bg-neutral-800 text-white'
                }`}
                id="nav-contact-button"
              >
                Contact
              </button>

              {/* Mobile Hamburger */}
              <button 
                onClick={(e) => { e.stopPropagation(); setMenuOpen(!menuOpen); }}
                className="md:hidden p-1.5 text-gray-700 hover:text-black rounded-full hover:bg-gray-100 transition-colors"
                id="nav-toggle-mobile"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </>
        )}
      </nav>

      {/* Dropdown Menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 bg-white/95 backdrop-blur-lg rounded-2xl p-5 border border-gray-100 shadow-xl z-40 flex flex-col gap-2 w-[calc(100%-2rem)] max-w-sm"
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left py-3 px-4 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === item.id 
                    ? 'bg-gray-150 text-gray-900' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full text-center py-3 mt-2 bg-black text-white text-sm font-medium rounded-xl hover:bg-neutral-800 transition-colors"
            >
              Let's Collaborate
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
