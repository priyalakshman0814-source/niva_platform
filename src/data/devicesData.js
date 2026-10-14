export const devicesData = [
  {
    id: 'niva-ring',
    name: 'NIVA Ring',
    category: 'Bio-Smart Wearable',
    tagline: 'Precision biometrics in a weightless titanium form.',
    price: '$299',
    battery: '7-day continuous battery life',
    waterResistance: '100m water resistant (10 ATM)',
    material: 'Aerospace-Grade Grade-5 Titanium with PVD Diamond Shield',
    weight: '3.8 grams',
    description: 'Engineered for seamless 24/7 autonomic tracking. Sits flush against the finger’s palmar digital arteries for optical signal fidelity 3x clearer than wrist-based sensors.',
    metricsTracked: [
      { name: 'Sleep Architecture', value: 'Hypnogram (Deep, REM, Light, Latency)', icon: 'Moon' },
      { name: 'Heart Rate & HRV', value: 'Beat-to-beat PPG with millisecond precision', icon: 'Heart' },
      { name: 'Recovery Score', value: 'Autonomic nervous balance (0-100%)', icon: 'ShieldCheck' },
      { name: 'Daily Activity', value: 'Caloric expenditure & dynamic step pacing', icon: 'Flame' },
      { name: 'Autonomic Stress', value: 'Continuous sympathethic tone indicator', icon: 'Activity' }
    ],
    sensors: [
      {
        name: 'Quad-Wavelength PPG Sensor Array',
        description: 'Green, Red, and Infrared photoplethysmography sensors for SpO2, blood volume pulse, and nocturnal resting heart rate.'
      },
      {
        name: 'Medical-Grade Negative Temperature Coefficient (NTC) Thermistor',
        description: 'Detects micro-fluctuations in basal body temperature with 0.05°C precision to predict illness and hormonal cycle changes.'
      },
      {
        name: '3D Accelerometer & Gyroscope',
        description: 'Identifies micro-movements, sleep restlessness, and physical gait dynamics without screen distraction.'
      },
      {
        name: 'Galvanic Skin Conductance Micro-contacts',
        description: 'Measures sub-microsiemens skin sweat responses to detect emotional vs physiological stress in real time.'
      }
    ],
    liveTelemetry: {
      restingHeartRate: '54 BPM',
      hrvRmsdd: '78 ms',
      skinTempDelta: '+0.12°C',
      sleepScore: '92/100',
      signalStrength: '99.4%'
    },
    colors: ['Stealth Obsidian', 'Brushed Titanium', 'Solar Gold', 'Cyber Chrome'],
    badge: 'Flagship Bio-Ring'
  },
  {
    id: 'niva-watch',
    name: 'NIVA Watch',
    category: 'Performance Companion',
    tagline: 'Real-time athletic guidance on your wrist.',
    price: '$399',
    battery: '84-hour dual-frequency GPS endurance',
    waterResistance: '50m water resistant (5 ATM)',
    material: 'Forged Carbon Case & Sapphire Crystal Lens',
    weight: '32 grams',
    description: 'Designed for high-output athletes and everyday movers. Combines dual-frequency GNSS tracking with an ultra-bright 2000-nit micro-OLED panel that surfaces proactive coaching during workouts.',
    metricsTracked: [
      { name: 'Continuous Heart Rate', value: '25Hz sampling rate with zone alerts', icon: 'HeartPulse' },
      { name: 'Workout Biomechanics', value: 'Cadence, ground contact time, power in watts', icon: 'Zap' },
      { name: 'Steps & Distance', value: 'Sub-meter accurate dual-frequency GNSS', icon: 'Navigation' },
      { name: 'Active Calories', value: 'Metabolic equivalent (MET) metabolic modeling', icon: 'Flame' },
      { name: 'Dual-Band GPS', value: 'L1 + L5 satellite reception in dense urban canyons', icon: 'Compass' },
      { name: 'Live Recovery Load', value: 'Cardiovascular strain index during execution', icon: 'TrendingUp' }
    ],
    sensors: [
      {
        name: '8-Channel Multi-Spectral Optical Array',
        description: 'Compensates for skin tone, sweat, and intense wrist movement during sprint intervals and heavy kettlebell swings.'
      },
      {
        name: 'Dual-Frequency L1/L5 GPS + Galileo + GLONASS',
        description: 'Pinpoints pace and elevation change with centimeter-level precision even under dense forest canopy.'
      },
      {
        name: 'Barometric Altimeter & Ambient Barometer',
        description: 'Tracks vertical gain, atmospheric pressure changes, and storm warnings for alpine excursions.'
      },
      {
        name: 'Single-Lead Titanium ECG Electrodes',
        description: 'Integrated into bezel and case back for 30-second sinus rhythm validation and AFib screening.'
      }
    ],
    liveTelemetry: {
      currentHeartRate: '138 BPM',
      currentZone: 'Zone 3 (Aerobic)',
      strideLength: '1.24m',
      lactateThresholdEst: '162 BPM',
      signalStrength: '100%'
    },
    colors: ['Matte Black', 'Glacier Silver', 'Deep Navy'],
    badge: 'Pro Endurance'
  },
  {
    id: 'niva-band',
    name: 'NIVA Band',
    category: 'Pure Strain & Recovery',
    tagline: 'Zero screens. Zero distractions. 100% biological truth.',
    price: '$199',
    battery: '14-day continuous wear battery',
    waterResistance: 'IP68 waterproof & dustproof',
    material: 'Hydrophobic Woven Antimicrobial Micro-Filament',
    weight: '16 grams',
    description: 'For those who want pure bio-intelligence without notification fatigue. Wear it on the wrist, bicep, or compression sleeve. It continuously records autonomic load, strain, and restorative sleep.',
    metricsTracked: [
      { name: 'Cumulative Strain', value: 'Logarithmic strain score (0.0 to 21.0)', icon: 'Gauge' },
      { name: 'Heart Rate & Variability', value: 'Constant nocturnal and daytime capture', icon: 'Heart' },
      { name: 'Deep & REM Sleep', value: 'Disturbance-free sleep staging algorithm', icon: 'Moon' },
      { name: 'Daily Movement Density', value: 'Sedentary time vs active micro-bouts', icon: 'Footprints' }
    ],
    sensors: [
      {
        name: 'Ultra-Low-Power Photoplethysmography Sensor',
        description: 'Consumes 80% less power while delivering 100Hz raw waveform capture for medical-grade pulse contour analysis.'
      },
      {
        name: 'Precision Skin Temperature Sensor',
        description: 'Sub-millikelvin sensor tracks circadian temperature cycle for optimal chronotype alignment.'
      },
      {
        name: '6-Axis IMU with Adaptive Filtering',
        description: 'Distinguishes between typing, cycling, swimming, and heavy resistance training automatically.'
      }
    ],
    liveTelemetry: {
      strainToday: '14.2 / 21.0',
      sleepNeed: '8h 15m',
      currentHrv: '84 ms',
      ambientNoiseLevel: 'Low',
      signalStrength: '98.8%'
    },
    colors: ['Onyx Mesh', 'Chalk White', 'Military Olive'],
    badge: 'Minimalist Bio-Tracker'
  },
  {
    id: 'niva-equipment',
    name: 'NIVA Smart Equipment',
    category: 'Kinetic Neural Resistance',
    tagline: 'Connected gym gear that measures velocity, force, and form.',
    price: '$899+',
    battery: 'Hardwired / 45-day battery on Smart Barbell Pods',
    waterResistance: 'Sweat-proof industrial seal',
    material: 'Aircraft Billet Aluminum & Electromagnetic Load Core',
    weight: 'Modular',
    description: 'Turn your workout into an intelligent biomechanical lab. Embedded load cells and optical velocity encoders track bar path, eccentric tempo, concentric acceleration, and form breakdown before you fail.',
    metricsTracked: [
      { name: 'Weight Lifted', value: 'Dynamic electromagnetic resistance ±0.5 lbs', icon: 'Dumbbell' },
      { name: 'Repetitions & Velocity', value: 'Mean concentric velocity (m/s) per rep', icon: 'Timer' },
      { name: 'Sets & Rest Density', value: 'Automated set detection & autonomic rest timer', icon: 'Layers' },
      { name: 'Exercise Recognition', value: 'Auto-detects 140+ compound and isolation lifts', icon: 'Cpu' },
      { name: 'Biomechanical Form', value: 'Asymmetry & bar-path tilt analysis in real-time', icon: 'Crosshair' },
      { name: 'Progress Overload', value: 'Estimated 1RM recalculation after every set', icon: 'TrendingUp' }
    ],
    sensors: [
      {
        name: 'Dual Strain-Gauge Load Cell Matrix',
        description: 'Measures continuous force vectors and left/right bilateral power distribution to eliminate asymmetries.'
      },
      {
        name: 'Laser Optical Velocity Encoders (1000 Hz)',
        description: 'Calculates instantaneous bar speed to gauge neuromuscular fatigue and suggest auto-regulated weight adjustments.'
      },
      {
        name: 'Spatial Bar-Path Accelerometer Pods',
        description: 'Maps the exact 3D trajectory of your squat, bench, or clean, flagging knee cave or spinal rounding instantly.'
      }
    ],
    liveTelemetry: {
      lastExercise: 'Barbell Back Squat',
      currentWeight: '120 kg (264 lbs)',
      repsCompleted: '8 / 8 (Clean Form)',
      meanVelocity: '0.64 m/s (Explosive)',
      bilateralBalance: '50.4% L / 49.6% R'
    },
    colors: ['Industrial Matte Gunmetal', 'Cyber Lime Accent'],
    badge: 'Neural Connected Strength'
  }
];
