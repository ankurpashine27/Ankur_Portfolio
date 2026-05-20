import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouch] = useState(() =>
    window.matchMedia("(pointer: coarse)").matches,
  );
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isTouch) return;

    const onMove = (e) => setPosition({ x: e.clientX, y: e.clientY });

    const onHoverStart = (e) => {
      if (e.target.closest('a, button, [role="button"]')) setIsHovering(true);
    };
    const onHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onHoverStart);
    document.addEventListener("mouseout", onHoverEnd);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onHoverStart);
      document.removeEventListener("mouseout", onHoverEnd);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      {/* Inner dot — instant */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full z-[999] pointer-events-none mix-blend-difference"
        animate={{ x: position.x - 4, y: position.y - 4 }}
        transition={{ duration: 0 }}
      />
      {/* Outer ring — lagged */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full z-[998] pointer-events-none border-2 border-primary/60 transition-all duration-150 ${
          isHovering ? "w-10 h-10 bg-primary/10" : "w-6 h-6 bg-transparent"
        }`}
        animate={{
          x: position.x - (isHovering ? 20 : 12),
          y: position.y - (isHovering ? 20 : 12),
        }}
        transition={{ duration: 0.1, ease: "linear" }}
      />
    </>
  );
}
