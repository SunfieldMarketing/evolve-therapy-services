'use client';

import { useState, useEffect } from 'react';
import { Lock, ArrowRight, ShieldCheck, Zap, Star } from 'lucide-react';

export default function AdminGate() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Use environment variable for the master password
  const MASTER_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  useEffect(() => {
    // Check if already authenticated in this session
    const authStatus = sessionStorage.getItem('evolve_admin_auth');
    if (authStatus === 'true') {
      window.location.href = '/admin/index.html';
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === MASTER_PASSWORD) {
      document.cookie = "evolve_admin_auth=true; path=/; max-age=86400; SameSite=Strict";
      sessionStorage.setItem('evolve_admin_auth', 'true');
      window.location.href = '/admin/index.html';
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  if (isLoading) return null;

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #0284c7 0%, transparent 70%)' }} />
      
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/5 backdrop-blur-2xl p-10 md:p-14 rounded-[3rem] border border-white/10 shadow-2xl">
          <div className="flex flex-col items-center text-center mb-10">
            <Link href="/" className="mb-12 group transition-opacity hover:opacity-70">
              <img 
                src="https://res.cloudinary.com/dai2pg27n/image/upload/v1777350681/d123fe7f-e3af-443f-933d-550dd5206381.png" 
                alt="Evolve Therapy Services"
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>

            <div className="w-20 h-20 bg-[#0284c7] rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-[#0284c7]/20">
              <Lock className="text-white" size={32} />
            </div>
            
            <h1 className="text-4xl font-serif font-black text-white mb-4 tracking-tighter">
              Admin <span className="text-[#0284c7] italic">Portal</span>
            </h1>
            <p className="text-white/40 text-[13px] font-light leading-relaxed px-4">
              Enter your security credentials to access the Evolve Clinical visual editing suite.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={`w-full bg-white/5 border ${error ? 'border-red-500' : 'border-white/10'} focus:border-[#0284c7] text-white px-8 py-5 rounded-2xl outline-none transition-all duration-300 placeholder:text-white/10 font-black tracking-[0.5em] text-center text-xl`}
                autoFocus
              />
              {error && (
                <p className="text-red-500 text-[10px] font-black uppercase tracking-[0.2em] mt-3 text-center">
                  Access Denied
                </p>
              )}
            </div>

            <button 
              type="submit" 
              className="group w-full py-6 flex items-center justify-center gap-3 bg-[#0284c7] text-white rounded-2xl font-black uppercase tracking-[0.4em] text-[12px] hover:bg-[#0369a1] transition-all shadow-xl shadow-[#0284c7]/20"
            >
              <span>Initialize Suite</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>

          <div className="grid grid-cols-3 gap-4 mt-14 pt-10 border-t border-white/5">
            <div className="flex flex-col items-center gap-2 opacity-30">
              <ShieldCheck className="text-[#0284c7]" size={16} />
              <span className="text-[8px] font-black text-white uppercase tracking-widest">Encrypted</span>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-30">
              <Zap className="text-[#0284c7]" size={16} />
              <span className="text-[8px] font-black text-white uppercase tracking-widest">Real-time</span>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-30">
              <Star className="text-[#0284c7]" size={16} />
              <span className="text-[8px] font-black text-white uppercase tracking-widest">Verified</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-6 mt-10">
          <Link href="/" className="text-white/40 hover:text-[#0284c7] text-[10px] font-black uppercase tracking-[0.4em] transition-colors flex items-center gap-2 group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Public Site
          </Link>
          <p className="text-white/10 text-[9px] font-bold uppercase tracking-[0.4em]">
            Evolve Therapy Services v3.1.0
          </p>
        </div>
      </div>
    </div>
  );
}
