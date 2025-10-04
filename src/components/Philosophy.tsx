import { motion } from 'motion/react';

export function Philosophy() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#1B263B] to-[#0D1B2A] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-[#FFB97D] to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Refined headline */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span className="text-white">We rewrite endings that </span>
            <span className="relative">
              <span className="text-transparent bg-gradient-to-r from-[#FFB97D] to-[#FF8C42] bg-clip-text">
                broke our hearts
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FFB97D] to-[#FF8C42] origin-left"
              />
            </span>
          </motion.h2>
          
          {/* Concise supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Through AI filmmaking, we craft alternate realities where different choices lead to different destinies. Every story deserves a second chance.
          </motion.p>

          {/* Elegant stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-8 pt-8 max-w-2xl mx-auto"
          >
            {[
              { number: "∞", label: "Possible Endings" },
              { number: "1", label: "Beautiful Future" },
              { number: "?", label: "What If" }
            ].map((stat, i) => (
              <div key={i} className="group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl md:text-3xl font-bold text-[#FFB97D] mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {stat.number}
                </motion.div>
                <div 
                  className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
