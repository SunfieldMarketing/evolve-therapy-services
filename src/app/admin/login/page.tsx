'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, ArrowRight, ShieldCheck } from 'lucide-react';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        window.location.href = '/admin';
      } else {
        setError('Invalid admin password. Access denied.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0284c7]/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 md:p-12 relative z-10 shadow-2xl"
      >
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-[#0284c7] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Lock className="text-white" size={28} />
          </div>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-serif font-black text-white mb-3">Admin Access</h1>
          <p className="text-white/40 text-sm font-medium uppercase tracking-[0.2em]">Evolve Therapy Services</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-[#38bdf8] uppercase tracking-[0.3em] ml-1">
              Secret Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full bg-white/5 border border-white/10 text-white rounded-2xl px-6 py-4 focus:outline-none focus:border-[#0284c7] focus:bg-white/10 transition-all text-center tracking-[0.5em] placeholder:tracking-normal placeholder:text-white/20"
              required
              autoFocus
            />
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-rose-400 text-xs font-bold text-center"
            >
              {error}
            </motion.p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#0284c7] hover:bg-[#0369a1] text-white py-5 rounded-2xl font-black uppercase tracking-[0.25em] text-xs transition-all flex items-center justify-center gap-3 group disabled:opacity-50"
          >
            {isLoading ? 'Verifying...' : 'Unlock Editor'}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-12 flex items-center justify-center gap-2 text-white/20">
          <ShieldCheck size={14} />
          <span className="text-[10px] font-black uppercase tracking-widest">Secure Admin Portal</span>
        </div>
      </motion.div>
    </div>
  );
}
