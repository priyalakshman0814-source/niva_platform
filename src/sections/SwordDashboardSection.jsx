import React, { useState } from 'react';
import {
  Activity,
  TrendingDown,
  MessageSquare,
  Sparkles,
  Sliders,
} from 'lucide-react';

export default function SwordDashboardSection() {
  const [activeTab, setActiveTab] = useState('session');
  const [jointAngle, setJointAngle] = useState(128);
  const targetAngle = 135;

  const isOptimal = Math.abs(targetAngle - jointAngle) <= 8;

  return (
    <section id="dashboard" className="py-24 sm:py-32 bg-[#FAFCFB] border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-mono uppercase tracking-widest mb-3">
            Clinical Motion Intelligence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Clinical physical therapy dashboard.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal leading-relaxed">
            Directly adapted from Sword Health’s clinical motion tracking—providing real-time angle biofeedback, pain reduction tracking, and physical therapist oversight.
          </p>
        </div>

        {/* Dashboard Shell in Light Mode */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-float overflow-hidden">
          {/* Top Member Status Bar */}
          <div className="bg-[#F8FAFC] border-b border-slate-200 px-6 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 text-white font-bold text-xs flex items-center justify-center font-mono shadow-xs">
                EV
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Elena Vance • Member #2409</div>
                <div className="text-[11px] text-slate-500">
                  Lumbar & Knee Restoration • Week 4 of 8 • Dr. Sarah Lin, DPT
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-teal-800 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>3 Sensors Active • 0.2° Precision</span>
            </div>
          </div>

          {/* Tab Selectors */}
          <div className="border-b border-slate-200 px-6 sm:px-8 flex gap-6 text-xs font-medium bg-white">
            <button
              onClick={() => setActiveTab('session')}
              className={`py-3.5 border-b-2 transition-all flex items-center gap-2 ${
                activeTab === 'session'
                  ? 'border-teal-600 text-teal-900 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Activity className="w-3.5 h-3.5 text-teal-600" />
              <span>Live Range of Motion (ROM)</span>
            </button>
            <button
              onClick={() => setActiveTab('recovery')}
              className={`py-3.5 border-b-2 transition-all flex items-center gap-2 ${
                activeTab === 'recovery'
                  ? 'border-teal-600 text-teal-900 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <TrendingDown className="w-3.5 h-3.5 text-teal-600" />
              <span>Pain Reduction Trajectory</span>
            </button>
            <button
              onClick={() => setActiveTab('notes')}
              className={`py-3.5 border-b-2 transition-all flex items-center gap-2 ${
                activeTab === 'notes'
                  ? 'border-teal-600 text-teal-900 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-teal-600" />
              <span>Physical Therapist Notes</span>
            </button>
          </div>

          {/* Tab 1: Live ROM Biofeedback in Green-Blue */}
          {activeTab === 'session' && (
            <div className="p-6 sm:p-9 space-y-8 animate-fadeIn">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-teal-700 font-bold">
                    Current Guided Routine
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    Seated Knee Extension & Patellofemoral Tracking
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Hold peak extension for 2 seconds. The sensor provides micro-haptic biofeedback.
                  </p>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800">
                    Rep 08 / 10
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold">
                    Set 02 / 03
                  </span>
                </div>
              </div>

              {/* Angle Dial & Interactive Slider */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F8FAFC] p-6 sm:p-8 rounded-2xl border border-slate-200">
                {/* SVG Angle Dial */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center">
                  <div className="relative w-48 h-48 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                      <circle cx="50" cy="50" r="40" className="stroke-slate-200 fill-none stroke-[8]" />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        className="stroke-teal-200 fill-none stroke-[8]"
                        strokeDasharray="251.2"
                        strokeDashoffset={251.2 - (251.2 * targetAngle) / 180}
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        className={`fill-none stroke-[8] transition-all duration-200 ${
                          isOptimal ? 'stroke-teal-600' : 'stroke-slate-400'
                        }`}
                        strokeDasharray="251.2"
                        strokeDashoffset={251.2 - (251.2 * jointAngle) / 180}
                        strokeLinecap="round"
                      />
                    </svg>

                    <div className="absolute flex flex-col items-center justify-center text-center">
                      <span className="text-3xl font-bold font-mono text-slate-900 tracking-tight">
                        {jointAngle}°
                      </span>
                      <span className="text-[11px] font-mono text-teal-700 font-bold mt-0.5">
                        Goal: {targetAngle}°
                      </span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <span
                      className={`text-xs px-3.5 py-1.5 rounded-full font-mono font-medium inline-flex items-center gap-2 ${
                        isOptimal
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold'
                          : 'bg-white text-slate-600 border border-slate-200'
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isOptimal ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'
                        }`}
                      ></span>
                      {isOptimal ? 'Optimal Extension Arc' : 'Extend Slightly More'}
                    </span>
                  </div>
                </div>

                {/* Interactive Slider */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2 font-mono">
                      <span className="text-slate-900 font-bold flex items-center gap-1.5">
                        <Sliders className="w-3.5 h-3.5 text-teal-600" />
                        Simulate Real-time Knee Angle
                      </span>
                      <span className="text-teal-700 font-bold">{jointAngle}° flexion</span>
                    </div>
                    <input
                      type="range"
                      min="45"
                      max="145"
                      value={jointAngle}
                      onChange={(e) => setJointAngle(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                      <span>45° (Rest)</span>
                      <span>90° (Mid-Flexion)</span>
                      <span>135° (Target Extension)</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                      <div className="text-[10px] font-mono text-slate-500 uppercase">Valgus Stability</div>
                      <div className="text-sm font-bold text-slate-900 mt-1 font-mono">0.8° Drift</div>
                      <div className="text-[11px] text-emerald-600 font-bold mt-0.5">Aligned & Safe</div>
                    </div>
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                      <div className="text-[10px] font-mono text-slate-500 uppercase">Cadence Smoothness</div>
                      <div className="text-sm font-bold text-slate-900 mt-1 font-mono">98% Uniform</div>
                      <div className="text-[11px] text-teal-600 font-bold mt-0.5">Smooth Motion</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-teal-200 text-xs text-slate-700 flex items-center gap-3 shadow-xs">
                    <Sparkles className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>
                      Sword Sensor Feedback: Real-time haptic pulse confirms rep depth and alerts if knees roll inward.
                    </span>
                  </div>
                </div>
              </div>

              {/* Streak Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200 font-mono text-xs">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
                  <div className="text-slate-500">Weekly Adherence</div>
                  <div className="text-lg font-bold text-slate-900 mt-1">5 / 5 Sessions</div>
                  <div className="text-emerald-600 text-[10px] font-bold mt-0.5">100% Target Met</div>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
                  <div className="text-slate-500">Movement Streak</div>
                  <div className="text-lg font-bold text-slate-900 mt-1">18 Days</div>
                  <div className="text-emerald-600 text-[10px] font-bold mt-0.5">Zero Missed Days</div>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
                  <div className="text-slate-500">Mobility Accuracy</div>
                  <div className="text-lg font-bold text-slate-900 mt-1">96.4%</div>
                  <div className="text-teal-600 text-[10px] font-bold mt-0.5">+4.2% This Week</div>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
                  <div className="text-slate-500">Daily Session Time</div>
                  <div className="text-lg font-bold text-slate-900 mt-1">14 Minutes</div>
                  <div className="text-slate-600 text-[10px] mt-0.5">Prescribed Goal</div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Pain Reduction in Green-Blue */}
          {activeTab === 'recovery' && (
            <div className="p-6 sm:p-9 space-y-8 animate-fadeIn">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-teal-700 font-bold">
                    Clinical Efficacy (VAS Pain Scale)
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    Self-Reported Musculoskeletal Pain Progression
                  </h3>
                </div>
                <div className="px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold flex items-center gap-2">
                  <TrendingDown className="w-4 h-4" />
                  <span>-62% Pain Reduction</span>
                </div>
              </div>

              <div className="bg-[#F8FAFC] p-6 sm:p-8 rounded-2xl border border-slate-200">
                <div className="relative h-44 w-full flex items-end justify-between px-4 pb-6 pt-4 border-b border-slate-200">
                  {[
                    { week: 'Week 1', pain: 7.6, height: '76%' },
                    { week: 'Week 2', pain: 6.2, height: '62%' },
                    { week: 'Week 3', pain: 4.8, height: '48%' },
                    { week: 'Week 4 (Now)', pain: 2.9, height: '29%' },
                    { week: 'Week 6 (Est)', pain: 1.8, height: '18%', proj: true },
                    { week: 'Week 8 (Goal)', pain: 1.0, height: '10%', proj: true },
                  ].map((pt, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <span className="text-[11px] font-mono font-bold text-slate-900">{pt.pain}</span>
                      <div
                        style={{ height: pt.height }}
                        className={`w-8 sm:w-12 rounded-t-lg transition-all ${
                          pt.proj
                            ? 'bg-slate-200 border-2 border-dashed border-slate-400'
                            : i === 3
                            ? 'bg-gradient-to-t from-emerald-600 to-teal-500 shadow-sm'
                            : 'bg-teal-200'
                        }`}
                      ></div>
                      <span className="text-[10px] font-mono text-slate-500 text-center max-w-[65px] truncate">
                        {pt.week}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-between text-xs font-mono text-slate-600">
                  <span>Intake Baseline: 7.6 / 10 (High Pain)</span>
                  <span className="text-emerald-700 font-bold">Current: 2.9 / 10 (Mild / Managed)</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: PT Notes */}
          {activeTab === 'notes' && (
            <div className="p-6 sm:p-9 space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-teal-700 font-bold">
                    Clinician Oversight
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    Care Team Consultation & Adjustments
                  </h3>
                </div>
                <span className="text-xs px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono font-bold">
                  HIPAA Verified Clinical Portal
                </span>
              </div>

              <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-teal-800 font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Dr. Sarah Lin, PT, DPT (Lead Physical Therapist)
                  </span>
                  <span className="text-slate-500">Today at 09:14 AM</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  "Hi Elena! I reviewed your motion sensor telemetry from yesterday's knee extension session. Your extension arc reached 128°, a significant jump from the 112° recorded at onboarding. Valgus collapse on the final reps stayed within 0.8°. I've added light resistance bands for your Thursday session. Excellent consistency!"
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
