import React, { useEffect, useRef, useState } from 'react';

export default function Device3DCanvas({ deviceId = 'niva-ring', explodedView = false, selectedColor = 0 }) {
  const canvasRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const rotRef = useRef({ x: 0.35, y: 0.8 });
  const lastMouseRef = useRef({ x: 0, y: 0 });

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
      t += 0.015;
      if (!isDragging) {
        rotRef.current.y += 0.008;
      }

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Ambient radial lighting on canvas
      const bgGlow = ctx.createRadialGradient(cx, cy, 20, cx, cy, 220);
      bgGlow.addColorStop(0, 'rgba(0, 245, 160, 0.08)');
      bgGlow.addColorStop(0.5, 'rgba(0, 210, 255, 0.03)');
      bgGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, width, height);

      // 3D Matrix Projection
      const rotY = rotRef.current.y;
      const rotX = rotRef.current.x;

      const project = (x, y, z) => {
        // Rotate around Y
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const x1 = x * cosY - z * sinY;
        const z1 = z * cosY + x * sinY;

        // Rotate around X
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);
        const y2 = y * cosX - z1 * sinX;
        const z2 = z1 * cosX + y * sinX;

        // Perspective division
        const fov = 380;
        const pz = z2 + 420;
        const scale = fov / (pz > 50 ? pz : 50);
        return {
          x: cx + x1 * scale,
          y: cy + y2 * scale,
          z: z2,
          scale
        };
      };

      // Render based on deviceId
      if (deviceId === 'niva-ring') {
        renderRing(ctx, project, t, explodedView, selectedColor);
      } else if (deviceId === 'niva-watch') {
        renderWatch(ctx, project, t, explodedView);
      } else if (deviceId === 'niva-band') {
        renderBand(ctx, project, t, explodedView);
      } else {
        renderEquipment(ctx, project, t, explodedView);
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [deviceId, explodedView, isDragging, selectedColor]);

  // Mouse / Touch handlers for 3D rotation
  const onMouseDown = (e) => {
    setIsDragging(true);
    lastMouseRef.current = { x: e.clientX, y: e.clientY };
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - lastMouseRef.current.x;
    const dy = e.clientY - lastMouseRef.current.y;
    rotRef.current.y += dx * 0.01;
    rotRef.current.x += dy * 0.01;
    lastMouseRef.current = { x: e.clientX, y: e.clientY };
  };

  const onMouseUp = () => setIsDragging(false);

  return (
    <div
      className="relative w-full h-[340px] md:h-[400px] cursor-grab active:cursor-grabbing select-none"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchStart={(e) => {
        setIsDragging(true);
        lastMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }}
      onTouchMove={(e) => {
        if (!isDragging) return;
        const dx = e.touches[0].clientX - lastMouseRef.current.x;
        const dy = e.touches[0].clientY - lastMouseRef.current.y;
        rotRef.current.y += dx * 0.015;
        rotRef.current.x += dy * 0.015;
        lastMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }}
      onTouchEnd={() => setIsDragging(false)}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-gray-400 pointer-events-none">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          Interactive 3D Engine • Drag to rotate
        </span>
        <span className="bg-black/50 px-2 py-0.5 rounded border border-white/10 text-emerald-400 font-mono">
          360° Real-time
        </span>
      </div>
    </div>
  );
}

// 1. Procedural 3D NIVA Ring
function renderRing(ctx, project, t, explodedView, selectedColor) {
  const outerR = 95;
  const innerR = 75;
  const height = 48;
  const segments = 36;
  const explodeOffset = explodedView ? 35 : 0;

  const pointsOuterTop = [];
  const pointsOuterBottom = [];
  const pointsInnerTop = [];
  const pointsInnerBottom = [];

  for (let i = 0; i < segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);

    pointsOuterTop.push(project(cosA * (outerR + explodeOffset), -height / 2, sinA * (outerR + explodeOffset)));
    pointsOuterBottom.push(project(cosA * (outerR + explodeOffset), height / 2, sinA * (outerR + explodeOffset)));
    pointsInnerTop.push(project(cosA * innerR, -height / 2, sinA * innerR));
    pointsInnerBottom.push(project(cosA * innerR, height / 2, sinA * innerR));
  }

  // Draw ring segments sorted by depth
  for (let i = 0; i < segments; i++) {
    const next = (i + 1) % segments;
    const avgZ = (pointsOuterTop[i].z + pointsOuterTop[next].z) / 2;

    // Normal lighting simulation
    const light = Math.max(0.15, Math.min(0.9, (avgZ + 100) / 200));
    const isGold = selectedColor === 2;
    const isChrome = selectedColor === 3;

    ctx.beginPath();
    ctx.moveTo(pointsOuterTop[i].x, pointsOuterTop[i].y);
    ctx.lineTo(pointsOuterTop[next].x, pointsOuterTop[next].y);
    ctx.lineTo(pointsOuterBottom[next].x, pointsOuterBottom[next].y);
    ctx.lineTo(pointsOuterBottom[i].x, pointsOuterBottom[i].y);
    ctx.closePath();

    if (isGold) {
      ctx.fillStyle = `rgb(${Math.floor(212 * light)}, ${Math.floor(175 * light)}, ${Math.floor(55 * light)})`;
      ctx.strokeStyle = 'rgba(255, 215, 0, 0.4)';
    } else if (isChrome) {
      ctx.fillStyle = `rgb(${Math.floor(200 * light)}, ${Math.floor(215 * light)}, ${Math.floor(230 * light)})`;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    } else {
      // Titanium Stealth
      ctx.fillStyle = `rgb(${Math.floor(40 + 70 * light)}, ${Math.floor(45 + 75 * light)}, ${Math.floor(55 + 85 * light)})`;
      ctx.strokeStyle = 'rgba(0, 245, 160, 0.2)';
    }

    ctx.lineWidth = 1;
    ctx.fill();
    ctx.stroke();
  }

  // Draw Inner Bio-Sensor Windows (Quad PPG + Temp)
  for (let s = 0; s < 4; s++) {
    const sAngle = (s * Math.PI) / 2 + Math.PI / 4;
    const sp = project(Math.cos(sAngle) * (innerR + 2), 0, Math.sin(sAngle) * (innerR + 2));

    ctx.save();
    const sensorPulse = Math.sin(t * 4 + s) * 0.3 + 0.7;
    ctx.fillStyle = s === 0 ? '#00F5A0' : s === 1 ? '#EF4444' : '#00D2FF';
    ctx.shadowColor = ctx.fillStyle;
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.arc(sp.x, sp.y, 4.5 * sp.scale * sensorPulse, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  // Subtle metallic specular rim
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  for (let i = 0; i <= segments; i++) {
    const idx = i % segments;
    if (i === 0) ctx.moveTo(pointsOuterTop[idx].x, pointsOuterTop[idx].y);
    else ctx.lineTo(pointsOuterTop[idx].x, pointsOuterTop[idx].y);
  }
  ctx.stroke();
}

// 2. Procedural 3D NIVA Watch
function renderWatch(ctx, project, t, explodedView) {
  const explode = explodedView ? 40 : 0;
  // Watch case
  const w = 70;
  const h = 85;
  const d = 16;

  // Case body
  const corners = [
    project(-w, -h - explode, -d),
    project(w, -h - explode, -d),
    project(w, h - explode, -d),
    project(-w, h - explode, -d),
    project(-w, -h + explode, d),
    project(w, -h + explode, d),
    project(w, h + explode, d),
    project(-w, h + explode, d)
  ];

  ctx.strokeStyle = 'rgba(0, 245, 160, 0.4)';
  ctx.fillStyle = '#0F172A';
  ctx.lineWidth = 1.5;

  // Screen Face (sapphire crystal)
  ctx.beginPath();
  ctx.moveTo(corners[4].x, corners[4].y);
  ctx.lineTo(corners[5].x, corners[5].y);
  ctx.lineTo(corners[6].x, corners[6].y);
  ctx.lineTo(corners[7].x, corners[7].y);
  ctx.closePath();
  ctx.fillStyle = '#05080E';
  ctx.fill();
  ctx.strokeStyle = 'rgba(0, 210, 255, 0.8)';
  ctx.stroke();

  // Watch Display UI Simulation
  const centerScreen = project(0, 0, d + 1);
  ctx.save();
  ctx.fillStyle = '#00F5A0';
  ctx.font = 'bold 16px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('07:42 AM', centerScreen.x, centerScreen.y - 20);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = '12px sans-serif';
  ctx.fillText('ZONE 3 • 138 BPM', centerScreen.x, centerScreen.y);

  // Live heart rate bar on watch
  ctx.fillStyle = '#EF4444';
  const barW = 60 * centerScreen.scale;
  ctx.fillRect(centerScreen.x - barW / 2, centerScreen.y + 12, barW, 4);
  ctx.restore();

  // Digital Crown button
  const crownP1 = project(w + 2, -20, 0);
  const crownP2 = project(w + 14, -20, 0);
  ctx.strokeStyle = '#00F5A0';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(crownP1.x, crownP1.y);
  ctx.lineTo(crownP2.x, crownP2.y);
  ctx.stroke();

  // Silicone/Nylon Strap segments (Top & Bottom)
  const strapTop1 = project(-50, -h - 70, 0);
  const strapTop2 = project(50, -h - 70, 0);
  ctx.fillStyle = '#1E293B';
  ctx.beginPath();
  ctx.moveTo(corners[0].x, corners[0].y);
  ctx.lineTo(corners[1].x, corners[1].y);
  ctx.lineTo(strapTop2.x, strapTop2.y);
  ctx.lineTo(strapTop1.x, strapTop1.y);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

// 3. Procedural 3D NIVA Band
function renderBand(ctx, project, t, explodedView) {
  const steps = 30;
  ctx.save();
  ctx.strokeStyle = '#334155';
  ctx.lineWidth = 22;

  ctx.beginPath();
  for (let i = 0; i <= steps; i++) {
    const angle = (i / steps) * Math.PI * 2;
    const rX = 90;
    const rY = 55;
    const p = project(Math.cos(angle) * rX, Math.sin(angle) * rY, Math.sin(angle * 2) * 20);
    if (i === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  }
  ctx.stroke();

  // Central Sensor Pod
  const pod = project(0, 56, 0);
  ctx.fillStyle = '#0F172A';
  ctx.strokeStyle = '#00F5A0';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(pod.x, pod.y, 24 * pod.scale, 14 * pod.scale, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Micro LED telemetry pulse
  const ledPulse = Math.sin(t * 6) * 0.4 + 0.6;
  ctx.fillStyle = `rgba(0, 245, 160, ${ledPulse})`;
  ctx.shadowColor = '#00F5A0';
  ctx.shadowBlur = 10;
  ctx.beginPath();
  ctx.arc(pod.x, pod.y, 4 * pod.scale, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

// 4. Procedural 3D NIVA Smart Equipment (Barbell Smart Pod / Cable Velocity Sensor)
function renderEquipment(ctx, project, t, explodedView) {
  ctx.save();
  // Cylindrical load cell body
  const steps = 24;
  const radius = 65;
  const length = 110;

  for (let i = 0; i < steps; i++) {
    const angle1 = (i / steps) * Math.PI * 2;
    const angle2 = ((i + 1) / steps) * Math.PI * 2;

    const p1 = project(Math.cos(angle1) * radius, -length / 2, Math.sin(angle1) * radius);
    const p2 = project(Math.cos(angle2) * radius, -length / 2, Math.sin(angle2) * radius);
    const p3 = project(Math.cos(angle2) * radius, length / 2, Math.sin(angle2) * radius);
    const p4 = project(Math.cos(angle1) * radius, length / 2, Math.sin(angle1) * radius);

    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.lineTo(p3.x, p3.y);
    ctx.lineTo(p4.x, p4.y);
    ctx.closePath();

    ctx.fillStyle = i % 2 === 0 ? '#1E293B' : '#0F172A';
    ctx.strokeStyle = 'rgba(0, 245, 160, 0.3)';
    ctx.lineWidth = 1;
    ctx.fill();
    ctx.stroke();
  }

  // Active laser encoder optic line
  const centerTop = project(0, length / 2 + 5, 0);
  ctx.fillStyle = '#00F5A0';
  ctx.shadowColor = '#00F5A0';
  ctx.shadowBlur = 15;
  ctx.beginPath();
  ctx.arc(centerTop.x, centerTop.y, 8 * centerTop.scale, 0, Math.PI * 2);
  ctx.fill();

  // Biomechanical load ring
  ctx.strokeStyle = '#00D2FF';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(centerTop.x, centerTop.y, 35 * centerTop.scale, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}
