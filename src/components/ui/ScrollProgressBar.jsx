import { useScroll, motion } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
