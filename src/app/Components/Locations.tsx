"use client";
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import dynamic from 'next/dynamic';

// Use require to import the images as string URLs
const iconUrl = require('leaflet/dist/images/marker-icon.png').default;
const shadowUrl = require('leaflet/dist/images/marker-shadow.png').default;

let DefaultIcon = L.icon({
  iconUrl: iconUrl,
  shadowUrl: shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Ensure the code that uses window is only run on the client
if (typeof window !== 'undefined') {
  L.Marker.prototype.options.icon = DefaultIcon;
}

// Dynamically import the MapContainer component to ensure it's only rendered on the client
const DynamicMap = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });

export default function Locations() {
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
          <DynamicMap center={[-15.831, -48.058]} zoom={15} style={{ height: "400px", width: "100%" }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-15.831, -48.058]}>
              <Popup>
                QNB 5 lote 39 loja 2 <br /> Taguatinga Norte, Brasília - DF
              </Popup>
            </Marker>
          </DynamicMap>
        </div>
      </motion.div>
    </section>
  );
}
