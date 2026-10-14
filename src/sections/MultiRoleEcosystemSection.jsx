import React, { useState } from 'react';
import { 
  User, Stethoscope, Utensils, Dumbbell, Shield, 
  ArrowRight, ArrowUpRight, Check, Activity, Heart, 
  Sparkles, Layers, Sliders, RefreshCw, Zap
} from 'lucide-react';
import Reveal from '../components/Reveal';

export default function MultiRoleEcosystemSection({ onOpenWorkspace }) {
  const [activeTab, setActiveTab] = useState('flow');

  const roleEcosystem = [
    {
      id: 'member',
      title: 'Member',
      subtitle: 'The Focal Point (Equivalent to )',
      roleDescription: 'Everyday wellness seeker tracking habits, vitals, and progress with complete privacy control.',
      icon: User,
      color: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      accentColor: '#10B981',
      responsibilities: [
        'Reviews daily personalized action plan (steps, walk, Vitamin D, hydration)',
        'Connects hardware devices (Niva Ring, Watch, Smart Dumbbell)',
        'Granularly grants or revokes data access permissions for each specialist',
        'Receives verified clinician assessments only after human doctor approval'
      ],
      sampleUser: 'Priya Sharma (Age 32, Bengaluru)'
    },
    {
      id: 'clinician',
      title: 'Clinician / Physician',
      subtitle: 'Medical Authority (Equivalent / Specialist)',
      roleDescription: 'Licensed physician evaluating telemetry trends, reviewing AI drafts, and managing care plans.',
      icon: Stethoscope,
      color: 'bg-teal-50 text-teal-800 border-teal-200',
      accentColor: '#14B8A6',
      responsibilities: [
        'Acts as the Medical Safety Gate: Members never see unapproved AI drafts',
        'Approves or returns AI diagnostic drafts with 1-click review queue',
        'Conducts scheduled video consultations and documents medical charts',
        'Adjusts prescription refills (e.g. Metformin 500mg) and orders lab panels'
      ],
      sampleUser: 'Dr. Anjali Mehta, MD (Consultant Endocrinologist)'
    },
    {
      id: 'nutritionist',
      title: 'Clinical Nutritionist',
      subtitle: 'Dietary Intelligence (Equivalent to )',
      roleDescription: 'Registered dietitian translating metabolic biomarkers into tailored daily nutrition protocols.',
      icon: Utensils,
      color: 'bg-amber-50 text-amber-800 border-amber-200',
      accentColor: '#D97706',
      responsibilities: [
        'Reviews member food logs, meal photos, and daily calorie distributions',
        'Monitors macronutrient compliance (protein, carbs, fats, hydration)',
        'Prescribes therapeutic diets for glucose stability and Vitamin D absorption',
        'Provides real-time feedback on grocery choices and dining out'
      ],
      sampleUser: 'Nila Sen, MS RD (Clinical Dietitian)'
    },
    {
      id: 'coach',
      title: 'Fitness & Movement Coach',
      subtitle: 'Physical Performance & Strength Trainer',
      roleDescription: 'Strength trainer and physical therapist overseeing functional fitness and smart equipment data.',
      icon: Dumbbell,
      color: 'bg-sky-50 text-sky-800 border-sky-200',
      accentColor: '#0284C7',
      responsibilities: [
        'Monitors connected dumbbell load (22.5kg), tempo, and repetition counts',
        'Tracks Range of Motion (ROM 45°-145°) to prevent orthopedic injury',
        'Maintains member workout adherence streaks and progressive overload',
        'Coordinates with the clinician to adjust intensity around clinical alerts'
      ],
      sampleUser: 'Kabir Coach, CSCS (Head Performance Coach)'
    },
    {
      id: 'admin',
      title: 'Platform Administrator',
      subtitle: 'Governance & Operations (Equivalent to)',
      roleDescription: 'Operations leadership overseeing RBAC credentials, compliance verification, and system telemetry.',
      icon: Shield,
      color: 'bg-slate-100 text-slate-800 border-slate-300',
      accentColor: '#1E293B',
      responsibilities: [
        'Oversees Role-Based Access Control (RBAC) across member and care tiers',
        'Maintains immutable real-time audit logs for clinical security and DPDP compliance',
        'Monitors live BLE telemetry latency and API service uptime',
        'Ensures credentialing verification for all participating medical specialists'
      ],
      sampleUser: 'Siddharth Rao (Operations & Compliance Lead)'
    }
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Continuous Signal Capture',
      desc: 'Member Priya wears the Niva Ring. Telemetry syncs resting HR, HRV, and sleep stages continuously to the secure cloud sandbox.',
      actor: 'Member Priya'
    },
    {
      step: '02',
      title: 'AI Anomaly Pattern Detection',
      desc: 'Neural model detects resting HR is 12% above 60-day baseline. An AI draft report is generated but NOT displayed to the member.',
      actor: 'Niva AI Core'
    },
    {
      step: '03',
      title: 'Physician Human-in-the-Loop Review',
      desc: 'Dr. Anjali Mehta reviews the telemetry draft in her Clinical Cockpit. She verifies the glucose trend and clicks "Approve & Release".',
      actor: 'Dr. Anjali Mehta'
    },
    {
      step: '04',
      title: 'Member Informed with Clear Action',
      desc: 'Priya sees the verified assessment on her phone with a calm recommendation: book a 15-min consult and increase evening hydration.',
      actor: 'Member Priya'
    },
    {
      step: '05',
      title: 'Multi-Sided Care Alignment',
      desc: 'Nutritionist Nila adjusts meal timing, Coach Kabir calibrates dumbbell training volume, and Admin Siddharth logs the audit event.',
      actor: 'Complete Care Team'
    }
  ];

  return (
    <section id="ecosystem" className="py-24 sm:py-32 bg-white border-t border-[#E3ECE6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header with Reference Explanation */}
        <Reveal className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DEEEE7] border border-[#C2E2D3] text-xs font-mono font-semibold text-[#153E35] tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>THE MULTI-SIDED COLLABORATIVE MODEL  FOR HEALTHCARE</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#13231F] leading-[1.08]">
            One shared platform.<br />
            <span className="italic text-[#153E35]">Five focused perspectives.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#61756F] leading-relaxed">
            Niva brings Members, Clinicians, Nutritionists, Trainers, and Admins into one seamless, permission-based healthcare ecosystem.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => setActiveTab('roles')}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'roles' ? 'bg-[#153E35] text-white shadow-xs' : 'bg-[#F4F7F4] text-[#61756F] hover:text-[#153E35]'
              }`}
            >
              Explore 5 Roles
            </button>
            <button
              onClick={() => setActiveTab('flow')}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'flow' ? 'bg-[#153E35] text-white shadow-xs' : 'bg-[#F4F7F4] text-[#61756F] hover:text-[#153E35]'
              }`}
            >
              How Collaboration Works
            </button>
          </div>
        </Reveal>

        {/* View Mode 1: The 5 Role Cards */}
        {activeTab === 'roles' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roleEcosystem.map((role) => {
              const Icon = role.icon;
              return (
                <div
                  key={role.id}
                  className="p-6 rounded-2xl bg-white border border-[#E3ECE6] hover:border-emerald-300 hover:shadow-luxury transition-all flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#DEEEE7] text-[#153E35] flex items-center justify-center font-bold">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F4F7F4] text-[#61756F]">
                        {role.subtitle.split('(')[0]}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#13231F] group-hover:text-[#153E35] transition-colors">
                        {role.title}
                      </h3>
                      <p className="text-xs text-[#61756F] mt-1 leading-relaxed">
                        {role.roleDescription}
                      </p>
                    </div>

                    {/* Role Responsibilities */}
                    <div className="space-y-2 pt-2 border-t border-[#E3ECE6]">
                      <div className="text-[10px] font-mono uppercase font-bold text-[#61756F]">Key Capabilities</div>
                      {role.responsibilities.map((resp, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#13231F]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#153E35] mt-1.5 shrink-0" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E3ECE6] flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-[#61756F]">Sample User:</div>
                      <div className="text-xs font-semibold text-[#13231F]">{role.sampleUser}</div>
                    </div>

                    <button
                      onClick={() => onOpenWorkspace(role.id)}
                      className="px-4 py-2 rounded-full text-xs font-semibold bg-[#153E35] text-white hover:bg-[#1E5649] transition-all flex items-center gap-1.5 shadow-xs"
                    >
                      <span>Open Workspace</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View Mode 2: Interactive Real-Time Collaborative Workflow */}
        {activeTab === 'flow' && (
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#FAFBF9] to-white border border-[#E3ECE6] shadow-sm space-y-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase text-[#153E35] font-bold">REAL-TIME DATA FLOW SIMULATION</span>
                  <h3 className="font-serif text-3xl font-bold text-[#13231F] mt-1">
                    How an Incident Flows Across All 5 Roles in Niva
                  </h3>
                  <p className="text-xs text-[#61756F] max-w-xl mt-1">
                    Unlike siloed health apps, Niva coordinates the entire care network automatically while enforcing medical safety.
                  </p>
                </div>

                <button
                  onClick={() => onOpenWorkspace('clinician')}
                  className="px-6 py-3 rounded-full text-xs font-semibold bg-[#153E35] text-white hover:bg-[#1E5649] transition-all flex items-center gap-2 shadow-sm"
                >
                  <span>Test Review Queue Live</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Workflow Stepper Grid */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                {workflowSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-[#E3ECE6] shadow-xs flex flex-col justify-between space-y-4 relative"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-2xl font-bold text-[#153E35]">{step.step}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#DEEEE7] text-[#153E35] font-semibold">
                          {step.actor}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-[#13231F] mt-3">{step.title}</h4>
                      <p className="text-xs text-[#61756F] mt-1.5 leading-relaxed">{step.desc}</p>
                    </div>

                    <div className="pt-2 border-t border-[#E3ECE6] flex items-center justify-between text-[11px] font-medium text-[#153E35]">
                      <span>Stage Handled</span>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Quote / Core Safety Summary */}
              <div className="p-4 rounded-xl bg-[#DEEEE7]/40 border border-[#C2E2D3] flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-2 text-[#153E35] font-semibold">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    "In Niva, the clinical intelligence engine links members to verified care."
                  </span>
                </div>
                <button
                  onClick={() => onOpenWorkspace('member')}
                  className="font-mono text-xs font-bold text-[#153E35] hover:underline"
                >
                  Launch Live Demo ↗
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
