"use client";
import { motion } from 'framer-motion';
import { FaWater, FaTshirt } from 'react-icons/fa';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Como funciona</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="h-56 w-8/12 max-w-sm w-full bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
            <FaWater className="text-primary text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Lavagem de Qualidade</h3>
            <p className="text-gray-700">Nossa lavagem é rápida e eficiente, garantindo que suas roupas fiquem limpas e frescas.</p>
          </div>
          <div className="h-56 w-8/12 max-w-sm w-full bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
            <FaTshirt className="text-primary text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Secagem Rápida</h3>
            <p className="text-gray-700">Nossos secadores de alta capacidade garantem que suas roupas estejam secas em pouco tempo.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
