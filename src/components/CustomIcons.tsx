// Custom SVG icons and illustrations
export const TimelineIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="timelineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFB97D" />
        <stop offset="100%" stopColor="#FF8C42" />
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="80" fill="none" stroke="url(#timelineGrad)" strokeWidth="2" opacity="0.3" />
    <circle cx="100" cy="100" r="60" fill="none" stroke="url(#timelineGrad)" strokeWidth="2" opacity="0.5" />
    <circle cx="100" cy="100" r="40" fill="none" stroke="url(#timelineGrad)" strokeWidth="2" opacity="0.7" />
    <circle cx="100" cy="100" r="20" fill="url(#timelineGrad)" opacity="0.9" />
    <path d="M100 40 L160 100 L100 160 L40 100 Z" fill="none" stroke="white" strokeWidth="2" opacity="0.8" />
    <circle cx="100" cy="40" r="4" fill="white" />
    <circle cx="160" cy="100" r="4" fill="white" />
    <circle cx="100" cy="160" r="4" fill="white" />
    <circle cx="40" cy="100" r="4" fill="white" />
  </svg>
);

export const AIIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9333EA" />
        <stop offset="50%" stopColor="#FFB97D" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
    </defs>
    <polygon points="100,20 180,60 180,140 100,180 20,140 20,60" fill="none" stroke="url(#aiGrad)" strokeWidth="3" />
    <polygon points="100,40 160,70 160,130 100,160 40,130 40,70" fill="url(#aiGrad)" opacity="0.1" />
    <circle cx="70" cy="80" r="8" fill="url(#aiGrad)" />
    <circle cx="130" cy="80" r="8" fill="url(#aiGrad)" />
    <circle cx="100" cy="120" r="12" fill="url(#aiGrad)" />
    <path d="M70 80 Q100 100 130 80" stroke="url(#aiGrad)" strokeWidth="2" fill="none" />
    <path d="M60 60 L80 80 M140 60 L120 80 M85 135 L115 135" stroke="url(#aiGrad)" strokeWidth="2" />
  </svg>
);

export const HeartIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6B9D" />
        <stop offset="100%" stopColor="#FFB97D" />
      </linearGradient>
    </defs>
    <path d="M100 180 C100 180 20 120 20 80 C20 60 40 40 60 40 C80 40 100 60 100 60 C100 60 120 40 140 40 C160 40 180 60 180 80 C180 120 100 180 100 180 Z" 
          fill="url(#heartGrad)" opacity="0.8" />
    <path d="M100 160 C100 160 40 110 40 80 C40 65 50 55 65 55 C80 55 100 75 100 75 C100 75 120 55 135 55 C150 55 160 65 160 80 C160 110 100 160 100 160 Z" 
          fill="none" stroke="white" strokeWidth="2" opacity="0.6" />
    <circle cx="75" cy="75" r="3" fill="white" opacity="0.8" />
    <circle cx="125" cy="75" r="3" fill="white" opacity="0.8" />
  </svg>
);

export const FilmIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="filmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFB97D" />
        <stop offset="100%" stopColor="#FF8C42" />
      </linearGradient>
    </defs>
    <rect x="30" y="60" width="140" height="80" rx="8" fill="url(#filmGrad)" opacity="0.2" />
    <rect x="35" y="65" width="130" height="70" rx="4" fill="none" stroke="url(#filmGrad)" strokeWidth="2" />
    <circle cx="60" cy="100" r="20" fill="none" stroke="url(#filmGrad)" strokeWidth="2" />
    <circle cx="140" cy="100" r="20" fill="none" stroke="url(#filmGrad)" strokeWidth="2" />
    <rect x="90" y="85" width="20" height="30" fill="url(#filmGrad)" opacity="0.6" />
    <path d="M50 50 L60 40 L140 40 L150 50" stroke="url(#filmGrad)" strokeWidth="2" />
    <path d="M50 150 L60 160 L140 160 L150 150" stroke="url(#filmGrad)" strokeWidth="2" />
    <circle cx="45" cy="80" r="3" fill="url(#filmGrad)" />
    <circle cx="45" cy="100" r="3" fill="url(#filmGrad)" />
    <circle cx="45" cy="120" r="3" fill="url(#filmGrad)" />
    <circle cx="155" cy="80" r="3" fill="url(#filmGrad)" />
    <circle cx="155" cy="100" r="3" fill="url(#filmGrad)" />
    <circle cx="155" cy="120" r="3" fill="url(#filmGrad)" />
  </svg>
);

export const ParticleField = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="particleGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFB97D" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#FFB97D" stopOpacity="0" />
      </radialGradient>
    </defs>
    {Array.from({ length: 50 }, (_, i) => (
      <circle
        key={i}
        cx={Math.random() * 400}
        cy={Math.random() * 400}
        r={Math.random() * 3 + 1}
        fill="url(#particleGrad)"
        opacity={Math.random() * 0.6 + 0.2}
      />
    ))}
  </svg>
);

export const WavePattern = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <defs>
      <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFB97D" stopOpacity="0.3" />
        <stop offset="50%" stopColor="#FF8C42" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#FFB97D" stopOpacity="0.3" />
      </linearGradient>
    </defs>
    <path d="M0,100 Q200,50 400,100 T800,100 L800,200 L0,200 Z" fill="url(#waveGrad)" />
    <path d="M0,120 Q200,70 400,120 T800,120" stroke="#FFB97D" strokeWidth="2" fill="none" opacity="0.5" />
  </svg>
);
