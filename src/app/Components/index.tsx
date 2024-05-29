"use client";
import Head from 'next/head';
import Header from './header';
import { FaWater, FaTshirt } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// Corrigir o ícone padrão do Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Bubble Box</title>
        <meta name="description" content="Bubble Box - Rede de Lavanderias Self Service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="w-full">
        <section className="relative w-full h-screen bg-secondary text-white flex flex-col justify-center items-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-wave-pattern bg-cover bg-center z-0"></div>
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
              className="mt-8 inline-block bg-white text-primary py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-200 transition transform hover:-translate-y-1 animate-bounce"
            >
              Saiba mais
            </a>
          </div>
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-0 left-0 w-full h-32 bg-primary"
          />
        </section>

        <section id="how-it-works" className="py-20 bg-gray-50">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">Como funciona</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="h-56 w-8/12 max-w-sm w-full bg-white shadow-lg rounded-lg p-6 text-center">
                <FaWater className="text-primary text-5xl mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Lavagem de Qualidade</h3>
                <p className="text-gray-700">Nossa lavagem é rápida e eficiente, garantindo que suas roupas fiquem limpas e frescas.</p>
              </div>
              <div className="h-56 w-8/12 max-w-sm w-full bg-white shadow-lg rounded-lg p-6 text-center">
                <FaTshirt className="text-primary text-5xl mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Secagem Rápida</h3>
                <p className="text-gray-700">Nossos secadores de alta capacidade garantem que suas roupas estejam secas em pouco tempo.</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="benefits" className="py-20 bg-gray-100">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">Benefícios</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="h-56 w-8/12 max-w-sm w-full bg-white shadow-lg rounded-lg p-6 text-center">
                <FaWater className="text-primary text-5xl mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Economia de Tempo</h3>
                <p className="text-gray-700">Com nossas máquinas modernas, suas roupas são lavadas e secas rapidamente.</p>
              </div>
              <div className="h-56 w-8/12 max-w-sm w-full bg-white shadow-lg rounded-lg p-6 text-center">
                <FaTshirt className="text-primary text-5xl mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Economia de Dinheiro</h3>
                <p className="text-gray-700">Nossos preços são acessíveis e oferecemos planos mensais para você economizar ainda mais.</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="locations" className="py-20 bg-gray-50">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Onde estamos</h2>
            <div className="flex justify-center">
              <MapContainer center={[-15.831, -48.058]} zoom={15} style={{ height: "400px", width: "100%" }}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-15.831, -48.058]}>
                  <Popup>
                    QNB 5 lote 39 loja 2 <br /> Taguatinga Norte, Brasília - DF
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </motion.div>
        </section>

        <section id="clients" className="py-20 bg-gray-100">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">Nossos clientes</h2>
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              autoPlay
              interval={3000}
              className="w-full max-w-4xl mx-auto"
            >
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                <img src="https://via.placeholder.com/150" alt="Client 1" className="w-24 h-24 rounded-full mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cliente 1</h3>
                <p className="text-gray-700">"Excelente serviço, minhas roupas ficaram impecáveis!"</p>
              </div>
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                <img src="https://via.placeholder.com/150" alt="Client 2" className="w-24 h-24 rounded-full mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cliente 2</h3>
                <p className="text-gray-700">"Muito rápido e prático, recomendo a todos!"</p>
              </div>
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                <img src="https://via.placeholder.com/150" alt="Client 3" className="w-24 h-24 rounded-full mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cliente 3</h3>
                <p className="text-gray-700">"Preços ótimos e atendimento excelente."</p>
              </div>
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                <img src="https://via.placeholder.com/150" alt="Client 4" className="w-24 h-24 rounded-full mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cliente 4</h3>
                <p className="text-gray-700">"Serviço muito eficiente, super recomendo!"</p>
              </div>
            </Carousel>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
