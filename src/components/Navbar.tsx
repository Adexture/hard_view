"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Menu, X, Shield, Activity } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 bg-obsidian/80 backdrop-blur-xl border-b border-white/10" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Camera className="w-8 h-8 text-volt group-hover:rotate-12 transition-transform duration-300" />
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-volt rounded-full -z-10"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tighter text-white leading-none">HARD <span className="text-volt">VIEW</span></span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate/60 font-medium">Tactical Intelligence</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {["Our Tech", "The Analyst", "Case Studies", "Intelligence Blog"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-sm font-medium text-slate hover:text-flare transition-colors duration-200 uppercase tracking-wider relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-flare transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          
          <button className="px-6 py-2 bg-volt text-obsidian font-bold rounded-full hover:bg-white transition-all duration-300 glow-volt text-xs uppercase tracking-widest">
            Request Site Assessment
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-volt" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-obsidian border-b border-white/10 p-6 flex flex-col gap-6 md:hidden glass-panel"
          >
            {["Our Tech", "The Analyst", "Case Studies", "Intelligence Blog"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-lg font-medium text-slate uppercase tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <button className="w-full py-4 bg-volt text-obsidian font-bold rounded-xl glow-volt text-sm uppercase tracking-widest">
              Request Site Assessment
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulsing Active Indicator (Top right) */}
      <div className="absolute top-2 right-6 flex items-center gap-2">
        <div className="w-1.5 h-1.5 bg-volt rounded-full active-pulse" />
        <span className="text-[8px] uppercase tracking-widest text-volt/80 font-bold">Systems Online</span>
      </div>
    </nav>
  );
};

export default Navbar;
