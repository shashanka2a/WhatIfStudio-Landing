import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const films = [
  {
    title: "In Another Timeline",
    image: "https://images.unsplash.com/photo-1634660476928-63015cdbc6d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRpZ2l0YWwlMjBhcnQlMjBjaW5lbWF8ZW58MXx8fHwxNzU5NTg3MjYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Where paths diverged differently",
    duration: "4:32",
    year: "2024"
  },
  {
    title: "Love That Lasted",
    image: "https://images.unsplash.com/photo-1663286359796-b3da79054cab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwYWJzdHJhY3QlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1OTU4NzI2NXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Forever written in the stars",
    duration: "6:18",
    year: "2024"
  },
  {
    title: "Heroes Who Lived",
    image: "https://images.unsplash.com/photo-1630973981820-4a756320d1de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xvZ3JhcGhpYyUyMGdyYWRpZW50JTIwYWJzdHJhY3R8ZW58MXx8fHwxNzU5NTg3MjY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Courage that conquered fate",
    duration: "8:45",
    year: "2024"
  },
  {
    title: "Parallel Hearts",
    image: "https://images.unsplash.com/photo-1718498576347-b57e7bdf46a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZ2VvbWV0cmljJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzU5NTg3MjcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Two souls, infinite possibilities",
    duration: "5:27",
    year: "2024"
  },
  {
    title: "Temporal Echoes",
    image: "https://images.unsplash.com/photo-1523539090110-4deee7810c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhlcmVhbCUyMGxpZ2h0JTIwYWJzdHJhY3R8ZW58MXx8fHwxNzU5NTg3MjczfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "When time bends for love",
    duration: "7:03",
    year: "2024"
  },
  {
    title: "Digital Dreams",
    image: "https://images.unsplash.com/photo-1759184966994-475c86bdd9b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbHVpZCUyMGR5bmFtaWNzJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzU5NTg3Mjc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "AI crafted realities",
    duration: "3:52",
    year: "2024"
  }
];

export function Gallery() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0D1B2A] to-[#1B263B]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Reimagined Stories
          </h3>
          <p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Experience the power of alternate endings through our AI-crafted short films
          </p>
        </motion.div>

        {/* Refined Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {films.map((film, index) => (
            <motion.div
              key={film.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08, 
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
              className={`group relative rounded-xl overflow-hidden cursor-pointer bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/30 hover:border-[#FFB97D]/40 transition-all duration-300 backdrop-blur-sm ${
                index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="relative">
                <ImageWithFallback
                  src={film.image}
                  alt={film.title}
                  className={`w-full object-cover transition-all duration-500 group-hover:scale-105 ${
                    index === 0 ? 'h-[280px] md:h-[320px]' : 'h-[280px]'
                  }`}
                />
                
                {/* Gradient overlay with better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                
                {/* Film metadata */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="px-2 py-1 bg-[#FFB97D]/20 backdrop-blur-sm rounded-md text-xs font-medium text-[#FFB97D] border border-[#FFB97D]/30"
                  >
                    {film.year}
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="px-2 py-1 bg-black/40 backdrop-blur-sm rounded-md text-xs font-medium text-white/80"
                  >
                    {film.duration}
                  </motion.span>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.h4 
                    className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-[#FFB97D] transition-colors duration-300"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {film.title}
                  </motion.h4>
                  <p 
                    className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {film.description}
                  </p>
                </div>

                {/* Subtle play indicator */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-12 h-12 rounded-full bg-[#FFB97D]/90 backdrop-blur-sm flex items-center justify-center shadow-lg border border-[#FFB97D]/30">
                    <div className="w-0 h-0 border-l-4 border-l-black border-y-2 border-y-transparent ml-0.5" />
                  </div>
                </motion.div>

                {/* Micro-interaction: corner accent */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute bottom-6 right-6 w-2 h-2 rounded-full bg-[#FFB97D] shadow-lg shadow-[#FFB97D]/50"
                />

                {/* Subtle border glow on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0 rounded-xl border border-[#FFB97D]/30 pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
