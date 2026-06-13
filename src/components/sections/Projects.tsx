import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { ArrowUpRight, Check, Sparkles, X } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/data';
import { Project } from '../../types/types';

// 3D tilt card wrapper
function TiltCard({
  children,
  className,
  onClick,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -12;
    const rotateY = ((x / rect.width) - 0.5) * 12;
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    el.style.transition = 'transform 0.1s ease-out';
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
    el.style.transition = 'transform 0.5s ease-out';
  };

  return (
    <div
      ref={ref}
      onClick={onClick}
      id={id}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        willChange: 'transform',
        WebkitMaskImage: '-webkit-radial-gradient(white, black)'
      }}
    >
      {children}
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<string>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: '-80px' });

  const filterTabs = ['ALL', 'BUSINESS APPS', 'LIVE WEBSITES', 'PERSONAL'];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (filter === 'ALL') return true;
    if (filter === 'BUSINESS APPS') return project.category === 'BUSINESS APPS';
    if (filter === 'LIVE WEBSITES') return project.category === 'LIVE WEBSITES';
    if (filter === 'PERSONAL') return project.category === 'PERSONAL';
    return true;
  });

  return (
    <section id="projects" className="py-24 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headingRef}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold tracking-tight text-gray-900 uppercase"
              id="projects-heading"
            >
              FEATURED PROJECTS
            </h2>
            <p className="text-xs text-gray-400 font-mono tracking-wider uppercase mt-1">
              Curated selection of aesthetic digital craft
            </p>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            className="flex flex-wrap gap-2"
            id="project-filters-tabs"
            initial={{ opacity: 0, x: 20 }}
            animate={isHeadingInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {filterTabs.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setFilter(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-[10px] sm:text-xs font-sans font-medium tracking-wider uppercase border transition-all cursor-pointer ${
                  filter === tab
                    ? 'bg-black border-black text-white'
                    : 'bg-white border-gray-150 text-gray-500 hover:text-gray-900 hover:border-gray-250'
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8" id="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94, y: -10 }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <TiltCard
                  onClick={() => setSelectedProject(project)}
                  className="group relative bg-[#1A1A1A] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow cursor-pointer aspect-4/3"
                  id={`project-card-${project.id}`}
                >
                  {/* Image overlay */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-black/35 opacity-90 group-hover:opacity-95 transition-opacity" />

                  {/* Image */}
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    referrerPolicy="no-referrer"
                  />

                  {/* Top Badge */}
                  <div className="absolute top-5 left-5 z-20">
                    <span className="text-[9px] font-mono uppercase bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-full border border-white/15 tracking-widest font-semibold">
                      {project.category}
                    </span>
                  </div>

                  {/* Bottom Left Content */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 text-white flex flex-col gap-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] uppercase font-mono tracking-wider text-white/60 bg-white/5 py-0.5 px-2 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-md sm:text-lg font-display font-medium tracking-wide uppercase leading-tight group-hover:text-violet-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  {/* Expand hover button */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute top-5 right-5 z-20"
                  >
                    <div className="opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                      <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-black shadow-lg">
                        <ArrowUpRight size={16} />
                      </button>
                    </div>
                  </motion.div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 px-4 bg-gray-50 rounded-3xl border border-dashed border-gray-200"
          >
            <span className="text-gray-400 font-mono text-xs uppercase tracking-wider">
              No matching projects found
            </span>
          </motion.div>
        )}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              className="bg-white rounded-3xl overflow-hidden max-w-xl w-full shadow-2xl relative border border-gray-100"
              id="project-detail-modal"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-30 w-8 h-8 rounded-full bg-black/20 hover:bg-black/30 backdrop-blur-md text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={15} />
              </motion.button>

              {/* Cover Image */}
              <div className="h-56 relative bg-gray-100 overflow-hidden">
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <span className="text-[10px] font-mono tracking-widest text-violet-300 uppercase bg-black/30 px-2.5 py-1 rounded-full border border-white/10">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Detail Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="p-6 sm:p-8"
              >
                <h3 className="text-lg sm:text-xl font-display font-semibold uppercase text-gray-900 tracking-tight mb-2">
                  {selectedProject.title}
                </h3>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono uppercase text-gray-500 bg-gray-100 py-1 px-2.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light mb-6">
                  {selectedProject.description || "Comprehensive software system built to enhance business operations."}
                </p>

                <div className="space-y-3 bg-neutral-50 p-4 rounded-2xl border border-gray-150 mb-6">
                  <div className="flex items-center justify-between text-xs font-light">
                    <span className="text-gray-400 font-mono uppercase">Platform:</span>
                    <span className="font-semibold text-emerald-600 flex items-center gap-1">
                      <Check size={11} /> Web Application
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {selectedProject.link && (
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      href={selectedProject.link}
                      target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 px-4 bg-black text-white hover:bg-neutral-800 rounded-2xl text-center text-xs uppercase font-sans font-medium tracking-wider transition-all"
                  >
                      Launch Live Site
                    </motion.a>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedProject(null)}
                    className="py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-2xl text-xs uppercase font-sans font-semibold tracking-wider transition-all cursor-pointer"
                  >
                    Close
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
