import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const links = [
  { name: 'Inicio', href: '#home' },
  { name: 'Cómo funciona', href: '#how' },
  { name: 'Por qué', href: '#why' },
  { name: 'Demo', href: '#demo' },
  { name: 'Feedback', href: '#feedback' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dark,     setDark]     = useState(true);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('theme') ?? 'dark';
    apply(saved === 'dark');
  }, []);

  const apply = (isDark) => {
    setDark(isDark);
    document.body.classList.toggle('dark',  isDark);
    document.body.classList.toggle('light', !isDark);
  };

  const toggle = () => {
    const next = !dark;
    apply(next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <motion.nav
      initial={{ y: -72 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 focus:outline-none"
        >
          {/* Contenedor del logo */}
          <div
            className="flex items-center justify-center rounded-md"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
            }}
          >
          <div
            className="w-10 h-10 rounded-md overflow-hidden flex items-center justify-center"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
            }}
          >
            <img
              src="/logo.png"
              alt="COMPAS"
              className="w-full h-full object-contain"
            />
          </div>
          </div>

          <span className="font-display text-xl font-bold gradient-text tracking-tight">
            COMPAS
          </span>
        </motion.button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l, i) => (
            <motion.a
              key={l.name} href={l.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y:  0 }}
              transition={{ delay: i * 0.07 }}
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              {l.name}
            </motion.a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
        <motion.a
          href="https://drive.google.com/uc?export=download&id=1hGRCgPoZN9tXZPbZirlUCJn_nZC5WRPO"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04, boxShadow: '0 6px 24px rgba(255,107,0,.35)' }}
          whileTap={{ scale: 0.96 }}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white"
          style={{ background: 'linear-gradient(135deg,#FF6B00,#cc5500)' }}
        >
          Descargar APK
        </motion.a>

          <motion.button
            onClick={toggle}
            whileHover={{ rotate: 20 }} whileTap={{ scale: 0.9 }}
            className="w-9 h-9 glass rounded-full flex items-center justify-center text-secondary hover:text-primary transition-colors"
          >
            {dark ? <FaSun size={14} /> : <FaMoon size={14} />}
          </motion.button>

          <button
            onClick={() => setOpen(o => !o)}
            className="md:hidden w-9 h-9 glass rounded-full flex items-center justify-center text-secondary"
          >
            {open ? <FaTimes size={14} /> : <FaBars size={14} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{   opacity: 0, height: 0 }}
            className="md:hidden glass border-t divider px-6 pb-5 flex flex-col gap-1"
          >
            {links.map(l => (
              <a
                key={l.name} href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-secondary hover:text-primary py-2.5 transition-colors"
              >
                {l.name}
              </a>
            ))}
              <a
                href="https://drive.google.com/uc?export=download&id=1hGRCgPoZN9tXZPbZirlUCJn_nZC5WRPO"
                download
                className="mt-3 text-center py-3 rounded-full text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg,#FF6B00,#cc5500)' }}
              >
              Descargar APK
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;