"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`py-4 fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-primary/75 backdrop-blur-sm' : 'bg-primary text-white'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <Image
            src="https://bubblebox.com.br/wp-content/uploads/2024/02/Group-1000002638.png"
            alt="Bubble Box Logo"
            width={150}
            height={40}
          />
        </div>
        <nav className="hidden md:flex space-x-8 text-lg">
          <ul className="flex space-x-8">
            <li className="relative group">
              <a href="#how-it-works" onClick={(e) => handleSmoothScroll(e, '#how-it-works')} className="hover:text-secondary">Como funciona</a>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </li>
            <li className="relative group">
              <a href="#benefits" onClick={(e) => handleSmoothScroll(e, '#benefits')} className="hover:text-secondary">Benefícios</a>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </li>
            <li className="relative group">
              <a href="#locations" onClick={(e) => handleSmoothScroll(e, '#locations')} className="hover:text-secondary">Onde estamos</a>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </li>
            <li className="relative group">
              <a href="#clients" onClick={(e) => handleSmoothScroll(e, '#clients')} className="hover:text-secondary">Nossos clientes</a>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex">
          <a href="https://wa.me/your-number-here" className="flex items-center border border-white py-2 px-4 rounded-md text-white hover:bg-green-500 hover:border-green-500 hover:text-white transition">
            Fale conosco<FaWhatsapp className="ml-2 w-8 h-8" />
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-primary text-white py-4">
          <ul className="flex flex-col space-y-4 items-center">
            <li className="relative group">
              <a href="#how-it-works" onClick={(e) => handleSmoothScroll(e, '#how-it-works')} className="hover:text-secondary">Como funciona</a>
            </li>
            <li className="relative group">
              <a href="#benefits" onClick={(e) => handleSmoothScroll(e, '#benefits')} className="hover:text-secondary">Benefícios</a>
            </li>
            <li className="relative group">
              <a href="#locations" onClick={(e) => handleSmoothScroll(e, '#locations')} className="hover:text-secondary">Onde estamos</a>
            </li>
            <li className="relative group">
              <a href="#clients" onClick={(e) => handleSmoothScroll(e, '#clients')} className="hover:text-secondary">Nossos clientes</a>
            </li>
            <li className="relative group mt-4">
              <a href="https://wa.me/your-number-here" className="flex items-center border border-white py-2 px-4 rounded-md text-white hover:bg-green-500 hover:border-green-500 hover:text-white transition">
                Fale conosco<FaWhatsapp className="ml-2 w-8 h-8" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
