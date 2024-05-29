"use client";
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Bubble Box</title>
        <meta name="description" content="Bubble Box - Rede de Lavanderias Self Service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-primary text-white">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src="https://bubblebox.com.br/wp-content/uploads/2024/02/Group-1000002638.png" alt="Bubble Box Logo" width={150} height={40} />
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#how-it-works">Como funciona</a></li>
              <li><a href="#benefits">Benefícios</a></li>
              <li><a href="#locations">Onde estamos</a></li>
              <li><a href="#clients">Nossos clientes</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <a href="https://wa.me/your-number-here" className="border border-white py-2 px-4 rounded-md text-white hover:bg-white hover:text-primary transition">
            Contate-nos no WhatsApp
          </a>
        </div>
      </div>
    </header>

      <main className="container mx-auto p-4">
        <section className="text-center py-20 bg-secondary text-white">
          <h1 className="text-4xl font-bold mb-4">Bem-vindo à Bubble Box</h1>
          <p className="text-xl">Sua rede de lavanderias self service</p>
          <a href="#how-it-works" className="mt-8 inline-block bg-white text-primary py-2 px-4 rounded-md hover:bg-gray-200">Saiba mais</a>
        </section>

        <section id="how-it-works" className="py-20">
          <h2 className="text-3xl font-bold text-center mb-8">Como funciona</h2>
          <div className="flex justify-center">
            {/* Adicione conteúdo aqui */}
          </div>
        </section>

        <section id="benefits" className="py-20 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-8">Benefícios</h2>
          <div className="flex justify-center">
            {/* Adicione conteúdo aqui */}
          </div>
        </section>

        <section id="locations" className="py-20">
          <h2 className="text-3xl font-bold text-center mb-8">Onde estamos</h2>
          <div className="flex justify-center">
            {/* Adicione conteúdo aqui */}
          </div>
        </section>

        <section id="clients" className="py-20 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-8">Nossos clientes</h2>
          <div className="flex justify-center">
            {/* Adicione conteúdo aqui */}
          </div>
        </section>
      </main>
    </div>
  );
}