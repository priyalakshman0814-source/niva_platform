export const weeklyTimelineData = [
  {
    day: 'Monday',
    tag: 'High Activity',
    status: 'optimal',
    activityScore: 92,
    stressScore: 28,
    sleepHours: 7.8,
    strain: 16.4,
    notes: 'Completed 60-min upper body workout + 10k steps. Physiological strain well absorbed.',
    highlight: 'Peak motivation & nervous readiness'
  },
  {
    day: 'Tuesday',
    tag: 'Good Sleep',
    status: 'optimal',
    activityScore: 84,
    stressScore: 32,
    sleepHours: 8.4,
    strain: 13.8,
    notes: 'Deep sleep reached 2h 15m. Resting heart rate dropped to 51 BPM. High regenerative rebound.',
    highlight: 'Autonomic recovery at 91%'
  },
  {
    day: 'Wednesday',
    tag: 'High Stress',
    status: 'warning',
    activityScore: 68,
    stressScore: 78,
    sleepHours: 6.2,
    strain: 15.2,
    notes: 'Demanding work meetings + deadline pressure. Autonomic balance heavily tilted sympathetic.',
    highlight: 'Elevated daytime cortisol & heart rate spikes'
  },
  {
    day: 'Thursday',
    tag: 'Low Activity',
    status: 'action-needed',
    activityScore: 42,
    stressScore: 62,
    sleepHours: 6.5,
    strain: 8.1,
    notes: 'Post-stress behavioral slump detected. Prolonged sedentary posture during afternoon.',
    highlight: 'Energy slump following Wednesday stress'
  },
  {
    day: 'Friday',
    tag: 'Social Event',
    status: 'neutral',
    activityScore: 74,
    stressScore: 45,
    sleepHours: 6.1,
    strain: 12.3,
    notes: 'Dinner with colleagues, delayed sleep onset by 90 minutes. Slightly delayed nocturnal drop.',
    highlight: 'Social vitality high, circadian shifted'
  },
  {
    day: 'Saturday',
    tag: 'High Calorie Intake',
    status: 'neutral',
    activityScore: 79,
    stressScore: 24,
    sleepHours: 7.9,
    strain: 14.0,
    notes: 'Social feast with friends (surplus +450 kcal). Elevated glycogen stores ready for expenditure.',
    highlight: 'Glycogen surplus ready for kinetic output'
  },
  {
    day: 'Sunday',
    tag: 'Recovery',
    status: 'optimal',
    activityScore: 88,
    stressScore: 19,
    sleepHours: 8.6,
    strain: 9.5,
    notes: 'Nature walk, mobility flow & sauna. Sleep readiness 94%. System calibrated for upcoming week.',
    highlight: 'Full parasympathetic restoration'
  }
];

export const behavioralPatternInsight = {
  headline: 'Pattern Detected: Chronic Post-Stress Energy Trough',
  detectionSummary: 'Cross-analyzing 6 weeks of biometrics shows a 94% statistical correlation: your physical activity drops by 48% on Thursdays following high-stress Wednesdays.',
  mechanism: 'Prolonged cognitive sympathetic arousal drains central nervous resources, creating executive decision fatigue and physical inertia 24 hours later.',
  actionablePrescription: 'NIVA recommends a 20-minute recovery workout on Thursday.',
  prescriptionDetails: {
    title: 'Adaptive Micro-Intervention',
    duration: '20 minutes',
    intensity: 'Low (RPE 3-4, Zone 1-2)',
    components: [
      '8 min dynamic hip & thoracic mobility flow',
      '10 min low-cadence incline nasal breathing walk',
      '2 min parasympathetic physiological sigh protocol'
    ],
    expectedOutcome: '+34% afternoon alertness, breaks cortisol plateau, prevents cumulative weekend fatigue.'
  }
};
