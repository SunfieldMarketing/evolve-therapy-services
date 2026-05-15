'use client';

import dynamic from 'next/dynamic';
import { Mail, MapPin, Phone, Globe } from 'lucide-react';

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
    <section id="locations" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Our Presence</span>
            <h2 className="text-4xl md:text-6xl font-serif text-secondary">
              Strategic Service <br />
              <span className="text-primary italic">Locations</span>
            </h2>
          </div>
          <p className="text-lg text-slate-500 max-w-md leading-relaxed">
            Headquartered in Avon Lake, Ohio, we provide therapy management consulting services to SNF and LTC facilities throughout the region.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-12 xl:col-span-8 h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group relative">
            <div className="absolute top-6 left-6 z-[1000] bg-white p-5 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                  <Globe size={16} />
                </div>
                <div className="font-bold text-secondary">Regional Operations</div>
              </div>
              <p className="text-xs text-slate-500">Actively managing sites across Ohio.</p>
            </div>
            
            {typeof window !== 'undefined' && icon && (
              <MapContainer 
                center={position} 
                zoom={11} 
                scrollWheelZoom={false}
                style={{ height: '600px', width: '100%' }}
                className="z-10"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={icon}>
                  <Popup className="premium-popup">
                    <div className="p-2">
                      <strong className="text-secondary">Evolve Therapy Services</strong><br />
                      <span className="text-slate-500">Avon Lake, OH 44012</span>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            )}
          </div>

          {/* City List Section */}
          <div className="lg:col-span-12 xl:col-span-4">
            <div className="bg-secondary p-12 rounded-[3rem] h-full shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-primary/10 transition-colors">
                 <MapPin size={200} />
              </div>
              
              <h3 className="text-3xl font-serif text-white mb-10 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
                  <MapPin size={24} className="text-white" />
                </div>
                Serving Cities
              </h3>
              
              <div className="grid grid-cols-2 gap-y-6 gap-x-8 relative z-10">
                {cities.map((city) => (
                  <div key={city.zip} className="flex flex-col border-l-2 border-primary/20 pl-4 hover:border-primary transition-colors cursor-default">
                    <span className="font-bold text-white text-lg">{city.name}</span>
                    <span className="text-xs text-primary font-bold tracking-[0.2em]">{city.zip}</span>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-10 border-t border-white/10 space-y-6">
                <div className="flex items-center gap-4 text-white hover:text-primary transition-colors">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                    <Phone size={18} />
                  </div>
                  <span className="font-bold">(888) 386-5820</span>
                </div>
                <div className="flex items-center gap-4 text-white hover:text-primary transition-colors">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <span className="font-bold text-sm">info@evolvetherapyservices.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
