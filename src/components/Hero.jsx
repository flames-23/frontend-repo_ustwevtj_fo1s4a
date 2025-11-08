import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Sparkles, Zap } from 'lucide-react';

const FloatingParticles = () => {
  const particles = Array.from({ length: 18 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 6 + Math.random() * 6,
    opacity: 0.25 + Math.random() * 0.5,
    hue: 180 + Math.random() * 120,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          initial={{ y: '120%', opacity: 0 }}
          animate={{ y: ['120%', '-20%'], opacity: [0, p.opacity, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
            filter: 'blur(0.5px)',
            background: `radial-gradient(circle at 30% 30%, hsla(${p.hue}, 90%, 70%, 0.9), hsla(${p.hue}, 90%, 50%, 0.2))`,
            borderRadius: 999,
          }}
          className="absolute"
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#070A0F]">
      {/* 3D Background */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      {/* Gradient overlays to colorize and glow, non-interactive so Spline remains clickable */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(65%_55%_at_50%_30%,rgba(0,255,255,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(45%_45%_at_20%_80%,rgba(99,102,241,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0)_0%,rgba(2,6,23,0.6)_70%,#020617_100%)]" />
      </div>

      {/* Floating holographic lines */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 opacity-40">
        <div className="absolute left-1/4 top-8 h-px w-1/2 bg-gradient-to-r from-cyan-400/0 via-cyan-400/70 to-cyan-400/0 blur-[1px]" />
        <div className="absolute left-0 top-20 h-px w-full bg-gradient-to-r from-indigo-500/0 via-indigo-500/60 to-indigo-500/0" />
        <div className="absolute right-1/3 top-32 h-px w-2/3 bg-gradient-to-r from-sky-400/0 via-sky-400/60 to-sky-400/0" />
      </div>

      <FloatingParticles />

      {/* Foreground content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-white/5 px-4 py-2 text-cyan-200/90 backdrop-blur"
        >
          <Sparkles className="h-4 w-4 text-cyan-300" />
          <span className="text-xs tracking-widest">PREMIUM MATERIAL SYSTEM</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="mt-6 bg-gradient-to-br from-cyan-200 via-blue-300 to-fuchsia-400 bg-clip-text text-5xl font-extrabold leading-[1.1] text-transparent sm:text-6xl md:text-7xl"
        >
          Futuristic Materials Showcase
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base text-cyan-100/80 sm:text-lg"
        >
          Explore next‑gen alloys, carbon composites, and architectural glass with cinematic depth, soft reflections, and luminous UI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <button className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.35)]">
            <span className="relative z-10 flex items-center gap-2">
              Explore Materials <Zap className="h-4 w-4" />
            </span>
            <span className="pointer-events-none absolute inset-0 bg-white/20 opacity-0 transition group-hover:opacity-100" />
          </button>
          <button className="rounded-xl border border-cyan-400/30 bg-white/5 px-6 py-3 text-sm font-semibold text-cyan-100/90 backdrop-blur hover:border-cyan-400/60 hover:bg-white/10">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
