"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Radio, Shield, Target, Cpu, TrendingUp } from "lucide-react";

const ExecutiveSummary = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const points = [
    {
      icon: <Radio className="w-5 h-5 text-volt" />,
      title: "Real-Time Oversight",
      description: "24/7 proactive monitoring with AI-driven threat detection.",
    },
    {
      icon: <Shield className="w-5 h-5 text-flare" />,
      title: "Asset Protection",
      description: "Secure perimeter management for high-value physical assets.",
    },
    {
      icon: <Target className="w-5 h-5 text-volt" />,
      title: "Intelligence-First",
      description: "Analysis-driven security planning tailored to Lekki events.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-flare" />,
      title: "Tactical Mobility",
      description: "Mobile command suites (eSprinter) deployable within 45 minutes.",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-volt" />,
      title: "Scalable Solutions",
      description: "Custom security architectures that grow with your events.",
    },
  ];

  return (
    <section className="relative py-12 z-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Toggle Switch */}
          <div className="flex flex-col items-center gap-4 mb-12 group">
            <span className="text-[10px] uppercase tracking-[0.3em] text-slate/40 font-bold group-hover:text-volt transition-colors">
              Executive Summary
            </span>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="relative p-1 bg-charcoal rounded-full border border-white/10 w-20 flex"
            >
              <motion.div
                animate={{ x: isExpanded ? 40 : 0 }}
                className="w-8 h-8 rounded-full bg-volt flex items-center justify-center glow-volt"
              >
                {isExpanded ? <ChevronUp className="w-5 h-5 text-obsidian" /> : <ChevronDown className="w-5 h-5 text-obsidian" />}
              </motion.div>
            </button>
          </div>

          {/* Conditional Content */}
          <AnimatePresence mode="wait">
            {!isExpanded ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-[2px] w-full max-w-xl bg-gradient-to-r from-transparent via-white/10 to-transparent"
              />
            ) : (
              <motion.div
                key="summary"
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                className="w-full max-w-5xl overflow-hidden glass-panel rounded-3xl p-8 border border-volt/20"
              >
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                  {points.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-4 text-center md:text-left relative group"
                    >
                      <div className="flex flex-col gap-3 group-hover:translate-x-1 transition-transform">
                        <div className="p-3 bg-white/5 rounded-xl border border-white/10 w-fit">
                          {point.icon}
                        </div>
                        <h3 className="text-white font-bold tracking-wider text-sm uppercase">
                          {point.title}
                        </h3>
                        <p className="text-slate/60 text-xs leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                      {/* Interactive Divider Line (Static but styled) */}
                      {index < points.length - 1 && (
                        <div className="hidden md:block absolute -right-4 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;
