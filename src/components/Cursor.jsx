import { useState, useEffect } from "react";

const css = `
.cursor {
  position: fixed;
  width: 12px; height: 12px;
  background: var(--accent);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  transition: width 0.2s, height 0.2s;
}
.cursor-ring {
  position: fixed;
  width: 36px; height: 36px;
  border: 1px solid var(--accent);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  opacity: 0.5;
  transition: width 0.3s, height 0.3s;
}
`;

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ring, setRing] = useState({ x: -100, y: -100 });

  useEffect(() => {
    let cur = { x: -100, y: -100 };
    let ringPos = { x: -100, y: -100 };

    const onMove = (e) => { cur = { x: e.clientX, y: e.clientY }; setPos(cur); };
    window.addEventListener("mousemove", onMove);

    let rafId;
    const animate = () => {
      ringPos = {
        x: ringPos.x + (cur.x - ringPos.x) * 0.12,
        y: ringPos.y + (cur.y - ringPos.y) * 0.12,
      };
      setRing({ ...ringPos });
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(rafId); };
  }, []);

  return (
    <>
      <style>{css}</style>
      <div className="cursor" style={{ left: pos.x, top: pos.y }} />
      <div className="cursor-ring" style={{ left: ring.x, top: ring.y }} />
    </>
  );
}
