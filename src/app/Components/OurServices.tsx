"use client";
import { motion } from 'framer-motion';
import { FaTshirt, FaTruck, FaLock, FaWater } from 'react-icons/fa';

export default function OurServices() {
  return (
    <section id="our-services" className="py-20 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Nossos Serviços</h2>
          <div className="w-32 h-1 bg-secondary mx-auto mb-4"></div>
        </div>
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delayChildren: 0.3, staggerChildren: 0.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="h-56 w-full max-w-sm bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
          >
            <FaTshirt className="text-primary text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-primary mb-2">Lavagem Completa</h3>
            <p className="text-gray-700">Lavagem com detergentes de alta qualidade para todos os tipos de tecidos.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="h-56 w-full max-w-sm bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
          >
            <FaWater className="text-primary text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-primary mb-2">Secagem Rápida</h3>
            <p className="text-gray-700">Seque suas roupas de forma rápida e eficiente com nossos secadores de alta capacidade.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="h-56 w-full max-w-sm bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
          >
            <FaLock className="text-primary text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-primary mb-2">Segurança Garantida</h3>
            <p className="text-gray-700">Seu vestuário é tratado com o máximo cuidado e segurança.</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
