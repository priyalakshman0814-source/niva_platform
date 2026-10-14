import React from 'react';
import { Code2, Palette, Zap, Cpu, Terminal, Layers } from 'lucide-react';

export default function TechStackSection() {
  const stackCategories = [
    {
      category: 'Frontend & UI Framework',
      icon: Code2,
      techs: [
        { name: 'React 18', role: 'Component-driven declarative UI & reactive state hooks' },
        { name: 'JavaScript / JSX', role: 'Type-safe event handlers and ES module architecture' },
        { name: 'Lucide React', role: 'Lightweight, featherweight accessible SVG iconography' },
      ],
    },
    {
      category: 'Styling & Design System',
      icon: Palette,
      techs: [
        { name: 'Tailwind CSS v3', role: 'Utility-first framework with custom dark futuristic tokens' },
        { name: 'Custom Design Tokens', role: 'Cyan `#00D2FF`, Deep Obsidian `#06090E`, Purple `#A855F7`' },
        { name: 'Glassmorphism & Glows', role: 'High-contrast blur layers, backdrop-filters, neon shadows' },
      ],
    },
    {
      category: '3D Motion & Visual Engine',
      icon: Cpu,
      techs: [
        { name: 'HTML5 3D Canvas', role: 'Real-time 3D matrix projection and interactive model rotation' },
        { name: 'Kinetic Trigonometry', role: 'Dynamic 360° Range of Motion (ROM) SVG arcs and dials' },
        { name: 'Hardware Simulation', role: 'Simulated 120Hz IMU streams, 3-axis load cell, and BLE telemetry' },
      ],
    },
    {
      category: 'Build Engine & Tooling',
      icon: Zap,
      techs: [
        { name: 'Vite 5', role: 'Ultra-fast ESM bundler with instant Hot Module Replacement (HMR)' },
        { name: 'PostCSS & Autoprefixer', role: 'Modern CSS pipeline and cross-browser compilation' },
        { name: 'Node.js & npm', role: 'Reproducible dependency ecosystem and zero-bloat lockfile' },
      ],
    },
  ];

  return (
    <section id="tech-stack" className="py-24 sm:py-32 bg-[#06090E] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            System Architecture
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Technologies & stack powering NIVA.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 font-normal leading-relaxed">
            Built with a high-performance, modern web stack tailored for instantaneous responsiveness, 60fps 3D canvas rendering, and clinical sensor data visualization.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stackCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-[#090E18] border border-white/10 p-7 sm:p-8 flex flex-col justify-between shadow-dark-float hover:border-cyan-400/40 transition-all group"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#0D1526] border border-cyan-500/30 text-cyan-400 flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(0,210,255,0.3)] transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">{cat.category}</h3>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    {cat.techs.map((tech, tIdx) => (
                      <div
                        key={tIdx}
                        className="p-3.5 rounded-xl bg-[#060A12] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                      >
                        <span className="font-bold text-cyan-400">{tech.name}</span>
                        <span className="text-slate-400 text-left sm:text-right text-[11px] font-sans">
                          {tech.role}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Production Ready</span>
                  <span className="text-cyan-400 font-bold">100% Performance Baseline</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
