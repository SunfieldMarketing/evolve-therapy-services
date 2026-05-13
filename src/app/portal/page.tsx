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
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/5 backdrop-blur-2xl p-10 md:p-14 rounded-[3rem] border border-white/10 shadow-2xl">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="w-20 h-20 bg-[#0284c7] rounded-3xl flex items-center justify-center mb-8 shadow-xl">
              <Lock className="text-white" size={32} />
            </div>
            
            <h1 className="text-4xl font-serif font-black text-white mb-4 tracking-tighter">
              Admin <span className="text-[#0284c7] italic">Dashboard</span>
            </h1>
            <p className="text-white/40 font-light leading-relaxed">
              Please enter your security credentials to access the Evolve Therapy visual editor.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Portal Password"
                className={`w-full bg-white/5 border ${error ? 'border-red-500' : 'border-white/10'} focus:border-[#0284c7] text-white px-8 py-5 rounded-2xl outline-none transition-all duration-300 placeholder:text-white/20 font-bold tracking-widest text-center`}
                autoFocus
              />
              {error && (
                <p className="text-red-500 text-[10px] font-black uppercase tracking-[0.2em] mt-3 text-center">
                  Invalid Access Token
                </p>
              )}
            </div>

            <button 
              type="submit" 
              className="w-full py-6 flex items-center justify-center gap-3 bg-[#0284c7] text-white rounded-2xl font-black uppercase tracking-[0.4em] text-[12px] hover:bg-[#0369a1] transition-all"
            >
              <span>Unlock Editor</span>
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="grid grid-cols-3 gap-4 mt-14 pt-10 border-t border-white/5">
            <div className="flex flex-col items-center gap-2 opacity-30">
              <ShieldCheck className="text-[#0284c7]" size={16} />
              <span className="text-[8px] font-black text-white uppercase tracking-widest">Secure</span>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-30">
              <Zap className="text-yellow-500" size={16} />
              <span className="text-[8px] font-black text-white uppercase tracking-widest">Fast</span>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-30">
              <Star className="text-[#0284c7]" size={16} />
              <span className="text-[8px] font-black text-white uppercase tracking-widest">Premium</span>
            </div>
          </div>
        </div>
        
        <p className="text-center text-white/20 text-[10px] mt-8 font-bold uppercase tracking-[0.3em]">
          Powered by TinaCMS x Evolve Clinical Hub
        </p>
      </div>
    </div>
  );
}
