import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import MemberJourneySection from './sections/MemberJourneySection';
import MultiRoleEcosystemSection from './sections/MultiRoleEcosystemSection';
import SmartFitnessSection from './sections/SmartFitnessSection';
import DataFlowPipeline from './sections/DataFlowPipeline';
import BodyMonitoringSection from './sections/BodyMonitoringSection';
import CtaSection from './sections/CtaSection';
import Footer from './sections/Footer';
import RoleWorkspaceModal from './components/RoleWorkspaceModal';

export default function App() {
  const [workspaceOpen, setWorkspaceOpen] = useState(false);
  const [workspaceRole, setWorkspaceRole] = useState('member');

  const handleOpenWorkspace = (role = 'member') => {
    setWorkspaceRole(role);
    setWorkspaceOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#13231F] antialiased selection:bg-[#DEEEE7] selection:text-[#153E35] font-sans">
      
      {/* 1. Top Light Luxury Floating Pill Navigation */}
      <Navbar onOpenWorkspace={handleOpenWorkspace} />

      {/* Main Promotional & Architectural Flow */}
      <main>
        {/* 2. Hero Section: Strong headline, Cormorant Garamond luxury titles, 3D bio canvas / luxury photo toggle, clear CTAs */}
        <Hero onOpenWorkspace={handleOpenWorkspace} />

        {/* 3. Member Journey Section: 8 Stages from Contact to Ongoing Care (Matching Reference Diagram media_1791902929115.jpg) */}
        <MemberJourneySection onOpenWorkspace={handleOpenWorkspace} />

        {/* 4. Multi-Role Ecosystem: The Uber-Style Collaborative Healthcare Network (Member, Clinician, Nutritionist, Coach, Admin) */}
        <MultiRoleEcosystemSection onOpenWorkspace={handleOpenWorkspace} />

        {/* 5. Connected Devices & Hardware: High-resolution luxury product photographs, specs, and live smart dumbbell telemetry */}
        <SmartFitnessSection onOpenWorkspace={handleOpenWorkspace} />

        {/* 6. Technology & Data Pipeline: 4-Step Architecture (Collect, Calibrate, Synthesize, Doctor Gate) */}
        <DataFlowPipeline />

        {/* 7. Core Experiences & Features: Movement tracking, biometric recovery, and tailored daily care */}
        <BodyMonitoringSection />

        {/* 8. Contact & Partnerships: Member enquiry form and institutional collaborations */}
        <CtaSection onOpenWorkspace={handleOpenWorkspace} />
      </main>

      {/* 9. Footer: Deep British Racing Forest luxury footer, compliance, and direct role launchers */}
      <Footer onOpenWorkspace={handleOpenWorkspace} />

      {/* 10. Live Full-Stack Collaborative Role Workspace Modal (The interactive Cockpit for all 5 roles) */}
      <RoleWorkspaceModal
        isOpen={workspaceOpen}
        onClose={() => setWorkspaceOpen(false)}
        initialRole={workspaceRole}
      />

    </div>
  );
}
