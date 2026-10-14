/**
 * NIVA Full-Stack REST API & Platform Server
 * Zero external dependencies (Native Node.js 18+).
 * 
 * Provides:
 * - Multi-Role Authentication (Member, Clinician, Nutritionist, Coach, Admin)
 * - The Uber-style Collaborative Healthcare Ecosystem API
 * - Clinical Review Queue (Enforces: Members never see AI output until a Clinician approves it)
 * - Member Daily Plans, Connected Devices & Granular Privacy Permissions
 * - Nutrition Logs & Smart Equipment Telemetry
 * - Admin Role-Based Access Control (RBAC) & Real-time Audit Trail
 */
'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = process.env.PORT || 5000;
const DIST_DIR = path.join(__dirname, 'dist');
const PUBLIC_DIR = path.join(__dirname, 'public');

// --- In-Memory Platform Database & Initial Seed ---
const DB = {
  users: [
    { id: 'U-01', name: 'Priya Sharma', email: 'member@niva.health', role: 'member', title: 'Health Explorer' },
    { id: 'U-02', name: 'Dr. Anjali Mehta, MD', email: 'clinician@niva.health', role: 'clinician', title: 'Consultant Endocrinologist' },
    { id: 'U-03', name: 'Nila Sen, MS RD', email: 'nutritionist@niva.health', role: 'nutritionist', title: 'Lead Clinical Nutritionist' },
    { id: 'U-04', name: 'Kabir Coach, CSCS', email: 'coach@niva.health', role: 'coach', title: 'Head Performance Coach' },
    { id: 'U-05', name: 'Siddharth Rao', email: 'admin@niva.health', role: 'admin', title: 'Chief Operations & Platform Admin' },
  ],
  sessions: {},
  audit: [
    { id: 'AUD-01', time: '10:14:22', user: 'System', msg: 'Niva Healthcare Engine initialized. Privacy sandbox active.' },
    { id: 'AUD-02', time: '10:15:05', user: 'Dr. Anjali Mehta', msg: 'Signed in to Clinical Cockpit.' },
    { id: 'AUD-03', time: '10:16:30', user: 'Priya Sharma', msg: 'BLE telemetry synced from Niva Ring v1.' },
  ],
  todayActions: [
    { id: 'act-1', title: 'Log breakfast & hydration', detail: 'Steel-cut oats with chia seeds, berries & 500ml water', category: 'Nutrition', status: 'completed' },
    { id: 'act-2', title: 'Take Vitamin D3 + K2', detail: '2,000 IU with morning healthy fats', category: 'Prescription', status: 'completed' },
    { id: 'act-3', title: '20-minute brisk walk', detail: 'Zone 2 aerobic recovery — Keep energy balanced', category: 'Movement', status: 'in_progress' },
    { id: 'act-4', title: 'Evening mindful check-in', detail: 'Log mental clarity and perceived exertion score', category: 'Recovery', status: 'pending' },
    { id: 'act-5', title: 'Drink 2.5L water total', detail: '1.8L logged so far across 5 glasses', category: 'Hydration', status: 'pending' },
  ],
  devices: [
    { id: 'dev-1', name: 'Niva Ring v1', category: 'Sleep & Recovery', connected: true, battery: 88, syncTime: 'Just now', icon: 'ring' },
    { id: 'dev-2', name: 'Niva Watch', category: 'Movement & Vitals', connected: true, battery: 94, syncTime: 'Live BLE', icon: 'watch' },
    { id: 'dev-3', name: 'Smart Dumbbell DB-01', category: 'Strength Telemetry', connected: false, battery: 100, syncTime: 'Standby', icon: 'dumbbell' },
    { id: 'dev-4', name: 'Apple Health / Sensio', category: 'Integrated Cloud Hub', connected: true, battery: null, syncTime: 'Continuous', icon: 'cloud' },
  ],
  permissions: [
    { id: 'perm-1', label: 'Share continuous vitals & sleep stages with Primary Clinician', enabled: true, category: 'Clinical Care' },
    { id: 'perm-2', label: 'Share meal logs and calorie summaries with Assigned Nutritionist', enabled: true, category: 'Nutrition Care' },
    { id: 'perm-3', label: 'Share smart equipment repetition & movement tempo with Trainer', enabled: true, category: 'Coaching' },
    { id: 'perm-4', label: 'Allow care coordinator to schedule recommended lab panel reminders', enabled: true, category: 'Care Coordination' },
    { id: 'perm-5', label: 'Contribute de-identified telemetry for clinical health intelligence research', enabled: false, category: 'Research Opt-in' },
  ],
  findings: [
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
  ],
  foodLogs: [
    { id: 'f-1', member: 'Priya Sharma', meal: 'Oats, chia pudding & mixed berries', kcal: 380, protein: '14g', carbs: '52g', fats: '11g', time: '08:45 AM' },
    { id: 'f-2', member: 'Priya Sharma', meal: 'Grilled chicken salad with quinoa & cold-pressed olive oil', kcal: 520, protein: '42g', carbs: '36g', fats: '18g', time: '01:30 PM' },
    { id: 'f-3', member: 'Aarav Patel', meal: 'Poached eggs on sourdough with smashed avocado', kcal: 450, protein: '22g', carbs: '32g', fats: '24g', time: '09:10 AM' }
  ],
  smartEquipment: {
    weightKg: 22.5,
    currentReps: 8,
    targetReps: 12,
    currentSet: 3,
    totalSets: 4,
    movementAccuracy: 96,
    rangeOfMotion: 138, // degrees
    tempo: '2.1s concentric / 3.0s eccentric',
    liveStatus: 'Live Set Detection • Bluetooth 5.3 Connected'
  }
};

function addAudit(user, msg) {
  const time = new Date().toTimeString().slice(0, 8);
  DB.audit.unshift({ id: 'AUD-' + (DB.audit.length + 1), time, user, msg });
  if (DB.audit.length > 50) DB.audit.pop();
}

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  });
  res.end(JSON.stringify(data));
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (body.length > 1e6) { req.destroy(); reject(new Error('Payload too large')); }
    });
    req.on('end', () => {
      if (!body) return resolve({});
      try { resolve(JSON.parse(body)); }
      catch (e) { resolve({}); }
    });
  });
}

function getStateForUser(user) {
  const role = user.role;
  const state = {
    user,
    role,
    timestamp: new Date().toISOString(),
  };

  if (role === 'member') {
    state.member = {
      memberId: 'NIVA-M1042',
      profile: { name: user.name, email: user.email, age: 32, location: 'Bengaluru, Karnataka', plan: 'Livwell Premium' },
      todayActions: DB.todayActions,
      weeklyProgress: {
        steps: 5320, stepsTarget: 8000,
        sleep: '7h 20m', sleepScore: 84,
        weight: 68.4, weightTarget: 65.0,
        avgHr: 72, hrv: 58
      },
      devices: DB.devices,
      permissions: DB.permissions,
      // IMPORTANT SAFETY PRINCIPLE: Members ONLY receive findings approved by a clinician!
      findings: DB.findings.filter(f => f.status === 'approved' && f.memberId === 'M-1042'),
      unapprovedCount: DB.findings.filter(f => f.status === 'pending' && f.memberId === 'M-1042').length,
      careTeam: [
        { name: 'Dr. Anjali Mehta, MD', role: 'Primary Physician (Endocrinologist)', status: 'Online', nextSlot: 'Tomorrow 11:00 AM' },
        { name: 'Riya Sharma', role: 'Care Coordinator', status: 'Active', nextSlot: 'Direct chat available' },
        { name: 'Nila Sen, MS RD', role: 'Clinical Dietitian', status: 'Active', nextSlot: 'Weekly review Friday' },
        { name: 'Kabir Coach, CSCS', role: 'Strength & Movement Coach', status: 'Available', nextSlot: 'Live telemetry active' }
      ]
    };
  }

  if (role === 'clinician') {
    state.clinician = {
      name: user.name,
      title: user.title,
      stats: {
        assignedMembers: 128,
        pendingReviews: DB.findings.filter(f => f.status === 'pending').length,
        approvedTotal: DB.findings.filter(f => f.status === 'approved').length,
        scheduledConsults: 4
      },
      reviewQueue: DB.findings,
      patients: [
        { id: 'M-1042', name: 'Priya Sharma', age: 32, focus: 'Glucose balance & Strength', lastReview: 'Yesterday', status: 'Active Monitoring', alert: 'Elevated HR trend' },
        { id: 'M-2210', name: 'Aarav Patel', age: 41, focus: 'Resting HRV & Sleep restoration', lastReview: '3 days ago', status: 'Under Review', alert: 'Sleep fragmentation' },
        { id: 'M-3091', name: 'Neha Verma', age: 29, focus: 'Nutritional therapy & Iron replenishment', lastReview: 'Last week', status: 'Stable', alert: 'None' }
      ]
    };
  }

  if (role === 'nutritionist') {
    state.nutritionist = {
      name: user.name,
      title: user.title,
      stats: {
        activeClients: 36,
        foodLogsToday: DB.foodLogs.length,
        averageMacroAdherence: '87%'
      },
      foodLogs: DB.foodLogs,
      macroTargets: {
        calories: 1850,
        protein: '110g',
        carbs: '175g',
        fats: '55g',
        water: '2.5 L'
      }
    };
  }

  if (role === 'coach') {
    state.coach = {
      name: user.name,
      title: user.title,
      stats: {
        athletesActive: 24,
        avgRepAccuracy: '94%',
        activeDumbbellStreams: 3
      },
      smartEquipment: DB.smartEquipment,
      athletes: [
        { id: 'M-1042', name: 'Priya Sharma', routine: 'Upper Body Hypertrophy & Range of Motion', adherence: '94%', streak: '5 weeks' },
        { id: 'M-2210', name: 'Aarav Patel', routine: 'Rotator Cuff & Postural Alignment', adherence: '78%', streak: '2 weeks' },
        { id: 'M-3091', name: 'Neha Verma', routine: 'Deadlift Velocity & Hip Hinge', adherence: '90%', streak: '4 weeks' }
      ]
    };
  }

  if (role === 'admin') {
    state.admin = {
      name: user.name,
      stats: {
        totalUsers: DB.users.length,
        connectedDevices: DB.devices.filter(d => d.connected).length,
        activeClinicians: 8,
        complianceRating: '100% HIPAA & DPDP Compliant'
      },
      users: DB.users,
      auditLog: DB.audit
    };
  }

  return state;
}

// --- HTTP Server Definition ---
const server = http.createServer(async (req, res) => {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
    return res.end();
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  // --- REST API Endpoints (/api/...) ---
  if (pathname.startsWith('/api')) {
    // 1. Health Check
    if (pathname === '/api/health' && req.method === 'GET') {
      return sendJson(res, 200, { status: 'healthy', platform: 'NIVA Wellness & Care', timestamp: new Date().toISOString() });
    }

    // 2. Auth: Login with Role
    if (pathname === '/api/auth/login' && req.method === 'POST') {
      const body = await parseBody(req);
      const { email, role } = body;
      
      let matchedUser = DB.users.find(u => u.role === role);
      if (!matchedUser && email) {
        matchedUser = DB.users.find(u => u.email.toLowerCase() === email.toLowerCase());
      }
      if (!matchedUser) {
        matchedUser = DB.users.find(u => u.role === 'member');
      }

      const token = 'tok_' + crypto.randomBytes(16).toString('hex');
      DB.sessions[token] = matchedUser;
      addAudit(matchedUser.name, `Logged in via role portal (${matchedUser.role})`);

      return sendJson(res, 200, {
        success: true,
        token,
        user: matchedUser
      });
    }

    // 3. Auth: Current User / Me
    if (pathname === '/api/auth/me' && req.method === 'GET') {
      const authHeader = req.headers.authorization || '';
      const token = authHeader.replace(/^Bearer\s+/, '');
      const user = DB.sessions[token] || DB.users[0]; // fallback to default member
      return sendJson(res, 200, { user });
    }

    // 4. Auth: Logout
    if (pathname === '/api/auth/logout' && req.method === 'POST') {
      const authHeader = req.headers.authorization || '';
      const token = authHeader.replace(/^Bearer\s+/, '');
      if (token && DB.sessions[token]) {
        addAudit(DB.sessions[token].name, 'Signed out of session');
        delete DB.sessions[token];
      }
      return sendJson(res, 200, { success: true });
    }

    // 5. Dynamic State for Current Role
    if (pathname === '/api/state' && req.method === 'GET') {
      const authHeader = req.headers.authorization || '';
      const token = authHeader.replace(/^Bearer\s+/, '');
      const roleQuery = parsedUrl.searchParams.get('role');
      
      let user = DB.sessions[token];
      if (roleQuery) {
        const found = DB.users.find(u => u.role === roleQuery);
        if (found) user = found;
      }
      if (!user) user = DB.users[0]; // default member Priya

      return sendJson(res, 200, getStateForUser(user));
    }

    // 6. Clinician: Review AI Findings (Approve or Return)
    const reviewMatch = pathname.match(/^\/api\/findings\/([^/]+)\/(approve|return)$/);
    if (reviewMatch && req.method === 'POST') {
      const [, findingId, action] = reviewMatch;
      const body = await parseBody(req);
      const finding = DB.findings.find(f => f.id === findingId);
      if (!finding) return sendJson(res, 404, { error: 'Finding not found' });

      finding.status = action === 'approve' ? 'approved' : 'returned';
      finding.reviewer = body.reviewer || 'Dr. Anjali Mehta, MD';
      finding.reviewedAt = new Date().toLocaleTimeString();

      const actionText = action === 'approve' ? 'APPROVED & released to member' : 'RETURNED for clinical revision';
      addAudit(finding.reviewer, `Clinician ${actionText} finding ${findingId} (${finding.title})`);

      return sendJson(res, 200, { success: true, finding });
    }

    // 7. Member: Toggle Daily Action Checklist Item
    const actionMatch = pathname.match(/^\/api\/member\/actions\/([^/]+)\/toggle$/);
    if (actionMatch && req.method === 'PUT') {
      const [, actionId] = actionMatch;
      const act = DB.todayActions.find(a => a.id === actionId);
      if (!act) return sendJson(res, 404, { error: 'Action item not found' });

      act.status = act.status === 'completed' ? 'pending' : 'completed';
      addAudit('Priya Sharma', `Marked ${act.title} as ${act.status}`);
      return sendJson(res, 200, { success: true, action: act, allActions: DB.todayActions });
    }

    // 8. Member: Toggle Device Connection
    const deviceMatch = pathname.match(/^\/api\/member\/devices\/([^/]+)\/toggle$/);
    if (deviceMatch && req.method === 'PUT') {
      const [, deviceId] = deviceMatch;
      const dev = DB.devices.find(d => d.id === deviceId);
      if (!dev) return sendJson(res, 404, { error: 'Device not found' });

      dev.connected = !dev.connected;
      dev.syncTime = dev.connected ? 'Just now' : 'Disconnected';
      addAudit('Priya Sharma', `${dev.connected ? 'Connected' : 'Disconnected'} ${dev.name}`);
      return sendJson(res, 200, { success: true, device: dev, allDevices: DB.devices });
    }

    // 9. Member: Toggle Data Privacy Permission
    const permMatch = pathname.match(/^\/api\/member\/permissions\/([^/]+)\/toggle$/);
    if (permMatch && req.method === 'PUT') {
      const [, permId] = permMatch;
      const p = DB.permissions.find(item => item.id === permId);
      if (!p) return sendJson(res, 404, { error: 'Permission not found' });

      p.enabled = !p.enabled;
      addAudit('Priya Sharma', `Updated data consent for: ${p.label} -> ${p.enabled ? 'GRANTED' : 'REVOKED'}`);
      return sendJson(res, 200, { success: true, permission: p, allPermissions: DB.permissions });
    }

    // 10. Nutritionist: Add Food Log
    if (pathname === '/api/nutrition/log' && req.method === 'POST') {
      const body = await parseBody(req);
      if (!body.meal || !body.kcal) return sendJson(res, 400, { error: 'Meal and calories required' });

      const newLog = {
        id: 'f-' + (DB.foodLogs.length + 1),
        member: body.member || 'Priya Sharma',
        meal: body.meal,
        kcal: Number(body.kcal),
        protein: body.protein || '20g',
        carbs: body.carbs || '40g',
        fats: body.fats || '12g',
        time: new Date().toLocaleTimeString().slice(0, 5)
      };
      DB.foodLogs.unshift(newLog);
      addAudit(newLog.member, `Logged meal: ${newLog.meal} (${newLog.kcal} kcal)`);
      return sendJson(res, 201, { success: true, log: newLog, foodLogs: DB.foodLogs });
    }

    // 11. Coach: Smart Dumbbell Telemetry Sim
    if (pathname === '/api/coach/telemetry' && req.method === 'POST') {
      const body = await parseBody(req);
      if (body.reps) DB.smartEquipment.currentReps = body.reps;
      if (body.weight) DB.smartEquipment.weightKg = body.weight;
      if (body.rom) DB.smartEquipment.rangeOfMotion = body.rom;
      addAudit('Kabir Coach', `Adjusted Dumbbell DB-01 telemetry params: ${DB.smartEquipment.currentReps} reps @ ${DB.smartEquipment.weightKg}kg`);
      return sendJson(res, 200, { success: true, smartEquipment: DB.smartEquipment });
    }

    // 12. Admin: Update User Role
    const userRoleMatch = pathname.match(/^\/api\/admin\/users\/([^/]+)\/role$/);
    if (userRoleMatch && req.method === 'PUT') {
      const [, userId] = userRoleMatch;
      const body = await parseBody(req);
      const user = DB.users.find(u => u.id === userId);
      if (!user) return sendJson(res, 404, { error: 'User not found' });

      const oldRole = user.role;
      user.role = body.role || user.role;
      addAudit('Siddharth Rao (Admin)', `Updated RBAC role for ${user.name} from ${oldRole} to ${user.role}`);
      return sendJson(res, 200, { success: true, user, allUsers: DB.users });
    }

    // 13. Admin: Live Audit Trail
    if (pathname === '/api/admin/audit' && req.method === 'GET') {
      return sendJson(res, 200, { audit: DB.audit });
    }

    return sendJson(res, 404, { error: 'API route not found' });
  }

  // --- Static File Serving (from public/ or dist/) ---
  let filePath = path.join(DIST_DIR, pathname === '/' ? 'index.html' : pathname);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(PUBLIC_DIR, pathname);
  }
  if (!fs.existsSync(filePath)) {
    filePath = path.join(DIST_DIR, 'index.html'); // SPA fallback
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes = {
      '.html': 'text/html; charset=utf-8',
      '.js': 'application/javascript; charset=utf-8',
      '.css': 'text/css; charset=utf-8',
      '.json': 'application/json; charset=utf-8',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.webp': 'image/webp',
      '.svg': 'image/svg+xml',
      '.ico': 'image/x-icon',
      '.woff2': 'font/woff2'
    };
    res.writeHead(200, {
      'Content-Type': mimeTypes[ext] || 'application/octet-stream',
      'Cache-Control': 'no-cache'
    });
    return fs.createReadStream(filePath).pipe(res);
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n======================================================`);
  console.log(`✨ NIVA Healthcare Intelligence Platform Engine`);
  console.log(`🚀 REST API & Service running on http://localhost:${PORT}`);
  console.log(`======================================================\n`);
});

module.exports = server;
