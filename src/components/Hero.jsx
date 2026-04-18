import { motion } from 'framer-motion';
import { FaAndroid, FaGithub } from 'react-icons/fa';

const Hero = () => (
  <section
    id="home"
    className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-16 overflow-hidden"
  >
    {/* Glow ambiental */}
    <div
      className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[380px] blur-3xl rounded-full opacity-20"
      style={{ background: 'radial-gradient(ellipse, #FF6B00 0%, transparent 70%)' }}
    />

    <div className="relative z-10 max-w-2xl">

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-7 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
        style={{ border: '1px solid rgba(255,107,0,.3)', color: '#FF9A50', background: 'rgba(255,107,0,.08)' }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
        Disponible para Android
      </motion.div>

      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.08 }}
        className="font-display text-5xl md:text-7xl font-bold text-primary leading-none tracking-tight mb-5"
      >
        Navega espacios interiores
        <br />
        <span className="gradient-text">usando solo tu voz</span>
      </motion.h1>

      {/* Subtexto — sin jerga técnica */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.18 }}
        className="text-lg md:text-xl text-secondary leading-relaxed mb-10 max-w-lg mx-auto"
      >
        COMPAS guía a personas con discapacidad visual dentro de edificios donde el GPS no llega,
        sin cables ni extras
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.28 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.a
          href="https://drive.google.com/uc?export=download&id=1pTCcWDn6whvxoJ4u3CzeObdaWGm3461-" download
          whileHover={{ scale: 1.05, boxShadow: '0 10px 36px rgba(255,107,0,.35)' }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2.5 px-8 py-3.5 rounded-full text-white font-semibold text-base shadow-lg"
          style={{ background: 'linear-gradient(135deg,#FF6B00,#cc5500)' }}
        >
          <FaAndroid size={18} />
          Descargar APK
        </motion.a>

        <motion.a
          href="#demo"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-base glass text-secondary hover:text-primary transition-all"
        >
          Ver demo →
        </motion.a>
      </motion.div>

      {/* GitHub link pequeño */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8"
      >
        <a
          href="https://github.com/JuanSO121/compas-client-mobile"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors"
        >
          <FaGithub size={16} />
          Ver código en GitHub
        </a>
      </motion.div>

    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
    >
      <div
        className="w-px h-8"
        style={{ background: 'linear-gradient(to bottom, rgba(255,107,0,.5), transparent)' }}
      />
    </motion.div>
  </section>
);

export default Hero;