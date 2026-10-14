import React, { useState } from 'react';
import { indianFoodDatabase, sampleMeals } from '../data/nutritionData';

export default function NutritionSection() {
  // Initial meal state mimicking prompt example: 2 Chapati + 1 Dal + 1 Rice
  const [selectedItems, setSelectedItems] = useState({
    chapati: 2,
    dal: 1,
    rice: 1
  });

  const updateQuantity = (id, delta) => {
    setSelectedItems(prev => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: next };
    });
  };

  const loadPreset = (preset) => {
    const newItems = {};
    preset.items.forEach(item => {
      newItems[item.id] = item.count;
    });
    setSelectedItems(newItems);
  };

  // Compute live nutritional stats
  let totalCalories = 0;
  let totalProtein = 0;
  let totalCarbs = 0;
  let totalFat = 0;
  let totalFiber = 0;

  Object.entries(selectedItems).forEach(([id, qty]) => {
    const food = indianFoodDatabase.find(f => f.id === id);
    if (food) {
      totalCalories += food.calories * qty;
      totalProtein += food.protein * qty;
      totalCarbs += food.carbs * qty;
      totalFat += food.fat * qty;
      totalFiber += food.fiber * qty;
    }
  });

  // Intelligent analysis logic
  const proteinRatio = totalCalories > 0 ? (totalProtein * 4 / totalCalories) * 100 : 0;
  const isProteinLow = proteinRatio < 18 || totalProtein < 22;

  return (
    <section id="nutrition" className="relative py-28 bg-[#070A0F] border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[550px] h-[550px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4">
            Indian Food Intelligence™
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-5">
            Nutrition built around{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-emerald-400">
              your real life.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            People do not eat the same sterile meals every single day. NIVA's biochemical engine understands regional staples—from warm chapatis and spiced dals to crispy dosas and probiotic curds—calibrating macronutrients without guilt or impractical western diet dogma.
          </p>
        </div>

        {/* Meal Presets */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          <span className="text-xs uppercase font-mono tracking-wider text-gray-500 mr-2">
            Try Example Meals:
          </span>
          {sampleMeals.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => loadPreset(preset)}
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/50 text-xs text-gray-300 hover:text-white transition font-medium flex items-center gap-1.5"
            >
              <span>{preset.title}</span>
              <span className="text-[10px] text-amber-400">({preset.description})</span>
            </button>
          ))}
        </div>

        {/* Interactive Food Selection & Live Intelligence Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Food Selector Grid */}
          <div className="lg:col-span-7 bg-[#0B0F17] border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
              <div>
                <h3 className="text-lg font-bold text-white">Select Indian Meal Components</h3>
                <p className="text-xs text-gray-400">Click items and adjust portion sizes to test NIVA's recommendation</p>
              </div>
              <button
                onClick={() => setSelectedItems({})}
                className="text-xs text-gray-500 hover:text-red-400 transition font-mono"
              >
                Clear All
              </button>
            </div>

            {/* Food Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {indianFoodDatabase.map((food) => {
                const count = selectedItems[food.id] || 0;
                return (
                  <div
                    key={food.id}
                    className={`p-3.5 rounded-2xl border transition flex flex-col justify-between ${
                      count > 0
                        ? 'bg-amber-950/20 border-amber-500/40 shadow-md'
                        : 'bg-white/[0.02] border-white/5 hover:border-white/15'
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{food.icon}</span>
                          <div>
                            <div className="text-xs font-bold text-white leading-tight">{food.name}</div>
                            <div className="text-[10px] text-gray-400 font-mono">{food.unit}</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400 mb-3">
                        <span className="text-white font-semibold">{food.calories} kcal</span>
                        <span>•</span>
                        <span>P: {food.protein}g</span>
                        <span>•</span>
                        <span>C: {food.carbs}g</span>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/5">
                      <span className="text-[11px] font-mono text-gray-400">
                        Qty: <strong className="text-white font-bold">{count}</strong>
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => updateQuantity(food.id, -1)}
                          disabled={count === 0}
                          className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs text-gray-300 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none transition"
                        >
                          -
                        </button>
                        <button
                          onClick={() => updateQuantity(food.id, 1)}
                          className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-xs text-amber-300 hover:bg-amber-500/30 transition font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Real-Time Biochemical Calculator & Intelligent AI Recommendation */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Real-time Macronutrient Breakdown Card */}
            <div className="bg-[#0B0F17] border border-white/10 rounded-3xl p-6 sm:p-7 backdrop-blur-2xl shadow-2xl">
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/[0.08]">
                <span className="text-xs uppercase font-mono tracking-widest text-gray-400">
                  Calculated Meal Profile
                </span>
                <span className="text-xs font-mono text-amber-400">
                  {Object.keys(selectedItems).length} items selected
                </span>
              </div>

              {/* Total Calories Highlight */}
              <div className="mb-6">
                <span className="text-[11px] font-mono uppercase text-gray-400 tracking-wider block mb-1">
                  Total Energy Content
                </span>
                <div className="text-4xl font-extrabold text-white font-mono flex items-baseline gap-2">
                  <span>{Math.round(totalCalories)}</span>
                  <span className="text-sm font-sans text-gray-400 font-normal">kcal</span>
                </div>
              </div>

              {/* 4 Core Macros Progress Chips */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-mono text-gray-400 uppercase block mb-1">Protein</span>
                  <div className="text-xl font-bold font-mono text-emerald-400">{totalProtein.toFixed(1)}g</div>
                  <div className="text-[10px] text-gray-500 font-mono mt-0.5">{proteinRatio.toFixed(0)}% of total cals</div>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-mono text-gray-400 uppercase block mb-1">Carbohydrates</span>
                  <div className="text-xl font-bold font-mono text-cyan-400">{totalCarbs.toFixed(1)}g</div>
                  <div className="text-[10px] text-gray-500 font-mono mt-0.5">Slow & Fast Glycogen</div>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-mono text-gray-400 uppercase block mb-1">Healthy Fats</span>
                  <div className="text-xl font-bold font-mono text-amber-400">{totalFat.toFixed(1)}g</div>
                  <div className="text-[10px] text-gray-500 font-mono mt-0.5">Lipids & Cell Walls</div>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-mono text-gray-400 uppercase block mb-1">Dietary Fiber</span>
                  <div className="text-xl font-bold font-mono text-lime-400">{totalFiber.toFixed(1)}g</div>
                  <div className="text-[10px] text-gray-500 font-mono mt-0.5">Microbiome prebiotic</div>
                </div>
              </div>

              {/* NIVA Intelligent Recommendation Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-tr from-amber-950/30 via-[#0A1017] to-emerald-950/20 border border-amber-400/30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">
                    ⚡ NIVA Nutritional Insight
                  </span>
                </div>

                {isProteinLow ? (
                  <div>
                    <blockquote className="text-sm font-semibold text-white leading-snug mb-2">
                      “You are slightly low on protein today.”
                    </blockquote>
                    <p className="text-xs text-gray-300 leading-relaxed mb-3">
                      Your current selection is carbohydrate-dense. To sustain muscle protein synthesis and prevent post-meal glucose spikes:
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono text-amber-300 font-medium">Try adding:</span>
                      {['Paneer (+18g)', 'Dal (+9g)', 'Eggs (+12g)', 'Curd (+6g)'].map((sug, sIdx) => (
                        <span key={sIdx} className="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
                          {sug}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <blockquote className="text-sm font-semibold text-emerald-300 leading-snug mb-2">
                      “Macronutrient balance optimized for recovery.”
                    </blockquote>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Excellent amino acid distribution and fiber volume. This meal delivers sustained glycogen repletion with steady post-prandial insulin response.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Cultural Intelligence Statement */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-xs text-gray-400">
              <strong className="text-white block mb-0.5">Culturally Calibrated AI:</strong>
              NIVA understands turmeric bio-availability with black pepper, fermentation benefits of idli batter, and glycemic buffering with dahi.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
