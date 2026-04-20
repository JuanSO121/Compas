import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const tabs = [
  {
    id:    'welcome',
    label: 'Bienvenida',
    desc:  'El punto de entrada. Dos opciones, nada más. Diseñado para que cualquier persona pueda empezar sin leer nada.',
    screens: [{ src: '/screens/welcome.jpg', caption: null }],
  },
  {
    id:    'login',
    label: 'Acceso',
    desc:  'Inicio de sesión con código de 6 dígitos que llega al correo. Sin contraseñas que olvidar.',
    screens: [{ src: '/screens/login.jpg', caption: null }],
  },
  {
    id:    'registro',
    label: 'Registro',
    desc:  'Tres pasos simples: correo, contraseña y nombre. Cada campo ocupa toda la pantalla para no abrumar.',
    screens: [
      { src: '/screens/registro-1.jpg', caption: 'Paso 1 — Correo' },
      { src: '/screens/registro-2.jpg', caption: 'Paso 2 — Contraseña' },
      { src: '/screens/registro-3.jpg', caption: 'Paso 3 — Nombre' },
    ],
  },
    {
    id:    'nav',
    label: 'Navegación',
    desc:  'Vista normal y con detección de obstáculos usando segmentación semántica en tiempo real.',
    screens: [
        { src: '/screens/nav.jpeg', caption: 'Vista normal' },
        { src: '/screens/nav-mask.jpg', caption: 'Detección de obstáculos' },
    ],
    },
];

const PhoneMockup = ({ src, caption }) => (
  <div className="flex flex-col items-center gap-3">
    <div
      className="relative rounded-[2.2rem] overflow-hidden shadow-2xl"
      style={{
        width: 175,
        aspectRatio: '9/19.5',
        background: '#0a0a0a',
        border: '5px solid #1a1a1a',
        boxShadow: '0 24px 60px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.06)',
      }}
    >
      {/* Notch */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 z-10 rounded-b-xl"
        style={{ width: 60, height: 18, background: '#0a0a0a' }}
      />
      <img
        src={src}
        alt={caption ?? 'Pantalla COMPAS'}
        className="w-full h-full object-cover object-top"
        draggable={false}
      />
    </div>

    {caption && (
      <span
        className="text-xs font-medium px-3 py-1 rounded-full"
        style={{ background: 'rgba(255,107,0,.1)', color: '#FF9A50', border: '1px solid rgba(255,107,0,.2)' }}
      >
        {caption}
      </span>
    )}
  </div>
);

const Screens = () => {
  const ref      = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [active, setActive] = useState(0);
  const [step,   setStep]   = useState(0);

  const handleTab = (i) => { setActive(i); setStep(0); };

  const current = tabs[active];
  const isMulti = current.screens.length > 1;

  return (
    <section id="screens" className="py-20 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 md:flex md:items-end md:justify-between"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#FF6B00' }}>
              La app
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
              Así se ve por dentro.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 md:max-w-xs text-sm text-secondary leading-relaxed">
            Interfaz diseñada para accesibilidad — alto contraste, voz y flujos simples.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.15 }}
          className="flex gap-2 flex-wrap mb-8"
        >
          {tabs.map((t, i) => (
            <button
              key={t.id}
              onClick={() => handleTab(i)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={
                active === i
                  ? { background: 'linear-gradient(135deg,#FF6B00,#cc5500)', color: '#fff' }
                  : { background: 'rgba(255,107,0,.08)', color: 'rgba(255,255,255,.5)', border: '1px solid rgba(255,107,0,.12)' }
              }
            >
              {t.label}
            </button>
          ))}
        </motion.div>

        {/* Card */}
        <div
          className="glass rounded-2xl p-6 md:p-8"
          style={{ border: '1px solid rgba(255,107,0,.1)' }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* Mockup */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${active}-${step}`}
                  initial={{ opacity: 0, y: 14, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0,  scale: 1    }}
                  exit={{    opacity: 0, y: -10, scale: 0.97 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <PhoneMockup
                    src={current.screens[step].src}
                    caption={current.screens[step].caption}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x:  0  }}
                  exit={{    opacity: 0, x: -12  }}
                  transition={{ duration: 0.28 }}
                >
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-3">
                    {current.label}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed mb-7 max-w-sm">
                    {current.desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Stepper para Registro */}
              {isMulti && (
                <div className="flex flex-col items-center md:items-start gap-4">
                  <div className="flex gap-3">
                    {current.screens.map((s, i) => (
                      <button
                        key={i}
                        onClick={() => setStep(i)}
                        className="flex flex-col items-center gap-1.5"
                      >
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                          style={
                            step === i
                              ? { background: 'linear-gradient(135deg,#FF6B00,#cc5500)', color: '#fff', boxShadow: '0 4px 16px rgba(255,107,0,.35)' }
                              : { background: 'rgba(255,107,0,.08)', color: 'rgba(255,255,255,.4)', border: '1px solid rgba(255,107,0,.15)' }
                          }
                        >
                          {i + 1}
                        </div>
                        <span
                          className="text-xs font-medium"
                          style={{ color: step === i ? '#FF9A50' : 'rgba(255,255,255,.3)' }}
                        >
                          {s.caption ?? `Vista ${i + 1}`}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(s => Math.max(0, s - 1))}
                      disabled={step === 0}
                      className="px-4 py-2 rounded-full text-xs font-semibold transition-all disabled:opacity-25"
                      style={{ background: 'rgba(255,107,0,.1)', color: '#FF9A50', border: '1px solid rgba(255,107,0,.2)' }}
                    >
                      ← Anterior
                    </button>
                    <button
                      onClick={() => setStep(s => Math.min(current.screens.length - 1, s + 1))}
                      disabled={step === current.screens.length - 1}
                      className="px-4 py-2 rounded-full text-xs font-semibold transition-all disabled:opacity-25"
                      style={{ background: 'linear-gradient(135deg,#FF6B00,#cc5500)', color: '#fff' }}
                    >
                      Siguiente →
                    </button>
                  </div>
                </div>
              )}

              {/* Dots para tabs de 1 pantalla */}
              {!isMulti && (
                <div className="flex gap-2 justify-center md:justify-start">
                  {tabs.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handleTab(i)}
                      className="rounded-full transition-all"
                      style={{
                        width:  active === i ? 20 : 6,
                        height: 6,
                        background: active === i ? '#FF6B00' : 'rgba(255,107,0,.25)',
                      }}
                    />
                  ))}
                </div>
              )}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Screens;