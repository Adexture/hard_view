"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Radio, Shield, Target, Cpu, TrendingUp, Info } from "lucide-react";
import Image from "next/image";

const Hotspot = ({ x, y, label, details, icon: Icon, isActive, onClick }: any) => (
  <div
    className="absolute z-30"
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    <button
      onClick={onClick}
      className={`group relative flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
        isActive ? "bg-volt border-volt scale-110 shadow-[0_0_20px_rgba(206,255,0,0.8)]" : "bg-obsidian/60 border-volt/50 hover:bg-volt/20"
      }`}
    >
      <Icon className={`w-5 h-5 ${isActive ? "text-obsidian" : "text-volt"}`} />
      
      {/* Label Tooltip */}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-charcoal text-volt text-[10px] uppercase tracking-widest font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-volt/20">
        {label}
      </span>
      
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-volt rounded-full -z-10"
      />
    </button>
  </div>
);

const InteractiveVan = () => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const hotspots = [
    {
      id: 1,
      x: 35,
      y: 15,
      label: "Autonomous Drones",
      icon: Radio,
      details: "Tethered and free-flight FPV drones for rapid perimeter assessment and crowd-density heatmapping. Integrated with LexisNexis intelligence feeds.",
    },
    {
      id: 2,
      x: 65,
      y: 25,
      label: "PTZ Mast System",
      icon: Target,
      details: "High-precision Pan-Tilt-Zoom mast with thermal imaging and license plate recognition. Broadcast-grade 4K optics with 40x optical zoom.",
    },
    {
      id: 3,
      x: 50,
      y: 55,
      label: "Tactical Internal Server",
      icon: Cpu,
      details: "On-board high-performance compute node for behavioral analytics, edge processing, and encrypted satellite uplinks to the Lagos Control Hub.",
    },
  ];

  return (
    <section id="our-tech" className="relative py-24 bg-obsidian overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-16">
          <div className="text-center space-y-4 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white leading-none">
              The <span className="text-volt">Command</span> Suite
            </h2>
            <p className="text-slate/60 text-lg">
              Every HARD VIEW eSprinter is a self-contained intelligence hub, engineered for rapid deployment and absolute reliability.
            </p>
          </div>

          <div className="relative w-full max-w-6xl aspect-video lg:aspect-[21/9] rounded-3xl overflow-hidden glass-panel border border-white/5 group shadow-[0_0_100px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent" />
            
            {/* Base Image */}
            <Image
              src="/assets/van-model.png"
              alt="Security Van HUD Model"
              fill
              className="object-contain p-12 transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Hotspots */}
            <div className="absolute inset-0 z-20">
              {hotspots.map((hotspot) => (
                <Hotspot
                  key={hotspot.id}
                  {...hotspot}
                  isActive={activeHotspot === hotspot.id}
                  onClick={() => setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)}
                />
              ))}
            </div>

            {/* Detail Panel */}
            <AnimatePresence>
              {activeHotspot !== null && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  className="absolute top-8 right-8 z-40 p-8 w-full max-w-sm glass-panel border border-volt/20 rounded-2xl glow-volt"
                >
                  <button
                    onClick={() => setActiveHotspot(null)}
                    className="absolute top-4 right-4 text-slate/40 hover:text-volt"
                  >
                    CLOSE [X]
                  </button>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-volt/10 rounded-xl">
                        {React.createElement(hotspots.find(h => h.id === activeHotspot)!.icon, { className: "w-6 h-6 text-volt" })}
                      </div>
                      <h4 className="text-xl font-bold uppercase tracking-widest text-white">
                        {hotspots.find(h => h.id === activeHotspot)!.label}
                      </h4>
                    </div>
                    <p className="text-slate/60 text-sm leading-relaxed">
                      {hotspots.find(h => h.id === activeHotspot)!.details}
                    </p>
                    <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-[10px] uppercase font-bold tracking-[0.2em] transition-all">
                      View Technical Specifications
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* HUD Callouts (Static) */}
            <div className="absolute bottom-8 left-8 p-4 glass-panel border-l-4 border-l-volt rounded-r-xl opacity-60">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-volt rounded-full active-pulse" />
                <span className="text-[10px] uppercase tracking-widest font-black text-white">System: LEKKI-MOBILE-A12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveVan;
