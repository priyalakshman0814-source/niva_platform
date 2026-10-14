export const ecosystemData = {
  center: {
    title: 'NIVA AI Core',
    subtitle: 'Neural Health Intelligence Engine',
    description: 'Synthesizes high-frequency physiological signals, kinetic resistance metrics, nutritional biomarkers, and lifestyle context to calculate your true biological recovery state in real time.',
    activeStreamCount: '48 Data Streams',
    samplingFrequency: '250 Hz Peak'
  },
  domains: [
    {
      id: 'wearables',
      name: 'Wearables',
      tagline: 'Continuous Biological Capture',
      accent: '#00F5A0',
      icon: 'Watch',
      items: [
        { name: 'Smart Ring', detail: 'Palmar artery optical sensing with millisecond HRV precision' },
        { name: 'Smart Watch', detail: 'Dual-frequency GPS, 2000-nit display & live athletic guidance' },
        { name: 'Fitness Band', detail: 'Distraction-free 24/7 strain, sleep, and recovery capture' }
      ],
      aiSynergy: 'Eliminates sensor blind spots by auto-switching to the highest-fidelity device depending on whether you are sleeping, swimming, or lifting heavy.'
    },
    {
      id: 'sensors',
      name: 'Health Sensors',
      tagline: 'Clinical-Grade Vital Streams',
      accent: '#00D2FF',
      icon: 'Activity',
      items: [
        { name: 'Heart Rate', detail: 'Resting pulse, peak cardiovascular zones & pulse rate variability' },
        { name: 'Blood Pressure', detail: 'Pulse transit time cuffless vascular compliance estimation' },
        { name: 'SpO₂', detail: 'Nocturnal blood oxygenation & hypopnea desaturation detection' },
        { name: 'Temperature', detail: '0.05°C basal circadian fluctuation & immune early-warning' },
        { name: 'Autonomic Stress', detail: 'Galvanic skin response & sympathetic/parasympathetic ratio' }
      ],
      aiSynergy: 'Transforms isolated medical numbers into an autonomic nervous system index that informs your daily cognitive and physical capacity.'
    },
    {
      id: 'fitness',
      name: 'Fitness',
      tagline: 'Adaptive Kinetic Optimization',
      accent: '#A3E635',
      icon: 'Dumbbell',
      items: [
        { name: 'Exercise & Form', detail: 'Biomechanical barbell path velocity & unilateral symmetry' },
        { name: 'Cardio Zones', detail: 'Polarized zone-2 aerobic base vs VO2 max sprint intervals' },
        { name: 'Strength Work', detail: 'Dynamic eccentric loading, auto-regulated sets and reps' },
        { name: 'Steps & Density', detail: 'Movement distribution avoiding prolonged micro-sedentary periods' },
        { name: 'Calories & Burn', detail: 'True metabolic expenditure factoring basal metabolic rate' },
        { name: 'Neuromuscular Recovery', detail: 'Central nervous system fatigue vs localized muscular strain' }
      ],
      aiSynergy: 'Auto-regulates your training load in real time: if barbell velocity drops 12% faster than usual, NIVA truncates the session to prevent overtraining.'
    },
    {
      id: 'nutrition',
      name: 'Nutrition',
      tagline: 'Culturally Contextualized Fuel',
      accent: '#F59E0B',
      icon: 'Apple',
      items: [
        { name: 'Meals & Macros', detail: 'Protein, fat, carbohydrates, and micronutrient balancing' },
        { name: 'Caloric Flux', detail: 'Dynamic calorie targets adjusted for today’s active expenditure' },
        { name: 'Protein Distribution', detail: 'Even 25-35g boluses optimized for muscle protein synthesis' },
        { name: 'Hydration & Electrolytes', detail: 'Fluid loss tracking based on sweat rate and ambient heat' },
        { name: 'Indian Food Intelligence', detail: 'Proprietary database for rotis, dals, dosas, curds, sabzis, & paneer' }
      ],
      aiSynergy: 'Bridges nutrition with your fitness strain: recommends specific food additions (e.g. paneer/curd) when your protein gap compromises recovery.'
    },
    {
      id: 'lifestyle',
      name: 'Lifestyle',
      tagline: 'Real-World Behavioral Context',
      accent: '#818CF8',
      icon: 'Moon',
      items: [
        { name: 'Sleep Stages', detail: 'Deep slow-wave, REM, light sleep, and sleep efficiency rating' },
        { name: 'Workload & Focus', detail: 'Calendar stress mapping, cognitive fatigue, and meeting load' },
        { name: 'Travel & Jetlag', detail: 'Timezone shifts, circadian misalignment and cabin altitude' },
        { name: 'Social Events', detail: 'Late dining, alcohol metabolic impact, and circadian shift' },
        { name: 'Daily Habits', detail: 'Morning light exposure, caffeine half-life cutoffs, wind-down ritual' }
      ],
      aiSynergy: 'Contextualizes your biological spikes: recognizes whether an elevated heart rate is from intense cardio, an impending virus, or a high-pressure boardroom presentation.'
    }
  ]
};
