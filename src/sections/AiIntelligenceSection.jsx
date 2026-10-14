import React, { useState } from 'react';
import { aiScenarios } from '../data/scenariosData';

export default function AiIntelligenceSection() {
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const scenario = aiScenarios[activeScenarioIdx];

  return (
    <section id="intelligence" className="relative py-28 bg-[#070A0F] border-t border-white/[0.06] overflow-hidden">
      {/* Background cyber grid */}
      <div className="absolute inset-0 bg-grid-cyber opacity-20 pointer-events-none" />

      {/* Ambient gradient */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-4">
            Pattern Cognition Engine
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-5">
            Your data becomes{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              intelligence.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            NIVA does not merely tally digits and dump raw charts. It synthesizes inter-dependent biological patterns to understand what those numbers mean for your day—turning raw telemetry into proactive, actionable guidance.
          </p>
        </div>

        {/* Interactive Scenario Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {aiScenarios.map((scen, idx) => (
            <button
              key={scen.id}
              onClick={() => setActiveScenarioIdx(idx)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider transition border ${
                activeScenarioIdx === idx
                  ? 'bg-emerald-400 text-black border-emerald-400 font-bold shadow-lg shadow-emerald-400/20'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:text-white hover:bg-white/10'
              }`}
            >
              Scenario {idx + 1}: {scen.title}
            </button>
          ))}
        </div>

        {/* Futuristic AI Dashboard Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Input Telemetry Pattern (Sleep ↓, Activity ↓, Stress ↑, Recovery ↓) */}
          <div className="lg:col-span-5 bg-[#0B0F17] border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                <span className="text-xs uppercase font-mono tracking-widest text-gray-400">
                  Multimodal Inputs
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-cyan-400">
                  {scenario.badge}
                </span>
              </div>

              {/* 4 Vector Indicators */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {Object.entries(scenario.metrics).map(([key, data]) => {
                  const isDown = data.direction === 'down';
                  const isUp = data.direction === 'up';
                  return (
                    <div
                      key={key}
                      className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs capitalize font-medium text-gray-400">{key}</span>
                        <span
                          className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                            data.status === 'critical'
                              ? 'bg-red-500/20 text-red-400'
                              : data.status === 'optimal'
                              ? 'bg-emerald-500/20 text-emerald-400'
                              : 'bg-amber-500/20 text-amber-400'
                          }`}
                        >
                          {data.label}
                        </span>
                      </div>
                      <div className="text-2xl font-bold font-mono text-white">{data.value}</div>
                    </div>
                  );
                })}
              </div>

              {/* Raw Biosensor Context */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 mb-6">
                <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Underlying Raw Biometrics
                </div>
                <p className="text-xs text-gray-300 font-mono leading-relaxed">
                  {scenario.rawTelemetry}
                </p>
              </div>
            </div>

            {/* Core Principle Footer */}
            <div className="pt-4 border-t border-white/[0.08] text-xs font-mono text-gray-400 flex items-center justify-between">
              <span>Sensor Fusion: 100% Fidelity</span>
              <span className="text-emerald-400">Latency: 42ms</span>
            </div>
          </div>

          {/* Right: AI Neural Reasoning & Animated Recommendation Card */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#0D1424] via-[#090D14] to-[#080C14] border border-emerald-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-2xl flex flex-col justify-between relative overflow-hidden">
            {/* Ambient accent light */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* AI Processing Status */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs uppercase font-mono tracking-widest text-emerald-400 font-bold">
                    NIVA Intelligence Synthesis
                  </span>
                </div>
                <span className="text-[11px] font-mono text-gray-400">
                  Confidence: 98.7%
                </span>
              </div>

              {/* AI Neural Reasoning */}
              <div className="mb-6">
                <div className="text-[11px] uppercase font-mono tracking-wider text-gray-400 mb-2">
                  Neural Deduction Logic
                </div>
                <p className="text-sm text-gray-200 leading-relaxed bg-white/[0.02] p-4 rounded-2xl border border-white/5">
                  {scenario.aiReasoning}
                </p>
              </div>

              {/* Animated AI Recommendation Card (Hero Highlight of this Section) */}
              <div className="relative p-6 sm:p-7 rounded-3xl bg-gradient-to-tr from-emerald-950/40 via-black to-cyan-950/30 border border-emerald-400/40 shadow-2xl shadow-emerald-950/30 mb-6 group">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-400/20 border border-emerald-400/50 flex items-center justify-center text-xs text-emerald-400">
                    💡
                  </div>
                  <span className="text-xs font-mono text-emerald-300 font-semibold uppercase tracking-wider">
                    Prescribed Bio-Directive
                  </span>
                </div>

                <blockquote className="text-lg sm:text-xl font-medium text-white leading-snug mb-4">
                  “{scenario.recommendationHeadline}”
                </blockquote>

                {/* Sub-Actions */}
                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  {scenario.actionPlan.map((act, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-white mr-1.5">{act.action}:</span>
                        <span className="text-gray-400">{act.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reinforce Concept Banner */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-between">
              <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                NIVA turns raw data into meaningful decisions.
              </span>
              <span className="text-xs text-emerald-400 font-mono hidden sm:inline">
                DATA → UNDERSTANDING → ACTION
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
