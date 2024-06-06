"use client";
import { motion } from 'framer-motion';
import { FaClock, FaMoneyBillWave, FaThumbsUp } from 'react-icons/fa';

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Benefícios</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-4"></div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="h-56 w-full max-w-sm bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
          >
            <FaClock className="text-primary text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-primary mb-2">Economia de Tempo</h3>
            <p className="text-gray-700">Com nossas máquinas modernas, suas roupas são lavadas e secas rapidamente.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="h-56 w-full max-w-sm bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
          >
            <FaMoneyBillWave className="text-primary text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-primary mb-2">Economia de Dinheiro</h3>
            <p className="text-gray-700">Nossos preços são acessíveis e oferecemos planos mensais para você economizar ainda mais.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="h-56 w-full max-w-sm bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
          >
            <FaThumbsUp className="text-primary text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-primary mb-2">Alta Qualidade</h3>
            <p className="text-gray-700">Nossos serviços garantem uma lavagem de alta qualidade para suas roupas.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
