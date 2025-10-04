import { motion } from 'motion/react';
import { Button } from './ui/button';

export function JoinUs() {
  return (
    <section className="min-h-screen bg-black flex items-center py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 10% 20%, #FFB97D 0%, transparent 30%)",
              "radial-gradient(circle at 90% 80%, #FFB97D 0%, transparent 30%)",
              "radial-gradient(circle at 50% 50%, #FFB97D 0%, transparent 30%)",
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute inset-0 opacity-5"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h3 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Join Our Universe of{' '}
              <span className="text-transparent bg-gradient-to-r from-[#FFB97D] to-[#FF8C42] bg-clip-text">
                Infinite Possibilities
              </span>
            </h3>
            
            <p 
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Have a story that deserves a different ending? We're listening. 
              Share your heartbreak, and let us rewrite it into something beautiful.
            </p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#FFB97D] to-[#FF8C42] hover:from-[#FF8C42] hover:to-[#FFB97D] text-black font-semibold px-8 py-4 text-lg transition-all duration-400 shadow-lg hover:shadow-xl hover:scale-105 group"
            >
              <span className="mr-2">Submit Your Story</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </Button>

            <Button 
              variant="outline"
              size="lg" 
              className="border-2 border-[#FFB97D] text-[#FFB97D] hover:bg-[#FFB97D] hover:text-black font-semibold px-8 py-4 text-lg transition-all duration-400 hover:scale-105 backdrop-blur-sm"
            >
              Follow @whatifstudio.art
            </Button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="pt-12 border-t border-gray-800"
          >
            <p 
              className="text-gray-500 mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Join thousands exploring alternate realities
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-600">
              <span>✦ AI-Powered Storytelling</span>
              <span>✦ Cinematic Quality</span>
              <span>✦ Emotional Healing</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#FFB97D] rounded-full opacity-20"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: typeof window !== 'undefined' ? window.innerHeight : 1000,
            }}
            animate={{
              y: -100,
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </section>
  );
}
