import React, { useEffect, useRef } from 'react';

const WaterRipple = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Resize canvas to full window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const ripples = [];

    // Spawn a water ripple on click
    const createRipple = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // Splash particles (droplets)
      const particles = [];
      const particleCount = 10 + Math.floor(Math.random() * 6);
      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1.5 + Math.random() * 4.5;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 1.2 + Math.random() * 2.2,
          alpha: 0.9,
          color: Math.random() > 0.4 ? '#38bdf8' : '#60a5fa'
        });
      }

      ripples.push({
        x,
        y,
        radius: 0,
        maxRadius: 160 + Math.random() * 40,
        alpha: 0.85,
        speed: 3.5,
        lineWidth: 3,
        particles
      });
    };

    window.addEventListener('pointerdown', createRipple);

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];

        // 1. Draw Concentric Water Waves
        r.radius += r.speed;
        r.alpha *= 0.945;
        r.lineWidth = Math.max(0.5, r.lineWidth * 0.98);

        if (r.alpha > 0.01) {
          // Main Wave Ring 1
          ctx.save();
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(56, 189, 248, ${r.alpha})`;
          ctx.lineWidth = r.lineWidth * 2;
          ctx.shadowColor = '#3b82f6';
          ctx.shadowBlur = 12;
          ctx.stroke();

          // Outer Secondary Wave Ring 2
          if (r.radius > 15) {
            ctx.beginPath();
            ctx.arc(r.x, r.y, r.radius * 0.7, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(96, 165, 250, ${r.alpha * 0.6})`;
            ctx.lineWidth = r.lineWidth * 1.2;
            ctx.stroke();
          }

          // Inner Ripple Center Ring 3
          if (r.radius > 30) {
            ctx.beginPath();
            ctx.arc(r.x, r.y, r.radius * 0.35, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(147, 197, 253, ${r.alpha * 0.4})`;
            ctx.lineWidth = r.lineWidth * 0.8;
            ctx.stroke();
          }
          ctx.restore();

          // 2. Draw & Update Splash Droplets
          for (let p of r.particles) {
            p.x += p.vx;
            p.y += p.vy;
            p.vx *= 0.94;
            p.vy *= 0.94;
            p.alpha *= 0.93;

            if (p.alpha > 0.02) {
              ctx.save();
              ctx.beginPath();
              ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
              ctx.fillStyle = p.color;
              ctx.globalAlpha = p.alpha;
              ctx.shadowColor = '#38bdf8';
              ctx.shadowBlur = 8;
              ctx.fill();
              ctx.restore();
            }
          }
        } else {
          ripples.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('pointerdown', createRipple);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999] w-full h-full"
    />
  );
};

export default WaterRipple;
