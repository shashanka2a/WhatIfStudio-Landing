'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState, useMemo } from 'react'
import { TextReveal, MorphingBlob, GlassCard, MagneticButton } from './InteractiveElements'
import { TimelineIcon, AIIcon } from './CustomIcons'
import { WhatIfStudioLogo } from './WhatIfStudioLogo'

export function ModernHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  // Optimize mouse tracking with throttling
  const throttledMouseHandler = useMemo(() => {
    let timeoutId: NodeJS.Timeout
    return (e: MouseEvent) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }, 16) // ~60fps
    }
  }, [])

  useEffect(() => {
    // Simulate loading complete
    const timer = setTimeout(() => setIsLoaded(true), 100)
    
    window.addEventListener('mousemove', throttledMouseHandler, { passive: true })
    return () => {
      window.removeEventListener('mousemove', throttledMouseHandler)
      clearTimeout(timer)
    }
  }, [throttledMouseHandler])

  return (
    <motion.section 
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ y, opacity }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Pitch black background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Simplified animated gradient */}
      {isLoaded && (
        <motion.div
          className="absolute inset-0 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
          style={{
            background: `radial-gradient(circle at ${mousePosition.x / (typeof window !== 'undefined' ? window.innerWidth : 1920) * 100}% ${mousePosition.y / (typeof window !== 'undefined' ? window.innerHeight : 1080) * 100}%, rgba(255, 185, 125, 0.3) 0%, transparent 60%)`
          }}
        />
      )}

      {/* Optimized decorative elements */}
      {isLoaded && (
        <>
          <MorphingBlob className="absolute top-1/4 left-1/4 w-72 h-72 -z-10 opacity-60" />
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 185, 125, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 185, 125, 0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </>
      )}

      <div className="relative z-10 w-full flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-start justify-center text-left w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 sm:pl-12 md:pl-16 lg:pl-20">
          {/* Simplified floating icons - load after hero */}
          {isLoaded && (
            <>
              <motion.div
                className="absolute -top-16 -left-16 w-12 h-12 opacity-40"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <TimelineIcon className="w-full h-full" />
              </motion.div>

              <motion.div
                className="absolute -top-12 -right-12 w-14 h-14 opacity-30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <AIIcon className="w-full h-full" />
              </motion.div>
            </>
          )}

          {/* Mobile-optimized Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 md:mb-12 w-full flex justify-center sm:justify-start"
          >
            <GlassCard className="inline-block p-4 sm:p-6 md:p-8">
              <WhatIfStudioLogo 
                variant="full" 
                size="lg" 
                animated={true}
                className="scale-75 sm:scale-90 md:scale-100"
              />
            </GlassCard>
          </motion.div>

          {/* Mobile-optimized headline */}
          <div className="mb-6 md:mb-8 space-y-1 md:space-y-2 w-full">
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight text-center sm:text-left w-full"
              style={{ fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Rewriting sad endings
            </motion.h1>
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-transparent bg-gradient-to-r from-[#FFB97D] to-[#FF8C42] bg-clip-text leading-tight text-center sm:text-left w-full"
              style={{ fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              beautifully
            </motion.h1>
          </div>

          {/* Mobile-optimized subtitle */}
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-12 max-w-xs sm:max-w-md md:max-w-2xl mx-auto sm:mx-0 leading-relaxed text-center sm:text-left w-full"
            style={{ fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Exploring alternate timelines through AI filmmaking.
          </motion.p>

          {/* Mobile-optimized CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start items-center sm:items-start w-full"
          >
            <motion.button
              className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FFB97D] to-[#FF8C42] rounded-full font-semibold text-black text-sm sm:text-base transition-all duration-300 cursor-hover"
              style={{ fontFamily: "'Inter', sans-serif" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Our Films
            </motion.button>

            <motion.button
              className="w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/20 rounded-full backdrop-blur-sm hover:border-[#FFB97D]/50 font-semibold text-white hover:text-[#FFB97D] text-sm sm:text-base transition-all duration-300 cursor-hover"
              style={{ fontFamily: "'Inter', sans-serif" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile-optimized scroll indicator - positioned absolutely to section */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          className="w-4 sm:w-5 h-6 sm:h-8 border-2 border-white/30 rounded-full flex justify-center cursor-pointer"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-0.5 h-1.5 sm:h-2 bg-[#FFB97D] rounded-full mt-1 sm:mt-1.5"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-5 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </motion.section>
  )
}
