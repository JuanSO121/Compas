import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaAndroid } from 'react-icons/fa';

const Demo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="demo" className="py-6 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:flex md:items-end md:justify-between"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#FF6B00' }}>
              Demo
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
              Míralo en acción.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 md:max-w-xs text-sm text-secondary leading-relaxed">
            Demostración real en la biblioteca de la Universidad de San Buenaventura Cali.
          </p>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="glass rounded-2xl overflow-hidden mb-8"
          style={{ border: '1px solid rgba(255,107,0,.12)' }}
        >
          {/*
            Para agregar video:

            Opción A — archivo local (coloca demo.mp4 en /public/):
            <video controls poster="/demo-thumb.jpg" className="w-full block">
              <source src="/demo.mp4" type="video/mp4" />
            </video>

            Opción B — YouTube (reemplaza TU_VIDEO_ID):
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/TU_VIDEO_ID"
                frameBorder="0" allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          */}

          {/* Placeholder — reemplaza con video real */}
          <div
            className="w-full flex flex-col items-center justify-center gap-4"
            style={{ aspectRatio: '16/9', background: 'rgba(255,107,0,.04)' }}
          >
            <motion.div
              whileHover={{ scale: 1.06 }}
              className="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
              style={{ background: 'linear-gradient(135deg,#FF6B00,#cc5500)' }}
            >
              <svg className="ml-1" width="22" height="22" viewBox="0 0 24 24" fill="white">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </motion.div>
            <p className="text-sm font-medium text-primary">Video de demostración</p>
            <p className="text-xs text-secondary">Próximamente</p>
          </div>
        </motion.div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="glass rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
          style={{ border: '1px solid rgba(255,107,0,.12)' }}
        >
          <div>
            <p className="font-semibold text-primary text-lg">Pruébalo tú mismo</p>
            <p className="text-sm text-secondary mt-1">Disponible para Android</p>
          </div>
          <motion.a
            href="/COMPAS.apk" download
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(255,107,0,.3)' }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white font-semibold shadow-lg whitespace-nowrap"
            style={{ background: 'linear-gradient(135deg,#FF6B00,#cc5500)' }}
          >
            <FaAndroid size={18} />
            Descargar COMPAS.apk
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Demo;