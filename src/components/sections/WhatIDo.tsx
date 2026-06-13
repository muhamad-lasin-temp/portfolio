import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, Layers, Monitor, Code, Cpu, Database } from 'lucide-react';
import { SERVICES_DATA } from '../../data/data';

// Reusable scroll-reveal wrapper
const FadeInWhenVisible = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  className?: string;
}) => {
  const dirMap = {
    up: { y: 40, x: 0 },
    left: { y: 0, x: -40 },
    right: { y: 0, x: 40 },
    none: { y: 0, x: 0 },
  };
  return (
    <motion.div
      initial={{ opacity: 0, ...dirMap[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function WhatIDo() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'web-dev':
        return <Code className="text-violet-600" size={16} />;
      case 'software-dev':
        return <Database className="text-violet-600" size={16} />;
      case 'ai-ml':
        return <Cpu className="text-violet-600" size={16} />;
      case 'web-design':
        return <Monitor className="text-violet-600" size={16} />;
      case 'ui-ux':
        return <Layers className="text-violet-600" size={16} />;
      default:
        return <Layers className="text-violet-600" size={16} />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title Block */}
        <FadeInWhenVisible direction="up">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold tracking-tight text-gray-900 mb-2 uppercase"
            id="services-heading"
          >
            WHAT I CAN DO FOR YOU
          </h2>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
          {/* Left Column: Introductions & Accordions */}
          <FadeInWhenVisible direction="left" delay={0.1} className="flex flex-col">
            <p
              className="text-sm font-light text-gray-650 leading-relaxed mb-8 max-w-lg"
              id="services-intro"
            >
              I build end-to-end business applications — accounting systems, CRM platforms, and HR software — owning the full lifecycle from requirements to deployment. I also integrate AI & ML technologies into ERP systems.
            </p>

            {/* Accordion List */}
            <div className="space-y-3" id="services-accordion-group">
              {SERVICES_DATA.map((service, i) => {
                const isExpanded = expandedId === service.id;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className={`rounded-2xl border transition-all duration-300 ${
                      isExpanded
                        ? 'bg-neutral-50/50 border-gray-200 shadow-xs'
                        : 'bg-white border-gray-150 hover:border-gray-250'
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(service.id)}
                      className="w-full flex items-center justify-between p-5 text-left font-sans font-medium text-sm tracking-wide text-gray-800 cursor-pointer"
                      id={`btn-service-${service.id}`}
                    >
                      <div className="flex items-center gap-3">
                        {getServiceIcon(service.id)}
                        <span className="font-semibold uppercase tracking-wide">{service.title}</span>
                      </div>
                      <motion.span
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-400"
                      >
                        <ChevronDown size={16} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 pt-0 text-xs sm:text-sm font-light text-gray-500 leading-relaxed border-t border-gray-100">
                            {service.description}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </FadeInWhenVisible>

          {/* Right Column: Tilted Workspace Image */}
          <FadeInWhenVisible direction="right" delay={0.2}>
            {/* Desktop Empty Space */}
            <div className="hidden lg:flex w-full h-[430px]" />

            {/* Mobile Animated Image elements */}
            <div className="flex justify-center items-center relative py-10 lg:hidden">
              {/* Background offset purple frame */}
              <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                whileInView={{ opacity: 0.9, rotate: 3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute w-72 h-[340px] sm:w-[410px] sm:h-[430px] bg-[#5D3FD3] rounded-3xl -mr-3 -mb-3 z-0 shadow-lg pointer-events-none"
              />

              {/* Main Workspace Frame — 3D tilt on hover */}
              <motion.div
                initial={{ opacity: 0, rotate: -6, y: 20 }}
                whileInView={{ opacity: 1, rotate: -3, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  rotate: 0,
                  scale: 1.03,
                  rotateY: 4,
                  rotateX: -2,
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformPerspective: 1000 }}
                className="relative w-72 h-[340px] sm:w-[410px] sm:h-[430px] bg-neutral-100 rounded-3xl overflow-hidden z-10 border-4 border-white cursor-pointer"
                id="tilted-workspace-card"
              >
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800"
                  alt="Development Environment"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 text-white z-10">
                  <span className="text-[10px] font-mono uppercase bg-white/20 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/10 tracking-widest">
                    Development Environment
                  </span>
                </div>
              </motion.div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
