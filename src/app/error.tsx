'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCcw } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service like Sentry
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar data={undefined} />
      
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 bg-white p-10 sm:p-16 rounded-[3rem] border border-slate-100 shadow-2xl max-w-2xl w-full">
          <div className="w-20 h-20 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-red-100">
            <AlertTriangle size={36} />
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-serif font-black text-[#0f172a] tracking-tight mb-4 uppercase">
            Something went <span className="text-red-500 italic font-medium">wrong</span>
          </h1>
          <p className="text-slate-500 text-base sm:text-lg mb-10 leading-relaxed">
            We apologize for the inconvenience. An unexpected error has occurred while loading this page. Our team has been notified.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => reset()}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#0f172a] text-white rounded-full font-black uppercase tracking-[0.2em] text-[12px] shadow-xl hover:bg-black transition-all hover:-translate-y-1 w-full sm:w-auto"
            >
              <RefreshCcw size={16} /> Try Again
            </button>
            <Link 
              href="/" 
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-slate-100 text-[#0f172a] border border-slate-200 rounded-full font-black uppercase tracking-[0.2em] text-[12px] shadow-sm hover:bg-slate-200 transition-all hover:-translate-y-1 w-full sm:w-auto"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
      
      <Footer data={undefined} />
    </main>
  );
}
