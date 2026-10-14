export const aiScenarios = [
  {
    id: 'fatigue-pattern',
    title: 'Post-Stress Recovery Drop',
    badge: 'Under-Recovered State',
    metrics: {
      sleep: { value: '5h 15m', direction: 'down', status: 'critical', label: 'Sleep ↓' },
      activity: { value: '3,840 steps', direction: 'down', status: 'low', label: 'Activity ↓' },
      stress: { value: '78 / 100', direction: 'up', status: 'high', label: 'Stress ↑' },
      recovery: { value: '38%', direction: 'down', status: 'critical', label: 'Recovery ↓' }
    },
    rawTelemetry: 'Sleep fragmentation detected (wake after sleep onset 52m). Nocturnal resting heart rate +7 BPM above baseline. HRV RMSSD dropped to 34ms.',
    aiReasoning: 'Autonomic nervous balance is heavily biased toward sympathetic dominance. High physical strain today will compound cortisol elevation, slow cellular repair, and spike injury risk by 3.2x.',
    recommendationHeadline: 'Your recovery is lower than usual. Consider reducing workout intensity today and prioritizing sleep.',
    actionPlan: [
      { action: 'Modify Workout', detail: 'Swap scheduled high-intensity barbell session for 20 min Zone 1 recovery walk & myofascial release.' },
      { action: 'Nutritional Adjustment', detail: 'Increase magnesium glycinate and tryptophan-rich evening meal (warm milk or curd with nuts).' },
      { action: 'Sleep Hygiene Sync', detail: 'NIVA Smart Environment will cool bedroom to 18.5°C at 21:30 and filter blue light.' }
    ],
    tag: 'Active Intervention'
  },
  {
    id: 'peak-performance',
    title: 'Supercompensation Peak',
    badge: 'High Readiness State',
    metrics: {
      sleep: { value: '8h 24m', direction: 'up', status: 'optimal', label: 'Sleep ↑' },
      activity: { value: '11,200 steps', direction: 'up', status: 'high', label: 'Activity ↑' },
      stress: { value: '18 / 100', direction: 'down', status: 'optimal', label: 'Stress ↓' },
      recovery: { value: '94%', direction: 'up', status: 'optimal', label: 'Recovery ↑' }
    },
    rawTelemetry: 'Resting heart rate down to 49 BPM. HRV RMSSD at 98ms (+24% above baseline). REM sleep reached 2h 20m with near-zero nocturnal micro-awakenings.',
    aiReasoning: 'Central nervous system and muscular glycogen stores are fully replenished. Physiological headroom is maximized for personal records and progressive neurological adaptation.',
    recommendationHeadline: 'Optimal physiological state detected. Today is primed for high-output strength progression or interval threshold work.',
    actionPlan: [
      { action: 'Unlock Peak PR Mode', detail: 'Increase working sets to RPE 8.5–9 on compound lifts (Squat / Bench / Clean).' },
      { action: 'Pre-Workout Nutrient Surge', detail: 'Target 45g complex carbs 90 minutes pre-session for sustained ATP delivery.' },
      { action: 'Real-Time Velocity Tracking', detail: 'NIVA Smart Equipment will monitor concentric bar speed to signal optimal stopping point.' }
    ],
    tag: 'Performance Window'
  },
  {
    id: 'circadian-shift',
    title: 'Jetlag & Circadian Shift',
    badge: 'Chronobiological Desync',
    metrics: {
      sleep: { value: '6h 10m', direction: 'flat', status: 'warning', label: 'Sleep ~' },
      activity: { value: '6,400 steps', direction: 'down', status: 'low', label: 'Activity ↓' },
      stress: { value: '54 / 100', direction: 'up', status: 'warning', label: 'Stress ↑' },
      recovery: { value: '61%', direction: 'down', status: 'warning', label: 'Recovery ↓' }
    },
    rawTelemetry: 'Core temperature minimum delayed by 3.2 hours. Melatonin onset rhythm disrupted due to 3-hour eastward timezone transition.',
    aiReasoning: 'Peripheral clocks in liver and muscle tissue are out of sync with central suprachiasmatic nucleus. Exercise timing and meal spacing can expedite resynchronization by 48 hours.',
    recommendationHeadline: 'Circadian phase delay detected. Prioritize natural sunlight exposure before 08:30 and shift main carbohydrate intake to midday.',
    actionPlan: [
      { action: 'Photonic Anchoring', detail: 'Get 15 minutes of outdoor sunlight exposure within 30 minutes of waking.' },
      { action: 'Caffeine Timing Protocol', detail: 'Terminate caffeine consumption strictly 10 hours prior to targeted sleep onset.' },
      { action: 'Gentle Aerobic Reset', detail: '30-minute steady-state cardiovascular session at 16:00 to anchor circadian core temperature peak.' }
    ],
    tag: 'Circadian Alignment'
  }
];
