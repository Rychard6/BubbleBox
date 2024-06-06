// file path: /src/app/Components/Locations.tsx

"use client";
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';

// Dynamically import the required react-leaflet components to ensure they are only rendered on the client
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

export default function Locations() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const L = require('leaflet');
      const iconUrl = require('leaflet/dist/images/marker-icon.png').default;
      const shadowUrl = require('leaflet/dist/images/marker-shadow.png').default;

      const DefaultIcon = L.icon({
        iconUrl: iconUrl,
        shadowUrl: shadowUrl,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      L.Marker.prototype.options.icon = DefaultIcon;
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
          )}
        </div>
      </motion.div>
    </section>
  );
}
