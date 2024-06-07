// file path: /components/Footer.js

"use client";
import { FaTiktok, FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6 space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="mx-2">
            <FaFacebookF className="text-3xl hover:text-gray-400" />
          </a>
          <a href="https://www.instagram.com/Bubbleboxtaguatinga" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="mx-2">
            <FaInstagram className="text-3xl hover:text-gray-400" />
          </a>
          <a href="https://www.tiktok.com/@bubbleboxtaguatinga" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="mx-2">
            <FaTiktok className="text-3xl hover:text-gray-400" />
          </a>
        </div>
        <div className="text-gray-400 space-x-4">
          <a href="#" className="hover:text-white">Info</a>
          <span className="mx-1">·</span>
          <a href="https://wa.me/5561996966769" className="hover:text-white">Contato</a>
          <span className="mx-1">·</span>
          <a href="#faq" className="hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  );
}
