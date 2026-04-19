'use client';

import dynamic from 'next/dynamic';
import { Mail, MapPin, Phone } from 'lucide-react';

// Dynamically import map to avoid SSR errors
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

import 'leaflet/dist/leaflet.css';

const cities = [
  { name: 'Avon Lake', zip: '44012' },
  { name: 'Avon', zip: '44011' },
  { name: 'Westlake', zip: '44145' },
  { name: 'Bay Village', zip: '44140' },
  { name: 'North Ridgeville', zip: '44039' },
  { name: 'Sheffield Lake', zip: '44054' },
  { name: 'Lorain', zip: '44052' },
  { name: 'Elyria', zip: '44035' },
  { name: 'Rocky River', zip: '44116' },
  { name: 'Cleveland', zip: '44101' },
  { name: 'Lakewood', zip: '44107' },
  { name: 'Strongsville', zip: '44136' }
];

export default function ServiceArea() {
  const position: [number, number] = [41.5034, -82.0224]; // Avon Lake, OH

  // Create icon inside component or use a safer method
  const getIcon = () => {
    if (typeof window === 'undefined') return null;
    const L = require('leaflet');
    return L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });
  };

  const icon = getIcon();

  return (
    <section id="locations" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">Service Area & Locations</h2>
          <p className="text-lg text-slate-500 max-w-2xl">
            Headquartered in Avon Lake, Ohio, we provide therapy management consulting services to SNF and LTC facilities throughout the region and beyond.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Map Section */}
          <div className="lg:col-span-8 bg-slate-100 rounded-3xl overflow-hidden min-h-[400px] border border-slate-200">
            {typeof window !== 'undefined' && icon && (
              <MapContainer 
                center={position} 
                zoom={11} 
                scrollWheelZoom={false}
                style={{ height: '500px', width: '100%' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={icon}>
                  <Popup>
                    <strong>Evolve Therapy Services</strong><br />
                    31641 Compass Cove<br />
                    Avon Lake, OH 44012
                  </Popup>
                </Marker>
              </MapContainer>
            )}
          </div>

          {/* City List Section */}
          <div className="lg:col-span-4">
            <div className="bg-secondary p-8 rounded-3xl text-white h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MapPin className="text-primary" /> Serving Nearby Cities
              </h3>
              
              <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                {cities.map((city) => (
                  <div key={city.zip} className="flex flex-col">
                    <span className="font-bold text-slate-100">{city.name}</span>
                    <span className="text-xs text-primary font-medium tracking-widest">{city.zip}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-slate-700 space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="text-primary" size={20} />
                  <span>(888) 386-5820</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-primary" size={20} />
                  <span>info@evolvetherapyservices.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
