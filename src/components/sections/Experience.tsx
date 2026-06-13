import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, CheckCircle, Briefcase } from 'lucide-react';
import { EXPERIENCE_DATA, FAQS_DATA } from '../../data/data';

export default function Experience() {
  const [activeFaqId, setActiveFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 bg-neutral-50/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Experience Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold tracking-tight text-gray-900 uppercase"
            id="experience-heading"
          >
            CAREER & EXPERIENCE
          </h2>
          <p className="text-xs text-gray-400 font-mono tracking-wider uppercase mt-1">
            My current role and everything I build at Afamia Software, Dubai.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-6" id="experience-list">
          {EXPERIENCE_DATA.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-150 shadow-xs relative overflow-hidden"
            >
              {/* Top info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-semibold text-gray-900 tracking-tight mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-sans text-gray-500 uppercase tracking-wide">
                    <Briefcase size={14} className="text-[#5D3FD3]" />
                    <span className="font-semibold text-gray-800">{exp.company}</span>
                    <span>·</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="shrink-0 bg-violet-50 text-[#5D3FD3] px-4 py-2 rounded-full text-[11px] font-mono font-semibold uppercase tracking-widest border border-violet-100">
                  {exp.period}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm font-light text-gray-600 leading-relaxed mb-8 max-w-4xl">
                {exp.description}
              </p>

              {/* Responsibilities Grid */}
              <div className="bg-neutral-50/70 p-6 sm:p-8 rounded-2xl border border-gray-100">
                <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-6">Day-to-day Responsibilities</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex gap-3">
                      <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-[13px] font-semibold text-gray-800 uppercase tracking-wide mb-1.5">{resp.label}</h5>
                        <p className="text-xs text-gray-500 font-light leading-relaxed">{resp.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
