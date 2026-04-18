import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaMicrophone, FaMapMarkedAlt, FaBrain, FaDatabase } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const features = [
    {
      icon: <FaMicrophone />,
      title: 'Interacción por voz',
      desc: 'Control total sin tocar la pantalla. Pensado para uso accesible en movilidad.',
    },
    {
      icon: <FaMapMarkedAlt />,
      title: 'Navegación sin infraestructura',
      desc: 'Ubicación y rutas dentro de edificios usando solo la cámara del teléfono.',
    },
    {
      icon: <FaBrain />,
      title: 'IA híbrida',
      desc: 'Funciona con o sin internet gracias a modelos online y offline.',
    },
    {
      icon: <FaDatabase />,
      title: 'Aprendizaje de entornos',
      desc: 'Guarda rutas y espacios para reutilizarlos en futuras sesiones.',
    },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 md:flex md:items-end md:justify-between"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#FF6B00' }}>
              El Proyecto
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary leading-tight">
              Navegar sin ver.<br />
              <span className="gradient-text">Sentir el camino.</span>
            </h2>
          </div>
          <p className="mt-6 md:mt-0 md:max-w-sm text-base text-secondary leading-relaxed">
            COMPAS guía a personas con discapacidad visual dentro de espacios cerrados donde el GPS no funciona.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-7"
            >
              <div className="text-xl mb-5 text-brand">
                {f.icon}
              </div>
              <h3 className="font-semibold text-primary text-base mb-2">{f.title}</h3>
              <p className="text-sm text-secondary leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 glass rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#FF6B00' }}>
              Autores
            </p>
            <p className="text-primary font-medium">
              Juan José Sánchez Ocampo & Carlos Eduardo Rangel
            </p>
            <p className="text-sm text-secondary mt-0.5">
              Universidad de San Buenaventura Cali · 2026
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;