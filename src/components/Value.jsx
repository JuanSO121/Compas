import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mic, MapPin, WifiOff, Accessibility } from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'Solo tu voz',
    desc: 'Di a dónde quieres ir. El sistema te guía con instrucciones auditivas claras en todo momento.',
  },
  {
    icon: MapPin,
    title: 'Sin GPS, sin balizas',
    desc: 'Funciona con la cámara del teléfono. No necesita sensores ni adaptaciones en el edificio.',
  },
  {
    icon: WifiOff,
    title: 'Con o sin internet',
    desc: 'Puede operar completamente sin conexión una vez iniciada la sesión.',
  },
  {
    icon: Accessibility,
    title: 'Hecho para accesibilidad',
    desc: 'Interacción sin tocar la pantalla, anuncios de voz en cada paso y retroalimentación háptica.',
  },
];

const Value = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="value" className="py-16 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-lg"
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: '#FF6B00' }}
          >
            Qué es
          </p>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary leading-tight mb-3">
            Un guía dentro
            <br />
            <span className="gradient-text">de cualquier edificio.</span>
          </h2>

          <p className="text-sm text-secondary leading-relaxed">
            COMPAS guía a personas con discapacidad visual en espacios interiores donde el GPS
            no funciona, usando solo el teléfono.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="glass rounded-xl p-5 flex items-start gap-4"
              >
                {/* Icono */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,107,0,.1)' }}
                >
                  <Icon size={20} strokeWidth={2} color="#FF6B00" />
                </div>

                {/* Texto */}
                <div>
                  <h3 className="font-semibold text-primary text-sm mb-1">
                    {f.title}
                  </h3>
                  <p className="text-xs text-secondary leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Value;