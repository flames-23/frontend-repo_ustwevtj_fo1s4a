import React from 'react';
import { motion } from 'framer-motion';

const materials = [
  {
    name: 'Carbon Fiber',
    desc: 'Ultra-light lattice weave with high tensile strength and matte sheen.',
    img: 'https://images.unsplash.com/photo-1621221850540-68f4309c02ce?q=80&w=1600&auto=format&fit=crop',
    hue: 'from-cyan-400/20 to-blue-500/10',
    glow: 'shadow-[0_0_60px_rgba(34,211,238,0.25)]',
  },
  {
    name: 'Titanium Alloy',
    desc: 'Aerospace-grade alloy with satin finish and soft blue reflection.',
    img: 'https://images.unsplash.com/photo-1614064641938-3f394c02670e?q=80&w=1600&auto=format&fit=crop',
    hue: 'from-blue-400/20 to-fuchsia-500/10',
    glow: 'shadow-[0_0_60px_rgba(59,130,246,0.25)]',
  },
  {
    name: 'Architectural Glass',
    desc: 'Optically clear, AR‑coated glass with chromatic edge highlights.',
    img: 'https://images.unsplash.com/photo-1520975922284-63d17163b28f?q=80&w=1600&auto=format&fit=crop',
    hue: 'from-fuchsia-400/20 to-cyan-500/10',
    glow: 'shadow-[0_0_60px_rgba(217,70,239,0.25)]',
  },
  {
    name: 'Liquid Metal',
    desc: 'Non-Newtonian alloy with mirror-like fluid surface dynamics.',
    img: 'https://images.unsplash.com/photo-1518197800069-1f77f207b6f2?q=80&w=1600&auto=format&fit=crop',
    hue: 'from-cyan-400/20 to-purple-500/10',
    glow: 'shadow-[0_0_60px_rgba(168,85,247,0.25)]',
  },
];

const MaterialCard = ({ item, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: index * 0.06 }}
    className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 ${item.glow} backdrop-blur-xl`}
  >
    <div className="absolute inset-0">
      <img src={item.img} alt={item.name} className="h-full w-full object-cover opacity-70 mix-blend-luminosity" />
      <div className={`absolute inset-0 bg-gradient-to-br ${item.hue}`} />
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(255,255,255,0.2),transparent_60%)]" />
    </div>
    <div className="relative z-10 p-6">
      <h3 className="bg-gradient-to-r from-cyan-200 via-blue-200 to-fuchsia-200 bg-clip-text text-xl font-semibold text-transparent">
        {item.name}
      </h3>
      <p className="mt-2 text-sm text-cyan-100/80">{item.desc}</p>
      <div className="mt-4 flex items-center gap-2">
        <span className="inline-flex h-6 items-center rounded-full border border-cyan-400/30 bg-white/10 px-2 text-[10px] tracking-widest text-cyan-200/90">
          VIEW DETAILS
        </span>
      </div>
    </div>
    <div className="pointer-events-none absolute inset-x-0 bottom-[-50%] h-1/2 bg-gradient-to-t from-cyan-400/20 to-transparent blur-2xl transition-all duration-500 group-hover:bottom-0" />
  </motion.article>
);

const MaterialGrid = () => {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="bg-gradient-to-br from-cyan-200 via-blue-300 to-fuchsia-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            Signature Materials
          </h2>
          <p className="mt-2 max-w-xl text-cyan-100/70">
            Precision-engineered textures with cinematic depth and soft, luminous reflections.
          </p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {materials.map((m, i) => (
          <MaterialCard key={m.name} item={m} index={i} />
        ))}
      </div>
    </section>
  );
};

export default MaterialGrid;
