import React, { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle swarm around the silhouette
    const particleCount = 65;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        angle: Math.random() * Math.PI * 2,
        radiusX: 90 + Math.random() * 140,
        radiusY: 140 + Math.random() * 200,
        speed: (Math.random() * 0.008 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
        size: Math.random() * 2.5 + 1,
        color: Math.random() > 0.4 ? '#00F5A0' : '#00D2FF',
        alpha: Math.random() * 0.7 + 0.2
      });
    }

    // Biometric nodes on the body
    const bodyNodes = [
      { x: 0, y: -190, label: 'Neural Activity', color: '#00D2FF', pulse: 0 },
      { x: 0, y: -120, label: 'Thyroid / Vagal Tone', color: '#00F5A0', pulse: 1.2 },
      { x: -16, y: -80, label: 'Cardiac 72 BPM', color: '#EF4444', pulse: 0.5 },
      { x: 20, y: -50, label: 'Pulmonary SpO2', color: '#00D2FF', pulse: 2.1 },
      { x: 0, y: 10, label: 'Core Temp 36.8°C', color: '#F59E0B', pulse: 3.4 },
      { x: 0, y: 70, label: 'Gut Microbiome', color: '#A3E635', pulse: 1.8 },
      { x: -50, y: 90, label: 'Left Wrist Band', color: '#00F5A0', pulse: 2.5 },
      { x: 55, y: -20, label: 'Right Finger Ring', color: '#00F5A0', pulse: 0.8 },
      { x: -35, y: 220, label: 'Kinetic Cadence', color: '#00D2FF', pulse: 1.1 },
      { x: 35, y: 220, label: 'Ground Force', color: '#00D2FF', pulse: 2.7 }
    ];

    let t = 0;
    let mouse = { x: width / 2, y: height / 2 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      t += 0.02;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2 + 20;

      // Subtle parallax offset
      const offsetX = (mouse.x - centerX) * 0.04;
      const offsetY = (mouse.y - centerY) * 0.04;
      const cx = centerX + offsetX;
      const cy = centerY + offsetY;

      // 1. Futuristic holographic background rings
      ctx.save();
      ctx.strokeStyle = 'rgba(0, 245, 160, 0.08)';
      ctx.lineWidth = 1;

      // Outer radar circle
      ctx.beginPath();
      ctx.arc(cx, cy, 260, 0, Math.PI * 2);
      ctx.stroke();

      // Middle radar ring with dash
      ctx.strokeStyle = 'rgba(0, 210, 255, 0.12)';
      ctx.setLineDash([8, 12]);
      ctx.beginPath();
      ctx.arc(cx, cy, 210, t * 0.3, t * 0.3 + Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Inner faint grid rings
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.beginPath();
      ctx.arc(cx, cy, 140, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // 2. Glowing back aura
      const radialGlow = ctx.createRadialGradient(cx, cy - 40, 20, cx, cy, 280);
      radialGlow.addColorStop(0, 'rgba(0, 245, 160, 0.15)');
      radialGlow.addColorStop(0.4, 'rgba(0, 210, 255, 0.08)');
      radialGlow.addColorStop(1, 'rgba(5, 7, 10, 0)');
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // 3. Human Silhouette & Wireframe Hologram
      ctx.save();
      ctx.translate(cx, cy);

      // Vertical scanning laser beam
      const scanY = Math.sin(t * 1.5) * 230;
      const scanGrad = ctx.createLinearGradient(0, scanY - 20, 0, scanY + 20);
      scanGrad.addColorStop(0, 'rgba(0, 245, 160, 0)');
      scanGrad.addColorStop(0.5, 'rgba(0, 245, 160, 0.4)');
      scanGrad.addColorStop(1, 'rgba(0, 245, 160, 0)');
      ctx.fillStyle = scanGrad;
      ctx.fillRect(-150, scanY - 15, 300, 30);

      // Draw stylized wireframe humanoid
      // Head
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.ellipse(0, -185, 24, 30, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Head visor glow
      ctx.strokeStyle = '#00F5A0';
      ctx.beginPath();
      ctx.moveTo(-16, -188);
      ctx.lineTo(16, -188);
      ctx.stroke();

      // Spine & central neural conduit
      ctx.strokeStyle = 'rgba(0, 210, 255, 0.7)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, -155);
      ctx.lineTo(0, 50);
      ctx.stroke();

      // Rib cage & torso curves
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.lineWidth = 1;
      for (let r = 0; r < 5; r++) {
        const ry = -120 + r * 22;
        const rw = 42 - r * 4;
        ctx.beginPath();
        ctx.ellipse(0, ry, rw, 12, 0, 0, Math.PI);
        ctx.stroke();
      }

      // Torso outline
      ctx.strokeStyle = 'rgba(0, 245, 160, 0.5)';
      ctx.beginPath();
      // Shoulders
      ctx.moveTo(-60, -135);
      ctx.lineTo(-20, -150);
      ctx.lineTo(20, -150);
      ctx.lineTo(60, -135);
      // Arms
      ctx.lineTo(80, -40);
      ctx.lineTo(95, 35);
      // Torso sides
      ctx.moveTo(-45, -120);
      ctx.lineTo(-32, 20);
      ctx.lineTo(-38, 50);
      ctx.lineTo(0, 75);
      ctx.lineTo(38, 50);
      ctx.lineTo(32, 20);
      ctx.lineTo(45, -120);
      // Left arm
      ctx.moveTo(-60, -135);
      ctx.lineTo(-80, -40);
      ctx.lineTo(-95, 35);
      // Legs
      ctx.moveTo(-35, 60);
      ctx.lineTo(-40, 160);
      ctx.lineTo(-42, 250);
      ctx.moveTo(35, 60);
      ctx.lineTo(40, 160);
      ctx.lineTo(42, 250);
      ctx.stroke();

      // Pulsing heart vector at chest
      const heartPulse = 1 + Math.sin(t * 5) * 0.35;
      const heartGrad = ctx.createRadialGradient(-16, -80, 2, -16, -80, 18 * heartPulse);
      heartGrad.addColorStop(0, 'rgba(255, 75, 75, 0.9)');
      heartGrad.addColorStop(0.5, 'rgba(255, 50, 100, 0.4)');
      heartGrad.addColorStop(1, 'rgba(255, 50, 100, 0)');
      ctx.fillStyle = heartGrad;
      ctx.beginPath();
      ctx.arc(-16, -80, 20 * heartPulse, 0, Math.PI * 2);
      ctx.fill();

      // Draw biometric nodes & interconnection lines
      bodyNodes.forEach((node, i) => {
        const pulse = 1 + Math.sin(t * 3 + node.pulse) * 0.4;

        // Node halo
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3 * pulse, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connecting filament to next node
        if (i < bodyNodes.length - 1) {
          ctx.strokeStyle = 'rgba(0, 245, 160, 0.15)';
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(bodyNodes[i + 1].x, bodyNodes[i + 1].y);
          ctx.stroke();
        }
      });

      // 4. Orbiting Data Particles
      particles.forEach((p) => {
        p.angle += p.speed;
        const px = Math.cos(p.angle) * p.radiusX;
        const py = Math.sin(p.angle) * p.radiusY;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;
      });

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[520px] lg:min-h-[620px] flex items-center justify-center pointer-events-auto">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
