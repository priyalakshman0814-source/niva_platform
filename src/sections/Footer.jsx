import React from 'react';

export default function Footer({ onOpenWorkspace }) {
  return (
    <footer className="bg-[#153E35] text-[#DEEEE7] border-t border-[#1E5649] py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-2.5 group">
              <span className="w-8 h-8 rounded-xl bg-white text-[#153E35] flex items-center justify-center font-bold text-sm shadow-sm">
                ✳
              </span>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-white leading-none">
                  niva
                </span>
                <span className="text-[9px] font-mono tracking-widest uppercase text-[#DEEEE7]/80 mt-0.5">
                  health, understood
                </span>
              </div>
            </a>

            <p className="text-xs text-[#DEEEE7]/80 leading-relaxed max-w-sm">
              A connected wellness and healthcare intelligence ecosystem uniting members, clinicians, nutritionists, and trainers into one permission-based care model.
            </p>

            <div className="pt-2 text-[11px] font-mono text-[#DEEEE7]/60">
              Built with React 18, Tailwind CSS &amp; REST API Engine.
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Explore
            </div>
            <ul className="space-y-2 text-xs text-[#DEEEE7]/80">
              <li><a href="#home" className="hover:text-white transition-colors">Platform</a></li>
              <li><a href="#journey" className="hover:text-white transition-colors">8-Stage Journey</a></li>
              <li><a href="#ecosystem" className="hover:text-white transition-colors">Collaborative Model</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Connected Devices</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Enquiry</a></li>
            </ul>
          </div>

          {/* Role Workspaces */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Role Workspaces
            </div>
            <ul className="space-y-2 text-xs text-[#DEEEE7]/80">
              <li>
                <button onClick={() => onOpenWorkspace('member')} className="hover:text-white transition-colors text-left">
                  Member Portal (Priya) ↗
                </button>
              </li>
              <li>
                <button onClick={() => onOpenWorkspace('clinician')} className="hover:text-white transition-colors text-left">
                  Clinician Cockpit (Dr. Mehta) ↗
                </button>
              </li>
              <li>
                <button onClick={() => onOpenWorkspace('nutritionist')} className="hover:text-white transition-colors text-left">
                  Nutritionist Hub (Nila) ↗
                </button>
              </li>
              <li>
                <button onClick={() => onOpenWorkspace('coach')} className="hover:text-white transition-colors text-left">
                  Movement Coach Hub (Kabir) ↗
                </button>
              </li>
              <li>
                <button onClick={() => onOpenWorkspace('admin')} className="hover:text-white transition-colors text-left">
                  Platform Admin (RBAC &amp; Audit) ↗
                </button>
              </li>
            </ul>
          </div>

          {/* Standards & Compliance */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Standards
            </div>
            <ul className="space-y-1.5 text-[11px] text-[#DEEEE7]/70 font-mono">
              <li>• DPDP Act (India)</li>
              <li>• HIPAA Architecture</li>
              <li>• 100% Doctor Gate</li>
              <li>• Granular Consent</li>
              <li>• ISO 27001 Ready</li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 border-t border-[#1E5649] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DEEEE7]/60">
          <div>
            © {new Date().getFullYear()} Niva Health Systems • Designed for Human Agency &amp; Connected Care.
          </div>
          <div className="font-mono text-[11px]">
            Personal Health Intelligence • Online
          </div>
        </div>
      </div>
    </footer>
  );
}
