import React, { useState, useEffect } from 'react';

export default function DashboardPreview() {
  const [pulseCount, setPulseCount] = useState(72);
  const [activeMetricTab, setActiveMetricTab] = useState('recovery');

  // Subtle real-time heart rate variation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseCount(prev => 70 + Math.floor(Math.random() * 5));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const healthMetrics = [
    { id: 'hr', label: 'Heart Rate', value: `${pulseCount} BPM`, icon: '❤️', status: 'Optimal', sub: 'Baseline 54 BPM', trend: 'Resting steady' },
    { id: 'recovery', label: 'Recovery', value: '84%', icon: '⚡', status: 'Prime', sub: 'Autonomic HRV +14%', trend: 'Supercompensation' },
    { id: 'sleep', label: 'Sleep', value: '7h 42m', icon: '🌙', status: 'Deep & REM', sub: '92% Efficiency', trend: '1h 48m Deep Sleep' },
    { id: 'activity', label: 'Activity', value: '8,420 steps', icon: '👟', status: 'Cadence High', sub: '5.8 km Traveled', trend: '42 Active Mins' },
    { id: 'calories', label: 'Calories', value: '1,840 kcal', icon: '🔥', status: 'In Zone', sub: '1,420 Basal + 420 Act', trend: 'Macro balanced' },
    { id: 'stress', label: 'Stress', value: 'Low', icon: '🧠', status: 'Score 14/100', sub: 'Sympathetic Relaxed', trend: 'Vagal tone stable' },
    { id: 'hydration', label: 'Hydration', value: '68%', icon: '💧', status: 'Optimal', sub: '1.7L of 2.5L Goal', trend: 'Electrolytes synced' }
  ];

  return (
    <section id="dashboard" className="relative py-28 bg-[#05070A] border-t border-white/[0.06] overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-4">
            Unified Daily Console
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-5">
            Your daily health cockpit.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              In real time.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            All your vitals, sleep stages, nutritional macro balances, and exercise loads synthesized into an elegant, distraction-free command center.
          </p>
        </div>

        {/* Master Glassmorphic Dashboard Window */}
        <div className="bg-[#0B0F17]/95 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-2xl shadow-emerald-950/20 relative overflow-hidden">
          {/* Top Console Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/[0.08] gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-lg font-bold text-white font-mono">Today's Health</span>
              </div>
              <span className="text-xs text-gray-400 font-mono">| Last calibrated: Just now</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                AI Agent Active
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                Bio-Telemetry 250Hz
              </span>
            </div>
          </div>

          {/* Prompt Required Metrics Grid: Heart Rate 72 BPM, Recovery 84%, Sleep 7h 42m, Activity 8420 steps, Calories 1840 kcal, Stress Low, Hydration 68% */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
            {healthMetrics.map((met) => (
              <div
                key={met.id}
                onClick={() => setActiveMetricTab(met.id)}
                className={`p-4 rounded-2xl border cursor-pointer transition flex flex-col justify-between ${
                  activeMetricTab === met.id
                    ? 'bg-emerald-950/30 border-emerald-400/60 shadow-lg shadow-emerald-950/20'
                    : 'bg-white/[0.02] border-white/5 hover:border-white/15'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400">{met.label}</span>
                    <span className="text-sm">{met.icon}</span>
                  </div>
                  <div className="text-lg sm:text-xl font-bold font-mono text-white mb-1">
                    {met.value}
                  </div>
                </div>
                <div className="text-[10px] text-emerald-400 font-mono truncate">
                  {met.status}
                </div>
              </div>
            ))}
          </div>

          {/* NIVA Insight Banner (Highlight requirement from Prompt) */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/50 via-[#0E1522] to-cyan-950/40 border border-emerald-500/40 shadow-xl mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/20 border border-emerald-400/50 flex items-center justify-center text-lg text-emerald-400 flex-shrink-0 mt-0.5">
                ✦
              </div>
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-emerald-400 font-bold block mb-1">
                  NIVA Insight
                </span>
                <blockquote className="text-lg font-bold text-white leading-snug">
                  “You're recovering well today. A moderate strength workout is recommended.”
                </blockquote>
              </div>
            </div>

            <button className="px-5 py-2.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-black font-semibold text-xs font-mono tracking-wider transition whitespace-nowrap self-start md:self-center shadow-lg shadow-emerald-400/20">
              Apply to Schedule →
            </button>
          </div>

          {/* Animated Interactive Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Chart 1: Live ECG Cardiac Waveform & HRV */}
            <div className="lg:col-span-6 bg-black/40 border border-white/5 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3 text-xs font-mono">
                <span className="text-gray-300 font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  Live Electrocardiogram (ECG) Stream
                </span>
                <span className="text-red-400">{pulseCount} BPM • Sinus Rhythm</span>
              </div>

              {/* Animated SVG ECG Waveform */}
              <div className="relative h-28 bg-[#060A10] rounded-xl overflow-hidden border border-white/5 flex items-center">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 500 100">
                  <path
                    d="M 0 50 L 80 50 L 90 45 L 98 55 L 105 50 L 130 50 L 135 15 L 142 85 L 148 50 L 170 50 L 180 38 L 195 50 L 250 50 L 260 45 L 268 55 L 275 50 L 300 50 L 305 15 L 312 85 L 318 50 L 340 50 L 350 38 L 365 50 L 420 50 L 430 45 L 438 55 L 445 50 L 470 50 L 475 15 L 482 85 L 488 50 L 500 50"
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
                  />
                </svg>
                {/* Real-time radar sweep beam */}
                <div className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent to-red-500/20 border-r border-red-500/60 animate-scanline" />
              </div>
              <div className="flex justify-between text-[11px] text-gray-500 font-mono mt-2">
                <span>Sampling: 250 Hz Lead I</span>
                <span>HRV RMSSD: 78 ms</span>
              </div>
            </div>

            {/* Chart 2: 7-Day Strain vs Recovery Bar Graph */}
            <div className="lg:col-span-6 bg-black/40 border border-white/5 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3 text-xs font-mono">
                <span className="text-gray-300 font-semibold">Weekly Strain vs. Recovery</span>
                <span className="text-emerald-400">Optimal Equilibrium</span>
              </div>

              {/* Weekly bar comparison */}
              <div className="h-28 bg-[#060A10] rounded-xl p-3 border border-white/5 flex items-end justify-between gap-2">
                {[
                  { d: 'Mon', rec: 78, str: 65 },
                  { d: 'Tue', rec: 88, str: 72 },
                  { d: 'Wed', rec: 62, str: 84 },
                  { d: 'Thu', rec: 52, str: 40 },
                  { d: 'Fri', rec: 74, str: 68 },
                  { d: 'Sat', rec: 82, str: 75 },
                  { d: 'Sun', rec: 84, str: 60 }
                ].map((bar, bIdx) => (
                  <div key={bIdx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                    <div className="w-full flex items-end justify-center gap-1 h-20">
                      <div
                        className="w-2.5 bg-emerald-400/80 rounded-t transition-all hover:bg-emerald-300"
                        style={{ height: `${bar.rec}%` }}
                        title={`Recovery: ${bar.rec}%`}
                      />
                      <div
                        className="w-2.5 bg-cyan-400/70 rounded-t transition-all hover:bg-cyan-300"
                        style={{ height: `${bar.str}%` }}
                        title={`Strain: ${bar.str}%`}
                      />
                    </div>
                    <span className="text-[10px] text-gray-400 font-mono">{bar.d}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-6 text-[11px] font-mono mt-2">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded bg-emerald-400" /> Recovery %
                </span>
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <span className="w-2 h-2 rounded bg-cyan-400" /> Muscular Strain %
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
