"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Smartphone, MapPin } from "lucide-react";

export const CTASections = () => {
  return (
    <section className="relative py-24 z-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left CTA: Virtual Van Demo */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative group h-[400px] rounded-3xl overflow-hidden glass-panel border border-white/10 p-12 flex flex-col justify-end"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-flare/10 via-transparent to-obsidian opacity-50" />
          <div className="relative z-10 space-y-6">
            <div className="p-3 bg-flare/10 w-fit rounded-xl border border-flare/20">
              <Smartphone className="w-8 h-8 text-flare" />
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold uppercase tracking-tight text-white">Virtual Van Demo</h3>
              <p className="text-slate/60 text-sm max-w-sm">
                Experience the analyst suite from your browser. Explore the 360° tactical interface.
              </p>
            </div>
            <button className="px-8 py-3 bg-flare text-obsidian font-black rounded-lg hover:bg-white transition-all duration-300 flex items-center gap-3 w-fit glow-flare uppercase tracking-widest text-xs">
              Open Simulation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Right CTA: Site Assessment */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative group h-[400px] rounded-3xl overflow-hidden glass-panel border border-volt/20 p-12 flex flex-col justify-end"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-volt/10 via-transparent to-obsidian opacity-50" />
          <div className="relative z-10 space-y-6">
            <div className="p-3 bg-volt/10 w-fit rounded-xl border border-volt/20">
              <Calendar className="w-8 h-8 text-volt" />
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold uppercase tracking-tight text-white">Request Assessment</h3>
              <p className="text-slate/60 text-sm max-w-sm">
                Schedule a site visit in Lekki, Lagos. We’ll analyze your event perimeter and logistics.
              </p>
            </div>
            <button className="px-8 py-3 bg-volt text-obsidian font-black rounded-lg hover:bg-white transition-all duration-300 flex items-center gap-3 w-fit glow-volt uppercase tracking-widest text-xs">
              Book Assessment
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="relative py-12 bg-obsidian/80 border-t border-white/5 z-20">
      <div className="container mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="text-xl font-bold tracking-tighter text-white">HARD <span className="text-volt">VIEW</span></span>
          <p className="text-slate/40 text-[10px] uppercase tracking-[0.2em] font-medium">Performance-First Intelligence</p>
        </div>

        <div className="flex items-center gap-12 text-xs uppercase tracking-widest font-bold text-slate/60">
          <Link href="#" className="hover:text-volt transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-volt transition-colors">Terms</Link>
          <Link href="#" className="hover:text-volt transition-colors">Intelligence Blog</Link>
        </div>

        <div className="flex items-center gap-4 group">
          <MapPin className="w-4 h-4 text-volt group-hover:animate-bounce" />
          <div className="flex flex-col text-right hidden md:flex">
            <span className="text-[10px] uppercase font-black text-white px-2 py-0.5 rounded bg-white/5 border border-white/10 italic">
              Operational in Lekki, Lagos
            </span>
          </div>
          <span className="text-slate/60 text-[10px] md:hidden">Proudly Lagosian</span>
        </div>
      </div>
      
      {/* Performance Disclaimer */}
      <div className="container mx-auto px-6 mt-8 pt-8 border-t border-white/5 text-center">
        <p className="text-[10px] uppercase tracking-widest text-slate/20">
          Built for High Speed. Optimized for Low Bandwidth. Hard View © 2026.
        </p>
      </div>
    </footer>
  );
};

import Link from "next/link";
