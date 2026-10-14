import React, { useState } from 'react';
import { 
  ArrowUpRight, Heart, Activity, ShieldCheck, 
  Sparkles, Layers, Image as ImageIcon, Box
} from 'lucide-react';
import BioBodyCanvas from '../components/BioBodyCanvas';
import Reveal from '../components/Reveal';

export default function Hero({ onOpenWorkspace }) {
  const [visualMode, setVisualMode] = useState('canvas'); // 'canvas' or 'photo'

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#FBFBF9] via-[#F4F8F5] to-[#FBFBF9]"
    >
      {/* Light Luxury Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-[650px] h-[550px] bg-gradient-to-bl from-[#DEEEE7]/50 via-[#EAF3EE]/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-[#FAF6EE]/50 via-[#DEEEE7]/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Strong Editorial Headline, Introduction & Clear CTAs */}
          <Reveal className="lg:col-span-6 space-y-8">
            
            {/* High-status Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#DEEEE7] border border-[#C2E2D3] text-xs font-mono text-[#153E35] tracking-wider shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span className="font-semibold">NIVA HEALTH INTELLIGENCE • CONNECTED CARE ECOSYSTEM</span>
            </div>

            {/* Editorial Luxury Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#13231F] leading-[1.02]">
              Look closer.<br />
              Live <span className="italic text-[#153E35] underline decoration-[#DEEEE7] decoration-wavy decoration-2">well.</span>
            </h1>

            {/* Introduction Subtitle */}
            <p className="text-base sm:text-lg text-[#61756F] max-w-xl font-normal leading-relaxed">
              Your everyday health, habits, and care team — brought together in one considered platform. Designed around real life, continuous telemetry, and verified medical oversight.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#journey"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold bg-[#153E35] text-white hover:bg-[#1E5649] hover:-translate-y-0.5 transition-all shadow-md shadow-[#153E35]/15"
              >
                <span>Explore 8-Stage Journey</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => onOpenWorkspace('member')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold bg-white text-[#153E35] border border-[#C2E2D3] hover:border-[#153E35] hover:bg-[#F2F8F5] hover:-translate-y-0.5 transition-all shadow-xs"
              >
                <span>Launch Collaborative Cockpit</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Uber-Style Role Launch Selector */}
            <div className="pt-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#61756F] mb-2 font-semibold">
                Quick Role Preview (Click to test):
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { role: 'member', label: 'Member Priya' },
                  { role: 'clinician', label: 'Dr. Mehta (MD)' },
                  { role: 'nutritionist', label: 'Nila (Dietitian)' },
                  { role: 'coach', label: 'Kabir (CSCS)' },
                  { role: 'admin', label: 'Admin (Ops)' }
                ].map(r => (
                  <button
                    key={r.role}
                    onClick={() => onOpenWorkspace(r.role)}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white border border-[#E3ECE6] text-[#13231F] hover:bg-[#DEEEE7] hover:border-emerald-300 transition-all flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{r.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Key Platform Safeguards & Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#E3ECE6] max-w-lg">
              <div>
                <div className="font-serif text-2xl font-bold text-[#153E35]">24/7</div>
                <div className="text-xs text-[#61756F] mt-0.5">Signal Synthesis</div>
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-[#153E35]">01</div>
                <div className="text-xs text-[#61756F] mt-0.5">Connected Care Model</div>
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-[#153E35]">100%</div>
                <div className="text-xs text-[#61756F] mt-0.5">Physician Review Gate</div>
              </div>
            </div>

          </Reveal>

          {/* Right Column: Interactive 3D Model / Realistic Luxury Photography Toggle */}
          <Reveal delay={150} className="lg:col-span-6 relative">
            
            {/* Visual Mode Switcher (Canvas 3D vs Luxury Photography) */}
            <div className="absolute top-4 left-6 z-30 flex items-center gap-1 p-1 rounded-full bg-white/90 backdrop-blur-md border border-[#E3ECE6] shadow-xs">
              <button
                onClick={() => setVisualMode('canvas')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold transition-all ${
                  visualMode === 'canvas' ? 'bg-[#153E35] text-white shadow-2xs' : 'text-[#61756F] hover:text-[#153E35]'
                }`}
              >
                <Box className="w-3.5 h-3.5" />
                <span>3D Bio Canvas</span>
              </button>
              <button
                onClick={() => setVisualMode('photo')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold transition-all ${
                  visualMode === 'photo' ? 'bg-[#153E35] text-white shadow-2xs' : 'text-[#61756F] hover:text-[#153E35]'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Realistic Photo</span>
              </button>
            </div>

            {/* Display Either BioBodyCanvas or Realistic Luxury Photography */}
            {visualMode === 'canvas' ? (
              <BioBodyCanvas />
            ) : (
              <div className="relative w-full h-[540px] sm:h-[600px] rounded-3xl overflow-hidden border border-[#E3ECE6] shadow-[0_20px_50px_rgba(21,62,53,0.12)] group">
                <img
                  src="/assets/care-watch.webp"
                  alt="Couple exploring wearable health technology in a light luxury aesthetic home"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#153E35]/80 via-transparent to-black/10" />
                
                <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#DEEEE7] uppercase font-bold">
                    CONNECTED CARE • HUMAN AT THE CENTRE
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                    Insight that fits real life.
                  </h3>
                  <p className="text-xs text-[#DEEEE7]/90 leading-relaxed max-w-md">
                    Everyday habits, biometric trends, and care coordinators brought together so you and your doctor see the complete picture.
                  </p>
                </div>
              </div>
            )}

            {/* Floating Glass Vitals Card */}
            <div className="absolute -bottom-6 -left-4 sm:left-4 z-30 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#E3ECE6] shadow-float flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#DEEEE7] text-[#153E35] flex items-center justify-center font-bold">
                <Heart className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-[#61756F] font-semibold">Live Telemetry</div>
                <div className="text-sm font-bold text-[#13231F]">HR 72 bpm • Sleep 7h 20m</div>
                <div className="text-[11px] text-emerald-700 font-medium">Physician calibrated</div>
              </div>
            </div>

          </Reveal>

        </div>
      </div>
    </section>
  );
}
