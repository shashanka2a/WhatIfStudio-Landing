'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { GlassCard } from './InteractiveElements'
import { ImageWithFallback } from './figma/ImageWithFallback'

const films = [
  {
    title: "In Another Timeline",
    image: "https://images.unsplash.com/photo-1634660476928-63015cdbc6d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRpZ2l0YWwlMjBhcnQlMjBjaW5lbWF8ZW58MXx8fHwxNzU5NTg3MjYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Where paths diverged differently",
    duration: "4:32",
    year: "2024",
    genre: "Sci-Fi Romance",
    featured: true
  },
  {
    title: "Love That Lasted",
    image: "https://images.unsplash.com/photo-1663286359796-b3da79054cab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwYWJzdHJhY3QlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1OTU4NzI2NXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Forever written in the stars",
    duration: "6:18",
    year: "2024",
    genre: "Drama"
  },
  {
    title: "Heroes Who Lived",
    image: "https://images.unsplash.com/photo-1630973981820-4a756320d1de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xvZ3JhcGhpYyUyMGdyYWRpZW50JTIwYWJzdHJhY3R8ZW58MXx8fHwxNzU5NTg3MjY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Courage that conquered fate",
    duration: "8:45",
    year: "2024",
    genre: "Action"
  },
  {
    title: "Parallel Hearts",
    image: "https://images.unsplash.com/photo-1718498576347-b57e7bdf46a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZ2VvbWV0cmljJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzU5NTg3MjcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Two souls, infinite possibilities",
    duration: "5:27",
    year: "2024",
    genre: "Romance"
  },
  {
    title: "Temporal Echoes",
    image: "https://images.unsplash.com/photo-1523539090110-4deee7810c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhlcmVhbCUyMGxpZ2h0JTIwYWJzdHJhY3R8ZW58MXx8fHwxNzU5NTg3MjczfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "When time bends for love",
    duration: "7:03",
    year: "2024",
    genre: "Sci-Fi"
  }
]

export function ModernGallery() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-50px" })
  const [hoveredFilm, setHoveredFilm] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])

  return (
    <section ref={containerRef} className="relative py-20 sm:py-32 lg:py-40 overflow-hidden">
      {/* Pitch black background */}
      <div className="absolute inset-0 bg-black" />

      {/* Mobile-optimized floating geometric elements */}
      <motion.div
        className="absolute top-16 sm:top-32 left-4 sm:left-16 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#FFB97D] rounded-full"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      <motion.div
        className="absolute bottom-20 sm:bottom-40 right-4 sm:right-20 w-2 sm:w-3 h-2 sm:h-3 border border-[#FF8C42] rotate-45"
        animate={{ 
          rotate: [45, 225, 45],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mobile-optimized Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#FFB97D]/10 to-[#FF8C42]/10 rounded-full border border-[#FFB97D]/20 mb-4 sm:mb-6"
            whileHover={{ scale: 1.05, borderColor: "rgba(255, 185, 125, 0.4)" }}
          >
            <span className="text-[#FFB97D] font-semibold text-sm sm:text-base" style={{ fontFamily: "'Inter', sans-serif" }}>
              Our Latest Works
            </span>
          </motion.div>

          <motion.h3 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 px-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Reimagined Stories
          </motion.h3>
          
          <motion.p 
            className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-xs sm:max-w-md lg:max-w-2xl mx-auto px-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the power of alternate endings through our AI-crafted short films
          </motion.p>
        </motion.div>

        {/* Mobile-optimized Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          {films.map((film, index) => (
            <motion.div
              key={film.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1, 
                ease: [0.22, 1, 0.36, 1]
              }}
              className={`group cursor-pointer ${
                film.featured ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
              onMouseEnter={() => setHoveredFilm(index)}
              onMouseLeave={() => setHoveredFilm(null)}
            >
              <GlassCard className="p-0 overflow-hidden h-full hover:shadow-[0_0_40px_rgba(255,185,125,0.2)]">
                <div className="relative overflow-hidden">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <ImageWithFallback
                      src={film.image}
                      alt={film.title}
                      className={`w-full object-cover transition-all duration-700 ${
                        film.featured ? 'h-[200px] sm:h-[240px] lg:h-[280px]' : 'h-[200px] sm:h-[240px] lg:h-[280px]'
                      }`}
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    
                    {/* Hover effects */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#FFB97D]/20 to-[#FF8C42]/20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredFilm === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Mobile-optimized Film metadata */}
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex flex-col gap-1 sm:gap-2">
                    <motion.span 
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs font-medium text-[#FFB97D] border border-[#FFB97D]/30"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                    >
                      {film.genre}
                    </motion.span>
                    {film.featured && (
                      <motion.span 
                        className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-[#FFB97D] to-[#FF8C42] rounded-full text-xs font-bold text-black"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.7 }}
                      >
                        FEATURED
                      </motion.span>
                    )}
                  </div>

                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex gap-2">
                    <motion.span 
                      className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-black/70 backdrop-blur-sm rounded-md text-xs font-medium text-white/80"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.6 }}
                    >
                      {film.duration}
                    </motion.span>
                  </div>

                  {/* Mobile-optimized Play button */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: hoveredFilm === index ? 1 : 0, 
                      opacity: hoveredFilm === index ? 1 : 0 
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <motion.div
                      className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-[#FFB97D]/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border-2 border-white/20"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className="w-0 h-0 border-l-4 sm:border-l-5 lg:border-l-6 border-l-black border-y-3 sm:border-y-3.5 lg:border-y-4 border-y-transparent ml-0.5 sm:ml-0.5 lg:ml-1" />
                    </motion.div>
                  </motion.div>

                  {/* Mobile-optimized Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6">
                    <motion.h4 
                      className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-[#FFB97D] transition-colors duration-300"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {film.title}
                    </motion.h4>
                    <motion.p 
                      className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors duration-300"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {film.description}
                    </motion.p>
                  </div>

                  {/* Progress bar animation */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#FFB97D] to-[#FF8C42]"
                    initial={{ width: "0%" }}
                    animate={{ width: hoveredFilm === index ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}
