"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Radio, Shield } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background HUD Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none hud-scanline" />
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center relative z-10">
        {/* Text Content (Col 1-2) */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-volt/10 border border-volt/20 text-volt text-[10px] uppercase tracking-[0.2em] font-bold"
          >
            <Radio className="w-3 h-3 pulse" />
            Live Event Intelligence
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              20 Years of <span className="text-white">Broadcast</span> Precision.
              <br />
              <span className="text-volt drop-shadow-[0_0_15px_rgba(206,255,0,0.5)]">360° Tactical Intelligence.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-slate/60 text-lg md:text-xl max-w-lg leading-relaxed"
            >
              Proactive event oversight for Nigeria’s premium events. We combine broadcast-grade surveillance with deep behavioral analysis.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-8 py-4 bg-volt text-obsidian font-black rounded-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 glow-volt group uppercase tracking-widest text-sm">
              See the Intelligence in Action
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-all duration-300 flex items-center gap-3 glass-panel text-sm uppercase tracking-widest">
              <Play className="w-5 h-5 fill-white text-white" />
              Watch Demo
            </button>
          </motion.div>
        </div>

        {/* Visual Grid (Col 3-5) */}
        <div className="lg:col-span-3 grid grid-cols-2 gap-4 h-[500px] md:h-[600px]">
          {/* Left Panel: FPV Drone View */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative rounded-2xl overflow-hidden border border-white/10 group"
          >
            <Image
              src="/assets/hero-drone.png"
              alt="Lekki FPV Drone View"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
            <div className="absolute top-4 left-4 p-2 bg-volt/20 backdrop-blur-md border border-volt/30 rounded text-[10px] text-volt font-bold flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-volt rounded-full animate-pulse" />
              CAM-01: LEKKI NORTH
            </div>
          </motion.div>

          {/* Right Panel: Tactical Command Suite */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="relative rounded-2xl overflow-hidden border border-white/10 group"
          >
            <Image
              src="/assets/hero-van.png"
              alt="Tactical Command Suite"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
            <div className="absolute top-4 right-4 p-2 bg-flare/20 backdrop-blur-md border border-flare/30 rounded text-[10px] text-flare font-bold flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-flare rounded-full animate-pulse" />
              ANALYST-SYNC: ACTIVE
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative HUD Lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-volt/20 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-px h-24 bg-gradient-to-t from-volt/20 to-transparent" />
    </section>
  );
};

export default HeroSection;
