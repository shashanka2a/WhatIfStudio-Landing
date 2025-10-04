import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Logo } from './Logo';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated cosmic gradient background */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#FFB97D] opacity-90"
        />
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, #FFB97D 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, #FFB97D 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, #FFB97D 0%, transparent 50%)",
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute inset-0 opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <Logo />
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Rewriting sad endings{' '}
          <span className="text-transparent bg-gradient-to-r from-[#FFB97D] to-[#FF8C42] bg-clip-text">
            beautifully
          </span>
          .
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Exploring alternate timelines through AI filmmaking.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#FFB97D] to-[#FF8C42] hover:from-[#FF8C42] hover:to-[#FFB97D] text-black font-semibold px-8 py-4 text-lg transition-all duration-400 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Watch Reimagined Stories
          </Button>
        </motion.div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#FFB97D] rounded-full opacity-30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{
              y: -100,
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
    </section>
  );
}
