"use client";
import { motion } from 'framer-motion';
import { FaClock, FaMoneyBillWave } from 'react-icons/fa';

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Benefícios</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="h-56 w-8/12 max-w-sm w-full bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
            <FaClock className="text-primary text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Economia de Tempo</h3>
            <p className="text-gray-700">Com nossas máquinas modernas, suas roupas são lavadas e secas rapidamente.</p>
          </div>
          <div className="h-56 w-8/12 max-w-sm w-full bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
            <FaMoneyBillWave className="text-primary text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Economia de Dinheiro</h3>
            <p className="text-gray-700">Nossos preços são acessíveis e oferecemos planos mensais para você economizar ainda mais.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
