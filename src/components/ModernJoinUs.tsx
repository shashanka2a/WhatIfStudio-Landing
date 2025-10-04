'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { GlassCard, MagneticButton, TextReveal } from './InteractiveElements'
import { WavePattern } from './CustomIcons'

export function ModernJoinUs() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const features = [
    {
      icon: "🎬",
      title: "Early Access",
      description: "Be the first to experience new alternate endings"
    },
    {
      icon: "🤝",
      title: "Community",
      description: "Connect with fellow storytellers and dreamers"
    },
    {
      icon: "🎨",
      title: "Behind Scenes",
      description: "Learn how we craft these beautiful realities"
    }
  ]

  return (
    <section ref={containerRef} className="relative py-20 sm:py-32 lg:py-40 overflow-hidden">
      {/* Pitch black background */}
      <div className="absolute inset-0 bg-black" />

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 opacity-30">
        <WavePattern className="w-full h-40" />
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-[#FFB97D] rounded-full opacity-60"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-40 right-32 w-6 h-6 border-2 border-[#FF8C42] rotate-45 opacity-40"
        animate={{
          rotate: [45, 225, 45],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          {/* Mobile-optimized Header */}
          <motion.div
            className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#FFB97D]/10 to-[#FF8C42]/10 rounded-full border border-[#FFB97D]/20 mb-6 sm:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05, borderColor: "rgba(255, 185, 125, 0.4)" }}
          >
            <span className="text-[#FFB97D] font-semibold text-sm sm:text-base" style={{ fontFamily: "'Inter', sans-serif" }}>
              Join the Movement
            </span>
          </motion.div>

          <div className="mb-6">
            <TextReveal 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              delay={0.3}
            >
              Join Our Universe of
            </TextReveal>
            <TextReveal 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-[#FFB97D] to-[#FF8C42] bg-clip-text leading-tight"
              delay={0.8}
            >
              Infinite Possibilities
            </TextReveal>
          </div>

          <motion.p 
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
            style={{ fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Have a story that deserves a different ending? We're listening. 
            Share your heartbreak, and let us rewrite it into something beautiful.
          </motion.p>
        </div>

        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-20"
        >
          <GlassCard className="p-12 text-center max-w-4xl mx-auto">
            <motion.h4
              className="text-2xl font-bold text-white mb-8"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Ready to Rewrite Your Story?
            </motion.h4>

            {/* Email signup form */}
            <motion.form 
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8"
            >
              <motion.input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB97D]/50 focus:border-[#FFB97D]/50 transition-all duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
                required
                whileFocus={{ scale: 1.02 }}
              />
              
              <MagneticButton
                className={`px-8 py-4 bg-gradient-to-r from-[#FFB97D] to-[#FF8C42] rounded-xl transition-all duration-300 ${
                  isSubmitted ? 'from-green-500 to-green-600' : ''
                }`}
              >
                <span className="font-semibold text-black" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {isSubmitted ? '✓ Joined!' : 'Join Waitlist'}
                </span>
              </MagneticButton>
            </motion.form>

            <motion.p
              className="text-sm text-gray-400"
              style={{ fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              Be the first to know when we launch new alternate endings
            </motion.p>
          </GlassCard>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.3 + i * 0.1 }}
            >
              <GlassCard className="p-6 text-center h-full hover:shadow-[0_0_25px_rgba(255,185,125,0.1)]">
                <motion.div
                  className="text-3xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {feature.icon}
                </motion.div>
                
                <motion.h5
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {feature.title}
                </motion.h5>
                
                <motion.p
                  className="text-gray-300 text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {feature.description}
                </motion.p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Alternative CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <MagneticButton className="group px-8 py-4 border-2 border-white/20 rounded-full backdrop-blur-sm hover:border-[#FFB97D]/50 transition-colors duration-300 cursor-hover">
            <span className="font-semibold text-white group-hover:text-[#FFB97D]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Submit Your Story
            </span>
          </MagneticButton>

          <MagneticButton className="group px-8 py-4 border-2 border-white/20 rounded-full backdrop-blur-sm hover:border-[#FFB97D]/50 transition-colors duration-300 cursor-hover">
            <span className="font-semibold text-white group-hover:text-[#FFB97D]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Partner With Us
            </span>
          </MagneticButton>
        </motion.div>

        {/* Footer message */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.p
            className="text-gray-400 italic"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            "Because every story deserves a second chance."
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
