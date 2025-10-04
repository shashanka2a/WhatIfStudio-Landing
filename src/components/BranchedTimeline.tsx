'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

interface TimelineNode {
  id: string
  x: number
  y: number
  type: 'sad' | 'hopeful' | 'branch'
  title: string
  description: string
}

export const BranchedTimeline = ({ className = "" }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [activeNode, setActiveNode] = useState<string | null>(null)

  // Timeline nodes representing the story transformation
  const timelineNodes: TimelineNode[] = [
    {
      id: 'original',
      x: 10,
      y: 50,
      type: 'sad',
      title: 'Original Ending',
      description: 'The tragic conclusion that breaks hearts'
    },
    {
      id: 'branch1',
      x: 30,
      y: 30,
      type: 'branch',
      title: 'Possibility A',
      description: 'What if they had one more chance?'
    },
    {
      id: 'branch2',
      x: 30,
      y: 50,
      type: 'branch',
      title: 'Possibility B', 
      description: 'What if time could be rewritten?'
    },
    {
      id: 'branch3',
      x: 30,
      y: 70,
      type: 'branch',
      title: 'Possibility C',
      description: 'What if love conquered all?'
    },
    {
      id: 'hope1',
      x: 50,
      y: 25,
      type: 'hopeful',
      title: 'Reunion',
      description: 'They find each other across timelines'
    },
    {
      id: 'hope2',
      x: 50,
      y: 45,
      type: 'hopeful',
      title: 'Redemption',
      description: 'Past mistakes become future wisdom'
    },
    {
      id: 'hope3',
      x: 50,
      y: 65,
      type: 'hopeful',
      title: 'Transformation',
      description: 'Darkness transforms into light'
    },
    {
      id: 'finale',
      x: 75,
      y: 50,
      type: 'hopeful',
      title: 'Beautiful Ending',
      description: 'The story rewritten with hope'
    }
  ]

  // Connection paths between nodes
  const connections = [
    { from: 'original', to: 'branch1' },
    { from: 'original', to: 'branch2' },
    { from: 'original', to: 'branch3' },
    { from: 'branch1', to: 'hope1' },
    { from: 'branch2', to: 'hope2' },
    { from: 'branch3', to: 'hope3' },
    { from: 'hope1', to: 'finale' },
    { from: 'hope2', to: 'finale' },
    { from: 'hope3', to: 'finale' }
  ]

  const getNodeColor = (type: string) => {
    switch (type) {
      case 'sad': return '#415A77'
      case 'branch': return '#778DA9'
      case 'hopeful': return '#FFB97D'
      default: return '#778DA9'
    }
  }

  return (
    <div ref={containerRef} className={`relative w-full h-96 overflow-hidden ${className}`}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="sadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0D1B2A" />
            <stop offset="100%" stopColor="#415A77" />
          </linearGradient>
          
          <linearGradient id="branchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#415A77" />
            <stop offset="100%" stopColor="#778DA9" />
          </linearGradient>
          
          <linearGradient id="hopefulGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#778DA9" />
            <stop offset="100%" stopColor="#FFB97D" />
          </linearGradient>

          <filter id="timelineGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Sacred Timeline pattern */}
          <pattern id="sacredPattern" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.5" fill="#FFB97D" opacity="0.3" />
          </pattern>
        </defs>

        {/* Background cosmic web */}
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#sacredPattern)"
          opacity="0.1"
          animate={isInView ? {
            opacity: [0.1, 0.2, 0.1]
          } : {}}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Connection lines */}
        {connections.map((connection, index) => {
          const fromNode = timelineNodes.find(n => n.id === connection.from)
          const toNode = timelineNodes.find(n => n.id === connection.to)
          
          if (!fromNode || !toNode) return null

          return (
            <motion.path
              key={`connection-${index}`}
              d={`M ${fromNode.x} ${fromNode.y} Q ${(fromNode.x + toNode.x) / 2} ${(fromNode.y + toNode.y) / 2 - 5} ${toNode.x} ${toNode.y}`}
              fill="none"
              stroke="url(#branchGradient)"
              strokeWidth="0.5"
              opacity="0.6"
              filter="url(#timelineGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { 
                pathLength: 1, 
                opacity: 0.6 
              } : {}}
              transition={{
                duration: 2,
                delay: index * 0.2,
                ease: "easeOut"
              }}
            />
          )
        })}

        {/* Timeline nodes */}
        {timelineNodes.map((node, index) => (
          <g key={node.id}>
            {/* Node pulse ring */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="3"
              fill="none"
              stroke={getNodeColor(node.type)}
              strokeWidth="0.5"
              opacity="0.4"
              initial={{ r: 0, opacity: 0 }}
              animate={isInView ? {
                r: [3, 5, 3],
                opacity: [0.4, 0.8, 0.4]
              } : {}}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.3,
                ease: "easeInOut"
              }}
            />

            {/* Main node */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="2"
              fill={`url(${node.type === 'sad' ? '#sadGradient' : node.type === 'hopeful' ? '#hopefulGradient' : '#branchGradient'})`}
              filter="url(#timelineGlow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { 
                scale: 1, 
                opacity: 1 
              } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.5,
                transition: { duration: 0.2 }
              }}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              className="cursor-pointer"
            />

            {/* Node labels */}
            <motion.text
              x={node.x}
              y={node.y - 4}
              textAnchor="middle"
              fontSize="2"
              fill={getNodeColor(node.type)}
              opacity={activeNode === node.id ? 1 : 0}
              className="pointer-events-none"
              style={{ fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0, y: node.y - 2 }}
              animate={{
                opacity: activeNode === node.id ? 1 : 0,
                y: activeNode === node.id ? node.y - 4 : node.y - 2
              }}
              transition={{ duration: 0.2 }}
            >
              {node.title}
            </motion.text>
          </g>
        ))}

        {/* Multiverse web effect */}
        <motion.g opacity="0.2">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.circle
              key={`web-${i}`}
              cx={Math.random() * 100}
              cy={Math.random() * 100}
              r="0.5"
              fill="#FFB97D"
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.g>

        {/* Sacred Timeline main flow */}
        <motion.path
          d="M 10 50 Q 25 48 40 50 Q 55 52 70 50 Q 85 48 90 50"
          fill="none"
          stroke="url(#hopefulGradient)"
          strokeWidth="1"
          opacity="0.8"
          filter="url(#timelineGlow)"
          strokeDasharray="2 4"
          initial={{ strokeDashoffset: 0 }}
          animate={isInView ? {
            strokeDashoffset: [-6, 0]
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>

      {/* Active node tooltip */}
      {activeNode && (
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-lg p-3 max-w-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          {(() => {
            const node = timelineNodes.find(n => n.id === activeNode)
            return node ? (
              <>
                <h4 className="text-sm font-semibold text-[#FFB97D] mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {node.title}
                </h4>
                <p className="text-xs text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {node.description}
                </p>
              </>
            ) : null
          })()}
        </motion.div>
      )}
    </div>
  )
}

// Simplified version for smaller spaces
export const MiniTimeline = ({ className = "" }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true })

  return (
    <div ref={containerRef} className={`w-full h-16 ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="miniGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#415A77" />
            <stop offset="50%" stopColor="#778DA9" />
            <stop offset="100%" stopColor="#FFB97D" />
          </linearGradient>
        </defs>

        {/* Main timeline */}
        <motion.path
          d="M 5 10 Q 25 8 50 10 Q 75 12 95 10"
          fill="none"
          stroke="url(#miniGradient)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Branch points */}
        {[20, 50, 80].map((x, i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={10}
            r="2"
            fill="#FFB97D"
            initial={{ scale: 0 }}
            animate={isInView ? { 
              scale: [0, 1.2, 1],
            } : {}}
            transition={{ 
              duration: 0.5,
              delay: i * 0.3 + 1
            }}
          />
        ))}

        {/* Branching paths */}
        <motion.path
          d="M 20 10 Q 30 5 40 8"
          fill="none"
          stroke="#778DA9"
          strokeWidth="0.8"
          opacity="0.6"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        />
        
        <motion.path
          d="M 20 10 Q 30 15 40 12"
          fill="none"
          stroke="#778DA9"
          strokeWidth="0.8"
          opacity="0.6"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1, delay: 1.7 }}
        />
      </svg>
    </div>
  )
}
