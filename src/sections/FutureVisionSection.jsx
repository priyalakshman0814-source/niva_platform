import React from 'react';

export default function FutureVisionSection() {
  const visionPillars = [
    {
      title: 'Continuous Autonomous Learning',
      desc: 'Our models evolve every 24 hours. As your cardiovascular conditioning sharpens and your sleep chronotype adapts to seasons, NIVA refines its physiological baselines.',
      icon: '🧬'
    },
    {
      title: 'Preventative Longevity Medicine',
      desc: 'Shifting wellness from reactive crisis management to proactive biomarker optimization. Detecting subtle vascular compliance and autonomic decay years before clinical pathology emerges.',
      icon: '🛡️'
    },
    {
      title: 'Ambient Zero-Friction Intelligence',
      desc: 'Technology that serves you without demanding constant screen obsession. No notifications during family dinners or flow state—only decisive ambient adjustments in background environments.',
      icon: '✨'
    }
  ];

  const visionPipeline = [
    { label: 'Human', sub: 'Complex Biological Life' },
    { label: 'Wearables + Sensors', sub: 'Non-Invasive High-Density Capture' },
    { label: 'NIVA Platform', sub: 'End-to-End Encrypted Telemetry Core' },
    { label: 'AI Intelligence', sub: 'Longitudinal Neural Synthesis' },
    { label: 'Personalized Actions', sub: 'Adaptive Micro-Interventions' },
    { label: 'Healthier Lifestyle', sub: 'Compounding Vitality & Longevity' }
  ];

  return (
    <section id="future-vision" className="relative py-28 bg-[#05070A] border-t border-white/[0.06] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-b from-cyan-500/10 via-emerald-500/5 to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
            The Long-Term Horizon
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            The future of personal wellness is{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
              connected.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            NIVA's long-term vision is to build an intelligent ecosystem where technology continuously learns from real-world behavior and helps people make better decisions effortlessly throughout their entire lifespan.
          </p>
        </div>

        {/* Vision Ecosystem Pipeline Graphic */}
        <div className="bg-[#0B0F17]/90 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-2xl mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold mb-6 text-center">
            The Evolutionary Loop of Human Longevity
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 relative">
            {visionPipeline.map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between text-center relative group hover:border-emerald-500/40 transition"
              >
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 block mb-2">0{idx + 1}</span>
                  <div className="text-sm font-bold text-white mb-1 leading-snug">{step.label}</div>
                </div>
                <div className="text-[11px] text-gray-400 mt-2">{step.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Vision Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visionPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#090D14] border border-white/10 hover:border-emerald-500/30 transition flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl mb-4 block">{pillar.icon}</span>
                <h4 className="text-xl font-bold text-white mb-3">{pillar.title}</h4>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{pillar.desc}</p>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between text-xs text-emerald-400 font-mono">
                <span>Core Research Objective</span>
                <span>Active ↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
