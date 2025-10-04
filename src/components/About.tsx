import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="min-h-screen bg-[#0D1B2A] flex items-center py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Poetic copy */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            What if stories could{' '}
            <span className="text-transparent bg-gradient-to-r from-[#FFB97D] to-[#FF8C42] bg-clip-text">
              change?
            </span>
          </h3>
          
          <div className="space-y-6 text-base md:text-lg text-gray-300 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            <p>
              Every heartbreak in fiction doesn't have to be final. Every tragic ending doesn't have to be the only truth.
            </p>
            <p>
              We believe in the power of "what if" — the infinite possibilities that exist in parallel timelines where love endures, heroes survive, and hope prevails.
            </p>
            <p>
              Through AI filmmaking, we're crafting beautiful alternate realities where different choices lead to different destinies.
            </p>
          </div>
        </motion.div>

        {/* Right - Video placeholder with parallax */}
        <motion.div
          style={{ y }}
          className="relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1633311905139-7b6088a69e33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBhYnN0cmFjdHxlbnwxfHx8fDE3NTk1ODcwNTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="AI Video Creation"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            
            {/* Video overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
              >
                <div className="w-0 h-0 border-l-8 border-l-white border-y-4 border-y-transparent ml-1" />
              </motion.div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FFB97D] to-[#FF8C42] rounded-2xl blur opacity-20 -z-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
