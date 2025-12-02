import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { SKILLS, EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  // Transform skills for Radar Chart
  const chartData = SKILLS.map(s => ({
    subject: s.name,
    A: s.level,
    fullMark: 100
  }));

  return (
    <section className="py-24 bg-neutral-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text & Exp */}
          <div>
            <h2 className="text-5xl font-bold mb-8">超越 <br/><span className="text-neon-cyan">像素</span></h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              我是一名多学科设计师和开发者，热衷于创造直观、动态且美观的数字体验。我的方法结合了工程的精确性与艺术的混沌感。
            </p>

            <h3 className="text-2xl font-bold mb-6 border-b border-gray-800 pb-2">以此为业</h3>
            <div className="space-y-8">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative pl-6 border-l-2 border-gray-800 hover:border-neon-purple transition-colors">
                  <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                  <p className="text-neon-purple text-sm mb-1">{exp.company} | {exp.period}</p>
                  <p className="text-gray-500 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Chart */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[400px] w-full bg-neutral-900/30 rounded-full p-4 border border-gray-800 relative"
          >
             <h3 className="absolute top-0 left-0 w-full text-center mt-4 text-gray-500 uppercase tracking-widest text-xs">技能矩阵</h3>
             <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                <PolarGrid stroke="#333" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#888', fontSize: 12 }} />
                <Radar
                  name="技能值"
                  dataKey="A"
                  stroke="#b026ff"
                  strokeWidth={2}
                  fill="#b026ff"
                  fillOpacity={0.3}
                />
                <Tooltip 
                    contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }}
                    itemStyle={{ color: '#fff' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;