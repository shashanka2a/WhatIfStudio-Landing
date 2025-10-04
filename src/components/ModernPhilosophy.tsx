'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GlassCard, TextReveal } from './InteractiveElements'
import { BranchedTimeline } from './BranchedTimeline'

export function ModernPhilosophy() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3])

  const principles = [
    {
      number: "01",
      title: "Every Story Deserves Hope",
      description: "We believe that no narrative should end in despair when there's a path to something beautiful.",
      icon: "∞"
    },
    {
      number: "02",
      title: "Technology Serves Emotion",
      description: "AI is our brush, but human emotion is our canvas. We create technology that amplifies feeling.",
      icon: "♡"
    },
    {
      number: "03",
      title: "What If Is Sacred",
      description: "The most powerful words in any language. They open doors to universes where different choices bloom.",
      icon: "?"
    }
  ]

  return (
    <section ref={containerRef} className="relative py-20 sm:py-32 lg:py-40 overflow-hidden">
      {/* Pitch black background */}
      <div className="absolute inset-0 bg-black" />

      {/* Mobile-optimized background elements */}
      <motion.div
        className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-48 sm:w-80 lg:w-96 h-48 sm:h-80 lg:h-96 bg-gradient-to-br from-[#FFB97D]/5 to-[#FF8C42]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute -bottom-16 sm:-bottom-32 -left-16 sm:-left-32 w-40 sm:w-64 lg:w-80 h-40 sm:h-64 lg:h-80 bg-gradient-to-tr from-[#FF8C42]/5 to-[#FFB97D]/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mobile-optimized Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#FFB97D]/10 to-[#FF8C42]/10 rounded-full border border-[#FFB97D]/20 mb-8"
            whileHover={{ scale: 1.05, borderColor: "rgba(255, 185, 125, 0.4)" }}
          >
            <span className="text-[#FFB97D] font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
              Our Philosophy
            </span>
          </motion.div>

          <div className="mb-6">
            <TextReveal 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              delay={0.3}
            >
              We rewrite endings that
            </TextReveal>
            <TextReveal 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-[#FFB97D] to-[#FF8C42] bg-clip-text leading-tight"
              delay={0.8}
            >
              broke our hearts
            </TextReveal>
          </div>

          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Through AI filmmaking, we craft alternate realities where different choices lead to different destinies. Every story deserves a second chance.
          </motion.p>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {principles.map((principle, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 1 + i * 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <GlassCard className="h-full p-8 text-center hover:shadow-[0_0_30px_rgba(255,185,125,0.15)]">
                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FFB97D]/20 to-[#FF8C42]/20 rounded-full mb-6 border border-[#FFB97D]/30"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span 
                    className="text-2xl font-bold text-[#FFB97D]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {principle.icon}
                  </span>
                </motion.div>

                {/* Number */}
                <motion.div
                  className="text-sm font-bold text-[#FFB97D]/60 mb-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {principle.number}
                </motion.div>

                {/* Title */}
                <motion.h4
                  className="text-xl font-bold text-white mb-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {principle.title}
                </motion.h4>

                {/* Description */}
                <motion.p
                  className="text-gray-300 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {principle.description}
                </motion.p>

                {/* Hover accent */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFB97D] to-[#FF8C42] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Interactive Timeline Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <GlassCard className="p-8 sm:p-12">
            <div className="text-center mb-8 sm:mb-12">
              <motion.h4
                className="text-2xl sm:text-3xl font-bold text-white mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                How Stories Could Change
              </motion.h4>
              <motion.p
                className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Explore the branching paths from heartbreak to hope. Each node represents a possibility, 
                a different choice, a new timeline where love endures.
              </motion.p>
            </div>

            {/* Main Timeline Visualization */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 2.2 }}
            >
              <BranchedTimeline className="min-h-[400px] sm:min-h-[500px]" />
            </motion.div>

            {/* Timeline Legend */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 2.8 }}
            >
              <div className="flex items-center justify-center space-x-3">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#0D1B2A] to-[#415A77]"></div>
                <span className="text-sm text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Original Ending
                </span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#415A77] to-[#778DA9]"></div>
                <span className="text-sm text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                  What If Possibilities
                </span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#778DA9] to-[#FFB97D]"></div>
                <span className="text-sm text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Beautiful Rewriting
                </span>
              </div>
            </motion.div>

            {/* Inspirational Quote */}
            <motion.div
              className="text-center mt-8 sm:mt-12 pt-8 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 3.2 }}
            >
              <blockquote className="text-lg sm:text-xl text-[#FFB97D] font-medium italic mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                "Every ending is just a beginning in disguise"
              </blockquote>
              <p className="text-sm text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                — WhatIfStudio Philosophy
              </p>
            </motion.div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
