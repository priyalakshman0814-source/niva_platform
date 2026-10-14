import React, { useState } from 'react';

export default function EnvironmentSection() {
  const [activeNode, setActiveNode] = useState(0);

  const environmentNodes = [
    {
      id: 'home',
      name: 'Smart Home & Bedroom',
      icon: '🏠',
      headline: 'Autonomous Circadian Temperature & Lighting',
      detail: 'When NIVA Ring detects sleep readiness, your home automates: drops thermostat to 18.5°C to facilitate core cooling for deep slow-wave sleep, and shifts bedroom lighting to low-kelvin amber wavelengths.',
      status: 'Connected • Night Protocol Armed'
    },
    {
      id: 'gym',
      name: 'Smart Gym Equipment',
      icon: '🏋️',
      headline: 'Dynamic Load & Velocity Auto-Regulation',
      detail: 'Smart barbells and cable towers automatically preload resistance calibrated to your morning CNS recovery score. If bar velocity decelerates 10% faster than baseline, sets are safely truncated.',
      status: 'Connected • Auto-Load Sync Active'
    },
    {
      id: 'workplace',
      name: 'Workplace & Desk',
      icon: '💼',
      headline: 'Cognitive Stress Balancing & Pacing',
      detail: 'Detects sympathetic nervous spikes during high-friction meetings. Triggers subtle micro-break cues on your wrist with guided 2-minute physiological sigh breathing before cortisol accumulates.',
      status: 'Connected • Ergonomic Sentinel ON'
    },
    {
      id: 'vehicle',
      name: 'Connected Vehicle',
      icon: '🚗',
      headline: 'Commute Biometric Monitoring',
      detail: 'Monitors steering grip HRV and driver pupil dilation in congested traffic. Adjusts cabin ionizers, soothing audio acoustics, and seat lumbar support to keep autonomic nervous tension neutral.',
      status: 'Connected • Transit Stress Guard'
    },
    {
      id: 'phone',
      name: 'Mobile Ecosystem',
      icon: '📱',
      headline: 'Circadian Focus Mode & Blue-Light Filtering',
      detail: 'Harmonizes notification filtering with your biological chronotype. Blocks stimulating algorithmic feeds 60 minutes before scheduled sleep onset to protect nocturnal melatonin synthesis.',
      status: 'Connected • Chrono-Sync Enabled'
    },
    {
      id: 'health-devices',
      name: 'Clinical Health Devices',
      icon: '🩺',
      headline: 'Continuous Biomarker Telemetry',
      detail: 'Seamlessly aggregates blood pressure monitors, continuous glucose monitors (CGM), and digital spirometers into one encrypted longitudinal record for clinical consultation.',
      status: 'Connected • HIPAA Compliant Vault'
    }
  ];

  return (
    <section id="environment" className="relative py-28 bg-[#070A0F] border-t border-white/[0.06] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono uppercase tracking-widest mb-4">
            Ambient Ambient Intelligence
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-5">
            Wellness beyond{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-cyan-400">
              the workout.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            True health happens in the remaining 23 hours of the day. NIVA extends ambient intelligence into your living spaces, workplace, commute, and smart gym—adapting the environment to your internal physiology.
          </p>
        </div>

        {/* Interactive Futuristic Connected Environment Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Interactive Connected Environment Hub */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {environmentNodes.map((node, idx) => {
              const isSelected = activeNode === idx;
              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(idx)}
                  className={`p-4 rounded-2xl border cursor-pointer transition flex flex-col justify-between min-h-[140px] ${
                    isSelected
                      ? 'bg-teal-950/30 border-teal-400/80 shadow-lg shadow-teal-950/20 ring-1 ring-teal-400'
                      : 'bg-[#0B0F17] border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{node.icon}</span>
                    <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-teal-400 animate-ping' : 'bg-gray-600'}`} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white mb-1 leading-tight">{node.name}</h4>
                    <span className="text-[10px] text-teal-400 font-mono">Sync Active</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Ambient Node Inspector & Simulated Smart Action */}
          <div className="lg:col-span-6 bg-[#0B0F17] border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="text-xl">{environmentNodes[activeNode].icon}</span>
                <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold">
                  {environmentNodes[activeNode].name}
                </span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-[10px] font-mono text-teal-300">
                {environmentNodes[activeNode].status}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              {environmentNodes[activeNode].headline}
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed mb-6 bg-white/[0.02] p-4 rounded-2xl border border-white/5">
              {environmentNodes[activeNode].detail}
            </p>

            {/* Ambient System Response Simulation */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-teal-950/40 via-black to-emerald-950/20 border border-teal-500/30 font-mono text-xs text-gray-300">
              <div className="text-teal-400 font-bold uppercase text-[10px] tracking-wider mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                Active Ambient Protocol
              </div>
              <div className="space-y-1 text-[11px]">
                <div className="flex justify-between">
                  <span className="text-gray-400">Environment Node:</span>
                  <span className="text-white font-semibold">{environmentNodes[activeNode].name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Latency:</span>
                  <span className="text-emerald-400 font-semibold">&lt; 15ms Mesh Radio</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Biological Synchronization:</span>
                  <span className="text-teal-300 font-semibold">100% Autonomous</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
