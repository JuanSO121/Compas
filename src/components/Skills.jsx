import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const groups = [
  {
    label: 'Plataforma',
    items: ['Flutter', 'Unity', 'FastAPI'],
  },
  {
    label: 'Inteligencia Artificial',
    items: ['Groq', 'TensorFlow Lite'],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#FF6B00' }}>
            Arquitectura
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            Componentes del sistema
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((g, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#FF6B00' }}>
                {g.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item, ii) => (
                  <span
                    key={ii}
                    className="px-3 py-1.5 rounded-full text-sm font-medium text-primary"
                    style={{
                      background: 'rgba(255,107,0,0.08)',
                      border: '1px solid rgba(255,107,0,0.15)',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;