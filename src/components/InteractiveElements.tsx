'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

// Glassmorphism card component
export const GlassCard = ({ 
  children, 
  className = "", 
  hover = true 
}: { 
  children: React.ReactNode; 
  className?: string; 
  hover?: boolean; 
}) => (
  <motion.div
    className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 
                shadow-2xl shadow-black/20 ${className}`}
    whileHover={hover ? { 
      scale: 1.02, 
      borderColor: "rgba(255, 185, 125, 0.3)",
      boxShadow: "0 25px 50px -12px rgba(255, 185, 125, 0.1)" 
    } : {}}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    {children}
  </motion.div>
)

// Magnetic button effect
export const MagneticButton = ({ 
  children, 
  className = "",
  onClick 
}: { 
  children: React.ReactNode; 
  className?: string;
  onClick?: () => void;
}) => {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY
    
    x.set(distanceX * 0.2)
    y.set(distanceY * 0.2)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  )
}

// Floating particles background
export const FloatingParticles = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    speed: number;
  }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
      y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.5 + 0.2
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-[#FFB97D] to-[#FF8C42]"
          style={{
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
          animate={{
            x: [particle.x, particle.x + 100, particle.x - 50, particle.x],
            y: [particle.y, particle.y - 200, particle.y - 100, particle.y],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

// Morphing blob
export const MorphingBlob = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#FFB97D]/20 to-[#FF8C42]/20 rounded-full blur-3xl"
        animate={{
          borderRadius: [
            "60% 40% 30% 70%/60% 30% 70% 40%",
            "30% 60% 70% 40%/50% 60% 30% 60%",
            "70% 30% 40% 60%/40% 70% 60% 30%",
            "60% 40% 30% 70%/60% 30% 70% 40%"
          ],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

// Text reveal animation
export const TextReveal = ({ 
  children, 
  className = "",
  delay = 0 
}: { 
  children: string; 
  className?: string;
  delay?: number;
}) => {
  const words = children.split(' ')
  
  return (
    <div className={`overflow-hidden ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.1,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}

// Scroll progress indicator
export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = scrollPx / winHeightPx
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFB97D] to-[#FF8C42] z-50 origin-left"
      style={{ scaleX: scrollProgress }}
    />
  )
}

// Cursor follower
export const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList.contains('cursor-hover')) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    window.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [])

  return (
    <motion.div
      className="fixed pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        scale: isHovering ? 2 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    >
      <div className="w-8 h-8 bg-white rounded-full opacity-75" />
    </motion.div>
  )
}
