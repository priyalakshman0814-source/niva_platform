import React, { useState } from 'react';
import { ArrowUpRight, Mail, Users, CheckCircle2, Sparkles, Send } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function CtaSection({ onOpenWorkspace }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    topic: 'Member Experience',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormState({
      name: '',
      email: '',
      topic: 'Member Experience',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FBFBF9] border-t border-[#E3ECE6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="rounded-3xl bg-white border border-[#E3ECE6] p-8 sm:p-12 lg:p-16 shadow-luxury relative overflow-hidden">
          
          {/* Subtle Ambient Rings */}
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full border border-[#DEEEE7]/80 pointer-events-none" />
          <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full border border-[#DEEEE7]/50 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Contact Channels & Brand Invitation */}
            <Reveal className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DEEEE7] border border-[#C2E2D3] text-xs font-mono font-semibold text-[#153E35] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CONNECT WITH NIVA</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#13231F] leading-tight">
                Connect with our care &amp; technology team.
              </h2>

              <p className="text-sm sm:text-base text-[#61756F] leading-relaxed max-w-lg">
                Whether you are exploring personal wellness membership, clinical partner integration, employer benefits, or hardware collaborations, we welcome the conversation.
              </p>

              {/* Contact Channels */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAFBF9] border border-[#E3ECE6]">
                  <div className="w-10 h-10 rounded-xl bg-[#DEEEE7] text-[#153E35] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#153E35] font-semibold">
                      General &amp; Member Inquiries
                    </div>
                    <a
                      href="mailto:care@niva.health"
                      className="text-sm font-semibold text-[#13231F] hover:text-[#153E35] transition-colors"
                    >
                      care@niva.health
                    </a>
                    <p className="text-xs text-[#61756F] mt-0.5">
                      Direct queries regarding membership tiers, devices, and care workflows.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAFBF9] border border-[#E3ECE6]">
                  <div className="w-10 h-10 rounded-xl bg-[#DEEEE7] text-[#153E35] flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#153E35] font-semibold">
                      Clinician &amp; Enterprise Partnerships
                    </div>
                    <a
                      href="mailto:partners@niva.health"
                      className="text-sm font-semibold text-[#13231F] hover:text-[#153E35] transition-colors"
                    >
                      partners@niva.health
                    </a>
                    <p className="text-xs text-[#61756F] mt-0.5">
                      For physician networks, dietitian clinics, fitness studios, and enterprise coverage.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right Column: Interactive Consultation / Enquiry Form */}
            <Reveal delay={100} className="lg:col-span-6">
              <div className="rounded-2xl bg-[#FAFBF9] border border-[#E3ECE6] p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#13231F]">Send a Message</h3>
                  <p className="text-xs text-[#61756F] mt-1">
                    Connect with an onboarding advisor or care coordinator.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-6 rounded-2xl bg-[#F2F8F5] border border-[#C2E2D3] text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#153E35] text-white flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-[#153E35]">Inquiry Received</h4>
                    <p className="text-xs text-[#61756F] max-w-sm mx-auto leading-relaxed">
                      Thank you, <b>{formState.name}</b>. A Niva care advisor will reach out to <b>{formState.email}</b> within 24 business hours.
                    </p>
                    <button
                      onClick={handleReset}
                      className="px-5 py-2 rounded-full text-xs font-semibold bg-[#153E35] text-white hover:bg-[#1E5649] transition-all"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-[#61756F]">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priya Sharma"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full mt-1 p-3 rounded-xl border border-[#E3ECE6] text-xs bg-white focus:outline-none focus:border-[#153E35]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#61756F]">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full mt-1 p-3 rounded-xl border border-[#E3ECE6] text-xs bg-white focus:outline-none focus:border-[#153E35]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#61756F]">Area of Interest</label>
                      <select
                        value={formState.topic}
                        onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                        className="w-full mt-1 p-3 rounded-xl border border-[#E3ECE6] text-xs bg-white focus:outline-none focus:border-[#153E35]"
                      >
                        <option value="Member Experience">Personal Membership (₹1,999/mo)</option>
                        <option value="Clinician Network">Join Physician / Specialist Network</option>
                        <option value="Corporate Benefits">Employer Healthcare Benefits</option>
                        <option value="Hardware Devices">Connected Device Inquiries</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#61756F]">Your Message</label>
                      <textarea
                        rows={3}
                        placeholder="Tell us what you'd like to explore..."
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full mt-1 p-3 rounded-xl border border-[#E3ECE6] text-xs bg-white focus:outline-none focus:border-[#153E35] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-[#153E35] text-white font-semibold text-xs hover:bg-[#1E5649] transition-all flex items-center justify-center gap-2 shadow-xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Inquiry</span>
                    </button>
                  </form>
                )}

              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}
