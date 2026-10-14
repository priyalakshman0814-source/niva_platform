import React from 'react';
import Reveal from '../components/Reveal';
import { Database, Cpu, Activity, Compass, CheckCircle2 } from 'lucide-react';

export default function DataFlowPipeline() {
  const steps = [
    {
      num: '01',
      title: 'Collect',
      icon: Database,
      description:
        'Continuous BLE signals streamed from Niva Ring, Watch, and Smart Dumbbells, alongside member-reported logs and outside lab records.',
      tag: '12,800 Signals / Day',
      active: false,
    },
    {
      num: '02',
      title: 'Calibrate',
      icon: Cpu,
      description:
        'Multi-sensor inputs are calibrated against your personal 60-day physiological baseline, establishing individualized normal ranges.',
      tag: 'Baseline Calibrated',
      active: false,
    },
    {
      num: '03',
      title: 'Synthesize',
      icon: Activity,
      description:
        'Clinical algorithms identify meaningful trends across resting heart rate, sleep architecture, recovery, and workout volume.',
      tag: '18 Active Patterns',
      active: false,
    },
    {
      num: '04',
      title: 'Doctor Gate',
      icon: Compass,
      description:
        'Insights are validated by your primary clinician before release, ensuring that members only receive trusted, actionable recommendations.',
      tag: 'Verified Care Loop',
      active: true,
    },
  ];

  return (
    <section
      id="technology"
      className="py-24 sm:py-28 bg-[#FBFBF9] border-t border-[#E3ECE6] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DEEEE7] border border-[#C2E2D3] text-[#153E35] text-xs font-mono uppercase tracking-wider">
            <span>Continuous Intelligence Architecture</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13231F] tracking-tight">
            From raw signals to <span className="italic text-[#153E35]">considered human care.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#61756F] leading-relaxed">
            How Niva transforms high-frequency biometric streams into calm, doctor-verified daily actions.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={idx * 90}>
                <div
                  className={`h-full p-7 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                    step.active
                      ? 'bg-white border-2 border-emerald-500 shadow-luxury ring-4 ring-[#DEEEE7]/50'
                      : 'bg-white border border-[#E3ECE6] shadow-2xs hover:border-emerald-300'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-2xl font-bold text-[#153E35]">{step.num}</span>
                      <div className="w-10 h-10 rounded-xl bg-[#DEEEE7] text-[#153E35] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#13231F]">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#61756F] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E3ECE6] flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800">
                      {step.tag}
                    </span>
                    <CheckCircle2 className={`w-4 h-4 ${step.active ? 'text-emerald-600' : 'text-[#61756F]'}`} />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
