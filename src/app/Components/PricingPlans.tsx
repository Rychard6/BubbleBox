"use client";
import { motion } from 'framer-motion';

export default function PricingPlans() {
  return (
    <section id="pricing-plans" className="py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Preços</h2>
          <div className="w-14 h-1 bg-secondary mx-auto mb-4"></div>
        </div>
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delayChildren: 0.3, staggerChildren: 0.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="h-72 w-full max-w-sm bg-gray-50 shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
          >
            <h3 className="text-2xl font-semibold text-primary mb-2">Lavagem</h3>
            <p className="text-gray-700 mb-4">Lave todas as roupas que couberem na nossa cesta medidora.</p>
            <p className="text-3xl font-bold text-primary mb-4">R$16,50/cesta</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="h-72 w-full max-w-sm bg-gray-50 shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
          >
            <h3 className="text-2xl font-semibold text-primary mb-2">Secagem</h3>
            <p className="text-gray-700 mb-4">Seque suas roupas de forma rápida e eficiente.</p>
            <p className="text-3xl font-bold text-primary mb-4">R$16,50/cesta</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
