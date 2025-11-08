import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-[#05070C]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center sm:text-left">
            <div className="text-xl font-bold tracking-wide text-cyan-200">NEONMAT™</div>
            <p className="mt-1 text-sm text-cyan-100/70">Precision surfaces for next‑gen products.</p>
          </motion.div>

          <div className="flex items-center gap-4">
            {[Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="rounded-lg border border-white/10 bg-white/5 p-2 text-cyan-200 hover:border-cyan-400/50 hover:text-cyan-100">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-cyan-100/60">
          © {new Date().getFullYear()} NeonMat Industries. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
