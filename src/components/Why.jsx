import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Zap, MapPin } from 'lucide-react';


const reasons = [
  {
    icon: Building2,
    title: 'No modifica el edificio',
    desc: 'No hay que instalar sensores, señales ni ningún hardware. Funciona en cualquier espacio desde el primer día.',
  },
  {
    icon: Zap,
    title: 'Guía en tiempo real',
    desc: 'Detecta obstáculos mientras caminas y recalcula la ruta al instante, sin pausas.',
  },
  {
    icon: MapPin,
    title: 'Pensado para Colombia',
    desc: 'Más de 1.9 millones de personas tienen alguna limitación visual en el país. Este prototipo utilzia interacción por voz y realidad aumentada para apoyar la navegación en espacios cerrados.',
  },
];

const Why = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 md:flex md:items-end md:justify-between"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#FF6B00' }}>
              Por qué importa
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary leading-tight">
              Diferente<br />
              <span className="gradient-text">desde la base.</span>
            </h2>
          </div>
          <p className="mt-6 md:mt-0 md:max-w-xs text-sm text-secondary leading-relaxed">
            La mayoría de soluciones similares requieren infraestructura instalada o solo funcionan en
            entornos preparados. COMPAS no.
          </p>
        </motion.div>

        {/* Reason cards — layout asimétrico */}
        <div className="grid md:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-7"
            >
            <div
            className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
            style={{ background: 'rgba(255,107,0,.1)' }}
            >
            {(() => {
                const Icon = r.icon;
                return <Icon size={22} strokeWidth={2} color="#FF6B00" />;
            })()}
            </div>
              <h3 className="font-semibold text-primary text-base mb-2">{r.title}</h3>
              <p className="text-sm text-secondary leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stat callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-5 glass rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center gap-6"
          style={{ border: '1px solid rgba(255,107,0,.12)' }}
        >
          <div className="font-display text-5xl font-bold gradient-text flex-shrink-0">80.9%</div>
          <div>
            <p className="font-semibold text-primary text-base mb-1">
              Precisión del modelo de detección de obstáculos
            </p>
            <p className="text-sm text-secondary">
              Entrenado sobre 698 imágenes de entornos interiores reales. Identifica piso,
              paredes y obstáculos en tiempo real.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Why;