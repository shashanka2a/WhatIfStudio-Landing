'use client'

import { ModernHero } from '@/components/ModernHero'
import { ModernGallery } from '@/components/ModernGallery'
import { ModernPhilosophy } from '@/components/ModernPhilosophy'
import { ModernJoinUs } from '@/components/ModernJoinUs'
import { ModernNavigation } from '@/components/ModernNavigation'
import { FloatingParticles, ScrollProgress, CursorFollower } from '@/components/InteractiveElements'
import { useEffect, useState } from 'react'

export default function Home() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    // Mark fonts as loaded after a short delay
    const timer = setTimeout(() => setFontsLoaded(true), 150)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="dark">
      <div className="min-h-screen bg-black text-white overflow-x-hidden relative w-full max-w-full">
        {/* Background overlay to prevent section bleeding */}
        <div className="fixed inset-0 bg-black z-0" />
        
        {/* Navigation */}
        <ModernNavigation />
        
        {/* Interactive elements */}
        <ScrollProgress />
        <CursorFollower />
        {fontsLoaded && <FloatingParticles />}
        
        {/* Main content with proper layering and isolation */}
        <main className="relative z-10 w-full max-w-full">
          <div id="home" className="relative isolate w-full">
            <ModernHero />
          </div>
          <div id="gallery" className="relative isolate w-full">
            <ModernGallery />
          </div>
          <div id="philosophy" className="relative isolate w-full">
            <ModernPhilosophy />
          </div>
          <div id="join" className="relative isolate w-full">
            <ModernJoinUs />
          </div>
        </main>
      </div>
    </div>
  )
}
