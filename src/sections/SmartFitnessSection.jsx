import React, { useState } from 'react';
import { 
  Dumbbell, Watch, Radio, ArrowUpRight, Check, 
  Activity, Sliders, Play, RefreshCw, Zap, Sparkles 
} from 'lucide-react';
import Reveal from '../components/Reveal';

export default function SmartFitnessSection({ onOpenWorkspace }) {
  const [repCount, setRepCount] = useState(8);
  const [romAngle, setRomAngle] = useState(138);
  const [isSimulating, setIsSimulating] = useState(false);

  const handleSimulateRep = () => {
    setIsSimulating(true);
    setRepCount(prev => prev + 1);
    setTimeout(() => setIsSimulating(false), 500);
  };

  const productCollection = [
    {
      name: 'Niva Ring v1',
      category: 'Sleep & Recovery',
      price: '₹18,999',
      image: '/assets/smart-ring.webp',
      alt: 'Niva Ring luxury titanium smart ring photograph',
      desc: 'Discreet titanium biometric wearable capturing continuous nocturnal HRV, circadian temperature variance, and recovery readiness.',
      badge: 'Bespoke Titanium Finish',
      specs: ['Titanium Grade 5', '7-day battery', '50m water resistant']
    },
    {
      name: 'Niva Watch',
      category: 'Movement & Routine',
      price: '₹14,999',
      image: '/assets/smartwatch.webp',
      alt: 'Niva Watch luxury connected smartwatch photograph',
      desc: 'Ceramic bezel and sapphire crystal display delivering all-day cardiometabolic tracking and subtle haptic daily plan prompts.',
      badge: 'Ceramic & Sapphire',
      specs: ['Continuous ECG + PPG', 'Always-on OLED', 'Quick wireless charging']
    },
    {
      name: 'Niva Band',
      category: 'Screen-Free Companion',
      price: '₹4,999',
      image: '/assets/wearable-in-use.webp',
      alt: 'Niva Band wearable companion photograph in everyday use',
      desc: 'Featherlight woven strap designed for zero distractions. Worn 24/7 to feed continuous lifestyle signals into your care view.',
      badge: 'Zero Screen Distractions',
      specs: ['14-day battery', 'Micro-knit strap', 'Haptic feedback']
    },
    {
      name: 'Smart Dumbbell DB-01',
      category: 'Strength & Telemetry',
      price: '₹9,999',
      image: '/assets/smart-dumbbell.webp',
      alt: 'Niva Smart Dumbbell luxury connected strength equipment photograph',
      desc: 'Integrated strain-gauge load cells and 6-axis IMU capturing weight, repetition velocity, movement cadence, and form accuracy.',
      badge: 'Embedded Load Sensing',
      specs: ['Load cell strain gauge', '6-axis IMU', 'Bluetooth 5.3 BLE']
    }
  ];

  return (
    <section id="products" className="py-24 sm:py-32 bg-white border-t border-[#E3ECE6] relative overflow-hidden">
      {/* Light Luxury Ambient Aura */}
      <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-gradient-to-bl from-[#DEEEE7]/40 via-[#FAF6EE]/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-24">
        
        {/* Section Header */}
        <Reveal className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DEEEE7] border border-[#C2E2D3] text-xs font-mono font-semibold text-[#153E35] tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>THE HARDWARE COLLECTION • REALISTIC LUXURY TECHNOLOGY</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#13231F] leading-[1.08]">
            Technology that fits<br />
            <span className="italic text-[#153E35]">seamlessly into your life.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#61756F] leading-relaxed">
            Thoughtfully engineered connected devices designed to capture movement, sleep, and metabolic signals — translating raw telemetry into actionable care.
          </p>
        </Reveal>

        {/* 4-Item Luxury Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCollection.map((p, idx) => (
            <Reveal key={p.name} delay={idx * 100}>
              <div className="group rounded-3xl bg-[#FAFBF9] border border-[#E3ECE6] p-4 flex flex-col justify-between hover:border-emerald-300 hover:shadow-luxury transition-all duration-300 h-full">
                <div>
                  {/* High-Resolution Luxury Photograph Container */}
                  <div className="relative h-60 rounded-2xl overflow-hidden bg-[#ECEFEA] border border-[#E3ECE6]/60">
                    <img
                      src={p.image}
                      alt={p.alt}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-mono font-bold uppercase tracking-wider text-[#153E35] shadow-2xs">
                      {p.category}
                    </div>
                  </div>

                  {/* Product Information */}
                  <div className="pt-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-2xl font-bold text-[#13231F] group-hover:text-[#153E35] transition-colors">
                        {p.name}
                      </h3>
                      <span className="text-xs font-bold font-mono text-[#153E35]">{p.price}</span>
                    </div>

                    <p className="text-xs text-[#61756F] leading-relaxed">
                      {p.desc}
                    </p>

                    <div className="pt-3 border-t border-[#E3ECE6] space-y-1">
                      {p.specs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#61756F]">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E3ECE6] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-emerald-800 font-semibold">{p.badge}</span>
                  <button
                    onClick={() => onOpenWorkspace('coach')}
                    className="w-8 h-8 rounded-full border border-[#E3ECE6] bg-white group-hover:bg-[#153E35] group-hover:text-white flex items-center justify-center text-[#153E35] transition-colors shadow-2xs"
                    aria-label={`Explore ${p.name}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Featured Smart Strength & Kinematic Telemetry HUD Banner */}
        <Reveal delay={200}>
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#FAFBF9] via-white to-[#F2F8F5] border border-[#E3ECE6] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Smart Dumbbell Telemetry Dashboard Preview */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-[#DEEEE7] text-[#153E35]">
                <Activity className="w-3.5 h-3.5" />
                <span>SMART STRENGTH TELEMETRY • LIVE SET DETECTION</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#13231F] leading-tight">
                Equipment that understands every rep.
              </h3>

              <p className="text-sm text-[#61756F] leading-relaxed">
                Embedded load cells and inertial tracking analyze your repetition cadence, range of motion, and fatigue accumulation in real time.
              </p>

              {/* Telemetry Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-white border border-[#E3ECE6]">
                  <div className="text-[10px] font-mono text-[#61756F] uppercase">Weight</div>
                  <div className="text-xl font-serif font-bold text-[#153E35] mt-0.5">22.5 kg</div>
                  <div className="text-[10px] text-emerald-700">Strain balanced</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#E3ECE6]">
                  <div className="text-[10px] font-mono text-[#61756F] uppercase">Reps (Set 3)</div>
                  <div className={`text-xl font-serif font-bold mt-0.5 transition-all ${isSimulating ? 'text-emerald-500 scale-110' : 'text-[#153E35]'}`}>
                    {repCount} / 12
                  </div>
                  <div className="text-[10px] text-emerald-700">Target on track</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#E3ECE6]">
                  <div className="text-[10px] font-mono text-[#61756F] uppercase">Joint ROM</div>
                  <div className="text-xl font-serif font-bold text-[#153E35] mt-0.5">{romAngle}°</div>
                  <div className="text-[10px] text-emerald-700">Full extension</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#E3ECE6]">
                  <div className="text-[10px] font-mono text-[#61756F] uppercase">Form Score</div>
                  <div className="text-xl font-serif font-bold text-[#153E35] mt-0.5">96%</div>
                  <div className="text-[10px] text-emerald-700">PT calibrated</div>
                </div>
              </div>

              {/* Interactive Joint Angle Slider & Rep Simulator Button */}
              <div className="p-4 rounded-2xl bg-white border border-[#E3ECE6] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#61756F]">Simulate Joint Angle (Range of Motion):</span>
                  <span className="font-bold text-[#153E35]">{romAngle}° Arc</span>
                </div>
                <input
                  type="range"
                  min="45"
                  max="145"
                  value={romAngle}
                  onChange={(e) => setRomAngle(Number(e.target.value))}
                  className="w-full accent-[#153E35]"
                />

                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={handleSimulateRep}
                    className="px-5 py-2.5 rounded-full text-xs font-semibold bg-[#153E35] text-white hover:bg-[#1E5649] transition-all flex items-center gap-2 shadow-xs"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Perform 1 Dumbbell Rep</span>
                  </button>

                  <span className="text-[11px] font-mono text-[#61756F]">
                    Bluetooth 5.3 Live Stream
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Res Connected Hardware Photography */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden border border-[#E3ECE6] shadow-float bg-[#FAFBF9]">
                <img
                  src="/assets/smart-dumbbell.webp"
                  alt="Niva Smart Connected Dumbbell Equipment"
                  className="w-full h-80 object-cover object-center"
                />
                <div className="p-5 bg-white border-t border-[#E3ECE6] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#13231F]">Physical Therapy &amp; Strength Oversight</div>
                    <div className="text-[11px] text-[#61756F]">Supervised by Dr. Sarah Lin, DPT &amp; Coach Kabir</div>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-[#DEEEE7] text-[#153E35]">
                    5/5 Adherence Streak
                  </span>
                </div>
              </div>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
