import { motion } from 'motion/react';

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative"
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 text-8xl md:text-9xl font-bold text-transparent bg-gradient-to-r from-[#FFB97D] to-[#FFB97D] bg-clip-text blur-lg opacity-50">
          W?
        </div>
        {/* Main logo */}
        <h1 className="relative text-8xl md:text-9xl font-bold text-transparent bg-gradient-to-r from-white to-[#FFB97D] bg-clip-text">
          W?
        </h1>
      </div>
    </motion.div>
  );
}
