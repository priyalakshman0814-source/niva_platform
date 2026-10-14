import React, { useState } from 'react';
import { ShieldCheck, Zap, Layers, RefreshCw, Check, ArrowRight, Sparkles } from 'lucide-react';

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const products = [
    {
      id: 'motion-pod',
      tag: 'Kinematic Sensors',
      name: 'Niva Motion Pods',
      subtitle: 'Clinical joint angle and posture trackers',
      price: '$189 / set of 2',
      weight: '11 grams',
      battery: '48h continuous active motion',
      description:
        'Featherlight 6-axis inertial measurement units that attach effortlessly to your joints and spine to track millimeter-precise movement during guided rehabilitation.',
      metricsMonitored: [
        'Range of Motion (ROM) in degrees',
        'Kinetic angular velocity & acceleration',
        'Postural tilt & spinal curvature balance',
        'Repetition count and depth precision',
      ],
      specs: [
        { label: 'Weight', value: '11g per pod' },
        { label: 'Sensors', value: '3D Gyro + 3D Accelerometer' },
        { label: 'Connectivity', value: 'Bluetooth Low Energy 5.4' },
        { label: 'Attachment', value: 'Skin-safe magnetic strap & adhesive' },
      ],
      highlight: 'FDA-listed Class II exempt kinematic device',
    },
    {
      id: 'recovery-band',
      tag: 'Physiological Sensor',
      name: 'Niva Recovery Band',
      subtitle: 'Screen-free autonomic nervous system tracker',
      price: '$149 or $14/mo',
      weight: '16 grams',
      battery: '5 days uninterrupted tracking',
      description:
        'Designed without distracting screens. Worn continuously on the wrist or forearm to capture continuous HRV, nocturnal recovery, and muscular strain to personalize your physical therapy tempo.',
      metricsMonitored: [
        'Heart Rate Variability (HRV rMSSD)',
        'Resting Heart Rate (BPM)',
        'Circadian body temperature baseline',
        'Autonomic readiness & strain score',
      ],
      specs: [
        { label: 'Material', value: 'Recycled Japanese micro-knit' },
        { label: 'Waterproof', value: '5 ATM (50 meters)' },
        { label: 'Sensors', value: 'Multi-spectral PPG + Temp probe' },
        { label: 'Display', value: 'Screen-free, haptic biofeedback' },
      ],
      highlight: 'Continuous 24/7 recovery intelligence',
    },
    {
      id: 'induction-dock',
      tag: 'Calibration & Power',
      name: 'Niva Spatial Smart Dock',
      subtitle: 'Zero-touch calibration and induction case',
      price: 'Included with Kit',
      weight: '140 grams',
      battery: 'Recharges kit up to 4 times',
      description:
        'A matte stone dock that charges your wearable sensors and runs automatic zero-offset gyro calibration every time you rest the pods, ensuring flawless accuracy for every movement session.',
      metricsMonitored: [
        'Sensor coordinate baseline zeroing',
        'Automated firmware health verification',
        'Rapid inductive fast charge (80% in 25m)',
        'Encrypted local offline synchronization',
      ],
      specs: [
        { label: 'Finish', value: 'Recycled matte mineral composite' },
        { label: 'Charging', value: 'Qi wireless induction' },
        { label: 'Sync', value: 'Instant proximity pairing' },
        { label: 'Storage', value: 'Holds 3 pods + 1 band' },
      ],
      highlight: 'Zero-touch calibration system',
    },
  ];

  return (
    <section id="wearables" className="py-24 sm:py-32 bg-[#FAF9F6] border-t border-[#E2E6E1]/70">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#3D6C52] mb-3">
            The Wearables
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#19201E]">
            Designed to be worn effortlessly. Engineered for clinical accuracy.
          </h2>
          <p className="text-sm sm:text-base text-[#55625E] mt-4 font-normal leading-relaxed">
            Niva wearable hardware captures the subtle kinematics and physiology of your body without bulky harnesses or uncomfortable wires.
          </p>
        </div>

        {/* 3 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-[#E2E6E1] p-7 flex flex-col justify-between shadow-soft hover:shadow-float transition-all duration-300 group"
            >
              <div>
                {/* Product Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F4F7F5] text-[#3D6C52] font-medium border border-[#E6EEE8]">
                    {item.tag}
                  </span>
                  <span className="text-xs font-medium text-[#808E8A]">{item.weight}</span>
                </div>

                {/* Minimal Aesthetic Visual Representation */}
                <div className="h-44 rounded-2xl bg-[#FAF9F6] border border-[#E2E6E1]/60 flex items-center justify-center p-6 mb-6 group-hover:bg-[#F6F8F5] transition-colors relative overflow-hidden">
                  {item.id === 'motion-pod' && (
                    <div className="relative flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-white border border-[#E2E6E1] shadow-sm flex items-center justify-center relative">
                        <div className="w-14 h-14 rounded-full bg-[#FAF9F6] border border-[#3D6C52]/30 flex items-center justify-center">
                          <div className="w-3.5 h-3.5 rounded-full bg-[#3D6C52] animate-pulse"></div>
                        </div>
                        {/* Orientation Axis Crosshair */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[9px] font-mono text-[#808E8A]">X</div>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] font-mono text-[#808E8A]">Y</div>
                      </div>
                      <div className="absolute -bottom-2 px-3 py-1 bg-white rounded-full text-[10px] font-mono text-[#55625E] border border-[#E2E6E1] shadow-xs">
                        6-Axis Motion IMU
                      </div>
                    </div>
                  )}

                  {item.id === 'recovery-band' && (
                    <div className="relative flex flex-col items-center justify-center">
                      <div className="w-32 h-10 rounded-full border-4 border-[#3D6C52]/20 bg-white shadow-sm flex items-center justify-between px-3">
                        <div className="w-2 h-2 rounded-full bg-[#3D6C52]"></div>
                        <div className="text-[10px] font-mono text-[#55625E]">CONTINUOUS HRV</div>
                        <div className="w-2 h-2 rounded-full bg-[#3D6C52]/30"></div>
                      </div>
                      <div className="mt-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#3D6C52]"></span>
                        <span className="text-[11px] font-mono text-[#55625E]">Optical PPG Sensor</span>
                      </div>
                    </div>
                  )}

                  {item.id === 'induction-dock' && (
                    <div className="relative flex flex-col items-center justify-center">
                      <div className="w-36 h-20 rounded-2xl bg-white border border-[#E2E6E1] shadow-sm flex items-center justify-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#FAF9F6] border border-[#3D6C52]/40 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-[#3D6C52]"></div>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-[#FAF9F6] border border-[#3D6C52]/40 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-[#3D6C52]"></div>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-[#FAF9F6] border border-[#3D6C52]/40 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-[#3D6C52]"></div>
                        </div>
                      </div>
                      <div className="mt-2 text-[10px] font-mono text-[#808E8A]">Self-Calibrating Dock</div>
                    </div>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-medium text-[#19201E]">{item.name}</h3>
                <p className="text-xs text-[#3D6C52] font-medium mt-0.5">{item.subtitle}</p>
                <p className="text-xs text-[#55625E] mt-3 leading-relaxed">{item.description}</p>

                {/* Metrics Tracked */}
                <div className="mt-5 pt-4 border-t border-[#E2E6E1]/70">
                  <div className="text-[11px] font-semibold text-[#19201E] uppercase tracking-wider mb-2">
                    Body Monitoring Scope
                  </div>
                  <ul className="space-y-1.5">
                    {item.metricsMonitored.map((metric, i) => (
                      <li key={i} className="text-xs text-[#55625E] flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#3D6C52] shrink-0 mt-0.5" />
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Specs & Price */}
              <div className="mt-6 pt-5 border-t border-[#E2E6E1]/70">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-sm font-semibold text-[#19201E]">{item.price}</span>
                  <span className="text-[11px] text-[#55625E]">{item.battery}</span>
                </div>
                <div className="text-[11px] text-[#808E8A] bg-[#FAF9F6] p-2.5 rounded-xl border border-[#E2E6E1]/50 text-center">
                  {item.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
