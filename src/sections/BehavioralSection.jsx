import React, { useState } from 'react';
import { weeklyTimelineData, behavioralPatternInsight } from '../data/timelineData';

export default function BehavioralSection() {
  const [selectedDayIdx, setSelectedDayIdx] = useState(3); // Default to Thursday (index 3)

  const activeDay = weeklyTimelineData[selectedDayIdx];

  return (
    <section id="behavioral" className="relative py-28 bg-[#05070A] border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-widest mb-4">
            Longitudinal Cognitive Modeling
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-5">
            NIVA learns{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
              your patterns.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Your body does not reset in isolation every 24 hours. NIVA tracks physiological ripple effects over weeks and months, identifying hidden correlations between high-pressure work days, nocturnal recovery dips, and behavioral slumps.
          </p>
        </div>

        {/* 7-Day Interactive Timeline Bar */}
        <div className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {weeklyTimelineData.map((item, idx) => {
              const isSelected = selectedDayIdx === idx;
              return (
                <div
                  key={item.day}
                  onClick={() => setSelectedDayIdx(idx)}
                  className={`p-4 rounded-2xl border cursor-pointer transition flex flex-col justify-between ${
                    isSelected
                      ? 'bg-indigo-950/40 border-indigo-500/80 shadow-xl shadow-indigo-950/30 ring-1 ring-indigo-400'
                      : 'bg-[#0B0F17] border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-white uppercase">{item.day}</span>
                    <span className={`w-2 h-2 rounded-full ${
                      item.status === 'optimal'
                        ? 'bg-emerald-400'
                        : item.status === 'warning'
                        ? 'bg-red-400 animate-pulse'
                        : item.status === 'action-needed'
                        ? 'bg-amber-400 animate-ping'
                        : 'bg-cyan-400'
                    }`} />
                  </div>
                  <div className="text-xs font-semibold text-indigo-300 mb-1">{item.tag}</div>
                  <div className="text-[10px] text-gray-400 font-mono">
                    Strain: {item.strain}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pattern Detection Highlight Box & Deep Insight Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: The AI Pattern Detected Card */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#0E1322] via-[#090D17] to-[#070A10] border border-indigo-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse" />
                  <span className="text-xs uppercase font-mono tracking-widest text-indigo-400 font-bold">
                    Pattern Detected
                  </span>
                </div>
                <span className="text-xs font-mono text-gray-400">
                  Cross-Correlation: 94%
                </span>
              </div>

              {/* Detected Pattern Highlight */}
              <div className="mb-6">
                <blockquote className="text-xl sm:text-2xl font-bold text-white leading-snug mb-3">
                  “Your activity tends to decrease after high-stress workdays.”
                </blockquote>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed bg-white/[0.02] p-4 rounded-2xl border border-white/5">
                  {behavioralPatternInsight.mechanism}
                </p>
              </div>

              {/* Proactive Recommendation Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-indigo-950/50 to-emerald-950/40 border border-indigo-400/40 shadow-xl mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                  NIVA Adaptive Intervention
                </span>
                <blockquote className="text-base sm:text-lg font-bold text-white leading-snug mb-3">
                  “NIVA recommends a 20-minute recovery workout on Thursday.”
                </blockquote>

                <div className="space-y-1.5 text-xs text-gray-300">
                  {behavioralPatternInsight.prescriptionDetails.components.map((comp, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2">
                      <span className="text-indigo-400 font-mono">•</span>
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Micro Outcome */}
            <div className="pt-4 border-t border-white/[0.08] text-xs font-mono text-gray-400 flex items-center justify-between">
              <span>Predictive Prevention: Active</span>
              <span className="text-emerald-400">{behavioralPatternInsight.prescriptionDetails.expectedOutcome}</span>
            </div>
          </div>

          {/* Right: Selected Day Telemetry Inspector */}
          <div className="lg:col-span-5 bg-[#0B0F17] border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                <span className="text-xs uppercase font-mono tracking-widest text-gray-400">
                  Daily Biometric Signature
                </span>
                <span className="text-xs font-mono text-indigo-400 font-bold">
                  {activeDay.day}
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-semibold text-white mb-1">{activeDay.highlight}</div>
                  <p className="text-xs text-gray-400 leading-relaxed">{activeDay.notes}</p>
                </div>

                {/* Day Vital Bars */}
                <div className="space-y-3 pt-2">
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-gray-400">Activity Level</span>
                      <span className="text-white font-bold">{activeDay.activityScore} / 100</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${activeDay.activityScore}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-gray-400">Autonomic Stress Spikes</span>
                      <span className="text-white font-bold">{activeDay.stressScore} / 100</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full bg-red-400 rounded-full" style={{ width: `${activeDay.stressScore}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-gray-400">Sleep Duration</span>
                      <span className="text-white font-bold">{activeDay.sleepHours} Hours</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full bg-indigo-400 rounded-full" style={{ width: `${(activeDay.sleepHours / 9) * 100}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 text-[11px] text-gray-400 font-mono">
              💡 NIVA dynamically offsets tomorrow’s schedule before biological exhaustion sets in.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
