import React, { useState } from 'react';
import { ecosystemData } from '../data/ecosystemData';

export default function EcosystemSection() {
  const [selectedDomain, setSelectedDomain] = useState(ecosystemData.domains[0].id);

  const activeDomain = ecosystemData.domains.find(d => d.id === selectedDomain) || ecosystemData.domains[0];

  return (
    <section id="ecosystem" className="relative py-28 bg-[#070A0F] border-t border-white/[0.06] overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-4">
            Unified Biometric Nexus
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-5">
            Everything connected.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Nothing isolated.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Most trackers capture isolated data points. NIVA harmonizes high-frequency wearables, clinical health sensors, dynamic workout resistance, real-life nutrition, and circadian lifestyle variables into one neural intelligence core.
          </p>
        </div>

        {/* Interactive Ecosystem Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Interactive Domain Navigation & Core Visualizer */}
          <div className="lg:col-span-7 bg-[#0B0F17]/90 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl relative shadow-2xl">
            {/* Center Core Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/[0.08] gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-400 to-cyan-400 flex items-center justify-center text-black font-black text-xl shadow-lg shadow-emerald-400/25">
                  AI
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    {ecosystemData.center.title}
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </h3>
                  <p className="text-xs text-gray-400">{ecosystemData.center.subtitle}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-emerald-400">
                  {ecosystemData.center.activeStreamCount}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-cyan-400">
                  {ecosystemData.center.samplingFrequency}
                </span>
              </div>
            </div>

            {/* Interactive Domain Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-8">
              {ecosystemData.domains.map((dom) => {
                const isSelected = dom.id === selectedDomain;
                return (
                  <button
                    key={dom.id}
                    onClick={() => setSelectedDomain(dom.id)}
                    className={`py-3 px-2 rounded-xl text-xs font-medium transition text-center border ${
                      isSelected
                        ? 'bg-emerald-500/15 border-emerald-400 text-white shadow-lg shadow-emerald-500/10'
                        : 'bg-white/[0.02] border-white/5 text-gray-400 hover:text-white hover:border-white/15'
                    }`}
                  >
                    <div className="font-semibold">{dom.name}</div>
                    <div className="text-[10px] opacity-70 mt-0.5 font-mono">{dom.items.length} streams</div>
                  </button>
                );
              })}
            </div>

            {/* Animated Neural Connections Diagram */}
            <div className="relative h-60 rounded-2xl bg-black/40 border border-white/5 p-4 flex items-center justify-center overflow-hidden">
              {/* SVG connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00F5A0" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00D2FF" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                {/* Center circle */}
                <circle cx="50%" cy="50%" r="42" fill="#0A111A" stroke="#00F5A0" strokeWidth="2" />
                
                {/* Radiating connecting nodes */}
                <line x1="18%" y1="28%" x2="50%" y2="50%" stroke="url(#streamGrad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
                <line x1="82%" y1="28%" x2="50%" y2="50%" stroke="url(#streamGrad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
                <line x1="18%" y1="72%" x2="50%" y2="50%" stroke="url(#streamGrad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
                <line x1="82%" y1="72%" x2="50%" y2="50%" stroke="url(#streamGrad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
                <line x1="50%" y1="12%" x2="50%" y2="50%" stroke="url(#streamGrad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
              </svg>

              {/* Pulsing Central AI Brain Core */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 border border-emerald-400 flex flex-col items-center justify-center text-center backdrop-blur-md shadow-xl shadow-emerald-500/20">
                <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">NIVA AI</span>
                <span className="text-[9px] text-gray-400">Nexus</span>
              </div>

              {/* Orbiting Satellite Labels */}
              <div className="absolute top-4 left-6 text-[11px] font-mono text-gray-300 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                Wearables
              </div>
              <div className="absolute top-4 right-6 text-[11px] font-mono text-gray-300 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                Health Sensors
              </div>
              <div className="absolute bottom-4 left-6 text-[11px] font-mono text-gray-300 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                Fitness Telemetry
              </div>
              <div className="absolute bottom-4 right-6 text-[11px] font-mono text-gray-300 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                Smart Nutrition
              </div>
              <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[11px] font-mono text-gray-300 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                Lifestyle & Habits
              </div>
            </div>
          </div>

          {/* Right: Selected Domain Deep-Dive & Cross-Domain AI Synergy */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#0B0F17]/90 border border-emerald-500/30 rounded-3xl p-6 sm:p-7 backdrop-blur-2xl shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase font-mono tracking-widest text-emerald-400 font-semibold">
                  Active Domain Analysis
                </span>
                <span className="text-xs text-gray-400 font-mono">
                  Domain: {activeDomain.name}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">{activeDomain.name}</h3>
              <p className="text-xs text-gray-400 mb-6">{activeDomain.tagline}</p>

              {/* Domain Specific Data Streams */}
              <div className="space-y-3 mb-6">
                {activeDomain.items.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition">
                    <div className="text-xs font-semibold text-white mb-0.5">{item.name}</div>
                    <div className="text-[11px] text-gray-400 leading-snug">{item.detail}</div>
                  </div>
                ))}
              </div>

              {/* Cross-Domain AI Synergy Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-cyan-950/20 border border-emerald-500/30 text-xs">
                <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold mb-1.5 uppercase text-[10px] tracking-wider">
                  <span>⚡ Cross-Domain AI Synergy</span>
                </div>
                <p className="text-gray-300 leading-relaxed text-xs">
                  {activeDomain.aiSynergy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
