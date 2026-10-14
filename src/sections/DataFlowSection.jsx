import React, { useState, useEffect } from 'react';

export default function DataFlowSection() {
  const [activeStageIdx, setActiveStageIdx] = useState(3); // Default to AI stage

  const stages = [
    {
      id: 'body',
      step: '01',
      title: 'BODY',
      subtitle: 'Human Biology',
      icon: '🧬',
      description: 'Your physiology produces continuous electrical, thermal, and mechanical signals: autonomic pulses, vascular flow, body temperature shifts, and kinetic movement.',
      specs: 'Micro-fluctuations • 24/7 Autonomic Rhythms'
    },
    {
      id: 'devices',
      step: '02',
      title: 'DEVICES',
      subtitle: 'Tactile Wearables',
      icon: '⌚',
      description: 'NIVA Ring, Watch, Band, and Smart Equipment capture these signals at the finger, wrist, chest, and barbell without friction or distraction.',
      specs: 'Medical Grade PPG • 6-Axis IMUs • Load Cells'
    },
    {
      id: 'data',
      step: '03',
      title: 'DATA',
      subtitle: 'Synchronized Telemetry',
      icon: '📡',
      description: 'Raw micro-voltages and optical waveforms are converted into 48 continuous telemetry streams, encrypted end-to-end and deduplicated.',
      specs: '250Hz Sampling • Zero Packet Loss'
    },
    {
      id: 'ai',
      step: '04',
      title: 'AI',
      subtitle: 'Neural Pattern Engine',
      icon: '🧠',
      description: 'NIVA AI compares real-time biometrics against your historical 60-day baseline, isolating causal relationships between sleep, stress, and output.',
      specs: 'Deep Neural Reasoning • Causal Discovery'
    },
    {
      id: 'insight',
      step: '05',
      title: 'INSIGHT',
      subtitle: 'Cognitive Translation',
      icon: '💡',
      description: 'Numbers are translated into human meaning: understanding that yesterday’s work stress and late dinner delayed your nocturnal melatonin release.',
      specs: 'Contextual Diagnosis • Zero Vanity Stats'
    },
    {
      id: 'action',
      step: '06',
      title: 'ACTION',
      subtitle: 'Adaptive Execution',
      icon: '⚡',
      description: 'Delivers clear, single-decision guidance: adjust barbell sets from 4 to 3, add curd/paneer for protein balance, or trigger bedroom cooling.',
      specs: 'Auto-regulated Training • Meal Adjustments'
    },
    {
      id: 'improvement',
      step: '07',
      title: 'IMPROVEMENT',
      subtitle: 'Compounding Health',
      icon: '📈',
      description: 'Over time, your resting heart rate decreases, deep sleep expands, injury incidence drops, and cellular recovery compounds year after year.',
      specs: 'Elevated HRV • Longevity Biomarkers'
    }
  ];

  // Auto cycling pulse through the pipeline
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStageIdx(prev => (prev + 1) % stages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [stages.length]);

  const currentStage = stages[activeStageIdx];

  return (
    <section id="platform" className="relative py-28 bg-[#070A0F] border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-indigo-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
            Autonomous Continuous Pipeline
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-5">
            The closed-loop{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              intelligence stream.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            From the cellular level of your body to everyday lifestyle decisions, NIVA forms an unbreakable feedback loop of continuous biological optimization.
          </p>
        </div>

        {/* Continuous Animated Pipeline Bar (All 7 Stages) */}
        <div className="relative mb-14">
          {/* Background Connecting Pipe with Glow */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-1 bg-white/10 -translate-y-1/2 z-0">
            {/* Animated Laser Pulse traveling down the pipe */}
            <div
              className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 transition-all duration-700 shadow-[0_0_15px_#00F5A0]"
              style={{
                width: `${((activeStageIdx + 1) / stages.length) * 100}%`
              }}
            />
          </div>

          {/* 7 Stage Nodes Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 relative z-10">
            {stages.map((stg, idx) => {
              const isActive = activeStageIdx === idx;
              const isPassed = activeStageIdx >= idx;
              return (
                <div
                  key={stg.id}
                  onClick={() => setActiveStageIdx(idx)}
                  className={`p-4 rounded-2xl border cursor-pointer transition flex flex-col items-center text-center backdrop-blur-xl ${
                    isActive
                      ? 'bg-emerald-950/40 border-emerald-400 shadow-xl shadow-emerald-950/30 scale-105 ring-2 ring-emerald-400/50'
                      : isPassed
                      ? 'bg-[#0E1422] border-emerald-500/30 text-gray-200'
                      : 'bg-[#090D14] border-white/5 text-gray-400 hover:border-white/20'
                  }`}
                >
                  <span className={`text-[10px] font-mono mb-1.5 ${isActive ? 'text-emerald-400 font-bold' : 'text-gray-500'}`}>
                    {stg.step}
                  </span>
                  <div className="text-2xl mb-1">{stg.icon}</div>
                  <div className={`text-xs font-bold tracking-wider mb-0.5 ${isActive ? 'text-white' : 'text-gray-300'}`}>
                    {stg.title}
                  </div>
                  <div className="text-[10px] text-gray-400 truncate max-w-full">
                    {stg.subtitle}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Deep Dive Card */}
        <div className="bg-[#0B0F17]/95 border border-emerald-500/30 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-2xl relative overflow-hidden max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-white/[0.08] gap-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{currentStage.icon}</span>
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-emerald-400 font-bold">
                  Stage {currentStage.step} of 07
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {currentStage.title} : {currentStage.subtitle}
                </h3>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-300">
              {currentStage.specs}
            </span>
          </div>

          <p className="text-base text-gray-200 leading-relaxed mb-8">
            {currentStage.description}
          </p>

          {/* Interactive Step Navigator */}
          <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
            <button
              onClick={() => setActiveStageIdx(prev => (prev - 1 + stages.length) % stages.length)}
              className="text-xs font-mono text-gray-400 hover:text-white transition flex items-center gap-1.5"
            >
              ← Previous Stage
            </button>
            <div className="flex items-center gap-1.5">
              {stages.map((_, dotIdx) => (
                <span
                  key={dotIdx}
                  onClick={() => setActiveStageIdx(dotIdx)}
                  className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                    activeStageIdx === dotIdx ? 'w-6 bg-emerald-400' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setActiveStageIdx(prev => (prev + 1) % stages.length)}
              className="text-xs font-mono text-emerald-400 hover:text-emerald-300 transition flex items-center gap-1.5"
            >
              Next Stage →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
