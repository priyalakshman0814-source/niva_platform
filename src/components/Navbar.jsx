import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ChevronDown, User, Stethoscope, Utensils, Dumbbell, Shield, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenWorkspace }) {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Platform', href: '#home' },
    { name: '8-Stage Journey', href: '#journey' },
    { name: 'Multi-Role Model', href: '#ecosystem' },
    { name: 'Connected Devices', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ];

  const quickRoles = [
    { role: 'member', name: 'Member (Priya Sharma)', icon: User },
    { role: 'clinician', name: 'Clinician (Dr. Anjali Mehta)', icon: Stethoscope },
    { role: 'nutritionist', name: 'Nutritionist (Nila Sen)', icon: Utensils },
    { role: 'coach', name: 'Coach (Kabir CSCS)', icon: Dumbbell },
    { role: 'admin', name: 'Admin (Operations)', icon: Shield },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top Refined Announcement Bar */}
      {bannerVisible && (
        <div className="bg-[#153E35] text-[#DEEEE7] py-2 px-4 sm:px-8 relative text-center text-xs tracking-wide">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 pr-6">
            <span className="font-bold text-white uppercase text-[10px] tracking-wider font-mono">
              HEALTH, CONNECTED:
            </span>
            <span className="text-[11px] sm:text-xs">
              One considered platform uniting members, clinicians, nutritionists, and trainers.
            </span>
            <button
              onClick={() => onOpenWorkspace('member')}
              className="inline-flex items-center gap-0.5 text-white underline font-semibold hover:text-[#DEEEE7] transition-colors ml-1"
            >
              <span>Explore live demo</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <button
            onClick={() => setBannerVisible(false)}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-1 text-[#DEEEE7]/70 hover:text-white transition-colors"
            aria-label="Close announcement"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Light Luxury Pill Navigation Bar */}
      <div className={`px-4 sm:px-8 transition-all duration-300 ${scrolled ? 'pt-2 pb-2' : 'pt-4 pb-2'}`}>
        <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_10px_35px_rgba(21,62,53,0.06)] border border-[#E3ECE6] px-5 sm:px-7 py-3 flex items-center justify-between">
          
          {/* Left: Brand Monogram + Links */}
          <div className="flex items-center gap-8 lg:gap-10">
            <a href="#home" className="flex items-center gap-2.5 group shrink-0">
              <span className="w-8 h-8 rounded-xl bg-[#153E35] text-white flex items-center justify-center text-base font-bold shadow-2xs group-hover:bg-[#1E5649] transition-colors">
                ✳
              </span>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-[#153E35] leading-none">
                  niva
                </span>
                <span className="text-[8px] font-mono tracking-widest uppercase text-[#61756F] font-semibold mt-0.5">
                  health, understood
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-semibold text-[#61756F] hover:text-[#153E35] transition-colors relative py-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Right: Role Switcher & Live Workspace Launcher */}
          <div className="flex items-center gap-3">
            
            {/* Quick Role Switcher Dropdown */}
            <div className="relative hidden lg:block">
              <button
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#E3ECE6] hover:border-emerald-300 bg-[#FBFBF9] text-xs font-semibold text-[#13231F] transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Role Switcher</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#61756F]" />
              </button>

              {roleDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl border border-[#E3ECE6] shadow-xl p-2 z-50 animate-fade">
                  <div className="text-[10px] font-mono uppercase text-[#61756F] px-3 py-1 font-bold">
                    Choose A Collaborative Role:
                  </div>
                  {quickRoles.map(r => {
                    const Icon = r.icon;
                    return (
                      <button
                        key={r.role}
                        onClick={() => {
                          onOpenWorkspace(r.role);
                          setRoleDropdownOpen(false);
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-[#13231F] hover:bg-[#F2F8F5] hover:text-[#153E35] text-left transition-colors font-medium"
                      >
                        <Icon className="w-4 h-4 text-emerald-700" />
                        <span>{r.name}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Primary Action Button */}
            <button
              onClick={() => onOpenWorkspace('member')}
              className="px-5 py-2.5 rounded-full text-xs font-semibold bg-[#153E35] text-white hover:bg-[#1E5649] transition-all shadow-sm flex items-center gap-1.5"
            >
              <span>Launch Platform</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#13231F] hover:text-[#153E35]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden max-w-7xl mx-auto mt-2 bg-white rounded-2xl border border-[#E3ECE6] shadow-xl p-5 space-y-3 animate-fade">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-[#13231F] hover:text-[#153E35] py-2 border-b border-[#F4F7F4]"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-2 space-y-2">
              <div className="text-[10px] font-mono uppercase text-[#61756F]">Quick Role Access:</div>
              <div className="grid grid-cols-2 gap-2">
                {['member', 'clinician', 'nutritionist', 'coach', 'admin'].map(role => (
                  <button
                    key={role}
                    onClick={() => {
                      onOpenWorkspace(role);
                      setMobileMenuOpen(false);
                    }}
                    className="p-2 rounded-xl border border-[#E3ECE6] text-xs font-semibold capitalize text-[#153E35] hover:bg-[#F2F8F5]"
                  >
                    {role} Mode ↗
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
