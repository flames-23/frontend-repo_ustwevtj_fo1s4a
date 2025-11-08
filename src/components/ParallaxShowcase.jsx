import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Layer = ({ speed = 0.2, className = '', children }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -100 * speed]);
  return (
    <motion.div style={{ y }} className={`pointer-events-none absolute inset-0 ${className}`}>
      {children}
    </motion.div>
  );
};

const ParallaxShowcase = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#070A0F] via-[#060912] to-[#05070C] py-24">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <Layer speed={0.15}>
          <div className="absolute -left-10 top-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        </Layer>
        <Layer speed={0.25}>
          <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
        </Layer>
        <Layer speed={0.35}>
          <div className="absolute left-1/2 top-1/2 h-80 w-[36rem] -translate-x-1/2 -translate-y-1/2 rotate-6 rounded-3xl border border-white/5 bg-white/5 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" />
        </Layer>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-cyan-400/20 bg-white/5 p-10 backdrop-blur-xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6">
              <h3 className="text-lg font-semibold text-cyan-100">Metals</h3>
              <p className="mt-2 text-sm text-cyan-100/70">High-reflectance alloys with controlled grain and superior fatigue resistance.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6">
              <h3 className="text-lg font-semibold text-cyan-100">Composites</h3>
              <p className="mt-2 text-sm text-cyan-100/70">Layered carbon matrices engineered for stiffness-to-weight excellence.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6">
              <h3 className="text-lg font-semibold text-cyan-100">Glass</h3>
              <p className="mt-2 text-sm text-cyan-100/70">Optically pure panels with anti-reflective nano‑coatings and chromatic edges.</p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              'https://images.unsplash.com/photo-1542238068-7f2b2a9c44ac?q=80&w=1600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop',
            ].map((src, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <img src={src} alt="material" className="h-64 w-full object-cover opacity-80 mix-blend-screen" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cyan-400/20 via-transparent to-transparent opacity-80" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_60%_at_50%_100%,rgba(255,255,255,0.25),transparent_60%)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxShowcase;
