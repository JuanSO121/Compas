import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, Check } from 'lucide-react';

const SURVEY_URL = 'https://forms.gle/tpD99Jx9uEYYTNaS6';

const Feedback = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="feedback" className="py-16 px-6 md:py-20">
      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="glass rounded-3xl overflow-hidden"
          style={{ border: '1px solid rgba(255,107,0,.15)' }}
        >
          {/* Línea superior */}
          <div
            className="h-1.5 w-full"
            style={{ background: 'linear-gradient(90deg, #FF6B00, #ff9a50, transparent)' }}
          />

          <div className="p-8 md:p-12 md:flex md:items-center md:gap-12">

            {/* TEXTO */}
            <div className="flex-1 mb-8 md:mb-0">

              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: '#FF6B00' }}
              >
                Feedback
              </p>

              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary leading-tight mb-4">
                Prototipo en evolución
                <br />
                <span className="gradient-text">tu experiencia es clave.</span>
              </h2>

              <p className="text-sm text-secondary leading-relaxed max-w-md">
                Estamos validando la experiencia de uso de COMPAS. 
                Tu opinión nos ayuda a mejorar la navegación y hacer la interfaz más clara y accesible.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center text-center">

              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: 'rgba(255,107,0,.1)',
                  border: '1px solid rgba(255,107,0,.2)',
                }}
              >
                <MessageSquare size={26} color="#FF6B00" />
              </div>

              <motion.a
                href={SURVEY_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3 rounded-full text-white font-semibold text-sm shadow-md"
                style={{ background: 'linear-gradient(135deg,#FF6B00,#cc5500)' }}
              >
                Responder encuesta
              </motion.a>

              <p className="text-xs text-secondary mt-2">
                Google Forms
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Feedback;