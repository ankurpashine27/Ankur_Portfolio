import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full z-[100] flex items-center justify-center bg-dark-bg"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.4, delay: 1.1 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center"
      >
        <motion.h1
          className="text-5xl font-bold font-heading gradient-text"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 0.8, repeat: 1 }}
        >
          Ankur.
        </motion.h1>
        <motion.div
          className="mt-4 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </motion.div>
    </motion.div>
  );
}
