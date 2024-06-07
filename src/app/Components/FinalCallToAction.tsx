// file path: /components/FinalCallToAction.js

"use client";
import { motion } from 'framer-motion';

export default function FinalCallToAction() {
  const handleVisitUsClick = () => {
    window.open('https://www.google.com/maps/place/St.+B+Norte+QNB+05+Sem+Pellos+Depilação+e+Estética,+LOTE+39+LJ+02+-+Taguatinga,+Brasília+-+DF,+72115-050', '_blank');
  };

  return (
    <section id="final-cta" className="py-20 bg-primary text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Experimente a Lavanderia BubbleBox Hoje</h2>
          <p className="text-lg mb-8">Descubra a conveniência e eficiência dos nossos serviços de lavanderia.</p>
          <button onClick={handleVisitUsClick} className="bg-secondary text-primary py-3 px-8 rounded-full font-bold">Visite-nos Hoje</button>
        </div>
      </motion.div>
    </section>
  );
}
