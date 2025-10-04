'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

import { GlassCard } from './InteractiveElements'

export function ModernNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 0.8])
  const backdropBlur = useTransform(scrollYProgress, [0, 0.1], [0, 20])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Gallery', href: '#gallery' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Join Us', href: '#join' }
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[100] px-4 sm:px-6 lg:px-8 py-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-xl border-b border-white/10"
        style={{ 
          opacity: backgroundOpacity,
          backdropFilter: `blur(${backdropBlur}px)`
        }}
      />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <motion.span
              className="text-xl font-bold text-transparent bg-gradient-to-r from-[#FFB97D] to-[#FF8C42] bg-clip-text tracking-wide"
              style={{ fontFamily: "'Inter', sans-serif" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              WhatIfStudio.art
            </motion.span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative px-6 py-3 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
                style={{ fontFamily: "'Inter', sans-serif" }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FFB97D] to-[#FF8C42] opacity-0 group-hover:opacity-100"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
