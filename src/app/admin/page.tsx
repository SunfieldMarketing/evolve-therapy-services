'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ArrowRight, ShieldCheck, Zap, Star } from 'lucide-react';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';

export default function AdminGate() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // The password requested by the user
  const MASTER_PASSWORD = "Admin#2026!";

  useEffect(() => {
    // Check if already authenticated in this session
    const authStatus = sessionStorage.getItem('evolve_admin_auth');
    if (authStatus === 'true') {
      // If already authenticated, redirect to the Tina dashboard
      window.location.href = '/admin/index.html';
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === MASTER_PASSWORD) {
      sessionStorage.setItem('evolve_admin_auth', 'true');
      setIsAuthenticated(true);
      // Redirect to the static TinaCMS dashboard
      window.location.href = '/admin/index.html';
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  if (isLoading) return null;

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#0284c7]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-[#0284c7]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-white/5 backdrop-blur-2xl p-10 md:p-14 rounded-[3rem] border border-white/10 shadow-2xl">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="w-20 h-20 bg-[#0284c7] rounded-3xl flex items-center justify-center mb-8 shadow-[0_20px_40px_rgba(2,132,199,0.3)]">
              <Lock className="text-white" size={32} />
            </div>
            
            <div className="mb-6">
              <AnimatedGradientText className="justify-center text-white">
                <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse inline-block mr-2" />
                CMS Protected Access
              </AnimatedGradientText>
            </div>

            <h1 className="text-4xl font-serif font-black text-white mb-4 tracking-tighter">
              Admin <span className="text-[#0284c7] italic">Dashboard</span>
            </h1>
            <p className="text-white/40 font-light leading-relaxed">
              Please enter your security credentials to access the Evolve Therapy visual editor.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Portal Password"
                className={`w-full bg-white/5 border ${error ? 'border-red-500 animate-shake' : 'border-white/10'} focus:border-[#0284c7] text-white px-8 py-5 rounded-2xl outline-none transition-all duration-300 placeholder:text-white/20 font-bold tracking-widest text-center`}
                autoFocus
              />
              <AnimatePresence>
                {error && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-red-500 text-[10px] font-black uppercase tracking-[0.2em] mt-3 text-center"
                  >
                    Invalid Access Token
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <button type="submit" className="w-full group relative overflow-hidden">
              <ShimmerButton 
                background="#0284c7" 
                shimmerColor="rgba(255,255,255,0.4)" 
                borderRadius="1rem" 
                className="w-full py-6 flex items-center justify-center gap-3"
              >
                <span className="font-black uppercase tracking-[0.4em] text-[12px] text-white">Unlock Editor</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </ShimmerButton>
            </button>
          </form>

          {/* Social Proof Badges */}
          <div className="grid grid-cols-3 gap-4 mt-14 pt-10 border-t border-white/5">
            <div className="flex flex-col items-center gap-2 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
              <ShieldCheck className="text-[#0284c7]" size={16} />
              <span className="text-[8px] font-black text-white uppercase tracking-widest">Secure</span>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
              <Zap className="text-yellow-500" size={16} />
              <span className="text-[8px] font-black text-white uppercase tracking-widest">Fast</span>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
              <Star className="text-[#0284c7]" size={16} />
              <span className="text-[8px] font-black text-white uppercase tracking-widest">Premium</span>
            </div>
          </div>
        </div>
        
        <p className="text-center text-white/20 text-[10px] mt-8 font-bold uppercase tracking-[0.3em]">
          Powered by TinaCMS x Evolve Clinical Hub
        </p>
      </motion.div>

      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
        .animate-shake {
          animation: shake 0.2s ease-in-out 0s 2;
        }
      `}</style>
    </div>
  );
}
