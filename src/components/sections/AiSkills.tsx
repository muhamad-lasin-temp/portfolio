import { motion } from 'motion/react';
import { Cpu, Server, FunctionSquare, Network } from 'lucide-react';
import { AI_SKILLS_DATA } from '../../data/data';

export default function AiSkills() {
  const getIcon = (id: string) => {
    switch (id) {
      case 's1': return <Network size={20} className="text-[#5D3FD3]" />;
      case 's2': return <FunctionSquare size={20} className="text-[#5D3FD3]" />;
      case 's3': return <Server size={20} className="text-[#5D3FD3]" />;
      case 's4': return <Cpu size={20} className="text-[#5D3FD3]" />;
      default: return <Cpu size={20} className="text-[#5D3FD3]" />;
    }
  };

  return (
    <section id="ai-skills" className="py-24 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold tracking-tight text-gray-900 uppercase"
            id="skills-heading"
          >
            ARTIFICIAL INTELLIGENCE & ML
          </h2>
          <p className="text-xs text-gray-400 font-mono tracking-wider uppercase mt-1">
            Beyond software engineering — I integrate modern AI into real business systems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="skills-grid">
          {AI_SKILLS_DATA.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-neutral-50 p-6 sm:p-8 rounded-3xl border border-gray-150 shadow-xs hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-xs">
                  {getIcon(category.id)}
                </div>
                <h3 className="text-lg font-display font-semibold text-gray-900 tracking-wide uppercase">
                  {category.title}
                </h3>
              </div>
              
              <p className="text-sm font-light text-gray-500 mb-6 leading-relaxed">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono uppercase text-gray-700 bg-white border border-gray-200 py-1.5 px-3 rounded-full hover:border-[#5D3FD3]/50 hover:text-[#5D3FD3] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
