"use client";

import { useEffect, useState } from "react";

const CursorRipple = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const RIPPLE_SIZE = 800;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9998] transition-all duration-100 ease-out"
      style={{
        transform: `translate(${coords.x - RIPPLE_SIZE / 2}px, ${
          coords.y - RIPPLE_SIZE / 2
        }px)`,
      }}
    >
      <div className="w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,#89b6e233,transparent)] dark:bg-[radial-gradient(circle,#6c98c533,transparent)] blur-[107px]" />
    </div>
  );
};

export default CursorRipple;
