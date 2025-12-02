import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const categories = ['全部', 'Web', 'Mobile', '3D', 'Branding'];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('全部');

  const filteredProjects = PROJECTS.filter(
    (p) => filter === '全部' || p.category === filter
  );

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">精选作品</h2>
          <div className="h-1 w-24 bg-neon-purple" />
        </div>
        
        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-sm tracking-wider rounded-full border transition-all ${
                filter === cat
                  ? 'border-neon-cyan text-neon-cyan bg-neon-cyan/10'
                  : 'border-gray-800 text-gray-400 hover:border-gray-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className={`group relative rounded-xl overflow-hidden cursor-pointer bg-neutral-900 ${
                project.featured && 'md:col-span-2 md:row-span-2'
              }`}
            >
              <Link to={`/project/${project.id}`} className="block w-full h-full">
                <div className="aspect-[4/3] md:aspect-auto md:h-full w-full relative overflow-hidden">
                   <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full transform md:translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-neon-cyan text-xs uppercase tracking-widest mb-2 font-bold">
                        {project.category}
                      </p>
                      <h3 className={`font-bold text-white leading-none mb-2 ${
                        project.featured ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
                      }`}>
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity delay-75">
                         {project.description}
                      </p>
                    </div>
                    <div className="bg-white text-black p-3 rounded-full md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 hover:bg-neon-cyan hover:text-black">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Portfolio;