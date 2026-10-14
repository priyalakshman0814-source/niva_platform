import React, { useState } from 'react';
import { Activity, BarChart3, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function BodyMonitoringSection() {
  const [activeFeature, setActiveFeature] = useState('fitness');

  const features = {
    fitness: {
      badge: 'Continuous Telemetry',
      title: 'Connected Fitness & Movement',
      subtitle: 'Structured workout logging across smart strength equipment and wearable sensors',
      icon: Activity,
      highlights: [
        {
          label: 'Smart Repetition & Velocity Tracking',
          status: 'Active Feature',
          desc: 'Automatically records sets, repetitions, and peak concentric velocity streamed from Niva Dumbbells.',
        },
        {
          label: 'Movement Cadence & Joint Angle',
          status: 'Clinical Oversight',
          desc: 'Ensures safe orthopedic tempo and balanced joint extension between 45° and 145° ranges.',
        },
        {
          label: 'Progressive Overload View',
          status: 'Trainer Synced',
          desc: 'Provides a clean, transparent volume progression chart synchronized with your strength coach.',
        },
      ],
      note: 'Designed to keep strength and mobility sessions simple, focused, and clinically sound.',
    },
    insights: {
      badge: 'Biometric Synthesis',
      title: 'Daily Activity & Recovery Balance',
      subtitle: 'Clear summaries of circadian movement, resting HR, and autonomic nervous system tone',
      icon: BarChart3,
      highlights: [
        {
          label: 'Resting HR & HRV Baseline',
          status: 'Continuous Stream',
          desc: 'Calibrated continuously against your 60-day physiological baseline to flag systemic fatigue early.',
        },
        {
          label: 'Rest & Deep Sleep Architecture',
          status: 'Nocturnal Telemetry',
          desc: 'Measures nocturnal restorative windows, deep sleep percentages, and skin temperature shifts.',
        },
        {
          label: 'Multi-Day Trend Calibration',
          status: 'Physician Shared',
          desc: 'Transforms raw numbers into clear, plain-language weekly trends your care team can act upon.',
        },
      ],
      note: 'Focused on human agency and clarity rather than overwhelming clinical jargon.',
    },
    wellness: {
      badge: 'Holistic Intelligence',
      title: 'Personalized Care & Nutrition Support',
      subtitle: 'Customized daily routines and metabolic plans shaped around your unique schedule',
      icon: Sparkles,
      highlights: [
        {
          label: 'Adaptive Daily Action Checklist',
          status: 'Daily Morning View',
          desc: 'Simple, achievable micro-actions: hydration targets, outdoor walk, and targeted supplementation.',
        },
        {
          label: 'Metabolic & Meal Log Synchrony',
          status: 'Dietitian Aligned',
          desc: 'Direct synchronization with your clinical nutritionist to optimize post-prandial glucose stability.',
        },
        {
          label: 'Human-in-the-Loop Clinical Gate',
          status: 'Safety Guarantee',
          desc: 'Every diagnostic pattern is vetted by an authorized clinician before being recommended.',
        },
      ],
      note: 'Built to support long-term sustainable health with a dedicated team in your corner.',
    },
  };

  const current = features[activeFeature];

  const tabs = [
    {
      id: 'fitness',
      name: 'Fitness & Movement',
      desc: 'Workout reps, tempo & joint range of motion',
      icon: Activity,
    },
    {
      id: 'insights',
      name: 'Biometrics & Recovery',
      desc: 'Resting HR, sleep architecture & HRV trends',
      icon: BarChart3,
    },
    {
      id: 'wellness',
      name: 'Personalized Care',
      desc: 'Daily action plans & multidisciplinary team',
      icon: Sparkles,
    },
  ];

  return (
    <section id="features" className="py-24 sm:py-32 bg-white border-t border-[#E3ECE6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <Reveal className="max-w-2xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DEEEE7] border border-[#C2E2D3] text-[#153E35] text-xs font-mono font-semibold uppercase tracking-wider">
            <span>CORE EXPERIENCES</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#13231F] leading-tight">
            Designed around movement tracking,<br />
            <span className="italic text-[#153E35]">recovery, and personal care.</span>
          </h2>

          <p className="text-base text-[#61756F] leading-relaxed">
            Explore the core pillars Niva brings together into one considered, luxury experience.
          </p>
        </Reveal>

        {/* Interactive Feature Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Feature Tabs */}
          <Reveal className="lg:col-span-4 space-y-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeFeature === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFeature(tab.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#F2F8F5] border-emerald-400 shadow-sm shadow-emerald-500/10'
                      : 'bg-white border-[#E3ECE6] hover:border-emerald-200 hover:bg-[#FAFBF9]'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-[#153E35] text-white'
                          : 'bg-[#DEEEE7] text-[#153E35]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3
                        className={`text-sm font-bold transition-colors ${
                          isSelected ? 'text-[#153E35]' : 'text-[#13231F]'
                        }`}
                      >
                        {tab.name}
                      </h3>
                      <p className="text-xs text-[#61756F] mt-0.5 line-clamp-1">{tab.desc}</p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-[#153E35] translate-x-1' : 'text-[#61756F]'
                    }`}
                  />
                </button>
              );
            })}
          </Reveal>

          {/* Right Column: Active Feature Details Display */}
          <Reveal delay={120} className="lg:col-span-8">
            <div className="rounded-3xl bg-[#FAFBF9] border border-[#E3ECE6] p-7 sm:p-9 shadow-xs space-y-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#DEEEE7] text-[#153E35]">
                  {current.badge}
                </span>
                <span className="text-xs font-mono text-[#61756F]">Niva Care Platform</span>
              </div>

              <div>
                <h3 className="font-serif text-3xl font-bold text-[#13231F]">{current.title}</h3>
                <p className="text-sm text-[#61756F] mt-1.5 leading-relaxed">{current.subtitle}</p>
              </div>

              {/* Highlights List */}
              <div className="space-y-3.5 pt-2 border-t border-[#E3ECE6]">
                {current.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-[#E3ECE6] flex items-start gap-3.5 shadow-2xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm font-bold text-[#13231F]">{item.label}</h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F4F7F4] text-[#61756F]">
                          {item.status}
                        </span>
                      </div>
                      <p className="text-xs text-[#61756F] mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E3ECE6] text-xs text-[#61756F] flex items-center justify-between">
                <span>{current.note}</span>
                <span className="font-mono text-emerald-800 font-semibold">Active Experience</span>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
