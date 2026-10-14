import React, { useState } from 'react';
import { X, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';

export default function EarlyAccessModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/30 backdrop-blur-md animate-fadeIn">
      <div className="bg-white border border-emerald-100 rounded-3xl max-w-md w-full p-7 sm:p-9 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-teal-700 hover:bg-emerald-50 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Subscribed to Updates</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Thank you for your interest in Niva. You will be notified as our smart fitness and wellness concepts progress toward launch.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-teal-800 text-[11px] font-mono tracking-wider mb-2 font-semibold border border-emerald-200">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>PRODUCT UPDATES</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Stay Updated on Niva
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Receive news about Niva’s connected dumbbells, wearable wellness devices, and upcoming release milestones.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono text-slate-600 mb-1.5 font-semibold uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-emerald-50/30 border border-emerald-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-teal-500 font-mono"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full text-xs font-semibold bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 text-white hover:opacity-95 transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Join Update List</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
