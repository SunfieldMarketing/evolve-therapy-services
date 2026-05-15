'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Lock, ArrowRight, ShieldCheck, Zap, Star, Loader2 } from 'lucide-react';

export default function PortalPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/portal-auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        // Correct — redirect to TinaCMS admin
        window.location.href = '/admin/index.html';
      } else {
        // Wrong password
        setError(true);
        setShake(true);
        setPassword('');
        setTimeout(() => {
          setError(false);
          setShake(false);
        }, 600);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Glow */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #0284c7 0%, transparent 70%)' }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#0284c7 1px, transparent 1px), linear-gradient(90deg, #0284c7 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 w-full max-w-md">
        <div
          className={`bg-white/5 backdrop-blur-2xl p-10 md:p-14 rounded-[3rem] border shadow-2xl transition-all duration-300 ${
            shake ? 'border-red-500/60' : 'border-white/10'
          }`}
          style={shake ? { animation: 'shake 0.5s ease-in-out' } : {}}
        >
          {/* Logo */}
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

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
              <input
                id="portal-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••"
                disabled={loading}
                className={`w-full bg-white/5 border ${
                  error ? 'border-red-500' : 'border-white/10 focus:border-[#0284c7]'
                } text-white px-8 py-5 rounded-2xl outline-none transition-all duration-300 placeholder:text-white/20 font-black tracking-[0.5em] text-center text-xl disabled:opacity-50`}
                autoFocus
                autoComplete="current-password"
              />
              {error && (
                <p className="text-red-400 text-[10px] font-black uppercase tracking-[0.2em] mt-3 text-center">
                  Access Denied — Incorrect Credentials
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || !password}
              className="group w-full py-6 flex items-center justify-center gap-3 bg-[#0284c7] text-white rounded-2xl font-black uppercase tracking-[0.4em] text-[12px] hover:bg-[#0369a1] transition-all shadow-xl shadow-[#0284c7]/20 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Verifying&hellip;</span>
                </>
              ) : (
                <>
                  <span>Initialize Suite</span>
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Trust badges */}
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
          <Link
            href="/"
            className="text-white/40 hover:text-[#0284c7] text-[10px] font-black uppercase tracking-[0.4em] transition-colors flex items-center gap-2 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Public Site
          </Link>
          <p className="text-white/10 text-[9px] font-bold uppercase tracking-[0.4em]">
            Evolve Therapy Services v3.1.0
          </p>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          15%       { transform: translateX(-8px); }
          30%       { transform: translateX(8px); }
          45%       { transform: translateX(-6px); }
          60%       { transform: translateX(6px); }
          75%       { transform: translateX(-4px); }
          90%       { transform: translateX(4px); }
        }
      `}</style>
    </div>
  );
}
