import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const SURVEY_URL = 'https://forms.gle/tpD99Jx9uEYYTNaS6';

const Feedback = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="feedback" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl overflow-hidden"
          style={{ border: '1px solid rgba(255,107,0,.15)' }}
        >
          {/* Franja superior naranja decorativa */}
          <div
            className="h-1.5 w-full"
            style={{ background: 'linear-gradient(90deg, #FF6B00, #ff9a50, transparent)' }}
          />

          <div className="p-8 md:p-12 md:flex md:items-center md:gap-12">

            {/* Texto */}
            <div className="flex-1 mb-8 md:mb-0">
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.15 }}
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: '#FF6B00' }}
              >
                Queremos saber
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="font-display text-3xl md:text-4xl font-bold text-primary leading-tight mb-4"
              >
                Este es un prototipo.
                <br />
                <span className="gradient-text">Tu opinión lo mejora.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.28 }}
                className="text-sm text-secondary leading-relaxed max-w-md"
              >
                Sabemos que hay cosas por pulir — eso es parte del proceso.
                Si lo usaste, si tienes dudas, o simplemente quieres dejar una impresión,
                nos tomamos 2 minutos de tu tiempo.
              </motion.p>

              {/* Mini bullets honestos */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.36 }}
                className="mt-6 flex flex-col gap-2"
              >
                {[
                  '2 minutos o menos',
                  'Anónima si quieres',
                  'Cada respuesta cuenta',
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-secondary">
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-xs"
                      style={{ background: 'rgba(255,107,0,.15)', color: '#FF6B00' }}
                    >
                      ✓
                    </span>
                    {t}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="flex-shrink-0 flex flex-col items-center text-center"
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg"
                style={{ background: 'rgba(255,107,0,.1)', border: '1px solid rgba(255,107,0,.2)' }}
              >
                💬
              </div>

              <motion.a
                href={SURVEY_URL}
                target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 36px rgba(255,107,0,.35)' }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2.5 px-8 py-4 rounded-full text-white font-semibold text-base shadow-lg mb-3"
                style={{ background: 'linear-gradient(135deg,#FF6B00,#cc5500)' }}
              >
                Responder encuesta →
              </motion.a>

              <p className="text-xs text-secondary">Google Forms · abre en nueva pestaña</p>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Feedback;