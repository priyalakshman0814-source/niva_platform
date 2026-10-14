import React, { useEffect, useRef, useState } from 'react';

const DEVICE_IMAGES = {
  'niva-ring': 'smart-ring.webp',
  'niva-watch': 'smartwatch.webp',
  'niva-band': 'wearable-in-use.webp',
  'niva-equipment': 'smart-dumbbell.webp',
};

const DEVICE_LABELS = {
  'niva-ring': 'NIVA Ring',
  'niva-watch': 'NIVA Watch',
  'niva-band': 'NIVA Band',
  'niva-equipment': 'NIVA Smart Equipment',
};

export default function Device3DCanvas({
  deviceId = 'niva-ring',
  explodedView = false,
  selectedColor = 0,
}) {
  const containerRef = useRef(null);
  const lastPointerRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState({ x: -5, y: 0 });
  const [imageFailed, setImageFailed] = useState(false);

  const imageName = DEVICE_IMAGES[deviceId] || DEVICE_IMAGES['niva-equipment'];
  const imageUrl = `${import.meta.env.BASE_URL}assets/${imageName}`;
  const label = DEVICE_LABELS[deviceId] || DEVICE_LABELS['niva-equipment'];

  useEffect(() => {
    setImageFailed(false);
    setRotation({ x: -5, y: 0 });
  }, [deviceId]);

  // Gentle movement while idle; pointer/touch dragging lets visitors inspect the image.
  useEffect(() => {
    if (isDragging) return undefined;

    let previousTime = 0;
    const animate = (time) => {
      if (time - previousTime > 45) {
        setRotation((current) => ({
          ...current,
          y: current.y + 0.18,
        }));
        previousTime = time;
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDragging]);

  const pointerDown = (event) => {
    setIsDragging(true);
    lastPointerRef.current = { x: event.clientX, y: event.clientY };
    if (event.currentTarget.setPointerCapture && event.pointerId !== undefined) {
      event.currentTarget.setPointerCapture(event.pointerId);
    }
  };

  const pointerMove = (event) => {
    if (!isDragging) return;

    const dx = event.clientX - lastPointerRef.current.x;
    const dy = event.clientY - lastPointerRef.current.y;

    setRotation((current) => ({
      x: Math.max(-22, Math.min(22, current.x - dy * 0.35)),
      y: current.y + dx * 0.55,
    }));

    lastPointerRef.current = { x: event.clientX, y: event.clientY };
  };

  const pointerUp = () => setIsDragging(false);

  const colorFilters = [
    'none',
    'saturate(0.78) brightness(1.08)',
    'sepia(0.35) saturate(1.35)',
    'grayscale(0.72) brightness(1.12)',
  ];

  return (
    <div
      ref={containerRef}
      className="relative flex h-[340px] w-full select-none items-center justify-center overflow-hidden rounded-2xl md:h-[400px]"
      onPointerDown={pointerDown}
      onPointerMove={pointerMove}
      onPointerUp={pointerUp}
      onPointerCancel={pointerUp}
      onPointerLeave={pointerUp}
      style={{
        cursor: isDragging ? 'grabbing' : 'grab',
        touchAction: 'pan-y',
        perspective: '1000px',
        background:
          'radial-gradient(ellipse at 50% 48%, rgba(16,185,129,0.12) 0%, rgba(34,211,238,0.055) 38%, rgba(255,255,255,0) 72%)',
      }}
      aria-label={`${label} product visualization. Drag to move the image.`}
    >
      {/* Ambient rings retain the connected-device visual language. */}
      <div
        className="pointer-events-none absolute h-[250px] w-[250px] rounded-full border border-emerald-300/30 md:h-[310px] md:w-[310px]"
        style={{ transform: `rotate(${rotation.y * 0.15}deg)` }}
      />
      <div
        className="pointer-events-none absolute h-[205px] w-[205px] rounded-full border border-cyan-300/30 md:h-[255px] md:w-[255px]"
        style={{ transform: `rotate(${-rotation.y * 0.2}deg)` }}
      />
      <div className="pointer-events-none absolute h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]" />

      {!imageFailed ? (
        <img
          key={imageUrl}
          src={imageUrl}
          alt={label}
          draggable="false"
          onError={() => setImageFailed(true)}
          className="relative z-10 max-h-[82%] max-w-[82%] object-contain"
          style={{
            transform: `translateY(${Math.sin(rotation.y * 0.035) * 4}px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${explodedView ? 1.08 : 1})`,
            filter: colorFilters[selectedColor] || 'none',
            transition: isDragging ? 'none' : 'transform 100ms linear, filter 250ms ease',
            transformStyle: 'preserve-3d',
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        />
      ) : (
        <div className="relative z-10 max-w-xs px-6 text-center">
          <div className="mb-3 text-sm font-semibold text-slate-700">
            Product image not found
          </div>
          <p className="text-xs leading-5 text-slate-500">
            Expected file: <code>public/assets/{imageName}</code>
          </p>
        </div>
      )}

      <div className="pointer-events-none absolute left-4 top-4 z-20 rounded-full border border-emerald-200/70 bg-white/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-800 shadow-sm backdrop-blur">
        {explodedView ? 'Product detail view' : 'Connected device'}
      </div>

      <div className="pointer-events-none absolute bottom-3 left-4 right-4 z-20 flex items-center justify-between text-[10px] text-slate-500 md:text-[11px]">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Product image • Drag to move
        </span>
        <span className="rounded border border-emerald-200/70 bg-white/70 px-2 py-0.5 font-mono text-emerald-800 backdrop-blur">
          {isDragging ? 'INTERACTIVE' : '360° VIEW'}
        </span>
      </div>
    </div>
  );
}
