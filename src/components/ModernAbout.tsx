import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';
import { GlassCard, TextReveal } from './InteractiveElements';
import { HeartIcon, FilmIcon } from './CustomIcons';

export function ModernAbout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  const stats = [
    { icon: HeartIcon, number: "∞", label: "Stories Rewritten", delay: 0 },
    { icon: FilmIcon, number: "24", label: "AI Films Created", delay: 0.2 },
    { icon: HeartIcon, number: "1M+", label: "Hearts Mended", delay: 0.4 }
  ];

  return (
    <section ref={containerRef} className="relative py-20 sm:py-32 lg:py-40 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#1B263B]/50 to-[#0D1B2A]/50"
        style={{ x, rotate }}
      />
      
      {/* Mobile-optimized geometric shapes */}
      <motion.div
        className="absolute top-10 sm:top-20 right-4 sm:right-20 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 border border-[#FFB97D]/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute bottom-20 sm:bottom-40 left-2 sm:left-10 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 bg-gradient-to-r from-[#FFB97D]/10 to-[#FF8C42]/10 transform rotate-45"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8 lg:space-y-8"
          >
            <div className="space-y-3 sm:space-y-4">
              <motion.div
                className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#FFB97D]/20 to-[#FF8C42]/20 rounded-full border border-[#FFB97D]/30"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xs sm:text-sm font-semibold text-[#FFB97D]" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Our Mission
                </span>
              </motion.div>

              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                style={{ fontFamily: "'Inter', sans-serif" }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                What if stories could
              </motion.h2>
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-[#FFB97D] to-[#FF8C42] bg-clip-text leading-tight"
                style={{ fontFamily: "'Inter', sans-serif" }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                change?
              </motion.h2>
            </div>

            <motion.div
              className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <p>
                Every heartbreak in fiction doesn't have to be final. Every tragic ending doesn't have to be the only truth.
              </p>
              <p>
                We believe in the power of "what if" — the infinite possibilities that exist in parallel timelines where love endures, heroes survive, and hope prevails.
              </p>
              <p className="hidden sm:block">
                Through AI filmmaking, we're crafting beautiful alternate realities where different choices lead to different destinies.
              </p>
            </motion.div>

            {/* Mobile-optimized CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.button
                className="w-full sm:w-auto group relative px-4 sm:px-6 py-2.5 sm:py-3 bg-transparent border-2 border-[#FFB97D]/30 rounded-xl overflow-hidden cursor-hover text-sm sm:text-base"
                whileHover={{ borderColor: "rgba(255, 185, 125, 0.8)" }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#FFB97D]/10 to-[#FF8C42]/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 font-semibold text-[#FFB97D] group-hover:text-white transition-colors duration-300">
                  Explore Our Philosophy
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right column - Mobile-optimized Visual elements */}
          <motion.div
            className="relative order-first lg:order-last"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Main visual card */}
            <GlassCard className="p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
              <div className="relative">
                {/* Animated visualization */}
                <motion.div
                  className="w-full h-40 sm:h-48 lg:h-64 bg-gradient-to-br from-[#FFB97D]/20 to-[#FF8C42]/20 rounded-xl relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Timeline visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="relative w-3/4 h-0.5 sm:h-1 bg-gradient-to-r from-[#FFB97D] to-[#FF8C42] rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 1.5, delay: 1 }}
                    >
                      {/* Timeline nodes */}
                      {[0, 33, 66, 100].map((position, i) => (
                        <motion.div
                          key={i}
                          className="absolute top-1/2 w-2.5 sm:w-3 lg:w-4 h-2.5 sm:h-3 lg:h-4 bg-white rounded-full transform -translate-y-1/2 shadow-lg"
                          style={{ left: `${position}%`, marginLeft: '-6px' }}
                          initial={{ scale: 0, y: -20 }}
                          animate={isInView ? { scale: 1, y: -8 } : {}}
                          transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                          whileHover={{ scale: 1.5, y: -12 }}
                        />
                      ))}
                    </motion.div>
                  </div>

                  {/* Floating elements */}
                  <motion.div
                    className="absolute top-2 sm:top-4 right-2 sm:right-4 w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8"
                    animate={{ 
                      y: [0, -8, 0],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <HeartIcon className="w-full h-full opacity-60" />
                  </motion.div>

                  <motion.div
                    className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6"
                    animate={{ 
                      y: [0, 8, 0],
                      rotate: [0, -10, 10, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    <FilmIcon className="w-full h-full opacity-40" />
                  </motion.div>
                </motion.div>

                <motion.h4
                  className="text-lg sm:text-xl font-bold text-white mt-3 sm:mt-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.5 }}
                >
                  Infinite Timelines
                </motion.h4>
                <motion.p
                  className="text-gray-400 mt-1 sm:mt-2 text-sm sm:text-base"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.7 }}
                >
                  Every decision creates a new path forward
                </motion.p>
              </div>
            </GlassCard>

            {/* Mobile-optimized Stats grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.8 + stat.delay }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <GlassCard className="text-center p-2 sm:p-3 lg:p-4">
                    <div className="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8 mx-auto mb-1 sm:mb-2 opacity-60">
                      <stat.icon className="w-full h-full" />
                    </div>
                    <div 
                      className="text-sm sm:text-base lg:text-lg font-bold text-[#FFB97D] mb-0.5 sm:mb-1"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {stat.number}
                    </div>
                    <div 
                      className="text-xs text-gray-400"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {stat.label}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
