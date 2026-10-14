import React, { useState } from 'react';
import { devicesData } from '../data/devicesData';
import Device3DCanvas from '../components/Device3DCanvas';

export default function DevicesSection({ onOpenExplore }) {
  const [activeDeviceIdx, setActiveDeviceIdx] = useState(0);
  const [explodedView, setExplodedView] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);
  const [hoveredSensor, setHoveredSensor] = useState(null);

  const currentDevice = devicesData[activeDeviceIdx];

  return (
    <section id="devices" className="relative py-28 bg-[#05070A] border-t border-white/[0.06] overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
              Hardware Architecture
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Technology that moves with you.
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              Machined from aerospace titanium, forged carbon, and optical sapphires. Embedded with micro-optics and kinetic strain sensors that disappear into your routine.
            </p>
          </div>

          {/* Device Tabs Selector */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 overflow-x-auto">
            {devicesData.map((dev, idx) => (
              <button
                key={dev.id}
                onClick={() => {
                  setActiveDeviceIdx(idx);
                  setSelectedColor(0);
                  setExplodedView(false);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                  activeDeviceIdx === idx
                    ? 'bg-emerald-400 text-black shadow-lg shadow-emerald-400/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {dev.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Interactive Device Showcase Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left: 3D Interactive Presentation Stage */}
          <div className="lg:col-span-7 bg-[#090D14] border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl relative shadow-2xl overflow-hidden group">
            {/* Top Bar: Specs and Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-emerald-400">
                {currentDevice.badge}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setExplodedView(!explodedView)}
                  className={`text-xs px-3 py-1 rounded-lg border font-mono transition ${
                    explodedView
                      ? 'border-emerald-400 bg-emerald-500/20 text-emerald-300'
                      : 'border-white/10 bg-white/5 text-gray-400 hover:text-white'
                  }`}
                >
                  {explodedView ? 'Collapse Assembly' : 'Explode Hardware'}
                </button>
              </div>
            </div>

            {/* 3D Canvas Visualizer */}
            <Device3DCanvas
              deviceId={currentDevice.id}
              explodedView={explodedView}
              selectedColor={selectedColor}
            />

            {/* Hardware Finish Customizer */}
            <div className="flex flex-wrap items-center justify-between pt-6 border-t border-white/[0.08] gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-mono block mb-1.5">
                  Anodized Material Finish
                </span>
                <div className="flex items-center gap-2">
                  {currentDevice.colors.map((color, cIdx) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(cIdx)}
                      className={`text-xs px-2.5 py-1 rounded-lg border transition ${
                        selectedColor === cIdx
                          ? 'border-emerald-400 bg-emerald-500/10 text-white'
                          : 'border-white/5 text-gray-400 hover:text-white'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-right">
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-mono block mb-1">
                  Target Battery
                </span>
                <span className="text-xs font-semibold text-white">{currentDevice.battery}</span>
              </div>
            </div>
          </div>

          {/* Right: Sensors & Live Telemetry Stream */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Device Overview Card */}
            <div className="bg-[#0B0F17] border border-white/10 rounded-3xl p-6 sm:p-7 backdrop-blur-2xl">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{currentDevice.name}</h3>
                  <p className="text-xs text-emerald-400 font-mono">{currentDevice.tagline}</p>
                </div>
                <span className="text-lg font-bold text-white font-mono">{currentDevice.price}</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed mb-6">{currentDevice.description}</p>

              {/* Metrics Tracked */}
              <div className="mb-6">
                <div className="text-[11px] uppercase font-mono tracking-wider text-gray-400 mb-3">
                  Telemetry Captured
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {currentDevice.metricsTracked.map((metric, mIdx) => (
                    <div key={mIdx} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="text-xs font-semibold text-white">{metric.name}</div>
                      <div className="text-[10px] text-gray-400 truncate">{metric.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sensors Breakdown (Hover or click to view details) */}
              <div>
                <div className="text-[11px] uppercase font-mono tracking-wider text-gray-400 mb-3 flex items-center justify-between">
                  <span>Physical Sensors Embedded</span>
                  <span className="text-emerald-400 font-normal">Hover sensor to inspect</span>
                </div>
                <div className="space-y-2">
                  {currentDevice.sensors.map((sensor, sIdx) => (
                    <div
                      key={sIdx}
                      onMouseEnter={() => setHoveredSensor(sIdx)}
                      onMouseLeave={() => setHoveredSensor(null)}
                      className={`p-3 rounded-xl border transition cursor-default ${
                        hoveredSensor === sIdx
                          ? 'bg-emerald-950/30 border-emerald-500/50'
                          : 'bg-white/[0.02] border-white/5'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-medium text-white mb-1">
                        <span>{sensor.name}</span>
                        <span className="text-[10px] font-mono text-emerald-400">0.05ms</span>
                      </div>
                      <p className="text-[11px] text-gray-400 leading-relaxed">{sensor.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Telemetry Feed Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/20 via-black to-cyan-950/20 border border-white/10 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-emerald-400">
                <span className="flex items-center gap-1.5 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Live Sensor Stream
                </span>
                <span className="text-[10px] text-gray-400">250Hz Uplink</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                {Object.entries(currentDevice.liveTelemetry).map(([key, val]) => (
                  <div key={key} className="bg-black/40 p-2 rounded-lg border border-white/5">
                    <span className="text-gray-400 block text-[10px] capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="text-white font-semibold">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Product Cards Grid for Quick Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {devicesData.map((dev, idx) => (
            <div
              key={dev.id}
              onClick={() => {
                setActiveDeviceIdx(idx);
                window.scrollTo({ top: document.getElementById('devices').offsetTop - 60, behavior: 'smooth' });
              }}
              className={`p-6 rounded-3xl border transition cursor-pointer flex flex-col justify-between ${
                activeDeviceIdx === idx
                  ? 'bg-[#0E1524] border-emerald-400/50 shadow-xl shadow-emerald-950/20'
                  : 'bg-[#090D14] border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 mb-2 block">
                  {dev.category}
                </span>
                <h4 className="text-xl font-bold text-white mb-2">{dev.name}</h4>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">{dev.tagline}</p>
                <div className="space-y-1.5 text-xs text-gray-300 font-mono mb-6">
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-gray-500">Form:</span>
                    <span>{dev.material.split(' ')[0]}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-gray-500">Endurance:</span>
                    <span>{dev.battery.split(' ')[0]}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="font-mono text-sm font-bold text-white">{dev.price}</span>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition">
                  Inspect 3D →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
