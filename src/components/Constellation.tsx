import { useEffect, useRef } from "react";

type ConstellationProps = {
  className?: string;
  density?: number; // particles per 100k px^2 (roughly)
  maxDist?: number; // max line distance in px
  speed?: number; // base drift speed
};

export default function Constellation({
  className = "",
  density = 10,
  maxDist = 140,
  speed = 0.28,
}: ConstellationProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reducedMotion = media.matches;

    const onMediaChange = () => (reducedMotion = media.matches);
    media.addEventListener?.("change", onMediaChange);

    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const mouse = { x: -9999, y: -9999, active: false };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      w = parent.clientWidth;
      h = parent.clientHeight;

      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const area = w * h;
    const count = Math.max(18, Math.floor((area / 100000) * density));

    const rand = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const particles = Array.from({ length: count }).map(() => ({
      x: rand(0, w),
      y: rand(0, h),
      vx: rand(-speed, speed),
      vy: rand(-speed, speed),
      r: rand(0.8, 1.8),
    }));

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave, { passive: true });

    const draw = () => {
      // For reduced motion: render a single static frame (still looks good).
      if (reducedMotion) {
        renderFrame(true);
        rafRef.current = null;
        return;
      }
      renderFrame(false);
      rafRef.current = requestAnimationFrame(draw);
    };

    const renderFrame = (staticFrame: boolean) => {
      ctx.clearRect(0, 0, w, h);

      // Very subtle overall dimming to keep text dominant
      // (If you already have dark overlays, you can remove this)
      // ctx.fillStyle = "rgba(0,0,0,0.05)";
      // ctx.fillRect(0, 0, w, h);

      // Update
      if (!staticFrame) {
        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;

          // Soft mouse attraction (subtle)
          if (mouse.active) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 180) {
              p.x += dx * 0.002;
              p.y += dy * 0.002;
            }
          }

          // Wrap edges
          if (p.x < -10) p.x = w + 10;
          if (p.x > w + 10) p.x = -10;
          if (p.y < -10) p.y = h + 10;
          if (p.y > h + 10) p.y = -10;
        }
      }

      // Lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = 1 - dist / maxDist;

            // Line color: cool futuristic tint, very low opacity
            ctx.strokeStyle = `rgba(99,102,241,${alpha * 0.12})`; // indigo-ish
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Dots
      for (const p of particles) {
        ctx.fillStyle = "rgba(255,255,255,0.28)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Optional: one faint glow bloom (keeps it “future”)
      // Comment out if it competes with your background.
      ctx.fillStyle = "rgba(34,211,238,0.035)";
      ctx.beginPath();
      ctx.arc(w * 0.78, h * 0.28, Math.min(w, h) * 0.28, 0, Math.PI * 2);
      ctx.fill();
    };

    // Start
    draw();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      media.removeEventListener?.("change", onMediaChange);
    };
  }, [density, maxDist, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
