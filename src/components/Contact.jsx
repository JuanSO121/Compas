import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const links = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'juanjosesanchezocampo2@gmail.com',
    href:  'mailto:juanjosesanchezocampo2@gmail.com',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'Juan José Sánchez Ocampo',
    href:  'https://www.linkedin.com/in/juansanchez01',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'JuanSO121 / compas-client-mobile',
    href:  'https://github.com/JuanSO121/compas-client-mobile',
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="py-7 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>


        {/* Footer — autoría discreta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.45 }}
          className="pt-8 border-t divider flex flex-col sm:flex-row justify-between gap-3 text-xs text-secondary"
        >
          <div className="flex items-center gap-2">
            <img src="/compas.png" alt="COMPAS" className="w-4 h-4 opacity-60" />
            <span>© 2026 COMPAS · Juan José Sánchez Ocampo &amp; Carlos Eduardo Rangel</span>
          </div>
          <span>Universidad de San Buenaventura Cali</span>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;