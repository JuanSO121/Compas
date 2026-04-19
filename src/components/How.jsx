import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    num: '01',
    title: 'Abre la app',
    desc:  'Inicia sesión con tu código de acceso. La app carga el mapa del edificio automáticamente.',
  },
  {
    num: '02',
    title: 'Dile a dónde vas',
    desc:  'Di "Oye COMPAS, llévame a la biblioteca" y el sistema calcula la mejor ruta.',
  },
  {
    num: '03',
    title: 'Sigue las instrucciones',
    desc:  'Escucha las indicaciones en tiempo real. Si hay un obstáculo en tu camino, te avisa.',
  },
];

const built = ['Flutter', 'Unity', 'ARCore', 'FastAPI'];

const How = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="how" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Header */}
        <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center flex flex-col items-center"
        >

        {/* 🔥 ISOLOGO */}
        <div className="relative">
        {/* Glow suave detrás */}
        <div
            className="absolute inset-0 blur-2xl opacity-30 rounded-full"
            style={{
            background: 'radial-gradient(circle, rgba(255,107,0,0.4) 0%, transparent 70%)',
            }}
        />

                {/* Contenedor glass */}
        <div className="relative mb-6 w-40 h-40 overflow-hidden rounded-2xl">
        <img
            src="/logo.png"
            alt="COMPAS logo"
            className="w-full h-full object-cover scale-100"
        />
        </div>
        </div>

        <p
            className="text-xs font-semibold uppercase tracking-widest mb-1"
            style={{ color: '#FF6B00' }}
        >
            Cómo funciona
        </p>

        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            Tres pasos, nada más.
        </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-5 mb-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="glass rounded-2xl p-7 relative overflow-hidden"
            >
              {/* Número grande de fondo */}
              <span
                className="absolute top-4 right-5 font-display text-6xl font-bold select-none"
                style={{ color: 'rgba(255,107,0,.07)' }}
              >
                {s.num}
              </span>
              <div
                className="inline-block text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-5"
                style={{ background: 'rgba(255,107,0,.1)', color: '#FF6B00' }}
              >
                Paso {s.num}
              </div>
              <h3 className="font-semibold text-primary text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-secondary leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Built with — minimalista */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass rounded-2xl px-8 py-6 flex flex-wrap items-center justify-between gap-4"
          style={{ border: '1px solid rgba(255,107,0,.1)' }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
            Construido con
          </p>
          <div className="flex flex-wrap gap-3">
            {built.map((b) => (
              <span
                key={b}
                className="px-4 py-1.5 rounded-full text-sm font-medium text-primary"
                style={{ background: 'rgba(255,107,0,.08)', border: '1px solid rgba(255,107,0,.15)' }}
              >
                {b}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default How;