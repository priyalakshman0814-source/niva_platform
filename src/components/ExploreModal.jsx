import React, { useState } from 'react';

export default function ExploreModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [selectedDevices, setSelectedDevices] = useState(['niva-ring', 'niva-watch']);
  const [selectedGoals, setSelectedGoals] = useState(['recovery', 'longevity']);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleDevice = (id) => {
    setSelectedDevices(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const toggleGoal = (id) => {
    setSelectedGoals(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#090D14] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl shadow-emerald-950/40 overflow-hidden">
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition"
        >
          ✕
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono">
                Ecosystem Configurator
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
              Configure Your NIVA Intelligence Stack
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Tailor your biometric sensors, AI algorithms, and lifestyle tracking to your unique biological baseline.
            </p>

            {/* Step 1: Devices Selection */}
            {step === 1 && (
              <div>
                <div className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-3">
                  Step 1 of 2: Select Connected Hardware
                </div>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { id: 'niva-ring', name: 'NIVA Ring', desc: 'Sleep, HRV, Temp & Continuous Recovery', price: '$299' },
                    { id: 'niva-watch', name: 'NIVA Watch', desc: 'Dual-band GPS, Micro-OLED & Strain Coach', price: '$399' },
                    { id: 'niva-band', name: 'NIVA Band', desc: 'Screenless 24/7 Autonomic Strain Monitor', price: '$199' },
                    { id: 'niva-equipment', name: 'Smart Equipment', desc: 'Velocity, Bar Path & Dynamic Load Cells', price: '$899' }
                  ].map((dev) => {
                    const active = selectedDevices.includes(dev.id);
                    return (
                      <div
                        key={dev.id}
                        onClick={() => toggleDevice(dev.id)}
                        className={`p-4 rounded-2xl border cursor-pointer transition ${
                          active
                            ? 'bg-emerald-950/30 border-emerald-500/50 shadow-lg shadow-emerald-950/20'
                            : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-sm text-white">{dev.name}</span>
                          <span className={`text-xs px-2 py-0.5 rounded font-mono ${active ? 'bg-emerald-500/20 text-emerald-400' : 'text-gray-400'}`}>
                            {dev.price}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed">{dev.desc}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-gray-500">
                    {selectedDevices.length} device{selectedDevices.length !== 1 ? 's' : ''} selected
                  </span>
                  <button
                    onClick={() => setStep(2)}
                    className="px-6 py-2.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-black font-semibold text-sm transition shadow-lg shadow-emerald-400/20 flex items-center gap-2"
                  >
                    Next: Biological Goals →
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Biological Goals & VIP Priority Access */}
            {step === 2 && (
              <div>
                <div className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-3">
                  Step 2 of 2: Primary AI Optimization Focus
                </div>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { id: 'recovery', label: 'Autonomic HRV & Deep REM Recovery', icon: '⚡' },
                    { id: 'hypertrophy', label: 'Hypertrophy & Kinetic Velocity Tracking', icon: '🏋️' },
                    { id: 'longevity', label: 'Longevity & Metabolic Glycemic Control', icon: '🧬' },
                    { id: 'circadian', label: 'Circadian Sync & Indian Nutrition Balance', icon: '🌙' }
                  ].map((goal) => {
                    const active = selectedGoals.includes(goal.id);
                    return (
                      <div
                        key={goal.id}
                        onClick={() => toggleGoal(goal.id)}
                        className={`p-3.5 rounded-2xl border cursor-pointer transition ${
                          active
                            ? 'bg-cyan-950/30 border-cyan-500/50 text-white'
                            : 'bg-white/[0.02] border-white/10 text-gray-400 hover:border-white/20'
                        }`}
                      >
                        <div className="text-lg mb-1">{goal.icon}</div>
                        <div className="text-xs font-medium leading-snug">{goal.label}</div>
                      </div>
                    );
                  })}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Reserve Priority VIP Access (Founding Member Protocol)
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-emerald-400 transition"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs text-gray-400 hover:text-white transition"
                    >
                      ← Back to Hardware
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-black font-semibold text-sm transition shadow-lg shadow-emerald-400/20"
                    >
                      Generate Bio-Profile & Reserve
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center text-2xl mx-auto mb-4">
              ✓
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">Welcome to the NIVA Ecosystem</h4>
            <p className="text-sm text-gray-400 max-w-md mx-auto mb-6">
              VIP allocation confirmed for <span className="text-emerald-400 font-mono">{email}</span>. Your personalized configuration matrix is being calibrated.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 max-w-sm mx-auto mb-6 text-left font-mono text-xs text-gray-300 space-y-1.5">
              <div className="text-emerald-400 font-bold">NIVA BIO-ID: #NIV-8842-ALPHA</div>
              <div>Stack: {selectedDevices.join(', ')}</div>
              <div>Calibration: Neural 250Hz Engine</div>
              <div>Status: VIP Batch 1 Priority Delivery</div>
            </div>
            <button
              onClick={onClose}
              className="px-8 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
