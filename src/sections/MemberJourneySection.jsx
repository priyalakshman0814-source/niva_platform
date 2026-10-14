import React, { useState } from 'react';
import { 
  ShieldCheck, Lock, Activity, Heart, ArrowUpRight, 
  Check, Smartphone, Video, AlertTriangle, Calendar, 
  User, CheckCircle2, Sliders, ChevronRight, Sparkles 
} from 'lucide-react';
import Reveal from '../components/Reveal';

export default function MemberJourneySection({ onOpenWorkspace }) {
  const [activeStage, setActiveStage] = useState(1);

  const stages = [
    {
      num: 1,
      id: 'discovery',
      title: 'Discovery & Sign-up',
      subtitle: 'Find Niva, check eligibility, and choose your personalized care tier.',
      badge: 'Stage 01',
      details: [
        'Arrives via employer link, referral, or wellness website',
        'Eligibility check (employer code, age, state verification)',
        'Creates an account (email, phone + 2FA security)',
        'Transparent plans starting at ₹1,999/month with employer coverage options'
      ],
      mobileUi: {
        title: 'Personalized Healthcare Made Easy',
        desc: 'Clinician-guided care. Smarter insights. A healthier you.',
        cta: 'Join Through Employer',
        plan: 'Choose Plan: Essential / Plus / Premium',
        price: '₹1,999 / month'
      }
    },
    {
      num: 2,
      id: 'consent',
      title: 'Consent & Privacy',
      subtitle: 'You are in total control of your health data from day one.',
      badge: 'Stage 02 • Core Safety',
      details: [
        'Reviews plain-language consent (one simple screen per source)',
        'Opt-in by source (Lab results, Wearables, Scans, Nutrition, Prescriptions)',
        'Separate explicit opt-in for de-identified research and AI learning',
        'Can change, modify, or revoke permissions anytime with zero penalty'
      ],
      mobileUi: {
        title: 'Your Data, Your Choice',
        desc: 'Turn each data source on or off anytime with full sovereignty.',
        switches: [
          { name: 'Lab results (blood tests, biomarkers)', on: true },
          { name: 'Scans & diagnostic imaging', on: false },
          { name: 'Wearables (Sensio, Apple Health, Niva Ring)', on: true },
          { name: 'Nutrition data & meal logs', on: true },
          { name: 'Prescription history', on: true },
          { name: 'Outside clinic records', on: false }
        ]
      }
    },
    {
      num: 3,
      id: 'onboarding',
      title: 'Onboarding & Baseline',
      subtitle: 'Tell us about your routines and connect your devices in seconds.',
      badge: 'Stage 03',
      details: [
        'Completes adaptive health history and goals (voice or quick tap)',
        'Pairs Niva Ring, Niva Watch, or Apple Health via BLE Bluetooth 5.3',
        'Live data flowing immediately: Heart rate, Sleep, Activity, HRV',
        'Books baseline lab panel and metabolic health biomarker tests'
      ],
      mobileUi: {
        title: 'Your Health Profile',
        desc: '3 of 6 completed • Live data flowing',
        metrics: [
          { name: 'Sensio / Niva Ring', status: 'Connected • Live' },
          { name: 'Apple Health', status: 'Syncing Background' },
          { name: 'Heart Rate & HRV', status: '72 bpm • 58 ms' },
          { name: 'Sleep Stages', status: 'Baseline calibrating' }
        ]
      }
    },
    {
      num: 4,
      id: 'assessment',
      title: 'First Assessment',
      subtitle: 'Every result is thoroughly reviewed by your physician first.',
      badge: 'Stage 04 • Principle 1',
      details: [
        'Strict Principle: Member never sees raw AI drafts before doctor verification',
        'Physician reviews lab results, adjusts insights, and signs off',
        'Member receives clear, plain-language assessment and care plan',
        'One-click telehealth booking with dedicated Endocrinologist'
      ],
      mobileUi: {
        title: 'Your Results Are Ready',
        desc: 'Reviewed and prepared by Dr. Anjali Mehta, MD',
        findings: [
          { label: 'Blood glucose', value: 'Slightly elevated post-meal', badge: 'Moderate' },
          { label: 'Vitamin D3', value: 'Low (19 ng/mL) — Protocol ready', badge: 'High Confidence' },
          { label: 'Sleep quality', value: 'Recovery optimization advised', badge: 'Moderate' }
        ],
        consultant: 'Video Consult with Dr. Anjali Mehta'
      }
    },
    {
      num: 5,
      id: 'daily',
      title: 'Daily & Weekly Engagement',
      subtitle: 'Simple, actionable micro-habits that add up to real lifelong health.',
      badge: 'Stage 05',
      details: [
        'Opens daily morning view with today’s recommended focus and actions',
        'Gets personalized nudges for hydration, movement, and nutrition',
        'Logs meals and reviews weekly progress vs goals',
        'Direct asynchronous messaging with assigned care coordinator'
      ],
      mobileUi: {
        title: 'Today • Mon, Oct 13',
        focus: "Today's Focus: Take a 20-minute walk (Keep your energy up!)",
        actions: [
          { title: 'Log breakfast & hydration', done: true },
          { title: 'Take Vitamin D3 (2,000 IU)', done: true },
          { title: '20 min outdoor walk', done: false, status: 'In progress' },
          { title: 'Log evening mood', done: false }
        ],
        stats: 'Steps: 5,320 • Sleep: 7h 20m • Weight: 68.4 kg'
      }
    },
    {
      num: 6,
      id: 'monitoring',
      title: 'Monitoring & Alerts',
      subtitle: 'Continuous intelligent monitoring so you never have to worry.',
      badge: 'Stage 06',
      details: [
        'Autonomous background pattern detection for meaningful shifts',
        'Physician sees clinical telemetry while member receives simple, calming prompt',
        'Instant triage routing for serious anomalies or urgent consultations',
        'Emergency safety notice: Niva is continuous care, not an acute emergency room'
      ],
      mobileUi: {
        title: 'Health Alerts & Trends',
        alertItem: 'Rising Resting Heart Rate (+12% above 60-day baseline)',
        trend: 'Glucose trend shows mild elevation post-lunch',
        guidance: 'Dr. Anjali Mehta recommends a brief follow-up consult to review changes.'
      }
    },
    {
      num: 7,
      id: 'ongoing',
      title: 'Ongoing Care',
      subtitle: 'A dedicated, multi-disciplinary care team in your corner for the long haul.',
      badge: 'Stage 07 • Ecosystem',
      details: [
        'Collaborative care team: Endocrinologist, Nutritionist, Strength Coach',
        'Specialist referrals with shared history: Gynaecologist, Sleep Expert',
        'In-app prescription refills (e.g. Metformin 500mg) routed directly to doctor',
        'Scheduled milestone re-tests every 3-6 months to quantify biological age improvement'
      ],
      mobileUi: {
        title: 'Your Care Team',
        team: [
          { name: 'Dr. Anjali Mehta', role: 'Primary Endocrinologist' },
          { name: 'Riya Sharma', role: 'Care Coordinator' },
          { name: 'Nila Sen, MS RD', role: 'Clinical Dietitian' },
          { name: 'Kabir Coach, CSCS', role: 'Performance Coach' }
        ],
        prescription: 'Metformin 500mg • Refill Request Ready'
      }
    },
    {
      num: 8,
      id: 'records',
      title: 'Account, Records & Exit',
      subtitle: 'Full data portability, family access, and easy cancellation without lock-in.',
      badge: 'Stage 08 • Sovereignty',
      details: [
        'Full PDF export and FHIR standard records download for outside hospitals',
        'Add family members or dependent caregivers with limited access',
        'Pause or cancel membership anytime with 1 click',
        'One-click Right to Data Deletion with clear explanation of legal audit retention'
      ],
      mobileUi: {
        title: 'Account & Data Sovereignty',
        actions: [
          'Download / Share Standard Medical Records (FHIR / PDF)',
          'Add a Family Member or Authorized Caregiver',
          'Pause or Cancel Membership (No questions asked)',
          'Request Complete Data Deletion'
        ]
      }
    }
  ];

  const current = stages.find(s => s.num === activeStage) || stages[0];

  return (
    <section id="journey" className="py-24 sm:py-32 bg-[#FBFBF9] border-t border-[#E3ECE6] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#DEEEE7]/40 via-[#F2F8F5]/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DEEEE7] border border-[#C2E2D3] text-xs font-mono font-semibold text-[#153E35] tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MEMBER JOURNEY • 8 STAGES FROM CONTACT TO ONGOING CARE</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#13231F] leading-[1.08]">
            Clinician-Reviewed Insights.<br />
            <span className="italic text-[#153E35]">Your Data. Your Control.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#61756F] leading-relaxed">
            Directly modeled on our gold-standard 8-stage member experience architecture. Every stage guarantees safety, human oversight, and data sovereignty.
          </p>
        </Reveal>

        {/* Two Core Guarantees Banner */}
        <Reveal delay={100} className="mb-12">
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#153E35] to-[#1E5649] text-white shadow-md grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#DEEEE7]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-white">Principle 1: Strict Medical Review Gate</h4>
                <p className="text-xs text-[#DEEEE7]/80 leading-relaxed mt-1">
                  Members never see raw AI-generated diagnostics before an authorized clinician has reviewed, calibrated, and approved them.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:border-l md:border-white/15 md:pl-6">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#DEEEE7]">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-white">Principle 2: Absolute Member Data Sovereignty</h4>
                <p className="text-xs text-[#DEEEE7]/80 leading-relaxed mt-1">
                  Every device telemetry packet and health permission stays under granular member control. Opt-in or revoke anytime.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 8-Stage Interactive Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {stages.map((s) => {
            const isActive = s.num === activeStage;
            return (
              <button
                key={s.num}
                onClick={() => setActiveStage(s.num)}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#153E35] text-white shadow-sm shadow-[#153E35]/20 scale-102'
                    : 'bg-white border border-[#E3ECE6] text-[#61756F] hover:text-[#153E35] hover:border-[#153E35]/30'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                  isActive ? 'bg-white/20 text-white' : 'bg-[#DEEEE7] text-[#153E35]'
                }`}>
                  {s.num}
                </span>
                <span>{s.title}</span>
              </button>
            );
          })}
        </div>

        {/* Stage Content Card: Two Columns (Stage Details + Interactive Mobile Mockup) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Stage Explanation & Safeguards */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-[#DEEEE7] text-[#153E35]">
              <span>{current.badge}</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#13231F]">
              {current.title}
            </h3>

            <p className="text-base text-[#61756F] leading-relaxed">
              {current.subtitle}
            </p>

            {/* Stage Detail Bullet Points */}
            <div className="space-y-3 pt-2">
              {current.details.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E3ECE6] shadow-2xs">
                  <span className="w-5 h-5 rounded-full bg-[#DEEEE7] text-[#153E35] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span className="text-xs sm:text-sm text-[#13231F] font-medium leading-relaxed">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenWorkspace('member')}
                className="px-6 py-3 rounded-full text-xs font-semibold bg-[#153E35] text-white hover:bg-[#1E5649] transition-all flex items-center gap-2 shadow-sm"
              >
                <span>Preview Stage in Member Cockpit</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveStage(prev => (prev % 8) + 1)}
                className="px-5 py-3 rounded-full text-xs font-semibold bg-white border border-[#E3ECE6] text-[#153E35] hover:bg-[#F4F7F4] transition-all flex items-center gap-1.5"
              >
                <span>Next Stage ({current.num < 8 ? `Stage 0${current.num + 1}` : 'Stage 01'})</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Realistic iPhone Mobile Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-[310px] sm:w-[340px] h-[640px] rounded-[44px] bg-[#11231E] p-3.5 shadow-[0_30px_70px_rgba(21,62,53,0.22)] border-[5px] border-[#2A483E] relative flex flex-col overflow-hidden">
              
              {/* Dynamic Island / Notch */}
              <div className="w-24 h-5 bg-black rounded-full mx-auto mb-3 shrink-0" />

              {/* Mobile Phone Screen Canvas */}
              <div className="flex-1 bg-white rounded-[32px] p-5 overflow-y-auto space-y-4 text-[#13231F] text-xs shadow-inner scrollbar-none">
                
                {/* Mobile App Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-[#E3ECE6]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-lg bg-[#153E35] text-white text-[10px] font-bold flex items-center justify-center">
                      ✳
                    </span>
                    <span className="font-serif font-bold text-sm tracking-tight text-[#153E35]">niva</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#61756F]">9:41 AM</span>
                </div>

                {/* Mobile View Dynamic Render Based on Active Stage */}
                <div className="space-y-3">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold">
                    {current.badge}
                  </div>
                  <h4 className="font-serif text-lg font-bold leading-snug text-[#13231F]">
                    {current.mobileUi.title}
                  </h4>
                  <p className="text-[11px] text-[#61756F] leading-relaxed">
                    {current.mobileUi.desc}
                  </p>

                  {/* Stage 1 UI */}
                  {current.num === 1 && (
                    <div className="space-y-2 pt-2">
                      <div className="p-3 rounded-xl bg-[#F4F9F6] border border-[#C2E2D3] text-center">
                        <span className="font-bold text-xs text-[#153E35]">Join via Employer or Direct</span>
                        <div className="text-xs font-serif font-bold text-emerald-800 mt-1">₹1,999 / month</div>
                      </div>
                      <button className="w-full py-2.5 rounded-full bg-[#153E35] text-white font-semibold text-xs">
                        Check Eligibility
                      </button>
                    </div>
                  )}

                  {/* Stage 2 UI (Switches) */}
                  {current.num === 2 && (
                    <div className="space-y-2 pt-1">
                      {current.mobileUi.switches?.map((sw, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg border border-[#E3ECE6] flex items-center justify-between text-[11px]">
                          <span>{sw.name}</span>
                          <span className={`w-3.5 h-3.5 rounded-full ${sw.on ? 'bg-emerald-600' : 'bg-slate-300'}`} />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Stage 3 UI (Devices) */}
                  {current.num === 3 && (
                    <div className="space-y-2 pt-1">
                      {current.mobileUi.metrics?.map((m, idx) => (
                        <div key={idx} className="p-2.5 rounded-xl bg-[#FAFBF9] border border-[#E3ECE6] flex items-center justify-between">
                          <span className="font-semibold">{m.name}</span>
                          <span className="text-[10px] font-mono text-emerald-700">{m.status}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Stage 4 UI (Assessment Table) */}
                  {current.num === 4 && (
                    <div className="space-y-2 pt-1">
                      {current.mobileUi.findings?.map((f, idx) => (
                        <div key={idx} className="p-2.5 rounded-xl bg-[#F4F9F6] border border-[#C2E2D3] flex items-center justify-between text-[11px]">
                          <div>
                            <div className="font-bold text-[#153E35]">{f.label}</div>
                            <div className="text-[10px] text-[#61756F]">{f.value}</div>
                          </div>
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-bold">
                            {f.badge}
                          </span>
                        </div>
                      ))}
                      <div className="p-3 rounded-xl bg-[#153E35] text-white text-center font-semibold text-xs mt-2">
                        Book Consult with Dr. Anjali Mehta
                      </div>
                    </div>
                  )}

                  {/* Stage 5 UI (Today's Plan) */}
                  {current.num === 5 && (
                    <div className="space-y-2 pt-1">
                      <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-900 font-medium">
                        {current.mobileUi.focus}
                      </div>
                      {current.mobileUi.actions?.map((act, idx) => (
                        <div key={idx} className="p-2 rounded-lg border border-[#E3ECE6] flex items-center justify-between text-[11px]">
                          <span className={act.done ? 'line-through text-slate-400' : 'font-medium'}>{act.title}</span>
                          <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] ${act.done ? 'bg-[#153E35] text-white' : 'border border-slate-300'}`}>
                            {act.done && '✓'}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Stage 6 UI (Alerts) */}
                  {current.num === 6 && (
                    <div className="space-y-2 pt-1">
                      <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 space-y-1">
                        <div className="font-bold flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                          <span>{current.mobileUi.alertItem}</span>
                        </div>
                        <p className="text-[10px] text-amber-800">{current.mobileUi.guidance}</p>
                      </div>
                    </div>
                  )}

                  {/* Stage 7 UI (Care Team) */}
                  {current.num === 7 && (
                    <div className="space-y-2 pt-1">
                      {current.mobileUi.team?.map((member, idx) => (
                        <div key={idx} className="p-2.5 rounded-xl bg-white border border-[#E3ECE6] flex items-center justify-between">
                          <div>
                            <div className="font-bold text-[#153E35]">{member.name}</div>
                            <div className="text-[10px] text-[#61756F]">{member.role}</div>
                          </div>
                          <span className="text-[10px] text-emerald-700 font-mono">Book Consult</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Stage 8 UI (Records & Exit) */}
                  {current.num === 8 && (
                    <div className="space-y-2 pt-1">
                      {current.mobileUi.actions?.map((act, idx) => (
                        <div key={idx} className="p-2.5 rounded-xl border border-[#E3ECE6] text-[11px] text-[#13231F] flex items-center justify-between">
                          <span>{act}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                        </div>
                      ))}
                    </div>
                  )}

                </div>

                {/* Mobile Bottom Navigation Bar */}
                <div className="pt-3 border-t border-[#E3ECE6] flex items-center justify-around text-[10px] text-[#61756F]">
                  <span className="font-bold text-[#153E35]">Home</span>
                  <span>Plan</span>
                  <span>Track</span>
                  <span>Care</span>
                  <span>More</span>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
