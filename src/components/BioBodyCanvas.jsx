import React, { useEffect, useRef, useState } from 'react';

export default function BioBodyCanvas() {
  const canvasRef = useRef(null);
  const [rotAngle, setRotAngle] = useState(14.8);
  const [activeNode, setActiveNode] = useState('WELLNESS');
  const [isDragging, setIsDragging] = useState(false);
  const lastMouseX = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    let t = 0;

    const render = () => {
      t += 0.02;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2 + 10;
      const rad = (rotAngle * Math.PI) / 180;

      const project = (x, y, z) => {
        const cosR = Math.cos(rad);
        const sinR = Math.sin(rad);
        const px = x * cosR - z * sinR;
        const pz = z * cosR + x * sinR;
        return { x: cx + px, y: cy + y, z: pz };
      };

      // 1. Soft Light-Blue & Light-Green Framing Circles
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy - 20, 210, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.22)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx - 25, cy + 20, 175, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(52, 211, 153, 0.20)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      // 2. Holistic Wellness Silhouette Outline
      ctx.save();
      const drawSymmetricOutline = (points, strokeColor, fillGrad) => {
        ctx.beginPath();
        points.forEach((pt, idx) => {
          const p = project(-pt[0], pt[1], pt[2] || 0);
          if (idx === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });
        for (let idx = points.length - 1; idx >= 0; idx--) {
          const pt = points[idx];
          const p = project(pt[0], pt[1], pt[2] || 0);
          ctx.lineTo(p.x, p.y);
        }
        ctx.closePath();
        if (fillGrad) {
          ctx.fillStyle = fillGrad;
          ctx.fill();
        }
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 1.6;
        ctx.stroke();
      };

      const bodyGrad = ctx.createLinearGradient(cx, cy - 220, cx, cy + 230);
      bodyGrad.addColorStop(0, 'rgba(56, 189, 248, 0.12)');
      bodyGrad.addColorStop(0.5, 'rgba(52, 211, 153, 0.15)');
      bodyGrad.addColorStop(1, 'rgba(56, 189, 248, 0.08)');

      const torsoContour = [
        [0, -218, 0],
        [16, -212, 4],
        [18, -192, 5],
        [13, -174, 3],
        [11, -158, 0],
        [26, -148, 0],
        [52, -140, 0],
        [62, -100, -4],
        [72, -50, -6],
        [82, 5, -4],
        [86, 30, -2],
        [74, 34, -2],
        [66, -5, -4],
        [52, -50, -4],
        [40, -95, 0],
        [36, -60, 8],
        [30, -20, 6],
        [38, 25, 6],
        [40, 85, 4],
        [34, 145, 0],
        [32, 200, -2],
        [28, 238, 2],
        [14, 240, 4],
        [16, 198, -2],
        [15, 145, 0],
        [14, 85, 2],
        [0, 38, 4],
      ];

      drawSymmetricOutline(torsoContour, 'rgba(16, 185, 129, 0.55)', bodyGrad);

      // 3. Connected Movement & Wellness Flow Lines
      ctx.strokeStyle = 'rgba(52, 211, 153, 0.7)';
      ctx.lineWidth = 1.4;

      ctx.beginPath();
      const pTop = project(0, -195, 0);
      const pBase = project(0, 35, 0);
      ctx.moveTo(pTop.x, pTop.y);
      ctx.lineTo(pBase.x, pBase.y);
      ctx.stroke();

      for (let r = 0; r < 6; r++) {
        const ry = -128 + r * 15;
        const rw = 24 + (r < 3 ? r * 6 : (6 - r) * 5);
        const leftRib = project(-rw, ry, 8);
        const rightRib = project(rw, ry, 8);
        const midRib = project(0, ry - 4, 16);

        ctx.beginPath();
        ctx.moveTo(leftRib.x, leftRib.y);
        ctx.quadraticCurveTo(midRib.x, midRib.y, rightRib.x, rightRib.y);
        ctx.strokeStyle = r % 2 === 0 ? 'rgba(16, 185, 129, 0.45)' : 'rgba(14, 165, 233, 0.45)';
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      const branches = [
        [[0, -125, 4], [-45, -128, 0], [-62, -50, -4], [-78, 20, -2]],
        [[0, -125, 4], [45, -128, 0], [62, -50, -4], [78, 20, -2]],
        [[0, 20, 4], [-25, 70, 4], [-24, 145, 0], [-21, 225, 2]],
        [[0, 20, 4], [25, 70, 4], [24, 145, 0], [21, 225, 2]],
      ];

      branches.forEach((path, bIdx) => {
        ctx.beginPath();
        path.forEach((pt, idx) => {
          const p = project(pt[0], pt[1], pt[2]);
          if (idx === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });
        ctx.strokeStyle = bIdx % 2 === 0 ? 'rgba(16, 185, 129, 0.6)' : 'rgba(14, 165, 233, 0.6)';
        ctx.lineWidth = 1.4;
        ctx.stroke();
      });
      ctx.restore();

      // 4. Concentric Orbital Rings (Light Green & Light Blue)
      ctx.save();
      for (let r = 0; r < 5; r++) {
        const rx = 115 + r * 20;
        const ry = 32 + r * 5.5;
        ctx.beginPath();
        ctx.ellipse(cx, cy - 82, rx, ry, -0.12, 0, Math.PI * 2);
        ctx.strokeStyle =
          r % 2 === 0
            ? `rgba(14, 165, 233, ${0.42 + Math.sin(t + r) * 0.14})`
            : `rgba(16, 185, 129, ${0.42 + Math.cos(t + r) * 0.14})`;
        ctx.lineWidth = 1.3;
        ctx.stroke();
      }
      ctx.restore();

      // 5. Central Wellness Core Gem
      const heartPos = project(0, -88, 12);
      ctx.save();
      const heartSize = 13 + Math.sin(t * 4) * 1.8;
      ctx.translate(heartPos.x, heartPos.y);

      const aura = ctx.createRadialGradient(0, 0, 2, 0, 0, 32);
      aura.addColorStop(0, 'rgba(14, 165, 233, 0.5)');
      aura.addColorStop(0.5, 'rgba(16, 185, 129, 0.25)');
      aura.addColorStop(1, 'rgba(16, 185, 129, 0)');
      ctx.fillStyle = aura;
      ctx.beginPath();
      ctx.arc(0, 0, 32, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#0EA5E9';
      ctx.beginPath();
      ctx.moveTo(0, -heartSize);
      ctx.lineTo(heartSize * 0.85, 0);
      ctx.lineTo(0, heartSize);
      ctx.lineTo(-heartSize * 0.85, 0);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(0, 0, 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 6. Gentle Ambient Wellness Particles
      for (let p = 0; p < 30; p++) {
        const prog = (t * 0.35 + p / 30) % 1;
        const py = -200 + prog * 420;
        const px = Math.sin(p * 2.3 + t) * (18 + (p % 5) * 9);
        const pt = project(px, py, Math.cos(p) * 12);

        ctx.fillStyle = p % 2 === 0 ? 'rgba(16, 185, 129, 0.7)' : 'rgba(14, 165, 233, 0.7)';
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 1.7, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [rotAngle]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    lastMouseX.current = e.clientX;
  };
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const delta = e.clientX - lastMouseX.current;
    lastMouseX.current = e.clientX;
    setRotAngle((prev) => (prev + delta * 0.5) % 360);
  };

  const nodes = [
    { id: 'WELLNESS', pos: 'top-[205px] left-[6%] sm:left-[10%]', dot: 'bg-emerald-400' },
    { id: 'WEARABLES', pos: 'bottom-[135px] left-[6%] sm:left-[10%]', dot: 'bg-sky-400' },
    { id: 'FITNESS', pos: 'top-[160px] right-[6%] sm:right-[10%]', dot: 'bg-emerald-400' },
    { id: 'RECOVERY', pos: 'bottom-[185px] right-[6%] sm:right-[10%]', dot: 'bg-sky-400' },
    { id: 'INSIGHTS', pos: 'bottom-[90px] right-[10%] sm:right-[14%]', dot: 'bg-emerald-400' },
  ];

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      className="relative w-full h-[540px] sm:h-[600px] rounded-3xl bg-gradient-to-b from-white via-[#F2FBF7] to-[#EFF8FF] border border-emerald-100 shadow-[0_20px_50px_rgba(14,165,233,0.08)] overflow-hidden cursor-grab active:cursor-grabbing select-none"
    >
      {/* Top Right Concept Label */}
      <div className="absolute top-6 right-6 z-20 text-right font-mono text-[11px]">
        <div className="text-emerald-700 font-bold tracking-wider">CONNECTED WELLNESS</div>
        <div className="text-slate-400 mt-0.5">CONCEPT VISUALIZATION</div>
      </div>

      {/* Interactive Pillar Pills */}
      {nodes.map((node) => (
        <button
          key={node.id}
          onClick={() => setActiveNode(node.id)}
          className={`absolute ${node.pos} z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono transition-all duration-300 ${
            activeNode === node.id
              ? 'bg-gradient-to-r from-emerald-500 to-sky-500 text-white shadow-md scale-105'
              : 'bg-white/95 border border-emerald-100 text-slate-700 hover:border-sky-300 shadow-xs'
          }`}
        >
          <span className={`w-2 h-2 rounded-full ${activeNode === node.id ? 'bg-white' : node.dot} animate-pulse`}></span>
          <span className="font-semibold tracking-wider">{node.id}</span>
        </button>
      ))}

      <canvas ref={canvasRef} className="w-full h-full block relative z-10" />

      {/* Drag to Rotate Hint */}
      <div className="absolute bottom-5 left-6 z-20 flex items-center gap-2.5 text-[11px] font-mono text-slate-500 tracking-wider">
        <svg className="w-4 h-5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="7" />
          <line x1="12" y1="6" x2="12" y2="10" />
        </svg>
        <span>DRAG TO ROTATE 3D CONCEPT</span>
      </div>
    </div>
  );
}
