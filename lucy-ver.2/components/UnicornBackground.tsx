import React, { useEffect, useRef } from 'react';

export const UnicornBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  // Stores [randomOffset, xJitter, yJitter] for each particle
  const particlesRef = useRef<Float32Array>(new Float32Array(0)); 

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId: number;
    
    // Configuration
    const spacing = 24; // Base distance between particles
    let columns = 0;
    let rows = 0;

    const initGrid = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      columns = Math.ceil(width / spacing);
      rows = Math.ceil(height / spacing);
      const numParticles = columns * rows;
      
      // Initialize particle data: [twinklePhase, xJitter, yJitter]
      const data = new Float32Array(numParticles * 3);
      
      for (let i = 0; i < numParticles; i++) {
        data[i * 3 + 0] = Math.random(); // Twinkle phase
        data[i * 3 + 1] = (Math.random() - 0.5) * spacing * 0.8; // X jitter
        data[i * 3 + 2] = (Math.random() - 0.5) * spacing * 0.8; // Y jitter
      }
      
      particlesRef.current = data;
    };

    const handleResize = () => {
      initGrid();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    initGrid();

    const render = (time: number) => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;
      
      // The flashlight radius
      const revealRadius = 450; 
      const revealRadiusSq = revealRadius * revealRadius;
      
      // Time scaling for animations
      const timeSec = time * 0.001;
      
      // Loop bounds optimization
      const padding = 2; 
      const startCol = Math.max(0, Math.floor((mouseX - revealRadius) / spacing) - padding);
      const endCol = Math.min(columns, Math.ceil((mouseX + revealRadius) / spacing) + padding);
      const startRow = Math.max(0, Math.floor((mouseY - revealRadius) / spacing) - padding);
      const endRow = Math.min(rows, Math.ceil((mouseY + revealRadius) / spacing) + padding);

      // Render mode for glowing effect
      // 'lighter' works well for sparkles on dark background
      ctx.globalCompositeOperation = 'screen'; 

      const data = particlesRef.current;

      for (let y = startRow; y < endRow; y++) {
        for (let x = startCol; x < endCol; x++) {
          const index = (y * columns + x) * 3;
          if (index >= data.length) continue;

          // Base grid position + jitter
          const px = x * spacing + spacing / 2 + data[index + 1];
          const py = y * spacing + spacing / 2 + data[index + 2];

          const dx = px - mouseX;
          const dy = py - mouseY;
          const distSq = dx * dx + dy * dy;

          if (distSq < revealRadiusSq) {
            const dist = Math.sqrt(distSq);
            // Normalized distance (0 at mouse, 1 at edge)
            const normDist = dist / revealRadius;
            
            // Inverted proximity (1 at mouse, 0 at edge)
            const proximity = 1 - normDist;
            
            // Smooth easing for opacity: cubic or quartic looks best for light falloff
            const intensity = Math.pow(proximity, 3);

            if (intensity > 0.02) {
              const twinklePhase = data[index];
              
              // Twinkle: oscillating sine wave tailored to be mostly active
              // Result is approx 0.4 to 1.0
              const twinkle = 0.7 + 0.3 * Math.sin(timeSec * 3 + twinklePhase * 10);
              
              // Dynamic radius:
              // Particles near center are larger.
              // Base size 1.0px, grows to 2.5px
              const radius = 1.0 + (intensity * 2.0);
              
              // Dynamic Color:
              // HSL Flow based on space (px, py) and time
              // Slower time factor for elegance
              const hue = (px * 0.08 + py * 0.05 + timeSec * 30) % 360;
              
              // Alpha logic
              const alpha = intensity * twinkle;
              
              ctx.beginPath();
              ctx.arc(px, py, radius, 0, Math.PI * 2);
              ctx.fillStyle = `hsla(${hue}, 85%, 70%, ${alpha})`;
              ctx.fill();

              // Add a "core" to the sparkle for extra brightness at the center
              // Only for particles reasonably close to center
              if (intensity > 0.4) {
                 ctx.beginPath();
                 ctx.arc(px, py, radius * 0.4, 0, Math.PI * 2);
                 ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                 ctx.fill();
              }
            }
          }
        }
      }
      
      // Restore default composite operation if needed elsewhere (though this canvas is isolated)
      ctx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none mix-blend-screen"
    />
  );
};