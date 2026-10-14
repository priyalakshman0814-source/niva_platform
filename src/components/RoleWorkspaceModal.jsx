import React, { useState, useEffect } from 'react';
import { 
  X, Check, Shield, AlertCircle, Heart, Activity, 
  Utensils, Dumbbell, User, CheckCircle2, ChevronRight, 
  Sparkles, RefreshCw, Send, Plus, ArrowUpRight, Lock, 
  Eye, Sliders, Battery, Bluetooth, Flame, Stethoscope
} from 'lucide-react';

export default function RoleWorkspaceModal({ isOpen, onClose, initialRole = 'member' }) {
  const [activeRole, setActiveRole] = useState(initialRole);
  const [loading, setLoading] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  
  // Member State
  const [todayActions, setTodayActions] = useState([
    { id: 'act-1', title: 'Log breakfast & hydration', detail: 'Steel-cut oats with chia seeds, berries & 500ml water', category: 'Nutrition', status: 'completed' },
    { id: 'act-2', title: 'Take Vitamin D3 + K2', detail: '2,000 IU with morning healthy fats', category: 'Prescription', status: 'completed' },
    { id: 'act-3', title: '20-minute brisk walk', detail: 'Zone 2 aerobic recovery — Keep energy balanced', category: 'Movement', status: 'in_progress' },
    { id: 'act-4', title: 'Evening mindful check-in', detail: 'Log mental clarity and perceived exertion score', category: 'Recovery', status: 'pending' },
    { id: 'act-5', title: 'Drink 2.5L water total', detail: '1.8L logged so far across 5 glasses', category: 'Hydration', status: 'pending' },
  ]);

  const [devices, setDevices] = useState([
    { id: 'dev-1', name: 'Niva Ring v1', category: 'Sleep & Recovery', connected: true, battery: 88, syncTime: 'Just now' },
    { id: 'dev-2', name: 'Niva Watch', category: 'Movement & Vitals', connected: true, battery: 94, syncTime: 'Live BLE' },
    { id: 'dev-3', name: 'Smart Dumbbell DB-01', category: 'Strength Telemetry', connected: false, battery: 100, syncTime: 'Standby' },
    { id: 'dev-4', name: 'Apple Health / Sensio', category: 'Integrated Cloud Hub', connected: true, battery: null, syncTime: 'Continuous' },
  ]);

  const [permissions, setPermissions] = useState([
    { id: 'perm-1', label: 'Share continuous vitals & sleep stages with Primary Clinician', enabled: true },
    { id: 'perm-2', label: 'Share meal logs and calorie summaries with Assigned Nutritionist', enabled: true },
    { id: 'perm-3', label: 'Share smart equipment repetition & movement tempo with Trainer', enabled: true },
    { id: 'perm-4', label: 'Allow care coordinator to schedule recommended lab panel reminders', enabled: true },
    { id: 'perm-5', label: 'Contribute de-identified telemetry for clinical health intelligence research', enabled: false },
  ]);

  // Clinician Findings (Shared State between Clinician & Member)
  const [findings, setFindings] = useState([
    {
      id: 'FIND-101',
      memberId: 'M-1042',
      memberName: 'Priya Sharma',
      domain: 'Endocrinology & Vitals',
      title: 'Elevated Resting Heart Rate Trend Across 5 Days',
      detail: 'Resting HR has averaged 76 bpm (+12% above Priya’s 60-day baseline of 68 bpm). Glucose variance indicates mild post-prandial spikes.',
      confidence: 'High Confidence',
      status: 'pending',
      suggestedAction: 'Schedule 15-min follow-up consultation and review hydration/stress factors.',
      createdAt: 'Today, 08:30 AM',
      reviewer: null
    },
    {
      id: 'FIND-102',
      memberId: 'M-1042',
      memberName: 'Priya Sharma',
      domain: 'Nutritional Medicine',
      title: 'Sub-optimal Serum Vitamin D (19 ng/mL)',
      detail: 'Baseline lab panel shows low Vitamin D3 levels. AI protocol drafts 60,000 IU weekly supplementation with meals for 8 weeks.',
      confidence: 'High Confidence',
      status: 'approved',
      suggestedAction: 'Daily morning sunshine exposure and 2,000 IU D3 maintenance once loaded.',
      createdAt: 'Yesterday, 11:20 AM',
      reviewer: 'Dr. Anjali Mehta, MD'
    },
    {
      id: 'FIND-103',
      memberId: 'M-2210',
      memberName: 'Aarav Patel',
      domain: 'Sleep Architecture',
      title: 'Nighttime HRV Suppression & Sleep Latency Extension',
      detail: 'Sleep onset delay +45 mins on 4 consecutive nights. AI suggests sleep hygiene and evening screen-time reduction.',
      confidence: 'Moderate Confidence',
      status: 'pending',
      suggestedAction: 'Send gentle wind-down protocol and check-in survey.',
      createdAt: 'Today, 09:15 AM',
      reviewer: null
    }
  ]);

  // Nutritionist Food Logs
  const [foodLogs, setFoodLogs] = useState([
    { id: 'f-1', member: 'Priya Sharma', meal: 'Oats, chia pudding & mixed berries', kcal: 380, protein: '14g', carbs: '52g', fats: '11g', time: '08:45 AM' },
    { id: 'f-2', member: 'Priya Sharma', meal: 'Grilled chicken salad with quinoa & cold-pressed olive oil', kcal: 520, protein: '42g', carbs: '36g', fats: '18g', time: '01:30 PM' },
    { id: 'f-3', member: 'Aarav Patel', meal: 'Poached eggs on sourdough with smashed avocado', kcal: 450, protein: '22g', carbs: '32g', fats: '24g', time: '09:10 AM' }
  ]);
  const [newMeal, setNewMeal] = useState('');
  const [newKcal, setNewKcal] = useState('');

  // Coach Smart Equipment Telemetry
  const [dumbbellReps, setDumbbellReps] = useState(8);
  const [dumbbellLoad, setDumbbellLoad] = useState(22.5);
  const [romAngle, setRomAngle] = useState(138);

  // Admin Users & RBAC
  const [adminUsers, setAdminUsers] = useState([
    { id: 'U-01', name: 'Priya Sharma', email: 'member@niva.health', role: 'member' },
    { id: 'U-02', name: 'Dr. Anjali Mehta, MD', email: 'clinician@niva.health', role: 'clinician' },
    { id: 'U-03', name: 'Nila Sen, MS RD', email: 'nutritionist@niva.health', role: 'nutritionist' },
    { id: 'U-04', name: 'Kabir Coach, CSCS', email: 'coach@niva.health', role: 'coach' },
    { id: 'U-05', name: 'Siddharth Rao', email: 'admin@niva.health', role: 'admin' },
  ]);

  const [auditLog, setAuditLog] = useState([
    { id: 'A-1', time: '10:14:22', user: 'System', msg: 'Platform security sandbox verified (HIPAA & DPDP compliant).' },
    { id: 'A-2', time: '10:15:05', user: 'Dr. Anjali Mehta', msg: 'Signed into clinical cockpit.' },
    { id: 'A-3', time: '10:16:30', user: 'Priya Sharma', msg: 'BLE telemetry synced from Niva Ring v1.' },
  ]);

  const [clinicalNote, setClinicalNote] = useState('');

  useEffect(() => {
    if (initialRole) setActiveRole(initialRole);
  }, [initialRole]);

  // Fetch live state from backend API if available
  useEffect(() => {
    if (!isOpen) return;
    fetch(`/api/state?role=${activeRole}`)
      .then(res => res.json())
      .then(data => {
        if (data.member?.todayActions) setTodayActions(data.member.todayActions);
        if (data.member?.devices) setDevices(data.member.devices);
        if (data.member?.permissions) setPermissions(data.member.permissions);
        if (data.clinician?.reviewQueue) setFindings(data.clinician.reviewQueue);
        if (data.nutritionist?.foodLogs) setFoodLogs(data.nutritionist.foodLogs);
        if (data.admin?.users) setAdminUsers(data.admin.users);
        if (data.admin?.auditLog) setAuditLog(data.admin.auditLog);
      })
      .catch(() => {
        // Fallback to client state smoothly
      });
  }, [isOpen, activeRole]);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3000);
  };

  const addAudit = (user, msg) => {
    const time = new Date().toTimeString().slice(0, 8);
    setAuditLog(prev => [{ id: 'A-' + Date.now(), time, user, msg }, ...prev]);
  };

  // 1. Member: Toggle Action
  const toggleAction = (id) => {
    setTodayActions(prev => prev.map(a => {
      if (a.id === id) {
        const nextStatus = a.status === 'completed' ? 'pending' : 'completed';
        showToast(`${a.title}: marked as ${nextStatus}`);
        addAudit('Priya Sharma', `Updated action ${a.title} -> ${nextStatus}`);
        return { ...a, status: nextStatus };
      }
      return a;
    }));

    fetch(`/api/member/actions/${id}/toggle`, { method: 'PUT' }).catch(() => {});
  };

  // 2. Member: Toggle Device
  const toggleDevice = (id) => {
    setDevices(prev => prev.map(d => {
      if (d.id === id) {
        const next = !d.connected;
        showToast(`${d.name} ${next ? 'Connected' : 'Disconnected'}`);
        addAudit('Priya Sharma', `${next ? 'Connected' : 'Disconnected'} device ${d.name}`);
        return { ...d, connected: next, syncTime: next ? 'Just now' : 'Disconnected' };
      }
      return d;
    }));
    fetch(`/api/member/devices/${id}/toggle`, { method: 'PUT' }).catch(() => {});
  };

  // 3. Member: Toggle Permission
  const togglePermission = (id) => {
    setPermissions(prev => prev.map(p => {
      if (p.id === id) {
        const next = !p.enabled;
        showToast(`Privacy Consent: ${next ? 'Granted' : 'Revoked'}`);
        addAudit('Priya Sharma', `Data permission "${p.label.slice(0, 30)}..." updated to ${next ? 'ENABLED' : 'REVOKED'}`);
        return { ...p, enabled: next };
      }
      return p;
    }));
    fetch(`/api/member/permissions/${id}/toggle`, { method: 'PUT' }).catch(() => {});
  };

  // 4. Clinician: Approve or Return Finding
  const handleReviewFinding = (id, action) => {
    setFindings(prev => prev.map(f => {
      if (f.id === id) {
        const nextStatus = action === 'approve' ? 'approved' : 'returned';
        showToast(`Finding ${action === 'approve' ? 'APPROVED & released to member' : 'RETURNED for amendments'}`);
        addAudit('Dr. Anjali Mehta, MD', `Clinician ${nextStatus} finding ${f.id} (${f.title})`);
        return { ...f, status: nextStatus, reviewer: 'Dr. Anjali Mehta, MD' };
      }
      return f;
    }));
    fetch(`/api/findings/${id}/${action}`, { method: 'POST' }).catch(() => {});
  };

  // 5. Nutritionist: Add Meal
  const handleAddMeal = (e) => {
    e.preventDefault();
    if (!newMeal || !newKcal) return;
    const newEntry = {
      id: 'f-' + Date.now(),
      member: 'Priya Sharma',
      meal: newMeal,
      kcal: Number(newKcal),
      protein: '24g',
      carbs: '38g',
      fats: '14g',
      time: new Date().toLocaleTimeString().slice(0, 5)
    };
    setFoodLogs(prev => [newEntry, ...prev]);
    addAudit('Nila Sen (Nutritionist)', `Logged meal for Priya Sharma: ${newMeal} (${newKcal} kcal)`);
    showToast(`Meal logged: ${newMeal}`);
    setNewMeal('');
    setNewKcal('');
    fetch('/api/nutrition/log', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEntry)
    }).catch(() => {});
  };

  // 6. Coach: Smart Dumbbell Rep
  const handleRepInc = () => {
    const nextReps = dumbbellReps + 1;
    setDumbbellReps(nextReps);
    showToast(`Smart Dumbbell: Rep ${nextReps} logged at ${dumbbellLoad}kg (96% Form Accuracy)`);
    addAudit('Kabir Coach', `Dumbbell DB-01 rep completed: ${nextReps} reps @ ${dumbbellLoad}kg`);
    fetch('/api/coach/telemetry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reps: nextReps, weight: dumbbellLoad, rom: romAngle })
    }).catch(() => {});
  };

  // 7. Admin: Change User Role
  const handleRoleChange = (userId, newRole) => {
    setAdminUsers(prev => prev.map(u => {
      if (u.id === userId) {
        showToast(`Role updated: ${u.name} is now ${newRole.toUpperCase()}`);
        addAudit('Siddharth Rao (Admin)', `Updated RBAC role for ${u.name} -> ${newRole}`);
        return { ...u, role: newRole };
      }
      return u;
    }));
    fetch(`/api/admin/users/${userId}/role`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ role: newRole })
    }).catch(() => {});
  };

  if (!isOpen) return null;

  const roles = [
    { id: 'member', label: 'Member (Priya)', icon: User, badge: 'Daily Plans & Vitals' },
    { id: 'clinician', label: 'Clinician (Dr. Mehta)', icon: Stethoscope, badge: 'AI Review Queue' },
    { id: 'nutritionist', label: 'Nutritionist (Nila)', icon: Utensils, badge: 'Meal Logs & Macros' },
    { id: 'coach', label: 'Coach (Kabir)', icon: Dumbbell, badge: 'Smart Dumbbell Telemetry' },
    { id: 'admin', label: 'Admin (Operations)', icon: Shield, badge: 'RBAC & Audit Trail' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/40 backdrop-blur-md animate-fade">
      <div className="relative w-full max-w-6xl max-h-[92vh] bg-[#FBFBF9] border border-[#E3ECE6] rounded-3xl shadow-[0_30px_90px_rgba(21,62,53,0.18)] flex flex-col overflow-hidden text-[#13231F]">
        
        {/* Top Header & Role Switcher Banner */}
        <div className="px-6 py-4 bg-white/95 border-b border-[#E3ECE6] flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-[#153E35] text-white flex items-center justify-center font-bold text-sm shadow-sm">
              ✳
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl font-bold tracking-tight text-[#153E35]">NIVA COLLABORATIVE PLATFORM</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#DEEEE7] text-[#153E35]">
                  REST API CONNECTED
                </span>
              </div>
              <p className="text-xs text-[#61756F]">
                The Uber-Style Multi-Sided Ecosystem — Select a role below to explore its live workspace.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full border border-[#E3ECE6] hover:bg-slate-100 flex items-center justify-center text-[#61756F] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Role Navigation Tabs (Uber-Style Multi-Sided Switcher) */}
        <div className="px-6 py-2.5 bg-[#F4F7F4] border-b border-[#E3ECE6] flex items-center gap-2 overflow-x-auto shrink-0 scrollbar-none">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#61756F] mr-1 shrink-0 font-semibold">
            SWITCH ROLE:
          </span>
          {roles.map(r => {
            const Icon = r.icon;
            const isActive = activeRole === r.id;
            return (
              <button
                key={r.id}
                onClick={() => setActiveRole(r.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#153E35] text-white shadow-sm shadow-[#153E35]/20 scale-102'
                    : 'bg-white border border-[#E3ECE6] text-[#61756F] hover:text-[#153E35] hover:border-[#153E35]/40'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#DEEEE7]' : 'text-[#61756F]'}`} />
                <span>{r.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-[#DEEEE7]/60 text-[#153E35]'}`}>
                  {r.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Workspace Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">

          {/* ============================================================== */}
          {/* 1. MEMBER WORKSPACE (Priya Sharma)                             */}
          {/* ============================================================== */}
          {activeRole === 'member' && (
            <div className="space-y-6">
              {/* Member Welcome Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-white via-[#F4F8F6] to-white border border-[#E3ECE6] shadow-sm flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#DEEEE7] border border-[#C2E2D3] flex items-center justify-center text-2xl font-serif font-bold text-[#153E35]">
                    PS
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="font-serif text-2xl font-bold text-[#13231F]">Good morning, Priya Sharma</h2>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#DEEEE7] text-[#153E35] font-semibold">
                        ID: NIVA-M1042
                      </span>
                    </div>
                    <p className="text-xs text-[#61756F] mt-0.5">
                      Personalized Wellness Intelligence • Bengaluru, Karnataka • Livwell Premium Care
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-xs font-mono uppercase text-[#61756F]">Active Streak</div>
                    <div className="text-lg font-bold text-[#153E35] flex items-center gap-1 justify-end">
                      <Flame className="w-4 h-4 text-emerald-500 fill-emerald-500" />
                      5 Consecutive Weeks
                    </div>
                  </div>
                </div>
              </div>

              {/* Weekly Telemetry Vitals Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-white border border-[#E3ECE6] shadow-xs">
                  <div className="flex items-center justify-between text-[#61756F] text-xs">
                    <span>Daily Steps</span>
                    <Activity className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-2xl font-serif font-bold text-[#153E35] mt-1">5,320</div>
                  <div className="text-[11px] text-emerald-700 font-medium mt-0.5">↑ +12% vs last week (8K goal)</div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E3ECE6] shadow-xs">
                  <div className="flex items-center justify-between text-[#61756F] text-xs">
                    <span>Last Night Sleep</span>
                    <Heart className="w-4 h-4 text-teal-600" />
                  </div>
                  <div className="text-2xl font-serif font-bold text-[#153E35] mt-1">7h 20m</div>
                  <div className="text-[11px] text-[#61756F] mt-0.5">Deep sleep 1h 48m • Score 84</div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E3ECE6] shadow-xs">
                  <div className="flex items-center justify-between text-[#61756F] text-xs">
                    <span>Weight Trend</span>
                    <Activity className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-2xl font-serif font-bold text-[#153E35] mt-1">68.4 kg</div>
                  <div className="text-[11px] text-emerald-700 font-medium mt-0.5">-0.8 kg this month</div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E3ECE6] shadow-xs">
                  <div className="flex items-center justify-between text-[#61756F] text-xs">
                    <span>Resting HR</span>
                    <Heart className="w-4 h-4 text-rose-500" />
                  </div>
                  <div className="text-2xl font-serif font-bold text-[#153E35] mt-1">72 bpm</div>
                  <div className="text-[11px] text-amber-700 font-medium mt-0.5">Monitoring • Physician review</div>
                </div>
              </div>

              {/* Two Column Layout: Daily Actions Checklist + Clinician Findings */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left Column: Today's Actions Checklist */}
                <div className="lg:col-span-7 p-5 rounded-2xl bg-white border border-[#E3ECE6] shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#13231F]">Today's Daily Actions</h3>
                      <p className="text-xs text-[#61756F]">Click any task to toggle status (simulates real-time API call)</p>
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-[#DEEEE7] text-[#153E35]">
                      {todayActions.filter(a => a.status === 'completed').length} of {todayActions.length} Completed
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {todayActions.map(act => {
                      const isDone = act.status === 'completed';
                      return (
                        <div
                          key={act.id}
                          onClick={() => toggleAction(act.id)}
                          className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                            isDone
                              ? 'bg-[#F2F8F5] border-[#C2E2D3] text-[#153E35]'
                              : 'bg-white border-[#E3ECE6] hover:border-emerald-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                              isDone ? 'bg-[#153E35] border-[#153E35] text-white' : 'border-[#94A3B8] bg-white'
                            }`}>
                              {isDone && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                            <div>
                              <div className={`text-sm font-semibold ${isDone ? 'line-through text-[#61756F]' : 'text-[#13231F]'}`}>
                                {act.title}
                              </div>
                              <div className="text-xs text-[#61756F]">{act.detail}</div>
                            </div>
                          </div>

                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${
                            isDone ? 'bg-[#DEEEE7] text-[#153E35]' : 'bg-slate-100 text-slate-600'
                          }`}>
                            {act.category}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Column: Clinician-Reviewed Findings (Safety Principle Showcase) */}
                <div className="lg:col-span-5 p-5 rounded-2xl bg-white border border-[#E3ECE6] shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#13231F]">Clinician-Reviewed Findings</h3>
                      <p className="text-xs text-[#61756F]">Core Principle: Only doctor-verified insights appear here</p>
                    </div>
                    <span className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                      <Shield className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Filter: Only approved findings shown to member! */}
                  {findings.filter(f => f.status === 'approved' && f.memberId === 'M-1042').length === 0 ? (
                    <div className="p-6 rounded-xl bg-[#F7F9F6] border border-dashed border-[#E3ECE6] text-center space-y-2">
                      <AlertCircle className="w-8 h-8 text-amber-500 mx-auto" />
                      <div className="text-sm font-semibold text-[#13231F]">No Findings Released Yet</div>
                      <p className="text-xs text-[#61756F]">
                        AI draft findings are currently held in Dr. Anjali Mehta's queue. Switch to the <b>Clinician</b> role above to review and release them!
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {findings.filter(f => f.status === 'approved' && f.memberId === 'M-1042').map(f => (
                        <div key={f.id} className="p-4 rounded-xl bg-[#F4F9F6] border border-[#C2E2D3] space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-semibold">
                              {f.domain}
                            </span>
                            <span className="text-[11px] text-emerald-800 font-semibold flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Verified by {f.reviewer || 'Dr. Mehta'}
                            </span>
                          </div>
                          <div className="text-sm font-bold text-[#153E35]">{f.title}</div>
                          <p className="text-xs text-[#61756F] leading-relaxed">{f.detail}</p>
                          <div className="pt-2 border-t border-[#DEEEE7] text-xs font-medium text-[#153E35] flex items-center justify-between">
                            <span>Recommended action: {f.suggestedAction}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Device Sync & Privacy Controls Preview */}
                  <div className="pt-3 border-t border-[#E3ECE6] space-y-3">
                    <div className="text-xs font-mono uppercase font-bold text-[#61756F]">Connected Devices</div>
                    <div className="grid grid-cols-2 gap-2">
                      {devices.map(d => (
                        <button
                          key={d.id}
                          onClick={() => toggleDevice(d.id)}
                          className={`p-2.5 rounded-lg border text-left flex items-center justify-between transition-all ${
                            d.connected ? 'bg-[#DEEEE7]/40 border-emerald-300' : 'bg-slate-50 border-slate-200 opacity-60'
                          }`}
                        >
                          <div>
                            <div className="text-xs font-semibold text-[#13231F]">{d.name}</div>
                            <div className="text-[10px] text-[#61756F]">{d.syncTime}</div>
                          </div>
                          <span className={`w-2 h-2 rounded-full ${d.connected ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Granular Consent & Privacy Permissions */}
              <div className="p-5 rounded-2xl bg-white border border-[#E3ECE6] shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#13231F]">Your Data, Your Control (Privacy Permissions)</h3>
                    <p className="text-xs text-[#61756F]">Granular switches: turn access on or off for any specialist anytime.</p>
                  </div>
                  <Lock className="w-5 h-5 text-emerald-700" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {permissions.map(p => (
                    <label
                      key={p.id}
                      onClick={() => togglePermission(p.id)}
                      className="p-3 rounded-xl border border-[#E3ECE6] hover:bg-[#F9FBFA] flex items-center justify-between gap-3 cursor-pointer"
                    >
                      <span className="text-xs text-[#13231F] font-medium leading-snug">{p.label}</span>
                      <input
                        type="checkbox"
                        checked={p.enabled}
                        readOnly
                        className="w-4 h-4 accent-[#153E35] rounded"
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* 2. CLINICIAN COCKPIT (Dr. Anjali Mehta, MD)                   */}
          {/* ============================================================== */}
          {activeRole === 'clinician' && (
            <div className="space-y-6">
              {/* Clinician Header Bar */}
              <div className="p-6 rounded-2xl bg-[#153E35] text-white border border-[#0D2923] shadow-md flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white text-xl">
                    <Stethoscope className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="font-serif text-2xl font-bold">Dr. Anjali Mehta, MD</h2>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-white/20 text-[#DEEEE7]">
                        Endocrinologist
                      </span>
                    </div>
                    <p className="text-xs text-[#DEEEE7]/80 mt-0.5">
                      Clinical Oversight Cockpit • 128 Assigned Members • 4 Consults Scheduled Today
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-white/10 border border-white/10 text-right">
                    <div className="text-[10px] font-mono uppercase text-[#DEEEE7]">Pending AI Drafts</div>
                    <div className="text-xl font-bold text-white">
                      {findings.filter(f => f.status === 'pending').length} Drafts Awaiting You
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Clinical Findings Review Queue */}
              <div className="p-6 rounded-2xl bg-white border border-[#E3ECE6] shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#13231F]">AI-Generated Drafts Review Queue</h3>
                    <p className="text-xs text-[#61756F]">
                      Medical Safety Gate: Members never receive AI findings until you click <b>Approve</b>.
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                    {findings.filter(f => f.status === 'pending').length} Actions Required
                  </span>
                </div>

                <div className="space-y-4">
                  {findings.map(f => {
                    const isPending = f.status === 'pending';
                    const isApproved = f.status === 'approved';
                    return (
                      <div
                        key={f.id}
                        className={`p-5 rounded-2xl border transition-all ${
                          isPending
                            ? 'bg-[#FCFDFB] border-amber-200/80 shadow-xs'
                            : isApproved
                            ? 'bg-[#F4F9F6] border-emerald-200'
                            : 'bg-rose-50/40 border-rose-200'
                        }`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#153E35]">{f.memberName} ({f.memberId})</span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                              {f.domain}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-800">
                              {f.confidence}
                            </span>
                          </div>
                          <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full ${
                            isPending ? 'bg-amber-100 text-amber-800' : isApproved ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                          }`}>
                            {f.status.toUpperCase()}
                          </span>
                        </div>

                        <h4 className="text-base font-bold text-[#13231F]">{f.title}</h4>
                        <p className="text-xs text-[#61756F] mt-1 leading-relaxed">{f.detail}</p>
                        
                        <div className="mt-3 p-3 rounded-xl bg-white/80 border border-[#E3ECE6] text-xs text-[#13231F] flex items-center justify-between">
                          <span><b>Suggested Action:</b> {f.suggestedAction}</span>
                          <span className="text-[10px] text-slate-400">{f.createdAt}</span>
                        </div>

                        {/* Review Actions */}
                        {isPending && (
                          <div className="flex items-center justify-end gap-3 pt-3">
                            <button
                              onClick={() => handleReviewFinding(f.id, 'return')}
                              className="px-4 py-2 rounded-xl text-xs font-semibold border border-rose-300 text-rose-700 hover:bg-rose-50 transition-colors"
                            >
                              Return for Changes
                            </button>
                            <button
                              onClick={() => handleReviewFinding(f.id, 'approve')}
                              className="px-5 py-2 rounded-xl text-xs font-semibold bg-[#153E35] text-white hover:bg-[#1E5649] transition-all shadow-sm flex items-center gap-1.5"
                            >
                              <Check className="w-3.5 h-3.5" />
                              <span>Approve &amp; Release to Member</span>
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Patients Roster & Clinical Note Draft */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7 p-5 rounded-2xl bg-white border border-[#E3ECE6] shadow-xs space-y-3">
                  <h3 className="font-serif text-lg font-bold text-[#13231F]">Assigned Members Monitor</h3>
                  <div className="divide-y divide-[#E3ECE6]">
                    <div className="py-3 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-[#13231F]">Priya Sharma (M-1042)</div>
                        <div className="text-xs text-[#61756F]">32 yrs • Metabolic Optimization • 94% compliance</div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-amber-50 text-amber-800 border border-amber-200">
                        Elevated HR Trend
                      </span>
                    </div>
                    <div className="py-3 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-[#13231F]">Aarav Patel (M-2210)</div>
                        <div className="text-xs text-[#61756F]">41 yrs • Sleep &amp; Blood Pressure • 82% compliance</div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-50 text-emerald-800">
                        Stable
                      </span>
                    </div>
                    <div className="py-3 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-[#13231F]">Neha Verma (M-3091)</div>
                        <div className="text-xs text-[#61756F]">29 yrs • Nutritional Therapy • 88% compliance</div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-50 text-emerald-800">
                        Stable
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 p-5 rounded-2xl bg-white border border-[#E3ECE6] shadow-xs space-y-3">
                  <h3 className="font-serif text-lg font-bold text-[#13231F]">Draft Consultation Note</h3>
                  <textarea
                    value={clinicalNote}
                    onChange={(e) => setClinicalNote(e.target.value)}
                    placeholder="Enter clinical notes for member M-1042 following telehealth consult..."
                    className="w-full h-28 p-3 rounded-xl border border-[#E3ECE6] text-xs focus:outline-none focus:border-[#153E35] resize-none"
                  />
                  <button
                    onClick={() => {
                      if (!clinicalNote) return;
                      showToast('Clinical note saved and added to member medical record');
                      addAudit('Dr. Anjali Mehta, MD', 'Documented consultation note for member M-1042');
                      setClinicalNote('');
                    }}
                    className="w-full py-2.5 rounded-xl bg-[#153E35] text-white text-xs font-semibold hover:bg-[#1E5649] transition-all"
                  >
                    Save &amp; Attach to Chart
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* 3. NUTRITIONIST HUB (Nila Sen, MS RD)                          */}
          {/* ============================================================== */}
          {activeRole === 'nutritionist' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white border border-[#E3ECE6] shadow-sm flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <Utensils className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-[#13231F]">Nila Sen, MS RD</h2>
                    <p className="text-xs text-[#61756F]">
                      Lead Clinical Nutritionist • Supporting 36 Members with Targeted Dietary Intelligence
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-[#DEEEE7]/40 border border-emerald-200">
                    <span className="text-[#61756F]">Macro Target:</span> <b className="text-[#153E35]">110g Protein / 1850 kcal</b>
                  </div>
                </div>
              </div>

              {/* Food Logs & Meal Entry Form */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7 p-5 rounded-2xl bg-white border border-[#E3ECE6] shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-bold text-[#13231F]">Member Meal Logs (Today)</h3>
                    <span className="text-xs font-mono text-[#61756F]">{foodLogs.length} Meals Logged</span>
                  </div>

                  <div className="space-y-3">
                    {foodLogs.map(fl => (
                      <div key={fl.id} className="p-4 rounded-xl border border-[#E3ECE6] bg-[#FAFBF9] flex items-center justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#153E35]">{fl.member}</span>
                            <span className="text-[10px] text-[#61756F]">{fl.time}</span>
                          </div>
                          <div className="text-sm font-semibold text-[#13231F] mt-0.5">{fl.meal}</div>
                          <div className="text-xs text-[#61756F] mt-1">
                            P: {fl.protein} • C: {fl.carbs} • F: {fl.fats}
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="text-base font-serif font-bold text-[#153E35]">{fl.kcal} kcal</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 p-5 rounded-2xl bg-white border border-[#E3ECE6] shadow-xs space-y-4">
                  <h3 className="font-serif text-lg font-bold text-[#13231F]">Log Meal for Member</h3>
                  <form onSubmit={handleAddMeal} className="space-y-3">
                    <div>
                      <label className="text-xs font-semibold text-[#61756F]">Meal Description</label>
                      <input
                        type="text"
                        placeholder="e.g. Greek yogurt with walnuts and honey"
                        value={newMeal}
                        onChange={(e) => setNewMeal(e.target.value)}
                        className="w-full mt-1 p-2.5 rounded-xl border border-[#E3ECE6] text-xs focus:outline-none focus:border-[#153E35]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#61756F]">Calories (kcal)</label>
                      <input
                        type="number"
                        placeholder="e.g. 320"
                        value={newKcal}
                        onChange={(e) => setNewKcal(e.target.value)}
                        className="w-full mt-1 p-2.5 rounded-xl border border-[#E3ECE6] text-xs focus:outline-none focus:border-[#153E35]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl bg-[#153E35] text-white text-xs font-semibold hover:bg-[#1E5649] transition-all"
                    >
                      Log Meal &amp; Sync with Member
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* 4. COACH HUB (Kabir Coach, CSCS)                              */}
          {/* ============================================================== */}
          {activeRole === 'coach' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white border border-[#E3ECE6] shadow-sm flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center">
                    <Dumbbell className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-[#13231F]">Kabir Coach, CSCS</h2>
                    <p className="text-xs text-[#61756F]">
                      Head of Movement &amp; Strength • Connected Smart Dumbbell Telemetry Stream
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-mono font-semibold text-emerald-800">
                    Live BLE Stream: DB-01 Paired
                  </span>
                </div>
              </div>

              {/* Smart Dumbbell Telemetry HUD */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#153E35] to-[#1E5649] text-white space-y-6 shadow-md">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#DEEEE7] uppercase">
                      EQUIPMENT / NIVA DB-01
                    </span>
                    <h3 className="font-serif text-2xl font-bold">Smart Dumbbell Live Rep Telemetry</h3>
                  </div>

                  <button
                    onClick={handleRepInc}
                    className="px-5 py-2.5 rounded-full bg-white text-[#153E35] font-bold text-xs hover:bg-[#DEEEE7] transition-all flex items-center gap-2 shadow-sm"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Simulate 1 Rep</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-white/10 border border-white/15">
                    <span className="text-[10px] font-mono uppercase text-[#DEEEE7]">Load</span>
                    <div className="text-2xl font-serif font-bold mt-1">{dumbbellLoad} kg</div>
                    <span className="text-[10px] text-white/70">Strain Gauge Active</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/10 border border-white/15">
                    <span className="text-[10px] font-mono uppercase text-[#DEEEE7]">Reps (Set 3)</span>
                    <div className="text-2xl font-serif font-bold mt-1">{dumbbellReps} / 12</div>
                    <span className="text-[10px] text-emerald-300">Target on track</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/10 border border-white/15">
                    <span className="text-[10px] font-mono uppercase text-[#DEEEE7]">Range of Motion</span>
                    <div className="text-2xl font-serif font-bold mt-1">{romAngle}°</div>
                    <span className="text-[10px] text-white/70">Full extension reached</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/10 border border-white/15">
                    <span className="text-[10px] font-mono uppercase text-[#DEEEE7]">Form Accuracy</span>
                    <div className="text-2xl font-serif font-bold mt-1">96%</div>
                    <span className="text-[10px] text-emerald-300">Optimal tempo</span>
                  </div>
                </div>

                {/* Range of Motion Angle Slider */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#DEEEE7]">Interactive Joint Angle Simulator:</span>
                    <span>{romAngle}° Angle</span>
                  </div>
                  <input
                    type="range"
                    min="45"
                    max="145"
                    value={romAngle}
                    onChange={(e) => setRomAngle(Number(e.target.value))}
                    className="w-full accent-white"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* 5. ADMIN & GOVERNANCE (Siddharth Rao)                         */}
          {/* ============================================================== */}
          {activeRole === 'admin' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white border border-[#E3ECE6] shadow-sm flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
                    <Shield className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-[#13231F]">Platform Administration &amp; Governance</h2>
                    <p className="text-xs text-[#61756F]">
                      Role-Based Access Control (RBAC) • Audit Trail Logging • Compliance Monitoring
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    DPDP Act &amp; HIPAA Sandbox Active
                  </span>
                </div>
              </div>

              {/* RBAC User Role Management */}
              <div className="p-6 rounded-2xl bg-white border border-[#E3ECE6] shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg font-bold text-[#13231F]">Registered Accounts &amp; Active Roles</h3>
                  <span className="text-xs font-mono text-[#61756F]">{adminUsers.length} Users Enrolled</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-[#E3ECE6] text-[#61756F] font-mono">
                        <th className="py-2.5">User</th>
                        <th className="py-2.5">Email</th>
                        <th className="py-2.5">Current Role</th>
                        <th className="py-2.5 text-right">Reassign Role</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E3ECE6]">
                      {adminUsers.map(u => (
                        <tr key={u.id} className="py-3">
                          <td className="py-3 font-semibold text-[#13231F]">{u.name}</td>
                          <td className="py-3 text-[#61756F] font-mono">{u.email}</td>
                          <td className="py-3">
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-[#DEEEE7] text-[#153E35]">
                              {u.role}
                            </span>
                          </td>
                          <td className="py-3 text-right">
                            <select
                              value={u.role}
                              onChange={(e) => handleRoleChange(u.id, e.target.value)}
                              className="p-1.5 rounded-lg border border-[#E3ECE6] text-xs font-semibold text-[#13231F] bg-white focus:outline-none"
                            >
                              <option value="member">Member</option>
                              <option value="clinician">Clinician</option>
                              <option value="nutritionist">Nutritionist</option>
                              <option value="coach">Coach</option>
                              <option value="admin">Admin</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Live Real-time Audit Trail */}
              <div className="p-6 rounded-2xl bg-white border border-[#E3ECE6] shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg font-bold text-[#13231F]">Real-Time Security &amp; Clinical Audit Trail</h3>
                  <button
                    onClick={() => showToast('Audit logs synchronized with blockchain ledger')}
                    className="text-xs font-mono text-emerald-700 hover:underline"
                  >
                    Export Log
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-[11px] space-y-2 max-h-48 overflow-y-auto">
                  {auditLog.map(a => (
                    <div key={a.id} className="flex items-start gap-2">
                      <span className="text-emerald-400">[{a.time}]</span>
                      <span className="text-teal-300 font-bold">{a.user}:</span>
                      <span>{a.msg}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Real-time Toast Feedback Notification */}
        {toastMsg && (
          <div className="absolute bottom-6 right-6 z-50 bg-[#153E35] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-semibold animate-rise border border-white/20">
            <Sparkles className="w-4 h-4 text-emerald-300" />
            <span>{toastMsg}</span>
          </div>
        )}

      </div>
    </div>
  );
}
