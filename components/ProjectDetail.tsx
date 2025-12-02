import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Layers } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) return <div className="text-white text-center pt-32">未找到项目</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-12 min-h-screen bg-black"
    >
      <div className="max-w-6xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center text-gray-500 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" /> 返回作品集
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
             <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              {project.title}
            </motion.h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {project.description}
            </p>
            
            <div className="grid grid-cols-2 gap-6 text-sm">
              <div className="border-l border-gray-800 pl-4">
                <div className="flex items-center text-gray-500 mb-1"><User size={14} className="mr-2"/> 客户</div>
                <div className="text-white font-medium">{project.client}</div>
              </div>
              <div className="border-l border-gray-800 pl-4">
                 <div className="flex items-center text-gray-500 mb-1"><Calendar size={14} className="mr-2"/> 年份</div>
                 <div className="text-white font-medium">{project.year}</div>
              </div>
               <div className="border-l border-gray-800 pl-4 col-span-2">
                 <div className="flex items-center text-gray-500 mb-1"><Layers size={14} className="mr-2"/> 技术栈</div>
                 <div className="flex flex-wrap gap-2 mt-2">
                   {project.technologies.map(tech => (
                     <span key={tech} className="px-2 py-1 bg-gray-900 rounded text-neon-cyan text-xs">
                       {tech}
                     </span>
                   ))}
                 </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-2xl shadow-neon-purple/20"
            >
              <img src={project.image} alt={project.title} className="w-full object-cover" />
            </motion.div>
          </div>
        </div>

        {/* Content Placeholder for 'Process' */}
        <div className="max-w-3xl mx-auto border-t border-gray-900 pt-16">
          <h2 className="text-3xl font-bold text-white mb-8">设计过程</h2>
          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p>
              挑战在于创造一种既反映品牌核心价值，又突破当前网络技术界限的数字体验。我们从对现有标识的全面审计开始，深入挖掘品牌背后的故事与愿景。
            </p>
            <p>
              通过利用 {project.technologies[0]} 和 {project.technologies[1]}，我们即使在移动设备上也能实现 60fps 的流畅动画。关键在于优化资产管道和使用高效的渲染技术，确保视觉冲击力不以牺牲性能为代价。
            </p>
            <div className="grid grid-cols-2 gap-4 my-8">
              <div className="h-64 bg-gray-900 rounded-lg animate-pulse"></div>
              <div className="h-64 bg-gray-900 rounded-lg animate-pulse delay-75"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;