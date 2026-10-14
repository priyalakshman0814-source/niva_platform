import React from 'react';
import { ShieldCheck, HeartHandshake, Award, FileCheck2 } from 'lucide-react';

export default function ClinicalEvidenceSection() {
  const stats = [
    {
      stat: '-62%',
      label: 'Pain Reduction',
      desc: 'Average drop in musculoskeletal pain within 8 weeks of guided sensor therapy.',
    },
    {
      stat: '8.4x',
      label: 'Higher Adherence',
      desc: 'Higher session completion rates compared to conventional clinic-based physical therapy.',
    },
    {
      stat: '64%',
      label: 'Surgery Avoidance',
      desc: 'Members who successfully averted invasive spinal or joint surgery through guided conservative care.',
    },
    {
      stat: '98.2%',
      label: 'Member Trust',
      desc: 'Reported feeling significantly more confident and secure during daily functional movements.',
    },
  ];

  return (
    <section id="outcomes" className="py-24 sm:py-32 bg-white border-t border-[#E2E6E1]/70">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#3D6C52] mb-3">
            Clinical Outcomes
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#19201E]">
            Proven clinical relief, backed by peer-reviewed research.
          </h2>
          <p className="text-sm sm:text-base text-[#55625E] mt-4 font-normal leading-relaxed">
            By combining high-resolution body tracking sensors with real clinical guidance, NIVA delivers outcomes that surpass traditional clinic visits.
          </p>
        </div>

        {/* 4 Outcome Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-[#FAF9F6] border border-[#E2E6E1] flex flex-col justify-between hover:border-[#3D6C52]/40 transition-colors"
            >
              <div>
                <div className="text-4xl font-semibold tracking-tight text-[#19201E] font-mono">
                  {item.stat}
                </div>
                <div className="text-sm font-semibold text-[#3D6C52] mt-2">{item.label}</div>
              </div>
              <p className="text-xs text-[#55625E] mt-4 leading-relaxed pt-4 border-t border-[#E2E6E1]/60">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Regulatory & Scientific Notice */}
        <div className="mt-12 p-6 rounded-3xl bg-[#FAF9F6] border border-[#E2E6E1] flex flex-wrap items-center justify-between gap-4 text-xs text-[#55625E]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white border border-[#E2E6E1] flex items-center justify-center text-[#3D6C52]">
              <FileCheck2 className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-[#19201E]">FDA-Listed Class II Exempt Kinematic Sensors</span>
              <span className="block text-[11px] text-[#808E8A]">Tested under clinical motion capture laboratory conditions.</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3D6C52]"></span>
            <span>IRB-approved observational trials published in musculoskeletal journals</span>
          </div>
        </div>
      </div>
    </section>
  );
}
