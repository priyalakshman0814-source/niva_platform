import React, { useState } from 'react';
import { X, Radio, BatteryMedium, CheckCircle, RefreshCw, Smartphone, ShieldCheck } from 'lucide-react';

export default function ConnectSensorModal({ isOpen, onClose, sensorsConnected, onToggleConnect }) {
  const [calibrating, setCalibrating] = useState(false);

  if (!isOpen) return null;

  const handleCalibrate = () => {
    setCalibrating(true);
    setTimeout(() => {
      setCalibrating(false);
    }, 1200);
  };

  const sensors = [
    {
      name: 'Niva Motion Pod 01',
      placement: 'Lower Lumbar (Spine)',
      battery: '98%',
      latency: '2.1 ms',
      status: 'Active Tracking',
      color: 'bg-emerald-500',
    },
    {
      name: 'Niva Motion Pod 02',
      placement: 'Right Knee (Patellar Axis)',
      battery: '94%',
      latency: '2.4 ms',
      status: 'Active Tracking',
      color: 'bg-emerald-500',
    },
    {
      name: 'Niva Recovery Band',
      placement: 'Left Wrist (Autonomic)',
      battery: '100%',
      latency: '1.8 ms',
      status: 'Biometrics Streaming',
      color: 'bg-emerald-500',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#19201E]/40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FAF9F6] border border-[#E2E6E1] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-[#55625E] hover:text-[#19201E] hover:bg-[#E8EAE6] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-full bg-[#E6EEE8] text-[#3D6C52] flex items-center justify-center">
            <Radio className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#19201E]">Body Sensor Telemetry</h3>
            <p className="text-xs text-[#55625E]">Sub-millimeter BLE 5.4 synchronization</p>
          </div>
        </div>

        {/* Status Banner */}
        <div className="my-5 p-4 rounded-2xl bg-white border border-[#E2E6E1] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3D6C52] animate-ping"></span>
            <span className="text-xs font-medium text-[#19201E]">
              {calibrating ? 'Recalibrating spatial axes...' : 'All 3 body sensors synchronized'}
            </span>
          </div>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#E6EEE8] text-[#3D6C52] font-medium">
            0.1° Drift
          </span>
        </div>

        {/* Sensor List */}
        <div className="space-y-3 mb-6">
          {sensors.map((sensor, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-white border border-[#E2E6E1]/80 flex items-center justify-between text-xs"
            >
              <div>
                <div className="font-medium text-[#19201E] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3D6C52]"></span>
                  {sensor.name}
                </div>
                <div className="text-[11px] text-[#55625E] mt-0.5">{sensor.placement}</div>
              </div>
              <div className="text-right flex items-center gap-3">
                <div className="flex items-center gap-1 text-[#55625E] font-mono text-[11px]">
                  <BatteryMedium className="w-3.5 h-3.5 text-[#3D6C52]" />
                  {sensor.battery}
                </div>
                <span className="text-[11px] font-mono text-[#808E8A] hidden sm:inline">{sensor.latency}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Security Badge */}
        <div className="flex items-center gap-2 text-[11px] text-[#55625E] mb-6 px-1">
          <ShieldCheck className="w-4 h-4 text-[#3D6C52] shrink-0" />
          <span>Encrypted HIPAA/GDPR clinical data pipeline directly to care team.</span>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={handleCalibrate}
            disabled={calibrating}
            className="flex-1 py-2.5 px-4 rounded-xl border border-[#E2E6E1] bg-white text-xs font-medium text-[#19201E] hover:bg-[#F4F5F1] transition-all flex items-center justify-center gap-2"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${calibrating ? 'animate-spin text-[#3D6C52]' : ''}`} />
            <span>{calibrating ? 'Calibrating...' : 'Zero-Offset Calibrate'}</span>
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-2.5 px-4 rounded-xl bg-[#19201E] text-white text-xs font-medium hover:bg-[#273430] transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
