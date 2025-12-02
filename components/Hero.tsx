import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center bg-black">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        {/* Large abstract 3D shape or architectural detail */}
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
          alt="Abstract Background" 
          className="w-full h-full object-cover opacity-60"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-end pb-32 md:pb-0 md:h-full md:items-center">
        
        {/* Text Content */}
        <div className="md:col-span-8 md:pt-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-neon-cyan" />
            <span className="text-neon-cyan tracking-[0.3em] text-sm font-medium uppercase">
              数字工匠 / 创意开发
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9] tracking-tight mix-blend-overlay"
          >
            无界<br />
            <span className="text-white mix-blend-normal">构想</span>
          </motion.h1>
          
           <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="absolute top-0 left-0 text-6xl md:text-8xl lg:text-9xl font-bold text-transparent stroke-white border-white leading-[0.9] tracking-tight opacity-20 pointer-events-none select-none hidden md:block"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
          >
            <div className="max-w-7xl mx-auto px-6 pt-[calc(50vh-140px)]">
             无界<br />构想
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-xl text-gray-300 max-w-lg leading-relaxed font-light"
          >
            在代码与艺术的交汇处，我构建具有深度的沉浸式数字体验。探索视觉叙事的新维度。
          </motion.p>
        </div>

        {/* Decorative Element / Secondary Image */}
        <div className="hidden md:block md:col-span-4 relative h-full">
           {/* Can act as a secondary visual anchor */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.5, delay: 0.4 }}
             className="absolute bottom-32 right-0 w-full aspect-[3/4] overflow-hidden rounded-sm border border-white/10 backdrop-blur-sm bg-white/5"
           >
             <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-transparent mix-blend-screen" />
             <div className="p-8 h-full flex flex-col justify-end">
                <div className="text-4xl font-bold text-white mb-2">2024</div>
                <div className="text-sm text-gray-400">精选集 Collection</div>
             </div>
           </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
        <ArrowDown className="text-white w-5 h-5 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;