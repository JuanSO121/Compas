import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaAndroid } from 'react-icons/fa';

const Demo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="demo" className="py-16 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8 md:flex md:items-end md:justify-between"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#FF6B00' }}>
              Demo
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
              Míralo en acción.
            </h2>
          </div>
          <p className="mt-3 md:mt-0 md:max-w-xs text-sm text-secondary leading-relaxed">
            Probado en la biblioteca de la USB Cali.
          </p>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="glass rounded-xl overflow-hidden mb-6"
          style={{ border: '1px solid rgba(255,107,0,.12)' }}
        >
          <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/GqiV4A_-v-s?rel=0&modestbranding=1"
            title="Demo COMPAS"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          </div>
        </motion.div>

        {/* CTA + requisitos */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="glass rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
          style={{ border: '1px solid rgba(255,107,0,.12)' }}
        >
          {/* Texto */}
          <div className="text-sm text-secondary leading-relaxed max-w-md">
            <p className="font-semibold text-primary mb-1">
              Pruébalo en tu dispositivo
            </p>

            <p className="text-xs opacity-80">
              Requiere Android 8.0+ (recomendado 10+), soporte ARCore y sensores de movimiento.
              No todos los dispositivos son compatibles.
            </p>
          </div>

          {/* Botón */}
          <motion.a
            href="https://drive.google.com/uc?export=download&id=1hGRCgPoZN9tXZPbZirlUCJn_nZC5WRPO"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm shadow-lg whitespace-nowrap"
            style={{ background: 'linear-gradient(135deg,#FF6B00,#cc5500)' }}
          >
            <FaAndroid size={16} />
            Descargar APK
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Demo;