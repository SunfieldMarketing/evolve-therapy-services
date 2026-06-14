'use client';

import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar data={undefined} />
      
      <div className="flex-1 min-h-[100svh] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden mt-16 sm:mt-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0284c7]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10">
          <div className="text-[#0284c7] font-black font-serif text-9xl tracking-tighter mb-4 opacity-20">404</div>
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-[#0f172a] tracking-tight mb-6 uppercase">
            Page Not <span className="text-[#0284c7] italic font-medium">Found</span>
          </h1>
          <p className="text-slate-500 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/" 
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#0284c7] text-white rounded-full font-black uppercase tracking-[0.2em] text-[12px] shadow-xl hover:bg-[#0369a1] transition-all hover:-translate-y-1"
            >
              <Home size={16} /> Return Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-[#0f172a] border border-slate-200 rounded-full font-black uppercase tracking-[0.2em] text-[12px] shadow-sm hover:bg-slate-50 transition-all hover:-translate-y-1"
            >
              <ArrowLeft size={16} /> Go Back
            </button>
          </div>
        </div>
      </div>
      
      <Footer data={undefined} />
    </main>
  );
}
