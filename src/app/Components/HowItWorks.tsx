"use client";
import { motion } from 'framer-motion';
import { FaWater, FaTshirt, FaBox } from 'react-icons/fa';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Como funciona</h2>
          <div className="w-32 h-1 bg-secondary mx-auto mb-4"></div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="h-56 w-full max-w-sm bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
          >
            <FaWater className="text-primary text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-primary mb-2">Lavagem de Qualidade</h3>
            <p className="text-gray-700">Nossa lavagem é rápida e eficiente, garantindo que suas roupas fiquem limpas e frescas.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="h-56 w-full max-w-sm bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
          >
            <FaTshirt className="text-primary text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-primary mb-2">Secagem Rápida</h3>
            <p className="text-gray-700">Nossos secadores de alta capacidade garantem que suas roupas estejam secas em pouco tempo.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="h-56 w-full max-w-sm bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
          >
            <FaBox className="text-primary text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-primary mb-2">Cesta Medidora</h3>
            <p className="text-gray-700">Lave toda a roupa que couber na nossa cesta medidora por apenas R$16,50.</p>
          </motion.div>
        </div>
     
        </motion.div>
    </section>
  );
}
