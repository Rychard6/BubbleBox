// file path: /components/Clients.js

"use client";
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

type Client = {
  name: string;
  comment: string;
  image: string;
};

const clientsData: Client[] = [
  { name: 'Rychard Ryan', comment: 'Serviço excelente! Minhas roupas ficaram impecáveis.', image: '/imagens/Rychard.jpg' },
  { name: 'Raylanne', comment: 'Atendimento rápido e eficiente. Recomendo!', image: '/imagens/Raylanne.jpeg' },
  { name: 'Victor Hugo', comment: 'Minha primeira experiência foi muito positiva, muito prático!', image: '/imagens/Victor.jpeg' },
  { name: 'Branda Lacerda', comment: 'Muito prático e fácil de usar. Adorei!', image: '/imagens/Brenda.jpg' },
];

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Nossos Clientes</h2>
          <div className="w-36 h-1 bg-secondary mx-auto mb-4"></div>
        </div>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={3000}
          renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
            hasPrev && (
              <button
                type="button"
                onClick={clickHandler}
                className="absolute top-1/2 transform -translate-y-1/2 left-4 text-3xl text-primary hover:text-secondary z-10"
              >
                <FaArrowLeft />
              </button>
            )
          }
          renderArrowNext={(clickHandler, hasNext, labelNext) =>
            hasNext && (
              <button
                type="button"
                onClick={clickHandler}
                className="absolute top-1/2 transform -translate-y-1/2 right-4 text-3xl text-primary hover:text-secondary z-10"
              >
                <FaArrowRight />
              </button>
            )
          }
          className="w-full max-w-4xl mx-auto"
        >
          {clientsData.map((client, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <div className='mb-4'>
                <div className="w-24 h-24 overflow-hidden rounded-full shadow-md">
                  <Image src={client.image} alt={client.name} className="object-cover w-full h-full" width={96} height={96} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{client.name}</h3>
              <p className="text-gray-700 italic text-center">"{client.comment}"</p>
            </div>
          ))}
        </Carousel>
      </motion.div>
    </section>
  );
}
