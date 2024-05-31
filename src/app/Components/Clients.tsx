"use client";
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from 'react';

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function fetchClients() {
      const response = await fetch('https://randomuser.me/api/?results=4');
      const data = await response.json();
      setClients(data.results);
    }
    fetchClients();
  }, []);

  return (
    <section id="clients" className="py-20 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Nossos Clientes</h2>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={3000}
          className="w-full max-w-4xl mx-auto"
        >
          {clients.map((client, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <div className='mb-4'>
                <img src={client.picture.large} alt={client.name.first} className="w-24 h-24 rounded-full shadow-md" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{client.name.first} {client.name.last}</h3>
              <p className="text-gray-700 italic text-center">"Excelente serviço, minhas roupas ficaram impecáveis!"</p>
            </div>
          ))}
        </Carousel>
      </motion.div>
    </section>
  );
}