export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-secondary">
      {/* Background Video/Image Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
          poster="https://images.unsplash.com/photo-1576091160550-2173ff9e5ece?auto=format&fit=crop&q=80"
        >
          <source 
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27df34a234b6ad388b02e754a106a77d7042578&profile_id=165&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-10 shadow-xl shadow-primary/10"
            >
              <Activity size={14} className="animate-pulse" /> Compassionate Therapy Management
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl sm:text-7xl lg:text-[6.5rem] font-serif font-black text-white leading-[0.9] mb-10 tracking-tight"
            >
              Changing How <br />
              <span className="text-primary italic font-medium">Therapy Functions</span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/60 mb-12 leading-relaxed max-w-2xl font-light"
            >
              Our unique therapy management model <span className="text-white font-bold italic">evolves</span> with your business. Retain 100% of your revenue while we drive clinical and financial success.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-5 mb-16"
            >
              <a 
                href="/contact" 
                className="group bg-primary text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-secondary transition-all duration-500 flex items-center justify-center shadow-2xl shadow-primary/20"
              >
                Schedule Consultation <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </a>
              <a 
                href="/services" 
                className="bg-white/5 backdrop-blur-xl text-white border border-white/10 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all duration-500 flex items-center justify-center"
              >
                Our Clinical Solutions
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-16 pt-10 border-t border-white/10"
            >
              <div>
                <div className="text-4xl font-serif font-black text-white mb-2">100%</div>
                <div className="text-[10px] text-white/40 font-black uppercase tracking-[0.2em]">Revenue Retained</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <div className="text-4xl font-serif font-black text-white mb-2">24/7</div>
                <div className="text-[10px] text-white/40 font-black uppercase tracking-[0.2em]">Clinical Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative h-[700px] w-full rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5">
                 <Image 
                   src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80" 
                   alt="Senior Health & Wellness" 
                   fill
                   className="object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                   priority
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-60" />
            </div>

            {/* Float Cards */}
            <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -bottom-10 -left-16 bg-white/95 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl flex items-center gap-6 border border-white"
            >
               <div className="w-16 h-16 bg-primary/10 text-primary rounded-3xl flex items-center justify-center shadow-inner">
                 <Activity size={32} />
               </div>
               <div>
                  <div className="text-lg font-serif font-black text-secondary leading-tight">In-House <br /> Excellence</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Customized Oversight</div>
               </div>
            </motion.div>

            <motion.div 
               animate={{ y: [0, 20, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute top-20 -right-10 bg-primary p-8 rounded-[2.5rem] shadow-2xl flex items-center gap-4 text-white border border-primary-foreground/10"
            >
               <Users size={28} />
               <div className="font-black text-xs uppercase tracking-widest">Team Success</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent z-10" />
    </section>
  );
}
