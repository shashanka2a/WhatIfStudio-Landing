'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  variant?: 'mark' | 'wordmark' | 'full';
}

// Cinematic Infinity Logo: Pure ∞ symbol with pivot point
export const WhatIfStudioLogo = ({ 
  className = "", 
  size = "md", 
  animated = true,
  variant = "full" 
}: LogoProps) => {
  const sizes = {
    sm: { width: 140, height: 80, fontSize: "10px", markWidth: 60, markHeight: 24 },
    md: { width: 180, height: 100, fontSize: "12px", markWidth: 75, markHeight: 30 },
    lg: { width: 240, height: 120, fontSize: "14px", markWidth: 100, markHeight: 40 },
    xl: { width: 320, height: 160, fontSize: "18px", markWidth: 135, markHeight: 54 }
  };

  const currentSize = sizes[size];

  const InfinityMark = ({ className: markClassName = "", standalone = false }: { 
    className?: string; 
    standalone?: boolean; 
  }) => (
    <motion.svg
      width={standalone ? currentSize.markWidth : undefined}
      height={standalone ? currentSize.markHeight : undefined}
      viewBox="0 0 100 40"
      className={markClassName}
      initial={animated ? { opacity: 0, scale: 0.8 } : {}}
      animate={animated ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <defs>
        {/* Main gradient: midnight indigo to amber rose */}
        <linearGradient id={`infinityGradient-${size}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0D1B2A" />
          <stop offset="35%" stopColor="#415A77" />
          <stop offset="65%" stopColor="#778DA9" />
          <stop offset="100%" stopColor="#FFB97D" />
        </linearGradient>

        {/* Glow effect for outer shadow */}
        <filter id={`infinityGlow-${size}`}>
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        {/* Pivot point glow */}
        <radialGradient id={`pivotGlow-${size}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFB97D" stopOpacity="0.8"/>
          <stop offset="50%" stopColor="#FF8C42" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#FFB97D" stopOpacity="0.0"/>
        </radialGradient>
      </defs>

      <g transform="translate(50, 20)">
        {/* Main infinity symbol - slightly asymmetrical for uniqueness */}
        {/* Width ≈ 2.5× height (80px width, 32px height) */}
        <motion.path
          d="M -38 0 
             C -38 -12, -28 -16, -19 -8
             C -10 0, -5 8, 0 0
             C 5 -8, 10 0, 19 8
             C 28 16, 40 12, 40 0
             C 40 12, 28 16, 19 8
             C 10 0, 5 8, 0 0
             C -5 -8, -10 0, -19 -8
             C -28 -16, -38 -12, -38 0 Z"
          fill="none"
          stroke={`url(#infinityGradient-${size})`}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={`url(#infinityGlow-${size})`}
          initial={animated ? { pathLength: 0, opacity: 0 } : {}}
          animate={animated ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 3, ease: "easeInOut" }}
        />

        {/* Alternate timeline pivot point at intersection */}
        <motion.circle
          cx="0"
          cy="0"
          r="3"
          fill={`url(#pivotGlow-${size})`}
          initial={animated ? { scale: 0, opacity: 0 } : {}}
          animate={animated ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 2.5, ease: "backOut" }}
        />

        {/* Central core dot */}
        <motion.circle
          cx="0"
          cy="0"
          r="1.5"
          fill="#FFB97D"
          filter={`url(#infinityGlow-${size})`}
          initial={animated ? { scale: 0, opacity: 0 } : {}}
          animate={animated ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 2.8, ease: "backOut" }}
        />

        {/* Subtle flow animation along the path */}
        <motion.circle
          r="1"
          fill="#FFB97D"
          opacity="0.6"
          animateMotion={animated ? {
            path: "M -38 0 C -38 -12, -28 -16, -19 -8 C -10 0, -5 8, 0 0 C 5 -8, 10 0, 19 8 C 28 16, 40 12, 40 0 C 40 12, 28 16, 19 8 C 10 0, 5 8, 0 0 C -5 -8, -10 0, -19 -8 C -28 -16, -38 -12, -38 0",
            transition: {
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }
          } : undefined}
        />

        {/* Temporal sparkles at key points */}
        {[
          { x: -19, y: 0, delay: 1.5 },
          { x: 19, y: 0, delay: 2.2 },
          { x: 0, y: 0, delay: 3.0 },
        ].map((sparkle, i) => (
          <motion.circle
            key={i}
            cx={sparkle.x}
            cy={sparkle.y}
            r="0.8"
            fill="#FFB97D"
            opacity="0.8"
            animate={animated ? {
              scale: [0, 1.5, 0],
              opacity: [0, 0.9, 0]
            } : {}}
            transition={animated ? {
              duration: 2.5,
              repeat: Infinity,
              delay: sparkle.delay,
              ease: "easeInOut"
            } : {}}
          />
        ))}
      </g>
    </motion.svg>
  );

  const WordMark = () => (
    <motion.div 
      className="flex items-center justify-center"
      initial={animated ? { opacity: 0, y: 10 } : {}}
      animate={animated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 2.0 }}
    >
      <span 
        className="font-semibold text-[#FFB97D] tracking-wide"
        style={{ 
          fontFamily: "'Inter', sans-serif",
          fontSize: currentSize.fontSize,
          textShadow: "0 0 20px rgba(255, 185, 125, 0.3)"
        }}
      >
        WhatIfStudio.art
      </span>
    </motion.div>
  );

  if (variant === "mark") {
    return <InfinityMark className={className} standalone={true} />;
  }

  if (variant === "wordmark") {
    return <WordMark />;
  }

  // Full logo with infinity mark + wordmark
  return (
    <motion.div 
      className={`flex flex-col items-center space-y-4 ${className}`}
      style={{ width: currentSize.width, height: currentSize.height }}
      initial={animated ? { opacity: 0, scale: 0.9 } : {}}
      animate={animated ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <InfinityMark />
      <WordMark />
    </motion.div>
  );
};

// Icon-only version for navigation and small spaces
export const IconOnlyLogo = ({ 
  size = 48, 
  animated = true,
  className = ""
}: { 
  size?: number; 
  animated?: boolean;
  className?: string;
}) => (
  <motion.svg
    width={size}
    height={size * 0.4} // Maintain 2.5:1 aspect ratio
    viewBox="0 0 100 40"
    className={className}
    initial={animated ? { opacity: 0, rotate: -45 } : {}}
    animate={animated ? { opacity: 1, rotate: 0 } : {}}
    transition={{ duration: 1.2, ease: "easeOut" }}
  >
    <defs>
      <linearGradient id={`iconGradient-${size}`} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0D1B2A" />
        <stop offset="35%" stopColor="#415A77" />
        <stop offset="65%" stopColor="#778DA9" />
        <stop offset="100%" stopColor="#FFB97D" />
      </linearGradient>

      <filter id={`iconFilter-${size}`}>
        <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
        <feMerge> 
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>

      <radialGradient id={`iconPivot-${size}`} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFB97D" stopOpacity="0.8"/>
        <stop offset="100%" stopColor="#FFB97D" stopOpacity="0.0"/>
      </radialGradient>
    </defs>

    <g transform="translate(50, 20)">
      {/* Simplified infinity for icon */}
      <motion.path
        d="M -32 0 
           C -32 -10, -24 -14, -16 -6
           C -8 2, -4 6, 0 0
           C 4 -6, 8 2, 16 6
           C 24 14, 32 10, 32 0
           C 32 10, 24 14, 16 6
           C 8 -2, 4 6, 0 0
           C -4 -6, -8 -2, -16 -6
           C -24 -14, -32 -10, -32 0 Z"
        fill="none"
        stroke={`url(#iconGradient-${size})`}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={`url(#iconFilter-${size})`}
        initial={animated ? { pathLength: 0 } : {}}
        animate={animated ? { pathLength: 1 } : {}}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      />

      {/* Pivot point */}
      <motion.circle
        cx="0"
        cy="0"
        r="2"
        fill={`url(#iconPivot-${size})`}
        initial={animated ? { scale: 0 } : {}}
        animate={animated ? { scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 2, ease: "backOut" }}
      />

      <motion.circle
        cx="0"
        cy="0"
        r="1"
        fill="#FFB97D"
        initial={animated ? { scale: 0 } : {}}
        animate={animated ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 2.3, ease: "backOut" }}
      />
    </g>
  </motion.svg>
);

// Favicon version - ultra minimal infinity
export const FaviconLogo = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8">
    <defs>
      <linearGradient id="faviconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0D1B2A" />
        <stop offset="100%" stopColor="#FFB97D" />
      </linearGradient>
    </defs>
    
    <circle cx="16" cy="16" r="15" fill="url(#faviconGradient)" />
    
    {/* Simplified infinity */}
    <path
      d="M 10 16 C 10 12, 14 12, 16 16 C 18 12, 22 12, 22 16 C 22 20, 18 20, 16 16 C 14 20, 10 20, 10 16"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    
    {/* Pivot dot */}
    <circle cx="16" cy="16" r="1.5" fill="white" />
  </svg>
);
