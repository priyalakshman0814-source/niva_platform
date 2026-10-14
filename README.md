# NIVA — Health Intelligence & Connected Care Ecosystem

> A realistic, light-luxury health intelligence platform built with **React 18**, **Tailwind CSS**, and a **Native Node.js REST API engine**. Designed around continuous wearable signals, medical safety gates, and the multi-sided collaborative care model (the "Uber for Healthcare").

---

## 💎 The Luxury Light Aesthetic Redesign

1. **Light Luxury Color Palette**:
   - **Canvas Background**: Warm Alabaster & Pearlescent Paper (`#FBFBF9` / `#F4F7F4`)
   - **Signature Accent**: Deep British Racing Velvet Forest (`#153E35` / `#0D2923`)
   - **Micro-Surfaces & Badges**: Soft Celadon Sage (`#DEEEE7` / `#C2E2D3`)
   - **Metallic Details**: Subtle Champagne Gold & Warm Sand (`#C5A880` / `#ECE7DD`)
   - **Typography**: Slate Velvet Ink (`#13231F` / `#61756F`)

2. **Editorial Luxury Typography**:
   - Primary Headings: **Cormorant Garamond** serif (*"Look closer. Live well."*, *"Care that feels considered."*)
   - Precision Telemetry & Labels: **Plus Jakarta Sans**, **Manrope**, and **JetBrains Mono**
   - High-contrast glassmorphism with delicate 1px borders (`border-[#E3ECE6]`) and diffusion drop-shadows.

3. **High-Resolution Realistic Imagery**:
   - High-fidelity lifestyle and hardware photography:
     - `public/assets/care-watch.webp` / `public/img/hero.jpg` (Connected wearable routine in daylight)
     - `public/assets/care-consult.webp` / `public/img/care.jpg` (Reassuring telehealth consultation)
     - `public/assets/smart-ring.webp` / `public/img/ring.jpg` (Grade-5 titanium Niva Ring)
     - `public/assets/smartwatch.webp` / `public/img/watch.jpg` (Ceramic bezel Niva Watch)
     - `public/assets/smart-dumbbell.webp` / `public/img/equipment.jpg` (Matte finish Smart Dumbbell DB-01)
     - `public/assets/wearable-in-use.webp` (Niva Band screen-free companion)

---

## 🗺️ Interactive 8-Stage Member Journey (Reference Diagram Implementation)

Directly implemented from the **Livwell / Niva Member Journey** blueprint:
1. **Discovery & Sign-up**: Eligibility check, employer code verification, transparent plans from ₹1,999/month.
2. **Consent & Privacy**: Granular opt-in switches by data source (Labs, Scans, Wearables, Nutrition, Prescriptions, Research).
3. **Onboarding & Baseline**: BLE device pairing (Niva Ring, Watch, Apple Health) and 60-day biometric calibration.
4. **First Assessment**: Results reviewed by physician first; AI draft findings validation and telehealth consult booking.
5. **Daily & Weekly Engagement**: Daily action checklist (walk, hydration, Vitamin D, meals) and weekly adherence streak.
6. **Monitoring & Alerts**: Background pattern recognition (resting HR spikes, glucose trends, urgent medical guidance).
7. **Ongoing Care**: Collaborative multidisciplinary team (Endocrinologist, Dietitian, Movement Coach) and prescription refills.
8. **Account, Records & Exit**: FHIR/PDF records download, family caregiver access, right-to-data-deletion.

### Two Non-Negotiable Safety Principles
- **Principle 1**: *Members never see AI output before an authorized clinician has reviewed and released it.*
- **Principle 2**: *Every single data permission stays under granular member toggle control.*

---

## 🤝 The "Uber Model" for Healthcare Collaboration

Just as Uber seamlessly links Rider, Driver, Merchant, and Dispatch Ops in real time:
- **Member (Rider equivalent)**: The focal point of the platform. Tracks daily actions, checks vitals, controls privacy switches, and receives doctor-approved findings.
- **Clinician (Driver / Specialist equivalent)**: Dr. Anjali Mehta, MD. Reviews AI diagnostic drafts in a 1-click review queue, conducts consults, issues prescriptions.
- **Nutritionist (Merchant equivalent)**: Nila Sen, MS RD. Evaluates member meal logs, macro adherence, and prescribes glucose-stabilizing nutrition plans.
- **Movement Coach / Trainer**: Kabir Coach, CSCS. Analyzes smart dumbbell telemetry (load 22.5kg, reps, tempo, 45°-145° ROM angle slider), and maintains workout streaks.
- **Platform Administrator (Dispatch HQ equivalent)**: Siddharth Rao. Role-Based Access Control (RBAC), credentials verification, DPDP / HIPAA compliance, and live real-time audit logs.

---

## 🛠️ Full-Stack Technology Stack

| Layer | Technology | Details |
|---|---|---|
| **Frontend Framework** | **React 18** | Functional component architecture, reactive state hooks |
| **Styling & Design Tokens** | **Tailwind CSS v3** | Light luxury tokens, glassmorphism, Cormorant Garamond serif |
| **3D Engine** | **HTML5 Canvas** | Rotatable 3D bio-holographic wellness visualization |
| **Backend REST API** | **Node.js (Native HTTP)** | Zero-dependency REST API server (`server.js`) on port 5000 |
| **Build Engine** | **Vite 5** | ESM bundler with `/api` proxy support |
| **Iconography** | **Lucide React** | Clean medical and technical SVG icons |

---

## 🚀 How to Run in the Local System

### Option 1: Full-Stack Mode (REST API + Vite Dev Server)

1. **Start the Backend REST API Server**:
   ```bash
   npm run server
   ```
   *Runs on `http://localhost:5000` with full `/api` endpoints.*

2. **In a second terminal, start the Vite Frontend**:
   ```bash
   npm run dev
   ```
   *Opens `http://localhost:3000` with hot module replacement.*

---

### Option 2: Unified Production Server (Single Command)

```bash
npm run build
npm start
```
*Builds the production client and starts the Node server on `http://localhost:5000` serving both the website and REST APIs together.*

---

### Option 3: Instant Standalone File (Zero Server Needed)

Double-click `standalone.html` to run the entire luxury experience, 8-stage journey, and collaborative workspace modal directly in any browser!
