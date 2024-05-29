"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`py-6 fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-primary/75 backdrop-blur-sm' : 'bg-primary text-white'}`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center cursor-pointer">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <Image
            src="https://bubblebox.com.br/wp-content/uploads/2024/02/Group-1000002638.png"
            alt="Bubble Box Logo"
            width={150}
            height={40}
          />
        </div>
        <nav>
          <ul className="flex space-x-8 text-lg">
            <li className="relative group">
              <a href="#how-it-works" className="hover:text-secondary">Como funciona</a>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </li>
            <li className="relative group">
              <a href="#benefits" className="hover:text-secondary">Benefícios</a>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </li>
            <li className="relative group">
              <a href="#locations" className="hover:text-secondary">Onde estamos</a>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </li>
            <li className="relative group">
              <a href="#clients" className="hover:text-secondary">Nossos clientes</a>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </li>
          </ul>
        </nav>
        <div>
          <a href="https://wa.me/your-number-here" className="flex items-center border border-white py-2 px-4 rounded-md text-white hover:bg-green-500 hover:border-green-500 hover:text-white transition">
            Fale conosco<FaWhatsapp className="ml-2 w-8 h-8" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
