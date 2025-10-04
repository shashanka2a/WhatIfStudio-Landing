import { ModernHero } from './components/ModernHero';
import { ModernGallery } from './components/ModernGallery';
import { ModernPhilosophy } from './components/ModernPhilosophy';
import { ModernJoinUs } from './components/ModernJoinUs';
import { ModernNavigation } from './components/ModernNavigation';
import { FloatingParticles, ScrollProgress, CursorFollower } from './components/InteractiveElements';

import { useEffect, useState } from 'react';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Set document title and meta tags
    document.title = 'WhatIfStudio.art - Rewriting Sad Endings Beautifully';
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'WhatIfStudio.art uses AI to reimagine sad endings into beautiful alternate timelines. Experience cinematic storytelling that transforms despair into hope through innovative technology.');
    
    // Create favicon
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/svg+xml';
    favicon.href = 'data:image/svg+xml;base64,' + btoa(`
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="faviconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#0D1B2A" />
            <stop offset="100%" stop-color="#FFB97D" />
          </linearGradient>
        </defs>
        <circle cx="16" cy="16" r="15" fill="url(#faviconGradient)" />
        <path d="M 10 16 C 10 12, 14 12, 16 16 C 18 12, 22 12, 22 16 C 22 20, 18 20, 16 16 C 14 20, 10 20, 10 16" stroke="white" stroke-width="2" stroke-linecap="round" fill="none" />
        <circle cx="16" cy="16" r="1.5" fill="white" />
      </svg>
    `);
    document.head.appendChild(favicon);

    // Preload critical fonts
    const fontLinks = [
      'https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;600;700&display=swap',
      'https://fonts.googleapis.com/css2?family=Satoshi:wght@400;500;600&display=swap'
    ];

    fontLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Mark fonts as loaded after a short delay
    const timer = setTimeout(() => setFontsLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="dark">
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Background overlay to prevent section bleeding */}
        <div className="fixed inset-0 bg-black z-0" />
        
        {/* Navigation */}
        <ModernNavigation />
        
        {/* Interactive elements */}
        <ScrollProgress />
        <CursorFollower />
        {fontsLoaded && <FloatingParticles />}
        
        {/* Main content with proper layering and isolation */}
        <div id="home" className="relative z-10 isolate">
          <ModernHero />
        </div>
        <div id="gallery" className="relative z-30 isolate mt-8 sm:mt-12 lg:mt-16">
          <ModernGallery />
        </div>
        <div id="philosophy" className="relative z-40 isolate mt-8 sm:mt-12 lg:mt-16">
          <ModernPhilosophy />
        </div>
        <div id="join" className="relative z-50 isolate mt-8 sm:mt-12 lg:mt-16">
          <ModernJoinUs />
        </div>
      </div>
    </div>
  );
}