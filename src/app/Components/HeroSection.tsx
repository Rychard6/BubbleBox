"use client";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-secondary text-white flex flex-col justify-center items-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-wave-pattern bg-cover bg-center z-0 before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/60 before:to-transparent"></div>
      <div className="relative z-10 px-4">
        <h1 className="text-6xl font-bold mb-4 animate-fade-in">
          Bem-vindo à Bubble Box
        </h1>
        <p className="text-2xl mb-8">
          <Typewriter
            words={['Sua rede de lavanderias self service', 'Economize tempo', 'Economize dinheiro']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
        <a
          href="#how-it-works"
          className="mt-8 inline-block bg-white text-primary py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-200 transition transform hover:-translate-y-1 animate-bounce shadow-lg"
        >
          Saiba mais
        </a>
      </div>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 left-0 w-full h-32 bg-primary flex justify-center items-center"
      >
        <FaArrowDown className="text-3xl text-white animate-pulse" />
      </motion.div>
    </section>
  );
}
