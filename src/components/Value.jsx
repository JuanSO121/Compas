import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: '🎙️',
    title: 'Solo tu voz',
    desc:  'Di a dónde quieres ir. El sistema te guía con instrucciones auditivas claras en todo momento.',
  },
  {
    icon: '📍',
    title: 'Sin GPS, sin balizas',
    desc:  'Funciona con la cámara del teléfono. No necesita sensores ni adaptaciones en el edificio.',
  },
  {
    icon: '📶',
    title: 'Con o sin internet',
    desc:  'Puede operar completamente sin conexión una vez iniciada la sesión.',
  },
  {
    icon: '♿',
    title: 'Hecho para accesibilidad',
    desc:  'Interacción sin tocar la pantalla, anuncios de voz en cada paso y retroalimentación háptica.',
  },
];

const Value = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="value" className="py-6 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-xl"
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#FF6B00' }}>
            Qué es
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary leading-tight mb-5">
            Un guía dentro
            <br />
            <span className="gradient-text">de cualquier edificio.</span>
          </h2>
          <p className="text-base text-secondary leading-relaxed">
            COMPAS guía a personas con discapacidad visual en espacios interiores donde el GPS
            no funciona, usando solo el teléfono.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.09 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-7"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5"
                style={{ background: 'rgba(255,107,0,.1)' }}
              >
                {f.icon}
              </div>
              <h3 className="font-semibold text-primary text-base mb-2">{f.title}</h3>
              <p className="text-sm text-secondary leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Value;