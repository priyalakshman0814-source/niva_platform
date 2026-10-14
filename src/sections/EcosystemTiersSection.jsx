import React from 'react';
import { Target, Compass } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function EcosystemTiersSection() {
  const roadmap = [
    {
      num: '01',
      tag: 'CURRENT STAGE',
      title: 'Brand & Concept (V1)',
      description:
        'Introducing Niva’s design philosophy, product concepts, and connecting with early customers and partners.',
      active: true,
    },
    {
      num: '02',
      tag: 'IN DEVELOPMENT',
      title: 'Smart Fitness Devices',
      description:
        'Prototyping connected strength equipment and wearable form factors focused on ergonomic everyday use.',
      active: false,
    },
    {
      num: '03',
      tag: 'PLANNED',
      title: 'Companion Experience',
      description:
        'Designing a clean digital interface to bring workout logs and daily activity insights into one view.',
      active: false,
    },
    {
      num: '04',
      tag: 'FUTURE VISION',
      title: 'Connected Ecosystem',
      description:
        'Uniting personal fitness equipment, wearable wellness sensors, and guided routines for home and studio use.',
      active: false,
    },
  ];

  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-gradient-to-b from-[#F5FCF9] via-white to-[#F0F9FF] border-t border-emerald-100/80"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-16">
        {/* About Header */}
        <Reveal className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono uppercase tracking-wider mb-3">
            About Niva
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Building a calmer, smarter approach to everyday fitness and wellness.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Niva was created to bridge the gap between physical workout equipment and thoughtful digital wellness experiences.
          </p>
        </Reveal>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal>
            <div className="h-full p-8 rounded-3xl bg-white border border-emerald-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-5">
                <Target className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider">
                Our Mission
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                Simplify connected fitness and health monitoring.
              </h3>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                Our mission is to design approachable, thoughtfully engineered fitness devices and wearables that help people stay consistent with their movement and recovery routines—without unnecessary complexity.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full p-8 rounded-3xl bg-white border border-sky-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center mb-5">
                <Compass className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono font-bold text-sky-600 uppercase tracking-wider">
                Our Vision
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                One cohesive ecosystem for movement and well-being.
              </h3>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                We envision a connected wellness environment where smart strength equipment and comfortable wearables work together harmoniously to offer clear, personal guidance for everyday health.
              </p>
            </div>
          </Reveal>
        </div>

        {/* 4-Stage Transparent Roadmap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmap.map((tier, idx) => (
            <Reveal key={tier.num} delay={idx * 90}>
              <div
                className={`h-full p-7 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                  tier.active
                    ? 'bg-white border-2 border-emerald-400 shadow-md ring-4 ring-emerald-50'
                    : 'bg-white border border-emerald-100 hover:border-sky-300 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-6">
                    <span className="font-bold text-emerald-700">{tier.num}</span>
                    <span className="tracking-wider font-semibold text-sky-700">{tier.tag}</span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 tracking-tight">{tier.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed font-normal">
                    {tier.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        tier.active
                          ? 'w-3/4 bg-gradient-to-r from-emerald-500 to-sky-500'
                          : 'w-1/3 bg-emerald-200'
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
