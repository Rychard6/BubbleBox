"use client";
import Head from 'next/head';
import Header from './header';
import HeroSection from './HeroSection';
import HowItWorks from './HowItWorks';
import Benefits from './Benefits';
import OurServices from './OurServices';
import PricingPlans from './PricingPlans';
import Locations from './Locations';
import Clients from './Clients';
import FinalCallToAction from './FinalCallToAction';
import Footer from './Footer';

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
        <HeroSection />
        <HowItWorks />
        <Benefits />
        <OurServices />
        <PricingPlans />
        <Locations />
        <Clients />
        <FinalCallToAction />
      </main>
      <Footer />
    </div>
  );
}
