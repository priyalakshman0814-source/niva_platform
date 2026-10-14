import React, { useState } from 'react';
import {
  Activity,
  CheckCircle,
  TrendingDown,
  Calendar,
  MessageSquare,
  Play,
  RotateCcw,
  Sparkles,
  Award,
  Clock,
  Radio,
  Sliders,
} from 'lucide-react';

export default function DashboardSection() {
  const [activeTab, setActiveTab] = useState('session'); // 'session' | 'recovery' | 'notes'
  const [jointAngle, setJointAngle] = useState(128); // Knee flexion in degrees (interactive slider)
  const [sessionCompleted, setSessionCompleted] = useState(false);
  const targetAngle = 135;

  // Compute status based on angle
  const angleDiff = Math.abs(targetAngle - jointAngle);
  const isOptimal = angleDiff <= 8;

  return (
    <section id="dashboard" className="py-24 sm:py-32 bg-[#FAF9F6] border-t border-[#E2E6E1]/70">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#3D6C52] mb-3">
            Clinical Dashboard
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#19201E]">
            A minimal, distraction-free view into your body's healing.
          </h2>
          <p className="text-sm sm:text-base text-[#55625E] mt-4 font-normal leading-relaxed">
            Inspired by Sword Health’s digital physical therapy platform—streamlined into an essential, calm interface showing range of motion, pain relief, and clinician guidance.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="bg-white rounded-3xl border border-[#E2E6E1] shadow-float overflow-hidden">
          {/* Top Member & Sensor Bar */}
          <div className="bg-[#FAF9F6] border-b border-[#E2E6E1] px-6 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#E6EEE8] text-[#3D6C52] font-semibold text-xs flex items-center justify-center">
                EV
              </div>
              <div>
                <div className="text-xs font-semibold text-[#19201E]">Elena Vance • Member #2409</div>
                <div className="text-[11px] text-[#55625E]">
                  Prescription: Lumbar & Knee Restoration • Week 4 of 8
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2E6E1] text-[#3D6C52] font-medium font-mono text-[11px]">
                <Radio className="w-3 h-3 animate-pulse" />
                <span>3 Sensors Connected (0.2° Drift)</span>
              </div>
              <div className="text-[11px] text-[#55625E] hidden sm:block">
                Care Lead: <span className="text-[#19201E] font-medium">Dr. Sarah Lin, DPT</span>
              </div>
            </div>
          </div>

          {/* Minimal Navigation Tabs */}
          <div className="border-b border-[#E2E6E1] px-6 sm:px-8 flex gap-6 text-xs font-medium">
            <button
              onClick={() => setActiveTab('session')}
              className={`py-3.5 border-b-2 transition-all flex items-center gap-2 ${
                activeTab === 'session'
                  ? 'border-[#3D6C52] text-[#19201E] font-semibold'
                  : 'border-transparent text-[#55625E] hover:text-[#19201E]'
              }`}
            >
              <Activity className="w-3.5 h-3.5 text-[#3D6C52]" />
              <span>Live Movement Session</span>
            </button>
            <button
              onClick={() => setActiveTab('recovery')}
              className={`py-3.5 border-b-2 transition-all flex items-center gap-2 ${
                activeTab === 'recovery'
                  ? 'border-[#3D6C52] text-[#19201E] font-semibold'
                  : 'border-transparent text-[#55625E] hover:text-[#19201E]'
              }`}
            >
              <TrendingDown className="w-3.5 h-3.5 text-[#3D6C52]" />
              <span>Pain & Recovery Trajectory</span>
            </button>
            <button
              onClick={() => setActiveTab('notes')}
              className={`py-3.5 border-b-2 transition-all flex items-center gap-2 ${
                activeTab === 'notes'
                  ? 'border-[#3D6C52] text-[#19201E] font-semibold'
                  : 'border-transparent text-[#55625E] hover:text-[#19201E]'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#3D6C52]" />
              <span>Physical Therapist Notes</span>
            </button>
          </div>

          {/* Tab Content 1: Live Movement Session */}
          {activeTab === 'session' && (
            <div className="p-6 sm:p-9 space-y-8 animate-fadeIn">
              {/* Routine Header */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#3D6C52] font-semibold">
                    Current Exercise
                  </span>
                  <h3 className="text-xl sm:text-2xl font-medium text-[#19201E] mt-0.5">
                    Seated Knee Extension & Quadriceps Activation
                  </h3>
                  <p className="text-xs text-[#55625E] mt-1">
                    Prescribed tempo: 3s extension, 2s hold at peak, 3s controlled descent
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-[#FAF9F6] border border-[#E2E6E1] text-[#19201E] font-medium">
                    Repetition 8 of 10
                  </span>
                  <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-[#E6EEE8] text-[#3D6C52] font-medium">
                    Set 2 / 3
                  </span>
                </div>
              </div>

              {/* Central Biomechanical Gauge & Interactive Sensor Control */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAF9F6] p-6 sm:p-8 rounded-3xl border border-[#E2E6E1]/80">
                {/* Visual SVG Angle Dial */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center">
                  <div className="relative w-48 h-48 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                      {/* Background Track */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        className="stroke-[#E2E6E1] fill-none stroke-[8]"
                      />
                      {/* Target Indicator Arc */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        className="stroke-[#3D6C52]/20 fill-none stroke-[8]"
                        strokeDasharray="251.2"
                        strokeDashoffset={251.2 - (251.2 * targetAngle) / 180}
                      />
                      {/* Active Live Joint Angle Arc */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        className={`fill-none stroke-[8] transition-all duration-300 ${
                          isOptimal ? 'stroke-[#3D6C52]' : 'stroke-[#55625E]'
                        }`}
                        strokeDasharray="251.2"
                        strokeDashoffset={251.2 - (251.2 * jointAngle) / 180}
                        strokeLinecap="round"
                      />
                    </svg>

                    {/* Centered Readout */}
                    <div className="absolute flex flex-col items-center justify-center text-center">
                      <span className="text-3xl font-semibold text-[#19201E] font-mono tracking-tight">
                        {jointAngle}°
                      </span>
                      <span className="text-[11px] text-[#55625E] font-medium mt-0.5">
                        Target: {targetAngle}°
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium inline-flex items-center gap-1.5 ${
                        isOptimal
                          ? 'bg-[#E6EEE8] text-[#3D6C52]'
                          : 'bg-white border border-[#E2E6E1] text-[#55625E]'
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isOptimal ? 'bg-[#3D6C52]' : 'bg-[#808E8A]'
                        }`}
                      ></span>
                      {isOptimal ? 'Optimal Extension Arc' : 'Extend Slightly More'}
                    </span>
                  </div>
                </div>

                {/* Interactive Slider & Guidance Box */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-semibold text-[#19201E] flex items-center gap-1.5">
                        <Sliders className="w-3.5 h-3.5 text-[#3D6C52]" />
                        Simulate Real-time Knee Angle
                      </span>
                      <span className="font-mono text-[#55625E]">{jointAngle}° flexion</span>
                    </div>
                    {/* Range slider for user interaction */}
                    <input
                      type="range"
                      min="45"
                      max="145"
                      value={jointAngle}
                      onChange={(e) => setJointAngle(Number(e.target.value))}
                      className="w-full h-2 bg-[#E2E6E1] rounded-lg appearance-none cursor-pointer accent-[#3D6C52]"
                    />
                    <div className="flex justify-between text-[10px] text-[#808E8A] font-mono mt-1">
                      <span>45° (Rest)</span>
                      <span>90° (Mid-Flexion)</span>
                      <span>135° (Full Extension Target)</span>
                    </div>
                  </div>

                  {/* Real-time Guidance Cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-3.5 rounded-2xl border border-[#E2E6E1]">
                      <div className="text-[10px] font-semibold text-[#808E8A] uppercase">
                        Valgus Stability
                      </div>
                      <div className="text-sm font-semibold text-[#19201E] mt-1 font-mono">
                        0.8° Coronal Drift
                      </div>
                      <div className="text-[11px] text-[#3D6C52] mt-0.5">Aligned & Safe</div>
                    </div>
                    <div className="bg-white p-3.5 rounded-2xl border border-[#E2E6E1]">
                      <div className="text-[10px] font-semibold text-[#808E8A] uppercase">
                        Cadence Smoothness
                      </div>
                      <div className="text-sm font-semibold text-[#19201E] mt-1 font-mono">
                        98% Uniform
                      </div>
                      <div className="text-[11px] text-[#3D6C52] mt-0.5">No Compensatory Jerk</div>
                    </div>
                  </div>

                  {/* Digital Therapist Haptic Instruction */}
                  <div className="p-3.5 rounded-2xl bg-white border border-[#E6EEE8] text-xs text-[#55625E] flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-[#3D6C52] shrink-0" />
                    <span>
                      Sensor biofeedback: Gently hold peak extension for 2 seconds. The pod will emit a micro-haptic pulse when complete.
                    </span>
                  </div>
                </div>
              </div>

              {/* Weekly Streak & Adherence Stats (Sword feature) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#E2E6E1]/70">
                <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E2E6E1]/70">
                  <div className="text-[11px] text-[#55625E]">Weekly Adherence</div>
                  <div className="text-lg font-semibold text-[#19201E] mt-0.5">5 of 5 Sessions</div>
                  <div className="text-[10px] text-[#3D6C52] font-medium mt-0.5">100% On Schedule</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E2E6E1]/70">
                  <div className="text-[11px] text-[#55625E]">Movement Streak</div>
                  <div className="text-lg font-semibold text-[#19201E] mt-0.5">18 Days</div>
                  <div className="text-[10px] text-[#3D6C52] font-medium mt-0.5">Zero Missed Days</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E2E6E1]/70">
                  <div className="text-[11px] text-[#55625E]">Mobility Accuracy</div>
                  <div className="text-lg font-semibold text-[#19201E] mt-0.5">96.4%</div>
                  <div className="text-[10px] text-[#3D6C52] font-medium mt-0.5">+4.2% This Week</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E2E6E1]/70">
                  <div className="text-[11px] text-[#55625E]">Active Session Time</div>
                  <div className="text-lg font-semibold text-[#19201E] mt-0.5">14 Minutes</div>
                  <div className="text-[10px] text-[#55625E] font-medium mt-0.5">Prescribed Daily Goal</div>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 2: Pain & Recovery Trajectory (Sword Core Metric) */}
          {activeTab === 'recovery' && (
            <div className="p-6 sm:p-9 space-y-8 animate-fadeIn">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#3D6C52] font-semibold">
                    Clinical Outcomes
                  </span>
                  <h3 className="text-xl sm:text-2xl font-medium text-[#19201E] mt-0.5">
                    Self-Reported Pain & Musculoskeletal Recovery
                  </h3>
                  <p className="text-xs text-[#55625E] mt-1">
                    Standardized VAS (Visual Analogue Scale) pain score measured weekly
                  </p>
                </div>
                <div className="px-4 py-2 rounded-2xl bg-[#E6EEE8] text-[#3D6C52] text-xs font-semibold flex items-center gap-2">
                  <TrendingDown className="w-4 h-4" />
                  <span>62% Pain Reduction from Baseline</span>
                </div>
              </div>

              {/* Visual Pain Reduction Chart (Minimalist SVG Line & Points) */}
              <div className="bg-[#FAF9F6] p-6 sm:p-8 rounded-3xl border border-[#E2E6E1]/80">
                <div className="text-xs font-semibold text-[#19201E] mb-4">
                  Pain Level Progression (Score 0 to 10)
                </div>

                <div className="relative h-44 w-full flex items-end justify-between px-4 pb-6 pt-4 border-b border-[#E2E6E1]">
                  {[
                    { week: 'Week 1 (Intake)', pain: 7.6, height: '76%' },
                    { week: 'Week 2', pain: 6.2, height: '62%' },
                    { week: 'Week 3', pain: 4.8, height: '48%' },
                    { week: 'Week 4 (Current)', pain: 2.9, height: '29%' },
                    { week: 'Week 6 (Projected)', pain: 1.8, height: '18%', projected: true },
                    { week: 'Week 8 (Target)', pain: 1.0, height: '10%', projected: true },
                  ].map((pt, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <span className="text-[11px] font-mono font-semibold text-[#19201E]">
                        {pt.pain}
                      </span>
                      <div
                        style={{ height: pt.height }}
                        className={`w-7 sm:w-10 rounded-t-lg transition-all ${
                          pt.projected
                            ? 'bg-[#E2E6E1] border-2 border-dashed border-[#808E8A]/50'
                            : i === 3
                            ? 'bg-[#3D6C52]'
                            : 'bg-[#C7DBCB]'
                        }`}
                      ></div>
                      <span className="text-[10px] text-[#55625E] text-center max-w-[70px] truncate">
                        {pt.week}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-[#55625E]">
                  <span>Baseline Intake Score: 7.6 / 10 (High Pain)</span>
                  <span className="text-[#3D6C52] font-semibold">
                    Current Score: 2.9 / 10 (Mild / Minimal Impact)
                  </span>
                </div>
              </div>

              {/* Autonomic Recovery Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-[#E2E6E1]">
                  <div className="text-[11px] text-[#55625E]">Resting HRV (Parasympathetic)</div>
                  <div className="text-xl font-semibold text-[#19201E] mt-1 font-mono">68 ms</div>
                  <div className="text-xs text-[#3D6C52] mt-1">+12 ms over 30-day baseline</div>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-[#E2E6E1]">
                  <div className="text-[11px] text-[#55625E]">Nocturnal Rest Recovery</div>
                  <div className="text-xl font-semibold text-[#19201E] mt-1 font-mono">91 / 100</div>
                  <div className="text-xs text-[#3D6C52] mt-1">Optimal restorative sleep</div>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-[#E2E6E1]">
                  <div className="text-[11px] text-[#55625E]">Surgery Avoidance Index</div>
                  <div className="text-xl font-semibold text-[#19201E] mt-1 font-mono">88%</div>
                  <div className="text-xs text-[#3D6C52] mt-1">Clinician determined conservative recovery</div>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 3: Care Team Notes (Physical Therapist Oversight) */}
          {activeTab === 'notes' && (
            <div className="p-6 sm:p-9 space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#3D6C52] font-semibold">
                    Clinician Oversight
                  </span>
                  <h3 className="text-xl sm:text-2xl font-medium text-[#19201E] mt-0.5">
                    Care Team Consultation & Adjustments
                  </h3>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-[#E6EEE8] text-[#3D6C52] font-medium">
                  HIPAA Verified Clinical Portal
                </span>
              </div>

              {/* Messages from DPT */}
              <div className="space-y-4">
                <div className="bg-[#FAF9F6] p-5 rounded-2xl border border-[#E2E6E1]">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <div className="font-semibold text-[#19201E] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#3D6C52]"></span>
                      Dr. Sarah Lin, PT, DPT (Physical Therapist)
                    </div>
                    <span className="text-[#808E8A]">Today at 09:14 AM</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#55625E] leading-relaxed">
                    "Hi Elena! I reviewed the sensor telemetry from yesterday's knee extension session. Your extension arc reached 128°, which is fantastic progress from the 112° we recorded at intake. There was minimal valgus collapse on your final two repetitions. I have adjusted your Thursday session to add gentle resistance bands. Keep up the consistent work!"
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#E2E6E1]">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <div className="font-semibold text-[#19201E] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#808E8A]"></span>
                      Elena Vance (Member)
                    </div>
                    <span className="text-[#808E8A]">Yesterday at 06:40 PM</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#55625E] leading-relaxed">
                    "The vibration feedback on the knee pod made it so much easier to know when I was tilting inward. Feeling much less morning stiffness in the lumbar area as well."
                  </p>
                </div>
              </div>

              {/* Clinical Protocol Summary */}
              <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E2E6E1] flex flex-wrap items-center justify-between gap-4 text-xs">
                <div>
                  <span className="text-[#808E8A]">Next Scheduled Review: </span>
                  <span className="text-[#19201E] font-medium">Friday, October 16 with Dr. Lin</span>
                </div>
                <button className="px-4 py-2 rounded-xl bg-[#19201E] text-white text-xs font-medium hover:bg-[#273430] transition-colors">
                  Message Care Specialist
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
