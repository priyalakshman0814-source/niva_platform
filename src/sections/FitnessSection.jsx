import React, { useState } from 'react';

export default function FitnessSection() {
  const [recoveryScore, setRecoveryScore] = useState(72);
  const [yesterdayStrain, setYesterdayStrain] = useState('moderate'); // 'heavy', 'moderate', 'rest'

  // Dynamic workout prescription calculation
  const getPrescription = () => {
    if (recoveryScore < 50 || yesterdayStrain === 'heavy') {
      return {
        type: 'Active Recovery & Fascial Mobility',
        intensity: 'Low (RPE 3-4)',
        setsReps: '2 Sets × 15-20 Reps (Bodyweight / Resistance Band)',
        duration: '25 Minutes',
        calories: '160 kcal',
        cardioTarget: 'Zone 1 Recovery Walk (< 115 BPM)',
        primaryFocus: 'Thoracic Extension, Hamstring Decompression, Deep Diaphragmatic Breathwork',
        rationale: 'Autonomic tone indicates incomplete glycogen restoration and parasympathetic debt. Heavy eccentric loading would delay adaptation.'
      };
    } else if (recoveryScore >= 80 && yesterdayStrain !== 'heavy') {
      return {
        type: 'High-Velocity Compound Strength',
        intensity: 'High (RPE 8.5-9.0)',
        setsReps: '4 Sets × 6 Reps (82.5% 1RM Heavy Compound)',
        duration: '55 Minutes',
        calories: '490 kcal',
        cardioTarget: 'Zone 4 Anaerobic Threshold (160-175 BPM)',
        primaryFocus: 'Barbell Back Squat, Romanian Deadlift, Explosive Push Press',
        rationale: 'Resting HRV is +18% above baseline and central nervous recovery is primed. Ideal window to stimulate progressive overload and myofibrillar hypertrophy.'
      };
    } else {
      // Default / moderate (72%)
      return {
        type: 'Moderate Strength Training',
        intensity: 'Moderate (RPE 6.5-7.0)',
        setsReps: '3 Sets × 10 Reps (70% 1RM Hypertrophy Focus)',
        duration: '45 Minutes',
        calories: '340 kcal',
        cardioTarget: 'Zone 2 Base Conditioning (125-140 BPM)',
        primaryFocus: 'Dumbbell Incline Press, Neutral Grip Cable Rows, Goblet Squats',
        rationale: 'Solid cardiovascular equilibrium. Moderate volume allows progressive neuromuscular stimulus without inducing excessive central fatigue.'
      };
    }
  };

  const prescription = getPrescription();

  // Weekly workout volume metrics
  const weeklySchedule = [
    { day: 'Mon', focus: 'Upper Push & Pull', volume: '14,200 kg', status: 'Completed', strain: 15.2 },
    { day: 'Tue', focus: 'Zone 2 Aerobic Base', volume: '45 mins', status: 'Completed', strain: 11.8 },
    { day: 'Wed', focus: 'Lower Kinetic Chain', volume: '18,500 kg', status: 'Completed', strain: 16.9 },
    { day: 'Thu', focus: 'Mobility & Vagal Reset', volume: '30 mins', status: 'Completed', strain: 6.4 },
    { day: 'Today', focus: prescription.type, volume: prescription.setsReps, status: 'Prescribed', strain: 13.5, active: true },
    { day: 'Sat', focus: 'Threshold Intervals', volume: '35 mins', status: 'Scheduled', strain: 14.0 },
    { day: 'Sun', focus: 'Rest & Myofascial Flow', volume: '20 mins', status: 'Scheduled', strain: 4.5 }
  ];

  return (
    <section id="fitness" className="relative py-28 bg-[#05070A] border-t border-white/[0.06] overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-lime-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-400 text-xs font-mono uppercase tracking-widest mb-4">
            Dynamic Kinetic Adaptation
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-5">
            Fitness that{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-400">
              adapts to you.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Rigid workout plans ignore human biology. NIVA recalculates your training volume, sets, repetitions, and rest intervals every single morning based on your nocturnal recovery, previous day fatigue, and real-time kinetic bar velocity.
          </p>
        </div>

        {/* Interactive Adaptation Controls Bar */}
        <div className="bg-[#0B0F17] border border-white/10 rounded-3xl p-6 sm:p-7 backdrop-blur-2xl shadow-xl mb-10 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Recovery Slider */}
            <div className="w-full sm:w-1/2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase font-mono tracking-wider text-gray-300">
                  Simulate Today's Recovery
                </span>
                <span className="font-mono text-sm font-bold text-lime-400">{recoveryScore}%</span>
              </div>
              <input
                type="range"
                min="35"
                max="98"
                value={recoveryScore}
                onChange={(e) => setRecoveryScore(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-lime-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-gray-500 mt-1">
                <span>Low (&lt; 50%)</span>
                <span>Moderate (70-79%)</span>
                <span>Peak (&gt; 80%)</span>
              </div>
            </div>

            {/* Yesterday Behavior Toggle */}
            <div className="w-full sm:w-auto">
              <span className="text-xs uppercase font-mono tracking-wider text-gray-300 block mb-2 text-center sm:text-left">
                Yesterday's Muscular Strain
              </span>
              <div className="flex items-center gap-2">
                {[
                  { id: 'rest', label: 'Rest Day' },
                  { id: 'moderate', label: 'Moderate Workout' },
                  { id: 'heavy', label: 'Heavy Leg Day' }
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setYesterdayStrain(st.id)}
                    className={`text-xs px-3 py-1.5 rounded-xl border font-medium transition ${
                      yesterdayStrain === st.id
                        ? 'bg-lime-400 text-black border-lime-400 font-bold'
                        : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard: AI Recommendation Card vs Weekly Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Dynamic AI Workout Prescription Card */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#0D1714] via-[#090E12] to-[#070B0E] border border-lime-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-lime-400 animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-widest text-lime-400 font-bold">
                    Today's Bio-Prescription
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-300 text-xs font-mono">
                  Recovery: {recoveryScore}%
                </span>
              </div>

              {/* Main Recommended Workout Title */}
              <div className="mb-6">
                <span className="text-[11px] font-mono uppercase text-gray-400 tracking-wider block mb-1">
                  Recommended Session
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  {prescription.type}
                </h3>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-lime-300">
                  <span>Intensity: {prescription.intensity}</span>
                  <span>•</span>
                  <span>Target: {prescription.setsReps}</span>
                </div>
              </div>

              {/* Workout Details Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <span className="text-[10px] font-mono text-gray-400 uppercase block mb-0.5">Estimated Duration</span>
                  <span className="text-lg font-bold text-white font-mono">{prescription.duration}</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <span className="text-[10px] font-mono text-gray-400 uppercase block mb-0.5">Projected Caloric Burn</span>
                  <span className="text-lg font-bold text-white font-mono">{prescription.calories}</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 col-span-2">
                  <span className="text-[10px] font-mono text-gray-400 uppercase block mb-0.5">Target Movements & Focus</span>
                  <span className="text-xs font-medium text-gray-200">{prescription.primaryFocus}</span>
                </div>
              </div>

              {/* Biological Rationale */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 text-xs text-gray-300 leading-relaxed mb-6">
                <span className="text-lime-400 font-mono font-bold block mb-1 uppercase text-[10px]">
                  Autonomous Adaptation Logic:
                </span>
                {prescription.rationale}
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-gray-400 font-mono">
              <span>Velocity Auto-Regulation: Active</span>
              <span className="text-lime-400">Sync with Smart Barbell</span>
            </div>
          </div>

          {/* Right: Weekly Fitness Architecture & Volume Tracker */}
          <div className="lg:col-span-6 bg-[#0B0F17] border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                <span className="text-xs uppercase font-mono tracking-widest text-gray-400">
                  Adaptive Weekly Schedule
                </span>
                <span className="text-xs font-mono text-emerald-400">
                  Cumulative Strain: 14.8
                </span>
              </div>

              {/* Weekly Day Cards */}
              <div className="space-y-2.5 mb-6">
                {weeklySchedule.map((day, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-2xl border transition flex items-center justify-between ${
                      day.active
                        ? 'bg-lime-950/30 border-lime-500/50 shadow-lg shadow-lime-950/20'
                        : 'bg-white/[0.02] border-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-12 text-xs font-mono font-bold ${day.active ? 'text-lime-400' : 'text-gray-400'}`}>
                        {day.day}
                      </span>
                      <div>
                        <div className="text-xs font-semibold text-white">{day.focus}</div>
                        <div className="text-[10px] text-gray-400 font-mono">{day.volume}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">
                        Strain {day.strain}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                          day.status === 'Completed'
                            ? 'bg-emerald-500/10 text-emerald-400'
                            : day.status === 'Prescribed'
                            ? 'bg-lime-500/20 text-lime-300 animate-pulse'
                            : 'bg-white/5 text-gray-500'
                        }`}
                      >
                        {day.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Kinetic Barbell Integration Callout */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-between text-xs">
              <span className="text-gray-300">
                Connected with <span className="text-white font-semibold">NIVA Smart Equipment</span>
              </span>
              <span className="text-emerald-400 font-mono">Auto 1RM Estimator ON</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
