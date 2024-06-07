"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Dynamically import the required react-leaflet components to ensure they are only rendered on the client
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

export default function Locations() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const L = require('leaflet');
      const iconUrl = '/imagens/marker.png';
      

      const customIcon = L.icon({
        iconUrl: iconUrl,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
        shadowSize: [41, 41],
      });

      L.Marker.prototype.options.icon = customIcon;
    }
  }, []);

  return (
    <section id="locations" className="py-20 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Onde estamos</h2>
        <div className="flex justify-center">
          {typeof window !== 'undefined' && (
            <MapContainer center={[-15.828192043095838, -48.06040551580868]} zoom={15} style={{ height: "400px", width: "100%" }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[-15.828192043095838, -48.06040551580868]}>
                <Popup>
                  Lavanderia Bubble Box Taguatinga <br />
                  St. B Norte QNB 05, Sem Pellos Depilação e Estética, LOTE 39 LJ 02 <br />
                  Taguatinga, Brasília - DF, 72115-050
                </Popup>
              </Marker>
            </MapContainer>
          )}
        </div>
      </motion.div>
    </section>
  );
}
